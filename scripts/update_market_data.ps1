param(
  [string]$OutputPath = (Join-Path $PSScriptRoot "..\site\data\market-data.json")
)

$ErrorActionPreference = "Stop"

function Get-TextUtf8 {
  param([string]$Url, [hashtable]$Headers = @{})
  $client = New-Object System.Net.WebClient
  $client.Headers.Add("User-Agent", "Mozilla/5.0")
  foreach ($key in $Headers.Keys) {
    $client.Headers[$key] = [string]$Headers[$key]
  }
  $bytes = $client.DownloadData($Url)
  [System.Text.Encoding]::UTF8.GetString($bytes)
}

function Get-TextGb18030 {
  param([string]$Url)
  $client = New-Object System.Net.WebClient
  $client.Headers.Add("User-Agent", "Mozilla/5.0")
  $client.Headers.Add("Referer", "https://finance.sina.com.cn")
  $bytes = $client.DownloadData($Url)
  [System.Text.Encoding]::GetEncoding("GB18030").GetString($bytes)
}

function Get-DefaultAIndices {
  @(
    [ordered]@{
      market = "A-share"; name = "SSE Composite"; symbol = "sh000001"; price = 4036.59; changePct = 1.65
      dma = @{ ma20 = -0.73; ma50 = -1.4; ma100 = -0.77; ma200 = 0.63 }
      read = "Fallback from latest verified dataset"
    },
    [ordered]@{
      market = "A-share"; name = "ChiNext"; symbol = "sz399006"; price = 4018.17; changePct = 4.49
      dma = @{ ma20 = -2.17; ma50 = 0.69; ma100 = 9.43; ma200 = 17.51 }
      read = "Fallback from latest verified dataset"
    },
    [ordered]@{
      market = "A-share"; name = "CSI 300"; symbol = "sh000300"; price = 4876.31; changePct = 2.54
      dma = @{ ma20 = -0.22; ma50 = 0.07; ma100 = 2.54; ma200 = 4.03 }
      read = "Fallback from latest verified dataset"
    }
  )
}

function Get-SinaIndices {
  $url = "https://hq.sinajs.cn/list=sh000001,sz399001,sz399006,sh000300,sh000905,sh000852"
  $text = Get-TextGb18030 $url
  $map = @{
    "sh000001" = "SSE Composite"
    "sz399001" = "SZSE Component"
    "sz399006" = "ChiNext"
    "sh000300" = "CSI 300"
    "sh000905" = "CSI 500"
    "sh000852" = "CSI 1000"
  }
  $items = @()
  foreach ($line in $text -split "`n") {
    if ($line -match 'hq_str_([^=]+)="([^"]+)"') {
      $symbol = $Matches[1]
      $parts = $Matches[2] -split ","
      if ($parts.Count -gt 5) {
        $price = [double]$parts[3]
        $prev = [double]$parts[2]
        $changePct = if ($prev -ne 0) { (($price / $prev) - 1) * 100 } else { 0 }
        $items += [ordered]@{
          market = "A-share"
          name = $map[$symbol]
          symbol = $symbol
          price = [Math]::Round($price, 2)
          changePct = [Math]::Round($changePct, 2)
          dma = @{ ma20 = $null; ma50 = $null; ma100 = $null; ma200 = $null }
          read = "Latest quote updated, DMA requires historical recalculation"
        }
      }
    }
  }
  $items
}

function Get-EastmoneySectors {
  $url = "https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=12&po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:90+t:3&fields=f12,f14,f3,f62,f128,f136,f207"
  $json = Get-TextUtf8 $url | ConvertFrom-Json
  @($json.data.diff | ForEach-Object {
    [ordered]@{
      name = $_.f14
      changePct = [double]$_.f3
      inflowCnyBn = [Math]::Round(([double]$_.f62 / 100000000), 2)
      leader = $_.f128
      evidence = "Sector heat, verify with filings and financials"
    }
  })
}

function Get-NasdaqQuote {
  param([string]$Symbol, [string]$AssetClass)
  $headers = @{
    "User-Agent" = "Mozilla/5.0"
    "Accept" = "application/json"
  }
  $url = "https://api.nasdaq.com/api/quote/$Symbol/info?assetclass=$AssetClass"
  $json = Get-TextUtf8 $url $headers | ConvertFrom-Json
  $primary = $json.data.primaryData
  $price = [double](($primary.lastSalePrice -replace '[$,]', ''))
  $pctText = $primary.percentageChange -replace '[%+]', ''
  $pct = [double]$pctText
  if ($primary.percentageChange -match '^-') { $pct = -[Math]::Abs($pct) }
  [ordered]@{
    market = "US"
    name = $Symbol
    symbol = $Symbol
    price = [Math]::Round($price, 2)
    changePct = [Math]::Round($pct, 2)
    dma = @{ ma20 = $null; ma50 = $null; ma100 = $null; ma200 = $null }
    read = "Nasdaq latest quote"
  }
}

function Get-YahooChartQuote {
  param([string]$Symbol)
  $encoded = [System.Uri]::EscapeDataString($Symbol)
  $headers = @{
    "User-Agent" = "Mozilla/5.0"
    "Accept" = "application/json"
  }
  $url = "https://query1.finance.yahoo.com/v8/finance/chart/$encoded`?range=5d&interval=1d"
  $json = Get-TextUtf8 $url $headers | ConvertFrom-Json
  $result = @($json.chart.result)[0]
  if (-not $result) { throw "No Yahoo Finance chart result for $Symbol" }

  $meta = $result.meta
  $quote = @($result.indicators.quote)[0]
  $closes = @($quote.close | Where-Object { $_ -ne $null -and [double]$_ -gt 0 })
  if ($closes.Count -eq 0 -and -not $meta.regularMarketPrice) {
    throw "No Yahoo Finance close data for $Symbol"
  }

  $price = if ($meta.regularMarketPrice) { [double]$meta.regularMarketPrice } else { [double]$closes[$closes.Count - 1] }
  $prev = if ($meta.chartPreviousClose) {
    [double]$meta.chartPreviousClose
  } elseif ($closes.Count -gt 1) {
    [double]$closes[$closes.Count - 2]
  } else {
    $price
  }
  $changePct = if ($prev -gt 0) { (($price / $prev) - 1) * 100 } else { 0 }

  [ordered]@{
    symbol = $Symbol
    price = [Math]::Round($price, 2)
    changePct = [Math]::Round($changePct, 2)
    source = "Yahoo Finance"
    url = "https://finance.yahoo.com/quote/$encoded"
  }
}

function Get-DefaultUsSectors {
  @(
    [ordered]@{ name = "Semiconductors"; symbol = "SOXX"; changePct = 0; leader = "SOXX"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Technology"; symbol = "XLK"; changePct = 0; leader = "XLK"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Software"; symbol = "IGV"; changePct = 0; leader = "IGV"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Cloud"; symbol = "SKYY"; changePct = 0; leader = "SKYY"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Cybersecurity"; symbol = "CIBR"; changePct = 0; leader = "CIBR"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Robotics"; symbol = "BOTZ"; changePct = 0; leader = "BOTZ"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Communication"; symbol = "XLC"; changePct = 0; leader = "XLC"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Consumer Discretionary"; symbol = "XLY"; changePct = 0; leader = "XLY"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Industrials"; symbol = "XLI"; changePct = 0; leader = "XLI"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Financials"; symbol = "XLF"; changePct = 0; leader = "XLF"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Healthcare"; symbol = "XLV"; changePct = 0; leader = "XLV"; evidence = "Fallback sector ETF heat, refresh required" },
    [ordered]@{ name = "Energy"; symbol = "XLE"; changePct = 0; leader = "XLE"; evidence = "Fallback sector ETF heat, refresh required" }
  )
}

function Get-UsSectorHeat {
  $map = @(
    @{ name = "Semiconductors"; symbol = "SOXX" },
    @{ name = "Technology"; symbol = "XLK" },
    @{ name = "Software"; symbol = "IGV" },
    @{ name = "Cloud"; symbol = "SKYY" },
    @{ name = "Cybersecurity"; symbol = "CIBR" },
    @{ name = "Robotics"; symbol = "BOTZ" },
    @{ name = "Communication"; symbol = "XLC" },
    @{ name = "Consumer Discretionary"; symbol = "XLY" },
    @{ name = "Industrials"; symbol = "XLI" },
    @{ name = "Financials"; symbol = "XLF" },
    @{ name = "Healthcare"; symbol = "XLV" },
    @{ name = "Energy"; symbol = "XLE" }
  )
  $items = @()
  foreach ($entry in $map) {
    try {
      $quote = Get-NasdaqQuote $entry.symbol "etf"
      $items += [ordered]@{
        name = $entry.name
        symbol = $entry.symbol
        changePct = $quote.changePct
        price = $quote.price
        leader = $entry.symbol
        evidence = "Nasdaq ETF quote; use as industry heat, not direct company order evidence"
      }
    } catch {}
  }
  $items | Sort-Object -Property { [double]$_["changePct"] } -Descending
}

function Get-ChinaMacroData {
  @(
    [ordered]@{
      region = "China"; metric = "GDP growth"; value = "+4.7%"; delta = "2026 H1 YoY / Q2 +4.3%"
      read = "Growth remains positive, but Q2 slowed"; source = "NBS"
      url = "https://www.stats.gov.cn/english/PressRelease/202607/t20260717_1964160.html"
    },
    [ordered]@{
      region = "China"; metric = "Manufacturing PMI"; value = "50.3"; delta = "+0.3pct"
      read = "Back in expansion territory"; source = "NBS"
      url = "https://www.stats.gov.cn/sj/zxfb/202606/t20260630_1964032.html"
    },
    [ordered]@{
      region = "China"; metric = "Industrial output"; value = "+5.3%"; delta = "June 2026 YoY"
      read = "Production remains firm"; source = "NBS"
      url = "https://www.stats.gov.cn/sj/zxfb/202607/t20260715_1964123.html"
    },
    [ordered]@{
      region = "China"; metric = "Retail sales"; value = "+1.0%"; delta = "June 2026 YoY"
      read = "Consumption still soft"; source = "NBS"
      url = "https://www.stats.gov.cn/sj/zxfbhjd/202607/t20260715_1964127.html"
    },
    [ordered]@{
      region = "China"; metric = "CPI"; value = "+1.0%"; delta = "June 2026 YoY"
      read = "Mild inflation"; source = "NBS"
      url = "https://www.stats.gov.cn/sj/zxfbhjd/202607/t20260709_1964084.html"
    },
    [ordered]@{
      region = "China"; metric = "PPI"; value = "+4.1%"; delta = "June 2026 YoY"
      read = "Factory-gate prices remain firm"; source = "NBS"
      url = "https://www.stats.gov.cn/sj/zxfb/202607/t20260709_1964083.html"
    },
    [ordered]@{
      region = "China"; metric = "Fixed asset investment"; value = "-5.7%"; delta = "Jan-Jun 2026 YoY"
      read = "Investment remains a drag"; source = "NBS"
      url = "https://www.stats.gov.cn/english/PressRelease/202607/t20260717_1964158.html"
    },
    [ordered]@{
      region = "China"; metric = "Goods exports"; value = "+13.4%"; delta = "2026 H1 YoY"
      read = "External demand strong"; source = "GACC / Xinhua"
      url = "https://www.xinhuanet.com/20260714/5aaa930c87bd42e693acbfe3fbfbcb2a/c.html"
    },
    [ordered]@{
      region = "China"; metric = "FX reserves"; value = '$3.4163T'; delta = "June 2026, -0.75% MoM"
      read = "Reserve buffer still high"; source = "SAFE"
      url = "https://www.safe.gov.cn/qingdao/2026/0714/2956.html"
    }
  )
}

function Get-FredRows {
  param([string]$Series)
  $url = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=$Series"
  $request = [System.Net.WebRequest]::Create($url)
  $request.Method = "GET"
  $request.Timeout = 15000
  $request.ReadWriteTimeout = 15000
  $request.UserAgent = "Mozilla/5.0"
  $response = $request.GetResponse()
  try {
    $stream = $response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
    $text = $reader.ReadToEnd()
  } finally {
    if ($reader) { $reader.Dispose() }
    if ($response) { $response.Dispose() }
  }
  $lines = @($text -split "\r?\n" | Where-Object { $_ -and $_.Trim().Length -gt 0 })
  @($lines | ConvertFrom-Csv | Where-Object {
    $value = $_.PSObject.Properties[$Series].Value
    $value -and $value -ne "."
  })
}

function Get-PreciousMetals {
  param($ExistingPreciousMetals)

  try {
    $goldFuture = Get-YahooChartQuote "GC=F"
    $silverFuture = Get-YahooChartQuote "SI=F"
    $gold = Get-NasdaqQuote "GLD" "etf"
    $silver = Get-NasdaqQuote "SLV" "etf"
    $ratio = if ($silverFuture.price -gt 0) { [Math]::Round(($goldFuture.price / $silverFuture.price), 2) } else { $null }

    return @(
      [ordered]@{
        name = "Gold"
        symbol = "GC=F"
        proxy = "COMEX gold futures"
        price = $goldFuture.price
        changePct = $goldFuture.changePct
        pricingAnchor = "LBMA London spot gold reference"
        flowSymbol = "GLD"
        flowPrice = $gold.price
        flowChangePct = $gold.changePct
        role = "Macro hedge"
        status = "Watch"
        thesis = "Gold is first a macro hedge; miners are a later equity-chain extension"
        validation = "Confirm with COMEX GC, London spot reference, real rates, US dollar, central-bank demand, and GLD flows before mapping to miners"
        nextStep = "Track GC and the London spot reference first; consider GDX only after trend and fund-flow confirmation"
        source = "Yahoo Finance / COMEX GC + GLD; LBMA reference"
        url = $goldFuture.url
      },
      [ordered]@{
        name = "Silver"
        symbol = "SI=F"
        proxy = "COMEX silver futures"
        price = $silverFuture.price
        changePct = $silverFuture.changePct
        pricingAnchor = "LBMA London spot silver reference"
        flowSymbol = "SLV"
        flowPrice = $silver.price
        flowChangePct = $silver.changePct
        role = "High-beta precious metal"
        status = "Watch"
        thesis = "Silver is gold beta plus industrial demand, so confirmation must be stricter"
        validation = "Confirm with COMEX SI, London spot reference, gold trend, industrial demand, supply deficit, and SLV flows"
        nextStep = "Track SI as a macro asset; consider SIL or the silver chain only after demand confirmation"
        source = "Yahoo Finance / COMEX SI + SLV; LBMA reference"
        url = $silverFuture.url
      },
      [ordered]@{
        name = "Gold/Silver ratio"
        symbol = "GC/SI"
        proxy = "COMEX futures ratio"
        price = $ratio
        changePct = [Math]::Round($goldFuture.changePct - $silverFuture.changePct, 2)
        role = "Relative confirmation"
        status = "Gate"
        thesis = "Ratio repair decides whether silver is confirming or merely lagging gold"
        validation = "Silver leadership requires the ratio to fall while both metals stay above trend"
        nextStep = "Use ratio repair as the bridge from macro assets to miners or industrial-chain research"
        source = "Yahoo Finance / COMEX GC + SI"
        url = $goldFuture.url
      }
    )
  } catch {
    $fallback = @($ExistingPreciousMetals)
    if ($fallback.Count -gt 0) { return $fallback }
    return @(
      [ordered]@{
        name = "Gold"; symbol = "GC=F"; proxy = "COMEX gold futures"; price = 0; changePct = 0
        pricingAnchor = "LBMA London spot gold reference"; flowSymbol = "GLD"; flowPrice = 0; flowChangePct = 0
        role = "Macro hedge"; status = "Watch"
        thesis = "Gold is first a macro hedge; miners are a later equity-chain extension"
        validation = "Confirm with COMEX GC, London spot reference, real rates, US dollar, central-bank demand, and GLD flows before mapping to miners"
        nextStep = "Track GC and the London spot reference first; consider GDX only after trend and fund-flow confirmation"
        source = "Fallback"; url = "https://finance.yahoo.com/quote/GC%3DF"
      },
      [ordered]@{
        name = "Silver"; symbol = "SI=F"; proxy = "COMEX silver futures"; price = 0; changePct = 0
        pricingAnchor = "LBMA London spot silver reference"; flowSymbol = "SLV"; flowPrice = 0; flowChangePct = 0
        role = "High-beta precious metal"; status = "Watch"
        thesis = "Silver is gold beta plus industrial demand, so confirmation must be stricter"
        validation = "Confirm with COMEX SI, London spot reference, gold trend, industrial demand, supply deficit, and SLV flows"
        nextStep = "Track SI as a macro asset; consider SIL or the silver chain only after demand confirmation"
        source = "Fallback"; url = "https://finance.yahoo.com/quote/SI%3DF"
      }
    )
  }
}

function Get-PreciousSignals {
  param($ExistingPreciousSignals)

  $fredValue = "Real rates / dollar / policy"
  $fredRead = "Real rates and the dollar decide the macro tailwind or headwind; price strength needs flow or safe-haven demand when rates stay high"
  try {
    $realRate = Get-FredLatest "DFII10"
    $dollar = Get-FredLatest "DTWEXBGS"
    $fredValue = "Real rate $([Math]::Round($realRate.value, 2).ToString("0.00"))% / Dollar $([Math]::Round($dollar.value, 1))"
    $fredRead = "FRED confirms the rate and dollar backdrop; use this as the first gate before treating metals strength as more than price momentum"
  } catch {
    $fallback = @($ExistingPreciousSignals | Where-Object { $_.key -eq "fred_macro" })[0]
    if ($fallback) {
      $fredValue = $fallback.value
      $fredRead = $fallback.read
    }
  }

  @(
    [ordered]@{
      key = "fred_macro"
      label = "FRED macro pressure"
      value = $fredValue
      status = "Official data"
      role = "Core judgment factor"
      cadence = "Daily / weekly"
      read = $fredRead
      source = "FRED API"
      url = "https://fred.stlouisfed.org/legal/"
    },
    [ordered]@{
      key = "wgc_gold"
      label = "WGC gold flows"
      value = "Gold ETF flows / central-bank demand"
      status = "Official research factor"
      role = "Core judgment factor"
      cadence = "Weekly / monthly"
      read = "ETF flows and central-bank demand decide whether gold strength has fund-flow and reserve-demand support"
      source = "World Gold Council"
      url = "https://www.gold.org/goldhub/data/gold-etfs-holdings-and-flows"
    },
    [ordered]@{
      key = "silver_institute"
      label = "Silver Institute demand"
      value = "Supply deficit / industrial demand"
      status = "Official research factor"
      role = "Core judgment factor"
      cadence = "Annual / periodic"
      read = "Supply deficit and industrial demand decide whether silver can move from gold beta into an industrial-chain thesis"
      source = "Silver Institute"
      url = "https://silverinstitute.org/silver-supply-demand/"
    },
    [ordered]@{
      key = "price_reference"
      label = "Price trend reference"
      value = "Delayed public market reference"
      status = "Reference only"
      role = "Trend reference"
      cadence = "Daily"
      read = "COMEX/Yahoo delayed prices are trend references only; they are not redistributed as official CME or LBMA quote data"
      source = "Delayed public market reference"
      url = "https://finance.yahoo.com/quote/GC%3DF"
    }
  )
}

function Ensure-PreciousMetalsWatchItem {
  param($ExistingWatchItems)

  function U {
    param([string]$Base64)
    [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Base64))
  }

  $itemName = U "6LS16YeR5bGe5a6P6KeC6LWE5Lqn"
  $items = @($ExistingWatchItems | Where-Object { $_.item -ne $itemName })
  $items += [ordered]@{
    item = $itemName
    metric = U "Q09NRVggR0MvU0kg57q957qm5pyf6LSn44CB5Lym5pWm546w6LSn5a6a5Lu35Y+C6ICD44CBR0xEL1NMViDotYTph5HmtYHjgIHlrp7pmYXliKnnjoflkoznvo7lhYM="
    priority = U "5Lit6auY"
    status = U "6KeC5a+f"
    window = U "5q+P5pel5a6P6KeC6LWE5Lqn5pu05pawIC8g5q+P5ZGoIEVURiDotYTph5HmtYEgLyBMQk1BIOWumuS7t+WPguiAgw=="
    trigger = U "57q957qm5pyf6LSn6LaL5Yq/44CB5Lym5pWm546w6LSn5Y+j5b6E5ZKMIEVURiDotYTph5HmtYHlkIzml7bnoa7orqTvvJvlho3or4TkvLAgR0RY44CBU0lM44CB6YeR55+/6IKh5ZKM55m96ZO25Lqn5Lia6ZO+"
    relatedSymbols = @("GC=F", "SI=F", "GLD", "SLV")
    lastCheck = (Get-Date).ToString("yyyy-MM-dd")
    events = @(
      [ordered]@{
        date = (Get-Date).ToString("yyyy-MM-dd")
        from = U "5pyq57qz5YWl"
        to = U "6KeC5a+f"
        reason = U "5YWI5oqK6buE6YeR5ZKM55m96ZO25L2c5Li65a6P6KeC6LWE5Lqn5Yqg5YWlIEheM++8mkNPTUVYIOe7meS6pOaYk+S7t+agvO+8jOS8puaVpueOsOi0p+e7meWumuS7t+WPo+W+hO+8jEVURiDotYTph5HmtYHnu5nmi6XmjKTluqbpqozor4E="
        evidence = U "Q09NRVggR0MvU0njgIHkvKbmlabnjrDotKflj4LogIPjgIFHTEQvU0xWIOaKpeS7t+OAgeWunumZheWIqeeOh+OAgee+juWFg+WSjCBFVEYg6LWE6YeR5rWB"
        source = U "WWFob28gRmluYW5jZSAvIExCTUEgLyBXR0MgLyBTaWx2ZXIgSW5zdGl0dXRlIC8gRlJFRA=="
      }
    )
  }
  return $items
}
function Get-FredLatest {
  param([string]$Series)
  try {
    $rows = @(Get-FredRows $Series)
    if ($rows.Count -eq 0) { throw "No FRED rows for $Series" }
    $row = $rows[$rows.Count - 1]
    [ordered]@{
      date = $row.observation_date
      value = [double]$row.PSObject.Properties[$Series].Value
      rows = $rows
    }
  } catch {
    $helper = Join-Path $PSScriptRoot "fetch_fred_latest.mjs"
    $json = & node $helper $Series
    if ($LASTEXITCODE -ne 0 -or -not $json) { throw "No FRED fallback value for $Series" }
    $latest = $json | ConvertFrom-Json
    [ordered]@{
      date = $latest.date
      value = [double]$latest.value
      rows = @()
    }
  }
}

function Format-SignedPct {
  param([double]$Value, [int]$Digits = 1)
  $sign = if ($Value -gt 0) { "+" } else { "" }
  "$sign$([Math]::Round($Value, $Digits))%"
}

function Get-DefaultUsMacroData {
  @(
    [ordered]@{ region = "United States"; metric = "Fed funds target range"; value = "3.50%-3.75%"; delta = "Latest FOMC range"; read = "Policy rate still caps valuation expansion"; source = "Federal Reserve"; url = "https://fred.stlouisfed.org/series/DFEDTARU" },
    [ordered]@{ region = "United States"; metric = "CPI YoY"; value = "+2.2%"; delta = "FRED latest"; read = "Inflation is the rate-cut gatekeeper"; source = "FRED / BLS"; url = "https://fred.stlouisfed.org/series/CPIAUCSL" },
    [ordered]@{ region = "United States"; metric = "Unemployment rate"; value = "4.2%"; delta = "FRED latest"; read = "Labor market still orderly"; source = "FRED / BLS"; url = "https://fred.stlouisfed.org/series/UNRATE" },
    [ordered]@{ region = "United States"; metric = "Real GDP"; value = "+2.1%"; delta = "QoQ SAAR"; read = "Growth remains positive"; source = "FRED / BEA"; url = "https://fred.stlouisfed.org/series/A191RL1Q225SBEA" },
    [ordered]@{ region = "United States"; metric = "10Y Treasury yield"; value = "4.57%"; delta = "FRED latest"; read = "Discount-rate pressure remains high"; source = "FRED / Treasury"; url = "https://fred.stlouisfed.org/series/DGS10" },
    [ordered]@{ region = "United States"; metric = "Retail sales MoM"; value = "+0.2%"; delta = "FRED latest"; read = "Demand still expanding"; source = "FRED / Census"; url = "https://fred.stlouisfed.org/series/RSAFS" },
    [ordered]@{ region = "United States"; metric = "Nonfarm payrolls"; value = "+57k"; delta = "Monthly change"; read = "Hiring positive but slower"; source = "FRED / BLS"; url = "https://fred.stlouisfed.org/series/PAYEMS" }
  )
}

function Get-UsMacroData {
  $lower = Get-FredLatest "DFEDTARL"
  $upper = Get-FredLatest "DFEDTARU"
  $cpi = Get-FredLatest "CPIAUCSL"
  $cpiRows = @($cpi.rows)
  $cpiPrior = [double]$cpiRows[$cpiRows.Count - 13].PSObject.Properties["CPIAUCSL"].Value
  $cpiYoy = (($cpi.value / $cpiPrior) - 1) * 100
  $unrate = Get-FredLatest "UNRATE"
  $gdp = Get-FredLatest "A191RL1Q225SBEA"
  $tenYear = Get-FredLatest "DGS10"
  $retail = Get-FredLatest "RSAFS"
  $retailRows = @($retail.rows)
  $retailPrev = [double]$retailRows[$retailRows.Count - 2].PSObject.Properties["RSAFS"].Value
  $retailMom = (($retail.value / $retailPrev) - 1) * 100
  $payrolls = Get-FredLatest "PAYEMS"
  $payrollRows = @($payrolls.rows)
  $payrollPrev = [double]$payrollRows[$payrollRows.Count - 2].PSObject.Properties["PAYEMS"].Value
  $payrollDelta = [Math]::Round($payrolls.value - $payrollPrev, 0)
  $payrollSign = if ($payrollDelta -gt 0) { "+" } else { "" }

  @(
    [ordered]@{
      region = "United States"; metric = "Fed funds target range"; value = "$([Math]::Round($lower.value, 2).ToString("0.00"))%-$([Math]::Round($upper.value, 2).ToString("0.00"))%"
      delta = $upper.date; read = "Policy rate still caps valuation expansion"; source = "FRED / Federal Reserve"
      url = "https://fred.stlouisfed.org/series/DFEDTARU"
    },
    [ordered]@{
      region = "United States"; metric = "CPI YoY"; value = Format-SignedPct $cpiYoy 1
      delta = $cpi.date; read = "Inflation is the rate-cut gatekeeper"; source = "FRED / BLS"
      url = "https://fred.stlouisfed.org/series/CPIAUCSL"
    },
    [ordered]@{
      region = "United States"; metric = "Unemployment rate"; value = "$([Math]::Round($unrate.value, 1))%"
      delta = $unrate.date; read = "Labor market still orderly"; source = "FRED / BLS"
      url = "https://fred.stlouisfed.org/series/UNRATE"
    },
    [ordered]@{
      region = "United States"; metric = "Real GDP"; value = Format-SignedPct $gdp.value 1
      delta = "QoQ SAAR, $($gdp.date)"; read = "Growth remains positive"; source = "FRED / BEA"
      url = "https://fred.stlouisfed.org/series/A191RL1Q225SBEA"
    },
    [ordered]@{
      region = "United States"; metric = "10Y Treasury yield"; value = "$([Math]::Round($tenYear.value, 2).ToString("0.00"))%"
      delta = $tenYear.date; read = "Discount-rate pressure remains high"; source = "FRED / Treasury"
      url = "https://fred.stlouisfed.org/series/DGS10"
    },
    [ordered]@{
      region = "United States"; metric = "Retail sales MoM"; value = Format-SignedPct $retailMom 1
      delta = $retail.date; read = "Demand still expanding"; source = "FRED / Census"
      url = "https://fred.stlouisfed.org/series/RSAFS"
    },
    [ordered]@{
      region = "United States"; metric = "Nonfarm payrolls"; value = "$payrollSign$([Math]::Round($payrollDelta, 0))k"
      delta = "Monthly change, $($payrolls.date)"; read = "Hiring positive but slower"; source = "FRED / BLS"
      url = "https://fred.stlouisfed.org/series/PAYEMS"
    }
  )
}

$existingPath = Resolve-Path $OutputPath
$existingText = [System.IO.File]::ReadAllText($existingPath.Path, [System.Text.Encoding]::UTF8)
$existing = $existingText | ConvertFrom-Json
$indices = @()
try {
  $aIndices = @(Get-SinaIndices)
  if ($aIndices.Count -eq 0) { throw "No A-share data returned" }
  $indices += $aIndices
} catch {
  $fallbackA = @($existing.indices | Where-Object { $_.symbol -match "^(sh|sz)" })
  if ($fallbackA.Count -eq 0) { $fallbackA = Get-DefaultAIndices }
  $indices += $fallbackA
}
foreach ($symbol in @("SPY", "QQQ", "SOXX")) {
  try { $indices += Get-NasdaqQuote $symbol "etf" } catch {}
}
try { $sectors = Get-EastmoneySectors } catch { $sectors = $existing.sectors }
try {
  $usSectors = @(Get-UsSectorHeat)
  if ($usSectors.Count -eq 0) { throw "No US sector heat returned" }
} catch {
  $usSectors = @($existing.usSectors)
  if ($usSectors.Count -eq 0) { $usSectors = Get-DefaultUsSectors }
}
$macro = @()
$macro += Get-ChinaMacroData
try {
  $macro += @(Get-UsMacroData)
} catch {
  $macro += Get-DefaultUsMacroData
}
$preciousMetals = @(Get-PreciousMetals $existing.preciousMetals)
$preciousSignals = @(Get-PreciousSignals $existing.preciousSignals)
$watchItems = @(Ensure-PreciousMetalsWatchItem $existing.watchItems)

$updated = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:sszzz")
  nextScheduledUpdate = "Daily 15:30 Beijing time"
  sourcePolicy = $existing.sourcePolicy
  macro = $macro
  preciousMetals = $preciousMetals
  preciousSignals = $preciousSignals
  indices = $indices
  sectors = $sectors
  usSectors = $usSectors
  companies = $existing.companies
  passList = $existing.passList
  hypothesisFlow = $existing.hypothesisFlow
  watchItems = $watchItems
  sources = $existing.sources
}

$jsonOut = $updated | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText($existingPath.Path, $jsonOut, [System.Text.UTF8Encoding]::new($false))
Write-Output "Updated $OutputPath"

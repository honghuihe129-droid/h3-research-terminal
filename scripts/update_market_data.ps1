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
  $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20 -Headers @{ "User-Agent" = "Mozilla/5.0" }
  $text = [string]$response.Content
  $lines = @($text -split "\r?\n" | Where-Object { $_ -and $_.Trim().Length -gt 0 })
  @($lines | ConvertFrom-Csv | Where-Object {
    $value = $_.PSObject.Properties[$Series].Value
    $value -and $value -ne "."
  })
}

function Get-PreciousMetals {
  param($ExistingPreciousMetals)

  try {
    $gold = Get-NasdaqQuote "GLD" "etf"
    $silver = Get-NasdaqQuote "SLV" "etf"
    $ratio = if ($silver.price -gt 0) { [Math]::Round(($gold.price / $silver.price), 2) } else { $null }

    return @(
      [ordered]@{
        name = "Gold"
        symbol = "GLD"
        proxy = "SPDR Gold Shares"
        price = $gold.price
        changePct = $gold.changePct
        role = "Macro hedge"
        status = "Watch"
        thesis = "Gold is a macro hedge, not an equity-chain signal yet"
        validation = "Confirm with real rates, US dollar, central-bank demand, and ETF flows before mapping to miners"
        nextStep = "Track gold first; consider GDX only after trend and fund flow confirmation"
        source = "Nasdaq / GLD"
        url = "https://www.nasdaq.com/market-activity/etf/gld"
      },
      [ordered]@{
        name = "Silver"
        symbol = "SLV"
        proxy = "iShares Silver Trust"
        price = $silver.price
        changePct = $silver.changePct
        role = "High-beta precious metal"
        status = "Watch"
        thesis = "Silver is gold beta plus industrial demand, so confirmation must be stricter"
        validation = "Confirm with gold trend, industrial demand, supply deficit, and gold/silver ratio repair"
        nextStep = "Track silver as a macro asset; consider SIL or the silver chain only after demand confirmation"
        source = "Nasdaq / SLV"
        url = "https://www.nasdaq.com/market-activity/etf/slv"
      },
      [ordered]@{
        name = "Gold/Silver ratio"
        symbol = "GLD/SLV"
        proxy = "ETF proxy ratio"
        price = $ratio
        changePct = [Math]::Round($gold.changePct - $silver.changePct, 2)
        role = "Relative confirmation"
        status = "Gate"
        thesis = "Ratio repair decides whether silver is confirming or merely lagging gold"
        validation = "Silver leadership requires the ratio to fall while both metals stay above trend"
        nextStep = "Use ratio repair as the bridge from macro asset to miners or industrial-chain research"
        source = "Nasdaq / GLD + SLV"
        url = "https://www.nasdaq.com/market-activity/etf/gld"
      }
    )
  } catch {
    $fallback = @($ExistingPreciousMetals)
    if ($fallback.Count -gt 0) { return $fallback }
    return @(
      [ordered]@{
        name = "Gold"; symbol = "GLD"; proxy = "SPDR Gold Shares"; price = 0; changePct = 0
        role = "Macro hedge"; status = "Watch"
        thesis = "Gold is a macro hedge, not an equity-chain signal yet"
        validation = "Confirm with real rates, US dollar, central-bank demand, and ETF flows before mapping to miners"
        nextStep = "Track gold first; consider GDX only after trend and fund flow confirmation"
        source = "Fallback"; url = "https://www.nasdaq.com/market-activity/etf/gld"
      },
      [ordered]@{
        name = "Silver"; symbol = "SLV"; proxy = "iShares Silver Trust"; price = 0; changePct = 0
        role = "High-beta precious metal"; status = "Watch"
        thesis = "Silver is gold beta plus industrial demand, so confirmation must be stricter"
        validation = "Confirm with gold trend, industrial demand, supply deficit, and gold/silver ratio repair"
        nextStep = "Track silver as a macro asset; consider SIL or the silver chain only after demand confirmation"
        source = "Fallback"; url = "https://www.nasdaq.com/market-activity/etf/slv"
      }
    )
  }
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
    metric = U "R0xEL1NMViDku7fmoLzjgIHph5Hpk7bmr5TjgIHlrp7pmYXliKnnjofjgIHnvo7lhYPlkowgRVRGIOi1hOmHkea1gQ=="
    priority = U "5Lit6auY"
    status = U "6KeC5a+f"
    window = U "5q+P5pel5a6P6KeC6LWE5Lqn5pu05pawIC8g5q+P5ZGoIEVURiDotYTph5HmtYE="
    trigger = U "R0xEL1NMViDotovlir/lkowgRVRGIOi1hOmHkea1geWQjOaXtuehruiupO+8m+WGjeivhOS8sCBHRFjjgIFTSUzjgIHph5Hnn7/ogqHlkoznmb3pk7bkuqfkuJrpk74="
    relatedSymbols = @("GLD", "SLV")
    lastCheck = (Get-Date).ToString("yyyy-MM-dd")
    events = @(
      [ordered]@{
        date = (Get-Date).ToString("yyyy-MM-dd")
        from = U "5pyq57qz5YWl"
        to = U "6KeC5a+f"
        reason = U "5YWI5oqK6buE6YeR5ZKM55m96ZO25L2c5Li65a6P6KeC6LWE5Lqn5Yqg5YWlIEheM++8jOS4jeaApeedgOaJqeWxleWIsOefv+iCoeWSjOeZvemTtuS6p+S4mumTvg=="
        evidence = U "R0xEL1NMViDmiqXku7fjgIHph5Hpk7bmr5TjgIHlrp7pmYXliKnnjofjgIHnvo7lhYPlkowgRVRGIOi1hOmHkea1gQ=="
        source = "Nasdaq / WGC / Silver Institute / FRED"
      }
    )
  }
  return $items
}
function Get-FredLatest {
  param([string]$Series)
  $rows = @(Get-FredRows $Series)
  if ($rows.Count -eq 0) { throw "No FRED rows for $Series" }
  $row = $rows[$rows.Count - 1]
  [ordered]@{
    date = $row.observation_date
    value = [double]$row.PSObject.Properties[$Series].Value
    rows = $rows
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
$watchItems = @(Ensure-PreciousMetalsWatchItem $existing.watchItems)

$updated = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:sszzz")
  nextScheduledUpdate = "Daily 15:30 Beijing time"
  sourcePolicy = $existing.sourcePolicy
  macro = $macro
  preciousMetals = $preciousMetals
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

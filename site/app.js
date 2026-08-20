const DATA_URL = "./data/market-data.json";

const i18n = {
  "en-US": {
    htmlLang: "en-US",
    unknown: "Unknown",
    schedule: "Daily 15:30 Beijing time",
    loadFailed: "Data load failed",
    leader: "Leader",
    growth: "Growth delivery",
    quality: "Quality factor",
    metricType: "Metric",
    navWatchlist: "Watchlist",
    navResearch: "Research",
    navMacro: "Macro",
    navLog: "Log",
    navAbout: "About",
    languageLabel: "LANG",
    searchPlaceholder: "SEARCH_",
    frameworkOnline: "FRAMEWORK_ONLINE",
    openResearchMatrix: "OPEN_RESEARCH_MATRIX",
    updatedLabel: "Data updated at",
    loading: "Loading",
    activeTitle: "H^3 Active Watchlist",
    activeBody: "Start from market state, industry themes, evidence level, and validation queue. Keep only research targets that can be verified.",
    dailyMarket: "Market",
    dailyTheme: "Theme",
    dailyVerify: "Verify",
    verdictTitle: "H^3 Daily Verdict",
    verdictSub: "market soil / theme / evidence / action",
    verdictMarket: "Market soil",
    verdictTheme: "Industrial clue",
    verdictEvidence: "Evidence gate",
    verdictAction: "Research action",
    verdictMacro: "Macro gate",
    dailyPositive: "risk appetite positive",
    dailyDefensive: "risk appetite defensive",
    dailyMixed: "risk appetite mixed",
    dataFeedReady: "DATA_FEED_READY",
    heatmapTitle: "Theme Heatmap",
    heatmapSub: "A-share sectors + US industry ETFs",
    watchMetalsTitle: "Precious Metals",
    watchMetalsSub: "gold / silver / macro asset reference",
    watchMetalsRead: "Delayed price reference only; judgment comes from FRED, WGC, and Silver Institute factors",
    watchMetalsBoundary: "Trend reference, not official redistributable quote data",
    goldMonitorTitle: "Gold Trade Monitor",
    goldMonitorSub: "main-trade gates",
    goldMonitorMacroGate: "Macro gate",
    goldMonitorFlowGate: "Flow gate",
    goldMonitorCentralBankGate: "Central-bank gate",
    goldMonitorExpansionGate: "Expansion gate",
    goldMonitorInvalidationGate: "Invalidation gate",
    goldMonitorMacroRead: "Real rates, the dollar, and long yields decide whether gold strength is macro-supported",
    goldMonitorFlowRead: "ETF flow confirms whether price strength has fund-flow support",
    goldMonitorCentralBankRead: "Central-bank demand is the durable reserve-demand floor",
    goldMonitorExpansionWait: "Silver and miners stay second-layer until the ratio repairs or silver leads",
    goldMonitorExpansionImproving: "Ratio repair is improving; start reviewing silver beta and miners",
    goldMonitorInvalidationRead: "Watch a real-rate rebound, dollar squeeze, ETF outflows, or continued ratio rise",
    goldMonitorTrack: "TRACK",
    goldMonitorConfirm: "CONFIRM",
    goldMonitorWait: "WAIT",
    goldMonitorRisk: "RISK",
    goldMonitorCentralBankValue: "WGC central-bank demand",
    goldMonitorInvalidationValue: "Rates up / dollar up / flows out",
    validationTitle: "Validation Queue",
    validationSub: "heat to next checks",
    qualityTitle: "Data Quality",
    qualityStatus: "PASS",
    qualityNote: "Deployment is blocked if validation fails.",
    queueQuestion: "Question",
    queueNextCheck: "Next check",
    queueEvidence: "Evidence level",
    queueMetric: "Heat",
    queueStatus: "Status",
    queueWindow: "Window",
    queueTrigger: "Trigger",
    queueRelated: "Related",
    queueLastCheck: "Last check",
    queueTopUsQuestion: "Is industry heat backed by AI capex revision?",
    queueTopUsNext: "Check NVDA, AVGO, TSMC, MSFT, GOOG, AMZN, META guidance.",
    queueTopAQuestion: "Can the sector move be mapped to revenue, orders, or margin?",
    queueTopANext: "Check filings, revenue split, order visibility, and exchange disclosures.",
    queueCompanyQuestion: "Is the strongest research name still supported by fundamentals?",
    queueCompanyNext: "Check latest guidance, gross margin, cash flow, and estimate revisions.",
    queueWatchQuestion: "What must be verified before upgrading the hypothesis?",
    industryHeat: "Industry heat",
    financialValidation: "Financial validation",
    watchItemLabel: "Watch item",
    qualityUpdated: "Updated",
    qualityIndices: "Indices",
    qualityASectors: "A-share sectors",
    qualityUsSectors: "US ETFs",
    qualityCompanies: "Research pool",
    coreTitle: "Research Core",
    coreSub: "thesis / evidence / elasticity / next validation",
    coreThesis: "Active thesis",
    coreEvidence: "Evidence map",
    coreElasticity: "Financial elasticity",
    coreNextCheck: "Next validation",
    coreDirect: "direct",
    coreSupplyChain: "supply-chain",
    coreResearchPool: "research pool",
    coreQualityAnchor: "Quality anchor",
    researchTitle: "In-Depth Research",
    researchBody: "Serenity Alpha, TAM-Adj-PEG, GF-DMA, Bayesian Valuation. Turn market heat into a traceable research framework.",
    evidenceFirst: "EVIDENCE_FIRST",
    frameworkFlowTitle: "Hypothesis Flow",
    frameworkFlowSub: "news to investable hypothesis",
    thCompany: "Company",
    thChain: "Chain",
    thEvidence: "Evidence level",
    thLatest: "Latest validation",
    thPricingRisk: "Pricing risk",
    thNext: "Next step",
    thStatus: "Status",
    detailTitle: "Research Object",
    detailSub: "status / decision / framework",
    detailClose: "Close",
    detailSelect: "DETAIL",
    detailStatus: "Status",
    detailDecision: "Decision",
    detailCatalyst: "Next catalyst",
    detailUpdated: "Updated",
    detailEvidenceScore: "Evidence",
    detailValuationScore: "Valuation",
    detailFramework: "Framework read",
    detailLatest: "Latest validation",
    detailAction: "Next step",
    evidenceMapTitle: "Evidence map",
    evidenceSourceType: "Source type",
    evidenceSource: "Source",
    evidenceFinancial: "Financial statement",
    evidenceStatus: "Evidence status",
    evidenceLatest: "Latest read",
    evidenceCompany: "Company / filing",
    evidenceExchange: "Exchange disclosure",
    evidenceMarket: "Market data",
    evidenceIndustry: "Industry data",
    evidenceVerified: "Verified",
    evidencePending: "Needs verification",
    evidenceMapped: "Mapped but indirect",
    detailUpgrade: "Upgrade condition",
    detailDowngrade: "Downgrade condition",
    detailInvalidation: "Invalidation condition",
    detailHistory: "Decision log",
    eventTransition: "Transition",
    eventReason: "Reason",
    eventEvidence: "Evidence",
    eventSource: "Source",
    watchLatestEvent: "Latest event",
    logTitle: "Research Log",
    logBody: "Every upgrade, downgrade, open validation, and evidence change should become a traceable research event.",
    logStatus: "DECISION_HISTORY",
    logStreamTitle: "Decision Stream",
    logStreamSub: "company events + validation events",
    logCompany: "Company",
    logValidation: "Validation",
    aboutTitle: "About H^3",
    aboutBody: "A public research operating system for turning market moves into verifiable investment hypotheses",
    aboutStatus: "METHOD_FIRST",
    aboutHeroTitle: "Market heat is not proof. H^3 shows the verification path",
    aboutHeroTitleLines: ["Market heat", "is not proof", "H^3 shows", "the verification path"],
    aboutHeroBody: "This site turns a fast market move into a slower, inspectable research chain: what moved, why it may matter, what evidence supports it, how it reaches financial statements, and what would change the judgment",
    aboutSignalEvidence: "Evidence first",
    aboutSignalEvidenceBody: "Separate clues from proof before upgrading a thesis",
    aboutSignalNoRec: "No direct recommendation",
    aboutSignalNoRecBody: "The output is a research structure, not a trade instruction",
    aboutSignalLog: "Decision log",
    aboutSignalLogBody: "Judgments should leave a trail that can be reviewed",
    aboutFlowTitle: "Research chain",
    aboutStepMarketTitle: "Market move",
    aboutStepMarketBody: "Index, sector, and theme heat identify where attention should go",
    aboutStepClueTitle: "Industrial clue",
    aboutStepClueBody: "Demand, capex, supply-chain, or policy signals become a hypothesis",
    aboutStepEvidenceTitle: "Evidence gate",
    aboutStepEvidenceBody: "Company filings, exchange disclosures, and official data decide whether heat becomes proof",
    aboutStepFinancialTitle: "Financial mapping",
    aboutStepFinancialBody: "The clue must map to revenue, margin, cash flow, or valuation duration",
    aboutStepDecisionTitle: "Decision condition",
    aboutStepDecisionBody: "Every thesis needs upgrade, downgrade, and invalidation conditions",
    aboutPurposeTitle: "What this site is for",
    aboutPurposeBody: "H^3 is built for disciplined research, not stock picking; it shows how a market move becomes a verifiable thesis",
    aboutLogicTitle: "Our logic",
    aboutLogicBody: "Start with market soil, find the industrial clue, test the evidence, map it to financial statements, then define what would change the judgment",
    aboutFocusTitle: "What we focus on",
    aboutFocusBody: "We focus on AI infrastructure, cloud capex, GPU, ASIC, HBM, optical modules, AI networking, domestic compute, advanced packaging, precious metals, liquidity, and valuation pressure",
    aboutUseTitle: "How to use it",
    aboutUseBody: "Read Daily Verdict for the action, Research for the evidence, Macro for the market soil, and Log for how judgments evolve",
    aboutWhyTitle: "Why we do this",
    aboutWhyBody: "Markets reward evidence, not confidence. H^3 makes every thesis state what would confirm it, weaken it, or prove it wrong",
    aboutDeveloperTitle: "Developer",
    aboutDeveloperBody: "小贺同学",
    aboutContactTitle: "Business contact",
    aboutContactBody: "honghuihe129@gmail.com",
    aboutDisclaimerTitle: "Boundary",
    aboutDisclaimerBody: "H^3 provides research structure and evidence tracking only. It does not provide direct stock recommendations",
    frameworkSerenity: "Serenity Alpha",
    frameworkTam: "TAM-Adj-PEG",
    frameworkGfDma: "GF-DMA",
    frameworkBayesian: "Bayesian Growth",
    macroTitle: "Macro Fundamentals",
    macroBody: "Read the market soil first, then judge industry themes and financial transmission.",
    officialFirst: "OFFICIAL_SOURCE_FIRST",
    macroConsole: "Macro Console",
    macroSub: "official and market data",
    macroRegimeTitle: "Market Soil",
    macroRegimeStatus: "Mixed growth / rate ceiling",
    macroRegimeRead: "China demand is uneven, US rates still cap long-duration growth, and risk appetite needs breadth confirmation",
    macroRegimeGrowth: "Growth pulse",
    macroRegimeRates: "Rate ceiling",
    macroRegimeRisk: "Risk appetite",
    macroRegimeTheme: "Theme heat",
    macroRegimeNext: "Next macro check",
    macroRegimeNextRead: "Watch CPI, FOMC language, PMI repair, and whether index breadth confirms theme heat",
    valuationTempTitle: "Valuation Temperature",
    valuationTempStatus: "Bubble pressure vs discount pocket",
    valuationTempRead: "Use valuation as a constraint: high duration assets need evidence upgrades; cheap areas need proof that earnings can recover",
    valuationBubble: "Bubble pressure",
    valuationDiscount: "Discount pocket",
    valuationPool: "Research pool pricing",
    valuationTrap: "Value trap check",
    valuationNext: "What would change it",
    valuationBubbleHigh: "Medium-high",
    valuationBubbleMedium: "Medium",
    valuationBubbleLow: "Low",
    valuationDiscountHigh: "Visible",
    valuationDiscountMedium: "Selective",
    valuationDiscountLow: "Limited",
    valuationTrapRead: "Low price is not enough; require revenue, margin, and cash-flow validation",
    valuationNextRead: "Bubble cools when price falls toward DMA or earnings catch up; discount upgrades only after financial evidence improves",
    preciousTitle: "Precious Metals Watch",
    preciousStatus: "Macro assets first",
    preciousRead: "Gold and silver enter H^3 as macro assets first. The judgment uses FRED, WGC, and Silver Institute factors; price is only a delayed trend reference, not an official redistributable quote source",
    preciousGoldGate: "Gold gate",
    preciousSilverGate: "Silver gate",
    preciousRatioGate: "Gold/silver ratio",
    pricingReference: "Pricing reference",
    flowProxy: "ETF flow proxy",
    preciousFactorsTitle: "Core factors",
    preciousFactorsRead: "Judgment is driven by macro pressure, gold flows, central-bank demand, silver supply deficit, and industrial demand",
    preciousBoundaryTitle: "Legal data boundary",
    preciousBoundaryRead: "Price data is displayed as delayed public trend reference only. H^3 does not redistribute CME or LBMA official quote data",
    preciousTakeaway: "Takeaway",
    preciousAction: "Action",
    preciousConclusionMacroHedgeTitle: "Macro hedge bid, not silver-led expansion",
    preciousConclusionMacroHedgeBody: "Gold and silver are both positive, but the gold/silver ratio is still rising. This points to a gold-led macro hedge, not yet a broad precious-metals risk-on trade",
    preciousConclusionMacroHedgeAction: "Keep gold and silver on the macro board; wait for silver leadership or ratio repair before adding miners",
    preciousConclusionSilverLeadTitle: "Silver beta is confirming",
    preciousConclusionSilverLeadBody: "Both metals are positive and the gold/silver ratio is falling. That is the first signal that silver beta and industrial demand may be joining the gold move",
    preciousConclusionSilverLeadAction: "Start a second-layer review of SIL, GDX, miners, and the silver industrial chain, but require flow and demand confirmation",
    preciousConclusionGoldOnlyTitle: "Gold-only defensive bid",
    preciousConclusionGoldOnlyBody: "Gold is positive while silver is not confirming. The signal is defensive and macro-led, with weak evidence for industrial beta",
    preciousConclusionGoldOnlyAction: "Track real rates, dollar pressure, and central-bank demand; do not extend into silver beta or miners yet",
    preciousConclusionWeakTitle: "No metals confirmation yet",
    preciousConclusionWeakBody: "The metals signal is not broad enough. Price action does not yet justify expanding the research map beyond macro monitoring",
    preciousConclusionWeakAction: "Stay in observation mode until either gold reclaims momentum or silver confirms with ratio repair",
    preciousNext: "Expansion rule",
    preciousNextRead: "Only expand toward GDX, SIL, miners, or the silver industrial chain after FRED macro pressure, WGC gold flows, and Silver Institute demand signals confirm together",
    watchTitle: "Watch Items",
    watchSub: "next validation round",
    radarPriority: "Priority mix",
    radarAShareHeat: "A-share heat",
    radarUsHeat: "US heat",
    radarMacroGate: "Macro gate",
    radarOpenChecks: "open checks",
    radarMacroGateDetail: "China demand plus US discount-rate ceiling",
    radarUpdateWindow: "Update window",
    signalTitle: "Macro Signal Board",
    signalSub: "growth / inflation / liquidity / risk",
    signalGrowth: "Growth pulse",
    signalInflation: "Inflation and rates",
    signalChinaDemand: "China demand",
    signalRisk: "Risk appetite",
    signalMixed: "Mixed",
    signalTight: "Restrictive",
    signalSoft: "Soft",
    signalPositive: "Positive",
    scopeLabel: "Market",
    scopeChinaShort: "China",
    scopeUsShort: "US",
    scopeAShareShort: "A-share",
    scopeChinaUnitedStates: "China + US",
    scopeUnitedStates: "United States",
    scopeChinaOnly: "China",
    scopeAShareUnitedStates: "A-share + US",
    signalGrowthRead: "Growth is still positive, but valuation upside depends on whether demand breadth improves.",
    signalInflationRead: "Rate and yield levels remain the main ceiling for long-duration growth assets.",
    signalChinaDemandRead: "Production is better than consumption; follow retail sales and investment repair.",
    signalRiskRead: "Cross-market risk appetite should be checked against index breadth, not single-theme heat.",
    footerStable: "H3_RESEARCH_SYSTEM_STABLE",
    footerNoRec: "NO_DIRECT_STOCK_RECOMMENDATION",
    footerPublic: "PUBLIC_DEPLOYMENT_READY",
    framework: [
      {
        key: "01",
        name: "Serenity Alpha",
        label: "News -> investment hypothesis",
        body: "Break news into real demand, revenue lines, margin paths, and validation checkpoints.",
        signal: "Industry-chain clue finder"
      },
      {
        key: "02",
        name: "TAM-Adj-PEG",
        label: "Growth-stock valuation",
        body: "Adjust PEG with TAM runway, growth duration, and company quality.",
        signal: "Valuation sanity check"
      },
      {
        key: "03",
        name: "GF-DMA",
        label: "Trend health",
        body: "Combine fundamental growth speed with 20/50/100/200DMA divergence.",
        signal: "Overheat detector"
      },
      {
        key: "04",
        name: "Bayesian Growth",
        label: "Pricing exhaustion",
        body: "Translate new information into 3-5 year growth-probability revisions.",
        signal: "FOMO filter"
      }
    ]
  },
  "zh-CN": {
    htmlLang: "zh-CN",
    unknown: "\u672a\u77e5",
    schedule: "\u6bcf\u65e5\u5317\u4eac\u65f6\u95f4 15:30",
    loadFailed: "\u6570\u636e\u8bfb\u53d6\u5931\u8d25",
    leader: "\u9886\u6da8",
    growth: "\u589e\u957f\u5151\u73b0",
    quality: "\u8d28\u91cf\u56e0\u5b50",
    metricType: "\u53e3\u5f84",
    navWatchlist: "Watchlist",
    navResearch: "Research",
    navMacro: "Macro",
    navLog: "Log",
    navAbout: "About",
    languageLabel: "\u8bed\u8a00",
    searchPlaceholder: "SEARCH_",
    frameworkOnline: "FRAMEWORK_ONLINE",
    openResearchMatrix: "OPEN_RESEARCH_MATRIX",
    updatedLabel: "\u6570\u636e\u66f4\u65b0\u65f6\u95f4",
    loading: "\u8bfb\u53d6\u4e2d",
    activeTitle: "H^3 Active Watchlist",
    activeBody: "\u4ece\u5e02\u573a\u72b6\u6001\u3001\u4ea7\u4e1a\u4e3b\u7ebf\u3001\u8bc1\u636e\u7b49\u7ea7\u548c\u9a8c\u8bc1\u961f\u5217\u51fa\u53d1\uff0c\u53ea\u4fdd\u7559\u53ef\u9a8c\u8bc1\u7684\u7814\u7a76\u5bf9\u8c61\u3002",
    dailyMarket: "\u5e02\u573a",
    dailyTheme: "\u4e3b\u7ebf",
    dailyVerify: "\u9a8c\u8bc1",
    verdictTitle: "H^3 \u6bcf\u65e5\u5224\u65ad",
    verdictSub: "\u5e02\u573a\u571f\u58e4 / \u4ea7\u4e1a\u7ebf\u7d22 / \u8bc1\u636e / \u52a8\u4f5c",
    verdictMarket: "\u5e02\u573a\u571f\u58e4",
    verdictTheme: "\u4ea7\u4e1a\u7ebf\u7d22",
    verdictEvidence: "\u8bc1\u636e\u95f8\u95e8",
    verdictAction: "\u7814\u7a76\u52a8\u4f5c",
    verdictMacro: "\u5b8f\u89c2\u95f8\u95e8",
    dailyPositive: "\u98ce\u9669\u504f\u597d\u504f\u79ef\u6781",
    dailyDefensive: "\u98ce\u9669\u504f\u597d\u504f\u9632\u5b88",
    dailyMixed: "\u98ce\u9669\u504f\u597d\u5206\u5316",
    dataFeedReady: "DATA_FEED_READY",
    heatmapTitle: "Theme Heatmap",
    heatmapSub: "A-share sectors + US industry ETFs",
    watchMetalsTitle: "\u8d35\u91d1\u5c5e",
    watchMetalsSub: "\u9ec4\u91d1 / \u767d\u94f6 / \u5b8f\u89c2\u8d44\u4ea7\u53c2\u8003",
    watchMetalsRead: "\u4ef7\u683c\u4ec5\u4f5c\u5ef6\u8fdf\u8d8b\u52bf\u53c2\u8003\uff1b\u5224\u65ad\u6765\u81ea FRED\u3001WGC \u548c Silver Institute \u56e0\u5b50",
    watchMetalsBoundary: "\u8d8b\u52bf\u53c2\u8003\uff0c\u4e0d\u662f\u5b98\u65b9\u53ef\u518d\u5206\u53d1\u62a5\u4ef7\u6570\u636e",
    goldMonitorTitle: "\u9ec4\u91d1\u4e3b\u7ebf\u76d1\u63a7",
    goldMonitorSub: "\u4e3b\u7ebf\u4ea4\u6613\u9a8c\u8bc1\u95e8",
    goldMonitorMacroGate: "\u5b8f\u89c2\u95e8",
    goldMonitorFlowGate: "\u8d44\u91d1\u6d41\u95e8",
    goldMonitorCentralBankGate: "\u592e\u884c\u9700\u6c42\u95e8",
    goldMonitorExpansionGate: "\u6269\u6563\u95e8",
    goldMonitorInvalidationGate: "\u5931\u6548\u95e8",
    goldMonitorMacroRead: "\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u548c\u957f\u503a\u5229\u7387\u51b3\u5b9a\u9ec4\u91d1\u5f3a\u52bf\u662f\u5426\u6709\u5b8f\u89c2\u652f\u6491",
    goldMonitorFlowRead: "ETF \u8d44\u91d1\u6d41\u9a8c\u8bc1\u4ef7\u683c\u5f3a\u52bf\u662f\u5426\u6709\u8d44\u91d1\u652f\u6491",
    goldMonitorCentralBankRead: "\u592e\u884c\u9700\u6c42\u662f\u50a8\u5907\u914d\u7f6e\u7684\u957f\u5468\u671f\u5e95\u5ea7",
    goldMonitorExpansionWait: "\u767d\u94f6\u548c\u77ff\u80a1\u5148\u653e\u5728\u7b2c\u4e8c\u5c42\uff0c\u7b49\u91d1\u94f6\u6bd4\u4fee\u590d\u6216\u767d\u94f6\u9886\u6da8",
    goldMonitorExpansionImproving: "\u91d1\u94f6\u6bd4\u6b63\u5728\u4fee\u590d\uff0c\u53ef\u5f00\u59cb\u68c0\u67e5\u767d\u94f6\u5f39\u6027\u548c\u77ff\u80a1",
    goldMonitorInvalidationRead: "\u91cd\u70b9\u770b\u5b9e\u9645\u5229\u7387\u53cd\u5f39\u3001\u7f8e\u5143\u6324\u538b\u3001ETF \u6d41\u51fa\u6216\u91d1\u94f6\u6bd4\u7ee7\u7eed\u4e0a\u884c",
    goldMonitorTrack: "\u8ddf\u8e2a",
    goldMonitorConfirm: "\u786e\u8ba4",
    goldMonitorWait: "\u7b49\u5f85",
    goldMonitorRisk: "\u98ce\u9669",
    goldMonitorCentralBankValue: "WGC \u592e\u884c\u9700\u6c42",
    goldMonitorInvalidationValue: "\u5229\u7387\u4e0a\u884c / \u7f8e\u5143\u8d70\u5f3a / \u8d44\u91d1\u6d41\u51fa",
    validationTitle: "\u9a8c\u8bc1\u961f\u5217",
    validationSub: "\u4ece\u70ed\u5ea6\u5230\u4e0b\u4e00\u68c0\u67e5",
    qualityTitle: "\u6570\u636e\u8d28\u68c0",
    qualityStatus: "PASS",
    qualityNote: "\u8d28\u68c0\u5931\u8d25\u65f6\u4e0d\u8986\u76d6\u6b63\u5f0f\u6570\u636e\uff0c\u4e5f\u4e0d\u90e8\u7f72\u3002",
    queueQuestion: "\u95ee\u9898",
    queueNextCheck: "\u4e0b\u4e00\u68c0\u67e5",
    queueEvidence: "\u8bc1\u636e\u7b49\u7ea7",
    queueMetric: "\u70ed\u5ea6",
    queueStatus: "\u72b6\u6001",
    queueWindow: "\u7a97\u53e3",
    queueTrigger: "\u89e6\u53d1\u5668",
    queueRelated: "\u5173\u8054",
    queueLastCheck: "\u4e0a\u6b21\u68c0\u67e5",
    queueTopUsQuestion: "\u884c\u4e1a\u70ed\u5ea6\u662f\u5426\u7531 AI capex \u4e0a\u4fee\u652f\u6491\uff1f",
    queueTopUsNext: "\u68c0\u67e5 NVDA\u3001AVGO\u3001TSMC\u3001MSFT\u3001GOOG\u3001AMZN\u3001META \u6307\u5f15\u3002",
    queueTopAQuestion: "\u677f\u5757\u6da8\u5e45\u80fd\u5426\u6620\u5c04\u5230\u6536\u5165\u3001\u8ba2\u5355\u6216\u6bdb\u5229\u7387\uff1f",
    queueTopANext: "\u68c0\u67e5\u516c\u544a\u3001\u5206\u9879\u6536\u5165\u3001\u8ba2\u5355\u53ef\u89c1\u5ea6\u548c\u4ea4\u6613\u6240\u62ab\u9732\u3002",
    queueCompanyQuestion: "\u6700\u5f3a\u7814\u7a76\u5bf9\u8c61\u662f\u5426\u4ecd\u6709\u57fa\u672c\u9762\u652f\u6491\uff1f",
    queueCompanyNext: "\u68c0\u67e5\u6700\u65b0\u6307\u5f15\u3001\u6bdb\u5229\u7387\u3001\u73b0\u91d1\u6d41\u548c\u9884\u671f\u4fee\u6b63\u3002",
    queueWatchQuestion: "\u5047\u8bbe\u5347\u7ea7\u524d\u5fc5\u987b\u9a8c\u8bc1\u4ec0\u4e48\uff1f",
    industryHeat: "\u884c\u4e1a\u70ed\u5ea6",
    financialValidation: "\u8d22\u52a1\u9a8c\u8bc1",
    watchItemLabel: "\u5173\u6ce8\u9879",
    qualityUpdated: "\u66f4\u65b0",
    qualityIndices: "\u6307\u6570",
    qualityASectors: "A\u80a1\u884c\u4e1a",
    qualityUsSectors: "\u7f8e\u80a1 ETF",
    qualityCompanies: "\u7814\u7a76\u6c60",
    coreTitle: "\u6838\u5fc3\u7814\u7a76\u6458\u8981",
    coreSub: "\u4e3b\u7ebf / \u8bc1\u636e / \u5f39\u6027 / \u4e0b\u4e00\u9a8c\u8bc1",
    coreThesis: "\u5f53\u524d\u4e3b\u7ebf",
    coreEvidence: "\u8bc1\u636e\u5730\u56fe",
    coreElasticity: "\u8d22\u52a1\u5f39\u6027",
    coreNextCheck: "\u4e0b\u4e00\u9a8c\u8bc1",
    coreDirect: "\u76f4\u63a5",
    coreSupplyChain: "\u4f9b\u5e94\u94fe",
    coreResearchPool: "\u7814\u7a76\u6c60",
    coreQualityAnchor: "\u8d28\u91cf\u951a",
    researchTitle: "In-Depth Research",
    researchBody: "Serenity Alpha, TAM-Adj-PEG, GF-DMA, Bayesian Valuation. \u628a\u70ed\u70b9\u53d8\u6210\u53ef\u8ddf\u8e2a\u7684\u7814\u7a76\u6846\u67b6\u3002",
    evidenceFirst: "EVIDENCE_FIRST",
    frameworkFlowTitle: "Hypothesis Flow",
    frameworkFlowSub: "news to investable hypothesis",
    thCompany: "\u516c\u53f8",
    thChain: "\u73af\u8282",
    thEvidence: "\u8bc1\u636e\u7b49\u7ea7",
    thLatest: "\u6700\u65b0\u9a8c\u8bc1",
    thPricingRisk: "\u5b9a\u4ef7\u98ce\u9669",
    thNext: "\u4e0b\u4e00\u6b65",
    thStatus: "\u72b6\u6001",
    detailTitle: "\u7814\u7a76\u5bf9\u8c61",
    detailSub: "\u72b6\u6001 / \u51b3\u7b56 / \u6846\u67b6",
    detailClose: "\u5173\u95ed",
    detailSelect: "\u8be6\u60c5",
    detailStatus: "\u72b6\u6001",
    detailDecision: "\u51b3\u7b56",
    detailCatalyst: "\u4e0b\u4e00\u50ac\u5316",
    detailUpdated: "\u66f4\u65b0",
    detailEvidenceScore: "\u8bc1\u636e",
    detailValuationScore: "\u4f30\u503c",
    detailFramework: "\u6846\u67b6\u8bfb\u6570",
    detailLatest: "\u6700\u65b0\u9a8c\u8bc1",
    detailAction: "\u4e0b\u4e00\u6b65",
    evidenceMapTitle: "\u8bc1\u636e\u5730\u56fe",
    evidenceSourceType: "\u6765\u6e90\u7c7b\u578b",
    evidenceSource: "\u6765\u6e90",
    evidenceFinancial: "\u8d22\u62a5\u6620\u5c04",
    evidenceStatus: "\u8bc1\u636e\u72b6\u6001",
    evidenceLatest: "\u6700\u65b0\u8bfb\u6570",
    evidenceCompany: "\u516c\u53f8 / \u62ab\u9732",
    evidenceExchange: "\u4ea4\u6613\u6240\u62ab\u9732",
    evidenceMarket: "\u5e02\u573a\u6570\u636e",
    evidenceIndustry: "\u4ea7\u4e1a\u6570\u636e",
    evidenceVerified: "\u5df2\u9a8c\u8bc1",
    evidencePending: "\u5f85\u9a8c\u8bc1",
    evidenceMapped: "\u5df2\u6620\u5c04\u4f46\u504f\u95f4\u63a5",
    detailUpgrade: "\u5347\u7ea7\u6761\u4ef6",
    detailDowngrade: "\u964d\u7ea7\u6761\u4ef6",
    detailInvalidation: "\u8bc1\u4f2a\u6761\u4ef6",
    detailHistory: "\u51b3\u7b56\u65e5\u5fd7",
    eventTransition: "\u72b6\u6001\u53d8\u5316",
    eventReason: "\u539f\u56e0",
    eventEvidence: "\u8bc1\u636e",
    eventSource: "\u6765\u6e90",
    watchLatestEvent: "\u6700\u65b0\u4e8b\u4ef6",
    logTitle: "\u7814\u7a76\u65e5\u5fd7",
    logBody: "\u6bcf\u4e00\u6b21\u5347\u7ea7\u3001\u964d\u7ea7\u3001\u5f00\u653e\u9a8c\u8bc1\u548c\u8bc1\u636e\u53d8\u5316\uff0c\u90fd\u5e94\u8be5\u6210\u4e3a\u53ef\u56de\u6eaf\u7684\u7814\u7a76\u4e8b\u4ef6\u3002",
    logStatus: "DECISION_HISTORY",
    logStreamTitle: "\u51b3\u7b56\u6d41",
    logStreamSub: "\u516c\u53f8\u4e8b\u4ef6 + \u9a8c\u8bc1\u4e8b\u4ef6",
    logCompany: "\u516c\u53f8",
    logValidation: "\u9a8c\u8bc1",
    aboutTitle: "\u5173\u4e8e H^3",
    aboutBody: "\u628a\u5e02\u573a\u53d8\u5316\u8f6c\u5316\u4e3a\u53ef\u9a8c\u8bc1\u6295\u8d44\u5047\u8bbe\u7684\u7814\u7a76\u7cfb\u7edf",
    aboutStatus: "METHOD_FIRST",
    aboutHeroTitle: "\u5e02\u573a\u70ed\u5ea6\u4e0d\u7b49\u4e8e\u8bc1\u660e\uff0cH^3 \u5c55\u793a\u7684\u662f\u9a8c\u8bc1\u8def\u5f84",
    aboutHeroTitleLines: ["\u5e02\u573a\u70ed\u5ea6", "\u4e0d\u7b49\u4e8e\u8bc1\u660e", "H^3 \u5c55\u793a\u9a8c\u8bc1\u8def\u5f84"],
    aboutHeroBody: "H^3 \u628a\u5feb\u901f\u7684\u5e02\u573a\u5f02\u52a8\u62c6\u6210\u4e00\u6761\u53ef\u68c0\u67e5\u7684\u7814\u7a76\u94fe\u8def\uff1a\u4ec0\u4e48\u5728\u52a8\uff0c\u4e3a\u4ec0\u4e48\u91cd\u8981\uff0c\u8bc1\u636e\u5728\u54ea\u91cc\uff0c\u5982\u4f55\u4f20\u5bfc\u5230\u8d22\u52a1\u62a5\u8868\uff0c\u4ec0\u4e48\u4f1a\u6539\u53d8\u5224\u65ad",
    aboutSignalEvidence: "\u8bc1\u636e\u4f18\u5148",
    aboutSignalEvidenceBody: "\u5347\u7ea7\u5047\u8bbe\u4e4b\u524d\uff0c\u5148\u628a\u7ebf\u7d22\u548c\u8bc1\u660e\u5206\u5f00",
    aboutSignalNoRec: "\u4e0d\u505a\u76f4\u63a5\u63a8\u8350",
    aboutSignalNoRecBody: "\u8f93\u51fa\u7684\u662f\u7814\u7a76\u7ed3\u6784\uff0c\u4e0d\u662f\u4ea4\u6613\u6307\u4ee4",
    aboutSignalLog: "\u5224\u65ad\u7559\u75d5",
    aboutSignalLogBody: "\u5224\u65ad\u5e94\u8be5\u7559\u4e0b\u53ef\u56de\u770b\u3001\u53ef\u590d\u76d8\u7684\u8f68\u8ff9",
    aboutFlowTitle: "\u7814\u7a76\u94fe\u8def",
    aboutStepMarketTitle: "\u5e02\u573a\u5f02\u52a8",
    aboutStepMarketBody: "\u6307\u6570\u3001\u677f\u5757\u548c\u4e3b\u9898\u70ed\u5ea6\u51b3\u5b9a\u6ce8\u610f\u529b\u5e94\u8be5\u53bb\u54ea\u91cc",
    aboutStepClueTitle: "\u4ea7\u4e1a\u7ebf\u7d22",
    aboutStepClueBody: "\u9700\u6c42\u3001Capex\u3001\u4f9b\u5e94\u94fe\u6216\u653f\u7b56\u4fe1\u53f7\u5f62\u6210\u5047\u8bbe",
    aboutStepEvidenceTitle: "\u8bc1\u636e\u95f8\u95e8",
    aboutStepEvidenceBody: "\u516c\u53f8\u8d22\u62a5\u3001\u4ea4\u6613\u6240\u62ab\u9732\u548c\u5b98\u65b9\u6570\u636e\u51b3\u5b9a\u70ed\u5ea6\u80fd\u4e0d\u80fd\u53d8\u6210\u8bc1\u660e",
    aboutStepFinancialTitle: "\u8d22\u52a1\u6620\u5c04",
    aboutStepFinancialBody: "\u7ebf\u7d22\u5fc5\u987b\u6620\u5c04\u5230\u6536\u5165\u3001\u6bdb\u5229\u3001\u73b0\u91d1\u6d41\u6216\u4f30\u503c\u4e45\u671f",
    aboutStepDecisionTitle: "\u5224\u65ad\u6761\u4ef6",
    aboutStepDecisionBody: "\u6bcf\u4e2a\u5047\u8bbe\u90fd\u9700\u8981\u660e\u786e\u5347\u7ea7\u3001\u964d\u7ea7\u548c\u8bc1\u4f2a\u6761\u4ef6",
    aboutPurposeTitle: "\u8fd9\u4e2a\u7f51\u7ad9\u662f\u4e3a\u4e86\u4ec0\u4e48",
    aboutPurposeBody: "H^3 \u505a\u7684\u4e0d\u662f\u8350\u80a1\uff0c\u800c\u662f\u628a\u5e02\u573a\u5f02\u52a8\u53d8\u6210\u53ef\u9a8c\u8bc1\u7684\u7814\u7a76\u5047\u8bbe",
    aboutLogicTitle: "\u6211\u4eec\u7684\u903b\u8f91",
    aboutLogicBody: "\u5148\u770b\u5e02\u573a\u571f\u58e4\uff0c\u518d\u627e\u4ea7\u4e1a\u7ebf\u7d22\uff1b\u628a\u70ed\u5ea6\u548c\u8bc1\u636e\u5206\u5f00\uff0c\u518d\u6620\u5c04\u5230\u8d22\u52a1\u62a5\u8868\u548c\u5224\u65ad\u6761\u4ef6",
    aboutFocusTitle: "\u6211\u4eec\u5173\u6ce8\u4ec0\u4e48",
    aboutFocusBody: "\u6211\u4eec\u5173\u6ce8 AI \u57fa\u7840\u8bbe\u65bd\u3001\u4e91\u5382\u5546 Capex\u3001GPU\u3001ASIC\u3001HBM\u3001\u5149\u6a21\u5757\u3001AI \u7f51\u7edc\u3001\u56fd\u4ea7\u7b97\u529b\u3001\u5148\u8fdb\u5c01\u88c5\u3001\u8d35\u91d1\u5c5e\u3001\u6d41\u52a8\u6027\u548c\u4f30\u503c\u538b\u529b",
    aboutUseTitle: "\u7528\u6237\u53ef\u4ee5\u600e\u4e48\u7528",
    aboutUseBody: "\u7528 Daily Verdict \u770b\u4eca\u5929\u7684\u52a8\u4f5c\uff0c\u7528 Research \u770b\u8bc1\u636e\uff0c\u7528 Macro \u770b\u5e02\u573a\u571f\u58e4\uff0c\u7528 Log \u770b\u5224\u65ad\u5982\u4f55\u53d8\u5316",
    aboutWhyTitle: "\u6211\u4eec\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u505a",
    aboutWhyBody: "\u5e02\u573a\u5956\u52b1\u7684\u4e0d\u662f\u81ea\u4fe1\uff0c\u800c\u662f\u8bc1\u636e\uff1bH^3 \u8981\u8ba9\u6bcf\u4e2a\u5224\u65ad\u90fd\u8bf4\u6e05\u695a\uff1a\u4ec0\u4e48\u4f1a\u786e\u8ba4\u5b83\uff0c\u4ec0\u4e48\u4f1a\u524a\u5f31\u5b83\uff0c\u4ec0\u4e48\u4f1a\u63a8\u7ffb\u5b83",
    aboutDeveloperTitle: "\u5f00\u53d1\u8005",
    aboutDeveloperBody: "\u5c0f\u8d3a\u540c\u5b66",
    aboutContactTitle: "\u5546\u52a1\u5408\u4f5c",
    aboutContactBody: "honghuihe129@gmail.com",
    aboutDisclaimerTitle: "\u8fb9\u754c",
    aboutDisclaimerBody: "H^3 \u53ea\u63d0\u4f9b\u7814\u7a76\u7ed3\u6784\u548c\u8bc1\u636e\u8ffd\u8e2a\uff0c\u4e0d\u63d0\u4f9b\u76f4\u63a5\u80a1\u7968\u63a8\u8350\u3002",
    frameworkSerenity: "Serenity Alpha",
    frameworkTam: "TAM-Adj-PEG",
    frameworkGfDma: "GF-DMA",
    frameworkBayesian: "Bayesian Growth",
    macroTitle: "Macro Fundamentals",
    macroBody: "\u5148\u5224\u65ad\u5e02\u573a\u571f\u58e4\uff0c\u518d\u5224\u65ad\u4ea7\u4e1a\u4e3b\u7ebf\u548c\u516c\u53f8\u8d22\u52a1\u4f20\u5bfc\u3002",
    officialFirst: "OFFICIAL_SOURCE_FIRST",
    macroConsole: "Macro Console",
    macroSub: "\u5b98\u65b9\u4e0e\u5e02\u573a\u6570\u636e",
    macroRegimeTitle: "\u5e02\u573a\u571f\u58e4",
    macroRegimeStatus: "\u589e\u957f\u5206\u5316 / \u5229\u7387\u538b\u5236",
    macroRegimeRead: "\u4e2d\u56fd\u9700\u6c42\u4fee\u590d\u4e0d\u5747\u8861\uff0c\u7f8e\u56fd\u5229\u7387\u4ecd\u538b\u5236\u957f\u4e45\u671f\u6210\u957f\u8d44\u4ea7\uff0c\u98ce\u9669\u504f\u597d\u9700\u8981\u6307\u6570\u5bbd\u5ea6\u9a8c\u8bc1",
    macroRegimeGrowth: "\u589e\u957f\u8109\u51b2",
    macroRegimeRates: "\u5229\u7387\u4e0a\u9650",
    macroRegimeRisk: "\u98ce\u9669\u504f\u597d",
    macroRegimeTheme: "\u4e3b\u9898\u70ed\u5ea6",
    macroRegimeNext: "\u4e0b\u4e00\u5b8f\u89c2\u68c0\u67e5",
    macroRegimeNextRead: "\u5173\u6ce8 CPI\u3001FOMC \u8868\u8ff0\u3001PMI \u4fee\u590d\uff0c\u4ee5\u53ca\u6307\u6570\u5bbd\u5ea6\u80fd\u5426\u9a8c\u8bc1\u4e3b\u9898\u70ed\u5ea6",
    valuationTempTitle: "\u4f30\u503c\u6e29\u5ea6",
    valuationTempStatus: "\u6ce1\u6cab\u538b\u529b / \u4f4e\u4f30\u533a\u57df",
    valuationTempRead: "\u628a\u4f30\u503c\u5f53\u4f5c\u7ea6\u675f\uff1a\u9ad8\u4e45\u671f\u8d44\u4ea7\u9700\u8981\u8bc1\u636e\u7ee7\u7eed\u5347\u7ea7\uff0c\u4f4e\u4f30\u533a\u57df\u9700\u8981\u76c8\u5229\u4fee\u590d\u7684\u8bc1\u660e",
    valuationBubble: "\u6ce1\u6cab\u538b\u529b",
    valuationDiscount: "\u4f4e\u4f30\u533a\u57df",
    valuationPool: "\u7814\u7a76\u6c60\u5b9a\u4ef7",
    valuationTrap: "\u4ef7\u503c\u9677\u9631\u68c0\u67e5",
    valuationNext: "\u4ec0\u4e48\u4f1a\u6539\u53d8\u5224\u65ad",
    valuationBubbleHigh: "\u4e2d\u9ad8",
    valuationBubbleMedium: "\u4e2d",
    valuationBubbleLow: "\u4f4e",
    valuationDiscountHigh: "\u660e\u663e",
    valuationDiscountMedium: "\u9009\u62e9\u6027",
    valuationDiscountLow: "\u6709\u9650",
    valuationTrapRead: "\u4f4e\u4ef7\u4e0d\u591f\uff0c\u9700\u8981\u6536\u5165\u3001\u6bdb\u5229\u7387\u548c\u73b0\u91d1\u6d41\u9a8c\u8bc1",
    valuationNextRead: "\u6ce1\u6cab\u51b7\u5374\u6765\u81ea\u4ef7\u683c\u56de\u5230 DMA \u9644\u8fd1\u6216\u76c8\u5229\u8ffd\u4e0a\uff1b\u4f4e\u4f30\u5347\u7ea7\u53ea\u6765\u81ea\u8d22\u52a1\u8bc1\u636e\u6539\u5584",
    preciousTitle: "\u8d35\u91d1\u5c5e\u89c2\u5bdf",
    preciousStatus: "\u5148\u4f5c\u4e3a\u5b8f\u89c2\u8d44\u4ea7",
    preciousRead: "\u9ec4\u91d1\u548c\u767d\u94f6\u5148\u4ee5\u5b8f\u89c2\u8d44\u4ea7\u8fdb\u5165 H^3\u3002\u5224\u65ad\u6838\u5fc3\u6765\u81ea FRED\u3001WGC \u548c Silver Institute \u56e0\u5b50\uff1b\u4ef7\u683c\u53ea\u4f5c\u4e3a\u5ef6\u8fdf\u8d8b\u52bf\u53c2\u8003\uff0c\u4e0d\u4f5c\u4e3a\u53ef\u518d\u5206\u53d1\u7684\u5b98\u65b9\u62a5\u4ef7\u6e90",
    preciousGoldGate: "\u9ec4\u91d1\u95f8\u95e8",
    preciousSilverGate: "\u767d\u94f6\u95f8\u95e8",
    preciousRatioGate: "\u91d1\u94f6\u6bd4",
    pricingReference: "\u5b9a\u4ef7\u53c2\u8003",
    flowProxy: "ETF \u8d44\u91d1\u6d41\u4ee3\u7406",
    preciousFactorsTitle: "\u6838\u5fc3\u56e0\u5b50",
    preciousFactorsRead: "\u5224\u65ad\u6765\u81ea\u5b8f\u89c2\u538b\u529b\u3001\u9ec4\u91d1\u8d44\u91d1\u6d41\u3001\u592e\u884c\u9700\u6c42\u3001\u767d\u94f6\u4f9b\u9700\u7f3a\u53e3\u548c\u5de5\u4e1a\u9700\u6c42",
    preciousBoundaryTitle: "\u5408\u6cd5\u6570\u636e\u8fb9\u754c",
    preciousBoundaryRead: "\u4ef7\u683c\u6570\u636e\u53ea\u4f5c\u4e3a\u5ef6\u8fdf\u516c\u5f00\u8d8b\u52bf\u53c2\u8003\u3002H^3 \u4e0d\u518d\u5206\u53d1 CME \u6216 LBMA \u5b98\u65b9\u62a5\u4ef7\u6570\u636e",
    preciousTakeaway: "\u6838\u5fc3\u7ed3\u8bba",
    preciousAction: "\u4e0b\u4e00\u6b65",
    preciousConclusionMacroHedgeTitle: "\u5b8f\u89c2\u5bf9\u51b2\u4e3b\u5bfc\uff0c\u8fd8\u4e0d\u662f\u767d\u94f6\u6269\u6563",
    preciousConclusionMacroHedgeBody: "\u9ec4\u91d1\u548c\u767d\u94f6\u90fd\u4e3a\u6b63\uff0c\u4f46\u91d1\u94f6\u6bd4\u4ecd\u5728\u4e0a\u884c\u3002\u8fd9\u66f4\u50cf\u9ec4\u91d1\u4e3b\u5bfc\u7684\u5b8f\u89c2\u5bf9\u51b2\uff0c\u8fd8\u4e0d\u662f\u8d35\u91d1\u5c5e\u5168\u9762 risk-on",
    preciousConclusionMacroHedgeAction: "\u9ec4\u91d1\u548c\u767d\u94f6\u7ee7\u7eed\u653e\u5728\u5b8f\u89c2\u677f\u5757\u89c2\u5bdf\uff1b\u7b49\u767d\u94f6\u9886\u6da8\u6216\u91d1\u94f6\u6bd4\u4fee\u590d\u540e\u518d\u52a0\u77ff\u80a1",
    preciousConclusionSilverLeadTitle: "\u767d\u94f6 beta \u5f00\u59cb\u786e\u8ba4",
    preciousConclusionSilverLeadBody: "\u4e24\u79cd\u91d1\u5c5e\u90fd\u4e3a\u6b63\uff0c\u4e14\u91d1\u94f6\u6bd4\u4e0b\u884c\u3002\u8fd9\u662f\u767d\u94f6 beta \u548c\u5de5\u4e1a\u9700\u6c42\u53ef\u80fd\u52a0\u5165\u9ec4\u91d1\u884c\u60c5\u7684\u7b2c\u4e00\u4e2a\u4fe1\u53f7",
    preciousConclusionSilverLeadAction: "\u53ef\u4ee5\u542f\u52a8 SIL\u3001GDX\u3001\u77ff\u80a1\u548c\u767d\u94f6\u4ea7\u4e1a\u94fe\u7684\u4e8c\u5c42\u7814\u7a76\uff0c\u4f46\u4ecd\u9700\u8d44\u91d1\u6d41\u548c\u9700\u6c42\u786e\u8ba4",
    preciousConclusionGoldOnlyTitle: "\u53ea\u662f\u9ec4\u91d1\u9632\u5fa1\u6027\u4e70\u76d8",
    preciousConclusionGoldOnlyBody: "\u9ec4\u91d1\u4e3a\u6b63\uff0c\u4f46\u767d\u94f6\u6ca1\u6709\u786e\u8ba4\u3002\u4fe1\u53f7\u504f\u9632\u5fa1\u548c\u5b8f\u89c2\uff0c\u5de5\u4e1a beta \u8bc1\u636e\u8fd8\u5f31",
    preciousConclusionGoldOnlyAction: "\u7ee7\u7eed\u8ddf\u8e2a\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u538b\u529b\u548c\u592e\u884c\u9700\u6c42\uff1b\u6682\u4e0d\u6269\u5c55\u5230\u767d\u94f6 beta \u6216\u77ff\u80a1",
    preciousConclusionWeakTitle: "\u8d35\u91d1\u5c5e\u4fe1\u53f7\u8fd8\u4e0d\u6210\u7acb",
    preciousConclusionWeakBody: "\u91d1\u5c5e\u4fe1\u53f7\u4e0d\u591f\u5bbd\uff0c\u4ef7\u683c\u8868\u73b0\u8fd8\u4e0d\u652f\u6301\u628a\u7814\u7a76\u5730\u56fe\u4ece\u5b8f\u89c2\u89c2\u5bdf\u6269\u5230\u4ea7\u4e1a\u94fe",
    preciousConclusionWeakAction: "\u7ee7\u7eed\u89c2\u5bdf\uff0c\u7b49\u9ec4\u91d1\u91cd\u65b0\u8d70\u5f3a\u6216\u767d\u94f6\u901a\u8fc7\u91d1\u94f6\u6bd4\u4fee\u590d\u6765\u786e\u8ba4",
    preciousNext: "\u6269\u5c55\u89c4\u5219",
    preciousNextRead: "\u53ea\u6709\u5728 FRED \u5b8f\u89c2\u538b\u529b\u3001WGC \u9ec4\u91d1\u8d44\u91d1\u6d41\u548c Silver Institute \u9700\u6c42\u4fe1\u53f7\u5171\u632f\u540e\uff0c\u624d\u6269\u5c55\u5230 GDX\u3001SIL\u3001\u77ff\u80a1\u6216\u767d\u94f6\u4ea7\u4e1a\u94fe",
    watchTitle: "Watch Items",
    watchSub: "next validation round",
    radarPriority: "\u4f18\u5148\u7ea7\u5206\u5e03",
    radarAShareHeat: "A\u80a1\u70ed\u5ea6",
    radarUsHeat: "\u7f8e\u80a1\u70ed\u5ea6",
    radarMacroGate: "\u5b8f\u89c2\u95f8\u95e8",
    radarOpenChecks: "\u4e2a\u5f85\u9a8c\u8bc1\u9879",
    radarMacroGateDetail: "\u4e2d\u56fd\u9700\u6c42 + \u7f8e\u56fd\u8d34\u73b0\u7387\u4e0a\u9650",
    radarUpdateWindow: "\u66f4\u65b0\u7a97\u53e3",
    signalTitle: "\u5b8f\u89c2\u4fe1\u53f7\u677f",
    signalSub: "\u589e\u957f / \u901a\u80c0 / \u6d41\u52a8\u6027 / \u98ce\u9669",
    signalGrowth: "\u589e\u957f\u8109\u51b2",
    signalInflation: "\u901a\u80c0\u4e0e\u5229\u7387",
    signalChinaDemand: "\u4e2d\u56fd\u9700\u6c42",
    signalRisk: "\u98ce\u9669\u504f\u597d",
    signalMixed: "\u5206\u5316",
    signalTight: "\u504f\u7d27",
    signalSoft: "\u504f\u5f31",
    signalPositive: "\u504f\u79ef\u6781",
    scopeLabel: "\u5e02\u573a",
    scopeChinaShort: "\u4e2d\u56fd",
    scopeUsShort: "\u7f8e\u56fd",
    scopeAShareShort: "A\u80a1",
    scopeChinaUnitedStates: "\u4e2d\u56fd + \u7f8e\u56fd",
    scopeUnitedStates: "\u7f8e\u56fd",
    scopeChinaOnly: "\u4e2d\u56fd",
    scopeAShareUnitedStates: "A\u80a1 + \u7f8e\u80a1",
    signalGrowthRead: "\u589e\u957f\u4ecd\u4e3a\u6b63\uff0c\u4f46\u4f30\u503c\u4e0a\u884c\u9700\u8981\u9700\u6c42\u5e7f\u5ea6\u6539\u5584\u6765\u652f\u6491\u3002",
    signalInflationRead: "\u5229\u7387\u548c\u957f\u503a\u6536\u76ca\u7387\u4ecd\u662f\u957f\u4e45\u671f\u6210\u957f\u8d44\u4ea7\u7684\u4e3b\u8981\u4e0a\u9650\u3002",
    signalChinaDemandRead: "\u751f\u4ea7\u5f3a\u4e8e\u6d88\u8d39\uff0c\u9700\u7ee7\u7eed\u8ddf\u8e2a\u793e\u96f6\u548c\u6295\u8d44\u4fee\u590d\u3002",
    signalRiskRead: "\u8de8\u5e02\u573a\u98ce\u9669\u504f\u597d\u9700\u548c\u6307\u6570\u5e7f\u5ea6\u6821\u9a8c\uff0c\u4e0d\u80fd\u53ea\u770b\u5355\u4e00\u4e3b\u9898\u70ed\u5ea6\u3002",
    footerStable: "H3_RESEARCH_SYSTEM_STABLE",
    footerNoRec: "NO_DIRECT_STOCK_RECOMMENDATION",
    footerPublic: "PUBLIC_DEPLOYMENT_READY",
    framework: [
      {
        key: "01",
        name: "Serenity Alpha",
        label: "\u65b0\u95fb -> \u6295\u8d44\u5047\u8bbe",
        body: "\u4ece\u65b0\u95fb\u62c6\u5230\u771f\u5b9e\u9700\u6c42\u3001\u6536\u5165\u9879\u3001\u6bdb\u5229\u7387\u548c\u9a8c\u8bc1\u8282\u70b9\u3002",
        signal: "\u7528\u4e8e\u627e\u4ea7\u4e1a\u94fe\u7ebf\u7d22"
      },
      {
        key: "02",
        name: "TAM-Adj-PEG",
        label: "\u6210\u957f\u80a1\u4f30\u503c",
        body: "\u4f20\u7edf PEG \u52a0\u5165 TAM \u7a7a\u95f4\u3001\u8dd1\u9053\u6301\u7eed\u6027\u548c\u516c\u53f8\u8d28\u91cf\u3002",
        signal: "\u7528\u4e8e\u770b\u8d35\u4e0d\u8d35"
      },
      {
        key: "03",
        name: "GF-DMA",
        label: "\u8d70\u52bf\u5065\u5eb7\u5ea6",
        body: "\u628a\u57fa\u672c\u9762\u589e\u901f\u548c 20/50/100/200DMA \u4e56\u79bb\u5ea6\u653e\u5728\u4e00\u8d77\u770b\u3002",
        signal: "\u7528\u4e8e\u8bc6\u522b\u8fc7\u70ed"
      },
      {
        key: "04",
        name: "Bayesian Growth",
        label: "\u5b9a\u4ef7\u662f\u5426\u900f\u652f",
        body: "\u628a\u65b0\u4fe1\u606f\u8f6c\u5316\u4e3a 3-5 \u5e74\u589e\u957f\u6982\u7387\u7684\u4e0a\u4fee\u6216\u4e0b\u4fee\u3002",
        signal: "\u7528\u4e8e\u5206\u8fa8 FOMO"
      }
    ]
  }
};

const valueTranslations = {
  "A\u80a1": "A-share",
  "\u7f8e\u80a1": "US",
  "\u4e2d\u56fd": "China",
  "\u7f8e\u56fd": "United States",
  "\u5236\u9020\u4e1a PMI": "Manufacturing PMI",
  "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4": "Fed funds target range",
  "\u56de\u5230\u6269\u5f20\u533a\u95f4": "Back in expansion territory",
  "\u6e29\u548c\u901a\u80c0": "Mild inflation",
  "\u5de5\u4e1a\u54c1\u4ef7\u683c\u540c\u6bd4\u4ecd\u5f3a": "Industrial prices remain firm YoY",
  "\u9ad8\u5229\u7387\u7ea6\u675f\u4f30\u503c\u6269\u5f20": "Higher rates constrain valuation expansion",
  "\u56fd\u5bb6\u7edf\u8ba1\u5c40": "National Bureau of Statistics of China",
  "2026\u5e746\u6708\u540c\u6bd4": "June 2026 YoY",
  "\u9ad8": "High",
  "\u4e2d\u9ad8": "Medium-high",
  "\u4e2d": "Medium",
  "数据中心收入、毛利率和下一代 GPU 交付同步上修": "Data-center revenue, gross margin, and next-gen GPU delivery all revise upward",
  "毛利率下滑、交付延迟或云厂商 Capex 放缓": "Gross margin declines, delivery slips, or cloud capex slows",
  "AI 服务器需求无法继续转化为收入和现金流": "AI server demand no longer converts into revenue and cash flow",
  "收入和毛利率仍提供直接财务验证": "Revenue and gross margin still provide direct financial validation",
  "FY2027 Q1 数据中心收入和毛利率": "FY2027 Q1 data-center revenue and gross margin",
  "AI 半导体收入继续超指引且客户代际部署更清晰": "AI semiconductor revenue keeps beating guidance and customer generation deployments become clearer",
  "AI 收入低于指引或 XPU/网络项目推迟": "AI revenue misses guidance or XPU/networking projects are delayed",
  "ASIC 订单无法维持收入增速和利润质量": "ASIC orders fail to sustain revenue growth and profit quality",
  "AI 半导体收入已进入财务报表并保持高增": "AI semiconductor revenue is already in the financial statements and remains high-growth",
  "FY2026 Q2 AI 半导体收入同比 +143%": "FY2026 Q2 AI semiconductor revenue +143% YoY",
  "HBM 长协、ASP 和毛利率同时保持强势": "HBM long-term agreements, ASP, and gross margin all remain strong",
  "库存上升、ASP 转弱或毛利率快速回落": "Inventory rises, ASP weakens, or gross margin rolls over quickly",
  "本轮增长被证明只是存储周期价格弹性": "This growth cycle proves to be mainly memory-cycle pricing elasticity",
  "需求强但周期属性和趋势健康度需要折扣": "Demand is strong, but cyclicality and trend health require a discount",
  "HBM/DRAM 财务弹性与 GF-DMA 偏弱并存": "HBM/DRAM financial elasticity coexists with weaker GF-DMA health",
  "800G/1.6T 放量、海外客户和毛利率继续共振": "800G/1.6T ramp, overseas customers, and gross margin keep moving together",
  "收入环比放缓或毛利率跌破趋势": "Sequential revenue slows or gross margin breaks trend",
  "光模块需求无法继续兑现到收入和利润": "Optical-module demand no longer converts into revenue and profit",
  "光模块收入和利润弹性已被财务验证": "Optical-module revenue and profit elasticity have been financially validated",
  "2026Q1 收入和净利高速增长": "2026 Q1 revenue and net profit grew rapidly",
  "高毛利器件收入再加速且客户渗透继续提升": "High-margin component revenue re-accelerates and customer penetration keeps rising",
  "高毛利无法维持或收入增速继续放缓": "High margins fail to hold or revenue growth keeps slowing",
  "质量溢价无法被增长持续性覆盖": "The quality premium is no longer covered by growth durability",
  "毛利率和利润质量较强但弹性低于主链": "Gross margin and profit quality are strong, but elasticity is below the main chain",
  "2026Q1 毛利率 56.6%": "2026 Q1 gross margin was 56.6%",
  "持续订单、回款、费用率和生态复购同时改善": "Sustained orders, cash collection, expense ratio, and ecosystem repurchase all improve",
  "收入放缓、现金流转弱或客户集中风险扩大": "Revenue slows, cash flow weakens, or customer concentration risk expands",
  "国产算力商业化无法形成可持续利润质量": "Domestic compute commercialization fails to form durable profit quality",
  "国产替代线索强但现金流和复购仍需验证": "Domestic substitution clues are strong, but cash flow and repurchase still need validation",
  "2026Q1 高增但估值更像期权": "2026 Q1 growth was high, but valuation still behaves like an option",
  "DDR5/MRCD 渗透提升并带动服务器链收入和利润增长": "DDR5/MRCD penetration rises and drives server-chain revenue and profit growth",
  "利润增速无法覆盖估值或服务器链需求走弱": "Profit growth fails to cover valuation or server-chain demand weakens",
  "AI 服务器链间接利好无法进入公司财务报表": "Indirect AI server-chain tailwinds fail to enter the company's financial statements",
  "利润质量较好但财务传导仍偏间接": "Profit quality is good, but financial transmission remains indirect",
  "2026Q1 净利增速和毛利率表现较好": "2026 Q1 net-profit growth and gross margin were strong",
  "东方财富财报汇总, 需回查公司公告": "Eastmoney financial summary; verify against company filings",
  "供应链间接利好": "Indirect supply-chain tailwind",
  "仍是 AI 主线最核心的需求闸门": "Still the core demand gate for the AI theme",
  "MSFT/GOOG/AMZN/META Capex 指引": "MSFT/GOOG/AMZN/META capex guidance",
  "财报和公司指引": "Earnings reports and company guidance",
  "HBM 真需求和存储周期弹性需要分开验证": "HBM real demand and memory-cycle elasticity must be validated separately",
  "ASP、库存、长协和毛利率": "ASP, inventory, long-term agreements, and gross margin",
  "公司财报和行业价格数据": "Company earnings and industry pricing data",
  "股价热度必须继续映射到收入和毛利率": "Share-price heat must keep mapping into revenue and gross margin",
  "中际旭创、天孚通信 Q2/Q3 财报": "Zhongji Innolight and TFC Q2/Q3 earnings",
  "交易所公告和公司财报": "Exchange disclosures and company earnings",
  "需要从主题弹性进入订单、回款和复购验证": "Theme elasticity must move into order, cash-collection, and repurchase validation",
  "客户、订单、现金流、费用率": "Customers, orders, cash flow, and expense ratio",
  "公司公告和财报": "Company announcements and earnings",
  "主题热度需要分项收入和毛利率确认": "Theme heat needs confirmation from segment revenue and gross margin",
  "先进封装收入和毛利率": "Advanced-packaging revenue and gross margin",
  "利率和需求仍决定成长股估值上限": "Rates and demand still define the valuation ceiling for growth stocks",
  "\u5f00\u653e": "Open",
  "\u89c2\u5bdf": "Watch",
  "\u672a\u7eb3\u5165": "Not included",
  "\u8d35\u91d1\u5c5e\u5b8f\u89c2\u8d44\u4ea7": "Precious metals macro assets",
  "GLD/SLV \u4ef7\u683c\u3001\u91d1\u94f6\u6bd4\u3001\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u548c ETF \u8d44\u91d1\u6d41": "GLD/SLV price, gold/silver ratio, real rates, US dollar, and ETF flows",
  "\u6bcf\u65e5\u5b8f\u89c2\u8d44\u4ea7\u66f4\u65b0 / \u6bcf\u5468 ETF \u8d44\u91d1\u6d41": "Daily macro-asset update / weekly ETF flows",
  "GLD/SLV \u8d8b\u52bf\u548c ETF \u8d44\u91d1\u6d41\u540c\u65f6\u786e\u8ba4\uff1b\u518d\u8bc4\u4f30 GDX\u3001SIL\u3001\u91d1\u77ff\u80a1\u548c\u767d\u94f6\u4ea7\u4e1a\u94fe": "GLD/SLV trend and ETF flows confirm together; then reassess GDX, SIL, gold miners, and the silver chain",
  "\u5148\u628a\u9ec4\u91d1\u548c\u767d\u94f6\u4f5c\u4e3a\u5b8f\u89c2\u8d44\u4ea7\u52a0\u5165 H^3\uff0c\u4e0d\u6025\u7740\u6269\u5c55\u5230\u77ff\u80a1\u548c\u767d\u94f6\u4ea7\u4e1a\u94fe": "Add gold and silver to H^3 as macro assets first; do not rush into miners or the silver chain",
  "GLD/SLV \u62a5\u4ef7\u3001\u91d1\u94f6\u6bd4\u3001\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u548c ETF \u8d44\u91d1\u6d41": "GLD/SLV quotes, gold/silver ratio, real rates, US dollar, and ETF flows",
  "Nasdaq / WGC / Silver Institute / FRED": "Nasdaq / WGC / Silver Institute / FRED",
  "\u6838\u5fc3\u951a": "Core anchor",
  "\u9ad8\u5f39\u6027\u8ddf\u8e2a": "High-elasticity tracking",
  "\u4e3b\u7ebf\u8ddf\u8e2a": "Mainline tracking",
  "\u8d28\u91cf\u8ddf\u8e2a": "Quality tracking",
  "\u9ad8\u5f39\u6027\u89c2\u5bdf": "High-elasticity watch",
  "\u95f4\u63a5\u53d7\u76ca": "Indirect beneficiary",
  "\u4fdd\u6301\u6838\u5fc3": "Keep core",
  "\u4fdd\u6301\u4f46\u63d0\u9ad8\u98ce\u9669\u63d0\u793a": "Keep, but raise risk flag",
  "\u4fdd\u6301\u6838\u5fc3\u4f9b\u5e94\u94fe": "Keep core supply-chain position",
  "\u4fdd\u6301\u8d28\u91cf\u951a": "Keep quality anchor",
  "\u4fdd\u6301\u89c2\u5bdf\uff0c\u4e0d\u5347\u6838\u5fc3": "Keep on watch, do not upgrade to core",
  "\u4fdd\u6301\u89c2\u5bdf": "Keep on watch",
  "\u4e0b\u4e00\u6b21\u6570\u636e\u4e2d\u5fc3\u6536\u5165\u3001Blackwell/Rubin \u4ea4\u4ed8\u548c\u6bdb\u5229\u7387\u6307\u5f15": "Next data-center revenue, Blackwell/Rubin delivery, and gross-margin guidance",
  "AI \u534a\u5bfc\u4f53\u6536\u5165\u3001XPU/\u7f51\u7edc\u8ba2\u5355\u548c\u5ba2\u6237\u4ee3\u9645\u90e8\u7f72": "AI semiconductor revenue, XPU/networking orders, and customer generation deployments",
  "HBM \u957f\u534f\u3001DRAM ASP\u3001\u5e93\u5b58\u548c\u6bdb\u5229\u7387\u6301\u7eed\u6027": "HBM long-term agreements, DRAM ASP, inventory, and margin durability",
  "800G/1.6T \u51fa\u8d27\u3001\u6d77\u5916\u5ba2\u6237\u548c\u6bdb\u5229\u7387": "800G/1.6T shipments, overseas customers, and gross margin",
  "\u9ad8\u6bdb\u5229\u5668\u4ef6 ASP\u3001\u5ba2\u6237\u6e17\u900f\u548c\u6536\u5165\u518d\u52a0\u901f": "High-margin component ASP, customer penetration, and revenue re-acceleration",
  "\u6301\u7eed\u8ba2\u5355\u3001\u56de\u6b3e\u3001\u8d39\u7528\u7387\u548c\u751f\u6001\u5ba2\u6237\u590d\u8d2d": "Sustained orders, cash collection, expense ratio, and ecosystem customer repurchase",
  "DDR5/MRCD \u6e17\u900f\u3001\u5229\u6da6\u8d28\u91cf\u548c\u670d\u52a1\u5668\u94fe\u6536\u5165": "DDR5/MRCD penetration, profit quality, and server-chain revenue",
  "\u9700\u6c42\u3001\u6536\u5165\u548c\u6bdb\u5229\u7387\u5df2\u88ab\u8d22\u52a1\u9a8c\u8bc1": "Demand, revenue, and gross margin are financially validated",
  "TAM \u4ecd\u5927\u4f46\u4f30\u503c\u5df2\u8981\u6c42\u9ad8\u589e\u957f\u6301\u7eed": "TAM remains large, but valuation requires sustained high growth",
  "\u8d8b\u52bf\u5065\u5eb7\uff0c\u4f46\u9700\u9632\u6b62\u4f30\u503c\u5148\u884c": "Trend is healthy, but valuation may run ahead",
  "\u5e02\u573a\u5df2\u5b9a\u4ef7\u9ad8\u786e\u5b9a\u6027\u589e\u957f\uff0c\u9700\u8981\u65b0\u6307\u5f15\u7ee7\u7eed\u4e0a\u4fee": "Market prices high-certainty growth; guidance must keep rising",
  "ASIC \u548c AI \u7f51\u7edc\u6536\u5165\u5df2\u8fdb\u5165\u8d22\u52a1\u62a5\u8868": "ASIC and AI networking revenue have entered financial statements",
  "\u6210\u957f\u8d28\u91cf\u8f83\u9ad8\uff0c\u4f30\u503c\u53d6\u51b3\u4e8e AI \u6536\u5165\u6301\u7eed\u6027": "Growth quality is high; valuation depends on AI revenue durability",
  "\u8d8b\u52bf\u4ecd\u5f3a\uff0c\u7b49\u5f85\u56de\u64a4\u540e\u7684\u786e\u8ba4": "Trend remains strong; wait for post-pullback confirmation",
  "OpenAI/\u4e91\u5382\u5546 ASIC \u7ebf\u7d22\u4f1a\u663e\u8457\u6539\u53d8\u589e\u957f\u6982\u7387": "OpenAI/cloud ASIC clues could materially revise growth probability",
  "HBM/DRAM \u9700\u6c42\u5f3a\uff0c\u4f46\u5468\u671f\u5c5e\u6027\u660e\u663e": "HBM/DRAM demand is strong, but cyclicality is obvious",
  "\u4e0d\u80fd\u6309\u7ebf\u6027\u6210\u957f\u80a1\u4f30\u503c\uff0c\u9700\u6298\u6263\u5468\u671f\u6ce2\u52a8": "Do not value as linear growth; discount cyclicality",
  "\u8d8b\u52bf\u5065\u5eb7\u5ea6\u504f\u5f31\uff0c\u4ef7\u683c\u548c\u57fa\u672c\u9762\u9700\u8981\u91cd\u65b0\u540c\u6b65": "Trend health is weak; price and fundamentals need to resync",
  "\u5e02\u573a\u5bb9\u6613\u628a\u5468\u671f\u9ad8\u70b9\u8bef\u5224\u4e3a\u957f\u671f\u6210\u957f": "Market may mistake a cycle peak for durable growth",
  "\u5149\u6a21\u5757\u6536\u5165\u5f39\u6027\u5df2\u9a8c\u8bc1": "Optical-module revenue elasticity is validated",
  "\u6210\u957f\u5f3a\u4f46\u5ba2\u6237\u96c6\u4e2d\u548c\u4f30\u503c\u9700\u8981\u6298\u6263": "Growth is strong, but customer concentration and valuation need discounts",
  "\u8d8b\u52bf\u5c1a\u5065\u5eb7\uff0c\u4f46\u9700\u9632\u6b62\u77ed\u671f\u62e5\u6324": "Trend is still healthy, but watch short-term crowding",
  "\u7ee7\u7eed\u4e0a\u4fee\u53d6\u51b3\u4e8e\u51fa\u8d27\u548c\u6bdb\u5229\u7387\u662f\u5426\u5171\u632f": "Further upgrades depend on shipments and gross margin moving together",
  "\u8d22\u52a1\u8d28\u91cf\u8f83\u5f3a\uff0c\u5f39\u6027\u5f31\u4e8e\u5149\u6a21\u5757\u4e3b\u94fe": "Financial quality is strong, but elasticity is below the optical-module core chain",
  "\u8d28\u91cf\u6ea2\u4ef7\u5408\u7406\uff0c\u4f46\u9700\u8981\u589e\u957f\u518d\u52a0\u901f": "Quality premium is reasonable, but growth must re-accelerate",
  "\u8d8b\u52bf\u4e2d\u6027\u504f\u5f3a": "Trend is neutral to positive",
  "\u82e5\u9ad8\u6bdb\u5229\u6301\u7eed\uff0c\u589e\u957f\u786e\u5b9a\u6027\u53ef\u4e0a\u4fee": "If high margins persist, growth certainty can be revised up",
  "\u56fd\u4ea7\u66ff\u4ee3\u7ebf\u7d22\u5f3a\uff0c\u4f46\u5546\u4e1a\u5316\u4ecd\u9700\u9a8c\u8bc1": "Domestic substitution clues are strong, but commercialization still needs proof",
  "\u4f30\u503c\u66f4\u50cf\u671f\u6743\uff0c\u9700\u8981\u73b0\u91d1\u6d41\u8bc1\u636e": "Valuation behaves like an option and needs cash-flow evidence",
  "\u8d8b\u52bf\u4e2d\u6027\uff0c\u6613\u53d7\u60c5\u7eea\u9a71\u52a8": "Trend is neutral and sentiment-sensitive",
  "\u6838\u5fc3\u6982\u7387\u53d6\u51b3\u4e8e\u590d\u8d2d\u548c\u5229\u6da6\u8d28\u91cf": "Core probability depends on repurchase and profit quality",
  "AI \u670d\u52a1\u5668\u94fe\u95f4\u63a5\u53d7\u76ca\uff0c\u8d22\u52a1\u8d28\u91cf\u8f83\u597d": "Indirect AI server-chain beneficiary with good financial quality",
  "\u4f30\u503c\u9700\u8981\u5229\u6da6\u589e\u901f\u7ee7\u7eed\u8986\u76d6": "Valuation needs sustained profit growth coverage",
  "\u8d8b\u52bf\u5065\u5eb7\u5ea6\u4e2d\u7b49": "Trend health is moderate",
  "\u82e5\u670d\u52a1\u5668\u63a5\u53e3\u653e\u91cf\uff0c\u6982\u7387\u53ef\u7a33\u6b65\u4e0a\u4fee": "If server interfaces ramp, probability can rise steadily",
  "GPU \u5e73\u53f0": "GPU platform",
  "ASIC + AI \u7f51\u7edc": "ASIC + AI networking",
  "\u5149\u6a21\u5757": "Optical modules",
  "\u5149\u5668\u4ef6": "Optical components",
  "\u56fd\u4ea7 AI \u82af\u7247": "Domestic AI chips",
  "AI \u670d\u52a1\u5668\u5185\u5b58\u63a5\u53e3": "AI server memory interface",
  "\u76f4\u63a5\u8d22\u52a1\u9a8c\u8bc1": "Direct financial validation",
  "\u516c\u53f8\u516c\u544a + \u5408\u4f5c\u516c\u544a": "Company filings + partnership announcements",
  "\u8d22\u52a1\u5151\u73b0\u9a8c\u8bc1": "Financial delivery validation",
  "\u8d22\u52a1\u8d28\u91cf\u9a8c\u8bc1": "Financial quality validation",
  "\u9ad8\u5f39\u6027\u8d22\u52a1\u9a8c\u8bc1": "High-elasticity financial validation",
  "\u76f4\u63a5\u53d7\u76ca": "Direct beneficiary",
  "\u76f4\u63a5\u53d7\u76ca, \u5468\u671f\u5c5e\u6027\u5f3a": "Direct beneficiary, cyclical exposure",
  "\u4f9b\u5e94\u94fe\u8d22\u52a1\u9a8c\u8bc1": "Supply-chain financial validation",
  "\u56fd\u4ea7\u66ff\u4ee3\u8d8b\u52bf + \u8d22\u52a1\u9a8c\u8bc1": "Domestic substitution + financial validation",
  "\u4f9b\u5e94\u94fe\u95f4\u63a5\u5229\u597d + \u8d22\u52a1\u9a8c\u8bc1": "Indirect supply-chain tailwind + financial validation",
  "\u884c\u4e1a\u6da8\u8dcc\u5e45": "Industry price change",
  "\u7814\u7a76\u6c60\u8d70\u52bf\u70ed\u5ea6": "Research-pool trend heat",
  "\u884c\u4e1a ETF \u6da8\u8dcc\u5e45": "Industry ETF price change",
  "\u6628\u65e5\u6253\u4e8c\u677f\u4ee5\u4e0a\u8868\u73b0": "Yesterday's second-limit-up group",
  "\u51cf\u80a5\u836f": "Weight-loss drugs",
  "\u521b\u65b0\u533b\u7597\u670d\u52a1": "Innovative medical services",
  "\u809d\u7d20\u6982\u5ff5": "Heparin theme",
  "\u77ed\u5267\u4e92\u52a8\u6e38\u620f": "Short-drama interactive games",
  "\u5feb\u624b\u6982\u5ff5": "Kuaishou theme",
  "\u91cd\u7ec4\u86cb\u767d": "Recombinant proteins",
  "\u6982\u5ff5": "theme",
  "AI\u5236\u836f\uff08\u533b\u7597\uff09": "AI drug discovery",
  "\u9ad8\u5e26\u5bbd\u5185\u5b58": "High-bandwidth memory",
  "\u5148\u8fdb\u5c01\u88c5": "Advanced packaging",
  "FY2027 Q1 \u6536\u5165 816.15 \u4ebf\u7f8e\u5143, \u540c\u6bd4\u7ea6 +85%, \u6bdb\u5229\u7387\u7ea6 74.9%": "FY2027 Q1 revenue was USD 81.615B, about +85% YoY, with gross margin around 74.9%",
  "FY2026 Q2 \u6536\u5165 221.87 \u4ebf\u7f8e\u5143, AI \u534a\u5bfc\u4f53\u6536\u5165 108 \u4ebf\u7f8e\u5143, \u540c\u6bd4 +143%": "FY2026 Q2 revenue was USD 22.187B; AI semiconductor revenue was USD 10.8B, +143% YoY",
  "FY2026 Q3 \u6536\u5165 414.56 \u4ebf\u7f8e\u5143, \u6bdb\u5229\u7387 84.6%": "FY2026 Q3 revenue was USD 41.456B, with gross margin of 84.6%",
  "2026Q1 \u6536\u5165 194.96 \u4ebf\u5143, \u540c\u6bd4 +192%; \u51c0\u5229 57.35 \u4ebf\u5143, \u540c\u6bd4 +262%": "2026 Q1 revenue was RMB 19.496B, +192% YoY; net profit was RMB 5.735B, +262% YoY",
  "2026Q1 \u6536\u5165\u540c\u6bd4 +40.8%, \u51c0\u5229\u540c\u6bd4 +45.8%, \u6bdb\u5229\u7387 56.6%": "2026 Q1 revenue +40.8% YoY; net profit +45.8% YoY; gross margin 56.6%",
  "2026Q1 \u6536\u5165\u540c\u6bd4 +159.6%, \u51c0\u5229\u540c\u6bd4 +185.0%": "2026 Q1 revenue +159.6% YoY; net profit +185.0% YoY",
  "2026Q1 \u6536\u5165\u540c\u6bd4 +19.5%, \u51c0\u5229\u540c\u6bd4 +61.3%, \u6bdb\u5229\u7387 69.8%": "2026 Q1 revenue +19.5% YoY; net profit +61.3% YoY; gross margin 69.8%",
  "\u6838\u5fc3\u951a, \u8ddf\u8e2a\u6307\u5f15\u548c\u6bdb\u5229\u7387": "Core anchor; track guidance and gross margin",
  "\u770b OpenAI \u82af\u7247\u90e8\u7f72\u548c AI \u7f51\u7edc\u6536\u5165": "Track OpenAI chip deployment and AI networking revenue",
  "\u4e0d\u6309\u7ebf\u6027\u6210\u957f\u80a1\u5904\u7406, \u91cd\u70b9\u770b ASP \u548c\u5e93\u5b58": "Do not treat as linear growth; focus on ASP and inventory",
  "\u770b 800G/1.6T \u653e\u91cf\u548c\u6bdb\u5229\u7387": "Track 800G/1.6T ramp and gross margin",
  "\u8d28\u91cf\u4f18\u5148, \u8ddf\u8e2a\u589e\u957f\u518d\u52a0\u901f": "Quality first; track growth re-acceleration",
  "\u5fc5\u987b\u9a8c\u8bc1\u6301\u7eed\u8ba2\u5355\u3001\u56de\u6b3e\u3001\u751f\u6001": "Must verify sustained orders, cash collection, and ecosystem",
  "\u770b\u5229\u6da6\u8d28\u91cf\u548c DDR5/MRCD \u6e17\u900f": "Track profit quality and DDR5/MRCD penetration",
  "HBM \u6982\u5ff5\u70ed\u5ea6\u5f3a, \u4f46 2026Q1 \u6536\u5165\u540c\u6bd4\u4e3a\u8d1f, \u6682\u4e0d\u6309\u76f4\u63a5\u53d7\u76ca\u5904\u7406": "HBM theme heat is strong, but 2026 Q1 revenue was negative YoY; do not classify as a direct beneficiary yet",
  "\u5148\u8fdb\u5c01\u88c5\u4e3b\u9898\u5f3a, \u4f46\u9700\u5206\u9879\u6536\u5165\u548c\u6bdb\u5229\u7387\u9a8c\u8bc1\u540e\u518d\u5347\u683c": "Advanced-packaging theme is strong, but upgrade only after segment revenue and margin validation",
  "\u56fd\u4ea7 GPU \u671f\u6743\u5c5e\u6027, \u5229\u6da6\u548c\u73b0\u91d1\u6d41\u9a8c\u8bc1\u4e0d\u8db3, \u4e0d\u8fdb\u6838\u5fc3\u6c60": "Domestic GPU optionality, but profit and cash-flow validation are insufficient; keep outside the core pool",
  "\u6d77\u5916\u9f99\u5934\u5229\u597d\u82e5\u672a\u70b9\u540d A\u80a1\u516c\u53f8, \u53ea\u80fd\u5f52\u4e3a\u4ea7\u4e1a\u8d8b\u52bf\u6216\u95f4\u63a5\u5229\u597d": "If overseas leaders do not name A-share companies, classify as industry trend or indirect tailwind only",
  "\u672a\u88ab\u516c\u544a\u70b9\u540d\u7684 A\u80a1\u6620\u5c04": "A-share mappings not named in filings",
  "\u4e91\u5382\u5546 Capex": "Cloud capex",
  "MSFT/GOOG/AMZN/META \u8d44\u672c\u5f00\u652f\u548c AI \u670d\u52a1\u5668\u6307\u5f15": "MSFT/GOOG/AMZN/META capex and AI server guidance",
  "\u4e0b\u4e00\u8f6e\u7f8e\u80a1\u5927\u578b\u79d1\u6280\u8d22\u62a5": "Next mega-cap tech earnings round",
  "Capex \u6307\u5f15\u7ee7\u7eed\u4e0a\u4fee\u6216 AI \u670d\u52a1\u5668\u4ea4\u4ed8\u653e\u7f13": "Capex guidance keeps rising or AI server delivery slows",
  "HBM \u5468\u671f\u9876\u90e8": "HBM cycle peak",
  "MU/SK/Samsung ASP\u3001\u5e93\u5b58\u3001\u957f\u671f\u534f\u8bae": "MU/SK/Samsung ASP, inventory, and long-term agreements",
  "MU/SK/Samsung \u8d22\u62a5\u4e0e\u4ef7\u683c\u6708\u5ea6\u6570\u636e": "MU/SK/Samsung earnings and monthly pricing data",
  "ASP \u8f6c\u5f31\u3001\u5e93\u5b58\u4e0a\u5347\u6216\u957f\u534f\u4ef7\u683c\u677e\u52a8": "ASP weakens, inventory rises, or long-term agreement pricing loosens",
  "A\u80a1\u5149\u6a21\u5757\u5151\u73b0": "A-share optical-module delivery",
  "\u4e2d\u9645\u65ed\u521b\u3001\u5929\u5b5a\u901a\u4fe1 Q2/Q3 \u6536\u5165\u548c\u6bdb\u5229\u7387": "Zhongji Innolight and TFC Q2/Q3 revenue and gross margin",
  "A\u80a1 Q2/Q3 \u8d22\u62a5\u4e0e\u4ea4\u6613\u6240\u516c\u544a": "A-share Q2/Q3 earnings and exchange disclosures",
  "\u6536\u5165\u653e\u7f13\u3001\u6bdb\u5229\u7387\u4e0b\u884c\u6216\u6d77\u5916\u5ba2\u6237\u8ba2\u5355\u53d8\u5316": "Revenue slows, margin declines, or overseas customer orders change",
  "\u56fd\u4ea7\u7b97\u529b\u5546\u4e1a\u5316": "Domestic compute commercialization",
  "\u5bd2\u6b66\u7eaa\u5ba2\u6237\u3001\u8ba2\u5355\u3001\u56de\u6b3e\u3001\u8d39\u7528\u7387": "Cambricon customers, orders, collections, and expense ratio",
  "\u5b63\u5ea6\u8d22\u62a5\u3001\u8ba2\u5355\u516c\u544a\u548c\u56de\u6b3e\u62ab\u9732": "Quarterly earnings, order announcements, and collection disclosures",
  "\u590d\u8d2d\u548c\u73b0\u91d1\u6d41\u6539\u5584\u624d\u80fd\u5347\u7ea7": "Upgrade only if repurchase and cash flow improve",
  "\u5148\u8fdb\u5c01\u88c5\u771f\u5b9e\u5f39\u6027": "Real advanced-packaging elasticity",
  "\u957f\u7535\u3001\u534e\u5929\u5148\u8fdb\u5c01\u88c5\u5206\u9879\u6536\u5165\u548c\u6bdb\u5229\u7387": "JCET and Huatian advanced-packaging segment revenue and margin",
  "\u534a\u5bfc\u4f53\u5c01\u6d4b\u516c\u53f8\u5206\u9879\u6536\u5165\u62ab\u9732": "Semiconductor OSAT segment revenue disclosure",
  "\u5148\u8fdb\u5c01\u88c5\u6536\u5165\u548c\u6bdb\u5229\u7387\u540c\u6b65\u6539\u5584": "Advanced-packaging revenue and margin improve together",
  "\u5b8f\u89c2\u4f30\u503c\u7ea6\u675f": "Macro valuation constraint",
  "\u4e2d\u56fd PMI/PPI, \u7f8e\u8054\u50a8\u5229\u7387\u4e0e\u901a\u80c0\u63aa\u8f9e": "China PMI/PPI, Fed rate and inflation wording",
  "\u6bcf\u6b21 CPI/FOMC/PMI \u66f4\u65b0": "Every CPI/FOMC/PMI update",
  "\u5229\u7387\u4e0a\u884c\u6216\u9700\u6c42\u8d70\u5f31\u4f1a\u538b\u5236\u957f\u4e45\u671f\u6210\u957f\u4f30\u503c": "Higher rates or weaker demand pressure long-duration growth valuations",
  "\u8d35\u91d1\u5c5e\u5b8f\u89c2\u8d44\u4ea7": "Precious metals macro assets",
  "COMEX GC/SI \u7ebd\u7ea6\u671f\u8d27\u3001\u4f26\u6566\u73b0\u8d27\u5b9a\u4ef7\u53c2\u8003\u3001GLD/SLV \u8d44\u91d1\u6d41\u3001\u5b9e\u9645\u5229\u7387\u548c\u7f8e\u5143": "COMEX GC/SI futures, London spot pricing reference, GLD/SLV flow, real rates, and the US dollar",
  "\u6bcf\u65e5\u5b8f\u89c2\u8d44\u4ea7\u66f4\u65b0 / \u6bcf\u5468 ETF \u8d44\u91d1\u6d41 / LBMA \u5b9a\u4ef7\u53c2\u8003": "Daily macro-asset update / weekly ETF flow / LBMA pricing reference",
  "\u7ebd\u7ea6\u671f\u8d27\u8d8b\u52bf\u3001\u4f26\u6566\u73b0\u8d27\u53e3\u5f84\u548c ETF \u8d44\u91d1\u6d41\u540c\u65f6\u786e\u8ba4\uff1b\u518d\u8bc4\u4f30 GDX\u3001SIL\u3001\u91d1\u77ff\u80a1\u548c\u767d\u94f6\u4ea7\u4e1a\u94fe": "New York futures trend, London spot reference, and ETF flow must confirm together before reviewing GDX, SIL, miners, or the silver chain",
  "\u5148\u628a\u9ec4\u91d1\u548c\u767d\u94f6\u4f5c\u4e3a\u5b8f\u89c2\u8d44\u4ea7\u52a0\u5165 H^3\uff1aCOMEX \u7ed9\u4ea4\u6613\u4ef7\u683c\uff0c\u4f26\u6566\u73b0\u8d27\u7ed9\u5b9a\u4ef7\u53e3\u5f84\uff0cETF \u8d44\u91d1\u6d41\u7ed9\u62e5\u6324\u5ea6\u9a8c\u8bc1": "Gold and silver enter H^3 first as macro assets: COMEX gives the trading price, London spot gives the pricing reference, and ETF flow checks crowding",
  "COMEX GC/SI\u3001\u4f26\u6566\u73b0\u8d27\u53c2\u8003\u3001GLD/SLV \u62a5\u4ef7\u3001\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u548c ETF \u8d44\u91d1\u6d41": "COMEX GC/SI, London spot reference, GLD/SLV quotes, real rates, the US dollar, and ETF flow",
  "\u65b0\u95fb": "News",
  "\u771f\u5b9e\u9700\u6c42": "Real demand",
  "\u8d22\u52a1\u4f20\u5bfc": "Financial transmission",
  "\u5f39\u6027\u7b5b\u9009": "Elasticity filter",
  "\u9a8c\u8bc1\u8def\u5f84": "Validation path",
  "AI Capex \u4e0a\u4fee, HBM/\u5149\u4e92\u8054/ASIC \u5f3a\u9700\u6c42": "AI capex revisions; strong HBM/optical interconnect/ASIC demand",
  "GPU\u3001ASIC\u3001HBM\u3001\u5149\u6a21\u5757\u3001AI \u7f51\u7edc\u8bbe\u5907\u8ba2\u5355": "GPU, ASIC, HBM, optical-module, and AI networking equipment orders",
  "\u6536\u5165\u3001\u6bdb\u5229\u7387\u3001\u7ecf\u8425\u73b0\u91d1\u6d41\u3001\u6307\u5f15\u4e0a\u4fee": "Revenue, gross margin, operating cash flow, and guidance revisions",
  "\u5e02\u503c\u3001\u5229\u6da6\u57fa\u6570\u3001\u5ba2\u6237\u96c6\u4e2d\u5ea6\u3001\u4ea7\u80fd\u7ea6\u675f": "Market cap, profit base, customer concentration, and capacity constraints",
  "\u516c\u544a\u3001\u8d22\u62a5\u3001\u8c03\u7814\u8bb0\u5f55\u3001\u4ea4\u6613\u6240\u62ab\u9732": "Filings, financial reports, investor records, and exchange disclosures"
};

const zhValueTranslations = {
  "Daily 15:30 Beijing time": "\u6bcf\u65e5\u5317\u4eac\u65f6\u95f4 15:30",
  "China": "\u4e2d\u56fd",
  "United States": "\u7f8e\u56fd",
  "Gold": "\u9ec4\u91d1",
  "Silver": "\u767d\u94f6",
  "Gold/Silver ratio": "\u91d1\u94f6\u6bd4",
  "SPDR Gold Shares": "SPDR \u9ec4\u91d1 ETF",
  "iShares Silver Trust": "iShares \u767d\u94f6 ETF",
  "ETF proxy ratio": "ETF \u4ee3\u7406\u6bd4\u503c",
  "COMEX gold futures": "COMEX \u9ec4\u91d1\u671f\u8d27",
  "COMEX silver futures": "COMEX \u767d\u94f6\u671f\u8d27",
  "COMEX futures ratio": "COMEX \u91d1\u94f6\u6bd4",
  "LBMA London spot gold reference": "LBMA \u4f26\u6566\u73b0\u8d27\u91d1\u53c2\u8003",
  "LBMA London spot silver reference": "LBMA \u4f26\u6566\u73b0\u8d27\u94f6\u53c2\u8003",
  "ETF flow proxy": "ETF \u8d44\u91d1\u6d41\u4ee3\u7406",
  "Macro hedge": "\u5b8f\u89c2\u5bf9\u51b2",
  "High-beta precious metal": "\u9ad8 beta \u8d35\u91d1\u5c5e",
  "Relative confirmation": "\u76f8\u5bf9\u5f3a\u5f31\u9a8c\u8bc1",
  "Watch": "\u89c2\u5bdf",
  "Gate": "\u95f8\u95e8",
  "Gold is first a macro hedge; miners are a later equity-chain extension": "\u9ec4\u91d1\u9996\u5148\u662f\u5b8f\u89c2\u5bf9\u51b2\u8d44\u4ea7\uff0c\u77ff\u80a1\u662f\u540e\u7eed\u6743\u76ca\u94fe\u6269\u5c55",
  "Confirm with COMEX GC, London spot reference, real rates, US dollar, central-bank demand, and GLD flows before mapping to miners": "\u5148\u7528 COMEX GC\u3001\u4f26\u6566\u73b0\u8d27\u53c2\u8003\u3001\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u3001\u592e\u884c\u9700\u6c42\u548c GLD \u8d44\u91d1\u6d41\u9a8c\u8bc1\uff0c\u518d\u6620\u5c04\u5230\u77ff\u80a1",
  "Track GC and the London spot reference first; consider GDX only after trend and fund-flow confirmation": "\u5148\u8ddf\u8e2a GC \u4e0e\u4f26\u6566\u73b0\u8d27\u53c2\u8003\uff1b\u53ea\u6709\u8d8b\u52bf\u548c\u8d44\u91d1\u6d41\u786e\u8ba4\u540e\u518d\u8003\u8651 GDX",
  "Confirm with COMEX SI, London spot reference, gold trend, industrial demand, supply deficit, and SLV flows": "\u7528 COMEX SI\u3001\u4f26\u6566\u73b0\u8d27\u53c2\u8003\u3001\u9ec4\u91d1\u8d8b\u52bf\u3001\u5de5\u4e1a\u9700\u6c42\u3001\u4f9b\u9700\u7f3a\u53e3\u548c SLV \u8d44\u91d1\u6d41\u9a8c\u8bc1",
  "Track SI as a macro asset; consider SIL or the silver chain only after demand confirmation": "\u5148\u628a SI \u5f53\u5b8f\u89c2\u8d44\u4ea7\u8ddf\u8e2a\uff1b\u9700\u6c42\u786e\u8ba4\u540e\u518d\u8003\u8651 SIL \u6216\u767d\u94f6\u4ea7\u4e1a\u94fe",
  "Use ratio repair as the bridge from macro assets to miners or industrial-chain research": "\u7528\u91d1\u94f6\u6bd4\u4fee\u590d\u4f5c\u4e3a\u4ece\u5b8f\u89c2\u8d44\u4ea7\u8fc7\u6e21\u5230\u77ff\u80a1\u6216\u4ea7\u4e1a\u94fe\u7814\u7a76\u7684\u6865",
  "Yahoo Finance / COMEX GC + GLD; LBMA reference": "Yahoo Finance / COMEX GC + GLD\uff1bLBMA \u53c2\u8003",
  "Yahoo Finance / COMEX SI + SLV; LBMA reference": "Yahoo Finance / COMEX SI + SLV\uff1bLBMA \u53c2\u8003",
  "Yahoo Finance / COMEX GC + SI": "Yahoo Finance / COMEX GC + SI",
  "FRED macro pressure": "FRED \u5b8f\u89c2\u538b\u529b",
  "WGC gold flows": "WGC \u9ec4\u91d1\u8d44\u91d1\u6d41",
  "Silver Institute demand": "Silver Institute \u767d\u94f6\u9700\u6c42",
  "Price trend reference": "\u4ef7\u683c\u8d8b\u52bf\u53c2\u8003",
  "Real rates / dollar / policy": "\u5b9e\u9645\u5229\u7387 / \u7f8e\u5143 / \u653f\u7b56\u5229\u7387",
  "Gold ETF flows / central-bank demand": "\u9ec4\u91d1 ETF \u8d44\u91d1\u6d41 / \u592e\u884c\u9700\u6c42",
  "Supply deficit / industrial demand": "\u4f9b\u9700\u7f3a\u53e3 / \u5de5\u4e1a\u9700\u6c42",
  "Delayed public market reference": "\u5ef6\u8fdf\u516c\u5f00\u5e02\u573a\u53c2\u8003",
  "Official data": "\u5b98\u65b9\u6570\u636e",
  "Official research factor": "\u5b98\u65b9\u7814\u7a76\u56e0\u5b50",
  "Reference only": "\u4ec5\u4f5c\u53c2\u8003",
  "Core judgment factor": "\u6838\u5fc3\u5224\u65ad\u56e0\u5b50",
  "Trend reference": "\u8d8b\u52bf\u53c2\u8003",
  "Daily / weekly": "\u6bcf\u65e5 / \u6bcf\u5468",
  "Weekly / monthly": "\u6bcf\u5468 / \u6bcf\u6708",
  "Annual / periodic": "\u5e74\u5ea6 / \u9636\u6bb5\u6027",
  "Daily": "\u6bcf\u65e5",
  "FRED API": "FRED API",
  "World Gold Council": "\u4e16\u754c\u9ec4\u91d1\u534f\u4f1a",
  "Silver Institute": "\u767d\u94f6\u534f\u4f1a",
  "Delayed public market reference": "\u5ef6\u8fdf\u516c\u5f00\u5e02\u573a\u53c2\u8003",
  "Real rates and the dollar decide the macro tailwind or headwind; price strength needs flow or safe-haven demand when rates stay high": "\u5b9e\u9645\u5229\u7387\u548c\u7f8e\u5143\u51b3\u5b9a\u5b8f\u89c2\u987a\u98ce\u6216\u9006\u98ce\uff1b\u5229\u7387\u7ef4\u6301\u9ad8\u4f4d\u65f6\uff0c\u4ef7\u683c\u8d70\u5f3a\u9700\u8981\u8d44\u91d1\u6d41\u6216\u907f\u9669\u9700\u6c42\u8865\u507f",
  "FRED confirms the rate and dollar backdrop; use this as the first gate before treating metals strength as more than price momentum": "FRED \u786e\u8ba4\u5229\u7387\u548c\u7f8e\u5143\u80cc\u666f\uff1b\u5728\u628a\u8d35\u91d1\u5c5e\u8d70\u5f3a\u89e3\u91ca\u4e3a\u8d85\u8d8a\u4ef7\u683c\u52a8\u91cf\u524d\uff0c\u5148\u8fc7\u8fd9\u4e00\u5173",
  "ETF flows and central-bank demand decide whether gold strength has fund-flow and reserve-demand support": "ETF \u8d44\u91d1\u6d41\u548c\u592e\u884c\u9700\u6c42\u51b3\u5b9a\u9ec4\u91d1\u4e0a\u6da8\u662f\u5426\u6709\u8d44\u91d1\u4e0e\u50a8\u5907\u9700\u6c42\u652f\u6491",
  "Supply deficit and industrial demand decide whether silver can move from gold beta into an industrial-chain thesis": "\u4f9b\u9700\u7f3a\u53e3\u548c\u5de5\u4e1a\u9700\u6c42\u51b3\u5b9a\u767d\u94f6\u80fd\u5426\u4ece\u9ec4\u91d1 beta \u6269\u5c55\u4e3a\u4ea7\u4e1a\u94fe\u5047\u8bbe",
  "COMEX/Yahoo delayed prices are trend references only; they are not redistributed as official CME or LBMA quote data": "COMEX/Yahoo \u5ef6\u8fdf\u4ef7\u683c\u53ea\u4f5c\u4e3a\u8d8b\u52bf\u53c2\u8003\uff1b\u4e0d\u4f5c\u4e3a CME \u6216 LBMA \u5b98\u65b9\u62a5\u4ef7\u518d\u5206\u53d1",
  "Gold is a macro hedge, not an equity-chain signal yet": "\u9ec4\u91d1\u5148\u662f\u5b8f\u89c2\u5bf9\u51b2\u8d44\u4ea7\uff0c\u8fd8\u4e0d\u662f\u6743\u76ca\u4ea7\u4e1a\u94fe\u4fe1\u53f7",
  "Silver is gold beta plus industrial demand, so confirmation must be stricter": "\u767d\u94f6\u662f\u9ec4\u91d1 beta + \u5de5\u4e1a\u9700\u6c42\uff0c\u56e0\u6b64\u9a8c\u8bc1\u8981\u66f4\u4e25",
  "Ratio repair decides whether silver is confirming or merely lagging gold": "\u91d1\u94f6\u6bd4\u4fee\u590d\u51b3\u5b9a\u767d\u94f6\u662f\u5426\u771f\u6b63\u786e\u8ba4\u9ec4\u91d1\u884c\u60c5",
  "Confirm with real rates, US dollar, central-bank demand, and ETF flows before mapping to miners": "\u5148\u7528\u5b9e\u9645\u5229\u7387\u3001\u7f8e\u5143\u3001\u592e\u884c\u9700\u6c42\u548c ETF \u8d44\u91d1\u6d41\u9a8c\u8bc1\uff0c\u518d\u6620\u5c04\u5230\u77ff\u80a1",
  "Confirm with gold trend, industrial demand, supply deficit, and gold/silver ratio repair": "\u7528\u9ec4\u91d1\u8d8b\u52bf\u3001\u5de5\u4e1a\u9700\u6c42\u3001\u4f9b\u9700\u7f3a\u53e3\u548c\u91d1\u94f6\u6bd4\u4fee\u590d\u9a8c\u8bc1",
  "Silver leadership requires the ratio to fall while both metals stay above trend": "\u767d\u94f6\u9886\u6da8\u9700\u8981\u91d1\u94f6\u6bd4\u4e0b\u884c\uff0c\u4e14\u4e24\u8005\u90fd\u4fdd\u6301\u8d8b\u52bf\u4e0a\u65b9",
  "GDP growth": "GDP \u589e\u901f",
  "Manufacturing PMI": "\u5236\u9020\u4e1a PMI",
  "Industrial output": "\u5de5\u4e1a\u589e\u52a0\u503c",
  "Retail sales": "\u793e\u4f1a\u6d88\u8d39\u54c1\u96f6\u552e",
  "CPI": "CPI",
  "PPI": "PPI",
  "Fixed asset investment": "\u56fa\u5b9a\u8d44\u4ea7\u6295\u8d44",
  "Goods exports": "\u8d27\u7269\u51fa\u53e3",
  "FX reserves": "\u5916\u6c47\u50a8\u5907",
  "Fed funds target range": "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4",
  "CPI YoY": "CPI \u540c\u6bd4",
  "Unemployment rate": "\u5931\u4e1a\u7387",
  "Real GDP": "\u5b9e\u9645 GDP",
  "10Y Treasury yield": "10 \u5e74\u671f\u7f8e\u503a\u6536\u76ca\u7387",
  "Retail sales MoM": "\u96f6\u552e\u9500\u552e\u73af\u6bd4",
  "Nonfarm payrolls": "\u975e\u519c\u5c31\u4e1a",
  "2026 H1 YoY / Q2 +4.3%": "2026 \u4e0a\u534a\u5e74\u540c\u6bd4 / Q2 +4.3%",
  "June 2026 YoY": "2026 \u5e74 6 \u6708\u540c\u6bd4",
  "Jan-Jun 2026 YoY": "2026 \u5e74 1-6 \u6708\u540c\u6bd4",
  "2026 H1 YoY": "2026 \u4e0a\u534a\u5e74\u540c\u6bd4",
  "June 2026, -0.75% MoM": "2026 \u5e74 6 \u6708\uff0c\u73af\u6bd4 -0.75%",
  "Latest FOMC range": "\u6700\u65b0 FOMC \u533a\u95f4",
  "FRED latest": "FRED \u6700\u65b0\u503c",
  "QoQ SAAR": "\u5b63\u8c03\u6298\u5e74\u7387",
  "Monthly change": "\u6708\u5ea6\u53d8\u5316",
  "Growth remains positive, but Q2 slowed": "\u589e\u957f\u4ecd\u4e3a\u6b63\uff0c\u4f46 Q2 \u6709\u6240\u653e\u7f13",
  "Back in expansion territory": "\u56de\u5230\u6269\u5f20\u533a\u95f4",
  "Production remains firm": "\u751f\u4ea7\u4ecd\u6709\u652f\u6491",
  "Consumption still soft": "\u6d88\u8d39\u4ecd\u504f\u5f31",
  "Mild inflation": "\u6e29\u548c\u901a\u80c0",
  "Factory-gate prices remain firm": "\u5de5\u4e1a\u54c1\u51fa\u5382\u4ef7\u683c\u4ecd\u5f3a",
  "Investment remains a drag": "\u6295\u8d44\u4ecd\u662f\u62d6\u7d2f\u9879",
  "External demand strong": "\u5916\u9700\u8f83\u5f3a",
  "Reserve buffer still high": "\u50a8\u5907\u7f13\u51b2\u4ecd\u8db3",
  "Policy rate still caps valuation expansion": "\u653f\u7b56\u5229\u7387\u4ecd\u538b\u5236\u4f30\u503c\u6269\u5f20",
  "Inflation is the rate-cut gatekeeper": "\u901a\u80c0\u4ecd\u662f\u964d\u606f\u95e8\u69db",
  "Labor market still orderly": "\u52b3\u52a8\u529b\u5e02\u573a\u4ecd\u6709\u79e9\u5e8f",
  "Growth remains positive": "\u589e\u957f\u4ecd\u4e3a\u6b63",
  "Discount-rate pressure remains high": "\u8d34\u73b0\u7387\u538b\u529b\u4ecd\u9ad8",
  "Demand still expanding": "\u9700\u6c42\u4ecd\u5728\u6269\u5f20",
  "Hiring positive but slower": "\u62db\u8058\u4ecd\u4e3a\u6b63\uff0c\u4f46\u8282\u594f\u653e\u7f13",
  "NBS": "\u56fd\u5bb6\u7edf\u8ba1\u5c40",
  "GACC / Xinhua": "\u6d77\u5173\u603b\u7f72 / \u65b0\u534e\u793e",
  "SAFE": "\u5916\u6c47\u5c40",
  "FRED / Federal Reserve": "FRED / \u7f8e\u8054\u50a8",
  "FRED / BLS": "FRED / \u7f8e\u56fd\u52b3\u5de5\u7edf\u8ba1\u5c40",
  "FRED / BEA": "FRED / \u7f8e\u56fd\u7ecf\u6d4e\u5206\u6790\u5c40",
  "FRED / Treasury": "FRED / \u7f8e\u56fd\u8d22\u653f\u90e8",
  "FRED / Census": "FRED / \u7f8e\u56fd\u4eba\u53e3\u666e\u67e5\u5c40"
};

const state = {
  data: null,
  view: "watchlist",
  lang: "en-US",
  selectedSymbol: null
};

const t = (key) => i18n[state.lang][key] || i18n["en-US"][key] || key;

const trValue = (value) => {
  if (value === null || value === undefined) return "";
  if (state.lang === "en-US") return valueTranslations[value] || value;
  return zhValueTranslations[value] || value;
};

function getFrameworkCards() {
  return i18n[state.lang].framework;
}

function applyStaticText() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  const select = document.getElementById("languageSelect");
  if (select) select.value = state.lang;
}

function setLanguage(lang) {
  state.lang = i18n[lang] ? lang : "en-US";
  localStorage.setItem("h3-language", state.lang);
  applyStaticText();
  if (state.data) render(state.data);
}

const fmtPct = (value) => {
  if (value === null || value === undefined || Number.isNaN(value)) return "n/a";
  const sign = value > 0 ? "+" : "";
  return `${sign}${Number(value).toFixed(2)}%`;
};

const pctClass = (value) => (Number(value) >= 0 ? "up" : "down");
const clampScore = (score) => Math.max(0, Math.min(100, Number(score) || 0));

const signedTone = (value) => {
  const text = String(value || "").trim();
  if (/^\+/.test(text) || /[\s,(]\+\d/.test(text)) return "up";
  if (/^-/.test(text) || /[\s,(]-\d/.test(text)) return "down";
  return "neutral";
};

const barColor = (score) => {
  if (score >= 75) return "var(--tertiary)";
  if (score >= 55) return "var(--secondary)";
  if (score >= 40) return "var(--warn)";
  return "var(--primary)";
};

function setView(view) {
  state.view = view;
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `view-${view}`);
  });
}

function renderFrameworkGrid() {
  document.getElementById("frameworkGrid").innerHTML = getFrameworkCards().map((item) => `
    <article class="framework-card">
      <span>${item.key}</span>
      <strong>${item.name}</strong>
      <h3>${item.label}</h3>
      <p>${item.body}</p>
      <small>${item.signal}</small>
    </article>
  `).join("");
}

function renderTicker(indices) {
  const root = document.getElementById("tickerStrip");
  const items = [...indices, ...indices, ...indices];
  root.innerHTML = items.map((item) => `
    <button class="ticker-card" data-view="macro" title="${item.read || ""}">
      <span>${item.symbol}</span>
      <strong>${item.name}</strong>
      <span class="ticker-price">${Number(item.price).toFixed(2)}</span>
      <span class="change ${pctClass(item.changePct)}">${fmtPct(item.changePct)}</span>
    </button>
  `).join("");
}

function renderIndexMatrix(indices) {
  document.getElementById("indexMatrix").innerHTML = indices.map((item) => {
    const dma = item.dma || {};
    const maText = ["ma20", "ma50", "ma100", "ma200"].map((key) => {
      const value = dma[key];
      const label = key.toUpperCase().replace("MA", "MA ");
      return `<span>${label}: ${fmtPct(value)}</span>`;
    }).join("");
    return `
      <article class="index-card">
        <header><span>${item.market}</span><strong>${item.symbol}</strong></header>
        <h3>${item.name}</h3>
        <div class="index-price">${Number(item.price).toFixed(2)} <b class="${pctClass(item.changePct)}">${fmtPct(item.changePct)}</b></div>
        <div class="dma-inline">${maText}</div>
        <p>${item.read || ""}</p>
      </article>
    `;
  }).join("");
}

function renderHeatmap(data) {
  const aShareCells = data.sectors.slice(0, 12).map((item) => ({
    market: trValue("A\u80a1"),
    name: trValue(item.name),
    value: Number(item.changePct) || 0,
    display: fmtPct(item.changePct),
    metric: trValue("\u884c\u4e1a\u6da8\u8dcc\u5e45"),
    leader: trValue(item.leader)
  }));
  const usSectorSource = Array.isArray(data.usSectors) && data.usSectors.length > 0
    ? data.usSectors
    : data.companies.filter((item) => item.market === "\u7f8e\u80a1" || item.market === "US");
  const usCells = usSectorSource
    .slice(0, 12)
    .map((item) => ({
      market: trValue("\u7f8e\u80a1"),
      name: trValue(item.name),
      value: Number(item.changePct ?? item.dmaHealth) || 0,
      display: item.changePct === undefined ? `GF-DMA ${clampScore(item.dmaHealth).toFixed(0)}` : fmtPct(item.changePct),
      metric: item.changePct === undefined ? trValue("\u7814\u7a76\u6c60\u8d70\u52bf\u70ed\u5ea6") : trValue("\u884c\u4e1a ETF \u6da8\u8dcc\u5e45"),
      leader: item.symbol ? `${item.symbol}${item.price ? ` / ${Number(item.price).toFixed(2)}` : ""}` : item.leader,
    }));
  const cells = [...aShareCells, ...usCells];
  const max = Math.max(...cells.map((item) => Math.abs(item.value)), 1);
  document.getElementById("sectorHeatmap").innerHTML = cells.map((item) => {
    const alpha = Math.max(0.08, Math.abs(item.value) / max * 0.42).toFixed(2);
    const tone = item.value >= 0 ? "up" : "down";
    return `
      <div class="heat-cell ${tone}" style="--a:${alpha}">
        <div>
          <span class="heat-market">${item.market}</span>
          <span>${item.name}</span>
          <strong>${item.display}</strong>
        </div>
        <small>${t("metricType")}: ${item.metric}<br>${t("leader")}: ${item.leader}</small>
      </div>
    `;
  }).join("");
}

function marketMood(...items) {
  const values = items
    .filter(Boolean)
    .map((item) => Number(item.changePct))
    .filter((value) => !Number.isNaN(value));
  if (!values.length) return t("dailyMixed");
  if (values.every((value) => value >= 0)) return t("dailyPositive");
  if (values.every((value) => value < 0)) return t("dailyDefensive");
  return t("dailyMixed");
}

function dailyIndexText(item) {
  if (!item) return "";
  return `<strong class="${pctClass(item.changePct)}">${item.name} ${fmtPct(item.changePct)}</strong>`;
}

function dailyHeatText(market, item) {
  if (!item) return "";
  return `${market} ${trValue(item.name)} <strong class="${pctClass(item.changePct)}">${fmtPct(item.changePct)}</strong>`;
}

function renderDailyCore(data) {
  const csi300 = pickIndex(data, ["sh000300"]);
  const qqq = pickIndex(data, ["QQQ"]);
  const topA = topByChange(data.sectors);
  const topUs = topByChange(data.usSectors);
  const watch = (data.watchItems || [])[0];
  const marketLine = [dailyIndexText(csi300), dailyIndexText(qqq)].filter(Boolean).join(" / ");
  const themeLine = [
    dailyHeatText(trValue("A\u80a1"), topA),
    dailyHeatText(trValue("\u7f8e\u80a1"), topUs)
  ].filter(Boolean).join(" / ");
  const verifyEvent = (watch?.events || [])[0];
  const verifyLine = watch
    ? `${trValue(watch.item)}: ${trValue(verifyEvent?.reason || watch.trigger || watch.metric)}`
    : t("unknown");
  const lines = [
    { label: t("dailyMarket"), body: `${marketLine || t("unknown")} -> ${marketMood(csi300, qqq)}` },
    { label: t("dailyTheme"), body: topA && topUs ? `${themeLine}; ${t("leader")}: ${trValue(topA.leader)}` : themeLine || t("unknown") },
    { label: t("dailyVerify"), body: verifyLine }
  ];

  document.getElementById("dailyCore").innerHTML = lines.map((item) => `
    <span><b>${item.label}</b>${item.body}</span>
  `).join("");
}

function renderDailyVerdict(data) {
  const csi300 = pickIndex(data, ["sh000300"]);
  const qqq = pickIndex(data, ["QQQ"]);
  const topA = topByChange(data.sectors);
  const topUs = topByChange(data.usSectors);
  const strongest = [...(data.companies || [])].sort((a, b) => (Number(b.evidenceScore || b.quality) || 0) - (Number(a.evidenceScore || a.quality) || 0))[0];
  const watch = (data.watchItems || [])[0];
  const event = (watch?.events || [])[0];
  const chinaPmi = pickMacro(data, ["Manufacturing PMI", "\u5236\u9020\u4e1a PMI"]);
  const usRate = pickMacro(data, ["Fed funds target range", "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4"]);
  const cards = [
    {
      label: t("verdictMarket"),
      value: marketMood(csi300, qqq),
      detail: [dailyIndexText(csi300), dailyIndexText(qqq)].filter(Boolean).join(" / ") || t("unknown"),
      score: 64
    },
    {
      label: t("verdictTheme"),
      value: topUs ? `${trValue(topUs.name)} ${fmtPct(topUs.changePct)}` : t("unknown"),
      detail: topA ? `${trValue("A\u80a1")} ${trValue(topA.name)} / ${t("leader")}: ${trValue(topA.leader)}` : t("unknown"),
      score: Math.abs(Number(topUs?.changePct) || 0) * 18
    },
    {
      label: t("verdictEvidence"),
      value: strongest ? `${strongest.name} / ${trValue(strongest.status)}` : t("unknown"),
      detail: strongest ? `${trValue(strongest.evidenceType)}; ${trValue(strongest.events?.[0]?.reason || strongest.latest)}` : t("unknown"),
      score: strongest?.evidenceScore
    },
    {
      label: t("verdictAction"),
      value: watch ? trValue(watch.item) : t("unknown"),
      detail: trValue(event?.reason || watch?.trigger) || t("unknown"),
      score: 76
    },
    {
      label: t("verdictMacro"),
      value: [
        chinaPmi ? `PMI ${chinaPmi.value}` : "",
        usRate ? `Fed ${usRate.value}` : ""
      ].filter(Boolean).join(" / ") || t("unknown"),
      detail: t("radarMacroGateDetail"),
      score: 58
    }
  ];

  document.getElementById("dailyVerdict").innerHTML = cards.map((item) => {
    const score = clampScore(item.score);
    return `
      <article class="verdict-card" style="--w:${score}%;--c:${barColor(score)}">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
        <p>${item.detail}</p>
      </article>
    `;
  }).join("");
}

function hasText(value, patterns) {
  const text = String(value || "").toLowerCase();
  return patterns.some((pattern) => text.includes(pattern.toLowerCase()));
}

function renderResearchCore(data) {
  const companies = data.companies || [];
  const flow = data.hypothesisFlow || [];
  const watchItems = data.watchItems || [];
  const thesis = flow[0] || {};
  const transmission = flow[2] || flow[1] || {};
  const directCount = companies.filter((item) =>
    hasText(`${item.classification} ${item.evidenceType}`, ["\u76f4\u63a5", "direct"])
  ).length;
  const supplyChainCount = companies.filter((item) =>
    hasText(`${item.classification} ${item.evidenceType}`, ["\u4f9b\u5e94\u94fe", "supply-chain"])
  ).length;
  const topGrowth = [...companies].sort((a, b) => (Number(b.growth) || 0) - (Number(a.growth) || 0))[0];
  const qualityAnchor = [...companies].sort((a, b) => (Number(b.quality) || 0) - (Number(a.quality) || 0))[0];
  const nextCheck = watchItems[0] || {};
  const evidenceValue = `${directCount} ${t("coreDirect")} / ${supplyChainCount} ${t("coreSupplyChain")}`;
  const qualityText = qualityAnchor
    ? `${t("coreQualityAnchor")}: ${qualityAnchor.name} ${clampScore(qualityAnchor.quality).toFixed(0)}/100`
    : `${companies.length} ${t("coreResearchPool")}`;
  const coreCards = [
    {
      label: t("coreThesis"),
      value: trValue(thesis.label) || t("unknown"),
      detail: trValue(transmission.label) || t("unknown"),
      score: thesis.score
    },
    {
      label: t("coreEvidence"),
      value: evidenceValue,
      detail: `${companies.length} ${t("coreResearchPool")} / ${qualityText}`,
      score: qualityAnchor?.quality
    },
    {
      label: t("coreElasticity"),
      value: topGrowth ? `${topGrowth.name} ${Number(topGrowth.growth).toFixed(1)}%` : t("unknown"),
      detail: topGrowth ? trValue(topGrowth.action) : t("unknown"),
      score: topGrowth?.growth
    },
    {
      label: t("coreNextCheck"),
      value: trValue(nextCheck.item) || t("unknown"),
      detail: trValue(nextCheck.metric) || t("unknown"),
      score: 76
    }
  ];

  document.getElementById("researchCore").innerHTML = coreCards.map((item) => `
    <article class="research-core-card" style="--w:${clampScore(item.score)}%;--c:${barColor(clampScore(item.score))}">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.detail}</p>
    </article>
  `).join("");
}

function getFrameworkReadItems(company) {
  const framework = company?.framework || {};
  return [
    { key: "serenity", label: t("frameworkSerenity"), data: framework.serenity },
    { key: "tamAdjPeg", label: t("frameworkTam"), data: framework.tamAdjPeg },
    { key: "gfDma", label: t("frameworkGfDma"), data: framework.gfDma },
    { key: "bayesian", label: t("frameworkBayesian"), data: framework.bayesian }
  ];
}

function renderScorePill(label, value) {
  const score = clampScore(value);
  return `
    <div class="score-pill" style="--w:${score}%;--c:${barColor(score)}">
      <span>${label}</span>
      <strong>${score.toFixed(0)}</strong>
    </div>
  `;
}

function renderDisciplineCards(company) {
  const rows = [
    { label: t("detailUpgrade"), value: company.upgradeCondition },
    { label: t("detailDowngrade"), value: company.downgradeCondition },
    { label: t("detailInvalidation"), value: company.invalidationCondition }
  ];
  return rows.map((item) => `
    <article class="discipline-card">
      <span>${item.label}</span>
      <p>${trValue(item.value) || t("unknown")}</p>
    </article>
  `).join("");
}

function renderEventLog(events) {
  const rows = (events || []).slice(0, 3);
  if (!rows.length) return "";
  return rows.map((event) => `
    <article class="event-row">
      <header>
        <span>${event.date || t("unknown")}</span>
        <strong>${trValue(event.from) || t("unknown")} -> ${trValue(event.to) || t("unknown")}</strong>
      </header>
      <p><b>${t("eventReason")}:</b> ${trValue(event.reason) || t("unknown")}</p>
      <p><b>${t("eventEvidence")}:</b> ${trValue(event.evidence) || t("unknown")}</p>
      <small>${t("eventSource")}: ${trValue(event.source) || t("unknown")}</small>
    </article>
  `).join("");
}

function evidenceSourceType(company) {
  const source = `${company.source || ""} ${company.url || ""}`;
  if (/SEC|Broadcom|IR|Companyfacts/i.test(source)) return t("evidenceCompany");
  if (/cninfo|sse|szse|交易所|公告/i.test(source)) return t("evidenceExchange");
  if (/东方财富|Eastmoney|Nasdaq|Yahoo/i.test(source)) return t("evidenceMarket");
  return t("evidenceIndustry");
}

function evidenceStatus(company) {
  const text = `${company.evidenceType || ""} ${company.classification || ""}`;
  if (hasText(text, ["\u8d22\u52a1", "financial", "\u76f4\u63a5"])) return t("evidenceVerified");
  if (hasText(text, ["\u95f4\u63a5", "indirect", "\u4f9b\u5e94\u94fe"])) return t("evidenceMapped");
  return t("evidencePending");
}

function renderEvidenceMap(company) {
  const rows = [
    { label: t("evidenceSourceType"), value: evidenceSourceType(company), detail: trValue(company.source) },
    { label: t("evidenceFinancial"), value: trValue(company.evidenceType) || t("unknown"), detail: trValue(company.latest) },
    { label: t("evidenceStatus"), value: evidenceStatus(company), detail: trValue(company.classification) },
    { label: t("evidenceLatest"), value: trValue(company.events?.[0]?.evidence || company.source) || t("unknown"), detail: trValue(company.events?.[0]?.source || company.source) }
  ];
  return `
    <section class="evidence-map">
      <header><span>${t("evidenceMapTitle")}</span></header>
      <div class="evidence-grid">
        ${rows.map((item) => `
          <article class="evidence-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <p>${item.detail || t("unknown")}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function findCompany(symbol) {
  return (state.data?.companies || []).find((item) => item.symbol === symbol);
}

function setSelectedCompany(symbol) {
  state.selectedSymbol = symbol;
  setView("research");
  renderCompanyDetail();
  document.getElementById("companyDetailPanel")?.scrollIntoView({ block: "nearest" });
}

function renderCompanyDetail() {
  const panel = document.getElementById("companyDetailPanel");
  const root = document.getElementById("companyDetail");
  const title = document.getElementById("companyDetailTitle");
  const sub = document.getElementById("companyDetailSub");
  const company = state.selectedSymbol ? findCompany(state.selectedSymbol) : null;

  if (!panel || !root) return;
  if (!company) {
    panel.hidden = true;
    root.innerHTML = "";
    return;
  }
  state.selectedSymbol = company.symbol;
  panel.hidden = false;
  title.textContent = `${company.name} / ${company.symbol}`;
  sub.textContent = `${trValue(company.status) || t("unknown")} / ${trValue(company.lastDecision) || t("unknown")}`;

  const frameworkRows = getFrameworkReadItems(company).map((item) => {
    const score = clampScore(item.data?.score);
    return `
      <article class="framework-read" style="--w:${score}%;--c:${barColor(score)}">
        <header>
          <span>${item.label}</span>
          <strong>${score.toFixed(0)}</strong>
        </header>
        <p>${trValue(item.data?.read) || t("unknown")}</p>
      </article>
    `;
  }).join("");

  root.innerHTML = `
    <div class="detail-summary">
      <div>
        <span>${t("detailStatus")}</span>
        <strong>${trValue(company.status) || t("unknown")}</strong>
      </div>
      <div>
        <span>${t("detailDecision")}</span>
        <strong>${trValue(company.lastDecision) || t("unknown")}</strong>
      </div>
      <div>
        <span>${t("detailUpdated")}</span>
        <strong>${company.researchUpdatedAt || t("unknown")}</strong>
      </div>
      ${renderScorePill(t("detailEvidenceScore"), company.evidenceScore)}
      ${renderScorePill(t("detailValuationScore"), company.valuationScore)}
    </div>
    <div class="detail-copy">
      <div>
        <span>${t("detailLatest")}</span>
        <p>${trValue(company.latest)}</p>
      </div>
      <div>
        <span>${t("detailCatalyst")}</span>
        <p>${trValue(company.nextCatalyst) || t("unknown")}</p>
      </div>
      <div>
        <span>${t("detailAction")}</span>
        <p>${trValue(company.action)}</p>
      </div>
    </div>
    ${renderEvidenceMap(company)}
    <div class="discipline-grid">
      ${renderDisciplineCards(company)}
    </div>
    <section class="event-log">
      <header>
        <span>${t("detailHistory")}</span>
      </header>
      <div class="event-list">
        ${renderEventLog(company.events)}
      </div>
    </section>
    <div class="framework-read-grid">
      ${frameworkRows}
    </div>
  `;
}

function buildValidationQueue(data) {
  const topUs = Array.isArray(data.usSectors) ? data.usSectors[0] : null;
  const topA = Array.isArray(data.sectors) ? data.sectors[0] : null;
  const topCompany = [...(data.companies || [])].sort((a, b) => (Number(b.dmaHealth) || 0) - (Number(a.dmaHealth) || 0))[0];
  const watchItems = data.watchItems || [];
  const rows = [];

  if (topUs) {
    rows.push({
      market: trValue("\u7f8e\u80a1"),
      topic: `${trValue(topUs.name)} / ${topUs.symbol}`,
      metric: fmtPct(topUs.changePct),
      question: t("queueTopUsQuestion"),
      next: t("queueTopUsNext"),
      evidence: t("industryHeat")
    });
  }

  if (topA) {
    rows.push({
      market: trValue("A\u80a1"),
      topic: trValue(topA.name),
      metric: fmtPct(topA.changePct),
      question: t("queueTopAQuestion"),
      next: `${t("leader")}: ${trValue(topA.leader)}. ${t("queueTopANext")}`,
      evidence: t("industryHeat")
    });
  }

  if (topCompany) {
    rows.push({
      market: trValue(topCompany.market),
      topic: `${topCompany.name} / ${topCompany.symbol}`,
      metric: `GF-DMA ${clampScore(topCompany.dmaHealth).toFixed(0)}`,
      question: t("queueCompanyQuestion"),
      next: trValue(topCompany.action) || t("queueCompanyNext"),
      evidence: trValue(topCompany.evidenceType) || t("financialValidation")
    });
  }

  watchItems.slice(0, 2).forEach((item) => {
    rows.push({
      market: t("watchItemLabel"),
      topic: trValue(item.item),
      metric: trValue(item.priority),
      question: t("queueWatchQuestion"),
      next: trValue(item.metric),
      evidence: t("watchItemLabel"),
      status: trValue(item.status),
      window: trValue(item.window),
      trigger: trValue(item.trigger),
      relatedSymbols: item.relatedSymbols,
      lastCheck: item.lastCheck
    });
  });

  return rows;
}

function formatRelatedSymbols(symbols) {
  const list = (symbols || []).filter(Boolean);
  if (!list.length) return t("unknown");
  return list.map((symbol) => {
    const company = findCompany(symbol);
    return company ? `${company.name} ${symbol}` : symbol;
  }).join(" / ");
}

function renderValidationQueue(data) {
  const rows = buildValidationQueue(data);
  document.getElementById("validationQueue").innerHTML = rows.map((item) => `
    <article class="validation-item">
      <header>
        <span>${item.market}</span>
        <strong>${item.metric}</strong>
      </header>
      <h3>${item.topic}</h3>
      <p><b>${t("queueQuestion")}:</b> ${item.question}</p>
      <p><b>${t("queueNextCheck")}:</b> ${item.next}</p>
      ${item.status ? `<p><b>${t("queueStatus")}:</b> ${item.status} / ${t("queueWindow")}: ${item.window || t("unknown")}</p>` : ""}
      ${item.trigger ? `<p><b>${t("queueTrigger")}:</b> ${item.trigger}</p>` : ""}
      ${item.relatedSymbols ? `<p><b>${t("queueRelated")}:</b> ${formatRelatedSymbols(item.relatedSymbols)}</p>` : ""}
      <small>${t("queueEvidence")}: ${item.evidence}${item.lastCheck ? ` / ${t("queueLastCheck")}: ${item.lastCheck}` : ""}</small>
    </article>
  `).join("");
}

function renderDataQuality(data) {
  const target = document.getElementById("dataQuality");
  if (!target) return;
  const rows = [
    { label: t("qualityUpdated"), value: data.generatedAt || t("unknown") },
    { label: t("qualityIndices"), value: data.indices?.length || 0 },
    { label: t("qualityASectors"), value: data.sectors?.length || 0 },
    { label: t("qualityUsSectors"), value: data.usSectors?.length || 0 },
    { label: t("qualityCompanies"), value: data.companies?.length || 0 }
  ];
  target.innerHTML = rows.map((item) => `
    <div class="quality-metric">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");
}

function renderCompanies(companies) {
  document.getElementById("companyGrid").innerHTML = companies.map((item) => {
    const growth = clampScore(item.growth > 100 ? 100 : item.growth);
    const quality = clampScore(item.quality);
    const dma = clampScore(item.dmaHealth);
    return `
      <article class="company-card">
        <header>
          <div>
            <h3>${item.name}</h3>
            <span>${item.symbol} / ${trValue(item.chain)}</span>
          </div>
          <span class="tag">${trValue(item.market)}</span>
        </header>
        <div class="company-state">
          <span>${trValue(item.status) || t("unknown")}</span>
          <strong>${trValue(item.lastDecision) || t("unknown")}</strong>
        </div>
        <div class="metric-bars">
          <div class="metric">
            <label><span>${t("growth")}</span><span>${growth.toFixed(0)}</span></label>
            <div class="bar"><span style="--w:${growth}%;--c:${barColor(growth)}"></span></div>
          </div>
          <div class="metric">
            <label><span>${t("quality")}</span><span>${quality.toFixed(0)}</span></label>
            <div class="bar"><span style="--w:${quality}%;--c:${barColor(quality)}"></span></div>
          </div>
          <div class="metric">
            <label><span>GF-DMA</span><span>${dma.toFixed(0)}</span></label>
            <div class="bar"><span style="--w:${dma}%;--c:${barColor(dma)}"></span></div>
          </div>
        </div>
        <p>${trValue(item.evidenceType)}</p>
        <p>${trValue(item.latest)}</p>
        <p class="action">${trValue(item.action)}</p>
        <button class="detail-button" type="button" data-symbol="${item.symbol}">${t("detailSelect")}</button>
      </article>
    `;
  }).join("");

  document.getElementById("companyGrid").querySelectorAll("[data-symbol]").forEach((button) => {
    button.addEventListener("click", () => setSelectedCompany(button.dataset.symbol));
  });
}

function renderFlow(flow) {
  document.getElementById("hypothesisFlow").innerHTML = flow.map((item) => `
    <div class="flow-step" style="--w:${clampScore(item.score)}%">
      <strong>${trValue(item.stage)}</strong>
      <span>${trValue(item.label)}</span>
    </div>
  `).join("");
}

function renderResearchRows(companies) {
  document.getElementById("researchRows").innerHTML = companies.map((item) => `
    <tr data-symbol="${item.symbol}">
      <td><strong>${item.name}</strong><br>${item.symbol}<br><button class="row-detail-button" type="button" data-symbol="${item.symbol}">${t("detailSelect")}</button></td>
      <td>${trValue(item.status) || t("unknown")}<br><span class="tag">${trValue(item.lastDecision) || t("unknown")}</span></td>
      <td>${trValue(item.chain)}</td>
      <td>${trValue(item.evidenceType)}<br><span class="tag">${trValue(item.classification)}</span></td>
      <td>${trValue(item.latest)}<br><a href="${item.url}" target="_blank" rel="noreferrer">${trValue(item.source)}</a></td>
      <td>
        <div class="bar"><span style="--w:${clampScore(item.dmaHealth)}%;--c:${barColor(item.dmaHealth)}"></span></div>
        ${item.dmaHealth}/100
      </td>
      <td>${trValue(item.pricingRisk)}</td>
      <td>${trValue(item.action)}</td>
    </tr>
  `).join("");

  document.getElementById("researchRows").querySelectorAll("[data-symbol]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setSelectedCompany(button.dataset.symbol);
    });
  });
}

function renderMacroRegime(data) {
  const chinaGdp = pickMacro(data, ["GDP growth", "\u56fd\u5185\u751f\u4ea7\u603b\u503c"]);
  const chinaPmi = pickMacro(data, ["Manufacturing PMI", "\u5236\u9020\u4e1a PMI"]);
  const usRate = pickMacro(data, ["Fed funds target range", "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4"]);
  const usTenYear = pickMacro(data, ["10Y Treasury yield"]);
  const csi300 = pickIndex(data, ["sh000300"]);
  const qqq = pickIndex(data, ["QQQ"]);
  const topA = topByChange(data.sectors);
  const topUs = topByChange(data.usSectors);
  const metrics = [
    {
      label: t("macroRegimeGrowth"),
      value: [chinaPmi ? `PMI ${chinaPmi.value}` : "", chinaGdp ? `GDP ${chinaGdp.value}` : ""].filter(Boolean).join(" / ") || t("unknown"),
      tone: "neutral"
    },
    {
      label: t("macroRegimeRates"),
      value: [usRate ? `Fed ${usRate.value}` : "", usTenYear ? `10Y ${usTenYear.value}` : ""].filter(Boolean).join(" / ") || t("unknown"),
      tone: "down"
    },
    {
      label: t("macroRegimeRisk"),
      value: [csi300 ? `CSI 300 ${fmtPct(csi300.changePct)}` : "", qqq ? `QQQ ${fmtPct(qqq.changePct)}` : ""].filter(Boolean).join(" / ") || t("unknown"),
      tone: csi300 && qqq && Number(csi300.changePct) >= 0 && Number(qqq.changePct) >= 0 ? "up" : "neutral"
    },
    {
      label: t("macroRegimeTheme"),
      value: [topA ? `${trValue(topA.name)} ${fmtPct(topA.changePct)}` : "", topUs ? `${trValue(topUs.name)} ${fmtPct(topUs.changePct)}` : ""].filter(Boolean).join(" / ") || t("unknown"),
      tone: topA || topUs ? "up" : "neutral"
    }
  ];
  return `
    <section class="macro-regime">
      <div class="macro-regime-head">
        <span>${t("macroRegimeTitle")}</span>
        <strong>${t("macroRegimeStatus")}</strong>
        <p>${t("macroRegimeRead")}</p>
      </div>
      <div class="macro-regime-metrics">
        ${metrics.map((item) => `
          <article class="${item.tone}">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </article>
        `).join("")}
      </div>
      <div class="macro-regime-next">
        <span>${t("macroRegimeNext")}</span>
        <p>${t("macroRegimeNextRead")}</p>
      </div>
    </section>
  `;
}

function avg(values) {
  const nums = values.filter((value) => Number.isFinite(value));
  if (!nums.length) return 0;
  return nums.reduce((sum, value) => sum + value, 0) / nums.length;
}

function formatSignedNumber(value) {
  if (!Number.isFinite(value)) return "n/a";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function renderValuationTemperature(data) {
  const indices = data.indices || [];
  const usIndices = indices.filter((item) => ["SPY", "QQQ", "SOXX"].includes(item.symbol));
  const aShareIndices = indices.filter((item) => /^(sh|sz)/i.test(item.symbol));
  const usMa200 = avg(usIndices.map((item) => Number(item.dma?.ma200)));
  const aMa100 = avg(aShareIndices.map((item) => Number(item.dma?.ma100)));
  const aMa200 = avg(aShareIndices.map((item) => Number(item.dma?.ma200)));
  const topTheme = topByChange([...(data.sectors || []), ...(data.usSectors || [])]);
  const companies = data.companies || [];
  const avgValuation = avg(companies.map((item) => Number(item.valuationScore)));
  const richest = [...companies].sort((a, b) => (Number(b.valuationScore) || 0) - (Number(a.valuationScore) || 0))[0];
  const cheapest = [...companies].sort((a, b) => (Number(a.valuationScore) || 0) - (Number(b.valuationScore) || 0))[0];
  const bubbleLabel = usMa200 >= 8 ? t("valuationBubbleHigh") : usMa200 >= 4 ? t("valuationBubbleMedium") : t("valuationBubbleLow");
  const discountLabel = aMa100 < -2 || aMa200 < -1 ? t("valuationDiscountHigh") : aMa100 < 1 ? t("valuationDiscountMedium") : t("valuationDiscountLow");
  const cards = [
    {
      label: t("valuationBubble"),
      value: bubbleLabel,
      detail: `US MA200 ${formatSignedNumber(usMa200)} / ${t("macroRegimeRates")}`,
      tone: usMa200 >= 8 ? "down" : "neutral"
    },
    {
      label: t("valuationDiscount"),
      value: discountLabel,
      detail: `A-share MA100 ${formatSignedNumber(aMa100)} / MA200 ${formatSignedNumber(aMa200)}`,
      tone: aMa100 < -2 || aMa200 < -1 ? "up" : "neutral"
    },
    {
      label: t("valuationPool"),
      value: `Score ${avgValuation.toFixed(0)}`,
      detail: richest ? `${richest.name} ${richest.valuationScore} / ${cheapest?.name || t("unknown")} ${cheapest?.valuationScore || "n/a"}` : t("unknown"),
      tone: avgValuation >= 68 ? "down" : avgValuation <= 55 ? "up" : "neutral"
    },
    {
      label: t("valuationTrap"),
      value: topTheme ? `${trValue(topTheme.name)} ${fmtPct(topTheme.changePct)}` : t("unknown"),
      detail: t("valuationTrapRead"),
      tone: "neutral"
    }
  ];
  return `
    <section class="valuation-temp">
      <div class="valuation-temp-head">
        <span>${t("valuationTempTitle")}</span>
        <strong>${t("valuationTempStatus")}</strong>
        <p>${t("valuationTempRead")}</p>
      </div>
      <div class="valuation-temp-scale" style="--bubble:${Math.max(0, Math.min(100, 50 + usMa200 * 3))}%;--discount:${Math.max(0, Math.min(100, 50 - aMa100 * 6))}%">
        <span>${t("valuationDiscount")}</span>
        <i></i>
        <span>${t("valuationBubble")}</span>
      </div>
      <div class="valuation-temp-grid">
        ${cards.map((item) => `
          <article class="${item.tone}">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <p>${item.detail}</p>
          </article>
        `).join("")}
      </div>
      <div class="valuation-temp-next">
        <span>${t("valuationNext")}</span>
        <p>${t("valuationNextRead")}</p>
      </div>
    </section>
  `;
}

function formatAssetPrice(item) {
  const value = Number(item.price);
  if (!Number.isFinite(value) || value <= 0) return "n/a";
  if (isRatioAsset(item)) return value.toFixed(2);
  return `$${value.toFixed(2)}`;
}

function isRatioAsset(item) {
  const symbol = String(item.symbol || "");
  return symbol === "GC/SI" || symbol === "GLD/SLV" || /ratio/i.test(String(item.name || ""));
}

function formatSecondaryPrice(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "n/a";
  return `$${number.toFixed(2)}`;
}

function getPreciousConclusion(metals) {
  const gold = metals.find((item) => item.name === "Gold");
  const silver = metals.find((item) => item.name === "Silver");
  const ratio = metals.find((item) => isRatioAsset(item));
  const goldChange = Number(gold?.changePct);
  const silverChange = Number(silver?.changePct);
  const ratioChange = Number(ratio?.changePct);

  if (goldChange > 0 && silverChange > 0 && ratioChange < 0) {
    return {
      tone: "up",
      title: t("preciousConclusionSilverLeadTitle"),
      body: t("preciousConclusionSilverLeadBody"),
      action: t("preciousConclusionSilverLeadAction")
    };
  }

  if (goldChange > 0 && silverChange > 0) {
    return {
      tone: "watch",
      title: t("preciousConclusionMacroHedgeTitle"),
      body: t("preciousConclusionMacroHedgeBody"),
      action: t("preciousConclusionMacroHedgeAction")
    };
  }

  if (goldChange > 0 && !(silverChange > 0)) {
    return {
      tone: "watch",
      title: t("preciousConclusionGoldOnlyTitle"),
      body: t("preciousConclusionGoldOnlyBody"),
      action: t("preciousConclusionGoldOnlyAction")
    };
  }

  return {
    tone: "neutral",
    title: t("preciousConclusionWeakTitle"),
    body: t("preciousConclusionWeakBody"),
    action: t("preciousConclusionWeakAction")
  };
}

function renderPreciousSignals(data) {
  const signals = data.preciousSignals || [];
  if (!signals.length) return "";
  return `
    <div class="precious-signal-panel">
      <header>
        <span>${t("preciousFactorsTitle")}</span>
        <p>${t("preciousFactorsRead")}</p>
      </header>
      <div class="precious-signal-grid">
        ${signals.map((item) => `
          <article class="${item.key === "price_reference" ? "reference" : "factor"}">
            <span>${trValue(item.status)}</span>
            <strong>${trValue(item.label)}</strong>
            <b>${trValue(item.value)}</b>
            <p>${trValue(item.read)}</p>
            <small>${trValue(item.source)} / ${trValue(item.cadence)}</small>
          </article>
        `).join("")}
      </div>
      <footer>
        <span>${t("preciousBoundaryTitle")}</span>
        <p>${t("preciousBoundaryRead")}</p>
      </footer>
    </div>
  `;
}

function renderPreciousMetals(data) {
  const metals = data.preciousMetals || [];
  if (!metals.length) return "";
  const conclusion = getPreciousConclusion(metals);
  const cards = metals.map((item, index) => {
    const gateLabels = [t("preciousGoldGate"), t("preciousSilverGate"), t("preciousRatioGate")];
    const tone = isRatioAsset(item) ? "neutral" : pctClass(item.changePct);
    const pricingAnchor = item.pricingAnchor
      ? `<small>${t("pricingReference")}: ${trValue(item.pricingAnchor)}</small>`
      : "";
    const flowProxy = item.flowSymbol
      ? `<small>${t("flowProxy")}: ${item.flowSymbol} ${formatSecondaryPrice(item.flowPrice)} / ${fmtPct(item.flowChangePct)}</small>`
      : "";
    return `
      <article class="${tone}">
        <span>${gateLabels[index] || trValue(item.role)}</span>
        <strong>${trValue(item.name)} ${formatAssetPrice(item)}</strong>
        <small>${trValue(item.proxy)} / ${fmtPct(item.changePct)}</small>
        ${pricingAnchor}
        ${flowProxy}
        <p>${trValue(item.validation)}</p>
      </article>
    `;
  }).join("");

  return `
    <section class="precious-watch">
      <div class="precious-watch-head">
        <span>${t("preciousTitle")}</span>
        <strong>${t("preciousStatus")}</strong>
        <p>${t("preciousRead")}</p>
      </div>
      <div class="precious-watch-takeaway ${conclusion.tone}">
        <span>${t("preciousTakeaway")}</span>
        <strong>${conclusion.title}</strong>
        <p>${conclusion.body}</p>
        <small>${t("preciousAction")}: ${conclusion.action}</small>
      </div>
      ${renderPreciousSignals(data)}
      <div class="precious-watch-grid">
        ${cards}
      </div>
      <div class="precious-watch-next">
        <span>${t("preciousNext")}</span>
        <p>${t("preciousNextRead")}</p>
      </div>
    </section>
  `;
}

function preciousSignal(signals, key) {
  return (signals || []).find((item) => item.key === key);
}

function renderGoldTradeMonitor(metals, signals) {
  const fred = preciousSignal(signals, "fred_macro");
  const wgc = preciousSignal(signals, "wgc_gold");
  const ratio = (metals || []).find((item) => isRatioAsset(item));
  const ratioChange = Number(ratio?.changePct);
  const ratioRepair = Number.isFinite(ratioChange) && ratioChange < 0;
  const ratioValue = ratio
    ? `${trValue(ratio.name)} ${formatAssetPrice(ratio)} / ${fmtPct(ratio.changePct)}`
    : t("unknown");
  const gates = [
    {
      label: t("goldMonitorMacroGate"),
      status: t("goldMonitorTrack"),
      value: fred ? trValue(fred.value) : t("unknown"),
      read: t("goldMonitorMacroRead"),
      tone: "neutral"
    },
    {
      label: t("goldMonitorFlowGate"),
      status: t("goldMonitorTrack"),
      value: wgc ? trValue(wgc.value) : t("unknown"),
      read: t("goldMonitorFlowRead"),
      tone: "neutral"
    },
    {
      label: t("goldMonitorCentralBankGate"),
      status: t("goldMonitorConfirm"),
      value: t("goldMonitorCentralBankValue"),
      read: t("goldMonitorCentralBankRead"),
      tone: "up"
    },
    {
      label: t("goldMonitorExpansionGate"),
      status: ratioRepair ? t("goldMonitorConfirm") : t("goldMonitorWait"),
      value: ratioValue,
      read: ratioRepair ? t("goldMonitorExpansionImproving") : t("goldMonitorExpansionWait"),
      tone: ratioRepair ? "up" : "watch"
    },
    {
      label: t("goldMonitorInvalidationGate"),
      status: t("goldMonitorRisk"),
      value: t("goldMonitorInvalidationValue"),
      read: t("goldMonitorInvalidationRead"),
      tone: "down"
    }
  ];

  return `
    <section class="gold-trade-monitor">
      <header>
        <span>${t("goldMonitorTitle")}</span>
        <small>${t("goldMonitorSub")}</small>
      </header>
      <div class="gold-trade-grid">
        ${gates.map((item) => `
          <article class="gold-trade-card ${item.tone}">
            <span>${item.label}</span>
            <b>${item.status}</b>
            <strong>${item.value}</strong>
            <p>${item.read}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMacro(data) {
  const macro = data.macro || [];
  document.getElementById("macroGrid").innerHTML = `
    ${renderMacroRegime(data)}
    ${renderValuationTemperature(data)}
    <div class="macro-card-grid">
      ${macro.map((item) => `
        <div class="macro-card">
          <span class="macro-indicator">${trValue(item.region)} / ${trValue(item.metric)}</span>
          <strong class="macro-value ${signedTone(item.value)}">${item.value}</strong>
          <span class="macro-read">${trValue(item.read)}</span>
          <small class="macro-period ${signedTone(item.delta)}">${trValue(item.delta)}</small>
          <a class="macro-source" href="${item.url}" target="_blank" rel="noreferrer">${trValue(item.source)}</a>
        </div>
      `).join("")}
    </div>
  `;
}

function renderWatchMetals(data) {
  const target = document.getElementById("watchMetals");
  if (!target) return;
  const metals = data.preciousMetals || [];
  const signals = data.preciousSignals || [];
  if (!metals.length) {
    target.innerHTML = `<p>${t("unknown")}</p>`;
    return;
  }
  const conclusion = getPreciousConclusion(metals);
  const signal = signals.find((item) => item.key === "fred_macro") || signals[0];

  target.innerHTML = `
    <div class="watch-metals-summary ${conclusion.tone}">
      <span>${t("preciousTakeaway")}</span>
      <strong>${conclusion.title}</strong>
      <p>${conclusion.body}</p>
    </div>
    <div class="watch-metals-grid">
      ${metals.map((item) => `
        <article class="${isRatioAsset(item) ? "neutral" : pctClass(item.changePct)}">
          <span>${trValue(item.proxy)}</span>
          <strong>${trValue(item.name)} ${formatAssetPrice(item)}</strong>
          <p>${fmtPct(item.changePct)} / ${trValue(item.role)}</p>
        </article>
      `).join("")}
    </div>
    <div class="watch-metals-footer">
      <span>${t("watchMetalsRead")}</span>
      <strong>${signal ? trValue(signal.value) : t("unknown")}</strong>
      <small>${t("watchMetalsBoundary")}</small>
    </div>
    ${renderGoldTradeMonitor(metals, signals)}
  `;
}

function topByChange(items) {
  return [...(items || [])].sort((a, b) => (Number(b.changePct) || 0) - (Number(a.changePct) || 0))[0];
}

function formatPriorityMix(items) {
  const counts = (items || []).reduce((acc, item) => {
    const label = trValue(item.priority) || t("unknown");
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).map(([label, count]) => `${count} ${label}`).join(" / ");
}

function renderWatchItems(data) {
  const items = data.watchItems || [];
  document.getElementById("watchItems").innerHTML = items.map((item) => `
    <div class="watch-item">
      <header>
        <strong>${trValue(item.item)} / ${trValue(item.priority)}</strong>
        <span>${trValue(item.status) || t("unknown")}</span>
      </header>
      <span>${trValue(item.metric)}</span>
      <p><b>${t("queueWindow")}:</b> ${trValue(item.window) || t("unknown")}</p>
      <p><b>${t("queueTrigger")}:</b> ${trValue(item.trigger) || t("unknown")}</p>
      ${(item.events || [])[0] ? `<p><b>${t("watchLatestEvent")}:</b> ${trValue(item.events[0].reason) || t("unknown")}</p>` : ""}
      <small>${t("queueRelated")}: ${formatRelatedSymbols(item.relatedSymbols)}</small>
    </div>
  `).join("");

  const topA = topByChange(data.sectors);
  const topUs = topByChange(data.usSectors);
  const topMetal = topByChange(data.preciousMetals);
  const chinaPmi = pickMacro(data, ["Manufacturing PMI", "\u5236\u9020\u4e1a PMI"]);
  const usRate = pickMacro(data, ["Fed funds target range", "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4"]);
  const radarCards = [
    {
      label: t("radarPriority"),
      value: formatPriorityMix(items) || t("unknown"),
      detail: `${items.length} ${t("radarOpenChecks")}`,
      tone: "neutral"
    },
    {
      label: t("radarAShareHeat"),
      value: topA ? `${trValue(topA.name)} ${fmtPct(topA.changePct)}` : t("unknown"),
      detail: topA ? `${t("leader")}: ${trValue(topA.leader)}` : t("unknown"),
      tone: topA ? pctClass(topA.changePct) : "neutral"
    },
    {
      label: t("radarUsHeat"),
      value: topUs ? `${trValue(topUs.name)} ${fmtPct(topUs.changePct)}` : t("unknown"),
      detail: topUs ? `${topUs.symbol} / ${Number(topUs.price).toFixed(2)}` : t("unknown"),
      tone: topUs ? pctClass(topUs.changePct) : "neutral"
    },
    {
      label: t("radarMacroGate"),
      value: [
        chinaPmi ? `PMI ${chinaPmi.value}` : "",
        usRate ? `Fed ${usRate.value}` : ""
      ].filter(Boolean).join(" / ") || t("unknown"),
      detail: t("radarMacroGateDetail"),
      tone: "neutral"
    },
    {
      label: t("preciousTitle"),
      value: topMetal ? `${trValue(topMetal.name)} ${fmtPct(topMetal.changePct)}` : t("unknown"),
      detail: topMetal ? trValue(topMetal.role) : t("preciousStatus"),
      tone: topMetal ? pctClass(topMetal.changePct) : "neutral"
    }
  ];

  document.getElementById("watchRadar").innerHTML = `
    ${radarCards.map((item) => `
      <article class="watch-radar-card ${item.tone}">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
        <p>${item.detail}</p>
      </article>
    `).join("")}
    <div class="watch-radar-footer">
      <span>${t("radarUpdateWindow")}</span>
      <strong>${trValue(data.nextScheduledUpdate) || t("schedule")}</strong>
    </div>
  `;
}

function pickMacro(data, names) {
  return (data.macro || []).find((item) => names.includes(item.metric));
}

function pickIndex(data, symbols) {
  return (data.indices || []).find((item) => symbols.includes(item.symbol));
}

function formatMacroPair(first, second, firstScope = "", secondScope = "") {
  return [
    { item: first, scope: firstScope },
    { item: second, scope: secondScope }
  ]
    .filter(({ item }) => Boolean(item))
    .map(({ item, scope }) => `${scope ? `${scope} ` : ""}${trValue(item.metric)} ${item.value}`)
    .join(" / ");
}

function renderMacroSignals(data) {
  const chinaGdp = pickMacro(data, ["GDP growth", "\u56fd\u5185\u751f\u4ea7\u603b\u503c"]);
  const chinaRetail = pickMacro(data, ["Retail sales", "\u793e\u4f1a\u6d88\u8d39\u54c1\u96f6\u552e"]);
  const chinaPmi = pickMacro(data, ["Manufacturing PMI", "\u5236\u9020\u4e1a PMI"]);
  const usGdp = pickMacro(data, ["Real GDP"]);
  const usCpi = pickMacro(data, ["CPI YoY"]);
  const usRate = pickMacro(data, ["Fed funds target range", "\u8054\u90a6\u57fa\u91d1\u76ee\u6807\u533a\u95f4"]);
  const usTenYear = pickMacro(data, ["10Y Treasury yield"]);
  const csi300 = pickIndex(data, ["sh000300"]);
  const qqq = pickIndex(data, ["QQQ"]);

  const signals = [
    {
      label: t("signalGrowth"),
      status: t("signalMixed"),
      scope: t("scopeChinaUnitedStates"),
      metric: formatMacroPair(chinaGdp, usGdp, t("scopeChinaShort"), t("scopeUsShort")),
      read: t("signalGrowthRead")
    },
    {
      label: t("signalInflation"),
      status: t("signalTight"),
      scope: t("scopeUnitedStates"),
      metric: formatMacroPair(usRate, usTenYear || usCpi, t("scopeUsShort"), t("scopeUsShort")),
      read: t("signalInflationRead")
    },
    {
      label: t("signalChinaDemand"),
      status: t("signalSoft"),
      scope: t("scopeChinaOnly"),
      metric: formatMacroPair(chinaPmi, chinaRetail, t("scopeChinaShort"), t("scopeChinaShort")),
      read: t("signalChinaDemandRead")
    },
    {
      label: t("signalRisk"),
      status: t("signalPositive"),
      scope: t("scopeAShareUnitedStates"),
      metric: [
        csi300 ? `${t("scopeAShareShort")} CSI 300 ${fmtPct(csi300.changePct)}` : "",
        qqq ? `${t("scopeUsShort")} QQQ ${fmtPct(qqq.changePct)}` : ""
      ].filter(Boolean).join(" / "),
      read: t("signalRiskRead")
    }
  ];

  document.getElementById("macroSignals").innerHTML = signals.map((item) => `
    <article class="macro-signal-card">
      <header>
        <span>${item.label}</span>
        <strong>${item.status}</strong>
      </header>
      <div class="macro-signal-scope">
        <span>${t("scopeLabel")}</span>
        <strong>${item.scope}</strong>
      </div>
      <b>${item.metric || "n/a"}</b>
      <p>${item.read}</p>
    </article>
  `).join("");
}

function collectResearchEvents(data) {
  const companyEvents = (data.companies || []).flatMap((company) => (company.events || []).map((event) => ({
    ...event,
    kind: t("logCompany"),
    title: `${company.name} / ${company.symbol}`,
    status: trValue(company.status),
    sourceUrl: company.url
  })));
  const watchEvents = (data.watchItems || []).flatMap((item) => (item.events || []).map((event) => ({
    ...event,
    kind: t("logValidation"),
    title: trValue(item.item),
    status: trValue(item.status),
    sourceUrl: ""
  })));
  return [...companyEvents, ...watchEvents].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function renderResearchLog(data) {
  const rows = collectResearchEvents(data);
  document.getElementById("researchLog").innerHTML = rows.map((event) => `
    <article class="log-row">
      <header>
        <div>
          <span>${event.kind} / ${event.date || t("unknown")}</span>
          <strong>${event.title}</strong>
        </div>
        <b>${trValue(event.from) || t("unknown")} -> ${trValue(event.to) || t("unknown")}</b>
      </header>
      <p><b>${t("eventReason")}:</b> ${trValue(event.reason) || t("unknown")}</p>
      <p><b>${t("eventEvidence")}:</b> ${trValue(event.evidence) || t("unknown")}</p>
      <small>${t("eventSource")}: ${event.sourceUrl ? `<a href="${event.sourceUrl}" target="_blank" rel="noreferrer">${trValue(event.source)}</a>` : trValue(event.source)}</small>
    </article>
  `).join("");
}

function getAboutCards() {
  return [
    { title: t("aboutPurposeTitle"), body: t("aboutPurposeBody"), type: "wide" },
    { title: t("aboutLogicTitle"), body: t("aboutLogicBody"), type: "wide" },
    { title: t("aboutFocusTitle"), body: t("aboutFocusBody") },
    { title: t("aboutUseTitle"), body: t("aboutUseBody") },
    { title: t("aboutWhyTitle"), body: t("aboutWhyBody") }
  ];
}

function getAboutSignals() {
  return [
    { label: "01", title: t("aboutSignalEvidence"), body: t("aboutSignalEvidenceBody") },
    { label: "02", title: t("aboutSignalNoRec"), body: t("aboutSignalNoRecBody") },
    { label: "03", title: t("aboutSignalLog"), body: t("aboutSignalLogBody") }
  ];
}

function getAboutFlow() {
  return [
    { label: "01", title: t("aboutStepMarketTitle"), body: t("aboutStepMarketBody") },
    { label: "02", title: t("aboutStepClueTitle"), body: t("aboutStepClueBody") },
    { label: "03", title: t("aboutStepEvidenceTitle"), body: t("aboutStepEvidenceBody") },
    { label: "04", title: t("aboutStepFinancialTitle"), body: t("aboutStepFinancialBody") },
    { label: "05", title: t("aboutStepDecisionTitle"), body: t("aboutStepDecisionBody") }
  ];
}

function getAboutMeta() {
  return [
    { title: t("aboutDeveloperTitle"), body: t("aboutDeveloperBody"), type: "identity" },
    { title: t("aboutContactTitle"), body: `<a href="mailto:${t("aboutContactBody")}">${t("aboutContactBody")}</a>`, type: "contact" },
    { title: t("aboutDisclaimerTitle"), body: t("aboutDisclaimerBody"), type: "boundary" }
  ];
}

function getAboutHeroTitleLines() {
  const lines = i18n[state.lang].aboutHeroTitleLines || i18n["en-US"].aboutHeroTitleLines;
  return Array.isArray(lines) ? lines : [t("aboutHeroTitle")];
}

function renderAbout() {
  document.getElementById("aboutGrid").innerHTML = `
    <section class="about-hero">
      <div class="about-hero-copy">
        <h2>${getAboutHeroTitleLines().map((line) => `<span>${line}</span>`).join("")}</h2>
        <p class="about-hero-lede">${t("aboutHeroBody")}</p>
      </div>
      <div class="about-signal-stack">
        ${getAboutSignals().map((item) => `
          <article class="about-signal">
            <span>${item.label}</span>
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="about-chain">
      <header>
        <span>${t("aboutFlowTitle")}</span>
      </header>
      <div class="about-chain-grid">
        ${getAboutFlow().map((item) => `
          <article class="about-step">
            <span>${item.label}</span>
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="about-editorial">
      <div class="about-editorial-grid">
        ${getAboutCards().map((item) => `
          <article class="about-card ${item.type === "wide" ? "wide" : ""}">
            <span>${item.title}</span>
            <p>${item.body}</p>
          </article>
        `).join("")}
      </div>
      <aside class="about-meta">
        ${getAboutMeta().map((item) => `
          <article class="${item.type}">
            <span>${item.title}</span>
            <p>${item.body}</p>
          </article>
        `).join("")}
      </aside>
    </section>
  `;
}

function renderSearch(companies) {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  input.oninput = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      results.classList.remove("active");
      results.innerHTML = "";
      return;
    }

    const matches = companies.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.symbol.toLowerCase().includes(query) ||
      item.chain.toLowerCase().includes(query)
    ).slice(0, 6);

    results.innerHTML = matches.map((item) => `
      <button class="search-result" data-symbol="${item.symbol}">
        <span>${item.symbol}</span>
        <strong>${item.name}</strong>
      </button>
    `).join("");
    results.classList.toggle("active", matches.length > 0);
  };

  results.onmousedown = (event) => {
    const button = event.target.closest(".search-result");
    if (!button) return;
    input.value = button.dataset.symbol;
    results.classList.remove("active");
    setSelectedCompany(button.dataset.symbol);
  };
}

function render(data) {
  applyStaticText();
  document.getElementById("updatedAt").textContent = data.generatedAt || t("unknown");
  document.getElementById("schedule").textContent = t("schedule");
  renderTicker(data.indices);
  renderDailyCore(data);
  renderDailyVerdict(data);
  renderFrameworkGrid();
  renderIndexMatrix(data.indices);
  renderHeatmap(data);
  renderValidationQueue(data);
  renderDataQuality(data);
  renderResearchCore(data);
  renderCompanies(data.companies);
  renderFlow(data.hypothesisFlow);
  renderResearchRows(data.companies);
  renderCompanyDetail();
  renderMacro(data);
  renderWatchMetals(data);
  renderWatchItems(data);
  renderMacroSignals(data);
  renderResearchLog(data);
  renderAbout();
  renderSearch(data.companies);
}

async function loadData() {
  const response = await fetch(`${DATA_URL}?ts=${Date.now()}`);
  if (!response.ok) throw new Error(`Data load failed: ${response.status}`);
  const data = await response.json();
  state.data = data;
  render(data);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setView(button.dataset.view);
});

document.getElementById("languageSelect")?.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

document.getElementById("companyDetailClose")?.addEventListener("click", () => {
  state.selectedSymbol = null;
  renderCompanyDetail();
});

state.lang = localStorage.getItem("h3-language") || "en-US";
applyStaticText();
loadData().catch((error) => {
  document.getElementById("updatedAt").textContent = t("loadFailed");
  console.error(error);
});

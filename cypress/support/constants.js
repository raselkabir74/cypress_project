export const CONSTANTS = {
  PLATFORMS: {
    1: 'eskimi',
    2: 'facebook',
    3: 'youtube',
    4: 'adwords',
  },
  CREATIVE_TYPES: {
    banner: 1,
    native: 2,
    video: 3,
    native_video: 4,
    audio: 5,
  },
  CHANNEL_TYPE: {
    display_ads: 1,
    'in-Game': 2,
    ctv: 3,
  },
  CAMPAIGN_GOALS: {
    other: 1,
    awareness: 2,
    traffic: 3,
    engagement: 4,
    lead: 5,
  },
  PRIMARY_CAMPAIGN_GOALS: [
    'cpm_currency',
    'vcpm_currency',
    'cpv_currency',
    'cpr_currency',
    'cpcv_currency',
    'cpc_currency',
    'cps_currency',
    'cpe_currency',
    'cpa_currency',
  ],
  SECONDARY_CAMPAIGN_GOALS: ['ctr', 'vr', 'fr', 'vcr', 'sr', 'er', 'cr'],
  CAMPAIGN_SETTINGS_OPTIMISATION_GOALS: {
    'CPC (cost per click)': 1,
    'CTR (click-through rate)': 2,
    'CPA (cost per action)': 3,
    'VR (viewability rate)': 4,
    'VCR (video completion rate)': 5,
    'CPCVV (cost per completed video view)': 6,
    'ER (engagement rate)': 7,
    'CPE (cost per engagement)': 8,
    'VVR (video viewability rate)': 9,
    'SR (session rate)': 10,
    'CPS (cost per session)': 11,
  },
  CAPPING_TIME_TYPE: {
    Hours: 'h',
    Days: 'd',
  },
  PACKAGE_TYPE_OPTION: {
    include_only: 1,
    exclude: 2,
    include_split_bid: 3,
    include_split_daily: 4,
    include_split_total: 5,
    disable_impression_capping: 6,
    disable_auto_optimisation: 7,
    disable_budget_pacing: 8,
    disable_category_exclusion: 9,
    allow_multiple_bids_per_user: 10,
  },
  CLICK_URL_TYPES: {
    landing_page: 1,
    android_app: 2,
    call: 3,
    sms: 4,
    ussd: 5,
    app_adjust: 6,
    app_appsflyer: 7,
  },
  COUNTRY: {
    lithuania: 'lt',
    albania: 'al',
  },
  BUDGET_PACING: {
    none: 0,
    even: 1,
  },
  EXCHANGES: {
    '_Test QA margin': 7,
  },
  AD_DOMAIN: {
    'business.eskimi.com': 1,
  },
  AD_PLACEMENT_TYPE: {
    Site: 2,
    App: 1,
  },
  MOBILE_OPERATORS_ISPS: {
    'Telekom Albania - Albania': 9,
  },
  DEVICEE_TYPE: {
    Tablet: 5,
  },
  DEVICEE_OS: {
    iOS: 1,
  },
  DEVICE_BRAND: {
    Apple: 5,
  },
  DEVICE_MODEL: {
    'Apple iPad': 188,
  },
  DEVICE_BROWSER: {
    Firefox: 18,
  },
  DEVICE_COST: {
    '$100-200': 3,
  },
  SIM_AMOUNT: {
    '1 SIM': 1,
    '2 SIMs': 2,
    '3 SIMs': 3,
    '4 SIMs': 4,
  },
  DEVICE_CONNECTION: {
    '2G supporting devices': 8,
    '3G supporting devices': 9,
    '4G supporting devices': 7,
  },
  NETWORK_CONNECTION: {
    '2G network connection': 4,
    '3G network connection': 5,
    '4G network connection': 6,
  },
  MULTIPLE_OPERATOR_SIM_CARD: {
    'Vodafone Albania - Albania': 10,
  },
  MOBILE_DATA_CONSUMPTION: {
    Moderate: 2,
  },
  OPERATOR_CHURN: {
    'Vodafone Albania - Albania': 10,
  },
  AD_EXCHANGES: {
    AdForm: 143,
    'AdInMo (In-Game)': 41,
    Adman: 213,
    Admatic: 218,
    Admixer: 197,
    'Adverty (In-Game)': 42,
    Adyoulike: 204,
    'Anzu (In-Game)': 34,
    'Automattic & Tumblr (WordPress)': 139,
    Beachfront: 166,
    'Biddo SSP': 325,
    Boldwin: 323,
    Chocolate: 165,
    Column6: 248,
    ConnectAd: 224,
    'Digital Turbine': 147,
    Doubleclick: 2,
    Equativ: 116,
    'Eskimi floating': 2004,
    'Eskimi HB': 3002,
    'Eskimi standard': 6,
    'Eskimi takeover': 2006,
    Fluct: 45,
    'Fyber Marketplace': 128,
    'Gadsme (In-Game)': 40,
    Gamoshi: 340,
    GumGum: 160,
    'Improve Digital': 136,
    'Index Exchange': 301,
    InMobi: 17,
    'InMobi Exchange': 150,
    ironSource: 235,
    Lemma: 318,
    LKQD: 182,
    LoopMe: 32,
    'Magnite CTV (formerly Telaria)': 163,
    'Magnite DV+': 5,
    Mobfox: 138,
    OpenX: 14,
    Opera: 18,
    Primis: 258,
    Pubmatic: 109,
    Pulsepoint: 111,
    Reklamstore: 287,
    Sharethrough: 158,
    Smaato: 1,
    'Smaato (BS)': 126,
    Sonobi: 137,
    Taboola: 271,
    'Tappx (BS)': 307,
    Teads: 159,
    'Third Presence': 185,
    TripleLift: 145,
    Unity: 283,
    UnrulyX: 148,
    UnrulyXtend: 117,
    Verve: 39,
    Vidoomy: 317,
    Vungle: 192,
    'Xandr (AppNexus)': 223,
    Yieldmo: 219,
    _Test: 25,
    '_Test QA': 7,
  },
  AD_PLACEMENT_POSITION: {
    'Above the Fold': 1,
    'Below the Fold': 3,
    'Footer (sticky ad)': 5,
    'Full Screen': 7,
    'Header (sticky ad)': 4,
    Other: 0,
    'Sidebar (sticky ad)': 6,
  },
  PACKAGES: {
    'automation_testing_100_sites (Open Auction only)': 43286,
    'Kids and Family-Oriented Games (Open Auction and PMP)': 37413,
    'Not relevant apps_exclusion (Open Auction only)': 32872,
  },
  PACKAGE_ITEMS: {
    'Custom bid': 3,
    'Custom daily budget': 4,
    'Custom total budget': 5,
    'Include only': 1,
    Exclude: 2,
    'Disable impression capping': 6,
    'Disable auto optimisation': 7,
    'Disable budget pacing for this package': 8,
    'Disable App/Site category exclusion': 9,
    'Allow multiple bids per user per second': 10,
  },
  PRIVATE_MARKETPLACE: {
    'Private auction - Anzu - ALWAYS ON - EMEA Tier 1 - Display PC/Console ($7.49)': 12971,
  },
  CLICK_URL_TYPE: {
    'Landing page': 1,
  },
  CREATIVE: {
    CampaignCreationSelenium: 62688,
  },
}

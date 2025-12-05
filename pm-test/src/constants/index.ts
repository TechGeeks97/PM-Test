/**
 * Centralized Constants File
 * All static data, configurations, and constants for the homepage
 */

// Image Paths
export const IMAGES = {
  // Logo & Branding
  logo: '/images/Logo.png',
  logoWhite: '/images/Logowhitered.png',
  flag: '/images/Flag.png',
  
  // Hero Section
  mobileDuoHero: '/images/mobileduohero.png',
  curve: '/images/curve.png',
  
  // Access Markets
  backgroundGroup890: '/images/Group 890.png',
  coin: '/images/Coin.png',
  vector: '/images/Vector.png',
  analyticsPie: '/images/Analytics Pie.png',
  earth: '/images/Earth.png',
  spreadFrom: '/images/spreadfrom.png',
  secureImage: '/images/secureimage.png',
  send: '/images/send.svg',
  sendRed: '/images/sendred.svg',
  
  // Join Traders
  handyman: '/images/handyman.png',
  dollarsBackground: '/images/dollars-background.png',
  
  // Our Markets
  cryptocurrency: '/images/Cryptocurrency.png',
  gold: '/images/gold.png',
  usEuro: '/images/us-euro.png',
  arrow1: '/images/Arrow 1.png',
  arrowUpRed: '/images/Arrowupred.png',
  arrowSquareIn: '/images/ArrowSquareIn.png',
  
  // Empower Trading
  empoweringTrading: '/images/empowering trading.png',
  chartingTool: '/images/chartingtool.png',
  tradingFirstCardFade: '/images/tradingfirstcardfade.png',
  flexibleLeverage: '/images/flexibleleverage.png',
  roundClock: '/images/roundclock.png',
  priceAlert: '/images/pricealert.png',
  
  // Seamless Withdrawals
  mobileHand1: '/images/mobile hand 1.png',
  userCard: '/images/usercard.png',
  mastercardFull: '/images/mastercard-full.png',
  fastImage: '/images/fastimage.png',
  effortless: '/images/effortless.png',
  
  // Daily Updates
  dailyUpdatesCover: '/images/dailyupdatescover.png',
  mediaBgCover: '/images/media bg-cover.png',
  
  // Testimonials
  gradientTestimonials: '/images/gradient for testimonials.png',
  
  // Promotional Banner
  step1: '/images/1.png',
  step2: '/images/2.png',
  step3: '/images/3.png',
  mobileHand: '/images/mobilehand.png',
  
  // Footer
  facebook: '/images/facebook.svg',
  linkedin: '/images/linkedinsvg.svg',
  instagram: '/images/instasvg.svg',
  youtube: '/images/youtubesvg.svg',
  x: '/images/xsvg.svg',
  paypalWhite: '/images/paylpalwhite.png',
  mastercardWhite: '/images/mastercardwhite.png',
  skrillWhite: '/images/Skrillwhite.png',
  applePayWhite: '/images/Paywhite.png',
  visa: '/images/Visa.png',
  
  // User
  user: '/images/User.png',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  {
    label: 'Trading',
    hasDropdown: true,
    dropdownItems: [
      'Forex Trading',
      'Stock Trading',
      'Cryptocurrency',
      'Commodities',
      'Indices',
      'CFDs',
    ],
  },
  {
    label: 'Discover',
    hasDropdown: true,
    dropdownItems: [
      'Market Analysis',
      'Trading Guides',
      'Webinars',
      'Educational Resources',
      'Market News',
      'Economic Calendar',
    ],
  },
  {
    label: 'Promotions',
    hasDropdown: true,
    dropdownItems: [
      'Welcome Bonus',
      'Referral Program',
      'Trading Contests',
      'Special Offers',
      'Loyalty Rewards',
    ],
  },
  {
    label: 'Company',
    hasDropdown: true,
    dropdownItems: [
      'About Us',
      'Our Team',
      'Careers',
      'Press Releases',
      'Partnerships',
      'Contact Us',
    ],
  },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', href: '#' },
    { label: 'Our Markets', href: '#' },
    { label: 'Platforms', href: '#' },
    { label: 'Pricing', href: '#' },
  ],
  supportLinks: [
    { label: 'Help Center', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  companyLinks: [
    { label: 'Careers', href: '#' },
    { label: 'News & Updates', href: '#' },
    { label: 'Partnerships', href: '#' },
    { label: 'Legal Documents', href: '#' },
  ],
} as const;

// Social Media Icons
export const SOCIAL_ICONS = [
  { name: 'Facebook', image: IMAGES.facebook, href: '#' },
  { name: 'LinkedIn', image: IMAGES.linkedin, href: '#' },
  { name: 'Instagram', image: IMAGES.instagram, href: '#' },
  { name: 'YouTube', image: IMAGES.youtube, href: '#' },
  { name: 'X (Twitter)', image: IMAGES.x, href: '#' },
] as const;

// Payment Methods
export const PAYMENT_METHODS = [
  { name: 'PayPal', image: IMAGES.paypalWhite },
  { name: 'Mastercard', image: IMAGES.mastercardWhite },
  { name: 'Skrill', image: IMAGES.skrillWhite },
  { name: 'Apple Pay', image: IMAGES.applePayWhite },
  { name: 'Visa', image: IMAGES.visa },
] as const;

// Access Markets Feature Buttons
export const ACCESS_MARKETS_FEATURES = [
  {
    icon: IMAGES.coin,
    text: '$0 Deposit Fees',
  },
  {
    icon: IMAGES.spreadFrom,
    text: 'Spreads from 0.0 pips',
  },
  {
    icon: IMAGES.secureImage,
    text: 'Secure Funds',
  },
] as const;

// Market Cards
export const MARKET_CARDS = [
  {
    icon: IMAGES.coin,
    title: 'Forex',
    description: 'Trade the world\'s largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.',
  },
  {
    icon: IMAGES.vector,
    title: 'Stocks',
    description: 'From Wall Street to global tech leaders, follow the world\'s leading companies and react to market moves in real time.',
  },
  {
    icon: IMAGES.analyticsPie,
    title: 'Indices',
    description: 'Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.',
  },
  {
    icon: IMAGES.earth,
    title: 'Commodities',
    description: 'Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.',
  },
] as const;

// Empower Trading Features
export const EMPOWER_TRADING_FEATURES = [
  {
    id: 'charting',
    title: 'Charting tools and indicators',
    description: 'Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators.',
    imageSrc: IMAGES.chartingTool,
    backgroundImage: IMAGES.tradingFirstCardFade,
  },
  {
    id: 'leverage',
    title: 'Get flexible leverage',
    description: 'Trade larger positions and maximise your return potential with lower margin requirements.',
    imageSrc: IMAGES.flexibleLeverage,
  },
  {
    id: 'support',
    title: 'Round-the-clock support',
    description: 'Our dedicated experts are available 24/5 to guide and assist you at every step.',
    imageSrc: IMAGES.roundClock,
  },
  {
    id: 'alerts',
    title: 'Customisable price alerts',
    description: 'Set real-time alerts to track asset movements and stay ahead with your strategy.',
    imageSrc: IMAGES.priceAlert,
  },
] as const;

// Seamless Withdrawals Features
export const WITHDRAWAL_FEATURES = [
  {
    id: 'fast',
    imageSrc: IMAGES.fastImage,
    title: 'Ultra-Fast Processing',
    description: 'Over 99% of withdrawals processed within 24-hours, based on verified 2025 internal performance data.',
  },
  {
    id: 'secure',
    imageSrc: IMAGES.secureImage,
    title: 'Secure & Transparent',
    description: 'Tier 1 banking and custody partners keep your funds protected at every stage.',
  },
  {
    id: 'effortless',
    imageSrc: IMAGES.effortless,
    title: 'Effortless Access',
    description: 'Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.',
  },
] as const;

// Promotional Banner Steps
export const PROMOTIONAL_STEPS = [
  { image: IMAGES.step1, label: 'Register' },
  { image: IMAGES.step2, label: 'Fund' },
  { image: IMAGES.step3, label: 'Start Trading' },
] as const;

// Testimonials Data
export const TESTIMONIALS_DATA = [
  {
    id: '1',
    review: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
    name: 'Adam Keller',
    initials: 'AK',
    icon: 'headphone' as const,
  },
  {
    id: '2',
    review: "Premier works well for me. KYC was fast and support people (Thx milos!!) 🙂 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    name: 'Lucas Vermeer',
    initials: 'LV',
    icon: 'headphone' as const,
  },
  {
    id: '3',
    review: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    name: 'David Lorens',
    initials: 'DL',
    icon: 'email' as const,
  },
  {
    id: '4',
    review: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 🙂",
    name: 'Marco Lazzari',
    initials: 'ML',
    icon: 'earth' as const,
  },
  {
    id: '5',
    review: "I think Premier's trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
    name: 'Petar Ilic',
    initials: 'PL',
    icon: 'email' as const,
  },
  {
    id: '6',
    review: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
    name: 'Mark "Clips" Renard',
    initials: 'MR',
    icon: 'email' as const,
  },
  {
    id: '7',
    review: "Good service 🙂 Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
    name: 'TradeAce92',
    initials: 'TA',
    icon: 'headphone' as const,
  },
  {
    id: '8',
    review: "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    name: 'Shivani Kaur',
    initials: 'SK',
    icon: 'earth' as const,
  },
  {
    id: '9',
    review: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    name: 'Mateusz Durek',
    initials: 'MD',
    icon: 'email' as const,
  },
] as const;

// Testimonials Configuration
export const TESTIMONIALS_CONFIG = {
  itemsPerPage: 9,
  maxLength: 150,
} as const;

// Hero Section Content
export const HERO_CONTENT = {
  title: {
    line1: 'Trade Forex',
    line2: 'Premier',
    line3: 'Markets',
  },
  description: 'Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.',
  buttons: {
    primary: 'Start Trading',
    secondary: 'Try Demo Account',
  },
} as const;

// Access Markets Content
export const ACCESS_MARKETS_CONTENT = {
  heading: {
    line1: 'Trade',
    line2: 'with Premier Markets',
    line3: 'Access',
    highlight: '17,000+',
    line4: 'markets all in one',
  },
  description: 'Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity, and seamless execution.',
} as const;

// Join Traders Content
export const JOIN_TRADERS_CONTENT = {
  heading: {
    line1: 'Join',
    highlight: '50,000+',
    line2: 'traders who',
    line3: 'trust us',
  },
  description: {
    line1: 'Experience advanced trading tools, transparent',
    line2: 'competitive pricing, lightning-fast execution, and dedicated',
    line3: 'support trusted by traders worldwide.',
  },
  bannerHeading: {
    line1: 'Everything you need to',
    line2: 'trade the markets',
  },
  buttons: {
    primary: 'Start Trading',
    secondary: 'Try Demo Account',
    banner: 'Explore Accounts',
  },
} as const;

// Empower Trading Content
export const EMPOWER_TRADING_CONTENT = {
  heading: 'Empower Your Trading',
  description: {
    line1: 'Unlock advanced tools, insights, and support to',
    line2: 'maximise your trading potential.',
  },
} as const;

// Seamless Withdrawals Content
export const WITHDRAWAL_CONTENT = {
  subtitle: 'Access your funds anytime, anywhere.',
  heading: 'Seamless Withdrawals',
} as const;

// Daily Updates Content
export const DAILY_UPDATES_CONTENT = {
  label: 'Daily Updates',
  heading: 'Everything you need to trade the markets',
  viewAll: 'View all',
  defaultVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  article: {
    date: '03 October 2025',
    title: 'Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears',
    excerpt: "Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine's readiness to support a proposal for...",
    id: 'gulf-markets-mixed-ukraine-ceasefire',
  },
  promotion: {
    title: 'Premier Market - Market Cap Weighted PR (BKP)',
    description: {
      line1: 'Stay ahead of the latest tech trends with our algorithmically selected',
      line2: 'portfolio of the 15 top tech stocks each month.',
    },
    tags: ['Google', 'Trending', 'investing.com'],
  },
} as const;

// Testimonials Content
export const TESTIMONIALS_CONTENT = {
  heading: {
    line1: 'What',
    highlight: 'Premier',
    line2: 'Traders',
    line3: 'are saying about us',
  },
  description: {
    line1: 'Join a growing community of professionals who rely on our platform to',
    line2: 'trade smarter every day.',
  },
} as const;

// Promotional Banner Content
export const PROMOTIONAL_BANNER_CONTENT = {
  description: {
    line1: 'Ready to trade smarter? Get instant access to global',
    line2: 'markets with reliable tools and 24/5 support.',
  },
  button: 'Get Started',
} as const;

// Footer Content
export const FOOTER_CONTENT = {
  disclaimer: 'CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.',
  companyInfo: 'Premier Markets Ltd, trading as Premier Markets is a company incorporated under company number: A000003075 in Anguilla. Our registered office is located at Anguilla, The Valley, Kismet House, Sandy Hill, PO Box P.O.Box 174 The information on this site is not directed at residents of Russia, Afghanistan, Belgium, Canada, India, United States or any country or jurisdiction where such distribution or use would be contrary to local law, sanctions or regulation.',
  copyright: 'Copyright © 2025 Premier Markets - All Rights Reserved.',
} as const;

// Our Markets Data
export const MARKET_CATEGORIES = [
  { id: 'most-traded', label: 'Most Traded' },
  { id: 'commodities', label: 'Commodities' },
  { id: 'indices', label: 'Indices' },
  { id: 'cryptocurrencies', label: 'Cryptocurrencies' },
  { id: 'shares', label: 'Shares' },
  { id: 'etfs', label: 'ETFs' },
] as const;

export const TIMEFRAMES = ['1d', '1h', '4h', '1m', '5m', '15m', '30m', '1w'] as const;

// Market Assets Data (moved from OurMarkets component)
// Note: This is dummy data for demonstration. In production, this would come from an API.
export const MARKET_ASSETS = [
  {
    id: 'btc',
    name: 'BTC Bitcoin',
    symbol: 'BTC',
    logo: '₿',
    price: '52,400.00',
    buyPrice: '52,450.00',
    sellPrice: '52,350.00',
    change: '+1,250.00',
    changePercent: '+3,25%',
    isPositive: true,
    category: 'cryptocurrencies',
    buyers: 66.93,
    sellers: 33.07,
    low: '51,200.00',
    high: '52,800.00',
  },
  {
    id: 'eth',
    name: 'ETH Ethereum',
    symbol: 'ETH',
    logo: 'Ξ',
    price: '3,250.00',
    buyPrice: '3,255.00',
    sellPrice: '3,245.00',
    change: '+85.50',
    changePercent: '+2.70%',
    isPositive: true,
    category: 'cryptocurrencies',
    buyers: 58.20,
    sellers: 41.80,
    low: '3,180.00',
    high: '3,280.00',
  },
  {
    id: 'gold',
    name: 'Gold',
    symbol: 'XAU/USD',
    logo: '🥇',
    price: '3773.31',
    buyPrice: '3773.61',
    sellPrice: '3773.01',
    change: '+15.50',
    changePercent: '+0.41%',
    isPositive: true,
    category: 'commodities',
    buyers: 66.93,
    sellers: 33.07,
    low: '3686.38',
    high: '3788.96',
  },
  {
    id: 'oil',
    name: 'Crude Oil',
    symbol: 'WTI/USD',
    logo: '🛢️',
    price: '78.45',
    buyPrice: '78.50',
    sellPrice: '78.40',
    change: '-0.85',
    changePercent: '-1.07%',
    isPositive: false,
    category: 'commodities',
    buyers: 45.30,
    sellers: 54.70,
    low: '77.20',
    high: '79.80',
  },
  {
    id: 'sp500',
    name: 'S&P 500',
    symbol: 'SPX',
    logo: '📈',
    price: '4,850.25',
    buyPrice: '4,852.00',
    sellPrice: '4,848.50',
    change: '+25.50',
    changePercent: '+0.53%',
    isPositive: true,
    category: 'indices',
    buyers: 72.15,
    sellers: 27.85,
    low: '4,820.00',
    high: '4,865.00',
  },
  {
    id: 'nasdaq',
    name: 'NASDAQ',
    symbol: 'NDX',
    logo: '💹',
    price: '15,420.75',
    buyPrice: '15,425.00',
    sellPrice: '15,416.50',
    change: '+120.25',
    changePercent: '+0.79%',
    isPositive: true,
    category: 'indices',
    buyers: 68.40,
    sellers: 31.60,
    low: '15,300.00',
    high: '15,450.00',
  },
  {
    id: 'apple',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    logo: '🍎',
    price: '185.50',
    buyPrice: '185.75',
    sellPrice: '185.25',
    change: '+2.30',
    changePercent: '+1.26%',
    isPositive: true,
    category: 'shares',
    buyers: 65.80,
    sellers: 34.20,
    low: '183.20',
    high: '186.00',
  },
  {
    id: 'tesla',
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    logo: '⚡',
    price: '245.80',
    buyPrice: '246.00',
    sellPrice: '245.60',
    change: '-3.20',
    changePercent: '-1.29%',
    isPositive: false,
    category: 'shares',
    buyers: 42.50,
    sellers: 57.50,
    low: '243.00',
    high: '249.00',
  },
] as const;

// Chart Data Generator Function (moved from OurMarkets component)
// This generates dummy chart data. In production, this would come from an API.
export const getChartData = (assetId: string, timeframe: string) => {
  const baseData: Record<string, Record<string, Array<{ month: string; value: number; date?: string; price?: string }>>> = {
    gold: {
      '1d': [
        { month: '00:00', value: 20, date: '28 Okt 2023', price: '$1,425.00' },
        { month: '04:00', value: 35 },
        { month: '08:00', value: 45 },
        { month: '12:00', value: 30 },
        { month: '16:00', value: 50 },
        { month: '20:00', value: 60 },
        { month: '24:00', value: 70 },
      ],
      '1h': Array.from({ length: 24 }, (_, i) => ({ month: `${i}:00`, value: 20 + Math.random() * 80 })),
      '4h': Array.from({ length: 6 }, (_, i) => ({ month: `${i * 4}:00`, value: 20 + Math.random() * 80 })),
      '1m': Array.from({ length: 60 }, (_, i) => ({ month: `${i}m`, value: 20 + Math.random() * 80 })),
      '5m': Array.from({ length: 12 }, (_, i) => ({ month: `${i * 5}m`, value: 20 + Math.random() * 80 })),
      '15m': Array.from({ length: 4 }, (_, i) => ({ month: `${i * 15}m`, value: 20 + Math.random() * 80 })),
      '30m': Array.from({ length: 2 }, (_, i) => ({ month: `${i * 30}m`, value: 20 + Math.random() * 80 })),
      '1w': [
        { month: 'Mon', value: 20 },
        { month: 'Tue', value: 35 },
        { month: 'Wed', value: 45 },
        { month: 'Thu', value: 30 },
        { month: 'Fri', value: 50 },
        { month: 'Sat', value: 60 },
        { month: 'Sun', value: 70 },
      ],
    },
    btc: {
      '1d': Array.from({ length: 7 }, (_, i) => ({ month: `${i * 4}:00`, value: 30 + Math.random() * 70 })),
      '1h': Array.from({ length: 24 }, (_, i) => ({ month: `${i}:00`, value: 30 + Math.random() * 70 })),
      '4h': Array.from({ length: 6 }, (_, i) => ({ month: `${i * 4}:00`, value: 30 + Math.random() * 70 })),
      '1m': Array.from({ length: 60 }, (_, i) => ({ month: `${i}m`, value: 30 + Math.random() * 70 })),
      '5m': Array.from({ length: 12 }, (_, i) => ({ month: `${i * 5}m`, value: 30 + Math.random() * 70 })),
      '15m': Array.from({ length: 4 }, (_, i) => ({ month: `${i * 15}m`, value: 30 + Math.random() * 70 })),
      '30m': Array.from({ length: 2 }, (_, i) => ({ month: `${i * 30}m`, value: 30 + Math.random() * 70 })),
      '1w': Array.from({ length: 7 }, (_, i) => ({ month: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i], value: 30 + Math.random() * 70 })),
    },
  };

  // Default data if asset not found
  const defaultData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    value: 20 + Math.random() * 80,
  }));

  return baseData[assetId]?.[timeframe] || defaultData;
};

export { colors } from './colors';


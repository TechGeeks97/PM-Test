# Architecture & Data Flow Diagrams

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    app/layout.tsx                            │
│  - Fonts (Gilroy, Urbanist)                                 │
│  - UserTypeProvider (Context)                               │
│  - Global styles                                            │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    app/page.tsx                               │
│  - Main orchestrator                                         │
│  - Conditional rendering based on userType                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Header    │ │  Sections   │ │   Footer    │
│             │ │             │ │             │
│ - Tabs      │ │ - Hero      │ │ - Links     │
│ - Nav       │ │ - Markets   │ │ - Social    │
│ - Mobile    │ │ - Trading   │ │ - Payment   │
└─────────────┘ └─────────────┘ └─────────────┘
```

## 🔄 Data Flow: Personal/Institutional Tabs

```
User Clicks Tab
       │
       ▼
┌─────────────────────┐
│  Header Component   │
│  setUserType('...') │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  UserTypeContext    │
│  Updates State      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Page Component     │
│  useUserType()      │
│  Reads State        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Conditional Render │
│  userType ===       │
│  'personal' ?       │
│  <Hero /> : null    │
└─────────────────────┘
```

## 📊 Chart Data Flow (OurMarkets)

```
User Action
    │
    ├─ Select Category ──┐
    ├─ Select Asset ─────┤
    └─ Select Timeframe ─┘
           │
           ▼
┌──────────────────────┐
│  State Updates       │
│  - selectedCategory  │
│  - selectedAsset      │
│  - selectedTimeframe  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  useEffect Hook      │
│  Auto-select asset   │
│  if not in filtered  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  useMemo Hooks       │
│  - filteredAssets    │
│  - chartData         │
│  - maxValue          │
│  - points (path)     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  SVG Chart Renders   │
│  - Path (line)       │
│  - Points (circles)  │
│  - Tooltips          │
└──────────────────────┘
```

## 🎨 Component Hierarchy

```
app/page.tsx
│
├── Header
│   ├── Tabs (Personal/Institutional)
│   ├── Navigation Items
│   │   └── Dropdown Menus
│   ├── Register Button
│   └── Mobile Menu
│
├── Hero (conditional)
│   ├── Title & Description
│   ├── CTA Buttons
│   └── Mobile Duo Image
│
├── AccessMarkets
│   ├── Heading
│   ├── Feature Buttons
│   └── Market Cards Grid
│
├── JoinTraders
│   ├── Heading & Description
│   ├── CTA Buttons
│   └── Banner (with handyman image)
│
├── OurMarkets
│   ├── Category Buttons
│   ├── Asset List
│   ├── Trading Controls
│   ├── Market Sentiment
│   └── Chart
│       ├── SVG Path
│       ├── Interactive Points
│       └── Timeframe Buttons
│
├── EmpowerTrading
│   └── Feature Grid (2x2)
│
├── SeamlessWithdrawals
│   ├── Feature Cards
│   └── Mobile Mockup
│
├── DailyUpdates
│   ├── News Card
│   └── Video Player
│
├── Testimonials
│   ├── Navigation Arrows
│   └── Testimonials Grid
│
└── Footer
    ├── Payment Methods
    ├── Quick Links
    ├── Social Icons
    └── Company Info
```

## 🔄 State Management Flow

```
┌─────────────────────────────────────┐
│      Global State (Context)         │
│      - userType                     │
│        'personal' | 'institutional' │
└──────────────┬──────────────────────┘
               │
    ┌──────────┴──────────┐
    │                      │
    ▼                      ▼
┌─────────┐         ┌──────────┐
│ Header  │         │  Page    │
│         │         │          │
│ Writes  │         │  Reads   │
│ State   │         │  State   │
└─────────┘         └──────────┘
```

## 📦 Component Props Flow

```
OurMarkets Component
    │
    ├─ No Props (self-contained)
    │
    ├─ Uses Context
    │  └─ useUserType()
    │
    ├─ Uses Constants
    │  ├─ MARKET_ASSETS
    │  ├─ MARKET_CATEGORIES
    │  ├─ TIMEFRAMES
    │  └─ getChartData()
    │
    └─ Internal State
       ├─ selectedCategory
       ├─ selectedAsset
       ├─ selectedTimeframe
       └─ hoveredIndex
```

## 🎯 Responsive Breakpoint Strategy

```
Mobile (default)
    │
    ├─ Single column layouts
    ├─ Hamburger menu
    ├─ Stacked buttons
    └─ Smaller text
    │
    ▼
Tablet (sm: 640px+)
    │
    ├─ 2 column grids
    ├─ Larger text
    └─ More spacing
    │
    ▼
Desktop (lg: 1024px+)
    │
    ├─ 3-4 column grids
    ├─ Full navigation
    ├─ Side-by-side layouts
    └─ Absolute positioning
```

## ⚡ Performance Optimization Flow

```
Page Load
    │
    ├─ Priority Images (Hero, Logo)
    │  └─ Load immediately
    │
    ├─ Below-fold Images
    │  └─ Lazy load (loading="lazy")
    │
    ├─ Code Splitting
    │  └─ Next.js automatic
    │
    └─ Memoization
       ├─ useMemo (calculations)
       └─ React.memo (components)
```

## 🔍 Chart Calculation Flow

```
getChartData(assetId, timeframe)
    │
    ▼
Returns Array of Points
    │
    ▼
Calculate Max Value
    │
    ├─ Find highest value
    └─ Add 10% padding
    │
    ▼
Calculate X Positions
    │
    ├─ Evenly spaced
    └─ Based on array length
    │
    ▼
Calculate Y Positions
    │
    ├─ Inverted (SVG Y=0 is top)
    └─ Based on value/maxValue
    │
    ▼
Generate SVG Path
    │
    └─ Connect points with polyline
    │
    ▼
Render Chart
    ├─ Path (line)
    ├─ Area fill
    ├─ Points (circles)
    └─ Tooltips
```

## 🎨 Styling Strategy

```
Tailwind CSS
    │
    ├─ Utility Classes
    │  └─ className="text-red-500"
    │
    ├─ Responsive Prefixes
    │  └─ sm:, lg:, xl:
    │
    ├─ Custom Colors
    │  └─ text-[#ED1D25]
    │
    └─ Inline Styles (when needed)
       └─ style={{ borderRadius: '50px' }}
```

## 📱 Mobile Menu Flow

```
Mobile Screen (< 1024px)
    │
    ├─ Hamburger Icon Visible
    │
    ├─ Click Hamburger
    │  └─ isMobileMenuOpen = true
    │
    ├─ Menu Slides Down
    │  ├─ Navigation Items
    │  ├─ Dropdowns (tap to expand)
    │  ├─ Register Button
    │  └─ User Icon
    │
    └─ Desktop Elements Hidden
       └─ Register & User Icon moved to menu
```

## 🎯 Key Design Patterns

### 1. Container/Presentational Pattern
```
Container (page.tsx)
    │
    └─ Orchestrates sections
       └─ No styling logic
```

### 2. Compound Components
```
Header
    ├─ Tabs
    ├─ Navigation
    └─ Mobile Menu
```

### 3. Custom Hooks
```
useUserType()
    └─ Wraps useContext
       └─ Adds error handling
```

### 4. Memoization Pattern
```
Expensive Calculation
    │
    └─ Wrap in useMemo
       └─ Only recalculate on dependency change
```

---

## 📝 Quick Architecture Summary

**Entry Point**: `app/page.tsx`
- Orchestrates all sections
- Conditional rendering based on user type

**Global State**: `UserTypeContext`
- Stores Personal/Institutional selection
- Accessed via `useUserType()` hook

**Data Source**: `src/constants/index.ts`
- All static data centralized
- Easy to swap with API later

**Styling**: Tailwind CSS
- Utility-first approach
- Mobile-first responsive

**Performance**: Next.js optimizations
- Image optimization
- Code splitting
- Compression

---

Use these diagrams to visualize the architecture during your interview!


# Quick Reference Cheat Sheet - PM Test Project

## 🚀 Quick Start Commands
```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm start      # Run production build
```

## 📁 File Structure (What Goes Where)

```
app/page.tsx              → Main page (orchestrates sections)
app/layout.tsx            → Root layout (fonts, providers)

src/components/
  layout/Header.tsx        → Navigation, tabs, mobile menu
  layout/Footer.tsx        → Footer links, payment methods
  
  sections/Hero.tsx        → Landing section with CTAs
  sections/OurMarkets.tsx  → Trading interface + chart
  sections/AccessMarkets.tsx → Market cards
  sections/JoinTraders.tsx  → Trust section
  sections/EmpowerTrading.tsx → Features grid
  sections/SeamlessWithdrawals.tsx → Withdrawal features
  sections/DailyUpdates.tsx → News + video
  sections/Testimonials.tsx → Reviews carousel
  sections/PromotionalBanner.tsx → CTA banner
  
  ui/Button.tsx           → Reusable button
  ui/MarketCard.tsx       → Market card component

src/contexts/UserTypeContext.tsx → Global state (Personal/Institutional)
src/constants/index.ts    → All static data
src/types/index.ts       → TypeScript interfaces
```

## 🎯 Key Concepts to Remember

### 1. Personal/Institutional Tabs
- **Where**: Header component
- **How**: React Context API
- **State**: Stored in `UserTypeContext`
- **Usage**: `const { userType, setUserType } = useUserType()`
- **Effect**: Hero section only shows for Personal users

### 2. Chart Logic (OurMarkets)
- **State**: category, asset, timeframe, hoveredIndex
- **Data Flow**: Category → Filter Assets → Select Asset → Load Chart Data
- **Key Functions**:
  - `getChartData(assetId, timeframe)` → Returns data points
  - `useMemo` for filtered assets, chart paths, max value
- **Edge Cases**: Empty data, single point, division by zero

### 3. Responsive Design
- **Approach**: Mobile-first
- **Breakpoints**: 
  - Mobile: default
  - Tablet: `sm:` (640px+)
  - Desktop: `lg:` (1024px+)
  - Large: `xl:` (1280px+)
- **Example**: `text-sm sm:text-base lg:text-lg`

### 4. Performance Optimizations
- **Images**: Next.js auto-optimizes (AVIF/WebP)
- **Lazy Loading**: `loading="lazy"` for below-fold images
- **Priority**: `priority` for above-fold images
- **Memoization**: `useMemo` for expensive calculations
- **React.memo**: Prevents unnecessary re-renders

## 💡 Common Interview Questions - Quick Answers

### "Why Next.js?"
- Image optimization (AVIF/WebP)
- Built-in routing
- Performance optimizations
- Production-ready

### "Why TypeScript?"
- Type safety (catch errors early)
- Better IDE support
- Self-documenting code

### "Why Context API?"
- Simple global state
- No prop drilling
- Built-in (no Redux needed)

### "How does the chart work?"
1. User selects category → filters assets
2. User selects asset → loads chart data
3. User selects timeframe → updates data
4. Calculate max value from data
5. Generate SVG path
6. Render with tooltips

### "What performance optimizations?"
- Image optimization (AVIF/WebP)
- Lazy loading
- useMemo for calculations
- React.memo for components

### "What would you improve?"
- Real API integration
- Testing (unit, integration, E2E)
- Accessibility improvements
- Animation/transitions
- SEO optimization

## 🔧 Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **React**: 19.2.0
- **Video**: react-player

## 📊 Key Components Breakdown

### Header
- Tabs (Personal/Institutional)
- Desktop dropdowns (hover)
- Mobile hamburger menu
- Register button (moves to menu on mobile)

### OurMarkets (Most Complex)
- Category selection
- Asset list (filtered)
- Trading controls (Buy/Sell)
- Market sentiment
- Interactive chart
- Timeframe buttons

### Chart Features
- Dynamic data loading
- Auto-scaling (max value calculation)
- Hover tooltips
- Last point highlight
- SVG-based rendering

## 🐛 Bugs Fixed
1. Hardcoded chart data → Dynamic
2. Fixed max value (100) → Calculated from data
3. Division by zero → Edge case checks
4. Wrong tooltip index → Last point logic
5. X-axis calculation → Consistent formula

## 📝 Assumptions Made
- Images in `/public/images/`
- Gilroy fonts in `/public/fonts/`
- Dummy market data
- Navigation links are `#` (placeholders)
- Video defaults to YouTube demo
- Daily Rates Card not added (design showed duplicates)

## 🎨 Design Decisions
- **Tabs**: Easy UX, no page reload
- **Context**: Simple global state
- **Constants**: Centralized data
- **Mobile-first**: Better performance
- **TypeScript**: Type safety

## ⚡ Performance Tips Mentioned
- Next.js image optimization
- Lazy loading images
- useMemo for calculations
- React.memo for components
- Compression enabled
- Image caching headers

## 🎯 Demo Flow (2-3 minutes)
1. Show responsive design (resize browser)
2. Click Personal/Institutional tabs
3. Interact with chart (change category, asset, timeframe)
4. Show mobile menu
5. Scroll through sections
6. Mention performance optimizations

## 📚 Code Patterns Used

### Context Pattern
```typescript
// Create context
const Context = createContext()

// Provider component
<Context.Provider value={state}>
  {children}
</Context.Provider>

// Custom hook
const useContext = () => {
  const context = useContext(Context)
  if (!context) throw new Error(...)
  return context
}
```

### useMemo Pattern
```typescript
const expensiveValue = useMemo(() => {
  // Expensive calculation
  return result
}, [dependency])
```

### Conditional Rendering
```typescript
{condition ? <ComponentA /> : <ComponentB />}
```

### Responsive Classes
```typescript
className="text-sm sm:text-base lg:text-lg"
```

## ✅ Before Demo Checklist
- [ ] Test on mobile
- [ ] Test on desktop
- [ ] All interactions work
- [ ] No console errors
- [ ] Images load
- [ ] Chart works
- [ ] Tabs switch correctly

## 🎤 Opening Statement (30 sec)
"I built a responsive trading platform landing page using Next.js, TypeScript, and Tailwind CSS. It includes interactive charts, Personal/Institutional tab switching, and is fully optimized for performance. Let me show you the key features."

## 🎤 Closing Statement (30 sec)
"I focused on clean code structure, performance optimizations, and closely matching the Figma design. The most complex part was the dynamic chart logic, which I made fully responsive to any data. With more time, I'd integrate a real API and add comprehensive testing."

---

**Remember**: Be confident, explain your thinking, and show problem-solving skills!


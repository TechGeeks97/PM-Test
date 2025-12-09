# Color & Font Migration Guide

## ✅ Completed

### 1. Global CSS Variables
- Updated `app/globals.css` with comprehensive color variables
- All colors from `colors.ts` are now available as CSS variables

### 2. Components Updated
- ✅ `Button.tsx` - Uses CSS variables
- ✅ `Hero.tsx` - Uses colors constant
- ✅ `Header.tsx` - Uses CSS variables for colors
- ✅ `OurMarkets.tsx` - Partially updated (needs font fixes)

### 3. Utility Created
- ✅ `src/utils/colors.ts` - Helper utilities for color access

## 🔄 Remaining Work

### Components Needing Color Updates:
1. **DailyUpdates.tsx** - Replace `#ED1D25` with CSS variables
2. **Testimonials.tsx** - Replace `#ED1D25` with CSS variables  
3. **AccessMarkets.tsx** - Replace `#ED1D25` with CSS variables
4. **JoinTraders.tsx** - Replace `#ED1D25`, `#991B1B`, `#C91A22` with CSS variables
5. **SeamlessWithdrawals.tsx** - Replace `#ED1D25` with CSS variables
6. **EmpowerTrading.tsx** - Replace hardcoded colors
7. **PromotionalBanner.tsx** - Replace hardcoded colors
8. **Footer.tsx** - Replace `#ED1D25` with CSS variables

### Font Usage Issues:
1. Remove inline `style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}`
2. Use `.font-gilroy-bold` class instead
3. Remove inline `style={{ fontFamily: 'Urbanist, sans-serif' }}`
4. Rely on global font setup (already configured in layout.tsx)

## 📝 Color Replacement Pattern

### Before:
```tsx
className="text-[#ED1D25]"
style={{ color: '#ED1D25' }}
fill="#ED1D25"
```

### After:
```tsx
className="text-[var(--color-primary)]"
style={{ color: colors.primary.main }}
fill={colors.primary.main}
```

## 📝 Font Replacement Pattern

### Before:
```tsx
<h2 style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
```

### After:
```tsx
<h2 className="font-gilroy-bold">
```

## 🎯 Quick Fix Commands

To find all remaining hardcoded colors:
```bash
grep -r "#ED1D25" src/components
grep -r "#C91A1F" src/components
grep -r "#991B1B" src/components
grep -r "#010205" src/components
```

To find all inline font styles:
```bash
grep -r "fontFamily.*Gilroy" src/components
grep -r "fontFamily.*Urbanist" src/components
```


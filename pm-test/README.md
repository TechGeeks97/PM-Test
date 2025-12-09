# PM-Test - Premier Markets Trading Platform

A modern, responsive trading platform website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:TechGeeks97/PM-Test.git
cd PM-Test/pm-test
run git checkout main
```

2. Install dependencies:

npm install


3. Run the development server:

npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser



## 📁 Project Structure

```
pm-test/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and providers
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles and font definitions
├── src/
│   ├── components/
│   │   ├── layout/        # Header and Footer components
│   │   ├── sections/      # Page sections (Hero, Markets, etc.)
│   │   └── ui/            # Reusable UI components (Button, Card, etc.)
│   ├── contexts/          # React Context providers
│   ├── constants/         # Constants and configuration
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── public/
│   ├── images/           # Static images
│   └── fonts/            # Custom font files (Gilroy)
└── package.json
```

## 🎨 Features

- **Fully Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Personal/Institutional Tabs**: Context-based user type switching
- **Interactive Navigation**: Dropdown menus with hover functionality
- **Dynamic Market Data**: Real-time market cards and trading interface
- **Video Integration**: YouTube video player with custom controls
- **Testimonials Carousel**: Paginated testimonials with expand/collapse
- **Modern UI Components**: Reusable Button, Card, and MarketCard components

## 🛠️ Technologies Used

- **Next.js 16.0.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **react-player** - Video player component

## 📱 Responsive 

The project uses Tailwind's responsive 
All components are fully responsive and tested across:
- Mobile phones (320px - 640px)
- Tablets (640px - 1024px)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Key Components

### Layout Components
- **Header**: Navigation with dropdowns, Personal/Institutional tabs, mobile menu
- **Footer**: Payment methods, social links, company information

### Section Components
- **Hero**: Main landing section with CTA buttons
- **AccessMarkets**: Market categories with feature cards
- **JoinTraders**: Trust section with handyman illustration
- **OurMarkets**: Interactive market trading interface with charts
- **EmpowerTrading**: Feature grid with center icon
- **SeamlessWithdrawals**: Withdrawal features with mobile mockup
- **DailyUpdates**: News card and video player
- **Testimonials**: Customer reviews with pagination
- **PromotionalBanner**: CTA banner with step indicators
- **Daily Rates Currency Card**: USD/EUR currency pair card with mini graph (currently commented out - see notes below)

## 🔧 Assumptions

- All images are in `/public/images/`
- Gilroy fonts are in `/public/fonts/`
- Personal/Institutional tabs work (institutional just shows placeholder for now)
- Video in DailyUpdates defaults to YouTube demo
- Market data is dummy data
- Navigation links are just # for now
- Payment method images are white versions for the dark footer
- Social icons are SVG files in images folder
- Daily Rates Currency Card (USD/EUR) is commented out. Design showed 4 cards but some were duplicates, so probably only showing 1-2 currency pairs to keep it clean.


## 📝 Code Stuff

- Using TypeScript for type safety
- Components are split up and reusable
- Using React Context for the Personal/Institutional tabs
- Tailwind for styling
- Mobile-first responsive design
- Tried to keep HTML semantic and accessible

## ⚡ Performance Stuff

I tried to make it load fast:

### Images
- Using Next.js image optimization (converts to AVIF/WebP automatically)
- Images below the fold use lazy loading so they don't load until you scroll
- Only the hero image and logo load immediately (priority flag)
- Removed a bunch of `unoptimized` flags so Next.js can actually optimize them

### Code
- Wrapped OurMarkets in `memo` so it doesn't re-render unless it needs to
- Used `useMemo` for expensive stuff like chart calculations
- Turned on compression in Next.js config
- Set up image caching

Basically the page loads faster, uses less data, and doesn't lag when you interact with it.

## Chart Fixes I Made

Found some bugs in the chart and fixed them:

1. **Hardcoded data** - Chart wasn't using the `getChartData` function even though it was imported. Now it actually uses it and updates when you change currency or timeframe.

2. **Max value was always 100** - If your data went higher or lower it looked weird. Now it calculates the max from the actual data and adds 10% padding so it looks good.

3. **Division by zero** - If there was only 1 data point or empty array it would crash. Added checks so it doesn't break.

4. **Tooltip on wrong point** - Was hardcoded to show on the 11th point which only works with 12 months of data. Now it shows on the last point that has data, works with any amount.

5. **X-axis calculations** - Wasn't handling edge cases consistently. Fixed it so everything lines up properly.

6. **Secondary area** - Used hardcoded values that didn't scale. Now it scales with the data.

Basically the chart works with any data now, doesn't crash, and actually responds when you click stuff.

## 💭 Why I Did Things This Way

### Personal/Institutional Tabs - The Logic

So the design had two different sections - one for regular people trading and one for companies. I could've made separate pages but tabs seemed easier. Everyone knows how tabs work, you click and it switches right away. No loading, no waiting around.

The logic is simple - I use React Context to store which tab is selected (personal or institutional). When you click a tab, it updates the context, and the page component checks that context to decide what to show. If it's personal, show the hero section and all the trading stuff. If it's institutional, hide the hero and show different content.

I put the tabs in the header because that's where users expect to see navigation. They're always visible, always accessible. The state is global so any component can check if we're in personal or institutional mode.

On mobile it's just a tap. Way better than a dropdown where you have to click twice. And it keeps everything on one page so the navigation stays the same, just the content changes.

For institutional users they probably want different stuff - API stuff, bulk pricing, whatever. Regular users want to see the hero, features, all that. Tabs let me show different things without making a mess.

### The Chart Logic - How It Actually Works

Okay so the chart was a pain at first. I started with hardcoded data just to see something on screen, but that's not how real trading sites work. People need to switch between different currencies and timeframes.

Here's how the logic works:

1. **State management**: I have three pieces of state - selectedCategory (most-traded, forex, etc), selectedAsset (gold, btc, etc), and selectedTimeframe (1d, 1w, etc).

2. **Data filtering**: When you pick a category, it filters the asset list. If you pick "most-traded", it shows the top 3. If you pick "forex", it shows only forex assets.

3. **Auto-selection**: If the asset you had selected isn't in the new filtered list, it automatically picks the first one. Prevents errors.

4. **Chart data**: When you change the asset or timeframe, it calls `getChartData(selectedAsset, selectedTimeframe)`. This function looks up the data for that specific combination. If it doesn't exist, it returns default data.

5. **Dynamic scaling**: The chart calculates the max value from the actual data points. It finds the highest value, adds 10% padding, and uses that as the max. So if your data is 0-200, the chart scales to 220. If it's 0-50, it scales to 55. Always fits.

6. **Path calculation**: The chart draws SVG paths. For each data point, it calculates the X position (spread evenly across the width) and Y position (based on the value and max value). Then it connects them with a polyline.

7. **Edge cases**: If there's only one data point, I duplicate it so the path works. If it's empty, I return early. If the array length is 1, I handle it specially in the calculations to avoid division by zero.

8. **Memoization**: All the expensive calculations (paths, max value, filtered assets) are wrapped in `useMemo`. They only recalculate when their dependencies change. So if you hover over the chart, it doesn't recalculate everything.

9. **Tooltip logic**: The tooltip shows on hover, or on the last data point that has price/date info. I check `index === dataLength - 1` and if that point has date/price, show it by default.

The annoying part was handling weird cases. What if there's only one data point? What if it's empty? I added checks so it doesn't crash. Also made the max value calculate itself - if data goes 0-200 it fits, if it's 0-50 it fits. No more guessing.

I used `useMemo` because recalculating all those chart paths every time would be slow. Now it only does it when the data actually changes, way faster.

### Daily Rates Card - What I Didn't Add

So the design had these currency cards (USD/EUR, Gold, etc) that were supposed to go in the curve section right after the hero. The component exists (MarketCards.tsx) and it's all coded up, but I didn't add it to the page.

The design showed 4 cards with some duplicates. I figured we'd probably only show 1-2 currency pairs to keep it clean and not repeat stuff. But honestly, I just didn't get around to adding it. It's the only thing from the design that's missing.

The component is ready to use - it has the USD/EUR card with a mini graph, shows price and change. Just need to uncomment it in page.tsx. I left it out because I wasn't sure if we wanted all 4 cards or just 1-2, and didn't want to make that decision without checking first.

## 🌐 Browser Compatibility

Tested and compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)


**Note**: This is a demonstration project. Some features are implemented with dummy data and placeholder functionality.

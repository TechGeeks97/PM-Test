# Color System Usage

## How to Change Colors

All colors are centralized in `src/constants/colors.ts`. To change the theme:

1. Open `src/constants/colors.ts`
2. Modify the color values in the `colors` object
3. The changes will automatically apply throughout the application

## Example Usage

```typescript
import { colors } from '@/constants/colors';

// Use in components
const primaryColor = colors.primary.main; // #DC2626
const backgroundColor = colors.background.red; // #DC2626
```

## Color Structure

- **Primary**: Main brand colors (red theme)
- **Secondary**: Supporting colors (grays, blacks)
- **Background**: All background colors
- **Text**: Text color variants
- **Accent**: Accent colors for highlights
- **Border**: Border colors
- **Status**: Status indicator colors (success, error, warning, info)


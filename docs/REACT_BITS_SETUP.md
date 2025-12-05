# React Bits Integration Guide

This guide details how we integrated animated components inspired by [React Bits](https://reactbits.dev/) into the portfolio. These components are powered by `framer-motion`.

## 1. Prerequisites

We use `framer-motion` for animations. Ensure it is installed:

```bash
npm install framer-motion
```

## 2. Components Created

We added two new components in `src/components/react-bits/`:

### `SplitText.jsx`
Splits text into words/letters and staggers their appearance.

**Usage:**
```jsx
import SplitText from "../../components/react-bits/SplitText";

<SplitText 
  text="YOUR TEXT HERE" 
  className="text-4xl font-bold" 
  delay={0.05} 
/>
```

### `GridBackground.jsx`
Adds a subtle, moving grid pattern behind content.

**Usage:**
```jsx
import GridBackground from "../components/react-bits/GridBackground";

<div className="relative overflow-hidden">
  <GridBackground />
  {/* Other content */}
</div>
```

## 3. Integration Details

### Hero Section (`Hero.jsx`)
We replaced the main static `<h1>` tag with the `<SplitText />` component to animate the main heading "HEY, I'M UDAY KUMAR N".

### Main Layout (`Portfolio.jsx`)
We added the `<GridBackground />` to the main Hero container.
- **Positioning**: The container uses `relative` and `overflow-hidden`.
- **Z-Index**: The background component is absolutely positioned with `z-0`, while the content is `z-10` or higher to ensure text remains selectable and clickable.

## 4. Customization

- **SplitText**: You can adjust the `delay` prop to change the speed of the staggered animation.
- **GridBackground**: You can modify the `backgroundImage` gradients in the component file to change the grid color or size.

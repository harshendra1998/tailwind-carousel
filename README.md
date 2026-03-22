# Tailwind Carousel

A lightweight, dependency-free carousel component for React and Next.js projects.

## Installation

```bash
npm install tailwind-carousel
```

## Features

- Lightweight (~6KB)
- No Tailwind dependency required
- Auto-play support
- Navigation arrows
- Dot indicators
- Mobile responsive
- Touch swipe support
- Customizable styling

## Usage

```jsx
import TailwindCarousel from 'tailwind-carousel';

function App() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <TailwindCarousel
      images={images}
      width="600px"
      height="400px"
      carusal_cover={true}
      arrowVisible={true}
      pageIndicator={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | **required** | Array of image URLs |
| `width` | `string` | `'100%'` | Carousel width (e.g., '600px', '80%') |
| `height` | `string` | `'300px'` | Carousel height (e.g., '400px') |
| `carusal_cover` | `boolean` | `true` | Image covers area (`cover`) or fits inside (`contain`) |
| `arrowVisible` | `boolean` | `false` | Show navigation arrows |
| `hideArrowForMobile` | `boolean` | `false` | Hide arrows on mobile screens |
| `pageIndicator` | `boolean` | `false` | Show dot indicators |
| `timespace` | `number` | - | Auto-play interval in milliseconds |
| `style` | `object` | - | Additional inline styles for container |

## Examples

### Basic Carousel
```jsx
<TailwindCarousel
  images={images}
  width="600px"
  height="300px"
/>
```

### With All Options
```jsx
<TailwindCarousel
  images={images}
  width="80%"
  height="400px"
  carusal_cover={true}
  arrowVisible={true}
  hideArrowForMobile={true}
  pageIndicator={true}
  timespace={2000}
/>
```

### Auto-play Only
```jsx
<TailwindCarousel
  images={images}
  width="600px"
  height="300px"
  arrowVisible={false}
  pageIndicator={false}
  timespace={1500}
/>
```

## Demo

https://codesandbox.io/s/tailwind-carousel-46713p

## Author

[@harshendra1998](https://www.github.com/harshendra1998)

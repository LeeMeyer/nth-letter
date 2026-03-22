# nth-letter

> **⚠️ Experimental:** This library is still in early development. Use with caution in production environments.

A JavaScript library that simulates the long-requested `::nth-letter()` CSS pseudo-element. It allows you to style individual letters within text elements using CSS selectors like `::nth-letter(2)`.

## Installation

```bash
npm install @leemeyer/nth-letter
```

## Usage

### In the Browser (UMD)

Include the script in your HTML:

```html
<script src="node_modules/@leemeyer/nth-letter/dist/nth-letter.umd.js"></script>
```

Then use `::nth-letter()` in your CSS:

```css
p::nth-letter(2) {
  color: red;
  font-weight: bold;
}

.demo::nth-letter(4) {
  text-decoration: underline;
}
```

### As an ES Module

```javascript
import nthLetter from '@leemeyer/nth-letter';
```

## How it Works

The library parses your CSS for `::nth-letter()` selectors, rewrites them to use shadow DOM and CSS parts, and applies the styles to individual characters using GSAP's SplitText.

## Browser Support

Works in modern browsers that support Shadow DOM and ES6.

## License

ISC
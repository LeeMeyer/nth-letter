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

## Background

This library is explained in depth in the CSS-Tricks article [_Let's Use the Nonexistent ::nth-letter Selector Now_](https://css-tricks.com/using-nonexistent-nth-letter-selector-now/).

## How it Works

The library parses your CSS for `::nth-letter()` selectors, rewrites them to use `:nth-child()` selectors, and splits the text of each matched element into individual `<span>` elements in the Light DOM. This means the characters are fully accessible, inspectable, and styleable with standard CSS — no Shadow DOM required.

## Browser Support

Works in all modern browsers that support ES6.

## License

ISC
import getCssData from 'get-css-data';
import { SplitText } from 'gsap/SplitText';

getCssData({
  onComplete(cssText, cssArray, nodeArray) {
    nodeArray.forEach(e => e.remove());
    const selectors = new Set();
    const nthArgs = new Set();

    // Remove CSS comments
    cssText = cssText.replace(/\/\*[\s\S]*?\*\//g, '');

    // Replace ::nth-letter with :nth-child in CSS
    let rewrittenCss = cssText.replace(
      /([^,{{\r\n]+?)::?nth-letter[ \t]*\(([^\n)]*)\)/gi,
      (full, selector, args) => {
        selector = selector.trim();
        selectors.add(selector);
        nthArgs.add(args);
        // Use :nth-child instead of ::nth-letter
        return `${selector} .char:nth-child(${args})`;
      }
    );

    document.head.insertAdjacentHTML("beforeend", `<style>${rewrittenCss}</style>`);

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (el.hasAttribute('data-nth-letter')) return;
        el.setAttribute('data-nth-letter', 'attached');
        new SplitText(el, { type: 'chars', charsClass: 'char' });
      });
    });
  }
});
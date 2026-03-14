 import getCssData from 'get-css-data';
 import { SplitText } from 'gsap/SplitText';

  getCssData({
    onComplete(cssText, cssArray, nodeArray) {
      nodeArray.forEach(e => e.remove());
      const selectors = new Set();
      const nthArgs = new Set();
      
      // Remove CSS comments
      cssText = cssText.replace(/\/\*[\s\S]*?\*\//g, '');
      
      let rewrittenCss = cssText.replace(
        /([^,{\r\n]+?)::?nth-letter[ \t]*\(([^\n)]*)\)/gi,
        (full, selector, args) => {
          selector = selector.trim();
          selectors.add(selector);
          nthArgs.add(args);

          return `${selector}::part(nth-child\\(${CSS.escape(args)}\\))`;
        }
      );
      
      document.head.insertAdjacentHTML("beforeend", `<style>${rewrittenCss}</style>`);
      
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          if (el.shadowRoot || el.hasAttribute('data-nth-letter')) return;
          
          const shadow = el.attachShadow({ mode: "closed" });
          el.setAttribute('data-nth-letter', 'attached');
          const wrapper = document.createElement("span");
          wrapper.innerHTML = el.innerHTML;
          shadow.appendChild(wrapper);

          const split = new SplitText(wrapper, { type: "chars", charsClass: "char" });
          
          nthArgs.forEach((arg, i) => {
            let chars = wrapper.querySelectorAll(`.char:nth-child(${arg})`);
            chars.forEach(c =>  c.part = `nth-child(${arg})`);
          });
        });
      });
    }
  });
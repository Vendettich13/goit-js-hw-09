function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u={form:document.querySelector(".form"),input:document.querySelectorAll("input")};function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;let i={position:e,delay:t};setTimeout((()=>{r?n(i):o(i)}),t)}))}u.form.addEventListener("submit",(function(t){t.preventDefault();let n=Number(u.input[0].value),o=Number(u.input[1].value),r=Number(u.input[2].value);for(let t=1;t<=r;t+=1){l(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o}}));
//# sourceMappingURL=03-promises.29c23725.js.map

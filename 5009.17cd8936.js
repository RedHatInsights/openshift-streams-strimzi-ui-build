"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5009],{75009:(e,r,t)=>{t.r(r),t.d(r,{sentenceCase:()=>u,sentenceCaseTransform:()=>s});var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},n.apply(this,arguments)};Object.create;Object.create;function a(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function c(e,r,t){return r instanceof RegExp?e.replace(r,t):r.reduce((function(e,r){return e.replace(r,t)}),e)}function s(e,r){var t=e.toLowerCase();return 0===r?function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(t):t}function u(e,r){return void 0===r&&(r={}),function(e,r){void 0===r&&(r={});for(var t=r.splitRegexp,n=void 0===t?i:t,s=r.stripRegexp,u=void 0===s?o:s,f=r.transform,p=void 0===f?a:f,l=r.delimiter,v=void 0===l?" ":l,d=c(c(e,n,"$1\0$2"),u,"\0"),h=0,g=d.length;"\0"===d.charAt(h);)h++;for(;"\0"===d.charAt(g-1);)g--;return d.slice(h,g).split("\0").map(p).join(v)}(e,n({delimiter:" ",transform:s},r))}}}]);
//# sourceMappingURL=5009.17cd8936.js.map
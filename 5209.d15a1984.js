(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5209],{95209:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{I18nContext:()=>P,I18nextProvider:()=>ie,Trans:()=>_,Translation:()=>oe,composeInitialProps:()=>D,date:()=>le,getDefaults:()=>S,getI18n:()=>N,getInitialProps:()=>R,initReactI18next:()=>I,number:()=>pe,plural:()=>ye,select:()=>de,selectOrdinal:()=>ge,setDefaults:()=>E,setI18n:()=>k,time:()=>fe,useSSR:()=>ae,useTranslation:()=>Q,withSSR:()=>ue,withTranslation:()=>te});var a=t(75418),c=t.n(a),s=t(71739),u=t.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(u()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,y=Object.create(null);function g(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(g,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var m={parse:function(e,n){n||(n={}),n.components||(n.components=y);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),y=s+c.length,g=e.charAt(y);if(p){var m=f(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=f(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!g||"<"===g||t.children.push({type:"text",content:e.slice(y,e.indexOf("<",y))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var h=e.indexOf("<",y),b=e.slice(y,-1===h?void 0:h);d.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+g("",n)}),"")}};const h=m;function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j,w={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},P=c().createContext();function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w=O(O({},w),e)}function S(){return w}var x=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t,r;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&b(n.prototype,t),r&&b(n,r),e}();function k(e){j=e}function N(){return j}var I={type:"3rdParty",init:function(e){E(e.options.react),k(e)}};function D(e){return function(n){return new Promise((function(t){var r=R();e.getInitialProps?e.getInitialProps(n).then((function(e){t(O(O({},e),r))})):t(r)}))}}function R(){var e=N(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function C(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var A={};function T(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&A[n[0]]||("string"==typeof n[0]&&(A[n[0]]=new Date),C.apply(void 0,n))}function z(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function L(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return T("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function B(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var U=["format"],V=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function H(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function M(e){return Array.isArray(e)?e:[e]}function $(e,n){if(!e)return"";var t="",i=M(e),a=n.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"==typeof e)t+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=$(l,n);t+="<".concat(i,">").concat(f,"</").concat(i,">")}else t+="<".concat(i,"></").concat(i,">")}else if(null===e)C("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o(e)){var p=e.format,d=r(e,U),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];t+="{{".concat(g,"}}")}else C("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else C("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function Y(e,n,t,r,i){if(""===n)return[];var a=r.transKeepBasicHtmlNodesFor||[],s=n&&new RegExp(a.join("|")).test(n);if(!e&&!s)return[n];var u={};!function e(n){M(n).forEach((function(n){"string"!=typeof n&&(F(n)?e(H(n)):"object"!==o(n)||c().isValidElement(n)||Object.assign(u,n))}))}(e);var l=h.parse("<0>".concat(n,"</0>")),f=W(W({},u),i);function p(e,n,t){var r=H(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,n,t,r,o){e.dummy&&(e.children=n),t.push(c().cloneElement(e,W(W({},e.props),{},{key:r}),o?void 0:n))}function y(n,i,u){var l=M(n);return M(i).reduce((function(n,i,g){var m,h,b,v=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){var O=l[parseInt(i.name,10)];!O&&1===u.length&&u[0][i.name]&&(O=u[0][i.name]),O||(O={});var j=0!==Object.keys(i.attrs).length?(m={props:i.attrs},(b=W({},h=O)).props=Object.assign(m.props,h.props),b):O,w=c().isValidElement(j),P=w&&F(i,!0)&&!i.voidElement,E=s&&"object"===o(j)&&j.dummy&&!w,S="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof j){var x=t.services.interpolator.interpolate(j,f,t.language);n.push(x)}else if(F(j)||P){d(j,p(j,i,u),n,g)}else if(E){var k=y(l,i.children,u);n.push(c().cloneElement(j,W(W({},j.props),{},{key:g}),k))}else if(Number.isNaN(parseFloat(i.name))){if(S)d(j,p(j,i,u),n,g,i.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(i.name)>-1)if(i.voidElement)n.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)}));else{var N=y(l,i.children,u);n.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)},N))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var I=y(l,i.children,u);n.push("<".concat(i.name,">").concat(I,"</").concat(i.name,">"))}}else if("object"!==o(j)||w)1===i.children.length&&v?n.push(c().cloneElement(j,W(W({},j.props),{},{key:g}),v)):n.push(c().cloneElement(j,W(W({},j.props),{},{key:g})));else{var D=i.children[0]?v:null;D&&n.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,C=t.services.interpolator.interpolate(i.content,f,t.language);R?n.push(c().createElement(R,{key:"".concat(i.name,"-").concat(g)},C)):n.push(C)}return n}),[])}return H(y([{dummy:!0,children:e||[]}],l,M(e||[]))[0])}function _(e){var n=e.children,t=e.count,o=e.parent,i=e.i18nKey,s=e.tOptions,u=void 0===s?{}:s,l=e.values,f=e.defaults,p=e.components,d=e.ns,y=e.i18n,g=e.t,m=r(e,V),h=(0,a.useContext)(P)||{},b=h.i18n,v=h.defaultNS,O=y||b||N();if(!O)return T("You will need to pass in an i18next instance by using i18nextReactModule"),n;var j=g||O.t.bind(O)||function(e){return e},w=W(W({},S()),O.options&&O.options.react),E=d||j.ns||v||O.options&&O.options.defaultNS;E="string"==typeof E?[E]:E||["translation"];var x=f||$(n,w)||w.transEmptyNodeValue||i,k=w.hashTransKey,I=i||(k?k(x):x),D=l?u.interpolation:{interpolation:W(W({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},R=W(W(W(W({},u),{},{count:t},l),D),{},{defaultValue:x,ns:E}),C=Y(p||n,I?j(I,R):x,O,w,R),A=void 0!==o?o:w.defaultTransParent;return A?c().createElement(A,m,C):C}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(P)||{},o=r.i18n,i=r.defaultNS,c=t||o||N();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new x),!c){T("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=J(J(J({},S()),c.options.react),n),f=l.useSuspense,p=l.keyPrefix,d=e||i||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var y=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return L(e,c,l)}));function g(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var m=(0,a.useState)(g),h=q(m,2),b=h[0],v=h[1],O=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){O.current&&v(g)}return O.current=!0,y||f||z(c,d,(function(){O.current&&v(g)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){O.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,d.join()]);var j=(0,a.useRef)(!0);(0,a.useEffect)((function(){O.current&&!j.current&&v(g),j.current=!1}),[c]);var w=[b,c,y];if(w.t=b,w.i18n=c,w.ready=y,y)return w;if(!y&&!f)return w;throw new Promise((function(e){z(c,d,(function(){e()}))}))}var X=["forwardedRef"];function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function te(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function o(o){var i=o.forwardedRef,a=r(o,X),s=q(Q(e,a),3),u=s[0],l=s[1],f=s[2],p=ne(ne({},a),{},{t:u,i18n:l,tReady:f});return n.withRef&&i?p.ref=i:!n.withRef&&i&&(p.forwardedRef=i),c().createElement(t,p)}o.displayName="withI18nextTranslation(".concat(B(t),")"),o.WrappedComponent=t;return n.withRef?c().forwardRef((function(e,n){return c().createElement(o,Object.assign({},e,{forwardedRef:n}))})):o}}var re=["ns","children"];function oe(e){var n=e.ns,t=e.children,o=q(Q(n,r(e,re)),3),i=o[0],a=o[1],c=o[2];return t(i,{i18n:a,lng:a.language},c)}function ie(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,a.createElement)(P.Provider,{value:o},r)}function ae(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,a.useContext)(P)||{},i=o.i18n,c=r||i||N();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),n&&!c.initializedLanguageOnce&&(c.changeLanguage(n),c.initializedLanguageOnce=!0))}var ce=["initialI18nStore","initialLanguage"];function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(){return function(e){function n(n){var t=n.initialI18nStore,o=n.initialLanguage,a=r(n,ce);return ae(t,o),c().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?se(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},a))}return n.getInitialProps=D(e),n.displayName="withI18nextSSR(".concat(B(e),")"),n.WrappedComponent=e,n}}var le=function(){return""},fe=function(){return""},pe=function(){return""},de=function(){return""},ye=function(){return""},ge=function(){return""}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=5209.d15a1984.js.map
(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4455],{91165:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>m,I18nextProvider:()=>Q,Trans:()=>H,Translation:()=>G,composeInitialProps:()=>x,date:()=>re,getDefaults:()=>b,getI18n:()=>w,getInitialProps:()=>E,initReactI18next:()=>P,number:()=>ae,plural:()=>ce,select:()=>oe,selectOrdinal:()=>se,setDefaults:()=>y,setI18n:()=>j,time:()=>ie,useSSR:()=>X,useTranslation:()=>M,withSSR:()=>te,withTranslation:()=>_});var r=t(45987),i=t(71002),a=t(4942),o=t(93264),c=t(81613),s=t(15671),u=t(43144),l=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,p={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},f=function(e){return p[e]};function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h,v={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(l,f)}},m=(0,o.createContext)();function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v=g(g({},v),e)}function b(){return v}var O=function(){function e(){(0,s.Z)(this,e),this.usedNamespaces={}}return(0,u.Z)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function j(e){h=e}function w(){return h}var P={type:"3rdParty",init:function(e){y(e.options.react),j(e)}};function x(e){return function(n){return new Promise((function(t){var r=E();e.getInitialProps?e.getInitialProps(n).then((function(e){t(g(g({},e),r))})):t(r)}))}}function E(){var e=w(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function k(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var S={};function N(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&S[n[0]]||("string"==typeof n[0]&&(S[n[0]]=new Date),k.apply(void 0,n))}function I(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function Z(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var D=["format"],C=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function L(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function z(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function A(e){return Array.isArray(e)?e:[e]}function B(e,n){if(!e)return"";var t="",a=A(e),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return a.forEach((function(e,a){if("string"==typeof e)t+="".concat(e);else if((0,o.isValidElement)(e)){var s=Object.keys(e.props).length,u=c.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(a,"></").concat(a,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=B(l,n);t+="<".concat(a,">").concat(p,"</").concat(a,">")}else t+="<".concat(a,"></").concat(a,">")}else if(null===e)k("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var f=e.format,d=(0,r.Z)(e,D),g=Object.keys(d);if(1===g.length){var h=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(h,"}}")}else k("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else k("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function U(e,n,t,r,a,s){if(""===n)return[];var u=r.transKeepBasicHtmlNodesFor||[],l=n&&new RegExp(u.join("|")).test(n);if(!e&&!l)return[n];var p={};!function e(n){A(n).forEach((function(n){"string"!=typeof n&&(L(n)?e(z(n)):"object"!==(0,i.Z)(n)||(0,o.isValidElement)(n)||Object.assign(p,n))}))}(e);var f=c.Z.parse("<0>".concat(n,"</0>")),d=T(T({},p),a);function g(e,n,t){var r=z(e),i=v(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,o.isValidElement)(e)}))}(r)&&0===i.length?r:i}function h(e,n,t,r,i){e.dummy&&(e.children=n),t.push((0,o.cloneElement)(e,T(T({},e.props),{},{key:r}),i?void 0:n))}function v(n,a,c){var p=A(n);return A(a).reduce((function(n,a,f){var m,y,b,O=a.children&&a.children[0]&&a.children[0].content&&t.services.interpolator.interpolate(a.children[0].content,d,t.language);if("tag"===a.type){var j=p[parseInt(a.name,10)];!j&&1===c.length&&c[0][a.name]&&(j=c[0][a.name]),j||(j={});var w=0!==Object.keys(a.attrs).length?(m={props:a.attrs},(b=T({},y=j)).props=Object.assign(m.props,y.props),b):j,P=(0,o.isValidElement)(w),x=P&&L(a,!0)&&!a.voidElement,E=l&&"object"===(0,i.Z)(w)&&w.dummy&&!P,k="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,a.name);if("string"==typeof w){var S=t.services.interpolator.interpolate(w,d,t.language);n.push(S)}else if(L(w)||x){h(w,g(w,a,c),n,f)}else if(E){var N=v(p,a.children,c);n.push((0,o.cloneElement)(w,T(T({},w.props),{},{key:f}),N))}else if(Number.isNaN(parseFloat(a.name))){if(k)h(w,g(w,a,c),n,f,a.voidElement);else if(r.transSupportBasicHtmlNodes&&u.indexOf(a.name)>-1)if(a.voidElement)n.push((0,o.createElement)(a.name,{key:"".concat(a.name,"-").concat(f)}));else{var I=v(p,a.children,c);n.push((0,o.createElement)(a.name,{key:"".concat(a.name,"-").concat(f)},I))}else if(a.voidElement)n.push("<".concat(a.name," />"));else{var Z=v(p,a.children,c);n.push("<".concat(a.name,">").concat(Z,"</").concat(a.name,">"))}}else if("object"!==(0,i.Z)(w)||P)1===a.children.length&&O?n.push((0,o.cloneElement)(w,T(T({},w.props),{},{key:f}),O)):n.push((0,o.cloneElement)(w,T(T({},w.props),{},{key:f})));else{var D=a.children[0]?O:null;D&&n.push(D)}}else if("text"===a.type){var C=r.transWrapTextNodes,R=s?r.unescape(t.services.interpolator.interpolate(a.content,d,t.language)):t.services.interpolator.interpolate(a.content,d,t.language);C?n.push((0,o.createElement)(C,{key:"".concat(a.name,"-").concat(f)},R)):n.push(R)}return n}),[])}return z(v([{dummy:!0,children:e||[]}],f,A(e||[]))[0])}function H(e){var n=e.children,t=e.count,i=e.parent,a=e.i18nKey,c=e.context,s=e.tOptions,u=void 0===s?{}:s,l=e.values,p=e.defaults,f=e.components,d=e.ns,g=e.i18n,h=e.t,v=e.shouldUnescape,y=(0,r.Z)(e,C),O=(0,o.useContext)(m)||{},j=O.i18n,P=O.defaultNS,x=g||j||w();if(!x)return N("You will need to pass in an i18next instance by using i18nextReactModule"),n;var E=h||x.t.bind(x)||function(e){return e};c&&(u.context=c);var k=T(T({},b()),x.options&&x.options.react),S=d||E.ns||P||x.options&&x.options.defaultNS;S="string"==typeof S?[S]:S||["translation"];var I=p||B(n,k)||k.transEmptyNodeValue||a,Z=k.hashTransKey,D=a||(Z?Z(I):I),R=l?u.interpolation:{interpolation:T(T({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},L=T(T(T(T({},u),{},{count:t},l),R),{},{defaultValue:I,ns:S}),z=U(f||n,D?E(D,L):I,x,k,L,v),A=void 0!==i?i:k.defaultTransParent;return A?(0,o.createElement)(A,y,z):z}var K=t(29439);function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W=function(e,n){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function M(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,o.useContext)(m)||{},i=r.i18n,a=r.defaultNS,c=t||i||w();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new O),!c){N("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&N("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=F(F(F({},b()),c.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||a||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!o(r,e)||i&&!o(a,e)))}(e,n,t):(N("i18n.languages were undefined or empty",n.languages),!0)}(e,c,l)}));function h(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var v=(0,o.useState)(h),y=(0,K.Z)(v,2),j=y[0],P=y[1],x=d.join(),E=W(x),k=(0,o.useRef)(!0);(0,o.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){k.current&&P(h)}return k.current=!0,g||p||I(c,d,(function(){k.current&&P(h)})),g&&E&&E!==x&&k.current&&P(h),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){k.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,x]);var S=(0,o.useRef)(!0);(0,o.useEffect)((function(){k.current&&!S.current&&P(h),S.current=!1}),[c]);var Z=[j,c,g];if(Z.t=j,Z.i18n=c,Z.ready=g,g)return Z;if(!g&&!p)return Z;throw new Promise((function(e){I(c,d,(function(){e()}))}))}var $=["forwardedRef"];function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function i(i){var a=i.forwardedRef,c=(0,r.Z)(i,$),s=M(e,Y(Y({},c),{},{keyPrefix:n.keyPrefix})),u=(0,K.Z)(s,3),l=u[0],p=u[1],f=u[2],d=Y(Y({},c),{},{t:l,i18n:p,tReady:f});return n.withRef&&a?d.ref=a:!n.withRef&&a&&(d.forwardedRef=a),(0,o.createElement)(t,d)}i.displayName="withI18nextTranslation(".concat(Z(t),")"),i.WrappedComponent=t;return n.withRef?(0,o.forwardRef)((function(e,n){return(0,o.createElement)(i,Object.assign({},e,{forwardedRef:n}))})):i}}var J=["ns","children"];function G(e){var n=e.ns,t=e.children,i=M(n,(0,r.Z)(e,J)),a=(0,K.Z)(i,3),o=a[0],c=a[1],s=a[2];return t(o,{i18n:c,lng:c.language},s)}function Q(e){var n=e.i18n,t=e.defaultNS,r=e.children,i=(0,o.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,o.createElement)(m.Provider,{value:i},r)}function X(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,o.useContext)(m)||{}).i18n,i=t||r||w();i.options&&i.options.isClone||(e&&!i.initializedStoreOnce&&(i.services.resourceStore.data=e,i.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),i.options.ns),i.initializedStoreOnce=!0,i.isInitialized=!0),n&&!i.initializedLanguageOnce&&(i.changeLanguage(n),i.initializedLanguageOnce=!0))}var ee=["initialI18nStore","initialLanguage"];function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(){return function(e){function n(n){var t=n.initialI18nStore,i=n.initialLanguage,c=(0,r.Z)(n,ee);return X(t,i),(0,o.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c))}return n.getInitialProps=x(e),n.displayName="withI18nextSSR(".concat(Z(e),")"),n.WrappedComponent=e,n}}var re=function(){return""},ie=function(){return""},ae=function(){return""},oe=function(){return""},ce=function(){return""},se=function(){return""}},81613:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var r=t(71739),i=t.n(r),a=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function o(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(i()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(a),c=null;null!==(c=o.exec(e));)if(c[0].trim())if(c[1]){var s=c[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),n.attrs[u[0]]=u[1],o.lastIndex--}else c[2]&&(n.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return n}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,u=Object.create(null);function l(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(l,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var p={parse:function(e,n){n||(n={}),n.components||(n.components=u);var t,r=[],i=[],a=-1,l=!1;if(0!==e.indexOf("<")){var p=e.indexOf("<");r.push({type:"text",content:-1===p?e:e.substring(0,p)})}return e.replace(c,(function(c,u){if(l){if(c!=="</"+t.name+">")return;l=!1}var p,f="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=u+c.length,h=e.charAt(g);if(d){var v=o(c);return a<0?(r.push(v),r):((p=i[a]).children.push(v),r)}if(f&&(a++,"tag"===(t=o(c)).type&&n.components[t.name]&&(t.type="component",l=!0),t.voidElement||l||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===a&&r.push(t),(p=i[a-1])&&p.children.push(t),i[a]=t),(!f||t.voidElement)&&(a>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(a--,t=-1===a?r:i[a]),!l&&"<"!==h&&h)){p=-1===a?r:i[a].children;var m=e.indexOf("<",g),y=e.slice(g,-1===m?void 0:m);s.test(y)&&(y=" "),(m>-1&&a+p.length>=0||" "!==y)&&p.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+l("",n)}),"")}};const f=p},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},45987:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(63366);function i(e,n){if(null==e)return{};var t,i,a=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},63366:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,{Z:()=>r})},29439:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(83878);var i=t(88192),a=t(25267);function o(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a,o,c=[],s=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw i}}return c}}(e,n)||(0,i.Z)(e,n)||(0,a.Z)()}}}]);
//# sourceMappingURL=4455.9e482660.js.map
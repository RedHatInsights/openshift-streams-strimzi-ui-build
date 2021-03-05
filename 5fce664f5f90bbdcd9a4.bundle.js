/*! For license information please see 5fce664f5f90bbdcd9a4.bundle.js.LICENSE.txt */
(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[977,489],{4786:(t,n,e)=>{"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,{Z:()=>r})},83:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(2489);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,r.Z)(t,n)}},6843:(t,n,e)=>{"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,{Z:()=>r})},2489:(t,n,e)=>{"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,{Z:()=>r})},71:(t,n,e)=>{"use strict";e.d(n,{lX:()=>P,q_:()=>S,ob:()=>d,PP:()=>$,Ep:()=>h,Hp:()=>v});var r=e(4786);function o(t){return"/"===t.charAt(0)}function i(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}function a(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const c=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"==typeof n||"object"==typeof e){var r=a(n),o=a(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1};var u=e(2177);function s(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function l(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function p(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function d(t,n,e,a){var c;"string"==typeof t?(c=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(c=(0,r.Z)({},t)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==n&&void 0===c.state&&(c.state=n));try{c.pathname=decodeURI(c.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(c.key=e),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],a=n&&n.split("/")||[],c=t&&o(t),u=n&&o(n),s=c||u;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var f=a[a.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,p=a.length;p>=0;p--){var h=a[p];"."===h?i(a,p):".."===h?(i(a,p),l++):l&&(i(a,p),l--)}if(!s)for(;l--;l)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function v(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&c(t.state,n.state)}function m(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var y=!("undefined"==typeof window||!window.document||!window.document.createElement);function g(t,n){n(window.confirm(t))}var w="popstate",b="hashchange";function x(){try{return window.history.state||{}}catch(t){return{}}}function P(t){void 0===t&&(t={}),y||(0,u.Z)(!1);var n,e=window.history,o=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=t,c=a.forceRefresh,f=void 0!==c&&c,v=a.getUserConfirmation,P=void 0===v?g:v,O=a.keyLength,E=void 0===O?6:O,C=t.basename?p(s(t.basename)):"";function k(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return C&&(i=l(i,C)),d(i,r,e)}function T(){return Math.random().toString(36).substr(2,E)}var S=m();function A(t){(0,r.Z)(H,t),H.length=e.length,S.notifyListeners(H.location,H.action)}function $(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||Z(k(t.state))}function _(){Z(k(x()))}var R=!1;function Z(t){R?(R=!1,A()):S.confirmTransitionTo(t,"POP",P,(function(n){n?A({action:"POP",location:t}):function(t){var n=H.location,e=U.indexOf(n.key);-1===e&&(e=0);var r=U.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(R=!0,j(o))}(t)}))}var L=k(x()),U=[L.key];function M(t){return C+h(t)}function j(t){e.go(t)}var F=0;function I(t){1===(F+=t)&&1===t?(window.addEventListener(w,$),i&&window.addEventListener(b,_)):0===F&&(window.removeEventListener(w,$),i&&window.removeEventListener(b,_))}var B=!1,H={length:e.length,action:"POP",location:L,createHref:M,push:function(t,n){var r="PUSH",i=d(t,n,T(),H.location);S.confirmTransitionTo(i,r,P,(function(t){if(t){var n=M(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,n),f)window.location.href=n;else{var u=U.indexOf(H.location.key),s=U.slice(0,u+1);s.push(i.key),U=s,A({action:r,location:i})}else window.location.href=n}}))},replace:function(t,n){var r="REPLACE",i=d(t,n,T(),H.location);S.confirmTransitionTo(i,r,P,(function(t){if(t){var n=M(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,n),f)window.location.replace(n);else{var u=U.indexOf(H.location.key);-1!==u&&(U[u]=i.key),A({action:r,location:i})}else window.location.replace(n)}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(t){void 0===t&&(t=!1);var n=S.setPrompt(t);return B||(I(1),B=!0),function(){return B&&(B=!1,I(-1)),n()}},listen:function(t){var n=S.appendListener(t);return I(1),function(){I(-1),n()}}};return H}var O="hashchange",E={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+f(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:f,decodePath:s},slash:{encodePath:s,decodePath:s}};function C(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function k(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function T(t){window.location.replace(C(window.location.href)+"#"+t)}function S(t){void 0===t&&(t={}),y||(0,u.Z)(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),o=e.getUserConfirmation,i=void 0===o?g:o,a=e.hashType,c=void 0===a?"slash":a,f=t.basename?p(s(t.basename)):"",v=E[c],w=v.encodePath,b=v.decodePath;function x(){var t=b(k());return f&&(t=l(t,f)),d(t)}var P=m();function S(t){(0,r.Z)(B,t),B.length=n.length,P.notifyListeners(B.location,B.action)}var A=!1,$=null;function _(){var t,n,e=k(),r=w(e);if(e!==r)T(r);else{var o=x(),a=B.location;if(!A&&(n=o,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if($===h(o))return;$=null,function(t){if(A)A=!1,S();else{P.confirmTransitionTo(t,"POP",i,(function(n){n?S({action:"POP",location:t}):function(t){var n=B.location,e=U.lastIndexOf(h(n));-1===e&&(e=0);var r=U.lastIndexOf(h(t));-1===r&&(r=0);var o=e-r;o&&(A=!0,M(o))}(t)}))}}(o)}}var R=k(),Z=w(R);R!==Z&&T(Z);var L=x(),U=[h(L)];function M(t){n.go(t)}var j=0;function F(t){1===(j+=t)&&1===t?window.addEventListener(O,_):0===j&&window.removeEventListener(O,_)}var I=!1,B={length:n.length,action:"POP",location:L,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=C(window.location.href)),e+"#"+w(f+h(t))},push:function(t,n){var e="PUSH",r=d(t,void 0,void 0,B.location);P.confirmTransitionTo(r,e,i,(function(t){if(t){var n=h(r),o=w(f+n);if(k()!==o){$=n,function(t){window.location.hash=t}(o);var i=U.lastIndexOf(h(B.location)),a=U.slice(0,i+1);a.push(n),U=a,S({action:e,location:r})}else S()}}))},replace:function(t,n){var e="REPLACE",r=d(t,void 0,void 0,B.location);P.confirmTransitionTo(r,e,i,(function(t){if(t){var n=h(r),o=w(f+n);k()!==o&&($=n,T(o));var i=U.indexOf(h(B.location));-1!==i&&(U[i]=n),S({action:e,location:r})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(t){void 0===t&&(t=!1);var n=P.setPrompt(t);return I||(F(1),I=!0),function(){return I&&(I=!1,F(-1)),n()}},listen:function(t){var n=P.appendListener(t);return F(1),function(){F(-1),n()}}};return B}function A(t,n,e){return Math.min(Math.max(t,n),e)}function $(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,o=n.initialEntries,i=void 0===o?["/"]:o,a=n.initialIndex,c=void 0===a?0:a,u=n.keyLength,s=void 0===u?6:u,f=m();function l(t){(0,r.Z)(b,t),b.length=b.entries.length,f.notifyListeners(b.location,b.action)}function p(){return Math.random().toString(36).substr(2,s)}var v=A(c,0,i.length-1),y=i.map((function(t){return d(t,void 0,"string"==typeof t?p():t.key||p())})),g=h;function w(t){var n=A(b.index+t,0,b.entries.length-1),r=b.entries[n];f.confirmTransitionTo(r,"POP",e,(function(t){t?l({action:"POP",location:r,index:n}):l()}))}var b={length:y.length,action:"POP",location:y[v],index:v,entries:y,createHref:g,push:function(t,n){var r="PUSH",o=d(t,n,p(),b.location);f.confirmTransitionTo(o,r,e,(function(t){if(t){var n=b.index+1,e=b.entries.slice(0);e.length>n?e.splice(n,e.length-n,o):e.push(o),l({action:r,location:o,index:n,entries:e})}}))},replace:function(t,n){var r="REPLACE",o=d(t,n,p(),b.location);f.confirmTransitionTo(o,r,e,(function(t){t&&(b.entries[b.index]=o,l({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(t){var n=b.index+t;return n>=0&&n<b.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return b}},8679:(t,n,e)=>{"use strict";var r=e(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(n,e,r){if("string"!=typeof e){if(d){var o=h(e);o&&o!==d&&t(n,o,r)}var a=f(e);l&&(a=a.concat(l(e)));for(var c=u(n),v=u(e),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(e,y);try{s(n,y,g)}catch(t){}}}}return n}},5826:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},2703:(t,n,e)=>{"use strict";var r=e(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},5697:(t,n,e)=>{t.exports=e(2703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9921:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var n=t.$$typeof;switch(n){case r:switch(t=t.type){case f:case l:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case s:case p:case m:case v:case u:return t;default:return n}}case o:return n}}}function P(t){return x(t)===l}n.AsyncMode=f,n.ConcurrentMode=l,n.ContextConsumer=s,n.ContextProvider=u,n.Element=r,n.ForwardRef=p,n.Fragment=i,n.Lazy=m,n.Memo=v,n.Portal=o,n.Profiler=c,n.StrictMode=a,n.Suspense=h,n.isAsyncMode=function(t){return P(t)||x(t)===f},n.isConcurrentMode=P,n.isContextConsumer=function(t){return x(t)===s},n.isContextProvider=function(t){return x(t)===u},n.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},n.isForwardRef=function(t){return x(t)===p},n.isFragment=function(t){return x(t)===i},n.isLazy=function(t){return x(t)===m},n.isMemo=function(t){return x(t)===v},n.isPortal=function(t){return x(t)===o},n.isProfiler=function(t){return x(t)===c},n.isStrictMode=function(t){return x(t)===a},n.isSuspense=function(t){return x(t)===h},n.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===c||t===a||t===h||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===u||t.$$typeof===s||t.$$typeof===p||t.$$typeof===g||t.$$typeof===w||t.$$typeof===b||t.$$typeof===y)},n.typeOf=x},9864:(t,n,e)=>{"use strict";t.exports=e(9921)},5977:(t,n,e)=>{"use strict";e.d(n,{VA:()=>O,NL:()=>C,l_:()=>A,AW:()=>Z,F0:()=>P,gx:()=>I,rs:()=>B,s6:()=>x,Gn:()=>S,LX:()=>R,k6:()=>W,TH:()=>D,UO:()=>V,$B:()=>q,EN:()=>H});var r=e(83),o=e(7522),i=e.n(o),a=e(5697),c=e.n(a),u=e(71),s=1073741823,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function l(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}const p=i().createContext||function(t,n){var e,i,a,u="__create-react-context-"+((f[a="__global_unique_id__"]=(f[a]||0)+1)+"__"),p=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=l(n.props.value),n}(0,r.Z)(e,t);var o=e.prototype;return o.getChildContext=function(){var t;return(t={})[u]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):s,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},o.render=function(){return this.props.children},e}(o.Component);p.childContextTypes=((e={})[u]=c().object.isRequired,e);var h=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}(0,r.Z)(e,n);var o=e.prototype;return o.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?s:n},o.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?s:t},o.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},o.getValue=function(){return this.context[u]?this.context[u].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(o.Component);return h.contextTypes=((i={})[u]=c().object,i),{Provider:p,Consumer:h}};var h=e(2177),d=e(4786),v=e(9658),m=e.n(v),y=(e(9864),e(6843)),g=e(8679),w=e.n(g),b=function(t){var n=p();return n.displayName="Router-History",n}(),x=function(t){var n=p();return n.displayName="Router",n}(),P=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return i().createElement(x.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i().Component),O=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,u.PP)(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(P,{history:this.history,children:this.props.children})},n}(i().Component),E=function(t){function n(){return t.apply(this,arguments)||this}(0,r.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(i().Component);function C(t){var n=t.message,e=t.when,r=void 0===e||e;return i().createElement(x.Consumer,null,(function(t){if(t||(0,h.Z)(!1),!r||t.staticContext)return null;var e=t.history.block;return i().createElement(E,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var k={},T=0;function S(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(k[t])return k[t];var n=m().compile(t);return T<1e4&&(k[t]=n,T++),n}(t)(n,{pretty:!0})}function A(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(x.Consumer,null,(function(t){t||(0,h.Z)(!1);var r=t.history,a=t.staticContext,c=o?r.push:r.replace,s=(0,u.ob)(n?"string"==typeof e?S(e,n.params):(0,d.Z)({},e,{pathname:S(e.pathname,n.params)}):e);return a?(c(s),null):i().createElement(E,{onMount:function(){c(s)},onUpdate:function(t,n){var e=(0,u.ob)(n.to);(0,u.Hp)(e,(0,d.Z)({},s,{key:e.key}))||c(s)},to:e})}))}var $={},_=0;function R(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=$[e]||($[e]={});if(r[t])return r[t];var o=[],i={regexp:m()(t,o,n),keys:o};return _<1e4&&(r[t]=i,_++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return i&&!p?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var Z=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(x.Consumer,null,(function(n){n||(0,h.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?R(e.pathname,t.props):n.match,o=(0,d.Z)({},n,{location:e,match:r}),a=t.props,c=a.children,u=a.component,s=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i().createElement(x.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?i().createElement(u,o):s?s(o):null:"function"==typeof c?c(o):null)}))},n}(i().Component);function L(t){return"/"===t.charAt(0)?t:"/"+t}function U(t,n){if(!t)return n;var e=L(t);return 0!==n.pathname.indexOf(e)?n:(0,d.Z)({},n,{pathname:n.pathname.substr(e.length)})}function M(t){return"string"==typeof t?t:(0,u.Ep)(t)}function j(t){return function(){(0,h.Z)(!1)}}function F(){}var I=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return F},n.handleBlock=function(){return F},n}(0,r.Z)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=n,a.location=function(t,n){return t?(0,d.Z)({},n,{pathname:L(t)+n.pathname}):n}(o,(0,u.ob)(t)),a.url=M(a.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,a=t.location,c=void 0===a?"/":a,s=(0,y.Z)(t,["basename","context","location"]),f={createHref:function(t){return L(e+M(t))},action:"POP",location:U(e,(0,u.ob)(c)),push:this.handlePush,replace:this.handleReplace,go:j(),goBack:j(),goForward:j(),listen:this.handleListen,block:this.handleBlock};return i().createElement(P,(0,d.Z)({},s,{history:f,staticContext:o}))},n}(i().Component),B=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(x.Consumer,null,(function(n){n||(0,h.Z)(!1);var e,r,o=t.props.location||n.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?R(o.pathname,(0,d.Z)({},t.props,{path:a})):n.match}})),r?i().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(i().Component);function H(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,y.Z)(n,["wrappedComponentRef"]);return i().createElement(x.Consumer,null,(function(n){return n||(0,h.Z)(!1),i().createElement(t,(0,d.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,w()(e,t)}var N=i().useContext;function W(){return N(b)}function D(){return N(x).location}function V(){var t=N(x).match;return t?t.params:{}}function q(t){var n=D(),e=N(x).match;return t?R(n.pathname,t):e}},9658:(t,n,e)=>{var r=e(5826);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return f(new RegExp("(?:"+o.join("|")+")",l(r)),e)}(n,e,o):function(t,n,e){return p(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",f=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],b=e[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,P="+"===w||"*"===w,O="?"===w||"*"===w,E=e[2]||f,C=y||g;r.push({name:m||i++,prefix:v||"",delimiter:E,optional:O,repeat:P,partial:x,asterisk:!!b,pattern:C?s(C):b?".*":"[^"+u(E)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!=typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=u(p[h]),!e[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(e)),n)}},2177:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=function(t,n){if(!t)throw new Error("Invariant failed")}}}]);
//# sourceMappingURL=5fce664f5f90bbdcd9a4.bundle.js.map
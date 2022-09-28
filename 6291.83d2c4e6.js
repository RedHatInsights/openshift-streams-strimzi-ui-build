/*! For license information please see 6291.83d2c4e6.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[6291,5893],{35183:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const n=r(9922),a=n.__importStar(r(93264));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.createIcon=function({name:e,xOffset:r=0,yOffset:l=0,width:c,height:s,svgPath:u}){var f;return f=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:f,noVerticalAlign:d}=e,p=n.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(f),g=t.getSize(i),k=-.125*Number.parseFloat(g),v=d?null:{verticalAlign:`${k}em`},h=[r,l,c,s].join(" ");return a.createElement("svg",Object.assign({style:v,fill:o,height:g,width:g,viewBox:h,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&a.createElement("title",{id:this.id},f),a.createElement("path",{d:u}))}},f.displayName=e,f.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},f}},27418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,l,c=a(e),s=1;s<arguments.length;s++){for(var u in o=Object(arguments[s]))r.call(o,u)&&(c[u]=o[u]);if(t){l=t(o);for(var f=0;f<l.length;f++)n.call(o,l[f])&&(c[l[f]]=o[l[f]])}}return c}},75251:(e,t,r)=>{r(27418);var n=r(93264),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),t.Fragment=i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:s,ref:u,props:i,_owner:o.current}}t.jsx=s,t.jsxs=s},85893:(e,t,r)=>{e.exports=r(75251)},3654:(e,t,r)=>{r.d(t,{E:()=>a});var n=r(93264);const a=r.n(n)().createContext(void 0)},64517:(e,t,r)=>{r.d(t,{J:()=>a,S:()=>i});var n=r(93264);const a=r.n(n)().createContext(void 0),i=()=>(0,n.useContext)(a)},77388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(85893),a=r(29299),i=r(3654),o=r(64517),l=r(36384);const c=({getToken:e,apiBasePath:t,kafkaName:r,kafkaPageLink:c,kafkaInstanceLink:s,kafka:u})=>{const{replication_factor:f,min_in_sync_replicas:d}=(null==u?void 0:u.size)||{};return(0,n.jsx)(i.E.Provider,Object.assign({value:{basePath:t,getToken:e}},{children:(0,n.jsx)(o.J.Provider,Object.assign({value:{kafkaName:r,kafkaPageLink:c,kafkaInstanceLink:s,kafka:{},replicationFactor:f,minInSyncReplicas:d,isMultiAZ:null==u?void 0:u.multi_az}},{children:(0,n.jsx)(l.ModalProvider,{children:(0,n.jsx)(a.e,{})})}))}))}}}]);
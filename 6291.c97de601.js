/*! For license information please see 6291.c97de601.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[6291,6678],{35183:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=r(223),n=a.__importStar(r(45052));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.createIcon=function({name:e,xOffset:r=0,yOffset:l=0,width:s,height:c,svgPath:d}){var f;return f=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:f,noVerticalAlign:u}=e,k=a.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(f),p=t.getSize(i),v=-.125*Number.parseFloat(p),g=u?null:{verticalAlign:`${v}em`},h=[r,l,s,c].join(" ");return n.createElement("svg",Object.assign({style:g,fill:o,height:p,width:p,viewBox:h,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},k),m&&n.createElement("title",{id:this.id},f),n.createElement("path",{d}))}},f.displayName=e,f.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},f}},75251:(e,t,r)=>{r(27418);var a=r(13400),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;n=i("react.element"),t.Fragment=i("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},3654:(e,t,r)=>{r.d(t,{E:()=>n});var a=r(75418);const n=r.n(a)().createContext(void 0)},64517:(e,t,r)=>{r.d(t,{J:()=>n,S:()=>i});var a=r(75418);const n=r.n(a)().createContext(void 0),i=()=>(0,a.useContext)(n)},77388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(85893),n=r(29299),i=r(3654),o=r(64517),l=r(4077);const s=({getToken:e,apiBasePath:t,kafkaName:r,kafkaPageLink:s,kafkaInstanceLink:c})=>(0,a.jsx)(i.E.Provider,Object.assign({value:{basePath:t,getToken:e}},{children:(0,a.jsx)(o.J.Provider,Object.assign({value:{kafkaName:r,kafkaPageLink:s,kafkaInstanceLink:c,kafka:{}}},{children:(0,a.jsx)(l.ModalProvider,{children:(0,a.jsx)(n.e,{})})}))}))}}]);

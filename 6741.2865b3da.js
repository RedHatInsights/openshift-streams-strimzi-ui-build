/*! For license information please see 6741.2865b3da.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[6741,5893],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(42695),i=a.__importStar(n(93264));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let r=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:s=0,width:l,height:c,svgPath:d}){var u;return u=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{size:o,color:r,title:u,noVerticalAlign:v}=e,p=a.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(u),g=t.getSize(o),h=-.125*Number.parseFloat(g),m=v?null:{verticalAlign:`${h}em`},y=[n,s,l,c].join(" ");return i.createElement("svg",Object.assign({style:m,fill:r,height:g,width:g,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},p),f&&i.createElement("title",{id:this.id},u),i.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},u}},96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},27418:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var r,s,l=i(e),c=1;c<arguments.length;c++){for(var d in r=Object(arguments[c]))n.call(r,d)&&(l[d]=r[d]);if(t){s=t(r);for(var u=0;u<s.length;u++)a.call(r,s[u])&&(l[s[u]]=r[s[u]])}}return l}},75251:(e,t,n)=>{n(27418);var a=n(93264),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:r.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},91070:(e,t,n)=>{n.d(t,{j:()=>a,u:()=>d});var a,i=n(42695),o=n(85893),r=n(21242),s=n(20777),l=n(96733),c=n(71070);!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(a||(a={}));const d=({titleProps:e,buttonProps:t,emptyStateIconProps:n,emptyStateProps:d,emptyStateBodyProps:u,children:v})=>{const p=t||{},{variant:f=r.ButtonVariant.primary,onClick:g}=p,h=(0,i.__rest)(p,["variant","onClick"]),m=e||{},{title:y}=m,b=(0,i.__rest)(m,["title"]),P=u||{},{body:k}=P,w=(0,i.__rest)(P,["body"]),_=d||{},{variant:C=a.NoItems}=_,j=(0,i.__rest)(_,["variant"]),{variant:T,icon:O,size:S,headingLevel:z}=(()=>{let t={};switch(C){case a.NoConsumerGroups:t={variant:r.EmptyStateVariant.large,icon:l.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;case a.NoItems:t={variant:r.EmptyStateVariant.large,icon:s.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;case a.NoResult:t={variant:r.EmptyStateVariant.large,icon:c.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;default:t={variant:C||r.EmptyStateVariant.full,icon:null==n?void 0:n.icon,size:null==e?void 0:e.size,headingLevel:(null==e?void 0:e.headingLevel)||"h1"}}return t})();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.EmptyState,Object.assign({variant:T},j,{children:[(0,o.jsx)(r.EmptyStateIcon,Object.assign({icon:O},n)),y&&(0,o.jsx)(r.Title,Object.assign({headingLevel:z,size:S},b,{children:y})),k&&(0,o.jsx)(r.EmptyStateBody,Object.assign({},w,{children:k})),(null==t?void 0:t.title)&&(0,o.jsx)(r.Button,Object.assign({variant:f,onClick:g},h,{children:null==t?void 0:t.title})),v]}))})}},68640:(e,t,n)=>{n.d(t,{J:()=>l});var a=n(85893),i=n(93264),o=n.n(i),r=n(15847),s=n(50834);const l=()=>{const{registerModals:e}=(0,s.useModal)();return e((()=>{const{t:e}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]);return{[s.ModalType.KafkaDeleteTopic]:{lazyComponent:o().lazy((()=>n.e(7290).then(n.bind(n,37290)))),variant:"small"},[s.ModalType.KafkaUpdatePartitions]:{lazyComponent:o().lazy((()=>n.e(1356).then(n.bind(n,21356)))),variant:"small"},[s.ModalType.KafkaDeleteConsumerGroup]:{lazyComponent:o().lazy((()=>n.e(2546).then(n.bind(n,12546)))),variant:"small"},[s.ModalType.KafkaConsumerGroupResetOffset]:{lazyComponent:o().lazy((()=>n.e(9537).then(n.bind(n,69537)))),variant:"large"},[s.ModalType.KafkaManagePermissions]:{lazyComponent:o().lazy((()=>Promise.all([n.e(3304),n.e(6429),n.e(3644),n.e(2650),n.e(1118)]).then(n.bind(n,21118)))),variant:"large",title:e("permission.manage_permissions_dialog.title")}}})()),(0,a.jsx)(a.Fragment,{})}},82639:(e,t,n)=>{n.d(t,{bN:()=>c,hI:()=>l,wu:()=>d});var a=n(42695),i=n(85893),o=n(93264),r=n(21242);const s=(0,o.createContext)(void 0),l=()=>(0,o.useContext)(s),c=({children:e})=>{const[t,n]=(0,o.useState)(1),[a,r]=(0,o.useState)(10);return(0,i.jsx)(s.Provider,Object.assign({value:{page:t,perPage:a,setPage:n,setPerPage:r}},{children:e}))},d=e=>{var{itemCount:t,variant:n=r.PaginationVariant.top,isCompact:s,titles:c}=e,d=(0,a.__rest)(e,["itemCount","variant","isCompact","titles"]);const{setPage:u,setPerPage:v,perPage:p,page:f}=l()||{},g=(0,o.useCallback)(((e,t)=>{u&&u(t)}),[u]),h=(0,o.useCallback)(((e,t)=>{u&&u(1),v&&v(t)}),[u,v]);return(0,i.jsx)(r.Pagination,Object.assign({itemCount:t,perPage:p,page:f,onSetPage:g,variant:n,onPerPageSelect:h,isCompact:s},d,{titles:c}))}},3654:(e,t,n)=>{n.d(t,{E:()=>i});var a=n(93264);const i=n.n(a)().createContext(void 0)},64517:(e,t,n)=>{n.d(t,{J:()=>i,S:()=>o});var a=n(93264);const i=n.n(a)().createContext(void 0),o=()=>(0,a.useContext)(i)},63052:(e,t,n)=>{n.d(t,{K:()=>i});var a=n(93264);const i=(e,t)=>{const n=(0,a.useRef)();(0,a.useEffect)((()=>{n.current=e}),[e]),(0,a.useEffect)((()=>{if(null!==t){const e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return()=>{clearInterval(e)}}}),[e,t])}},1293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(85893),i=n(21242),o=n(9837),r=n(5838),s=n(82639),l=n(2766),c=n(68640),d=n(3654),u=n(64517),v=n(50834);const p=({kafkaName:e,kafkaPageLink:t,handleInstanceDrawer:n,redirectAfterDeleteInstance:p,kafka:f,onError:g,apiBasePath:h,getToken:m})=>{const{showModal:y}=(0,v.useModal)();return(0,a.jsx)(d.E.Provider,Object.assign({value:{basePath:h,getToken:m}},{children:(0,a.jsx)(u.J.Provider,Object.assign({value:{kafkaName:e,kafkaPageLink:t,handleInstanceDrawer:n,kafka:f,redirectAfterDeleteInstance:p,onError:g,onDeleteInstance:()=>{y&&y(v.ModalType.KasDeleteInstance,{kafka:f,onDelete:p})}}},{children:(0,a.jsx)(r.ModalProvider,{children:(0,a.jsxs)(s.bN,{children:[(0,a.jsx)(l.$,{activeTabKey:4}),(0,a.jsxs)(i.PageSection,Object.assign({hasOverflowScroll:!0},{children:[(0,a.jsx)(o.C,{kafkaName:e}),(0,a.jsx)(c.J,{})]}))]})})}))}))}},10708:(e,t,n)=>{n.d(t,{T3:()=>s,e5:()=>r,v:()=>l});var a=n(42695),i=n(74359),o=n(92820);const r=(e,t,n,r,s,l=o.SortByDirection.asc,c)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),o=new i.GroupsApi(new i.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return(yield o.getConsumerGroups(void 0,void 0,t,n,r,s,l,c)).data})),s=(e,t)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new i.GroupsApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));yield a.deleteConsumerGroupById(e)})),l=(e,t,n,o,r,s)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),l=new i.GroupsApi(new i.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return yield l.resetConsumerGroupOffset(t,{value:s,offset:n,topics:[{topic:o,partitions:r}]})}))},60540:(e,t,n)=>{n.d(t,{BB:()=>s,BK:()=>v,BN:()=>u,Rh:()=>l,c4:()=>a,eR:()=>d});var a,i=n(42695),o=n(74359),r=n(92820);!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(a||(a={}));const s=(e,t,n,a,s=r.SortByDirection.asc,l)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==e?void 0:e.getToken(),r=new o.TopicsApi(new o.Configuration({accessToken:i,basePath:null==e?void 0:e.basePath}));return(yield r.getTopics(void 0,void 0,n,a,t,s,l)).data})),l=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})),{data:i}=yield a.getTopic(e);return c(i)})),c=e=>{var t,n,a;const i={name:"",numPartitions:"0"};return e&&e.name&&(i.name=e.name),null===(t=e.config)||void 0===t||t.forEach((e=>{if(e.key&&e.value){const t=e.key;i[t]=e.value}})),i.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length.toString())||"0",i.replicationFactor=(null==e?void 0:e.partitions)&&(null===(a=null==e?void 0:e.partitions[0].replicas)||void 0===a?void 0:a.length.toString())||"0",i},d=(e,t,n)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==n?void 0:n.getToken(),i=new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==n?void 0:n.basePath}));return(yield i.updateTopic(e,t)).status})),u=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})),i=yield a.getTopic(e),r=(i.data.partitions||[]).map((e=>{var t;return(null===(t=e.replicas)||void 0===t?void 0:t.length)||0})).reduce(((e=0,t=0)=>e+t)).toString(),s=i.data;return s.config=s.config||[],s.config.push({key:"replicationFactor",value:r}),i.data})),v=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));yield a.deleteTopic(e)}))}}]);
//# sourceMappingURL=6741.2865b3da.js.map
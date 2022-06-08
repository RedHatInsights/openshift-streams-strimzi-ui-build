/*! For license information please see 5574.ebe84266.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5574,5893],{27418:e=>{var a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var a={},t=0;t<10;t++)a["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(a).map((function(e){return a[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,o,c=s(e),l=1;l<arguments.length;l++){for(var d in i=Object(arguments[l]))t.call(i,d)&&(c[d]=i[d]);if(a){o=a(i);for(var b=0;b<o.length;b++)n.call(i,o[b])&&(c[o[b]]=i[o[b]])}}return c}},75251:(e,a,t)=>{t(27418);var n=t(93264),s=60103;if(a.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;s=r("react.element"),a.Fragment=r("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,t){var n,r={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,n)&&!c.hasOwnProperty(n)&&(r[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===r[n]&&(r[n]=a[n]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:i.current}}a.jsx=l,a.jsxs=l},85893:(e,a,t)=>{e.exports=t(75251)},2766:(e,a,t)=>{t.d(a,{$:()=>l});var n=t(85893),s=t(93264),r=t(53518),i=t(68199),o=t(99922),c=t(64517);const l=({activeTabKey:e})=>{const{t:a}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),t=(0,i.useHistory)(),{kafkaPageLink:l,kafkaName:d,handleInstanceDrawer:b,onDeleteInstance:f}=(0,c.S)()||{},[p,k]=(0,s.useState)(),u=e=>{b&&b(!0,e)},g=(0,n.jsxs)(o.Breadcrumb,{children:[(0,n.jsx)(o.BreadcrumbItem,{render:()=>(0,n.jsx)(i.Link,Object.assign({to:l||"#"},{children:a("common.kafka_instance")}))}),(0,n.jsx)(o.BreadcrumbItem,Object.assign({to:"#",isActive:!0},{children:d||a("common.kafka_instance_name")}))]}),m=[(0,n.jsx)(o.DropdownItem,Object.assign({onClick:()=>u("details")},{children:a("common.view_instance")}),"view-kafka"),(0,n.jsx)(o.DropdownItem,Object.assign({onClick:()=>u("connection")},{children:a("common.view_connection")}),"connect-kafka"),(0,n.jsx)(o.DropdownItem,Object.assign({onClick:f},{children:a("common.delete_instance")}),"delete-kafka")];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:g})),(0,n.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light},{children:(0,n.jsxs)(o.Level,{children:[(0,n.jsx)(o.Title,Object.assign({headingLevel:"h1"},{children:d||a("common.kafka_instance_name")})),(0,n.jsx)(o.Dropdown,{onSelect:()=>{k(!p)},toggle:(0,n.jsx)(o.KebabToggle,{onToggle:e=>{k(e)},id:"toggle-data-plane"}),isOpen:p,isPlain:!0,dropdownItems:m,position:o.DropdownPosition.right})]})})),(0,n.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,n.jsxs)(o.Tabs,Object.assign({activeKey:e,onSelect:(e,a)=>{let n;switch(a){default:n="dashboard";break;case 2:n="topics";break;case 3:n="consumer-groups";break;case 4:n="acls"}t.push(n)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},{children:[(0,n.jsx)(o.Tab,{title:(0,n.jsx)(o.TabTitleText,{children:a("dashboard.dashboard")}),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":a("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),(0,n.jsx)(o.Tab,{title:(0,n.jsx)(o.TabTitleText,{children:a("topic.topics")}),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":a("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),(0,n.jsx)(o.Tab,{title:(0,n.jsx)(o.TabTitleText,{children:a("consumerGroup.consumer_groups")}),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":a("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),(0,n.jsx)(o.Tab,{title:(0,n.jsx)(o.TabTitleText,{children:a("permission.tab.label")}),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":a("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"})]}))}))]})}},64517:(e,a,t)=>{t.d(a,{J:()=>s,S:()=>r});var n=t(93264);const s=t.n(n)().createContext(void 0),r=()=>(0,n.useContext)(s)},15574:(e,a,t)=>{t.r(a),t.d(a,{Dashboard:()=>c,default:()=>l});var n=t(85893),s=t(99922),r=t(2766),i=t(64517),o=t(5854);const c=({showMetrics:e,kafkaName:a,kafkaPageLink:t,handleInstanceDrawer:c,redirectAfterDeleteInstance:l,kafka:d})=>{const{showModal:b}=(0,o.useModal)();return(0,n.jsxs)(i.J.Provider,Object.assign({value:{kafkaName:a,kafkaPageLink:t,handleInstanceDrawer:c,kafka:d,redirectAfterDeleteInstance:l,onDeleteInstance:()=>{b&&b(o.ModalType.KasDeleteInstance,{kafka:d,onDelete:l})}}},{children:[(0,n.jsx)(r.$,{activeTabKey:1}),(0,n.jsx)(s.PageSection,Object.assign({hasOverflowScroll:!0,padding:{default:"noPadding"}},{children:e}))]}))},l=c}}]);
//# sourceMappingURL=5574.ebe84266.js.map
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[555,396],{84564:(e,t,n)=>{t.__esModule=!0,t.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationCircleIcon=n(35183).createIcon(t.ExclamationCircleIconConfig),t.default=t.ExclamationCircleIcon},4839:(e,t,n)=>{n.r(t);var r,o=n(75418),a=n.n(o),i=n(66235),c=n.n(i),l=n(11593),u=n(98068),s=n(35380),p=n(3654),f=n(84669),m=n(84564),d=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return d(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?a().createElement(f.PageSection,{padding:{default:"noPadding"}},a().createElement(f.EmptyState,{variant:f.EmptyStateVariant.full},a().createElement(f.EmptyStateIcon,{icon:m.default}),a().createElement(f.Title,{headingLevel:"h1",size:f.TitleSizes.lg},e("common.error_boundary_title")),a().createElement(f.EmptyStateBody,null,e("common.unexpected_error")),a().createElement(f.Button,{variant:f.ButtonVariant.primary,onClick:this.onClickButton},e("common.return_to_home")))):this.props.children},t}(o.Component),v=(0,u.withRouter)((0,l.withTranslation)()(y)),A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},g=function(e){var t=e.alerts,n=e.onCloseAlert;return a().createElement(f.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,r=e.variant,o=e.title,i=e.description,c=e.dataTestId,l=b(e,["id","variant","title","description","dataTestId"]);return a().createElement(f.Alert,A({key:t,isLiveRegion:!0,variant:f.AlertVariant[r],variantLabel:"",title:o,actionClose:a().createElement(f.AlertActionCloseButton,{title:o,onClose:function(){return n(t)}}),"data-testid":c},l),i)})))},I=n(19385),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)},C=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},L=function(e){var t=e.children,n=(0,o.useState)([]),r=n[0],i=n[1],c=(0,o.useState)([]),l=c[0],u=c[1];(0,o.useEffect)((function(){var e=l.map((function(e){return e.key})),t=r.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return s(n)}),8e3);return{key:e.id,timeOut:r}}));return u(C(C([],l,!0),t,!0)),function(){return l.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[r]);var s=function(e){i((function(t){return C([],t.filter((function(t){return t.id!==e})),!0)})),u((function(t){return C([],t.filter((function(t){return t.key===e})),!0)}))};return a().createElement(I.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();i(C(C([],r,!0),[h(h({},e),{id:t})],!1))}}},a().createElement(g,{alerts:r,onCloseAlert:s}),t)},j=n(41861),M=n(82639),N=n(70251);var T=function(e){var t=e.children,n=(0,l.useTranslation)().t,r=(0,o.useState)(!1),i=r[0],c=r[1],u=[a().createElement(f.DropdownItem,{key:"logout"},"Logout")],s=a().createElement(f.Brand,{src:"data:image/png;base64,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",alt:n("common.red_hat_logo")}),p=a().createElement(f.DropdownToggle,{id:"user-dropdown-toggle",onToggle:function(){c(!i)},toggleIndicator:N.CaretDownIcon},"Ned Username"),m=a().createElement(f.Dropdown,{onSelect:function(){c(!i)},toggle:p,isOpen:i,isPlain:!0,dropdownItems:u}),d=a().createElement(a().Fragment,null,a().createElement(f.Avatar,{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",className:"app-masthead-avatar",alt:"avatar"})),y=a().createElement(f.PageHeaderTools,null,m,d);return a().createElement(f.Page,{mainContainerId:"scrollablePageMain",header:a().createElement((function(){return a().createElement(f.PageHeader,{logo:s,logoComponent:"h1",headerTools:y})}),null)},t)},S=n(65535),x=n(8903),E=n(29299),w=n(70705),P=n(13985),k=n(88767),O=n(60540),Z=n(1787),z=n(5736),D=(n(63168),function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},D.apply(this,arguments)}),G=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},B=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},V=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Y=function(e){var t=e.topicName,n=e.onSaveTopic,r=e.onError,i=(0,l.useTranslation)().t,c=(0,o.useContext)(p.E),s=((0,I.useAlert)()||{addAlert:function(){}}).addAlert,m=(0,u.useHistory)(),d=(0,((0,I.useBasename)()||{getBasename:function(){return""}}).getBasename)(),y={name:t,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""},v=(0,o.useState)(y),A=v[0],b=v[1],g=(0,o.useState)(!1),h=g[0],C=g[1],L=function(){m.push(d+"/topics/"+t)};(0,o.useEffect)((function(){!function(e){G(void 0,void 0,void 0,(function(){var t,n,o,a,i,l,u,p,m,d,y;return B(this,(function(v){switch(v.label){case 0:return v.trys.push([0,2,,3]),[4,(0,O.BN)(e,c)];case 1:return t=v.sent(),n={},null===(l=t.config)||void 0===l||l.forEach((function(e){n[e.key||""]=e.value||""})),b(D(D({},A),{numPartitions:(null===(u=null==t?void 0:t.partitions)||void 0===u?void 0:u.length.toString())||"",replicationFactor:(null==t?void 0:t.partitions)&&(null===(p=null==t?void 0:t.partitions[0].replicas)||void 0===p?void 0:p.length.toString())||"","cleanup.policy":n["cleanup.policy"]||"delete","retention.bytes":n["retention.bytes"]||"-1","retention.ms":n["retention.ms"]||"604800000"})),[3,3];case 2:return o=v.sent(),(0,z.I)(o)&&(a=void 0,i=void 0,o&&(0,z.I)(o)&&(i=null===(m=o.response)||void 0===m?void 0:m.data.code,a=null===(d=o.response)||void 0===d?void 0:d.data.error_message),r&&r(i||-1,a||""),404===(null===(y=o.response)||void 0===y?void 0:y.status)&&(s({variant:f.AlertVariant.danger,title:"Topic "+e+" does not exist"}),L&&L())),[3,3];case 3:return[2]}}))}))}(t)}),[t]);return a().createElement(a().Fragment,null,a().createElement(k.W,{isCreate:!1,saveTopic:function(){return G(void 0,void 0,void 0,(function(){var e,t,o,a,l,u,p,m,d,y,v;return B(this,(function(b){switch(b.label){case 0:for(l in e=(0,Z.L3)(A),t=e.name,o=V(e,["name"]),a=[],C(!0),o)l&&"numPartitions"!==l&&"replicationFactor"!==l&&a.push({key:l,value:o[l].toString().toLowerCase()});u={numPartitions:Number(A.numPartitions),config:a},b.label=1;case 1:return b.trys.push([1,3,,4]),[4,(0,O.eR)(t,u,c).then((function(){s({title:i("topic.topic_successfully_updated"),variant:f.AlertVariant.success}),C(!1),n()}))];case 2:return b.sent(),[3,4];case 3:return p=b.sent(),m=void 0,d=void 0,p&&(0,z.I)(p)&&(d=null===(y=p.response)||void 0===y?void 0:y.data.code,m=null===(v=p.response)||void 0===v?void 0:v.data.error_message),r&&r(d||-1,m||""),C(!1),s({title:m||"",variant:f.AlertVariant.danger}),[3,4];case 4:return[2]}}))}))},handleCancel:L,topicData:A,setTopicData:b,isLoadingSave:h}),a().createElement("br",null),a().createElement("br",null))},R=n(64517),J=(n(41781),function(){var e=(0,l.useTranslation)().t,t=(0,u.useHistory)(),n=(0,((0,I.useBasename)()||{getBasename:function(){return""}}).getBasename)(),r=(0,u.useParams)().topicName,i=(0,R.S)()||{},c=i.kafkaName,s=i.kafkaPageLink,p=i.kafkaInstanceLink,m=i.onError,d=i.activeTab,y=void 0===d?1:d,v=(0,o.useState)(y),A=v[0],b=v[1],g=a().createRef(),h=a().createRef();return a().createElement(a().Fragment,null,a().createElement(P.I,{topicName:r,kafkaName:c,kafkaPageLink:s,kafkaInstanceLink:p}),a().createElement(f.PageSection,{variant:f.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},a().createElement(f.Tabs,{onSelect:function(e,t){b(t)},activeKey:A,isBox:!1,className:"pf-m-page-insets"},a().createElement(f.Tab,{eventKey:0,title:a().createElement(f.TabTitleText,null,e("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:g}),a().createElement(f.Tab,{eventKey:1,title:a().createElement(f.TabTitleText,null,e("common.properties")),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:h}))),a().createElement(f.PageSection,{variant:1===A?f.PageSectionVariants.light:f.PageSectionVariants.default},a().createElement(f.TabContent,{eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:g,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==y},a().createElement(w.ConsumerGroups,{topic:r,consumerGroupByTopic:!0})),a().createElement(f.TabContent,{eventKey:1,id:"kafka-ui-TabcontentProperties",ref:h,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==y},a().createElement(Y,{topicName:r,onDeleteTopic:function(){t.push(n)},onSaveTopic:function(){t.push(n+"/topics/"+r)},onError:m}))))}),W=function(){return a().createElement(S.v,null)};var X=function(){return a().createElement(u.HashRouter,null,a().createElement(u.Switch,null,a().createElement(u.Route,{path:"/",component:S.v,exact:!0}),a().createElement(u.Route,{path:"/topics",component:S.v,exact:!0}),a().createElement(u.Route,{path:"/topics/:topicName",component:x.o,exact:!0}),a().createElement(u.Route,{path:"/topic/create",component:E.e}),a().createElement(u.Route,{path:"/topic/update/:topicName",component:J,exact:!0}),a().createElement(u.Route,{path:"/consumerGroups",component:W,exact:!0}),a().createElement(u.Route,{path:"/topics/consumerGroups/:topicName",component:x.o,exact:!0})))},K=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},Q=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};c().render(a().createElement((function(){return a().createElement(l.I18nextProvider,{i18n:s.Z},a().createElement(I.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(p.E.Provider,{value:{basePath:"http://localhost:8000/data/kafka",getToken:function(){return K(void 0,void 0,void 0,(function(){return Q(this,(function(e){return[2,""]}))}))}}},a().createElement(u.BrowserRouter,null,a().createElement(v,null,a().createElement(L,null,a().createElement(j.DY,null,a().createElement(M.bN,null,a().createElement(T,null,a().createElement(X,null))))))))))}),null),document.getElementById("root"))},64517:(e,t,n)=>{n.d(t,{S:()=>a});var r=n(75418),o=n.n(r)().createContext(void 0),a=function(){return(0,r.useContext)(o)}}}]);
//# sourceMappingURL=555.13961ff7.js.map
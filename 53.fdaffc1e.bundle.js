(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[53,721],{84564:(e,t,n)=>{"use strict";t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},41768:()=>{},81153:(e,t,n)=>{"use strict";n.r(t);var r,o=n(97522),a=n.n(o),i=n(69770),c=n.n(i),u=n(38936),l=n(55399),s=(n(41768),n(26302)),p=n(26585),f=n(10107),m=n(84564),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return d(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?a().createElement(f.PageSection,{padding:{default:"noPadding"}},a().createElement(f.EmptyState,{variant:f.EmptyStateVariant.full},a().createElement(f.EmptyStateIcon,{icon:m.ZP}),a().createElement(f.Title,{headingLevel:"h1",size:f.TitleSizes.lg},e("common.error_boundary_title")),a().createElement(f.EmptyStateBody,null,e("common.unexpected_error")),a().createElement(f.Button,{variant:f.ButtonVariant.primary,onClick:this.onClickButton},e("common.return_to_home")))):this.props.children},t}(o.Component),h=(0,l.withRouter)((0,u.withTranslation)()(v)),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=function(e){var t=e.alerts,n=e.onCloseAlert;return a().createElement(f.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,r=e.variant,o=e.title,i=e.description,c=e.dataTestId,u=b(e,["id","variant","title","description","dataTestId"]);return a().createElement(f.Alert,y({key:t,isLiveRegion:!0,variant:f.AlertVariant[r],variantLabel:"",title:o,actionClose:a().createElement(f.AlertActionCloseButton,{title:o,onClose:function(){return n(t)}}),"data-testid":c},u),i)})))},g=n(57473),T=function(){return(T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},w=function(e){var t=e.children,n=(0,o.useState)([]),r=n[0],i=n[1],c=(0,o.useState)([]),u=c[0],l=c[1];(0,o.useEffect)((function(){var e=u.map((function(e){return e.key})),t=r.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return s(n)}),8e3);return{key:e.id,timeOut:r}}));return l(k(k([],u),t)),function(){return u.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[r]);var s=function(e){i((function(t){return k([],t.filter((function(t){return t.id!==e})))})),l((function(t){return k([],t.filter((function(t){return t.key===e})))}))};return a().createElement(g.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();i(k(k([],r),[T(T({},e),{id:t})]))}}},a().createElement(E,{alerts:r,onCloseAlert:s}),t)},P=n(18416),C=n(66057),O=n(6275),S=n(67864),x=function(e){var t=e.children,n=(0,u.useTranslation)().t,r=(0,o.useState)(!1),i=r[0],c=r[1],l=[a().createElement(f.DropdownItem,{key:"logout"},"Logout")],s=a().createElement(f.Brand,{src:S,alt:n("common.red_hat_logo")}),p=a().createElement(f.DropdownToggle,{id:"user-dropdown-toggle",onToggle:function(){c(!i)},toggleIndicator:C.CaretDownIcon},"Ned Username"),m=a().createElement(f.Dropdown,{onSelect:function(){c(!i)},toggle:p,isOpen:i,isPlain:!0,dropdownItems:l}),d=a().createElement(a().Fragment,null,a().createElement(f.Avatar,{src:O,className:"app-masthead-avatar",alt:"avatar"})),v=a().createElement(f.PageHeaderTools,null,m,d);return a().createElement(f.Page,{mainContainerId:"scrollablePageMain",header:a().createElement((function(){return a().createElement(f.PageHeader,{logo:s,logoComponent:"h1",headerTools:v})}),null)},t)},_=n(42159),N=n(37009),I=function(){var e=(0,l.useHistory)(),t=function(t){e.push("/"+t)};return a().createElement(N.J.Provider,{value:{onConnectToRoute:t,getConnectToRoutePath:function(t,n){return n?e.createHref({pathname:"/"+t,key:n}):e.createHref({pathname:"/"+t})}}},a().createElement(_.v,{onCreateTopic:function(){t("topic/create")},onEditTopic:function(e){t("topic/update/"+e)},activeTab:1}))},R=n(47566),j=function(){var e=(0,l.useHistory)(),t=(0,l.useParams)().topicName;return a().createElement(N.J.Provider,{value:{topicName:t,activeTab:2}},a().createElement(R.o,{updateTopic:function(){e.push("/topic/update/"+t)},onDeleteTopic:function(){e.push("/topics")}}))},A=n(40568),D=function(){var e=(0,l.useHistory)();return a().createElement(A.e,{onCloseCreateTopic:function(){e.push("/topics")}})},B=n(45546),L=n(67568),H=n(72645),G=n(71302),V=n(53443),U=n(91674),z=(n(63168),function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}),K=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},F=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},M=function(e){var t=e.topicName,n=e.onCancelUpdateTopic,r=e.onSaveTopic,i=e.onError,c=(0,u.useTranslation)().t,l=(0,o.useContext)(p.E),s=(0,g.useAlert)().addAlert,m={name:t,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""},d=(0,o.useState)(m),v=d[0],h=d[1],y=(0,o.useState)(!1),b=y[0],E=y[1];(0,o.useEffect)((function(){!function(e){K(void 0,void 0,void 0,(function(){var t,r,o,a,c,u,p,m;return F(this,(function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),[4,(0,G.BN)(e,l)];case 1:return t=d.sent(),r={},null===(a=t.config)||void 0===a||a.forEach((function(e){r[e.key||""]=e.value||""})),h(z(z({},v),{numPartitions:(null===(c=null==t?void 0:t.partitions)||void 0===c?void 0:c.length.toString())||"","cleanup.policy":r["cleanup.policy"]||"delete","retention.bytes":r["retention.bytes"]||"-1","retention.ms":r["retention.ms"]||"604800000"})),[3,3];case 2:return o=d.sent(),(0,U.I)(o)&&(i&&i(null===(u=o.response)||void 0===u?void 0:u.data.code,null===(p=o.response)||void 0===p?void 0:p.data.error_message),404===(null===(m=o.response)||void 0===m?void 0:m.status)&&(s({variant:f.AlertVariant.danger,title:"Topic "+e+" does not exist"}),n())),[3,3];case 3:return[2]}}))}))}(t)}),[t]);return a().createElement(a().Fragment,null,a().createElement(H.W,{isCreate:!1,saveTopic:function(){return K(void 0,void 0,void 0,(function(){var e,t,n,o,a,u,p;return F(this,(function(m){switch(m.label){case 0:for(a in e=(0,V.L3)(v),t=e.name,n=J(e,["name"]),o=[],E(!0),n)a&&"numPartitions"!==a&&o.push({key:a,value:n[a].toString().toLowerCase()});u={numPartitions:Number(v.numPartitions),config:o},m.label=1;case 1:return m.trys.push([1,3,,4]),[4,(0,G.eR)(t,u,l).then((function(){s({title:c("topic.topic_successfully_updated"),variant:f.AlertVariant.success}),E(!1),r()}))];case 2:return m.sent(),[3,4];case 3:return p=m.sent(),i&&i(p.response.data.code,p.response.data.error_message),E(!1),s({title:p.response.data.error_message,variant:f.AlertVariant.danger}),[3,4];case 4:return[2]}}))}))},handleCancel:n,topicData:v,setTopicData:h,isLoadingSave:b}),a().createElement("br",null),a().createElement("br",null))},Z=(n(41781),function(e){var t=e.onCancelUpdateTopic,n=e.onDeleteTopic,r=e.onSaveTopic,i=(0,u.useTranslation)().t,c=(0,N.S)(),l=c.topicName,s=void 0===l?"":l,p=c.kafkaName,m=c.kafkaPageLink,d=c.kafkaInstanceLink,v=c.onError,h=c.activeTab,y=void 0===h?0:h,b=(0,o.useState)(y),E=b[0],g=b[1],T=a().createRef(),k=a().createRef();return a().createElement(a().Fragment,null,a().createElement(L.I,{topicName:s,kafkaName:p,kafkaPageLink:m,kafkaInstanceLink:d}),a().createElement(f.PageSection,{variant:f.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},a().createElement(f.Tabs,{onSelect:function(e,t){g(t)},activeKey:E,isBox:!1,className:"pf-m-page-insets"},a().createElement(f.Tab,{eventKey:0,title:a().createElement(f.TabTitleText,null,i("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:T}),a().createElement(f.Tab,{eventKey:1,title:a().createElement(f.TabTitleText,null,i("common.properties")),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:k}))),a().createElement(f.PageSection,{variant:1===E?f.PageSectionVariants.light:f.PageSectionVariants.default},a().createElement(f.TabContent,{eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:T,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==y},a().createElement(B.J,{topic:s,consumerGroupByTopic:!0})),a().createElement(f.TabContent,{eventKey:1,id:"kafka-ui-TabcontentProperties",ref:k,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==y},a().createElement(M,{topicName:s,onCancelUpdateTopic:t,onDeleteTopic:n,onSaveTopic:r,onError:v}))))}),X=function(){var e=(0,l.useHistory)(),t=(0,l.useParams)().topicName;return a().createElement(N.J.Provider,{value:{activeTab:1,topicName:t}},a().createElement(Z,{onCancelUpdateTopic:function(){e.push("/topics/"+t)},onDeleteTopic:function(){e.push("/topics")},onSaveTopic:function(){e.push("/topics/"+t)}}))},$=function(){return a().createElement(_.v,{activeTab:2})};var W=function(){var e=(0,l.useParams)().topicName,t=(0,l.useHistory)();return a().createElement(R.o,{updateTopic:function(){t.push("/topic/update/"+e)}})};var q=function(){return a().createElement(l.HashRouter,null,a().createElement(l.Switch,null,a().createElement(l.Route,{path:"/",component:I,exact:!0}),a().createElement(l.Route,{path:"/topics",component:I,exact:!0}),a().createElement(l.Route,{path:"/topics/:topicName",component:j,exact:!0}),a().createElement(l.Route,{path:"/topic/create",component:D}),a().createElement(l.Route,{path:"/topic/update/:topicName",component:X,exact:!0}),a().createElement(l.Route,{path:"/consumerGroups",component:$,exact:!0}),a().createElement(l.Route,{path:"/topics/consumerGroups/:topicName",component:W,exact:!0})))},Q=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},Y=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};c().render(a().createElement((function(){return a().createElement(u.I18nextProvider,{i18n:s.Z},a().createElement(p.E.Provider,{value:{basePath:"http://localhost:8000/data/kafka",getToken:function(){return Q(void 0,void 0,void 0,(function(){return Y(this,(function(e){return[2,""]}))}))}}},a().createElement(l.BrowserRouter,null,a().createElement(h,null,a().createElement(w,null,a().createElement(P.OU,null,a().createElement(x,null,a().createElement(q,null))))))))}),null),document.getElementById("root"))},67864:(e,t,n)=>{"use strict";e.exports=n.p+"00a7463a99cd21018062.png"},6275:(e,t,n)=>{"use strict";e.exports=n.p+"78554e0da8ff8725e050.svg"}}]);
//# sourceMappingURL=53.fdaffc1e.bundle.js.map
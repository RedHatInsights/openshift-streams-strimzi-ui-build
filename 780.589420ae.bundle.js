(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[780,4],{472:(e,t,n)=>{"use strict";t.Lf={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},t.HJ=n(5183).createIcon(t.Lf),t.HJ},777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(5183).createIcon(t.lb),t.ZP=t.wl},5590:(e,t,n)=>{"use strict";n.r(t);var r=n(6302),a=n(3006),o=n(9770),i=n.n(o),c=n(7522),l=n.n(c),u=n(9115),s=(n(6351),n(3004)),p=n(6401),m=n(9058),f=function(e){var t=e.search,n=e.setSearch,r=e.onClear;return l().createElement(s.InputGroup,null,l().createElement(s.SearchInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":"search input ",placeholder:"Search",value:t,onChange:function(e){n(e)},onClear:function(){r(),n("")}}))},h=n(777),d=function(e){var t=e.onCreateTopic;return l().createElement(s.EmptyState,null,l().createElement(s.EmptyStateIcon,{icon:h.ZP}),l().createElement(s.Title,{headingLevel:"h5",size:"lg"},"You don't have any topics yet"),l().createElement(s.EmptyStateBody,null,"Create a topic by clicking the button below to get started"),l().createElement(s.Button,{variant:"primary",className:"topics-empty-page",onClick:t},"Create Topic"))},v=n(8613),E=n(9492),g=n(699),y=n(7955),b=n(3526),T=n(7194),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},C=function(e){var t,n=e.onCreateTopic,r=e.getTopicDetailsPath,a=e.onClickTopic,o=e.onDeleteTopic,i=(0,c.useState)(!0),h=i[0],C=i[1],S=(0,c.useState)(1),w=S[0],P=S[1],x=(0,c.useState)(10),I=x[0],D=x[1],N=(0,c.useState)(0),B=N[0],O=N[1],M=(0,c.useState)(""),L=M[0],A=M[1],K=(0,c.useState)(),R=K[0],G=K[1],z=(0,c.useState)(),H=z[0],_=z[1],V=(0,c.useState)(!1),U=V[0],j=V[1],Z=(0,c.useState)(),F=Z[0],J=Z[1],Y=(0,c.useContext)(b.w).addAlert,q=(0,c.useContext)(u.E),Q=function(){return e=void 0,t=void 0,r=function(){var e,t;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,E.BB)(q)];case 1:return(e=n.sent())&&(G(e),_(e)),[3,3];case 2:return t=n.sent(),Y(t.response.data.error,s.AlertVariant.danger),[3,3];case 3:return C(!1),[2]}}))},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r};(0,c.useEffect)((function(){C(!0),Q()}),[U]),(0,m.K)((function(){return Q()}),5e3);var W=function(e,t){P(t),O(w*I)},X=function(e,t){D(t)},$=[{title:"Name"},{title:"Partitions",transforms:[p.sortable]},{title:"Retention Time",transforms:[p.sortable]},{title:"Retention Size",transforms:[p.sortable]}],ee=(null===(t=null==H?void 0:H.items)||void 0===t?void 0:t.map((function(e){var t,n,o,i,c,u,s,p,m;return[{title:l().createElement(T.Link,{to:r(e.name),onClick:function(t){t.preventDefault(),a(e.name)}},null==e?void 0:e.name)},null===(t=e.partitions)||void 0===t?void 0:t.length,(p=Number((null===(o=null===(n=e.config)||void 0===n?void 0:n.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===o?void 0:o.value)||0),p<6e4?1===p?p+" millisecond":p+" milliseconds":p>=6e4&&p<36e5?(m=p/6e4,1==(m=Math.round(100*m)/100)?m+" minute":m+" minutes"):p>=36e5&&p<1728e5?(m=p/36e5,1==(m=Math.round(100*m)/100)?m+" hour":m+" hours"):p>=1728e5?(m=p/864e5,(m=Math.round(100*m)/100)+" days"):void 0),(u=Number((null===(c=null===(i=e.config)||void 0===i?void 0:i.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===c?void 0:c.value)||0),Math.abs(u)<1e3?1===u?u+" byte":u+" bytes":Math.abs(u)>=1e3&&Math.abs(u)<1e6?1==(s=u/1e3)?s+" kilobyte":s+" kilobytes":Math.abs(u)>=1e6&&Math.abs(u)<1e9?1==(s=u/1e6)?s+" megabyte":s+" megabytes":Math.abs(u)>=1e9&&Math.abs(u)<1e12?1==(s=u/1e9)?s+" gigaabyte":s+" gigaabytes":Math.abs(u)>=1e12?1==(s=u/1e12)?s+" terabyte":s+" terabytes":void 0)]})))||[];(0,c.useEffect)((function(){if(L&&""!=L.trim()&&(null==R?void 0:R.items)&&R.items.length>0){var e=null==R?void 0:R.items.filter((function(e){return(null==e?void 0:e.name)&&e.name.includes(L)}));_((function(t){return t?k(k({},t),{items:e}):void 0}))}else _(R)}),[L,R]);var te=[{title:"Delete",onClick:function(e,t){return function(e){(null==H?void 0:H.items)&&J(H.items[e].name),j(!0)}(t)}},{title:"Edit",onClick:function(e,t){return function(e){(null==H?void 0:H.items)&&a(H.items[e].name)}(t)}}];return h?l().createElement(y.g,null):l().createElement(l().Fragment,null,U&&l().createElement(g.i,{topicName:F,setDeleteModal:j,deleteModal:U,onDeleteTopic:o}),ee.length<1&&L.length<1?l().createElement(d,{onCreateTopic:n}):l().createElement(s.Card,null,l().createElement(s.Toolbar,null,l().createElement(s.ToolbarContent,null,l().createElement(s.ToolbarItem,{className:"pf-c-toolbar-item--search"},l().createElement(f,{onClear:function(){_(R)},search:L,setSearch:A})),l().createElement(s.ToolbarItem,null,l().createElement(s.Button,{id:"topic-list-create-topic-button",className:"topics-per-page",onClick:function(){n()}},"Create topic")),l().createElement(s.ToolbarItem,{variant:"pagination"},l().createElement(s.Pagination,{itemCount:ee.length,perPage:I,page:w,onSetPage:W,widgetId:"topic-list-pagination-top",onPerPageSelect:X})))),l().createElement(p.Table,{"aria-label":"Compact Table",variant:p.TableVariant.compact,cells:$,rows:1!=w?ee.slice(B,B+I):ee.slice(0,I),actions:te},l().createElement(p.TableHeader,null),l().createElement(p.TableBody,null))),l().createElement(s.Divider,null),ee.length<1&&L.length>1&&l().createElement(v.c,null),ee.length>1&&l().createElement(s.Card,null,l().createElement(s.Pagination,{itemCount:ee.length,perPage:I,page:w,onSetPage:W,widgetId:"topic-list-pagination-bottom",onPerPageSelect:X,offset:0,variant:s.PaginationVariant.bottom})))},S=n(8794),w=n(472),P=n(5977),x=function(e){var t=e.eventKey,n=e.instanceName,r=(0,c.useState)(t),a=r[0],o=r[1],i=(0,P.k6)(),u=l().createElement(s.Breadcrumb,null,l().createElement(s.BreadcrumbItem,{to:"#"},"Kafka Instance"),l().createElement(s.BreadcrumbItem,{to:"#",isActive:!0},n||"Kafka Instance Name"));return l().createElement(s.PageSection,{variant:s.PageSectionVariants.light},u,l().createElement(s.Level,null,l().createElement(s.Title,{headingLevel:"h1"},n||"Kafka Instance Name"),l().createElement(s.Button,{variant:"plain",iconPosition:"right"},l().createElement(w.HJ,null))),l().createElement(s.Tabs,{activeKey:a,onSelect:function(e,t){o(t)}},l().createElement(s.Tab,{title:l().createElement(s.TabTitleText,null,"Topics"),eventKey:1,id:"topics-tab-section","aria-label":"Topics Tab"},l().createElement(C,{onCreateTopic:function(){i.push("/topics/create")},onClickTopic:function(e){i.push("/topic/"+e)},getTopicDetailsPath:function(e){return"/topic/"+e},onDeleteTopic:function(){i.push("/topics")}})),l().createElement(s.Tab,{title:l().createElement(s.TabTitleText,null,"Consumer Groups"),eventKey:2,id:"consumer-groups-tab-section","aria-label":"Consumer Groups Tab"},l().createElement(S.B,{onDeleteConsumerGroup:function(){i.push("/consumerGroups")},consumerGroupByTopic:!1}))))},I=function(){return l().createElement(x,{eventKey:1})},D=n(9410);var N=n(1545);var B=n(1392);var O,M=n(9284),L=n(4564),A=function(e){var t=e.updateState,n=(0,a.useTranslation)().t,r=(0,P.k6)();return l().createElement(s.PageSection,{padding:{default:"noPadding"}},l().createElement(s.EmptyState,{variant:s.EmptyStateVariant.full},l().createElement(s.EmptyStateIcon,{icon:L.ZP}),l().createElement(s.Title,{headingLevel:"h1",size:s.TitleSizes.lg},n("common.errorBoundaryTitle")),l().createElement(s.EmptyStateBody,null,n("common.unexpectedError")),l().createElement(s.Button,{variant:s.ButtonVariant.primary,onClick:function(){t(!1),r.push("/")}},n("common.returnToHome"))))},K=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.updateState=function(e){t.setState({hasError:e})},t}return K(t,e),t.getDerivedStateFromError=function(e){return console.error(e),{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){return this.state.hasError?l().createElement(A,{updateState:this.updateState}):this.props.children},t}(l().Component),G=n(9870),z=n(2605),H=n(9608),_=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],r=[l().createElement(s.DropdownItem,{key:"logout"},"Logout")],a=l().createElement(s.Brand,{src:H,alt:"Red Hat logo"}),o=l().createElement(s.DropdownToggle,{id:"user-dropdown-toggle",onToggle:function(){n(!t)},toggleIndicator:G.CaretDownIcon},"Ned Username"),i=l().createElement(s.Dropdown,{onSelect:function(){n(!t)},toggle:o,isOpen:t,isPlain:!0,dropdownItems:r}),u=l().createElement(l().Fragment,null,l().createElement(s.Avatar,{src:z,className:"app-masthead-avatar",alt:"avatar"})),p=l().createElement(s.PageHeaderTools,null,i,u);return l().createElement(s.PageHeader,{logo:a,logoComponent:"h1",headerTools:p})};i().render(l().createElement(a.I18nextProvider,{i18n:r.Z},l().createElement(u.E.Provider,{value:{basePath:"http://localhost:8000/api/managed-services-strimzi-ui/v1/api",getToken:function(){return e=void 0,t=void 0,r=function(){return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(e){return[2,""]}))},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}}},l().createElement(M.M5,null,l().createElement((function(e){var t=e.children;return l().createElement(s.Page,{mainContainerId:"main-container",header:l().createElement(_,null)},t)}),null,l().createElement(T.HashRouter,null,l().createElement(b.u,null,l().createElement(R,null,l().createElement(T.Switch,null,l().createElement(T.Route,{path:"/",component:I,exact:!0}),l().createElement(T.Route,{path:"/topics",component:I,exact:!0}),l().createElement(T.Route,{path:"/topic/:topicName",component:function(e){var t=e.onDeleteTopic,n=(0,P.UO)().topicName,r=(0,P.k6)();return l().createElement(N.i,{topicName:n,onUpdateTopic:function(){r.push("/topics/update/"+n)},getTopicListPath:function(){return"/topics"},onClickTopicList:function(){return r.push("/topics")},onDeleteTopic:t,eventKey:2})},exact:!0}),l().createElement(T.Route,{path:"/topics/create",component:function(){var e=(0,T.useHistory)();return l().createElement(D.e,{setIsCreateTopic:function(t){t||e.goBack()}})},exact:!0}),l().createElement(T.Route,{path:"/topics/update/:topicName",component:function(){var e=(0,P.UO)().topicName,t=(0,P.k6)();return l().createElement(B.l,{topicName:e,getTopicListPath:function(){return"/topics"},onClickTopicList:function(){return t.push("/topics")},onCancelUpdateTopic:function(){return t.push("/topics")},onDeleteTopic:function(){},onSaveTopic:function(){}})},exact:!0}),l().createElement(T.Route,{path:"/consumerGroups",component:function(){return l().createElement(x,{eventKey:2})},exact:!0}),l().createElement(T.Route,{path:"/topics/consumerGroups/:topicName",component:function(e){var t=e.onDeleteTopic,n=(0,P.UO)().topicName,r=(0,P.k6)();return l().createElement(N.i,{topicName:n,onUpdateTopic:function(){r.push("/topics/update/"+n)},getTopicListPath:function(){return"/topics"},onClickTopicList:function(){return r.push("/topics")},onDeleteTopic:t,eventKey:1})},exact:!0}))))))))),document.getElementById("root"))},2607:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});var r=n(7522),a=n.n(r),o=n(3004),i=function(e){var t=e.alerts,n=e.onCloseAlert;return a().createElement(o.AlertGroup,{isToast:!0},t.map((function(e){var t=e.key,r=e.variant,i=e.message;return a().createElement(o.Alert,{key:t,isLiveRegion:!0,variant:o.AlertVariant[r],variantLabel:"",title:i,actionClose:a().createElement(o.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}})})})))}},3526:(e,t,n)=>{"use strict";n.d(t,{w:()=>l,u:()=>u});var r=n(7522),a=n.n(r),o=n(3004),i=n(2607),c=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},l=(0,r.createContext)({}),u=function(e){var t=e.children,n=(0,r.useState)([]),u=n[0],s=n[1],p=(0,r.useState)([]),m=p[0],f=p[1];(0,r.useEffect)((function(){var e=m.map((function(e){return null==e?void 0:e.key})),t=u.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=setTimeout((function(){return h(e.key)}),8e3);return{key:e.key,timeOut:t}}));return f(c(c([],m),t)),function(){return m.forEach((function(e){return clearTimeout(e.timeOut)}))}}),[u]);var h=function(e){s((function(t){return c([],t.filter((function(t){return t.key!==e})))})),f((function(t){return c([],t.filter((function(t){return t.key===e})))}))};return a().createElement(l.Provider,{value:{addAlert:function(e,t){void 0===t&&(t=o.AlertVariant.default),s(c(c([],u),[{key:(new Date).getTime(),message:e,variant:t}]))}}},a().createElement(i.T,{alerts:u,onCloseAlert:h}),t)}},9608:(e,t,n)=>{"use strict";e.exports=n.p+"00a7463a99cd21018062.png"},2605:(e,t,n)=>{"use strict";e.exports=n.p+"78554e0da8ff8725e050.svg"}}]);
//# sourceMappingURL=780.589420ae.bundle.js.map
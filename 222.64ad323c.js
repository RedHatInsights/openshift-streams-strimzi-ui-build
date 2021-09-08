"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[222],{96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},80358:()=>{},91070:(e,t,n)=>{n.d(t,{j:()=>r,u:()=>f});var r,a=n(75418),o=n.n(a),l=n(84669),i=n(20777),u=n(96733),c=n(71070),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(r||(r={}));var f=function(e){var t=e.titleProps,n=e.buttonProps,a=e.emptyStateIconProps,f=e.emptyStateProps,d=e.emptyStateBodyProps,m=e.children,v=n||{},h=v.variant,y=void 0===h?l.ButtonVariant.primary:h,g=v.onClick,b=p(v,["variant","onClick"]),w=t||{},P=w.title,E=p(w,["title"]),k=d||{},C=k.body,S=p(k,["body"]),O=f||{},x=O.variant,G=void 0===x?r.NoItems:x,T=p(O,["variant"]),I=function(){var e={};switch(G){case r.NoConsumerGroups:e={variant:l.EmptyStateVariant.large,icon:u.ZP,titleSize:l.TitleSizes.lg,headingLevel:"h2"};break;case r.NoItems:e={variant:l.EmptyStateVariant.large,icon:i.ZP,titleSize:l.TitleSizes.lg,headingLevel:"h2"};break;case r.NoResult:e={variant:l.EmptyStateVariant.large,icon:c.ZP,titleSize:l.TitleSizes.lg,headingLevel:"h2"};break;default:e={variant:G||l.EmptyStateVariant.full,icon:null==a?void 0:a.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),z=I.variant,D=I.icon,N=I.titleSize,B=I.headingLevel;return o().createElement(o().Fragment,null,o().createElement(l.EmptyState,s({variant:z},T),o().createElement(l.EmptyStateIcon,s({icon:D},a)),P&&o().createElement(l.Title,s({headingLevel:B,size:N},E),P),C&&o().createElement(l.EmptyStateBody,s({},S),C),(null==n?void 0:n.title)&&o().createElement(l.Button,s({variant:y,onClick:g},b),null==n?void 0:n.title),m))}},82639:(e,t,n)=>{n.d(t,{hI:()=>c,bN:()=>s,wu:()=>p});var r=n(75418),a=n.n(r),o=n(84669),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=(0,r.createContext)(void 0),c=function(){return(0,r.useContext)(u)},s=function(e){var t=e.children,n=(0,r.useState)(1),o=n[0],l=n[1],i=(0,r.useState)(10),c=i[0],s=i[1];return a().createElement(u.Provider,{value:{page:o,perPage:c,setPage:l,setPerPage:s}},t)},p=function(e){var t=e.itemCount,n=e.variant,u=void 0===n?o.PaginationVariant.top:n,s=e.isCompact,p=e.titles,f=i(e,["itemCount","variant","isCompact","titles"]),d=c()||{},m=d.setPage,v=d.setPerPage,h=d.perPage,y=d.page,g=(0,r.useCallback)((function(e,t){m&&m(t)}),[]),b=(0,r.useCallback)((function(e,t){m&&m(1),v&&v(t)}),[]);return a().createElement(o.Pagination,l({itemCount:t,perPage:h,page:y,onSetPage:g,variant:u,onPerPageSelect:b,isCompact:s},f,{titles:p}))}},63052:(e,t,n)=>{n.d(t,{K:()=>a});var r=n(75418),a=function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(null!==t){var e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}},70705:(e,t,n)=>{n.r(t),n.d(t,{ConsumerGroups:()=>k,default:()=>C});var r=n(75418),a=n.n(r),o=n(54532),l=n(84669),i=n(41861),u=n(52049),c=n(4055),s=n(70251),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},d=function(e){var t=e.onClose,n=e.isLoading,d=void 0!==n&&n,m=e.drawerPanelContentProps,v=e.drawerHeaderProps,h=e.isExpanded,y=e.children,g=e.panelBodyContent,b=e.onExpand,w=e.notRequiredDrawerContentBackground,P=e["data-ouia-app-id"],E=e.inlineAlertMessage,k=e.refreshConsumerGroups,C=e.consumerGroupDetail,S=m||{},O=S.widths,x=f(S,["widths"]),G=v||{},T=G.text,I=G.title,z=(0,o.useTranslation)().t,D=(0,i.dd)().showModal,N=(0,i.dd)().showModal,B=(0,r.useState)(),_=B[0],j=B[1],V=[a().createElement(l.DropdownItem,{key:"reset offset",onClick:function(){N(u.w.ConsumerGroupResetOffset,{refreshConsumerGroups:k,consumerGroupData:C})}},z("consumerGroup.reset_offset")),a().createElement(l.DropdownItem,{key:"delete",onClick:function(){D(u.w.DeleteConsumerGroup,{consumerName:(null==I?void 0:I.value)||"",refreshConsumerGroups:k}),t()}},z("common.delete"))],L=a().createElement(l.DrawerPanelContent,p({widths:O||{default:"width_50"}},x),d?a().createElement(c.y,null):a().createElement(a().Fragment,null,a().createElement(l.DrawerHead,null,a().createElement(l.TextContent,null,(null==T?void 0:T.label)&&a().createElement(l.Text,{component:(null==T?void 0:T.component)||l.TextVariants.small,className:(null==T?void 0:T.className)||"kafka-ui-mas-drawer__top-label"},null==T?void 0:T.label),(null==I?void 0:I.value)&&a().createElement(l.Title,{headingLevel:(null==I?void 0:I.headingLevel)||"h2",size:(null==I?void 0:I.size)||l.TitleSizes.xl,className:(null==I?void 0:I.className)||"kafka-ui-mas-drawer__title"},null==I?void 0:I.value)),a().createElement(l.DrawerActions,null,a().createElement(l.Dropdown,{onSelect:function(){j(!_)},toggle:a().createElement(l.KebabToggle,{onToggle:function(e){j(e)},id:"toggle-data-plane"}),isOpen:_,isPlain:!0,dropdownItems:V,position:l.DropdownPosition.right},a().createElement(s.EllipsisVIcon,null)),a().createElement(l.DrawerCloseButton,{onClick:t}))),a().createElement(l.DrawerPanelBody,null,E,g)));return a().createElement(l.Drawer,{isExpanded:h,onExpand:b,"data-ouia-app-id":P},a().createElement(l.DrawerContent,{panelContent:L,className:w?"pf-m-no-background":""},a().createElement(l.DrawerContentBody,{className:"kafka-ui-mas-drawer__drawer-content-body"},y)))},m=n(82639),v=n(91070),h=n(10708),y=n(3654),g=n(63052),b=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}u((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},P=(0,r.lazy)((function(){return n.e(136).then(n.bind(n,31136))})),E=(0,r.lazy)((function(){return n.e(460).then(n.bind(n,95460))})),k=function(e){var t=e.consumerGroupByTopic,n=e.topic,i=e.rowDataTestId,u=(0,r.useState)(0),s=u[0],p=u[1],f=(0,r.useState)(),k=f[0],C=f[1],S=(0,r.useState)(),O=S[0],x=S[1],G=(0,r.useState)({index:void 0,direction:"asc"}),T=G[0],I=G[1],z=(0,r.useState)(),D=z[0],N=z[1],B=(0,r.useState)(!1),_=B[0],j=B[1],V=(0,r.useState)(""),L=V[0],M=V[1],Z=(0,r.useState)(),F=Z[0],R=Z[1],A=(0,r.useContext)(y.E),H=(0,o.useTranslation)().t,K=(0,m.hI)()||{},Q=K.page,W=void 0===Q?1:Q,q=K.perPage,J=void 0===q?10:q;(0,r.useEffect)((function(){p(J*(W-1))}),[W,J]);var U=function(e,t,n){C(n),x("name"),I({index:t,direction:n})},X=function(){return b(void 0,void 0,void 0,(function(){var e;return w(this,(function(t){switch(t.label){case 0:e=100,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,(0,h.e5)(A,s,e,J,W,n,L,k,O).then((function(e){N(e)}))];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}))};(0,r.useEffect)((function(){X()}),[L,k]),(0,g.K)((function(){return X()}),5e3);var Y=a().createElement(P,{consumerGroupDetail:F,consumerGroupByTopic:t}),$=function(e){j(!0),R(e)};return a().createElement(r.Suspense,{fallback:a().createElement(c.y,null)},a().createElement(d,{isExpanded:_,onClose:function(){j(!1)},panelBodyContent:Y,drawerHeaderProps:{text:{label:H("consumerGroup.consumer_group_id")},title:{value:null==F?void 0:F.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:X,consumerGroupDetail:F},function(){var e,n,r,o;return void 0===D?a().createElement(l.PageSection,{className:"kafka-ui-m-full-height",variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(c.y,null)):(!(null===(e=null==D?void 0:D.items)||void 0===e?void 0:e.length)||(null===(n=null==D?void 0:D.items)||void 0===n?void 0:n.length)<1)&&L.length<1?a().createElement(v.u,{emptyStateProps:{variant:v.j.NoConsumerGroups},titleProps:{title:H("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:H("consumerGroup.empty_consumer_body")}}):D?a().createElement(E,{consumerGroups:null===(r=null==D?void 0:D.items)||void 0===r?void 0:r.slice(s,s+J),total:(null===(o=null==D?void 0:D.items)||void 0===o?void 0:o.length)||0,page:W,perPage:J,search:L,setSearch:M,rowDataTestId:i,onViewConsumerGroup:$,isDrawerOpen:_,refreshConsumerGroups:X,consumerGroupByTopic:t,onSort:U,sortBy:T}):a().createElement(a().Fragment,null)}()))};const C=k},13985:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(75418),a=n.n(r),o=n(54532),l=n(84669),i=(n(80358),function(e){var t=e.topicName,n=e.kafkaName,r=e.kafkaInstanceLink,i=e.kafkaPageLink,u=(0,o.useTranslation)().t;return a().createElement(a().Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(l.Breadcrumb,null,a().createElement(l.BreadcrumbItem,{to:i||"#"},u("common.kafka_instance")),a().createElement(l.BreadcrumbItem,{to:r||"#"},n||u("common.kafka_instance_name")),a().createElement(l.BreadcrumbItem,null,t))),a().createElement(l.PageSection,{variant:l.PageSectionVariants.light},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.h1},t))))})},10708:(e,t,n)=>{n.d(t,{e5:()=>i,T3:()=>u,v:()=>c});var r=n(70853),a=n(27577),o=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},i=function(e,t,n,i,u,c,s,p,f){return void 0===p&&(p=a.SortByDirection.asc),o(void 0,void 0,Promise,(function(){var a;return l(this,(function(o){switch(o.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getConsumerGroups(t,n,i,u,c,s,p,f)];case 2:return[2,o.sent().data]}}))}))},u=function(e,t){return o(void 0,void 0,Promise,(function(){var n;return l(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteConsumerGroupById(e)];case 2:return a.sent(),[2]}}))}))},c=function(e,t,n,a,i,u){return o(void 0,void 0,Promise,(function(){var o;return l(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=l.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(t,{value:u,offset:n,topics:[{topic:a,partitions:i}]})];case 2:return[2,l.sent()]}}))}))}},5736:(e,t,n)=>{n.d(t,{I:()=>r});var r=function(e){return void 0!==e}}}]);
//# sourceMappingURL=222.64ad323c.js.map
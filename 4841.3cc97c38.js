"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4841,5183],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(223),a=r.__importStar(n(45052));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let l=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:i=0,width:u,height:s,svgPath:c}){var p;return p=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:o,color:l,title:p,noVerticalAlign:d}=e,f=r.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(p),v=t.getSize(o),h=-.125*Number.parseFloat(v),y=d?null:{verticalAlign:`${h}em`},g=[n,i,u,s].join(" ");return a.createElement("svg",Object.assign({style:y,fill:l,height:v,width:v,viewBox:g,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},f),m&&a.createElement("title",{id:this.id},p),a.createElement("path",{d:c}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},p}},96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},91070:(e,t,n)=>{n.d(t,{j:()=>r,u:()=>d});var r,a=n(75418),o=n.n(a),l=n(99421),i=n(20777),u=n(96733),s=n(71070),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(r||(r={}));var d=function(e){var t=e.titleProps,n=e.buttonProps,a=e.emptyStateIconProps,d=e.emptyStateProps,f=e.emptyStateBodyProps,m=e.children,v=n||{},h=v.variant,y=void 0===h?l.ButtonVariant.primary:h,g=v.onClick,b=p(v,["variant","onClick"]),w=t||{},P=w.title,E=p(w,["title"]),C=f||{},k=C.body,S=p(C,["body"]),O=d||{},x=O.variant,z=void 0===x?r.NoItems:x,T=p(O,["variant"]),G=function(){var e={};switch(z){case r.NoConsumerGroups:e={variant:l.EmptyStateVariant.large,icon:u.ZP,size:l.TitleSizes.lg,headingLevel:"h2"};break;case r.NoItems:e={variant:l.EmptyStateVariant.large,icon:i.ZP,size:l.TitleSizes.lg,headingLevel:"h2"};break;case r.NoResult:e={variant:l.EmptyStateVariant.large,icon:s.ZP,size:l.TitleSizes.lg,headingLevel:"h2"};break;default:e={variant:z||l.EmptyStateVariant.full,icon:null==a?void 0:a.icon,size:null==t?void 0:t.size,headingLevel:(null==t?void 0:t.headingLevel)||"h1"}}return e}(),I=G.variant,j=G.icon,D=G.size,M=G.headingLevel;return o().createElement(o().Fragment,null,o().createElement(l.EmptyState,c({variant:I},T),o().createElement(l.EmptyStateIcon,c({icon:j},a)),P&&o().createElement(l.Title,c({headingLevel:M,size:D},E),P),k&&o().createElement(l.EmptyStateBody,c({},S),k),(null==n?void 0:n.title)&&o().createElement(l.Button,c({variant:y,onClick:g},b),null==n?void 0:n.title),m))}},68640:(e,t,n)=>{n.d(t,{J:()=>i});var r=n(75418),a=n.n(r),o=n(2695),l=n(7451),i=function(){var e,t;return(0,(0,l.useModal)().registerModals)((t=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,(e={})[l.ModalType.KafkaDeleteTopic]={lazyComponent:a().lazy((function(){return n.e(7290).then(n.bind(n,37290))})),variant:"small"},e[l.ModalType.KafkaUpdatePartitions]={lazyComponent:a().lazy((function(){return n.e(1356).then(n.bind(n,21356))})),variant:"small"},e[l.ModalType.KafkaDeleteConsumerGroup]={lazyComponent:a().lazy((function(){return n.e(2546).then(n.bind(n,12546))})),variant:"small"},e[l.ModalType.KafkaConsumerGroupResetOffset]={lazyComponent:a().lazy((function(){return n.e(9537).then(n.bind(n,69537))})),variant:"large"},e[l.ModalType.KafkaManagePermissions]={lazyComponent:a().lazy((function(){return Promise.all([n.e(3883),n.e(6429),n.e(6797),n.e(9525),n.e(5598)]).then(n.bind(n,21118))})),variant:"large",title:t("permission.manage_permissions_dialog.title")},e)),a().createElement(a().Fragment,null)}},4055:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(75418),a=n.n(r),o=n(99421),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},i=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return a().createElement(o.Bullseye,l({},t),a().createElement(o.Spinner,l({},n)))}},82639:(e,t,n)=>{n.d(t,{bN:()=>c,hI:()=>s,wu:()=>p});var r=n(75418),a=n.n(r),o=n(99421),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=(0,r.createContext)(void 0),s=function(){return(0,r.useContext)(u)},c=function(e){var t=e.children,n=(0,r.useState)(1),o=n[0],l=n[1],i=(0,r.useState)(10),s=i[0],c=i[1];return a().createElement(u.Provider,{value:{page:o,perPage:s,setPage:l,setPerPage:c}},t)},p=function(e){var t=e.itemCount,n=e.variant,u=void 0===n?o.PaginationVariant.top:n,c=e.isCompact,p=e.titles,d=i(e,["itemCount","variant","isCompact","titles"]),f=s()||{},m=f.setPage,v=f.setPerPage,h=f.perPage,y=f.page,g=(0,r.useCallback)((function(e,t){m&&m(t)}),[]),b=(0,r.useCallback)((function(e,t){m&&m(1),v&&v(t)}),[]);return a().createElement(o.Pagination,l({itemCount:t,perPage:h,page:y,onSetPage:g,variant:u,onPerPageSelect:b,isCompact:c},d,{titles:p}))}},3654:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(75418),a=n.n(r)().createContext(void 0)},63052:(e,t,n)=>{n.d(t,{K:()=>a});var r=n(75418),a=function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(null!==t){var e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}},63850:(e,t,n)=>{n.d(t,{J:()=>E});var r=n(75418),a=n.n(r),o=n(2695),l=n(99421),i=n(4055),u=n(48418),s=n(7451),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},d=function(e){var t=e.onClose,n=e.isLoading,d=void 0!==n&&n,f=e.drawerPanelContentProps,m=e.drawerHeaderProps,v=e.isExpanded,h=e.children,y=e.panelBodyContent,g=e.onExpand,b=e.notRequiredDrawerContentBackground,w=e["data-ouia-app-id"],P=e.inlineAlertMessage,E=e.refreshConsumerGroups,C=e.consumerGroupDetail,k=f||{},S=k.widths,O=p(k,["widths"]),x=m||{},z=x.text,T=x.title,G=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,I=(0,s.useModal)().showModal,j=(0,s.useModal)().showModal,D=(0,r.useState)(),M=D[0],_=D[1],N=[a().createElement(l.DropdownItem,{key:"reset offset",onClick:function(){j(s.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:E,consumerGroupData:C})}},G("consumerGroup.reset_offset")),a().createElement(l.DropdownItem,{key:"delete",onClick:function(){I(s.ModalType.KafkaDeleteConsumerGroup,{consumerName:(null==T?void 0:T.value)||"",refreshConsumerGroups:E}),t()}},G("common.delete"))],B=a().createElement(l.DrawerPanelContent,c({widths:S||{default:"width_50"}},O),d?a().createElement(i.y,null):a().createElement(a().Fragment,null,a().createElement(l.DrawerHead,null,a().createElement(l.TextContent,null,(null==z?void 0:z.label)&&a().createElement(l.Text,{component:(null==z?void 0:z.component)||l.TextVariants.small,className:(null==z?void 0:z.className)||"kafka-ui-mas-drawer__top-label"},null==z?void 0:z.label),(null==T?void 0:T.value)&&a().createElement(l.Title,{headingLevel:(null==T?void 0:T.headingLevel)||"h2",size:(null==T?void 0:T.size)||l.TitleSizes.xl,className:(null==T?void 0:T.className)||"kafka-ui-mas-drawer__title"},null==T?void 0:T.value)),a().createElement(l.DrawerActions,null,a().createElement(l.Dropdown,{onSelect:function(){_(!M)},toggle:a().createElement(l.KebabToggle,{onToggle:function(e){_(e)},id:"toggle-data-plane"}),isOpen:M,isPlain:!0,dropdownItems:N,position:l.DropdownPosition.right},a().createElement(u.EllipsisVIcon,null)),a().createElement(l.DrawerCloseButton,{onClick:t}))),a().createElement(l.DrawerPanelBody,null,P,y)));return a().createElement(l.Drawer,{isExpanded:v,onExpand:g,"data-ouia-app-id":w},a().createElement(l.DrawerContent,{panelContent:B,className:b?"pf-m-no-background":""},a().createElement(l.DrawerContentBody,{className:"kafka-ui-mas-drawer__drawer-content-body"},h)))},f=n(82639),m=n(91070),v=n(10708),h=n(3654),y=n(63052),g=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}u((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},w=(0,r.lazy)((function(){return n.e(1639).then(n.bind(n,31639))})),P=(0,r.lazy)((function(){return n.e(5460).then(n.bind(n,95460))})),E=function(e){var t=e.consumerGroupByTopic,n=e.topic,u=e.rowDataTestId,s=(0,r.useState)(0),c=s[0],p=s[1],E=(0,r.useState)(),C=E[0],k=E[1],S=(0,r.useState)(),O=S[0],x=S[1],z=(0,r.useState)({index:void 0,direction:"asc"}),T=z[0],G=z[1],I=(0,r.useState)(),j=I[0],D=I[1],M=(0,r.useState)(!1),_=M[0],N=M[1],B=(0,r.useState)(""),V=B[0],L=B[1],F=(0,r.useState)(),K=F[0],A=F[1],Z=(0,r.useState)(),R=Z[0],H=Z[1],J=(0,r.useContext)(h.E),Q=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,W=(0,f.hI)()||{},q=W.page,U=void 0===q?1:q,$=W.perPage,X=void 0===$?10:$;(0,r.useEffect)((function(){p(X*(U-1))}),[U,X]);var Y=function(e,t,n){k(n),x("name"),G({index:t,direction:n})},ee=function(){return g(void 0,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return 100,[4,(0,v.e5)(J,c,100,X,U,n,V,C,O).then((function(e){D(e)}))];case 1:return e.sent(),[2]}}))}))};(0,r.useEffect)((function(){ee()}),[V,C]),(0,r.useEffect)((function(){var e,t=j&&(null===(e=j.items)||void 0===e?void 0:e.filter((function(e){return e.groupId===R})));t&&t.length>0&&A(t[0])}),[j]),(0,y.K)((function(){return ee()}),5e3);var te=a().createElement(w,{consumerGroupDetail:K,consumerGroupByTopic:t}),ne=function(e){N(!0),H(null==e?void 0:e.groupId),A(e)};return a().createElement(r.Suspense,{fallback:a().createElement(i.y,null)},a().createElement(d,{isExpanded:_,onClose:function(){N(!1)},panelBodyContent:te,drawerHeaderProps:{text:{label:Q("consumerGroup.consumer_group_id")},title:{value:null==K?void 0:K.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:ee,consumerGroupDetail:K},function(){var e,n,r,o,s;return void 0===j?a().createElement(l.PageSection,{className:"kafka-ui-m-full-height",variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(i.y,null)):(!(null===(e=null==j?void 0:j.items)||void 0===e?void 0:e.length)||(null===(n=null==j?void 0:j.items)||void 0===n?void 0:n.length)<1)&&V.length<1?a().createElement(m.u,{emptyStateProps:{variant:m.j.NoConsumerGroups},titleProps:{title:Q("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:Q("consumerGroup.empty_consumer_body")}}):j?a().createElement(P,{consumerGroups:V?null===(r=null==j?void 0:j.items)||void 0===r?void 0:r.slice(0,X):null===(o=null==j?void 0:j.items)||void 0===o?void 0:o.slice((null==j?void 0:j.items.length)>1?c:0,c+X),total:(null===(s=null==j?void 0:j.items)||void 0===s?void 0:s.length)||0,page:U,perPage:X,search:V,setSearch:L,rowDataTestId:u,onViewConsumerGroup:ne,isDrawerOpen:_,refreshConsumerGroups:ee,consumerGroupByTopic:t,onSort:Y,sortBy:T}):a().createElement(a().Fragment,null)}()))}},10708:(e,t,n)=>{n.d(t,{T3:()=>u,e5:()=>i,v:()=>s});var r=n(16560),a=n(57294),o=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},i=function(e,t,n,i,u,s,c,p,d){return void 0===p&&(p=a.SortByDirection.asc),o(void 0,void 0,Promise,(function(){var a;return l(this,(function(o){switch(o.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getConsumerGroups(t,n,i,u,s,c,p,d)];case 2:return[2,o.sent().data]}}))}))},u=function(e,t){return o(void 0,void 0,Promise,(function(){var n;return l(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteConsumerGroupById(e)];case 2:return a.sent(),[2]}}))}))},s=function(e,t,n,a,i,u){return o(void 0,void 0,Promise,(function(){var o;return l(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=l.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(t,{value:u,offset:n,topics:[{topic:a,partitions:i}]})];case 2:return[2,l.sent()]}}))}))}}}]);

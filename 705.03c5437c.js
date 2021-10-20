"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[705],{70705:(e,n,t)=>{t.r(n),t.d(n,{ConsumerGroups:()=>E,default:()=>C});var r=t(75418),o=t.n(r),a=t(11593),l=t(84669),u=t(4055),i=t(70251),s=t(46332),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},p=function(e){var n=e.onClose,t=e.isLoading,p=void 0!==t&&t,f=e.drawerPanelContentProps,m=e.drawerHeaderProps,v=e.isExpanded,h=e.children,y=e.panelBodyContent,w=e.onExpand,b=e.notRequiredDrawerContentBackground,g=e["data-ouia-app-id"],k=e.inlineAlertMessage,E=e.refreshConsumerGroups,C=e.consumerGroupDetail,P=f||{},G=P.widths,x=d(P,["widths"]),S=m||{},T=S.text,D=S.title,O=(0,a.useTranslation)().t,_=(0,s.useModal)().showModal,B=(0,s.useModal)().showModal,I=(0,r.useState)(),N=I[0],j=I[1],M=[o().createElement(l.DropdownItem,{key:"reset offset",onClick:function(){B(s.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:E,consumerGroupData:C})}},O("consumerGroup.reset_offset")),o().createElement(l.DropdownItem,{key:"delete",onClick:function(){_(s.ModalType.KafkaDeleteConsumerGroup,{consumerName:(null==D?void 0:D.value)||"",refreshConsumerGroups:E}),n()}},O("common.delete"))],z=o().createElement(l.DrawerPanelContent,c({widths:G||{default:"width_50"}},x),p?o().createElement(u.y,null):o().createElement(o().Fragment,null,o().createElement(l.DrawerHead,null,o().createElement(l.TextContent,null,(null==T?void 0:T.label)&&o().createElement(l.Text,{component:(null==T?void 0:T.component)||l.TextVariants.small,className:(null==T?void 0:T.className)||"kafka-ui-mas-drawer__top-label"},null==T?void 0:T.label),(null==D?void 0:D.value)&&o().createElement(l.Title,{headingLevel:(null==D?void 0:D.headingLevel)||"h2",size:(null==D?void 0:D.size)||l.TitleSizes.xl,className:(null==D?void 0:D.className)||"kafka-ui-mas-drawer__title"},null==D?void 0:D.value)),o().createElement(l.DrawerActions,null,o().createElement(l.Dropdown,{onSelect:function(){j(!N)},toggle:o().createElement(l.KebabToggle,{onToggle:function(e){j(e)},id:"toggle-data-plane"}),isOpen:N,isPlain:!0,dropdownItems:M,position:l.DropdownPosition.right},o().createElement(i.EllipsisVIcon,null)),o().createElement(l.DrawerCloseButton,{onClick:n}))),o().createElement(l.DrawerPanelBody,null,k,y)));return o().createElement(l.Drawer,{isExpanded:v,onExpand:w,"data-ouia-app-id":g},o().createElement(l.DrawerContent,{panelContent:z,className:b?"pf-m-no-background":""},o().createElement(l.DrawerContentBody,{className:"kafka-ui-mas-drawer__drawer-content-body"},h)))},f=t(82639),m=t(91070),v=t(10708),h=t(3654),y=t(63052),w=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function u(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))},b=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},g=(0,r.lazy)((function(){return t.e(1639).then(t.bind(t,31639))})),k=(0,r.lazy)((function(){return t.e(5460).then(t.bind(t,95460))})),E=function(e){var n=e.consumerGroupByTopic,t=e.topic,i=e.rowDataTestId,s=(0,r.useState)(0),c=s[0],d=s[1],E=(0,r.useState)(),C=E[0],P=E[1],G=(0,r.useState)(),x=G[0],S=G[1],T=(0,r.useState)({index:void 0,direction:"asc"}),D=T[0],O=T[1],_=(0,r.useState)(),B=_[0],I=_[1],N=(0,r.useState)(!1),j=N[0],M=N[1],z=(0,r.useState)(""),A=z[0],K=z[1],L=(0,r.useState)(),V=L[0],H=L[1],F=(0,r.useContext)(h.E),R=(0,a.useTranslation)().t,q=(0,f.hI)()||{},J=q.page,Q=void 0===J?1:J,U=q.perPage,W=void 0===U?10:U;(0,r.useEffect)((function(){d(W*(Q-1))}),[Q,W]);var X=function(e,n,t){P(t),S("name"),O({index:n,direction:t})},Y=function(){return w(void 0,void 0,void 0,(function(){var e;return b(this,(function(n){switch(n.label){case 0:e=100,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,(0,v.e5)(F,c,e,W,Q,t,A,C,x).then((function(e){I(e)}))];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))};(0,r.useEffect)((function(){Y()}),[A,C]),(0,y.K)((function(){return Y()}),5e3);var Z=o().createElement(g,{consumerGroupDetail:V,consumerGroupByTopic:n}),$=function(e){M(!0),H(e)};return o().createElement(r.Suspense,{fallback:o().createElement(u.y,null)},o().createElement(p,{isExpanded:j,onClose:function(){M(!1)},panelBodyContent:Z,drawerHeaderProps:{text:{label:R("consumerGroup.consumer_group_id")},title:{value:null==V?void 0:V.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:Y,consumerGroupDetail:V},function(){var e,t,r,a;return void 0===B?o().createElement(l.PageSection,{className:"kafka-ui-m-full-height",variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},o().createElement(u.y,null)):(!(null===(e=null==B?void 0:B.items)||void 0===e?void 0:e.length)||(null===(t=null==B?void 0:B.items)||void 0===t?void 0:t.length)<1)&&A.length<1?o().createElement(m.u,{emptyStateProps:{variant:m.j.NoConsumerGroups},titleProps:{title:R("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:R("consumerGroup.empty_consumer_body")}}):B?o().createElement(k,{consumerGroups:null===(r=null==B?void 0:B.items)||void 0===r?void 0:r.slice(c,c+W),total:(null===(a=null==B?void 0:B.items)||void 0===a?void 0:a.length)||0,page:Q,perPage:W,search:A,setSearch:K,rowDataTestId:i,onViewConsumerGroup:$,isDrawerOpen:j,refreshConsumerGroups:Y,consumerGroupByTopic:n,onSort:X,sortBy:D}):o().createElement(o().Fragment,null)}()))};const C=E},10708:(e,n,t)=>{t.d(n,{e5:()=>u,T3:()=>i,v:()=>s});var r=t(70853),o=t(27577),a=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function u(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))},l=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=function(e,n,t,u,i,s,c,d,p){return void 0===d&&(d=o.SortByDirection.asc),a(void 0,void 0,Promise,(function(){var o;return l(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getConsumerGroups(n,t,u,i,s,c,d,p)];case 2:return[2,a.sent().data]}}))}))},i=function(e,n){return a(void 0,void 0,Promise,(function(){var t;return l(this,(function(o){switch(o.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).deleteConsumerGroupById(e)];case 2:return o.sent(),[2]}}))}))},s=function(e,n,t,o,u,i){return a(void 0,void 0,Promise,(function(){var a;return l(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(n,{value:i,offset:t,topics:[{topic:o,partitions:u}]})];case 2:return[2,l.sent()]}}))}))}}}]);

"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[227],{82639:(e,t,a)=>{a.d(t,{hI:()=>s,bN:()=>u,wu:()=>m});var n=a(75418),r=a.n(n),o=a(58788),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},l=(0,n.createContext)(void 0),s=function(){return(0,n.useContext)(l)},u=function(e){var t=e.children,a=(0,n.useState)(1),o=a[0],i=a[1],c=(0,n.useState)(10),s=c[0],u=c[1];return r().createElement(l.Provider,{value:{page:o,perPage:s,setPage:i,setPerPage:u}},t)},m=function(e){var t=e.itemCount,a=e.variant,l=void 0===a?o.PaginationVariant.top:a,u=e.isCompact,m=e.titles,d=c(e,["itemCount","variant","isCompact","titles"]),f=s()||{},b=f.setPage,p=f.setPerPage,k=f.perPage,g=f.page,h=(0,n.useCallback)((function(e,t){b&&b(t)}),[]),v=(0,n.useCallback)((function(e,t){b&&b(1),p&&p(t)}),[]);return r().createElement(o.Pagination,i({itemCount:t,perPage:k,page:g,onSetPage:h,variant:l,onPerPageSelect:v,isCompact:u},d,{titles:m}))}},64517:(e,t,a)=>{a.d(t,{J:()=>r,S:()=>o});var n=a(75418),r=a.n(n)().createContext(void 0),o=function(){return(0,n.useContext)(r)}},5473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(75418),r=a.n(n),o=a(54532),i=a(3654),c=a(64517),l=a(84165),s=a(58788),u=a(4055),m=(a(41781),(0,n.lazy)((function(){return Promise.all([a.e(853),a.e(854),a.e(550),a.e(202),a.e(708),a.e(380)]).then(a.bind(a,93380))}))),d=(0,n.lazy)((function(){return Promise.all([a.e(853),a.e(550),a.e(708),a.e(705),a.e(892)]).then(a.bind(a,70705))})),f=function(){var e=(0,o.useTranslation)().t,t=(0,c.S)()||{},a=t.kafkaPageLink,i=t.kafkaName,l=t.handleInstanceDrawer,f=t.setIsOpenDeleteInstanceModal,b=t.showMetrics,p=t.activeTab,k=(0,n.useState)(p||1),g=k[0],h=k[1],v=r().createRef(),E=r().createRef(),P=r().createRef(),T=(0,n.useState)(),C=T[0],y=T[1],w=function(e){l&&l(!0,e)},I=[r().createElement(s.DropdownItem,{key:"view-kafka",onClick:function(){return w("details")}},e("common.view_instance")),r().createElement(s.DropdownItem,{key:"connect-kafka",onClick:function(){return w("connection")}},e("common.view_connection")),r().createElement(s.DropdownItem,{key:"delete-kafka",onClick:function(){f&&f(!0)}},e("common.delete_instance"))],S=r().createElement(s.Breadcrumb,null,r().createElement(s.BreadcrumbItem,{to:a||"#"},e("common.kafka_instance")),r().createElement(s.BreadcrumbItem,{to:"#",isActive:!0},i||e("common.kafka_instance_name")));return r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-c-page__main-breadcrumb"},S),r().createElement(s.PageSection,{variant:s.PageSectionVariants.light},r().createElement(s.Level,null,r().createElement(s.Title,{headingLevel:"h1"},i||e("common.kafka_instance_name")),r().createElement(s.Dropdown,{onSelect:function(){y(!C)},toggle:r().createElement(s.KebabToggle,{onToggle:function(e){y(e)},id:"toggle-data-plane"}),isOpen:C,isPlain:!0,dropdownItems:I,position:s.DropdownPosition.right}))),r().createElement(r().Suspense,{fallback:r().createElement(u.y,null)},r().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},r().createElement(s.Tabs,{activeKey:g,onSelect:function(e,t){h(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":e("dashboard.dashboard"),tabContentRef:P,tabContentId:"kafka-ui-TabcontentDashboard"}),r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":e("topic.topics"),tabContentRef:E,tabContentId:"kafka-ui-TabcontentTopicsList"}),r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":e("consumerGroup.consumer_groups"),tabContentRef:v,tabContentId:"kafka-ui-TabcontentConsumersList"}))),r().createElement(s.PageSection,{isFilled:!0},r().createElement(s.TabContent,{eventKey:1,ref:P,id:"kafka-ui-TabcontentDashboard",className:"kafka-ui-m-full-height","aria-label":e("dashboard.dashboard"),hidden:1!==g},b),r().createElement(s.TabContent,{eventKey:2,ref:E,id:"kafka-ui-TabcontentTopicsList",className:"kafka-ui-m-full-height","aria-label":e("topic.topics"),hidden:2!==g},r().createElement(m,null)),r().createElement(s.TabContent,{eventKey:3,ref:v,id:"kafka-ui-TabcontentConsumersList",className:"kafka-ui-m-full-height","aria-label":e("consumerGroup.consumer_groups"),hidden:3!=g},r().createElement(d,{consumerGroupByTopic:!1})))))},b=a(41861),p=a(82639);const k=function(e){var t=e.getToken,a=e.apiBasePath,n=e.kafkaName,s=e.kafkaPageLink,u=e.onError,m=e.handleInstanceDrawer,d=e.setIsOpenDeleteInstanceModal,k=e.showMetrics,g=e.activeTab,h=void 0===g?1:g;return r().createElement(o.I18nextProvider,{i18n:l.Z},r().createElement(i.E.Provider,{value:{basePath:a,getToken:t}},r().createElement(c.J.Provider,{value:{kafkaName:n,kafkaPageLink:s,onError:u,handleInstanceDrawer:m,setIsOpenDeleteInstanceModal:d,showMetrics:k,activeTab:h}},r().createElement(b.DY,null,r().createElement(p.bN,null,r().createElement(f,null))))))}}}]);
//# sourceMappingURL=227.7210d907.js.map
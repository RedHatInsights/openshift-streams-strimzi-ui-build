(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[557],{50378:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var n=a(97522),o=a.n(n),c=a(55399),i=a(38936),r=a(26585),l=a(37009),s=a(26302),m=a(10107),u=a(87887),d=(a(41781),(0,n.lazy)((function(){return Promise.all([a.e(696),a.e(191),a.e(473),a.e(912),a.e(572),a.e(57),a.e(315)]).then(a.bind(a,94315))}))),k=(0,n.lazy)((function(){return Promise.all([a.e(696),a.e(191),a.e(912),a.e(572),a.e(663)]).then(a.bind(a,95663))})),f=function(e){var t=e.onCreateTopic,a=e.onEditTopic,c=e.activeTab,r=(0,i.useTranslation)().t,s=(0,l.S)(),f=s.kafkaPageLink,b=s.kafkaName,p=s.handleInstanceDrawer,T=s.setIsOpenDeleteInstanceModal,g=s.showMetrics,E=(0,n.useState)(c),h=E[0],v=E[1],C=o().createRef(),P=o().createRef(),w=o().createRef(),I=(0,n.useState)(),_=I[0],y=I[1],D=function(e){p&&p(!0,e)},K=[o().createElement(m.DropdownItem,{key:"view-kafka",onClick:function(){return D("details")}},r("common.view_instance")),o().createElement(m.DropdownItem,{key:"connect-kafka",onClick:function(){return D("connection")}},r("common.view_connection")),o().createElement(m.DropdownItem,{key:"delete-kafka",onClick:function(){T&&T(!0)}},r("common.delete_instance"))],R=o().createElement(m.Breadcrumb,null,o().createElement(m.BreadcrumbItem,{to:f||"#"},r("common.kafka_instance")),o().createElement(m.BreadcrumbItem,{to:"#",isActive:!0},b||r("common.kafka_instance_name")));return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},R),o().createElement(m.PageSection,{variant:m.PageSectionVariants.light},o().createElement(m.Level,null,o().createElement(m.Title,{headingLevel:"h1"},b||r("common.kafka_instance_name")),o().createElement(m.Dropdown,{onSelect:function(){y(!_)},toggle:o().createElement(m.KebabToggle,{onToggle:function(e){y(e)},id:"toggle-data-plane"}),isOpen:_,isPlain:!0,dropdownItems:K,position:m.DropdownPosition.right}))),o().createElement(o().Suspense,{fallback:o().createElement(u.y,null)},o().createElement(m.PageSection,{variant:m.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(m.Tabs,{activeKey:h,onSelect:function(e,t){v(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(m.Tab,{title:o().createElement(m.TabTitleText,null,r("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":r("dashboard.dashboard"),tabContentRef:w,tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(m.Tab,{title:o().createElement(m.TabTitleText,null,r("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":r("topic.topics"),tabContentRef:P,tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(m.Tab,{title:o().createElement(m.TabTitleText,null,r("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":r("consumerGroup.consumer_groups"),tabContentRef:C,tabContentId:"kafka-ui-TabcontentConsumersList"}))),o().createElement(m.PageSection,{isFilled:!0},o().createElement(m.TabContent,{eventKey:1,ref:w,id:"kafka-ui-TabcontentDashboard",className:"kafka-ui-m-full-height","aria-label":r("dashboard.dashboard")},g),o().createElement(m.TabContent,{eventKey:2,ref:P,id:"kafka-ui-TabcontentTopicsList",className:"kafka-ui-m-full-height","aria-label":r("topic.topics"),hidden:!0},o().createElement(d,{onCreateTopic:t,onEditTopic:a})),o().createElement(m.TabContent,{eventKey:3,ref:C,id:"kafka-ui-TabcontentConsumersList",className:"kafka-ui-m-full-height","aria-label":r("consumerGroup.consumer_groups"),hidden:!0},o().createElement(k,{consumerGroupByTopic:!1})))))},b=a(53555),p=a(48350);const T=function(e){var t=e.getToken,a=e.apiBasePath,n=e.kafkaName,m=e.kafkaPageLink,u=e.onError,d=e.onConnectToRoute,k=e.getConnectToRoutePath,T=e.handleInstanceDrawer,g=e.setIsOpenDeleteInstanceModal,E=e.dispatchKafkaAction,h=e.showMetrics;return o().createElement(c.BrowserRouter,null,o().createElement(i.I18nextProvider,{i18n:s.Z},o().createElement(r.E.Provider,{value:{basePath:a,getToken:t}},o().createElement(l.J.Provider,{value:{kafkaName:n,kafkaPageLink:m,onError:u,onConnectToRoute:d,getConnectToRoutePath:k,handleInstanceDrawer:T,setIsOpenDeleteInstanceModal:g,dispatchKafkaAction:E,showMetrics:h}},o().createElement(p.OU,null,o().createElement(f,{onCreateTopic:function(){E&&E(b.wT.CreateTopic)},onEditTopic:function(e){E&&E(b.wT.UpdateTopic,e)},activeTab:1}))))))}}}]);
//# sourceMappingURL=557.66474ca1.bundle.js.map
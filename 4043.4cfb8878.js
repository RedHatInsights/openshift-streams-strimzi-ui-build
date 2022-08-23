"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4043],{2766:(e,a,t)=>{t.d(a,{$:()=>d});var s=t(85893),n=t(93264),i=t(30645),o=t(73685),c=t(28188),r=t(64517);const d=({activeTabKey:e})=>{const{t:a}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]),t=(0,o.useHistory)(),{kafkaPageLink:d,kafkaName:l,handleInstanceDrawer:b,onDeleteInstance:k}=(0,r.S)()||{},[m,u]=(0,n.useState)(),g=e=>{b&&b(!0,e)},p=(0,s.jsxs)(c.Breadcrumb,Object.assign({ouiaId:"breadcrumb"},{children:[(0,s.jsx)(c.BreadcrumbItem,{render:()=>(0,s.jsx)(o.Link,Object.assign({to:d||"#"},{children:a("common.kafka_instance")}))}),(0,s.jsx)(c.BreadcrumbItem,Object.assign({to:"#",isActive:!0},{children:l||a("common.kafka_instance_name")}))]})),h=[(0,s.jsx)(c.DropdownItem,Object.assign({onClick:()=>g("details")},{children:a("common.view_instance")}),"view-kafka"),(0,s.jsx)(c.DropdownItem,Object.assign({onClick:()=>g("connection")},{children:a("common.view_connection")}),"connect-kafka"),(0,s.jsx)(c.DropdownItem,Object.assign({onClick:k},{children:a("common.delete_instance")}),"delete-kafka")];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:p})),(0,s.jsx)(c.PageSection,Object.assign({variant:c.PageSectionVariants.light},{children:(0,s.jsxs)(c.Level,{children:[(0,s.jsx)(c.Title,Object.assign({headingLevel:"h1"},{children:l||a("common.kafka_instance_name")})),(0,s.jsx)(c.Dropdown,{onSelect:()=>{u(!m)},toggle:(0,s.jsx)(c.KebabToggle,{"data-ouia-component-id":"kebab-menu",onToggle:e=>{u(e)},id:"toggle-data-plane"}),isOpen:m,isPlain:!0,dropdownItems:h,position:c.DropdownPosition.right})]})})),(0,s.jsx)(c.PageSection,Object.assign({variant:c.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,s.jsxs)(c.Tabs,Object.assign({activeKey:e,onSelect:(e,a)=>{let s;switch(a){case 1:default:s="dashboard";break;case 2:s="topics";break;case 3:s="consumer-groups";break;case 4:s="acls"}t.push(s)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},{children:[(0,s.jsx)(c.Tab,{title:(0,s.jsx)(c.TabTitleText,{children:a("dashboard.dashboard")}),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":a("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard",ouiaId:"tab-Dashboard"}),(0,s.jsx)(c.Tab,{title:(0,s.jsx)(c.TabTitleText,{children:a("topic.topics")}),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":a("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList",ouiaId:"tab-Topics"}),(0,s.jsx)(c.Tab,{title:(0,s.jsx)(c.TabTitleText,{children:a("consumerGroup.consumer_groups")}),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":a("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList",ouiaId:"tab-Consumers"}),(0,s.jsx)(c.Tab,{title:(0,s.jsx)(c.TabTitleText,{children:a("permission.tab.label")}),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":a("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions",ouiaId:"tab-Permissions"})]}))}))]})}},64517:(e,a,t)=>{t.d(a,{J:()=>n,S:()=>i});var s=t(93264);const n=t.n(s)().createContext(void 0),i=()=>(0,s.useContext)(n)},48845:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var s=t(85893),n=t(28188),i=t(63850),o=t(10500),c=t(82639),r=t(2766),d=t(68640),l=t(3654),b=t(64517),k=t(50834);const m=({kafkaName:e,kafkaPageLink:a,handleInstanceDrawer:t,redirectAfterDeleteInstance:m,kafka:u,onError:g,apiBasePath:p,getToken:h})=>{const{showModal:j}=(0,k.useModal)();return(0,s.jsx)(l.E.Provider,Object.assign({value:{basePath:p,getToken:h}},{children:(0,s.jsx)(b.J.Provider,Object.assign({value:{kafkaName:e,kafkaPageLink:a,handleInstanceDrawer:t,kafka:u,redirectAfterDeleteInstance:m,onError:g,onDeleteInstance:()=>{j&&j(k.ModalType.KasDeleteInstance,{kafka:u,onDelete:m})}}},{children:(0,s.jsx)(o.ModalProvider,{children:(0,s.jsxs)(c.bN,{children:[(0,s.jsx)(r.$,{activeTabKey:3}),(0,s.jsxs)(n.PageSection,Object.assign({hasOverflowScroll:!0},{children:[(0,s.jsx)(i.J,{consumerGroupByTopic:!1}),(0,s.jsx)(d.J,{})]}))]})})}))}))}}}]);
//# sourceMappingURL=4043.4cfb8878.js.map
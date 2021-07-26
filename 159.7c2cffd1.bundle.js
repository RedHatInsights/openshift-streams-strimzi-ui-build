(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[159],{42159:(e,t,a)=>{"use strict";a.d(t,{v:()=>w});var n=a(97522),o=a.n(n),i=a(38936),r=a(10107),l=a(55399),c=a(51826),s=a(72721),u=a(89941),p=a(4426),m=a(19937),d=a(37009),g=a(66057),f=a(22273),b=function(e){var t=e.total,a=void 0===t?0:t,l=e.page,c=e.perPage,s=e.setFilteredValue,u=e.filteredValue,p=void 0===u?"":u,d=e.onCreateTopic,b=(0,i.useTranslation)().t,h=(0,n.useState)(""),v=h[0],k=h[1],T=o().createElement(o().Fragment,null,o().createElement(r.ToolbarFilter,{chips:p?[p]:[],deleteChip:function(){s("")},categoryName:""},o().createElement(r.InputGroup,null,o().createElement(r.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":b("topic.topic_search_input"),placeholder:b("common.search"),value:v,onChange:function(e){k(e)}}),o().createElement(r.Button,{variant:r.ButtonVariant.control,isDisabled:!v.length,onClick:function(){s(v),k("")},"aria-label":b("topic.topic_search")},o().createElement(g.SearchIcon,null))))),E=[{item:o().createElement(r.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:d},b("topic.create_topic"))}];return a>0&&E.push({item:o().createElement(m.w,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:a,page:l,perPage:c,titles:{paginationTitle:b("common.minimal_pagination"),perPageSuffix:b("common.per_page_suffix"),toFirstPage:b("common.to_first_page"),toPreviousPage:b("common.to_previous_page"),toLastPage:b("common.to_last_page"),toNextPage:b("common.to_next_page"),optionsToggle:b("common.options_toggle"),currPage:b("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),o().createElement(f.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){s("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:T,toolbarItems:E})},h=a(53555),v=a(18416),k=function(e){var t,a=e.total,n=e.page,c=e.perPage,g=e.setFilteredValue,f=e.filteredValue,k=e.onCreateTopic,T=e.topicItems,E=e.rowDataTestId,_=e.onEdit,y=e.onDeleteTopic,P=e.refreshTopics,C=e.onSort,w=e.sortBy,S=(0,i.useTranslation)().t,I=(0,v.QK)().showModal,N=(0,d.S)(),x=N.onConnectToRoute,D=N.getConnectToRoutePath,B=[{title:S("common.name")},{title:S("common.partitions"),transforms:[s.sortable]},{title:S("topic.retention_time"),transforms:[s.sortable]},{title:S("topic.retention_size"),transforms:[s.sortable]}],L=function(e,t,a){var n,o,i,r,l,c=t.name,s=void 0===c?"":c;"delete"===a?(l=s,I(v.Ny.DELETE_TOPIC,{topicName:l,onDeleteTopic:y,refreshTopics:P})):"edit"===a&&_&&_(s),null===(r=null===(i=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===i?void 0:i.previousSibling)||void 0===r||r.focus()},F=(t=[],null==T||T.map((function(e){var a,n,i=e.name,r=e.partitions,c=e.config;t.push({cells:[{title:o().createElement(l.Link,{"data-testid":"tableTopics-linkTopic",to:D&&D("topics/"+i,i)||"",onClick:function(e){e.preventDefault(),x&&x("topics/"+i)}},i)},null==r?void 0:r.length,(0,h.B4)(Number((null===(a=null==c?void 0:c.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===a?void 0:a.value)||0)),(0,h.yI)(Number((null===(n=null==c?void 0:c.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===n?void 0:n.value)||0))],originalData:e})})),t);return o().createElement(o().Fragment,null,o().createElement(b,{total:a,page:n,perPage:c,onCreateTopic:k,setFilteredValue:g,filteredValue:f}),o().createElement(u.w,{tableProps:{cells:B,rows:F,"aria-label":S("topic.topic_list_table"),actionResolver:function(e){var t,a,n=e.originalData;return[(t={title:S("common.delete")},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(e){return L(e,n,"delete")},t),(a={title:S("common.edit")},a["data-testid"]="tableTopics-actionEdit",a.onClick=function(e){return L(e,n,"edit")},a)]},shouldDefaultCustomRowWrapper:!0,variant:s.TableVariant.compact,onSort:C,sortBy:w},rowDataTestId:E||"tableTopics-row"}),(null==T?void 0:T.length)<1&&f.length>0&&o().createElement(p.u,{emptyStateProps:{variant:p.j.NoResult},titleProps:{title:S("common.no_results_title")},emptyStateBodyProps:{body:S("common.no_results_body")}}),a>0&&o().createElement(m.w,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:a,variant:r.PaginationVariant.bottom,page:n,perPage:c,titles:{paginationTitle:S("common.full_pagination"),perPageSuffix:S("common.per_page_suffix"),toFirstPage:S("common.to_first_page"),toPreviousPage:S("common.to_previous_page"),toLastPage:S("common.to_last_page"),toNextPage:S("common.to_next_page"),optionsToggle:S("common.options_toggle"),currPage:S("common.curr_page")}}))},T=a(87887),E=a(71302),_=a(26585),y=a(57473),P=function(e){var t=e.onCreateTopic,a=e.onEditTopic,s=(0,d.S)(),u=s.dispatchKafkaAction,m=s.onError,g=(0,i.useTranslation)().t,f=(0,y.useAlert)().addAlert,b=(0,n.useContext)(_.E),v=(0,l.useLocation)(),P=new URLSearchParams(v.search),C=parseInt(P.get("page")||"",10)||1,w=parseInt(P.get("perPage")||"",10)||10,S=(0,n.useState)(),I=(S[0],S[1]),N=(0,n.useState)(),x=N[0],D=N[1],B=(0,n.useState)(""),L=B[0],F=B[1],K=(0,n.useState)(0),V=K[0],R=K[1],G=(0,n.useState)(),A=G[0],M=G[1],O=(0,n.useState)(),j=O[0],z=O[1],J=(0,n.useState)({index:0,direction:"asc"}),Q=J[0],U=J[1];(0,n.useEffect)((function(){W()}),[L,A,j]),(0,c.K)((function(){return W()}),5e3),(0,n.useEffect)((function(){var e=Number(w)*Number(C-1);R(e)}),[C,w]);var W=function(){return e=void 0,t=void 0,n=function(){var e;return function(e,t){var a,n,o,i,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,n=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){r.label=i[1];break}if(6===i[0]&&r.label<o[1]){r.label=o[1],o=i;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(i);break}o[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],n=0}finally{a=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(0,E.BB)(b,100,w,L,V,A,j).then((function(e){I(e),D(null==e?void 0:e.items)}))];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),m&&401===e.response.data.code?m(e.response.data.code,e.response.data.error_message):f({title:e.response.data.error_message,variant:r.AlertVariant.danger}),[3,3];case 3:return[2]}}))},new((a=void 0)||(a=Promise))((function(o,i){function r(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,l)}c((n=n.apply(e,t||[])).next())}));var e,t,a,n};return o().createElement(o().Fragment,null,o().createElement(r.Card,{className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},void 0===x?o().createElement(r.PageSection,{className:"kafka-ui-m-full-height",variant:r.PageSectionVariants.light,padding:{default:"noPadding"}},o().createElement(T.y,null)):x.length<1&&L.length<1?o().createElement(p.u,{emptyStateProps:{variant:p.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:g("topic.empty_topics_title")},emptyStateBodyProps:{body:g("topic.empty_topics_body")},buttonProps:{title:g("topic.create_topic"),onClick:function(){t&&t(),u&&u(h.wT.CreateTopic)},"data-testid":"actionCreateTopic"}}):x?o().createElement(k,{total:x.length||0,page:C,perPage:w,onCreateTopic:t,topicItems:L?null==x?void 0:x.slice(0,w):null==x?void 0:x.slice(V,V+w),filteredValue:L,setFilteredValue:F,refreshTopics:W,onEdit:a,onSort:function(e,t,a){z({0:"name",1:"partitions",2:"retention.ms",3:"retention.bytes"}[t]),M(a),U({index:t,direction:a})},sortBy:Q}):o().createElement(o().Fragment,null)))},C=a(45546),w=(a(41781),function(e){var t=e.onCreateTopic,a=e.onEditTopic,l=e.activeTab,c=(0,i.useTranslation)().t,s=(0,d.S)(),u=s.kafkaPageLink,p=s.kafkaName,m=s.handleInstanceDrawer,g=s.setIsOpenDeleteInstanceModal,f=s.showMetrics,b=(0,n.useState)(l),h=b[0],v=b[1],k=o().createRef(),T=o().createRef(),E=o().createRef(),_=(0,n.useState)(),y=_[0],w=_[1],S=function(e){m&&m(!0,e)},I=[o().createElement(r.DropdownItem,{key:"view-kafka",onClick:function(){return S("details")}},c("common.view_instance")),o().createElement(r.DropdownItem,{key:"connect-kafka",onClick:function(){return S("connection")}},c("common.view_connection")),o().createElement(r.DropdownItem,{key:"delete-kafka",onClick:function(){g&&g(!0)}},c("common.delete_instance"))],N=o().createElement(r.Breadcrumb,null,o().createElement(r.BreadcrumbItem,{to:u||"#"},c("common.kafka_instance")),o().createElement(r.BreadcrumbItem,{to:"#",isActive:!0},p||c("common.kafka_instance_name")));return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},N),o().createElement(r.PageSection,{variant:r.PageSectionVariants.light},o().createElement(r.Level,null,o().createElement(r.Title,{headingLevel:"h1"},p||c("common.kafka_instance_name")),o().createElement(r.Dropdown,{onSelect:function(){w(!y)},toggle:o().createElement(r.KebabToggle,{onToggle:function(e){w(e)},id:"toggle-data-plane"}),isOpen:y,isPlain:!0,dropdownItems:I,position:r.DropdownPosition.right}))),o().createElement(r.PageSection,{variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(r.Tabs,{activeKey:h,onSelect:function(e,t){v(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(r.Tab,{title:o().createElement(r.TabTitleText,null,c("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":c("dashboard.dashboard"),tabContentRef:E,tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(r.Tab,{title:o().createElement(r.TabTitleText,null,c("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":c("topic.topics"),tabContentRef:T,tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(r.Tab,{title:o().createElement(r.TabTitleText,null,c("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":c("consumerGroup.consumer_groups"),tabContentRef:k,tabContentId:"kafka-ui-TabcontentConsumersList"}))),o().createElement(r.PageSection,{isFilled:!0},o().createElement(r.TabContent,{eventKey:1,ref:E,id:"kafka-ui-TabcontentDashboard",className:"kafka-ui-m-full-height","aria-label":c("dashboard.dashboard")},f),o().createElement(r.TabContent,{eventKey:2,ref:T,id:"kafka-ui-TabcontentTopicsList",className:"kafka-ui-m-full-height","aria-label":c("topic.topics"),hidden:!0},o().createElement(P,{onCreateTopic:t,onEditTopic:a})),o().createElement(r.TabContent,{eventKey:3,ref:k,id:"kafka-ui-TabcontentConsumersList",className:"kafka-ui-m-full-height","aria-label":c("consumerGroup.consumer_groups"),hidden:!0},o().createElement(C.J,{consumerGroupByTopic:!1}))))})}}]);
//# sourceMappingURL=159.7c2cffd1.bundle.js.map
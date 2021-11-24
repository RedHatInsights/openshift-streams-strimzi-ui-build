"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4242],{80358:()=>{},68640:(e,t,i)=>{i.d(t,{J:()=>r});var n=i(75418),a=i.n(n),o=i(31521),l=i(46332),r=function(){var e,t;return(0,(0,l.useModal)().registerModals)((t=(0,o.useTranslation)().t,(e={})[l.ModalType.KafkaDeleteTopic]={lazyComponent:a().lazy((function(){return Promise.all([i.e(2625),i.e(7577),i.e(7290)]).then(i.bind(i,37290))})),variant:"small"},e[l.ModalType.KafkaUpdatePartitions]={lazyComponent:a().lazy((function(){return i.e(1356).then(i.bind(i,21356))})),variant:"small"},e[l.ModalType.KafkaDeleteConsumerGroup]={lazyComponent:a().lazy((function(){return Promise.all([i.e(2625),i.e(7577),i.e(2546)]).then(i.bind(i,12546))})),variant:"small"},e[l.ModalType.KafkaConsumerGroupResetOffset]={lazyComponent:a().lazy((function(){return Promise.all([i.e(2625),i.e(7577),i.e(9861)]).then(i.bind(i,29861))})),variant:"large"},e[l.ModalType.KafkaManagePermissions]={lazyComponent:a().lazy((function(){return Promise.all([i.e(5177),i.e(3883),i.e(2356),i.e(2625),i.e(7577),i.e(6235),i.e(251),i.e(3324),i.e(9603)]).then(i.bind(i,95640))})),variant:"large",title:t("permission.manage_permissions_dialog.title")},e)),a().createElement(a().Fragment,null)}},4055:(e,t,i)=>{i.d(t,{y:()=>r});var n=i(75418),a=i.n(n),o=i(84669),l=function(){return l=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},r=function(e){var t=e.bullseyeProps,i=e.spinnerProps;return a().createElement(o.Bullseye,l({},t),a().createElement(o.Spinner,l({},i)))}},82639:(e,t,i)=>{i.d(t,{hI:()=>p,bN:()=>s,wu:()=>m});var n=i(75418),a=i.n(n),o=i(84669),l=function(){return l=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},r=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i},c=(0,n.createContext)(void 0),p=function(){return(0,n.useContext)(c)},s=function(e){var t=e.children,i=(0,n.useState)(1),o=i[0],l=i[1],r=(0,n.useState)(10),p=r[0],s=r[1];return a().createElement(c.Provider,{value:{page:o,perPage:p,setPage:l,setPerPage:s}},t)},m=function(e){var t=e.itemCount,i=e.variant,c=void 0===i?o.PaginationVariant.top:i,s=e.isCompact,m=e.titles,d=r(e,["itemCount","variant","isCompact","titles"]),u=p()||{},f=u.setPage,_=u.setPerPage,b=u.perPage,g=u.page,v=(0,n.useCallback)((function(e,t){f&&f(t)}),[]),y=(0,n.useCallback)((function(e,t){f&&f(1),_&&_(t)}),[]);return a().createElement(o.Pagination,l({itemCount:t,perPage:b,page:g,onSetPage:v,variant:c,onPerPageSelect:y,isCompact:s},d,{titles:m}))}},13985:(e,t,i)=>{i.d(t,{I:()=>r});var n=i(75418),a=i.n(n),o=i(31521),l=i(84669),r=(i(80358),function(e){var t=e.topicName,i=e.kafkaName,n=e.kafkaInstanceLink,r=e.kafkaPageLink,c=(0,o.useTranslation)().t;return a().createElement(a().Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(l.Breadcrumb,null,a().createElement(l.BreadcrumbItem,{to:r||"#"},c("common.kafka_instance")),a().createElement(l.BreadcrumbItem,{to:n||"#"},i||c("common.kafka_instance_name")),a().createElement(l.BreadcrumbItem,null,t))),a().createElement(l.PageSection,{variant:l.PageSectionVariants.light},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.h1},t))))})},8903:(e,t,i)=>{i.d(t,{o:()=>h});var n=i(75418),a=i.n(n),o=i(98068),l=i(31521),r=i(84669),c=i(46332),p=i(86737),s=(i(80358),i(39806)),m=i(1787),d=function(e){var t=e.topic,i=e.deleteTopic,n=(0,o.useHistory)(),d=(0,o.useParams)().topicName,u=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),f=(0,l.useTranslation)().t;return a().createElement(r.PageSection,{padding:{default:"noPadding"}},a().createElement(r.Sidebar,{hasGutter:!0},a().createElement(r.SidebarPanel,{variant:"sticky"},a().createElement(r.JumpLinks,{isVertical:!0,label:f("topic.jump_to_section"),offset:-164,style:{position:"sticky"},scrollableSelector:'.pf-c-page__main[tabindex="-1"]'},a().createElement(r.JumpLinksItem,{key:0,href:"#core-configuration"},f("topic.core_configuration")),a().createElement(r.JumpLinksItem,{key:1,href:"#messages"},f("topic.messages")),a().createElement(r.JumpLinksItem,{key:2,href:"#log"},f("topic.log")),a().createElement(r.JumpLinksItem,{key:3,href:"#replication"},f("topic.replication")),a().createElement(r.JumpLinksItem,{key:4,href:"#cleanup"},f("common.cleanup")),a().createElement(r.JumpLinksItem,{key:5,href:"#index"},f("topic.index")),a().createElement(r.JumpLinksItem,{key:6,href:"#flush"},f("topic.flush")),a().createElement(r.JumpLinksItem,{key:7,href:"#delete"},f("common.delete")))),a().createElement(r.SidebarContent,null,a().createElement(r.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},a().createElement(r.PageSection,{padding:{default:"noPadding"}},a().createElement(r.Split,null,a().createElement(r.SplitItem,{isFilled:!0},a().createElement(r.Form,{id:"topic-form"},a().createElement(r.FormSection,{title:f("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.core_config_info"))),a().createElement(s.R,{fieldId:"topic-name",btnAriaLabel:f("common.name"),fieldLabel:f("topic.topic_name"),fieldValue:t.name,popoverBody:f("topic.topic_name_description"),popoverHeader:f("topic.topic_name")}),a().createElement(s.R,{fieldId:"partitions",btnAriaLabel:f("topic.partitions"),fieldLabel:f("topic.partitions"),fieldValue:t.numPartitions,popoverBody:f("topic.partitions_description"),popoverHeader:f("topic.partitions")}),a().createElement(s.R,{fieldId:"replicas",btnAriaLabel:f("topic.replicas"),fieldLabel:f("topic.replicas"),fieldValue:t.replicationFactor,popoverBody:f("topic.replicas_description"),popoverHeader:f("topic.replicas")}),a().createElement(s.R,{fieldId:"min-insync-replicas",btnAriaLabel:f("topic.min_insync_replicas"),fieldLabel:f("topic.min_insync_replicas"),fieldValue:p.MO,popoverBody:f("topic.min_insync_replicas_description"),popoverHeader:f("topic.min_insync_replicas")}),a().createElement(s.R,{fieldId:"retention-time",btnAriaLabel:f("topic.retention_time"),fieldLabel:f("topic.retention_time"),fieldValue:(0,m.eA)(Number(t["retention.ms"])),popoverBody:f("topic.retention_time_description"),popoverHeader:f("topic.retention_time"),showUnlimited:!0}),a().createElement(s.R,{fieldId:"retention-size",btnAriaLabel:f("topic.retention_size"),fieldLabel:f("topic.retention_size"),fieldValue:(0,m.Cv)(Number(t["retention.bytes"])),popoverHeader:f("topic.retention_size"),popoverBody:f("topic.retention_size_description"),showUnlimited:!0})),a().createElement(r.FormSection,{title:f("topic.messages"),id:"messages",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.message_section_info"))),a().createElement(s.R,{fieldId:"max-message-size",btnAriaLabel:f("topic.max_message_size"),fieldLabel:f("topic.max_message_size"),fieldValue:p._$,popoverBody:f("topic.max_message_size_description"),popoverHeader:f("topic.max_message_size")}),a().createElement(s.R,{fieldId:"message-timestamp-type",btnAriaLabel:f("topic.message_timestamp_type"),fieldLabel:f("topic.message_timestamp_type"),fieldValue:p.K,popoverBody:f("topic.message_timestamp_type_description"),popoverHeader:f("topic.message_timestamp_type")}),a().createElement(s.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:f("topic.max_message_timestamp_diff"),fieldLabel:f("topic.max_message_timestamp_diff"),fieldValue:p.Y,popoverBody:f("topic.max_message_timestamp_diff_description"),popoverHeader:f("topic.max_message_timestamp_diff")}),a().createElement(s.R,{fieldId:"compression-type",btnAriaLabel:f("topic.compression_type"),fieldLabel:f("topic.compression_type"),fieldValue:"Producer",popoverBody:f("topic.compression_type_description"),popoverHeader:f("topic.compression_type")}),a().createElement(s.R,{fieldId:"message-format",btnAriaLabel:f("topic.message_format"),fieldLabel:f("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:f("topic.message_format_description"),popoverHeader:f("topic.message_format")})),a().createElement(r.FormSection,{title:f("topic.log"),id:"log",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p},f("topic.log_section_info"),a().createElement(r.Text,{component:r.TextVariants.small,className:"section-info-note"},f("topic.log_section_info_note")))),a().createElement(s.R,{fieldId:"cleanup-policy",btnAriaLabel:f("topic.cleanup_policy"),fieldLabel:f("topic.cleanup_policy"),fieldValue:t["cleanup.policy"],popoverBody:f("topic.cleanup_policy_description"),popoverHeader:f("topic.cleanup_policy")}),a().createElement(s.R,{fieldId:"delete-retention-time",btnAriaLabel:f("topic.delete_retention_time"),fieldLabel:f("topic.delete_retention_time"),fieldValue:p.sN,popoverBody:f("topic.delete_retention_time_description"),popoverHeader:f("topic.delete_retention_time")}),a().createElement(s.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:f("topic.min_cleanable_ratio"),fieldLabel:f("topic.min_cleanable_ratio"),fieldValue:p.PT,popoverBody:f("topic.min_cleanable_ratio_description"),popoverHeader:f("topic.min_cleanable_ratio")}),a().createElement(s.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:f("topic.min_compaction_lag_time"),fieldLabel:f("topic.min_compaction_lag_time"),fieldValue:p.A7,popoverBody:f("topic.min_compaction_lag_time_description"),popoverHeader:f("topic.min_compaction_lag_time")})),a().createElement(r.FormSection,{title:f("topic.replication"),id:"replication",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p},f("topic.replication_section_info"),a().createElement(r.Text,{component:r.TextVariants.small},f("topic.replication_section_info_note")))),a().createElement(s.R,{fieldId:"unclean-leader-election",btnAriaLabel:f("topic.unclean_leader_election"),fieldLabel:f("topic.unclean_leader_election"),fieldValue:f("common.disabled"),popoverBody:f("topic.unclean_leader_election_description"),popoverHeader:f("topic.unclean_leader_election")})),a().createElement(r.FormSection,{title:f("common.cleanup"),id:"cleanup",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.cleanup_section_info"))),a().createElement(s.R,{fieldId:"log-segment-size",btnAriaLabel:f("topic.log_segment_size"),fieldLabel:f("topic.log_segment_size"),fieldValue:p.f8,popoverBody:f("topic.log_segment_size_description"),popoverHeader:f("topic.log_segment_size")}),a().createElement(s.R,{fieldId:"segement-time",btnAriaLabel:f("topic.segement_time"),fieldLabel:f("topic.segement_time"),fieldValue:p.$$,popoverBody:f("topic.segement_time_description"),popoverHeader:f("topic.segement_time")}),a().createElement(s.R,{fieldId:"segment-jitter-time",btnAriaLabel:f("topic.segment_jitter_time"),fieldLabel:f("topic.segment_jitter_time"),fieldValue:p.W$,popoverBody:f("topic.segment_jitter_time_description"),popoverHeader:f("topic.segment_jitter_time")}),a().createElement(s.R,{fieldId:"file-delete-delay",btnAriaLabel:f("topic.file_delete_delay"),fieldLabel:f("topic.file_delete_delay"),fieldValue:p.pJ,popoverBody:f("topic.file_delete_delay_description"),popoverHeader:f("topic.file_delete_delay")}),a().createElement(s.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:f("topic.preallocate_log_segment_files"),fieldLabel:f("topic.preallocate_log_segment_files"),fieldValue:f("common.disabled"),popoverBody:f("topic.preallocate_log_segment_files_description"),popoverHeader:f("topic.preallocate_log_segment_files")})),a().createElement(r.FormSection,{title:f("topic.index"),id:"index",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.index_section_info"))),a().createElement(s.R,{fieldId:"index-interval-size",btnAriaLabel:f("topic.index_interval_size"),fieldLabel:f("topic.index_interval_size"),fieldValue:p.Q_,popoverBody:f("topic.index_interval_size_description"),popoverHeader:f("topic.index_interval_size")}),a().createElement(s.R,{fieldId:"segment-index-size",btnAriaLabel:f("topic.segment_index_size"),fieldLabel:f("topic.segment_index_size"),fieldValue:p.nL,popoverBody:f("topic.segment_index_size_description"),popoverHeader:f("topic.segment_index_size")})),a().createElement(r.FormSection,{title:f("topic.flush"),id:"flush",titleElement:"h2"},a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.flush_section_info"))),a().createElement(s.R,{fieldId:"flush-interval-messages",btnAriaLabel:f("topic.flush_interval_messages"),fieldLabel:f("topic.flush_interval_messages"),fieldValue:p.mr,popoverBody:f("topic.flush_interval_messages_description"),popoverHeader:f("topic.flush_interval_messages")}),a().createElement(s.R,{fieldId:"flush-interval-time",btnAriaLabel:f("topic.flush_interval_time"),fieldLabel:f("topic.flush_interval_time"),fieldValue:p.qh,popoverBody:f("topic.flush_interval_time_description"),popoverHeader:f("topic.flush_interval_time")}))),a().createElement(r.Divider,{className:"kafka-ui-divider__Margin"}),a().createElement(r.TextContent,null,a().createElement(r.Text,{component:r.TextVariants.h2,id:"delete"},f("topic.delete_topic")),a().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},f("topic.delete_topic_info")),a().createElement(r.Button,{variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},f("common.delete_topic")))),a().createElement(r.SplitItem,null,a().createElement(r.Button,{variant:"primary",onClick:function(){n.push("".concat(u,"/topic/update/").concat(d))},"data-testid":"tabProperties-actionEdit"},f("common.edit_props")))))))))},u=i(13985),f=i(60540),_=i(64517),b=i(3654),g=i(70705),v=i(5736),y=(i(41781),function(e,t,i,n){return new(i||(i=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((n=n.apply(e,t||[])).next())}))}),E=function(e,t){var i,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},h=function(){var e=(0,_.S)()||{},t=e.activeTab,i=void 0===t?2:t,p=e.kafkaName,s=e.kafkaPageLink,m=e.kafkaInstanceLink,h=e.onError,k=e.showSchemas,T=(0,o.useHistory)(),x=(0,o.useParams)().topicName,L=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),P=(0,n.useState)({name:x,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""}),I=P[0],C=P[1],V=(0,n.useState)(i),S=V[0],B=V[1],z=(0,n.useContext)(b.E),R=((0,c.useAlert)()||{addAlert:function(){}}).addAlert,A=(0,l.useTranslation)().t,w=a().createRef(),H=a().createRef(),N=a().createRef(),O=(0,c.useModal)().showModal,j=function(){T.push(L)};(0,n.useEffect)((function(){!function(e){y(void 0,void 0,void 0,(function(){var t,n,a,o;return E(this,(function(l){switch(l.label){case 0:if(2!==i)return[3,4];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,f.Rh)(e,z).then((function(e){C(e)}))];case 2:return l.sent(),[3,4];case 3:return t=l.sent(),(0,v.I)(t)&&(h&&h((null===(n=t.response)||void 0===n?void 0:n.data.code)||-1,null===(a=t.response)||void 0===a?void 0:a.data.error_message),404===(null===(o=t.response)||void 0===o?void 0:o.status)&&R({title:A("topic.topic_not_found",{name:e}),variant:r.AlertVariant.danger})),[3,4];case 4:return[2]}}))}))}(x)}),[x]);return a().createElement(a().Fragment,null,a().createElement(u.I,{topicName:x,kafkaName:p,kafkaPageLink:s,kafkaInstanceLink:m}),a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},a().createElement(r.Tabs,{activeKey:S,onSelect:function(e,t){B(t)},isBox:!1,className:"pf-m-page-insets"},a().createElement(r.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:a().createElement(r.TabTitleText,null,A("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:w}),a().createElement(r.Tab,{eventKey:2,title:a().createElement(r.TabTitleText,null,A("common.properties")),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:H}),a().createElement(r.Tab,{eventKey:3,title:a().createElement(r.TabTitleText,null,A("common.schemas")),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:N}))),a().createElement(r.PageSection,{variant:2===S?r.PageSectionVariants.light:r.PageSectionVariants.default},a().createElement(r.TabContent,{eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:w,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:1!=S},a().createElement(g.ConsumerGroups,{consumerGroupByTopic:!0,topic:x,rowDataTestId:"tableTopicConsumers-row"})),a().createElement(r.TabContent,{eventKey:2,id:"kafka-ui-TabcontentProperties",ref:H,className:"kafka-ui-m-full-height","aria-label":"Topic properties.",hidden:2!=S},a().createElement(d,{topic:I,deleteTopic:function(){O(c.ModalType.KafkaDeleteTopic,{topicName:x,onDeleteTopic:j})}})),a().createElement(r.TabContent,{eventKey:3,id:"kafka-ui-TabSchemas",ref:N,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:3!=S},k)))}}}]);
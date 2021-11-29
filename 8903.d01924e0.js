"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8903],{80358:()=>{},13985:(e,t,i)=>{i.d(t,{I:()=>c});var n=i(75418),a=i.n(n),o=i(31521),l=i(84669),c=(i(80358),function(e){var t=e.topicName,i=e.kafkaName,n=e.kafkaInstanceLink,c=e.kafkaPageLink,r=(0,o.useTranslation)().t;return a().createElement(a().Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(l.Breadcrumb,null,a().createElement(l.BreadcrumbItem,{to:c||"#"},r("common.kafka_instance")),a().createElement(l.BreadcrumbItem,{to:n||"#"},i||r("common.kafka_instance_name")),a().createElement(l.BreadcrumbItem,null,t))),a().createElement(l.PageSection,{variant:l.PageSectionVariants.light},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.h1},t))))})},8903:(e,t,i)=>{i.d(t,{o:()=>h});var n=i(75418),a=i.n(n),o=i(98068),l=i(31521),c=i(84669),r=i(46332),p=i(86737),s=(i(80358),i(39806)),m=i(1787),d=function(e){var t=e.topic,i=e.deleteTopic,n=(0,o.useHistory)(),d=(0,o.useParams)().topicName,f=(0,((0,r.useBasename)()||{getBasename:function(){return""}}).getBasename)(),_=(0,l.useTranslation)().t;return a().createElement(c.PageSection,{padding:{default:"noPadding"}},a().createElement(c.Sidebar,{hasGutter:!0},a().createElement(c.SidebarPanel,{variant:"sticky"},a().createElement(c.JumpLinks,{isVertical:!0,label:_("topic.jump_to_section"),offset:-164,style:{position:"sticky"},scrollableSelector:'.pf-c-page__main[tabindex="-1"]'},a().createElement(c.JumpLinksItem,{key:0,href:"#core-configuration"},_("topic.core_configuration")),a().createElement(c.JumpLinksItem,{key:1,href:"#messages"},_("topic.messages")),a().createElement(c.JumpLinksItem,{key:2,href:"#log"},_("topic.log")),a().createElement(c.JumpLinksItem,{key:3,href:"#replication"},_("topic.replication")),a().createElement(c.JumpLinksItem,{key:4,href:"#cleanup"},_("common.cleanup")),a().createElement(c.JumpLinksItem,{key:5,href:"#index"},_("topic.index")),a().createElement(c.JumpLinksItem,{key:6,href:"#flush"},_("topic.flush")),a().createElement(c.JumpLinksItem,{key:7,href:"#delete"},_("common.delete")))),a().createElement(c.SidebarContent,null,a().createElement(c.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},a().createElement(c.PageSection,{padding:{default:"noPadding"}},a().createElement(c.Split,null,a().createElement(c.SplitItem,{isFilled:!0},a().createElement(c.Form,{id:"topic-form"},a().createElement(c.FormSection,{title:_("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.core_config_info"))),a().createElement(s.R,{fieldId:"topic-name",btnAriaLabel:_("common.name"),fieldLabel:_("topic.topic_name"),fieldValue:t.name,popoverBody:_("topic.topic_name_description"),popoverHeader:_("topic.topic_name")}),a().createElement(s.R,{fieldId:"partitions",btnAriaLabel:_("topic.partitions"),fieldLabel:_("topic.partitions"),fieldValue:t.numPartitions,popoverBody:_("topic.partitions_description"),popoverHeader:_("topic.partitions")}),a().createElement(s.R,{fieldId:"replicas",btnAriaLabel:_("topic.replicas"),fieldLabel:_("topic.replicas"),fieldValue:t.replicationFactor,popoverBody:_("topic.replicas_description"),popoverHeader:_("topic.replicas")}),a().createElement(s.R,{fieldId:"min-insync-replicas",btnAriaLabel:_("topic.min_insync_replicas"),fieldLabel:_("topic.min_insync_replicas"),fieldValue:p.MO,popoverBody:_("topic.min_insync_replicas_description"),popoverHeader:_("topic.min_insync_replicas")}),a().createElement(s.R,{fieldId:"retention-time",btnAriaLabel:_("topic.retention_time"),fieldLabel:_("topic.retention_time"),fieldValue:(0,m.eA)(Number(t["retention.ms"])),popoverBody:_("topic.retention_time_description"),popoverHeader:_("topic.retention_time"),showUnlimited:!0}),a().createElement(s.R,{fieldId:"retention-size",btnAriaLabel:_("topic.retention_size"),fieldLabel:_("topic.retention_size"),fieldValue:(0,m.Cv)(Number(t["retention.bytes"])),popoverHeader:_("topic.retention_size"),popoverBody:_("topic.retention_size_description"),showUnlimited:!0})),a().createElement(c.FormSection,{title:_("topic.messages"),id:"messages",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.message_section_info"))),a().createElement(s.R,{fieldId:"max-message-size",btnAriaLabel:_("topic.max_message_size"),fieldLabel:_("topic.max_message_size"),fieldValue:p._$,popoverBody:_("topic.max_message_size_description"),popoverHeader:_("topic.max_message_size")}),a().createElement(s.R,{fieldId:"message-timestamp-type",btnAriaLabel:_("topic.message_timestamp_type"),fieldLabel:_("topic.message_timestamp_type"),fieldValue:p.K,popoverBody:_("topic.message_timestamp_type_description"),popoverHeader:_("topic.message_timestamp_type")}),a().createElement(s.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:_("topic.max_message_timestamp_diff"),fieldLabel:_("topic.max_message_timestamp_diff"),fieldValue:p.Y,popoverBody:_("topic.max_message_timestamp_diff_description"),popoverHeader:_("topic.max_message_timestamp_diff")}),a().createElement(s.R,{fieldId:"compression-type",btnAriaLabel:_("topic.compression_type"),fieldLabel:_("topic.compression_type"),fieldValue:"Producer",popoverBody:_("topic.compression_type_description"),popoverHeader:_("topic.compression_type")}),a().createElement(s.R,{fieldId:"message-format",btnAriaLabel:_("topic.message_format"),fieldLabel:_("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:_("topic.message_format_description"),popoverHeader:_("topic.message_format")})),a().createElement(c.FormSection,{title:_("topic.log"),id:"log",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p},_("topic.log_section_info"),a().createElement(c.Text,{component:c.TextVariants.small,className:"section-info-note"},_("topic.log_section_info_note")))),a().createElement(s.R,{fieldId:"cleanup-policy",btnAriaLabel:_("topic.cleanup_policy"),fieldLabel:_("topic.cleanup_policy"),fieldValue:t["cleanup.policy"],popoverBody:_("topic.cleanup_policy_description"),popoverHeader:_("topic.cleanup_policy")}),a().createElement(s.R,{fieldId:"delete-retention-time",btnAriaLabel:_("topic.delete_retention_time"),fieldLabel:_("topic.delete_retention_time"),fieldValue:p.sN,popoverBody:_("topic.delete_retention_time_description"),popoverHeader:_("topic.delete_retention_time")}),a().createElement(s.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:_("topic.min_cleanable_ratio"),fieldLabel:_("topic.min_cleanable_ratio"),fieldValue:p.PT,popoverBody:_("topic.min_cleanable_ratio_description"),popoverHeader:_("topic.min_cleanable_ratio")}),a().createElement(s.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:_("topic.min_compaction_lag_time"),fieldLabel:_("topic.min_compaction_lag_time"),fieldValue:p.A7,popoverBody:_("topic.min_compaction_lag_time_description"),popoverHeader:_("topic.min_compaction_lag_time")})),a().createElement(c.FormSection,{title:_("topic.replication"),id:"replication",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p},_("topic.replication_section_info"),a().createElement(c.Text,{component:c.TextVariants.small},_("topic.replication_section_info_note")))),a().createElement(s.R,{fieldId:"unclean-leader-election",btnAriaLabel:_("topic.unclean_leader_election"),fieldLabel:_("topic.unclean_leader_election"),fieldValue:_("common.disabled"),popoverBody:_("topic.unclean_leader_election_description"),popoverHeader:_("topic.unclean_leader_election")})),a().createElement(c.FormSection,{title:_("common.cleanup"),id:"cleanup",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.cleanup_section_info"))),a().createElement(s.R,{fieldId:"log-segment-size",btnAriaLabel:_("topic.log_segment_size"),fieldLabel:_("topic.log_segment_size"),fieldValue:p.f8,popoverBody:_("topic.log_segment_size_description"),popoverHeader:_("topic.log_segment_size")}),a().createElement(s.R,{fieldId:"segement-time",btnAriaLabel:_("topic.segement_time"),fieldLabel:_("topic.segement_time"),fieldValue:p.$$,popoverBody:_("topic.segement_time_description"),popoverHeader:_("topic.segement_time")}),a().createElement(s.R,{fieldId:"segment-jitter-time",btnAriaLabel:_("topic.segment_jitter_time"),fieldLabel:_("topic.segment_jitter_time"),fieldValue:p.W$,popoverBody:_("topic.segment_jitter_time_description"),popoverHeader:_("topic.segment_jitter_time")}),a().createElement(s.R,{fieldId:"file-delete-delay",btnAriaLabel:_("topic.file_delete_delay"),fieldLabel:_("topic.file_delete_delay"),fieldValue:p.pJ,popoverBody:_("topic.file_delete_delay_description"),popoverHeader:_("topic.file_delete_delay")}),a().createElement(s.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:_("topic.preallocate_log_segment_files"),fieldLabel:_("topic.preallocate_log_segment_files"),fieldValue:_("common.disabled"),popoverBody:_("topic.preallocate_log_segment_files_description"),popoverHeader:_("topic.preallocate_log_segment_files")})),a().createElement(c.FormSection,{title:_("topic.index"),id:"index",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.index_section_info"))),a().createElement(s.R,{fieldId:"index-interval-size",btnAriaLabel:_("topic.index_interval_size"),fieldLabel:_("topic.index_interval_size"),fieldValue:p.Q_,popoverBody:_("topic.index_interval_size_description"),popoverHeader:_("topic.index_interval_size")}),a().createElement(s.R,{fieldId:"segment-index-size",btnAriaLabel:_("topic.segment_index_size"),fieldLabel:_("topic.segment_index_size"),fieldValue:p.nL,popoverBody:_("topic.segment_index_size_description"),popoverHeader:_("topic.segment_index_size")})),a().createElement(c.FormSection,{title:_("topic.flush"),id:"flush",titleElement:"h2"},a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.flush_section_info"))),a().createElement(s.R,{fieldId:"flush-interval-messages",btnAriaLabel:_("topic.flush_interval_messages"),fieldLabel:_("topic.flush_interval_messages"),fieldValue:p.mr,popoverBody:_("topic.flush_interval_messages_description"),popoverHeader:_("topic.flush_interval_messages")}),a().createElement(s.R,{fieldId:"flush-interval-time",btnAriaLabel:_("topic.flush_interval_time"),fieldLabel:_("topic.flush_interval_time"),fieldValue:p.qh,popoverBody:_("topic.flush_interval_time_description"),popoverHeader:_("topic.flush_interval_time")}))),a().createElement(c.Divider,{className:"kafka-ui-divider__Margin"}),a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.h2,id:"delete"},_("topic.delete_topic")),a().createElement(c.Text,{component:c.TextVariants.p,className:"section-info"},_("topic.delete_topic_info")),a().createElement(c.Button,{variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},_("common.delete_topic")))),a().createElement(c.SplitItem,null,a().createElement(c.Button,{variant:"primary",onClick:function(){n.push("".concat(f,"/topic/update/").concat(d))},"data-testid":"tabProperties-actionEdit"},_("common.edit_props")))))))))},f=i(13985),_=i(60540),u=i(64517),b=i(3654),g=i(70705),E=i(5736),v=(i(41781),function(e,t,i,n){return new(i||(i=Promise))((function(a,o){function l(e){try{r(n.next(e))}catch(e){o(e)}}function c(e){try{r(n.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,c)}r((n=n.apply(e,t||[])).next())}))}),y=function(e,t){var i,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},h=function(){var e=(0,u.S)()||{},t=e.activeTab,i=void 0===t?2:t,p=e.kafkaName,s=e.kafkaPageLink,m=e.kafkaInstanceLink,h=e.onError,k=e.showSchemas,T=(0,o.useHistory)(),x=(0,o.useParams)().topicName,L=(0,((0,r.useBasename)()||{getBasename:function(){return""}}).getBasename)(),I=(0,n.useState)({name:x,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""}),V=I[0],B=I[1],S=(0,n.useState)(i),R=S[0],A=S[1],C=(0,n.useContext)(b.E),P=((0,r.useAlert)()||{addAlert:function(){}}).addAlert,H=(0,l.useTranslation)().t,z=a().createRef(),N=a().createRef(),w=a().createRef(),F=(0,r.useModal)().showModal,J=function(){T.push("".concat(L,"/topics"))};(0,n.useEffect)((function(){!function(e){v(void 0,void 0,void 0,(function(){var t,n,a,o;return y(this,(function(l){switch(l.label){case 0:if(2!==i)return[3,4];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,_.Rh)(e,C).then((function(e){B(e)}))];case 2:return l.sent(),[3,4];case 3:return t=l.sent(),(0,E.I)(t)&&(h&&h((null===(n=t.response)||void 0===n?void 0:n.data.code)||-1,null===(a=t.response)||void 0===a?void 0:a.data.error_message),404===(null===(o=t.response)||void 0===o?void 0:o.status)&&P({title:H("topic.topic_not_found",{name:e}),variant:c.AlertVariant.danger})),[3,4];case 4:return[2]}}))}))}(x)}),[x]);return a().createElement(a().Fragment,null,a().createElement(f.I,{topicName:x,kafkaName:p,kafkaPageLink:s,kafkaInstanceLink:m}),a().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},a().createElement(c.Tabs,{activeKey:R,onSelect:function(e,t){A(t)},isBox:!1,className:"pf-m-page-insets"},a().createElement(c.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:a().createElement(c.TabTitleText,null,H("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:z}),a().createElement(c.Tab,{eventKey:2,title:a().createElement(c.TabTitleText,null,H("common.properties")),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:N}),a().createElement(c.Tab,{eventKey:3,title:a().createElement(c.TabTitleText,null,H("common.schemas")),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:w}))),a().createElement(c.PageSection,{variant:2===R?c.PageSectionVariants.light:c.PageSectionVariants.default},a().createElement(c.TabContent,{eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:z,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:1!=R},a().createElement(g.J,{consumerGroupByTopic:!0,topic:x,rowDataTestId:"tableTopicConsumers-row"})),a().createElement(c.TabContent,{eventKey:2,id:"kafka-ui-TabcontentProperties",ref:N,className:"kafka-ui-m-full-height","aria-label":"Topic properties.",hidden:2!=R},a().createElement(d,{topic:V,deleteTopic:function(){F(r.ModalType.KafkaDeleteTopic,{topicName:x,onDeleteTopic:J})}})),a().createElement(c.TabContent,{eventKey:3,id:"kafka-ui-TabSchemas",ref:w,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:3!=R},k)))}}}]);
//# sourceMappingURL=8903.d01924e0.js.map
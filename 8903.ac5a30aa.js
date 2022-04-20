"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8903],{43791:()=>{},13985:(e,i,t)=>{t.d(i,{I:()=>s});var a=t(85893),n=t(47412),o=t(99421);t(43791);const s=({topicName:e,kafkaName:i,kafkaInstanceLink:t,kafkaPageLink:s})=>{const{t:c}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:(0,a.jsxs)(o.Breadcrumb,{children:[(0,a.jsx)(o.BreadcrumbItem,Object.assign({to:s||"#"},{children:c("common.kafka_instance")})),(0,a.jsx)(o.BreadcrumbItem,Object.assign({to:t||"#"},{children:i||c("common.kafka_instance_name")})),(0,a.jsx)(o.BreadcrumbItem,{children:e})]})})),(0,a.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light},{children:(0,a.jsx)(o.TextContent,{children:(0,a.jsx)(o.Text,Object.assign({component:o.TextVariants.h1},{children:e}))})}))]})}},8903:(e,i,t)=>{t.d(i,{o:()=>v});var a=t(223),n=t(85893),o=t(75418),s=t.n(o),c=t(68199),l=t(47412),r=t(99421),p=t(7451),d=t(86737),m=(t(43791),t(76153)),_=t(1787);const f=({topic:e,deleteTopic:i})=>{const t=(0,c.useHistory)(),{topicName:a}=(0,c.useParams)(),{getBasename:o}=(0,p.useBasename)()||{getBasename:()=>""},s=o(),{t:f}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]);return(0,n.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,n.jsxs)(r.Sidebar,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.SidebarPanel,Object.assign({variant:"sticky"},{children:(0,n.jsxs)(r.JumpLinks,Object.assign({isVertical:!0,label:f("topic.jump_to_section"),offset:-164,style:{position:"sticky"},scrollableSelector:'.pf-c-page__main[tabindex="-1"]'},{children:[(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#core-configuration"},{children:f("topic.core_configuration")}),0),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#messages"},{children:f("topic.messages")}),1),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#log"},{children:f("topic.log")}),2),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#replication"},{children:f("topic.replication")}),3),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#cleanup"},{children:f("common.cleanup")}),4),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#index"},{children:f("topic.index")}),5),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#flush"},{children:f("topic.flush")}),6),(0,n.jsx)(r.JumpLinksItem,Object.assign({href:"#delete"},{children:f("common.delete")}),7)]}))})),(0,n.jsx)(r.SidebarContent,{children:(0,n.jsx)(r.PageGroup,Object.assign({hasOverflowScroll:!0,id:"topic-detail-view"},{children:(0,n.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,n.jsxs)(r.Split,{children:[(0,n.jsxs)(r.SplitItem,Object.assign({isFilled:!0},{children:[(0,n.jsxs)(r.Form,Object.assign({id:"topic-form"},{children:[(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.core_config_info")}))}),(0,n.jsx)(m.R,{fieldId:"topic-name",btnAriaLabel:f("common.name"),fieldLabel:f("topic.topic_name"),fieldValue:e.name,popoverBody:f("topic.topic_name_description"),popoverHeader:f("topic.topic_name")}),(0,n.jsx)(m.R,{fieldId:"partitions",btnAriaLabel:f("topic.partitions"),fieldLabel:f("topic.partitions"),fieldValue:e.numPartitions,popoverBody:f("topic.partitions_description"),popoverHeader:f("topic.partitions")}),(0,n.jsx)(m.R,{fieldId:"replicas",btnAriaLabel:f("topic.replicas"),fieldLabel:f("topic.replicas"),fieldValue:e.replicationFactor,popoverBody:f("topic.replicas_description"),popoverHeader:f("topic.replicas")}),(0,n.jsx)(m.R,{fieldId:"min-insync-replicas",btnAriaLabel:f("topic.min_insync_replicas"),fieldLabel:f("topic.min_insync_replicas"),fieldValue:d.MO,popoverBody:f("topic.min_insync_replicas_description"),popoverHeader:f("topic.min_insync_replicas")}),(0,n.jsx)(m.R,{fieldId:"retention-time",btnAriaLabel:f("topic.retention_time"),fieldLabel:f("topic.retention_time"),fieldValue:(0,_.eA)(Number(e["retention.ms"])),popoverBody:f("topic.retention_time_description"),popoverHeader:f("topic.retention_time"),showUnlimited:!0}),(0,n.jsx)(m.R,{fieldId:"retention-size",btnAriaLabel:f("topic.retention_size"),fieldLabel:f("topic.retention_size"),fieldValue:(0,_.Cv)(Number(e["retention.bytes"])),popoverHeader:f("topic.retention_size"),popoverBody:f("topic.retention_size_description"),showUnlimited:!0})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.messages"),id:"messages",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.message_section_info")}))}),(0,n.jsx)(m.R,{fieldId:"max-message-size",btnAriaLabel:f("topic.max_message_size"),fieldLabel:f("topic.max_message_size"),fieldValue:d._$,popoverBody:f("topic.max_message_size_description"),popoverHeader:f("topic.max_message_size")}),(0,n.jsx)(m.R,{fieldId:"message-timestamp-type",btnAriaLabel:f("topic.message_timestamp_type"),fieldLabel:f("topic.message_timestamp_type"),fieldValue:d.K,popoverBody:f("topic.message_timestamp_type_description"),popoverHeader:f("topic.message_timestamp_type")}),(0,n.jsx)(m.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:f("topic.max_message_timestamp_diff"),fieldLabel:f("topic.max_message_timestamp_diff"),fieldValue:d.Y,popoverBody:f("topic.max_message_timestamp_diff_description"),popoverHeader:f("topic.max_message_timestamp_diff")}),(0,n.jsx)(m.R,{fieldId:"compression-type",btnAriaLabel:f("topic.compression_type"),fieldLabel:f("topic.compression_type"),fieldValue:"Producer",popoverBody:f("topic.compression_type_description"),popoverHeader:f("topic.compression_type")}),(0,n.jsx)(m.R,{fieldId:"message-format",btnAriaLabel:f("topic.message_format"),fieldLabel:f("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:f("topic.message_format_description"),popoverHeader:f("topic.message_format")})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.log"),id:"log",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsxs)(r.Text,Object.assign({component:r.TextVariants.p},{children:[f("topic.log_section_info"),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small,className:"section-info-note"},{children:f("topic.log_section_info_note")}))]}))}),(0,n.jsx)(m.R,{fieldId:"cleanup-policy",btnAriaLabel:f("topic.cleanup_policy"),fieldLabel:f("topic.cleanup_policy"),fieldValue:e["cleanup.policy"],popoverBody:f("topic.cleanup_policy_description"),popoverHeader:f("topic.cleanup_policy")}),(0,n.jsx)(m.R,{fieldId:"delete-retention-time",btnAriaLabel:f("topic.delete_retention_time"),fieldLabel:f("topic.delete_retention_time"),fieldValue:d.sN,popoverBody:f("topic.delete_retention_time_description"),popoverHeader:f("topic.delete_retention_time")}),(0,n.jsx)(m.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:f("topic.min_cleanable_ratio"),fieldLabel:f("topic.min_cleanable_ratio"),fieldValue:d.PT,popoverBody:f("topic.min_cleanable_ratio_description"),popoverHeader:f("topic.min_cleanable_ratio")}),(0,n.jsx)(m.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:f("topic.min_compaction_lag_time"),fieldLabel:f("topic.min_compaction_lag_time"),fieldValue:d.A7,popoverBody:f("topic.min_compaction_lag_time_description"),popoverHeader:f("topic.min_compaction_lag_time")})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.replication"),id:"replication",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsxs)(r.Text,Object.assign({component:r.TextVariants.p},{children:[f("topic.replication_section_info"),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small},{children:f("topic.replication_section_info_note")}))]}))}),(0,n.jsx)(m.R,{fieldId:"unclean-leader-election",btnAriaLabel:f("topic.unclean_leader_election"),fieldLabel:f("topic.unclean_leader_election"),fieldValue:f("common.disabled"),popoverBody:f("topic.unclean_leader_election_description"),popoverHeader:f("topic.unclean_leader_election")})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("common.cleanup"),id:"cleanup",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.cleanup_section_info")}))}),(0,n.jsx)(m.R,{fieldId:"log-segment-size",btnAriaLabel:f("topic.log_segment_size"),fieldLabel:f("topic.log_segment_size"),fieldValue:d.f8,popoverBody:f("topic.log_segment_size_description"),popoverHeader:f("topic.log_segment_size")}),(0,n.jsx)(m.R,{fieldId:"segement-time",btnAriaLabel:f("topic.segement_time"),fieldLabel:f("topic.segement_time"),fieldValue:d.$$,popoverBody:f("topic.segement_time_description"),popoverHeader:f("topic.segement_time")}),(0,n.jsx)(m.R,{fieldId:"segment-jitter-time",btnAriaLabel:f("topic.segment_jitter_time"),fieldLabel:f("topic.segment_jitter_time"),fieldValue:d.W$,popoverBody:f("topic.segment_jitter_time_description"),popoverHeader:f("topic.segment_jitter_time")}),(0,n.jsx)(m.R,{fieldId:"file-delete-delay",btnAriaLabel:f("topic.file_delete_delay"),fieldLabel:f("topic.file_delete_delay"),fieldValue:d.pJ,popoverBody:f("topic.file_delete_delay_description"),popoverHeader:f("topic.file_delete_delay")}),(0,n.jsx)(m.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:f("topic.preallocate_log_segment_files"),fieldLabel:f("topic.preallocate_log_segment_files"),fieldValue:f("common.disabled"),popoverBody:f("topic.preallocate_log_segment_files_description"),popoverHeader:f("topic.preallocate_log_segment_files")})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.index"),id:"index",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.index_section_info")}))}),(0,n.jsx)(m.R,{fieldId:"index-interval-size",btnAriaLabel:f("topic.index_interval_size"),fieldLabel:f("topic.index_interval_size"),fieldValue:d.Q_,popoverBody:f("topic.index_interval_size_description"),popoverHeader:f("topic.index_interval_size")}),(0,n.jsx)(m.R,{fieldId:"segment-index-size",btnAriaLabel:f("topic.segment_index_size"),fieldLabel:f("topic.segment_index_size"),fieldValue:d.nL,popoverBody:f("topic.segment_index_size_description"),popoverHeader:f("topic.segment_index_size")})]})),(0,n.jsxs)(r.FormSection,Object.assign({title:f("topic.flush"),id:"flush",titleElement:"h2"},{children:[(0,n.jsx)(r.TextContent,{children:(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.flush_section_info")}))}),(0,n.jsx)(m.R,{fieldId:"flush-interval-messages",btnAriaLabel:f("topic.flush_interval_messages"),fieldLabel:f("topic.flush_interval_messages"),fieldValue:d.mr,popoverBody:f("topic.flush_interval_messages_description"),popoverHeader:f("topic.flush_interval_messages")}),(0,n.jsx)(m.R,{fieldId:"flush-interval-time",btnAriaLabel:f("topic.flush_interval_time"),fieldLabel:f("topic.flush_interval_time"),fieldValue:d.qh,popoverBody:f("topic.flush_interval_time_description"),popoverHeader:f("topic.flush_interval_time")})]}))]})),(0,n.jsx)(r.Divider,{className:"kafka-ui-divider__Margin"}),(0,n.jsxs)(r.TextContent,{children:[(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.h2,id:"delete"},{children:f("topic.delete_topic")})),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p,className:"section-info"},{children:f("topic.delete_topic_info")})),(0,n.jsx)(r.Button,Object.assign({variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},{children:f("common.delete_topic")}))]})]})),(0,n.jsx)(r.SplitItem,{children:(0,n.jsx)(r.Button,Object.assign({variant:"primary",onClick:()=>{t.push(`${s}/topic/update/${a}`)},"data-testid":"tabProperties-actionEdit"},{children:f("common.edit_props")}))})]})}))}))})]}))}))};var b=t(13985),g=t(60540),x=t(64517),u=t(3654),j=t(63850),h=t(5736);t(27958);const v=()=>{const{activeTab:e=2,kafkaName:i,kafkaPageLink:t,kafkaInstanceLink:d,onError:m,showSchemas:_}=(0,x.S)()||{},v=(0,c.useHistory)(),{topicName:k}=(0,c.useParams)(),{getBasename:y}=(0,p.useBasename)()||{getBasename:()=>""},T=y(),[L,I]=(0,o.useState)({name:k,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""}),[O,V]=(0,o.useState)(e),B=(0,o.useContext)(u.E),{addAlert:S}=(0,p.useAlert)()||{addAlert:()=>{}},{t:R}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),A=s().createRef(),C=s().createRef(),P=s().createRef(),{showModal:H}=(0,p.useModal)(),z=()=>{v.push(`${T}/topics`)},N=(0,o.useCallback)((i=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t,a,n;if(2===e)try{yield(0,g.Rh)(i,B).then((e=>{I(e)}))}catch(e){(0,h.I)(e)&&(m&&m((null===(t=e.response)||void 0===t?void 0:t.data.code)||-1,null===(a=e.response)||void 0===a?void 0:a.data.error_message),404===(null===(n=e.response)||void 0===n?void 0:n.status)&&S({title:R("topic.topic_not_found",{name:i}),variant:r.AlertVariant.danger}))}}))),[e,S,B,m,R]);(0,o.useEffect)((()=>{N(k)}),[N,k]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.I,{topicName:k,kafkaName:i,kafkaPageLink:t,kafkaInstanceLink:d}),(0,n.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,n.jsxs)(r.Tabs,Object.assign({activeKey:O,onSelect:(e,i)=>{V(i)},isBox:!1,className:"pf-m-page-insets"},{children:[(0,n.jsx)(r.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:(0,n.jsx)(r.TabTitleText,{children:R("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:A}),(0,n.jsx)(r.Tab,{eventKey:2,title:(0,n.jsx)(r.TabTitleText,{children:R("common.properties")}),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:C}),(0,n.jsx)(r.Tab,{eventKey:3,title:(0,n.jsx)(r.TabTitleText,{children:R("common.schemas")}),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:P})]}))})),(0,n.jsxs)(r.PageSection,Object.assign({variant:2===O?r.PageSectionVariants.light:r.PageSectionVariants.default},{children:[(0,n.jsx)(r.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:A,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:1!=O},{children:(0,n.jsx)(j.J,{consumerGroupByTopic:!0,topic:k,rowDataTestId:"tableTopicConsumers-row"})})),(0,n.jsx)(r.TabContent,Object.assign({eventKey:2,id:"kafka-ui-TabcontentProperties",ref:C,className:"kafka-ui-m-full-height","aria-label":"Topic properties.",hidden:2!=O},{children:(0,n.jsx)(f,{topic:L,deleteTopic:()=>{H(p.ModalType.KafkaDeleteTopic,{topicName:k,onDeleteTopic:z})}})})),(0,n.jsx)(r.TabContent,Object.assign({eventKey:3,id:"kafka-ui-TabSchemas",ref:P,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:3!=O},{children:_}))]}))]})}}}]);
//# sourceMappingURL=8903.ac5a30aa.js.map
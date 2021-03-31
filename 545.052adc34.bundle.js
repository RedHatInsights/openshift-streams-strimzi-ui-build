(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[545],{1545:(e,t,a)=>{"use strict";a.d(t,{i:()=>T});var i=a(7522),n=a.n(i),l=a(8719),o=a(3004),r=(a(3897),a(7253)),c=a(3006),s=function(e){var t=e.topic,a=e.deleteTopic,i=e.updateTopic,l=(0,c.useTranslation)().t;return n().createElement(o.Grid,{hasGutter:!0},n().createElement(o.GridItem,{span:2,className:"grid-item-padding"},n().createElement(o.JumpLinks,{isVertical:!0,label:"JUMP TO SECTION",scrollableSelector:"#topic-detail-view",style:{position:"absolute"}},n().createElement(o.JumpLinksItem,{key:0,href:"#core-configuration"},"Core configuration"),n().createElement(o.JumpLinksItem,{key:1,href:"#messages"},"Messages"),n().createElement(o.JumpLinksItem,{key:2,href:"#log"},"Log"),n().createElement(o.JumpLinksItem,{key:3,href:"#replication"},"Replication"),n().createElement(o.JumpLinksItem,{key:4,href:"#cleanup"},"Cleanup"),n().createElement(o.JumpLinksItem,{key:5,href:"#index"},"Index"),n().createElement(o.JumpLinksItem,{key:6,href:"#flush"},"Flush"),n().createElement(o.JumpLinksItem,{key:7,href:"#delete"},"Delete"))),n().createElement(o.GridItem,{span:8,className:"grid-item-padding"},n().createElement(o.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},n().createElement(o.PageSection,null,n().createElement(o.TextContent,null,n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"core-configuration"},"Core configuration"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.coreConfigInfo"))),n().createElement(r.R,{btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:t.name,popoverBody:l("createTopic.topicNameLabelBody"),popoverHeader:l("createTopic.topicNameLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail partition",fieldLabel:"Partitions",fieldValue:t.numPartitions,popoverBody:l("createTopic.partitionsLabelBody"),popoverHeader:l("createTopic.partitionsLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail replicas",fieldLabel:"Replicas",fieldValue:t.replicationFactor,popoverBody:l("createTopic.replicasLabelBody"),popoverHeader:l("createTopic.replicasLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:t["min.insync.replicas"],popoverBody:l("createTopic.inSyncReplicasLabelBody"),popoverHeader:l("createTopic.inSyncReplicasLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail retention time",fieldLabel:"Retention Time",fieldValue:t["retention.ms"],popoverBody:l("createTopic.retentionTimeLabelBody"),popoverHeader:l("createTopic.retentionTimeLabelHead"),unit:"ms"}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"messages"},"Messages"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.messageSectionInfo"))),n().createElement(r.R,{btnAriaLabel:"topic detail max message bytes",fieldLabel:"Maximum message bytes",fieldValue:t["max.message.bytes"],popoverBody:l("createTopic.maxMessageSizeLabelBody"),popoverHeader:l("createTopic.maxMessageSizeLabelHead"),unit:"bytes"}),n().createElement(r.R,{btnAriaLabel:"topic detail message timestamp type",fieldLabel:"Message timestamp type",fieldValue:t["message.timestamp.type"],popoverBody:l("createTopic.messageTimestampLabelBody"),popoverHeader:l("createTopic.messageTimestampLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail message timestamp difference",fieldLabel:"Maximum message timestamp difference",fieldValue:t["message.timestamp.difference.max.ms"],popoverBody:l("createTopic.messageTimestampDiffLabelBody"),popoverHeader:l("createTopic.messageTimestampDiffLabelHead"),unit:"ms"}),n().createElement(r.R,{btnAriaLabel:"topic detail compression type",fieldLabel:"Compression type",fieldValue:t["compression.type"],popoverBody:l("createTopic.compressionTypeLabelBody"),popoverHeader:l("createTopic.compressionTypeLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail message format version",fieldLabel:"Message format version",fieldValue:t["log.message.format.version"],popoverBody:l("createTopic.messageFormatLabelBody"),popoverHeader:l("createTopic.messageFormatLabelHead")}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"log"},"Log"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info-head"},l("createTopic.logSectionInfo")),n().createElement(o.Text,{component:o.TextVariants.small,className:"section-info-note"},l("createTopic.logSectionInfoNote"))),n().createElement(r.R,{btnAriaLabel:"topic detail cleanup policy",fieldLabel:"Cleanup policy",fieldValue:t["log.cleanup.policy"],popoverBody:l("createTopic.cleanupPolicyLabelBody"),popoverHeader:l("createTopic.cleanupPolicyLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail retention bytes",fieldLabel:"Delete retention time",fieldValue:t["delete.retention.ms"],popoverBody:l("createTopic.deleteRetentionLabelBody"),popoverHeader:l("createTopic.deleteRetentionLabelHead"),unit:"time"}),n().createElement(r.R,{btnAriaLabel:"topic detail min cleanable dirty ratio",fieldLabel:"Minimum cleanable dirty ratio",fieldValue:t["min.cleanable.dirty.ratio"],popoverBody:l("createTopic.minRatioLabelBody"),popoverHeader:l("createTopic.minRatioLabelHead")}),n().createElement(r.R,{btnAriaLabel:"topic detail min compaction lag time",fieldLabel:"Minimum compaction lag time",fieldValue:t["min.compaction.lag.ms"],popoverBody:l("createTopic.minLagLabelBody"),popoverHeader:l("createTopic.minLagLabelHead"),unit:"ms"}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"replication"},"Replication"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info-head"},l("createTopic.replicationSectionInfo")),n().createElement(o.Text,{component:o.TextVariants.small,className:"section-info-note"},l("createTopic.replicationSectionInfoNote"))),n().createElement(r.R,{btnAriaLabel:"topic detail unclean leader election",fieldLabel:"Unclean leader election",fieldValue:t["unclean.leader.election.enable"],popoverBody:l("createTopic.leaderElectionLabelBody"),popoverHeader:l("createTopic.leaderElectionLabelHead")}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"cleanup"},"Cleanup"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.cleanupSectionInfo"))),n().createElement(r.R,{btnAriaLabel:"topic detail max message bytes",fieldLabel:"Log segment size",fieldValue:t["log.segment.bytes"],popoverBody:l("createTopic.logSegmentLabelHead"),popoverHeader:l("createTopic.logSegmentLabelBody"),unit:"bytes"}),n().createElement(r.R,{btnAriaLabel:"segment time",fieldLabel:"Segment time",fieldValue:t["segment.ms"],popoverBody:l("createTopic.segementTimeLabelBody"),popoverHeader:l("createTopic.segementTimeLabelHead"),unit:"ms"}),n().createElement(r.R,{btnAriaLabel:"segment jitter time",fieldLabel:"Segment jitter time",fieldValue:t["segment.jitter.ms"],popoverBody:l("createTopic.jitterTimeLabelBody"),popoverHeader:l("createTopic.jitterTimeLabelHead"),unit:"ms"}),n().createElement(r.R,{btnAriaLabel:"file delete delay",fieldLabel:"File delete delay",fieldValue:t["file.delete.delay.ms"],popoverBody:l("createTopic.deleteDelayLabelBody"),popoverHeader:l("createTopic.deleteDelayLabelHead"),unit:"ms"}),n().createElement(r.R,{btnAriaLabel:"preallocation log segment files",fieldLabel:"Preallocation log segment files",fieldValue:t.preallocate,popoverBody:l("createTopic.preallocateLabelBody"),popoverHeader:l("createTopic.preallocateLabelHead")}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"index"},"Index"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.indexSectionInfo"))),n().createElement(r.R,{btnAriaLabel:"index interval size",fieldLabel:"Index interval size",fieldValue:t["index.interval.bytes"],popoverBody:l("createTopic.indexIntervalLabelBody"),popoverHeader:l("createTopic.indexIntervalLabelHead"),unit:"bytes"}),n().createElement(r.R,{btnAriaLabel:"segment index size",fieldLabel:"Segment index size",fieldValue:t["segment.index.bytes"],popoverBody:l("createTopic.segementIntervalLabelBody"),popoverHeader:l("createTopic.segementIntervalLabelHead"),unit:"bytes"}),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"flush"},"Flush"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.flushSectionInfo"))),n().createElement(r.R,{btnAriaLabel:"flush interval messages",fieldLabel:"Flush interval messages",fieldValue:t["flush.messages"],popoverBody:l("createTopic.intervalMessagesLabelBody"),popoverHeader:l("createTopic.intervalMessagesLabelHead"),unit:"ms"}),n().createElement(r.R,{btnAriaLabel:"flush interval time",fieldLabel:"Flush interval time",fieldValue:t["flush.ms"],popoverBody:l("createTopic.intervalTimeLabelBody"),popoverHeader:l("createTopic.intervalTimeLabelHead"),unit:"ms"}),n().createElement(o.Divider,null),n().createElement(o.TextContent,{className:"section-margin"},n().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"delete"},"Delete topic (irreversible)"),n().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},l("createTopic.deleteTopicInfo"))),n().createElement(o.Button,{variant:"danger",className:"section-margin",onClick:a},"Delete topic")))),n().createElement(o.GridItem,{span:2,className:"grid-item-padding"},n().createElement(o.Button,{variant:"primary",onClick:i},"Edit properties")))},m=a(9492),p=a(9115),d=a(2300),b=a(699),u=a(3526),f={name:"SampleTopic2345",numPartitions:"52",replicationFactor:"35","min.insync.replicas":"78","retention.ms":"78","retention.ms.unit":"days","max.message.bytes":"50","max.message.bytes.unit":"bytes","message.timestamp.type":"CreateTime","message.timestamp.difference.max.ms":"4","message.timestamp.difference.max.ms.unit":"milliseconds","compression.type":"Producer","log.cleanup.policy":"Delete","log.retention.bytes":"-1","log.retention.bytes.unit":"bytes","log.segment.bytes":"78","log.segment.bytes.unit":"bytes","unclean.leader.election.enable":"false","follower.replication.throttled.replicas":"","leader.replication.throttled.replicas":"","delete.retention.ms":"789","delete.retention.ms.unit":"milliseconds","min.cleanable.dirty.ratio":"4","min.compaction.lag.ms":"58","min.compaction.lag.ms.unit":"milliseconds","segment.ms":"6048000","segment.ms.unit":"milliseconds","segment.jitter.ms":"0","segment.jitter.ms.unit":"milliseconds","file.delete.delay.ms":"6000","file.delete.delay.ms.unit":"milliseconds",preallocate:"true","index.interval.bytes":"4096","index.interval.bytes.unit":"bytes","segment.index.bytes":"10847560","segment.index.bytes.unit":"bytes","flush.messages":"783945","flush.messages.unit":"milliseconds","flush.ms":"3894949","flush.ms.unit":"milliseconds"},T=function(e){var t=e.topicName,a=e.onUpdateTopic,r=e.getTopicListPath,c=e.onClickTopicList,T=e.onDeleteTopic,y=(0,i.useState)(f),g=y[0],L=y[1],v=(0,i.useContext)(p.E),x=(0,i.useState)(!1),E=x[0],h=x[1],B=(0,i.useContext)(u.w).addAlert;return(0,i.useEffect)((function(){!function(e){var t,a,i,n;t=void 0,a=void 0,n=function(){var t,a,i;return function(e,t){var a,i,n,l,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function r(l){return function(r){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,i&&(n=2&l[0]?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],i=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,m.Rh)(e,v)];case 1:return t=n.sent(),L(t),[3,3];case 2:return void 0!==(a=n.sent())&&404===(null===(i=a.response)||void 0===i?void 0:i.status)&&(B("Topic "+e+" does not exist",o.AlertVariant.danger),c()),[3,3];case 3:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,l){function o(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof i?a:new i((function(e){e(a)}))).then(o,r)}c((n=n.apply(t,a||[])).next())}))}(t)}),[t]),n().createElement(n().Fragment,null,n().createElement(l.I,{topicName:t,getTopicListPath:r,onClickTopicList:c}),n().createElement(o.PageSection,{variant:o.PageSectionVariants.light},n().createElement(o.Tabs,{activeKey:1,onSelect:function(){},isBox:!1,className:"tab-padding"},n().createElement(o.Tab,{eventKey:0,title:n().createElement(o.TabTitleText,null,"Consumer Groups")},n().createElement(d.G,null)),n().createElement(o.Tab,{eventKey:1,title:n().createElement(o.TabTitleText,null,"Properties")},n().createElement(s,{topic:g,deleteTopic:function(){h(!0)},updateTopic:a}))),E&&n().createElement(b.i,{topicName:t,deleteModal:E,setDeleteModal:h,onDeleteTopic:T})))}}}]);
//# sourceMappingURL=545.052adc34.bundle.js.map
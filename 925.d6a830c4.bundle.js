(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[925],{6466:(e,t,a)=>{"use strict";t.kc={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.VA=a(5183).createIcon(t.kc),t.ZP=t.VA},4046:(e,t,a)=>{"use strict";t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=a(5183).createIcon(t.MU),t.ZP=t.by},3174:()=>{},6351:()=>{},7253:(e,t,a)=>{"use strict";a.d(t,{R:()=>p});var n=a(3004),i=a(7522),l=a.n(i),o=a(4046),r=a(7043),c=a.n(r),s=a(5839),m=a.n(s),p=function(e){var t=e.fieldLabel,a=e.btnAriaLabel,i=e.fieldValue,r=e.popoverBody,s=e.popoverHeader,p=e.unit,d="-";return i&&(p?("ms"===p&&(d=m()(Number(i))),"bytes"===p&&(d=c()(Number(i)))):d=i),l().createElement(n.TextContent,{className:"text-content-padding"},l().createElement(n.Text,{style:{fontWeight:700,display:"inline"}},t),l().createElement(n.Popover,{headerContent:l().createElement("div",null,s),bodyContent:l().createElement("div",null,r)},l().createElement("button",{"aria-label":a,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help",style:{position:"relative",left:"5px",top:"2px"}},l().createElement(o.ZP,{noVerticalAlign:!0}))),l().createElement(n.Text,null,d))}},2111:(e,t,a)=>{"use strict";a.d(t,{W:()=>f});var n=a(7522),i=a.n(n),l=a(3004),o=(a(3174),a(3006)),r=a(7253),c=a(4046),s=function(e){var t=e.children,a=e.labelHead,n=e.fieldId,o=e.fieldLabel,r=e.labelBody,s=e.buttonAriaLabel;return i().createElement(l.FormGroup,{fieldId:n,label:o,labelIcon:i().createElement(l.Popover,{headerContent:i().createElement("div",null,a),bodyContent:i().createElement("div",null,r)},i().createElement("button",{"aria-label":s,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},i().createElement(c.ZP,{noVerticalAlign:!0})))},t)},m=a(6466),p=function(e){var t,a=e.id,o=e.toggleId,r=e.items,c=e.value,s=e.ariaLabel,p=e.onSelectOption,d=e.name,u=(0,n.useState)(),b=u[0],f=u[1],y=i().createElement(l.DropdownToggle,{id:o,onToggle:function(){f((function(e){return!e}))},toggleIndicator:m.ZP},c);return i().createElement(l.Dropdown,{name:d,id:a,onSelect:function(e){var t=e.currentTarget.textContent;p&&(e.target.name=d,p(t,e)),f((function(e){return!e}))},toggle:y,isOpen:b,"aria-label":s,dropdownItems:(t=r,t.map((function(e){var t=e.key,a=e.value,n=e.label;return i().createElement(l.DropdownItem,{key:t,value:a},n||a)})))})},d=function(e){var t=e.id,a=e.toggleId,n=e.dropdownValue,o=e.ariaLabel,r=e.onSelectOption,c=e.name,s=e.inputName,m=e.onChange,d=e.onPlus,u=e.onMinus,b=e.value,f=e.plusBtnProps,y=e.minusBtnProps,g=e.type,v=[{key:"milliseconds",value:"milliseconds",isDisabled:!1},{key:"seconds",value:"seconds",isDisabled:!1},{key:"days",value:"days",isDisabled:!1},{key:"months",value:"months",isDisabled:!1},{key:"years",value:"years",isDisabled:!1}],T=[{key:"bytes",value:"bytes",isDisabled:!1},{key:"kilobytes",value:"kilobytes",isDisabled:!1},{key:"megabytes",value:"megabytes",isDisabled:!1},{key:"gigabytes",value:"gigabytes",isDisabled:!1},{key:"terabytes",value:"terabytes",isDisabled:!1}];return i().createElement(l.Flex,null,i().createElement(l.FlexItem,{grow:{default:"grow"}},i().createElement(l.NumberInput,{inputName:s,onChange:m,onPlus:d,onMinus:u,value:b,plusBtnProps:f,minusBtnProps:y})),i().createElement(l.FlexItem,null,i().createElement(p,{id:t,toggleId:a,ariaLabel:o,onSelectOption:r,items:function(e){switch(e){case"time":return v;case"memory":return T;default:return[]}}(g),name:c,value:n||""})))},u=a(1249),b=function(){return(b=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},f=function(e){var t=e.isCreate,a=e.saveTopic,n=e.handleCancel,c=e.topicData,m=e.setTopicData,f=(0,o.useTranslation)().t,y=!0===t?"Create Topic":"Save",g=function(e,t){var a,n=t.target.name;m(b(b({},c),((a={})[(0,u.$X)(n)]=e,a)))},v=function(e){var t,a=e.currentTarget,n=a.name,i=a.value;m(b(b({},c),((t={})[(0,u.$X)(n)]=Number(i),t)))},T=function(e){var t,a=e.currentTarget.name,n=(0,u.$X)(a);m(b(b({},c),((t={})[n]=Number(c[n])+1,t)))},L=function(e){var t,a=e.currentTarget.name,n=(0,u.$X)(a);m(b(b({},c),((t={})[n]=Number(c[n])-1,t)))};return i().createElement(i().Fragment,null,i().createElement(l.Sidebar,{hasGutter:!0},i().createElement(l.SidebarPanel,{variant:"sticky"},i().createElement(l.JumpLinks,{isVertical:!0,label:"JUMP TO SECTION",scrollableSelector:"#main-container",style:{position:"sticky"},offset:-164,expandable:{default:"expandable",md:"nonExpandable"},isExpanded:!1},i().createElement(l.JumpLinksItem,{key:0,href:"#core-configuration"},"Core configuration"),i().createElement(l.JumpLinksItem,{key:1,href:"#messages"},"Messages"),i().createElement(l.JumpLinksItem,{key:2,href:"#log"},"Log"),i().createElement(l.JumpLinksItem,{key:3,href:"#replication"},"Replication"),i().createElement(l.JumpLinksItem,{key:4,href:"#cleanup"},"Cleanup"),i().createElement(l.JumpLinksItem,{key:5,href:"#index"},"Index"),i().createElement(l.JumpLinksItem,{key:6,href:"#flush"},"Flush"))),i().createElement(l.SidebarContent,null,i().createElement(l.PageSection,{className:"kafka-ui--topics-advanced-config",padding:{default:"noPadding"},hasOverflowScroll:!0,id:"topic-advance-config-scroll-container"},i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.StackItem,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"core-configuration"},"Core configuration"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},f("createTopic.coreConfigInfo"))),i().createElement(l.Form,null,t?i().createElement(s,{labelHead:f("createTopic.topicNameLabelHead"),fieldId:"create-topic-name",fieldLabel:"Topic name",labelBody:f("createTopic.topicNameLabelBody"),buttonAriaLabel:"More info for topic name field"},i().createElement(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:c.name,onChange:function(e,t){var a,n=t.currentTarget.name;m(b(b({},c),((a={})[(0,u.FB)(n)]=e,a)))},label:"Topic name",placeholder:"Enter topic name"})):i().createElement(r.R,{btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:c.name,popoverBody:f("createTopic.topicNameLabelBody"),popoverHeader:f("createTopic.topicNameLabelHead")}),i().createElement(s,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:f("createTopic.partitionsLabelHead"),labelBody:f("createTopic.partitionsLabelBody"),buttonAriaLabel:"More info for partitions field"},i().createElement(l.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:function(e){var t,a=e.currentTarget,n=a.name,i=a.value;m(b(b({},c),((t={})[(0,u.FB)(n)]=Number(i),t)))},onPlus:function(e){var t,a=e.currentTarget.name,n=(0,u.FB)(a);m(b(b({},c),((t={})[n]=Number(c[n])+1,t)))},onMinus:function(e){var t,a=e.currentTarget.name,n=(0,u.FB)(a);m(b(b({},c),((t={})[n]=Number(c[n])-1,t)))},value:Number(c.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"}})),i().createElement(r.R,{btnAriaLabel:"topic detail replicas",fieldLabel:"Replicas",fieldValue:"3",popoverBody:f("createTopic.replicasLabelBody"),popoverHeader:f("createTopic.replicasLabelHead")}),i().createElement(r.R,{btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:"2",popoverBody:f("createTopic.inSyncReplicasLabelBody"),popoverHeader:f("createTopic.inSyncReplicasLabelHead")}),i().createElement(s,{fieldId:"retention",fieldLabel:"Retention time",labelHead:f("createTopic.retentionTimeLabelHead"),labelBody:f("createTopic.retentionTimeLabelBody"),buttonAriaLabel:"More info for retention time field"},i().createElement(d,{inputName:"retention-ms",onChange:v,onPlus:T,onMinus:L,value:Number(c["retention.ms"]),plusBtnProps:{name:"retention-ms"},minusBtnProps:{name:"retention-ms"},id:"core-config-retention-time-unit",toggleId:"core-config-retention-dropdowntoggle",name:"retention-ms-unit",dropdownValue:c["retention.ms.unit"],ariaLabel:"select unit from dropdown",onSelectOption:g,type:"time"})),i().createElement(s,{fieldId:"retention-size",fieldLabel:"Retention size",labelHead:f("createTopic.retentionBytesLabelHead"),labelBody:f("createTopic.retentionBytesLabelBody"),buttonAriaLabel:"More info for retention size field"},i().createElement(d,{inputName:"retention-bytes",onChange:v,onPlus:T,onMinus:L,value:Number(c["retention.bytes"]),plusBtnProps:{name:"retention-bytes"},minusBtnProps:{name:"retention-bytes"},id:"core-config-retention-size-unit",toggleId:"core-config-retention-size-dropdowntoggle",name:"retention-bytes-unit",dropdownValue:c["retention.bytes.unit"],ariaLabel:"select unit from dropdown",onSelectOption:g,type:"memory"})))),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"messages"},"Messages"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},f("createTopic.messageSectionInfo"))),i().createElement(r.R,{btnAriaLabel:"topic detail max message bytes",fieldLabel:"Maximum message bytes",fieldValue:"1000012",popoverBody:f("createTopic.maxMessageSizeLabelBody"),popoverHeader:f("createTopic.maxMessageSizeLabelHead"),unit:"bytes"}),i().createElement(r.R,{btnAriaLabel:"topic detail message timestamp type",fieldLabel:"Message timestamp type",fieldValue:"CreateTime",popoverBody:f("createTopic.messageTimestampLabelBody"),popoverHeader:f("createTopic.messageTimestampLabelHead")}),i().createElement(r.R,{btnAriaLabel:"topic detail message timestamp difference",fieldLabel:"Maximum message timestamp difference",fieldValue:"9007199254740991",popoverBody:f("createTopic.messageTimestampDiffLabelBody"),popoverHeader:f("createTopic.messageTimestampDiffLabelHead"),unit:"ms"}),i().createElement(r.R,{btnAriaLabel:"topic detail compression type",fieldLabel:"Compression type",fieldValue:"Producer",popoverBody:f("createTopic.compressionTypeLabelBody"),popoverHeader:f("createTopic.compressionTypeLabelHead")}),i().createElement(r.R,{btnAriaLabel:"topic detail message format version",fieldLabel:"Message format version",fieldValue:"2.6",popoverBody:f("createTopic.messageFormatLabelBody"),popoverHeader:f("createTopic.messageFormatLabelHead")})),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"log"},"Log"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info-head"},f("createTopic.logSectionInfo")),i().createElement(l.Text,{component:l.TextVariants.small,className:"section-info-note"},f("createTopic.logSectionInfoNote"))),i().createElement(s,{fieldId:"cleanup-policy",fieldLabel:"Cleanup policy",labelHead:f("createTopic.cleanupPolicyLabelHead"),labelBody:f("createTopic.cleanupPolicyLabelBody"),buttonAriaLabel:"More info for cleanup policy field"},i().createElement(p,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:"select policy type from dropdown",onSelectOption:function(e,t){var a,n=t.target.name;m(b(b({},c),((a={})[(0,u.$X)(n)]=e,a)))},items:[{key:"compact",value:"compact",label:"Compact",isDisabled:!1},{key:"delete",value:"delete",label:"Delete",isDisabled:!1},{key:"compact-delete",value:"compact, delete",label:"Compact, Delete",isDisabled:!1},{key:"delete-compact",value:"delete, compact",label:"Delete, Compact",isDisabled:!1}],name:"cleanup-policy",value:c["cleanup.policy"]||""})),i().createElement(r.R,{btnAriaLabel:"topic detail retention bytes",fieldLabel:"Delete retention time",fieldValue:"86400000",popoverBody:f("createTopic.deleteRetentionLabelBody"),popoverHeader:f("createTopic.deleteRetentionLabelHead"),unit:"time"}),i().createElement(r.R,{btnAriaLabel:"topic detail min cleanable dirty ratio",fieldLabel:"Minimum cleanable dirty ratio",fieldValue:"4",popoverBody:f("createTopic.minRatioLabelBody"),popoverHeader:f("createTopic.minRatioLabelHead")}),i().createElement(r.R,{btnAriaLabel:"topic detail min compaction lag time",fieldLabel:"Minimum compaction lag time",fieldValue:"0",popoverBody:f("createTopic.minLagLabelBody"),popoverHeader:f("createTopic.minLagLabelHead"),unit:"ms"})),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"replication"},"Replication"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info-head"},f("createTopic.replicationSectionInfo")),i().createElement(l.Text,{component:l.TextVariants.small,className:"section-info-note"},f("createTopic.replicationSectionInfoNote"))),i().createElement(r.R,{btnAriaLabel:"topic detail unclean leader election",fieldLabel:"Unclean leader election",fieldValue:"Disabled",popoverBody:f("createTopic.leaderElectionLabelBody"),popoverHeader:f("createTopic.leaderElectionLabelHead")})),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"cleanup"},"Cleanup"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},f("createTopic.cleanupSectionInfo"))),i().createElement(r.R,{btnAriaLabel:"topic detail max message bytes",fieldLabel:"Log segment size",fieldValue:"1000012",popoverBody:f("createTopic.logSegmentLabelHead"),popoverHeader:f("createTopic.logSegmentLabelBody"),unit:"bytes"}),i().createElement(r.R,{btnAriaLabel:"segment time",fieldLabel:"Segment time",fieldValue:"6048000",popoverBody:f("createTopic.segementTimeLabelBody"),popoverHeader:f("createTopic.segementTimeLabelHead"),unit:"ms"}),i().createElement(r.R,{btnAriaLabel:"segment jitter time",fieldLabel:"Segment jitter time",fieldValue:"0",popoverBody:f("createTopic.jitterTimeLabelBody"),popoverHeader:f("createTopic.jitterTimeLabelHead"),unit:"ms"}),i().createElement(r.R,{btnAriaLabel:"file delete delay",fieldLabel:"File delete delay",fieldValue:"6000",popoverBody:f("createTopic.deleteDelayLabelBody"),popoverHeader:f("createTopic.deleteDelayLabelHead"),unit:"ms"}),i().createElement(r.R,{btnAriaLabel:"preallocation log segment files",fieldLabel:"Preallocation log segment files",fieldValue:"Enabled",popoverBody:f("createTopic.preallocateLabelBody"),popoverHeader:f("createTopic.preallocateLabelHead")})),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"index"},"Index"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},f("createTopic.indexSectionInfo"))),i().createElement(r.R,{btnAriaLabel:"index interval size",fieldLabel:"Index interval size",fieldValue:"4096",popoverBody:f("createTopic.indexIntervalLabelBody"),popoverHeader:f("createTopic.indexIntervalLabelHead"),unit:"bytes"}),i().createElement(r.R,{btnAriaLabel:"segment index size",fieldLabel:"Segment index size",fieldValue:"10847560",popoverBody:f("createTopic.segementIntervalLabelBody"),popoverHeader:f("createTopic.segementIntervalLabelHead"),unit:"bytes"})),i().createElement(l.StackItem,null,i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"flush"},"Flush"),i().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},f("createTopic.flushSectionInfo"))),i().createElement(r.R,{btnAriaLabel:"flush interval messages",fieldLabel:"Flush interval messages",fieldValue:"984245548293848",popoverBody:f("createTopic.intervalMessagesLabelBody"),popoverHeader:f("createTopic.intervalMessagesLabelHead"),unit:"ms"}),i().createElement(r.R,{btnAriaLabel:"flush interval time",fieldLabel:"Flush interval time",fieldValue:"968472937473987",popoverBody:f("createTopic.intervalTimeLabelBody"),popoverHeader:f("createTopic.intervalTimeLabelHead"),unit:"ms"})))),i().createElement(l.ActionGroup,{className:"kafka-ui--sticky-footer"},i().createElement(l.Button,{onClick:a,variant:"primary"},y),i().createElement(l.Button,{onClick:n,variant:"link"},"Cancel")))))}},1249:(e,t,a)=>{"use strict";a.d(t,{FB:()=>i,$X:()=>l,L3:()=>c,hM:()=>s});var n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(e){return e.split("-").map((function(e,t){return t>0?(a=e).charAt(0).toUpperCase()+a.slice(1):e;var a})).join("")},l=function(e){return e.replaceAll("-",".")},o={bytes:1,kilobytes:1e3,megabytes:1e6,gigabytes:1e9,terabytes:1e12},r={milliseconds:1,seconds:1e3,days:864e5,months:2592e6,years:31536e6},c=function(e){var t=n({},e);for(var a in t)"ms"===a.split(".").pop()&&(t[a]=String(Number(t[a])*r[t[a+".unit"]||"milliseconds"])),"bytes"===a.split(".").pop()&&(t[a]=String(Number(t[a])*o[t[a+".unit"]||"bytes"]));for(var a in t["flush.messages"]&&(t["flush.messages"]=String(Number(t["flush.messages"])*r[t["flush.messages.unit"]||"milliseconds"])),t)"unit"===a.split(".").pop()&&delete t[a];return t},s=function(e){var t=e.name,a=e.numPartitions,n=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a}(e,["name","numPartitions"]),i=[];for(var l in n)l&&i.push({key:l,value:n[l].toString()});return{name:t,settings:{numPartitions:Number(a),config:i}}}}}]);
//# sourceMappingURL=925.d6a830c4.bundle.js.map
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[558],{96466:(e,t,n)=>{t.kc={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.VA=n(35183).createIcon(t.kc),t.ZP=t.VA},34046:(e,t,n)=>{t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=n(35183).createIcon(t.MU),t.ZP=t.by},63168:()=>{},81030:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(93264),o=n.n(i),a=n(46999),l=n(96466),r=function(e){var t,n=e.id,r=e.toggleId,c=e.items,s=e.value,p=e.ariaLabel,m=e.onSelectOption,u=e.name,d=e.menuAppendTo,f=(0,i.useState)(),b=f[0],_=f[1],v=o().createElement(a.DropdownToggle,{id:r,onToggle:function(){_((function(e){return!e}))},toggleIndicator:l.ZP},s);return o().createElement(a.Dropdown,{name:u,id:n,onSelect:function(e){var t=e.currentTarget.textContent;m&&(e.target.name=u,m(t,e)),_((function(e){return!e}))},toggle:v,isOpen:b,"aria-label":p,dropdownItems:(t=c,t.map((function(e){var t=e.key,n=e.value,i=e.label;return o().createElement(a.DropdownItem,{key:t,value:n},i||n)}))),menuAppendTo:d})}},95574:(e,t,n)=>{n.d(t,{R:()=>r});var i=n(46999),o=n(93264),a=n.n(o),l=n(34046),r=function(e){var t=e.fieldId,n=e.fieldLabel,o=e.btnAriaLabel,r=e.fieldValue,c=e.popoverBody,s=e.popoverHeader,p="-";return!0===e.showUnlimited&&void 0!==r&&parseInt(r)<0?p="Unlimited":r&&(p=r),a().createElement(i.FormGroup,{fieldId:t,label:n,className:"kafka-ui-form-group--readonly",labelIcon:a().createElement(i.Popover,{headerContent:a().createElement("div",null,s),bodyContent:a().createElement("div",null,c)},a().createElement("button",{"aria-label":o,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},a().createElement(l.ZP,{noVerticalAlign:!0})))},a().createElement(i.TextInput,{isReadOnly:!0,type:"text",id:t,name:t,value:p}))}},63595:(e,t,n)=>{n.d(t,{Rc:()=>i,PT:()=>o,MO:()=>a,$$:()=>l,Y:()=>r,nL:()=>c,Q_:()=>s,f8:()=>p,sN:()=>m,W$:()=>u,pJ:()=>d,_$:()=>f,K:()=>b,A7:()=>_,mr:()=>v,qh:()=>g,jR:()=>y,TE:()=>h});var i="3",o="0.5",a="2",l="604800000 milliseconds (7 days)",r="9223372036854775807 milliseconds",c="10485760 bytes (10 mebibytes)",s="4096 bytes (4 kibibytes)",p="1073741824 bytes (1 gibibyte)",m="86400000 milliseconds (1 day)",u="0 milliseconds",d="60000 milliseconds (1 minute)",f="1048588 bytes",b="CreateTime",_="0 milliseconds",v="9223372036854775807 messages",g="9223372036854775807 milliseconds",y=1,h=100},90558:(e,t,n)=>{n.d(t,{W:()=>E});var i=n(93264),o=n.n(i),a=n(54532),l=n(46999),r=n(63595),c=n(81030),s=function(e){var t=e.id,n=e.toggleId,i=e.dropdownValue,a=e.ariaLabel,r=e.onSelectOption,s=e.name,p=e.inputName,m=e.onChange,u=e.onPlus,d=e.onMinus,f=e.value,b=e.plusBtnProps,_=e.minusBtnProps,v=e.type,g=e.min,y=[{key:"milliseconds",value:"milliseconds",isDisabled:!1},{key:"seconds",value:"seconds",isDisabled:!1},{key:"days",value:"days",isDisabled:!1},{key:"months",value:"months",isDisabled:!1},{key:"years",value:"years",isDisabled:!1}],h=[{key:"bytes",value:"bytes",isDisabled:!1},{key:"kibibytes",value:"kibibytes",isDisabled:!1},{key:"mebibytes",value:"mebibytes",isDisabled:!1},{key:"gibibytes",value:"gibibytes",isDisabled:!1},{key:"tebibytes",value:"tebibytes",isDisabled:!1}];return o().createElement(l.Flex,null,o().createElement(l.FlexItem,{grow:{default:"grow"}},o().createElement(l.NumberInput,{inputName:p,onChange:m,onPlus:u,onMinus:d,value:f,plusBtnProps:b,minusBtnProps:_,min:g,widthChars:10})),o().createElement(l.FlexItem,null,o().createElement(c.A,{id:t,toggleId:n,ariaLabel:a,onSelectOption:r,items:function(e){switch(e){case"time":return y;case"memory":return h;default:return[]}}(v),name:s,value:i||""})))},p=n(34046),m=function(e){var t=e.children,n=e.labelHead,i=e.fieldId,a=e.fieldLabel,r=e.labelBody,c=e.buttonAriaLabel,s=e.validated,m=e.helperText,u=e.helperTextInvalid,d=e.isRequired;return o().createElement(l.FormGroup,{fieldId:i,label:a,validated:s,helperText:m,helperTextInvalid:u,isRequired:d,labelIcon:o().createElement(l.Popover,{headerContent:o().createElement("div",null,n),bodyContent:o().createElement("div",null,r)},o().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},o().createElement(p.ZP,{noVerticalAlign:!0})))},t)},u=n(47443),d=n(47408),f=n(95574),b=n(53443),_=n(71302),v=n(26585),g=(n(63168),function(){return(g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}),y=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{c(i.next(e))}catch(e){a(e)}}function r(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}c((i=i.apply(e,t||[])).next())}))},h=function(e,t){var n,i,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,i=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}},E=function(e){var t=e.isCreate,n=e.saveTopic,p=e.handleCancel,E=e.topicData,x=e.setTopicData,k=e.isLoadingSave,T=(0,i.useState)("default"),C=T[0],L=T[1],w=(0,i.useState)(""),I=w[0],P=w[1],S=(0,i.useState)(!1),B=S[0],A=S[1],z=(0,i.useState)("default"),V=z[0],R=z[1],N=(0,i.useState)(!1),H=N[0],O=N[1],D=(0,i.useState)(Number(E.numPartitions)),M=D[0],F=D[1],j=(0,u.dd)().showModal,$=(0,a.useTranslation)().t,U=(0,i.useState)(!0),G=U[0],q=U[1],Z=(0,i.useState)(!1),J=Z[0],K=Z[1],W=(0,i.useState)(7),Q=W[0],X=W[1],Y=(0,i.useState)("days"),ee=Y[0],te=Y[1],ne=(0,i.useState)(1),ie=ne[0],oe=ne[1],ae=(0,i.useState)("bytes"),le=ae[0],re=ae[1],ce=$(t?"topic.create_topic":"common.save"),se=[{key:"compact",value:"compact",label:$("common.compact"),isDisabled:!1},{key:"delete",value:"delete",label:$("common.delete"),isDisabled:!1},{key:"compact-delete",value:"compact, delete",label:$("common.compact")+", "+$("common.delete"),isDisabled:!1}],pe=(0,i.useContext)(v.E),me=function(e){return y(void 0,void 0,void 0,(function(){var i,o,a;return h(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,(0,_.BN)(e,pe)];case 1:return(i=l.sent())&&(t?(P($("topic.already_exists",{name:e})),L("error"),A(!1)):F(null===(a=null==i?void 0:i.partitions)||void 0===a?void 0:a.length)),[3,3];case 2:return o=l.sent(),t&&"404"==o.response.status&&(L("default"),A(!1),n()),[3,3];case 3:return[2]}}))}))};(0,i.useEffect)((function(){t||me(E.name),ue(E.name),te("milliseconds")}),[]),(0,i.useEffect)((function(){t||("-1"===E["retention.bytes"]?K(!1):(K(!0),oe(Number(E["retention.bytes"]))),"-1"===E["retention.ms"]?q(!1):(q(!0),X(Number(E["retention.ms"]))))}),[E["retention.bytes"],E["retention.ms"]]);var ue=function(e){var t=new RegExp("^[a-zA-Z0-9._-]+$");e.length&&!t.test(e)?(P($("topic.topic_name_helper_text")),L("error")):e.length>249?(L("error"),P($("topic.cannot_exceed_characters"))):"."===e||".."===e?(L("error"),P($("topic.invalid_name_with_dot"))):L("default")},de=function(e,t){var n=t.target.name;"custom-retention-time-unit"===n&&(te(e),G&&x(g(g({},E),{"retention.ms.unit":e}))),"custom-retention-size-unit"===n&&(re(e),J&&x(g(g({},E),{"retention.bytes.unit":e})))},fe=function(e){var t=e.currentTarget,n=t.name,i=t.value;"custom-retention-time"===n?(X(Number(i)),G&&x(g(g({},E),{"retention.ms":i}))):"custom-retention-size"===n&&(oe(Number(i)),J&&x(g(g({},E),{"retention.bytes":i})))},be=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var n=Q+1;X(n),G&&x(g(g({},E),{"retention.ms":n.toString()}))}else if("custom-retention-size"===t){var i=ie+1;oe(i),J&&x(g(g({},E),{"retention.bytes":i.toString()}))}},_e=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var n=Q-1;X(n),G&&x(g(g({},E),{"retention.ms":n.toString()}))}else if("custom-retention-size"===t){var i=ie-1;oe(i),J&&x(g(g({},E),{"retention.bytes":i.toString()}))}},ve=function(e,t){switch(t.target.name){case"custom-retention-time":q(!0),x(g(g({},E),{"retention.ms":Q.toString(),"retention.ms.unit":ee}));break;case"unlimited-retention-time":q(!1),x(g(g({},E),{"retention.ms":"-1","retention.ms.unit":"milliseconds"}));break;case"custom-retention-size":K(!0),x(g(g({},E),{"retention.bytes":ie.toString(),"retention.bytes.unit":le}));break;case"unlimited-retention-size":K(!1),x(g(g({},E),{"retention.bytes":"-1","retention.bytes.unit":"bytes"}))}},ge=o().createElement(s,{inputName:"custom-retention-time",onChange:fe,onPlus:be,onMinus:_e,value:Q,plusBtnProps:{name:"custom-retention-time"},minusBtnProps:{name:"custom-retention-time"},id:"core-config-retention-time-unit",toggleId:"core-config-retention-dropdowntoggle",name:"custom-retention-time-unit",dropdownValue:ee,ariaLabel:$("common.select_unit"),onSelectOption:de,min:0,type:"time"}),ye=o().createElement(s,{inputName:"custom-retention-size",onChange:fe,onPlus:be,onMinus:_e,value:ie,plusBtnProps:{name:"custom-retention-size"},minusBtnProps:{name:"custom-retention-size"},id:"core-config-retention-size-unit",toggleId:"core-config-retention-size-dropdowntoggle",name:"custom-retention-size-unit",dropdownValue:le,ariaLabel:$("common.select_unit"),onSelectOption:de,min:0,type:"memory"}),he=[{href:"#core-configuration",label:$("topic.core_configuration")},{href:"#messages",label:$("topic.messages")},{href:"#log",label:$("topic.log")},{href:"#replication",label:$("topic.replication")},{href:"#cleanup",label:$("common.cleanup")},{href:"#index",label:$("topic.index")},{href:"#flush",label:$("topic.flush")}];return o().createElement(o().Fragment,null,o().createElement(l.Sidebar,{hasGutter:!0},o().createElement(l.SidebarPanel,{variant:"sticky"},o().createElement(l.JumpLinks,{isVertical:!0,label:$("topic.jump_to_section"),scrollableSelector:"#scrollablePageMain",style:{position:"sticky"},offset:-164,expandable:{default:"expandable",md:"nonExpandable"},isExpanded:!1},null==he?void 0:he.map((function(e,t){var n=e.href,i=e.label;return o().createElement(l.JumpLinksItem,{key:t,href:n},i)})))),o().createElement(l.SidebarContent,null,o().createElement(l.Form,null,o().createElement(l.FormSection,{title:$("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},$("topic.core_config_info"))),t?o().createElement(m,{labelHead:$("topic.topic_name"),fieldId:"create-topic-name",fieldLabel:$("topic.topic_name"),labelBody:$("topic.topic_name_description"),buttonAriaLabel:"More info for topic name field",helperTextInvalid:I,validated:C,isRequired:!0,helperText:$("topic.topic_name_helper_text")},o().createElement(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:E.name,onChange:function(e,t){var n;ue(e);var i=t.currentTarget.name;x(g(g({},E),((n={})[(0,b.FB)(i)]=e,n)))},label:$("topic.topic_name"),placeholder:$("topic.enter_name"),validated:C})):o().createElement(f.R,{fieldId:"topic-name",btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:E.name,popoverBody:$("topic.topic_name_description"),popoverHeader:$("topic.topic_name")}),o().createElement(m,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:$("topic.partitions"),labelBody:$("topic.partitions_description"),buttonAriaLabel:"More info for partitions field",validated:V,helperText:H?$("topic.partitions_warning"):void 0},o().createElement(l.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:function(e){var t,n=e.currentTarget,i=n.name,o=n.value,a=Number(o);M&&(a>M&&(R("warning"),O(!0)),a<M?(a=M,R("default"),O(!1)):a>r.TE&&(a=r.TE)),x(g(g({},E),((t={})[(0,b.FB)(i)]=a,t)))},onPlus:function(e){var n,i=e.currentTarget.name,o=(0,b.FB)(i);x(g(g({},E),((n={})[o]=Number(E[o])+1,n))),t||(M&&Number(E.numPartitions+1)>M?(R("warning"),O(!0)):(R("default"),O(!1)))},onMinus:function(e){var n,i=e.currentTarget.name,o=(0,b.FB)(i);x(g(g({},E),((n={})[o]=Number(E[o])-1,n))),t||(M&&Number(E.numPartitions+-1)>M?(R("warning"),O(!0)):(R("default"),O(!1)))},value:Number(E.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"},min:M,max:r.TE})),o().createElement(f.R,{fieldId:"replicas",btnAriaLabel:$("topic.replicas"),fieldLabel:$("topic.replicas"),fieldValue:t?r.Rc:E.replicationFactor,popoverBody:$("topic.replicas_description"),popoverHeader:$("topic.replicas")}),o().createElement(f.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:r.MO,popoverBody:$("topic.min_insync_replicas_description"),popoverHeader:$("topic.min_insync_replicas")}),o().createElement(m,{fieldId:"retention",fieldLabel:"Retention time",labelHead:$("topic.retention_time"),labelBody:$("topic.retention_time_description"),buttonAriaLabel:"More info for retention time field"},o().createElement(l.Stack,{hasGutter:!0},o().createElement(l.Radio,{isChecked:G,name:"custom-retention-time",onChange:ve,label:ge,className:"kafka-ui--radio-label__number-input","aria-label":"custom duration",id:"custom-retention-time",value:"custom"}),o().createElement(l.Radio,{isChecked:!G,name:"unlimited-retention-time",onChange:ve,label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-time",value:"unlimited"}))),o().createElement(m,{fieldId:"retention-size",fieldLabel:"Retention size",labelHead:$("topic.retention_size"),labelBody:$("topic.retention_size_description"),buttonAriaLabel:"More info for retention size field"},o().createElement(l.Stack,{hasGutter:!0},o().createElement(l.Radio,{isChecked:J,name:"custom-retention-size",onChange:ve,label:ye,className:"kafka-ui--radio-label__number-input","aria-label":"custom size",id:"custom-retention-size",value:"custom"}),o().createElement(l.Radio,{isChecked:!J,name:"unlimited-retention-size",onChange:ve,label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-size",value:"unlimited"})))),o().createElement(l.FormSection,{title:$("topic.messages"),id:"messages",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},$("topic.message_section_info"))),o().createElement(f.R,{fieldId:"max-message-size",btnAriaLabel:$("topic.max_message_size"),fieldLabel:$("topic.max_message_size"),fieldValue:r._$,popoverBody:$("topic.max_message_size_description"),popoverHeader:$("topic.max_message_size")}),o().createElement(f.R,{fieldId:"message-timestamp-type",btnAriaLabel:$("topic.message_timestamp_type"),fieldLabel:$("topic.message_timestamp_type"),fieldValue:r.K,popoverBody:$("topic.message_timestamp_type_description"),popoverHeader:$("topic.message_timestamp_type")}),o().createElement(f.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:$("topic.max_message_timestamp_diff"),fieldLabel:$("topic.max_message_timestamp_diff"),fieldValue:r.Y,popoverBody:$("topic.max_message_timestamp_diff_description"),popoverHeader:$("topic.max_message_timestamp_diff")}),o().createElement(f.R,{fieldId:"compression-type",btnAriaLabel:$("topic.compression_type"),fieldLabel:$("topic.compression_type"),fieldValue:"Producer",popoverBody:$("topic.compression_type_description"),popoverHeader:$("topic.compression_type")}),o().createElement(f.R,{fieldId:"message-format",btnAriaLabel:$("topic.message_format"),fieldLabel:$("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:$("topic.message_format_description"),popoverHeader:$("topic.message_format")})),o().createElement(l.FormSection,{title:$("topic.log"),id:"log",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p},$("topic.log_section_info")),o().createElement(l.Text,{component:l.TextVariants.small},$("topic.log_section_info_note"))),o().createElement(m,{fieldId:"cleanup-policy",fieldLabel:$("topic.cleanup_policy"),labelHead:$("topic.cleanup_policy"),labelBody:$("topic.cleanup_policy_description"),buttonAriaLabel:$("topic.cleanup_policy")},o().createElement(c.A,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:$("common.select_policy"),onSelectOption:function(e,t){var n,i=t.target.name;x(g(g({},E),((n={})[(0,b.$X)(i)]=e,n)))},items:se,name:"cleanup-policy",value:E["cleanup.policy"]||""})),o().createElement(f.R,{fieldId:"delete-retention-time",btnAriaLabel:$("topic.delete_retention_time"),fieldLabel:$("topic.delete_retention_time"),fieldValue:r.sN,popoverBody:$("topic.delete_retention_time_description"),popoverHeader:$("topic.delete_retention_time")}),o().createElement(f.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:$("topic.min_cleanable_ratio"),fieldLabel:$("topic.min_cleanable_ratio"),fieldValue:r.PT,popoverBody:$("topic.min_cleanable_ratio_description"),popoverHeader:$("topic.min_cleanable_ratio")}),o().createElement(f.R,{fieldId:"min-compaction-lag-time-description",btnAriaLabel:$("topic.min_compaction_lag_time"),fieldLabel:$("topic.min_compaction_lag_time"),fieldValue:r.A7,popoverBody:$("topic.min_compaction_lag_time_description"),popoverHeader:$("topic.min_compaction_lag_time")})),o().createElement(l.FormSection,{title:$("topic.replication"),id:"replication",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p},$("topic.replication_section_info"),o().createElement(l.Text,{component:l.TextVariants.small},$("topic.replication_section_info_note")))),o().createElement(f.R,{fieldId:"unclean-leader-election",btnAriaLabel:$("topic.unclean_leader_election"),fieldLabel:$("topic.unclean_leader_election"),fieldValue:$("common.disabled"),popoverBody:$("topic.unclean_leader_election_description"),popoverHeader:$("topic.unclean_leader_election")})),o().createElement(l.FormSection,{title:$("common.cleanup"),id:"cleanup",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},$("topic.cleanup_section_info"))),o().createElement(f.R,{fieldId:"log-segment-size",btnAriaLabel:$("topic.log_segment_size"),fieldLabel:$("topic.log_segment_size"),fieldValue:r.f8,popoverBody:$("topic.log_segment_size"),popoverHeader:$("topic.log_segment_size_description")}),o().createElement(f.R,{fieldId:"segement-time",btnAriaLabel:$("topic.segement_time"),fieldLabel:$("topic.segement_time"),fieldValue:r.$$,popoverBody:$("topic.segement_time_description"),popoverHeader:$("topic.segement_time")}),o().createElement(f.R,{fieldId:"segment-jitter-time",btnAriaLabel:$("topic.segment_jitter_time"),fieldLabel:$("topic.segment_jitter_time"),fieldValue:r.W$,popoverBody:$("topic.segment_jitter_time_description"),popoverHeader:$("topic.segment_jitter_time")}),o().createElement(f.R,{fieldId:"file-delete-delay",btnAriaLabel:$("topic.file_delete_delay"),fieldLabel:$("topic.file_delete_delay"),fieldValue:r.pJ,popoverBody:$("topic.file_delete_delay_description"),popoverHeader:$("topic.file_delete_delay")}),o().createElement(f.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:$("topic.preallocate_log_segment_files"),fieldLabel:$("topic.preallocate_log_segment_files"),fieldValue:$("common.disabled"),popoverBody:$("topic.preallocate_log_segment_files_description"),popoverHeader:$("topic.preallocate_log_segment_files")})),o().createElement(l.FormSection,{title:$("topic.index"),id:"index",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},$("topic.index_section_info"))),o().createElement(f.R,{fieldId:"index-interval-size",btnAriaLabel:$("topic.index_interval_size"),fieldLabel:$("topic.index_interval_size"),fieldValue:r.Q_,popoverBody:$("topic.index_interval_size_description"),popoverHeader:$("topic.index_interval_size")}),o().createElement(f.R,{fieldId:"segment-index-size",btnAriaLabel:$("topic.segment_index_size"),fieldLabel:$("topic.segment_index_size"),fieldValue:r.nL,popoverBody:$("topic.segment_index_size_description"),popoverHeader:$("topic.segment_index_size")})),o().createElement(l.FormSection,{title:$("topic.flush"),id:"flush",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},$("topic.flush_section_info"))),o().createElement(f.R,{fieldId:"flush-interval-messages",btnAriaLabel:$("topic.flush_interval_messages"),fieldLabel:$("topic.flush_interval_messages"),fieldValue:r.mr,popoverBody:$("topic.flush_interval_messages_description"),popoverHeader:$("topic.flush_interval_messages")}),o().createElement(f.R,{fieldId:"flush-interval-time",btnAriaLabel:$("topic.flush_interval_time"),fieldLabel:$("topic.flush_interval_time"),fieldValue:r.qh,popoverBody:$("topic.flush_interval_time_description"),popoverHeader:$("topic.flush_interval_time")}))),o().createElement(l.ActionGroup,{className:"kafka-ui--sticky-footer"},o().createElement(l.Button,{isLoading:B||k,onClick:function(){t?E.name.length<1?(P($("topic.required")),L("error")):(A(!0),me(E.name)):H?j(d.w.UpdatePartitions,{onSaveTopic:n}):n()},variant:"primary","data-testid":t?"topicAdvanceCreate-actionCreate":"tabProperties-actionSave",isDisabled:"default"!=C},ce),o().createElement(l.Button,{onClick:p,variant:"link","data-testid":t?"topicAdvanceCreate-actionCancel":"tabProperties-actionCancel"},$("common.cancel"))))))}},53443:(e,t,n)=>{n.d(t,{FB:()=>a,$X:()=>l,L3:()=>s,hM:()=>p});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},a=function(e){return e.split("-").map((function(e,t){return t>0?(n=e).charAt(0).toUpperCase()+n.slice(1):e;var n})).join("")},l=function(e){return e.replaceAll("-",".")},r={bytes:1,kibibytes:1024,mebibytes:1048576,gibibytes:1073741824,tebibytes:10995116e5},c={milliseconds:1,seconds:1e3,days:864e5,months:2592e6,years:31536e6},s=function(e){var t=i({},e);for(var n in t)"ms"===n.split(".").pop()&&(t[n]=String(Number(t[n])*c[t[n+".unit"]||"milliseconds"])),"bytes"===n.split(".").pop()&&(t[n]=String(Number(t[n])*r[t[n+".unit"]||"bytes"]));for(var n in t["flush.messages"]&&(t["flush.messages"]=String(Number(t["flush.messages"])*c[t["flush.messages.unit"]||"milliseconds"])),t)"unit"===n.split(".").pop()&&delete t[n];return t},p=function(e){var t=e.name,n=e.numPartitions,i=o(e,["name","numPartitions"]),a=[];for(var l in i)l&&a.push({key:l,value:i[l].toString()});return{name:t,settings:{numPartitions:Number(n),config:a}}}},71302:(e,t,n)=>{n.d(t,{BB:()=>c,Rh:()=>s,eR:()=>m,BN:()=>u,BK:()=>d});var i,o=n(28696),a=n(14697),l=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{c(i.next(e))}catch(e){a(e)}}function r(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}c((i=i.apply(e,t||[])).next())}))},r=function(e,t){var n,i,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,i=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(i||(i={}));var c=function(e,t,n,i,c,s,p){return void 0===s&&(s=a.SortByDirection.asc),l(void 0,void 0,void 0,(function(){var a;return r(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getTopics(c,t,n,i,void 0,s,p)];case 2:return[2,l.sent().data]}}))}))},s=function(e,t){return l(void 0,void 0,void 0,(function(){var n,i;return r(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return i=a.sent().data,[2,p(i)]}}))}))},p=function(e){var t,n,i,o={};return o.name=e.name,null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(o[e.key]=e.value)})),o.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length.toString())||"0",o.replicationFactor=(null==e?void 0:e.partitions)&&(null===(i=null==e?void 0:e.partitions[0].replicas)||void 0===i?void 0:i.length.toString())||"0",o},m=function(e,t,n){return l(void 0,void 0,void 0,(function(){var i;return r(this,(function(a){switch(a.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return i=a.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:i,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,a.sent().status]}}))}))},u=function(e,t){return l(void 0,void 0,void 0,(function(){var n,i,a,l,c,s;return r(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return i=r.sent(),(a=i.data).config=a.config||[],a.config.push({key:"replicationFactor",value:null===(s=null===(c=null===(l=i.data)||void 0===l?void 0:l.partitions)||void 0===c?void 0:c.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===s?void 0:s.toString()}),[2,i.data]}}))}))},d=function(e,t){return l(void 0,void 0,void 0,(function(){var n;return r(this,(function(i){switch(i.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=i.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return i.sent(),[2]}}))}))}}}]);
//# sourceMappingURL=558.1c86bb18.bundle.js.map
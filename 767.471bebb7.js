"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[767],{96466:(e,t,i)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=i(35183).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},34046:(e,t,i)=>{t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=i(35183).createIcon(t.MU),t.ZP=t.by},63168:()=>{},51356:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(75418),o=i.n(n),a=i(84669),l=i(96466),r=function(e){var t=e.id,i=e.toggleId,r=e.items,c=e.value,s=e.ariaLabel,m=e.onSelectOption,p=e.name,d=e.menuAppendTo,u=(0,n.useState)(),f=u[0],b=u[1],_=o().createElement(a.DropdownToggle,{id:i,onToggle:function(){b((function(e){return!e}))},toggleIndicator:l.default},c);return o().createElement(a.Dropdown,{name:p,id:t,onSelect:function(e){var t=e.currentTarget.textContent;m&&(e.target.name=p,m(t,e)),b((function(e){return!e}))},toggle:_,isOpen:f,"aria-label":s,dropdownItems:function(e){var t=e.map((function(e){var t=e.key,i=e.value,n=e.label;return o().createElement(a.DropdownItem,{key:t,value:i},n||i)}));return t}(r),menuAppendTo:d})}},41272:(e,t,i)=>{i.d(t,{Q:()=>r});var n=i(84669),o=i(34046),a=i(75418),l=i.n(a),r=function(e){var t=e.children,i=e.labelHead,a=e.fieldId,r=e.fieldLabel,c=e.labelBody,s=e.buttonAriaLabel,m=e.validated,p=e.helperText,d=e.helperTextInvalid,u=e.isRequired;return l().createElement(n.FormGroup,{fieldId:a,label:r,validated:m,helperText:p,helperTextInvalid:d,isRequired:u,labelIcon:l().createElement(n.Popover,{headerContent:l().createElement("div",null,i),bodyContent:l().createElement("div",null,c)},l().createElement("button",{"aria-label":s,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},l().createElement(o.ZP,{noVerticalAlign:!0})))},t)}},39806:(e,t,i)=>{i.d(t,{R:()=>r});var n=i(84669),o=i(75418),a=i.n(o),l=i(34046),r=function(e){var t=e.fieldId,i=e.fieldLabel,o=e.btnAriaLabel,r=e.fieldValue,c=e.popoverBody,s=e.popoverHeader,m="-";return!0===e.showUnlimited&&void 0!==r&&parseInt(r)<0?m="Unlimited":r&&(m=r),a().createElement(n.FormGroup,{fieldId:t,label:i,className:"kafka-ui-form-group--readonly",labelIcon:a().createElement(n.Popover,{headerContent:a().createElement("div",null,s),bodyContent:a().createElement("div",null,c)},a().createElement("button",{"aria-label":o,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},a().createElement(l.ZP,{noVerticalAlign:!0})))},a().createElement(n.TextInput,{isReadOnly:!0,type:"text",id:t,name:t,value:m}))}},86737:(e,t,i)=>{i.d(t,{Rc:()=>n,PT:()=>o,MO:()=>a,$$:()=>l,Y:()=>r,nL:()=>c,Q_:()=>s,f8:()=>m,sN:()=>p,W$:()=>d,pJ:()=>u,_$:()=>f,K:()=>b,A7:()=>_,mr:()=>g,qh:()=>v,jR:()=>y,TE:()=>h});var n="3",o="0.5",a="2",l="604800000 milliseconds (7 days)",r="9223372036854775807 milliseconds",c="10485760 bytes (10 mebibytes)",s="4096 bytes (4 kibibytes)",m="1073741824 bytes (1 gibibyte)",p="86400000 milliseconds (1 day)",d="0 milliseconds",u="60000 milliseconds (1 minute)",f="1048588 bytes",b="CreateTime",_="0 milliseconds",g="9223372036854775807 messages",v="9223372036854775807 milliseconds",y=1,h=100},88767:(e,t,i)=>{i.d(t,{W:()=>E});var n=i(75418),o=i.n(n),a=i(11593),l=i(84669),r=i(86737),c=i(51356),s=function(e){var t=e.id,i=e.toggleId,n=e.dropdownValue,a=e.ariaLabel,r=e.onSelectOption,s=e.name,m=e.inputName,p=e.onChange,d=e.onPlus,u=e.onMinus,f=e.value,b=e.plusBtnProps,_=e.minusBtnProps,g=e.type,v=e.min,y=[{key:"milliseconds",value:"milliseconds",isDisabled:!1},{key:"seconds",value:"seconds",isDisabled:!1},{key:"days",value:"days",isDisabled:!1},{key:"months",value:"months",isDisabled:!1},{key:"years",value:"years",isDisabled:!1}],h=[{key:"bytes",value:"bytes",isDisabled:!1},{key:"kibibytes",value:"kibibytes",isDisabled:!1},{key:"mebibytes",value:"mebibytes",isDisabled:!1},{key:"gibibytes",value:"gibibytes",isDisabled:!1},{key:"tebibytes",value:"tebibytes",isDisabled:!1}];return o().createElement(l.Flex,null,o().createElement(l.FlexItem,{grow:{default:"grow"}},o().createElement(l.NumberInput,{inputName:m,onChange:p,onPlus:d,onMinus:u,value:f,plusBtnProps:b,minusBtnProps:_,min:v,widthChars:10})),o().createElement(l.FlexItem,null,o().createElement(c.A,{id:t,toggleId:i,ariaLabel:a,onSelectOption:r,items:function(e){switch(e){case"time":return y;case"memory":return h;default:return[]}}(g),name:s,value:n||""})))},m=i(41861),p=i(52049),d=i(41272),u=i(39806),f=i(1787),b=i(60540),_=i(3654),g=(i(63168),i(5736)),v=function(){return v=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)},y=function(e,t,i,n){return new(i||(i=Promise))((function(o,a){function l(e){try{c(n.next(e))}catch(e){a(e)}}function r(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((n=n.apply(e,t||[])).next())}))},h=function(e,t){var i,n,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}},E=function(e){var t=e.isCreate,i=e.saveTopic,E=e.handleCancel,L=e.topicData,x=e.setTopicData,C=e.isLoadingSave,k=(0,n.useState)("default"),I=k[0],T=k[1],S=(0,n.useState)(""),w=S[0],P=S[1],B=(0,n.useState)(!1),z=B[0],A=B[1],V=(0,n.useState)("default"),N=V[0],R=V[1],O=(0,n.useState)(!1),H=O[0],D=O[1],M=(0,n.useState)(Number(L.numPartitions)),F=M[0],j=M[1],$=(0,m.dd)().showModal,J=(0,a.useTranslation)().t,U=(0,n.useState)(!0),G=U[0],Q=U[1],q=(0,n.useState)(!1),Z=q[0],W=q[1],K=(0,n.useState)(7),X=K[0],Y=K[1],ee=(0,n.useState)("days"),te=ee[0],ie=ee[1],ne=(0,n.useState)(1),oe=ne[0],ae=ne[1],le=(0,n.useState)("bytes"),re=le[0],ce=le[1],se=J(t?"topic.create_topic":"common.save"),me=[{key:"compact",value:"compact",label:J("common.compact"),isDisabled:!1},{key:"delete",value:"delete",label:J("common.delete"),isDisabled:!1},{key:"compact-delete",value:"compact, delete",label:J("common.compact")+", "+J("common.delete"),isDisabled:!1}],pe=(0,n.useContext)(_.E),de=function(e){return y(void 0,void 0,void 0,(function(){var n,o,a,l,r;return h(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,(0,b.BN)(e,pe)];case 1:return(n=c.sent())&&(t?(P(J("topic.already_exists",{name:e})),T("error"),A(!1)):j(null===(l=null==n?void 0:n.partitions)||void 0===l?void 0:l.length)),[3,3];case 2:return o=c.sent(),a=void 0,o&&(0,g.I)(o)&&(a=null===(r=o.response)||void 0===r?void 0:r.data.code),t&&404===a&&(T("default"),A(!1),i()),[3,3];case 3:return[2]}}))}))};(0,n.useEffect)((function(){t||de(L.name),ue(L.name),ie("milliseconds")}),[]),(0,n.useEffect)((function(){t||("-1"===L["retention.bytes"]?W(!1):(W(!0),ae(Number(L["retention.bytes"]))),"-1"===L["retention.ms"]?Q(!1):(Q(!0),Y(Number(L["retention.ms"]))))}),[L["retention.bytes"],L["retention.ms"]]);var ue=function(e){var t=new RegExp("^[a-zA-Z0-9._-]+$");e.length&&!t.test(e)?(P(J("topic.topic_name_helper_text")),T("error")):e.length>249?(T("error"),P(J("topic.cannot_exceed_characters"))):"."===e||".."===e?(T("error"),P(J("topic.invalid_name_with_dot"))):T("default")},fe=function(e,t){var i=t.target.name;"custom-retention-time-unit"===i&&(ie(e),G&&x(v(v({},L),{"retention.ms.unit":e}))),"custom-retention-size-unit"===i&&(ce(e),Z&&x(v(v({},L),{"retention.bytes.unit":e})))},be=function(e){var t=e.currentTarget,i=t.name,n=t.value;"custom-retention-time"===i?(Y(Number(n)),G&&x(v(v({},L),{"retention.ms":n}))):"custom-retention-size"===i&&(ae(Number(n)),Z&&x(v(v({},L),{"retention.bytes":n})))},_e=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var i=X+1;Y(i),G&&x(v(v({},L),{"retention.ms":i.toString()}))}else if("custom-retention-size"===t){var n=oe+1;ae(n),Z&&x(v(v({},L),{"retention.bytes":n.toString()}))}},ge=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var i=X-1;Y(i),G&&x(v(v({},L),{"retention.ms":i.toString()}))}else if("custom-retention-size"===t){var n=oe-1;ae(n),Z&&x(v(v({},L),{"retention.bytes":n.toString()}))}},ve=function(e,t){switch(t.target.name){case"custom-retention-time":Q(!0),x(v(v({},L),{"retention.ms":X.toString(),"retention.ms.unit":te}));break;case"unlimited-retention-time":Q(!1),x(v(v({},L),{"retention.ms":"-1","retention.ms.unit":"milliseconds"}));break;case"custom-retention-size":W(!0),x(v(v({},L),{"retention.bytes":oe.toString(),"retention.bytes.unit":re}));break;case"unlimited-retention-size":W(!1),x(v(v({},L),{"retention.bytes":"-1","retention.bytes.unit":"bytes"}))}},ye=o().createElement(s,{inputName:"custom-retention-time",onChange:be,onPlus:_e,onMinus:ge,value:X,plusBtnProps:{name:"custom-retention-time"},minusBtnProps:{name:"custom-retention-time"},id:"core-config-retention-time-unit",toggleId:"core-config-retention-dropdowntoggle",name:"custom-retention-time-unit",dropdownValue:te,ariaLabel:J("common.select_unit"),onSelectOption:fe,min:0,type:"time"}),he=o().createElement(s,{inputName:"custom-retention-size",onChange:be,onPlus:_e,onMinus:ge,value:oe,plusBtnProps:{name:"custom-retention-size"},minusBtnProps:{name:"custom-retention-size"},id:"core-config-retention-size-unit",toggleId:"core-config-retention-size-dropdowntoggle",name:"custom-retention-size-unit",dropdownValue:re,ariaLabel:J("common.select_unit"),onSelectOption:fe,min:0,type:"memory"});return o().createElement(l.PageSection,{padding:{default:"noPadding"}},o().createElement(l.Sidebar,{hasGutter:!0},o().createElement(l.SidebarPanel,{variant:"sticky"},o().createElement(l.JumpLinks,{isVertical:!0,label:J("topic.jump_to_section"),scrollableSelector:".app-services-ui--u-display-contents > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",style:{position:"sticky"},offset:-164},o().createElement(l.JumpLinksItem,{key:0,href:"#core-configuration"},J("topic.core_configuration")),o().createElement(l.JumpLinksItem,{key:1,href:"#messages"},J("topic.messages")),o().createElement(l.JumpLinksItem,{key:2,href:"#log"},J("topic.log")),o().createElement(l.JumpLinksItem,{key:3,href:"#replication"},J("topic.replication")),o().createElement(l.JumpLinksItem,{key:4,href:"#cleanup"},J("common.cleanup")),o().createElement(l.JumpLinksItem,{key:5,href:"#index"},J("topic.index")),o().createElement(l.JumpLinksItem,{key:6,href:"#flush"},J("topic.flush")))),o().createElement(l.SidebarContent,null,o().createElement(l.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},o().createElement(l.PageSection,{padding:{default:"noPadding"}},o().createElement(l.Form,null,o().createElement(l.FormSection,{title:J("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},J("topic.core_config_info"))),t?o().createElement(d.Q,{labelHead:J("topic.topic_name"),fieldId:"create-topic-name",fieldLabel:J("topic.topic_name"),labelBody:J("topic.topic_name_description"),buttonAriaLabel:"More info for topic name field",helperTextInvalid:w,validated:I,isRequired:!0,helperText:J("topic.topic_name_helper_text")},o().createElement(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:L.name,onChange:function(e,t){var i;ue(e);var n=t.currentTarget.name;x(v(v({},L),((i={})[(0,f.FB)(n)]=e,i)))},label:J("topic.topic_name"),placeholder:J("topic.enter_name"),validated:I})):o().createElement(u.R,{fieldId:"topic-name",btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:L.name,popoverBody:J("topic.topic_name_description"),popoverHeader:J("topic.topic_name")}),o().createElement(d.Q,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:J("topic.partitions"),labelBody:J("topic.partitions_description"),buttonAriaLabel:"More info for partitions field",validated:N,helperText:H?J("topic.partitions_warning"):void 0},o().createElement(l.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:function(e){var t,i=e.currentTarget,n=i.name,o=i.value,a=Number(o);F&&(a>F&&(R("warning"),D(!0)),a<F?(a=F,R("default"),D(!1)):a>r.TE&&(a=r.TE)),x(v(v({},L),((t={})[(0,f.FB)(n)]=a,t)))},onPlus:function(e){var i,n=e.currentTarget.name,o=(0,f.FB)(n);x(v(v({},L),((i={})[o]=Number(L[o])+1,i))),t||(F&&Number(L.numPartitions+1)>F?(R("warning"),D(!0)):(R("default"),D(!1)))},onMinus:function(e){var i,n=e.currentTarget.name,o=(0,f.FB)(n);x(v(v({},L),((i={})[o]=Number(L[o])-1,i))),t||(F&&Number(L.numPartitions+-1)>F?(R("warning"),D(!0)):(R("default"),D(!1)))},value:Number(L.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"},min:F,max:r.TE})),o().createElement(u.R,{fieldId:"replicas",btnAriaLabel:J("topic.replicas"),fieldLabel:J("topic.replicas"),fieldValue:t?r.Rc:L.replicationFactor,popoverBody:J("topic.replicas_description"),popoverHeader:J("topic.replicas")}),o().createElement(u.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:r.MO,popoverBody:J("topic.min_insync_replicas_description"),popoverHeader:J("topic.min_insync_replicas")}),o().createElement(d.Q,{fieldId:"retention",fieldLabel:"Retention time",labelHead:J("topic.retention_time"),labelBody:J("topic.retention_time_description"),buttonAriaLabel:"More info for retention time field"},o().createElement(l.Stack,{hasGutter:!0},o().createElement(l.Radio,{isChecked:G,name:"custom-retention-time",onChange:ve,label:ye,className:"kafka-ui--radio-label__number-input","aria-label":"custom duration",id:"custom-retention-time",value:"custom"}),o().createElement(l.Radio,{isChecked:!G,name:"unlimited-retention-time",onChange:ve,label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-time",value:"unlimited"}))),o().createElement(d.Q,{fieldId:"retention-size",fieldLabel:"Retention size",labelHead:J("topic.retention_size"),labelBody:J("topic.retention_size_description"),buttonAriaLabel:"More info for retention size field"},o().createElement(l.Stack,{hasGutter:!0},o().createElement(l.Radio,{isChecked:Z,name:"custom-retention-size",onChange:ve,label:he,className:"kafka-ui--radio-label__number-input","aria-label":"custom size",id:"custom-retention-size",value:"custom"}),o().createElement(l.Radio,{isChecked:!Z,name:"unlimited-retention-size",onChange:ve,label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-size",value:"unlimited"})))),o().createElement(l.FormSection,{title:J("topic.messages"),id:"messages",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},J("topic.message_section_info"))),o().createElement(u.R,{fieldId:"max-message-size",btnAriaLabel:J("topic.max_message_size"),fieldLabel:J("topic.max_message_size"),fieldValue:r._$,popoverBody:J("topic.max_message_size_description"),popoverHeader:J("topic.max_message_size")}),o().createElement(u.R,{fieldId:"message-timestamp-type",btnAriaLabel:J("topic.message_timestamp_type"),fieldLabel:J("topic.message_timestamp_type"),fieldValue:r.K,popoverBody:J("topic.message_timestamp_type_description"),popoverHeader:J("topic.message_timestamp_type")}),o().createElement(u.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:J("topic.max_message_timestamp_diff"),fieldLabel:J("topic.max_message_timestamp_diff"),fieldValue:r.Y,popoverBody:J("topic.max_message_timestamp_diff_description"),popoverHeader:J("topic.max_message_timestamp_diff")}),o().createElement(u.R,{fieldId:"compression-type",btnAriaLabel:J("topic.compression_type"),fieldLabel:J("topic.compression_type"),fieldValue:"Producer",popoverBody:J("topic.compression_type_description"),popoverHeader:J("topic.compression_type")}),o().createElement(u.R,{fieldId:"message-format",btnAriaLabel:J("topic.message_format"),fieldLabel:J("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:J("topic.message_format_description"),popoverHeader:J("topic.message_format")})),o().createElement(l.FormSection,{title:J("topic.log"),id:"log",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p},J("topic.log_section_info")),o().createElement(l.Text,{component:l.TextVariants.small},J("topic.log_section_info_note"))),o().createElement(d.Q,{fieldId:"cleanup-policy",fieldLabel:J("topic.cleanup_policy"),labelHead:J("topic.cleanup_policy"),labelBody:J("topic.cleanup_policy_description"),buttonAriaLabel:J("topic.cleanup_policy")},o().createElement(c.A,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:J("common.select_policy"),onSelectOption:function(e,t){var i,n=t.target.name;x(v(v({},L),((i={})[(0,f.$X)(n)]=e,i)))},items:me,name:"cleanup-policy",value:L["cleanup.policy"]||""})),o().createElement(u.R,{fieldId:"delete-retention-time",btnAriaLabel:J("topic.delete_retention_time"),fieldLabel:J("topic.delete_retention_time"),fieldValue:r.sN,popoverBody:J("topic.delete_retention_time_description"),popoverHeader:J("topic.delete_retention_time")}),o().createElement(u.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:J("topic.min_cleanable_ratio"),fieldLabel:J("topic.min_cleanable_ratio"),fieldValue:r.PT,popoverBody:J("topic.min_cleanable_ratio_description"),popoverHeader:J("topic.min_cleanable_ratio")}),o().createElement(u.R,{fieldId:"min-compaction-lag-time-description",btnAriaLabel:J("topic.min_compaction_lag_time"),fieldLabel:J("topic.min_compaction_lag_time"),fieldValue:r.A7,popoverBody:J("topic.min_compaction_lag_time_description"),popoverHeader:J("topic.min_compaction_lag_time")})),o().createElement(l.FormSection,{title:J("topic.replication"),id:"replication",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p},J("topic.replication_section_info"),o().createElement(l.Text,{component:l.TextVariants.small},J("topic.replication_section_info_note")))),o().createElement(u.R,{fieldId:"unclean-leader-election",btnAriaLabel:J("topic.unclean_leader_election"),fieldLabel:J("topic.unclean_leader_election"),fieldValue:J("common.disabled"),popoverBody:J("topic.unclean_leader_election_description"),popoverHeader:J("topic.unclean_leader_election")})),o().createElement(l.FormSection,{title:J("common.cleanup"),id:"cleanup",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},J("topic.cleanup_section_info"))),o().createElement(u.R,{fieldId:"log-segment-size",btnAriaLabel:J("topic.log_segment_size"),fieldLabel:J("topic.log_segment_size"),fieldValue:r.f8,popoverBody:J("topic.log_segment_size"),popoverHeader:J("topic.log_segment_size_description")}),o().createElement(u.R,{fieldId:"segement-time",btnAriaLabel:J("topic.segement_time"),fieldLabel:J("topic.segement_time"),fieldValue:r.$$,popoverBody:J("topic.segement_time_description"),popoverHeader:J("topic.segement_time")}),o().createElement(u.R,{fieldId:"segment-jitter-time",btnAriaLabel:J("topic.segment_jitter_time"),fieldLabel:J("topic.segment_jitter_time"),fieldValue:r.W$,popoverBody:J("topic.segment_jitter_time_description"),popoverHeader:J("topic.segment_jitter_time")}),o().createElement(u.R,{fieldId:"file-delete-delay",btnAriaLabel:J("topic.file_delete_delay"),fieldLabel:J("topic.file_delete_delay"),fieldValue:r.pJ,popoverBody:J("topic.file_delete_delay_description"),popoverHeader:J("topic.file_delete_delay")}),o().createElement(u.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:J("topic.preallocate_log_segment_files"),fieldLabel:J("topic.preallocate_log_segment_files"),fieldValue:J("common.disabled"),popoverBody:J("topic.preallocate_log_segment_files_description"),popoverHeader:J("topic.preallocate_log_segment_files")})),o().createElement(l.FormSection,{title:J("topic.index"),id:"index",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},J("topic.index_section_info"))),o().createElement(u.R,{fieldId:"index-interval-size",btnAriaLabel:J("topic.index_interval_size"),fieldLabel:J("topic.index_interval_size"),fieldValue:r.Q_,popoverBody:J("topic.index_interval_size_description"),popoverHeader:J("topic.index_interval_size")}),o().createElement(u.R,{fieldId:"segment-index-size",btnAriaLabel:J("topic.segment_index_size"),fieldLabel:J("topic.segment_index_size"),fieldValue:r.nL,popoverBody:J("topic.segment_index_size_description"),popoverHeader:J("topic.segment_index_size")})),o().createElement(l.FormSection,{title:J("topic.flush"),id:"flush",titleElement:"h2"},o().createElement(l.TextContent,null,o().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},J("topic.flush_section_info"))),o().createElement(u.R,{fieldId:"flush-interval-messages",btnAriaLabel:J("topic.flush_interval_messages"),fieldLabel:J("topic.flush_interval_messages"),fieldValue:r.mr,popoverBody:J("topic.flush_interval_messages_description"),popoverHeader:J("topic.flush_interval_messages")}),o().createElement(u.R,{fieldId:"flush-interval-time",btnAriaLabel:J("topic.flush_interval_time"),fieldLabel:J("topic.flush_interval_time"),fieldValue:r.qh,popoverBody:J("topic.flush_interval_time_description"),popoverHeader:J("topic.flush_interval_time")}))),o().createElement(l.ActionGroup,{className:"kafka-ui--sticky-footer"},o().createElement(l.Button,{isLoading:z||C,onClick:function(){t?L.name.length<1?(P(J("topic.required")),T("error")):(A(!0),de(L.name)):H?$(p.w.UpdatePartitions,{onSaveTopic:i}):i()},variant:"primary","data-testid":t?"topicAdvanceCreate-actionCreate":"tabProperties-actionSave",isDisabled:"default"!==I},se),o().createElement(l.Button,{onClick:E,variant:"link","data-testid":t?"topicAdvanceCreate-actionCancel":"tabProperties-actionCancel"},J("common.cancel"))))))))}},1787:(e,t,i)=>{i.d(t,{FB:()=>a,$X:()=>l,L3:()=>s,hM:()=>m});var n=function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i},a=function(e){return e.split("-").map((function(e,t){return t>0?(i=e).charAt(0).toUpperCase()+i.slice(1):e;var i})).join("")},l=function(e){return e.replaceAll("-",".")},r={bytes:1,kibibytes:1024,mebibytes:1048576,gibibytes:1073741824,tebibytes:10995116e5},c={milliseconds:1,seconds:1e3,days:864e5,months:2592e6,years:31536e6},s=function(e){var t=n({},e);for(var i in t)"ms"===i.split(".").pop()&&(t[i]=String(Number(t[i])*c[t[i+".unit"]||"milliseconds"])),"bytes"===i.split(".").pop()&&(t[i]=String(Number(t[i])*r[t[i+".unit"]||"bytes"]));for(var i in t["flush.messages"]&&(t["flush.messages"]=String(Number(t["flush.messages"])*c[t["flush.messages.unit"]||"milliseconds"])),t)"unit"===i.split(".").pop()&&delete t[i];return t},m=function(e){var t=e.name,i=e.numPartitions,n=o(e,["name","numPartitions"]),a=[];for(var l in n)l&&a.push({key:l,value:n[l].toString()});return{name:t,settings:{numPartitions:Number(i),config:a}}}},5736:(e,t,i)=>{i.d(t,{I:()=>n});var n=function(e){return void 0!==e}}}]);
//# sourceMappingURL=767.471bebb7.js.map
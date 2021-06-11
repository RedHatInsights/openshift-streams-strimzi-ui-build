(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[568],{568:(e,t,n)=>{"use strict";n.d(t,{e:()=>C});var a=n(7522),i=n.n(a),o=n(8183),r=n(4082),l=function(e){var t=e.isSwitchChecked,n=e.setIsSwitchChecked,a=e.kafkaName,l=e.kafkaPageLink,c=(0,o.useTranslation)().t,m=i().createElement(r.Breadcrumb,null,i().createElement(r.BreadcrumbItem,{to:l||"#"},"Kafka Instances"),i().createElement(r.BreadcrumbItem,{to:"#",isActive:!0},a||c("common.kafka_instance_name")),i().createElement(r.BreadcrumbItem,{to:"#",isActive:!0},c("topic.create_topic")));return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},m),i().createElement(r.PageSection,{variant:r.PageSectionVariants.light},i().createElement(r.Title,{headingLevel:"h1",size:"2xl"},c("topic.create_topic")),i().createElement("br",null),i().createElement(r.Switch,{id:"simple-switch",label:c("topic.show_all_options"),labelOff:c("topic.show_all_options"),isChecked:t,onChange:n,className:"create-topic-wizard"})))},c=(n(3168),function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)}),m=function(e){var t=e.topicData,n=e.setTopicData,a=e.topicNameValidated,l=e.setTopicNameValidated,m=e.invalidText,s=e.setInvalidText,u=(0,o.useTranslation)().t,p=t&&t.name;return i().createElement(r.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(r.FormSection,{title:u("topic.topic_name"),id:"topic-name",titleElement:"h2"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.p},u("topic.topic_name_info")),i().createElement(r.Text,{component:r.TextVariants.small},u("topic.topic_name_info_note"))),i().createElement(r.FormGroup,{label:u("topic.topic_name"),fieldId:"step-topic-name-form",helperText:u("topic.topic_name_helper_text"),helperTextInvalid:m,validated:a,isRequired:!0},i().createElement(r.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name",value:p,onChange:function(e){!function(e){var t=new RegExp("^[a-zA-Z0-9._-]+$");e.length&&!t.test(e)?(s(u("topic.topic_name_helper_text")),l("error")):e.length>249?(l("error"),s(u("topic.cannot_exceed_characters"))):"."===e||".."===e?(l("error"),s(u("topic.invalid_name_with_dot"))):l("default")}(e),n(c(c({},t),{name:e}))},placeholder:u("topic.enter_name"),validated:a}))))},s=function(e){var t=e.partitionTouchspinValue,n=e.setPartitionTouchspinValue,a=(0,o.useTranslation)().t;return i().createElement(r.Form,null,i().createElement(r.FormSection,{title:a("topic.partitions"),id:"partitions",titleElement:"h2"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.p},a("topic.partition_info")),i().createElement(r.Text,{component:r.TextVariants.small},a("topic.partition_info_note"))),i().createElement(r.FormGroup,{label:"Partitions",fieldId:"step-topic-name-form",helperText:a("topic.partition_helper_text"),isRequired:!0},i().createElement(r.NumberInput,{onPlus:function(){n(t+1)},onMinus:function(){n(t-1)},value:t,inputName:"input",onChange:function(e){var t=Number(e.target.value);t<1&&(t=1),n(t)},widthChars:20,min:1}))))},u=function(e){var t,n,l=e.setMsgRetentionValue,c=e.currentPeriod,m=e.currentSize,s=e.setCurrentPeriod,u=e.setCurrentSize,p=e.setRetentionSize,d=(0,o.useTranslation)().t;!function(e){e[e.MILLISECOND=1]="MILLISECOND",e[e.SECOND=1e3]="SECOND",e[e.MINUTE=6e4]="MINUTE",e[e.HOUR=36e5]="HOUR",e[e.DAY=864e5]="DAY",e[e.WEEK=6048e5]="WEEK",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(t||(t={})),function(e){e[e.BYTE=1]="BYTE",e[e.KILOBYTE=1e3]="KILOBYTE",e[e.MEGABYTE=1e6]="MEGABYTE",e[e.GIGABYTE=1e9]="GIGABYTE",e[e.TERABYTE=1e12]="TERABYTE",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(n||(n={}));var E=(0,a.useState)(7),f=E[0],v=E[1],T=(0,a.useState)(1),h=T[0],S=T[1],k=(0,a.useState)(!1),b=k[0],g=k[1],C=(0,a.useState)(!1),y=C[0],I=C[1],_=(0,a.useState)(!1),x=_[0],N=_[1],D=(0,a.useState)(!1),L=D[0],w=D[1],M=(0,a.useState)(t.DAY),O=M[0],U=M[1],B=(0,a.useState)(n.BYTE),A=B[0],F=B[1];(0,a.useEffect)((function(){c===t.DAY?l(t.DAY):c===t.WEEK?l(t.WEEK):c===t.UNLIMITED?l(t.UNLIMITED):c===t.CUSTOM&&l(O*f),m===n.UNLIMITED?p(n.UNLIMITED):m===n.CUSTOM&&p(A*h)}),[c,m,f,h,O,A]);var V=function(e,a){var i=a.target.name;"radioDay"===i?s(t.DAY):"radioWeek"===i?s(t.WEEK):"radioUnlimitedTime"===i?s(t.UNLIMITED):"radioCustomTime"===i&&s(t.CUSTOM),"radioCustomSize"===i?u(n.CUSTOM):"radioUnlimitedSize"===i&&u(n.UNLIMITED)};return i().createElement(i().Fragment,null,i().createElement(r.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(r.FormSection,{title:d("topic.message_retention"),id:"message-retention",titleElement:"h2"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.p},d("topic.message_retention_info")),i().createElement(r.Text,{component:r.TextVariants.small},d("topic.message_retention_info_note"))),i().createElement(r.FormGroup,{fieldId:"form-group-retention-time-in-wizard",label:d("topic.retention_time")},i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.Radio,{isChecked:c===t.DAY,name:"radioDay",onChange:V,label:"A day","aria-label":"A day",id:"radio-controlled-1",value:"day"}),i().createElement(r.Radio,{isChecked:c===t.WEEK,name:"radioWeek",onChange:V,label:"A week","aria-label":"A week",id:"radio-controlled-2",value:"week"}),i().createElement(r.Radio,{isChecked:c===t.CUSTOM,name:"radioCustomTime",onChange:V,label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:"custom"}),i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(r.Flex,null,i().createElement(r.FlexItem,null,i().createElement(r.NumberInput,{onMinus:function(){v(f-1)},onPlus:function(){v(f+1)},value:f,onChange:function(e){v(Number(e.target.value))},min:0})),i().createElement(r.FlexItem,null,i().createElement(r.Select,{variant:r.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){g(e)},onSelect:function(e,n){"days"===n?U(t.DAY):"unlimited"===n?U(t.UNLIMITED):"milliseconds"===n?U(t.MILLISECOND):"seconds"===n?U(t.SECOND):"minutes"===n?U(t.MINUTE):"hours"===n&&U(t.HOUR),N(n),g(!1)},selections:x,isOpen:b},i().createElement(r.SelectOption,{key:0,value:"days",isPlaceholder:!0}),i().createElement(r.SelectOption,{key:1,value:"seconds"}),i().createElement(r.SelectOption,{key:2,value:"minutes"}),i().createElement(r.SelectOption,{key:3,value:"hours"}),i().createElement(r.SelectOption,{key:4,value:"milliseconds"}))))),i().createElement(r.Radio,{isChecked:c===t.UNLIMITED,name:"radioUnlimitedTime",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:"unlimited"}))),i().createElement(r.FormGroup,{fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.Radio,{isChecked:m===n.UNLIMITED,name:"radioUnlimitedSize",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:"unlimited"}),i().createElement(r.Radio,{isChecked:m===n.CUSTOM,name:"radioCustomSize",onChange:V,label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:"custom"}),i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(r.Flex,null,i().createElement(r.FlexItem,null,i().createElement(r.NumberInput,{onMinus:function(){S(h-1)},onPlus:function(){S(h+1)},value:h,onChange:function(e){S(Number(e.target.value))},min:0})),i().createElement(r.FlexItem,null,i().createElement(r.Select,{variant:r.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){I(e)},onSelect:function(e,t){"unlimited"===t?F(n.UNLIMITED):"bytes"===t?F(n.BYTE):"kilobytes"===t?F(n.KILOBYTE):"megabytes"===t?F(n.MEGABYTE):"gigabytes"===t?F(n.GIGABYTE):"terabytes"===t&&F(n.TERABYTE),w(t),I(!1)},selections:L,isOpen:y},i().createElement(r.SelectOption,{key:5,value:"bytes",isPlaceholder:!0}),i().createElement(r.SelectOption,{key:6,value:"kilobytes"}),i().createElement(r.SelectOption,{key:7,value:"megabytes"}),i().createElement(r.SelectOption,{key:8,value:"gigabytes"}),i().createElement(r.SelectOption,{key:9,value:"terabytes"}))))))))))},p=n(5574),d=function(e){var t=e.replicationFactor,n=e.minInSyncReplica,a=(0,o.useTranslation)().t;return i().createElement(r.Form,null,i().createElement(r.FormSection,{title:a("common.replicas"),id:"replica-section",titleElement:"h2"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.p},a("topic.replicas_info")),i().createElement(r.Text,{component:r.TextVariants.small},a("topic.replicas_detail"))),i().createElement(r.Alert,{variant:"info",isInline:!0,title:a("topic.replicas_helper_text")}),i().createElement(p.R,{fieldId:"replicas",btnAriaLabel:a("common.replicas"),fieldLabel:a("common.replicas"),fieldValue:t.toString(),popoverBody:a("topic.replicas_description"),popoverHeader:a("topic.replicas")}),i().createElement(p.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:n.toString(),popoverBody:a("topic.min_insync_replicas_description"),popoverHeader:a("topic.min_insync_replicas")})))},E=n(2645),f=function(e){var t=e.isLoading,n=e.onValidate,a=e.topicNameValidated,l=e.closeWizard,c=(0,o.useTranslation)().t;return i().createElement(r.WizardFooter,null,i().createElement(r.WizardContextConsumer,null,(function(e){var o=e.activeStep,m=e.onNext,s=e.onBack;return o.name==c("topic.topic_name")?i().createElement(i().Fragment,null,i().createElement(r.Button,{variant:"primary",type:"submit",isLoading:t,onClick:function(){return n(m)},isDisabled:"default"!=a},c("common.next")),i().createElement(r.Button,{variant:"secondary",isDisabled:!0},c("common.back")),i().createElement(r.Button,{variant:"link",onClick:l},c("common.cancel"))):"Replicas"==o.name?i().createElement(i().Fragment,null,i().createElement(r.Button,{variant:"primary",type:"submit",onClick:m,isLoading:t},c("common.finish")),i().createElement(r.Button,{variant:"secondary",onClick:s},c("common.back")),i().createElement(r.Button,{variant:"link",onClick:l},c("common.cancel"))):i().createElement(i().Fragment,null,i().createElement(r.Button,{variant:"primary",type:"submit",onClick:m},c("common.next")),i().createElement(r.Button,{variant:"secondary",onClick:s},c("common.back")),i().createElement(r.Button,{variant:"link",onClick:l},c("common.cancel")))})))},v=n(8696),T=n(3443),h=n(6585),S=n(1302),k=n(7265),b=function(e){var t=e.isSwitchChecked,n=e.onCloseCreateTopic,l=(0,a.useContext)(h.E),c=(0,o.useTranslation)().t,p=(0,k.useAlert)().addAlert,b=(0,a.useState)(1),g=b[0],C=b[1],y=(0,a.useState)(1),I=y[0],_=y[1],x=(0,a.useState)(1),N=x[0],D=x[1],L=(0,a.useState)(3)[0],w=(0,a.useState)(2)[0],M=(0,a.useState)("default"),O=M[0],U=M[1],B=(0,a.useState)(!1),A=B[0],F=B[1],V=(0,a.useState)(""),P=V[0],z=V[1],R=(0,a.useState)({name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"-1","retention.bytes.unit":"bytes","cleanup.policy":"delete"}),Y=R[0],G=R[1],W=i().useState(6048e5),K=W[0],H=W[1],q=i().useState(-1),J=q[0],j=q[1],Z=function(){n&&n()},$=function(){F(!0);var e=t?(0,T.hM)((0,T.L3)(Y)):{name:null==Y?void 0:Y.name,settings:{numPartitions:N,config:[{key:"retention.ms",value:g.toString()},{key:"retention.bytes",value:I.toString()}]}};new v.DefaultApi(new v.Configuration({basePath:null==l?void 0:l.basePath,accessToken:null==l?void 0:l.getToken})).createTopic(e).then((function(e){p({variant:r.AlertVariant.success,title:c("topic.topic_successfully_created")}),F(!1),Z()})).catch((function(e){F(!1),p({variant:r.AlertVariant.danger,title:e.response.data.error_message}),Z()}))},Q=[{name:c("topic.topic_name"),enableNext:""!==(null==Y?void 0:Y.name.trim())&&"default"===O,component:i().createElement(m,{topicData:Y,setTopicData:G,topicNameValidated:O,setTopicNameValidated:U,invalidText:P,setInvalidText:z})},{name:c("common.partitions"),canJumpTo:""!==(null==Y?void 0:Y.name.trim()),component:i().createElement(s,{partitionTouchspinValue:N,setPartitionTouchspinValue:D})},{name:c("topic.message_retention"),canJumpTo:""!==(null==Y?void 0:Y.name.trim()),component:i().createElement(u,{setMsgRetentionValue:C,currentPeriod:K,currentSize:J,setCurrentPeriod:H,setCurrentSize:j,setRetentionSize:_})},{name:c("common.replicas"),canJumpTo:""!==(null==Y?void 0:Y.name.trim()),component:i().createElement(d,{replicationFactor:L,minInSyncReplica:w}),nextButtonText:c("common.finish")}],X=c("topic.wizard_title");return i().createElement(i().Fragment,null,t?i().createElement(i().Fragment,null,i().createElement(r.Divider,{className:"kafka-ui--divider--FlexShrink"}),i().createElement(r.PageSection,{variant:r.PageSectionVariants.light},i().createElement(E.W,{isCreate:!0,saveTopic:$,handleCancel:n,topicData:Y,setTopicData:G}))):i().createElement(r.PageSection,{variant:r.PageSectionVariants.light,type:r.PageSectionTypes.wizard,isFilled:!0},i().createElement(r.Wizard,{navAriaLabel:X+" steps",mainAriaLabel:X+" content",steps:Q,onClose:Z,onSave:$,"data-testid":"topicBasicCreate-Wizard",footer:i().createElement(f,{isLoading:A,onValidate:function(e){(null==Y?void 0:Y.name.length)<1?(z(c("topic.required")),U("error")):"."===(null==Y?void 0:Y.name)||".."===(null==Y?void 0:Y.name)?(z(c("topic.invalid_name_with_dot")),U("error")):(F(!0),function(e,t){var n,a,i,o;n=void 0,a=void 0,o=function(){return function(e,t){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((i=(i=r.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,S.BN)(e,l)];case 1:return n.sent()&&(z(c("topic.already_exists",{name:e})),U("error"),F(!1)),[3,3];case 2:return"404"==n.sent().response.status&&(U("default"),F(!1),t()),[3,3];case 3:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}c((o=o.apply(n,a||[])).next())}))}(null==Y?void 0:Y.name,e))},topicNameValidated:O,closeWizard:Z})})))},g=n(7009),C=(n(1781),function(e){var t=e.onCloseCreateTopic,n=(0,g.S)(),o=n.kafkaName,r=n.kafkaPageLink,c=n.kafkaInstanceLink,m=(0,a.useState)(!1),s=m[0],u=m[1];return i().createElement(i().Fragment,null,i().createElement(l,{isSwitchChecked:s,setIsSwitchChecked:u,kafkaName:o,kafkaInstanceLink:c,kafkaPageLink:r}),i().createElement(b,{isSwitchChecked:s,onCloseCreateTopic:t}))})}}]);
//# sourceMappingURL=568.ab5242a5.bundle.js.map
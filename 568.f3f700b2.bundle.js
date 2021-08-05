"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[568],{40568:(e,t,n)=>{n.d(t,{e:()=>x});var a=n(93264),i=n.n(a),r=n(54532),o=n(10107),l=function(e){var t=e.isSwitchChecked,n=e.setIsSwitchChecked,a=e.kafkaName,l=e.kafkaPageLink,c=(0,r.useTranslation)().t,m=i().createElement(o.Breadcrumb,null,i().createElement(o.BreadcrumbItem,{to:l||"#"},"Kafka Instances"),i().createElement(o.BreadcrumbItem,{to:"#",isActive:!0},a||c("common.kafka_instance_name")),i().createElement(o.BreadcrumbItem,{to:"#",isActive:!0},c("topic.create_topic")));return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},m),i().createElement(o.PageSection,{variant:o.PageSectionVariants.light},i().createElement(o.Title,{headingLevel:"h1",size:"2xl"},c("topic.create_topic")),i().createElement("br",null),i().createElement(o.Switch,{id:"simple-switch",label:c("topic.show_all_options"),labelOff:c("topic.show_all_options"),isChecked:t,onChange:n,className:"create-topic-wizard"})))},c=(n(63168),function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)}),m=function(e){var t=e.topicData,n=e.setTopicData,l=e.topicNameValidated,m=e.setTopicNameValidated,s=e.invalidText,u=e.setInvalidText,p=(0,r.useTranslation)().t,d=t&&t.name;(0,a.useEffect)((function(){E(d)}),[]);var E=function(e){var t=new RegExp("^[a-zA-Z0-9._-]+$");e.length&&!t.test(e)?(u(p("topic.topic_name_helper_text")),m("error")):e.length>249?(m("error"),u(p("topic.cannot_exceed_characters"))):"."===e||".."===e?(m("error"),u(p("topic.invalid_name_with_dot"))):m("default")};return i().createElement(o.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(o.FormSection,{title:p("topic.topic_name"),id:"topic-name",titleElement:"h2"},i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.p},p("topic.topic_name_info")),i().createElement(o.Text,{component:o.TextVariants.small},p("topic.topic_name_info_note"))),i().createElement(o.FormGroup,{label:p("topic.topic_name"),fieldId:"step-topic-name-form",helperText:p("topic.topic_name_helper_text"),helperTextInvalid:s,validated:l,isRequired:!0},i().createElement(o.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name",value:d,onChange:function(e){E(e),n(c(c({},t),{name:e}))},placeholder:p("topic.enter_name"),validated:l}))))},s=n(63595),u=function(){return(u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},p=function(e){var t=e.topicData,n=e.setTopicData,a=(0,r.useTranslation)().t,l=t&&t.numPartitions;return i().createElement(o.Form,null,i().createElement(o.FormSection,{title:a("topic.partitions"),id:"partitions",titleElement:"h2"},i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.p},a("topic.partition_info")),i().createElement(o.Text,{component:o.TextVariants.small},a("topic.partition_info_note"))),i().createElement(o.FormGroup,{label:"Partitions",fieldId:"step-topic-name-form",helperText:a("topic.partition_helper_text"),isRequired:!0},i().createElement(o.NumberInput,{onPlus:function(){n(u(u({},t),{numPartitions:Number(t.numPartitions)+1}))},onMinus:function(){n(u(u({},t),{numPartitions:Number(t.numPartitions)-1}))},value:l,inputName:"input",onChange:function(e){var a=Number(e.target.value);a<s.jR?a=s.jR:a>s.TE&&(a=s.TE),n(u(u({},t),{numPartitions:a}))},widthChars:20,min:s.jR,max:s.TE}))))},d=function(e){var t,n,l=e.setMsgRetentionValue,c=e.currentPeriod,m=e.currentSize,s=e.setCurrentPeriod,u=e.setCurrentSize,p=e.setRetentionSize,d=(0,r.useTranslation)().t;!function(e){e[e.MILLISECOND=1]="MILLISECOND",e[e.SECOND=1e3]="SECOND",e[e.MINUTE=6e4]="MINUTE",e[e.HOUR=36e5]="HOUR",e[e.DAY=864e5]="DAY",e[e.WEEK=6048e5]="WEEK",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(t||(t={})),function(e){e[e.BYTE=1]="BYTE",e[e.KIBIBYTE=1024]="KIBIBYTE",e[e.MEBIBYTE=1048576]="MEBIBYTE",e[e.GIBIBYTE=1073741824]="GIBIBYTE",e[e.TEBIBYTE=10995116e5]="TEBIBYTE",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(n||(n={}));var E=(0,a.useState)(7),f=E[0],v=E[1],T=(0,a.useState)(1),h=T[0],b=T[1],S=(0,a.useState)(!1),k=S[0],I=S[1],g=(0,a.useState)(!1),y=g[0],C=g[1],_=(0,a.useState)(!1),x=_[0],N=_[1],B=(0,a.useState)(!1),D=B[0],M=B[1],w=(0,a.useState)(t.DAY),O=w[0],U=w[1],L=(0,a.useState)(n.BYTE),P=L[0],F=L[1];(0,a.useEffect)((function(){c===t.DAY?l(t.DAY):c===t.WEEK?l(t.WEEK):c===t.UNLIMITED?l(t.UNLIMITED):c===t.CUSTOM&&l(O*f),m===n.UNLIMITED?p(n.UNLIMITED):m===n.CUSTOM&&p(P*h)}),[c,m,f,h,O,P]);var V=function(e,a){var i=a.target.name;"radioDay"===i?s(t.DAY):"radioWeek"===i?s(t.WEEK):"radioUnlimitedTime"===i?s(t.UNLIMITED):"radioCustomTime"===i&&s(t.CUSTOM),"radioCustomSize"===i?u(n.CUSTOM):"radioUnlimitedSize"===i&&u(n.UNLIMITED)};return i().createElement(i().Fragment,null,i().createElement(o.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(o.FormSection,{title:d("topic.message_retention"),id:"message-retention",titleElement:"h2"},i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.p},d("topic.message_retention_info")),i().createElement(o.Text,{component:o.TextVariants.small},d("topic.message_retention_info_note"))),i().createElement(o.FormGroup,{fieldId:"form-group-retention-time-in-wizard",label:d("topic.retention_time")},i().createElement(o.Stack,{hasGutter:!0},i().createElement(o.Radio,{isChecked:c===t.DAY,name:"radioDay",onChange:V,label:"A day","aria-label":"A day",id:"radio-controlled-1",value:"day"}),i().createElement(o.Radio,{isChecked:c===t.WEEK,name:"radioWeek",onChange:V,label:"A week","aria-label":"A week",id:"radio-controlled-2",value:"week"}),i().createElement(o.Radio,{isChecked:c===t.CUSTOM,name:"radioCustomTime",onChange:V,label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:"custom"}),c===t.CUSTOM&&i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(o.Flex,null,i().createElement(o.FlexItem,null,i().createElement(o.NumberInput,{onMinus:function(){v(f-1)},onPlus:function(){v(f+1)},value:f,onChange:function(e){v(Number(e.target.value))},min:0})),i().createElement(o.FlexItem,null,i().createElement(o.Select,{variant:o.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){I(e)},onSelect:function(e,n){"days"===n?U(t.DAY):"unlimited"===n?U(t.UNLIMITED):"milliseconds"===n?U(t.MILLISECOND):"seconds"===n?U(t.SECOND):"minutes"===n?U(t.MINUTE):"hours"===n&&U(t.HOUR),N(n),I(!1)},selections:x,isOpen:k},i().createElement(o.SelectOption,{key:0,value:"days",isPlaceholder:!0}),i().createElement(o.SelectOption,{key:1,value:"seconds"}),i().createElement(o.SelectOption,{key:2,value:"minutes"}),i().createElement(o.SelectOption,{key:3,value:"hours"}),i().createElement(o.SelectOption,{key:4,value:"milliseconds"}))))),i().createElement(o.Radio,{isChecked:c===t.UNLIMITED,name:"radioUnlimitedTime",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:"unlimited"}))),i().createElement(o.FormGroup,{fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},i().createElement(o.Stack,{hasGutter:!0},i().createElement(o.Radio,{isChecked:m===n.UNLIMITED,name:"radioUnlimitedSize",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:"unlimited"}),i().createElement(o.Radio,{isChecked:m===n.CUSTOM,name:"radioCustomSize",onChange:V,label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:"custom"}),m===n.CUSTOM&&i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(o.Flex,null,i().createElement(o.FlexItem,null,i().createElement(o.NumberInput,{onMinus:function(){b(h-1)},onPlus:function(){b(h+1)},value:h,onChange:function(e){b(Number(e.target.value))},min:0})),i().createElement(o.FlexItem,null,i().createElement(o.Select,{variant:o.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){C(e)},onSelect:function(e,t){"unlimited"===t?F(n.UNLIMITED):"bytes"===t?F(n.BYTE):"kibibytes"===t?F(n.KIBIBYTE):"mebibytes"===t?F(n.MEBIBYTE):"gibibytes"===t?F(n.GIBIBYTE):"tebibytes"===t&&F(n.TEBIBYTE),M(t),C(!1)},selections:D,isOpen:y},i().createElement(o.SelectOption,{key:5,value:"bytes",isPlaceholder:!0}),i().createElement(o.SelectOption,{key:6,value:"kibibytes"}),i().createElement(o.SelectOption,{key:7,value:"mebibytes"}),i().createElement(o.SelectOption,{key:8,value:"gibibytes"}),i().createElement(o.SelectOption,{key:9,value:"tebibytes"}))))))))))},E=n(95574),f=function(e){var t=e.replicationFactor,n=e.minInSyncReplica,a=(0,r.useTranslation)().t;return i().createElement(o.Form,null,i().createElement(o.FormSection,{title:a("common.replicas"),id:"replica-section",titleElement:"h2"},i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.p},a("topic.replicas_info")),i().createElement(o.Text,{component:o.TextVariants.small},a("topic.replicas_detail"))),i().createElement(o.Alert,{variant:"info",isInline:!0,title:a("topic.replicas_helper_text")}),i().createElement(E.R,{fieldId:"replicas",btnAriaLabel:a("common.replicas"),fieldLabel:a("common.replicas"),fieldValue:t.toString(),popoverBody:a("topic.replicas_description"),popoverHeader:a("topic.replicas")}),i().createElement(E.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:n.toString(),popoverBody:a("topic.min_insync_replicas_description"),popoverHeader:a("topic.min_insync_replicas")})))},v=n(72645),T=function(e){var t=e.isLoading,n=e.onValidate,a=e.topicNameValidated,l=e.closeWizard,c=(0,r.useTranslation)().t;return i().createElement(o.WizardFooter,null,i().createElement(o.WizardContextConsumer,null,(function(e){var r=e.activeStep,m=e.onNext,s=e.onBack;return r.name==c("topic.topic_name")?i().createElement(i().Fragment,null,i().createElement(o.Button,{variant:"primary",type:"submit",isLoading:t,onClick:function(){return n(m)},isDisabled:"default"!=a},c("common.next")),i().createElement(o.Button,{variant:"secondary",isDisabled:!0},c("common.back")),i().createElement(o.Button,{variant:"link",onClick:l},c("common.cancel"))):"Replicas"==r.name?i().createElement(i().Fragment,null,i().createElement(o.Button,{variant:"primary",type:"submit",onClick:m,isLoading:t},c("common.finish")),i().createElement(o.Button,{variant:"secondary",onClick:s},c("common.back")),i().createElement(o.Button,{variant:"link",onClick:l},c("common.cancel"))):i().createElement(i().Fragment,null,i().createElement(o.Button,{variant:"primary",type:"submit",onClick:m},c("common.next")),i().createElement(o.Button,{variant:"secondary",onClick:s},c("common.back")),i().createElement(o.Button,{variant:"link",onClick:l},c("common.cancel")))})))},h=n(28696),b=n(53443),S=n(26585),k=n(71302),I=n(30621),g=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},y=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},C=function(e){var t=e.isSwitchChecked,n=e.onCloseCreateTopic,l=(0,a.useContext)(S.E),c=(0,r.useTranslation)().t,s=(0,I.useAlert)().addAlert,u=(0,a.useState)(1),E=u[0],C=u[1],_=(0,a.useState)(1),x=_[0],N=_[1],B=(0,a.useState)(3)[0],D=(0,a.useState)(2)[0],M=(0,a.useState)("default"),w=M[0],O=M[1],U=(0,a.useState)(!1),L=U[0],P=U[1],F=(0,a.useState)(""),V=F[0],z=F[1],R=(0,a.useState)({name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"-1","retention.bytes.unit":"bytes","cleanup.policy":"delete"}),A=R[0],Y=R[1],W=i().useState(6048e5),G=W[0],K=W[1],j=i().useState(-1),H=j[0],q=j[1],J=function(){n&&n()},Z=function(){P(!0);var e=t?(0,b.hM)((0,b.L3)(A)):{name:null==A?void 0:A.name,settings:{numPartitions:Number(null==A?void 0:A.numPartitions),config:[{key:"retention.ms",value:E.toString()},{key:"retention.bytes",value:x.toString()}]}};new h.DefaultApi(new h.Configuration({basePath:null==l?void 0:l.basePath,accessToken:null==l?void 0:l.getToken})).createTopic(e).then((function(e){s({variant:o.AlertVariant.success,title:c("topic.topic_successfully_created")}),P(!1),J()})).catch((function(e){P(!1),s({variant:o.AlertVariant.danger,title:e.response.data.error_message}),J()}))},$=[{name:c("topic.topic_name"),enableNext:""!==(null==A?void 0:A.name.trim())&&"default"===w,component:i().createElement(m,{topicData:A,setTopicData:Y,topicNameValidated:w,setTopicNameValidated:O,invalidText:V,setInvalidText:z})},{name:c("common.partitions"),canJumpTo:""!==(null==A?void 0:A.name.trim()),component:i().createElement(p,{topicData:A,setTopicData:Y})},{name:c("topic.message_retention"),canJumpTo:""!==(null==A?void 0:A.name.trim()),component:i().createElement(d,{setMsgRetentionValue:C,currentPeriod:G,currentSize:H,setCurrentPeriod:K,setCurrentSize:q,setRetentionSize:N})},{name:c("common.replicas"),canJumpTo:""!==(null==A?void 0:A.name.trim()),component:i().createElement(f,{replicationFactor:B,minInSyncReplica:D}),nextButtonText:c("common.finish")}],Q=c("topic.wizard_title");return i().createElement(i().Fragment,null,t?i().createElement(i().Fragment,null,i().createElement(o.Divider,{className:"kafka-ui--divider--FlexShrink"}),i().createElement(o.PageSection,{variant:o.PageSectionVariants.light},i().createElement(v.W,{isCreate:!0,saveTopic:Z,handleCancel:n,topicData:A,setTopicData:Y}))):i().createElement(o.PageSection,{variant:o.PageSectionVariants.light,type:o.PageSectionTypes.wizard,isFilled:!0},i().createElement(o.Wizard,{navAriaLabel:Q+" steps",mainAriaLabel:Q+" content",steps:$,onClose:J,onSave:Z,"data-testid":"topicBasicCreate-Wizard",footer:i().createElement(T,{isLoading:L,onValidate:function(e){(null==A?void 0:A.name.length)<1?(z(c("topic.required")),O("error")):"."===(null==A?void 0:A.name)||".."===(null==A?void 0:A.name)?(z(c("topic.invalid_name_with_dot")),O("error")):(P(!0),function(e,t){g(void 0,void 0,void 0,(function(){return y(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,k.BN)(e,l)];case 1:return n.sent()&&(z(c("topic.already_exists",{name:e})),O("error"),P(!1)),[3,3];case 2:return"404"==n.sent().response.status&&(O("default"),P(!1),t()),[3,3];case 3:return[2]}}))}))}(null==A?void 0:A.name,e))},topicNameValidated:w,closeWizard:J})})))},_=n(37009),x=(n(41781),function(e){var t=e.onCloseCreateTopic,n=(0,_.S)(),r=n.kafkaName,o=n.kafkaPageLink,c=n.kafkaInstanceLink,m=(0,a.useState)(!1),s=m[0],u=m[1];return i().createElement(i().Fragment,null,i().createElement(l,{isSwitchChecked:s,setIsSwitchChecked:u,kafkaName:r,kafkaInstanceLink:c,kafkaPageLink:o}),i().createElement(C,{isSwitchChecked:s,onCloseCreateTopic:t}))})}}]);
//# sourceMappingURL=568.f3f700b2.bundle.js.map
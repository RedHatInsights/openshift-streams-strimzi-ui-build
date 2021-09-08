"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[299],{29299:(e,t,n)=>{n.d(t,{e:()=>N});var a=n(75418),i=n.n(a),r=n(76007),o=n(95216),l=n(54532),c=n(84669),m=function(e){var t=e.isSwitchChecked,n=e.setIsSwitchChecked,a=e.kafkaName,r=e.kafkaPageLink,o=(0,l.useTranslation)().t,m=i().createElement(c.Breadcrumb,null,i().createElement(c.BreadcrumbItem,{to:r||"#"},"Kafka Instances"),i().createElement(c.BreadcrumbItem,{to:"#",isActive:!0},a||o("common.kafka_instance_name")),i().createElement(c.BreadcrumbItem,{to:"#",isActive:!0},o("topic.create_topic")));return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},m),i().createElement(c.PageSection,{variant:c.PageSectionVariants.light},i().createElement(c.Title,{headingLevel:"h1",size:"2xl"},o("topic.create_topic")),i().createElement("br",null),i().createElement(c.Switch,{id:"simple-switch",label:o("topic.show_all_options"),labelOff:o("topic.show_all_options"),isChecked:t,onChange:n,className:"create-topic-wizard"})))},s=(n(63168),function(){return(s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)}),u=function(e){var t=e.topicData,n=e.setTopicData,r=e.topicNameValidated,o=e.setTopicNameValidated,m=e.invalidText,u=e.setInvalidText,p=(0,l.useTranslation)().t,d=t&&t.name;(0,a.useEffect)((function(){E(d)}),[]);var E=function(e){var t=new RegExp("^[a-zA-Z0-9._-]+$");e.length&&!t.test(e)?(u(p("topic.topic_name_helper_text")),o("error")):e.length>249?(o("error"),u(p("topic.cannot_exceed_characters"))):"."===e||".."===e?(o("error"),u(p("topic.invalid_name_with_dot"))):o("default")};return i().createElement(c.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(c.FormSection,{title:p("topic.topic_name"),id:"topic-name",titleElement:"h2"},i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},p("topic.topic_name_info")),i().createElement(c.Text,{component:c.TextVariants.small},p("topic.topic_name_info_note"))),i().createElement(c.FormGroup,{label:p("topic.topic_name"),fieldId:"step-topic-name-form",helperText:p("topic.topic_name_helper_text"),helperTextInvalid:m,validated:r,isRequired:!0},i().createElement(c.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name",value:d,onChange:function(e){E(e),n(s(s({},t),{name:e}))},placeholder:p("topic.enter_name"),validated:r}))))},p=n(86737),d=function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},E=function(e){var t=e.topicData,n=e.setTopicData,a=(0,l.useTranslation)().t,r=t&&t.numPartitions;return i().createElement(c.Form,null,i().createElement(c.FormSection,{title:a("topic.partitions"),id:"partitions",titleElement:"h2"},i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},a("topic.partition_info")),i().createElement(c.Text,{component:c.TextVariants.small},a("topic.partition_info_note"))),i().createElement(c.FormGroup,{label:"Partitions",fieldId:"step-topic-name-form",helperText:a("topic.partition_helper_text"),isRequired:!0},i().createElement(c.NumberInput,{onPlus:function(){n(d(d({},t),{numPartitions:String(Number(t.numPartitions)+1)}))},onMinus:function(){n(d(d({},t),{numPartitions:String(Number(t.numPartitions)-1)}))},value:Number(r),inputName:"input",onChange:function(e){var a=Number(e.target.value);a<p.jR?a=p.jR:a>p.TE&&(a=p.TE),n(d(d({},t),{numPartitions:String(a)}))},widthChars:20,min:p.jR,max:p.TE}))))},f=function(e){var t,n,r=e.setMsgRetentionValue,o=e.currentPeriod,m=e.currentSize,s=e.setCurrentPeriod,u=e.setCurrentSize,p=e.setRetentionSize,d=(0,l.useTranslation)().t;!function(e){e[e.MILLISECOND=1]="MILLISECOND",e[e.SECOND=1e3]="SECOND",e[e.MINUTE=6e4]="MINUTE",e[e.HOUR=36e5]="HOUR",e[e.DAY=864e5]="DAY",e[e.WEEK=6048e5]="WEEK",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(t||(t={})),function(e){e[e.BYTE=1]="BYTE",e[e.KIBIBYTE=1024]="KIBIBYTE",e[e.MEBIBYTE=1048576]="MEBIBYTE",e[e.GIBIBYTE=1073741824]="GIBIBYTE",e[e.TEBIBYTE=10995116e5]="TEBIBYTE",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(n||(n={}));var E=(0,a.useState)(7),f=E[0],v=E[1],T=(0,a.useState)(1),h=T[0],b=T[1],S=(0,a.useState)(!1),k=S[0],g=S[1],I=(0,a.useState)(!1),y=I[0],C=I[1],_=(0,a.useState)(!1),x=_[0],N=_[1],B=(0,a.useState)(!1),D=B[0],M=B[1],w=(0,a.useState)(t.DAY),O=w[0],U=w[1],L=(0,a.useState)(n.BYTE),P=L[0],F=L[1];(0,a.useEffect)((function(){o===t.DAY?r(t.DAY):o===t.WEEK?r(t.WEEK):o===t.UNLIMITED?r(t.UNLIMITED):o===t.CUSTOM&&r(O*f),m===n.UNLIMITED?p(n.UNLIMITED):m===n.CUSTOM&&p(P*h)}),[o,m,f,h,O,P]);var V=function(e,a){var i=a.target.name;"radioDay"===i?s(t.DAY):"radioWeek"===i?s(t.WEEK):"radioUnlimitedTime"===i?s(t.UNLIMITED):"radioCustomTime"===i&&s(t.CUSTOM),"radioCustomSize"===i?u(n.CUSTOM):"radioUnlimitedSize"===i&&u(n.UNLIMITED)};return i().createElement(i().Fragment,null,i().createElement(c.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(c.FormSection,{title:d("topic.message_retention"),id:"message-retention",titleElement:"h2"},i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},d("topic.message_retention_info")),i().createElement(c.Text,{component:c.TextVariants.small},d("topic.message_retention_info_note"))),i().createElement(c.FormGroup,{fieldId:"form-group-retention-time-in-wizard",label:d("topic.retention_time")},i().createElement(c.Stack,{hasGutter:!0},i().createElement(c.Radio,{isChecked:o===t.DAY,name:"radioDay",onChange:V,label:"A day","aria-label":"A day",id:"radio-controlled-1",value:"day"}),i().createElement(c.Radio,{isChecked:o===t.WEEK,name:"radioWeek",onChange:V,label:"A week","aria-label":"A week",id:"radio-controlled-2",value:"week"}),i().createElement(c.Radio,{isChecked:o===t.CUSTOM,name:"radioCustomTime",onChange:V,label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:"custom"}),o===t.CUSTOM&&i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(c.Flex,null,i().createElement(c.FlexItem,null,i().createElement(c.NumberInput,{onMinus:function(){v(f-1)},onPlus:function(){v(f+1)},value:f,onChange:function(e){v(Number(e.target.value))},min:0})),i().createElement(c.FlexItem,null,i().createElement(c.Select,{variant:c.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){g(e)},onSelect:function(e,n){"days"===n?U(t.DAY):"unlimited"===n?U(t.UNLIMITED):"milliseconds"===n?U(t.MILLISECOND):"seconds"===n?U(t.SECOND):"minutes"===n?U(t.MINUTE):"hours"===n&&U(t.HOUR),N(n),g(!1)},selections:x,isOpen:k},i().createElement(c.SelectOption,{key:0,value:"days",isPlaceholder:!0}),i().createElement(c.SelectOption,{key:1,value:"seconds"}),i().createElement(c.SelectOption,{key:2,value:"minutes"}),i().createElement(c.SelectOption,{key:3,value:"hours"}),i().createElement(c.SelectOption,{key:4,value:"milliseconds"}))))),i().createElement(c.Radio,{isChecked:o===t.UNLIMITED,name:"radioUnlimitedTime",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:"unlimited"}))),i().createElement(c.FormGroup,{fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},i().createElement(c.Stack,{hasGutter:!0},i().createElement(c.Radio,{isChecked:m===n.UNLIMITED,name:"radioUnlimitedSize",onChange:V,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:"unlimited"}),i().createElement(c.Radio,{isChecked:m===n.CUSTOM,name:"radioCustomSize",onChange:V,label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:"custom"}),m===n.CUSTOM&&i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(c.Flex,null,i().createElement(c.FlexItem,null,i().createElement(c.NumberInput,{onMinus:function(){b(h-1)},onPlus:function(){b(h+1)},value:h,onChange:function(e){b(Number(e.target.value))},min:0})),i().createElement(c.FlexItem,null,i().createElement(c.Select,{variant:c.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){C(e)},onSelect:function(e,t){"unlimited"===t?F(n.UNLIMITED):"bytes"===t?F(n.BYTE):"kibibytes"===t?F(n.KIBIBYTE):"mebibytes"===t?F(n.MEBIBYTE):"gibibytes"===t?F(n.GIBIBYTE):"tebibytes"===t&&F(n.TEBIBYTE),M(t),C(!1)},selections:D,isOpen:y},i().createElement(c.SelectOption,{key:5,value:"bytes",isPlaceholder:!0}),i().createElement(c.SelectOption,{key:6,value:"kibibytes"}),i().createElement(c.SelectOption,{key:7,value:"mebibytes"}),i().createElement(c.SelectOption,{key:8,value:"gibibytes"}),i().createElement(c.SelectOption,{key:9,value:"tebibytes"}))))))))))},v=n(39806),T=function(e){var t=e.replicationFactor,n=e.minInSyncReplica,a=(0,l.useTranslation)().t;return i().createElement(c.Form,null,i().createElement(c.FormSection,{title:a("common.replicas"),id:"replica-section",titleElement:"h2"},i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},a("topic.replicas_info")),i().createElement(c.Text,{component:c.TextVariants.small},a("topic.replicas_detail"))),i().createElement(c.Alert,{variant:"info",isInline:!0,title:a("topic.replicas_helper_text")}),i().createElement(v.R,{fieldId:"replicas",btnAriaLabel:a("common.replicas"),fieldLabel:a("common.replicas"),fieldValue:t.toString(),popoverBody:a("topic.replicas_description"),popoverHeader:a("topic.replicas")}),i().createElement(v.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:n.toString(),popoverBody:a("topic.min_insync_replicas_description"),popoverHeader:a("topic.min_insync_replicas")})))},h=n(88767),b=function(e){var t=e.isLoading,n=e.onValidate,a=e.topicNameValidated,r=e.closeWizard,o=(0,l.useTranslation)().t;return i().createElement(c.WizardFooter,null,i().createElement(c.WizardContextConsumer,null,(function(e){var l=e.activeStep,m=e.onNext,s=e.onBack;return l.name==o("topic.topic_name")?i().createElement(i().Fragment,null,i().createElement(c.Button,{variant:"primary",type:"submit",isLoading:t,onClick:function(){return n(m)},isDisabled:"default"!=a},o("common.next")),i().createElement(c.Button,{variant:"secondary",isDisabled:!0},o("common.back")),i().createElement(c.Button,{variant:"link",onClick:r},o("common.cancel"))):"Replicas"==l.name?i().createElement(i().Fragment,null,i().createElement(c.Button,{variant:"primary",type:"submit",onClick:m,isLoading:t},o("common.finish")),i().createElement(c.Button,{variant:"secondary",onClick:s},o("common.back")),i().createElement(c.Button,{variant:"link",onClick:r},o("common.cancel"))):i().createElement(i().Fragment,null,i().createElement(c.Button,{variant:"primary",type:"submit",onClick:m},o("common.next")),i().createElement(c.Button,{variant:"secondary",onClick:s},o("common.back")),i().createElement(c.Button,{variant:"link",onClick:r},o("common.cancel")))})))},S=n(70853),k=n(1787),g=n(3654),I=n(60540),y=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},C=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},_=function(e){var t=e.isSwitchChecked,n=e.onCloseCreateTopic,r=(0,a.useContext)(g.E),m=(0,l.useTranslation)().t,s=((0,o.useAlert)()||{addAlert:function(){}}).addAlert,p=(0,a.useState)(1),d=p[0],v=p[1],_=(0,a.useState)(1),x=_[0],N=_[1],B=(0,a.useState)(3)[0],D=(0,a.useState)(2)[0],M=(0,a.useState)("default"),w=M[0],O=M[1],U=(0,a.useState)(!1),L=U[0],P=U[1],F=(0,a.useState)(""),V=F[0],z=F[1],A=(0,a.useState)({name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"-1","retention.bytes.unit":"bytes","cleanup.policy":"delete"}),R=A[0],Y=A[1],W=i().useState(6048e5),G=W[0],K=W[1],j=i().useState(-1),H=j[0],q=j[1],J=function(){n&&n()},Z=function(){P(!0);var e=t?(0,k.hM)((0,k.L3)(R)):{name:null==R?void 0:R.name,settings:{numPartitions:Number(null==R?void 0:R.numPartitions),config:[{key:"retention.ms",value:d.toString()},{key:"retention.bytes",value:x.toString()}]}};new S.TopicsApi(new S.Configuration({basePath:null==r?void 0:r.basePath,accessToken:null==r?void 0:r.getToken})).createTopic(e).then((function(){s({variant:c.AlertVariant.success,title:m("topic.topic_successfully_created")}),P(!1),J()})).catch((function(e){P(!1),s({variant:c.AlertVariant.danger,title:e.response.data.error_message}),J()}))},$=[{name:m("topic.topic_name"),enableNext:""!==(null==R?void 0:R.name.trim())&&"default"===w,component:i().createElement(u,{topicData:R,setTopicData:Y,topicNameValidated:w,setTopicNameValidated:O,invalidText:V,setInvalidText:z})},{name:m("common.partitions"),canJumpTo:""!==(null==R?void 0:R.name.trim()),component:i().createElement(E,{topicData:R,setTopicData:Y})},{name:m("topic.message_retention"),canJumpTo:""!==(null==R?void 0:R.name.trim()),component:i().createElement(f,{setMsgRetentionValue:v,currentPeriod:G,currentSize:H,setCurrentPeriod:K,setCurrentSize:q,setRetentionSize:N})},{name:m("common.replicas"),canJumpTo:""!==(null==R?void 0:R.name.trim()),component:i().createElement(T,{replicationFactor:B,minInSyncReplica:D}),nextButtonText:m("common.finish")}],Q=m("topic.wizard_title");return i().createElement(i().Fragment,null,t?i().createElement(i().Fragment,null,i().createElement(c.Divider,{className:"kafka-ui--divider--FlexShrink"}),i().createElement(c.PageSection,{variant:c.PageSectionVariants.light},i().createElement(h.W,{isCreate:!0,saveTopic:Z,handleCancel:n,topicData:R,setTopicData:Y}))):i().createElement(c.PageSection,{variant:c.PageSectionVariants.light,type:c.PageSectionTypes.wizard,isFilled:!0},i().createElement(c.Wizard,{navAriaLabel:Q+" steps",mainAriaLabel:Q+" content",steps:$,onClose:J,onSave:Z,"data-testid":"topicBasicCreate-Wizard",footer:i().createElement(b,{isLoading:L,onValidate:function(e){(null==R?void 0:R.name.length)<1?(z(m("topic.required")),O("error")):"."===(null==R?void 0:R.name)||".."===(null==R?void 0:R.name)?(z(m("topic.invalid_name_with_dot")),O("error")):(P(!0),function(e,t){y(void 0,void 0,void 0,(function(){return C(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,I.BN)(e,r)];case 1:return n.sent()&&(z(m("topic.already_exists",{name:e})),O("error"),P(!1)),[3,3];case 2:return"404"==n.sent().response.status&&(O("default"),P(!1),t()),[3,3];case 3:return[2]}}))}))}(null==R?void 0:R.name,e))},topicNameValidated:w,closeWizard:J})})))},x=n(64517),N=(n(41781),function(){var e=(0,x.S)()||{},t=e.kafkaName,n=e.kafkaPageLink,l=e.kafkaInstanceLink,c=(0,r.useHistory)(),s=(0,((0,o.useBasename)()||{getBasename:function(){return""}}).getBasename)(),u=(0,a.useState)(!1),p=u[0],d=u[1];return i().createElement(i().Fragment,null,i().createElement(m,{isSwitchChecked:p,setIsSwitchChecked:d,kafkaName:t,kafkaInstanceLink:l,kafkaPageLink:n}),i().createElement(_,{isSwitchChecked:p,onCloseCreateTopic:function(){c.push(s)}}))})}}]);
//# sourceMappingURL=299.145f1ab9.js.map
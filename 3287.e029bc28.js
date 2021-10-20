"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[3287,1847],{34046:(e,n,t)=>{n.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},n.by=t(35183).createIcon(n.MU),n.ZP=n.by},39806:(e,n,t)=>{t.d(n,{R:()=>l});var i=t(84669),a=t(75418),o=t.n(a),r=t(34046),l=function(e){var n=e.fieldId,t=e.fieldLabel,a=e.btnAriaLabel,l=e.fieldValue,c=e.popoverBody,s=e.popoverHeader,u="-";return!0===e.showUnlimited&&void 0!==l&&parseInt(l)<0?u="Unlimited":l&&(u=l),o().createElement(i.FormGroup,{fieldId:n,label:t,className:"kafka-ui-form-group--readonly",labelIcon:o().createElement(i.Popover,{headerContent:o().createElement("div",null,s),bodyContent:o().createElement("div",null,c)},o().createElement("button",{"aria-label":a,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},o().createElement(r.ZP,{noVerticalAlign:!0})))},o().createElement(i.TextInput,{isReadOnly:!0,type:"text",id:n,name:n,value:u}))}},86737:(e,n,t)=>{t.d(n,{Rc:()=>i,PT:()=>a,MO:()=>o,$$:()=>r,Y:()=>l,nL:()=>c,Q_:()=>s,f8:()=>u,sN:()=>d,W$:()=>f,pJ:()=>v,_$:()=>p,K:()=>h,A7:()=>m,mr:()=>b,qh:()=>k,jR:()=>C,TE:()=>g});var i="3",a="0.5",o="2",r="604800000 milliseconds (7 days)",l="9223372036854775807 milliseconds",c="10485760 bytes (10 mebibytes)",s="4096 bytes (4 kibibytes)",u="1073741824 bytes (1 gibibyte)",d="86400000 milliseconds (1 day)",f="0 milliseconds",v="60000 milliseconds (1 minute)",p="1048588 bytes",h="CreateTime",m="0 milliseconds",b="9223372036854775807 messages",k="9223372036854775807 milliseconds",C=1,g=100},64517:(e,n,t)=>{t.d(n,{J:()=>a,S:()=>o});var i=t(75418),a=t.n(i)().createContext(void 0),o=function(){return(0,i.useContext)(a)}},25139:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var i=t(75418),a=t.n(i),o=t(11593),r=t(8903),l=t(3654),c=t(64517),s=t(35380),u=t(68640),d=t(73942);const f=function(e){var n=e.getToken,t=e.apiBasePath,i=e.kafkaName,f=e.onError,v=e.kafkaPageLink,p=e.kafkaInstanceLink,h=e.showSchemas;return a().createElement(o.I18nextProvider,{i18n:s.Z},a().createElement(l.E.Provider,{value:{basePath:t,getToken:n}},a().createElement(c.J.Provider,{value:{activeTab:2,onError:f,kafkaName:i,kafkaPageLink:v,kafkaInstanceLink:p,showSchemas:h}},a().createElement(d.ModalProvider,null,a().createElement(r.o,null),a().createElement(u.J,null)))))}},60540:(e,n,t)=>{t.d(n,{BB:()=>c,Rh:()=>s,eR:()=>d,BN:()=>f,BK:()=>v});var i,a=t(70853),o=t(27577),r=function(e,n,t,i){return new(t||(t=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(e){o(e)}}function l(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,l)}c((i=i.apply(e,n||[])).next())}))},l=function(e,n){var t,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(e){o=[6,e],i=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(i||(i={}));var c=function(e,n,t,i,c,s,u){return void 0===s&&(s=o.SortByDirection.asc),r(void 0,void 0,Promise,(function(){var o;return l(this,(function(r){switch(r.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=r.sent(),[4,new a.TopicsApi(new a.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getTopics(c,n,t,i,void 0,s,u)];case 2:return[2,r.sent().data]}}))}))},s=function(e,n){return r(void 0,void 0,Promise,(function(){var t,i;return l(this,(function(o){switch(o.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=o.sent(),[4,new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).getTopic(e)];case 2:return i=o.sent().data,[2,u(i)]}}))}))},u=function(e){var n,t,i,a={name:"",numPartitions:"0"};return e&&e.name&&(a.name=e.name),null===(n=e.config)||void 0===n||n.forEach((function(e){e.key&&(a[e.key]=e.value)})),a.numPartitions=(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"0",a.replicationFactor=(null==e?void 0:e.partitions)&&(null===(i=null==e?void 0:e.partitions[0].replicas)||void 0===i?void 0:i.length.toString())||"0",a},d=function(e,n,t){return r(void 0,void 0,Promise,(function(){var i;return l(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return i=o.sent(),[4,new a.TopicsApi(new a.Configuration({accessToken:i,basePath:null==t?void 0:t.basePath})).updateTopic(e,n)];case 2:return[2,o.sent().status]}}))}))},f=function(e,n){return r(void 0,void 0,Promise,(function(){var t,i,o,r,c,s;return l(this,(function(l){switch(l.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=l.sent(),[4,new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).getTopic(e)];case 2:return i=l.sent(),(o=i.data).config=o.config||[],o.config.push({key:"replicationFactor",value:null===(s=null===(c=null===(r=i.data)||void 0===r?void 0:r.partitions)||void 0===c?void 0:c.map((function(e){var n;return null===(n=e.replicas)||void 0===n?void 0:n.length})).reduce((function(e,n){return void 0===e&&(e=0),void 0===n&&(n=0),e+n})))||void 0===s?void 0:s.toString()}),[2,i.data]}}))}))},v=function(e,n){return r(void 0,void 0,Promise,(function(){var t;return l(this,(function(i){switch(i.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=i.sent(),[4,new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).deleteTopic(e)];case 2:return i.sent(),[2]}}))}))}},5736:(e,n,t)=>{t.d(n,{I:()=>i});var i=function(e){return void 0!==e}}}]);

(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[943],{34046:(e,t,a)=>{"use strict";t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=a(35183).createIcon(t.MU),t.ZP=t.by},95574:(e,t,a)=>{"use strict";a.d(t,{R:()=>r});var n=a(10107),i=a(97522),o=a.n(i),l=a(34046),r=function(e){var t=e.fieldId,a=e.fieldLabel,i=e.btnAriaLabel,r=e.fieldValue,c=e.popoverBody,s=e.popoverHeader,u="-";return!0===e.showUnlimited&&void 0!==r&&parseInt(r)<0?u="Unlimited":r&&(u=r),o().createElement(n.FormGroup,{fieldId:t,label:a,className:"kafka-ui-form-group--readonly",labelIcon:o().createElement(n.Popover,{headerContent:o().createElement("div",null,s),bodyContent:o().createElement("div",null,c)},o().createElement("button",{"aria-label":i,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},o().createElement(l.ZP,{noVerticalAlign:!0})))},o().createElement(n.TextInput,{isReadOnly:!0,type:"text",id:t,name:t,value:u}))}},63595:(e,t,a)=>{"use strict";a.d(t,{Rc:()=>n,PT:()=>i,MO:()=>o,$$:()=>l,Y:()=>r,nL:()=>c,Q_:()=>s,f8:()=>u,sN:()=>d,W$:()=>m,pJ:()=>C,_$:()=>f,K:()=>k,A7:()=>p,mr:()=>b,qh:()=>v,jR:()=>h,TE:()=>y});var n="3",i="0.5",o="2",l="604800000 milliseconds (7 days)",r="9223372036854775807 milliseconds",c="10485760 bytes (10 mebibytes)",s="4096 bytes (4 kibibytes)",u="1073741824 bytes (1 gibibyte)",d="86400000 milliseconds (1 day)",m="0 milliseconds",C="60000 milliseconds (1 minute)",f="1048588 bytes",k="CreateTime",p="0 milliseconds",b="9223372036854775807 messages",v="9223372036854775807 milliseconds",h=1,y=100},19892:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var n=a(97522),i=a.n(n),o=a(38936),l=a(55399),r=a(47566),c=a(26585),s=a(37009),u=a(26302),d=a(53555),m=a(18416);const C=function(e){var t=e.getToken,a=e.apiBasePath,n=e.kafkaName,C=e.onError,f=e.topicName,k=e.kafkaPageLink,p=e.kafkaInstanceLink,b=e.onConnectToRoute,v=e.getConnectToRoutePath,h=e.dispatchKafkaAction;return i().createElement(l.BrowserRouter,null,i().createElement(o.I18nextProvider,{i18n:u.Z},i().createElement(c.E.Provider,{value:{basePath:a,getToken:t}},i().createElement(s.J.Provider,{value:{activeTab:2,onError:C,kafkaName:n,kafkaPageLink:k,kafkaInstanceLink:p,topicName:f,onConnectToRoute:b,getConnectToRoutePath:v,dispatchKafkaAction:h}},i().createElement(m.OU,null,i().createElement(r.o,{updateTopic:function(){h&&h(d.wT.UpdateTopic)},onDeleteTopic:function(){b&&b("")}}))))))}}}]);
//# sourceMappingURL=943.b8c06fa1.bundle.js.map
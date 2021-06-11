(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[111],{358:()=>{},7568:(e,t,n)=>{"use strict";n.d(t,{I:()=>c});var a=n(7522),r=n.n(a),o=n(8183),i=n(4082),c=(n(358),function(e){var t=e.topicName,n=e.kafkaName,a=e.kafkaInstanceLink,c=e.kafkaPageLink,l=(0,o.useTranslation)().t;return r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-c-page__main-breadcrumb"},r().createElement(i.Breadcrumb,null,r().createElement(i.BreadcrumbItem,{to:c||"#"},l("common.kafka_instance")),r().createElement(i.BreadcrumbItem,{to:a||"#"},n||l("common.kafka_instance_name")),r().createElement(i.BreadcrumbItem,null,t))),r().createElement(i.PageSection,{variant:i.PageSectionVariants.light},r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.h1},t))))})},3822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(7522),r=n.n(a),o=n(8183),i=n(5399),c=n(4082),l=n(5546),s=n(7568),u=n(2645),p=n(1302),f=n(6585),m=n(3443),d=n(1674),k=n(7265),v=(n(3168),function(){return(v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),b=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))},g=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},h=function(e){var t=e.topicName,n=e.onCancelUpdateTopic,i=e.onSaveTopic,l=e.onError,s=(0,o.useTranslation)().t,h=(0,a.useContext)(f.E),T=(0,k.useAlert)().addAlert,y={name:t,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""},E=(0,a.useState)(y),P=E[0],S=E[1],w=(0,a.useState)(!1),C=w[0],N=w[1];return(0,a.useEffect)((function(){!function(e){b(void 0,void 0,void 0,(function(){var t,a,r,o,i,s,u,f;return g(this,(function(m){switch(m.label){case 0:return m.trys.push([0,2,,3]),[4,(0,p.BN)(e,h)];case 1:return t=m.sent(),a={},null===(o=t.config)||void 0===o||o.forEach((function(e){a[e.key||""]=e.value||""})),S(v(v({},P),{numPartitions:(null===(i=null==t?void 0:t.partitions)||void 0===i?void 0:i.length.toString())||"","cleanup.policy":a["cleanup.policy"]||"delete","retention.bytes":a["retention.bytes"]||"-1","retention.ms":a["retention.ms"]||"604800000"})),[3,3];case 2:return r=m.sent(),(0,d.I)(r)&&(l&&l(null===(s=r.response)||void 0===s?void 0:s.data.code,null===(u=r.response)||void 0===u?void 0:u.data.error_message),404===(null===(f=r.response)||void 0===f?void 0:f.status)&&(T({variant:c.AlertVariant.danger,title:"Topic "+e+" does not exist"}),n())),[3,3];case 3:return[2]}}))}))}(t)}),[t]),r().createElement(r().Fragment,null,r().createElement(u.W,{isCreate:!1,saveTopic:function(){return b(void 0,void 0,void 0,(function(){var e,t,n,a,r,o,u;return g(this,(function(f){switch(f.label){case 0:for(r in e=(0,m.L3)(P),t=e.name,n=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["name"]),a=[],N(!0),n)r&&"numPartitions"!==r&&a.push({key:r,value:n[r].toString().toLowerCase()});o={numPartitions:Number(P.numPartitions),config:a},f.label=1;case 1:return f.trys.push([1,3,,4]),[4,(0,p.eR)(t,o,h).then((function(){T({title:s("topic.topic_successfully_updated"),variant:c.AlertVariant.success}),N(!1),i()}))];case 2:return f.sent(),[3,4];case 3:return u=f.sent(),l&&l(u.response.data.code,u.response.data.error_message),N(!1),T({title:u.response.data.error_message,variant:c.AlertVariant.danger}),[3,4];case 4:return[2]}}))}))},handleCancel:n,topicData:P,setTopicData:S,isLoadingSave:C}),r().createElement("br",null),r().createElement("br",null))},T=n(7009),y=(n(1781),function(e){var t=e.onCancelUpdateTopic,n=e.onDeleteTopic,i=e.onSaveTopic,u=(0,o.useTranslation)().t,p=(0,T.S)(),f=p.topicName,m=void 0===f?"":f,d=p.kafkaName,k=p.kafkaPageLink,v=p.kafkaInstanceLink,b=p.onError,g=p.activeTab,y=void 0===g?0:g,E=(0,a.useState)(y),P=E[0],S=E[1],w=r().createRef(),C=r().createRef();return r().createElement(r().Fragment,null,r().createElement(s.I,{topicName:m,kafkaName:d,kafkaPageLink:k,kafkaInstanceLink:v}),r().createElement(c.PageSection,{variant:c.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},r().createElement(c.Tabs,{onSelect:function(e,t){S(t)},activeKey:P,isBox:!1,className:"pf-m-page-insets"},r().createElement(c.Tab,{eventKey:0,title:r().createElement(c.TabTitleText,null,u("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:w}),r().createElement(c.Tab,{eventKey:1,title:r().createElement(c.TabTitleText,null,u("common.properties")),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:C}))),r().createElement(c.PageSection,{variant:1===P?c.PageSectionVariants.light:c.PageSectionVariants.default},r().createElement(c.TabContent,{eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:w,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==y},r().createElement(l.J,{topic:m,consumerGroupByTopic:!0})),r().createElement(c.TabContent,{eventKey:1,id:"kafka-ui-TabcontentProperties",ref:C,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==y},r().createElement(h,{topicName:m,onCancelUpdateTopic:t,onDeleteTopic:n,onSaveTopic:i,onError:b}))))}),E=n(6302),P=n(3555),S=n(8416);const w=function(e){var t=e.getToken,n=e.apiBasePath,a=e.topicName,c=e.kafkaName,l=e.kafkaPageLink,s=e.kafkaInstanceLink,u=e.onError,p=e.dispatchKafkaAction,m=e.onConnectToRoute;return r().createElement(i.BrowserRouter,null,r().createElement(o.I18nextProvider,{i18n:E.Z},r().createElement(f.E.Provider,{value:{basePath:n,getToken:t}},r().createElement(T.J.Provider,{value:{activeTab:1,topicName:a,kafkaName:c,kafkaPageLink:l,kafkaInstanceLink:s,onError:u}},r().createElement(S.OU,null,r().createElement(y,{onCancelUpdateTopic:function(){p&&p(P.wT.DetailsTopic)},onDeleteTopic:function(){m&&m("")},onSaveTopic:function(){p&&p(P.wT.DetailsTopic)}}))))))}},1674:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var a=function(e){return void 0!==e}}}]);
//# sourceMappingURL=111.780f9048.bundle.js.map
(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[983],{3897:()=>{},3526:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});var a=n(7522),r=(n(3004),(0,a.createContext)({}))},8719:(e,t,n)=>{"use strict";n.d(t,{I:()=>i});var a=n(3004),r=n(7522),o=n.n(r),i=(n(3897),function(e){var t=e.topicName,n=e.getTopicListPath,r=e.onClickTopicList;return o().createElement("section",{className:"pf-c-page__main-breadcrumb"},o().createElement(a.Breadcrumb,null,o().createElement(a.BreadcrumbItem,{onClick:function(e){e.preventDefault(),r()},to:n()},"Topics"),o().createElement(a.BreadcrumbItem,null,t)),o().createElement(a.PageSection,{variant:a.PageSectionVariants.light},o().createElement(a.TextContent,{className:"header-padding"},o().createElement(a.Text,{component:a.TextVariants.h1},t))))})},699:(e,t,n)=>{"use strict";n.d(t,{i:()=>u});var a=n(7522),r=n.n(a),o=n(3004),i=n(9492),c=n(9115),l=n(3526),u=function(e){var t=e.setDeleteModal,n=e.deleteModal,u=e.topicName,s=e.onDeleteTopic,d=(0,a.useState)(""),v=d[0],f=d[1],p=(0,a.useContext)(l.w).addAlert,h=function(){t(!1)},b=(0,a.useContext)(c.E);return r().createElement(o.Modal,{variant:o.ModalVariant.small,isOpen:n,"aria-label":"Delete topic?",title:"Delete topic?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:h,actions:[r().createElement(o.Button,{variant:"danger",onClick:function(){return e=void 0,n=void 0,r=function(){var e;return function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),u?[4,(0,i.BK)(u,b)]:[3,2];case 1:n.sent(),n.label=2;case 2:return p("Successfully deleted topic "+u,o.AlertVariant.success),[3,4];case 3:return e=n.sent(),p(e.response.data.err,o.AlertVariant.danger),[3,4];case 4:return s(),t(!1),[2]}}))},new((a=void 0)||(a=Promise))((function(t,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}));var e,n,a,r},key:1,isDisabled:"DELETE"!=v.toUpperCase()},"Delete"),r().createElement(o.Button,{variant:"link",onClick:h,key:2},"Cancel")]},r().createElement(o.Text,{id:"modal-message"}," ",r().createElement("b",null,u)," will be deleted."," "),r().createElement("br",null),r().createElement("label",{htmlFor:"delete-text-input"},"Type DELETE to confirm:"),r().createElement(o.TextInput,{value:v,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:function(e){f(e)},autoFocus:!0}))}},3757:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FederatedUpdateTopicView:()=>v,default:()=>f});var a=n(7522),r=n.n(a),o=(n(6351),n(1392)),i=n(9115),c=n(9284),l=n(3004),u=n(6302),s=n(3006),d=n(3526),v=function(e){var t=e.getToken,n=e.apiBasePath,a=e.currentTopic,v=e.getTopicListPath,f=e.onClickTopicList,p=e.onCancelUpdateTopic,h=e.addAlert,b=e.onDeleteTopic,m=e.onSaveTopic,w={addAlert:h};return r().createElement(s.I18nextProvider,{i18n:u.Z},r().createElement(i.E.Provider,{value:{basePath:n,getToken:t}},r().createElement(d.w.Provider,{value:w},r().createElement(c.M5,null,r().createElement(l.PageSection,{variant:l.PageSectionVariants.light},r().createElement(o.l,{topicName:a,getTopicListPath:v,onClickTopicList:f,onCancelUpdateTopic:p,onDeleteTopic:b,onSaveTopic:m}))))))};const f=v},9492:(e,t,n)=>{"use strict";n.d(t,{BB:()=>c,Rh:()=>l,eR:()=>s,BN:()=>d,BK:()=>v});var a=n(7887),r=n(7830),o=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))},i=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=n.sent(),[4,new a.M2(new r.VK({accessToken:t,basePath:null==e?void 0:e.basePath})).getTopicsList()];case 2:return[2,n.sent().data]}}))}))},l=function(e,t){return o(void 0,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=i.sent(),[4,new a.M2(new r.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return o=i.sent().data,[2,u(o)]}}))}))},u=function(e){var t,n,a,r={};return r.name=e.name,null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(r[e.key]=e.value)})),r.numPartitions=null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length,r.replicationFactor=null===(a=null==e?void 0:e.partitions)||void 0===a?void 0:a.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})),r},s=function(e,t,n){return o(void 0,void 0,void 0,(function(){var o;return i(this,(function(i){switch(i.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return o=i.sent(),[4,new a.M2(new r.VK({accessToken:o,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,i.sent().status]}}))}))},d=function(e,t){return o(void 0,void 0,void 0,(function(){var n,o,c,l,u,s;return i(this,(function(i){switch(i.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=i.sent(),[4,new a.M2(new r.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return o=i.sent(),(c=o.data).config=c.config||[],c.config.push({key:"replicationFactor",value:null===(s=null===(u=null===(l=o.data)||void 0===l?void 0:l.partitions)||void 0===u?void 0:u.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===s?void 0:s.toString()}),[2,o.data]}}))}))},v=function(e,t){return o(void 0,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=o.sent(),[4,new a.M2(new r.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return o.sent(),[2]}}))}))}}}]);
//# sourceMappingURL=983.658d1bd6.bundle.js.map
(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[606],{3526:(e,t,n)=>{"use strict";n.d(t,{w:()=>a});var r=n(7522),a=(n(6801),(0,r.createContext)({}))},5116:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FederatedTopics:()=>u,default:()=>s});var r=n(7522),a=n.n(r),o=n(839),i=n(9115),c=n(6801),u=function(e){var t=e.getToken,n=e.apiBasePath,r=e.onCreateTopic;return a().createElement(i.E.Provider,{value:{basePath:n,getToken:t}},a().createElement(c.PageSection,{variant:c.PageSectionVariants.light},a().createElement(o.A,{onCreateTopic:r})))};const s=u},9492:(e,t,n)=>{"use strict";n.d(t,{BB:()=>c,BK:()=>u});var r=n(7887),a=n(7830),o=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=n.sent(),[4,new r.M2(new a.VK({accessToken:t,basePath:null==e?void 0:e.basePath})).getTopicsList()];case 2:return[2,n.sent().data]}}))}))},u=function(e,t){return o(void 0,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=o.sent(),[4,new r.M2(new a.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return o.sent(),[2]}}))}))}}}]);
//# sourceMappingURL=606.174a2472.bundle.js.map
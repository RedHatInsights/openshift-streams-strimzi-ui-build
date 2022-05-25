"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8696],{70168:function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,r)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||s(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(9981),t),r(o(88691),t),r(o(94453),t),r(o(57668),t)},9981:function(e,t,o){var s=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AclsApi=t.AclsApiFactory=t.AclsApiFp=t.AclsApiAxiosParamCreator=void 0;const r=o(78542),i=o(55824),n=o(34311);t.AclsApiAxiosParamCreator=function(e){return{createAcl:(t,o={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("createAcl","aclBinding",t);const s=new URL("/api/v1/acls",i.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const n=Object.assign(Object.assign({method:"POST"},r),o),a={};yield(0,i.setOAuthToObject)(a,"Bearer",[],e),a["Content-Type"]="application/json",(0,i.setSearchParams)(s,{});let c=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},a),c),o.headers),n.data=(0,i.serializeDataIfNeeded)(t,n,e),{url:(0,i.toPathString)(s),options:n}})),deleteAcls:(t,o,r,n,a,c,u={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/v1/acls",i.DUMMY_BASE_URL);let d;e&&(d=e.baseOptions);const p=Object.assign(Object.assign({method:"DELETE"},d),u),l={},h={};yield(0,i.setOAuthToObject)(l,"Bearer",[],e),void 0!==t&&(h.resourceType=t),void 0!==o&&(h.resourceName=o),void 0!==r&&(h.patternType=r),void 0!==n&&(h.principal=n),void 0!==a&&(h.operation=a),void 0!==c&&(h.permission=c),(0,i.setSearchParams)(s,h);let f=d&&d.headers?d.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},l),f),u.headers),{url:(0,i.toPathString)(s),options:p}})),getAclResourceOperations:(t={})=>s(this,void 0,void 0,(function*(){const o=new URL("/api/v1/acls/resource-operations",i.DUMMY_BASE_URL);let s;e&&(s=e.baseOptions);const r=Object.assign(Object.assign({method:"GET"},s),t),n={};yield(0,i.setOAuthToObject)(n,"Bearer",[],e),(0,i.setSearchParams)(o,{});let a=s&&s.headers?s.headers:{};return r.headers=Object.assign(Object.assign(Object.assign({},n),a),t.headers),{url:(0,i.toPathString)(o),options:r}})),getAcls:(t,o,r,n,a,c,u,d,p,l,h={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/v1/acls",i.DUMMY_BASE_URL);let f;e&&(f=e.baseOptions);const O=Object.assign(Object.assign({method:"GET"},f),h),A={},v={};yield(0,i.setOAuthToObject)(A,"Bearer",[],e),void 0!==t&&(v.resourceType=t),void 0!==o&&(v.resourceName=o),void 0!==r&&(v.patternType=r),void 0!==n&&(v.principal=n),void 0!==a&&(v.operation=a),void 0!==c&&(v.permission=c),void 0!==u&&(v.page=u),void 0!==d&&(v.size=d),void 0!==p&&(v.order=p),void 0!==l&&(v.orderKey=l),(0,i.setSearchParams)(s,v);let b=f&&f.headers?f.headers:{};return O.headers=Object.assign(Object.assign(Object.assign({},A),b),h.headers),{url:(0,i.toPathString)(s),options:O}}))}};t.AclsApiFp=function(e){const o=(0,t.AclsApiAxiosParamCreator)(e);return{createAcl(t,a){return s(this,void 0,void 0,(function*(){const s=yield o.createAcl(t,a);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},deleteAcls(t,a,c,u,d,p,l){return s(this,void 0,void 0,(function*(){const s=yield o.deleteAcls(t,a,c,u,d,p,l);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getAclResourceOperations(t){return s(this,void 0,void 0,(function*(){const s=yield o.getAclResourceOperations(t);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getAcls(t,a,c,u,d,p,l,h,f,O,A){return s(this,void 0,void 0,(function*(){const s=yield o.getAcls(t,a,c,u,d,p,l,h,f,O,A);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))}}};t.AclsApiFactory=function(e,o,s){const r=(0,t.AclsApiFp)(e);return{createAcl:(e,t)=>r.createAcl(e,t).then((e=>e(s,o))),deleteAcls:(e,t,i,n,a,c,u)=>r.deleteAcls(e,t,i,n,a,c,u).then((e=>e(s,o))),getAclResourceOperations:e=>r.getAclResourceOperations(e).then((e=>e(s,o))),getAcls:(e,t,i,n,a,c,u,d,p,l,h)=>r.getAcls(e,t,i,n,a,c,u,d,p,l,h).then((e=>e(s,o)))}};class a extends n.BaseAPI{createAcl(e,o){return(0,t.AclsApiFp)(this.configuration).createAcl(e,o).then((e=>e(this.axios,this.basePath)))}deleteAcls(e,o,s,r,i,n,a){return(0,t.AclsApiFp)(this.configuration).deleteAcls(e,o,s,r,i,n,a).then((e=>e(this.axios,this.basePath)))}getAclResourceOperations(e){return(0,t.AclsApiFp)(this.configuration).getAclResourceOperations(e).then((e=>e(this.axios,this.basePath)))}getAcls(e,o,s,r,i,n,a,c,u,d,p){return(0,t.AclsApiFp)(this.configuration).getAcls(e,o,s,r,i,n,a,c,u,d,p).then((e=>e(this.axios,this.basePath)))}}t.AclsApi=a},88691:function(e,t,o){var s=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GroupsApi=t.GroupsApiFactory=t.GroupsApiFp=t.GroupsApiAxiosParamCreator=void 0;const r=o(78542),i=o(55824),n=o(34311);t.GroupsApiAxiosParamCreator=function(e){return{deleteConsumerGroupById:(t,o={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("deleteConsumerGroupById","consumerGroupId",t);const s="/api/v1/consumer-groups/{consumerGroupId}".replace("{consumerGroupId}",encodeURIComponent(String(t))),r=new URL(s,i.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const a=Object.assign(Object.assign({method:"DELETE"},n),o),c={};yield(0,i.setOAuthToObject)(c,"Bearer",[],e),(0,i.setSearchParams)(r,{});let u=n&&n.headers?n.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},c),u),o.headers),{url:(0,i.toPathString)(r),options:a}})),getConsumerGroupById:(t,o,r,n,a,c={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("getConsumerGroupById","consumerGroupId",t);const s="/api/v1/consumer-groups/{consumerGroupId}".replace("{consumerGroupId}",encodeURIComponent(String(t))),u=new URL(s,i.DUMMY_BASE_URL);let d;e&&(d=e.baseOptions);const p=Object.assign(Object.assign({method:"GET"},d),c),l={},h={};yield(0,i.setOAuthToObject)(l,"Bearer",[],e),void 0!==o&&(h.order=o),void 0!==r&&(h.orderKey=r),void 0!==n&&(h.partitionFilter=n),void 0!==a&&(h.topic=a),(0,i.setSearchParams)(u,h);let f=d&&d.headers?d.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},l),f),c.headers),{url:(0,i.toPathString)(u),options:p}})),getConsumerGroups:(t,o,r,n,a,c,u,d,p={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/v1/consumer-groups",i.DUMMY_BASE_URL);let l;e&&(l=e.baseOptions);const h=Object.assign(Object.assign({method:"GET"},l),p),f={},O={};yield(0,i.setOAuthToObject)(f,"Bearer",[],e),void 0!==t&&(O.offset=t),void 0!==o&&(O.limit=o),void 0!==r&&(O.size=r),void 0!==n&&(O.page=n),void 0!==a&&(O.topic=a),void 0!==c&&(O["group-id-filter"]=c),void 0!==u&&(O.order=u),void 0!==d&&(O.orderKey=d),(0,i.setSearchParams)(s,O);let A=l&&l.headers?l.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},f),A),p.headers),{url:(0,i.toPathString)(s),options:h}})),resetConsumerGroupOffset:(t,o,r={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("resetConsumerGroupOffset","consumerGroupId",t),(0,i.assertParamExists)("resetConsumerGroupOffset","consumerGroupResetOffsetParameters",o);const s="/api/v1/consumer-groups/{consumerGroupId}/reset-offset".replace("{consumerGroupId}",encodeURIComponent(String(t))),n=new URL(s,i.DUMMY_BASE_URL);let a;e&&(a=e.baseOptions);const c=Object.assign(Object.assign({method:"POST"},a),r),u={};yield(0,i.setOAuthToObject)(u,"Bearer",[],e),u["Content-Type"]="application/json",(0,i.setSearchParams)(n,{});let d=a&&a.headers?a.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),d),r.headers),c.data=(0,i.serializeDataIfNeeded)(o,c,e),{url:(0,i.toPathString)(n),options:c}}))}};t.GroupsApiFp=function(e){const o=(0,t.GroupsApiAxiosParamCreator)(e);return{deleteConsumerGroupById(t,a){return s(this,void 0,void 0,(function*(){const s=yield o.deleteConsumerGroupById(t,a);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getConsumerGroupById(t,a,c,u,d,p){return s(this,void 0,void 0,(function*(){const s=yield o.getConsumerGroupById(t,a,c,u,d,p);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getConsumerGroups(t,a,c,u,d,p,l,h,f){return s(this,void 0,void 0,(function*(){const s=yield o.getConsumerGroups(t,a,c,u,d,p,l,h,f);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},resetConsumerGroupOffset(t,a,c){return s(this,void 0,void 0,(function*(){const s=yield o.resetConsumerGroupOffset(t,a,c);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))}}};t.GroupsApiFactory=function(e,o,s){const r=(0,t.GroupsApiFp)(e);return{deleteConsumerGroupById:(e,t)=>r.deleteConsumerGroupById(e,t).then((e=>e(s,o))),getConsumerGroupById:(e,t,i,n,a,c)=>r.getConsumerGroupById(e,t,i,n,a,c).then((e=>e(s,o))),getConsumerGroups:(e,t,i,n,a,c,u,d,p)=>r.getConsumerGroups(e,t,i,n,a,c,u,d,p).then((e=>e(s,o))),resetConsumerGroupOffset:(e,t,i)=>r.resetConsumerGroupOffset(e,t,i).then((e=>e(s,o)))}};class a extends n.BaseAPI{deleteConsumerGroupById(e,o){return(0,t.GroupsApiFp)(this.configuration).deleteConsumerGroupById(e,o).then((e=>e(this.axios,this.basePath)))}getConsumerGroupById(e,o,s,r,i,n){return(0,t.GroupsApiFp)(this.configuration).getConsumerGroupById(e,o,s,r,i,n).then((e=>e(this.axios,this.basePath)))}getConsumerGroups(e,o,s,r,i,n,a,c,u){return(0,t.GroupsApiFp)(this.configuration).getConsumerGroups(e,o,s,r,i,n,a,c,u).then((e=>e(this.axios,this.basePath)))}resetConsumerGroupOffset(e,o,s){return(0,t.GroupsApiFp)(this.configuration).resetConsumerGroupOffset(e,o,s).then((e=>e(this.axios,this.basePath)))}}t.GroupsApi=a},94453:function(e,t,o){var s=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RecordsApi=t.RecordsApiFactory=t.RecordsApiFp=t.RecordsApiAxiosParamCreator=void 0;const r=o(78542),i=o(55824),n=o(34311);t.RecordsApiAxiosParamCreator=function(e){return{consumeRecords:(t,o,r,a,c,u,d,p={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("consumeRecords","topicName",t);const s="/api/v1/topics/{topicName}/records".replace("{topicName}",encodeURIComponent(String(t))),l=new URL(s,i.DUMMY_BASE_URL);let h;e&&(h=e.baseOptions);const f=Object.assign(Object.assign({method:"GET"},h),p),O={},A={};yield(0,i.setOAuthToObject)(O,"Bearer",[],e),o&&(A.include=o.join(n.COLLECTION_FORMATS.csv)),void 0!==r&&(A.limit=r),void 0!==a&&(A.maxValueLength=a),void 0!==c&&(A.offset=c),void 0!==u&&(A.partition=u),void 0!==d&&(A.timestamp=d),(0,i.setSearchParams)(l,A);let v=h&&h.headers?h.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},O),v),p.headers),{url:(0,i.toPathString)(l),options:f}})),produceRecord:(t,o,r={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("produceRecord","topicName",t),(0,i.assertParamExists)("produceRecord","record",o);const s="/api/v1/topics/{topicName}/records".replace("{topicName}",encodeURIComponent(String(t))),n=new URL(s,i.DUMMY_BASE_URL);let a;e&&(a=e.baseOptions);const c=Object.assign(Object.assign({method:"POST"},a),r),u={};yield(0,i.setOAuthToObject)(u,"Bearer",[],e),u["Content-Type"]="application/json",(0,i.setSearchParams)(n,{});let d=a&&a.headers?a.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),d),r.headers),c.data=(0,i.serializeDataIfNeeded)(o,c,e),{url:(0,i.toPathString)(n),options:c}}))}};t.RecordsApiFp=function(e){const o=(0,t.RecordsApiAxiosParamCreator)(e);return{consumeRecords(t,a,c,u,d,p,l,h){return s(this,void 0,void 0,(function*(){const s=yield o.consumeRecords(t,a,c,u,d,p,l,h);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},produceRecord(t,a,c){return s(this,void 0,void 0,(function*(){const s=yield o.produceRecord(t,a,c);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))}}};t.RecordsApiFactory=function(e,o,s){const r=(0,t.RecordsApiFp)(e);return{consumeRecords:(e,t,i,n,a,c,u,d)=>r.consumeRecords(e,t,i,n,a,c,u,d).then((e=>e(s,o))),produceRecord:(e,t,i)=>r.produceRecord(e,t,i).then((e=>e(s,o)))}};class a extends n.BaseAPI{consumeRecords(e,o,s,r,i,n,a,c){return(0,t.RecordsApiFp)(this.configuration).consumeRecords(e,o,s,r,i,n,a,c).then((e=>e(this.axios,this.basePath)))}produceRecord(e,o,s){return(0,t.RecordsApiFp)(this.configuration).produceRecord(e,o,s).then((e=>e(this.axios,this.basePath)))}}t.RecordsApi=a},57668:function(e,t,o){var s=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.TopicsApi=t.TopicsApiFactory=t.TopicsApiFp=t.TopicsApiAxiosParamCreator=void 0;const r=o(78542),i=o(55824),n=o(34311);t.TopicsApiAxiosParamCreator=function(e){return{createTopic:(t,o={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("createTopic","newTopicInput",t);const s=new URL("/api/v1/topics",i.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const n=Object.assign(Object.assign({method:"POST"},r),o),a={};yield(0,i.setOAuthToObject)(a,"Bearer",[],e),a["Content-Type"]="application/json",(0,i.setSearchParams)(s,{});let c=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},a),c),o.headers),n.data=(0,i.serializeDataIfNeeded)(t,n,e),{url:(0,i.toPathString)(s),options:n}})),deleteTopic:(t,o={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("deleteTopic","topicName",t);const s="/api/v1/topics/{topicName}".replace("{topicName}",encodeURIComponent(String(t))),r=new URL(s,i.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const a=Object.assign(Object.assign({method:"DELETE"},n),o),c={};yield(0,i.setOAuthToObject)(c,"Bearer",[],e),(0,i.setSearchParams)(r,{});let u=n&&n.headers?n.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},c),u),o.headers),{url:(0,i.toPathString)(r),options:a}})),getTopic:(t,o={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("getTopic","topicName",t);const s="/api/v1/topics/{topicName}".replace("{topicName}",encodeURIComponent(String(t))),r=new URL(s,i.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const a=Object.assign(Object.assign({method:"GET"},n),o),c={};yield(0,i.setOAuthToObject)(c,"Bearer",[],e),(0,i.setSearchParams)(r,{});let u=n&&n.headers?n.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},c),u),o.headers),{url:(0,i.toPathString)(r),options:a}})),getTopics:(t,o,r,n,a,c,u,d={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/v1/topics",i.DUMMY_BASE_URL);let p;e&&(p=e.baseOptions);const l=Object.assign(Object.assign({method:"GET"},p),d),h={},f={};yield(0,i.setOAuthToObject)(h,"Bearer",[],e),void 0!==t&&(f.offset=t),void 0!==o&&(f.limit=o),void 0!==r&&(f.size=r),void 0!==n&&(f.filter=n),void 0!==a&&(f.page=a),void 0!==c&&(f.order=c),void 0!==u&&(f.orderKey=u),(0,i.setSearchParams)(s,f);let O=p&&p.headers?p.headers:{};return l.headers=Object.assign(Object.assign(Object.assign({},h),O),d.headers),{url:(0,i.toPathString)(s),options:l}})),updateTopic:(t,o,r={})=>s(this,void 0,void 0,(function*(){(0,i.assertParamExists)("updateTopic","topicName",t),(0,i.assertParamExists)("updateTopic","topicSettings",o);const s="/api/v1/topics/{topicName}".replace("{topicName}",encodeURIComponent(String(t))),n=new URL(s,i.DUMMY_BASE_URL);let a;e&&(a=e.baseOptions);const c=Object.assign(Object.assign({method:"PATCH"},a),r),u={};yield(0,i.setOAuthToObject)(u,"Bearer",[],e),u["Content-Type"]="application/json",(0,i.setSearchParams)(n,{});let d=a&&a.headers?a.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),d),r.headers),c.data=(0,i.serializeDataIfNeeded)(o,c,e),{url:(0,i.toPathString)(n),options:c}}))}};t.TopicsApiFp=function(e){const o=(0,t.TopicsApiAxiosParamCreator)(e);return{createTopic(t,a){return s(this,void 0,void 0,(function*(){const s=yield o.createTopic(t,a);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},deleteTopic(t,a){return s(this,void 0,void 0,(function*(){const s=yield o.deleteTopic(t,a);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getTopic(t,a){return s(this,void 0,void 0,(function*(){const s=yield o.getTopic(t,a);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},getTopics(t,a,c,u,d,p,l,h){return s(this,void 0,void 0,(function*(){const s=yield o.getTopics(t,a,c,u,d,p,l,h);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))},updateTopic(t,a,c){return s(this,void 0,void 0,(function*(){const s=yield o.updateTopic(t,a,c);return(0,i.createRequestFunction)(s,r.default,n.BASE_PATH,e)}))}}};t.TopicsApiFactory=function(e,o,s){const r=(0,t.TopicsApiFp)(e);return{createTopic:(e,t)=>r.createTopic(e,t).then((e=>e(s,o))),deleteTopic:(e,t)=>r.deleteTopic(e,t).then((e=>e(s,o))),getTopic:(e,t)=>r.getTopic(e,t).then((e=>e(s,o))),getTopics:(e,t,i,n,a,c,u,d)=>r.getTopics(e,t,i,n,a,c,u,d).then((e=>e(s,o))),updateTopic:(e,t,i)=>r.updateTopic(e,t,i).then((e=>e(s,o)))}};class a extends n.BaseAPI{createTopic(e,o){return(0,t.TopicsApiFp)(this.configuration).createTopic(e,o).then((e=>e(this.axios,this.basePath)))}deleteTopic(e,o){return(0,t.TopicsApiFp)(this.configuration).deleteTopic(e,o).then((e=>e(this.axios,this.basePath)))}getTopic(e,o){return(0,t.TopicsApiFp)(this.configuration).getTopic(e,o).then((e=>e(this.axios,this.basePath)))}getTopics(e,o,s,r,i,n,a,c){return(0,t.TopicsApiFp)(this.configuration).getTopics(e,o,s,r,i,n,a,c).then((e=>e(this.axios,this.basePath)))}updateTopic(e,o,s){return(0,t.TopicsApiFp)(this.configuration).updateTopic(e,o,s).then((e=>e(this.axios,this.basePath)))}}t.TopicsApi=a},34311:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RequiredError=t.BaseAPI=t.COLLECTION_FORMATS=t.BASE_PATH=void 0;const s=o(78542);t.BASE_PATH="http://localhost".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};t.BaseAPI=class{constructor(e,o=t.BASE_PATH,r=s.default){this.basePath=o,this.axios=r,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}};class r extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}t.RequiredError=r},55824:function(e,t,o){var s=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createRequestFunction=t.toPathString=t.serializeDataIfNeeded=t.setSearchParams=t.setOAuthToObject=t.setBearerAuthToObject=t.setBasicAuthToObject=t.setApiKeyToObject=t.assertParamExists=t.DUMMY_BASE_URL=void 0;const r=o(34311);t.DUMMY_BASE_URL="https://example.com";t.assertParamExists=function(e,t,o){if(null==o)throw new r.RequiredError(t,`Required parameter ${t} was null or undefined when calling ${e}.`)};t.setApiKeyToObject=function(e,t,o){return s(this,void 0,void 0,(function*(){if(o&&o.apiKey){const s="function"==typeof o.apiKey?yield o.apiKey(t):yield o.apiKey;e[t]=s}}))};t.setBasicAuthToObject=function(e,t){t&&(t.username||t.password)&&(e.auth={username:t.username,password:t.password})};t.setBearerAuthToObject=function(e,t){return s(this,void 0,void 0,(function*(){if(t&&t.accessToken){const o="function"==typeof t.accessToken?yield t.accessToken():yield t.accessToken;e.Authorization="Bearer "+o}}))};t.setOAuthToObject=function(e,t,o,r){return s(this,void 0,void 0,(function*(){if(r&&r.accessToken){const s="function"==typeof r.accessToken?yield r.accessToken(t,o):yield r.accessToken;e.Authorization="Bearer "+s}}))};t.setSearchParams=function(e,...t){const o=new URLSearchParams(e.search);for(const e of t)for(const t in e)if(Array.isArray(e[t])){o.delete(t);for(const s of e[t])o.append(t,s)}else o.set(t,e[t]);e.search=o.toString()};t.serializeDataIfNeeded=function(e,t,o){const s="string"!=typeof e;return(s&&o&&o.isJsonMime?o.isJsonMime(t.headers["Content-Type"]):s)?JSON.stringify(void 0!==e?e:{}):e||""};t.toPathString=function(e){return e.pathname+e.search+e.hash};t.createRequestFunction=function(e,t,o,s){return(r=t,i=o)=>{const n=Object.assign(Object.assign({},e.options),{url:((null==s?void 0:s.basePath)||i)+e.url});return r.request(n)}}},89669:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=void 0;t.Configuration=class{constructor(e={}){this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}}},32841:function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,r)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||s(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(70168),t),r(o(89669),t),r(o(3580),t)},47966:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},36974:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclBindingOrderKey=void 0,t.AclBindingOrderKey={ResourceType:"resourceType",ResourceName:"resourceName",PatternType:"patternType",Principal:"principal",Operation:"operation",Permission:"permission"}},83050:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclOperationFilter=void 0,t.AclOperationFilter={All:"ALL",Read:"READ",Write:"WRITE",Create:"CREATE",Delete:"DELETE",Alter:"ALTER",Describe:"DESCRIBE",DescribeConfigs:"DESCRIBE_CONFIGS",AlterConfigs:"ALTER_CONFIGS",Any:"ANY"}},7729:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclOperation=void 0,t.AclOperation={All:"ALL",Read:"READ",Write:"WRITE",Create:"CREATE",Delete:"DELETE",Alter:"ALTER",Describe:"DESCRIBE",DescribeConfigs:"DESCRIBE_CONFIGS",AlterConfigs:"ALTER_CONFIGS"}},63523:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclPatternTypeFilter=void 0,t.AclPatternTypeFilter={Literal:"LITERAL",Prefixed:"PREFIXED",Any:"ANY",Match:"MATCH"}},51521:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclPatternType=void 0,t.AclPatternType={Literal:"LITERAL",Prefixed:"PREFIXED"}},50502:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclPermissionTypeFilter=void 0,t.AclPermissionTypeFilter={Allow:"ALLOW",Deny:"DENY",Any:"ANY"}},19269:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclPermissionType=void 0,t.AclPermissionType={Allow:"ALLOW",Deny:"DENY"}},78685:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclResourceTypeFilter=void 0,t.AclResourceTypeFilter={Any:"ANY",Group:"GROUP",Topic:"TOPIC",Cluster:"CLUSTER",TransactionalId:"TRANSACTIONAL_ID"}},82891:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AclResourceType=void 0,t.AclResourceType={Group:"GROUP",Topic:"TOPIC",Cluster:"CLUSTER",TransactionalId:"TRANSACTIONAL_ID"}},7338:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},47731:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConsumerGroupDescriptionOrderKey=void 0,t.ConsumerGroupDescriptionOrderKey={Offset:"offset",EndOffset:"endOffset",Lag:"lag",Partition:"partition"}},95346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},20144:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},21113:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConsumerGroupOrderKey=void 0,t.ConsumerGroupOrderKey={Name:"name"}},683:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},84358:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},64925:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25085:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConsumerGroupState=void 0,t.ConsumerGroupState={Unknown:"UNKNOWN",PreparingRebalance:"PREPARING_REBALANCE",CompletingRebalance:"COMPLETING_REBALANCE",Stable:"STABLE",Dead:"DEAD",Empty:"EMPTY"}},86185:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},98467:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3580:function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,r)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||s(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(83050),t),r(o(47966),t),r(o(36974),t),r(o(7729),t),r(o(8937),t),r(o(51521),t),r(o(63523),t),r(o(19269),t),r(o(50502),t),r(o(82891),t),r(o(78685),t),r(o(7338),t),r(o(98467),t),r(o(86185),t),r(o(47731),t),r(o(95346),t),r(o(20144),t),r(o(21113),t),r(o(683),t),r(o(64925),t),r(o(84358),t),r(o(25085),t),r(o(40901),t),r(o(24315),t),r(o(58559),t),r(o(84797),t),r(o(80596),t),r(o(37733),t),r(o(68926),t),r(o(14839),t),r(o(68833),t),r(o(24756),t),r(o(34598),t),r(o(89097),t),r(o(57906),t),r(o(70995),t)},40901:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},24315:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},58559:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},84797:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OffsetType=void 0,t.OffsetType={Timestamp:"timestamp",Absolute:"absolute",Latest:"latest",Earliest:"earliest"}},80596:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},68926:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RecordIncludedProperty=void 0,t.RecordIncludedProperty={Partition:"partition",Offset:"offset",Timestamp:"timestamp",TimestampType:"timestampType",Headers:"headers",Key:"key",Value:"value"}},14839:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},37733:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},68833:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SortDirection=void 0,t.SortDirection={Asc:"asc",Desc:"desc"}},34598:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TopicOrderKey=void 0,t.TopicOrderKey={Name:"name",Partitions:"partitions",RetentionMs:"retention.ms",RetentionBytes:"retention.bytes"}},89097:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},24756:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},57906:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},70995:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},28696:function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,r)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||s(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(32841),t)}}]);

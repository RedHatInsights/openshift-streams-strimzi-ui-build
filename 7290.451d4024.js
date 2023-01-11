"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7290],{37290:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var n=i(42695),o=i(85893),a=i(93264),l=i(15847),s=i(54785),d=i(60540),r=i(3654),c=i(5736),u=i(97644);const v=({topicName:e,onDeleteTopic:t,refreshTopics:i,hideModal:v})=>{const p=(0,a.useContext)(r.E),{t:m}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),[g,h]=(0,a.useState)(""),{addAlert:f}=(0,u.useAlert)()||{addAlert:()=>{}},[T,_]=(0,a.useState)(!1),b=()=>{v()};return(0,o.jsxs)(s.Modal,Object.assign({variant:s.ModalVariant.small,isOpen:!0,"aria-label":m("topic.delete_modal_title"),title:m("topic.delete_modal_title"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:b,actions:[(0,o.jsx)(s.Button,Object.assign({variant:"danger",onClick:()=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){var n;try{e&&(_(!0),yield(0,d.BK)(e,p).then((()=>{f({title:m("topic.topic_successfully_deleted",{name:e}),variant:s.AlertVariant.success}),t&&t(),i&&i()})))}catch(e){let t;_(!1),e&&(0,c.I)(e)&&(t=null===(n=e.response)||void 0===n?void 0:n.data.error_message),f({title:t||"",variant:s.AlertVariant.danger})}b()})),"data-testid":"modalDeleteTopic-buttonDelete",isDisabled:"DELETE"!=g.toUpperCase(),isLoading:T},{children:m("common.delete")}),1),(0,o.jsx)(s.Button,Object.assign({variant:"link",onClick:b},{children:m("common.cancel")}),2)]},{children:[(0,o.jsxs)(s.Text,Object.assign({id:"modal-message"},{children:[" ",(0,o.jsx)("label",{htmlFor:"instance-name-input",dangerouslySetInnerHTML:{__html:m("common.confirm_delete_modal_text",{name:e})}})]})),(0,o.jsx)("br",{}),(0,o.jsx)("label",Object.assign({htmlFor:"delete-text-input"},{children:m("common.confirm_delete")})),(0,o.jsx)(s.TextInput,{value:g,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:e=>{h(e)},autoFocus:!0})]}))}},60540:(e,t,i)=>{i.d(t,{BB:()=>l,BK:()=>u,BN:()=>c,CW:()=>v,Rh:()=>s,eR:()=>r});var n,o=i(42695),a=i(84094);!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(n||(n={}));const l=(e,t,i,n,l,s)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield null==e?void 0:e.getToken(),d=new a.TopicsApi(new a.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})),r=yield d.getTopics(void 0,void 0,i,s,t,l,n),c=(r.data.items||[]).map((e=>{var t,i,n,o,a;return{topic_name:e.name,partitions:(null===(t=e.partitions)||void 0===t?void 0:t.length)||0,retention_size:(null===(n=null===(i=e.config)||void 0===i?void 0:i.find((({key:e})=>"retention.bytes"===e)))||void 0===n?void 0:n.value)||"",retention_time:(null===(a=null===(o=e.config)||void 0===o?void 0:o.find((({key:e})=>"retention.ms"===e)))||void 0===a?void 0:a.value)||""}}));return{count:r.data.total,topics:c}})),s=(e,t)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==t?void 0:t.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:i,basePath:null==t?void 0:t.basePath})),{data:o}=yield n.getTopic(e);return d(o)})),d=e=>{var t,i,n;const o={name:"",numPartitions:"0"};return e&&e.name&&(o.name=e.name),null===(t=e.config)||void 0===t||t.forEach((e=>{if(e.key&&e.value){const t=e.key;o[t]=e.value}})),o.numPartitions=(null===(i=null==e?void 0:e.partitions)||void 0===i?void 0:i.length.toString())||"0",o.replicationFactor=(null==e?void 0:e.partitions)&&(null===(n=null==e?void 0:e.partitions[0].replicas)||void 0===n?void 0:n.length.toString())||"0",o},r=(e,t,i)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==i?void 0:i.getToken(),o=new a.TopicsApi(new a.Configuration({accessToken:n,basePath:null==i?void 0:i.basePath}));return(yield o.updateTopic(e,t)).status})),c=(e,t)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==t?void 0:t.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:i,basePath:null==t?void 0:t.basePath})),o=yield n.getTopic(e),l=(o.data.partitions||[]).map((e=>{var t;return(null===(t=e.replicas)||void 0===t?void 0:t.length)||0})).reduce(((e=0,t=0)=>e+t)).toString(),s=o.data;return s.config=s.config||[],s.config.push({key:"replicationFactor",value:l}),o.data})),u=(e,t)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==t?void 0:t.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:i,basePath:null==t?void 0:t.basePath}));yield n.deleteTopic(e)})),v=[...Object.values(a.TopicOrderKey)]},5736:(e,t,i)=>{i.d(t,{I:()=>n});const n=e=>void 0!==e}}]);
//# sourceMappingURL=7290.451d4024.js.map
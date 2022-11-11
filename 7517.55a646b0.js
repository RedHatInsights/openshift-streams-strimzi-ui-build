"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7517],{43791:()=>{},64517:(e,a,t)=>{t.d(a,{J:()=>i,S:()=>s});var n=t(93264);const i=t.n(n)().createContext(void 0),s=()=>(0,n.useContext)(i)},13985:(e,a,t)=>{t.d(a,{I:()=>o});var n=t(85893),i=t(15847),s=t(21242),r=(t(43791),t(73685));const o=({topicName:e,kafkaName:a,kafkaInstanceLink:t,kafkaPageLink:o})=>{const{t:c}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:(0,n.jsxs)(s.Breadcrumb,{children:[(0,n.jsx)(s.BreadcrumbItem,{render:()=>(0,n.jsx)(r.Link,Object.assign({to:o||"#"},{children:c("common.kafka_instance")}))}),(0,n.jsx)(s.BreadcrumbItem,{render:()=>(0,n.jsx)(r.Link,Object.assign({to:t||"#"},{children:a||c("common.kafka_instance_name")}))}),(0,n.jsx)(s.BreadcrumbItem,{children:e})]})})),(0,n.jsx)(s.PageSection,Object.assign({variant:s.PageSectionVariants.light},{children:(0,n.jsx)(s.TextContent,{children:(0,n.jsx)(s.Text,Object.assign({component:s.TextVariants.h1},{children:e}))})}))]})}},14561:(e,a,t)=>{t.r(a),t.d(a,{default:()=>P});var n=t(85893),i=t(93264),s=t.n(i),r=t(73685),o=t(15847),c=t(50834),l=t(21242),d=t(63850),u=t(13985),k=t(42695),m=t(50334),p=t(60540),g=t(3654),v=t(1787),f=t(5736);t(17293);const b=({topicName:e,onSaveTopic:a,onError:t})=>{const{t:s}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]),d=(0,i.useContext)(g.E),{addAlert:u}=(0,c.useAlert)()||{addAlert:()=>{}},b=(0,r.useHistory)(),{getBasename:j}=(0,c.useBasename)()||{getBasename:()=>""},h=j(),x={name:e,numPartitions:"","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"",isRetentionTimeUnlimited:!1,isRetentionSizeUnlimited:!0},[T,y]=(0,i.useState)(x),[P,_]=(0,i.useState)(!1),S=(0,i.useCallback)((()=>{b.push(`${h}/topics/${e}`)}),[h,b,e]),C=(0,i.useCallback)((e=>(0,k.__awaiter)(void 0,void 0,void 0,(function*(){var a,n,i;try{yield(0,p.BN)(e,d).then((e=>{var a,t;const n=(0,v.qS)(e);y(Object.assign(Object.assign(Object.assign({},T),n),{numPartitions:(null===(a=null==e?void 0:e.partitions)||void 0===a?void 0:a.length.toString())||"",replicationFactor:(null==e?void 0:e.partitions)&&(null===(t=null==e?void 0:e.partitions[0].replicas)||void 0===t?void 0:t.length.toString())||""}))}))}catch(s){if((0,f.I)(s)){let r,o;s&&(0,f.I)(s)&&(o=null===(a=s.response)||void 0===a?void 0:a.data.code,r=null===(n=s.response)||void 0===n?void 0:n.data.error_message),t&&t(o||-1,r||""),404===(null===(i=s.response)||void 0===i?void 0:i.status)&&(u({variant:l.AlertVariant.danger,title:`Topic ${e} does not exist`}),S&&S())}}}))),[u,d,S,t,T]),N=(0,i.useRef)();(0,i.useEffect)((()=>{N.current!==e&&(N.current=e,C(e))}),[C,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.W,{isCreate:!1,saveTopic:()=>(0,k.__awaiter)(void 0,void 0,void 0,(function*(){var e,n;const{name:i,settings:r}=(0,v.az)(T,["cleanup.policy"]);_(!0);try{yield(0,p.eR)(i,r,d).then((()=>{u({title:s("topic.topic_successfully_updated"),variant:l.AlertVariant.success}),_(!1),a()}))}catch(a){let i,s;a&&(0,f.I)(a)&&(s=null===(e=a.response)||void 0===e?void 0:e.data.code,i=null===(n=a.response)||void 0===n?void 0:n.data.error_message),t&&t(s||-1,i||""),_(!1),u({title:i||"",variant:l.AlertVariant.danger})}})),handleCancel:S,topicData:T,setTopicData:y,isLoadingSave:P}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})};var j=t(64517);t(27958);const h=()=>{const{t:e}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]),a=(0,r.useHistory)(),{getBasename:t}=(0,c.useBasename)()||{getBasename:()=>""},k=t(),{topicName:m}=(0,r.useParams)(),{kafkaName:p,kafkaPageLink:g,kafkaInstanceLink:v,onError:f,activeTab:h=1}=(0,j.S)()||{},[x,T]=(0,i.useState)(h),y=s().createRef(),P=s().createRef();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.I,{topicName:m,kafkaName:p,kafkaPageLink:g,kafkaInstanceLink:v}),(0,n.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},{children:(0,n.jsxs)(l.Tabs,Object.assign({onSelect:(e,a)=>{T(a)},activeKey:x,isBox:!1,className:"pf-m-page-insets"},{children:[(0,n.jsx)(l.Tab,{eventKey:0,title:(0,n.jsx)(l.TabTitleText,{children:e("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:y}),(0,n.jsx)(l.Tab,{eventKey:1,title:(0,n.jsx)(l.TabTitleText,{children:e("common.properties")}),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:P})]}))})),(0,n.jsxs)(l.PageSection,Object.assign({variant:1===x?l.PageSectionVariants.light:l.PageSectionVariants.default},{children:[(0,n.jsx)(l.TabContent,Object.assign({eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:y,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==h},{children:(0,n.jsx)(d.J,{topic:m,consumerGroupByTopic:!0})})),(0,n.jsx)(l.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentProperties",ref:P,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==h},{children:(0,n.jsx)(b,{topicName:m,onDeleteTopic:()=>{a.push(k)},onSaveTopic:()=>{a.push(`${k}/topics/${m}`)},onError:f})}))]}))]})};var x=t(82639),T=t(68640),y=t(5838);const P=({getToken:e,apiBasePath:a,kafkaName:t,kafkaPageLink:i,kafkaInstanceLink:s,onError:r,kafka:o})=>{const{replication_factor:c,min_in_sync_replicas:l}=(null==o?void 0:o.size)||{};return(0,n.jsx)(g.E.Provider,Object.assign({value:{basePath:a,getToken:e}},{children:(0,n.jsx)(j.J.Provider,Object.assign({value:{activeTab:1,kafkaName:t,kafkaPageLink:i,kafkaInstanceLink:s,onError:r,kafka:{},replicationFactor:c,minInSyncReplicas:l}},{children:(0,n.jsxs)(y.ModalProvider,{children:[(0,n.jsx)(x.bN,{children:(0,n.jsx)(h,{})}),(0,n.jsx)(T.J,{})]})}))}))}}}]);
//# sourceMappingURL=7517.55a646b0.js.map
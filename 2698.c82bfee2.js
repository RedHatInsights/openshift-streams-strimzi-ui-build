"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[2698],{26274:(e,t,a)=>{a.r(t);var i=a(85893),n=a(3644),s=a.n(n),o=a(87967),c=a(93264),r=a.n(c),l=a(73685),u=a(3654),d=a(3669);const j=({alerts:e,onCloseAlert:t})=>(0,i.jsx)(d.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:a,variant:n,title:s,description:c,dataTestId:r}=e,l=(0,o.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,i.jsx)(d.Alert,Object.assign({isLiveRegion:!0,variant:d.AlertVariant[n],variantLabel:"",title:s,actionClose:(0,i.jsx)(d.AlertActionCloseButton,{title:s,onClose:()=>t(a)}),"data-testid":r},l,{children:c}),a)}))}));var p=a(97644);const g=({children:e})=>{const[t,a]=(0,c.useState)([]),[n,s]=(0,c.useState)([]);(0,c.useEffect)((()=>{const e=n.map((e=>e.key)),a=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,a=setTimeout((()=>o(t)),8e3);return{key:e.id,timeOut:a}}));return s([...n,...a]),()=>n.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,n]);const o=e=>{a((t=>[...t.filter((t=>t.id!==e))])),s((t=>[...t.filter((t=>t.key===e))]))};return(0,i.jsxs)(p.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const i=(new Date).getTime().toString();a([...t,Object.assign(Object.assign({},e),{id:i})])}}},{children:[(0,i.jsx)(j,{alerts:t,onCloseAlert:o}),e]}))};var A=a(82639),x=a(55268),m=a(15847),v=a(15138);const I=({children:e})=>{const{t}=(0,m.useTranslation)(["kafkaTemporaryFixMe"]),[a,n]=(0,c.useState)(!1),s=[(0,i.jsx)(d.DropdownItem,{children:"Logout"},"logout")],o=(0,i.jsx)(d.Brand,{src:"data:image/png;base64,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",alt:t("common.red_hat_logo")}),l=(0,i.jsx)(d.DropdownToggle,Object.assign({id:"user-dropdown-toggle",onToggle:()=>{n(!a)},toggleIndicator:v.CaretDownIcon},{children:"Ned Username"})),u=(0,i.jsx)(d.Dropdown,{onSelect:()=>{n(!a)},toggle:l,isOpen:a,isPlain:!0,dropdownItems:s}),j=(0,i.jsx)(r().Fragment,{children:(0,i.jsx)(d.Avatar,{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",className:"app-masthead-avatar",alt:"avatar"})}),p=(0,i.jsxs)(d.PageHeaderTools,{children:[u,j]});return(0,i.jsx)(d.Page,Object.assign({mainContainerId:"scrollablePageMain",header:(0,i.jsx)((()=>(0,i.jsx)(d.PageHeader,{logo:o,logoComponent:"h1",headerTools:p})),{})},{children:e}))};var b=a(68640),C=a(2766);const h=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(C.$,{activeTabKey:1})}),T=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(C.$,{activeTabKey:5})});var y=a(8903),L=a(29299),M=a(200),N=a(13985),S=a(50334),k=a(60540),f=a(1787),P=a(5736);a(17293);const O=({topicName:e,onSaveTopic:t,onError:a})=>{const{t:n}=(0,m.useTranslation)(["kafkaTemporaryFixMe"]),s=(0,c.useContext)(u.E),{addAlert:r}=(0,p.useAlert)()||{addAlert:()=>{}},j=(0,l.useHistory)(),{getBasename:g}=(0,p.useBasename)()||{getBasename:()=>""},A=g(),x={name:e,numPartitions:"","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"",isRetentionTimeUnlimited:!1,isRetentionSizeUnlimited:!0},[v,I]=(0,c.useState)(x),[b,C]=(0,c.useState)(!1),h=(0,c.useCallback)((()=>{j.push(`${A}/topics/${e}`)}),[A,j,e]),T=(0,c.useCallback)((e=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var t,i,n;try{yield(0,k.BN)(e,s).then((e=>{var t,a;const i=(0,f.qS)(e);I(Object.assign(Object.assign(Object.assign({},v),i),{numPartitions:(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"",replicationFactor:(null==e?void 0:e.partitions)&&(null===(a=null==e?void 0:e.partitions[0].replicas)||void 0===a?void 0:a.length.toString())||""}))}))}catch(s){if((0,P.I)(s)){let o,c;s&&(0,P.I)(s)&&(c=null===(t=s.response)||void 0===t?void 0:t.data.code,o=null===(i=s.response)||void 0===i?void 0:i.data.error_message),a&&a(c||-1,o||""),404===(null===(n=s.response)||void 0===n?void 0:n.status)&&(r({variant:d.AlertVariant.danger,title:`Topic ${e} does not exist`}),h&&h())}}}))),[r,s,h,a,v]),y=(0,c.useRef)();(0,c.useEffect)((()=>{y.current!==e&&(y.current=e,T(e))}),[T,e]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.W,{isCreate:!1,saveTopic:()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var e,i;const{name:o,settings:c}=(0,f.az)(v,["cleanup.policy"]);C(!0);try{yield(0,k.eR)(o,c,s).then((()=>{r({title:n("topic.topic_successfully_updated"),variant:d.AlertVariant.success}),C(!1),t()}))}catch(t){let n,s;t&&(0,P.I)(t)&&(s=null===(e=t.response)||void 0===e?void 0:e.data.code,n=null===(i=t.response)||void 0===i?void 0:i.data.error_message),a&&a(s||-1,n||""),C(!1),r({title:n||"",variant:d.AlertVariant.danger})}})),handleCancel:h,topicData:v,setTopicData:I,isLoadingSave:b}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})};var w=a(64517);a(27958);const D=()=>{const{t:e}=(0,m.useTranslation)(["kafkaTemporaryFixMe"]),t=(0,l.useHistory)(),{getBasename:a}=(0,p.useBasename)()||{getBasename:()=>""},n=a(),{topicName:s}=(0,l.useParams)(),{kafkaName:o,kafkaPageLink:u,kafkaInstanceLink:j,onError:g,activeTab:A=1}=(0,w.S)()||{},[x,v]=(0,c.useState)(A),I=r().createRef(),b=r().createRef();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.I,{topicName:s,kafkaName:o,kafkaPageLink:u,kafkaInstanceLink:j}),(0,i.jsx)(d.PageSection,Object.assign({variant:d.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},{children:(0,i.jsxs)(d.Tabs,Object.assign({onSelect:(e,t)=>{v(t)},activeKey:x,isBox:!1,className:"pf-m-page-insets"},{children:[(0,i.jsx)(d.Tab,{eventKey:0,title:(0,i.jsx)(d.TabTitleText,{children:e("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:I}),(0,i.jsx)(d.Tab,{eventKey:1,title:(0,i.jsx)(d.TabTitleText,{children:e("common.properties")}),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:b})]}))})),(0,i.jsxs)(d.PageSection,Object.assign({variant:1===x?d.PageSectionVariants.light:d.PageSectionVariants.default},{children:[(0,i.jsx)(d.TabContent,Object.assign({eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:I,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==A},{children:(0,i.jsx)(M.J,{topic:s,consumerGroupByTopic:!0})})),(0,i.jsx)(d.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentProperties",ref:b,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==A},{children:(0,i.jsx)(O,{topicName:s,onDeleteTopic:()=>{t.push(n)},onSaveTopic:()=>{t.push(`${n}/topics/${s}`)},onError:g})}))]}))]})};var Z=a(55140),z=a(2954),G=a(63052);const R=()=>{const{analytics:e}=(0,Z.Z)(),{kafka:t,onError:a}=(0,w.S)()||{},n=(0,z.useTopicLabels)(),{showModal:s}=(0,p.useModal)(),r=(0,c.useContext)(u.E),j=(0,l.useHistory)(),{getBasename:g}=(0,p.useBasename)()||{getBasename:()=>""},A=g(),[x,m]=(0,c.useState)(null),[v,I]=(0,c.useState)(),{page:b,perPage:C,setPagination:h,setPaginationQuery:T}=(0,z.usePaginationSearchParams)(),y=(0,c.useCallback)((()=>T(1,C)),[C,T]),L=(0,z.useURLSearchParamsChips)("topics",y),[M,N,S]=(0,z.useSortableSearchParams)(k.CW,n.fields),f=e=>{j.push(`${A}/topic/update/${e}`)},O=(0,c.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var e,t;try{yield(0,k.BB)(r,b,C,N,S,L.chips[0]).then((({topics:e,count:t})=>{m(e),I(t)}))}catch(i){let n,s;i&&(0,P.I)(i)&&(s=null===(e=i.response)||void 0===e?void 0:e.data.code,n=null===(t=i.response)||void 0===t?void 0:t.data.error_message),a&&401===s&&a(s,n)}}))),[r,a,b,C,N,S,L.chips]);(0,c.useEffect)((()=>{O()}),[L.chips,N,S,b,C,O]),(0,G.K)((()=>O()),1e3);const D=(0,c.useCallback)((()=>{m(void 0),L.clear()}),[L]);return(0,i.jsx)(d.Card,Object.assign({className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},{children:(0,i.jsx)(z.KafkaTopics,{topics:x,getUrlFortopic:e=>`${A}/topics/${e.name}`,onDelete:a=>{return i=a.name,e.track("RHOSAK Delete Topic",{entityId:null==t?void 0:t.id,topic:i,status:"prompt"}),void s(p.ModalType.KafkaDeleteTopic,{topicName:i,onDeleteTopic:()=>{e.track("RHOSAK Delete Topic",{entityId:null==t?void 0:t.id,topic:i,status:"success"})}});var i},onEdit:e=>{return t=e.name,void(f&&f(t));var t},onSearchTopic:e=>{L.clear(),L.toggle(e)},onClearAllFilters:D,topicName:L.chips,onRemoveTopicChip:L.clear,onRemoveTopicChips:L.clear,onTopicLinkClick:e=>{e.name},page:b,perPage:C,itemCount:v,onPageChange:h,onCreateTopic:()=>{j.push(`${A}/topic/create`)},isColumnSortable:M})}))},B=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.$,{activeTabKey:2}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(R,{})}))]}),K=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.$,{activeTabKey:3}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(M.J,{consumerGroupByTopic:!1})}))]});var V=a(9837);const J=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.$,{activeTabKey:4}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(V.C,{kafkaName:"test"})}))]}),Y=()=>(0,i.jsx)(l.HashRouter,{children:(0,i.jsxs)(l.Switch,{children:[(0,i.jsx)(l.Route,{path:"/",component:h,exact:!0}),(0,i.jsx)(l.Route,{path:"/dashboard",component:h,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics",component:B,exact:!0}),(0,i.jsx)(l.Route,{path:"/consumer-groups",component:K,exact:!0}),(0,i.jsx)(l.Route,{path:"/acls",component:J,exact:!0}),(0,i.jsx)(l.Route,{path:"/settings",component:T,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics/:topicName",component:y.o,exact:!0}),(0,i.jsx)(l.Route,{path:"/topic/create",component:L.e}),(0,i.jsx)(l.Route,{path:"/topic/update/:topicName",component:D,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics/consumerGroups/:topicName",component:y.o,exact:!0})]})});s().render((0,i.jsx)((()=>(0,i.jsx)(z.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>a.e(3389).then(a.t.bind(a,3389,19)),"create-kafka-instance":()=>a.e(2192).then(a.t.bind(a,12192,19)),kafka:()=>a.e(4309).then(a.t.bind(a,14549,19)),metrics:()=>a.e(4564).then(a.t.bind(a,84564,19)),kafkaTemporaryFixMe:()=>a.e(6648).then(a.t.bind(a,36648,19))}},debug:!0},{children:(0,i.jsx)(p.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,i.jsx)(u.E.Provider,Object.assign({value:{basePath:"http://localhost:8000/data/kafka",getToken:()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){return""}))}},{children:(0,i.jsx)(l.BrowserRouter,{children:(0,i.jsx)(g,{children:(0,i.jsx)(z.ModalProvider,{children:(0,i.jsx)(A.bN,{children:(0,i.jsx)(c.Suspense,Object.assign({fallback:(0,i.jsx)(x.g,{})},{children:(0,i.jsxs)(I,{children:[(0,i.jsx)(Y,{}),(0,i.jsx)(b.J,{})]})}))})})})})}))}))}))),{}),document.getElementById("root"))},64517:(e,t,a)=>{a.d(t,{S:()=>s});var i=a(93264);const n=a.n(i)().createContext(void 0),s=()=>(0,i.useContext)(n)}}]);
//# sourceMappingURL=2698.c82bfee2.js.map
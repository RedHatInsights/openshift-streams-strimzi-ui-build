"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4823,7294],{31200:(e,t,i)=>{i.r(t);var a=i(85893),o=i(66235),n=i.n(o),s=i(223),r=i(75418),c=i.n(r),l=i(68199),d=i(3654),u=i(99421);const p=({alerts:e,onCloseAlert:t})=>(0,a.jsx)(u.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:i,variant:o,title:n,description:r,dataTestId:c}=e,l=(0,s.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,a.jsx)(u.Alert,Object.assign({isLiveRegion:!0,variant:u.AlertVariant[o],variantLabel:"",title:n,actionClose:(0,a.jsx)(u.AlertActionCloseButton,{title:n,onClose:()=>t(i)}),"data-testid":c},l,{children:r}),i)}))}));var g=i(7451);const m=({children:e})=>{const[t,i]=(0,r.useState)([]),[o,n]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=o.map((e=>e.key)),i=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,i=setTimeout((()=>s(t)),8e3);return{key:e.id,timeOut:i}}));return n([...o,...i]),()=>o.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,o]);const s=e=>{i((t=>[...t.filter((t=>t.id!==e))])),n((t=>[...t.filter((t=>t.key===e))]))};return(0,a.jsxs)(g.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const a=(new Date).getTime().toString();i([...t,Object.assign(Object.assign({},e),{id:a})])}}},{children:[(0,a.jsx)(p,{alerts:t,onCloseAlert:s}),e]}))};var j=i(82639);const x=()=>(0,a.jsx)(u.Bullseye,{children:(0,a.jsx)(u.Spinner,{})});var v=i(4716),b=i(48418);const A=({children:e})=>{const{t}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),[i,o]=(0,r.useState)(!1),n=[(0,a.jsx)(u.DropdownItem,{children:"Logout"},"logout")],s=(0,a.jsx)(u.Brand,{src:"data:image/png;base64,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",alt:t("common.red_hat_logo")}),l=(0,a.jsx)(u.DropdownToggle,Object.assign({id:"user-dropdown-toggle",onToggle:()=>{o(!i)},toggleIndicator:b.CaretDownIcon},{children:"Ned Username"})),d=(0,a.jsx)(u.Dropdown,{onSelect:()=>{o(!i)},toggle:l,isOpen:i,isPlain:!0,dropdownItems:n}),p=(0,a.jsx)(c().Fragment,{children:(0,a.jsx)(u.Avatar,{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",className:"app-masthead-avatar",alt:"avatar"})}),g=(0,a.jsxs)(u.PageHeaderTools,{children:[d,p]});return(0,a.jsx)(u.Page,Object.assign({mainContainerId:"scrollablePageMain",header:(0,a.jsx)((()=>(0,a.jsx)(u.PageHeader,{logo:s,logoComponent:"h1",headerTools:g})),{})},{children:e}))};var I=i(68640),h=i(2766);const T=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(h.$,{activeTabKey:1})});var y=i(8903),C=i(29299),L=i(63850),M=i(13985),N=i(50334),f=i(60540),k=i(1787),S=i(5736);i(17293);const P=({topicName:e,onSaveTopic:t,onError:i})=>{const{t:o}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),n=(0,r.useContext)(d.E),{addAlert:c}=(0,g.useAlert)()||{addAlert:()=>{}},p=(0,l.useHistory)(),{getBasename:m}=(0,g.useBasename)()||{getBasename:()=>""},j=m(),x={name:e,numPartitions:"","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"",isRetentionTimeUnlimited:!1,isRetentionSizeUnlimited:!0},[b,A]=(0,r.useState)(x),[I,h]=(0,r.useState)(!1),T=(0,r.useCallback)((()=>{p.push(`${j}/topics/${e}`)}),[j,p,e]),y=(0,r.useCallback)((e=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var t,a,o;try{yield(0,f.BN)(e,n).then((e=>{var t,i;const a=(0,k.qS)(e);A(Object.assign(Object.assign(Object.assign({},b),a),{numPartitions:(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"",replicationFactor:(null==e?void 0:e.partitions)&&(null===(i=null==e?void 0:e.partitions[0].replicas)||void 0===i?void 0:i.length.toString())||""}))}))}catch(n){if((0,S.I)(n)){let s,r;n&&(0,S.I)(n)&&(r=null===(t=n.response)||void 0===t?void 0:t.data.code,s=null===(a=n.response)||void 0===a?void 0:a.data.error_message),i&&i(r||-1,s||""),404===(null===(o=n.response)||void 0===o?void 0:o.status)&&(c({variant:u.AlertVariant.danger,title:`Topic ${e} does not exist`}),T&&T())}}}))),[c,n,T,i,b]);(0,r.useEffect)((()=>{y(e)}),[y,e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.W,{isCreate:!1,saveTopic:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var e,a;const{name:s,settings:r}=(0,k.az)(b,["cleanup.policy"]);h(!0);try{yield(0,f.eR)(s,r,n).then((()=>{c({title:o("topic.topic_successfully_updated"),variant:u.AlertVariant.success}),h(!1),t()}))}catch(t){let o,n;t&&(0,S.I)(t)&&(n=null===(e=t.response)||void 0===e?void 0:e.data.code,o=null===(a=t.response)||void 0===a?void 0:a.data.error_message),i&&i(n||-1,o||""),h(!1),c({title:o||"",variant:u.AlertVariant.danger})}})),handleCancel:T,topicData:b,setTopicData:A,isLoadingSave:I}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})};var O=i(64517);i(27958);const w=()=>{const{t:e}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),t=(0,l.useHistory)(),{getBasename:i}=(0,g.useBasename)()||{getBasename:()=>""},o=i(),{topicName:n}=(0,l.useParams)(),{kafkaName:s,kafkaPageLink:d,kafkaInstanceLink:p,onError:m,activeTab:j=1}=(0,O.S)()||{},[x,b]=(0,r.useState)(j),A=c().createRef(),I=c().createRef();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M.I,{topicName:n,kafkaName:s,kafkaPageLink:d,kafkaInstanceLink:p}),(0,a.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},{children:(0,a.jsxs)(u.Tabs,Object.assign({onSelect:(e,t)=>{b(t)},activeKey:x,isBox:!1,className:"pf-m-page-insets"},{children:[(0,a.jsx)(u.Tab,{eventKey:0,title:(0,a.jsx)(u.TabTitleText,{children:e("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:A}),(0,a.jsx)(u.Tab,{eventKey:1,title:(0,a.jsx)(u.TabTitleText,{children:e("common.properties")}),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:I})]}))})),(0,a.jsxs)(u.PageSection,Object.assign({variant:1===x?u.PageSectionVariants.light:u.PageSectionVariants.default},{children:[(0,a.jsx)(u.TabContent,Object.assign({eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:A,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==j},{children:(0,a.jsx)(L.J,{topic:n,consumerGroupByTopic:!0})})),(0,a.jsx)(u.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentProperties",ref:I,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==j},{children:(0,a.jsx)(P,{topicName:n,onDeleteTopic:()=>{t.push(o)},onSaveTopic:()=>{t.push(`${o}/topics/${n}`)},onError:m})}))]}))]})};var D=i(63052),Z=i(57294),z=i(90732),B=i(91070),G=i(97416);const V=({total:e=0,page:t,perPage:i,setFilteredValue:o,filteredValue:n="",onCreateTopic:s})=>{const{t:c}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),[l,d]=(0,r.useState)(""),p=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.ToolbarFilter,Object.assign({chips:n?[n]:[],deleteChip:()=>{o("")},categoryName:""},{children:(0,a.jsxs)(u.InputGroup,{children:[(0,a.jsx)(u.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":c("topic.topic_search_input"),placeholder:c("common.search"),value:l,onChange:e=>{d(e)}}),(0,a.jsx)(u.Button,Object.assign({variant:u.ButtonVariant.control,isDisabled:!l.length,onClick:()=>{o(l),d("")},"aria-label":c("topic.topic_search")},{children:(0,a.jsx)(b.SearchIcon,{})}))]})}))}),g=[{item:(0,a.jsx)(u.Button,Object.assign({id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:s},{children:c("topic.create_topic")}))}];return e>0&&g.push({item:(0,a.jsx)(j.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:e,page:t,perPage:i,titles:{paginationTitle:c("common.minimal_pagination"),perPageSuffix:c("common.per_page_suffix"),toFirstPage:c("common.to_first_page"),toPreviousPage:c("common.to_previous_page"),toLastPage:c("common.to_last_page"),toNextPage:c("common.to_next_page"),optionsToggle:c("common.options_toggle"),currPage:c("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,a.jsx)(G.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:()=>{o("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:p,toolbarItems:g})},R=({total:e,page:t,perPage:i,setFilteredValue:o,filteredValue:n,onCreateTopic:s,topicItems:r,rowDataTestId:c,onEdit:d,onDeleteTopic:p,refreshTopics:m,onSort:x,sortBy:b})=>{const{t:A}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:I}=(0,g.useModal)(),{getBasename:h}=(0,g.useBasename)()||{getBasename:()=>""},T=h(),y=[{title:A("common.name")},{title:A("common.partitions"),transforms:[Z.sortable]},{title:A("topic.retention_time"),transforms:[Z.sortable]},{title:A("topic.retention_size"),transforms:[Z.sortable]}],C=(e,t)=>{const{name:i=""}=e;var a;"delete"===t?(a=i,I(g.ModalType.KafkaDeleteTopic,{topicName:a,onDeleteTopic:p,refreshTopics:m})):"edit"===t&&d&&d(i)},L=(()=>{const e=[];return null==r||r.map((t=>{var i,o;const{name:n,partitions:s,config:r}=t,c=null===(i=null==r?void 0:r.filter((e=>"retention.ms"===e.key))[0])||void 0===i?void 0:i.value,d=null===(o=null==r?void 0:r.filter((e=>"retention.bytes"===e.key))[0])||void 0===o?void 0:o.value;e.push({cells:[{title:(0,a.jsx)(l.Link,Object.assign({"data-testid":"tableTopics-linkTopic",to:`${T}/topics/${n}`},{children:n}))},null==s?void 0:s.length,(0,k.eA)(c?parseInt(c,10):0),(0,k.Cv)(d?parseInt(d,10):0)],originalData:t})})),e})();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(V,{total:e,page:t,perPage:i,onCreateTopic:s,setFilteredValue:o,filteredValue:n}),(0,a.jsx)(z.w,{tableProps:{cells:y,rows:L,"aria-label":A("topic.topic_list_table"),actionResolver:e=>{const t=e.originalData;return[{title:A("common.delete"),"data-testid":"tableTopics-actionDelete",onClick:()=>C(t,"delete")},{title:A("common.edit"),"data-testid":"tableTopics-actionEdit",onClick:()=>C(t,"edit")}]},shouldDefaultCustomRowWrapper:!0,variant:Z.TableVariant.compact,onSort:x,sortBy:b},rowDataTestId:c||"tableTopics-row"}),(null==r?void 0:r.length)<1&&n.length>0&&(0,a.jsx)(B.u,{emptyStateProps:{variant:B.j.NoResult},titleProps:{title:A("common.no_results_title")},emptyStateBodyProps:{body:A("common.no_results_body")}}),e>0&&(0,a.jsx)(j.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:e,variant:u.PaginationVariant.bottom,page:t,perPage:i,titles:{paginationTitle:A("common.full_pagination"),perPageSuffix:A("common.per_page_suffix"),toFirstPage:A("common.to_first_page"),toPreviousPage:A("common.to_previous_page"),toLastPage:A("common.to_last_page"),toNextPage:A("common.to_next_page"),optionsToggle:A("common.options_toggle"),currPage:A("common.curr_page")}})]})};var F=i(4055);const K={0:f.c4.name,1:f.c4.partitions,2:f.c4.retentionMs,3:f.c4.retentionSize},J=()=>{const{onError:e}=(0,O.S)()||{},{t}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),i=(0,r.useContext)(d.E),{page:o=1,perPage:n=10}=(0,j.hI)()||{},c=(0,l.useHistory)(),{getBasename:p}=(0,g.useBasename)()||{getBasename:()=>""},m=p(),[x,b]=(0,r.useState)(),[A,I]=(0,r.useState)(""),[h,T]=(0,r.useState)(),[y,C]=(0,r.useState)(),[L,M]=(0,r.useState)({index:0,direction:"asc"}),N=()=>{c.push(`${m}/topic/create`)},k=e=>{c.push(`${m}/topic/update/${e}`)},P=e=>{k&&k(e)},w=(e,t,i)=>{C(K[t]),T(i),M({index:t,direction:i})},Z=(0,r.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var t,a;try{yield(0,f.BB)(i,o,n,A,h,y).then((e=>{b(e)}))}catch(i){let o,n;i&&(0,S.I)(i)&&(n=null===(t=i.response)||void 0===t?void 0:t.data.code,o=null===(a=i.response)||void 0===a?void 0:a.data.error_message),e&&401===n&&e(n,o)}}))),[i,e,h,y,o,n,A]);(0,r.useEffect)((()=>{Z()}),[A,h,y,o,n,Z]),(0,D.K)((()=>Z()),5e3);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.Card,Object.assign({className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},{children:void 0===(null==x?void 0:x.items)?(0,a.jsx)(u.PageSection,Object.assign({className:"kafka-ui-m-full-height",variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,a.jsx)(F.y,{})})):(null===(z=null==x?void 0:x.items)||void 0===z?void 0:z.length)<1&&A.length<1?(0,a.jsx)(B.u,{emptyStateProps:{variant:B.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:N,"data-testid":"actionCreateTopic"}}):(null==x?void 0:x.items)?(0,a.jsx)(R,{total:(null==x?void 0:x.total)||0,page:o,perPage:n,onCreateTopic:N,topicItems:null==x?void 0:x.items,filteredValue:A,setFilteredValue:I,refreshTopics:Z,onEdit:P,onSort:w,sortBy:L}):(0,a.jsx)(a.Fragment,{})}))});var z},Y=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.$,{activeTabKey:2}),(0,a.jsx)(u.PageSection,Object.assign({isFilled:!0},{children:(0,a.jsx)(J,{})}))]}),W=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.$,{activeTabKey:3}),(0,a.jsx)(u.PageSection,Object.assign({isFilled:!0},{children:(0,a.jsx)(L.J,{consumerGroupByTopic:!1})}))]});var X=i(9837);const Q=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.$,{activeTabKey:4}),(0,a.jsx)(u.PageSection,Object.assign({isFilled:!0},{children:(0,a.jsx)(X.C,{kafkaName:"test"})}))]}),U=()=>(0,a.jsx)(l.HashRouter,{children:(0,a.jsxs)(l.Switch,{children:[(0,a.jsx)(l.Route,{path:"/",component:T,exact:!0}),(0,a.jsx)(l.Route,{path:"/dashboard",component:T,exact:!0}),(0,a.jsx)(l.Route,{path:"/topics",component:Y,exact:!0}),(0,a.jsx)(l.Route,{path:"/consumer-groups",component:W,exact:!0}),(0,a.jsx)(l.Route,{path:"/acls",component:Q,exact:!0}),(0,a.jsx)(l.Route,{path:"/topics/:topicName",component:y.o,exact:!0}),(0,a.jsx)(l.Route,{path:"/topic/create",component:C.e}),(0,a.jsx)(l.Route,{path:"/topic/update/:topicName",component:w,exact:!0}),(0,a.jsx)(l.Route,{path:"/topics/consumerGroups/:topicName",component:y.o,exact:!0})]})});var E=i(4077);n().render((0,a.jsx)((()=>(0,a.jsx)(E.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>i.e(3389).then(i.t.bind(i,3389,19)),"create-kafka-instance":()=>i.e(2192).then(i.t.bind(i,12192,19)),kafka:()=>i.e(4309).then(i.t.bind(i,94309,19)),metrics:()=>i.e(4564).then(i.t.bind(i,84564,19)),kafkaTemporaryFixMe:()=>i.e(6648).then(i.t.bind(i,36648,19))}},debug:!0},{children:(0,a.jsx)(g.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,a.jsx)(d.E.Provider,Object.assign({value:{basePath:"http://localhost:8000/data/kafka",getToken:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){return""}))}},{children:(0,a.jsx)(l.BrowserRouter,{children:(0,a.jsx)(m,{children:(0,a.jsx)(E.ModalProvider,{children:(0,a.jsx)(j.bN,{children:(0,a.jsx)(r.Suspense,Object.assign({fallback:(0,a.jsx)(x,{})},{children:(0,a.jsxs)(A,{children:[(0,a.jsx)(U,{}),(0,a.jsx)(I.J,{})]})}))})})})})}))}))}))),{}),document.getElementById("root"))},64517:(e,t,i)=>{i.d(t,{S:()=>n});var a=i(75418);const o=i.n(a)().createContext(void 0),n=()=>(0,a.useContext)(o)}}]);
//# sourceMappingURL=4823.1ac8f756.js.map
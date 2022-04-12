"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1639],{38296:(e,t,r)=>{function s(...e){const t=[],r={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const r=s(...e);r&&t.push(r)}else if("object"===a)for(const s in e)r.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}r.r(t),r.d(t,{css:()=>s})},90732:(e,t,r)=>{r.d(t,{w:()=>p});var s=r(223),a=r(85893),o=r(57294),n=r(38296),i=r(75418);const l=(0,i.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,u=e=>{const{activeRow:t,onRowClick:r,rowDataTestId:o}=(0,i.useContext)(l),c=e||{},{trRef:u,className:p,rowProps:d,row:m}=c,b=(0,s.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:f}=d||{},{isExpanded:h,originalData:x}=m||{};return(0,a.jsx)("tr",Object.assign({"data-testid":o,tabIndex:0,ref:"function"==typeof u?void 0:u,className:(0,n.css)(p,"pf-c-table-row__item",t&&t===(null==x?void 0:x.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==h&&!h,onClick:e=>r&&r(e,f,m)},b))},p=({tableProps:e,tableHeaderProps:t,tableBodyProps:r,children:i,activeRow:l,onRowClick:p,rowDataTestId:d,loggedInUser:m})=>{const{cells:b,rows:f,actionResolver:h,onSort:x,sortBy:g,"aria-label":w,variant:j,className:_,shouldDefaultCustomRowWrapper:v=!1}=e,G=(0,s.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return v&&(G.rowWrapper=u),(0,a.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:p,rowDataTestId:d,loggedInUser:m}},{children:(0,a.jsxs)(o.Table,Object.assign({className:(0,n.css)(v&&"mas--table-view__table",_),cells:b,variant:j,rows:f,"aria-label":w,actionResolver:h,onSort:x,sortBy:g},G,{children:[(0,a.jsx)(o.TableHeader,Object.assign({},t)),(0,a.jsx)(o.TableBody,Object.assign({},r)),i]}))}))}},31639:(e,t,r)=>{r.r(t),r.d(t,{ConsumerGroupDetail:()=>p,default:()=>d});var s=r(85893),a=r(58496),o=r(99421),n=r(57294),i=r(90732),l=r(48418);const c=({title:e,description:t})=>(0,s.jsx)(o.Popover,Object.assign({"aria-label":"Consumer groups popover",headerContent:(0,s.jsx)("div",{children:e}),bodyContent:(0,s.jsx)("div",{children:t})},{children:(0,s.jsx)(l.OutlinedQuestionCircleIcon,{})}));var u=r(97369);const p=({consumerGroupDetail:e,consumerGroupByTopic:t})=>{var r,l;const{t:p}=(0,a.useTranslation)(["kafkaTemporaryFixMe"]),d=t?[{title:p("consumerGroup.partition"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.consumer_id"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.current_offset"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.log_end_offset"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.offset_lag"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:"",dataLabel:p("common.action")}]:[{title:p("topic.topic"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.partition"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.consumer_id"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.current_offset"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.log_end_offset"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:p("consumerGroup.offset_lag"),transforms:[n.wrappable,(0,n.cellWidth)(20)]},{title:"",dataLabel:p("common.action")}];return(0,s.jsxs)(o.Stack,Object.assign({hasGutter:!0},{children:[(0,s.jsx)(o.TextContent,{children:(0,s.jsxs)(o.Flex,{children:[(0,s.jsxs)(o.FlexItem,{children:[(0,s.jsxs)(o.Text,Object.assign({component:o.TextVariants.h4,size:50},{children:[p("consumerGroup.active_members")," "]})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.p},{children:(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h2},{children:(null===(r=null==e?void 0:e.metrics)||void 0===r?void 0:r.activeConsumers)||0}))}))]}),(0,s.jsxs)(o.FlexItem,{children:[(0,s.jsxs)(o.Text,Object.assign({component:o.TextVariants.h4},{children:[p("consumerGroup.partitions_with_lag")," ",(0,s.jsx)(c,{title:p("consumerGroup.partitions_with_lag_name"),description:p("consumerGroup.partitions_with_lag_description")})]})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.p},{children:(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h2},{children:(null===(l=null==e?void 0:e.metrics)||void 0===l?void 0:l.laggingPartitions)||0}))}))]}),(0,s.jsxs)(o.FlexItem,{children:[(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h4},{children:p("consumerGroup.state_label")})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.p},{children:(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h2},{children:(0,u.z)(null==e?void 0:e.state)}))}))]})]})}),(0,s.jsx)(i.w,{tableProps:{cells:d,rows:e&&e.consumers.map((e=>t?[e.partition,{title:e.memberId?e.groupId+"\n"+e.memberId:(0,s.jsx)("i",{children:p("consumerGroup.unassigned")})},e.offset,e.logEndOffset,e.lag]:[e.topic,e.partition,{title:e.memberId?e.groupId+"\n"+e.memberId:(0,s.jsx)("i",{children:p("consumerGroup.unassigned")})},e.offset,e.logEndOffset,e.lag]))||[],"aria-label":p("consumerGroup.consumer_group_info_table_aria"),variant:n.TableVariant.compact}})]}))},d=p},97369:(e,t,r)=>{r.d(t,{z:()=>o});var s=r(58496),a=r(98639);const o=e=>{const{t}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);switch(e){case a.ConsumerGroupState.Stable:return t("consumerGroup.state.stable_state");case a.ConsumerGroupState.Empty:return t("consumerGroup.state.empty_state");case a.ConsumerGroupState.Dead:return t("consumerGroup.state.dead_state");case a.ConsumerGroupState.CompletingRebalance:return t("consumerGroup.state.completing_rebalance_state");case a.ConsumerGroupState.PreparingRebalance:return t("consumerGroup.state.preparing_rebalance_state");case a.ConsumerGroupState.Unknown:return t("consumerGroup.state.unknown_state");default:return null}}}}]);

"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[136],{38296:(e,t,r)=>{function o(...e){const t=[],r={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const r=o(...e);r&&t.push(r)}else if("object"===a)for(const o in e)r.call(e,o)&&e[o]&&t.push(o)})),t.join(" ")}r.r(t),r.d(t,{css:()=>o})},28942:(e,t,r)=>{r.d(t,{w:()=>d});var o=r(75418),a=r.n(o),n=r(27577),l=r(38296),s=function(){return(s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r},i=(0,o.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),p=i.Provider,u=function(e){var t=(0,o.useContext)(i),r=t.activeRow,n=t.onRowClick,p=t.rowDataTestId,u=e||{},m=u.trRef,f=u.className,d=u.rowProps,b=u.row,w=c(u,["trRef","className","rowProps","row"]),h=d.rowIndex,y=b.isExpanded,v=b.originalData;return a().createElement("tr",s({"data-testid":p,tabIndex:0,ref:m,className:(0,l.css)(f,"pf-c-table-row__item",r&&r===(null==v?void 0:v.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==y&&!y,onClick:function(e){return n&&n(e,h,b)}},w))},m=function(){return(m=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r},d=function(e){var t=e.tableProps,r=e.tableHeaderProps,o=e.tableBodyProps,s=e.children,c=e.activeRow,i=e.onRowClick,d=e.rowDataTestId,b=e.loggedInUser,w=t.cells,h=t.rows,y=t.actionResolver,v=t.onSort,g=t.sortBy,O=t["aria-label"],x=t.variant,E=t.className,_=t.shouldDefaultCustomRowWrapper,T=void 0!==_&&_,G=f(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return T&&(G.rowWrapper=u),a().createElement(p,{value:{activeRow:c,onRowClick:i,rowDataTestId:d,loggedInUser:b}},a().createElement(n.Table,m({className:(0,l.css)(T&&"mas--table-view__table",E),cells:w,variant:x,rows:h,"aria-label":O,actionResolver:y,onSort:v,sortBy:g},G),a().createElement(n.TableHeader,m({},r)),a().createElement(n.TableBody,m({},o)),s))}},31136:(e,t,r)=>{r.r(t),r.d(t,{ConsumerGroupDetail:()=>i,default:()=>p});var o=r(75418),a=r.n(o),n=r(54532),l=r(84669),s=r(27577),c=r(28942),i=function(e){var t=e.consumerGroupDetail,r=e.consumerGroupByTopic,o=(0,n.useTranslation)().t,i=r?[{title:o("consumerGroup.partition"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.consumer_id"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.current_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.log_end_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.offset_lag"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:"",dataLabel:o("common.action")}]:[{title:o("topic.topic"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.partition"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.consumer_id"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.current_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.log_end_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.offset_lag"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:"",dataLabel:o("common.action")}];return a().createElement(l.Stack,{hasGutter:!0},a().createElement(l.TextContent,null,a().createElement(l.Flex,null,a().createElement(l.FlexItem,null,a().createElement(l.Text,{component:l.TextVariants.h4,size:50},o("consumerGroup.active_members")),a().createElement(l.Text,{component:l.TextVariants.p},a().createElement(l.Text,{component:l.TextVariants.h2},t&&t.consumers.reduce((function(e,t){return e+(-1!=t.partition?1:0)}),0)))),a().createElement(l.FlexItem,null,a().createElement(l.Text,{component:l.TextVariants.h4},o("consumerGroup.partitions_with_lag")),a().createElement(l.Text,{component:l.TextVariants.p},a().createElement(l.Text,{component:l.TextVariants.h2},t&&t.consumers.reduce((function(e,t){return e+(t.lag>0?1:0)}),0)))))),a().createElement(c.w,{tableProps:{cells:i,rows:t&&t.consumers.map((function(e){return r?[e.partition,{title:e.groupId+"\n"+e.memberId},e.offset,e.logEndOffset,e.lag]:[e.topic,e.partition,{title:e.groupId+"\n"+e.memberId},e.offset,e.logEndOffset,e.lag]}))||[],"aria-label":o("consumerGroup.consumer_group_info_table_aria"),variant:s.TableVariant.compact}}))};const p=i}}]);
//# sourceMappingURL=136.740f433c.js.map
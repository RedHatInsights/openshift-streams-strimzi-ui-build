"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5460],{38296:(e,t,o)=>{function r(...e){const t=[],o={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const o=r(...e);o&&t.push(o)}else if("object"===a)for(const r in e)o.call(e,r)&&e[r]&&t.push(r)})),t.join(" ")}o.r(t),o.d(t,{css:()=>r})},90732:(e,t,o)=>{o.d(t,{w:()=>f});var r=o(75418),a=o.n(r),n=o(57294),l=o(38296),i=function(){return i=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},s=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o},c=(0,r.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=c.Provider,p=function(e){var t=(0,r.useContext)(c),o=t.activeRow,n=t.onRowClick,u=t.rowDataTestId,p=e||{},m=p.trRef,g=p.className,f=p.rowProps,d=p.row,v=s(p,["trRef","className","rowProps","row"]),b=(f||{}).rowIndex,y=d||{},w=y.isExpanded,h=y.originalData;return a().createElement("tr",i({"data-testid":u,tabIndex:0,ref:"function"==typeof m?void 0:m,className:(0,l.css)(g,"pf-c-table-row__item",o&&o===(null==h?void 0:h.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==w&&!w,onClick:function(e){return n&&n(e,b,d)}},v))},m=function(){return m=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},g=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o},f=function(e){var t=e.tableProps,o=e.tableHeaderProps,r=e.tableBodyProps,i=e.children,s=e.activeRow,c=e.onRowClick,f=e.rowDataTestId,d=e.loggedInUser,v=t.cells,b=t.rows,y=t.actionResolver,w=t.onSort,h=t.sortBy,_=t["aria-label"],P=t.variant,O=t.className,C=t.shouldDefaultCustomRowWrapper,k=void 0!==C&&C,I=g(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return k&&(I.rowWrapper=p),a().createElement(u,{value:{activeRow:s,onRowClick:c,rowDataTestId:f,loggedInUser:d}},a().createElement(n.Table,m({className:(0,l.css)(k&&"mas--table-view__table",O),cells:v,variant:P,rows:b,"aria-label":_,actionResolver:y,onSort:w,sortBy:h},I),a().createElement(n.TableHeader,m({},o)),a().createElement(n.TableBody,m({},r)),i))}},97416:(e,t,o)=>{o.d(t,{L:()=>s});var r=o(75418),a=o.n(r),n=o(99421),l=function(){return l=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},i=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o},s=function(e){var t=e.toolbarProps,o=e.toggleGroupProps,r=e.toolbarItems,s=e.toggleGroupItems,c=t.id,u=t.clearAllFilters,p=t.collapseListedFiltersBreakpoint,m=void 0===p?"md":p,g=t.inset,f=i(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return a().createElement(a().Fragment,null,a().createElement(n.Toolbar,l({id:c,clearAllFilters:u,inset:g,collapseListedFiltersBreakpoint:m},f),a().createElement(n.ToolbarContent,null,o&&a().createElement(n.ToolbarToggleGroup,l({},o,{toggleIcon:o.toggleIcon}),s),null==r?void 0:r.map((function(e,t){var o=e.key,r=void 0===o?"mas":o,s=e.variant,c=e.className,u=e.id,p=e.alignment,m=e.item,g=i(e,["key","variant","className","id","alignment","item"]);return a().createElement(n.ToolbarItem,l({key:"".concat(r,"-").concat(t),variant:s,className:c,id:u,alignment:p},g),m)})))))}},95460:(e,t,o)=>{o.r(t),o.d(t,{ConsumerGroupsTable:()=>v,default:()=>b});var r=o(75418),a=o.n(r),n=o(16799),l=o(99421),i=o(57294),s=o(90732),c=o(91070),u=o(82639),p=o(97416),m=o(48418),g=function(e){var t=e.search,o=e.setSearch,i=e.total,s=e.page,c=e.perPage,g=(0,n.useTranslation)(["kafkaTemporaryFixMe"]).t,f=(0,r.useState)(""),d=f[0],v=f[1],b=a().createElement(a().Fragment,null,a().createElement(l.ToolbarFilter,{chips:t?[t]:[],deleteChip:function(){o("")},categoryName:""},a().createElement(l.InputGroup,null,a().createElement(l.TextInput,{name:"searchConsumerGroups",id:"search-consumer-groups-input",type:"search","aria-label":g("consumerGroup.consumer_group_search_input"),placeholder:g("common.search"),value:d,onChange:function(e){v(e)}}),a().createElement(l.Button,{variant:l.ButtonVariant.control,isDisabled:!d.length,onClick:function(){o(d),v("")},"aria-label":g("consumerGroup.consumer_group_search")},a().createElement(m.SearchIcon,null))))),y=[];return i&&i>0&&y.push({item:a().createElement(u.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:i,page:s,perPage:c,titles:{paginationTitle:g("common.minimal_pagination"),perPageSuffix:g("common.per_page_suffix"),toFirstPage:g("common.to_first_page"),toPreviousPage:g("common.to_previous_page"),toLastPage:g("common.to_last_page"),toNextPage:g("common.to_next_page"),optionsToggle:g("common.options_toggle"),currPage:g("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),a().createElement(p.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){o("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:b,toolbarItems:y})},f=o(7451),d=function(){return d=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},v=function(e){var t=e.consumerGroups,o=e.total,p=e.page,m=e.perPage,v=e.search,b=e.setSearch,y=e.rowDataTestId,w=e.isDrawerOpen,h=e.onViewConsumerGroup,_=e.refreshConsumerGroups,P=e.consumerGroupByTopic,O=e.onSort,C=e.sortBy,k=(0,n.useTranslation)(["kafkaTemporaryFixMe"]).t,I=(0,f.useModal)().showModal,E=(0,f.useModal)().showModal,T=(0,r.useState)(),G=T[0],j=T[1],x=[{title:k("consumerGroup.consumer_group_id"),transforms:[i.sortable]},{title:k("consumerGroup.active_members")},{title:k("consumerGroup.partitions_with_lag"),transforms:[(0,i.info)({popover:a().createElement("div",null,k("consumerGroup.partitions_with_lag_description")),ariaLabel:"partitions with lag",popoverProps:{headerContent:k("consumerGroup.partitions_with_lag_name")}})]}];(0,r.useEffect)((function(){w||j("")}),[w]);var R,S=function(e){var t=e.groupId,o=e.state;j(t),function(e,t){I(f.ModalType.KafkaDeleteConsumerGroup,{consumerName:e,refreshConsumerGroups:_,state:t})}(t,o)},D=function(e){var t;t=e,E(f.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:_,consumerGroupData:t})};return a().createElement(a().Fragment,null,a().createElement(g,{search:v,setSearch:b,total:o,perPage:m,page:p}),a().createElement(s.w,{tableProps:{cells:x,rows:(R=[],null==t||t.map((function(e){var t=e.groupId,o=e.consumers;R.push({cells:[t,o.reduce((function(e,t){return e+(-1!=t.partition?1:0)}),0),o.reduce((function(e,t){return e+(t.lag>0?1:0)}),0)],originalData:d(d({},e),{rowId:t})})})),R),"aria-label":k("consumerGroup.consumer_group_list"),actionResolver:function(e){var t,o,r;if(P)return[];var a=e.originalData;return[(t={title:k("common.delete")},t["data-testid"]="tableConsumers-actionDelete",t.onClick=function(){return S(a)},t),(o={title:k("consumerGroup.view_partitions_offsets")},o["data-testid"]="tableConsumers-actionOpenDrawer",o.onClick=function(e,t,o){return function(e){var t=e.originalData;h(t),j(null==t?void 0:t.groupId)}(o)},o),(r={title:k("consumerGroup.reset_offset")},r["data-testid"]="tableConsumers-resetOffset",r.onClick=function(){return D(a)},r)]},shouldDefaultCustomRowWrapper:!0,variant:i.TableVariant.compact,onSort:O,sortBy:C},activeRow:G,onRowClick:function(e,t,o){var r,a,n=(o||{}).originalData,l=(null==e?void 0:e.target)&&(null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.type),i=(null==e?void 0:e.target)&&(null===(a=null==e?void 0:e.target)||void 0===a?void 0:a.tagName);"button"!==l&&"a"!==(null==i?void 0:i.toLowerCase())&&(h(n),j(null==n?void 0:n.groupId))},rowDataTestId:y||"tableConsumers-row"}),o<1&&v.length>0&&a().createElement(c.u,{emptyStateProps:{variant:c.j.NoResult},titleProps:{title:k("common.no_results_title")},emptyStateBodyProps:{body:k("common.no_results_body")}}),o>0&&a().createElement(u.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:o,variant:l.PaginationVariant.bottom,page:p,perPage:m,titles:{paginationTitle:k("common.full_pagination"),perPageSuffix:k("common.per_page_suffix"),toFirstPage:k("common.to_first_page"),toPreviousPage:k("common.to_previous_page"),toLastPage:k("common.to_last_page"),toNextPage:k("common.to_next_page"),optionsToggle:k("common.options_toggle"),currPage:k("common.curr_page")}}))};const b=v}}]);
//# sourceMappingURL=5460.aace17d9.js.map
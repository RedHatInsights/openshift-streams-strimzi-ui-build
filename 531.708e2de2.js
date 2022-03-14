"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[531,5183],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(223),o=a.__importStar(n(45052));var r;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:l=0,width:c,height:s,svgPath:u}){var p;return p=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:r,color:i,title:p,noVerticalAlign:m}=e,d=a.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(p),v=t.getSize(r),b=-.125*Number.parseFloat(v),g=m?null:{verticalAlign:`${b}em`},y=[n,l,c,s].join(" ");return o.createElement("svg",Object.assign({style:g,fill:i,height:v,width:v,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},d),f&&o.createElement("title",{id:this.id},p),o.createElement("path",{d:u}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},p}},96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},38296:(e,t,n)=>{function a(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const n=a(...e);n&&t.push(n)}else if("object"===o)for(const a in e)n.call(e,a)&&e[a]&&t.push(a)})),t.join(" ")}n.r(t),n.d(t,{css:()=>a})},27958:()=>{},91070:(e,t,n)=>{n.d(t,{j:()=>a,u:()=>m});var a,o=n(75418),r=n.n(o),i=n(99421),l=n(20777),c=n(96733),s=n(71070),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(a||(a={}));var m=function(e){var t=e.titleProps,n=e.buttonProps,o=e.emptyStateIconProps,m=e.emptyStateProps,d=e.emptyStateBodyProps,f=e.children,v=n||{},b=v.variant,g=void 0===b?i.ButtonVariant.primary:b,y=v.onClick,h=p(v,["variant","onClick"]),k=t||{},P=k.title,T=p(k,["title"]),w=d||{},E=w.body,O=p(w,["body"]),I=m||{},S=I.variant,C=void 0===S?a.NoItems:S,_=p(I,["variant"]),x=function(){var e={};switch(C){case a.NoConsumerGroups:e={variant:i.EmptyStateVariant.large,icon:c.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;case a.NoItems:e={variant:i.EmptyStateVariant.large,icon:l.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;case a.NoResult:e={variant:i.EmptyStateVariant.large,icon:s.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;default:e={variant:C||i.EmptyStateVariant.full,icon:null==o?void 0:o.icon,size:null==t?void 0:t.size,headingLevel:(null==t?void 0:t.headingLevel)||"h1"}}return e}(),N=x.variant,B=x.icon,z=x.size,D=x.headingLevel;return r().createElement(r().Fragment,null,r().createElement(i.EmptyState,u({variant:N},_),r().createElement(i.EmptyStateIcon,u({icon:B},o)),P&&r().createElement(i.Title,u({headingLevel:D,size:z},T),P),E&&r().createElement(i.EmptyStateBody,u({},O),E),(null==n?void 0:n.title)&&r().createElement(i.Button,u({variant:g,onClick:y},h),null==n?void 0:n.title),f))}},68640:(e,t,n)=>{n.d(t,{J:()=>l});var a=n(75418),o=n.n(a),r=n(79528),i=n(7451),l=function(){var e,t;return(0,(0,i.useModal)().registerModals)((t=(0,r.useTranslation)(["kafkaTemporaryFixMe"]).t,(e={})[i.ModalType.KafkaDeleteTopic]={lazyComponent:o().lazy((function(){return n.e(7290).then(n.bind(n,37290))})),variant:"small"},e[i.ModalType.KafkaUpdatePartitions]={lazyComponent:o().lazy((function(){return n.e(1356).then(n.bind(n,21356))})),variant:"small"},e[i.ModalType.KafkaDeleteConsumerGroup]={lazyComponent:o().lazy((function(){return n.e(2546).then(n.bind(n,12546))})),variant:"small"},e[i.ModalType.KafkaConsumerGroupResetOffset]={lazyComponent:o().lazy((function(){return n.e(9537).then(n.bind(n,69537))})),variant:"large"},e[i.ModalType.KafkaManagePermissions]={lazyComponent:o().lazy((function(){return Promise.all([n.e(3883),n.e(6429),n.e(6797),n.e(9525),n.e(5598)]).then(n.bind(n,21118))})),variant:"large",title:t("permission.manage_permissions_dialog.title")},e)),o().createElement(o().Fragment,null)}},4055:(e,t,n)=>{n.d(t,{y:()=>l});var a=n(75418),o=n.n(a),r=n(99421),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(r.Bullseye,i({},t),o().createElement(r.Spinner,i({},n)))}},82639:(e,t,n)=>{n.d(t,{bN:()=>u,hI:()=>s,wu:()=>p});var a=n(75418),o=n.n(a),r=n(99421),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},c=(0,a.createContext)(void 0),s=function(){return(0,a.useContext)(c)},u=function(e){var t=e.children,n=(0,a.useState)(1),r=n[0],i=n[1],l=(0,a.useState)(10),s=l[0],u=l[1];return o().createElement(c.Provider,{value:{page:r,perPage:s,setPage:i,setPerPage:u}},t)},p=function(e){var t=e.itemCount,n=e.variant,c=void 0===n?r.PaginationVariant.top:n,u=e.isCompact,p=e.titles,m=l(e,["itemCount","variant","isCompact","titles"]),d=s()||{},f=d.setPage,v=d.setPerPage,b=d.perPage,g=d.page,y=(0,a.useCallback)((function(e,t){f&&f(t)}),[]),h=(0,a.useCallback)((function(e,t){f&&f(1),v&&v(t)}),[]);return o().createElement(r.Pagination,i({itemCount:t,perPage:b,page:g,onSetPage:y,variant:c,onPerPageSelect:h,isCompact:u},m,{titles:p}))}},90732:(e,t,n)=>{n.d(t,{w:()=>f});var a=n(75418),o=n.n(a),r=n(57294),i=n(38296),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},s=(0,a.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=s.Provider,p=function(e){var t=(0,a.useContext)(s),n=t.activeRow,r=t.onRowClick,u=t.rowDataTestId,p=e||{},m=p.trRef,d=p.className,f=p.rowProps,v=p.row,b=c(p,["trRef","className","rowProps","row"]),g=(f||{}).rowIndex,y=v||{},h=y.isExpanded,k=y.originalData;return o().createElement("tr",l({"data-testid":u,tabIndex:0,ref:"function"==typeof m?void 0:m,className:(0,i.css)(d,"pf-c-table-row__item",n&&n===(null==k?void 0:k.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==h&&!h,onClick:function(e){return r&&r(e,g,v)}},b))},m=function(){return m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m.apply(this,arguments)},d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},f=function(e){var t=e.tableProps,n=e.tableHeaderProps,a=e.tableBodyProps,l=e.children,c=e.activeRow,s=e.onRowClick,f=e.rowDataTestId,v=e.loggedInUser,b=t.cells,g=t.rows,y=t.actionResolver,h=t.onSort,k=t.sortBy,P=t["aria-label"],T=t.variant,w=t.className,E=t.shouldDefaultCustomRowWrapper,O=void 0!==E&&E,I=d(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return O&&(I.rowWrapper=p),o().createElement(u,{value:{activeRow:c,onRowClick:s,rowDataTestId:f,loggedInUser:v}},o().createElement(r.Table,m({className:(0,i.css)(O&&"mas--table-view__table",w),cells:b,variant:T,rows:g,"aria-label":P,actionResolver:y,onSort:h,sortBy:k},I),o().createElement(r.TableHeader,m({},n)),o().createElement(r.TableBody,m({},a)),l))}},97416:(e,t,n)=>{n.d(t,{L:()=>c});var a=n(75418),o=n.n(a),r=n(99421),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},c=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,a=e.toolbarItems,c=e.toggleGroupItems,s=t.id,u=t.clearAllFilters,p=t.collapseListedFiltersBreakpoint,m=void 0===p?"md":p,d=t.inset,f=l(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return o().createElement(o().Fragment,null,o().createElement(r.Toolbar,i({id:s,clearAllFilters:u,inset:d,collapseListedFiltersBreakpoint:m},f),o().createElement(r.ToolbarContent,null,n&&o().createElement(r.ToolbarToggleGroup,i({},n,{toggleIcon:n.toggleIcon}),c),null==a?void 0:a.map((function(e,t){var n=e.key,a=void 0===n?"mas":n,c=e.variant,s=e.className,u=e.id,p=e.alignment,m=e.item,d=l(e,["key","variant","className","id","alignment","item"]);return o().createElement(r.ToolbarItem,i({key:"".concat(a,"-").concat(t),variant:c,className:s,id:u,alignment:p},d),m)})))))}},2766:(e,t,n)=>{n.d(t,{$:()=>s});var a=n(75418),o=n.n(a),r=n(79528),i=n(68199),l=n(99421),c=n(64517),s=function(e){var t=e.activeTabKey,n=(0,r.useTranslation)(["kafkaTemporaryFixMe"]).t,s=(0,i.useHistory)(),u=(0,c.S)()||{},p=u.kafkaPageLink,m=u.kafkaName,d=u.handleInstanceDrawer,f=u.onDeleteInstance,v=(0,a.useState)(),b=v[0],g=v[1],y=function(e){d&&d(!0,e)},h=o().createElement(l.Breadcrumb,null,o().createElement(l.BreadcrumbItem,{to:p||"#"},n("common.kafka_instance")),o().createElement(l.BreadcrumbItem,{to:"#",isActive:!0},m||n("common.kafka_instance_name"))),k=[o().createElement(l.DropdownItem,{key:"view-kafka",onClick:function(){return y("details")}},n("common.view_instance")),o().createElement(l.DropdownItem,{key:"connect-kafka",onClick:function(){return y("connection")}},n("common.view_connection")),o().createElement(l.DropdownItem,{key:"delete-kafka",onClick:f},n("common.delete_instance"))];return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},h),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light},o().createElement(l.Level,null,o().createElement(l.Title,{headingLevel:"h1"},m||n("common.kafka_instance_name")),o().createElement(l.Dropdown,{onSelect:function(){g(!b)},toggle:o().createElement(l.KebabToggle,{onToggle:function(e){g(e)},id:"toggle-data-plane"}),isOpen:b,isPlain:!0,dropdownItems:k,position:l.DropdownPosition.right}))),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(l.Tabs,{activeKey:t,onSelect:function(e,t){var n;switch(t){default:n="dashboard";break;case 2:n="topics";break;case 3:n="consumer-groups";break;case 4:n="acls"}s.push(n)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":n("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":n("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":n("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":n("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"}))))}},3654:(e,t,n)=>{n.d(t,{E:()=>o});var a=n(75418),o=n.n(a)().createContext(void 0)},64517:(e,t,n)=>{n.d(t,{J:()=>o,S:()=>r});var a=n(75418),o=n.n(a)().createContext(void 0),r=function(){return(0,a.useContext)(o)}},63052:(e,t,n)=>{n.d(t,{K:()=>o});var a=n(75418),o=function(e,t){var n=(0,a.useRef)();(0,a.useEffect)((function(){n.current=e}),[e]),(0,a.useEffect)((function(){if(null!==t){var e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}},70531:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(75418),o=n.n(a),r=n(99421),i=n(68199),l=n(79528),c=n(63052),s=n(57294),u=n(7451),p=n(90732),m=n(91070),d=n(82639),f=n(48418),v=n(97416),b=function(e){var t=e.total,n=void 0===t?0:t,i=e.page,c=e.perPage,s=e.setFilteredValue,u=e.filteredValue,p=void 0===u?"":u,m=e.onCreateTopic,b=(0,l.useTranslation)(["kafkaTemporaryFixMe"]).t,g=(0,a.useState)(""),y=g[0],h=g[1],k=o().createElement(o().Fragment,null,o().createElement(r.ToolbarFilter,{chips:p?[p]:[],deleteChip:function(){s("")},categoryName:""},o().createElement(r.InputGroup,null,o().createElement(r.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":b("topic.topic_search_input"),placeholder:b("common.search"),value:y,onChange:function(e){h(e)}}),o().createElement(r.Button,{variant:r.ButtonVariant.control,isDisabled:!y.length,onClick:function(){s(y),h("")},"aria-label":b("topic.topic_search")},o().createElement(f.SearchIcon,null))))),P=[{item:o().createElement(r.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:m},b("topic.create_topic"))}];return n>0&&P.push({item:o().createElement(d.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:n,page:i,perPage:c,titles:{paginationTitle:b("common.minimal_pagination"),perPageSuffix:b("common.per_page_suffix"),toFirstPage:b("common.to_first_page"),toPreviousPage:b("common.to_previous_page"),toLastPage:b("common.to_last_page"),toNextPage:b("common.to_next_page"),optionsToggle:b("common.options_toggle"),currPage:b("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),o().createElement(v.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){s("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:k,toolbarItems:P})},g=n(1787),y=function(e){var t,n=e.total,a=e.page,c=e.perPage,f=e.setFilteredValue,v=e.filteredValue,y=e.onCreateTopic,h=e.topicItems,k=e.rowDataTestId,P=e.onEdit,T=e.onDeleteTopic,w=e.refreshTopics,E=e.onSort,O=e.sortBy,I=(0,l.useTranslation)(["kafkaTemporaryFixMe"]).t,S=(0,u.useModal)().showModal,C=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),_=[{title:I("common.name")},{title:I("common.partitions"),transforms:[s.sortable]},{title:I("topic.retention_time"),transforms:[s.sortable]},{title:I("topic.retention_size"),transforms:[s.sortable]}],x=function(e,t){var n,a=e.name,o=void 0===a?"":a;"delete"===t?(n=o,S(u.ModalType.KafkaDeleteTopic,{topicName:n,onDeleteTopic:T,refreshTopics:w})):"edit"===t&&P&&P(o)},N=(t=[],null==h||h.map((function(e){var n,a,r=e.name,l=e.partitions,c=e.config,s=(null===(n=null==c?void 0:c.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===n?void 0:n.value)||0,u=(null===(a=null==c?void 0:c.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===a?void 0:a.value)||0;t.push({cells:[{title:o().createElement(i.Link,{"data-testid":"tableTopics-linkTopic",to:"".concat(C,"/topics/").concat(r)},r)},null==l?void 0:l.length,(0,g.eA)(s),(0,g.Cv)(u)],originalData:e})})),t);return o().createElement(o().Fragment,null,o().createElement(b,{total:n,page:a,perPage:c,onCreateTopic:y,setFilteredValue:f,filteredValue:v}),o().createElement(p.w,{tableProps:{cells:_,rows:N,"aria-label":I("topic.topic_list_table"),actionResolver:function(e){var t,n,a=e.originalData;return[(t={title:I("common.delete")},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(){return x(a,"delete")},t),(n={title:I("common.edit")},n["data-testid"]="tableTopics-actionEdit",n.onClick=function(){return x(a,"edit")},n)]},shouldDefaultCustomRowWrapper:!0,variant:s.TableVariant.compact,onSort:E,sortBy:O},rowDataTestId:k||"tableTopics-row"}),(null==h?void 0:h.length)<1&&v.length>0&&o().createElement(m.u,{emptyStateProps:{variant:m.j.NoResult},titleProps:{title:I("common.no_results_title")},emptyStateBodyProps:{body:I("common.no_results_body")}}),n>0&&o().createElement(d.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:n,variant:r.PaginationVariant.bottom,page:a,perPage:c,titles:{paginationTitle:I("common.full_pagination"),perPageSuffix:I("common.per_page_suffix"),toFirstPage:I("common.to_first_page"),toPreviousPage:I("common.to_previous_page"),toLastPage:I("common.to_last_page"),toNextPage:I("common.to_next_page"),optionsToggle:I("common.options_toggle"),currPage:I("common.curr_page")}}))},h=n(4055),k=n(60540),P=n(64517),T=n(3654),w=n(5736),E=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},O=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},I=function(){var e=((0,P.S)()||{}).onError,t=(0,l.useTranslation)(["kafkaTemporaryFixMe"]).t,n=(0,a.useContext)(T.E),s=(0,d.hI)()||{},p=s.page,f=void 0===p?1:p,v=s.perPage,b=void 0===v?10:v,g=(0,i.useHistory)(),I=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),S=(0,a.useState)(),C=S[0],_=S[1],x=(0,a.useState)(""),N=x[0],B=x[1],z=(0,a.useState)(),D=z[0],j=z[1],M=(0,a.useState)(),F=M[0],R=M[1],L=(0,a.useState)({index:0,direction:"asc"}),V=L[0],K=L[1];(0,a.useEffect)((function(){W()}),[N,D,F,f,b]),(0,c.K)((function(){return W()}),5e3);var A=function(){g.push("".concat(I,"/topic/create"))},U=function(e){g.push("".concat(I,"/topic/update/").concat(e))},G=function(e){U&&U(e)},Z=function(e,t,n){R({0:"name",1:"partitions",2:"retention.ms",3:"retention.bytes"}[t]),j(n),K({index:t,direction:n})},W=function(){return E(void 0,void 0,void 0,(function(){var t,a,o,r,i;return O(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,(0,k.BB)(n,f,b,N,D,F).then((function(e){_(e)}))];case 1:return l.sent(),[3,3];case 2:return t=l.sent(),a=void 0,o=void 0,t&&(0,w.I)(t)&&(o=null===(r=t.response)||void 0===r?void 0:r.data.code,a=null===(i=t.response)||void 0===i?void 0:i.data.error_message),e&&401===o&&e(o,a),[3,3];case 3:return[2]}}))}))};return o().createElement(o().Fragment,null,o().createElement(r.Card,{className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},function(){var e;return void 0===(null==C?void 0:C.items)?o().createElement(r.PageSection,{className:"kafka-ui-m-full-height",variant:r.PageSectionVariants.light,padding:{default:"noPadding"}},o().createElement(h.y,null)):(null===(e=null==C?void 0:C.items)||void 0===e?void 0:e.length)<1&&N.length<1?o().createElement(m.u,{emptyStateProps:{variant:m.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:A,"data-testid":"actionCreateTopic"}}):(null==C?void 0:C.items)?o().createElement(y,{total:(null==C?void 0:C.total)||0,page:f,perPage:b,onCreateTopic:A,topicItems:null==C?void 0:C.items,filteredValue:N,setFilteredValue:B,refreshTopics:W,onEdit:G,onSort:Z,sortBy:V}):o().createElement(o().Fragment,null)}()))};var S=n(10458),C=n(2766),_=n(68640);n(27958);const x=function(e){var t=e.kafkaName,n=e.kafkaPageLink,a=e.handleInstanceDrawer,i=e.redirectAfterDeleteInstance,l=e.kafka,c=e.onError,s=e.apiBasePath,p=e.getToken,m=(0,u.useModal)().showModal;return o().createElement(T.E.Provider,{value:{basePath:s,getToken:p}},o().createElement(P.J.Provider,{value:{kafkaName:t,kafkaPageLink:n,handleInstanceDrawer:a,kafka:l,redirectAfterDeleteInstance:i,onError:c,onDeleteInstance:function(){m&&m(u.ModalType.KasDeleteInstance,{kafka:l,onDelete:i})}}},o().createElement(S.ModalProvider,null,o().createElement(d.bN,null,o().createElement(C.$,{activeTabKey:2}),o().createElement(r.PageSection,{isFilled:!0},o().createElement(I,null),o().createElement(_.J,null))))))}},1787:(e,t,n)=>{n.d(t,{$X:()=>c,AV:()=>s,Cv:()=>f,FB:()=>l,KP:()=>o,UC:()=>a,az:()=>g,eA:()=>d,qS:()=>b,yN:()=>p});var a,o,r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},i=function(e,t,n){if(n||2===arguments.length)for(var a,o=0,r=t.length;o<r;o++)!a&&o in t||(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},l=function(e){return e.split("-").map((function(e,t){return t>0?(n=e).charAt(0).toUpperCase()+n.slice(1):e;var n})).join("")},c=function(e){return"string"==typeof e?e.replace(/-/g,"."):e};!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="day",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(a||(a={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(o||(o={}));var s={bytes:1,kibibytes:1024,mebibytes:1048576,gibibytes:1073741824,tebibytes:10995116e5},u={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},p=r(r({},u),{day:1,weeks:7}),m=function(e){if(e){if(e%u.days==0)return{value:e/u.days,unit:"days"};if(e%u.hours==0)return{value:e/u.hours,unit:"hours"};if(e%u.minutes==0)return{value:e/u.minutes,unit:"minutes"};if(e%u.seconds==0)return{value:e/u.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},d=function(e){var t=m(e),n=t.unit,a=t.value;return-1===Number(a)?"Unlimited":"".concat(e," ms (").concat(a," ").concat(n,")")},f=function(e){var t=v(e),n=t.unit,a=t.value;return-1===Number(a)?"Unlimited":"".concat(e," bytes (").concat(a," ").concat(n,")")},v=function(e){if(e){if(e%s.tebibytes==0)return{value:e/s.tebibytes,unit:"tebibytes"};if(e%s.gibibytes==0)return{value:e/s.gibibytes,unit:"gibibytes"};if(e%s.mebibytes==0)return{value:e/s.mebibytes,unit:"mebibytes"};if(e%s.kibibytes==0)return{value:e/s.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},b=function(e){var t,n=r({},e),i={};return null===(t=null==n?void 0:n.config)||void 0===t||t.forEach((function(e){var t=e.key,n=void 0===t?"":t,r=e.value;if("retention.ms"===n&&Number(r)>=0){var l=m(Number(r)),c=l.value,s=l.unit;i[n]=c,i["".concat(n,".unit")]=s,i.selectedRetentionTimeOption=a.CUSTOM}else"retention.ms"===n&&-1===Number(r)&&(i.selectedRetentionTimeOption=a.UNLIMITED);if("retention.bytes"===n&&Number(r)>=0){var u=v(Number(r));c=u.value,s=u.unit;i[n]=c,i["".concat(n,".unit")]=s,i.selectedRetentionSizeOption=o.CUSTOM}else"retention.bytes"===n&&-1===Number(r)&&(i.selectedRetentionSizeOption=o.UNLIMITED);"cleanup.policy"===n&&(i[n]=r||"delete")})),i},g=function(e,t){void 0===t&&(t=[]);var n=i(["retention.ms","retention.bytes","flush.messages"],t,!0),l=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],c=r({},e),p=[];for(var m in c){var d=void 0;if(n.includes(m))if(c.selectedRetentionTimeOption===a.UNLIMITED&&"retention.ms"===m||c.selectedRetentionSizeOption===o.UNLIMITED&&"retention.bytes"===m)d="-1";else if("retention.ms"===m||"retention.bytes"===m){var f="retention.ms"===m?u[c["".concat(m,".unit")]||"milliseconds"]:s[c["".concat(m,".unit")]||"bytes"];d=Number(c[m])*f}else d=c[m];("unit"===m.split(".").pop()||l.includes(m))&&delete c[m],d&&m&&p.push({key:m,value:d.toString()})}return{name:c.name,settings:{numPartitions:Number(c.numPartitions),config:p}}}},60540:(e,t,n)=>{n.d(t,{BB:()=>c,BK:()=>d,BN:()=>m,Rh:()=>s,eR:()=>p});var a,o=n(16560),r=n(57294),i=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},l=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(a||(a={}));var c=function(e,t,n,a,c,s){return void 0===c&&(c=r.SortByDirection.asc),i(void 0,void 0,Promise,(function(){var r;return l(this,(function(i){switch(i.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return r=i.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:r,basePath:null==e?void 0:e.basePath})).getTopics(void 0,void 0,n,a,t,c,s)];case 2:return[2,i.sent().data]}}))}))},s=function(e,t){return i(void 0,void 0,Promise,(function(){var n,a;return l(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return a=r.sent().data,[2,u(a)]}}))}))},u=function(e){var t,n,a,o={name:"",numPartitions:"0"};return e&&e.name&&(o.name=e.name),null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(o[e.key]=e.value)})),o.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length.toString())||"0",o.replicationFactor=(null==e?void 0:e.partitions)&&(null===(a=null==e?void 0:e.partitions[0].replicas)||void 0===a?void 0:a.length.toString())||"0",o},p=function(e,t,n){return i(void 0,void 0,Promise,(function(){var a;return l(this,(function(r){switch(r.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return a=r.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,r.sent().status]}}))}))},m=function(e,t){return i(void 0,void 0,Promise,(function(){var n,a,r,i,c,s;return l(this,(function(l){switch(l.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=l.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return a=l.sent(),(r=a.data).config=r.config||[],r.config.push({key:"replicationFactor",value:null===(s=null===(c=null===(i=a.data)||void 0===i?void 0:i.partitions)||void 0===c?void 0:c.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===s?void 0:s.toString()}),[2,a.data]}}))}))},d=function(e,t){return i(void 0,void 0,Promise,(function(){var n;return l(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return a.sent(),[2]}}))}))}},5736:(e,t,n)=>{n.d(t,{I:()=>a});var a=function(e){return void 0!==e}}}]);
//# sourceMappingURL=531.708e2de2.js.map
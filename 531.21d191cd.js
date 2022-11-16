/*! For license information please see 531.21d191cd.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[531,5893],{35183:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const n=a(42695),i=n.__importStar(a(93264));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let s=0;t.createIcon=function({name:e,xOffset:a=0,yOffset:r=0,width:l,height:c,svgPath:d}){var u;return u=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{size:o,color:s,title:u,noVerticalAlign:p}=e,m=n.__rest(e,["size","color","title","noVerticalAlign"]),g=Boolean(u),b=t.getSize(o),v=-.125*Number.parseFloat(b),f=p?null:{verticalAlign:`${v}em`},h=[a,r,l,c].join(" ");return i.createElement("svg",Object.assign({style:f,fill:s,height:b,width:b,viewBox:h,"aria-labelledby":g?this.id:null,"aria-hidden":!g||null,role:"img"},m),g&&i.createElement("title",{id:this.id},u),i.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},u}},96733:(e,t,a)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=a(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,a)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=a(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,a)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=a(35183).createIcon(t.xQ),t.ZP=t.W1},38296:(e,t,a)=>{function n(...e){const t=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)&&e.length){const a=n(...e);a&&t.push(a)}else if("object"===i)for(const n in e)a.call(e,n)&&e[n]&&t.push(n)})),t.join(" ")}a.d(t,{i:()=>n})},27958:()=>{},27418:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var s,r,l=i(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))a.call(s,d)&&(l[d]=s[d]);if(t){r=t(s);for(var u=0;u<r.length;u++)n.call(s,r[u])&&(l[r[u]]=s[r[u]])}}return l}},75251:(e,t,a)=>{a(27418);var n=a(93264),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,o={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},85893:(e,t,a)=>{e.exports=a(75251)},91070:(e,t,a)=>{a.d(t,{j:()=>n,u:()=>d});var n,i=a(42695),o=a(85893),s=a(21242),r=a(20777),l=a(96733),c=a(71070);!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(n||(n={}));const d=({titleProps:e,buttonProps:t,emptyStateIconProps:a,emptyStateProps:d,emptyStateBodyProps:u,children:p})=>{const m=t||{},{variant:g=s.ButtonVariant.primary,onClick:b}=m,v=(0,i.__rest)(m,["variant","onClick"]),f=e||{},{title:h}=f,y=(0,i.__rest)(f,["title"]),T=u||{},{body:k}=T,j=(0,i.__rest)(T,["body"]),P=d||{},{variant:x=n.NoItems}=P,_=(0,i.__rest)(P,["variant"]),{variant:I,icon:C,size:O,headingLevel:w}=(()=>{let t={};switch(x){case n.NoConsumerGroups:t={variant:s.EmptyStateVariant.large,icon:l.ZP,size:s.TitleSizes.lg,headingLevel:"h2"};break;case n.NoItems:t={variant:s.EmptyStateVariant.large,icon:r.ZP,size:s.TitleSizes.lg,headingLevel:"h2"};break;case n.NoResult:t={variant:s.EmptyStateVariant.large,icon:c.ZP,size:s.TitleSizes.lg,headingLevel:"h2"};break;default:t={variant:x||s.EmptyStateVariant.full,icon:null==a?void 0:a.icon,size:null==e?void 0:e.size,headingLevel:(null==e?void 0:e.headingLevel)||"h1"}}return t})();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.EmptyState,Object.assign({variant:I},_,{children:[(0,o.jsx)(s.EmptyStateIcon,Object.assign({icon:C},a)),h&&(0,o.jsx)(s.Title,Object.assign({headingLevel:w,size:O},y,{children:h})),k&&(0,o.jsx)(s.EmptyStateBody,Object.assign({},j,{children:k})),(null==t?void 0:t.title)&&(0,o.jsx)(s.Button,Object.assign({variant:g,onClick:b},v,{children:null==t?void 0:t.title})),p]}))})}},68640:(e,t,a)=>{a.d(t,{J:()=>l});var n=a(85893),i=a(93264),o=a.n(i),s=a(15847),r=a(50834);const l=()=>{const{registerModals:e}=(0,r.useModal)();return e((()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return{[r.ModalType.KafkaDeleteTopic]:{lazyComponent:o().lazy((()=>a.e(7290).then(a.bind(a,37290)))),variant:"small"},[r.ModalType.KafkaUpdatePartitions]:{lazyComponent:o().lazy((()=>a.e(1356).then(a.bind(a,21356)))),variant:"small"},[r.ModalType.KafkaDeleteConsumerGroup]:{lazyComponent:o().lazy((()=>a.e(2546).then(a.bind(a,12546)))),variant:"small"},[r.ModalType.KafkaConsumerGroupResetOffset]:{lazyComponent:o().lazy((()=>a.e(9537).then(a.bind(a,69537)))),variant:"large"},[r.ModalType.KafkaManagePermissions]:{lazyComponent:o().lazy((()=>Promise.all([a.e(2650),a.e(636)]).then(a.bind(a,90636)))),variant:"large",title:e("permission.manage_permissions_dialog.title")}}})()),(0,n.jsx)(n.Fragment,{})}},4055:(e,t,a)=>{a.d(t,{y:()=>o});var n=a(85893),i=a(21242);const o=({bullseyeProps:e,spinnerProps:t})=>(0,n.jsx)(i.Bullseye,Object.assign({},e,{children:(0,n.jsx)(i.Spinner,Object.assign({},t))}))},82639:(e,t,a)=>{a.d(t,{bN:()=>c,hI:()=>l,wu:()=>d});var n=a(42695),i=a(85893),o=a(93264),s=a(21242);const r=(0,o.createContext)(void 0),l=()=>(0,o.useContext)(r),c=({children:e})=>{const[t,a]=(0,o.useState)(1),[n,s]=(0,o.useState)(10);return(0,i.jsx)(r.Provider,Object.assign({value:{page:t,perPage:n,setPage:a,setPerPage:s}},{children:e}))},d=e=>{var{itemCount:t,variant:a=s.PaginationVariant.top,isCompact:r,titles:c}=e,d=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]);const{setPage:u,setPerPage:p,perPage:m,page:g}=l()||{},b=(0,o.useCallback)(((e,t)=>{u&&u(t)}),[u]),v=(0,o.useCallback)(((e,t)=>{u&&u(1),p&&p(t)}),[u,p]);return(0,i.jsx)(s.Pagination,Object.assign({itemCount:t,perPage:m,page:g,onSetPage:b,variant:a,onPerPageSelect:v,isCompact:r},d,{titles:c}))}},90732:(e,t,a)=>{a.d(t,{w:()=>u});var n=a(42695),i=a(85893),o=a(92820),s=a(38296),r=a(93264);const l=(0,r.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,d=e=>{const{activeRow:t,onRowClick:a,rowDataTestId:o}=(0,r.useContext)(l),c=e||{},{trRef:d,className:u,rowProps:p,row:m}=c,g=(0,n.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:b}=p||{},{isExpanded:v,originalData:f}=m||{};return(0,i.jsx)("tr",Object.assign({"data-testid":o,tabIndex:0,ref:"function"==typeof d?void 0:d,className:(0,s.i)(u,"pf-c-table-row__item",t&&t===(null==f?void 0:f.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==v&&!v,onClick:e=>a&&a(e,b,m)},g))},u=({tableProps:e,tableHeaderProps:t,tableBodyProps:a,children:r,activeRow:l,onRowClick:u,rowDataTestId:p,loggedInUser:m,ouiaId:g})=>{const{cells:b,rows:v,actionResolver:f,onSort:h,sortBy:y,"aria-label":T,variant:k,className:j,shouldDefaultCustomRowWrapper:P=!1}=e,x=(0,n.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return P&&(x.rowWrapper=d),(0,i.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:u,rowDataTestId:p,loggedInUser:m}},{children:(0,i.jsxs)(o.Table,Object.assign({className:(0,s.i)(P&&"mas--table-view__table",j),cells:b,variant:k,rows:v,"aria-label":T,actionResolver:f,onSort:h,sortBy:y},x,{ouiaId:g},{children:[(0,i.jsx)(o.TableHeader,Object.assign({},t)),(0,i.jsx)(o.TableBody,Object.assign({},a)),r]}))}))}},97416:(e,t,a)=>{a.d(t,{L:()=>s});var n=a(42695),i=a(85893),o=a(21242);const s=({toolbarProps:e,toggleGroupProps:t,toolbarItems:a,toggleGroupItems:s})=>{const{id:r,clearAllFilters:l,collapseListedFiltersBreakpoint:c="md",inset:d}=e,u=(0,n.__rest)(e,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Toolbar,Object.assign({id:r,clearAllFilters:l,inset:d,collapseListedFiltersBreakpoint:c},u,{children:(0,i.jsxs)(o.ToolbarContent,{children:[t&&(0,i.jsx)(o.ToolbarToggleGroup,Object.assign({},t,{toggleIcon:t.toggleIcon},{children:s})),null==a?void 0:a.map(((e,t)=>{const{key:a="mas",variant:s,className:r,id:l,alignment:c,item:d}=e,u=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return(0,i.jsx)(o.ToolbarItem,Object.assign({variant:s,className:r,id:l,alignment:c},u,{children:d}),`${a}-${t}`)}))]})}))})}},2766:(e,t,a)=>{a.d(t,{$:()=>c});var n=a(85893),i=a(93264),o=a(15847),s=a(73685),r=a(21242),l=a(64517);const c=({activeTabKey:e})=>{const{t}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]),a=(0,s.useHistory)(),{kafkaPageLink:c,kafkaName:d,handleInstanceDrawer:u,onDeleteInstance:p}=(0,l.S)()||{},[m,g]=(0,i.useState)(),b=e=>{u&&u(!0,e)},v=(0,n.jsxs)(r.Breadcrumb,Object.assign({ouiaId:"breadcrumb"},{children:[(0,n.jsx)(r.BreadcrumbItem,{render:()=>(0,n.jsx)(s.Link,Object.assign({to:c||"#"},{children:t("common.kafka_instance")}))}),(0,n.jsx)(r.BreadcrumbItem,Object.assign({to:"#",isActive:!0},{children:d||t("common.kafka_instance_name")}))]})),f=[(0,n.jsx)(r.DropdownItem,Object.assign({onClick:()=>b("details")},{children:t("common.view_instance")}),"view-kafka"),(0,n.jsx)(r.DropdownItem,Object.assign({onClick:()=>b("connection")},{children:t("common.view_connection")}),"connect-kafka"),(0,n.jsx)(r.DropdownItem,Object.assign({onClick:p},{children:t("common.delete_instance")}),"delete-kafka")];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:v})),(0,n.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:(0,n.jsxs)(r.Level,{children:[(0,n.jsx)(r.Title,Object.assign({headingLevel:"h1"},{children:d||t("common.kafka_instance_name")})),(0,n.jsx)(r.Dropdown,{onSelect:()=>{g(!m)},toggle:(0,n.jsx)(r.KebabToggle,{"data-ouia-component-id":"kebab-menu",onToggle:e=>{g(e)},id:"toggle-data-plane"}),isOpen:m,isPlain:!0,dropdownItems:f,position:r.DropdownPosition.right})]})})),(0,n.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,n.jsxs)(r.Tabs,Object.assign({activeKey:e,onSelect:(e,t)=>{let n;switch(t){case 1:default:n="dashboard";break;case 2:n="topics";break;case 3:n="consumer-groups";break;case 4:n="acls";break;case 5:n="settings"}a.push(n)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},{children:[(0,n.jsx)(r.Tab,{title:(0,n.jsx)(r.TabTitleText,{children:t("dashboard.dashboard")}),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":t("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard",ouiaId:"tab-Dashboard"}),(0,n.jsx)(r.Tab,{title:(0,n.jsx)(r.TabTitleText,{children:t("topic.topics")}),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":t("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList",ouiaId:"tab-Topics"}),(0,n.jsx)(r.Tab,{title:(0,n.jsx)(r.TabTitleText,{children:t("consumerGroup.consumer_groups")}),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":t("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList",ouiaId:"tab-Consumers"}),(0,n.jsx)(r.Tab,{title:(0,n.jsx)(r.TabTitleText,{children:t("permission.tab.label")}),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":t("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions",ouiaId:"tab-Permissions"}),(0,n.jsx)(r.Tab,{title:(0,n.jsx)(r.TabTitleText,{children:t("settings.settings")}),eventKey:5,"data-testid":"pageKafka-tabSettings",id:"settings-tab-section","aria-label":t("settings.settings"),tabContentId:"kafka-ui-TabcontentSettings",ouiaId:"tab-Settings"})]}))}))]})}},3654:(e,t,a)=>{a.d(t,{E:()=>i});var n=a(93264);const i=a.n(n)().createContext(void 0)},64517:(e,t,a)=>{a.d(t,{J:()=>i,S:()=>o});var n=a(93264);const i=a.n(n)().createContext(void 0),o=()=>(0,n.useContext)(i)},63052:(e,t,a)=>{a.d(t,{K:()=>i});var n=a(93264);const i=(e,t)=>{const a=(0,n.useRef)();(0,n.useEffect)((()=>{a.current=e}),[e]),(0,n.useEffect)((()=>{if(null!==t){const e=setTimeout((function(){void 0!==a.current&&a.current()}),t);return()=>{clearInterval(e)}}}),[e,t])}},70531:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var n=a(85893),i=a(21242),o=a(42695),s=a(93264),r=a(73685),l=a(15847),c=a(63052),d=a(92820),u=a(50834),p=a(90732),m=a(91070),g=a(82639),b=a(66260),v=a(97416);const f=({total:e=0,page:t,perPage:a,setFilteredValue:o,filteredValue:r="",onCreateTopic:c})=>{const{t:d}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),[u,p]=(0,s.useState)(""),m=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.ToolbarFilter,Object.assign({chips:r?[r]:[],deleteChip:()=>{o("")},categoryName:""},{children:(0,n.jsxs)(i.InputGroup,{children:[(0,n.jsx)(i.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":d("topic.topic_search_input"),placeholder:d("common.search"),value:u,onChange:e=>{p(e)}}),(0,n.jsx)(i.Button,Object.assign({variant:i.ButtonVariant.control,isDisabled:!u.length,onClick:()=>{o(u),p("")},"aria-label":d("topic.topic_search")},{children:(0,n.jsx)(b.SearchIcon,{})}))]})}))}),f=[{item:(0,n.jsx)(i.Button,Object.assign({id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:c,ouiaId:"button-create"},{children:d("topic.create_topic")}))}];return e>0&&f.push({item:(0,n.jsx)(g.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:e,page:t,perPage:a,titles:{paginationTitle:d("common.minimal_pagination"),perPageSuffix:d("common.per_page_suffix"),toFirstPage:d("common.to_first_page"),toPreviousPage:d("common.to_previous_page"),toLastPage:d("common.to_last_page"),toNextPage:d("common.to_next_page"),optionsToggle:d("common.options_toggle"),currPage:d("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,n.jsx)(v.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:()=>{o("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:m,toolbarItems:f})};var h=a(1787);const y=({total:e,page:t,perPage:a,setFilteredValue:o,filteredValue:s,onCreateTopic:c,topicItems:b,rowDataTestId:v,onEdit:y,onDeleteTopic:T,refreshTopics:k,onSort:j,sortBy:P})=>{const{t:x}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:_}=(0,u.useModal)(),{getBasename:I}=(0,u.useBasename)()||{getBasename:()=>""},C=I(),O=[{title:x("common.name")},{title:x("common.partitions"),transforms:[d.sortable]},{title:x("topic.retention_time"),transforms:[d.sortable]},{title:x("topic.retention_size"),transforms:[d.sortable]}],w=(e,t)=>{const{name:a=""}=e;var n;"delete"===t?(n=a,_(u.ModalType.KafkaDeleteTopic,{topicName:n,onDeleteTopic:T,refreshTopics:k})):"edit"===t&&y&&y(a)},S=(()=>{const e=[];return null==b||b.map((t=>{var a,i;const{name:o,partitions:s,config:l}=t,c=null===(a=null==l?void 0:l.filter((e=>"retention.ms"===e.key))[0])||void 0===a?void 0:a.value,d=null===(i=null==l?void 0:l.filter((e=>"retention.bytes"===e.key))[0])||void 0===i?void 0:i.value;e.push({cells:[{title:(0,n.jsx)(r.Link,Object.assign({"data-testid":"tableTopics-linkTopic","data-ouia-component-id":"table-link",to:`${C}/topics/${o}`},{children:o}))},null==s?void 0:s.length,(0,h.eA)(c?parseInt(c,10):0),(0,h.Cv)(d?parseInt(d,10):0)],originalData:t})})),e})();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{total:e,page:t,perPage:a,onCreateTopic:c,setFilteredValue:o,filteredValue:s}),(0,n.jsx)(p.w,{tableProps:{cells:O,rows:S,"aria-label":x("topic.topic_list_table"),actionResolver:e=>{const t=e.originalData;return[{title:x("common.delete"),"data-testid":"tableTopics-actionDelete","data-ouia-component-id":"kebab-menu-delete",onClick:()=>w(t,"delete")},{title:x("common.edit"),"data-testid":"tableTopics-actionEdit","data-ouia-component-id":"kebab-menu-edit",onClick:()=>w(t,"edit")}]},shouldDefaultCustomRowWrapper:!0,variant:d.TableVariant.compact,onSort:j,sortBy:P},rowDataTestId:v||"tableTopics-row",ouiaId:"card-table"}),(null==b?void 0:b.length)<1&&s.length>0&&(0,n.jsx)(m.u,{emptyStateProps:{variant:m.j.NoResult},titleProps:{title:x("common.no_results_title")},emptyStateBodyProps:{body:x("common.no_results_body")}}),e>0&&(0,n.jsx)(g.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:e,variant:i.PaginationVariant.bottom,page:t,perPage:a,titles:{paginationTitle:x("common.full_pagination"),perPageSuffix:x("common.per_page_suffix"),toFirstPage:x("common.to_first_page"),toPreviousPage:x("common.to_previous_page"),toLastPage:x("common.to_last_page"),toNextPage:x("common.to_next_page"),optionsToggle:x("common.options_toggle"),currPage:x("common.curr_page")}})]})};var T=a(4055),k=a(60540),j=a(64517),P=a(3654),x=a(5736);const _={0:k.c4.name,1:k.c4.partitions,2:k.c4.retentionMs,3:k.c4.retentionSize},I=()=>{const{onError:e}=(0,j.S)()||{},{t}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),a=(0,s.useContext)(P.E),{page:d=1,perPage:p=10,setPage:b}=(0,g.hI)()||{},v=(0,r.useHistory)(),{getBasename:f}=(0,u.useBasename)()||{getBasename:()=>""},h=f(),[I,C]=(0,s.useState)(),[O,w]=(0,s.useState)(""),[S,N]=(0,s.useState)(),[E,B]=(0,s.useState)(),[D,z]=(0,s.useState)({index:0,direction:"asc"}),M=(0,s.useCallback)((e=>{w(e),b&&b(1)}),[b]),R=()=>{v.push(`${h}/topic/create`)},L=e=>{v.push(`${h}/topic/update/${e}`)},F=e=>{L&&L(e)},K=(e,t,a)=>{B(_[t]),N(a),z({index:t,direction:a})},V=(0,s.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var t,n;try{yield(0,k.BB)(a,d,p,O,S,E).then((e=>{C(e)}))}catch(a){let i,o;a&&(0,x.I)(a)&&(o=null===(t=a.response)||void 0===t?void 0:t.data.code,i=null===(n=a.response)||void 0===n?void 0:n.data.error_message),e&&401===o&&e(o,i)}}))),[a,e,S,E,d,p,O]);return(0,s.useEffect)((()=>{V()}),[O,S,E,d,p,V]),(0,c.K)((()=>V()),5e3),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Card,Object.assign({className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},{children:(()=>{var e;switch(!0){case void 0===(null==I?void 0:I.items):return(0,n.jsx)(i.PageSection,Object.assign({className:"kafka-ui-m-full-height",variant:i.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,n.jsx)(T.y,{})}));case I&&(null===(e=null==I?void 0:I.items)||void 0===e?void 0:e.length)<1&&O.length<1:return(0,n.jsx)(m.u,{emptyStateProps:{variant:m.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:R,"data-testid":"actionCreateTopic",ouiaId:"button-create"}});case void 0!==(null==I?void 0:I.items):return(0,n.jsx)(y,{total:(null==I?void 0:I.total)||0,page:d,perPage:p,onCreateTopic:R,topicItems:(null==I?void 0:I.items)||[],filteredValue:O,setFilteredValue:M,refreshTopics:V,onEdit:F,onSort:K,sortBy:D});default:return(0,n.jsx)(n.Fragment,{})}})()}))})};var C=a(82774),O=a(2766),w=a(68640);a(27958);const S=({kafkaName:e,kafkaPageLink:t,handleInstanceDrawer:a,redirectAfterDeleteInstance:o,kafka:s,onError:r,apiBasePath:l,getToken:c})=>{const{showModal:d}=(0,u.useModal)();return(0,n.jsx)(P.E.Provider,Object.assign({value:{basePath:l,getToken:c}},{children:(0,n.jsx)(j.J.Provider,Object.assign({value:{kafkaName:e,kafkaPageLink:t,handleInstanceDrawer:a,kafka:s,redirectAfterDeleteInstance:o,onError:r,onDeleteInstance:()=>{d&&d(u.ModalType.KasDeleteInstance,{kafka:s,onDelete:o})}}},{children:(0,n.jsx)(C.ModalProvider,{children:(0,n.jsxs)(g.bN,{children:[(0,n.jsx)(O.$,{activeTabKey:2}),(0,n.jsxs)(i.PageSection,Object.assign({hasOverflowScroll:!0},{children:[(0,n.jsx)(I,{}),(0,n.jsx)(w.J,{})]}))]})})}))}))}},1787:(e,t,a)=>{a.d(t,{$X:()=>i,AV:()=>r,Cv:()=>p,FB:()=>n,KP:()=>s,UC:()=>o,az:()=>b,eA:()=>u,qS:()=>g,yN:()=>c});const n=function(e){return e.split("-").map(((e,t)=>{return t>0?(a=e).charAt(0).toUpperCase()+a.slice(1):e;var a})).join("")},i=e=>"string"==typeof e?e.replace(/-/g,"."):e;var o,s;!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="days",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(o||(o={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(s||(s={}));const r={[s.BYTE]:1,[s.KIBIBYTE]:1024,[s.MEBIBYTE]:1048576,[s.GIBIBYTE]:1073741824,[s.TEBIBYTE]:10995116e5},l={[o.MILLISECOND]:1,[o.SECOND]:1e3,[o.MINUTE]:6e4,[o.HOUR]:36e5,[o.DAY]:864e5},c=Object.assign(Object.assign({},l),{[o.DAY]:1,[o.WEEK]:7}),d=e=>{if(e){if(e%l.days==0)return{value:e/l.days,unit:"days"};if(e%l.hours==0)return{value:e/l.hours,unit:"hours"};if(e%l.minutes==0)return{value:e/l.minutes,unit:"minutes"};if(e%l.seconds==0)return{value:e/l.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},u=e=>{const{unit:t,value:a}=d(e);return-1===Number(a)?"Unlimited":`${e} ms (${a} ${t})`},p=e=>{const{unit:t,value:a}=m(e);return-1===Number(a)?"Unlimited":`${e} bytes (${a} ${t})`},m=e=>{if(e){if(e%r.tebibytes==0)return{value:e/r.tebibytes,unit:"tebibytes"};if(e%r.gibibytes==0)return{value:e/r.gibibytes,unit:"gibibytes"};if(e%r.mebibytes==0)return{value:e/r.mebibytes,unit:"mebibytes"};if(e%r.kibibytes==0)return{value:e/r.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},g=e=>{var t;const a=Object.assign({},e),n={};return null===(t=null==a?void 0:a.config)||void 0===t||t.forEach((e=>{const{key:t="",value:a}=e;if("retention.ms"===t&&Number(a)>=0){const{value:e,unit:i}=d(Number(a));n[t]=`${e}`,n[`${t}.unit`]=i,n.selectedRetentionTimeOption=o.CUSTOM}else"retention.ms"===t&&-1===Number(a)&&(n.selectedRetentionTimeOption=o.UNLIMITED);if("retention.bytes"===t&&Number(a)>=0){const{value:e,unit:i}=m(Number(a));n[t]=`${e}`,n[`${t}.unit`]=i,n.selectedRetentionSizeOption=s.CUSTOM}else"retention.bytes"===t&&-1===Number(a)&&(n.selectedRetentionSizeOption=s.UNLIMITED);"cleanup.policy"===t&&(n[t]=a||"delete")})),n},b=(e,t=[])=>{const a=["retention.ms","retention.bytes","flush.messages",...t],n=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],i=Object.assign({},e),c=[];for(const e in i){const t=e;let d;if(a.includes(t))if(i.selectedRetentionTimeOption===o.UNLIMITED&&"retention.ms"===t||i.selectedRetentionSizeOption===s.UNLIMITED&&"retention.bytes"===t)d="-1";else if("retention.ms"===t||"retention.bytes"===t){const e=i[`${t}.unit`]||"milliseconds",a=i[`${t}.unit`]||"bytes",n="retention.ms"===t?l[e]:r[a];d=Number(i[t])*n}else d=i[t];("unit"===t.split(".").pop()||n.includes(t))&&delete i[t],d&&t&&c.push({key:t,value:d.toString()})}return{name:i.name,settings:{numPartitions:Number(i.numPartitions),config:c}}}},60540:(e,t,a)=>{a.d(t,{BB:()=>r,BK:()=>p,BN:()=>u,Rh:()=>l,c4:()=>n,eR:()=>d});var n,i=a(42695),o=a(74359),s=a(92820);!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(n||(n={}));const r=(e,t,a,n,r=s.SortByDirection.asc,l)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==e?void 0:e.getToken(),s=new o.TopicsApi(new o.Configuration({accessToken:i,basePath:null==e?void 0:e.basePath}));return(yield s.getTopics(void 0,void 0,a,n,t,r,l)).data})),l=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==t?void 0:t.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==t?void 0:t.basePath})),{data:i}=yield n.getTopic(e);return c(i)})),c=e=>{var t,a,n;const i={name:"",numPartitions:"0"};return e&&e.name&&(i.name=e.name),null===(t=e.config)||void 0===t||t.forEach((e=>{if(e.key&&e.value){const t=e.key;i[t]=e.value}})),i.numPartitions=(null===(a=null==e?void 0:e.partitions)||void 0===a?void 0:a.length.toString())||"0",i.replicationFactor=(null==e?void 0:e.partitions)&&(null===(n=null==e?void 0:e.partitions[0].replicas)||void 0===n?void 0:n.length.toString())||"0",i},d=(e,t,a)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==a?void 0:a.getToken(),i=new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==a?void 0:a.basePath}));return(yield i.updateTopic(e,t)).status})),u=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==t?void 0:t.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==t?void 0:t.basePath})),i=yield n.getTopic(e),s=(i.data.partitions||[]).map((e=>{var t;return(null===(t=e.replicas)||void 0===t?void 0:t.length)||0})).reduce(((e=0,t=0)=>e+t)).toString(),r=i.data;return r.config=r.config||[],r.config.push({key:"replicationFactor",value:s}),i.data})),p=(e,t)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==t?void 0:t.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==t?void 0:t.basePath}));yield n.deleteTopic(e)}))},5736:(e,t,a)=>{a.d(t,{I:()=>n});const n=e=>void 0!==e}}]);
//# sourceMappingURL=531.21d191cd.js.map
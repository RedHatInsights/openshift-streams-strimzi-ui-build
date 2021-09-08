"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[89],{41272:(e,t,n)=>{n.d(t,{Q:()=>l});var r=n(84669),i=n(34046),a=n(75418),o=n.n(a),l=function(e){var t=e.children,n=e.labelHead,a=e.fieldId,l=e.fieldLabel,s=e.labelBody,c=e.buttonAriaLabel,u=e.validated,p=e.helperText,d=e.helperTextInvalid,m=e.isRequired;return o().createElement(r.FormGroup,{fieldId:a,label:l,validated:u,helperText:p,helperTextInvalid:d,isRequired:m,labelIcon:o().createElement(r.Popover,{headerContent:o().createElement("div",null,n),bodyContent:o().createElement("div",null,s)},o().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},o().createElement(i.ZP,{noVerticalAlign:!0})))},t)}},28942:(e,t,n)=>{n.d(t,{w:()=>f});var r=n(75418),i=n.n(r),a=n(27577),o=n(38296),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=(0,r.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=c.Provider,p=function(e){var t=(0,r.useContext)(c),n=t.activeRow,a=t.onRowClick,u=t.rowDataTestId,p=e||{},d=p.trRef,m=p.className,f=p.rowProps,v=p.row,b=s(p,["trRef","className","rowProps","row"]),y=f.rowIndex,g=v.isExpanded,h=v.originalData;return i().createElement("tr",l({"data-testid":u,tabIndex:0,ref:d,className:(0,o.css)(m,"pf-c-table-row__item",n&&n===(null==h?void 0:h.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==g&&!g,onClick:function(e){return a&&a(e,y,v)}},b))},d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},f=function(e){var t=e.tableProps,n=e.tableHeaderProps,r=e.tableBodyProps,l=e.children,s=e.activeRow,c=e.onRowClick,f=e.rowDataTestId,v=e.loggedInUser,b=t.cells,y=t.rows,g=t.actionResolver,h=t.onSort,_=t.sortBy,T=t["aria-label"],w=t.variant,E=t.className,P=t.shouldDefaultCustomRowWrapper,O=void 0!==P&&P,k=m(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return O&&(k.rowWrapper=p),i().createElement(u,{value:{activeRow:s,onRowClick:c,rowDataTestId:f,loggedInUser:v}},i().createElement(a.Table,d({className:(0,o.css)(O&&"mas--table-view__table",E),cells:b,variant:w,rows:y,"aria-label":T,actionResolver:g,onSort:h,sortBy:_},k),i().createElement(a.TableHeader,d({},n)),i().createElement(a.TableBody,d({},r)),l))}},43667:(e,t,n)=>{n.d(t,{QG:()=>d,w7:()=>m,dg:()=>f,C8:()=>v});var r=n(54532),i=n(70251),a=n(70853),o=n(84669),l=n(75418),s=n.n(l),c=n(95216),u=function(){var e=(0,r.useTranslation)().t;return s().createElement(s().Fragment,null,s().createElement("div",null,e("permission.table.all_accounts")," ",s().createElement(i.InfoCircleIcon,{color:"grey"})),s().createElement("div",{className:"pf-u-font-size-xs"},e("permission.table.all_accounts_help")))},p=function(e){var t=e.acl,n=(0,c.usePrincipals)().getAllPrincipals().filter((function(e){return e.id===t.principalDisplay}));return 1===n.length?n[0].principalType===c.PrincipalType.ServiceAccount?s().createElement(o.Tooltip,{content:s().createElement("div",null,"Type: ",n[0].principalType," ",s().createElement("br",null))},s().createElement("span",{tabIndex:0}," ",t.principalDisplay," ",s().createElement(i.InfoCircleIcon,{color:"grey"}))):s().createElement(o.Tooltip,{content:s().createElement("div",null,"Type: ",n[0].principalType," ",s().createElement("br",null),"Name: ",n[0].displayName," ",s().createElement("br",null),"Email: ",n[0].emailAddress)},s().createElement("span",{tabIndex:0}," ",t.principalDisplay," ",s().createElement(i.InfoCircleIcon,{color:"grey"}))):s().createElement("span",null," ",t.principalDisplay)},d=function(e){switch(e.principal){case"User:*":return{title:s().createElement(u,null)};default:return{title:s().createElement(p,{acl:e})}}},m=function(e){return e.permission===a.AclPermissionType.Deny?{title:s().createElement(o.Label,{color:"red",variant:"outline"},e.permissionDisplay)}:""},f=function(e){return{title:s().createElement(o.Label,{color:e.operationColor},e.operationDisplay)}},v=function(e){return{title:s().createElement(s().Fragment,null,s().createElement("div",null,e.resourceTypeDisplay," ",e.patternType===a.AclPatternType.Prefixed?"name starts with":"is"),s().createElement("div",{className:"pf-u-font-size-lg"},e.resourceName))}}},53089:(e,t,n)=>{n.r(t),n.d(t,{ManagePermissions:()=>V,default:()=>L});var r=n(75418),i=n.n(r),a=n(84669),o=n(54532),l=n(76621),s=n(3654),c=n(95216),u=n(48762),p=n(41272),d=n(80887),m=n(77221),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},v=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},b=function(e){var t=e.setId,n=e.id,l=e.initialOptions,s=(0,o.useTranslation)().t,c=(0,r.useState)(!1),b=c[0],y=c[1],g=(0,r.useState)(l.map((function(e){return{value:e.id,title:e.id,description:(0,u.sentenceCase)(e.principalType.toString())+" "+(e.displayName||"")}}))),h=g[0],_=g[1],T=function(){t({value:void 0}),y(!1)};return i().createElement(p.Q,{labelHead:s("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:s("permission.manage_permissions_dialog.account_id_title"),labelBody:s("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:s("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:n.errorMessage,validated:n.invalid?"error":void 0},i().createElement(d.P,{variant:a.SelectVariant.typeahead,typeAheadAriaLabel:s("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:function(){y(!b)},onSelect:function(e,n,r){r?T():(t({value:n}),y(!1))},onClear:T,selections:n.value,isOpen:b,isInputValuePersisted:!0,placeholderText:s("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!0,onCreateOption:function(e){_(v(v([],h),[{value:e}]))}},h.map((function(e,t){return i().createElement(m.SelectOption,f({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))}))))},y=n(27577),g=n(43667),h=n(28942),_=function(e){var t=e.existingAcls,n=(0,o.useTranslation)().t;if(0===t.length)return i().createElement(i().Fragment,null);var r=[g.dg,g.w7,g.C8];return i().createElement(a.GridItem,{span:12},i().createElement(a.FormGroup,{fieldId:"allAccounts",label:n("permission.manage_permissions_dialog.edit_existing.all_accounts_title"),helperText:n("permission.manage_permissions_dialog.edit_existing.all_accounts_help"),isHelperTextBeforeField:!0},i().createElement(h.w,{tableProps:{cells:[{title:""},{title:""},{title:""},{title:""}],rows:t.map((function(e,t){return{cells:r.map((function(n){return n(e,t)})),originalData:e}})),"aria-label":n("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:y.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"})))},T=n(70251),w=function(e){var t=e.existingAcls,n=e.selectedAccountId,l=(0,o.useTranslation)().t,s=(0,r.useState)([]),c=s[0],u=s[1];(0,r.useEffect)((function(){u(t.map((function(e,t){var n=e;return n.index=t,n})))}),[t]);var p=[g.dg,g.w7,g.C8,function(e){return{title:i().createElement(a.Button,{variant:"link",icon:i().createElement(T.MinusCircleIcon,null),onClick:function(){return t=e,void u(c.map((function(e){return e.hash()===t.hash()&&(e.removed=!0),e})));var t}},"Remove")}}];return 0===c.length||void 0===n?i().createElement(i().Fragment,null):i().createElement(a.GridItem,{span:12},i().createElement(a.FormGroup,{fieldId:"selectedAccount",label:n,helperText:l("permission.manage_permissions_dialog.edit_existing.selected_account_help"),isHelperTextBeforeField:!0},i().createElement(h.w,{tableProps:{cells:[{title:""},{title:""},{title:""},{title:""}],rows:c.filter((function(e){return!e.removed})).map((function(e,t){return{cells:p.map((function(n){return n(e,t)})),originalData:e}})),"aria-label":l("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:y.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"})))},E=function(e){var t=e.existingAcls,n=e.selectedAccountId,r=(0,o.useTranslation)().t,a=t.filter((function(e){return"User:*"===e.principal})),l=t.filter((function(e){return e.principal==="User:"+n}));return i().createElement(i().Fragment,null,i().createElement("h2",null,r("permission.manage_permissions_dialog.edit_existing.title")),i().createElement(_,{existingAcls:a}),i().createElement(w,{existingAcls:l,selectedAccountId:n}))},P=n(70853),O=n(4055),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},C=function(e){var t=e.options,n=e.setSelected,l=e.selected,s=e.row,c=e.id,u=(0,o.useTranslation)().t,f=(0,r.useState)(!1),v=f[0],b=f[1],y=function(){n(s,void 0),b(!1)};return i().createElement(p.Q,{labelHead:u("permission.manage_permissions_dialog.create_permissions."+c+".popover_head"),fieldId:c,labelBody:u("permission.manage_permissions_dialog.create_permissions."+c+".popover_label"),buttonAriaLabel:u("`permission.manage_permissions_dialog.create_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:l.errorMessage,validated:l.invalid?"error":void 0},i().createElement(d.P,{variant:a.SelectVariant.single,onToggle:function(){b(!v)},onSelect:function(e,t,r){r?y():(n(s,t),b(!1))},onClear:y,selections:l.value,isOpen:v,isInputValuePersisted:!0,placeholderText:u("permission.manage_permissions_dialog.create_permissions.placeholder")},t.map((function(e,t){return i().createElement(m.SelectOption,k({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}),e.title)}))))},I=n(76666),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},A=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},S=function(e){var t=e.row,n=e.setValue,l=e.value,s=e.initialOptions,c=e.id,u=(0,o.useTranslation)().t,f=(0,r.useState)(!1),v=f[0],b=f[1],y=(0,r.useState)([]),g=y[0],h=y[1];(0,r.useEffect)((function(){h(s().map((function(e){return{value:e}})))}),[s]);var _=function(){n(t,void 0),b(!1)};return i().createElement(p.Q,{labelHead:u("permission.manage_permissions_dialog.create_permissions."+c+".popover_head"),fieldId:c,labelBody:u("permission.manage_permissions_dialog.create_permissions."+c+".popover_label"),buttonAriaLabel:u("`permission.manage_permissions_dialog.create_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:l.errorMessage,validated:l.invalid?"error":void 0},i().createElement(d.P,{variant:a.SelectVariant.typeahead,typeAheadAriaLabel:u("permission.manage_permissions_dialog.create_permissions.resource_name_aria"),onToggle:function(){b(!v)},onSelect:function(e,r,i){i?_():(n(t,r),b(!1))},onClear:_,selections:l.value,isOpen:v,isInputValuePersisted:!0,placeholderText:u("permission.manage_permissions_dialog.create_permissions.resource_name_typeahead_placeholder"),isCreatable:!0,onCreateOption:function(e){h(A(A([],g),[{value:e}]))}},g.map((function(e,t){return i().createElement(m.SelectOption,x({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))}))))},R=n(20777),D=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},j=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},N=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},G=function(e){var t=e.acls,n=e.setAcls,c=e.topicNames,p=e.consumerGroupIds,d=(0,r.useContext)(s.E),m=(0,r.useState)(),f=m[0],v=m[1],b=(0,l.PO)(d);(0,r.useEffect)((function(){D(void 0,void 0,void 0,(function(){var e;return j(this,(function(t){switch(t.label){case 0:return[4,b.getResourceOperations()];case 1:return e=t.sent(),v(e),[2]}}))}))}),[]);var g=(0,o.useTranslation)().t,_=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.permission={value:t}),n}))}))},w=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.operation={value:t}),n}))}))},E=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.resourceType={value:t}),n}))}))},k=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.patternType={value:t}),n}))}))},x=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.resource={value:t}),n}))}))};return void 0===f?i().createElement(O.y,null):i().createElement(a.GridItem,{span:12},i().createElement(a.FormGroup,{fieldId:"createPermissions",label:g("permission.manage_permissions_dialog.create_permissions.title"),helperText:g("permission.manage_permissions_dialog.create_permissions.help"),isHelperTextBeforeField:!0},i().createElement(h.w,{tableProps:{cells:[{title:""},{title:""},{title:""},{title:""},{title:""},{title:""},{title:""}],rows:t.map((function(e,t){return{cells:[{title:i().createElement(C,{options:(0,l.mv)().map((function(e){return{value:e,title:(0,u.sentenceCase)(e)}})),selected:e.permission,setSelected:_,row:t,id:"permission-type"})},{title:i().createElement(C,{options:(0,l.G6)().filter((function(){return!0})).map((function(e){return{value:e,title:(0,u.sentenceCase)(e)}})),selected:e.operation,setSelected:w,row:t,id:"operation"})},{title:i().createElement(C,{options:(0,l.yN)().filter((function(t){if(void 0===e.operation.value||""===e.operation.value.toString())return!0;var n=(0,I.snakeCase)(e.operation.value.toString());return(f[(0,I.snakeCase)(t.toString())]||[]).some((function(e){return n===e}))})).map((function(e){return{value:e,title:(0,u.sentenceCase)(e)}})),selected:e.resourceType,setSelected:E,row:t,id:"resource-type"})},{title:i().createElement(C,{options:(0,l.t)().map((function(e){return{value:e,title:e===P.AclPatternType.Prefixed?"Starts with":"Is"}})),selected:e.patternType,setSelected:k,row:t,id:"pattern-type"})},{title:i().createElement(S,{row:t,value:e.resource,setValue:x,id:"resource",initialOptions:function(){return e.resourceType.value===P.AclResourceType.Topic?c:e.resourceType.value===P.AclResourceType.Group?p:[]}})},{title:i().createElement(a.Button,{variant:"link",icon:i().createElement(T.MinusCircleIcon,null),onClick:function(){return function(e){n((function(t){return t.filter((function(t,n){return n!==e}))}))}(t)}},"Remove")}]}})),"aria-label":g("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:y.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),i().createElement(a.Button,{variant:"link",icon:i().createElement(R.ZP,null),onClick:function(){n((function(e){return N(N([],e),[{permission:{value:void 0},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:void 0},resource:{value:void 0}}])}))}},"Add permission")))},B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},M=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},F=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},V=function(e){var t=e.hideModal,n=e.onSave,u=e.kafkaName,p=e.selectedAccountId,d=e.acls,m=e.topicNames,f=e.consumerGroupIds,v=(0,o.useTranslation)().t,y=(0,r.useState)({value:p}),g=y[0],h=y[1],_=(0,r.useState)([{permission:{value:void 0},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:void 0},resource:{value:void 0}}]),T=_[0],w=_[1],P=(0,c.usePrincipals)(),O=(0,r.useContext)(s.E),k=(0,l.PO)(O);return i().createElement(a.Modal,{variant:a.ModalVariant.large,isOpen:!0,"aria-label":v("permission.manage_permissions_dialog.aria_label"),title:v("permission.manage_permissions_dialog.title"),showClose:!0,"aria-describedby":"modal-message",onClose:t,actions:[i().createElement(a.Button,{variant:"primary",onClick:function(){return M(void 0,void 0,void 0,(function(){var e,r,i,a;return F(this,(function(o){switch(o.label){case 0:if(e=!0,void 0===g.value&&(h((function(e){return B(B({},e),{invalid:!0,errorMessage:v("permission.manage_permissions_dialog.must_select_account_error")})})),e=!1),w((function(t){return t.map((function(t){if(void 0!==t.resource.value||void 0!==t.patternType.value||void 0!==t.permission.value||void 0!==t.resourceType.value||void 0!==t.operation.value){var n=Object.assign({},t);return void 0===t.resource.value&&(n.resource.invalid=!0,n.resource.errorMessage=v("permission.manage_permissions_dialog.create_permissions.must_select_resource_error"),e=!1),void 0===t.patternType.value&&(n.patternType.invalid=!0,n.patternType.errorMessage=v("permission.manage_permissions_dialog.create_permissions.must_select_pattern_type_error"),e=!1),void 0===t.permission.value&&(n.permission.invalid=!0,n.permission.errorMessage=v("permission.manage_permissions_dialog.create_permissions.must_select_permission_error"),e=!1),void 0===t.resourceType.value&&(n.resourceType.invalid=!0,n.resourceType.errorMessage=v("permission.manage_permissions_dialog.create_permissions.must_select_resource_type_error"),e=!1),void 0===t.operation.value&&(n.operation.invalid=!0,n.operation.errorMessage=v("permission.manage_permissions_dialog.create_permissions.must_select_operation_error"),e=!1),n}return t}))})),!e)return[3,7];r=0,i=T.filter((function(e){return void 0!==e.resource.value||void 0!==e.patternType.value||void 0!==e.permission.value||void 0!==e.resourceType.value||void 0!==e.operation.value})),o.label=1;case 1:if(!(r<i.length))return[3,4];if(void 0===(a=i[r]).resource.value)throw Error("resource must not be undefined");if(void 0===a.patternType.value)throw Error("patternType must not be undefined");if(void 0===a.permission.value)throw Error("permission must not be undefined");if(void 0===a.resourceType.value)throw Error("resourceType must not be undefined");if(void 0===a.operation.value)throw Error("operation must not be undefined");return[4,k.addPermission({resourceName:a.resource.value,patternType:a.patternType.value,permission:a.permission.value,resourceType:a.resourceType.value,operation:a.operation.value,principal:"User:"+g.value})];case 2:o.sent(),o.label=3;case 3:return r++,[3,1];case 4:return n?[4,n()]:[3,6];case 5:o.sent(),o.label=6;case 6:t(),o.label=7;case 7:return[2]}}))}))},key:1},v("permission.manage_permissions_dialog.update_button")),i().createElement(a.Button,{variant:"link",onClick:t,key:2},v("permission.manage_permissions_dialog.cancel_button"))]},v("permission.manage_permissions_dialog.main_help"),i().createElement(a.Form,null,i().createElement(a.Grid,{hasGutter:!0,md:6},i().createElement(a.GridItem,{span:12},i().createElement(a.FormGroup,{fieldId:"kafka-instance-name",label:v("permission.manage_permissions_dialog.kafka_instance_title")},u)),i().createElement(a.GridItem,{span:12},i().createElement(b,{id:g,setId:h,initialOptions:P.getAllPrincipals()}))),i().createElement(E,{existingAcls:d,selectedAccountId:g.value}),i().createElement(G,{acls:T,setAcls:w,topicNames:m,consumerGroupIds:f})))};const L=V},76621:(e,t,n)=>{n.d(t,{L2:()=>u,PO:()=>p,mv:()=>m,G6:()=>f,yN:()=>v,t:()=>b});var r=n(70853),i=n(48762),a=n(30243),o=n.n(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},u=function(e,t){return(Object.entries(t).find((function(t){return t[1]===e.toString()}))||[])[1]},p=function(e){return{getPermissions:function(t,n,i){return s(void 0,void 0,Promise,(function(){var a,o;return c(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getAcls(t.resourceType,t.resourceName,t.patternType,t.principal,t.operation,t.permissionType,i,n)];case 2:return o=l.sent(),[2,d(o)]}}))}))},addPermission:function(t){return s(void 0,void 0,void 0,(function(){var n;return c(this,(function(i){switch(i.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return n=i.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:n,basePath:null==e?void 0:e.basePath})).createAcl(t)];case 2:return i.sent(),[2]}}))}))},deletePermission:function(t){return s(void 0,void 0,void 0,(function(){var n;return c(this,(function(i){switch(i.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return n=i.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:n,basePath:null==e?void 0:e.basePath})).deleteAcls(t.resourceType,t.resourceName,t.patternType,t.principal,t.operation,t.permissionType)];case 2:return i.sent(),[2]}}))}))},getResourceOperations:function(){return s(void 0,void 0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=n.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((function(e){return e.data}))];case 2:return[2,n.sent()]}}))}))}}},d=function(e){var t;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(t=e.data.items)||void 0===t?void 0:t.map((function(e){var t,n;switch(e.resourceType){case r.AclResourceType.Group:t="green",n="Consumer group";break;case r.AclResourceType.Topic:t="blue",n="Topic";break;case r.AclResourceType.Cluster:n="Kafka Instance",t="grey";break;case r.AclResourceType.TransactionalId:n="Transactional id",t="orange";break;default:t=void 0,n=(0,i.sentenceCase)(e.resourceType)}return l(l({operationColor:t,operationDisplay:(0,i.sentenceCase)(e.operation),resourceTypeDisplay:n,permissionDisplay:(0,i.sentenceCase)(e.permission),principalDisplay:e.principal.substring(5)},e),{toString:function(){return e.principal+" "+e.permission+" "+e.operation+" "+e.patternType+" "+e.resourceType+" "+e.resourceName},hash:function(){return o()(e)}})})).sort((function(e,t){return e.permission!==t.permission?"DENY"===e.permission?-1:1:e.principal!==t.principal?e.principal.localeCompare(t.principal):e.resourceType!==t.resourceType?e.resourceType.localeCompare(t.resourceType):e.resourceName!==t.resourceName?e.resourceName.localeCompare(t.resourceName):e.operation!==t.operation?e.operation.localeCompare(t.operation):0}))}},m=function(){return Object.values(r.AclPermissionType)},f=function(){return Object.values(r.AclOperation)},v=function(){return Object.values(r.AclResourceType)},b=function(){return Object.values(r.AclPatternType)}}}]);
//# sourceMappingURL=89.dc4d3718.js.map
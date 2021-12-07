"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7214],{41272:(e,n,t)=>{t.d(n,{Q:()=>o});var a=t(84669),r=t(34046),i=t(75418),s=t.n(i),o=function(e){var n=e.children,t=e.labelHead,i=e.fieldId,o=e.fieldLabel,l=e.labelBody,c=e.buttonAriaLabel,u=e.validated,p=e.helperText,d=e.helperTextInvalid,m=e.isRequired;return s().createElement(a.FormGroup,{fieldId:i,label:o,validated:u,helperText:p,helperTextInvalid:d,isRequired:m,labelIcon:s().createElement(a.Popover,{headerContent:s().createElement("div",null,t),bodyContent:s().createElement("div",null,l)},s().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},s().createElement(r.ZP,{noVerticalAlign:!0})))},n)}},4055:(e,n,t)=>{t.d(n,{y:()=>o});var a=t(75418),r=t.n(a),i=t(84669),s=function(){return s=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},s.apply(this,arguments)},o=function(e){var n=e.bullseyeProps,t=e.spinnerProps;return r().createElement(i.Bullseye,s({},n),r().createElement(i.Spinner,s({},t)))}},36932:(e,n,t)=>{t.r(n),t.d(n,{ManagePermissions:()=>q,ManagePermissionsModal:()=>H,default:()=>Q});var a=t(75418),r=t.n(a),i=t(84669),s=t(31521),o=t(76621),l=t(3654),c=t(64517),u=t(46332),p=t(41272),d=function(e){var n=e.setId,t=e.id,o=e.initialOptions,l=e.setEscapeClosesModal,c=(0,s.useTranslation)().t,d=(0,a.useState)(!1),m=d[0],_=d[1],f=function(){n({value:void 0,validated:void 0}),_(!1)},v=[r().createElement(i.SelectGroup,{key:"all_accounts_group"},r().createElement(i.SelectOption,{key:"*",value:"*",description:c("permission.manage_permissions_dialog.all_accounts_description")},c("permission.manage_permissions_dialog.all_accounts_title"))),r().createElement(i.Divider,{key:"divider"}),r().createElement(i.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_service_account_group"),key:"service_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.ServiceAccount})).sort((function(e,n){return e.displayName.localeCompare(n.displayName)})).map((function(e,n){return r().createElement(i.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)}))),r().createElement(i.Divider,{key:"divider"}),r().createElement(i.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_user_account_group"),key:"user_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.UserAccount})).map((function(e,n){return r().createElement(i.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)})))];return r().createElement(p.Q,{labelHead:c("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:c("permission.manage_permissions_dialog.account_id_title"),labelBody:c("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:c("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:t.errorMessage,validated:t.validated||i.ValidatedOptions.default},r().createElement(i.Select,{variant:i.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:c("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:function(e){l(!e),_(e)},onSelect:function(e,t,a){""===t&&(t=void 0),a?f():n((function(){return void 0===t?{value:t,validated:i.ValidatedOptions.error,errorMessage:c("permission.manage_permissions_dialog.must_select_account_error")}:{validated:i.ValidatedOptions.default,value:t}})),_(!1)},onClear:f,selections:t.value,onFilter:function(e,n){if(!n)return v;var t=new RegExp(n,"i");return v.filter((function(e){return Array.isArray(e.props.children)})).map((function(e){return e.props.children.filter((function(e){return t.test(e.props.value)||t.test(e.props.description)}))}))},isOpen:m,isInputValuePersisted:!0,placeholderText:c("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:t.validated||i.ValidatedOptions.default,isGrouped:!0},v))},m=t(23587),_=t(27577),f=t(28942),v=t(80887),g=t(77221),y=function(){return y=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},y.apply(this,arguments)},h=function(e){var n=e.options,t=e.setSelected,o=e.selected,l=e.row,c=e.id,u=e.placeholder,d=e.setEscapeClosesModal,m=e.onSelect,_=e.menuAppendTo,f=e.onClear,h=(0,s.useTranslation)().t,T=(0,a.useState)(!1),E=T[0],b=T[1],w=function(){t(l,f()),b(!1)};return r().createElement(p.Q,{labelHead:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:h("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||i.ValidatedOptions.default},r().createElement(v.P,{variant:i.SelectVariant.single,onToggle:function(e){d(!e),b(e)},onSelect:function(e,n,a){""===n&&(n=void 0),a?w():(t(l,n),b(!1),m(n))},onClear:w,selections:o.value,isOpen:E,isInputValuePersisted:!0,placeholderText:u,validated:o.validated||i.ValidatedOptions.default,menuAppendTo:_,maxHeight:200,direction:"up"},n.map((function(e,n){return r().createElement(g.SelectOption,y({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}),e.title)}))))},T=t(73866),E=t(54283),b=function(){return b=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},b.apply(this,arguments)},w=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},A=function(e){var n=e.row,t=e.setValue,o=e.value,l=e.initialOptions,c=e.id,u=e.placeholder,d=e.onSelect,m=e.setEscapeClosesModal,_=e.menuAppendTo,f=(0,s.useTranslation)().t,v=(0,a.useState)(!1),g=v[0],y=v[1],h=(0,a.useState)([]),T=h[0],E=h[1];(0,a.useEffect)((function(){E(l().map((function(e){return{value:e}})))}),[l]);var A=function(){t(n,void 0),y(!1)};return r().createElement(p.Q,{labelHead:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:f("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||i.ValidatedOptions.default},r().createElement(i.Select,{variant:i.SelectVariant.typeahead,typeAheadAriaLabel:f("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:function(e){m(!e),y(e)},className:"pf-u-pr-lg-on-lg",onSelect:function(e,a,r){""===a&&(a=void 0),r?A():(t(n,a),y(!1),d(a))},onClear:A,selections:o.value,isOpen:g,isInputValuePersisted:!0,placeholderText:u,isCreatable:!0,onCreateOption:function(e){E(w(w([],T,!0),[{value:e}],!1))},createText:f("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:o.validated||i.ValidatedOptions.default,menuAppendTo:_,maxHeight:200,direction:"up"},T.map((function(e,n){return r().createElement(i.SelectOption,b({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}))}))))},O=t(20777),k=t(90966),x=function(e,n){void 0===n&&(n=0);var t=C();return!(e.permission.value===t.permission.value&&e.patternType.value===t.patternType.value&&e.resourceType.value===t.resourceType.value&&e.resource.value===t.resource.value&&e.operation.value===t.operation.value&&n<=1)},C=function(){return{permission:{value:m.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:m.AclPatternType.Prefixed},resource:{value:void 0}}},V=t(87892),S=t(56637),P=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},M=function(e){var n=e.acls,t=e.setAcls,a=e.topicNames,l=e.consumerGroupIds,c=e.selectedAccount,u=e.setEscapeClosesModal,p=e.resourceOperations,d=e.menuAppendTo,v=(0,S.N)().validateName,g=(0,s.useTranslation)().t,y=[{title:g("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(25)]},{title:g("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],b=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.permission={value:n}),t}))}))},w=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.operation={value:n}),t}))}))},M=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.resourceType={value:n}),t}))}))},I=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.patternType={value:n}),t}))}))},N=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.resource={value:n}),t}))}))},R=function(e){var n=e.acl,a=e.row;return n.resourceType.value===m.AclResourceType.Cluster?r().createElement(r().Fragment,null):r().createElement(h,{options:(0,o.t)().map((function(e){return{value:e,title:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}})).sort((function(e,n){return n.value.localeCompare(e.value)})),selected:n.patternType,setSelected:I,row:a,id:"pattern-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().patternType.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].patternType.validated=i.ValidatedOptions.error,n[a].patternType.validated=g("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):n[a].patternType.validated=i.ValidatedOptions.default,n}))}})},L=function(e){var n=e.row,a=e.acl;return r().createElement(h,{options:(0,o.yN)().map((function(e){return{value:e,title:(0,V.s)(e)}})),selected:a.resourceType,setSelected:M,row:n,id:"resource-type",placeholder:g("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().resourceType.value},onSelect:function(e){t((function(t){return void 0===e?(t[n].resourceType.validated=i.ValidatedOptions.error,t[n].resourceType.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):t[n].resourceType.validated=i.ValidatedOptions.default,t}))}})},B=function(e){var n,s=e.row,o=e.acl;return o.resourceType.value===m.AclResourceType.Cluster?r().createElement(r().Fragment,null):r().createElement(A,{row:s,value:o.resource,setValue:N,id:"resource",placeholder:g("permission.manage_permissions_dialog.assign_permissions.pattern_type_".concat((null===(n=o.patternType.value)||void 0===n?void 0:n.toLowerCase())||"prefixed","_placeholder")),setEscapeClosesModal:u,menuAppendTo:d,initialOptions:function(){return o.resourceType.value===m.AclResourceType.Topic?a:o.resourceType.value===m.AclResourceType.Group?l:[]},onSelect:function(e){if("*"===e)t((function(e){return e[s].resource.validated=i.ValidatedOptions.default,e}));else{var n=v(e);void 0!==n?t((function(e){return e[s].resource.validated=i.ValidatedOptions.error,e[s].resource.errorMessage=n,e})):void 0!==e&&t((function(e){return e[s].resource.validated=i.ValidatedOptions.default,e}))}}})},j=function(e){var n=e.acl,a=e.row;return r().createElement(h,{options:(0,o.mv)().map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:n.permission,setSelected:b,row:a,id:"permission-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().permission.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].permission.validated=i.ValidatedOptions.error,n[a].permission.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):n[a].permission.validated=i.ValidatedOptions.default,n}))}})},D=function(e){var n=e.acl,a=e.row;return r().createElement(h,{options:(0,o.G6)().filter((function(e){if(void 0===n.resourceType.value||""===n.resourceType.value.toString())return!0;var t=(0,E.snakeCase)(n.resourceType.value.toString()),a=(0,E.snakeCase)(e);return p[t].some((function(e){return e===a}))})).map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:n.operation,setSelected:w,row:a,id:"operation",placeholder:g("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().operation.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].operation.validated=i.ValidatedOptions.error,n[a].operation.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):n[a].operation.validated=i.ValidatedOptions.default,n}))}})},G=function(e){var a=e.row,s=e.acl;return r().createElement(i.Tooltip,{content:g("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},r().createElement(i.Button,{variant:"link",icon:r().createElement(k.ZP,null),onClick:function(){return function(e){t((function(n){return n.length>1?n.filter((function(n,t){return t!==e})):[C()]}))}(a)},isDisabled:!x(s,n.length)}))};return r().createElement("div",null,r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.h2},g("permission.manage_permissions_dialog.assign_permissions.title")),r().createElement(i.Text,{component:i.TextVariants.small},"*"===c?g("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):g("permission.manage_permissions_dialog.assign_permissions.help",{account_id:c})),r().createElement(i.Text,{component:i.TextVariants.small},g("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required"))),r().createElement(f.w,{tableProps:{cells:y,rows:n.map((function(e,n){return{cells:[{title:r().createElement(L,{row:n,acl:e})},{title:r().createElement(R,{row:n,acl:e})},{title:r().createElement(B,{acl:e,row:n})},{title:r().createElement(j,{acl:e,row:n})},{title:r().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between"},r().createElement("div",null,r().createElement(D,{acl:e,row:n})),r().createElement("div",null,r().createElement(G,{acl:e,row:n})))}]}})),"aria-label":g("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),r().createElement(i.ActionList,null,r().createElement(i.ActionListItem,null,r().createElement(i.Button,{variant:"link",icon:r().createElement(O.ZP,null),onClick:function(){t((function(e){return P(P([],e,!0),[C()],!1)}))}},g("permission.manage_permissions_dialog.assign_permissions.add_row")))))},I=t(4055),N=t(74292),R=t(70251),L=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},B=function(e){var n=e.existingAcls,t=e.selectedAccountId,o=e.onRemove,l=(0,s.useTranslation)().t,c=(0,a.useState)([]),u=c[0],p=c[1];(0,a.useEffect)((function(){p(n.map((function(e,n){var t=e;return t.index=n,t})))}),[n]);var d=[{title:l("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(60)]},{title:l("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],m=[N.C8,N.ev,function(e){var n=function(){return r().createElement(i.Button,{variant:"link",icon:r().createElement(R.TrashIcon,null),onClick:function(){return n=e,p(u.map((function(e){return e.hash()===n.hash()&&(e.removed=!0),e}))),void o(n);var n}})},a=function(){return r().createElement(i.Label,{variant:"outline"},l("permission.table.all_accounts"))};return"*"===t&&"*"===e.principal?{title:r().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},r().createElement(a,null)," ",r().createElement(n,null)),props:{}}:"*"===e.principal?{title:r().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},r().createElement(a,null)),props:{}}:{title:r().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end"},r().createElement(n,null)),props:{}}}];if(void 0===t||0===u.length)return r().createElement(r().Fragment,null);return r().createElement("div",null,r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.h2},l("permission.manage_permissions_dialog.edit_existing.title")),r().createElement(i.Text,{component:i.TextVariants.small},r().createElement((function(){return"*"===t?l("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):r().createElement(s.Trans,{i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},"Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",r().createElement("strong",null,"All accounts")," cannot be removed when an individual account ID is selected.")}),null))),r().createElement(f.w,{tableProps:{cells:d,rows:L([],u.filter((function(e){return!e.removed})).map((function(e,n){return{cells:m.map((function(t){return t(e,n)})),originalData:e}})),!0),"aria-label":l("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}))},j=function(e){var n=e.isOpen,t=e.closeModal,a=e.resumeEditing,o=(0,s.useTranslation)().t;return r().createElement(i.Modal,{id:"manage-permissions-precancel-modal",variant:i.ModalVariant.small,isOpen:n,"aria-label":o("permission.manage_permissions_pre_cancel_dialog.aria_label"),title:"".concat(o("permission.manage_permissions_pre_cancel_dialog.discard_changes"),"?"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:t,onEscapePress:t,actions:[r().createElement(i.Button,{onClick:t,key:1,variant:i.ButtonVariant.primary},o("permission.manage_permissions_pre_cancel_dialog.discard_changes")),r().createElement(i.Button,{onClick:a,key:2,variant:i.ButtonVariant.secondary},o("permission.manage_permissions_pre_cancel_dialog.resume_editing"))]},o("permission.manage_permissions_pre_cancel_dialog.modal_description"))},D=function(){return D=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},D.apply(this,arguments)},G=function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function s(e){try{l(a.next(e))}catch(e){i(e)}}function o(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}l((a=a.apply(e,n||[])).next())}))},F=function(e,n){var t,a,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},W=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},q=function(e){var n=e.hideModal,t=e.onSave,i=e.kafkaName,s=e.selectedAccountId,c=e.acls,u=e.topicNames,p=e.consumerGroupIds,d=e.title,m=e.variant,_=(0,a.useContext)(l.E),f=(0,o.qK)(_),v=(0,a.useState)(),g=v[0],y=v[1];return(0,a.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return F(this,(function(n){switch(n.label){case 0:return[4,f.getResourceOperations()];case 1:return e=n.sent(),y(e),[2]}}))}))}),[]),r().createElement(H,{topicNames:u,consumerGroupIds:p,acls:c,resourceOperations:g,hideModal:n,selectedAccountId:s,onSave:t,kafkaName:i,variant:m,title:d})},H=function(e){var n=e.hideModal,t=e.onSave,_=e.kafkaName,f=e.selectedAccountId,v=e.acls,g=e.topicNames,y=e.consumerGroupIds,h=e.resourceOperations,T=e.title,E=e.variant,b=(0,s.useTranslation)().t,w=((0,c.S)()||{}).kafka,A=(0,u.useAuth)(),O=(0,a.useState)({value:f,validated:void 0}),k=O[0],V=O[1],P=(0,a.useState)(void 0===f?1:2),N=P[0],R=P[1],L=(0,a.useState)([C()]),q=L[0],H=L[1],Q=(0,a.useState)([]),K=Q[0],U=Q[1],Z=(0,a.useState)(!1),$=Z[0],z=Z[1],J=(0,a.useRef)(!0),X=(0,S.N)().validateName,Y=(0,a.useState)(),ee=Y[0],ne=Y[1],te=(0,u.usePrincipals)(),ae=(0,a.useContext)(l.E),re=(0,o.qK)(ae);(0,a.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return F(this,(function(n){switch(n.label){case 0:return[4,null==A?void 0:A.getUsername()];case 1:return e=n.sent(),ne(e),[2]}}))}))}),[A]);var ie=function(){return G(void 0,void 0,void 0,(function(){var e,a,r,s,l,c;return F(this,(function(u){switch(u.label){case 0:if(e=!0,void 0===k.value?(V((function(e){return D(D({},e),{validated:i.ValidatedOptions.error,errorMessage:b("permission.manage_permissions_dialog.must_select_account_error")})})),e=!1):V((function(e){return D(D({},e),{validated:i.ValidatedOptions.default})})),H((function(n){return n.map((function(n){if(x(n)){var t=Object.assign({},n);if(void 0===n.resourceType.value?(t.resourceType.validated=i.ValidatedOptions.error,t.resourceType.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error"),e=!1):t.resourceType.validated=i.ValidatedOptions.default,n.resourceType.value!==m.AclResourceType.Cluster){if(void 0===n.resource.value)t.resource.validated=i.ValidatedOptions.error,t.resource.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error"),e=!1;else if("*"===n.resource.value)t.resource.validated=i.ValidatedOptions.default;else{var a=X(n.resource.value);void 0!==a?(t.resource.validated=i.ValidatedOptions.error,t.resource.errorMessage=a,e=!1):t.resource.validated=i.ValidatedOptions.default}void 0===n.patternType.value?(t.patternType.validated=i.ValidatedOptions.error,t.patternType.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error"),e=!1):t.patternType.validated=i.ValidatedOptions.default}return void 0===n.permission.value?(t.permission.validated=i.ValidatedOptions.error,t.permission.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error"),e=!1):t.permission.validated=i.ValidatedOptions.default,void 0===n.operation.value?(t.operation.validated=i.ValidatedOptions.error,t.operation.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error"),e=!1):t.operation.validated=i.ValidatedOptions.default,t}return n}))})),!e)return[3,11];a=0,r=q.filter((function(e){return x(e)})),u.label=1;case 1:if(!(a<r.length))return[3,4];if(void 0===(c=r[a]).resourceType.value)throw Error("resourceType must not be undefined");if(c.resourceType.value!==m.AclResourceType.Cluster){if(void 0===c.resource.value)throw Error("resource must not be undefined");if(void 0===c.patternType.value)throw Error("patternType must not be undefined")}else c.resource.value="kafka-cluster",c.patternType.value=m.AclPatternType.Literal;if(void 0===c.permission.value)throw Error("permission must not be undefined");if(void 0===c.operation.value)throw Error("operation must not be undefined");return[4,re.addPermission({resourceName:c.resource.value,patternType:c.patternType.value,permission:c.permission.value,resourceType:c.resourceType.value,operation:c.operation.value,principal:"User:".concat(k.value)})];case 2:u.sent(),u.label=3;case 3:return a++,[3,1];case 4:s=0,l=K,u.label=5;case 5:return s<l.length?(c=l[s],[4,re.deletePermission({resourceName:c.resourceName,patternType:(0,o.L2)(c.patternType,m.AclPatternTypeFilter),permissionType:(0,o.L2)(c.permission,m.AclPermissionTypeFilter),resourceType:(0,o.L2)(c.resourceType,m.AclResourceTypeFilter),operation:(0,o.L2)(c.operation,m.AclOperationFilter),principal:"User:".concat(k.value)})]):[3,8];case 6:u.sent(),u.label=7;case 7:return s++,[3,5];case 8:return t?[4,t()]:[3,10];case 9:u.sent(),u.label=10;case 10:n(),u.label=11;case 11:return[2]}}))}))},se=function(){if(2===N){if(void 0===h)return r().createElement(I.y,null);var e=document.getElementById("manage-permissions-modal")||void 0;return r().createElement(r().Fragment,null,r().createElement(B,{existingAcls:v.filter((function(e){return e.principal==="".concat(k.value)||"*"===e.principal})),selectedAccountId:k.value,onRemove:function(e){return U((function(n){return W(W([],n,!0),[e],!1)}))}}),r().createElement(M,{acls:q,setAcls:H,topicNames:g,consumerGroupIds:y,selectedAccount:k.value,setEscapeClosesModal:ce,resourceOperations:h,menuAppendTo:e}))}return r().createElement(r().Fragment,null)},oe=te.getAllPrincipals().filter((function(e){return e.id!==ee&&e.id!==(null==w?void 0:w.owner)})),le=function(){return 1===N?r().createElement(d,{id:k,setId:V,initialOptions:oe,setEscapeClosesModal:ce}):r().createElement(p.Q,{labelHead:b("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:b("permission.manage_permissions_dialog.account_id_title"),labelBody:b("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:b("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},"*"===k.value?b("permission.manage_permissions_dialog.all_accounts_title"):k.value)},ce=function(e){J.current=e},ue=!q.some((function(e){return x(e)||K.length>0})),pe=function(){2!==N||ue?n():z(!0)};return r().createElement(i.Modal,{id:"manage-permissions-modal",variant:E,isOpen:!0,"aria-label":b("permission.manage_permissions_dialog.aria_label"),position:"top",title:T,showClose:!0,"aria-describedby":"modal-message",onClose:pe,onEscapePress:function(){J.current&&n()},actions:[r().createElement((function(){return 1===N?r().createElement(i.Button,{variant:"primary",onClick:function(){return R(2)},isDisabled:void 0===k.value},b("permission.manage_permissions_dialog.step_1_submit_button")):r().createElement(i.Button,{variant:"primary",onClick:ie,key:1,isDisabled:ue},b("permission.manage_permissions_dialog.step_2_submit_button"))}),{key:1}),r().createElement(i.Button,{onClick:pe,key:2,variant:"secondary"},b("permission.manage_permissions_dialog.cancel_button"))]},r().createElement(j,{isOpen:$,closeModal:function(){z(!1),n()},resumeEditing:function(){z(!1)}}),r().createElement((function(){return r().createElement(i.Form,null,r().createElement(i.FormGroup,{fieldId:"kafka-instance-name",label:b("permission.manage_permissions_dialog.kafka_instance_title")},_),r().createElement(le,null),r().createElement(se,null))}),null))};const Q=q},56637:(e,n,t)=>{t.d(n,{N:()=>r});var a=t(31521),r=function(){var e=(0,a.useTranslation)().t;return{validateName:function(n){var t=new RegExp("^[a-zA-Z0-9._-]+$");return n.length&&!t.test(n)?e("topic.topic_name_helper_text"):n.length>249?e("topic.cannot_exceed_characters"):"."===n||".."===n?e("topic.invalid_name_with_dot"):void 0}}}}}]);
//# sourceMappingURL=7214.5329dfe0.js.map
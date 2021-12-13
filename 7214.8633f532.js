"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7214],{41272:(e,n,t)=>{t.d(n,{Q:()=>o});var a=t(84669),i=t(34046),r=t(75418),s=t.n(r),o=function(e){var n=e.children,t=e.labelHead,r=e.fieldId,o=e.fieldLabel,l=e.labelBody,c=e.buttonAriaLabel,u=e.validated,p=e.helperText,d=e.helperTextInvalid,m=e.isRequired;return s().createElement(a.FormGroup,{fieldId:r,label:o,validated:u,helperText:p,helperTextInvalid:d,isRequired:m,labelIcon:s().createElement(a.Popover,{headerContent:s().createElement("div",null,t),bodyContent:s().createElement("div",null,l)},s().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},s().createElement(i.ZP,{noVerticalAlign:!0})))},n)}},4055:(e,n,t)=>{t.d(n,{y:()=>o});var a=t(75418),i=t.n(a),r=t(84669),s=function(){return s=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},o=function(e){var n=e.bullseyeProps,t=e.spinnerProps;return i().createElement(r.Bullseye,s({},n),i().createElement(r.Spinner,s({},t)))}},36932:(e,n,t)=>{t.r(n),t.d(n,{ManagePermissions:()=>q,ManagePermissionsModal:()=>H,default:()=>Q});var a=t(75418),i=t.n(a),r=t(84669),s=t(31521),o=t(76621),l=t(3654),c=t(64517),u=t(46332),p=t(41272),d=function(e){var n=e.setId,t=e.id,o=e.initialOptions,l=e.setEscapeClosesModal,c=(0,s.useTranslation)().t,d=(0,a.useState)(!1),m=d[0],_=d[1],f=function(){n({value:void 0,validated:void 0}),_(!1)},v=[i().createElement(r.SelectGroup,{key:"all_accounts_group"},i().createElement(r.SelectOption,{key:"*",value:"*",description:c("permission.manage_permissions_dialog.all_accounts_description")},c("permission.manage_permissions_dialog.all_accounts_title"))),i().createElement(r.Divider,{key:"divider"}),i().createElement(r.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_service_account_group"),key:"service_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.ServiceAccount})).sort((function(e,n){return e.displayName&&n.displayName?e.displayName.localeCompare(n.displayName):-1})).map((function(e,n){return i().createElement(r.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)}))),i().createElement(r.Divider,{key:"divider"}),i().createElement(r.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_user_account_group"),key:"user_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.UserAccount})).map((function(e,n){return i().createElement(r.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)})))];return i().createElement(p.Q,{labelHead:c("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:c("permission.manage_permissions_dialog.account_id_title"),labelBody:c("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:c("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:t.errorMessage,validated:t.validated||r.ValidatedOptions.default},i().createElement(r.Select,{variant:r.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:c("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:function(e){l(!e),_(e)},onSelect:function(e,t,a){""===t&&(t=void 0),a?f():n((function(){return void 0===t?{value:t,validated:r.ValidatedOptions.error,errorMessage:c("permission.manage_permissions_dialog.must_select_account_error")}:{validated:r.ValidatedOptions.default,value:t}})),_(!1)},onClear:f,selections:t.value,onFilter:function(e,n){if(!n)return v;var t=new RegExp(n,"i");return v.filter((function(e){return Array.isArray(e.props.children)})).map((function(e){return e.props.children.filter((function(e){return t.test(e.props.value)||t.test(e.props.description)}))}))},isOpen:m,isInputValuePersisted:!0,placeholderText:c("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:t.validated||r.ValidatedOptions.default,isGrouped:!0},v))},m=t(23587),_=t(27577),f=t(28942),v=t(80887),g=t(77221),y=function(){return y=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},y.apply(this,arguments)},h=function(e){var n=e.options,t=e.setSelected,o=e.selected,l=e.row,c=e.id,u=e.placeholder,d=e.setEscapeClosesModal,m=e.onSelect,_=e.menuAppendTo,f=e.onClear,h=(0,s.useTranslation)().t,T=(0,a.useState)(!1),E=T[0],b=T[1];return i().createElement(p.Q,{labelHead:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:h("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||r.ValidatedOptions.default},i().createElement(v.P,{variant:r.SelectVariant.single,onToggle:function(e){d(!e),b(e)},onSelect:function(e,n,a){""===n&&(n=void 0),a?(t(l,f()),b(!1)):(t(l,n),b(!1),m(n))},selections:o.value,isOpen:E,isInputValuePersisted:!0,placeholderText:u,validated:o.validated||r.ValidatedOptions.default,menuAppendTo:_,maxHeight:200,direction:"up"},n.map((function(e,n){return i().createElement(g.SelectOption,y({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}),e.title)}))))},T=t(73866),E=t(54283),b=function(){return b=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},b.apply(this,arguments)},w=function(e,n,t){if(t||2===arguments.length)for(var a,i=0,r=n.length;i<r;i++)!a&&i in n||(a||(a=Array.prototype.slice.call(n,0,i)),a[i]=n[i]);return e.concat(a||Array.prototype.slice.call(n))},A=function(e){var n=e.row,t=e.setValue,o=e.value,l=e.initialOptions,c=e.id,u=e.placeholder,d=e.onSelect,m=e.setEscapeClosesModal,_=e.menuAppendTo,f=(0,s.useTranslation)().t,v=(0,a.useState)(!1),g=v[0],y=v[1],h=(0,a.useState)([]),T=h[0],E=h[1];(0,a.useEffect)((function(){E(l().map((function(e){return{value:e}})))}),[l]);var A=function(){t(n,void 0),y(!1)};return i().createElement(p.Q,{labelHead:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:f("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||r.ValidatedOptions.default},i().createElement(r.Select,{variant:r.SelectVariant.typeahead,typeAheadAriaLabel:f("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:function(e){m(!e),y(e)},className:"pf-u-pr-lg-on-lg",onSelect:function(e,a,i){""===a&&(a=void 0),i?A():(t(n,a),y(!1),d(a))},onClear:A,selections:o.value,isOpen:g,isInputValuePersisted:!0,placeholderText:u,isCreatable:!0,onCreateOption:function(e){E(w(w([],T,!0),[{value:e}],!1))},createText:f("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:o.validated||r.ValidatedOptions.default,menuAppendTo:_,maxHeight:200,direction:"up"},T.map((function(e,n){return i().createElement(r.SelectOption,b({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}))}))))},O=t(20777),k=t(90966),x=function(e,n){void 0===n&&(n=0);var t=C();return!(e.permission.value===t.permission.value&&e.patternType.value===t.patternType.value&&e.resourceType.value===t.resourceType.value&&e.resource.value===t.resource.value&&e.operation.value===t.operation.value&&n<=1)},C=function(){return{permission:{value:m.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:m.AclPatternType.Prefixed},resource:{value:void 0}}},V=t(87892),S=t(56637),P=function(e,n,t){if(t||2===arguments.length)for(var a,i=0,r=n.length;i<r;i++)!a&&i in n||(a||(a=Array.prototype.slice.call(n,0,i)),a[i]=n[i]);return e.concat(a||Array.prototype.slice.call(n))},M=function(e){var n=e.acls,t=e.setAcls,a=e.topicNames,l=e.consumerGroupIds,c=e.selectedAccount,u=e.setEscapeClosesModal,p=e.resourceOperations,d=e.menuAppendTo,v=(0,S.N)().validateName,g=(0,s.useTranslation)().t,y=[{title:g("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(25)]},{title:g("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],b=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.permission={value:n}),t}))}))},w=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.operation={value:n}),t}))}))},M=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.resourceType={value:n}),t}))}))},I=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.patternType={value:n}),t}))}))},N=function(e,n){t((function(t){return t.map((function(t,a){return a===e&&(t.resource={value:n}),t}))}))},R=function(e){var n=e.acl,a=e.row;return n.resourceType.value===m.AclResourceType.Cluster?i().createElement(i().Fragment,null):i().createElement(h,{options:(0,o.t)().map((function(e){return{value:e,title:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}})).sort((function(e,n){return n.value.localeCompare(e.value)})),selected:n.patternType,setSelected:I,row:a,id:"pattern-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().patternType.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].patternType.validated=r.ValidatedOptions.error,n[a].patternType.validated=g("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):n[a].patternType.validated=r.ValidatedOptions.default,n}))}})},L=function(e){var n=e.row,a=e.acl;return i().createElement(h,{options:(0,o.yN)().map((function(e){return{value:e,title:(0,V.s)(e)}})),selected:a.resourceType,setSelected:M,row:n,id:"resource-type",placeholder:g("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().resourceType.value},onSelect:function(e){t((function(t){return void 0===e?(t[n].resourceType.validated=r.ValidatedOptions.error,t[n].resourceType.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):t[n].resourceType.validated=r.ValidatedOptions.default,t}))}})},B=function(e){var n,s=e.row,o=e.acl;return o.resourceType.value===m.AclResourceType.Cluster?i().createElement(i().Fragment,null):i().createElement(A,{row:s,value:o.resource,setValue:N,id:"resource",placeholder:g("permission.manage_permissions_dialog.assign_permissions.pattern_type_".concat((null===(n=o.patternType.value)||void 0===n?void 0:n.toLowerCase())||"prefixed","_placeholder")),setEscapeClosesModal:u,menuAppendTo:d,initialOptions:function(){return o.resourceType.value===m.AclResourceType.Topic?a:o.resourceType.value===m.AclResourceType.Group?l:[]},onSelect:function(e){if("*"===e)t((function(e){return e[s].resource.validated=r.ValidatedOptions.default,e}));else{var n=v(e);void 0!==n?t((function(e){return e[s].resource.validated=r.ValidatedOptions.error,e[s].resource.errorMessage=n,e})):void 0!==e&&t((function(e){return e[s].resource.validated=r.ValidatedOptions.default,e}))}}})},j=function(e){var n=e.acl,a=e.row;return i().createElement(h,{options:(0,o.mv)().map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:n.permission,setSelected:b,row:a,id:"permission-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().permission.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].permission.validated=r.ValidatedOptions.error,n[a].permission.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):n[a].permission.validated=r.ValidatedOptions.default,n}))}})},D=function(e){var n=e.acl,a=e.row;return i().createElement(h,{options:(0,o.G6)().filter((function(e){if(void 0===n.resourceType.value||""===n.resourceType.value.toString())return!0;var t=(0,E.snakeCase)(n.resourceType.value.toString()),a=(0,E.snakeCase)(e);return p[t].some((function(e){return e===a}))})).map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:n.operation,setSelected:w,row:a,id:"operation",placeholder:g("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().operation.value},onSelect:function(e){t((function(n){return void 0===e?(n[a].operation.validated=r.ValidatedOptions.error,n[a].operation.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):n[a].operation.validated=r.ValidatedOptions.default,n}))}})},G=function(e){var a=e.row,s=e.acl;return i().createElement(r.Tooltip,{content:g("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},i().createElement(r.Button,{variant:"link",icon:i().createElement(k.ZP,null),onClick:function(){return function(e){t((function(n){return n.length>1?n.filter((function(n,t){return t!==e})):[C()]}))}(a)},isDisabled:!x(s,n.length)}))};return i().createElement("div",null,i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},g("permission.manage_permissions_dialog.assign_permissions.title")),i().createElement(r.Text,{component:r.TextVariants.small},"*"===c?g("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):g("permission.manage_permissions_dialog.assign_permissions.help",{account_id:c})),i().createElement(r.Text,{component:r.TextVariants.small},g("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required"))),i().createElement(f.w,{tableProps:{cells:y,rows:n.map((function(e,n){return{cells:[{title:i().createElement(L,{row:n,acl:e})},{title:i().createElement(R,{row:n,acl:e})},{title:i().createElement(B,{acl:e,row:n})},{title:i().createElement(j,{acl:e,row:n})},{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between"},i().createElement("div",null,i().createElement(D,{acl:e,row:n})),i().createElement("div",null,i().createElement(G,{acl:e,row:n})))}]}})),"aria-label":g("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),i().createElement(r.ActionList,null,i().createElement(r.ActionListItem,null,i().createElement(r.Button,{variant:"link",icon:i().createElement(O.ZP,null),onClick:function(){t((function(e){return P(P([],e,!0),[C()],!1)}))}},g("permission.manage_permissions_dialog.assign_permissions.add_row")))))},I=t(4055),N=t(74292),R=t(70251),L=function(e,n,t){if(t||2===arguments.length)for(var a,i=0,r=n.length;i<r;i++)!a&&i in n||(a||(a=Array.prototype.slice.call(n,0,i)),a[i]=n[i]);return e.concat(a||Array.prototype.slice.call(n))},B=function(e){var n=e.existingAcls,t=e.selectedAccountId,o=e.onRemove,l=(0,s.useTranslation)().t,c=(0,a.useState)([]),u=c[0],p=c[1];(0,a.useEffect)((function(){p(n.map((function(e,n){var t=e;return t.index=n,t})))}),[n]);var d=[{title:l("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(60)]},{title:l("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],m=[N.C8,N.ev,function(e){var n=function(){return i().createElement(r.Button,{variant:"link",icon:i().createElement(R.TrashIcon,null),onClick:function(){return n=e,p(u.map((function(e){return e.hash()===n.hash()&&(e.removed=!0),e}))),void o(n);var n}})},a=function(){return i().createElement(r.Label,{variant:"outline"},l("permission.table.all_accounts"))};return"*"===t&&"*"===e.principal?{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},i().createElement(a,null)," ",i().createElement(n,null)),props:{}}:"*"===e.principal?{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},i().createElement(a,null)),props:{}}:{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end"},i().createElement(n,null)),props:{}}}];if(void 0===t||0===u.length)return i().createElement(i().Fragment,null);return i().createElement("div",null,i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},l("permission.manage_permissions_dialog.edit_existing.title")),i().createElement(r.Text,{component:r.TextVariants.small},i().createElement((function(){return"*"===t?l("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):i().createElement(s.Trans,{i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},"Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",i().createElement("strong",null,"All accounts")," cannot be removed when an individual account ID is selected.")}),null))),i().createElement(f.w,{tableProps:{cells:d,rows:L([],u.filter((function(e){return!e.removed})).map((function(e,n){return{cells:m.map((function(t){return t(e,n)})),originalData:e}})),!0),"aria-label":l("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}))},j=function(e){var n=e.isOpen,t=e.closeModal,a=e.resumeEditing,o=(0,s.useTranslation)().t;return i().createElement(r.Modal,{id:"manage-permissions-precancel-modal",variant:r.ModalVariant.small,isOpen:n,"aria-label":o("permission.manage_permissions_pre_cancel_dialog.aria_label"),title:"".concat(o("permission.manage_permissions_pre_cancel_dialog.discard_changes"),"?"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:t,onEscapePress:t,actions:[i().createElement(r.Button,{onClick:t,key:1,variant:r.ButtonVariant.primary},o("permission.manage_permissions_pre_cancel_dialog.discard_changes")),i().createElement(r.Button,{onClick:a,key:2,variant:r.ButtonVariant.secondary},o("permission.manage_permissions_pre_cancel_dialog.resume_editing"))]},o("permission.manage_permissions_pre_cancel_dialog.modal_description"))},D=function(){return D=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},D.apply(this,arguments)},G=function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function o(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}l((a=a.apply(e,n||[])).next())}))},F=function(e,n){var t,a,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,a=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(e,s)}catch(e){r=[6,e],a=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},W=function(e,n,t){if(t||2===arguments.length)for(var a,i=0,r=n.length;i<r;i++)!a&&i in n||(a||(a=Array.prototype.slice.call(n,0,i)),a[i]=n[i]);return e.concat(a||Array.prototype.slice.call(n))},q=function(e){var n=e.hideModal,t=e.onSave,r=e.kafkaName,s=e.selectedAccountId,c=e.acls,u=e.topicNames,p=e.consumerGroupIds,d=e.title,m=e.variant,_=(0,a.useContext)(l.E),f=(0,o.qK)(_),v=(0,a.useState)(),g=v[0],y=v[1];return(0,a.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return F(this,(function(n){switch(n.label){case 0:return[4,f.getResourceOperations()];case 1:return e=n.sent(),y(e),[2]}}))}))}),[]),i().createElement(H,{topicNames:u,consumerGroupIds:p,acls:c,resourceOperations:g,hideModal:n,selectedAccountId:s,onSave:t,kafkaName:r,variant:m,title:d})},H=function(e){var n=e.hideModal,t=e.onSave,_=e.kafkaName,f=e.selectedAccountId,v=e.acls,g=e.topicNames,y=e.consumerGroupIds,h=e.resourceOperations,T=e.title,E=e.variant,b=(0,s.useTranslation)().t,w=((0,c.S)()||{}).kafka,A=(0,u.useAuth)(),O=(0,a.useState)({value:f,validated:void 0}),k=O[0],V=O[1],P=(0,a.useState)(void 0===f?1:2),N=P[0],R=P[1],L=(0,a.useState)([C()]),q=L[0],H=L[1],Q=(0,a.useState)([]),K=Q[0],U=Q[1],Z=(0,a.useState)(!1),$=Z[0],z=Z[1],J=(0,a.useRef)(!0),X=(0,S.N)().validateName,Y=(0,a.useState)(),ee=Y[0],ne=Y[1],te=(0,u.usePrincipals)(),ae=(0,a.useContext)(l.E),ie=(0,o.qK)(ae);(0,a.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return F(this,(function(n){switch(n.label){case 0:return[4,null==A?void 0:A.getUsername()];case 1:return e=n.sent(),ne(e),[2]}}))}))}),[A]);var re=function(){return G(void 0,void 0,void 0,(function(){var e,a,i,s,l,c;return F(this,(function(u){switch(u.label){case 0:if(e=!0,void 0===k.value?(V((function(e){return D(D({},e),{validated:r.ValidatedOptions.error,errorMessage:b("permission.manage_permissions_dialog.must_select_account_error")})})),e=!1):V((function(e){return D(D({},e),{validated:r.ValidatedOptions.default})})),H((function(n){return n.map((function(n){if(x(n)){var t=Object.assign({},n);if(void 0===n.resourceType.value?(t.resourceType.validated=r.ValidatedOptions.error,t.resourceType.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error"),e=!1):t.resourceType.validated=r.ValidatedOptions.default,n.resourceType.value!==m.AclResourceType.Cluster){if(void 0===n.resource.value)t.resource.validated=r.ValidatedOptions.error,t.resource.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error"),e=!1;else if("*"===n.resource.value)t.resource.validated=r.ValidatedOptions.default;else{var a=X(n.resource.value);void 0!==a?(t.resource.validated=r.ValidatedOptions.error,t.resource.errorMessage=a,e=!1):t.resource.validated=r.ValidatedOptions.default}void 0===n.patternType.value?(t.patternType.validated=r.ValidatedOptions.error,t.patternType.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error"),e=!1):t.patternType.validated=r.ValidatedOptions.default}return void 0===n.permission.value?(t.permission.validated=r.ValidatedOptions.error,t.permission.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error"),e=!1):t.permission.validated=r.ValidatedOptions.default,void 0===n.operation.value?(t.operation.validated=r.ValidatedOptions.error,t.operation.errorMessage=b("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error"),e=!1):t.operation.validated=r.ValidatedOptions.default,t}return n}))})),!e)return[3,11];a=0,i=q.filter((function(e){return x(e)})),u.label=1;case 1:if(!(a<i.length))return[3,4];if(void 0===(c=i[a]).resourceType.value)throw Error("resourceType must not be undefined");if(c.resourceType.value!==m.AclResourceType.Cluster){if(void 0===c.resource.value)throw Error("resource must not be undefined");if(void 0===c.patternType.value)throw Error("patternType must not be undefined")}else c.resource.value="kafka-cluster",c.patternType.value=m.AclPatternType.Literal;if(void 0===c.permission.value)throw Error("permission must not be undefined");if(void 0===c.operation.value)throw Error("operation must not be undefined");return[4,ie.addPermission({resourceName:c.resource.value,patternType:c.patternType.value,permission:c.permission.value,resourceType:c.resourceType.value,operation:c.operation.value,principal:"User:".concat(k.value)})];case 2:u.sent(),u.label=3;case 3:return a++,[3,1];case 4:s=0,l=K,u.label=5;case 5:return s<l.length?(c=l[s],[4,ie.deletePermission({resourceName:c.resourceName,patternType:(0,o.L2)(c.patternType,m.AclPatternTypeFilter),permissionType:(0,o.L2)(c.permission,m.AclPermissionTypeFilter),resourceType:(0,o.L2)(c.resourceType,m.AclResourceTypeFilter),operation:(0,o.L2)(c.operation,m.AclOperationFilter),principal:"User:".concat(k.value)})]):[3,8];case 6:u.sent(),u.label=7;case 7:return s++,[3,5];case 8:return t?[4,t()]:[3,10];case 9:u.sent(),u.label=10;case 10:n(),u.label=11;case 11:return[2]}}))}))},se=function(){if(2===N){if(void 0===h)return i().createElement(I.y,null);var e=document.getElementById("manage-permissions-modal")||void 0;return i().createElement(i().Fragment,null,i().createElement(B,{existingAcls:v.filter((function(e){return e.principal==="".concat(k.value)||"*"===e.principal})),selectedAccountId:k.value,onRemove:function(e){return U((function(n){return W(W([],n,!0),[e],!1)}))}}),i().createElement(M,{acls:q,setAcls:H,topicNames:g,consumerGroupIds:y,selectedAccount:k.value,setEscapeClosesModal:ce,resourceOperations:h,menuAppendTo:e}))}return i().createElement(i().Fragment,null)},oe=te.getAllPrincipals().filter((function(e){return e.id!==ee&&e.id!==(null==w?void 0:w.owner)})),le=function(){return 1===N?i().createElement(d,{id:k,setId:V,initialOptions:oe,setEscapeClosesModal:ce}):i().createElement(p.Q,{labelHead:b("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:b("permission.manage_permissions_dialog.account_id_title"),labelBody:b("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:b("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},"*"===k.value?b("permission.manage_permissions_dialog.all_accounts_title"):k.value)},ce=function(e){J.current=e},ue=!q.some((function(e){return x(e)||K.length>0})),pe=function(){2!==N||ue?n():z(!0)};return i().createElement(r.Modal,{id:"manage-permissions-modal",variant:E,isOpen:!0,"aria-label":b("permission.manage_permissions_dialog.aria_label"),position:"top",title:T,showClose:!0,"aria-describedby":"modal-message",onClose:pe,onEscapePress:function(){J.current&&n()},actions:[i().createElement((function(){return 1===N?i().createElement(r.Button,{variant:"primary",onClick:function(){return R(2)},isDisabled:void 0===k.value},b("permission.manage_permissions_dialog.step_1_submit_button")):i().createElement(r.Button,{variant:"primary",onClick:re,key:1,isDisabled:ue},b("permission.manage_permissions_dialog.step_2_submit_button"))}),{key:1}),i().createElement(r.Button,{onClick:pe,key:2,variant:"secondary"},b("permission.manage_permissions_dialog.cancel_button"))]},i().createElement(j,{isOpen:$,closeModal:function(){z(!1),n()},resumeEditing:function(){z(!1)}}),i().createElement((function(){return i().createElement(r.Form,null,i().createElement(r.FormGroup,{fieldId:"kafka-instance-name",label:b("permission.manage_permissions_dialog.kafka_instance_title")},_),i().createElement(le,null),i().createElement(se,null))}),null))};const Q=q},56637:(e,n,t)=>{t.d(n,{N:()=>i});var a=t(31521),i=function(){var e=(0,a.useTranslation)().t;return{validateName:function(n){var t=new RegExp("^[a-zA-Z0-9._-]+$");return n.length&&!t.test(n)?e("topic.topic_name_helper_text"):n.length>249?e("topic.cannot_exceed_characters"):"."===n||".."===n?e("topic.invalid_name_with_dot"):void 0}}}}}]);
//# sourceMappingURL=7214.8633f532.js.map
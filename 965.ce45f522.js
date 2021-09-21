"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[965],{28942:(e,r,t)=>{t.d(r,{w:()=>y});var n=t(75418),a=t.n(n),o=t(27577),c=t(38296),l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},l.apply(this,arguments)},i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},s=(0,n.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=s.Provider,p=function(e){var r=(0,n.useContext)(s),t=r.activeRow,o=r.onRowClick,u=r.rowDataTestId,p=e||{},f=p.trRef,m=p.className,y=p.rowProps,d=p.row,v=i(p,["trRef","className","rowProps","row"]),b=(y||{}).rowIndex,T=d||{},w=T.isExpanded,h=T.originalData;return a().createElement("tr",l({"data-testid":u,tabIndex:0,ref:"function"==typeof f?void 0:f,className:(0,c.css)(m,"pf-c-table-row__item",t&&t===(null==h?void 0:h.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==w&&!w,onClick:function(e){return o&&o(e,b,d)}},v))},f=function(){return f=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},f.apply(this,arguments)},m=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},y=function(e){var r=e.tableProps,t=e.tableHeaderProps,n=e.tableBodyProps,l=e.children,i=e.activeRow,s=e.onRowClick,y=e.rowDataTestId,d=e.loggedInUser,v=r.cells,b=r.rows,T=r.actionResolver,w=r.onSort,h=r.sortBy,g=r["aria-label"],E=r.variant,P=r.className,O=r.shouldDefaultCustomRowWrapper,C=void 0!==O&&O,A=m(r,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return C&&(A.rowWrapper=p),a().createElement(u,{value:{activeRow:i,onRowClick:s,rowDataTestId:y,loggedInUser:d}},a().createElement(o.Table,f({className:(0,c.css)(C&&"mas--table-view__table",P),cells:v,variant:E,rows:b,"aria-label":g,actionResolver:T,onSort:w,sortBy:h},A),a().createElement(o.TableHeader,f({},t)),a().createElement(o.TableBody,f({},n)),l))}},58785:(e,r,t)=>{t.d(r,{ev:()=>v,QG:()=>d,C8:()=>b});var n=t(11593),a=t(70251),o=t(70853),c=t(84669),l=t(75418),i=t.n(l),s=t(87468),u=t(73866),p=t(87892),f=function(e){var r=e.variant,t=function(){switch(r){case o.AclResourceType.Group:return{colorClass:"pf-m-green",content:"G"};case o.AclResourceType.Cluster:return{colorClass:"",content:"KI"};case o.AclResourceType.Topic:return{colorClass:"pf-m-blue",content:"T"};case o.AclResourceType.TransactionalId:return{colorClass:"pf-m-orange",content:"TI"}}}(),n=t.colorClass,a=t.content;return i().createElement("span",{className:"pf-c-label "+n+" mas-m-solid"},i().createElement("span",{className:"pf-c-label__content"},a))},m=function(){var e=(0,n.useTranslation)().t;return i().createElement(i().Fragment,null,i().createElement(c.Label,{variant:"outline"},e("permission.table.all_accounts")))},y=function(e){var r=e.acl,t=(0,s.usePrincipals)().getAllPrincipals().filter((function(e){return e.id===r.principal}));return 1===t.length?t[0].principalType===s.PrincipalType.ServiceAccount?i().createElement(c.Tooltip,{content:i().createElement("div",null,"Type: ",t[0].principalType," ",i().createElement("br",null))},i().createElement("span",{tabIndex:0}," ",r.principal," ",i().createElement(a.InfoCircleIcon,{color:"grey"}))):i().createElement(c.Tooltip,{content:i().createElement("div",null,"Type: ",t[0].principalType," ",i().createElement("br",null),"Name: ",t[0].displayName," ",i().createElement("br",null),"Email: ",t[0].emailAddress)},i().createElement("span",{tabIndex:0}," ",r.principal," ",i().createElement(a.InfoCircleIcon,{color:"grey"}))):i().createElement("span",null," ",r.principal)},d=function(e){return"*"===e.principal?{title:i().createElement(m,null),props:{}}:{title:i().createElement(y,{acl:e}),props:{}}},v=function(e){return{title:i().createElement(c.LabelGroup,null,i().createElement(c.Label,{variant:"outline"},(0,u.sentenceCase)(e.permission)),i().createElement(c.Label,{variant:"outline",color:e.permission===o.AclPermissionType.Deny?"red":void 0},(0,u.sentenceCase)(e.operation))),props:{}}},b=function(e){return e.resourceType===o.AclResourceType.Cluster?{title:i().createElement(i().Fragment,null,i().createElement(f,{variant:e.resourceType})," ",(0,p.s)(e.resourceType))}:{title:i().createElement(i().Fragment,null,i().createElement(f,{variant:e.resourceType})," ",(0,p.s)(e.resourceType)," ",i().createElement((function(){var r=(0,n.useTranslation)().t;return e.patternType===o.AclPatternType.Prefixed?r("permission.cells.pattern_type_prefixed"):r("permission.cells.pattern_type_literal")}),null)," ",e.resourceName)}}},87892:(e,r,t)=>{t.d(r,{s:()=>o});var n=t(70853),a=t(73866),o=function(e){switch(e){case n.AclResourceType.Group:return"Consumer group";case n.AclResourceType.Topic:return"Topic";case n.AclResourceType.Cluster:return"Kafka instance";case n.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,a.sentenceCase)(e)}}},76621:(e,r,t)=>{t.d(r,{L2:()=>s,qK:()=>u,mv:()=>f,G6:()=>m,yN:()=>y,t:()=>d});var n=t(70853),a=t(45330),o=t.n(a),c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},c.apply(this,arguments)},l=function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function c(e){try{i(n.next(e))}catch(e){o(e)}}function l(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(c,l)}i((n=n.apply(e,r||[])).next())}))},i=function(e,r){var t,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=c.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=r.call(e,c)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},s=function(e,r){return(Object.entries(r).find((function(r){return r[1]===e.toString()}))||[])[1]},u=function(e){return{getPermissions:function(r,t,a){return l(void 0,void 0,Promise,(function(){var o,c;return i(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=l.sent(),[4,new n.AclsApi(new n.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getAcls(r.resourceType,r.resourceName,r.patternType,r.principal,r.operation,r.permissionType,a,t)];case 2:return c=l.sent(),[2,p(c)]}}))}))},addPermission:function(r){return l(void 0,void 0,void 0,(function(){var t;return i(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=a.sent(),[4,new n.AclsApi(new n.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).createAcl(r)];case 2:return a.sent(),[2]}}))}))},deletePermission:function(r){return l(void 0,void 0,void 0,(function(){var t;return i(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=a.sent(),[4,new n.AclsApi(new n.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).deleteAcls(r.resourceType,r.resourceName,r.patternType,r.principal,r.operation,r.permissionType)];case 2:return a.sent(),[2]}}))}))},getResourceOperations:function(){return l(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return r=t.sent(),[4,new n.AclsApi(new n.Configuration({accessToken:r,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((function(e){return e.data}))];case 2:return[2,t.sent()]}}))}))}}},p=function(e){var r;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(r=e.data.items)||void 0===r?void 0:r.map((function(e){return c(c({},e),{principal:e.principal.substring(5),toString:function(){return e.principal+" "+e.permission+" "+e.operation+" "+e.patternType+" "+e.resourceType+" "+e.resourceName},hash:function(){return o()(e)}})})).sort((function(e,r){return e.permission!==r.permission?"DENY"===e.permission?-1:1:e.principal!==r.principal?e.principal.localeCompare(r.principal):e.resourceType!==r.resourceType?e.resourceType.localeCompare(r.resourceType):e.resourceName!==r.resourceName?e.resourceName.localeCompare(r.resourceName):e.operation!==r.operation?e.operation.localeCompare(r.operation):0}))}},f=function(){return Object.values(n.AclPermissionType)},m=function(){return Object.values(n.AclOperation)},y=function(){return Object.values(n.AclResourceType)},d=function(){return Object.values(n.AclPatternType)}}}]);
//# sourceMappingURL=965.ce45f522.js.map
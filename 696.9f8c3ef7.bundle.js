(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[696],{6733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(5183).createIcon(t.Z1),t.ZP=t.TF},7955:(e,t,n)=>{"use strict";n.d(t,{g:()=>o});var r=n(7522),a=n.n(r),l=n(3004),o=function(){return a().createElement(l.Bullseye,null,a().createElement(l.Spinner,null))}},9058:(e,t,n)=>{"use strict";n.d(t,{K:()=>a});var r=n(7522),a=function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(null!==t){var e=setTimeout((function(){n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}},8794:(e,t,n)=>{"use strict";n.d(t,{B:()=>S});var r=n(7522),a=n.n(r),l=n(3004),o=n(6401),u=n(6733),c=function(){return a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.xl},a().createElement(l.EmptyStateIcon,{icon:u.ZP}),a().createElement(l.Title,{headingLevel:"h5",size:"4xl"},"No Consumer Groups Found"),a().createElement(l.EmptyStateBody,null,"You have No Consumer Groups"))},i=n(7887),s=n(7830),f=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function u(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},m=function(e,t,n,r){return f(void 0,void 0,void 0,(function(){var a;return d(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new i.M2(new s.VK({accessToken:a,basePath:null==e?void 0:e.basePath})).getConsumerGroupList(t,n,r)];case 2:return[2,l.sent().data]}}))}))},p=function(e,t){return f(void 0,void 0,void 0,(function(){var n;return d(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new i.M2(new s.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteConsumerGroupById(e)];case 2:return r.sent(),[2]}}))}))},h=function(e,t){return f(void 0,void 0,void 0,(function(){var n;return d(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new i.M2(new s.VK({accessToken:n,basePath:null==t?void 0:t.basePath})).getConsumerGroupById(e)];case 2:return[2,r.sent().data]}}))}))},v=function(e,t,n,r){return f(void 0,void 0,void 0,(function(){var a;return d(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new i.M2(new s.VK({accessToken:a,basePath:null==e?void 0:e.basePath})).getConsumerGroupList(t,n,r)];case 2:return[2,l.sent().data]}}))}))},b=n(9115),E=n(7955),y=n(3526),g=n(9058),w=function(e){var t=e.search,n=e.setSearch;return a().createElement(l.InputGroup,null,a().createElement(l.SearchInput,{name:"searchName",id:"search-consumers-input",type:"search","aria-label":"search input ",placeholder:"Search",value:t,onChange:function(e){n(e)},onClear:function(){n("")}}))},T=function(e){var t=e.setDeleteModal,n=e.deleteModal,o=e.consumerName,u=e.onDeleteConsumer,c=(0,r.useState)(""),i=c[0],s=c[1],f=(0,r.useContext)(y.w).addAlert,d=function(){t(!1)},m=(0,r.useContext)(b.E);return a().createElement(l.Modal,{variant:l.ModalVariant.small,isOpen:n,"aria-label":"Delete consumer group?",title:"Delete Consumer Group?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:d,actions:[a().createElement(l.Button,{variant:"danger",onClick:function(){return e=void 0,n=void 0,a=function(){var e;return function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),o?[4,p(o,m)]:[3,2];case 1:n.sent(),n.label=2;case 2:return f("Successfully deleted consumer group "+o,l.AlertVariant.success),[3,4];case 3:return e=n.sent(),f(e.response.data.error_message,l.AlertVariant.danger),[3,4];case 4:return u(),t(!1),[2]}}))},new((r=void 0)||(r=Promise))((function(t,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function u(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,u)}c((a=a.apply(e,n||[])).next())}));var e,n,r,a},key:1,isDisabled:"DELETE"!=i.toUpperCase()},"Delete"),a().createElement(l.Button,{variant:"link",onClick:d,key:2},"Cancel")]},a().createElement(l.Text,{id:"modal-message"},a().createElement("b",null,o)," will be deleted."," "),a().createElement("br",null),a().createElement("label",{htmlFor:"delete-text-input"},"Type DELETE to confirm:"),a().createElement(l.TextInput,{value:i,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:function(e){s(e)},autoFocus:!0}))},x=function(e){var t=e.setIsExpanded,n=e.consumerDetail,r=n&&n.consumers.map((function(e){return[e.partition,e.groupId+e.memberId,e.offset,e.logEndOffset,e.lag]}));return a().createElement(l.DrawerPanelContent,{widths:{default:"width_66"}},a().createElement(l.DrawerHead,null,a().createElement("span",null,a().createElement(l.TextContent,null,a().createElement(l.Text,null,"Consumer group ID"),a().createElement(l.Text,{component:l.TextVariants.h1},n&&n.groupId))),a().createElement(l.DrawerActions,null,a().createElement(l.DrawerCloseButton,{onClick:function(){t(!1)}}))),a().createElement(l.DrawerPanelBody,null,a().createElement(l.TextContent,null,a().createElement(l.Flex,null,a().createElement(l.FlexItem,null,a().createElement(l.Text,{component:l.TextVariants.h4,size:50},"Active members"),a().createElement(l.Text,{component:l.TextVariants.h2},n&&n.consumers.reduce((function(e,t){return e+t.partition!=-1?e+1:0}),0))),a().createElement(l.FlexItem,null,a().createElement(l.Text,{component:l.TextVariants.h4},"Partitions with lag"),a().createElement(l.Text,{component:l.TextVariants.h2},n&&n.consumers.reduce((function(e,t){return e+t.lag>0?e+1:0}),0)))))),a().createElement(o.Table,{"aria-label":"Compact Table",variant:o.TableVariant.compact,cells:["Partition","Client ID + Customer ID","Current offset","Log end offset","Offset lag",{title:"",dataLabel:"Action"}],rows:r},a().createElement(o.TableHeader,null),a().createElement(o.TableBody,null)))},C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},k=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function u(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},D=function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},S=function(e){var t,n=e.onDeleteConsumerGroup,u=e.consumerGroupByTopic,i=e.topic,s=e.rowDataId,f=e.detailsDataId,d=(0,r.useState)(1),p=d[0],S=d[1],I=(0,r.useState)(10),P=I[0],V=I[1],M=(0,r.useState)(0),B=M[0],G=M[1],A=(0,r.useState)(),F=A[0],L=A[1],z=(0,r.useState)(!0),O=z[0],_=z[1],K=(0,r.useState)(!1),N=K[0],H=K[1],Z=(0,r.useState)(""),j=Z[0],U=Z[1],R=(0,r.useState)(),Y=R[0],q=R[1],J=(0,r.useState)(),Q=J[0],W=J[1],X=(0,r.useState)(!1),$=X[0],ee=X[1],te=(0,r.useState)(),ne=te[0],re=te[1],ae=(0,r.useContext)(b.E),le=(0,r.useContext)(y.w).addAlert,oe=function(){return k(void 0,void 0,void 0,(function(){var e,t,n;return D(this,(function(r){switch(r.label){case 0:if(!u||!i)return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,v(ae,100,B,i)];case 2:return(t=r.sent())&&(L(t),re(t)),[3,4];case 3:return e=r.sent(),le(e.response.data.error_message,l.AlertVariant.danger),[3,4];case 4:return _(!1),[3,9];case 5:return r.trys.push([5,7,,8]),[4,m(ae)];case 6:return(t=r.sent())&&(L(t),re(t)),[3,8];case 7:return n=r.sent(),le(n.response.data.error_message,l.AlertVariant.danger),[3,8];case 8:_(!1),r.label=9;case 9:return[2]}}))}))};if((0,r.useEffect)((function(){_(!0),oe()}),[$]),(0,r.useEffect)((function(){if(j&&""!=j.trim()&&(null==F?void 0:F.items)&&F.items.length>0){var e=null==F?void 0:F.items.filter((function(e){return(null==e?void 0:e.groupId)&&e.groupId.includes(j)}));re((function(t){return t?C(C({},t),{items:e}):void 0}))}else re(F)}),[j]),(0,g.K)((function(){return oe()}),5e3),O)return a().createElement(E.g,null);var ue=function(e,t){S(t),G(p*P)},ce=function(e,t){V(t)},ie=[{title:"Consumer Group ID"},{title:"Active Members"},{title:"Partitions with lag"}],se=[(t={title:"Delete"},t["data-testid"]="tableConsumers-actionDelete",t.onClick=function(e,t){return function(e){(null==ne?void 0:ne.items)&&(W(ne.items[e].groupId),ee(!0))}(t)},t)],fe=a().createElement(x,{setIsExpanded:H,consumerDetail:Y}),de=(null==ne?void 0:ne.items.map((function(e){return[{title:a().createElement(l.Button,{variant:"link",isInline:!0,onClick:function(){return function(e){return k(void 0,void 0,void 0,(function(){var t,n;return D(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,h(e,ae)];case 1:return(t=r.sent())&&q(t),[3,3];case 2:return n=r.sent(),le(n.response.data.error_message,l.AlertVariant.danger),[3,3];case 3:return H(!0),[2]}}))}))}(e.groupId)},"data-testid":f||"tableConsumers-actionDetails"},e.groupId),props:{"data-testid":s||"tableConsumers-row"}},e.consumers.reduce((function(e,t){return e+t.partition!=-1?e+1:0}),0),e.consumers.reduce((function(e,t){return e+t.lag>0?e+1:0}),0)]})))||[];return a().createElement(a().Fragment,null,a().createElement(l.Card,null,$&&a().createElement(T,{consumerName:Q,setDeleteModal:ee,deleteModal:$,onDeleteConsumer:n}),a().createElement(l.Drawer,{isExpanded:N},a().createElement(l.DrawerContent,{panelContent:fe},a().createElement(l.Toolbar,null,a().createElement(l.ToolbarContent,null,a().createElement(l.ToolbarItem,null,a().createElement(w,{search:j,setSearch:U})),a().createElement(l.ToolbarItem,{variant:"pagination"},a().createElement(l.Pagination,{itemCount:de.length,perPage:P,page:p,onSetPage:ue,widgetId:"consumer-group-pagination-top",onPerPageSelect:ce})))),a().createElement(l.Divider,null),u?a().createElement(o.Table,{"aria-label":"Compact Table",variant:o.TableVariant.compact,cells:ie,rows:1!=p?de.slice(B,B+P):de.slice(0,P)},a().createElement(o.TableHeader,null),a().createElement(o.TableBody,null)):a().createElement(o.Table,{"aria-label":"Compact Table",variant:o.TableVariant.compact,cells:ie,rows:1!=p?de.slice(B,B+P):de.slice(0,P),actions:se},a().createElement(o.TableHeader,null),a().createElement(o.TableBody,null)),de.length<1?a().createElement(c,null):a().createElement(l.Pagination,{itemCount:de.length,perPage:P,page:p,onSetPage:ue,widgetId:"consumer-group-pagination-bottom",onPerPageSelect:ce,offset:0})))),a().createElement(l.Divider,null))}},699:(e,t,n)=>{"use strict";n.d(t,{i:()=>i});var r=n(7522),a=n.n(r),l=n(3004),o=n(9492),u=n(9115),c=n(3526),i=function(e){var t=e.setDeleteModal,n=e.deleteModal,i=e.topicName,s=e.onDeleteTopic,f=(0,r.useState)(""),d=f[0],m=f[1],p=(0,r.useContext)(c.w).addAlert,h=function(){t(!1)},v=(0,r.useContext)(u.E);return a().createElement(l.Modal,{variant:l.ModalVariant.small,isOpen:n,"aria-label":"Delete topic?",title:"Delete topic?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:h,actions:[a().createElement(l.Button,{variant:"danger",onClick:function(){return e=void 0,n=void 0,a=function(){var e;return function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),i?[4,(0,o.BK)(i,v)]:[3,2];case 1:n.sent(),n.label=2;case 2:return p("Successfully deleted topic "+i,l.AlertVariant.success),[3,4];case 3:return e=n.sent(),p(e.response.data.error_message,l.AlertVariant.danger),[3,4];case 4:return s(),t(!1),[2]}}))},new((r=void 0)||(r=Promise))((function(t,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function u(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,u)}c((a=a.apply(e,n||[])).next())}));var e,n,r,a},key:1,"data-testid":"modalDeleteTopic-buttonDelete",isDisabled:"DELETE"!=d.toUpperCase()},"Delete"),a().createElement(l.Button,{variant:"link",onClick:h,key:2},"Cancel")]},a().createElement(l.Text,{id:"modal-message"}," ",a().createElement("b",null,i)," will be deleted."," "),a().createElement("br",null),a().createElement("label",{htmlFor:"delete-text-input"},"Type DELETE to confirm:"),a().createElement(l.TextInput,{value:d,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:function(e){m(e)},autoFocus:!0}))}}}]);
//# sourceMappingURL=696.9f8c3ef7.bundle.js.map
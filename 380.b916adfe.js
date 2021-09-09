"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[380],{93380:(e,t,o)=>{o.r(t),o.d(t,{Topics:()=>C,default:()=>B});var n=o(75418),a=o.n(n),i=o(98068),r=o(54532),l=o(84669),s=o(63052),c=o(27577),u=o(95216),p=o(28942),m=o(91070),d=o(82639),g=o(70251),f=o(97416),b=function(e){var t=e.total,o=void 0===t?0:t,i=e.page,s=e.perPage,c=e.setFilteredValue,u=e.filteredValue,p=void 0===u?"":u,m=e.onCreateTopic,b=(0,r.useTranslation)().t,h=(0,n.useState)(""),v=h[0],y=h[1],_=a().createElement(a().Fragment,null,a().createElement(l.ToolbarFilter,{chips:p?[p]:[],deleteChip:function(){c("")},categoryName:""},a().createElement(l.InputGroup,null,a().createElement(l.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":b("topic.topic_search_input"),placeholder:b("common.search"),value:v,onChange:function(e){y(e)}}),a().createElement(l.Button,{variant:l.ButtonVariant.control,isDisabled:!v.length,onClick:function(){c(v),y("")},"aria-label":b("topic.topic_search")},a().createElement(g.SearchIcon,null))))),P=[{item:a().createElement(l.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:m},b("topic.create_topic"))}];return o>0&&P.push({item:a().createElement(d.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:o,page:i,perPage:s,titles:{paginationTitle:b("common.minimal_pagination"),perPageSuffix:b("common.per_page_suffix"),toFirstPage:b("common.to_first_page"),toPreviousPage:b("common.to_previous_page"),toLastPage:b("common.to_last_page"),toNextPage:b("common.to_next_page"),optionsToggle:b("common.options_toggle"),currPage:b("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),a().createElement(f.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){c("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:_,toolbarItems:P})},h=o(80372),v=o(41861),y=o(52049),_=function(e){var t,o=e.total,n=e.page,s=e.perPage,g=e.setFilteredValue,f=e.filteredValue,_=e.onCreateTopic,P=e.topicItems,T=e.rowDataTestId,E=e.onEdit,k=e.onDeleteTopic,w=e.refreshTopics,S=e.onSort,C=e.sortBy,B=(0,r.useTranslation)().t,x=(0,v.dd)().showModal,I=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),F=[{title:B("common.name")},{title:B("common.partitions"),transforms:[c.sortable]},{title:B("topic.retention_time"),transforms:[c.sortable]},{title:B("topic.retention_size"),transforms:[c.sortable]}],V=function(e,t){var o,n=e.name,a=void 0===n?"":n;"delete"===t?(o=a,x(y.w.DeleteTopic,{topicName:o,onDeleteTopic:k,refreshTopics:w})):"edit"===t&&E&&E(a)},M=(t=[],null==P||P.map((function(e){var o,n,r=e.name,l=e.partitions,s=e.config;t.push({cells:[{title:a().createElement(i.Link,{"data-testid":"tableTopics-linkTopic",to:I+"/topics/"+r},r)},null==l?void 0:l.length,(0,h.B)(Number((null===(o=null==s?void 0:s.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===o?void 0:o.value)||0)),(0,h.y)(Number((null===(n=null==s?void 0:s.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===n?void 0:n.value)||0))],originalData:e})})),t);return a().createElement(a().Fragment,null,a().createElement(b,{total:o,page:n,perPage:s,onCreateTopic:_,setFilteredValue:g,filteredValue:f}),a().createElement(p.w,{tableProps:{cells:F,rows:M,"aria-label":B("topic.topic_list_table"),actionResolver:function(e){var t,o,n=e.originalData;return[(t={title:B("common.delete")},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(){return V(n,"delete")},t),(o={title:B("common.edit")},o["data-testid"]="tableTopics-actionEdit",o.onClick=function(){return V(n,"edit")},o)]},shouldDefaultCustomRowWrapper:!0,variant:c.TableVariant.compact,onSort:S,sortBy:C},rowDataTestId:T||"tableTopics-row"}),(null==P?void 0:P.length)<1&&f.length>0&&a().createElement(m.u,{emptyStateProps:{variant:m.j.NoResult},titleProps:{title:B("common.no_results_title")},emptyStateBodyProps:{body:B("common.no_results_body")}}),o>0&&a().createElement(d.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:o,variant:l.PaginationVariant.bottom,page:n,perPage:s,titles:{paginationTitle:B("common.full_pagination"),perPageSuffix:B("common.per_page_suffix"),toFirstPage:B("common.to_first_page"),toPreviousPage:B("common.to_previous_page"),toLastPage:B("common.to_last_page"),toNextPage:B("common.to_next_page"),optionsToggle:B("common.options_toggle"),currPage:B("common.curr_page")}}))},P=o(4055),T=o(60540),E=o(64517),k=o(3654),w=function(e,t,o,n){return new(o||(o=Promise))((function(a,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))},S=function(e,t){var o,n,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,n=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],n=0}finally{o=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},C=function(){var e=((0,E.S)()||{}).onError,t=(0,r.useTranslation)().t,o=((0,u.useAlert)()||{addAlert:function(){}}).addAlert,c=(0,n.useContext)(k.E),p=(0,d.hI)()||{},g=p.page,f=void 0===g?1:g,b=p.perPage,h=void 0===b?10:b,v=(0,i.useHistory)(),y=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),C=(0,n.useState)(),B=C[0],x=C[1],I=(0,n.useState)(""),F=I[0],V=I[1],M=(0,n.useState)(0),N=M[0],D=M[1],L=(0,n.useState)(),A=L[0],G=L[1],R=(0,n.useState)(),j=R[0],U=R[1],z=(0,n.useState)({index:0,direction:"asc"}),H=z[0],K=z[1];(0,n.useEffect)((function(){Q()}),[F,A,j]),(0,s.K)((function(){return Q()}),5e3),(0,n.useEffect)((function(){D(h*(f-1))}),[f,h]);var W=function(){v.push(y+"/topic/create")},q=function(e){v.push(y+"/topic/update/"+e)},J=function(e){q&&q(e)},O=function(e,t,o){U({0:"name",1:"partitions",2:"retention.ms",3:"retention.bytes"}[t]),G(o),K({index:t,direction:o})},Q=function(){return w(void 0,void 0,void 0,(function(){var t;return S(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,T.BB)(c,100,h,F,N,A,j).then((function(e){x(null==e?void 0:e.items)}))];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),e&&401===t.response.data.code?e(t.response.data.code,t.response.data.error_message):o({title:t.response.data.error_message,variant:l.AlertVariant.danger}),[3,3];case 3:return[2]}}))}))};return a().createElement(a().Fragment,null,a().createElement(l.Card,{className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},void 0===B?a().createElement(l.PageSection,{className:"kafka-ui-m-full-height",variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(P.y,null)):B.length<1&&F.length<1?a().createElement(m.u,{emptyStateProps:{variant:m.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:W,"data-testid":"actionCreateTopic"}}):B?a().createElement(_,{total:B.length||0,page:f,perPage:h,onCreateTopic:W,topicItems:F?null==B?void 0:B.slice(0,h):null==B?void 0:B.slice(N,N+h),filteredValue:F,setFilteredValue:V,refreshTopics:Q,onEdit:J,onSort:O,sortBy:H}):a().createElement(a().Fragment,null)))};const B=C},80372:(e,t,o)=>{o.d(t,{B:()=>n,y:()=>a});var n=function(e){var t;return-1===e?"Unlimited":e<6e4?1===e?e+" millisecond":e+" milliseconds":e>=6e4&&e<36e5?(t=e/6e4,1===(t=Math.round(100*t)/100)?t+" minute":t+" minutes"):e>=36e5&&e<1728e5?(t=e/36e5,1===(t=Math.round(100*t)/100)?t+" hour":t+" hours"):e>=1728e5?(t=e/864e5,(t=Math.round(100*t)/100)+" days"):e.toString()},a=function(e){var t;return-1===e?"Unlimited":Math.abs(e)<1024?1===e?e+" byte":e+" bytes":Math.abs(e)>=1024&&Math.abs(e)<1048576?1===(t=e/1024)?t+" kibibyte":t+" kibibytes":Math.abs(e)>=1048576&&Math.abs(e)<1073741824?1===(t=e/1048576)?t+" mebibyte":t+" mebibytes":Math.abs(e)>=1073741824&&Math.abs(e)<10995116e5?1===(t=e/1073741824)?t+" gibibyte":t+" gibibytes":Math.abs(e)>=10995116e5?1===(t=e/10995116e5)?t+" tebibyte":t+" tebibytes":e.toString()}}}]);
//# sourceMappingURL=380.b916adfe.js.map
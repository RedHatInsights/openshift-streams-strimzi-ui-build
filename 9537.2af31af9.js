"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9537],{96466:(e,t,o)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=o(35183).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},51356:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(85893),n=o(93264),a=o(73666),r=o(96466);const l=({id:e,toggleId:t,items:o,value:l,ariaLabel:i,onSelectOption:c,name:d,menuAppendTo:u,isLabelAndValueNotSame:f})=>{const[p,m]=(0,n.useState)(),g=(0,s.jsx)(a.DropdownToggle,Object.assign({id:t,onToggle:e=>{m(e)},toggleIndicator:r.default},{children:(()=>{if(f){const e=null==o?void 0:o.filter((e=>e.value===l))[0];return null==e?void 0:e.label}return l})()}));return(0,s.jsx)(a.Dropdown,{name:d,id:e,onSelect:e=>{if(e&&e.currentTarget.textContent){const t=e.currentTarget.textContent;c&&t&&c(t.toLowerCase(),d),m((e=>!e))}},toggle:g,isOpen:p,"aria-label":i,dropdownItems:(e=>{const t=e.map((e=>{const{key:t,value:o,label:n}=e;return(0,s.jsx)(a.DropdownItem,Object.assign({value:o},{children:n||o}),t)}));return t})(o),menuAppendTo:u})}},69537:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var s=o(9922),n=o(85893),a=o(93264),r=o(73666),l=o(25604),i=o(3654),c=o(38137),d=o(3432),u=o(10708),f=o(51356),p=o(5736),m=o(32072);const g=({consumerGroupData:e,refreshConsumerGroups:t,hideModal:o})=>{const g=(0,a.useContext)(i.E),{t:b}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),[v,h]=(0,a.useState)(!1),[j,x]=(0,a.useState)(!1),[k,w]=(0,a.useState)(""),[O,y]=(0,a.useState)(),[T,_]=(0,a.useState)(""),[C,I]=(0,a.useState)([]),{addAlert:G}=(0,m.useAlert)()||{addAlert:()=>{}},S=[{key:d.OffsetType.Absolute,value:d.OffsetType.Absolute,isDisabled:!1},{key:d.OffsetType.Latest,value:d.OffsetType.Latest,isDisabled:!1},{key:d.OffsetType.Earliest,value:d.OffsetType.Earliest,isDisabled:!1}];(0,a.useEffect)((()=>{const t=e&&e.consumers.filter((e=>e.topic===k));I(t||[])}),[e,k]),(0,a.useEffect)((()=>{(null==e?void 0:e.state)&&x(A(e.state))}),[null==e?void 0:e.state]);const A=e=>e!==d.ConsumerGroupState.Stable,D=()=>{o()},L=[b("consumerGroup.partition"),`${b("consumerGroup.client_id")} + ${b("consumerGroup.member_id")}`,b("consumerGroup.current_offset"),b("consumerGroup.log_end_offset"),b("consumerGroup.offset_lag"),b("consumerGroup.new_offset")];return(0,n.jsx)(r.Modal,Object.assign({variant:r.ModalVariant.large,isOpen:!0,"aria-label":"Modal for resetting offset of Kafka consumergroup",title:b("consumerGroup.reset_offset"),showClose:!0,"aria-describedby":"modal-message",onClose:D,actions:[(0,n.jsx)(r.Button,Object.assign({variant:"danger",onClick:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var o;try{const o=C.filter((({selected:e})=>!0===e)).map((({partition:e})=>e));O===d.OffsetType.Absolute?e&&(yield(0,u.v)(g,e.groupId,d.OffsetType.Absolute,k,o,T.toString())):e&&O&&(yield(0,u.v)(g,e.groupId,O,k,o)),G({variant:r.AlertVariant.success,title:b("consumerGroup.offset_successfully_reset")}),t&&t()}catch(e){let t;e&&(0,p.I)(e)&&(t=null===(o=e.response)||void 0===o?void 0:o.data.error_message),G({variant:r.AlertVariant.danger,title:t||""})}D()})),isDisabled:""===k||!v||!j||!O||0===C.filter((({selected:e})=>!0===e)).length},{children:b("consumerGroup.reset_offset")}),1),(0,n.jsx)(r.Button,Object.assign({variant:"link",onClick:D},{children:b("common.cancel")}),2)]},{children:(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.StackItem,{children:(0,n.jsxs)(r.Form,Object.assign({isHorizontal:!0},{children:[(0,n.jsx)(r.FormGroup,Object.assign({label:"Consumer group",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(r.Title,Object.assign({className:"form-title",headingLevel:"h4",size:"md"},{children:null==e?void 0:e.groupId}))})),j&&(0,n.jsx)(r.FormGroup,Object.assign({label:"Topic",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(f.A,{id:"topic-dropdown",toggleId:"topic-dropdowntoggle",ariaLabel:"topic-select-dropdown",onSelectOption:e=>{w(e)},items:(e=>{const t=((null==e?void 0:e.consumers)||[]).map((e=>e.topic));return t.filter(((e,o)=>t.indexOf(e)===o)).map((e=>({key:e,value:e,isDisabled:!1})))})(e),name:"cleanup-policy",value:k||b("common.select"),menuAppendTo:"parent"})})),j&&k&&(0,n.jsx)(r.FormGroup,Object.assign({label:"New offset",fieldId:"offset-dropdown"},{children:(0,n.jsx)(f.A,{id:"offset-dropdown",toggleId:"offset-dropdowntoggle",ariaLabel:"offset-select-dropdown",onSelectOption:e=>{y(e)},items:S,name:"offset-dropdown",value:O||b("common.select"),menuAppendTo:"parent"})})),j&&k&&O===d.OffsetType.Absolute&&(0,n.jsx)(r.FormGroup,Object.assign({label:"Custom offset",fieldId:"custom-offset-input"},{children:(0,n.jsx)(r.TextInput,{id:"custom-offset-input",value:T,onChange:e=>{_(e)},type:"number"})}))]}))}),(0,n.jsx)(r.StackItem,{children:!j&&(0,n.jsx)(r.Alert,Object.assign({className:"modal-alert",variant:"danger",isInline:!0,title:b("consumerGroup.reset_offset_connected_alert_title")},{children:(0,n.jsx)("p",{children:b("consumerGroup.reset_offset_connected_alert_body")})}))}),(0,n.jsx)(r.StackItem,{children:j&&(null==C?void 0:C.length)>0&&k&&(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.StackItem,{children:(0,n.jsxs)(c.Table,Object.assign({onSelect:(e,t,o)=>{let s=[...C];-1===o?s=C.map((e=>(e.selected=t,e))):s[o].selected=t,I(s)},canSelectAll:!0,"aria-label":"Selectable Table",cells:L,rows:(()=>{const e=[];return C&&C.forEach((t=>{const{partition:o,groupId:s,memberId:n,offset:a,logEndOffset:r,lag:l,selected:i}=t;e.push({cells:[o,s+n,a,r,l,{title:i&&O?O===d.OffsetType.Absolute?T:O:"-"}],originalData:t,selected:i})})),e})(),className:"consumer-table"},{children:[(0,n.jsx)(c.TableHeader,{}),(0,n.jsx)(c.TableBody,{})]}))}),(0,n.jsx)(r.StackItem,{children:(0,n.jsx)(r.Checkbox,{label:b("consumerGroup.reset_offset_accept"),"aria-label":"uncontrolled checkbox example",id:"check-5",isChecked:v,onChange:e=>{h(e)}})})]}))})]}))}))}},10708:(e,t,o)=>{o.d(t,{T3:()=>l,e5:()=>r,v:()=>i});var s=o(9922),n=o(3432),a=o(38137);const r=(e,t,o,r,l,i=a.SortByDirection.asc,c)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),a=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return(yield a.getConsumerGroups(void 0,void 0,t,o,r,l,i,c)).data})),l=(e,t)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield null==t?void 0:t.getToken(),s=new n.GroupsApi(new n.Configuration({accessToken:o,basePath:null==t?void 0:t.basePath}));yield s.deleteConsumerGroupById(e)})),i=(e,t,o,a,r,l)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),i=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return yield i.resetConsumerGroupOffset(t,{value:l,offset:o,topics:[{topic:a,partitions:r}]})}))},5736:(e,t,o)=>{o.d(t,{I:()=>s});const s=e=>void 0!==e}}]);
//# sourceMappingURL=9537.2af31af9.js.map
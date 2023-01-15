"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9537],{35183:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const s=o(42695),n=s.__importStar(o(93264));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let r=0;t.createIcon=function({name:e,xOffset:o=0,yOffset:l=0,width:i,height:c,svgPath:d}){var u;return u=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{size:a,color:r,title:u,noVerticalAlign:f}=e,p=s.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=t.getSize(a),b=-.125*Number.parseFloat(g),h=f?null:{verticalAlign:`${b}em`},v=[o,l,i,c].join(" ");return n.createElement("svg",Object.assign({style:h,fill:r,height:g,width:g,viewBox:v,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&n.createElement("title",{id:this.id},u),n.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},u}},96466:(e,t,o)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=o(35183).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},51356:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(85893),n=o(93264),a=o(54785),r=o(96466);const l=({id:e,toggleId:t,items:o,value:l,ariaLabel:i,onSelectOption:c,name:d,menuAppendTo:u,isLabelAndValueNotSame:f})=>{const[p,m]=(0,n.useState)(),g=(0,s.jsx)(a.DropdownToggle,Object.assign({id:t,onToggle:e=>{m(e)},toggleIndicator:r.default},{children:(()=>{if(f){const e=null==o?void 0:o.filter((e=>e.value===l))[0];return null==e?void 0:e.label}return l})()}));return(0,s.jsx)(a.Dropdown,{name:d,id:e,onSelect:e=>{if(e&&e.currentTarget.textContent){let t=e.currentTarget.textContent;c&&t&&(t=f?t.toLowerCase():t,c(t,d)),m((e=>!e))}},toggle:g,isOpen:p,"aria-label":i,dropdownItems:(b=o,b.map((({key:e,value:t,label:o})=>(0,s.jsx)(a.DropdownItem,Object.assign({value:t},{children:o||t}),e)))),menuAppendTo:u});var b}},69537:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var s=o(42695),n=o(85893),a=o(93264),r=o(54785),l=o(15847),i=o(3654),c=o(63133),d=o(8671),u=o(10708),f=o(51356),p=o(5736),m=o(97644);const g=({consumerGroupData:e,refreshConsumerGroups:t,hideModal:o})=>{const g=(0,a.useContext)(i.E),{t:b}=(0,l.useTranslation)(["kafkaTemporaryFixMe"]),[h,v]=(0,a.useState)(!1),[j,x]=(0,a.useState)(!1),[_,w]=(0,a.useState)(""),[y,O]=(0,a.useState)(),[k,I]=(0,a.useState)(""),[C,T]=(0,a.useState)([]),{addAlert:S}=(0,m.useAlert)()||{addAlert:()=>{}},A=[{key:d.OffsetType.Absolute,value:d.OffsetType.Absolute,isDisabled:!1},{key:d.OffsetType.Latest,value:d.OffsetType.Latest,isDisabled:!1},{key:d.OffsetType.Earliest,value:d.OffsetType.Earliest,isDisabled:!1}];(0,a.useEffect)((()=>{const t=e&&e.consumers.filter((e=>e.topic===_));T(t||[])}),[e,_]),(0,a.useEffect)((()=>{(null==e?void 0:e.state)&&x(G(e.state))}),[null==e?void 0:e.state]);const G=e=>e!==d.ConsumerGroupState.Stable,D=()=>{o()},z=[b("consumerGroup.partition"),`${b("consumerGroup.client_id")} + ${b("consumerGroup.member_id")}`,b("consumerGroup.current_offset"),b("consumerGroup.log_end_offset"),b("consumerGroup.offset_lag"),b("consumerGroup.new_offset")];return(0,n.jsx)(r.Modal,Object.assign({variant:r.ModalVariant.large,isOpen:!0,"aria-label":"Modal for resetting offset of Kafka consumergroup",title:b("consumerGroup.reset_offset"),showClose:!0,"aria-describedby":"modal-message",onClose:D,actions:[(0,n.jsx)(r.Button,Object.assign({variant:"danger",onClick:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var o;try{const o=C.filter((({selected:e})=>!0===e)).map((({partition:e})=>e));y===d.OffsetType.Absolute?e&&(yield(0,u.v)(g,e.groupId,d.OffsetType.Absolute,_,o,k.toString())):e&&y&&(yield(0,u.v)(g,e.groupId,y,_,o)),S({variant:r.AlertVariant.success,title:b("consumerGroup.offset_successfully_reset")}),t&&t()}catch(e){let t;e&&(0,p.I)(e)&&(t=null===(o=e.response)||void 0===o?void 0:o.data.error_message),S({variant:r.AlertVariant.danger,title:t||""})}D()})),isDisabled:""===_||!h||!j||!y||0===C.filter((({selected:e})=>!0===e)).length},{children:b("consumerGroup.reset_offset")}),1),(0,n.jsx)(r.Button,Object.assign({variant:"link",onClick:D},{children:b("common.cancel")}),2)]},{children:(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.StackItem,{children:(0,n.jsxs)(r.Form,Object.assign({isHorizontal:!0},{children:[(0,n.jsx)(r.FormGroup,Object.assign({label:"Consumer group",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(r.Title,Object.assign({className:"form-title",headingLevel:"h4",size:"md"},{children:null==e?void 0:e.groupId}))})),j&&(0,n.jsx)(r.FormGroup,Object.assign({label:"Topic",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(f.A,{id:"topic-dropdown",toggleId:"topic-dropdowntoggle",ariaLabel:"topic-select-dropdown",onSelectOption:e=>{w(e)},items:(e=>{const t=((null==e?void 0:e.consumers)||[]).map((e=>e.topic));return t.filter(((e,o)=>t.indexOf(e)===o)).map((e=>({key:e,value:e,isDisabled:!1})))})(e),name:"cleanup-policy",value:_||b("common.select"),menuAppendTo:"parent"})})),j&&_&&(0,n.jsx)(r.FormGroup,Object.assign({label:"New offset",fieldId:"offset-dropdown"},{children:(0,n.jsx)(f.A,{id:"offset-dropdown",toggleId:"offset-dropdowntoggle",ariaLabel:"offset-select-dropdown",onSelectOption:e=>{O(e)},items:A,name:"offset-dropdown",value:y||b("common.select"),menuAppendTo:"parent"})})),j&&_&&y===d.OffsetType.Absolute&&(0,n.jsx)(r.FormGroup,Object.assign({label:"Custom offset",fieldId:"custom-offset-input"},{children:(0,n.jsx)(r.TextInput,{id:"custom-offset-input",value:k,onChange:e=>{I(e)},type:"number"})}))]}))}),(0,n.jsx)(r.StackItem,{children:!j&&(0,n.jsx)(r.Alert,Object.assign({className:"modal-alert",variant:"danger",isInline:!0,title:b("consumerGroup.reset_offset_connected_alert_title")},{children:(0,n.jsx)("p",{children:b("consumerGroup.reset_offset_connected_alert_body")})}))}),(0,n.jsx)(r.StackItem,{children:j&&(null==C?void 0:C.length)>0&&_&&(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.StackItem,{children:(0,n.jsxs)(c.Table,Object.assign({onSelect:(e,t,o)=>{let s=[...C];-1===o?s=C.map((e=>(e.selected=t,e))):s[o].selected=t,T(s)},canSelectAll:!0,"aria-label":"Selectable Table",cells:z,rows:(()=>{const e=[];return C&&C.forEach((t=>{const{partition:o,groupId:s,memberId:n,offset:a,logEndOffset:r,lag:l,selected:i}=t;e.push({cells:[o,s+n,a,r,l,{title:i&&y?y===d.OffsetType.Absolute?k:y:"-"}],originalData:t,selected:i})})),e})(),className:"consumer-table"},{children:[(0,n.jsx)(c.TableHeader,{}),(0,n.jsx)(c.TableBody,{})]}))}),(0,n.jsx)(r.StackItem,{children:(0,n.jsx)(r.Checkbox,{label:b("consumerGroup.reset_offset_accept"),"aria-label":"uncontrolled checkbox example",id:"check-5",isChecked:h,onChange:e=>{v(e)}})})]}))})]}))}))}},10708:(e,t,o)=>{o.d(t,{T3:()=>l,e5:()=>r,v:()=>i});var s=o(42695),n=o(8671),a=o(63133);const r=(e,t,o,r,l,i=a.SortByDirection.asc,c)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),a=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return(yield a.getConsumerGroups(void 0,void 0,t,o,r,l,i,c)).data})),l=(e,t)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield null==t?void 0:t.getToken(),s=new n.GroupsApi(new n.Configuration({accessToken:o,basePath:null==t?void 0:t.basePath}));yield s.deleteConsumerGroupById(e)})),i=(e,t,o,a,r,l)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),i=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return yield i.resetConsumerGroupOffset(t,{value:l,offset:o,topics:[{topic:a,partitions:r}]})}))},5736:(e,t,o)=>{o.d(t,{I:()=>s});const s=e=>void 0!==e}}]);
//# sourceMappingURL=9537.fdcc2cc0.js.map
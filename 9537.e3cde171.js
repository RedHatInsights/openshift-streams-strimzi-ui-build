"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9537],{35183:(e,t,o)=>{t.IU=t.ap=t.Jh=void 0;const s=o(87967),n=s.__importStar(o(93264));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.Jh||(t.Jh={}));t.ap=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let l=0;t.IU=function({name:e,xOffset:o=0,yOffset:r=0,width:i,height:c,svgPath:d}){var u;return(u=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:a,color:l,title:u,noVerticalAlign:f}=e,p=s.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=(0,t.ap)(a),h=-.125*Number.parseFloat(g),b=f?null:{verticalAlign:`${h}em`},v=[o,r,i,c].join(" ");return n.createElement("svg",Object.assign({style:b,fill:l,height:g,width:g,viewBox:v,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&n.createElement("title",{id:this.id},u),n.createElement("path",{d}))}}).displayName=e,u.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},u}},96466:(e,t,o)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=o(35183).IU(t.CaretDownIconConfig),t.default=t.CaretDownIcon},51356:(e,t,o)=>{o.d(t,{A:()=>r});var s=o(85893),n=o(93264),a=o(3669),l=o(96466);const r=({id:e,toggleId:t,items:o,value:r,ariaLabel:i,onSelectOption:c,name:d,menuAppendTo:u,isLabelAndValueNotSame:f})=>{const[p,m]=(0,n.useState)(),g=(0,s.jsx)(a.DropdownToggle,Object.assign({id:t,onToggle:e=>{m(e)},toggleIndicator:l.default},{children:(()=>{if(f){const e=null==o?void 0:o.filter((e=>e.value===r))[0];return null==e?void 0:e.label}return r})()}));return(0,s.jsx)(a.Dropdown,{name:d,id:e,onSelect:e=>{if(e&&e.currentTarget.textContent){let t=e.currentTarget.textContent;c&&t&&(t=f?t.toLowerCase():t,c(t,d)),m((e=>!e))}},toggle:g,isOpen:p,"aria-label":i,dropdownItems:(h=o,h.map((({key:e,value:t,label:o})=>(0,s.jsx)(a.DropdownItem,Object.assign({value:t},{children:o||t}),e)))),menuAppendTo:u});var h}},69537:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var s=o(87967),n=o(85893),a=o(93264),l=o(3669),r=o(15847),i=o(3654),c=o(43444),d=o(29827),u=o(10708),f=o(51356),p=o(5736),m=o(97644);const g=({consumerGroupData:e,refreshConsumerGroups:t,hideModal:o})=>{const g=(0,a.useContext)(i.E),{t:h}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),[b,v]=(0,a.useState)(!1),[j,x]=(0,a.useState)(!1),[w,y]=(0,a.useState)(""),[O,_]=(0,a.useState)(),[k,C]=(0,a.useState)(""),[T,I]=(0,a.useState)([]),{addAlert:A}=(0,m.useAlert)()||{addAlert:()=>{}},G=[{key:d.OffsetType.Absolute,value:d.OffsetType.Absolute,isDisabled:!1},{key:d.OffsetType.Latest,value:d.OffsetType.Latest,isDisabled:!1},{key:d.OffsetType.Earliest,value:d.OffsetType.Earliest,isDisabled:!1}];(0,a.useEffect)((()=>{const t=e&&e.consumers.filter((e=>e.topic===w));I(t||[])}),[e,w]),(0,a.useEffect)((()=>{(null==e?void 0:e.state)&&x(S(e.state))}),[null==e?void 0:e.state]);const S=e=>e!==d.ConsumerGroupState.Stable,D=()=>{o()},E=[h("consumerGroup.partition"),`${h("consumerGroup.client_id")} + ${h("consumerGroup.member_id")}`,h("consumerGroup.current_offset"),h("consumerGroup.log_end_offset"),h("consumerGroup.offset_lag"),h("consumerGroup.new_offset")];return(0,n.jsx)(l.Modal,Object.assign({variant:l.ModalVariant.large,isOpen:!0,"aria-label":"Modal for resetting offset of Kafka consumergroup",title:h("consumerGroup.reset_offset"),showClose:!0,"aria-describedby":"modal-message",onClose:D,actions:[(0,n.jsx)(l.Button,Object.assign({variant:"danger",onClick:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var o;try{const o=T.filter((({selected:e})=>!0===e)).map((({partition:e})=>e));O===d.OffsetType.Absolute?e&&(yield(0,u.v)(g,e.groupId,d.OffsetType.Absolute,w,o,k.toString())):e&&O&&(yield(0,u.v)(g,e.groupId,O,w,o)),A({variant:l.AlertVariant.success,title:h("consumerGroup.offset_successfully_reset")}),t&&t()}catch(e){let t;e&&(0,p.I)(e)&&(t=null===(o=e.response)||void 0===o?void 0:o.data.error_message),A({variant:l.AlertVariant.danger,title:t||""})}D()})),isDisabled:""===w||!b||!j||!O||0===T.filter((({selected:e})=>!0===e)).length},{children:h("consumerGroup.reset_offset")}),1),(0,n.jsx)(l.Button,Object.assign({variant:"link",onClick:D},{children:h("common.cancel")}),2)]},{children:(0,n.jsxs)(l.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(l.StackItem,{children:(0,n.jsxs)(l.Form,Object.assign({isHorizontal:!0},{children:[(0,n.jsx)(l.FormGroup,Object.assign({label:"Consumer group",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(l.Title,Object.assign({className:"form-title",headingLevel:"h4",size:"md"},{children:null==e?void 0:e.groupId}))})),j&&(0,n.jsx)(l.FormGroup,Object.assign({label:"Topic",fieldId:"horizontal-form-name"},{children:(0,n.jsx)(f.A,{id:"topic-dropdown",toggleId:"topic-dropdowntoggle",ariaLabel:"topic-select-dropdown",onSelectOption:e=>{y(e)},items:(e=>{const t=((null==e?void 0:e.consumers)||[]).map((e=>e.topic));return t.filter(((e,o)=>t.indexOf(e)===o)).map((e=>({key:e,value:e,isDisabled:!1})))})(e),name:"cleanup-policy",value:w||h("common.select"),menuAppendTo:"parent"})})),j&&w&&(0,n.jsx)(l.FormGroup,Object.assign({label:"New offset",fieldId:"offset-dropdown"},{children:(0,n.jsx)(f.A,{id:"offset-dropdown",toggleId:"offset-dropdowntoggle",ariaLabel:"offset-select-dropdown",onSelectOption:e=>{_(e)},items:G,name:"offset-dropdown",value:O||h("common.select"),menuAppendTo:"parent"})})),j&&w&&O===d.OffsetType.Absolute&&(0,n.jsx)(l.FormGroup,Object.assign({label:"Custom offset",fieldId:"custom-offset-input"},{children:(0,n.jsx)(l.TextInput,{id:"custom-offset-input",value:k,onChange:e=>{C(e)},type:"number"})}))]}))}),(0,n.jsx)(l.StackItem,{children:!j&&(0,n.jsx)(l.Alert,Object.assign({className:"modal-alert",variant:"danger",isInline:!0,title:h("consumerGroup.reset_offset_connected_alert_title")},{children:(0,n.jsx)("p",{children:h("consumerGroup.reset_offset_connected_alert_body")})}))}),(0,n.jsx)(l.StackItem,{children:j&&(null==T?void 0:T.length)>0&&w&&(0,n.jsxs)(l.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(l.StackItem,{children:(0,n.jsxs)(c.Table,Object.assign({onSelect:(e,t,o)=>{let s=[...T];-1===o?s=T.map((e=>(e.selected=t,e))):s[o].selected=t,I(s)},canSelectAll:!0,"aria-label":"Selectable Table",cells:E,rows:(()=>{const e=[];return T&&T.forEach((t=>{const{partition:o,groupId:s,memberId:n,offset:a,logEndOffset:l,lag:r,selected:i}=t;e.push({cells:[o,s+n,a,l,r,{title:i&&O?O===d.OffsetType.Absolute?k:O:"-"}],originalData:t,selected:i})})),e})(),className:"consumer-table"},{children:[(0,n.jsx)(c.TableHeader,{}),(0,n.jsx)(c.TableBody,{})]}))}),(0,n.jsx)(l.StackItem,{children:(0,n.jsx)(l.Checkbox,{label:h("consumerGroup.reset_offset_accept"),"aria-label":"uncontrolled checkbox example",id:"check-5",isChecked:b,onChange:e=>{v(e)}})})]}))})]}))}))}},10708:(e,t,o)=>{o.d(t,{T3:()=>r,e5:()=>l,v:()=>i});var s=o(87967),n=o(29827),a=o(43444);const l=(e,t,o,l,r,i=a.SortByDirection.asc,c)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),a=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return(yield a.getConsumerGroups(void 0,void 0,t,o,l,r,i,c)).data})),r=(e,t)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield null==t?void 0:t.getToken(),s=new n.GroupsApi(new n.Configuration({accessToken:o,basePath:null==t?void 0:t.basePath}));yield s.deleteConsumerGroupById(e)})),i=(e,t,o,a,l,r)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),i=new n.GroupsApi(new n.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return yield i.resetConsumerGroupOffset(t,{value:r,offset:o,topics:[{topic:a,partitions:l}]})}))},5736:(e,t,o)=>{o.d(t,{I:()=>s});const s=e=>void 0!==e}}]);
//# sourceMappingURL=9537.e3cde171.js.map
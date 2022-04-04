"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9886],{34046:(e,i,t)=>{i.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},i.by=t(35183).createIcon(i.MU),i.ZP=i.by},27958:()=>{},76153:(e,i,t)=>{t.d(i,{R:()=>a});var n=t(85893),s=t(99421),o=t(34046);const a=({fieldId:e,fieldLabel:i,btnAriaLabel:t,fieldValue:a,popoverBody:r,popoverHeader:l,showUnlimited:u})=>{let c="-";return!0===u&&void 0!==a&&parseInt(a)<0?c="Unlimited":a&&(c=a),(0,n.jsx)(s.FormGroup,Object.assign({fieldId:e,label:i,className:"kafka-ui-form-group--readonly",labelIcon:(0,n.jsx)(s.Popover,Object.assign({headerContent:(0,n.jsx)("div",{children:l}),bodyContent:(0,n.jsx)("div",{children:r})},{children:(0,n.jsx)("button",Object.assign({"aria-label":t,onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,n.jsx)(o.ZP,{noVerticalAlign:!0})}))}))},{children:(0,n.jsx)(s.TextInput,{isReadOnly:!0,type:"text",id:e,name:e,value:c})}))}},86737:(e,i,t)=>{t.d(i,{$$:()=>a,A7:()=>f,K:()=>p,MO:()=>o,PT:()=>s,Q_:()=>u,Rc:()=>n,TE:()=>k,W$:()=>b,Y:()=>r,_$:()=>m,f8:()=>c,jR:()=>g,mr:()=>y,nL:()=>l,pJ:()=>v,qh:()=>T,sN:()=>d});const n="3",s="0.5",o="2",a="604800000 milliseconds (7 days)",r="9223372036854775807 milliseconds",l="10485760 bytes (10 mebibytes)",u="4096 bytes (4 kibibytes)",c="1073741824 bytes (1 gibibyte)",d="86400000 milliseconds (1 day)",b="0 milliseconds",v="60000 milliseconds (1 minute)",m="1048588 bytes",p="CreateTime",f="0 milliseconds",y="9223372036854775807 messages",T="9223372036854775807 milliseconds",g=1,k=1e3},64517:(e,i,t)=>{t.d(i,{J:()=>s,S:()=>o});var n=t(75418);const s=t.n(n)().createContext(void 0),o=()=>(0,n.useContext)(s)},25139:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var n=t(85893),s=t(8903),o=t(3654),a=t(64517),r=t(68640),l=t(14313);const u=({getToken:e,apiBasePath:i,kafkaName:t,onError:u,kafkaPageLink:c,kafkaInstanceLink:d,showSchemas:b})=>(0,n.jsx)(o.E.Provider,Object.assign({value:{basePath:i,getToken:e}},{children:(0,n.jsx)(a.J.Provider,Object.assign({value:{kafka:{},activeTab:2,onError:u,kafkaName:t,kafkaPageLink:c,kafkaInstanceLink:d,showSchemas:b}},{children:(0,n.jsxs)(l.ModalProvider,{children:[(0,n.jsx)(s.o,{}),(0,n.jsx)(r.J,{})]})}))}))},1787:(e,i,t)=>{t.d(i,{$X:()=>s,AV:()=>r,Cv:()=>b,FB:()=>n,KP:()=>a,UC:()=>o,az:()=>p,eA:()=>d,qS:()=>m,yN:()=>u});const n=function(e){return e.split("-").map(((e,i)=>{return i>0?(t=e).charAt(0).toUpperCase()+t.slice(1):e;var t})).join("")},s=e=>"string"==typeof e?e.replace(/-/g,"."):e;var o,a;!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="day",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(o||(o={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(a||(a={}));const r={[a.BYTE]:1,[a.KIBIBYTE]:1024,[a.MEBIBYTE]:1048576,[a.GIBIBYTE]:1073741824,[a.TEBIBYTE]:10995116e5},l={[o.MILLISECOND]:1,[o.SECOND]:1e3,[o.MINUTE]:6e4,[o.HOUR]:36e5,[o.DAY]:864e5},u=Object.assign(Object.assign({},l),{[o.DAY]:1,[o.WEEK]:7}),c=e=>{if(e){if(e%l.day==0)return{value:e/l.day,unit:"days"};if(e%l.hours==0)return{value:e/l.hours,unit:"hours"};if(e%l.minutes==0)return{value:e/l.minutes,unit:"minutes"};if(e%l.seconds==0)return{value:e/l.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},d=e=>{const{unit:i,value:t}=c(e);return-1===Number(t)?"Unlimited":`${e} ms (${t} ${i})`},b=e=>{const{unit:i,value:t}=v(e);return-1===Number(t)?"Unlimited":`${e} bytes (${t} ${i})`},v=e=>{if(e){if(e%r.tebibytes==0)return{value:e/r.tebibytes,unit:"tebibytes"};if(e%r.gibibytes==0)return{value:e/r.gibibytes,unit:"gibibytes"};if(e%r.mebibytes==0)return{value:e/r.mebibytes,unit:"mebibytes"};if(e%r.kibibytes==0)return{value:e/r.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},m=e=>{var i;const t=Object.assign({},e),n={};return null===(i=null==t?void 0:t.config)||void 0===i||i.forEach((e=>{const{key:i="",value:t}=e;if("retention.ms"===i&&Number(t)>=0){const{value:e,unit:s}=c(Number(t));n[i]=`${e}`,n[`${i}.unit`]=s,n.selectedRetentionTimeOption=o.CUSTOM}else"retention.ms"===i&&-1===Number(t)&&(n.selectedRetentionTimeOption=o.UNLIMITED);if("retention.bytes"===i&&Number(t)>=0){const{value:e,unit:s}=v(Number(t));n[i]=`${e}`,n[`${i}.unit`]=s,n.selectedRetentionSizeOption=a.CUSTOM}else"retention.bytes"===i&&-1===Number(t)&&(n.selectedRetentionSizeOption=a.UNLIMITED);"cleanup.policy"===i&&(n[i]=t||"delete")})),n},p=(e,i=[])=>{const t=["retention.ms","retention.bytes","flush.messages",...i],n=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],s=Object.assign({},e),u=[];for(const e in s){const i=e;let c;if(t.includes(i))if(s.selectedRetentionTimeOption===o.UNLIMITED&&"retention.ms"===i||s.selectedRetentionSizeOption===a.UNLIMITED&&"retention.bytes"===i)c="-1";else if("retention.ms"===i||"retention.bytes"===i){const e=s[`${i}.unit`]||"milliseconds",t=s[`${i}.unit`]||"bytes",n="retention.ms"===i?l[e]:r[t];c=Number(s[i])*n}else c=s[i];("unit"===i.split(".").pop()||n.includes(i))&&delete s[i],c&&i&&u.push({key:i,value:c.toString()})}return{name:s.name,settings:{numPartitions:Number(s.numPartitions),config:u}}}},60540:(e,i,t)=>{t.d(i,{BB:()=>r,BK:()=>b,BN:()=>d,Rh:()=>l,c4:()=>n,eR:()=>c});var n,s=t(223),o=t(98639),a=t(57294);!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(n||(n={}));const r=(e,i,t,n,r=a.SortByDirection.asc,l)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),a=new o.TopicsApi(new o.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return(yield a.getTopics(void 0,void 0,t,n,i,r,l)).data})),l=(e,i)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath})),{data:s}=yield n.getTopic(e);return u(s)})),u=e=>{var i,t,n;const s={name:"",numPartitions:"0"};return e&&e.name&&(s.name=e.name),null===(i=e.config)||void 0===i||i.forEach((e=>{if(e.key&&e.value){const i=e.key;s[i]=e.value}})),s.numPartitions=(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"0",s.replicationFactor=(null==e?void 0:e.partitions)&&(null===(n=null==e?void 0:e.partitions[0].replicas)||void 0===n?void 0:n.length.toString())||"0",s},c=(e,i,t)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),s=new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));return(yield s.updateTopic(e,i)).status})),d=(e,i)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath})),s=yield n.getTopic(e),a=(s.data.partitions||[]).map((e=>{var i;return(null===(i=e.replicas)||void 0===i?void 0:i.length)||0})).reduce(((e=0,i=0)=>e+i)).toString(),r=s.data;return r.config=r.config||[],r.config.push({key:"replicationFactor",value:a}),s.data})),b=(e,i)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new o.TopicsApi(new o.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath}));yield n.deleteTopic(e)}))},5736:(e,i,t)=>{t.d(i,{I:()=>n});const n=e=>void 0!==e}}]);
//# sourceMappingURL=9886.e3d731ef.js.map
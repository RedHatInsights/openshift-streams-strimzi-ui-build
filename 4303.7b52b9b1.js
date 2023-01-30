"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4303],{88838:()=>{},84303:(e,r,a)=>{a.r(r),a.d(r,{ManagePermissionsModal:()=>m,ManagePermissionsV2:()=>d,default:()=>T});var s=a(87967),i=a(85893),o=a(93264),n=a(76621),c=a(64517),t=a(3654),l=a(97644),p=(a(88838),a(2954)),u=a(87892);const d=({hideModal:e,onSave:r,kafkaName:a,selectedAccountId:s,acls:o,topicNames:n,consumerGroupIds:c,title:t,variant:l})=>(0,i.jsx)(m,{topicNames:n,consumerGroupIds:c,acls:o,resourceOperations:void 0,hideModal:e,selectedAccountId:s,onSave:r,kafkaName:a,variant:l,title:t}),m=({hideModal:e,kafkaName:r,acls:a,topicNames:d,consumerGroupIds:m})=>{const{kafka:T}=(0,c.S)()||{},A=(0,l.useAuth)(),[y,v]=(0,o.useState)(void 0),[R,f]=(0,o.useState)(!1),[E,P]=(0,o.useState)([]),[k,I]=(0,o.useState)((a||[]).filter((e=>y&&y&&e.principal===`${y}`||"*"===e.principal))),[N,L]=(0,o.useState)(),C=(0,o.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){I((a||[]).filter((e=>y&&y&&e.principal===`${y}`||"*"===e.principal)))}))),[a,y]);(0,o.useEffect)((()=>{C()}),[a,C,y]);const g=(0,l.usePrincipals)(),{addAlert:h}=(0,l.useAlert)()||{addAlert:()=>{}},O=(0,o.useContext)(t.E),b=(0,n.qK)(O);(0,o.useEffect)((()=>{(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==A?void 0:A.getUsername();L(e)}))}),[A]);const w=g.getAllPrincipals().filter((e=>e.id!==N&&e.id!==(null==T?void 0:T.owner))).map((e=>({displayName:e.displayName||"",id:e.id||"",principalType:e.principalType||p.PrincipalType.UserAccount})));return(0,i.jsx)(p.ManageKafkaPermissions,{accounts:w,onCancel:e,kafkaName:r||"",onSave:r=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){E.length>0&&E.map((r=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){yield b.deletePermission({resourceName:r.resourceName,patternType:r.patternType,permissionType:r.permission,resourceType:r.resourceType,operation:r.operation,principal:`User:${"All accounts"==y?"*":y}`}).then((()=>e())).catch((e=>h({variant:l.AlertVariant.danger,title:e.response.data.reason})))})))),r&&r.map((r=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){switch(r.type){case"manage-access":yield b.addPermission({resourceName:"kafka-cluster",resourceType:"CLUSTER",patternType:"LITERAL",operation:"ALTER",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}).then((()=>e()));break;case"manual":yield b.addPermission({resourceName:"kafka-instance"==r.resourceType?"kafka-cluster":r.resourceName?r.resourceName:"",resourceType:(0,u.ED)(r.resourceType),patternType:"Is"==r.resourcePrefix?"LITERAL":"PREFIXED",operation:(0,u.m1)(r.resourceOperation),permission:"allow"==r.resourcePermission?"ALLOW":"DENY",principal:"All accounts"==y?"User:*":`User:${y}`}).then((()=>e()));break;case"produce-topic":yield b.addPermission({resourceName:r.resourceNameValue||"",resourceType:"TOPIC",patternType:"Is"==r.prefixRuleValue?"LITERAL":"PREFIXED",operation:"WRITE",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}),yield b.addPermission({resourceName:r.resourceNameValue||"",resourceType:"TOPIC",patternType:"Is"==r.prefixRuleValue?"LITERAL":"PREFIXED",operation:"CREATE",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}),yield b.addPermission({resourceName:r.resourceNameValue||"",resourceType:"TOPIC",patternType:"Is"==r.prefixRuleValue?"LITERAL":"PREFIXED",operation:"DESCRIBE",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}).then((()=>e()));break;case"consume-topic":yield b.addPermission({resourceName:r.topicResourceName||"",resourceType:"TOPIC",patternType:"Is"==r.topicResourcePrefixRule?"LITERAL":"PREFIXED",operation:"READ",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}),yield b.addPermission({resourceName:r.topicResourceName||"",resourceType:"TOPIC",patternType:"Is"==r.topicResourcePrefixRule?"LITERAL":"PREFIXED",operation:"DESCRIBE",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}),yield b.addPermission({resourceName:r.consumerResourceName||"",resourceType:"GROUP",patternType:"Is"==r.consumerResourcePrefixRule?"LITERAL":"PREFIXED",operation:"READ",permission:"ALLOW",principal:"All accounts"==y?"User:*":`User:${y}`}).then((()=>e()))}}))))})),existingAcls:k,onRemoveAcls:e=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){P((r=>[...r,k[e]])),f(!0),(e=>{I((k||[]).filter(((r,a)=>a!=e)))})(e)})),selectedAccount:y,onChangeSelectedAccount:v,topicNameOptions:e=>d.filter((r=>r.includes(e))),consumerGroupNameOptions:e=>m.filter((r=>r.includes(e))),isAclDeleted:R})},T=d},87892:(e,r,a)=>{a.d(r,{ED:()=>n,m1:()=>c,ss:()=>o});var s=a(8671),i=a(73866);const o=e=>{switch(e){case s.AclResourceType.Group:return"Consumer group";case s.AclResourceType.Topic:return"Topic";case s.AclResourceType.Cluster:return"Kafka instance";case s.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,i.sentenceCase)(e)}},n=e=>{switch(e){case"consumer-group":return s.AclResourceType.Group;case"kafka-instance":return s.AclResourceType.Cluster;case"topic":return s.AclResourceType.Topic;default:return s.AclResourceType.TransactionalId}},c=e=>{switch(e){case"All":return"ALL";case"Alter":return"ALTER";case"Alter configs":return"ALTER_CONFIGS";case"Create":return"CREATE";case"Delete":return"DELETE";case"Describe":return"DESCRIBE";case"Describe configs":return"DESCRIBE_CONFIGS";case"Read":return"READ";default:return"WRITE"}}},76621:(e,r,a)=>{a.d(r,{G6:()=>d,L2:()=>t,mv:()=>u,qK:()=>l,t:()=>T,yN:()=>m});var s=a(87967),i=a(93264),o=a(8671),n=a(9132),c=a.n(n);const t=(e,r)=>{const[,a]=Object.entries(r).find((([,r])=>r===e.toString()))||[];return a},l=e=>{const r=(0,i.useCallback)(((r,a,i)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),n=new o.AclsApi(new o.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath})),c=yield n.getAcls(r.resourceType,r.resourceName,r.patternType,r.principal,r.operation,r.permissionType,i,a);return p(c)}))),[e]),a=(0,i.useCallback)((r=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new o.AclsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield s.createAcl(r)}))),[e]),n=(0,i.useCallback)((r=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new o.AclsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield s.deleteAcls(r.resourceType,r.resourceName,r.patternType,r.principal,r.operation,r.permissionType)}))),[e]),c=(0,i.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const r=yield null==e?void 0:e.getToken();return new o.AclsApi(new o.Configuration({accessToken:r,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((e=>e.data))}))),[e]);return(0,i.useMemo)((()=>({getPermissions:r,addPermission:a,deletePermission:n,getResourceOperations:c})),[r,a,n,c])},p=e=>{var r;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(r=e.data.items)||void 0===r?void 0:r.map((e=>Object.assign(Object.assign({},e),{principal:e.principal.substring(5),toString:()=>`${e.principal} ${e.permission} ${e.operation} ${e.patternType} ${e.resourceType} ${e.resourceName}`,hash:()=>c()(e)}))).sort(((e,r)=>e.principal!==r.principal?e.principal.localeCompare(r.principal):e.resourceType!==r.resourceType?e.resourceType.localeCompare(r.resourceType):e.resourceName!==r.resourceName?e.resourceName.localeCompare(r.resourceName):e.permission!==r.permission?"DENY"===e.permission?-1:1:e.operation!==r.operation?e.operation.localeCompare(r.operation):0))}},u=()=>Object.values(o.AclPermissionType),d=()=>Object.values(o.AclOperation),m=()=>Object.values(o.AclResourceType),T=()=>Object.values(o.AclPatternType)}}]);
//# sourceMappingURL=4303.7b52b9b1.js.map
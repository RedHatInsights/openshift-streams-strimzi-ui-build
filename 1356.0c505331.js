"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1356],{21356:(a,e,t)=>{t.r(e),t.d(e,{PartitionsChange:()=>s,default:()=>r});var i=t(85893),n=t(3669);const s=({hideModal:a,onSaveTopic:e})=>{const t=()=>{a()};return(0,i.jsx)(n.Modal,Object.assign({variant:n.ModalVariant.small,isOpen:!0,"aria-label":"Confirm change of partitions",title:"Increase the number of partitions?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:t,actions:[(0,i.jsx)(n.Button,Object.assign({variant:"primary",onClick:a=>{t(),e&&e(a)}},{children:"Yes"}),1),(0,i.jsx)(n.Button,Object.assign({variant:"link",onClick:t},{children:"No, return to form"}),2)]},{children:"Messages might have the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition."}))},r=s}}]);
//# sourceMappingURL=1356.0c505331.js.map
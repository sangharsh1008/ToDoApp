(this.webpackJsonptodoapplication=this.webpackJsonptodoapplication||[]).push([[0],{304:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(15),i=a.n(n),o=a(77),s=a(66),d=a(41),l=a(114),u={activeRecord:{summary:"",priority:"None",desc:"",createdOn:"",dueBy:"",isCompleted:!1},rawData:[{id:0,summary:"trial",priority:"Medium",desc:"",createdOn:"2020-10-20",dueBy:"2020-10-12",isCompleted:!1},{id:1,summary:"trial1",priority:"Medium",desc:"",createdOn:"2020-10-12",dueBy:"2020-10-12",isCompleted:!1},{id:2,summary:"trial2",priority:"Medium",desc:"",createdOn:"2020-10-12",dueBy:"2020-10-12",isCompleted:!0}]},p=(a(304),a(345)),j=a(346),b=a(354),O=a(353),h=a(237),m=a.n(h),y=a(325),v=a(351),x=a.n(v),f=a(350),g=a.n(f),R=a(324),C=a(14),D=Object(R.a)((function(e){return{button:{margin:e.spacing(1)}}})),w=function(e){var t,a=e.updateStatus,r=e.deleteRecord,c=e.record,n=e.currentTab,i=e.updateModalData,o=D();return t="All"===n?c:"Pending"===n?c.filter((function(e){return!e.isCompleted})):c.filter((function(e){return e.isCompleted})),Object(C.jsx)("div",{children:Object(C.jsx)(m.a,{title:"",columns:[{title:"Summary",field:"summary"},{title:"Priority",field:"priority"},{title:"Created On",field:"createdOn"},{title:"Due By",field:"dueBy"},{field:"Actions",title:"action",render:function(e,t){return Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",className:o.button,onClick:function(){i(e)},startIcon:Object(C.jsx)(g.a,{})}),Object(C.jsx)(y.a,{className:o.button,size:"small",variant:"contained",color:"primary",onClick:function(){a(e)},children:e.isCompleted?"Re-Open":"done"}),Object(C.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){r(e)},className:o.button,startIcon:Object(C.jsx)(x.a,{})})]},JSON.toString(e))}}],data:t,options:{search:!0,headerStyle:{border:"1px solid black",fontWeight:"bold",background:"lightgrey",textAlign:"center"},customColumnIndex:-1}})})},S=a(468),k=a(352),A=a.n(k),E=a(115),M=a(199),T=a(321),N=a(242),P=a(308);function B(e){var t=new Date(e),a=""+(t.getMonth()+1),r=""+t.getDate(),c=t.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[c,a,r].join("-")}function _(){return Math.round(20*Math.random())-10}function I(){var e=50+_(),t=50+_();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var z=Object(R.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"200"}}})),L=function(e){var t=e.addRecord,a=e.closeModal,c=e.updateRecord,n=e.isModalOpen,i=e.activeRecord,o=e.records,s=z(),d=Object(r.useState)(I),l=Object(E.a)(d,1)[0],u=Object(r.useState)(""),p=Object(E.a)(u,2),j=p[0],b=p[1],O=Object(r.useState)(""),h=Object(E.a)(O,2),m=h[0],v=h[1],x=Object(r.useState)(""),f=Object(E.a)(x,2),g=f[0],R=f[1],D=Object(r.useState)(""),w=Object(E.a)(D,2),S=w[0],k=w[1];return Object(C.jsx)("div",{children:Object(C.jsx)(M.a,{open:n,onClose:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(C.jsxs)("div",{style:l,className:s.paper,children:[Object(C.jsx)("h2",{id:"simple-modal-title",children:"Edit Task"}),Object(C.jsxs)("div",{style:{width:"100%"},children:[Object(C.jsx)("div",{style:{margin:"10px 0px"},children:"Summary"}),Object(C.jsx)("input",{onChange:function(e){return b(e.target.value)},value:""===j?i.summary:j,style:{width:"100%"},placeholder:"summary"}),Object(C.jsx)("div",{style:{margin:"10px 0px",width:"100%"},children:"Description"}),Object(C.jsx)("textarea",{value:""===m?i.desc:m,onChange:function(e){return v(e.target.value)},style:{height:"80px",width:"100%"},name:"description",placeholder:"Enter Description here..."}),Object(C.jsxs)("div",{style:{width:"100%",display:"flex"},children:[Object(C.jsxs)("div",{style:{margin:"10px 0px",width:"50%"},children:["Due Date",Object(C.jsx)(T.a,{id:"date",type:"date",value:""===g?i.dueBy:g,onChange:function(e){R(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(C.jsxs)("div",{style:{margin:"10px 0px",width:"50%",display:"flex",flexDirection:"column"},children:["Priority",Object(C.jsxs)(N.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:""===S?i.priority:S,onChange:function(e){return k(e.target.value)},children:[Object(C.jsx)(P.a,{value:"None",children:"None"}),Object(C.jsx)(P.a,{value:"Low",children:"Low"}),Object(C.jsx)(P.a,{value:"Medium",children:"Medium"}),Object(C.jsx)(P.a,{value:"High",children:"High"})]})]})]}),Object(C.jsxs)("div",{style:{display:"flex",gap:"10px",float:"right"},children:[Object(C.jsx)(y.a,{variant:"contained",size:"small",onClick:a,children:"Cancel"}),Object(C.jsx)(y.a,{variant:"contained",size:"small",style:{background:"green"},onClick:function(){var e={summary:""===j?i.summary:j,priority:""===S?i.priority:S,desc:""===m?i.desc:m,createdOn:B(new Date),dueBy:""===g?i.dueBy:g,isCompleted:!1,id:i.id};""!==i.summary?c(e):""===i.summary&&""!==j&&(e.id=o.length,t(e)),b(""),v(""),R(""),k(""),a()},children:"Save"})]})]})]})})})},U={summary:"",priority:"None",desc:"",createdOn:"",dueBy:"",isCompleted:!1,id:""},J=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isModalOpen:!1,showRecords:e.props.records,showRec:"All"},e}return Object(j.a)(a,[{key:"updateModalData",value:function(e){this.props.setActiveRecord(Object(d.a)({},e)),this.setState({isModalOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showRec,r=t.isModalOpen;t.showRecords;return Object(C.jsxs)("div",{className:"mainContainer",children:[Object(C.jsx)(L,{isModalOpen:r,records:this.props.records,addRecord:this.props.addRecord,updateRecord:this.props.updateRecord,activeRecord:this.props.activeRecord,closeModal:function(){e.props.setActiveRecord(Object(d.a)({},U)),e.setState({isModalOpen:!1})}}),Object(C.jsxs)("div",{className:"headerContainer",children:[Object(C.jsx)("div",{className:"appName",children:" ToDo APP"}),Object(C.jsx)("div",{className:"addTask",children:Object(C.jsx)(S.a,{style:{backgroundColor:"blue"},color:"secondary","aria-label":"add",size:"small",onClick:function(){e.props.setActiveRecord(Object(d.a)({},U)),e.setState({isModalOpen:!0})},children:Object(C.jsx)(A.a,{})})})]}),Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(y.a,{onClick:function(){e.setState({showRec:"All"})},color:"All"===a?"black":"primary",children:"All"}),Object(C.jsx)(y.a,{onClick:function(){e.setState({showRec:"Pending"})},color:"Pending"===a?"black":"primary",children:"Pending"}),Object(C.jsx)(y.a,{onClick:function(){return e.setState({showRec:"Completed"})},color:"Completed"===a?"black":"primary",children:"Completed"})]}),Object(C.jsx)(w,{updateModalData:function(t){return e.updateModalData(t)},record:this.props.records,currentTab:this.state.showRec,updateStatus:this.props.updateStatus,deleteRecord:this.props.deleteRecord})]})}}]),a}(c.a.Component),F=Object(o.b)((function(e){return{records:e.rawData,activeRecord:e.activeRecord}}),(function(e){return{addRecord:function(t){return e({type:"ADD_RECORD",value:t})},deleteRecord:function(t){return e({type:"DELETE_RECORD",value:t})},updateRecord:function(t){return e({type:"UPDATE_RECORD",value:t})},setActiveRecord:function(t){return e({type:"SET_ACTIVE",value:t})},updateStatus:function(t){return e({type:"UPDATE_STATUS",value:t})}}}))(J);function H(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(F,{})})}var V=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=(Object(l.a)(e.rawData),t.value&&e.rawData.findIndex((function(e){return e.id===t.value.id})));switch(t.type){case"ADD_RECORD":return Object(d.a)(Object(d.a)({},e),{},{rawData:[].concat(Object(l.a)(e.rawData),[t.value])});case"DELETE_RECORD":return Object(d.a)(Object(d.a)({},e),{},{rawData:Object(l.a)(e.rawData.filter((function(e){if(e!==t.value)return e})))});case"UPDATE_STATUS":var r=Object(l.a)(e.rawData);return r[a].isCompleted=!r[a].isCompleted,Object(d.a)(Object(d.a)({},e),{},{rawData:r});case"UPDATE_RECORD":var c=Object(l.a)(e.rawData);return c[a]=t.value,console.log(c[a],t.value,"sangahrsh"),Object(d.a)(Object(d.a)({},e),{},{rawData:c});case"SET_ACTIVE":return Object(d.a)(Object(d.a)({},e),{},{activeRecord:Object.create(t.value)});default:return Object(d.a)({},e)}})),W=document.getElementById("root");i.a.render(Object(C.jsx)(r.StrictMode,{children:Object(C.jsx)(o.a,{store:V,children:Object(C.jsx)(H,{})})}),W)}},[[437,1,3]]]);
//# sourceMappingURL=main.c9560eb1.chunk.js.map
(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[16],{1834:function(e,t,n){n(72),e.exports=n(1865)},1835:function(e,t,n){},1865:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(5),a=n(35),o=n(6),s=n(7),i=n(2),l=n.n(i),d=n(34),h=n.n(d),j=n(25),b=n(4),u=n(1),O=n(8),m=n(22),p=n(29),f=n(9),x=n(74),g=n(114),v=n(101),w=n(102),k=n(136),N=n(78),y=n(0),C=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).action=function(){r.setState({btnDisabled:!0}),r.props.restoreRepo()},r.state={btnDisabled:!1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.formActionURL,e.csrfToken,e.toggle);return Object(y.jsxs)(g.a,{centered:!0,isOpen:!0,toggle:t,children:[Object(y.jsx)(v.a,{toggle:t,children:Object(u.ub)("Restore Library")}),Object(y.jsx)(w.a,{children:Object(y.jsx)("p",{children:Object(u.ub)("Are you sure you want to restore this library?")})}),Object(y.jsxs)(k.a,{children:[Object(y.jsx)(N.a,{color:"secondary",onClick:t,children:Object(u.ub)("Cancel")}),Object(y.jsx)(N.a,{color:"primary",onClick:this.action,disabled:this.state.btnDisabled,children:Object(u.ub)("Restore")})]})]})}}]),n}(i.Component),D=(n(158),n(180),n(1835),window.app.pageOptions),F=D.repoID,I=D.repoName,M=D.canRestoreRepo,R=D.commitID,S=D.commitTime,P=D.commitDesc,_=D.commitRelativeTime,L=D.showAuthor,U=D.authorAvatarURL,T=D.authorName,B=D.authorNickName,A=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).toggleDialog=function(){r.setState({isConfirmDialogOpen:!r.state.isConfirmDialogOpen})},r.onSearchedClick=function(e){if(!0===e.is_dir){var t=u.wc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(j.c)(t,{repalce:!0})}else{var n=u.wc+"lib/"+e.repo_id+"/file"+b.a.encodePath(e.path);window.open("about:blank").location.href=n}},r.goBack=function(e){e.preventDefault(),window.history.back()},r.renderFolder=function(e){r.setState({folderPath:e,folderItems:[],isLoading:!0}),O.a.listCommitDir(F,R,e).then((function(e){r.setState({isLoading:!1,folderItems:e.data.dirent_list})})).catch((function(e){r.setState({isLoading:!1,errorMsg:b.a.getErrorMsg(e,!0)})}))},r.clickFolderPath=function(e,t){t.preventDefault(),r.renderFolder(e)},r.renderPath=function(){var e=r.state.folderPath,t=e.split("/");return"/"==e?I:Object(y.jsxs)(l.a.Fragment,{children:[Object(y.jsx)("a",{href:"#",onClick:r.clickFolderPath.bind(Object(a.a)(r),"/"),children:I}),Object(y.jsx)("span",{children:" / "}),t.map((function(e,n){if(n>0&&n!=t.length-1)return Object(y.jsxs)(l.a.Fragment,{children:[Object(y.jsx)("a",{href:"#",onClick:r.clickFolderPath.bind(Object(a.a)(r),t.slice(0,n+1).join("/")),children:t[n]}),Object(y.jsx)("span",{children:" / "})]},n)})),t[t.length-1]]})},r.restoreRepo=function(){O.a.revertRepo(F,R).then((function(e){r.toggleDialog(),f.a.success(Object(u.ub)("Successfully restored the library."))})).catch((function(e){var t=b.a.getErrorMsg(e);r.toggleDialog(),f.a.danger(t)}))},r.state={isLoading:!0,errorMsg:"",folderPath:"/",folderItems:[],isConfirmDialogOpen:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.renderFolder(this.state.folderPath)}},{key:"render",value:function(){var e=this.state,t=e.isConfirmDialogOpen,n=e.folderPath;return Object(y.jsxs)(l.a.Fragment,{children:[Object(y.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(y.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(y.jsx)("a",{href:u.wc,children:Object(y.jsx)("img",{src:u.Sb+u.Nb,height:u.Mb,width:u.Ob,title:u.xc,alt:"logo"})}),Object(y.jsx)(x.a,{onSearchedClick:this.onSearchedClick})]}),Object(y.jsx)("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(y.jsxs)("h2",{children:[Object(y.jsx)("span",{children:b.a.generateDialogTitle(Object(u.ub)("{placeholder} Snapshot"),I)}),Object(y.jsxs)("span",{className:"heading-commit-time ml-1",children:["(",S,")"]})]}),Object(y.jsx)("a",{href:"#",className:"go-back",title:Object(u.ub)("Back"),role:"button","aria-label":Object(u.ub)("Back"),onClick:this.goBack,children:Object(y.jsx)("span",{className:"fas fa-chevron-left"})}),"/"==n&&Object(y.jsxs)("div",{className:"d-flex mb-2 align-items-center",children:[Object(y.jsx)("p",{className:"m-0",children:P}),Object(y.jsxs)("div",{className:"ml-4 border-left pl-4 d-flex align-items-center",children:[L?Object(y.jsxs)(l.a.Fragment,{children:[Object(y.jsx)("img",{src:U,width:"20",height:"20",alt:"",className:"rounded mr-1"}),Object(y.jsx)("a",{href:"".concat(u.wc,"profile/").concat(encodeURIComponent(T),"/"),children:B})]}):Object(y.jsx)("span",{children:Object(u.ub)("Unknown")}),Object(y.jsx)("p",{className:"m-0 ml-2",dangerouslySetInnerHTML:{__html:_}})]})]}),Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center op-bar",children:[Object(y.jsxs)("p",{className:"m-0",children:[Object(u.ub)("Current path: "),this.renderPath()]}),"/"==n&&M&&Object(y.jsx)("button",{className:"btn btn-secondary op-bar-btn",onClick:this.toggleDialog,children:Object(u.ub)("Restore")})]}),Object(y.jsx)(E,{data:this.state,renderFolder:this.renderFolder})]})})})]}),t&&Object(y.jsx)(p.a,{children:Object(y.jsx)(C,{restoreRepo:this.restoreRepo,toggle:this.toggleDialog})})]})}}]),n}(l.a.Component),E=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).theadData=[{width:"5%",text:""},{width:"55%",text:Object(u.ub)("Name")},{width:"20%",text:Object(u.ub)("Size")},{width:"20%",text:""}],r}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data,n=t.isLoading,c=t.errorMsg,r=t.folderPath,a=t.folderItems;return n?Object(y.jsx)(m.a,{}):c?Object(y.jsx)("p",{className:"error mt-6 text-center",children:c}):Object(y.jsxs)("table",{className:"table-hover",children:[Object(y.jsx)("thead",{children:Object(y.jsx)("tr",{children:this.theadData.map((function(e,t){return Object(y.jsx)("th",{width:e.width,children:e.text},t)}))})}),Object(y.jsx)("tbody",{children:a.map((function(t,n){return Object(y.jsx)(z,{item:t,folderPath:r,renderFolder:e.props.renderFolder},n)}))})]})}}]),n}(l.a.Component),z=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleMouseOver=function(){r.setState({isIconShown:!0})},r.handleMouseOut=function(){r.setState({isIconShown:!1})},r.restoreItem=function(e){e.preventDefault();var t=r.props.item,n=b.a.joinPath(r.props.folderPath,t.name);("dir"==t.type?O.a.revertFolder(F,n,R):O.a.revertFile(F,n,R)).then((function(e){f.a.success(Object(u.ub)("Successfully restored 1 item."))})).catch((function(e){var t=b.a.getErrorMsg(e);f.a.danger(t)}))},r.renderFolder=function(e){e.preventDefault();var t=r.props.item,n=r.props.folderPath;r.props.renderFolder(b.a.joinPath(n,t.name))},r.state={isIconShown:!1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.item,t=this.state.isIconShown,n=this.props.folderPath;return"dir"==e.type?Object(y.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onFocus:this.handleMouseOver,children:[Object(y.jsx)("td",{className:"text-center",children:Object(y.jsx)("img",{src:b.a.getFolderIconUrl(),alt:Object(u.ub)("Directory"),width:"24"})}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:"#",onClick:this.renderFolder,children:e.name})}),Object(y.jsx)("td",{}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:"#",className:"action-icon sf2-icon-reply ".concat(t?"":"invisible"),onClick:this.restoreItem,title:Object(u.ub)("Restore"),"aria-label":Object(u.ub)("Restore"),role:"button"})})]}):Object(y.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onFocus:this.handleMouseOver,children:[Object(y.jsx)("td",{className:"text-center",children:Object(y.jsx)("img",{src:b.a.getFileIconUrl(e.name),alt:Object(u.ub)("File"),width:"24"})}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:"".concat(u.wc,"repo/").concat(F,"/snapshot/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(R,"&p=").concat(encodeURIComponent(b.a.joinPath(n,e.name))),target:"_blank",children:e.name})}),Object(y.jsx)("td",{children:b.a.bytesToSize(e.size)}),Object(y.jsxs)("td",{children:[Object(y.jsx)("a",{href:"#",className:"action-icon sf2-icon-reply ".concat(t?"":"invisible"),onClick:this.restoreItem,title:Object(u.ub)("Restore"),"aria-label":Object(u.ub)("Restore"),role:"button"}),Object(y.jsx)("a",{href:"".concat(u.wc,"repo/").concat(F,"/").concat(e.obj_id,"/download/?file_name=").concat(encodeURIComponent(e.name),"&p=").concat(encodeURIComponent(b.a.joinPath(n,e.name))),className:"action-icon sf2-icon-download ".concat(t?"":"invisible"),title:Object(u.ub)("Download")})]})]})}}]),n}(l.a.Component);h.a.render(Object(y.jsx)(A,{}),document.getElementById("wrapper"))}},[[1834,1,0]]]);
//# sourceMappingURL=repoSnapshot.chunk.js.map
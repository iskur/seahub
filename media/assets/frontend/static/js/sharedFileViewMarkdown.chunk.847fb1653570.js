(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[23],{1688:function(e,t,n){n(76),e.exports=n(1689)},1689:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(5),o=n(7),i=n(6),c=n(2),s=n.n(c),d=n(31),u=n.n(d),l=n(51),f=n(8),h=n(4),m=n(1),j=n(105),b=n(94),p=n(19),v=n(10),O=n(0),g=window.shared.pageOptions,w=g.repoID,k=g.sharedToken,x=g.rawPath,y=g.err,C=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(O.jsx)(j.a,{content:Object(O.jsx)(N,{}),fileType:"md"})}}]),n}(s.a.Component),N=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).changeImageURL=function(e){if("image"==e.type){var t=e.data.src;if(!new RegExp(m.kc+"/lib/"+w+"/file.*raw=1").test(t))return;var n=t.substring(m.kc.length),a=n.indexOf("/file"),r=n.indexOf("?");n=n.substring(a+5,r),e.data.src=m.kc+"/view-image-via-share-link/?token="+k+"&path="+n}return e},r.modifyValueBeforeRender=function(e){return h.a.changeMarkdownNodes(e,r.changeImageURL)},r.updateForNoOutline=function(){var e=document.querySelector(".md-view .seafile-markdown-outline"),t=document.querySelector(".md-view .article");e.className+=" d-none",t.className+=" article-no-outline"},r.state={markdownContent:"",loading:!y},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.getFileContent(x).then((function(t){e.setState({markdownContent:t.data,loading:!1})})).catch((function(e){var t=h.a.getErrorMsg(e);v.a.danger(t)}))}},{key:"render",value:function(){return y?Object(O.jsx)(b.a,{}):this.state.loading?Object(O.jsx)(p.a,{}):Object(O.jsx)("div",{className:"shared-file-view-body",children:Object(O.jsx)("div",{className:"md-view",children:Object(O.jsx)(l.d,{scriptSource:m.Rb+"js/mathjax/tex-svg.js",markdownContent:this.state.markdownContent,showTOC:!0,updateForNoOutline:this.updateForNoOutline,activeTitleIndex:"",serviceURL:m.kc,sharedToken:k,repoID:w,modifyValueBeforeRender:this.modifyValueBeforeRender})})})}}]),n}(s.a.Component);u.a.render(Object(O.jsx)(C,{}),document.getElementById("wrapper"))}},[[1688,1,0]]]);
//# sourceMappingURL=sharedFileViewMarkdown.chunk.js.map
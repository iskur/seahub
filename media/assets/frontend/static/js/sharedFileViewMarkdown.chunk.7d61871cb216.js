(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[21],{1510:function(e,t,n){n(54),e.exports=n(1511)},1511:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),i=n(8),c=n(2),s=n.n(c),d=n(24),u=n.n(d),h=n(10),b=n(5),f=n(1),j=n(89),l=n(81),g=n(16),p=n(117),m=n(11),O=n(0),v=window.shared.pageOptions,w=v.repoID,k=v.sharedToken,x=v.rawPath,y=v.err,C=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(O.jsx)(j.a,{content:Object(O.jsx)(R,{})})}}]),n}(s.a.Component),R=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).changeImageURL=function(e){if("image"==e.type){var t=e.data.src;if(!new RegExp(f.bc+"/lib/"+w+"/file.*raw=1").test(t))return;var n=t.substring(f.bc.length),a=n.indexOf("/file"),r=n.indexOf("?");n=n.substring(a+5,r),e.data.src=f.bc+"/view-image-via-share-link/?token="+k+"&path="+b.a.encodePath(n)}return e},r.modifyValueBeforeRender=function(e){return b.a.changeMarkdownNodes(e,r.changeImageURL)},r.state={markdownContent:"",loading:!y},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.getFileContent(x).then((function(t){e.setState({markdownContent:t.data,loading:!1})})).catch((function(e){var t=b.a.getErrorMsg(e);m.a.danger(t)}))}},{key:"render",value:function(){return y?Object(O.jsx)(l.a,{}):this.state.loading?Object(O.jsx)(g.a,{}):Object(O.jsx)("div",{className:"shared-file-view-body",children:Object(O.jsx)("div",{className:"md-view",children:Object(O.jsx)(p.a,{scriptSource:f.Lb+"js/mathjax/tex-svg.js",markdownContent:this.state.markdownContent,showTOC:!1,serviceURL:f.bc,sharedToken:k,repoID:w,modifyValueBeforeRender:this.modifyValueBeforeRender})})})}}]),n}(s.a.Component);u.a.render(Object(O.jsx)(C,{}),document.getElementById("wrapper"))}},[[1510,1,0]]]);
//# sourceMappingURL=sharedFileViewMarkdown.chunk.js.map
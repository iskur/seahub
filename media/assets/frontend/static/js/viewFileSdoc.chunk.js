(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[38],{1825:function(e,t,n){n(72),e.exports=n(1862)},1862:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(34),s=n.n(i),o=n(40),c=n(389),l=n(4),u=n(22),d=n(3),p=n(5),g=n(6),h=n(7),b=n(147),S=n(8),v=n(9),f=n(455),j=n(0),I=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onInternalLinkToggle=function(){a.setState({isShowInternalLinkDialog:!a.state.isShowInternalLinkDialog})},a.toggleStar=function(){var e=a.props,t=e.isStarred,n=e.repoID,r=e.docPath;t?S.a.unstarItem(n,r).then((function(e){a.props.toggleStar(!1)})).catch((function(e){var t=l.a.getErrorMsg(e);v.a.danger(t)})):S.a.starItem(n,r).then((function(e){a.props.toggleStar(!0)})).catch((function(e){var t=l.a.getErrorMsg(e);v.a.danger(t)}))},a.state={isShowInternalLinkDialog:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=b.c.getInstance();this.unsubscribeInternalLinkEvent=e.subscribe(b.b.INTERNAL_LINK_CLICK,this.onInternalLinkToggle),this.unsubscribeStar=e.subscribe(b.b.TOGGLE_STAR,this.toggleStar)}},{key:"componentWillUnmount",value:function(){this.unsubscribeInternalLinkEvent(),this.unsubscribeStar()}},{key:"render",value:function(){var e=this.props,t=e.repoID,n=e.docPath,a=this.state.isShowInternalLinkDialog;return Object(j.jsx)(j.Fragment,{children:a&&Object(j.jsx)(f.a,{repoID:t,path:n,onInternalLinkDialogToggle:this.onInternalLinkToggle})})}}]),n}(r.a.Component),w=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).toggleStar=function(e){a.setState({isStarred:e})};var r=window.app.pageOptions.isStarred;return a.state={isStarred:r},a}return Object(p.a)(n,[{key:"render",value:function(){var e=window.seafile,t=e.repoID,n=e.docPath,r=this.state.isStarred;return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(b.e,{isStarred:r}),Object(j.jsx)(I,{repoID:t,docPath:n,isStarred:r,toggleStar:this.toggleStar})]})}}]),n}(r.a.Component),L=window.app.config,k=L.serviceURL,O=L.avatarURL,m=L.siteRoot,R=window.app.userInfo,U=R.username,D=R.name,P=window.app.pageOptions,x=P.repoID,y=P.repoName,T=P.parentDir,N=P.filePerm,C=P.docPath,E=P.docName,A=P.docUuid,F=P.seadocAccessToken,M=P.seadocServerUrl,_=P.assetsUrl,G=P.isSdocRevision,J=P.isPublished,K=P.originFilename,z=P.revisionCreatedAt;window.seafile={repoID:x,docPath:C,docName:E,docUuid:A,isOpenSocket:!0,serviceUrl:k,accessToken:F,sdocServer:M,name:D,username:U,avatarURL:O,siteRoot:m,docPerm:N,historyURL:l.a.generateHistoryURL(m,x,C),parentFolderURL:"".concat(m,"library/").concat(x,"/").concat(l.a.encodePath(y+T)),assetsUrl:_,isShowInternalLink:!0,isStarIconShown:!0,isSdocRevision:G,isPublished:J,revisionURL:l.a.generateRevisionURL(m,x,C),originFilename:K,revisionCreatedAt:z},s.a.render(Object(j.jsx)(o.a,{i18n:c.a,children:Object(j.jsx)(a.Suspense,{fallback:Object(j.jsx)(u.a,{}),children:Object(j.jsx)(w,{})})}),document.getElementById("wrapper"))},389:function(e,t,n){"use strict";var a=n(218),r=n(296),i=n(297),s=n(40),o=n(1),c=window.app.pageOptions.lang;a.a.use(r.a).use(i.a).use(s.b).init({lng:c,fallbackLng:"en",ns:["sdoc-editor"],defaultNS:"translations",whitelist:["en","zh-CN","fr","de","cs","es","es-AR","es-MX","ru"],backend:{loadPath:o.Sb+"sdoc-editor/locales/{{ lng }}/{{ ns }}.json"},debug:!1,interpolation:{escapeValue:!1},load:"currentOnly",react:{wait:!0}}),t.a=a.a}},[[1825,1,0]]]);
//# sourceMappingURL=viewFileSdoc.chunk.js.map
"use strict";(self.webpackChunkclarity_solutions=self.webpackChunkclarity_solutions||[]).push([[540],{8925:function(e,t,n){n.d(t,{m:function(){return h}});var r=n(7294),o=n(7462),a=n(5505),l=n(9347),i=n(2219),c=n(1924),s=n(3483);function d(e){var t=e.children,n=e.className,u=e.clearing,m=e.content,p=e.fitted,h=e.hidden,f=e.horizontal,v=e.inverted,g=e.section,Z=e.vertical,b=(0,a.Z)("ui",(0,l.lG)(u,"clearing"),(0,l.lG)(p,"fitted"),(0,l.lG)(h,"hidden"),(0,l.lG)(f,"horizontal"),(0,l.lG)(v,"inverted"),(0,l.lG)(g,"section"),(0,l.lG)(Z,"vertical"),"divider",n),E=(0,i.Z)(d,e),y=(0,c.Z)(d,e);return r.createElement(y,(0,o.Z)({},E,{className:b}),s.kK(t)?m:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"];var u=d,m=n(2945),p=n(6613),h=function(e){var t=e.pageTitle,n=e.children;return r.createElement(m.Z,{text:!0},r.createElement(p.Z,{as:"h1",textAlign:"center"},t),r.createElement(u,null),r.createElement(m.Z,{text:!0,style:{paddingTop:"1em",paddingBottom:"1.5em"}},n))}},3099:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(7294),o=n(5414),a=n(7462),l=n(1721),i=n(8338),c=n(1667),s=n(681),d=n(5546),u=n(9185),m=n(3883),p=n(549),h=n(5505),f=n(6872),v=n.n(f),g=n(185),Z=n(7478),b=n(8757).instance,E=n(9347),y=n(1924),D=n(3483),G=n(2219),C=n(8840),N=n(8595),k=n(9368),w=n(5653),P=n(8157),O=n(5287),x=n(9450);function S(e){var t=e.children,n=e.className,o=e.content,l=e.hidden,i=e.visible,c=(0,h.Z)((0,E.lG)(i,"visible"),(0,E.lG)(l,"hidden"),"content",n),s=(0,G.Z)(S,e),d=(0,y.Z)(S,e);return r.createElement(d,(0,a.Z)({},s,{className:c}),D.kK(t)?o:t)}S.handledProps=["as","children","className","content","hidden","visible"];var A=S;function R(e){var t=e.attached,n=e.basic,o=e.buttons,l=e.children,i=e.className,c=e.color,s=e.compact,d=e.content,u=e.floated,m=e.fluid,p=e.icon,f=e.inverted,v=e.labeled,g=e.negative,Z=e.positive,b=e.primary,C=e.secondary,N=e.size,k=e.toggle,P=e.vertical,x=e.widths,S=(0,h.Z)("ui",c,N,(0,E.lG)(n,"basic"),(0,E.lG)(s,"compact"),(0,E.lG)(m,"fluid"),(0,E.lG)(p,"icon"),(0,E.lG)(f,"inverted"),(0,E.lG)(v,"labeled"),(0,E.lG)(g,"negative"),(0,E.lG)(Z,"positive"),(0,E.lG)(b,"primary"),(0,E.lG)(C,"secondary"),(0,E.lG)(k,"toggle"),(0,E.lG)(P,"vertical"),(0,E.sU)(t,"attached"),(0,E.cD)(u,"floated"),(0,E.H0)(x),"buttons",i),A=(0,G.Z)(R,e),I=(0,y.Z)(R,e);return(0,O.Z)(o)?r.createElement(I,(0,a.Z)({},A,{className:S}),D.kK(l)?d:l):r.createElement(I,(0,a.Z)({},A,{className:S}),(0,w.Z)(o,(function(e){return U.create(e)})))}R.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"];var I=R;function M(e){var t=e.className,n=e.text,o=(0,h.Z)("or",t),l=(0,G.Z)(M,e),i=(0,y.Z)(M,e);return r.createElement(i,(0,a.Z)({},l,{className:o,"data-text":n}))}M.handledProps=["as","className","text"];var K=M,z=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).ref=(0,r.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,r=e.label;if(!(0,O.Z)(n)||!(0,O.Z)(r))return"div"},t.computeTabIndex=function(e){var n=t.props,r=n.disabled,o=n.tabIndex;return(0,O.Z)(o)?r?-1:"div"===e?0:void 0:o},t.focus=function(){return(0,m.Z)(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,m.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,r=e.children,o=e.content,a=e.icon;return!0===a||a&&(n||D.kK(r)&&(0,O.Z)(o))},t}(0,l.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,O.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,o=e.animated,l=e.attached,i=e.basic,c=e.children,s=e.circular,d=e.className,u=e.color,m=e.compact,f=e.content,v=e.disabled,g=e.floated,Z=e.fluid,b=e.icon,C=e.inverted,k=e.label,w=e.labelPosition,P=e.loading,S=e.negative,A=e.positive,R=e.primary,I=e.secondary,M=e.size,K=e.toggle,z=(0,h.Z)(u,M,(0,E.lG)(n,"active"),(0,E.lG)(i,"basic"),(0,E.lG)(s,"circular"),(0,E.lG)(m,"compact"),(0,E.lG)(Z,"fluid"),(0,E.lG)(this.hasIconClass(),"icon"),(0,E.lG)(C,"inverted"),(0,E.lG)(P,"loading"),(0,E.lG)(S,"negative"),(0,E.lG)(A,"positive"),(0,E.lG)(R,"primary"),(0,E.lG)(I,"secondary"),(0,E.lG)(K,"toggle"),(0,E.sU)(o,"animated"),(0,E.sU)(l,"attached")),U=(0,h.Z)((0,E.sU)(w||!!k,"labeled")),T=(0,h.Z)((0,E.lG)(v,"disabled"),(0,E.cD)(g,"floated")),_=(0,G.Z)(t,this.props),L=(0,y.Z)(t,this.props,this.computeElementType),j=this.computeTabIndex(L);if(!(0,O.Z)(k)){var B=(0,h.Z)("ui",z,"button",d),H=(0,h.Z)("ui",U,"button",d,T),q=x.Z.create(k,{defaultProps:{basic:!0,pointing:"left"===w?"right":"left"},autoGenerateKey:!1});return r.createElement(L,(0,a.Z)({},_,{className:H,onClick:this.handleClick}),"left"===w&&q,r.createElement(p.R,{innerRef:this.ref},r.createElement("button",{className:B,"aria-pressed":K?!!n:void 0,disabled:v,tabIndex:j},N.Z.create(b,{autoGenerateKey:!1})," ",f)),("right"===w||!w)&&q)}var F=(0,h.Z)("ui",z,T,U,"button",d),X=!D.kK(c),V=this.computeButtonAriaRole(L);return r.createElement(p.R,{innerRef:this.ref},r.createElement(L,(0,a.Z)({},_,{className:F,"aria-pressed":K?!!n:void 0,disabled:v&&"button"===L||void 0,onClick:this.handleClick,role:V,tabIndex:j}),X&&c,!X&&N.Z.create(b,{autoGenerateKey:!1}),!X&&f))},t}(r.Component);z.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"],z.defaultProps={as:"button"},z.Content=A,z.Group=I,z.Or=K,z.create=(0,P.u5)(z,(function(e){return{content:e}}));var U=z,T=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleButtonOverrides=function(e){return{onClick:function(n,r){(0,m.Z)(e,"onClick",n,r),(0,m.Z)(t.props,"onActionClick",n,r)}}},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,o=n.actions,l=n.children,i=n.className,c=n.content,s=(0,h.Z)("actions",i),d=(0,G.Z)(t,this.props),u=(0,y.Z)(t,this.props);return D.kK(l)?D.kK(c)?r.createElement(u,(0,a.Z)({},d,{className:s}),(0,w.Z)(o,(function(t){return U.create(t,{overrideProps:e.handleButtonOverrides})}))):r.createElement(u,(0,a.Z)({},d,{className:s}),c):r.createElement(u,(0,a.Z)({},d,{className:s}),l)},t}(r.Component);function _(e){var t=e.children,n=e.className,o=e.content,l=e.image,i=e.scrolling,c=(0,h.Z)(n,(0,E.lG)(l,"image"),(0,E.lG)(i,"scrolling"),"content"),s=(0,G.Z)(_,e),d=(0,y.Z)(_,e);return r.createElement(d,(0,a.Z)({},s,{className:c}),D.kK(t)?o:t)}T.handledProps=["actions","as","children","className","content","onActionClick"],T.create=(0,P.u5)(T,(function(e){return{actions:e}})),_.handledProps=["as","children","className","content","image","scrolling"],_.create=(0,P.u5)(_,(function(e){return{content:e}}));var L=_;function j(e){var t=e.children,n=e.className,o=e.content,l=(0,h.Z)("description",n),i=(0,G.Z)(j,e),c=(0,y.Z)(j,e);return r.createElement(c,(0,a.Z)({},i,{className:l}),D.kK(t)?o:t)}j.handledProps=["as","children","className","content"];var B=j,H=n(3129),q=(0,g.Z)()?r.useLayoutEffect:r.useEffect,F=/\s+/;var X=new Map,V=function(e,t){var n=function(e){var t=[];return e?(e.forEach((function(e){"string"==typeof e.current&&e.current.split(F).forEach((function(e){t.push(e)}))})),t.filter((function(e,t,n){return e.length>0&&n.indexOf(e)===t}))):[]}(t),r=function(e,t){return[t.filter((function(t){return-1===e.indexOf(t)})),e.filter((function(e){return-1===t.indexOf(e)}))]}(X.get(e)||[],n),o=r[0],a=r[1];e&&(o.forEach((function(t){return e.classList.add(t)})),a.forEach((function(t){return e.classList.remove(t)}))),X.set(e,n)},W=new function(){var e=this;this.add=function(t,n){if(e.nodes.has(t)){e.nodes.get(t).add(n)}else{var r=new Set;r.add(n),e.nodes.set(t,r)}},this.del=function(t,n){if(e.nodes.has(t)){var r=e.nodes.get(t);1!==r.size?r.delete(n):e.nodes.delete(t)}},this.emit=function(t,n){n(t,e.nodes.get(t))},this.nodes=new Map};function Y(e){var t=e.blurring,n=e.children,o=e.className,l=e.centered,i=e.content,c=e.inverted,s=e.mountNode,d=e.scrolling,u=r.useRef(),m=(0,h.Z)("ui",(0,E.lG)(c,"inverted"),(0,E.lG)(!l,"top aligned"),"page modals dimmer transition visible active",o),f=(0,h.Z)("dimmable dimmed",(0,E.lG)(t,"blurring"),(0,E.lG)(d,"scrolling")),v=(0,G.Z)(Y,e),g=(0,y.Z)(Y,e);return function(e,t){var n=r.useRef(),o=r.useRef(!1);q((function(){if(n.current=t,o.current){var r=(0,H.I)(e)?e.current:e;W.emit(r,V)}o.current=!0}),[t]),q((function(){var t=(0,H.I)(e)?e.current:e;return W.add(t,n),W.emit(t,V),function(){W.del(t,n),W.emit(t,V)}}),[e])}(s,f),r.useEffect((function(){u.current&&u.current.style&&u.current.style.setProperty("display","flex","important")}),[]),r.createElement(p.R,{innerRef:u},r.createElement(g,(0,a.Z)({},v,{className:m}),D.kK(n)?i:n))}Y.handledProps=["as","blurring","centered","children","className","content","inverted","mountNode","scrolling"],Y.create=(0,P.u5)(Y,(function(e){return{content:e}}));var J=Y;function Q(e){var t=e.children,n=e.className,o=e.content,l=(0,h.Z)("header",n),i=(0,G.Z)(Q,e),c=(0,y.Z)(Q,e);return r.createElement(c,(0,a.Z)({},i,{className:l}),D.kK(t)?o:t)}Q.handledProps=["as","children","className","content"],Q.create=(0,P.u5)(Q,(function(e){return{content:e}}));var $=Q,ee=function(e){var t=e.height+0,n=e.height+0,r=window.innerHeight;return r/2+-n/2+t+50<r},te=function(e,t,n){var r=t&&e?-n.height/2:0;return{marginLeft:-n.width/2,marginTop:r}},ne=function(){return!window.ActiveXObject&&"ActiveXObject"in window},re=function(e){function t(){for(var n,o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(n=e.call.apply(e,[this].concat(l))||this).legacy=(0,g.Z)()&&ne(),n.ref=(0,r.createRef)(),n.dimmerRef=(0,r.createRef)(),n.latestDocumentMouseDownEvent=null,n.getMountNode=function(){return(0,g.Z)()?n.props.mountNode||document.body:null},n.handleActionsOverrides=function(e){return{onActionClick:function(t,r){(0,m.Z)(e,"onActionClick",t,r),(0,m.Z)(n.props,"onActionClick",t,n.props),n.handleClose(t)}}},n.handleClose=function(e){n.setState({open:!1}),(0,m.Z)(n.props,"onClose",e,(0,a.Z)({},n.props,{open:!1}))},n.handleDocumentMouseDown=function(e){n.latestDocumentMouseDownEvent=e},n.handleDocumentClick=function(e){var t=n.props.closeOnDimmerClick,r=n.latestDocumentMouseDownEvent;n.latestDocumentMouseDownEvent=null,!t||(0,Z.Z)(n.ref.current,r)||(0,Z.Z)(n.ref.current,e)||(n.setState({open:!1}),(0,m.Z)(n.props,"onClose",e,(0,a.Z)({},n.props,{open:!1})))},n.handleIconOverrides=function(e){return{onClick:function(t){(0,m.Z)(e,"onClick",t),n.handleClose(t)}}},n.handleOpen=function(e){(0,m.Z)(n.props,"onOpen",e,(0,a.Z)({},n.props,{open:!0})),n.setState({open:!0})},n.handlePortalMount=function(e){var t=n.props.eventPool;n.setState({scrolling:!1}),n.setPositionAndClassNames(),b.sub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),b.sub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,m.Z)(n.props,"onMount",e,n.props)},n.handlePortalUnmount=function(e){var t=n.props.eventPool;cancelAnimationFrame(n.animationRequestId),b.unsub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),b.unsub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,m.Z)(n.props,"onUnmount",e,n.props)},n.setPositionAndClassNames=function(){var e,t=n.props.centered,r={};if(n.ref.current){var o=n.ref.current.getBoundingClientRect(),a=ee(o);e=!a;var l=n.legacy?te(a,t,o):{};v()(n.state.legacyStyles,l)||(r.legacyStyles=l),n.state.scrolling!==e&&(r.scrolling=e)}(0,u.Z)(r)||n.setState(r),n.animationRequestId=requestAnimationFrame(n.setPositionAndClassNames)},n.renderContent=function(e){var o=n.props,l=o.actions,i=o.basic,c=o.children,s=o.className,d=o.closeIcon,u=o.content,m=o.header,f=o.size,v=o.style,g=n.state,Z=g.legacyStyles,b=g.scrolling,G=(0,h.Z)("ui",f,(0,E.lG)(i,"basic"),(0,E.lG)(n.legacy,"legacy"),(0,E.lG)(b,"scrolling"),"modal transition visible active",s),C=(0,y.Z)(t,n.props),k=!0===d?"close":d,w=N.Z.create(k,{overrideProps:n.handleIconOverrides});return r.createElement(p.R,{innerRef:n.ref},r.createElement(C,(0,a.Z)({},e,{className:G,style:(0,a.Z)({},Z,v)}),w,D.kK(c)?r.createElement(r.Fragment,null,$.create(m,{autoGenerateKey:!1}),L.create(u,{autoGenerateKey:!1}),T.create(l,{overrideProps:n.handleActionsOverrides})):c))},n}(0,l.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.handlePortalUnmount()},n.render=function(){var e=this.props,n=e.centered,o=e.closeOnDocumentClick,l=e.dimmer,u=e.eventPool,m=e.trigger,h=this.state,f=h.open,v=h.scrolling,Z=this.getMountNode();if(!(0,g.Z)())return(0,r.isValidElement)(m)?m:null;var b=(0,G.Z)(t,this.props),E=k.Z.handledProps,y=(0,d.Z)(b,(function(e,t,n){return(0,s.Z)(E,n)||(e[n]=t),e}),{}),D=(0,c.Z)(b,E);return r.createElement(k.Z,(0,a.Z)({closeOnDocumentClick:o},D,{trigger:m,eventPool:u,mountNode:Z,open:f,onClose:this.handleClose,onMount:this.handlePortalMount,onOpen:this.handleOpen,onUnmount:this.handlePortalUnmount}),r.createElement(p.R,{innerRef:this.dimmerRef},J.create((0,i.Z)(l)?l:{},{autoGenerateKey:!1,defaultProps:{blurring:"blurring"===l,inverted:"inverted"===l},overrideProps:{children:this.renderContent(y),centered:n,mountNode:Z,scrolling:v}})))},t}(C.Z);re.handledProps=["actions","as","basic","centered","children","className","closeIcon","closeOnDimmerClick","closeOnDocumentClick","content","defaultOpen","dimmer","eventPool","header","mountNode","onActionClick","onClose","onMount","onOpen","onUnmount","open","size","style","trigger"],re.defaultProps={centered:!0,dimmer:!0,closeOnDimmerClick:!0,closeOnDocumentClick:!1,eventPool:"Modal"},re.autoControlledProps=["open"],re.Actions=T,re.Content=L,re.Description=B,re.Dimmer=J,re.Header=$;var oe=re,ae=n(6613),le=n(2945),ie=n(3877),ce=n(9),se=n(8925),de=n(8935),ue=n(594),me=ce.default.div.withConfig({displayName:"dddog__Galary",componentId:"sc-drgaxk-0"})(["display:flex;justify-content:center;margin-top:32px;margin-bottom:64px;"]),pe=ce.default.div.withConfig({displayName:"dddog__GalaryContent",componentId:"sc-drgaxk-1"})(["text-align:center;"]),he=function(){return r.createElement(U,{basic:!0,as:"a",href:"https://apps.apple.com/jp/app/dddog/id1594115257",color:"blue",target:"_blank",rel:"noreferrer"},r.createElement(ae.Z,{as:"b",color:"blue",textAlign:"center"},"DDDOGをAppStoreで入手"))},fe=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=function(e){return{__html:'\'<model-viewer\n                  bounds="tight"\n                  src='+e.src+"\n                  ios-src="+e.iosSrc+'\n                  ar\n                  ar-modes="webxr scene-viewer quick-look"\n                  camera-controls\n                  environment-image="neutral"\n                  poster="poster.webp"\n                  shadow-intensity="1"\n                  >\n                  <div class="progress-bar hide" slot="progress-bar">\n                      <div class="update-bar"></div>\n                  </div>\n                </model-viewer>\''}};return r.createElement(de.Z,null,r.createElement(o.q,null,r.createElement("html",{lang:"ja",prefix:"og: https://ogp.me/ns#"}),r.createElement("title",null,ue.y.PAGES.DDDOG.TITLE),r.createElement("meta",{property:"og:url",content:"https://clsl.net/products/dddog"}),r.createElement("meta",{property:"og:type",content:"og:product"}),r.createElement("meta",{property:"og:title",content:"DDDOG"}),r.createElement("meta",{property:"og:description",content:"フォトグラメトリ手法を用いたiOS用の高精度3Dスキャンアプリ DDDOG"}),r.createElement("meta",{property:"og:site_name",content:"Clarity SOlutions"}),r.createElement("meta",{name:"description",content:"フォトグラメトリ手法を用いたiOS用の高精度3Dスキャンアプリ DDDOG"}),r.createElement("script",{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"})),r.createElement(se.m,{pageTitle:"高精度3Dモデル作成アプリ「DDDOG」"},r.createElement(ae.Z.Subheader,null,"「DDDOG」はPhotogrammetry手法を用いたiOS専用の3Dモデル生成アプリです。 3Dモデル化したい対象をiPhoneでキャプチャーすることで、 モデル生成リクエストから最短数分でオリジナルの3DモデルがiOS端末にダウンロードされます。 また、LiDARセンサー機能付きのデバイスを使用することで実際の大きさに近い3Dモデルを生成することができます。"),r.createElement(le.Z,{style:{padding:"30px 0",textAlign:"center"}},r.createElement(he,null)),r.createElement(le.Z,{style:{padding:"50px"}},r.createElement(ae.Z,{as:"h2",textAlign:"center"},"DDDOGの使い方")),r.createElement("div",{style:{height:"35vh",width:"100%"}},r.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/XKVFR_ZiUZE",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})),r.createElement(le.Z,{style:{padding:"50px"}},r.createElement(ae.Z,{as:"h2",textAlign:"center"},"DDDOGで生成した3Dモデルギャラリー"),r.createElement(me,null,r.createElement(pe,null,r.createElement("div",{className:"text",dangerouslySetInnerHTML:a({src:"/assets/tonakai.glb",iosSrc:"/assets/tonakaiUSDZ.usdz"})}),r.createElement(ae.Z.Subheader,null,"DAISOで購入したトナカイの置物"))),r.createElement(me,null,r.createElement(pe,null,r.createElement("div",{className:"text",dangerouslySetInnerHTML:a({src:"/assets/ichirinzashi.glb",iosSrc:"/assets/ichirinzashiUSDZ.usdz"})}),r.createElement(ae.Z.Subheader,null,"陶芸家 佐藤烓 の一輪挿し"))),r.createElement(me,null,r.createElement(pe,null,r.createElement("div",{className:"text",dangerouslySetInnerHTML:a({src:"/assets/joro.glb",iosSrc:"/assets/joroUSDZ.usdz"})}),r.createElement(ae.Z.Subheader,null,"陶芸家 佐藤烓 のピッチャー")))),r.createElement(le.Z,{style:{padding:"30px 0",textAlign:"center"}},r.createElement(he,null)),r.createElement(oe,{open:t,onClose:function(){return n(!1)},onOpen:function(){return n(!0)}},r.createElement(oe.Content,null,r.createElement(ie.Z,{src:"/assets/dddog_app_screenshot.png",fluid:!0,centered:!0})))))}}}]);
//# sourceMappingURL=component---src-pages-products-dddog-tsx-dfbcb21831db3c35a971.js.map
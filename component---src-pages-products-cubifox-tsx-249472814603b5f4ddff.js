"use strict";(self.webpackChunkclarity_solutions=self.webpackChunkclarity_solutions||[]).push([[239],{8642:function(e,t,n){n.d(t,{Z:function(){return D}});var a=n(7462),r=n(1721),l=n(3883),i=n(5287),c=n(549),o=n(5505),s=n(7294),d=n(3483),u=n(9347),p=n(2219),m=n(1924),f=n(8157),h=n(8595),v=n(9450);function b(e){var t=e.children,n=e.className,r=e.content,l=e.hidden,i=e.visible,c=(0,o.Z)((0,u.lG)(i,"visible"),(0,u.lG)(l,"hidden"),"content",n),f=(0,p.Z)(b,e),h=(0,m.Z)(b,e);return s.createElement(h,(0,a.Z)({},f,{className:c}),d.kK(t)?r:t)}b.handledProps=["as","children","className","content","hidden","visible"];var g=b,Z=n(5653);function G(e){var t=e.attached,n=e.basic,r=e.buttons,l=e.children,c=e.className,f=e.color,h=e.compact,v=e.content,b=e.floated,g=e.fluid,E=e.icon,y=e.inverted,C=e.labeled,N=e.negative,x=e.positive,I=e.primary,k=e.secondary,P=e.size,F=e.toggle,O=e.vertical,T=e.widths,B=(0,o.Z)("ui",f,P,(0,u.lG)(n,"basic"),(0,u.lG)(h,"compact"),(0,u.lG)(g,"fluid"),(0,u.lG)(E,"icon"),(0,u.lG)(y,"inverted"),(0,u.lG)(C,"labeled"),(0,u.lG)(N,"negative"),(0,u.lG)(x,"positive"),(0,u.lG)(I,"primary"),(0,u.lG)(k,"secondary"),(0,u.lG)(F,"toggle"),(0,u.lG)(O,"vertical"),(0,u.sU)(t,"attached"),(0,u.cD)(b,"floated"),(0,u.H0)(T),"buttons",c),U=(0,p.Z)(G,e),_=(0,m.Z)(G,e);return(0,i.Z)(r)?s.createElement(_,(0,a.Z)({},U,{className:B}),d.kK(l)?v:l):s.createElement(_,(0,a.Z)({},U,{className:B}),(0,Z.Z)(r,(function(e){return D.create(e)})))}G.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"];var E=G;function y(e){var t=e.className,n=e.text,r=(0,o.Z)("or",t),l=(0,p.Z)(y,e),i=(0,m.Z)(y,e);return s.createElement(i,(0,a.Z)({},l,{className:r,"data-text":n}))}y.handledProps=["as","className","text"];var C=y,N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).ref=(0,s.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,a=e.label;if(!(0,i.Z)(n)||!(0,i.Z)(a))return"div"},t.computeTabIndex=function(e){var n=t.props,a=n.disabled,r=n.tabIndex;return(0,i.Z)(r)?a?-1:"div"===e?0:void 0:r},t.focus=function(){return(0,l.Z)(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,l.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,a=e.children,r=e.content,l=e.icon;return!0===l||l&&(n||d.kK(a)&&(0,i.Z)(r))},t}(0,r.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,i.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,r=e.animated,l=e.attached,f=e.basic,b=e.children,g=e.circular,Z=e.className,G=e.color,E=e.compact,y=e.content,C=e.disabled,N=e.floated,D=e.fluid,x=e.icon,I=e.inverted,k=e.label,P=e.labelPosition,F=e.loading,O=e.negative,T=e.positive,B=e.primary,U=e.secondary,_=e.size,R=e.toggle,X=(0,o.Z)(G,_,(0,u.lG)(n,"active"),(0,u.lG)(f,"basic"),(0,u.lG)(g,"circular"),(0,u.lG)(E,"compact"),(0,u.lG)(D,"fluid"),(0,u.lG)(this.hasIconClass(),"icon"),(0,u.lG)(I,"inverted"),(0,u.lG)(F,"loading"),(0,u.lG)(O,"negative"),(0,u.lG)(T,"positive"),(0,u.lG)(B,"primary"),(0,u.lG)(U,"secondary"),(0,u.lG)(R,"toggle"),(0,u.sU)(r,"animated"),(0,u.sU)(l,"attached")),A=(0,o.Z)((0,u.sU)(P||!!k,"labeled")),K=(0,o.Z)((0,u.lG)(C,"disabled"),(0,u.cD)(N,"floated")),z=(0,p.Z)(t,this.props),w=(0,m.Z)(t,this.props,this.computeElementType),S=this.computeTabIndex(w);if(!(0,i.Z)(k)){var j=(0,o.Z)("ui",X,"button",Z),q=(0,o.Z)("ui",A,"button",Z,K),H=v.Z.create(k,{defaultProps:{basic:!0,pointing:"left"===P?"right":"left"},autoGenerateKey:!1});return s.createElement(w,(0,a.Z)({},z,{className:q,onClick:this.handleClick}),"left"===P&&H,s.createElement(c.R,{innerRef:this.ref},s.createElement("button",{className:j,"aria-pressed":R?!!n:void 0,disabled:C,tabIndex:S},h.Z.create(x,{autoGenerateKey:!1})," ",y)),("right"===P||!P)&&H)}var J=(0,o.Z)("ui",X,K,A,"button",Z),L=!d.kK(b),M=this.computeButtonAriaRole(w);return s.createElement(c.R,{innerRef:this.ref},s.createElement(w,(0,a.Z)({},z,{className:J,"aria-pressed":R?!!n:void 0,disabled:C&&"button"===w||void 0,onClick:this.handleClick,role:M,tabIndex:S}),L&&b,!L&&h.Z.create(x,{autoGenerateKey:!1}),!L&&y))},t}(s.Component);N.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"],N.defaultProps={as:"button"},N.Content=g,N.Group=E,N.Or=C,N.create=(0,f.u5)(N,(function(e){return{content:e}}));var D=N},8925:function(e,t,n){n.d(t,{m:function(){return f}});var a=n(7294),r=n(7462),l=n(5505),i=n(9347),c=n(2219),o=n(1924),s=n(3483);function d(e){var t=e.children,n=e.className,u=e.clearing,p=e.content,m=e.fitted,f=e.hidden,h=e.horizontal,v=e.inverted,b=e.section,g=e.vertical,Z=(0,l.Z)("ui",(0,i.lG)(u,"clearing"),(0,i.lG)(m,"fitted"),(0,i.lG)(f,"hidden"),(0,i.lG)(h,"horizontal"),(0,i.lG)(v,"inverted"),(0,i.lG)(b,"section"),(0,i.lG)(g,"vertical"),"divider",n),G=(0,c.Z)(d,e),E=(0,o.Z)(d,e);return a.createElement(E,(0,r.Z)({},G,{className:Z}),s.kK(t)?p:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"];var u=d,p=n(2945),m=n(6613),f=function(e){var t=e.pageTitle,n=e.children;return a.createElement(p.Z,{text:!0},a.createElement(m.Z,{as:"h1",textAlign:"center"},t),a.createElement(u,null),a.createElement(p.Z,{text:!0,style:{paddingTop:"1em",paddingBottom:"1.5em"}},n))}},426:function(e,t,n){n.d(t,{R:function(){return a}});var a={DDDOG_APP:"https://apps.apple.com/jp/app/dddog/id1594115257",CUBIFOX:"https://cubifox.clsl.net"}},3471:function(e,t,n){n.r(t);var a=n(7294),r=n(5414),l=n(2945),i=n(8642),c=n(6613),o=n(3877),s=n(8925),d=n(8935),u=n(594),p=n(426);t.default=function(){return a.createElement(d.Z,null,a.createElement(r.q,null,a.createElement("html",{lang:"ja",prefix:"og: https://ogp.me/ns#"}),a.createElement("title",null,u.y.PAGES.CUBIFOX.TITLE),a.createElement("meta",{property:"og:url",content:"https://clsl.net/products/cubifox"}),a.createElement("meta",{property:"og:type",content:"og:product"}),a.createElement("meta",{property:"og:title",content:"CUBIFOX"}),a.createElement("meta",{property:"og:description",content:"3Dオブジェクト×NFTマーケットプレイス CUBIFOX (αテスト版)"}),a.createElement("meta",{property:"og:site_name",content:"Clarity Solutions"}),a.createElement("meta",{name:"description",content:"3Dオブジェクト×NFTマーケットプレイス CUBIFOX (αテスト版)"})),a.createElement(s.m,{pageTitle:"3Dオブジェクト × NFTマーケットプレイス「CUBIFOX (αテスト版)」"},a.createElement("p",null,"「CUBIFOX」は3Dオブジェクト専門のNFTマーケットプレイスです。 イーサリアムのサイドチェーンであるPolygonネットワークを利用しているため取引手数料（ガス代）を低く抑えることができるのが特徴です。 また、データの中央集権化を避けるために3Dオブジェクトデータや3Dオブジェクトのサムネイル画像は分散型ストレージであるIPFS上に保存されています。 現在はOBJ形式の3Dオブジェクトにのみ対応しておりますが今後のアップデートで他の3Dファイル形式にも対応していく予定です。 また、",a.createElement("a",{href:p.R.DDDOG_APP,target:"_blank",rel:"noreferrer"},"「DDDOG」"),"アプリを使うことで3Dオブジェクトを簡単に生成することができるため、誰もが自作の3DオブジェクトのNFTを作成・販売することが可能になります。"),a.createElement("b",null,"（現在はαテスト版として稼働中のため、PolygonのテストネットであるMumbaiを利用したサービス提供となります）"),a.createElement(l.Z,{style:{padding:"5em 0","text-align":"center"}},a.createElement(i.Z,{basic:!0,as:"a",href:p.R.CUBIFOX,color:"blue",target:"_blank",rel:"noreferrer"},a.createElement(c.Z,{as:"b",color:"blue",textAlign:"center"},"CUBIFOX (αテスト版) を使ってみる"))),a.createElement(c.Z,{as:"h2",content:"アイテム一覧画面イメージ"}),a.createElement(l.Z,{style:{padding:"30px"}},a.createElement(o.Z,{src:"/assets/cubifox_home_image.png",style:{opacity:.8},fluid:!0,centered:!0})),a.createElement(c.Z,{as:"h2",content:"アイテム詳細画面イメージ"}),a.createElement(l.Z,{style:{padding:"30px"}},a.createElement(o.Z,{src:"/assets/cubifox_trade_item_detail_image.png",style:{opacity:.8},fluid:!0,centered:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-products-cubifox-tsx-249472814603b5f4ddff.js.map
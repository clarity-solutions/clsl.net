(self.webpackChunkclarity_solutions=self.webpackChunkclarity_solutions||[]).push([[540],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",c),d}}},8925:function(e,t,n){"use strict";n.d(t,{m:function(){return m}});var r=n(7294),o=n(7462),i=n(5505),a=n(9347),c=n(2219),l=n(1924),s=n(3483);function u(e){var t=e.children,n=e.className,d=e.clearing,f=e.content,p=e.fitted,m=e.hidden,h=e.horizontal,v=e.inverted,y=e.section,g=e.vertical,b=(0,i.Z)("ui",(0,a.lG)(d,"clearing"),(0,a.lG)(p,"fitted"),(0,a.lG)(m,"hidden"),(0,a.lG)(h,"horizontal"),(0,a.lG)(v,"inverted"),(0,a.lG)(y,"section"),(0,a.lG)(g,"vertical"),"divider",n),E=(0,c.Z)(u,e),w=(0,l.Z)(u,e);return r.createElement(w,(0,o.Z)({},E,{className:b}),s.kK(t)?f:t)}u.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"];var d=u,f=n(2945),p=n(6613),m=function(e){var t=e.pageTitle,n=e.children;return r.createElement(f.Z,{text:!0},r.createElement(p.Z,{as:"h1",textAlign:"center"},t),r.createElement(d,null),r.createElement(f.Z,{text:!0,style:{paddingTop:"1em",paddingBottom:"1.5em"}},n))}},9972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ot}});var r,o,i,a,c=n(7294),l=n(5697),s=n.n(l),u=n(4839),d=n.n(u),f=n(2993),p=n.n(f),m=n(6494),h=n.n(m),v="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",T="href",C="http-equiv",Z="innerHTML",O="itemprop",A="name",S="property",k="rel",P="src",N="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",G="defer",j="encodeSpecialCharacters",I="onChangeClientState",R="titleTemplate",M=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),L=[b.NOSCRIPT,b.SCRIPT,b.STYLE],_="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=J(e,b.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,x);return t||r||void 0},V=function(e){return J(e,I)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==Z&&c!==w&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(b.BODY,r),le(b.HTML,o),ce(d,f);var p={baseTag:se(b.BASE,n),linkTags:se(b.LINK,i),metaTags:se(b.META,a),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(_),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(_):n.getAttribute(_)!==a.join(",")&&n.setAttribute(_,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===Z)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(_,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[_]=!0,o=de(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[_]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===Z||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===Z||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===L.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(b.BASE,t,r),bodyAttributes:fe(v,n,r),htmlAttributes:fe(y,o,r),link:fe(b.LINK,i,r),meta:fe(b.META,a,r),noscript:fe(b.NOSCRIPT,c,r),script:fe(b.SCRIPT,l,r),style:fe(b.STYLE,s,r),title:fe(b.TITLE,{title:d,titleAttributes:f},r)}},me=d()((function(e){return{baseTag:X([T,N],e),bodyAttributes:W(v,e),defer:J(e,G),encode:J(e,j),htmlAttributes:W(y,e),linkTags:$(b.LINK,[k,T],e),metaTags:$(b.META,[A,E,C,S,O],e),noscriptTags:$(b.NOSCRIPT,[Z],e),onChangeClientState:V(e),scriptTags:$(b.SCRIPT,[P,Z],e),styleTags:$(b.STYLE,[w],e),title:Y(e),titleAttributes:W(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return U(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case b.BODY:return B({},o,{bodyAttributes:B({},i)});case b.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ve=n(7462),ye=n(1721),ge=n(8338),be=n(1667),Ee=n(681),we=n(5546),Te=n(9185),Ce=n(3883),Ze=n(549),Oe=n(5505),Ae=n(6872),Se=n.n(Ae),ke=n(185),Pe=n(7478),Ne=n(8757).instance,De=n(9347),xe=n(1924),Ge=n(3483),je=n(2219),Ie=n(8840),Re=n(8595),Me=n(9368),Le=n(5653),_e=n(8157),Ke=n(5287),Ue=n(9450);function ze(e){var t=e.children,n=e.className,r=e.content,o=e.hidden,i=e.visible,a=(0,Oe.Z)((0,De.lG)(i,"visible"),(0,De.lG)(o,"hidden"),"content",n),l=(0,je.Z)(ze,e),s=(0,xe.Z)(ze,e);return c.createElement(s,(0,ve.Z)({},l,{className:a}),Ge.kK(t)?r:t)}ze.handledProps=["as","children","className","content","hidden","visible"];var Be=ze;function He(e){var t=e.attached,n=e.basic,r=e.buttons,o=e.children,i=e.className,a=e.color,l=e.compact,s=e.content,u=e.floated,d=e.fluid,f=e.icon,p=e.inverted,m=e.labeled,h=e.negative,v=e.positive,y=e.primary,g=e.secondary,b=e.size,E=e.toggle,w=e.vertical,T=e.widths,C=(0,Oe.Z)("ui",a,b,(0,De.lG)(n,"basic"),(0,De.lG)(l,"compact"),(0,De.lG)(d,"fluid"),(0,De.lG)(f,"icon"),(0,De.lG)(p,"inverted"),(0,De.lG)(m,"labeled"),(0,De.lG)(h,"negative"),(0,De.lG)(v,"positive"),(0,De.lG)(y,"primary"),(0,De.lG)(g,"secondary"),(0,De.lG)(E,"toggle"),(0,De.lG)(w,"vertical"),(0,De.sU)(t,"attached"),(0,De.cD)(u,"floated"),(0,De.H0)(T),"buttons",i),Z=(0,je.Z)(He,e),O=(0,xe.Z)(He,e);return(0,Ke.Z)(r)?c.createElement(O,(0,ve.Z)({},Z,{className:C}),Ge.kK(o)?s:o):c.createElement(O,(0,ve.Z)({},Z,{className:C}),(0,Le.Z)(r,(function(e){return We.create(e)})))}He.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"];var qe=He;function Fe(e){var t=e.className,n=e.text,r=(0,Oe.Z)("or",t),o=(0,je.Z)(Fe,e),i=(0,xe.Z)(Fe,e);return c.createElement(i,(0,ve.Z)({},o,{className:r,"data-text":n}))}Fe.handledProps=["as","className","text"];var Ye=Fe,Ve=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).ref=(0,c.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,r=e.label;if(!(0,Ke.Z)(n)||!(0,Ke.Z)(r))return"div"},t.computeTabIndex=function(e){var n=t.props,r=n.disabled,o=n.tabIndex;return(0,Ke.Z)(o)?r?-1:"div"===e?0:void 0:o},t.focus=function(){return(0,Ce.Z)(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,Ce.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,r=e.children,o=e.content,i=e.icon;return!0===i||i&&(n||Ge.kK(r)&&(0,Ke.Z)(o))},t}(0,ye.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,Ke.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,r=e.animated,o=e.attached,i=e.basic,a=e.children,l=e.circular,s=e.className,u=e.color,d=e.compact,f=e.content,p=e.disabled,m=e.floated,h=e.fluid,v=e.icon,y=e.inverted,g=e.label,b=e.labelPosition,E=e.loading,w=e.negative,T=e.positive,C=e.primary,Z=e.secondary,O=e.size,A=e.toggle,S=(0,Oe.Z)(u,O,(0,De.lG)(n,"active"),(0,De.lG)(i,"basic"),(0,De.lG)(l,"circular"),(0,De.lG)(d,"compact"),(0,De.lG)(h,"fluid"),(0,De.lG)(this.hasIconClass(),"icon"),(0,De.lG)(y,"inverted"),(0,De.lG)(E,"loading"),(0,De.lG)(w,"negative"),(0,De.lG)(T,"positive"),(0,De.lG)(C,"primary"),(0,De.lG)(Z,"secondary"),(0,De.lG)(A,"toggle"),(0,De.sU)(r,"animated"),(0,De.sU)(o,"attached")),k=(0,Oe.Z)((0,De.sU)(b||!!g,"labeled")),P=(0,Oe.Z)((0,De.lG)(p,"disabled"),(0,De.cD)(m,"floated")),N=(0,je.Z)(t,this.props),D=(0,xe.Z)(t,this.props,this.computeElementType),x=this.computeTabIndex(D);if(!(0,Ke.Z)(g)){var G=(0,Oe.Z)("ui",S,"button",s),j=(0,Oe.Z)("ui",k,"button",s,P),I=Ue.Z.create(g,{defaultProps:{basic:!0,pointing:"left"===b?"right":"left"},autoGenerateKey:!1});return c.createElement(D,(0,ve.Z)({},N,{className:j,onClick:this.handleClick}),"left"===b&&I,c.createElement(Ze.R,{innerRef:this.ref},c.createElement("button",{className:G,"aria-pressed":A?!!n:void 0,disabled:p,tabIndex:x},Re.Z.create(v,{autoGenerateKey:!1})," ",f)),("right"===b||!b)&&I)}var R=(0,Oe.Z)("ui",S,P,k,"button",s),M=!Ge.kK(a),L=this.computeButtonAriaRole(D);return c.createElement(Ze.R,{innerRef:this.ref},c.createElement(D,(0,ve.Z)({},N,{className:R,"aria-pressed":A?!!n:void 0,disabled:p&&"button"===D||void 0,onClick:this.handleClick,role:L,tabIndex:x}),M&&a,!M&&Re.Z.create(v,{autoGenerateKey:!1}),!M&&f))},t}(c.Component);Ve.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"],Ve.defaultProps={as:"button"},Ve.Content=Be,Ve.Group=qe,Ve.Or=Ye,Ve.create=(0,_e.u5)(Ve,(function(e){return{content:e}}));var We=Ve,Xe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleButtonOverrides=function(e){return{onClick:function(n,r){(0,Ce.Z)(e,"onClick",n,r),(0,Ce.Z)(t.props,"onActionClick",n,r)}}},t}return(0,ye.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,r=n.actions,o=n.children,i=n.className,a=n.content,l=(0,Oe.Z)("actions",i),s=(0,je.Z)(t,this.props),u=(0,xe.Z)(t,this.props);return Ge.kK(o)?Ge.kK(a)?c.createElement(u,(0,ve.Z)({},s,{className:l}),(0,Le.Z)(r,(function(t){return We.create(t,{overrideProps:e.handleButtonOverrides})}))):c.createElement(u,(0,ve.Z)({},s,{className:l}),a):c.createElement(u,(0,ve.Z)({},s,{className:l}),o)},t}(c.Component);function $e(e){var t=e.children,n=e.className,r=e.content,o=e.image,i=e.scrolling,a=(0,Oe.Z)(n,(0,De.lG)(o,"image"),(0,De.lG)(i,"scrolling"),"content"),l=(0,je.Z)($e,e),s=(0,xe.Z)($e,e);return c.createElement(s,(0,ve.Z)({},l,{className:a}),Ge.kK(t)?r:t)}Xe.handledProps=["actions","as","children","className","content","onActionClick"],Xe.create=(0,_e.u5)(Xe,(function(e){return{actions:e}})),$e.handledProps=["as","children","className","content","image","scrolling"],$e.create=(0,_e.u5)($e,(function(e){return{content:e}}));var Je=$e;function Qe(e){var t=e.children,n=e.className,r=e.content,o=(0,Oe.Z)("description",n),i=(0,je.Z)(Qe,e),a=(0,xe.Z)(Qe,e);return c.createElement(a,(0,ve.Z)({},i,{className:o}),Ge.kK(t)?r:t)}Qe.handledProps=["as","children","className","content"];var et=Qe,tt=n(3129),nt=(0,ke.Z)()?c.useLayoutEffect:c.useEffect,rt=/\s+/;var ot=new Map,it=function(e,t){var n=function(e){var t=[];return e?(e.forEach((function(e){"string"==typeof e.current&&e.current.split(rt).forEach((function(e){t.push(e)}))})),t.filter((function(e,t,n){return e.length>0&&n.indexOf(e)===t}))):[]}(t),r=function(e,t){return[t.filter((function(t){return-1===e.indexOf(t)})),e.filter((function(e){return-1===t.indexOf(e)}))]}(ot.get(e)||[],n),o=r[0],i=r[1];e&&(o.forEach((function(t){return e.classList.add(t)})),i.forEach((function(t){return e.classList.remove(t)}))),ot.set(e,n)},at=new function(){var e=this;this.add=function(t,n){if(e.nodes.has(t)){e.nodes.get(t).add(n)}else{var r=new Set;r.add(n),e.nodes.set(t,r)}},this.del=function(t,n){if(e.nodes.has(t)){var r=e.nodes.get(t);1!==r.size?r.delete(n):e.nodes.delete(t)}},this.emit=function(t,n){n(t,e.nodes.get(t))},this.nodes=new Map};function ct(e){var t=e.blurring,n=e.children,r=e.className,o=e.centered,i=e.content,a=e.inverted,l=e.mountNode,s=e.scrolling,u=c.useRef(),d=(0,Oe.Z)("ui",(0,De.lG)(a,"inverted"),(0,De.lG)(!o,"top aligned"),"page modals dimmer transition visible active",r),f=(0,Oe.Z)("dimmable dimmed",(0,De.lG)(t,"blurring"),(0,De.lG)(s,"scrolling")),p=(0,je.Z)(ct,e),m=(0,xe.Z)(ct,e);return function(e,t){var n=c.useRef(),r=c.useRef(!1);nt((function(){if(n.current=t,r.current){var o=(0,tt.I)(e)?e.current:e;at.emit(o,it)}r.current=!0}),[t]),nt((function(){var t=(0,tt.I)(e)?e.current:e;return at.add(t,n),at.emit(t,it),function(){at.del(t,n),at.emit(t,it)}}),[e])}(l,f),c.useEffect((function(){u.current&&u.current.style&&u.current.style.setProperty("display","flex","important")}),[]),c.createElement(Ze.R,{innerRef:u},c.createElement(m,(0,ve.Z)({},p,{className:d}),Ge.kK(n)?i:n))}ct.handledProps=["as","blurring","centered","children","className","content","inverted","mountNode","scrolling"],ct.create=(0,_e.u5)(ct,(function(e){return{content:e}}));var lt=ct;function st(e){var t=e.children,n=e.className,r=e.content,o=(0,Oe.Z)("header",n),i=(0,je.Z)(st,e),a=(0,xe.Z)(st,e);return c.createElement(a,(0,ve.Z)({},i,{className:o}),Ge.kK(t)?r:t)}st.handledProps=["as","children","className","content"],st.create=(0,_e.u5)(st,(function(e){return{content:e}}));var ut=st,dt=function(e){var t=e.height+0,n=e.height+0,r=window.innerHeight;return r/2+-n/2+t+50<r},ft=function(e,t,n){var r=t&&e?-n.height/2:0;return{marginLeft:-n.width/2,marginTop:r}},pt=function(){return!window.ActiveXObject&&"ActiveXObject"in window},mt=function(e){function t(){for(var n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))||this).legacy=(0,ke.Z)()&&pt(),n.ref=(0,c.createRef)(),n.dimmerRef=(0,c.createRef)(),n.latestDocumentMouseDownEvent=null,n.getMountNode=function(){return(0,ke.Z)()?n.props.mountNode||document.body:null},n.handleActionsOverrides=function(e){return{onActionClick:function(t,r){(0,Ce.Z)(e,"onActionClick",t,r),(0,Ce.Z)(n.props,"onActionClick",t,n.props),n.handleClose(t)}}},n.handleClose=function(e){n.setState({open:!1}),(0,Ce.Z)(n.props,"onClose",e,(0,ve.Z)({},n.props,{open:!1}))},n.handleDocumentMouseDown=function(e){n.latestDocumentMouseDownEvent=e},n.handleDocumentClick=function(e){var t=n.props.closeOnDimmerClick,r=n.latestDocumentMouseDownEvent;n.latestDocumentMouseDownEvent=null,!t||(0,Pe.Z)(n.ref.current,r)||(0,Pe.Z)(n.ref.current,e)||(n.setState({open:!1}),(0,Ce.Z)(n.props,"onClose",e,(0,ve.Z)({},n.props,{open:!1})))},n.handleIconOverrides=function(e){return{onClick:function(t){(0,Ce.Z)(e,"onClick",t),n.handleClose(t)}}},n.handleOpen=function(e){(0,Ce.Z)(n.props,"onOpen",e,(0,ve.Z)({},n.props,{open:!0})),n.setState({open:!0})},n.handlePortalMount=function(e){var t=n.props.eventPool;n.setState({scrolling:!1}),n.setPositionAndClassNames(),Ne.sub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),Ne.sub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,Ce.Z)(n.props,"onMount",e,n.props)},n.handlePortalUnmount=function(e){var t=n.props.eventPool;cancelAnimationFrame(n.animationRequestId),Ne.unsub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),Ne.unsub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,Ce.Z)(n.props,"onUnmount",e,n.props)},n.setPositionAndClassNames=function(){var e,t=n.props.centered,r={};if(n.ref.current){var o=n.ref.current.getBoundingClientRect(),i=dt(o);e=!i;var a=n.legacy?ft(i,t,o):{};Se()(n.state.legacyStyles,a)||(r.legacyStyles=a),n.state.scrolling!==e&&(r.scrolling=e)}(0,Te.Z)(r)||n.setState(r),n.animationRequestId=requestAnimationFrame(n.setPositionAndClassNames)},n.renderContent=function(e){var r=n.props,o=r.actions,i=r.basic,a=r.children,l=r.className,s=r.closeIcon,u=r.content,d=r.header,f=r.size,p=r.style,m=n.state,h=m.legacyStyles,v=m.scrolling,y=(0,Oe.Z)("ui",f,(0,De.lG)(i,"basic"),(0,De.lG)(n.legacy,"legacy"),(0,De.lG)(v,"scrolling"),"modal transition visible active",l),g=(0,xe.Z)(t,n.props),b=!0===s?"close":s,E=Re.Z.create(b,{overrideProps:n.handleIconOverrides});return c.createElement(Ze.R,{innerRef:n.ref},c.createElement(g,(0,ve.Z)({},e,{className:y,style:(0,ve.Z)({},h,p)}),E,Ge.kK(a)?c.createElement(c.Fragment,null,ut.create(d,{autoGenerateKey:!1}),Je.create(u,{autoGenerateKey:!1}),Xe.create(o,{overrideProps:n.handleActionsOverrides})):a))},n}(0,ye.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.handlePortalUnmount()},n.render=function(){var e=this.props,n=e.centered,r=e.closeOnDocumentClick,o=e.dimmer,i=e.eventPool,a=e.trigger,l=this.state,s=l.open,u=l.scrolling,d=this.getMountNode();if(!(0,ke.Z)())return(0,c.isValidElement)(a)?a:null;var f=(0,je.Z)(t,this.props),p=Me.Z.handledProps,m=(0,we.Z)(f,(function(e,t,n){return(0,Ee.Z)(p,n)||(e[n]=t),e}),{}),h=(0,be.Z)(f,p);return c.createElement(Me.Z,(0,ve.Z)({closeOnDocumentClick:r},h,{trigger:a,eventPool:i,mountNode:d,open:s,onClose:this.handleClose,onMount:this.handlePortalMount,onOpen:this.handleOpen,onUnmount:this.handlePortalUnmount}),c.createElement(Ze.R,{innerRef:this.dimmerRef},lt.create((0,ge.Z)(o)?o:{},{autoGenerateKey:!1,defaultProps:{blurring:"blurring"===o,inverted:"inverted"===o},overrideProps:{children:this.renderContent(m),centered:n,mountNode:d,scrolling:u}})))},t}(Ie.Z);mt.handledProps=["actions","as","basic","centered","children","className","closeIcon","closeOnDimmerClick","closeOnDocumentClick","content","defaultOpen","dimmer","eventPool","header","mountNode","onActionClick","onClose","onMount","onOpen","onUnmount","open","size","style","trigger"],mt.defaultProps={centered:!0,dimmer:!0,closeOnDimmerClick:!0,closeOnDocumentClick:!1,eventPool:"Modal"},mt.autoControlledProps=["open"],mt.Actions=Xe,mt.Content=Je,mt.Description=et,mt.Dimmer=lt,mt.Header=ut;var ht=mt,vt=n(6613),yt=n(2945),gt=n(3877),bt=n(9),Et=n(8925),wt=n(8935),Tt=bt.default.div.withConfig({displayName:"dddog__Galary",componentId:"sc-drgaxk-0"})(["display:flex;justify-content:center;margin-top:32px;margin-bottom:64px;"]),Ct=bt.default.div.withConfig({displayName:"dddog__GalaryContent",componentId:"sc-drgaxk-1"})(["text-align:center;"]),Zt=function(){return c.createElement(We,{basic:!0,as:"a",href:"https://apps.apple.com/jp/app/dddog/id1594115257",color:"blue",target:"_blank",rel:"noreferrer"},c.createElement(vt.Z,{as:"b",color:"blue",textAlign:"center"},"DDDOGをAppStoreで入手"))},Ot=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],r=function(e){return{__html:'\'<model-viewer\n                  bounds="tight"\n                  src='+e.src+"\n                  ios-src="+e.iosSrc+'\n                  ar\n                  ar-modes="webxr scene-viewer quick-look"\n                  camera-controls\n                  environment-image="neutral"\n                  poster="poster.webp"\n                  shadow-intensity="1"\n                  >\n                  <div class="progress-bar hide" slot="progress-bar">\n                      <div class="update-bar"></div>\n                  </div>\n                </model-viewer>\''}};return c.createElement(wt.Z,null,c.createElement(he,null,c.createElement("html",{lang:"ja"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.createElement("meta",{name:"description",content:"DDDOGはフォトグラメトリ手法を用いたiOS用の3Dスキャンアプリです。"}),c.createElement("script",{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"})),c.createElement(Et.m,{pageTitle:"高精度3Dモデル作成アプリ「DDDOG」"},c.createElement(vt.Z.Subheader,null,"「DDDOG」はPhotogrammetry手法を用いたiOS専用の3Dモデル生成アプリです。 3Dモデル化したい対象をiPhoneでキャプチャーすることで、 モデル生成リクエストから最短数分でオリジナルの3DモデルがiOS端末にダウンロードされます。 また、LiDARセンサー機能付きのデバイスを使用することで実際の大きさに近い3Dモデルを生成することができます。"),c.createElement(yt.Z,{style:{padding:"30px 0",textAlign:"center"}},c.createElement(Zt,null)),c.createElement(yt.Z,{style:{padding:"50px"}},c.createElement(vt.Z,{as:"h2",textAlign:"center"},"DDDOGの使い方")),c.createElement("div",{style:{height:"35vh",width:"100%"}},c.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/XKVFR_ZiUZE",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})),c.createElement(yt.Z,{style:{padding:"50px"}},c.createElement(vt.Z,{as:"h2",textAlign:"center"},"DDDOGで生成した3Dモデルギャラリー"),c.createElement(Tt,null,c.createElement(Ct,null,c.createElement("div",{className:"text",dangerouslySetInnerHTML:r({src:"/assets/tonakai.glb",iosSrc:"/assets/tonakaiUSDZ.usdz"})}),c.createElement(vt.Z.Subheader,null,"DAISOで購入したトナカイの置物"))),c.createElement(Tt,null,c.createElement(Ct,null,c.createElement("div",{className:"text",dangerouslySetInnerHTML:r({src:"/assets/ichirinzashi.glb",iosSrc:"/assets/ichirinzashiUSDZ.usdz"})}),c.createElement(vt.Z.Subheader,null,"陶芸家 佐藤烓 の一輪挿し"))),c.createElement(Tt,null,c.createElement(Ct,null,c.createElement("div",{className:"text",dangerouslySetInnerHTML:r({src:"/assets/joro.glb",iosSrc:"/assets/joroUSDZ.usdz"})}),c.createElement(vt.Z.Subheader,null,"陶芸家 佐藤烓 のピッチャー")))),c.createElement(yt.Z,{style:{padding:"30px 0",textAlign:"center"}},c.createElement(Zt,null)),c.createElement(ht,{open:t,onClose:function(){return n(!1)},onOpen:function(){return n(!0)}},c.createElement(ht.Content,null,c.createElement(gt.Z,{src:"/assets/dddog_app_screenshot.png",fluid:!0,centered:!0})))))}}}]);
//# sourceMappingURL=component---src-pages-products-dddog-tsx-323b22c4bff21c3c95d0.js.map
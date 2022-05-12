!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealMath=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),n={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=a,u=Function.prototype.call,f=c?u.bind(u):function(){return u.apply(u,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!l.call({1:2},1);s.f=h?function(t){var e=p(this,t);return!!e&&e.enumerable}:l;var v,d,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=a,g=Function.prototype,b=g.bind,w=g.call,j=m&&b.bind(w,w),O=m?function(t){return t&&j(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},x=O,S=x({}.toString),E=x("".slice),T=function(t){return E(S(t),8,-1)},P=O,L=o,R=T,k=r.Object,C=P("".split),_=L((function(){return!k("z").propertyIsEnumerable(0)}))?function(t){return"String"==R(t)?C(t,""):k(t)}:k,M=r.TypeError,N=function(t){if(null==t)throw M("Can't call method on "+t);return t},A=_,I=N,F=function(t){return A(I(t))},G=function(t){return"function"==typeof t},J=G,D=function(t){return"object"==typeof t?null!==t:J(t)},U=r,$=G,H=function(t){return $(t)?t:void 0},z=function(t,e){return arguments.length<2?H(U[t]):U[t]&&U[t][e]},B=O({}.isPrototypeOf),W=z("navigator","userAgent")||"",q=r,X=W,K=q.process,Q=q.Deno,V=K&&K.versions||Q&&Q.version,Y=V&&V.v8;Y&&(d=(v=Y.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!d&&X&&(!(v=X.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=X.match(/Chrome\/(\d+)/))&&(d=+v[1]);var Z=d,tt=Z,et=o,rt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),nt=rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ot=z,it=G,at=B,ct=nt,ut=r.Object,ft=ct?function(t){return"symbol"==typeof t}:function(t){var e=ot("Symbol");return it(e)&&at(e.prototype,ut(t))},st=r.String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=G,ht=lt,vt=r.TypeError,dt=function(t){if(pt(t))return t;throw vt(ht(t)+" is not a function")},yt=dt,mt=function(t,e){var r=t[e];return null==r?void 0:yt(r)},gt=f,bt=G,wt=D,jt=r.TypeError,Ot={exports:{}},xt=r,St=Object.defineProperty,Et=function(t,e){try{St(xt,t,{value:e,configurable:!0,writable:!0})}catch(r){xt[t]=e}return e},Tt=Et,Pt="__core-js_shared__",Lt=r[Pt]||Tt(Pt,{}),Rt=Lt;(Ot.exports=function(t,e){return Rt[t]||(Rt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var kt=N,Ct=r.Object,_t=function(t){return Ct(kt(t))},Mt=_t,Nt=O({}.hasOwnProperty),At=Object.hasOwn||function(t,e){return Nt(Mt(t),e)},It=O,Ft=0,Gt=Math.random(),Jt=It(1..toString),Dt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Jt(++Ft+Gt,36)},Ut=r,$t=Ot.exports,Ht=At,zt=Dt,Bt=rt,Wt=nt,qt=$t("wks"),Xt=Ut.Symbol,Kt=Xt&&Xt.for,Qt=Wt?Xt:Xt&&Xt.withoutSetter||zt,Vt=function(t){if(!Ht(qt,t)||!Bt&&"string"!=typeof qt[t]){var e="Symbol."+t;Bt&&Ht(Xt,t)?qt[t]=Xt[t]:qt[t]=Wt&&Kt?Kt(e):Qt(e)}return qt[t]},Yt=f,Zt=D,te=ft,ee=mt,re=function(t,e){var r,n;if("string"===e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;if(bt(r=t.valueOf)&&!wt(n=gt(r,t)))return n;if("string"!==e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;throw jt("Can't convert object to primitive value")},ne=Vt,oe=r.TypeError,ie=ne("toPrimitive"),ae=function(t,e){if(!Zt(t)||te(t))return t;var r,n=ee(t,ie);if(n){if(void 0===e&&(e="default"),r=Yt(n,t,e),!Zt(r)||te(r))return r;throw oe("Can't convert object to primitive value")}return void 0===e&&(e="number"),re(t,e)},ce=ft,ue=function(t){var e=ae(t,"string");return ce(e)?e:e+""},fe=D,se=r.document,le=fe(se)&&fe(se.createElement),pe=function(t){return le?se.createElement(t):{}},he=pe,ve=!i&&!o((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),de=i,ye=f,me=s,ge=y,be=F,we=ue,je=At,Oe=ve,xe=Object.getOwnPropertyDescriptor;n.f=de?xe:function(t,e){if(t=be(t),e=we(e),Oe)try{return xe(t,e)}catch(t){}if(je(t,e))return ge(!ye(me.f,t,e),t[e])};var Se={},Ee=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Te=r,Pe=D,Le=Te.String,Re=Te.TypeError,ke=function(t){if(Pe(t))return t;throw Re(Le(t)+" is not an object")},Ce=i,_e=ve,Me=Ee,Ne=ke,Ae=ue,Ie=r.TypeError,Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Je="enumerable",De="configurable",Ue="writable";Se.f=Ce?Me?function(t,e,r){if(Ne(t),e=Ae(e),Ne(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ue in r&&!r.writable){var n=Ge(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:De in r?r.configurable:n.configurable,enumerable:Je in r?r.enumerable:n.enumerable,writable:!1})}return Fe(t,e,r)}:Fe:function(t,e,r){if(Ne(t),e=Ae(e),Ne(r),_e)try{return Fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ie("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var $e=Se,He=y,ze=i?function(t,e,r){return $e.f(t,e,He(1,r))}:function(t,e,r){return t[e]=r,t},Be={exports:{}},We=i,qe=At,Xe=Function.prototype,Ke=We&&Object.getOwnPropertyDescriptor,Qe=qe(Xe,"name"),Ve={EXISTS:Qe,PROPER:Qe&&"something"===function(){}.name,CONFIGURABLE:Qe&&(!We||We&&Ke(Xe,"name").configurable)},Ye=G,Ze=Lt,tr=O(Function.toString);Ye(Ze.inspectSource)||(Ze.inspectSource=function(t){return tr(t)});var er,rr,nr,or=Ze.inspectSource,ir=G,ar=or,cr=r.WeakMap,ur=ir(cr)&&/native code/.test(ar(cr)),fr=Ot.exports,sr=Dt,lr=fr("keys"),pr=function(t){return lr[t]||(lr[t]=sr(t))},hr={},vr=ur,dr=r,yr=O,mr=D,gr=ze,br=At,wr=Lt,jr=pr,Or=hr,xr="Object already initialized",Sr=dr.TypeError,Er=dr.WeakMap;if(vr||wr.state){var Tr=wr.state||(wr.state=new Er),Pr=yr(Tr.get),Lr=yr(Tr.has),Rr=yr(Tr.set);er=function(t,e){if(Lr(Tr,t))throw new Sr(xr);return e.facade=t,Rr(Tr,t,e),e},rr=function(t){return Pr(Tr,t)||{}},nr=function(t){return Lr(Tr,t)}}else{var kr=jr("state");Or[kr]=!0,er=function(t,e){if(br(t,kr))throw new Sr(xr);return e.facade=t,gr(t,kr,e),e},rr=function(t){return br(t,kr)?t[kr]:{}},nr=function(t){return br(t,kr)}}var Cr={set:er,get:rr,has:nr,enforce:function(t){return nr(t)?rr(t):er(t,{})},getterFor:function(t){return function(e){var r;if(!mr(e)||(r=rr(e)).type!==t)throw Sr("Incompatible receiver, "+t+" required");return r}}},_r=o,Mr=G,Nr=At,Ar=i,Ir=Ve.CONFIGURABLE,Fr=or,Gr=Cr.enforce,Jr=Cr.get,Dr=Object.defineProperty,Ur=Ar&&!_r((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),$r=String(String).split("String"),Hr=Be.exports=function(t,e,r){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Nr(t,"name")||Ir&&t.name!==e)&&Dr(t,"name",{value:e,configurable:!0}),Ur&&r&&Nr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&Nr(r,"constructor")&&r.constructor){if(Ar)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var n=Gr(t);return Nr(n,"source")||(n.source=$r.join("string"==typeof e?e:"")),t};Function.prototype.toString=Hr((function(){return Mr(this)&&Jr(this).source||Fr(this)}),"toString");var zr=r,Br=G,Wr=ze,qr=Be.exports,Xr=Et,Kr=function(t,e,r,n){var o=!!n&&!!n.unsafe,i=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:e;return Br(r)&&qr(r,c,n),t===zr?(i?t[e]=r:Xr(e,r),t):(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=r:Wr(t,e,r),t)},Qr={},Vr=Math.ceil,Yr=Math.floor,Zr=function(t){var e=+t;return e!=e||0===e?0:(e>0?Yr:Vr)(e)},tn=Zr,en=Math.max,rn=Math.min,nn=Zr,on=Math.min,an=function(t){return t>0?on(nn(t),9007199254740991):0},cn=function(t){return an(t.length)},un=F,fn=function(t,e){var r=tn(t);return r<0?en(r+e,0):rn(r,e)},sn=cn,ln=function(t){return function(e,r,n){var o,i=un(e),a=sn(i),c=fn(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},pn={includes:ln(!0),indexOf:ln(!1)},hn=At,vn=F,dn=pn.indexOf,yn=hr,mn=O([].push),gn=function(t,e){var r,n=vn(t),o=0,i=[];for(r in n)!hn(yn,r)&&hn(n,r)&&mn(i,r);for(;e.length>o;)hn(n,r=e[o++])&&(~dn(i,r)||mn(i,r));return i},bn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wn=gn,jn=bn.concat("length","prototype");Qr.f=Object.getOwnPropertyNames||function(t){return wn(t,jn)};var On={};On.f=Object.getOwnPropertySymbols;var xn=z,Sn=Qr,En=On,Tn=ke,Pn=O([].concat),Ln=xn("Reflect","ownKeys")||function(t){var e=Sn.f(Tn(t)),r=En.f;return r?Pn(e,r(t)):e},Rn=At,kn=Ln,Cn=n,_n=Se,Mn=o,Nn=G,An=/#|\.prototype\./,In=function(t,e){var r=Gn[Fn(t)];return r==Dn||r!=Jn&&(Nn(e)?Mn(e):!!e)},Fn=In.normalize=function(t){return String(t).replace(An,".").toLowerCase()},Gn=In.data={},Jn=In.NATIVE="N",Dn=In.POLYFILL="P",Un=In,$n=r,Hn=n.f,zn=ze,Bn=Kr,Wn=Et,qn=function(t,e,r){for(var n=kn(e),o=_n.f,i=Cn.f,a=0;a<n.length;a++){var c=n[a];Rn(t,c)||r&&Rn(r,c)||o(t,c,i(e,c))}},Xn=Un,Kn=function(t,e){var r,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(r=u?$n:f?$n[c]||Wn(c,{}):($n[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(a=Hn(r,n))&&a.value:r[n],!Xn(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;qn(i,o)}(t.sham||o&&o.sham)&&zn(i,"sham",!0),Bn(r,n,i,t)}},Qn=gn,Vn=bn,Yn=Object.keys||function(t){return Qn(t,Vn)},Zn=i,to=O,eo=f,ro=o,no=Yn,oo=On,io=s,ao=_t,co=_,uo=Object.assign,fo=Object.defineProperty,so=to([].concat),lo=!uo||ro((function(){if(Zn&&1!==uo({b:1},uo(fo({},"a",{enumerable:!0,get:function(){fo(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=uo({},t)[r]||no(uo({},e)).join("")!=n}))?function(t,e){for(var r=ao(t),n=arguments.length,o=1,i=oo.f,a=io.f;n>o;)for(var c,u=co(arguments[o++]),f=i?so(no(u),i(u)):no(u),s=f.length,l=0;s>l;)c=f[l++],Zn&&!eo(a,u,c)||(r[c]=u[c]);return r}:uo,po=lo;function ho(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vo(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ho(Object(r),!0).forEach((function(e){go(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ho(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function yo(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function mo(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){yo(i,n,o,a,c,"next",t)}function c(t){yo(i,n,o,a,c,"throw",t)}a(void 0)}))}}function go(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bo(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function wo(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function jo(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return wo(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?wo(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}Kn({target:"Object",stat:!0,arity:2,forced:Object.assign!==po},{assign:po});!function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?v:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function y(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(R([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=g.prototype=y.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=g,u(O,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}({exports:{}});var Oo={};Oo[Vt("toStringTag")]="z";var xo="[object z]"===String(Oo),So=r,Eo=xo,To=G,Po=T,Lo=Vt("toStringTag"),Ro=So.Object,ko="Arguments"==Po(function(){return arguments}()),Co=Eo?Po:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Ro(t),Lo))?r:ko?Po(e):"Object"==(n=Po(e))&&To(e.callee)?"Arguments":n},_o=Co,Mo=xo?{}.toString:function(){return"[object "+_o(this)+"]"};xo||Kr(Object.prototype,"toString",Mo,{unsafe:!0});var No="process"==T(r.process),Ao=r,Io=G,Fo=Ao.String,Go=Ao.TypeError,Jo=O,Do=ke,Uo=function(t){if("object"==typeof t||Io(t))return t;throw Go("Can't set "+Fo(t)+" as a prototype")},$o=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Jo(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Do(r),Uo(n),e?t(r,n):r.__proto__=n,r}}():void 0),Ho=Se.f,zo=At,Bo=Vt("toStringTag"),Wo=z,qo=Se,Xo=i,Ko=Vt("species"),Qo=B,Vo=r.TypeError,Yo=O,Zo=o,ti=G,ei=Co,ri=or,ni=function(){},oi=[],ii=z("Reflect","construct"),ai=/^\s*(?:class|function)\b/,ci=Yo(ai.exec),ui=!ai.exec(ni),fi=function(t){if(!ti(t))return!1;try{return ii(ni,oi,t),!0}catch(t){return!1}},si=function(t){if(!ti(t))return!1;switch(ei(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ui||!!ci(ai,ri(t))}catch(t){return!0}};si.sham=!0;var li,pi,hi,vi,di=!ii||Zo((function(){var t;return fi(fi.call)||!fi(Object)||!fi((function(){t=!0}))||t}))?si:fi,yi=di,mi=lt,gi=r.TypeError,bi=ke,wi=function(t){if(yi(t))return t;throw gi(mi(t)+" is not a constructor")},ji=Vt("species"),Oi=a,xi=Function.prototype,Si=xi.apply,Ei=xi.call,Ti="object"==typeof Reflect&&Reflect.apply||(Oi?Ei.bind(Si):function(){return Ei.apply(Si,arguments)}),Pi=dt,Li=a,Ri=O(O.bind),ki=function(t,e){return Pi(t),void 0===e?t:Li?Ri(t,e):function(){return t.apply(e,arguments)}},Ci=z("document","documentElement"),_i=O([].slice),Mi=r.TypeError,Ni=/(?:ipad|iphone|ipod).*applewebkit/i.test(W),Ai=r,Ii=Ti,Fi=ki,Gi=G,Ji=At,Di=o,Ui=Ci,$i=_i,Hi=pe,zi=function(t,e){if(t<e)throw Mi("Not enough arguments");return t},Bi=Ni,Wi=No,qi=Ai.setImmediate,Xi=Ai.clearImmediate,Ki=Ai.process,Qi=Ai.Dispatch,Vi=Ai.Function,Yi=Ai.MessageChannel,Zi=Ai.String,ta=0,ea={},ra="onreadystatechange";try{li=Ai.location}catch(t){}var na=function(t){if(Ji(ea,t)){var e=ea[t];delete ea[t],e()}},oa=function(t){return function(){na(t)}},ia=function(t){na(t.data)},aa=function(t){Ai.postMessage(Zi(t),li.protocol+"//"+li.host)};qi&&Xi||(qi=function(t){zi(arguments.length,1);var e=Gi(t)?t:Vi(t),r=$i(arguments,1);return ea[++ta]=function(){Ii(e,void 0,r)},pi(ta),ta},Xi=function(t){delete ea[t]},Wi?pi=function(t){Ki.nextTick(oa(t))}:Qi&&Qi.now?pi=function(t){Qi.now(oa(t))}:Yi&&!Bi?(vi=(hi=new Yi).port2,hi.port1.onmessage=ia,pi=Fi(vi.postMessage,vi)):Ai.addEventListener&&Gi(Ai.postMessage)&&!Ai.importScripts&&li&&"file:"!==li.protocol&&!Di(aa)?(pi=aa,Ai.addEventListener("message",ia,!1)):pi=ra in Hi("script")?function(t){Ui.appendChild(Hi("script")).onreadystatechange=function(){Ui.removeChild(this),na(t)}}:function(t){setTimeout(oa(t),0)});var ca,ua,fa,sa,la,pa,ha,va,da={set:qi,clear:Xi},ya=r,ma=/ipad|iphone|ipod/i.test(W)&&void 0!==ya.Pebble,ga=/web0s(?!.*chrome)/i.test(W),ba=r,wa=ki,ja=n.f,Oa=da.set,xa=Ni,Sa=ma,Ea=ga,Ta=No,Pa=ba.MutationObserver||ba.WebKitMutationObserver,La=ba.document,Ra=ba.process,ka=ba.Promise,Ca=ja(ba,"queueMicrotask"),_a=Ca&&Ca.value;_a||(ca=function(){var t,e;for(Ta&&(t=Ra.domain)&&t.exit();ua;){e=ua.fn,ua=ua.next;try{e()}catch(t){throw ua?sa():fa=void 0,t}}fa=void 0,t&&t.enter()},xa||Ta||Ea||!Pa||!La?!Sa&&ka&&ka.resolve?((ha=ka.resolve(void 0)).constructor=ka,va=wa(ha.then,ha),sa=function(){va(ca)}):Ta?sa=function(){Ra.nextTick(ca)}:(Oa=wa(Oa,ba),sa=function(){Oa(ca)}):(la=!0,pa=La.createTextNode(""),new Pa(ca).observe(pa,{characterData:!0}),sa=function(){pa.data=la=!la}));var Ma=_a||function(t){var e={fn:t,next:void 0};fa&&(fa.next=e),ua||(ua=e,sa()),fa=e},Na=r,Aa=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ia=function(){this.head=null,this.tail=null};Ia.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var Fa=Ia,Ga=r.Promise,Ja="object"==typeof window&&"object"!=typeof Deno,Da=r,Ua=Ga,$a=G,Ha=Un,za=or,Ba=Vt,Wa=Ja,qa=Z;Ua&&Ua.prototype;var Xa=Ba("species"),Ka=!1,Qa=$a(Da.PromiseRejectionEvent),Va=Ha("Promise",(function(){var t=za(Ua),e=t!==String(Ua);if(!e&&66===qa)return!0;if(qa>=51&&/native code/.test(t))return!1;var r=new Ua((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[Xa]=n,!(Ka=r.then((function(){}))instanceof n)||!e&&Wa&&!Qa})),Ya={CONSTRUCTOR:Va,REJECTION_EVENT:Qa,SUBCLASSING:Ka},Za={},tc=dt,ec=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=tc(e),this.reject=tc(r)};Za.f=function(t){return new ec(t)};var rc,nc,oc,ic=Kn,ac=No,cc=r,uc=f,fc=Kr,sc=$o,lc=function(t,e,r){t&&!r&&(t=t.prototype),t&&!zo(t,Bo)&&Ho(t,Bo,{configurable:!0,value:e})},pc=function(t){var e=Wo(t),r=qo.f;Xo&&e&&!e[Ko]&&r(e,Ko,{configurable:!0,get:function(){return this}})},hc=dt,vc=G,dc=D,yc=function(t,e){if(Qo(e,t))return t;throw Vo("Incorrect invocation")},mc=function(t,e){var r,n=bi(t).constructor;return void 0===n||null==(r=bi(n)[ji])?e:wi(r)},gc=da.set,bc=Ma,wc=function(t,e){var r=Na.console;r&&r.error&&(1==arguments.length?r.error(t):r.error(t,e))},jc=Aa,Oc=Fa,xc=Cr,Sc=Ga,Ec=Za,Tc="Promise",Pc=Ya.CONSTRUCTOR,Lc=Ya.REJECTION_EVENT,Rc=Ya.SUBCLASSING,kc=xc.getterFor(Tc),Cc=xc.set,_c=Sc&&Sc.prototype,Mc=Sc,Nc=_c,Ac=cc.TypeError,Ic=cc.document,Fc=cc.process,Gc=Ec.f,Jc=Gc,Dc=!!(Ic&&Ic.createEvent&&cc.dispatchEvent),Uc="unhandledrejection",$c=function(t){var e;return!(!dc(t)||!vc(e=t.then))&&e},Hc=function(t,e){var r,n,o,i=e.value,a=1==e.state,c=a?t.ok:t.fail,u=t.resolve,f=t.reject,s=t.domain;try{c?(a||(2===e.rejection&&Xc(e),e.rejection=1),!0===c?r=i:(s&&s.enter(),r=c(i),s&&(s.exit(),o=!0)),r===t.promise?f(Ac("Promise-chain cycle")):(n=$c(r))?uc(n,r,u,f):u(r)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},zc=function(t,e){t.notified||(t.notified=!0,bc((function(){for(var r,n=t.reactions;r=n.get();)Hc(r,t);t.notified=!1,e&&!t.rejection&&Wc(t)})))},Bc=function(t,e,r){var n,o;Dc?((n=Ic.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),cc.dispatchEvent(n)):n={promise:e,reason:r},!Lc&&(o=cc["on"+t])?o(n):t===Uc&&wc("Unhandled promise rejection",r)},Wc=function(t){uc(gc,cc,(function(){var e,r=t.facade,n=t.value;if(qc(t)&&(e=jc((function(){ac?Fc.emit("unhandledRejection",n,r):Bc(Uc,r,n)})),t.rejection=ac||qc(t)?2:1,e.error))throw e.value}))},qc=function(t){return 1!==t.rejection&&!t.parent},Xc=function(t){uc(gc,cc,(function(){var e=t.facade;ac?Fc.emit("rejectionHandled",e):Bc("rejectionhandled",e,t.value)}))},Kc=function(t,e,r){return function(n){t(e,n,r)}},Qc=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,zc(t,!0))},Vc=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw Ac("Promise can't be resolved itself");var n=$c(e);n?bc((function(){var r={done:!1};try{uc(n,e,Kc(Vc,r,t),Kc(Qc,r,t))}catch(e){Qc(r,e,t)}})):(t.value=e,t.state=1,zc(t,!1))}catch(e){Qc({done:!1},e,t)}}};if(Pc&&(Nc=(Mc=function(t){yc(this,Nc),hc(t),uc(rc,this);var e=kc(this);try{t(Kc(Vc,e),Kc(Qc,e))}catch(t){Qc(e,t)}}).prototype,(rc=function(t){Cc(this,{type:Tc,done:!1,notified:!1,parent:!1,reactions:new Oc,rejection:!1,state:0,value:void 0})}).prototype=fc(Nc,"then",(function(t,e){var r=kc(this),n=Gc(mc(this,Mc));return r.parent=!0,n.ok=!vc(t)||t,n.fail=vc(e)&&e,n.domain=ac?Fc.domain:void 0,0==r.state?r.reactions.add(n):bc((function(){Hc(n,r)})),n.promise})),nc=function(){var t=new rc,e=kc(t);this.promise=t,this.resolve=Kc(Vc,e),this.reject=Kc(Qc,e)},Ec.f=Gc=function(t){return t===Mc||undefined===t?new nc(t):Jc(t)},vc(Sc)&&_c!==Object.prototype)){oc=_c.then,Rc||fc(_c,"then",(function(t,e){var r=this;return new Mc((function(t,e){uc(oc,r,t,e)})).then(t,e)}),{unsafe:!0});try{delete _c.constructor}catch(t){}sc&&sc(_c,Nc)}ic({global:!0,constructor:!0,wrap:!0,forced:Pc},{Promise:Mc}),lc(Mc,Tc,!1),pc(Tc);var Yc={},Zc=Yc,tu=Vt("iterator"),eu=Array.prototype,ru=Co,nu=mt,ou=Yc,iu=Vt("iterator"),au=function(t){if(null!=t)return nu(t,iu)||nu(t,"@@iterator")||ou[ru(t)]},cu=f,uu=dt,fu=ke,su=lt,lu=au,pu=r.TypeError,hu=f,vu=ke,du=mt,yu=ki,mu=f,gu=ke,bu=lt,wu=function(t){return void 0!==t&&(Zc.Array===t||eu[tu]===t)},ju=cn,Ou=B,xu=function(t,e){var r=arguments.length<2?lu(t):e;if(uu(r))return fu(cu(r,t));throw pu(su(t)+" is not iterable")},Su=au,Eu=function(t,e,r){var n,o;vu(t);try{if(!(n=du(t,"return"))){if("throw"===e)throw r;return r}n=hu(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return vu(n),r},Tu=r.TypeError,Pu=function(t,e){this.stopped=t,this.result=e},Lu=Pu.prototype,Ru=function(t,e,r){var n,o,i,a,c,u,f,s=r&&r.that,l=!(!r||!r.AS_ENTRIES),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),v=yu(e,s),d=function(t){return n&&Eu(n,"normal",t),new Pu(!0,t)},y=function(t){return l?(gu(t),h?v(t[0],t[1],d):v(t[0],t[1])):h?v(t,d):v(t)};if(p)n=t;else{if(!(o=Su(t)))throw Tu(bu(t)+" is not iterable");if(wu(o)){for(i=0,a=ju(t);a>i;i++)if((c=y(t[i]))&&Ou(Lu,c))return c;return new Pu(!1)}n=xu(t,o)}for(u=n.next;!(f=mu(u,n)).done;){try{c=y(f.value)}catch(t){Eu(n,"throw",t)}if("object"==typeof c&&c&&Ou(Lu,c))return c}return new Pu(!1)},ku=Vt("iterator"),Cu=!1;try{var _u=0,Mu={next:function(){return{done:!!_u++}},return:function(){Cu=!0}};Mu[ku]=function(){return this},Array.from(Mu,(function(){throw 2}))}catch(t){}var Nu=Ga,Au=function(t,e){if(!e&&!Cu)return!1;var r=!1;try{var n={};n[ku]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Iu=Ya.CONSTRUCTOR||!Au((function(t){Nu.all(t).then(void 0,(function(){}))})),Fu=f,Gu=dt,Ju=Za,Du=Aa,Uu=Ru;Kn({target:"Promise",stat:!0,forced:Iu},{all:function(t){var e=this,r=Ju.f(e),n=r.resolve,o=r.reject,i=Du((function(){var r=Gu(e.resolve),i=[],a=0,c=1;Uu(t,(function(t){var u=a++,f=!1;c++,Fu(r,e,t).then((function(t){f||(f=!0,i[u]=t,--c||n(i))}),o)})),--c||n(i)}));return i.error&&o(i.value),r.promise}});var $u=Kn,Hu=Ya.CONSTRUCTOR,zu=Ga,Bu=z,Wu=G,qu=Kr,Xu=zu&&zu.prototype;if($u({target:"Promise",proto:!0,forced:Hu,real:!0},{catch:function(t){return this.then(void 0,t)}}),Wu(zu)){var Ku=Bu("Promise").prototype.catch;Xu.catch!==Ku&&qu(Xu,"catch",Ku,{unsafe:!0})}var Qu=f,Vu=dt,Yu=Za,Zu=Aa,tf=Ru;Kn({target:"Promise",stat:!0,forced:Iu},{race:function(t){var e=this,r=Yu.f(e),n=r.reject,o=Zu((function(){var o=Vu(e.resolve);tf(t,(function(t){Qu(o,e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var ef=f,rf=Za;Kn({target:"Promise",stat:!0,forced:Ya.CONSTRUCTOR},{reject:function(t){var e=rf.f(this);return ef(e.reject,void 0,t),e.promise}});var nf=ke,of=D,af=Za,cf=Kn,uf=Ya.CONSTRUCTOR,ff=function(t,e){if(nf(t),of(e)&&e.constructor===t)return e;var r=af.f(t);return(0,r.resolve)(e),r.promise};z("Promise"),cf({target:"Promise",stat:!0,forced:uf},{resolve:function(t){return ff(this,t)}});var sf={},lf=i,pf=Ee,hf=Se,vf=ke,df=F,yf=Yn;sf.f=lf&&!pf?Object.defineProperties:function(t,e){vf(t);for(var r,n=df(e),o=yf(e),i=o.length,a=0;i>a;)hf.f(t,r=o[a++],n[r]);return t};var mf,gf=ke,bf=sf,wf=bn,jf=hr,Of=Ci,xf=pe,Sf=pr("IE_PROTO"),Ef=function(){},Tf=function(t){return"<script>"+t+"</"+"script>"},Pf=function(t){t.write(Tf("")),t.close();var e=t.parentWindow.Object;return t=null,e},Lf=function(){try{mf=new ActiveXObject("htmlfile")}catch(t){}var t,e;Lf="undefined"!=typeof document?document.domain&&mf?Pf(mf):((e=xf("iframe")).style.display="none",Of.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Tf("document.F=Object")),t.close(),t.F):Pf(mf);for(var r=wf.length;r--;)delete Lf.prototype[wf[r]];return Lf()};jf[Sf]=!0;var Rf=Object.create||function(t,e){var r;return null!==t?(Ef.prototype=gf(t),r=new Ef,Ef.prototype=null,r[Sf]=t):r=Lf(),void 0===e?r:bf.f(r,e)},kf=Se,Cf=Vt("unscopables"),_f=Array.prototype;null==_f[Cf]&&kf.f(_f,Cf,{configurable:!0,value:Rf(null)});var Mf=pn.includes,Nf=function(t){_f[Cf][t]=!0};Kn({target:"Array",proto:!0,forced:o((function(){return!Array(1).includes()}))},{includes:function(t){return Mf(this,t,arguments.length>1?arguments[1]:void 0)}}),Nf("includes");var Af=D,If=T,Ff=Vt("match"),Gf=function(t){var e;return Af(t)&&(void 0!==(e=t[Ff])?!!e:"RegExp"==If(t))},Jf=r.TypeError,Df=Co,Uf=r.String,$f=Vt("match"),Hf=Kn,zf=function(t){if(Gf(t))throw Jf("The method doesn't accept regular expressions");return t},Bf=N,Wf=function(t){if("Symbol"===Df(t))throw TypeError("Cannot convert a Symbol value to a string");return Uf(t)},qf=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[$f]=!1,"/./"[t](e)}catch(t){}}return!1},Xf=O("".indexOf);Hf({target:"String",proto:!0,forced:!qf("includes")},{includes:function(t){return!!~Xf(Wf(Bf(this)),Wf(zf(t)),arguments.length>1?arguments[1]:void 0)}});var Kf=["local","version","extensions"],Qf=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(r){var n=(t=r).getConfig().mathjax2||t.getConfig().math||{},o=vo(vo({},e),n),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=vo(vo({},e.tex2jax),n.tex2jax),o.mathjax=o.config=null,function(t,e){var r=this,n=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===r.readyState&&i()},n.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},Vf=Qf,Yf=Plugin=Object.assign(Vf(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},r=function(t){return new Promise((function(e,r){var n=document.createElement("script");n.type="text/javascript",n.onload=e,n.onerror=r,n.src=t,document.head.append(n)}))};function n(){return(n=mo(regeneratorRuntime.mark((function t(e){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=jo(e),t.prev=1,n.s();case 3:if((o=n.n()).done){t.next=9;break}return i=o.value,t.next=7,r(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n.e(t.t0);case 14:return t.prev=14,n.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(r){var o=this,i=(t=r).getConfig().katex||{},a=vo(vo({},e),i);a.local,a.version,a.extensions;var c=bo(a,Kf),u=a.local||"https://cdn.jsdelivr.net/npm/katex",f=a.local?"":"@"+a.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&h.push(l),h.push(p);var v,d,y=function(){renderMathInElement(r.getSlidesElement(),c),t.layout()};v=s,(d=document.createElement("link")).rel="stylesheet",d.href=v,document.head.appendChild(d),function(t){return n.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:Qf,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var r=e.getConfig().mathjax3||{},n=vo(vo({},t),r);n.tex=vo(vo({},t.tex),r.tex),n.options=vo(vo({},t.options),r.options),n.startup=vo(vo({},t.startup),r.startup);var o=n.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";n.mathjax=null,window.MathJax=n,function(t,e){var r=document.createElement("script");r.type="text/javascript",r.id="MathJax-script",r.src=t,r.async=!0,r.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(r)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});return Yf}));

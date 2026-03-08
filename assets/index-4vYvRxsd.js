var El=Object.defineProperty;var Pl=(e,t,n)=>t in e?El(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ae=(e,t,n)=>Pl(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},Qt=[],st=()=>{},Wi=()=>!1,as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),sr=e=>e.startsWith("onUpdate:"),ye=Object.assign,rr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Il=Object.prototype.hasOwnProperty,ee=(e,t)=>Il.call(e,t),G=Array.isArray,Yt=e=>Mn(e)==="[object Map]",Hi=e=>Mn(e)==="[object Set]",Br=e=>Mn(e)==="[object Date]",z=e=>typeof e=="function",me=e=>typeof e=="string",rt=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",ji=e=>(ie(e)||z(e))&&z(e.then)&&z(e.catch),Fi=Object.prototype.toString,Mn=e=>Fi.call(e),Ol=e=>Mn(e).slice(8,-1),Gi=e=>Mn(e)==="[object Object]",ir=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$l=/-\w/g,He=cs(e=>e.replace($l,t=>t.slice(1).toUpperCase())),Ml=/\B([A-Z])/g,jt=cs(e=>e.replace(Ml,"-$1").toLowerCase()),us=cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=cs(e=>e?`on${us(e)}`:""),At=(e,t)=>!Object.is(e,t),Fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ui=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wr;const fs=()=>Wr||(Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lr(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=me(s)?Bl(s):lr(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(me(e)||ie(e))return e}const Nl=/;(?![^(]*\))/g,Ll=/:([^]+)/,Dl=/\/\*[^]*?\*\//g;function Bl(e){const t={};return e.replace(Dl,"").split(Nl).forEach(n=>{if(n){const s=n.split(Ll);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Be(e){let t="";if(me(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const s=Be(e[n]);s&&(t+=s+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hl=nr(Wl);function zi(e){return!!e||e===""}function jl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=ar(e[s],t[s]);return n}function ar(e,t){if(e===t)return!0;let n=Br(e),s=Br(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=rt(e),s=rt(t),n||s)return e===t;if(n=G(e),s=G(t),n||s)return n&&s?jl(e,t):!1;if(n=ie(e),s=ie(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const l in e){const o=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(o&&!a||!o&&a||!ar(e[l],t[l]))return!1}}return String(e)===String(t)}const Vi=e=>!!(e&&e.__v_isRef===!0),B=e=>me(e)?e:e==null?"":G(e)||ie(e)&&(e.toString===Fi||!z(e.toString))?Vi(e)?B(e.value):JSON.stringify(e,qi,2):String(e),qi=(e,t)=>Vi(t)?qi(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Rs(s,i)+" =>"]=r,n),{})}:Hi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Rs(n))}:rt(t)?Rs(t):ie(t)&&!G(t)&&!Gi(t)?String(t):t,Rs=(e,t="")=>{var n;return rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Fl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){++this._on===1&&(this.prevScope=$e,$e=this)}off(){this._on>0&&--this._on===0&&($e=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gl(){return $e}let de;const Ts=new WeakSet;class Ki{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ji(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hr(this),Qi(this);const t=de,n=Fe;de=this,Fe=!0;try{return this.fn()}finally{Yi(this),de=t,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fr(t);this.deps=this.depsTail=void 0,Hr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bs(this)&&this.run()}get dirty(){return Bs(this)}}let Zi=0,_n,yn;function Ji(e,t=!1){if(e.flags|=8,t){e.next=yn,yn=e;return}e.next=_n,_n=e}function cr(){Zi++}function ur(){if(--Zi>0)return;if(yn){let t=yn;for(yn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;_n;){let t=_n;for(_n=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Qi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yi(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),fr(s),Ul(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Bs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sn)||(e.globalVersion=Sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bs(e))))return;e.flags|=2;const t=e.dep,n=de,s=Fe;de=e,Fe=!0;try{Qi(e);const r=e.fn(e._value);(t.version===0||At(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{de=n,Fe=s,Yi(e),e.flags&=-3}}function fr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ul(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Fe=!0;const eo=[];function gt(){eo.push(Fe),Fe=!1}function mt(){const e=eo.pop();Fe=e===void 0?!0:e}function Hr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let Sn=0;class zl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Fe||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new zl(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,to(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(t){this.version++,Sn++,this.notify(t)}notify(t){cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ur()}}}function to(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)to(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ws=new WeakMap,Bt=Symbol(""),Hs=Symbol(""),An=Symbol("");function ke(e,t,n){if(Fe&&de){let s=Ws.get(e);s||Ws.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new dr),r.map=s,r.key=n),r.track()}}function ft(e,t,n,s,r,i){const l=Ws.get(e);if(!l){Sn++;return}const o=a=>{a&&a.trigger()};if(cr(),t==="clear")l.forEach(o);else{const a=G(e),u=a&&ir(n);if(a&&n==="length"){const c=Number(s);l.forEach((p,g)=>{(g==="length"||g===An||!rt(g)&&g>=c)&&o(p)})}else switch((n!==void 0||l.has(void 0))&&o(l.get(n)),u&&o(l.get(An)),t){case"add":a?u&&o(l.get("length")):(o(l.get(Bt)),Yt(e)&&o(l.get(Hs)));break;case"delete":a||(o(l.get(Bt)),Yt(e)&&o(l.get(Hs)));break;case"set":Yt(e)&&o(l.get(Bt));break}}ur()}function Vt(e){const t=X(e);return t===e?t:(ke(t,"iterate",An),We(e)?t:t.map(Ue))}function ds(e){return ke(e=X(e),"iterate",An),e}function xt(e,t){return bt(e)?nn(Wt(e)?Ue(t):t):Ue(t)}const Vl={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,e=>xt(this,e))},concat(...e){return Vt(this).concat(...e.map(t=>G(t)?Vt(t):t))},entries(){return Cs(this,"entries",e=>(e[1]=xt(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(s=>xt(this,s)),arguments)},find(e,t){return lt(this,"find",e,t,n=>xt(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>xt(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ss(this,"includes",e)},indexOf(...e){return Ss(this,"indexOf",e)},join(e){return Vt(this).join(e)},lastIndexOf(...e){return Ss(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return un(this,"pop")},push(...e){return un(this,"push",e)},reduce(e,...t){return jr(this,"reduce",e,t)},reduceRight(e,...t){return jr(this,"reduceRight",e,t)},shift(){return un(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return un(this,"splice",e)},toReversed(){return Vt(this).toReversed()},toSorted(e){return Vt(this).toSorted(e)},toSpliced(...e){return Vt(this).toSpliced(...e)},unshift(...e){return un(this,"unshift",e)},values(){return Cs(this,"values",e=>xt(this,e))}};function Cs(e,t,n){const s=ds(e),r=s[t]();return s!==e&&!We(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const ql=Array.prototype;function lt(e,t,n,s,r,i){const l=ds(e),o=l!==e&&!We(e),a=l[t];if(a!==ql[t]){const p=a.apply(e,i);return o?Ue(p):p}let u=n;l!==e&&(o?u=function(p,g){return n.call(this,xt(e,p),g,e)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,e)}));const c=a.call(l,u,s);return o&&r?r(c):c}function jr(e,t,n,s){const r=ds(e);let i=n;return r!==e&&(We(e)?n.length>3&&(i=function(l,o,a){return n.call(this,l,o,a,e)}):i=function(l,o,a){return n.call(this,l,xt(e,o),a,e)}),r[t](i,...s)}function Ss(e,t,n){const s=X(e);ke(s,"iterate",An);const r=s[t](...n);return(r===-1||r===!1)&&gr(n[0])?(n[0]=X(n[0]),s[t](...n)):r}function un(e,t,n=[]){gt(),cr();const s=X(e)[t].apply(e,n);return ur(),mt(),s}const Kl=nr("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rt));function Zl(e){rt(e)||(e=String(e));const t=X(this);return ke(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ia:lo:i?oo:io).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=G(t);if(!r){let a;if(l&&(a=Vl[n]))return a;if(n==="hasOwnProperty")return Zl}const o=Reflect.get(t,n,Re(t)?t:s);if((rt(n)?no.has(n):Kl(n))||(r||ke(t,"get",n),i))return o;if(Re(o)){const a=l&&ir(n)?o:o.value;return r&&ie(a)?Fs(a):a}return ie(o)?r?Fs(o):ps(o):o}}class ro extends so{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const l=G(t)&&ir(n);if(!this._isShallow){const u=bt(i);if(!We(s)&&!bt(s)&&(i=X(i),s=X(s)),!l&&Re(i)&&!Re(s))return u||(i.value=s),!0}const o=l?Number(n)<t.length:ee(t,n),a=Reflect.set(t,n,s,Re(t)?t:r);return t===X(r)&&(o?At(s,i)&&ft(t,"set",n,s):ft(t,"add",n,s)),a}deleteProperty(t,n){const s=ee(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&ft(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!rt(n)||!no.has(n))&&ke(t,"has",n),s}ownKeys(t){return ke(t,"iterate",G(t)?"length":Bt),Reflect.ownKeys(t)}}class Jl extends so{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ql=new ro,Yl=new Jl,Xl=new ro(!0);const js=e=>e,Bn=e=>Reflect.getPrototypeOf(e);function ea(e,t,n){return function(...s){const r=this.__v_raw,i=X(r),l=Yt(i),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,u=r[e](...s),c=n?js:t?nn:Ue;return!t&&ke(i,"iterate",a?Hs:Bt),ye(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:o?[c(p[0]),c(p[1])]:c(p),done:g}}})}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ta(e,t){const n={get(r){const i=this.__v_raw,l=X(i),o=X(r);e||(At(r,o)&&ke(l,"get",r),ke(l,"get",o));const{has:a}=Bn(l),u=t?js:e?nn:Ue;if(a.call(l,r))return u(i.get(r));if(a.call(l,o))return u(i.get(o));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ke(X(r),"iterate",Bt),r.size},has(r){const i=this.__v_raw,l=X(i),o=X(r);return e||(At(r,o)&&ke(l,"has",r),ke(l,"has",o)),r===o?i.has(r):i.has(r)||i.has(o)},forEach(r,i){const l=this,o=l.__v_raw,a=X(o),u=t?js:e?nn:Ue;return!e&&ke(a,"iterate",Bt),o.forEach((c,p)=>r.call(i,u(c),u(p),l))}};return ye(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(r){!t&&!We(r)&&!bt(r)&&(r=X(r));const i=X(this);return Bn(i).has.call(i,r)||(i.add(r),ft(i,"add",r,r)),this},set(r,i){!t&&!We(i)&&!bt(i)&&(i=X(i));const l=X(this),{has:o,get:a}=Bn(l);let u=o.call(l,r);u||(r=X(r),u=o.call(l,r));const c=a.call(l,r);return l.set(r,i),u?At(i,c)&&ft(l,"set",r,i):ft(l,"add",r,i),this},delete(r){const i=X(this),{has:l,get:o}=Bn(i);let a=l.call(i,r);a||(r=X(r),a=l.call(i,r)),o&&o.call(i,r);const u=i.delete(r);return a&&ft(i,"delete",r,void 0),u},clear(){const r=X(this),i=r.size!==0,l=r.clear();return i&&ft(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ea(r,e,t)}),n}function pr(e,t){const n=ta(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const na={get:pr(!1,!1)},sa={get:pr(!1,!0)},ra={get:pr(!0,!1)};const io=new WeakMap,oo=new WeakMap,lo=new WeakMap,ia=new WeakMap;function oa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function la(e){return e.__v_skip||!Object.isExtensible(e)?0:oa(Ol(e))}function ps(e){return bt(e)?e:hr(e,!1,Ql,na,io)}function ao(e){return hr(e,!1,Xl,sa,oo)}function Fs(e){return hr(e,!0,Yl,ra,lo)}function hr(e,t,n,s,r){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=la(e);if(i===0)return e;const l=r.get(e);if(l)return l;const o=new Proxy(e,i===2?s:n);return r.set(e,o),o}function Wt(e){return bt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function gr(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function aa(e){return!ee(e,"__v_skip")&&Object.isExtensible(e)&&Ui(e,"__v_skip",!0),e}const Ue=e=>ie(e)?ps(e):e,nn=e=>ie(e)?Fs(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function we(e){return co(e,!1)}function ca(e){return co(e,!0)}function co(e,t){return Re(e)?e:new ua(e,t)}class ua{constructor(t,n){this.dep=new dr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:Ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||We(t)||bt(t);t=s?t:X(t),At(t,n)&&(this._rawValue=t,this._value=s?t:Ue(t),this.dep.trigger())}}function le(e){return Re(e)?e.value:e}const fa={get:(e,t,n)=>t==="__v_raw"?e:le(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function uo(e){return Wt(e)?e:new Proxy(e,fa)}class da{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new dr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Ji(this,!0),!0}get value(){const t=this.dep.track();return Xi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function pa(e,t,n=!1){let s,r;return z(e)?s=e:(s=e.get,r=e.set),new da(s,r,n)}const Hn={},Zn=new WeakMap;let Lt;function ha(e,t=!1,n=Lt){if(n){let s=Zn.get(n);s||Zn.set(n,s=[]),s.push(e)}}function ga(e,t,n=ce){const{immediate:s,deep:r,once:i,scheduler:l,augmentJob:o,call:a}=n,u=P=>r?P:We(P)||r===!1||r===0?dt(P,1):dt(P);let c,p,g,b,x=!1,v=!1;if(Re(e)?(p=()=>e.value,x=We(e)):Wt(e)?(p=()=>u(e),x=!0):G(e)?(v=!0,x=e.some(P=>Wt(P)||We(P)),p=()=>e.map(P=>{if(Re(P))return P.value;if(Wt(P))return u(P);if(z(P))return a?a(P,2):P()})):z(e)?t?p=a?()=>a(e,2):e:p=()=>{if(g){gt();try{g()}finally{mt()}}const P=Lt;Lt=c;try{return a?a(e,3,[b]):e(b)}finally{Lt=P}}:p=st,t&&r){const P=p,ne=r===!0?1/0:r;p=()=>dt(P(),ne)}const A=Gl(),_=()=>{c.stop(),A&&A.active&&rr(A.effects,c)};if(i&&t){const P=t;t=(...ne)=>{P(...ne),_()}}let S=v?new Array(e.length).fill(Hn):Hn;const C=P=>{if(!(!(c.flags&1)||!c.dirty&&!P))if(t){const ne=c.run();if(r||x||(v?ne.some((ge,se)=>At(ge,S[se])):At(ne,S))){g&&g();const ge=Lt;Lt=c;try{const se=[ne,S===Hn?void 0:v&&S[0]===Hn?[]:S,b];S=ne,a?a(t,3,se):t(...se)}finally{Lt=ge}}}else c.run()};return o&&o(C),c=new Ki(p),c.scheduler=l?()=>l(C,!1):C,b=P=>ha(P,!1,c),g=c.onStop=()=>{const P=Zn.get(c);if(P){if(a)a(P,4);else for(const ne of P)ne();Zn.delete(c)}},t?s?C(!0):S=c.run():l?l(C.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function dt(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Re(e))dt(e.value,t,n);else if(G(e))for(let s=0;s<e.length;s++)dt(e[s],t,n);else if(Hi(e)||Yt(e))e.forEach(s=>{dt(s,t,n)});else if(Gi(e)){for(const s in e)dt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&dt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nn(e,t,n,s){try{return s?e(...s):e()}catch(r){hs(r,t,n)}}function it(e,t,n,s){if(z(e)){const r=Nn(e,t,n,s);return r&&ji(r)&&r.catch(i=>{hs(i,t,n)}),r}if(G(e)){const r=[];for(let i=0;i<e.length;i++)r.push(it(e[i],t,n,s));return r}}function hs(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ce;if(t){let o=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,a,u)===!1)return}o=o.parent}if(i){gt(),Nn(i,null,10,[e,a,u]),mt();return}}ma(e,n,r,s,l)}function ma(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Se=[];let tt=-1;const Xt=[];let Rt=null,qt=0;const fo=Promise.resolve();let Jn=null;function Qn(e){const t=Jn||fo;return e?t.then(this?e.bind(this):e):t}function ba(e){let t=tt+1,n=Se.length;for(;t<n;){const s=t+n>>>1,r=Se[s],i=En(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function mr(e){if(!(e.flags&1)){const t=En(e),n=Se[Se.length-1];!n||!(e.flags&2)&&t>=En(n)?Se.push(e):Se.splice(ba(t),0,e),e.flags|=1,po()}}function po(){Jn||(Jn=fo.then(go))}function va(e){G(e)?Xt.push(...e):Rt&&e.id===-1?Rt.splice(qt+1,0,e):e.flags&1||(Xt.push(e),e.flags|=1),po()}function Fr(e,t,n=tt+1){for(;n<Se.length;n++){const s=Se[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Se.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ho(e){if(Xt.length){const t=[...new Set(Xt)].sort((n,s)=>En(n)-En(s));if(Xt.length=0,Rt){Rt.push(...t);return}for(Rt=t,qt=0;qt<Rt.length;qt++){const n=Rt[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,qt=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function go(e){try{for(tt=0;tt<Se.length;tt++){const t=Se[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Se.length;tt++){const t=Se[tt];t&&(t.flags&=-2)}tt=-1,Se.length=0,ho(),Jn=null,(Se.length||Xt.length)&&go()}}let Ne=null,mo=null;function Yn(e){const t=Ne;return Ne=e,mo=e&&e.type.__scopeId||null,t}function V(e,t=Ne,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ts(-1);const i=Yn(t);let l;try{l=e(...r)}finally{Yn(i),s._d&&ts(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function br(e,t){if(Ne===null)return e;const n=vs(Ne),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,o,a=ce]=t[r];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&dt(l),s.push({dir:i,instance:n,value:l,oldValue:void 0,arg:o,modifiers:a}))}return e}function Mt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let l=0;l<r.length;l++){const o=r[l];i&&(o.oldValue=i[l].value);let a=o.dir[s];a&&(gt(),it(a,n,8,[e.el,o,e,t]),mt())}}function Gn(e,t){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[e]=t}}function Ge(e,t,n=!1){const s=bc();if(s||tn){let r=tn?tn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&z(t)?t.call(s&&s.proxy):t}}const _a=Symbol.for("v-scx"),ya=()=>Ge(_a);function en(e,t,n){return bo(e,t,n)}function bo(e,t,n=ce){const{immediate:s,deep:r,flush:i,once:l}=n,o=ye({},n),a=t&&s||!t&&i!=="post";let u;if(In){if(i==="sync"){const b=ya();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=st,b.resume=st,b.pause=st,b}}const c=xe;o.call=(b,x,v)=>it(b,c,x,v);let p=!1;i==="post"?o.scheduler=b=>{Oe(b,c&&c.suspense)}:i!=="sync"&&(p=!0,o.scheduler=(b,x)=>{x?b():mr(b)}),o.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const g=ga(e,t,o);return In&&(u?u.push(g):a&&g()),g}function ka(e,t,n){const s=this.proxy,r=me(e)?e.includes(".")?vo(s,e):()=>s[e]:e.bind(s,s);let i;z(t)?i=t:(i=t.handler,n=t);const l=Ln(this),o=bo(r,i.bind(s),n);return l(),o}function vo(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const wa=Symbol("_vte"),xa=e=>e.__isTeleport,Ra=Symbol("_leaveCb");function vr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _o(e,t){return z(e)?ye({name:e.name},t,{setup:e}):e}function yo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Gr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Xn=new WeakMap;function kn(e,t,n,s,r=!1){if(G(e)){e.forEach((v,A)=>kn(v,t&&(G(t)?t[A]:t),n,s,r));return}if(wn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&kn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?vs(s.component):s.el,l=r?null:i,{i:o,r:a}=e,u=t&&t.r,c=o.refs===ce?o.refs={}:o.refs,p=o.setupState,g=X(p),b=p===ce?Wi:v=>Gr(c,v)?!1:ee(g,v),x=(v,A)=>!(A&&Gr(c,A));if(u!=null&&u!==a){if(Ur(t),me(u))c[u]=null,b(u)&&(p[u]=null);else if(Re(u)){const v=t;x(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(z(a))Nn(a,o,12,[l,c]);else{const v=me(a),A=Re(a);if(v||A){const _=()=>{if(e.f){const S=v?b(a)?p[a]:c[a]:x()||!e.k?a.value:c[e.k];if(r)G(S)&&rr(S,i);else if(G(S))S.includes(i)||S.push(i);else if(v)c[a]=[i],b(a)&&(p[a]=c[a]);else{const C=[i];x(a,e.k)&&(a.value=C),e.k&&(c[e.k]=C)}}else v?(c[a]=l,b(a)&&(p[a]=l)):A&&(x(a,e.k)&&(a.value=l),e.k&&(c[e.k]=l))};if(l){const S=()=>{_(),Xn.delete(e)};S.id=-1,Xn.set(e,S),Oe(S,n)}else Ur(e),_()}}}function Ur(e){const t=Xn.get(e);t&&(t.flags|=8,Xn.delete(e))}fs().requestIdleCallback;fs().cancelIdleCallback;const wn=e=>!!e.type.__asyncLoader,ko=e=>e.type.__isKeepAlive;function Ta(e,t){wo(e,"a",t)}function Ca(e,t){wo(e,"da",t)}function wo(e,t,n=xe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(gs(t,s,n),n){let r=n.parent;for(;r&&r.parent;)ko(r.parent.vnode)&&Sa(s,t,n,r),r=r.parent}}function Sa(e,t,n,s){const r=gs(t,e,s,!0);Ro(()=>{rr(s[t],r)},n)}function gs(e,t,n=xe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{gt();const o=Ln(n),a=it(t,n,e,l);return o(),mt(),a});return s?r.unshift(i):r.push(i),i}}const vt=e=>(t,n=xe)=>{(!In||e==="sp")&&gs(e,(...s)=>t(...s),n)},Aa=vt("bm"),ln=vt("m"),Ea=vt("bu"),Pa=vt("u"),xo=vt("bum"),Ro=vt("um"),Ia=vt("sp"),Oa=vt("rtg"),$a=vt("rtc");function Ma(e,t=xe){gs("ec",e,t)}const Na="components";function It(e,t){return Da(Na,e,!0,t)||e}const La=Symbol.for("v-ndc");function Da(e,t,n=!0,s=!1){const r=Ne||xe;if(r){const i=r.type;{const o=wc(i,!1);if(o&&(o===t||o===He(t)||o===us(He(t))))return i}const l=zr(r[e]||i[e],t)||zr(r.appContext[e],t);return!l&&s?i:l}}function zr(e,t){return e&&(e[t]||e[He(t)]||e[us(He(t))])}function _e(e,t,n,s){let r;const i=n,l=G(e);if(l||me(e)){const o=l&&Wt(e);let a=!1,u=!1;o&&(a=!We(e),u=bt(e),e=ds(e)),r=new Array(e.length);for(let c=0,p=e.length;c<p;c++)r[c]=t(a?u?nn(Ue(e[c])):Ue(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i)}else if(ie(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const c=o[a];r[a]=t(e[c],c,a,i)}}else r=[];return r}const Gs=e=>e?Uo(e)?vs(e):Gs(e.parent):null,xn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gs(e.parent),$root:e=>Gs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Co(e),$forceUpdate:e=>e.f||(e.f=()=>{mr(e.update)}),$nextTick:e=>e.n||(e.n=Qn.bind(e.proxy)),$watch:e=>ka.bind(e)}),As=(e,t)=>e!==ce&&!e.__isScriptSetup&&ee(e,t),Ba={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:l,type:o,appContext:a}=e;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(As(s,t))return l[t]=1,s[t];if(r!==ce&&ee(r,t))return l[t]=2,r[t];if(ee(i,t))return l[t]=3,i[t];if(n!==ce&&ee(n,t))return l[t]=4,n[t];Us&&(l[t]=0)}}const u=xn[t];let c,p;if(u)return t==="$attrs"&&ke(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==ce&&ee(n,t))return l[t]=4,n[t];if(p=a.config.globalProperties,ee(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return As(r,t)?(r[t]=n,!0):s!==ce&&ee(s,t)?(s[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:l}},o){let a;return!!(n[o]||e!==ce&&o[0]!=="$"&&ee(e,o)||As(t,o)||ee(i,o)||ee(s,o)||ee(xn,o)||ee(r.config.globalProperties,o)||(a=l.__cssModules)&&a[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vr(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Us=!0;function Wa(e){const t=Co(e),n=e.proxy,s=e.ctx;Us=!1,t.beforeCreate&&qr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:o,provide:a,inject:u,created:c,beforeMount:p,mounted:g,beforeUpdate:b,updated:x,activated:v,deactivated:A,beforeDestroy:_,beforeUnmount:S,destroyed:C,unmounted:P,render:ne,renderTracked:ge,renderTriggered:se,errorCaptured:Ve,serverPrefetch:_t,expose:qe,inheritAttrs:yt,components:Ot,directives:Ke,filters:an}=t;if(u&&Ha(u,s,null),l)for(const oe in l){const Q=l[oe];z(Q)&&(s[oe]=Q.bind(n))}if(r){const oe=r.call(n,n);ie(oe)&&(e.data=ps(oe))}if(Us=!0,i)for(const oe in i){const Q=i[oe],ot=z(Q)?Q.bind(n,n):z(Q.get)?Q.get.bind(n,n):st,kt=!z(Q)&&z(Q.set)?Q.set.bind(n):st,Ze=pe({get:ot,set:kt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ee=>Ze.value=Ee})}if(o)for(const oe in o)To(o[oe],s,n,oe);if(a){const oe=z(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(Q=>{Gn(Q,oe[Q])})}c&&qr(c,e,"c");function ve(oe,Q){G(Q)?Q.forEach(ot=>oe(ot.bind(n))):Q&&oe(Q.bind(n))}if(ve(Aa,p),ve(ln,g),ve(Ea,b),ve(Pa,x),ve(Ta,v),ve(Ca,A),ve(Ma,Ve),ve($a,ge),ve(Oa,se),ve(xo,S),ve(Ro,P),ve(Ia,_t),G(qe))if(qe.length){const oe=e.exposed||(e.exposed={});qe.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>n[Q],set:ot=>n[Q]=ot,enumerable:!0})})}else e.exposed||(e.exposed={});ne&&e.render===st&&(e.render=ne),yt!=null&&(e.inheritAttrs=yt),Ot&&(e.components=Ot),Ke&&(e.directives=Ke),_t&&yo(e)}function Ha(e,t,n=st){G(e)&&(e=zs(e));for(const s in e){const r=e[s];let i;ie(r)?"default"in r?i=Ge(r.from||s,r.default,!0):i=Ge(r.from||s):i=Ge(r),Re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i}}function qr(e,t,n){it(G(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,s){let r=s.includes(".")?vo(n,s):()=>n[s];if(me(e)){const i=t[e];z(i)&&en(r,i)}else if(z(e))en(r,e.bind(n));else if(ie(e))if(G(e))e.forEach(i=>To(i,t,n,s));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&en(r,i,e)}}function Co(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,o=i.get(t);let a;return o?a=o:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>es(a,u,l,!0)),es(a,t,l)),ie(t)&&i.set(t,a),a}function es(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&es(e,i,n,!0),r&&r.forEach(l=>es(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const o=ja[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const ja={data:Kr,props:Zr,emits:Zr,methods:mn,computed:mn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:mn,directives:mn,watch:Ga,provide:Kr,inject:Fa};function Kr(e,t){return t?e?function(){return ye(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Fa(e,t){return mn(zs(e),zs(t))}function zs(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ye(Object.create(null),e,t):t}function Zr(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:ye(Object.create(null),Vr(e),Vr(t??{})):t}function Ga(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const s in t)n[s]=Te(e[s],t[s]);return n}function So(){return{app:null,config:{isNativeTag:Wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ua=0;function za(e,t){return function(s,r=null){z(s)||(s=ye({},s)),r!=null&&!ie(r)&&(r=null);const i=So(),l=new WeakSet,o=[];let a=!1;const u=i.app={_uid:Ua++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Rc,get config(){return i.config},set config(c){},use(c,...p){return l.has(c)||(c&&z(c.install)?(l.add(c),c.install(u,...p)):z(c)&&(l.add(c),c(u,...p))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,p){return p?(i.components[c]=p,u):i.components[c]},directive(c,p){return p?(i.directives[c]=p,u):i.directives[c]},mount(c,p,g){if(!a){const b=u._ceVNode||F(s,r);return b.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(b,c,g),a=!0,u._container=c,c.__vue_app__=u,vs(b.component)}},onUnmount(c){o.push(c)},unmount(){a&&(it(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,p){return i.provides[c]=p,u},runWithContext(c){const p=tn;tn=u;try{return c()}finally{tn=p}}};return u}}let tn=null;const Va=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function qa(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let r=n;const i=t.startsWith("update:"),l=i&&Va(s,t.slice(7));l&&(l.trim&&(r=n.map(c=>me(c)?c.trim():c)),l.number&&(r=n.map(or)));let o,a=s[o=xs(t)]||s[o=xs(He(t))];!a&&i&&(a=s[o=xs(jt(t))]),a&&it(a,e,6,r);const u=s[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,it(u,e,6,r)}}const Ka=new WeakMap;function Ao(e,t,n=!1){const s=n?Ka:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let l={},o=!1;if(!z(e)){const a=u=>{const c=Ao(u,t,!0);c&&(o=!0,ye(l,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!o?(ie(e)&&s.set(e,null),null):(G(i)?i.forEach(a=>l[a]=null):ye(l,i),ie(e)&&s.set(e,l),l)}function ms(e,t){return!e||!as(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,jt(t))||ee(e,t))}function Jr(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:l,attrs:o,emit:a,render:u,renderCache:c,props:p,data:g,setupState:b,ctx:x,inheritAttrs:v}=e,A=Yn(e);let _,S;try{if(n.shapeFlag&4){const P=r||s,ne=P;_=nt(u.call(ne,P,c,p,b,g,x)),S=o}else{const P=t;_=nt(P.length>1?P(p,{attrs:o,slots:l,emit:a}):P(p,null)),S=t.props?o:Za(o)}}catch(P){Rn.length=0,hs(P,e,1),_=F(Et)}let C=_;if(S&&v!==!1){const P=Object.keys(S),{shapeFlag:ne}=C;P.length&&ne&7&&(i&&P.some(sr)&&(S=Ja(S,i)),C=sn(C,S,!1,!0))}return n.dirs&&(C=sn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&vr(C,n.transition),_=C,Yn(A),_}const Za=e=>{let t;for(const n in e)(n==="class"||n==="style"||as(n))&&((t||(t={}))[n]=e[n]);return t},Ja=(e,t)=>{const n={};for(const s in e)(!sr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Qa(e,t,n){const{props:s,children:r,component:i}=e,{props:l,children:o,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Qr(s,l,u):!!l;if(a&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const g=c[p];if(Eo(l,s,g)&&!ms(u,g))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:s===l?!1:s?l?Qr(s,l,u):!0:!!l;return!1}function Qr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Eo(t,e,i)&&!ms(n,i))return!0}return!1}function Eo(e,t,n){const s=e[n],r=t[n];return n==="style"&&ie(s)&&ie(r)?!ar(s,r):s!==r}function Ya({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Po={},Io=()=>Object.create(Po),Oo=e=>Object.getPrototypeOf(e)===Po;function Xa(e,t,n,s=!1){const r={},i=Io();e.propsDefaults=Object.create(null),$o(e,t,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);n?e.props=s?r:ao(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function ec(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,o=X(r),[a]=e.propsOptions;let u=!1;if((s||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let g=c[p];if(ms(e.emitsOptions,g))continue;const b=t[g];if(a)if(ee(i,g))b!==i[g]&&(i[g]=b,u=!0);else{const x=He(g);r[x]=Vs(a,o,x,b,e,!1)}else b!==i[g]&&(i[g]=b,u=!0)}}}else{$o(e,t,r,i)&&(u=!0);let c;for(const p in o)(!t||!ee(t,p)&&((c=jt(p))===p||!ee(t,c)))&&(a?n&&(n[p]!==void 0||n[c]!==void 0)&&(r[p]=Vs(a,o,p,void 0,e,!0)):delete r[p]);if(i!==o)for(const p in i)(!t||!ee(t,p))&&(delete i[p],u=!0)}u&&ft(e.attrs,"set","")}function $o(e,t,n,s){const[r,i]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(vn(a))continue;const u=t[a];let c;r&&ee(r,c=He(a))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:ms(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,l=!0)}if(i){const a=X(n),u=o||ce;for(let c=0;c<i.length;c++){const p=i[c];n[p]=Vs(r,a,p,u[p],e,!ee(u,p))}}return l}function Vs(e,t,n,s,r,i){const l=e[n];if(l!=null){const o=ee(l,"default");if(o&&s===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&z(a)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Ln(r);s=u[n]=a.call(null,t),c()}}else s=a;r.ce&&r.ce._setProp(n,s)}l[0]&&(i&&!o?s=!1:l[1]&&(s===""||s===jt(n))&&(s=!0))}return s}const tc=new WeakMap;function Mo(e,t,n=!1){const s=n?tc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,l={},o=[];let a=!1;if(!z(e)){const c=p=>{a=!0;const[g,b]=Mo(p,t,!0);ye(l,g),b&&o.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return ie(e)&&s.set(e,Qt),Qt;if(G(i))for(let c=0;c<i.length;c++){const p=He(i[c]);Yr(p)&&(l[p]=ce)}else if(i)for(const c in i){const p=He(c);if(Yr(p)){const g=i[c],b=l[p]=G(g)||z(g)?{type:g}:ye({},g),x=b.type;let v=!1,A=!0;if(G(x))for(let _=0;_<x.length;++_){const S=x[_],C=z(S)&&S.name;if(C==="Boolean"){v=!0;break}else C==="String"&&(A=!1)}else v=z(x)&&x.name==="Boolean";b[0]=v,b[1]=A,(v||ee(b,"default"))&&o.push(p)}}const u=[l,o];return ie(e)&&s.set(e,u),u}function Yr(e){return e[0]!=="$"&&!vn(e)}const _r=e=>e==="_"||e==="_ctx"||e==="$stable",yr=e=>G(e)?e.map(nt):[nt(e)],nc=(e,t,n)=>{if(t._n)return t;const s=V((...r)=>yr(t(...r)),n);return s._c=!1,s},No=(e,t,n)=>{const s=e._ctx;for(const r in e){if(_r(r))continue;const i=e[r];if(z(i))t[r]=nc(r,i,s);else if(i!=null){const l=yr(i);t[r]=()=>l}}},Lo=(e,t)=>{const n=yr(t);e.slots.default=()=>n},Do=(e,t,n)=>{for(const s in t)(n||!_r(s))&&(e[s]=t[s])},sc=(e,t,n)=>{const s=e.slots=Io();if(e.vnode.shapeFlag&32){const r=t._;r?(Do(s,t,n),n&&Ui(s,"_",r,!0)):No(t,s)}else t&&Lo(e,t)},rc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,l=ce;if(s.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:Do(r,t,n):(i=!t.$stable,No(t,r)),l=t}else t&&(Lo(e,t),l={default:1});if(i)for(const o in r)!_r(o)&&l[o]==null&&delete r[o]},Oe=cc;function ic(e){return oc(e)}function oc(e,t){const n=fs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:l,createText:o,createComment:a,setText:u,setElementText:c,parentNode:p,nextSibling:g,setScopeId:b=st,insertStaticContent:x}=e,v=(d,h,m,y=null,R=null,k=null,$=void 0,I=null,E=!!h.dynamicChildren)=>{if(d===h)return;d&&!fn(d,h)&&(y=w(d),Ee(d,R,k,!0),d=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:T,ref:j,shapeFlag:L}=h;switch(T){case bs:A(d,h,m,y);break;case Et:_(d,h,m,y);break;case Un:d==null&&S(h,m,y,$);break;case ue:Ot(d,h,m,y,R,k,$,I,E);break;default:L&1?ne(d,h,m,y,R,k,$,I,E):L&6?Ke(d,h,m,y,R,k,$,I,E):(L&64||L&128)&&T.process(d,h,m,y,R,k,$,I,E,W)}j!=null&&R?kn(j,d&&d.ref,k,h||d,!h):j==null&&d&&d.ref!=null&&kn(d.ref,null,k,d,!0)},A=(d,h,m,y)=>{if(d==null)s(h.el=o(h.children),m,y);else{const R=h.el=d.el;h.children!==d.children&&u(R,h.children)}},_=(d,h,m,y)=>{d==null?s(h.el=a(h.children||""),m,y):h.el=d.el},S=(d,h,m,y)=>{[d.el,d.anchor]=x(d.children,h,m,y,d.el,d.anchor)},C=({el:d,anchor:h},m,y)=>{let R;for(;d&&d!==h;)R=g(d),s(d,m,y),d=R;s(h,m,y)},P=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=g(d),r(d),d=m;r(h)},ne=(d,h,m,y,R,k,$,I,E)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)ge(h,m,y,R,k,$,I,E);else{const T=d.el&&d.el._isVueCE?d.el:null;try{T&&T._beginPatch(),_t(d,h,R,k,$,I,E)}finally{T&&T._endPatch()}}},ge=(d,h,m,y,R,k,$,I)=>{let E,T;const{props:j,shapeFlag:L,transition:H,dirs:U}=d;if(E=d.el=l(d.type,k,j&&j.is,j),L&8?c(E,d.children):L&16&&Ve(d.children,E,null,y,R,Es(d,k),$,I),U&&Mt(d,null,y,"created"),se(E,d,d.scopeId,$,y),j){for(const fe in j)fe!=="value"&&!vn(fe)&&i(E,fe,null,j[fe],k,y);"value"in j&&i(E,"value",null,j.value,k),(T=j.onVnodeBeforeMount)&&Xe(T,y,d)}U&&Mt(d,null,y,"beforeMount");const K=lc(R,H);K&&H.beforeEnter(E),s(E,h,m),((T=j&&j.onVnodeMounted)||K||U)&&Oe(()=>{T&&Xe(T,y,d),K&&H.enter(E),U&&Mt(d,null,y,"mounted")},R)},se=(d,h,m,y,R)=>{if(m&&b(d,m),y)for(let k=0;k<y.length;k++)b(d,y[k]);if(R){let k=R.subTree;if(h===k||jo(k.type)&&(k.ssContent===h||k.ssFallback===h)){const $=R.vnode;se(d,$,$.scopeId,$.slotScopeIds,R.parent)}}},Ve=(d,h,m,y,R,k,$,I,E=0)=>{for(let T=E;T<d.length;T++){const j=d[T]=I?ut(d[T]):nt(d[T]);v(null,j,h,m,y,R,k,$,I)}},_t=(d,h,m,y,R,k,$)=>{const I=h.el=d.el;let{patchFlag:E,dynamicChildren:T,dirs:j}=h;E|=d.patchFlag&16;const L=d.props||ce,H=h.props||ce;let U;if(m&&Nt(m,!1),(U=H.onVnodeBeforeUpdate)&&Xe(U,m,h,d),j&&Mt(h,d,m,"beforeUpdate"),m&&Nt(m,!0),(L.innerHTML&&H.innerHTML==null||L.textContent&&H.textContent==null)&&c(I,""),T?qe(d.dynamicChildren,T,I,m,y,Es(h,R),k):$||Q(d,h,I,null,m,y,Es(h,R),k,!1),E>0){if(E&16)yt(I,L,H,m,R);else if(E&2&&L.class!==H.class&&i(I,"class",null,H.class,R),E&4&&i(I,"style",L.style,H.style,R),E&8){const K=h.dynamicProps;for(let fe=0;fe<K.length;fe++){const re=K[fe],Pe=L[re],Ie=H[re];(Ie!==Pe||re==="value")&&i(I,re,Pe,Ie,R,m)}}E&1&&d.children!==h.children&&c(I,h.children)}else!$&&T==null&&yt(I,L,H,m,R);((U=H.onVnodeUpdated)||j)&&Oe(()=>{U&&Xe(U,m,h,d),j&&Mt(h,d,m,"updated")},y)},qe=(d,h,m,y,R,k,$)=>{for(let I=0;I<h.length;I++){const E=d[I],T=h[I],j=E.el&&(E.type===ue||!fn(E,T)||E.shapeFlag&198)?p(E.el):m;v(E,T,j,null,y,R,k,$,!0)}},yt=(d,h,m,y,R)=>{if(h!==m){if(h!==ce)for(const k in h)!vn(k)&&!(k in m)&&i(d,k,h[k],null,R,y);for(const k in m){if(vn(k))continue;const $=m[k],I=h[k];$!==I&&k!=="value"&&i(d,k,I,$,R,y)}"value"in m&&i(d,"value",h.value,m.value,R)}},Ot=(d,h,m,y,R,k,$,I,E)=>{const T=h.el=d?d.el:o(""),j=h.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:U}=h;U&&(I=I?I.concat(U):U),d==null?(s(T,m,y),s(j,m,y),Ve(h.children||[],m,j,R,k,$,I,E)):L>0&&L&64&&H&&d.dynamicChildren&&d.dynamicChildren.length===H.length?(qe(d.dynamicChildren,H,m,R,k,$,I),(h.key!=null||R&&h===R.subTree)&&Bo(d,h,!0)):Q(d,h,m,j,R,k,$,I,E)},Ke=(d,h,m,y,R,k,$,I,E)=>{h.slotScopeIds=I,d==null?h.shapeFlag&512?R.ctx.activate(h,m,y,$,E):an(h,m,y,R,k,$,E):Gt(d,h,E)},an=(d,h,m,y,R,k,$)=>{const I=d.component=mc(d,y,R);if(ko(d)&&(I.ctx.renderer=W),vc(I,!1,$),I.asyncDep){if(R&&R.registerDep(I,ve,$),!d.el){const E=I.subTree=F(Et);_(null,E,h,m),d.placeholder=E.el}}else ve(I,d,h,m,R,k,$)},Gt=(d,h,m)=>{const y=h.component=d.component;if(Qa(d,h,m))if(y.asyncDep&&!y.asyncResolved){oe(y,h,m);return}else y.next=h,y.update();else h.el=d.el,y.vnode=h},ve=(d,h,m,y,R,k,$)=>{const I=()=>{if(d.isMounted){let{next:L,bu:H,u:U,parent:K,vnode:fe}=d;{const Qe=Wo(d);if(Qe){L&&(L.el=fe.el,oe(d,L,$)),Qe.asyncDep.then(()=>{Oe(()=>{d.isUnmounted||T()},R)});return}}let re=L,Pe;Nt(d,!1),L?(L.el=fe.el,oe(d,L,$)):L=fe,H&&Fn(H),(Pe=L.props&&L.props.onVnodeBeforeUpdate)&&Xe(Pe,K,L,fe),Nt(d,!0);const Ie=Jr(d),Je=d.subTree;d.subTree=Ie,v(Je,Ie,p(Je.el),w(Je),d,R,k),L.el=Ie.el,re===null&&Ya(d,Ie.el),U&&Oe(U,R),(Pe=L.props&&L.props.onVnodeUpdated)&&Oe(()=>Xe(Pe,K,L,fe),R)}else{let L;const{el:H,props:U}=h,{bm:K,m:fe,parent:re,root:Pe,type:Ie}=d,Je=wn(h);Nt(d,!1),K&&Fn(K),!Je&&(L=U&&U.onVnodeBeforeMount)&&Xe(L,re,h),Nt(d,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(Ie);const Qe=d.subTree=Jr(d);v(null,Qe,m,y,d,R,k),h.el=Qe.el}if(fe&&Oe(fe,R),!Je&&(L=U&&U.onVnodeMounted)){const Qe=h;Oe(()=>Xe(L,re,Qe),R)}(h.shapeFlag&256||re&&wn(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Oe(d.a,R),d.isMounted=!0,h=m=y=null}};d.scope.on();const E=d.effect=new Ki(I);d.scope.off();const T=d.update=E.run.bind(E),j=d.job=E.runIfDirty.bind(E);j.i=d,j.id=d.uid,E.scheduler=()=>mr(j),Nt(d,!0),T()},oe=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,ec(d,h.props,y,m),rc(d,h.children,m),gt(),Fr(d),mt()},Q=(d,h,m,y,R,k,$,I,E=!1)=>{const T=d&&d.children,j=d?d.shapeFlag:0,L=h.children,{patchFlag:H,shapeFlag:U}=h;if(H>0){if(H&128){kt(T,L,m,y,R,k,$,I,E);return}else if(H&256){ot(T,L,m,y,R,k,$,I,E);return}}U&8?(j&16&&De(T,R,k),L!==T&&c(m,L)):j&16?U&16?kt(T,L,m,y,R,k,$,I,E):De(T,R,k,!0):(j&8&&c(m,""),U&16&&Ve(L,m,y,R,k,$,I,E))},ot=(d,h,m,y,R,k,$,I,E)=>{d=d||Qt,h=h||Qt;const T=d.length,j=h.length,L=Math.min(T,j);let H;for(H=0;H<L;H++){const U=h[H]=E?ut(h[H]):nt(h[H]);v(d[H],U,m,null,R,k,$,I,E)}T>j?De(d,R,k,!0,!1,L):Ve(h,m,y,R,k,$,I,E,L)},kt=(d,h,m,y,R,k,$,I,E)=>{let T=0;const j=h.length;let L=d.length-1,H=j-1;for(;T<=L&&T<=H;){const U=d[T],K=h[T]=E?ut(h[T]):nt(h[T]);if(fn(U,K))v(U,K,m,null,R,k,$,I,E);else break;T++}for(;T<=L&&T<=H;){const U=d[L],K=h[H]=E?ut(h[H]):nt(h[H]);if(fn(U,K))v(U,K,m,null,R,k,$,I,E);else break;L--,H--}if(T>L){if(T<=H){const U=H+1,K=U<j?h[U].el:y;for(;T<=H;)v(null,h[T]=E?ut(h[T]):nt(h[T]),m,K,R,k,$,I,E),T++}}else if(T>H)for(;T<=L;)Ee(d[T],R,k,!0),T++;else{const U=T,K=T,fe=new Map;for(T=K;T<=H;T++){const Me=h[T]=E?ut(h[T]):nt(h[T]);Me.key!=null&&fe.set(Me.key,T)}let re,Pe=0;const Ie=H-K+1;let Je=!1,Qe=0;const cn=new Array(Ie);for(T=0;T<Ie;T++)cn[T]=0;for(T=U;T<=L;T++){const Me=d[T];if(Pe>=Ie){Ee(Me,R,k,!0);continue}let Ye;if(Me.key!=null)Ye=fe.get(Me.key);else for(re=K;re<=H;re++)if(cn[re-K]===0&&fn(Me,h[re])){Ye=re;break}Ye===void 0?Ee(Me,R,k,!0):(cn[Ye-K]=T+1,Ye>=Qe?Qe=Ye:Je=!0,v(Me,h[Ye],m,null,R,k,$,I,E),Pe++)}const Nr=Je?ac(cn):Qt;for(re=Nr.length-1,T=Ie-1;T>=0;T--){const Me=K+T,Ye=h[Me],Lr=h[Me+1],Dr=Me+1<j?Lr.el||Ho(Lr):y;cn[T]===0?v(null,Ye,m,Dr,R,k,$,I,E):Je&&(re<0||T!==Nr[re]?Ze(Ye,m,Dr,2):re--)}}},Ze=(d,h,m,y,R=null)=>{const{el:k,type:$,transition:I,children:E,shapeFlag:T}=d;if(T&6){Ze(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){$.move(d,h,m,W);return}if($===ue){s(k,h,m);for(let L=0;L<E.length;L++)Ze(E[L],h,m,y);s(d.anchor,h,m);return}if($===Un){C(d,h,m);return}if(y!==2&&T&1&&I)if(y===0)I.beforeEnter(k),s(k,h,m),Oe(()=>I.enter(k),R);else{const{leave:L,delayLeave:H,afterLeave:U}=I,K=()=>{d.ctx.isUnmounted?r(k):s(k,h,m)},fe=()=>{k._isLeaving&&k[Ra](!0),L(k,()=>{K(),U&&U()})};H?H(k,K,fe):fe()}else s(k,h,m)},Ee=(d,h,m,y=!1,R=!1)=>{const{type:k,props:$,ref:I,children:E,dynamicChildren:T,shapeFlag:j,patchFlag:L,dirs:H,cacheIndex:U}=d;if(L===-2&&(R=!1),I!=null&&(gt(),kn(I,null,m,d,!0),mt()),U!=null&&(h.renderCache[U]=void 0),j&256){h.ctx.deactivate(d);return}const K=j&1&&H,fe=!wn(d);let re;if(fe&&(re=$&&$.onVnodeBeforeUnmount)&&Xe(re,h,d),j&6)$t(d.component,m,y);else{if(j&128){d.suspense.unmount(m,y);return}K&&Mt(d,null,h,"beforeUnmount"),j&64?d.type.remove(d,h,m,W,y):T&&!T.hasOnce&&(k!==ue||L>0&&L&64)?De(T,h,m,!1,!0):(k===ue&&L&384||!R&&j&16)&&De(E,h,m),y&&Ut(d)}(fe&&(re=$&&$.onVnodeUnmounted)||K)&&Oe(()=>{re&&Xe(re,h,d),K&&Mt(d,null,h,"unmounted")},m)},Ut=d=>{const{type:h,el:m,anchor:y,transition:R}=d;if(h===ue){zt(m,y);return}if(h===Un){P(d);return}const k=()=>{r(m),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(d.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:I}=R,E=()=>$(m,k);I?I(d.el,k,E):E()}else k()},zt=(d,h)=>{let m;for(;d!==h;)m=g(d),r(d),d=m;r(h)},$t=(d,h,m)=>{const{bum:y,scope:R,job:k,subTree:$,um:I,m:E,a:T}=d;Xr(E),Xr(T),y&&Fn(y),R.stop(),k&&(k.flags|=8,Ee($,d,h,m)),I&&Oe(I,h),Oe(()=>{d.isUnmounted=!0},h)},De=(d,h,m,y=!1,R=!1,k=0)=>{for(let $=k;$<d.length;$++)Ee(d[$],h,m,y,R)},w=d=>{if(d.shapeFlag&6)return w(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=g(d.anchor||d.el),m=h&&h[wa];return m?g(m):h};let D=!1;const M=(d,h,m)=>{let y;d==null?h._vnode&&(Ee(h._vnode,null,null,!0),y=h._vnode.component):v(h._vnode||null,d,h,null,null,null,m),h._vnode=d,D||(D=!0,Fr(y),ho(),D=!1)},W={p:v,um:Ee,m:Ze,r:Ut,mt:an,mc:Ve,pc:Q,pbc:qe,n:w,o:e};return{render:M,hydrate:void 0,createApp:za(M)}}function Es({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function lc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bo(e,t,n=!1){const s=e.children,r=t.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const l=s[i];let o=r[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[i]=ut(r[i]),o.el=l.el),!n&&o.patchFlag!==-2&&Bo(l,o)),o.type===bs&&(o.patchFlag===-1&&(o=r[i]=ut(o)),o.el=l.el),o.type===Et&&!o.el&&(o.el=l.el)}}function ac(e){const t=e.slice(),n=[0];let s,r,i,l,o;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,l=n.length-1;i<l;)o=i+l>>1,e[n[o]]<u?i=o+1:l=o;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Wo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wo(t)}function Xr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ho(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ho(t.subTree):null}const jo=e=>e.__isSuspense;function cc(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):va(e)}const ue=Symbol.for("v-fgt"),bs=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Un=Symbol.for("v-stc"),Rn=[];let Le=null;function O(e=!1){Rn.push(Le=e?null:[])}function uc(){Rn.pop(),Le=Rn[Rn.length-1]||null}let Pn=1;function ts(e,t=!1){Pn+=e,e<0&&Le&&t&&(Le.hasOnce=!0)}function Fo(e){return e.dynamicChildren=Pn>0?Le||Qt:null,uc(),Pn>0&&Le&&Le.push(e),e}function N(e,t,n,s,r,i){return Fo(f(e,t,n,s,r,i,!0))}function bn(e,t,n,s,r){return Fo(F(e,t,n,s,r,!0))}function ns(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Go=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Re(e)||z(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===ue?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Go(t),ref:t&&zn(t),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ne};return o?(kr(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=me(n)?8:16),Pn>0&&!l&&Le&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Le.push(a),a}const F=fc;function fc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===La)&&(e=Et),ns(e)){const o=sn(e,t,!0);return n&&kr(o,n),Pn>0&&!i&&Le&&(o.shapeFlag&6?Le[Le.indexOf(e)]=o:Le.push(o)),o.patchFlag=-2,o}if(xc(e)&&(e=e.__vccOpts),t){t=dc(t);let{class:o,style:a}=t;o&&!me(o)&&(t.class=Be(o)),ie(a)&&(gr(a)&&!G(a)&&(a=ye({},a)),t.style=lr(a))}const l=me(e)?1:jo(e)?128:xa(e)?64:ie(e)?4:z(e)?2:0;return f(e,t,n,s,r,l,i,!0)}function dc(e){return e?gr(e)||Oo(e)?ye({},e):e:null}function sn(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:l,children:o,transition:a}=e,u=t?pc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Go(u),ref:t&&t.ref?n&&i?G(i)?i.concat(zn(t)):[i,zn(t)]:zn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&vr(c,a.clone(c)),c}function J(e=" ",t=0){return F(bs,null,e,t)}function Pt(e,t){const n=F(Un,null,e);return n.staticCount=t,n}function je(e="",t=!1){return t?(O(),bn(Et,null,e)):F(Et,null,e)}function nt(e){return e==null||typeof e=="boolean"?F(Et):G(e)?F(ue,null,e.slice()):ns(e)?ut(e):F(bs,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function kr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),kr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Oo(t)?t._ctx=Ne:r===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),s&64?(n=16,t=[J(t)]):n=8);e.children=t,e.shapeFlag|=n}function pc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Be([t.class,s.class]));else if(r==="style")t.style=lr([t.style,s.style]);else if(as(r)){const i=t[r],l=s[r];l&&i!==l&&!(G(i)&&i.includes(l))&&(t[r]=i?[].concat(i,l):l)}else r!==""&&(t[r]=s[r])}return t}function Xe(e,t,n,s=null){it(e,t,7,[n,s])}const hc=So();let gc=0;function mc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||hc,i={uid:gc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(s,r),emitsOptions:Ao(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qa.bind(null,i),e.ce&&e.ce(i),i}let xe=null;const bc=()=>xe||Ne;let ss,qs;{const e=fs(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};ss=t("__VUE_INSTANCE_SETTERS__",n=>xe=n),qs=t("__VUE_SSR_SETTERS__",n=>In=n)}const Ln=e=>{const t=xe;return ss(e),e.scope.on(),()=>{e.scope.off(),ss(t)}},ei=()=>{xe&&xe.scope.off(),ss(null)};function Uo(e){return e.vnode.shapeFlag&4}let In=!1;function vc(e,t=!1,n=!1){t&&qs(t);const{props:s,children:r}=e.vnode,i=Uo(e);Xa(e,s,i,t),sc(e,r,n||t);const l=i?_c(e,t):void 0;return t&&qs(!1),l}function _c(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ba);const{setup:s}=n;if(s){gt();const r=e.setupContext=s.length>1?kc(e):null,i=Ln(e),l=Nn(s,e,0,[e.props,r]),o=ji(l);if(mt(),i(),(o||e.sp)&&!wn(e)&&yo(e),o){if(l.then(ei,ei),t)return l.then(a=>{ti(e,a)}).catch(a=>{hs(a,e,0)});e.asyncDep=l}else ti(e,l)}else zo(e)}function ti(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=uo(t)),zo(e)}function zo(e,t,n){const s=e.type;e.render||(e.render=s.render||st);{const r=Ln(e);gt();try{Wa(e)}finally{mt(),r()}}}const yc={get(e,t){return ke(e,"get",""),e[t]}};function kc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yc),slots:e.slots,emit:e.emit,expose:t}}function vs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(uo(aa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function wc(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return z(e)&&"__vccOpts"in e}const pe=(e,t)=>pa(e,t,In);function Vo(e,t,n){try{ts(-1);const s=arguments.length;return s===2?ie(t)&&!G(t)?ns(t)?F(e,null,[t]):F(e,t):F(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ns(n)&&(n=[n]),F(e,t,n))}finally{ts(1)}}const Rc="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ks;const ni=typeof window<"u"&&window.trustedTypes;if(ni)try{Ks=ni.createPolicy("vue",{createHTML:e=>e})}catch{}const qo=Ks?e=>Ks.createHTML(e):e=>e,Tc="http://www.w3.org/2000/svg",Cc="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,si=ct&&ct.createElement("template"),Sc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?ct.createElementNS(Tc,e):t==="mathml"?ct.createElementNS(Cc,e):n?ct.createElement(e,{is:n}):ct.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const l=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{si.innerHTML=qo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const o=si.content;if(s==="svg"||s==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ac=Symbol("_vtc");function Ec(e,t,n){const s=e[Ac];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ri=Symbol("_vod"),Pc=Symbol("_vsh"),Ic=Symbol(""),Oc=/(?:^|;)\s*display\s*:/;function $c(e,t,n){const s=e.style,r=me(n);let i=!1;if(n&&!r){if(t)if(me(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();n[o]==null&&Vn(s,o,"")}else for(const l in t)n[l]==null&&Vn(s,l,"");for(const l in n)l==="display"&&(i=!0),Vn(s,l,n[l])}else if(r){if(t!==n){const l=s[Ic];l&&(n+=";"+l),s.cssText=n,i=Oc.test(n)}}else t&&e.removeAttribute("style");ri in e&&(e[ri]=i?s.display:"",e[Pc]&&(s.display="none"))}const ii=/\s*!important$/;function Vn(e,t,n){if(G(n))n.forEach(s=>Vn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Mc(e,t);ii.test(n)?e.setProperty(jt(s),n.replace(ii,""),"important"):e[s]=n}}const oi=["Webkit","Moz","ms"],Ps={};function Mc(e,t){const n=Ps[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return Ps[t]=s;s=us(s);for(let r=0;r<oi.length;r++){const i=oi[r]+s;if(i in e)return Ps[t]=i}return t}const li="http://www.w3.org/1999/xlink";function ai(e,t,n,s,r,i=Hl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n):n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":rt(n)?String(n):n)}function ci(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?qo(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=zi(n):n==null&&o==="string"?(n="",l=!0):o==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(r||t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function Nc(e,t,n,s){e.removeEventListener(t,n,s)}const ui=Symbol("_vei");function Lc(e,t,n,s,r=null){const i=e[ui]||(e[ui]={}),l=i[t];if(s&&l)l.value=s;else{const[o,a]=Dc(t);if(s){const u=i[t]=Hc(s,r);Kt(e,o,u,a)}else l&&(Nc(e,o,l,a),i[t]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function Dc(e){let t;if(fi.test(e)){t={};let s;for(;s=e.match(fi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Is=0;const Bc=Promise.resolve(),Wc=()=>Is||(Bc.then(()=>Is=0),Is=Date.now());function Hc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(jc(s,n.value),t,5,[s])};return n.value=e,n.attached=Wc(),n}function jc(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Fc=(e,t,n,s,r,i)=>{const l=r==="svg";t==="class"?Ec(e,s,l):t==="style"?$c(e,n,s):as(t)?sr(t)||Lc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gc(e,t,s,l))?(ci(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ai(e,t,s,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!me(s))?ci(e,He(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ai(e,t,s,l))};function Gc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&di(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return di(t)&&me(n)?!1:t in e}const pi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>Fn(t,n):t};function Uc(e){e.target.composing=!0}function hi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Os=Symbol("_assign");function gi(e,t,n){return t&&(e=e.trim()),n&&(e=or(e)),e}const wr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Os]=pi(r);const i=s||r.props&&r.props.type==="number";Kt(e,t?"change":"input",l=>{l.target.composing||e[Os](gi(e.value,n,i))}),(n||i)&&Kt(e,"change",()=>{e.value=gi(e.value,n,i)}),t||(Kt(e,"compositionstart",Uc),Kt(e,"compositionend",hi),Kt(e,"change",hi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},l){if(e[Os]=pi(l),e.composing)return;const o=(i||e.type==="number")&&!/^0\d/.test(e.value)?or(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a))}},zc=ye({patchProp:Fc},Sc);let mi;function Vc(){return mi||(mi=ic(zc))}const qc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Zc(s);if(!r)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,Kc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function Kc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zc(e){return me(e)?document.querySelector(e):e}const Jc={class:"site-header"},Qc={class:"container nav-shell"},Yc={__name:"SiteHeader",props:{theme:{type:String,default:"dark"}},emits:["toggle-theme"],setup(e){const t=we(!1);return(n,s)=>{const r=It("router-link");return O(),N("header",Jc,[f("div",Qc,[F(r,{class:"brand",to:"/"},{default:V(()=>[...s[9]||(s[9]=[f("span",{class:"brand-mark"},"T",-1),f("div",null,[f("strong",null,"TreeCore"),f("small",null,"Official Site")],-1)])]),_:1}),f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[10]||(s[10]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Be(["nav-links",{open:t.value}])},[F(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:V(()=>[...s[11]||(s[11]=[J("首页",-1)])]),_:1}),F(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:V(()=>[...s[12]||(s[12]=[J("核心能力",-1)])]),_:1}),F(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:V(()=>[...s[13]||(s[13]=[J("技术文档",-1)])]),_:1}),F(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:V(()=>[...s[14]||(s[14]=[J("下载",-1)])]),_:1}),F(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:V(()=>[...s[15]||(s[15]=[J("路线图",-1)])]),_:1}),F(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:V(()=>[...s[16]||(s[16]=[J("更新日志",-1)])]),_:1}),F(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:V(()=>[...s[17]||(s[17]=[J("团队与支持",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[8]||(s[8]=i=>n.$emit("toggle-theme"))},B(e.theme==="dark"?"浅色":"深色"),1)],2)])])}}},xr=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Xc={},eu={class:"site-footer"},tu={class:"container footer-grid"};function nu(e,t){const n=It("router-link");return O(),N("footer",eu,[f("div",tu,[t[11]||(t[11]=f("div",null,[f("div",{class:"brand footer-brand"},[f("span",{class:"brand-mark"},"T"),f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")])]),f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ")],-1)),f("div",null,[t[5]||(t[5]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[F(n,{to:"/features"},{default:V(()=>[...t[0]||(t[0]=[J("核心能力",-1)])]),_:1})]),f("li",null,[F(n,{to:"/docs"},{default:V(()=>[...t[1]||(t[1]=[J("技术文档",-1)])]),_:1})]),f("li",null,[F(n,{to:"/downloads"},{default:V(()=>[...t[2]||(t[2]=[J("下载",-1)])]),_:1})]),f("li",null,[F(n,{to:"/roadmap"},{default:V(()=>[...t[3]||(t[3]=[J("路线图",-1)])]),_:1})]),f("li",null,[F(n,{to:"/changelog"},{default:V(()=>[...t[4]||(t[4]=[J("更新日志",-1)])]),_:1})])])]),t[12]||(t[12]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[t[10]||(t[10]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[F(n,{to:"/team"},{default:V(()=>[...t[6]||(t[6]=[J("团队与支持",-1)])]),_:1})]),t[7]||(t[7]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),t[8]||(t[8]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),t[9]||(t[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),t[13]||(t[13]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}const su=xr(Xc,[["render",nu]]),ru=["data-theme"],iu={class:"site-main"},ou={__name:"App",setup(e){const t=we("dark"),n=r=>{t.value=r,document.documentElement.dataset.theme=r,localStorage.setItem("tree-site-theme",r)},s=()=>{n(t.value==="dark"?"light":"dark")};return ln(()=>{const r=localStorage.getItem("tree-site-theme");if(r==="dark"||r==="light"){n(r);return}const i=window.matchMedia("(prefers-color-scheme: dark)").matches;n(i?"dark":"light")}),en(t,r=>{document.documentElement.dataset.theme=r}),(r,i)=>{const l=It("router-view");return O(),N("div",{class:"site-shell","data-theme":t.value},[F(Yc,{theme:t.value,onToggleTheme:s},null,8,["theme"]),f("main",iu,[F(l)]),F(su)],8,ru)}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Zt=typeof document<"u";function Ko(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function lu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ko(e.default)}const Y=Object.assign;function $s(e,t){const n={};for(const s in t){const r=t[s];n[s]=ze(r)?r.map(e):e(r)}return n}const Tn=()=>{},ze=Array.isArray;function bi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Zo=/#/g,au=/&/g,cu=/\//g,uu=/=/g,fu=/\?/g,Jo=/\+/g,du=/%5B/g,pu=/%5D/g,Qo=/%5E/g,hu=/%60/g,Yo=/%7B/g,gu=/%7C/g,Xo=/%7D/g,mu=/%20/g;function Rr(e){return e==null?"":encodeURI(""+e).replace(gu,"|").replace(du,"[").replace(pu,"]")}function bu(e){return Rr(e).replace(Yo,"{").replace(Xo,"}").replace(Qo,"^")}function Zs(e){return Rr(e).replace(Jo,"%2B").replace(mu,"+").replace(Zo,"%23").replace(au,"%26").replace(hu,"`").replace(Yo,"{").replace(Xo,"}").replace(Qo,"^")}function vu(e){return Zs(e).replace(uu,"%3D")}function _u(e){return Rr(e).replace(Zo,"%23").replace(fu,"%3F")}function yu(e){return _u(e).replace(cu,"%2F")}function On(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ku=/\/$/,wu=e=>e.replace(ku,"");function Ms(e,t,n="/"){let s,r={},i="",l="";const o=t.indexOf("#");let a=t.indexOf("?");return a=o>=0&&a>o?-1:a,a>=0&&(s=t.slice(0,a),i=t.slice(a,o>0?o:t.length),r=e(i.slice(1))),o>=0&&(s=s||t.slice(0,o),l=t.slice(o,t.length)),s=Cu(s??t,n),{fullPath:s+i+l,path:s,query:r,hash:On(l)}}function xu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function vi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ru(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&rn(t.matched[s],n.matched[r])&&el(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function el(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Tu(e[n],t[n]))return!1;return!0}function Tu(e,t){return ze(e)?_i(e,t):ze(t)?_i(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function _i(e,t){return ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Cu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,l,o;for(l=0;l<s.length;l++)if(o=s[l],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(l).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Js=function(e){return e.pop="pop",e.push="push",e}({}),Ns=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Su(e){if(!e)if(Zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wu(e)}const Au=/^[^#]+#/;function Eu(e,t){return e.replace(Au,"#")+t}function Pu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const _s=()=>({left:window.scrollX,top:window.scrollY});function Iu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Pu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yi(e,t){return(history.state?history.state.position-t:-1)+e}const Qs=new Map;function Ou(e,t){Qs.set(e,t)}function $u(e){const t=Qs.get(e);return Qs.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function tl(e){return typeof e=="string"||typeof e=="symbol"}let he=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const nl=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function on(e,t){return Y(new Error,{type:e,[nl]:!0},t)}function at(e,t){return e instanceof Error&&nl in e&&(t==null||!!(e.type&t))}const Nu=["params","query","hash"];function Lu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Nu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Du(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Jo," "),i=r.indexOf("="),l=On(i<0?r:r.slice(0,i)),o=i<0?null:On(r.slice(i+1));if(l in t){let a=t[l];ze(a)||(a=t[l]=[a]),a.push(o)}else t[l]=o}return t}function ki(e){let t="";for(let n in e){const s=e[n];if(n=vu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(s)?s.map(r=>r&&Zs(r)):[s&&Zs(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Bu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ze(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Wu=Symbol(""),wi=Symbol(""),ys=Symbol(""),Tr=Symbol(""),Ys=Symbol("");function dn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,s,r,i=l=>l()){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const u=g=>{g===!1?a(on(he.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?a(g):Mu(g)?a(on(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(l&&s.enterCallbacks[r]===l&&typeof g=="function"&&l.push(g),o())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let p=Promise.resolve(c);e.length<3&&(p=p.then(u)),p.catch(g=>a(g))})}function Ls(e,t,n,s,r=i=>i()){const i=[];for(const l of e)for(const o in l.components){let a=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(Ko(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Tt(u,n,s,l,o,r))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const p=lu(c)?c.default:c;l.mods[o]=c,l.components[o]=p;const g=(p.__vccOpts||p)[t];return g&&Tt(g,n,s,l,o,r)()}))}}return i}function Hu(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const o=t.matched[l];o&&(e.matched.find(u=>rn(u,o))?s.push(o):n.push(o));const a=e.matched[l];a&&(t.matched.find(u=>rn(u,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ju=()=>location.protocol+"//"+location.host;function sl(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,o=r.slice(l);return o[0]!=="/"&&(o="/"+o),vi(o,"")}return vi(n,e)+s+r}function Fu(e,t,n,s){let r=[],i=[],l=null;const o=({state:g})=>{const b=sl(e,location),x=n.value,v=t.value;let A=0;if(g){if(n.value=b,t.value=g,l&&l===x){l=null;return}A=v?g.position-v.position:0}else s(b);r.forEach(_=>{_(n.value,x,{delta:A,type:Js.pop,direction:A?A>0?Ns.forward:Ns.back:Ns.unknown})})};function a(){l=n.value}function u(g){r.push(g);const b=()=>{const x=r.indexOf(g);x>-1&&r.splice(x,1)};return i.push(b),b}function c(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Y({},g.state,{scroll:_s()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:p}}function xi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?_s():null}}function Gu(e){const{history:t,location:n}=window,s={value:sl(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:ju()+e+a;try{t[c?"replaceState":"pushState"](u,"",g),r.value=u}catch(b){console.error(b),n[c?"replace":"assign"](g)}}function l(a,u){i(a,Y({},t.state,xi(r.value.back,a,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=a}function o(a,u){const c=Y({},r.value,t.state,{forward:a,scroll:_s()});i(c.current,c,!0),i(a,Y({},xi(s.value,a,null),{position:c.position+1},u),!1),s.value=a}return{location:s,state:r,push:o,replace:l}}function Uu(e){e=Su(e);const t=Gu(e),n=Fu(e,t.state,t.location,t.replace);function s(i,l=!0){l||n.pauseListeners(),history.go(i)}const r=Y({location:"",base:e,go:s,createHref:Eu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function zu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Uu(e)}let Dt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var be=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(be||{});const Vu={type:Dt.Static,value:""},qu=/[a-zA-Z0-9_]/;function Ku(e){if(!e)return[[]];if(e==="/")return[[Vu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${u}": ${b}`)}let n=be.Static,s=n;const r=[];let i;function l(){i&&r.push(i),i=[]}let o=0,a,u="",c="";function p(){u&&(n===be.Static?i.push({type:Dt.Static,value:u}):n===be.Param||n===be.ParamRegExp||n===be.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Dt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=a}for(;o<e.length;){if(a=e[o++],a==="\\"&&n!==be.ParamRegExp){s=n,n=be.EscapeNext;continue}switch(n){case be.Static:a==="/"?(u&&p(),l()):a===":"?(p(),n=be.Param):g();break;case be.EscapeNext:g(),n=s;break;case be.Param:a==="("?n=be.ParamRegExp:qu.test(a)?g():(p(),n=be.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case be.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=be.ParamRegExpEnd:c+=a;break;case be.ParamRegExpEnd:p(),n=be.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===be.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),l(),r}const Ri="[^/]+?",Zu={sensitive:!1,strict:!1,start:!0,end:!0};var Ce=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Ce||{});const Ju=/[.+*?^${}()[\]/\\]/g;function Qu(e,t){const n=Y({},Zu,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Ce.Root];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let b=Ce.Segment+(n.sensitive?Ce.BonusCaseSensitive:0);if(g.type===Dt.Static)p||(r+="/"),r+=g.value.replace(Ju,"\\$&"),b+=Ce.Static;else if(g.type===Dt.Param){const{value:x,repeatable:v,optional:A,regexp:_}=g;i.push({name:x,repeatable:v,optional:A});const S=_||Ri;if(S!==Ri){b+=Ce.BonusCustomRegExp;try{`${S}`}catch(P){throw new Error(`Invalid custom RegExp for param "${x}" (${S}): `+P.message)}}let C=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(C=A&&u.length<2?`(?:/${C})`:"/"+C),A&&(C+="?"),r+=C,b+=Ce.Dynamic,A&&(b+=Ce.BonusOptional),v&&(b+=Ce.BonusRepeatable),S===".*"&&(b+=Ce.BonusWildcard)}c.push(b)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ce.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,n.sensitive?"":"i");function o(u){const c=u.match(l),p={};if(!c)return null;for(let g=1;g<c.length;g++){const b=c[g]||"",x=i[g-1];p[x.name]=b&&x.repeatable?b.split("/"):b}return p}function a(u){let c="",p=!1;for(const g of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const b of g)if(b.type===Dt.Static)c+=b.value;else if(b.type===Dt.Param){const{value:x,repeatable:v,optional:A}=b,_=x in u?u[x]:"";if(ze(_)&&!v)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const S=ze(_)?_.join("/"):_;if(!S)if(A)g.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);c+=S}}return c||"/"}return{re:l,score:s,keys:i,parse:o,stringify:a}}function Yu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Ce.Static+Ce.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ce.Static+Ce.Segment?1:-1:0}function rl(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Yu(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ti(s))return 1;if(Ti(r))return-1}return r.length-s.length}function Ti(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Xu={strict:!1,end:!0,sensitive:!1};function ef(e,t,n){const s=Qu(Ku(e.path),n),r=Y(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function tf(e,t){const n=[],s=new Map;t=bi(Xu,t);function r(p){return s.get(p)}function i(p,g,b){const x=!b,v=Si(p);v.aliasOf=b&&b.record;const A=bi(t,p),_=[v];if("alias"in p){const P=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of P)_.push(Si(Y({},v,{components:b?b.record.components:v.components,path:ne,aliasOf:b?b.record:v})))}let S,C;for(const P of _){const{path:ne}=P;if(g&&ne[0]!=="/"){const ge=g.record.path,se=ge[ge.length-1]==="/"?"":"/";P.path=g.record.path+(ne&&se+ne)}if(S=ef(P,g,A),b?b.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),x&&p.name&&!Ai(S)&&l(p.name)),il(S)&&a(S),v.children){const ge=v.children;for(let se=0;se<ge.length;se++)i(ge[se],S,b&&b.children[se])}b=b||S}return C?()=>{l(C)}:Tn}function l(p){if(tl(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(l),g.alias.forEach(l))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function o(){return n}function a(p){const g=rf(p,n);n.splice(g,0,p),p.record.name&&!Ai(p)&&s.set(p.record.name,p)}function u(p,g){let b,x={},v,A;if("name"in p&&p.name){if(b=s.get(p.name),!b)throw on(he.MATCHER_NOT_FOUND,{location:p});A=b.record.name,x=Y(Ci(g.params,b.keys.filter(C=>!C.optional).concat(b.parent?b.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),p.params&&Ci(p.params,b.keys.map(C=>C.name))),v=b.stringify(x)}else if(p.path!=null)v=p.path,b=n.find(C=>C.re.test(v)),b&&(x=b.parse(v),A=b.record.name);else{if(b=g.name?s.get(g.name):n.find(C=>C.re.test(g.path)),!b)throw on(he.MATCHER_NOT_FOUND,{location:p,currentLocation:g});A=b.record.name,x=Y({},g.params,p.params),v=b.stringify(x)}const _=[];let S=b;for(;S;)_.unshift(S.record),S=S.parent;return{name:A,path:v,params:x,matched:_,meta:sf(_)}}e.forEach(p=>i(p));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:l,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function Ci(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Si(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:nf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function nf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ai(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sf(e){return e.reduce((t,n)=>Y(t,n.meta),{})}function rf(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;rl(e,t[i])<0?s=i:n=i+1}const r=of(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function of(e){let t=e;for(;t=t.parent;)if(il(t)&&rl(e,t)===0)return t}function il({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ei(e){const t=Ge(ys),n=Ge(Tr),s=pe(()=>{const a=le(e.to);return t.resolve(a)}),r=pe(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],p=n.matched;if(!c||!p.length)return-1;const g=p.findIndex(rn.bind(null,c));if(g>-1)return g;const b=Pi(a[u-2]);return u>1&&Pi(c)===b&&p[p.length-1].path!==b?p.findIndex(rn.bind(null,a[u-2])):g}),i=pe(()=>r.value>-1&&ff(n.params,s.value.params)),l=pe(()=>r.value>-1&&r.value===n.matched.length-1&&el(n.params,s.value.params));function o(a={}){if(uf(a)){const u=t[le(e.replace)?"replace":"push"](le(e.to)).catch(Tn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:pe(()=>s.value.href),isActive:i,isExactActive:l,navigate:o}}function lf(e){return e.length===1?e[0]:e}const af=_o({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ei,setup(e,{slots:t}){const n=ps(Ei(e)),{options:s}=Ge(ys),r=pe(()=>({[Ii(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ii(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&lf(t.default(n));return e.custom?i:Vo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),cf=af;function uf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ff(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ze(r)||r.length!==s.length||s.some((i,l)=>i.valueOf()!==r[l].valueOf()))return!1}return!0}function Pi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ii=(e,t,n)=>e??t??n,df=_o({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ge(Ys),r=pe(()=>e.route||s.value),i=Ge(wi,0),l=pe(()=>{let u=le(i);const{matched:c}=r.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),o=pe(()=>r.value.matched[l.value]);Gn(wi,pe(()=>l.value+1)),Gn(Wu,o),Gn(Ys,r);const a=we();return en(()=>[a.value,o.value,e.name],([u,c,p],[g,b,x])=>{c&&(c.instances[p]=u,b&&b!==c&&u&&u===g&&(c.leaveGuards.size||(c.leaveGuards=b.leaveGuards),c.updateGuards.size||(c.updateGuards=b.updateGuards))),u&&c&&(!b||!rn(c,b)||!g)&&(c.enterCallbacks[p]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,p=o.value,g=p&&p.components[c];if(!g)return Oi(n.default,{Component:g,route:u});const b=p.props[c],x=b?b===!0?u.params:typeof b=="function"?b(u):b:null,A=Vo(g,Y({},x,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(p.instances[c]=null)},ref:a}));return Oi(n.default,{Component:A,route:u})||A}}});function Oi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const pf=df;function hf(e){const t=tf(e.routes,e),n=e.parseQuery||Du,s=e.stringifyQuery||ki,r=e.history,i=dn(),l=dn(),o=dn(),a=ca(wt);let u=wt;Zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=$s.bind(null,w=>""+w),p=$s.bind(null,yu),g=$s.bind(null,On);function b(w,D){let M,W;return tl(w)?(M=t.getRecordMatcher(w),W=D):W=w,t.addRoute(W,M)}function x(w){const D=t.getRecordMatcher(w);D&&t.removeRoute(D)}function v(){return t.getRoutes().map(w=>w.record)}function A(w){return!!t.getRecordMatcher(w)}function _(w,D){if(D=Y({},D||a.value),typeof w=="string"){const m=Ms(n,w,D.path),y=t.resolve({path:m.path},D),R=r.createHref(m.fullPath);return Y(m,y,{params:g(y.params),hash:On(m.hash),redirectedFrom:void 0,href:R})}let M;if(w.path!=null)M=Y({},w,{path:Ms(n,w.path,D.path).path});else{const m=Y({},w.params);for(const y in m)m[y]==null&&delete m[y];M=Y({},w,{params:p(m)}),D.params=p(D.params)}const W=t.resolve(M,D),q=w.hash||"";W.params=c(g(W.params));const d=xu(s,Y({},w,{hash:bu(q),path:W.path})),h=r.createHref(d);return Y({fullPath:d,hash:q,query:s===ki?Bu(w.query):w.query||{}},W,{redirectedFrom:void 0,href:h})}function S(w){return typeof w=="string"?Ms(n,w,a.value.path):Y({},w)}function C(w,D){if(u!==w)return on(he.NAVIGATION_CANCELLED,{from:D,to:w})}function P(w){return se(w)}function ne(w){return P(Y(S(w),{replace:!0}))}function ge(w,D){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:W}=M;let q=typeof W=="function"?W(w,D):W;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=S(q):{path:q},q.params={}),Y({query:w.query,hash:w.hash,params:q.path!=null?{}:w.params},q)}}function se(w,D){const M=u=_(w),W=a.value,q=w.state,d=w.force,h=w.replace===!0,m=ge(M,W);if(m)return se(Y(S(m),{state:typeof m=="object"?Y({},q,m.state):q,force:d,replace:h}),D||M);const y=M;y.redirectedFrom=D;let R;return!d&&Ru(s,W,M)&&(R=on(he.NAVIGATION_DUPLICATED,{to:y,from:W}),Ze(W,W,!0,!1)),(R?Promise.resolve(R):qe(y,W)).catch(k=>at(k)?at(k,he.NAVIGATION_GUARD_REDIRECT)?k:kt(k):Q(k,y,W)).then(k=>{if(k){if(at(k,he.NAVIGATION_GUARD_REDIRECT))return se(Y({replace:h},S(k.to),{state:typeof k.to=="object"?Y({},q,k.to.state):q,force:d}),D||y)}else k=Ot(y,W,!0,h,q);return yt(y,W,k),k})}function Ve(w,D){const M=C(w,D);return M?Promise.reject(M):Promise.resolve()}function _t(w){const D=zt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(w):w()}function qe(w,D){let M;const[W,q,d]=Hu(w,D);M=Ls(W.reverse(),"beforeRouteLeave",w,D);for(const m of W)m.leaveGuards.forEach(y=>{M.push(Tt(y,w,D))});const h=Ve.bind(null,w,D);return M.push(h),De(M).then(()=>{M=[];for(const m of i.list())M.push(Tt(m,w,D));return M.push(h),De(M)}).then(()=>{M=Ls(q,"beforeRouteUpdate",w,D);for(const m of q)m.updateGuards.forEach(y=>{M.push(Tt(y,w,D))});return M.push(h),De(M)}).then(()=>{M=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const y of m.beforeEnter)M.push(Tt(y,w,D));else M.push(Tt(m.beforeEnter,w,D));return M.push(h),De(M)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),M=Ls(d,"beforeRouteEnter",w,D,_t),M.push(h),De(M))).then(()=>{M=[];for(const m of l.list())M.push(Tt(m,w,D));return M.push(h),De(M)}).catch(m=>at(m,he.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function yt(w,D,M){o.list().forEach(W=>_t(()=>W(w,D,M)))}function Ot(w,D,M,W,q){const d=C(w,D);if(d)return d;const h=D===wt,m=Zt?history.state:{};M&&(W||h?r.replace(w.fullPath,Y({scroll:h&&m&&m.scroll},q)):r.push(w.fullPath,q)),a.value=w,Ze(w,D,M,h),kt()}let Ke;function an(){Ke||(Ke=r.listen((w,D,M)=>{if(!$t.listening)return;const W=_(w),q=ge(W,$t.currentRoute.value);if(q){se(Y(q,{replace:!0,force:!0}),W).catch(Tn);return}u=W;const d=a.value;Zt&&Ou(yi(d.fullPath,M.delta),_s()),qe(W,d).catch(h=>at(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:at(h,he.NAVIGATION_GUARD_REDIRECT)?(se(Y(S(h.to),{force:!0}),W).then(m=>{at(m,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!M.delta&&M.type===Js.pop&&r.go(-1,!1)}).catch(Tn),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Q(h,W,d))).then(h=>{h=h||Ot(W,d,!1),h&&(M.delta&&!at(h,he.NAVIGATION_CANCELLED)?r.go(-M.delta,!1):M.type===Js.pop&&at(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),yt(W,d,h)}).catch(Tn)}))}let Gt=dn(),ve=dn(),oe;function Q(w,D,M){kt(w);const W=ve.list();return W.length?W.forEach(q=>q(w,D,M)):console.error(w),Promise.reject(w)}function ot(){return oe&&a.value!==wt?Promise.resolve():new Promise((w,D)=>{Gt.add([w,D])})}function kt(w){return oe||(oe=!w,an(),Gt.list().forEach(([D,M])=>w?M(w):D()),Gt.reset()),w}function Ze(w,D,M,W){const{scrollBehavior:q}=e;if(!Zt||!q)return Promise.resolve();const d=!M&&$u(yi(w.fullPath,0))||(W||!M)&&history.state&&history.state.scroll||null;return Qn().then(()=>q(w,D,d)).then(h=>h&&Iu(h)).catch(h=>Q(h,w,D))}const Ee=w=>r.go(w);let Ut;const zt=new Set,$t={currentRoute:a,listening:!0,addRoute:b,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:v,resolve:_,options:e,push:P,replace:ne,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:i.add,beforeResolve:l.add,afterEach:o.add,onError:ve.add,isReady:ot,install(w){w.component("RouterLink",cf),w.component("RouterView",pf),w.config.globalProperties.$router=$t,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>le(a)}),Zt&&!Ut&&a.value===wt&&(Ut=!0,P(r.location).catch(W=>{}));const D={};for(const W in wt)Object.defineProperty(D,W,{get:()=>a.value[W],enumerable:!0});w.provide(ys,$t),w.provide(Tr,ao(D)),w.provide(Ys,a);const M=w.unmount;zt.add(w),w.unmount=function(){zt.delete(w),zt.size<1&&(u=wt,Ke&&Ke(),Ke=null,a.value=wt,Ut=!1,oe=!1),M()}}};function De(w){return w.reduce((D,M)=>D.then(()=>_t(M)),Promise.resolve())}return $t}function gf(){return Ge(ys)}function mf(e){return Ge(Tr)}const bf="/images/console-preview.png",vf="/images/console-live.gif",_f="/images/stress-test.gif",yf={},kf={class:"hero-section"},wf={class:"container hero-grid"},xf={class:"hero-actions"},Rf={class:"section-block"},Tf={class:"container"},Cf={class:"feature-grid three"},Sf={class:"feature-card compact"},Af={class:"feature-card compact"},Ef={class:"feature-card compact"},Pf={class:"section-block"},If={class:"container"},Of={class:"feature-grid three"},$f={class:"feature-card compact"},Mf={class:"feature-card compact"},Nf={class:"feature-card compact"},Lf={class:"section-block final-cta"},Df={class:"container cta-shell"},Bf={class:"hero-actions"};function Wf(e,t){const n=It("router-link");return O(),N("div",null,[f("section",kf,[f("div",wf,[f("div",null,[t[3]||(t[3]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1)),t[4]||(t[4]=f("h1",{class:"hero-title"},"让性能优化、运维与内容链路真正连成一体。",-1)),t[5]||(t[5]=f("p",{class:"hero-description"}," TreeCore 面向高并发、长时间运行与可视化运维场景，提供运行时性能调优、 Web 管理面板、资源包与模型链路、假人与红石热点分析，以及更贴近实战的服务器工具集。 ",-1)),f("div",xf,[F(n,{class:"button primary",to:"/features"},{default:V(()=>[...t[0]||(t[0]=[J("查看能力",-1)])]),_:1}),F(n,{class:"button secondary",to:"/docs"},{default:V(()=>[...t[1]||(t[1]=[J("阅读文档",-1)])]),_:1}),t[2]||(t[2]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1))]),t[6]||(t[6]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),t[7]||(t[7]=f("div",{class:"hero-card image-card"},[f("img",{src:bf,alt:"TreeCore 控制台预览"}),f("div",{class:"overlay-panel"},[f("strong",null,"Web 管理面板"),f("p",null,"控制台、诊断、资源包、模型、备份、集成运维统一入口。")])],-1))])]),t[37]||(t[37]=Pt('<section class="section-block"><div class="container stats-grid"><article class="stat-card"><strong>11</strong><span>当前 Web 页签</span></article><article class="stat-card"><strong>4 档</strong><span>自动分层预设</span></article><article class="stat-card"><strong>ZIP</strong><span>本地资源包拖拽上传</span></article><article class="stat-card"><strong>Docs</strong><span>GitBook 风格技术 Wiki</span></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">WHY TREECORE</span><h2>不是只会改配置，而是把服务器维护做成完整产品。</h2><p> TreeCore 不只在运行时调优参数，还把控制台、诊断、资源包、模型、备份、假人、世界管理与文档体系串成统一入口。 </p></div><div class="feature-grid three"><article class="feature-card"><h3>性能在运行时收敛</h3><p>动态视距、动态模拟距离、Paper 配置热调、网络链路优化与自动分层共同工作，优先稳住 TPS 与 MSPT。</p></article><article class="feature-card"><h3>Web 运维真正可用</h3><p>远程控制台、内存快照、线程转储、备份管理、世界操作、ItemsAdder 编辑器与集成状态都能可视化完成。</p></article><article class="feature-card"><h3>内容链路不再割裂</h3><p>模型、纹理、资源包 ZIP、本地托管与在线玩家资源包下发形成闭环，适合内容服与综合服协同维护。</p></article></div></div></section><section class="section-block"><div class="container media-grid"><article class="media-card"><div class="media-copy"><span class="eyebrow">REAL SCENARIO</span><h3>高峰监控与问题排查放在同一块面板里。</h3><p> 先看仪表盘，再看控制台，再做线程转储与备份处理。TreeCore 的目标不是把工具堆进去，而是让它们在实际运维时能够连起来用。 </p></div><img src="'+vf+'" alt="TreeCore 控制台动图"></article><article class="media-card reverse"><div class="media-copy"><span class="eyebrow">STRESS TEST</span><h3>面向综合服、长周目服与高峰玩家场景。</h3><p> 对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。 </p></div><img src="'+_f+'" alt="TreeCore 压测演示"></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">SCENARIOS</span><h2>适合哪些服务器？</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>生存 / 长周目服</h3><p>希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。</p></article><article class="feature-card compact"><h3>多世界 / 综合服</h3><p>需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。</p></article><article class="feature-card compact"><h3>运维要求高的团队服</h3><p>希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。</p></article></div></div></section>',4)),f("section",Rf,[f("div",Tf,[t[20]||(t[20]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"DOCS INSIDE SITE"),f("h2",null,"文档已经和官网放在同一个站里。"),f("p",null,"现在你可以直接在站内阅读快速开始、配置参考、资源包链路、系统架构与 Web 资源同步机制，不再跳出到 GitHub Markdown 页面。")],-1)),f("div",Cf,[f("article",Sf,[t[9]||(t[9]=f("span",{class:"card-label"},"GET STARTED",-1)),t[10]||(t[10]=f("h3",null,"快速开始",-1)),t[11]||(t[11]=f("p",null,"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",-1)),F(n,{class:"text-link",to:"/docs/quick-start"},{default:V(()=>[...t[8]||(t[8]=[J("立即阅读 →",-1)])]),_:1})]),f("article",Af,[t[13]||(t[13]=f("span",{class:"card-label"},"OPERATIONS",-1)),t[14]||(t[14]=f("h3",null,"资源包 / 模型链路",-1)),t[15]||(t[15]=f("p",null,"把模型、纹理、ZIP 资源包、本地托管与在线玩家下发串起来理解。",-1)),F(n,{class:"text-link",to:"/docs/resource-pack"},{default:V(()=>[...t[12]||(t[12]=[J("查看文档 →",-1)])]),_:1})]),f("article",Ef,[t[17]||(t[17]=f("span",{class:"card-label"},"ARCHITECTURE",-1)),t[18]||(t[18]=f("h3",null,"系统架构总览",-1)),t[19]||(t[19]=f("p",null,"面向技术维护者，快速理解当前 TreeCore 的主要模块与运行关系。",-1)),F(n,{class:"text-link",to:"/docs/system-overview"},{default:V(()=>[...t[16]||(t[16]=[J("进入架构页 →",-1)])]),_:1})])])])]),f("section",Pf,[f("div",If,[t[33]||(t[33]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"PROJECT PAGES"),f("h2",null,"官网里不只是首页和下载页。"),f("p",null,"现在站内已经补上路线图、更新日志和团队与支持页面，让用户能更清楚地看到项目状态、版本节奏和支持入口。")],-1)),f("div",Of,[f("article",$f,[t[22]||(t[22]=f("span",{class:"card-label"},"ROADMAP",-1)),t[23]||(t[23]=f("h3",null,"路线图",-1)),t[24]||(t[24]=f("p",null,"把当前阶段、下一阶段和后续方向清晰列出来，让官网更像正式项目站点。",-1)),F(n,{class:"text-link",to:"/roadmap"},{default:V(()=>[...t[21]||(t[21]=[J("查看路线图 →",-1)])]),_:1})]),f("article",Mf,[t[26]||(t[26]=f("span",{class:"card-label"},"CHANGELOG",-1)),t[27]||(t[27]=f("h3",null,"更新日志",-1)),t[28]||(t[28]=f("p",null,"统一承接公开版本变化、发布时间和更新摘要，后续发布版本时能直接形成时间线。",-1)),F(n,{class:"text-link",to:"/changelog"},{default:V(()=>[...t[25]||(t[25]=[J("查看更新日志 →",-1)])]),_:1})]),f("article",Nf,[t[30]||(t[30]=f("span",{class:"card-label"},"SUPPORT",-1)),t[31]||(t[31]=f("h3",null,"团队与支持",-1)),t[32]||(t[32]=f("p",null,"把社区入口、FAQ、贡献者和反馈方式集中到一个更完整的支持页里。",-1)),F(n,{class:"text-link",to:"/team"},{default:V(()=>[...t[29]||(t[29]=[J("进入支持页 →",-1)])]),_:1})])])])]),t[38]||(t[38]=Pt('<section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">FAQ</span><h2>你可能最先会关心的几个问题</h2></div><div class="feature-grid two"><article class="feature-card compact"><h3>TreeCore 更适合哪类服务器？</h3><p>更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。</p></article><article class="feature-card compact"><h3>默认会不会大幅改动原版行为？</h3><p>整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏“默认原版、按需保护”。</p></article><article class="feature-card compact"><h3>Web 管理面板现在能做什么？</h3><p>当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。</p></article><article class="feature-card compact"><h3>第一次上服最推荐先做什么？</h3><p>建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。</p></article></div></div></section>',1)),f("section",Lf,[f("div",Df,[t[36]||(t[36]=f("div",null,[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看官网，再进站内文档，最后按你的节奏发布版本。"),f("p",null,"当前站点已经按“官网 + 站内 Wiki + Releases”结构组织，后续可以继续扩展为更完整的产品官网体系。")],-1)),f("div",Bf,[F(n,{class:"button primary",to:"/docs"},{default:V(()=>[...t[34]||(t[34]=[J("进入技术文档",-1)])]),_:1}),F(n,{class:"button secondary",to:"/downloads"},{default:V(()=>[...t[35]||(t[35]=[J("查看下载入口",-1)])]),_:1})])])])])}const Hf=xr(yf,[["render",Wf]]),jf={},Ff={class:"page-shell container"};function Gf(e,t){return O(),N("div",Ff,[...t[0]||(t[0]=[Pt('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>围绕服务器全链路组织的核心能力</h1><p> 从运行时性能调优，到 Web 运维面板，再到资源包、模型、世界与备份管理，TreeCore 当前公开功能已经能覆盖一套完整的服务器维护流程。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const Uf=xr(jf,[["render",Gf]]),ol="https://api.github.com/repos/TreeMC-cloud/Tree",zf=`${ol}/releases?per_page=30`,Vf=`${ol}/contributors?per_page=24`,ll="tree-site-cache:",qf=30*60*1e3,al=e=>{try{const t=localStorage.getItem(`${ll}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>qf?null:n.data}catch{return null}},cl=(e,t)=>{try{localStorage.setItem(`${ll}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},ul=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},Kf=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},fl=async()=>{try{const e=await ul(zf),t=Array.isArray(e)?e:[];return cl("releases",t),{data:t,source:"github"}}catch{const e=al("releases");if(e)return{data:e,source:"cache"};const t=await Kf();return{data:t,source:t.length?"fallback":"empty"}}},Zf=async()=>{try{const e=await ul(Vf),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return cl("contributors",t),{data:t,source:"github"}}catch{const e=al("contributors");return{data:e||[],source:e?"cache":"empty"}}},qn=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",St=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",dl=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},$n=e=>String(e||"").replace(/\r/g,"").trim(),Ct=(e,t=4)=>{const n=$n(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},pn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},$i=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},pl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),Jf={class:"page-shell container"},Qf={class:"page-hero"},Yf={class:"hero-actions"},Xf={class:"stack-section"},ed={class:"section-head left"},td={class:"release-hero-grid"},nd={key:0,class:"release-hero-card surface-card"},sd={class:"release-head"},rd={class:"release-date"},id={class:"release-tag"},od={key:0,class:"bullet-list compact-list"},ld={key:1,class:"release-body"},ad={class:"release-actions"},cd=["href"],ud=["href"],fd={key:1,class:"release-hero-card surface-card"},dd={class:"release-head"},pd={class:"release-date"},hd={class:"release-tag"},gd={key:0,class:"bullet-list compact-list"},md={key:1,class:"release-body"},bd={class:"release-actions"},vd=["href"],_d=["href"],yd={key:2,class:"empty-state surface-card"},kd={class:"stack-section surface-card changelog-toolbar"},wd={class:"release-filter-row"},xd={class:"filter-chip-group"},Rd=["onClick"],Td={key:0,class:"stack-section"},Cd={key:1,class:"stack-section release-list-grid"},Sd={class:"release-head"},Ad={class:"release-date"},Ed={class:"release-tag"},Pd={key:0,class:"bullet-list compact-list"},Id={key:1,class:"release-body"},Od={key:2,class:"asset-group-list"},$d={key:3,class:"release-asset-list"},Md=["href"],Nd={class:"release-actions"},Ld=["href"],Dd={key:2,class:"stack-section"},Bd={__name:"DownloadsPage",setup(e){const t=we(!0),n=we([]),s=we("github"),r=we("all"),i=we(""),l=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=pe(()=>pl(n.value)),a=pe(()=>o.value.find(A=>St(A)==="stable")||null),u=pe(()=>o.value.find(A=>St(A)==="preview")||null),c=pe(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),p=A=>{const _=$n(A).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return _?_.length>140?`${_.slice(0,140)}…`:_:"暂无发布说明。"},g=A=>{const _=b(A);return _.find(S=>pn(S)==="server")||_[0]||null},b=A=>{const _=Array.isArray(A==null?void 0:A.assets)?[...A.assets]:[],S=["server","archive","source","checksum","metadata","other"];return _.sort((C,P)=>S.indexOf(pn(C))-S.indexOf(pn(P))).slice(0,5)},x=A=>{const _=new Map;for(const S of(A==null?void 0:A.assets)||[]){const C=pn(S),P=_.get(C)||[];P.push(S),_.set(C,P)}return["server","archive","source","checksum","metadata","other"].filter(S=>_.has(S)).map(S=>({type:S,label:$i(S),items:_.get(S)}))},v=pe(()=>{const A=i.value.toLowerCase();return o.value.filter(_=>{const S=St(_);return r.value!=="all"&&S!==r.value?!1:A?[_.name,_.tag_name,$n(_.body)].filter(Boolean).join(" ").toLowerCase().includes(A):!0})});return ln(async()=>{const A=await fl();n.value=A.data,s.value=A.source,t.value=!1}),(A,_)=>{const S=It("router-link");return O(),N("div",Jf,[f("section",Qf,[_[4]||(_[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),_[5]||(_[5]=f("h1",null,"下载与版本入口",-1)),_[6]||(_[6]=f("p",null," 下载页会优先读取公开仓库 Releases，并把最新正式版、预发布版、附件分类和更新摘要整理成更像正式产品站的版本入口。 ",-1)),f("div",Yf,[_[3]||(_[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),F(S,{class:"button secondary",to:"/docs/quick-start"},{default:V(()=>[..._[1]||(_[1]=[J("安装文档",-1)])]),_:1}),F(S,{class:"button ghost",to:"/changelog"},{default:V(()=>[..._[2]||(_[2]=[J("查看更新日志",-1)])]),_:1})])]),f("section",Xf,[f("div",ed,[_[7]||(_[7]=f("h2",null,"最新版本",-1)),f("p",null,B(c.value),1)]),f("div",td,[a.value?(O(),N("article",nd,[f("div",sd,[_[8]||(_[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",rd,B(le(qn)(a.value.published_at)),1)]),f("h3",null,B(a.value.name||a.value.tag_name),1),f("p",id,B(a.value.tag_name),1),le(Ct)(a.value.body,4).length?(O(),N("ul",od,[(O(!0),N(ue,null,_e(le(Ct)(a.value.body,4),C=>(O(),N("li",{key:C},B(C),1))),128))])):(O(),N("p",ld,B(p(a.value.body)),1)),f("div",ad,[f("a",{class:"button primary small",href:a.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,cd),g(a.value)?(O(),N("a",{key:0,class:"button secondary small",href:g(a.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+B(g(a.value).name),9,ud)):je("",!0)])])):je("",!0),u.value?(O(),N("article",fd,[f("div",dd,[_[9]||(_[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",pd,B(le(qn)(u.value.published_at)),1)]),f("h3",null,B(u.value.name||u.value.tag_name),1),f("p",hd,B(u.value.tag_name),1),le(Ct)(u.value.body,4).length?(O(),N("ul",gd,[(O(!0),N(ue,null,_e(le(Ct)(u.value.body,4),C=>(O(),N("li",{key:C},B(C),1))),128))])):(O(),N("p",md,B(p(u.value.body)),1)),f("div",bd,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,vd),g(u.value)?(O(),N("a",{key:0,class:"button secondary small",href:g(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+B(g(u.value).name),9,_d)):je("",!0)])])):je("",!0),!a.value&&!u.value?(O(),N("article",yd,[..._[10]||(_[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):je("",!0)])]),f("section",kd,[_[11]||(_[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",wd,[f("div",xd,[(O(),N(ue,null,_e(l,C=>f("button",{key:C.value,class:Be(["filter-chip",{active:r.value===C.value}]),onClick:P=>r.value=C.value},B(C.label),11,Rd)),64))]),br(f("input",{"onUpdate:modelValue":_[0]||(_[0]=C=>i.value=C),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[wr,i.value,void 0,{trim:!0}]])])]),t.value?(O(),N("section",Td,[..._[12]||(_[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):v.value.length?(O(),N("section",Cd,[(O(!0),N(ue,null,_e(v.value,C=>(O(),N("article",{key:C.id||C.tag_name,class:"release-card enhanced-release-card"},[f("div",Sd,[f("span",{class:Be(["release-badge",{alt:le(St)(C)==="preview"}])},B(le(dl)(le(St)(C))),3),f("span",Ad,B(le(qn)(C.published_at)),1)]),f("h3",null,B(C.name||C.tag_name),1),f("p",Ed,B(C.tag_name),1),le(Ct)(C.body,4).length?(O(),N("ul",Pd,[(O(!0),N(ue,null,_e(le(Ct)(C.body,4),P=>(O(),N("li",{key:P},B(P),1))),128))])):(O(),N("p",Id,B(p(C.body)),1)),x(C).length?(O(),N("div",Od,[(O(!0),N(ue,null,_e(x(C),P=>(O(),N("div",{key:P.type,class:"asset-group-chip"},[f("strong",null,B(P.label),1),f("span",null,B(P.items.length)+" 个文件",1)]))),128))])):je("",!0),C.assets&&C.assets.length?(O(),N("div",$d,[(O(!0),N(ue,null,_e(b(C),P=>(O(),N("a",{key:P.id||P.name,class:"release-asset-link",href:P.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,B(P.name),1),f("small",null,B(le($i)(le(pn)(P))),1)],8,Md))),128))])):je("",!0),f("div",Nd,[f("a",{class:"button primary small",href:C.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Ld),F(S,{class:"button secondary small",to:"/changelog"},{default:V(()=>[..._[13]||(_[13]=[J("看时间线",-1)])]),_:1})])]))),128))])):(O(),N("section",Dd,[..._[14]||(_[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),_[15]||(_[15]=Pt('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},rs=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],Jt=rs.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),hl=Object.fromEntries(Jt.map(e=>[e.slug,e])),Wd={class:"page-shell container"},Hd={class:"page-hero docs-hero-grid"},jd={class:"hero-actions"},Fd={class:"stack-section surface-card docs-filter-card"},Gd={class:"docs-filter-bar"},Ud={class:"section-head left"},zd={class:"feature-grid three"},Vd={class:"card-label"},qd={class:"doc-card-meta"},Kd={key:0,class:"stack-section"},Zd={__name:"DocsPage",setup(e){const t=we(""),n=pe(()=>{const s=t.value.toLowerCase();return s?rs.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):rs});return(s,r)=>{const i=It("router-link");return O(),N("div",Wd,[f("section",Hd,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档已经整合进官网内。",-1)),r[5]||(r[5]=f("p",null," 现在不再跳去 GitHub Markdown 页面，而是直接在官网站点里阅读部署、运维、配置、架构与 Web 资源同步文档。 ",-1)),f("div",jd,[F(i,{class:"button primary",to:"/docs/quick-start"},{default:V(()=>[...r[1]||(r[1]=[J("从快速开始开始",-1)])]),_:1}),F(i,{class:"button secondary",to:"/docs/configuration"},{default:V(()=>[...r[2]||(r[2]=[J("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Fd,[f("div",Gd,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),br(f("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>t.value=l),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[wr,t.value,void 0,{trim:!0}]])])]),(O(!0),N(ue,null,_e(n.value,l=>(O(),N("section",{class:"stack-section",key:l.key},[f("div",Ud,[f("h2",null,B(l.title),1),f("p",null,B(l.description),1)]),f("div",zd,[(O(!0),N(ue,null,_e(l.items,o=>(O(),N("article",{class:"feature-card compact",key:o.slug},[f("span",Vd,B(o.tag),1),f("h3",null,B(o.title),1),f("p",null,B(o.description),1),f("div",qd,[f("span",null,B(l.title),1),f("span",null,B(o.minutes),1)]),F(i,{class:"text-link",to:`/docs/${o.slug}`},{default:V(()=>[...r[8]||(r[8]=[J("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?je("",!0):(O(),N("section",Kd,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=Pt('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Jd=`# Tree 技术文档 / Wiki

这套文档用于整理 TreeCore 当前对外可用的技术信息，结构按 **GitBook / Wiki** 风格组织。

如果你要把这份文档导入 GitBook，可直接使用：

- \`README.md\`
- \`SUMMARY.md\`

作为文档首页与目录。

---

## 文档入口索引

| 你现在要做什么？ | 直接去这里 |
|---|---|
| **先把服务端跑起来** | [快速开始](./getting-started/quick-start.md) |
| **打开 / 配置 Web 面板** | [Web 面板访问](./getting-started/web-panel.md) |
| **快速了解全部 Web 页签** | [Web 页面总览](./operations/web-pages-overview.md) |
| **看命令和日常运维动作** | [命令与日常运维](./operations/commands.md) |
| **搞资源包、模型、纹理和推送** | [资源包 / 模型链路](./operations/resource-pack.md) |
| **管假人、红石热点和生电相关** | [假人 / 红石运维](./operations/fakeplayer-and-redstone.md) |
| **看配置项该怎么改** | [配置参考](./reference/configuration.md) |
| **理解系统模块关系** | [系统架构总览](./architecture/system-overview.md) |
| **理解 Web 为什么会自动更新** | [Web 资源同步机制](./development/web-ui-pipeline.md) |

---

## 按角色阅读

### 我是服主 / 运维
推荐顺序：

1. [快速开始](./getting-started/quick-start.md)
2. [Web 面板访问](./getting-started/web-panel.md)
3. [命令与日常运维](./operations/commands.md)
4. [诊断与备份](./operations/diagnostics-and-backups.md)
5. [配置参考](./reference/configuration.md)

### 我是内容服维护者
推荐顺序：

1. [Web 页面总览](./operations/web-pages-overview.md)
2. [资源包 / 模型链路](./operations/resource-pack.md)
3. [集成与世界管理](./operations/integrations-and-worlds.md)
4. [假人 / 红石运维](./operations/fakeplayer-and-redstone.md)

### 我是技术向维护者
推荐顺序：

1. [系统架构总览](./architecture/system-overview.md)
2. [模块地图](./architecture/module-map.md)
3. [配置参考](./reference/configuration.md)
4. [Web 资源同步机制](./development/web-ui-pipeline.md)

---

## 文档地图

### 入门
- [快速开始](./getting-started/quick-start.md)
- [Web 面板访问](./getting-started/web-panel.md)
- [首次上线检查清单](./getting-started/first-day-checklist.md)

### 运维
- [Web 页面总览](./operations/web-pages-overview.md)
- [命令与日常运维](./operations/commands.md)
- [资源包 / 模型链路](./operations/resource-pack.md)
- [集成与世界管理](./operations/integrations-and-worlds.md)
- [假人 / 红石运维](./operations/fakeplayer-and-redstone.md)
- [诊断与备份](./operations/diagnostics-and-backups.md)

### 参考
- [配置参考](./reference/configuration.md)
- [命令速查表](./reference/command-cheatsheet.md)

### 技术视角
- [系统架构总览](./architecture/system-overview.md)
- [模块地图](./architecture/module-map.md)
- [Web 资源同步机制](./development/web-ui-pipeline.md)

---

## 当前文档范围

这份 Wiki 只记录 **当前代码里已经存在并可核对的功能**。

也就是说：

- 已经移除的内容不会再写回文档
- 只存在后端、但前端未暴露的能力不会被当成“主功能”宣传
- 所有页面尽量和当前 \`TreeCoreCommand\`、\`TreeCoreConfig\`、\`TreeCoreWebServer\`、\`treecore-web/\` 对齐

---

## GitBook 使用说明

如果后续你要把这套文档直接接入 GitBook：

- 首页使用 \`docs/README.md\`
- 目录使用 \`docs/SUMMARY.md\`
- 当前链接都已按相对路径组织，适合直接导入
`,Qd=`# Summary

- [Tree 技术文档 / Wiki](README.md)
- 入门
  - [快速开始](getting-started/quick-start.md)
  - [Web 面板访问](getting-started/web-panel.md)
  - [首次上线检查清单](getting-started/first-day-checklist.md)
- 运维
  - [Web 页面总览](operations/web-pages-overview.md)
  - [命令与日常运维](operations/commands.md)
  - [资源包 / 模型链路](operations/resource-pack.md)
  - [集成与世界管理](operations/integrations-and-worlds.md)
  - [假人 / 红石运维](operations/fakeplayer-and-redstone.md)
  - [诊断与备份](operations/diagnostics-and-backups.md)
- 参考
  - [配置参考](reference/configuration.md)
  - [命令速查表](reference/command-cheatsheet.md)
- 技术视角
  - [系统架构总览](architecture/system-overview.md)
  - [模块地图](architecture/module-map.md)
  - [Web 资源同步机制](development/web-ui-pipeline.md)
`,Yd=`# 模块地图

这页按代码目录视角，快速梳理 TreeCore 当前有哪些主要模块。

---

## 主要包结构

### 核心入口
- \`io.papermc.paper.treecore.TreeCore\`
- \`io.papermc.paper.treecore.TreeCoreConfig\`

### 命令
- \`io.papermc.paper.treecore.command.TreeCoreCommand\`
- \`io.papermc.paper.treecore.command.PerfTestCommand\`

### 性能优化
- \`io.papermc.paper.treecore.performance.TreeCoreOptimizer\`
- \`io.papermc.paper.treecore.performance.PaperConfigTuner\`
- \`io.papermc.paper.treecore.performance.ChunkPreloadEngine\`
- \`io.papermc.paper.treecore.performance.TeleportChunkPreloader\`
- \`io.papermc.paper.treecore.performance.PluginAuditor\`
- \`io.papermc.paper.treecore.performance.JvmFlagsGenerator\`

### Web 与通信
- \`io.papermc.paper.treecore.web.TreeCoreWebServer\`
- \`io.papermc.paper.treecore.web.ModWebSocketHub\`

### 模型与资源包
- \`io.papermc.paper.treecore.model.ModelManager\`
- \`io.papermc.paper.treecore.model.ModelLibraryService\`
- \`io.papermc.paper.treecore.model.CraftEngineBridge\`
- \`io.papermc.paper.treecore.pack.ResourcePackGenerator\`

### 集成桥接
- \`io.papermc.paper.treecore.integration.MultiverseBridge\`
- \`io.papermc.paper.treecore.integration.ItemsAdderBridge\`
- \`io.papermc.paper.treecore.integration.ItemsAdderMenuConfig\`

### 游戏辅助
- \`io.papermc.paper.treecore.redstone.FakePlayerService\`
- \`io.papermc.paper.treecore.effect.EffectManager\`
- \`io.papermc.paper.treecore.ui.TpsBarManager\`
- \`io.papermc.paper.treecore.ui.HealthBarImpl\`
- \`io.papermc.paper.treecore.ui.HtmlUiRenderer\`

---

## 前端资源位置

### 源文件
- \`treecore-web/\`

### JAR 内嵌资源
- \`paper-server/src/main/resources/treecore-web/\`

### 运行时资源目录
- 服务器运行目录下的 \`treecore-web/\`

---

## 读代码建议

### 如果你要看性能部分
从这里开始：

1. \`TreeCore\`
2. \`TreeCoreOptimizer\`
3. \`PaperConfigTuner\`
4. \`ChunkPreloadEngine\` / \`TeleportChunkPreloader\`

### 如果你要看 Web 部分
从这里开始：

1. \`TreeCoreWebServer\`
2. \`treecore-web/index.html\`
3. \`treecore-web/treecore-core.js\`
4. \`paper-server/src/main/resources/treecore-web/\`

### 如果你要看内容链路
从这里开始：

1. \`ModelManager\`
2. \`ResourcePackGenerator\`
3. \`CraftEngineBridge\`
4. \`ItemsAdderMenuConfig\`

---

## 相关页面

- [系统架构总览](./system-overview.md)
- [Web 资源同步机制](../development/web-ui-pipeline.md)
`,Xd=`# 系统架构总览

本页从技术视角描述 TreeCore 当前的主要组成。

> 说明：这里的模块名和职责，按当前代码结构整理，不是营销层面的概念图。

---

## 核心模块

### 1. 性能优化引擎
主要入口与相关类：

- \`io.papermc.paper.treecore.TreeCore\`
- \`io.papermc.paper.treecore.performance.TreeCoreOptimizer\`
- \`io.papermc.paper.treecore.performance.PaperConfigTuner\`
- \`io.papermc.paper.treecore.performance.ChunkPreloadEngine\`
- \`io.papermc.paper.treecore.performance.TeleportChunkPreloader\`
- \`io.papermc.paper.treecore.performance.PluginAuditor\`

主要职责：

- 动态视距 / 模拟距离
- 自动分层预设
- 动态网络压缩
- 碰撞、漏斗、粒子、广播等压力感知优化
- 方向预测区块预载
- 远距离传送预热

---

### 2. Web 管理面板
相关类：

- \`io.papermc.paper.treecore.web.TreeCoreWebServer\`
- \`io.papermc.paper.treecore.web.ModWebSocketHub\`

前端资源目录：

- \`treecore-web/\`
- \`paper-server/src/main/resources/treecore-web/\`

主要职责：

- 对外提供管理面板
- 提供资源包、模型、备份、控制台、诊断、集成等 HTTP API
- 提供 Mod 侧认证与模型 / 资源哈希相关接口

---

### 3. 资源包与模型链路
相关类：

- \`io.papermc.paper.treecore.pack.ResourcePackGenerator\`
- \`io.papermc.paper.treecore.model.ModelManager\`
- \`io.papermc.paper.treecore.model.ModelLibraryService\`
- \`io.papermc.paper.treecore.model.CraftEngineBridge\`

主要职责：

- 管理模型文件与纹理资源
- 处理本地资源包托管与哈希刷新
- 配合 CraftEngine 做资源同步
- 支持在线玩家资源包推送链路

---

### 4. 生电与游戏辅助
相关类：

- \`io.papermc.paper.treecore.redstone.FakePlayerService\`
- \`io.papermc.paper.treecore.effect.EffectManager\`
- \`io.papermc.paper.treecore.ui.TpsBarManager\`

主要职责：

- 假人系统
- 红石热点数据与回放
- 粒子特效管理
- TPS BossBar 展示

---

### 5. 插件桥接层
相关类：

- \`io.papermc.paper.treecore.integration.ItemsAdderBridge\`
- \`io.papermc.paper.treecore.integration.ItemsAdderMenuConfig\`
- \`io.papermc.paper.treecore.integration.MultiverseBridge\`
- \`io.papermc.paper.treecore.model.CraftEngineBridge\`

主要职责：

- 对接 ItemsAdder
- 对接 Multiverse
- 对接 CraftEngine

---

## 运行时关系（简化理解）

\`\`\`text
玩家 / 运维
   ↓
TreeCore 命令 + Web 面板
   ↓
TreeCore 核心服务
   ├─ 性能优化引擎
   ├─ 资源包 / 模型链路
   ├─ 假人 / 粒子 / BossBar
   ├─ 集成桥接层
   └─ 诊断 / 备份 / 控制台 API
\`\`\`

---

## 技术阅读建议

如果你是偏技术维护者，建议阅读顺序：

1. \`TreeCore\`
2. \`TreeCoreConfig\`
3. \`TreeCoreOptimizer\`
4. \`TreeCoreWebServer\`
5. 模型 / 资源包 / 集成相关类

---

## 相关页面

- [配置参考](../reference/configuration.md)
- [Web 资源同步机制](../development/web-ui-pipeline.md)
`,ep=`# Web 资源同步机制

本页说明 TreeCore 的 Web 前端资源是如何进入运行目录并自动更新的。

这部分适合：

- 想改前端页面的人
- 想确认“为什么我换了 JAR 页面还没变”的人
- 想理解 \`treecore-web/\`、内嵌资源、运行目录三者关系的人

---

## 三层资源位置

当前前端资源主要有三层：

### 1. 源文件目录

- \`treecore-web/\`

这是本地修改最直接的地方，通常先改这里。

### 2. JAR 内嵌资源目录

- \`paper-server/src/main/resources/treecore-web/\`

这部分会被打进 JAR，运行时 WebServer 会从这里把文件释放到运行目录。

### 3. 运行时 webRoot

- 服务器运行目录下的 \`treecore-web/\`

浏览器真正访问到的是这里面的文件。

---

## 当前会自动同步的文件

当前核心同步逻辑会重点处理：

- \`index.html\`
- \`treecore-core.js\`

同时：

- \`admin-ext.js\` 会在运行时由服务端动态生成
- \`ui_theme.html\` 会在需要时初始化

也就是说：

> 不是所有前端文件都完全按静态资源复制；其中一部分是运行时生成或补全的。

---

## 版本标记机制

相关类：

- \`io.papermc.paper.treecore.web.TreeCoreWebServer\`

关键字段：

- \`UI_VERSION\`

运行时逻辑大致是：

1. 服务端启动 WebServer
2. 检查 webRoot 下的 \`.ui_version\`
3. 如果版本不一致，就从 JAR 里的 \`treecore-web/\` 释放新文件
4. 写回新的 \`.ui_version\`

因此：

- **新 JAR + 完整重启** 才会触发这轮自动覆盖
- 只改本地源码、不重新构建运行包，不会让线上页面自动变新

---

## 常见误区

### 1. “源码里明明有，浏览器里为什么没有？”
通常优先排查：

- 当前运行的是否是新 JAR
- 服务端是否完整重启
- 浏览器是否仍然使用缓存
- 运行目录 \`treecore-web/\` 里是否还是旧文件

### 2. “为什么 \`admin-ext.js\` 不在所有目录里一致？”
因为它不是单纯的静态拷贝文件，当前设计里会由服务端运行时生成。

### 3. “为什么默认远程打不开？”
因为默认绑定到：

- \`127.0.0.1\`

并且未主动开启远程访问。

---

## 推荐修改流程

如果你要改 Web：

1. 先改 \`treecore-web/\`
2. 同步到 \`paper-server/src/main/resources/treecore-web/\`
3. 构建新的 JAR
4. 完整重启服务端
5. 强刷浏览器缓存验证

---

## 相关页面

- [Web 面板访问](../getting-started/web-panel.md)
- [系统架构总览](../architecture/system-overview.md)
`,tp=`# 首次上线检查清单

这页适合在你第一次把 TreeCore 上到测试服或正式服时逐项确认。

---

## 启动前

- [ ] Java 版本已确认是 **21+**
- [ ] 已准备好足够内存（建议 8GB 起步）
- [ ] 关键插件名单已整理好，准备做兼容验证
- [ ] 已确认服务器目录可写（需要生成 \`treecore.json\` 与运行时网页目录）

---

## 第一次启动后

- [ ] \`treecore.json\` 已生成
- [ ] \`treecore-web/\` 已生成
- [ ] \`/tc\` 能正常显示帮助
- [ ] \`/tc perf\` 能输出性能状态
- [ ] \`/tc tpsbar\` 能正常切换 BossBar

---

## Web 面板检查

- [ ] 本机能打开 \`http://127.0.0.1:8080\`
- [ ] 仪表盘能刷新 TPS / MSPT / CPU / 内存
- [ ] 控制台能执行命令并看到实时日志
- [ ] 诊断页能生成线程转储
- [ ] 备份页能读取备份列表

---

## 如果你要开放远程 Web

- [ ] 已设置 \`webAllowRemote = true\`
- [ ] 已设置 \`webBindAddress = 0.0.0.0\`
- [ ] 已设置 \`webRequireAuth = true\`
- [ ] 已设置足够强的 \`webAdminToken\`
- [ ] 已确认防火墙 / 面板 / 反代规则

---

## 如果你要启用资源包链路

- [ ] 已确认是使用 **本地 ZIP** 还是 **外部 URL**
- [ ] 如果用本地 ZIP，已测试上传与重载 SHA-1
- [ ] 已测试对在线玩家执行远程下发
- [ ] 已确认资源包下载地址可达

---

## 如果你是综合服 / 内容服

- [ ] 已检查 CraftEngine 状态
- [ ] 已检查 Multiverse 世界列表
- [ ] 已检查 ItemsAdder 编辑器是否能读取菜单
- [ ] 已验证模型 / 纹理上传流程

---

## 如果你是生电 / 压力服

- [ ] 先用默认配置跑一轮
- [ ] 再按需观察是否需要开启红石热点保护
- [ ] 确认漏斗与热点相关配置是否符合玩法预期
- [ ] 使用 \`/tc perftest\` 或真实场景压测验证高峰表现

---

## 相关页面

- [快速开始](./quick-start.md)
- [Web 面板访问](./web-panel.md)
- [配置参考](../reference/configuration.md)
`,np=`# 快速开始

## 运行要求

- **Minecraft**：1.21.x
- **Java**：21+
- **建议内存**：8GB 起步

---

## 1. 下载

从公开仓库的 Releases 获取构建产物：

- [Tree Releases](https://github.com/TreeMC-cloud/Tree/releases)

常见文件名示例：

- \`treecore-paperclip.jar\`

---

## 2. 启动

\`\`\`bash
java -Xms8G -Xmx8G -jar treecore-paperclip.jar --nogui
\`\`\`

首次启动后会自动生成：

- \`treecore.json\`
- \`treecore-web/\`（运行时网页目录）

如果端口未被占用，Web 面板默认监听：

- \`127.0.0.1:8080\`

---

## 3. 生成推荐启动脚本

启动后建议在游戏内执行：

\`\`\`text
/tc startscript
\`\`\`

它会在服务器目录生成：

- \`start.sh\`
- \`start.bat\`

用于保存当前推荐的 JVM 启动参数。

如果你只想查看参数而不生成脚本，可以使用：

\`\`\`text
/tc jvmflags
\`\`\`

---

## 4. 首次检查建议

首次启动建议按下面顺序确认：

1. \`/tc perf\` 是否能正常输出性能状态
2. \`/tc tpsbar\` 是否能正常显示 BossBar
3. 本机浏览器是否能打开 \`http://127.0.0.1:8080\`
4. \`treecore.json\` 是否已生成

---

## 5. 如果你准备正式上服

建议先做这些事：

- 先在测试服验证关键插件
- 确认代理链路（Velocity / BungeeCord）是否符合你的现网环境
- 如果要开放远程 Web，先配置 \`webRequireAuth\` 与 \`webAdminToken\`
- 如果要启用本地资源包托管，先看：[资源包 / 模型链路](../operations/resource-pack.md)

---

## 下一步阅读

- [Web 面板访问](./web-panel.md)
- [命令与日常运维](../operations/commands.md)
- [配置参考](../reference/configuration.md)
`,sp=`# Web 面板访问

## 默认访问方式

TreeCore 的 Web 面板默认只监听本机：

- 地址：\`http://127.0.0.1:8080\`
- 默认端口：\`8080\`

默认相关配置：

\`\`\`jsonc
{
  "webServerPort": 8080,
  "webAllowRemote": false,
  "webBindAddress": "127.0.0.1",
  "webRequireAuth": false,
  "webAdminToken": ""
}
\`\`\`

这意味着：

- 你在服务器本机浏览器里通常能直接打开
- 局域网 / 公网设备默认不能直接访问

---

## 如何开启远程访问

如果你要让其他设备访问 Web 面板，建议至少这样配置：

\`\`\`jsonc
{
  "webAllowRemote": true,
  "webBindAddress": "0.0.0.0",
  "webRequireAuth": true,
  "webAdminToken": "请改成你自己的强随机令牌"
}
\`\`\`

### 建议说明

- \`webAllowRemote = true\`：允许非回环地址访问
- \`webBindAddress = 0.0.0.0\`：监听全部网卡
- \`webRequireAuth = true\`：启用管理令牌验证
- \`webAdminToken\`：建议使用足够长的随机字符串

> 不建议把远程访问和无鉴权同时打开。

---

## 当前面板页签

当前 Web 面板为 **11 页签**：

1. 仪表盘
2. 控制台
3. 系统诊断
4. 核心配置
5. 生电优化
6. 模型管理
7. 资源包
8. 粒子特效
9. 集成运维
10. ItemsAdder 编辑器
11. 备份管理

---

## 常见访问问题

### 打不开页面
请优先检查：

1. 服务端是否成功启动 WebServer
2. 端口是否被占用
3. 是否仍在使用旧缓存页面（浏览器可尝试 \`Ctrl + F5\`）
4. 是否启用了远程访问但防火墙未放行端口

### 页面看起来还是旧版本
当前网页资源带有版本同步机制。

如果你升级了服务端但页面没变化，重点检查：

- 运行的是否真的是新 JAR
- 服务端是否完整重启
- \`treecore-web/.ui_version\` 是否已刷新

技术细节可看：

- [Web 资源同步机制](../development/web-ui-pipeline.md)

---

## 下一步阅读

- [资源包 / 模型链路](../operations/resource-pack.md)
- [诊断与备份](../operations/diagnostics-and-backups.md)
`,rp=`# 命令与日常运维

当前命令前缀为：

- \`/treecore\`
- 别名：\`/tc\`

所需权限：

- \`treecore.admin\`

> 本页内容按当前 \`TreeCoreCommand\` 实际实现整理。

---

## 核心命令

| 命令 | 说明 |
|---|---|
| \`/tc\` | 显示帮助列表 |
| \`/tc perf\` | 查看性能监控与优化状态 |
| \`/tc reload\` | 重载配置，并在本地资源包模式下重新处理资源包 |
| \`/tc tpsbar\` | 给玩家切换 TPS/MSPT BossBar |
| \`/tc jvmflags\` | 输出推荐 JVM 启动参数 |
| \`/tc startscript\` | 生成 \`start.sh\` 与 \`start.bat\` |
| \`/tc tuner\` | 查看 PaperConfigTuner 当前档位 |
| \`/tc audit\` | 执行插件性能审计 |
| \`/tc perftest\` | 进行性能压测 |

---

## 内容相关命令

| 命令 | 说明 |
|---|---|
| \`/tc spawn <模型名>\` | 在玩家当前位置生成模型 |
| \`/tc effect <blizzard\\|nova\\|helix>\` | 播放内置粒子特效 |

---

## 假人系统命令

| 命令 | 说明 |
|---|---|
| \`/tc bot list\` | 查看所有假人 |
| \`/tc bot create [名] [皮肤]\` | 在当前位置创建假人 |
| \`/tc bot summon [名] [皮肤]\` | \`create\` 的同义入口 |
| \`/tc bot attack <名>\` | 令假人攻击最近实体 |
| \`/tc bot break <名>\` | 令假人破坏面前方块 |
| \`/tc bot face <名> <yaw> <pitch>\` | 设置假人朝向 |
| \`/tc bot clear [名/all]\` | 清理指定假人或全部假人 |

---

## 日常使用建议

### 日常巡检
推荐组合：

- \`/tps\`
- \`/tc perf\`
- \`/tc tpsbar\`

### 上线前准备
推荐组合：

- \`/tc jvmflags\`
- \`/tc startscript\`
- \`/tc audit\`

### 内容维护
推荐组合：

- \`/tc spawn <模型名>\`
- Web 面板里的模型管理、资源包、ItemsAdder 编辑器

---

## 相关页面

- [资源包 / 模型链路](./resource-pack.md)
- [诊断与备份](./diagnostics-and-backups.md)
- [系统架构总览](../architecture/system-overview.md)
`,ip=`# 诊断与备份

TreeCore 当前把一部分常见运维操作直接放进了 Web 面板，而不是要求你全程 SSH 到服务器里处理。

---

## 系统诊断页

当前 **系统诊断** 页支持：

- **内存快照**：查看堆与内存池信息
- **卡顿检测**：查看主线程阻塞相关信息
- **线程转储**：直接生成线程 dump，并可复制
- **GC 操作**：从面板触发 GC

这类操作适合：

- 排查高峰期卡顿
- 观察堆占用变化
- 快速导出线程信息交给技术人员分析

---

## 控制台页

控制台页当前支持：

- 远程执行命令
- 查看历史命令
- 实时日志流
- 按 \`INFO / WARN / ERROR\` 过滤
- 关键字过滤

适合：

- 快速运维
- 远程查看日志
- 不方便直接连 SSH 时做紧急处理

---

## 备份管理页

当前 **备份管理** 页支持：

- 按世界名称创建备份
- 查看备份列表
- 执行恢复

常见用法：

1. 对活动世界操作前先备份
2. 做大规模内容调整前先备份
3. 配合多世界管理，按世界分批维护

---

## 建议的排障顺序

如果服务器出现异常波动，建议顺序：

1. 仪表盘观察 TPS / MSPT / CPU / 内存
2. 进入控制台看近期错误日志
3. 进入系统诊断查看内存快照与线程转储
4. 如涉及世界数据风险，先在备份页做备份

---

## 相关页面

- [命令与日常运维](./commands.md)
- [集成与世界管理](./integrations-and-worlds.md)
`,op=`# 假人 / 红石运维

TreeCore 当前把一部分生电相关能力放进了统一的运维体系里，重点包括：

- 假人系统
- 红石热点监控
- 红石热点回放
- TNT / 地毯复制开关

---

## 假人系统

当前命令与面板都能管理假人。

### 命令入口

- \`/tc bot list\`
- \`/tc bot create [名] [皮肤]\`
- \`/tc bot summon [名] [皮肤]\`
- \`/tc bot attack <名>\`
- \`/tc bot break <名>\`
- \`/tc bot face <名> <yaw> <pitch>\`
- \`/tc bot clear [名/all]\`

### 主要配置

\`\`\`jsonc
{
  "fakePlayerEnabled": true,
  "fakePlayerMaxCount": 16,
  "fakePlayerDefaultLifetimeSeconds": 600
}
\`\`\`

---

## 红石热点

当前 Web 面板可以查看：

- 红石热点状态
- 热点帧序列
- 热点回放

这更适合用来：

- 找出异常热点区块
- 分析短时间内高频更新区域
- 辅助决定是否需要开启保护项

---

## 保护项理解方式

### 默认策略
默认更偏保守：

- \`redstoneOptimizationEnabled = false\`
- \`redstoneHotspotThrottle = false\`
- \`redstoneHeatReplayEnabled = false\`

也就是说：

> 默认不会主动去改你的红石节奏。

### 什么时候考虑开启？
你可以在这些场景考虑逐步启用：

- 已出现明确热点区块
- 高峰时 MSPT 明显被机器拖高
- 你需要先定位再决定是否干预

---

## 复制项开关

当前仍保留：

- \`carpetDuplicationEnabled\`
- \`tntDuplicationEnabled\`

用于按服务器规则决定是否开放对应玩法。

---

## 建议使用顺序

1. 先保持默认配置运行
2. 通过仪表盘与生电页观察热点
3. 确认问题区域后再决定是否开启热点保护
4. 对重要生电服，先在测试环境验证再上正式服

---

## 相关页面

- [命令与日常运维](./commands.md)
- [配置参考](../reference/configuration.md)
- [Web 页面总览](./web-pages-overview.md)
`,lp=`# 集成与世界管理

当前 Web 面板中的 **集成运维** 页主要围绕三类内容：

- 第三方插件状态查看
- 世界创建 / 加载 / 卸载
- 一键更新任务列表

---

## 当前已接入的集成对象

### CraftEngine
当前可见能力：

- 状态查看
- 重载 / 同步入口
- 与资源包链路协同

### Multiverse
当前可见能力：

- 世界列表
- 世界创建
- 世界加载
- 世界卸载
- 世界筛选
- 批量卸载

### ItemsAdder
当前可见能力：

- 状态查看
- 菜单配置读取 / 保存
- 菜单应用
- 槽位配置与预览

---

## 世界管理面板

当前世界管理支持：

- 按世界名创建
- 选择环境类型（NORMAL / NETHER / THE_END）
- 加载 / 卸载指定世界
- 过滤：全部 / 已加载 / 主世界 / 下界 / 末地
- 全选 / 清空 / 批量卸载

适合：

- 综合服多世界维护
- 活动世界按需启停
- 结合备份流程做阶段性操作

---

## ItemsAdder 编辑器

当前独立页签 **ItemsAdder 编辑器** 支持：

- 菜单标题、行数编辑
- 保存菜单
- 应用菜单
- 槽位索引、图标、显示名、命名空间、命令、Lore 编辑
- 菜单预览
- 已配置槽位列表

这部分更适合作为：

- IA 菜单轻量维护入口
- 与内容服的资源生产流程协同使用

---

## 一键更新任务

集成运维页当前有：

- 一键更新按钮
- 最近任务列表

它更适合作为一个统一运维入口，用来查看最近操作任务状态。

---

## 相关页面

- [资源包 / 模型链路](./resource-pack.md)
- [诊断与备份](./diagnostics-and-backups.md)
- [Web 面板访问](../getting-started/web-panel.md)
`,ap=`# 资源包 / 模型链路

这条链路是 TreeCore 当前比较完整的一部分：

- 模型上传
- 纹理上传
- 本地资源包 ZIP 上传
- 重载资源包 SHA-1
- 在线玩家远程下发资源包

---

## 模型与纹理

Web 面板中的 **模型管理** 当前支持：

- 上传模型文件
- 上传纹理文件
- 查看模型列表
- 删除模型

通常适合和资源包流程一起使用：

1. 上传模型 / 纹理
2. 处理资源包
3. 下发给在线玩家

---

## 资源包页面当前流程

当前资源包页支持：

- **拖拽上传本地 ZIP**
- 点击上传 ZIP
- **重载资源包**（刷新 SHA-1）
- **远程下发在线玩家**
- 本地托管 / 外部 URL 并存配置
- CraftEngine 同步桥

### 推荐流程

#### 方式 A：使用本地 ZIP

1. 打开 Web 面板 → \`资源包\`
2. 把本地 \`.zip\` 拖进上传区
3. 点击 **重载资源包**
4. 点击 **远程下发在线玩家**

#### 方式 B：使用外部 URL

1. 在配置里填写 \`resourcePackUrl\`
2. 填写对应 \`resourcePackHash\`
3. 在资源包页执行远程下发

---

## 关键配置

\`\`\`jsonc
{
  "resourcePackUrl": "",
  "resourcePackHash": "",
  "forceResourcePack": false,
  "resourcePackPrompt": "",
  "useLocalResourcePack": false,
  "localResourcePackName": "pack.zip"
}
\`\`\`

### 字段说明

- \`resourcePackUrl\`：外部资源包地址
- \`resourcePackHash\`：SHA-1 哈希
- \`forceResourcePack\`：是否强制下载
- \`resourcePackPrompt\`：客户端提示文本
- \`useLocalResourcePack\`：是否启用本地托管
- \`localResourcePackName\`：本地 ZIP 文件名

---

## 常见问题

### 上传 ZIP 后为什么玩家没收到？
因为上传只是把文件放到服务端，还需要继续：

1. 重载资源包
2. 下发给在线玩家

### 本地托管和外部 URL 能同时存在吗？
配置上可以共存，但实际使用时应明确当前要推送哪种来源，避免混淆。

### 资源包页面和模型页面是什么关系？
模型 / 纹理是资源内容来源，资源包页面是最终打包与下发入口。

---

## 相关页面

- [Web 面板访问](../getting-started/web-panel.md)
- [集成与世界管理](./integrations-and-worlds.md)
`,cp=`# Web 页面总览

当前 Web 面板为 **11 个页签**，适合作为 TreeCore 的统一运维入口。

---

## 页面列表

| 页签 | 用途 |
|---|---|
| 仪表盘 | 看整体状态、趋势图、红石热点、资源占用 |
| 控制台 | 执行命令、看实时日志 |
| 系统诊断 | 看内存快照、卡顿检测、线程转储、GC |
| 核心配置 | 调整 TreeCore 配置，支持高级 JSON 模式 |
| 生电优化 | 管假人、红石热点相关开关、复制项开关 |
| 模型管理 | 上传模型 / 纹理，查看与删除模型 |
| 资源包 | 上传 ZIP、重载 SHA-1、下发在线玩家 |
| 粒子特效 | 编辑、保存、读取和播放粒子特效 |
| 集成运维 | 看 CraftEngine / Multiverse / ItemsAdder 状态，管理世界 |
| ItemsAdder 编辑器 | 维护 IA 菜单与槽位 |
| 备份管理 | 创建和恢复世界备份 |

---

## 页面之间的典型流转

### 内容更新流

1. 模型管理：上传模型 / 纹理
2. 资源包：处理 ZIP / 哈希 / 下发玩家
3. 集成运维 / IA 编辑器：联动内容插件配置

### 问题排查流

1. 仪表盘：先看 TPS / MSPT / CPU / 内存
2. 控制台：看近期报错和日志
3. 系统诊断：导出线程转储、看内存与卡顿信息
4. 备份管理：必要时先做备份再继续处理

### 综合服维护流

1. 集成运维：看世界和桥接状态
2. ItemsAdder 编辑器：改菜单
3. 资源包：下发资源变更

---

## 使用建议

### 先看什么？
如果你刚进面板，建议优先看：

- 仪表盘
- 控制台
- 系统诊断

### 高频操作在哪？
高频运维通常集中在：

- 控制台
- 核心配置
- 资源包
- 备份管理

### 内容服最常去哪里？
内容服通常集中在：

- 模型管理
- 资源包
- 粒子特效
- 集成运维
- ItemsAdder 编辑器

---

## 相关页面

- [Web 面板访问](../getting-started/web-panel.md)
- [资源包 / 模型链路](./resource-pack.md)
- [诊断与备份](./diagnostics-and-backups.md)
`,up=`# 命令速查表

这页适合快速查命令，不展开解释。

---

## 基础

| 命令 | 作用 |
|---|---|
| \`/tc\` | 显示帮助 |
| \`/tc perf\` | 性能状态 |
| \`/tc reload\` | 重载配置 |
| \`/tc tpsbar\` | 切换 BossBar |
| \`/tc tuner\` | 查看调优器状态 |
| \`/tc audit\` | 插件审计 |
| \`/tc perftest\` | 性能压测 |

---

## 启动与 JVM

| 命令 | 作用 |
|---|---|
| \`/tc jvmflags\` | 输出 JVM 参数建议 |
| \`/tc startscript\` | 生成启动脚本 |

---

## 内容与特效

| 命令 | 作用 |
|---|---|
| \`/tc spawn <模型名>\` | 生成模型 |
| \`/tc effect <blizzard\\|nova\\|helix>\` | 播放内置特效 |

---

## 假人系统

| 命令 | 作用 |
|---|---|
| \`/tc bot list\` | 查看假人 |
| \`/tc bot create [名] [皮肤]\` | 创建假人 |
| \`/tc bot summon [名] [皮肤]\` | 创建假人（别名入口） |
| \`/tc bot attack <名>\` | 假人攻击 |
| \`/tc bot break <名>\` | 假人挖掘 |
| \`/tc bot face <名> <yaw> <pitch>\` | 设置朝向 |
| \`/tc bot clear [名/all]\` | 清理假人 |

---

## 相关页面

- [命令与日常运维](./../operations/commands.md)
- [假人 / 红石运维](./../operations/fakeplayer-and-redstone.md)
`,fp=`# 配置参考

TreeCore 配置文件为：

- \`treecore.json\`

首次启动会自动生成，当前既可以：

- 直接手改 JSON
- 通过 Web 面板可视化编辑

> 由于配置项较多，这里只整理最常用、最值得优先理解的部分。

---

## Web 访问

\`\`\`jsonc
{
  "webServerPort": 8080,
  "webAllowRemote": false,
  "webBindAddress": "127.0.0.1",
  "webRequireAuth": false,
  "webAdminToken": ""
}
\`\`\`

### 建议

- 单机维护：保留默认值
- 局域网 / 公网访问：开启 \`webAllowRemote\`，并务必启用 \`webRequireAuth\`

---

## 性能主开关

\`\`\`jsonc
{
  "enableOptimization": true,
  "dynamicViewDistance": true,
  "dynamicSimulationDistance": true,
  "autoLayeredPresetEnabled": true,
  "msptTarget": 45
}
\`\`\`

### 含义

- \`enableOptimization\`：总开关
- \`dynamicViewDistance\`：动态视距
- \`dynamicSimulationDistance\`：动态模拟距离
- \`autoLayeredPresetEnabled\`：自动分层预设
- \`msptTarget\`：优化器目标 MSPT

---

## 网络 / 传送链路

\`\`\`jsonc
{
  "deltaAwarePacketFilter": true,
  "tabListBatchEnabled": true,
  "teleportPreloadEnabled": true,
  "chunkPreloadEnabled": true,
  "loginStormProtectionEnabled": true,
  "broadcastScopeReductionEnabled": true
}
\`\`\`

这一组更偏向：

- 网络冗余控制
- 多人进入保护
- 远距离移动与传送体验优化

---

## 生电 / 假人

\`\`\`jsonc
{
  "fakePlayerEnabled": true,
  "fakePlayerMaxCount": 16,
  "fakePlayerDefaultLifetimeSeconds": 600,
  "carpetDuplicationEnabled": false,
  "tntDuplicationEnabled": false,
  "redstoneOptimizationEnabled": false,
  "redstoneHotspotThrottle": false,
  "redstoneHeatReplayEnabled": false
}
\`\`\`

### 理解方式

- 假人系统默认开启
- TNT / 地毯复制默认关闭
- 红石热点保护与回放默认关闭

也就是说：

> 默认更偏原版与保守策略，需要时再逐项打开。

---

## 资源包

\`\`\`jsonc
{
  "resourcePackUrl": "",
  "resourcePackHash": "",
  "forceResourcePack": false,
  "resourcePackPrompt": "",
  "useLocalResourcePack": false,
  "localResourcePackName": "pack.zip"
}
\`\`\`

### 两种使用方式

- 外部 URL 模式
- 本地托管 ZIP 模式

如果你使用 Web 面板拖拽上传 ZIP，重点关注：

- \`useLocalResourcePack\`
- \`localResourcePackName\`
- \`resourcePackHash\`

---

## 虚拟线程

\`\`\`jsonc
{
  "enableVirtualThreads": true,
  "virtualThreadsForWebOps": true,
  "virtualThreadsForPackBuild": true,
  "virtualThreadsForOneClickOps": true
}
\`\`\`

主要用于把 Web、资源包和部分运维任务尽量从传统阻塞模型里解耦出来。

---

## 建议改配置的顺序

建议按下面顺序理解与调整：

1. Web 访问与安全
2. 性能主开关
3. 资源包模式
4. 假人 / 生电保护
5. 更细的网络与传送链路设置

如果你只是普通运维，很多配置可以优先通过 Web 面板观察后再决定是否改动。
`,dp=Object.assign({"../../content/docs/README.md":Jd,"../../content/docs/SUMMARY.md":Qd,"../../content/docs/architecture/module-map.md":Yd,"../../content/docs/architecture/system-overview.md":Xd,"../../content/docs/development/web-ui-pipeline.md":ep,"../../content/docs/getting-started/first-day-checklist.md":tp,"../../content/docs/getting-started/quick-start.md":np,"../../content/docs/getting-started/web-panel.md":sp,"../../content/docs/operations/commands.md":rp,"../../content/docs/operations/diagnostics-and-backups.md":ip,"../../content/docs/operations/fakeplayer-and-redstone.md":op,"../../content/docs/operations/integrations-and-worlds.md":lp,"../../content/docs/operations/resource-pack.md":ap,"../../content/docs/operations/web-pages-overview.md":cp,"../../content/docs/reference/command-cheatsheet.md":up,"../../content/docs/reference/configuration.md":fp}),pp="../../content/docs/",hp=Object.fromEntries(Object.entries(dp).map(([e,t])=>[e.replace(pp,""),t]));function Cr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ft=Cr();function gl(e){Ft=e}var Cn={exec:()=>null};function te(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(Ae.caret,"$1"),n=n.replace(r,l),s},getRegex:()=>new RegExp(n,t)};return s}var Ae={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},gp=/^(?:[ \t]*(?:\n|$))+/,mp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Dn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Sr=/(?:[*+-]|\d{1,9}[.)])/,ml=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,bl=te(ml).replace(/bull/g,Sr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),_p=te(ml).replace(/bull/g,Sr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ar=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,yp=/^[^\n]+/,Er=/(?!\s*\])(?:\\.|[^\[\]\\])+/,kp=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Er).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wp=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Sr).getRegex(),ks="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xp=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pr).replace("tag",ks).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vl=te(Ar).replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),Rp=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vl).getRegex(),Ir={blockquote:Rp,code:mp,def:kp,fences:bp,heading:vp,hr:Dn,html:xp,lheading:bl,list:wp,newline:gp,paragraph:vl,table:Cn,text:yp},Mi=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),Tp={...Ir,lheading:_p,table:Mi,paragraph:te(Ar).replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex()},Cp={...Ir,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Cn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(Ar).replace("hr",Dn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",bl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Sp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ap=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_l=/^( {2,}|\\)\n(?!\s*$)/,Ep=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ws=/[\p{P}\p{S}]/u,Or=/[\s\p{P}\p{S}]/u,yl=/[^\s\p{P}\p{S}]/u,Pp=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Or).getRegex(),kl=/(?!~)[\p{P}\p{S}]/u,Ip=/(?!~)[\s\p{P}\p{S}]/u,Op=/(?:[^\s\p{P}\p{S}]|~)/u,$p=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,wl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Mp=te(wl,"u").replace(/punct/g,ws).getRegex(),Np=te(wl,"u").replace(/punct/g,kl).getRegex(),xl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Lp=te(xl,"gu").replace(/notPunctSpace/g,yl).replace(/punctSpace/g,Or).replace(/punct/g,ws).getRegex(),Dp=te(xl,"gu").replace(/notPunctSpace/g,Op).replace(/punctSpace/g,Ip).replace(/punct/g,kl).getRegex(),Bp=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,yl).replace(/punctSpace/g,Or).replace(/punct/g,ws).getRegex(),Wp=te(/\\(punct)/,"gu").replace(/punct/g,ws).getRegex(),Hp=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),jp=te(Pr).replace("(?:-->|$)","-->").getRegex(),Fp=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",jp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),is=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Gp=te(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",is).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Rl=te(/^!?\[(label)\]\[(ref)\]/).replace("label",is).replace("ref",Er).getRegex(),Tl=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Er).getRegex(),Up=te("reflink|nolink(?!\\()","g").replace("reflink",Rl).replace("nolink",Tl).getRegex(),$r={_backpedal:Cn,anyPunctuation:Wp,autolink:Hp,blockSkip:$p,br:_l,code:Ap,del:Cn,emStrongLDelim:Mp,emStrongRDelimAst:Lp,emStrongRDelimUnd:Bp,escape:Sp,link:Gp,nolink:Tl,punctuation:Pp,reflink:Rl,reflinkSearch:Up,tag:Fp,text:Ep,url:Cn},zp={...$r,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",is).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",is).getRegex()},Xs={...$r,emStrongRDelimAst:Dp,emStrongLDelim:Np,url:te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Vp={...Xs,br:te(_l).replace("{2,}","*").getRegex(),text:te(Xs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},jn={normal:Ir,gfm:Tp,pedantic:Cp},hn={normal:$r,gfm:Xs,breaks:Vp,pedantic:zp},qp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ni=e=>qp[e];function et(e,t){if(t){if(Ae.escapeTest.test(e))return e.replace(Ae.escapeReplace,Ni)}else if(Ae.escapeTestNoEncode.test(e))return e.replace(Ae.escapeReplaceNoEncode,Ni);return e}function Li(e){try{e=encodeURI(e).replace(Ae.percentDecode,"%")}catch{return null}return e}function Di(e,t){var i;const n=e.replace(Ae.findPipe,(l,o,a)=>{let u=!1,c=o;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(Ae.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(Ae.slashPipe,"|");return s}function gn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function Kp(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Bi(e,t,n,s,r){const i=t.href,l=t.title||null,o=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}function Zp(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const l=i.match(n.other.beginningSpace);if(l===null)return i;const[o]=l;return o.length>=r.length?i.slice(r.length):i}).join(`
`)}var os=class{constructor(e){ae(this,"options");ae(this,"rules");ae(this,"lexer");this.options=e||Ft}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:gn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Zp(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=gn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:gn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=gn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let l=!1;const o=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))o.push(n[a]),l=!0;else if(!l)o.push(n[a]);else break;n=n.slice(a);const u=o.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=p,n.length===0)break;const g=i.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){const b=g,x=b.raw+`
`+n.join(`
`),v=this.blockquote(x);i[i.length-1]=v,s=s.substring(0,s.length-b.raw.length)+v.raw,r=r.substring(0,r.length-b.text.length)+v.text;break}else if((g==null?void 0:g.type)==="list"){const b=g,x=b.raw+`
`+n.join(`
`),v=this.list(x);i[i.length-1]=v,s=s.substring(0,s.length-g.raw.length)+v.raw,r=r.substring(0,r.length-b.raw.length)+v.raw,n=x.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let p=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,_=>" ".repeat(3*_.length)),g=e.split(`
`,1)[0],b=!p.trim(),x=0;if(this.options.pedantic?(x=2,c=p.trimStart()):b?x=t[1].length+1:(x=t[2].search(this.rules.other.nonSpaceChar),x=x>4?1:x,c=p.slice(x),x+=t[1].length),b&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,e=e.substring(g.length+1),a=!0),!a){const _=this.rules.other.nextBulletRegex(x),S=this.rules.other.hrRegex(x),C=this.rules.other.fencesBeginRegex(x),P=this.rules.other.headingBeginRegex(x),ne=this.rules.other.htmlBeginRegex(x);for(;e;){const ge=e.split(`
`,1)[0];let se;if(g=ge,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),se=g):se=g.replace(this.rules.other.tabCharGlobal,"    "),C.test(g)||P.test(g)||ne.test(g)||_.test(g)||S.test(g))break;if(se.search(this.rules.other.nonSpaceChar)>=x||!g.trim())c+=`
`+se.slice(x);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(p)||P.test(p)||S.test(p))break;c+=`
`+g}!b&&!g.trim()&&(b=!0),u+=ge+`
`,e=e.substring(ge.length+1),p=se.slice(x)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let v=null,A;this.options.gfm&&(v=this.rules.other.listIsTask.exec(c),v&&(A=v[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!v,checked:A,loose:!1,text:c,tokens:[]}),r.raw+=u}const o=r.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const u=r.items[a].tokens.filter(p=>p.type==="space"),c=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=c}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=Di(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const o of s)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<n.length;o++)i.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:i.align[o]});for(const o of r)i.rows.push(Di(o,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=gn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Kp(t[2],"()");if(i===-2)return;if(i>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Bi(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Bi(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let l,o,a=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(o=[...l].length,s[3]||s[4]){a+=o;continue}else if((s[5]||s[6])&&i%3&&!((i+o)%3)){u+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+u);const p=[...s[0]][0].length,g=e.slice(0,i+s.index+p+o);if(Math.min(i,o)%2){const x=g.slice(1,-1);return{type:"em",raw:g,text:x,tokens:this.lexer.inlineTokens(x)}}const b=g.slice(2,-2);return{type:"strong",raw:g,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},pt=class er{constructor(t){ae(this,"tokens");ae(this,"options");ae(this,"state");ae(this,"tokenizer");ae(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ft,this.options.tokenizer=this.options.tokenizer||new os,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Ae,block:jn.normal,inline:hn.normal};this.options.pedantic?(n.block=jn.pedantic,n.inline=hn.pedantic):this.options.gfm&&(n.block=jn.gfm,this.options.breaks?n.inline=hn.breaks:n.inline=hn.gfm),this.tokenizer.rules=n}static get rules(){return{block:jn,inline:hn}}static lex(t,n){return new er(n).lex(t)}static lexInline(t,n){return new er(n).inlineTokens(t)}lex(t){t=t.replace(Ae.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,l;for(this.options.pedantic&&(t=t.replace(Ae.tabCharGlobal,"    ").replace(Ae.spaceLine,""));t;){let o;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(o=u.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);const u=n.at(-1);o.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let a=t;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const c=t.slice(1);let p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},c),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o),s=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var o,a,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,l="";for(;t;){i||(l=""),i=!1;let c;if((a=(o=this.options.extensions)==null?void 0:o.inline)!=null&&a.some(g=>(c=g.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const g=n.at(-1);c.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let p=t;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0;const b=t.slice(1);let x;this.options.extensions.startInline.forEach(v=>{x=v.call({lexer:this},b),typeof x=="number"&&x>=0&&(g=Math.min(g,x))}),g<1/0&&g>=0&&(p=t.substring(0,g+1))}if(c=this.tokenizer.inlineText(p)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),i=!0;const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):n.push(c);continue}if(t){const g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},ls=class{constructor(e){ae(this,"options");ae(this,"parser");this.options=e||Ft}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(Ae.notSpaceStart))==null?void 0:i[0],r=e.replace(Ae.endingNewline,"")+`
`;return s?'<pre><code class="language-'+et(s)+'">'+(n?r:et(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:et(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let l=0;l<e.items.length;l++){const o=e.items[l];s+=this.listitem(o)}const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+et(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const i=e.rows[r];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${et(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=Li(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+et(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=Li(e);if(r===null)return et(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${et(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:et(e.text)}},Mr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ht=class tr{constructor(t){ae(this,"options");ae(this,"renderer");ae(this,"textRenderer");this.options=t||Ft,this.options.renderer=this.options.renderer||new ls,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Mr}static parse(t,n){return new tr(n).parse(t)}static parseInline(t,n){return new tr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[o.type]){const u=o,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const a=o;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;l+1<t.length&&t[l+1].type==="text";)u=t[++l],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[o.type]){const u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=u||"";continue}}const a=o;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},Ds,Kn=(Ds=class{constructor(e){ae(this,"options");ae(this,"block");this.options=e||Ft}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?pt.lex:pt.lexInline}provideParser(){return this.block?ht.parse:ht.parseInline}},ae(Ds,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ds),Jp=class{constructor(...e){ae(this,"defaults",Cr());ae(this,"options",this.setOptions);ae(this,"parse",this.parseMarkdown(!0));ae(this,"parseInline",this.parseMarkdown(!1));ae(this,"Parser",ht);ae(this,"Renderer",ls);ae(this,"TextRenderer",Mr);ae(this,"Lexer",pt);ae(this,"Tokenizer",os);ae(this,"Hooks",Kn);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const l=i;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const a=l[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...l){let o=r.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new ls(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const l=i,o=n.renderer[l],a=r[l];r[l]=(...u)=>{let c=o.apply(r,u);return c===!1&&(c=a.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new os(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,o=n.tokenizer[l],a=r[l];r[l]=(...u)=>{let c=o.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new Kn;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const l=i,o=n.hooks[l],a=r[l];Kn.passThroughHooks.has(i)?r[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(r,u)).then(p=>a.call(r,p));const c=o.call(r,u);return a.call(r,c)}:r[l]=(...u)=>{let c=o.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),r&&(o=o.concat(r.call(this,l))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return pt.lex(e,t??this.defaults)}parser(e,t){return ht.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const o=i.hooks?i.hooks.provideLexer():e?pt.lex:pt.lexInline,a=i.hooks?i.hooks.provideParser():e?ht.parse:ht.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>o(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let u=o(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return l(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+et(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Ht=new Jp;function Z(e,t){return Ht.parse(e,t)}Z.options=Z.setOptions=function(e){return Ht.setOptions(e),Z.defaults=Ht.defaults,gl(Z.defaults),Z};Z.getDefaults=Cr;Z.defaults=Ft;Z.use=function(...e){return Ht.use(...e),Z.defaults=Ht.defaults,gl(Z.defaults),Z};Z.walkTokens=function(e,t){return Ht.walkTokens(e,t)};Z.parseInline=Ht.parseInline;Z.Parser=ht;Z.parser=ht.parse;Z.Renderer=ls;Z.TextRenderer=Mr;Z.Lexer=pt;Z.lexer=pt.lex;Z.Tokenizer=os;Z.Hooks=Kn;Z.parse=Z;Z.options;Z.setOptions;Z.use;Z.walkTokens;Z.parseInline;ht.parse;pt.lex;const Qp=Object.fromEntries(Jt.map(e=>[e.path,e.slug])),Yp=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),Xp=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return Yp(n.join("/"))},eh=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",Cl=()=>{const e=new Map;return t=>{const n=eh(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},th=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?Xp(t,s):t;if(i.endsWith(".md")){const l=Qp[i];if(l)return`#/docs/${l}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};Z.setOptions({gfm:!0,breaks:!0});const nh=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const l=th(i,t,n);return`[${r}](${l})`}),sh=e=>{const t=Z.lexer(String(e||"")),n=Cl();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},rh=(e,t,n)=>{const s=new Z.Renderer,r=Cl();s.link=({href:l,title:o,tokens:a})=>{const u=Z.Parser.parseInline(a),c=l||"",p=/^https?:\/\//i.test(c),g=o?` title="${o}"`:"";return`<a href="${c}"${g}${p?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:l,title:o,text:a})=>{const u=o?` title="${o}"`:"";return`<img src="${l}" alt="${a||""}"${u} />`},s.heading=({tokens:l,depth:o,text:a})=>{const u=r(a),c=Z.Parser.parseInline(l);return`<h${o} id="${u}" data-doc-heading="${u}">${c}</h${o}>`};const i=nh(e,t,n);return Z.parse(i,{renderer:s})},ih={class:"docs-sidebar surface-card"},oh={key:0,class:"docs-article-shell"},lh={class:"doc-breadcrumb"},ah={class:"doc-header surface-card"},ch={class:"card-label"},uh={class:"doc-meta"},fh=["innerHTML"],dh={class:"doc-footer surface-card"},ph={key:1,class:"docs-outline surface-card"},hh=["onClick"],gh={key:2,class:"docs-article-shell"},mh={class:"empty-state"},bh={__name:"DocArticlePage",setup(e){const t=mf(),n=gf(),s=we(""),r=pe(()=>hl[t.params.slug]),i=pe(()=>r.value?hp[r.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),l=pe(()=>sh(i.value)),o=pe(()=>r.value?rh(i.value,r.value.path,r.value.slug):""),a=pe(()=>Jt.findIndex(x=>{var v;return x.slug===((v=r.value)==null?void 0:v.slug)})),u=pe(()=>a.value>0?Jt[a.value-1]:null),c=pe(()=>a.value>=0&&a.value<Jt.length-1?Jt[a.value+1]:null),p=()=>{const x=l.value.find(v=>{const A=document.getElementById(v.id);if(!A)return!1;const _=A.getBoundingClientRect();return _.top>=0&&_.top<=180});x&&(s.value=x.id)},g=async x=>{await Qn();const v=document.getElementById(x);v&&(s.value=x,v.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:x}}))},b=async()=>{var v;await Qn();const x=t.query.section?String(t.query.section):"";if(x){const A=document.getElementById(x);if(A){s.value=x,requestAnimationFrame(()=>A.scrollIntoView({behavior:"smooth",block:"start"}));return}}s.value=((v=l.value[0])==null?void 0:v.id)||""};return ln(()=>{window.addEventListener("scroll",p,{passive:!0})}),xo(()=>{window.removeEventListener("scroll",p)}),en([o,()=>t.query.section,()=>t.params.slug],b,{immediate:!0}),(x,v)=>{const A=It("router-link");return O(),N("div",{class:Be(["page-shell container docs-layout-page",{"has-outline":l.value.length}])},[f("aside",ih,[v[0]||(v[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(O(!0),N(ue,null,_e(le(rs),_=>(O(),N("div",{key:_.key,class:"docs-nav-group"},[f("h3",null,B(_.title),1),(O(!0),N(ue,null,_e(_.items,S=>{var C;return O(),bn(A,{key:S.slug,to:`/docs/${S.slug}`,class:Be(["docs-nav-link",{active:((C=r.value)==null?void 0:C.slug)===S.slug}])},{default:V(()=>[f("span",null,B(S.title),1),f("small",null,B(S.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))]),r.value?(O(),N("section",oh,[f("div",lh,[F(A,{to:"/docs"},{default:V(()=>[...v[1]||(v[1]=[J("文档首页",-1)])]),_:1}),v[2]||(v[2]=f("span",null,"/",-1)),f("span",null,B(r.value.groupTitle),1)]),f("header",ah,[f("div",null,[f("span",ch,B(r.value.tag),1),f("h1",null,B(r.value.title),1),f("p",null,B(r.value.description),1)]),f("div",uh,[f("span",null,B(r.value.groupTitle),1),f("span",null,B(r.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:o.value},null,8,fh),f("footer",dh,[u.value?(O(),bn(A,{key:0,class:"doc-pager",to:`/docs/${u.value.slug}`},{default:V(()=>[v[3]||(v[3]=f("small",null,"上一篇",-1)),f("strong",null,B(u.value.title),1)]),_:1},8,["to"])):(O(),bn(A,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:V(()=>[...v[4]||(v[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),c.value?(O(),bn(A,{key:2,class:"doc-pager align-right",to:`/docs/${c.value.slug}`},{default:V(()=>[v[5]||(v[5]=f("small",null,"下一篇",-1)),f("strong",null,B(c.value.title),1)]),_:1},8,["to"])):je("",!0)])])):je("",!0),r.value&&l.value.length?(O(),N("aside",ph,[v[6]||(v[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(O(!0),N(ue,null,_e(l.value,_=>(O(),N("button",{key:_.id,class:Be(["docs-outline-link",[`depth-${_.depth}`,{active:s.value===_.id}]]),onClick:S=>g(_.id)},B(_.text),11,hh))),128))])):r.value?je("",!0):(O(),N("section",gh,[f("div",mh,[v[8]||(v[8]=f("strong",null,"没有找到对应文档。",-1)),v[9]||(v[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),F(A,{class:"button primary",to:"/docs"},{default:V(()=>[...v[7]||(v[7]=[J("返回文档首页",-1)])]),_:1})])]))],2)}}},vh={class:"page-shell container"},_h={class:"roadmap-grid"},yh={class:"roadmap-head"},kh={class:"card-label"},wh={class:"roadmap-list"},xh={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(O(),N("div",vh,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",_h,[(O(),N(ue,null,_e(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",yh,[f("span",kh,B(r.tag),1),f("h2",null,B(r.title),1),f("p",null,B(r.description),1)]),f("div",wh,[(O(!0),N(ue,null,_e(r.items,i=>(O(),N("div",{class:"roadmap-item",key:i.title},[f("div",{class:Be(["roadmap-state",r.stateClass])},B(r.stateLabel),3),f("h3",null,B(i.title),1),f("p",null,B(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=Pt('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},Rh={class:"page-shell container"},Th={class:"page-hero"},Ch={class:"hero-actions"},Sh={class:"stack-section surface-card changelog-toolbar"},Ah={class:"release-filter-row"},Eh={class:"filter-chip-group"},Ph=["onClick"],Ih={key:0,class:"stack-section"},Oh={key:1,class:"stack-section changelog-timeline"},$h={class:"timeline-card surface-card"},Mh={class:"release-head"},Nh={class:"release-date"},Lh={class:"release-tag"},Dh={key:0,class:"bullet-list compact-list"},Bh={key:1,class:"release-body"},Wh={class:"release-actions"},Hh=["href"],jh={class:"muted"},Fh={key:2,class:"stack-section"},Gh={__name:"ChangelogPage",setup(e){const t=we(!0),n=we([]),s=we("all"),r=we(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=pe(()=>{const o=r.value.toLowerCase();return pl(n.value).filter(a=>{const u=St(a);return s.value!=="all"&&u!==s.value?!1:o?[a.name,a.tag_name,$n(a.body)].filter(Boolean).join(" ").toLowerCase().includes(o):!0})});return ln(async()=>{const o=await fl();n.value=o.data,t.value=!1}),(o,a)=>{const u=It("router-link");return O(),N("div",Rh,[f("section",Th,[a[3]||(a[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),a[4]||(a[4]=f("h1",null,"更新日志",-1)),a[5]||(a[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",Ch,[a[2]||(a[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),F(u,{class:"button secondary",to:"/downloads"},{default:V(()=>[...a[1]||(a[1]=[J("查看下载页",-1)])]),_:1})])]),f("section",Sh,[a[6]||(a[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Ah,[f("div",Eh,[(O(),N(ue,null,_e(i,c=>f("button",{key:c.value,class:Be(["filter-chip",{active:s.value===c.value}]),onClick:p=>s.value=c.value},B(c.label),11,Ph)),64))]),br(f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[wr,r.value,void 0,{trim:!0}]])])]),t.value?(O(),N("section",Ih,[...a[7]||(a[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):l.value.length?(O(),N("section",Oh,[(O(!0),N(ue,null,_e(l.value,c=>(O(),N("article",{class:"timeline-item",key:c.id||c.tag_name},[a[8]||(a[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",$h,[f("div",Mh,[f("span",{class:Be(["release-badge",{alt:le(St)(c)==="preview"}])},B(le(dl)(le(St)(c))),3),f("span",Nh,B(le(qn)(c.published_at)),1)]),f("h3",null,B(c.name||c.tag_name),1),f("p",Lh,B(c.tag_name),1),le(Ct)(c.body,5).length?(O(),N("ul",Dh,[(O(!0),N(ue,null,_e(le(Ct)(c.body,5),p=>(O(),N("li",{key:p},B(p),1))),128))])):(O(),N("p",Bh,B(le($n)(c.body)||"暂无发布说明。"),1)),f("div",Wh,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Hh),f("span",jh,B((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(O(),N("section",Fh,[...a[9]||(a[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Uh={class:"page-shell container"},zh={class:"stack-section"},Vh={class:"section-head left"},qh={key:0,class:"contributor-grid"},Kh=["href"],Zh=["src","alt"],Jh={key:1,class:"empty-state"},Qh={__name:"CommunityPage",setup(e){const t=we([]),n=we("empty"),s=pe(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return ln(async()=>{const r=await Zf();t.value=r.data,n.value=r.source}),(r,i)=>(O(),N("div",Uh,[i[2]||(i[2]=Pt('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持入口</h1><p> 这里不是单纯放几个链接，而是把项目协作方式、反馈入口、社区沟通与常见问题集中到一个更像正式官网的团队页里。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",zh,[f("div",Vh,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,B(s.value),1)]),t.value.length?(O(),N("div",qh,[(O(!0),N(ue,null,_e(t.value,l=>(O(),N("a",{key:l.login,class:"contributor-card surface-card",href:l.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:l.avatar_url,alt:l.login},null,8,Zh),f("strong",null,B(l.login),1),f("small",null,B(l.contributions)+" 次公开提交",1)],8,Kh))),128))])):(O(),N("div",Jh,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=Pt('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},Yh=[{path:"/",component:Hf,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:Uf,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:Bd,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:Zd,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:bh,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:xh,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:Gh,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:Qh,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],Sl=hf({history:zu("/"),routes:Yh}),Al=qc(ou);Sl.afterEach((e,t)=>{var a,u,c,p;const n="TreeCore 官方网站",s=(a=e.params)!=null&&a.slug?hl[e.params.slug]:null,r=(s==null?void 0:s.title)||((u=e.meta)==null?void 0:u.title),i=(s==null?void 0:s.description)||((c=e.meta)==null?void 0:c.description);document.title=r?`${r} | ${n}`:n;const l=document.querySelector('meta[name="description"]');l&&i&&l.setAttribute("content",i),e.path===t.path&&((p=e.query)==null?void 0:p.section)||window.scrollTo({top:0,behavior:"smooth"})});Al.use(Sl);Al.mount("#app");

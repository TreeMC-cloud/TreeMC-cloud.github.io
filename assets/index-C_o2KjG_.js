var oa=Object.defineProperty;var la=(e,t,n)=>t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>la(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ge={},un=[],pt=()=>{},lo=()=>!1,vs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),vr=e=>e.startsWith("onUpdate:"),Ce=Object.assign,yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},aa=Object.prototype.hasOwnProperty,le=(e,t)=>aa.call(e,t),G=Array.isArray,fn=e=>zn(e)==="[object Map]",ao=e=>zn(e)==="[object Set]",Xr=e=>zn(e)==="[object Date]",V=e=>typeof e=="function",ke=e=>typeof e=="string",ht=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",co=e=>(ae(e)||V(e))&&V(e.then)&&V(e.catch),uo=Object.prototype.toString,zn=e=>uo.call(e),ca=e=>zn(e).slice(8,-1),fo=e=>zn(e)==="[object Object]",_r=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rn=br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ua=/-\w/g,Je=ys(e=>e.replace(ua,t=>t.slice(1).toUpperCase())),fa=/\B([A-Z])/g,Yt=ys(e=>e.replace(fa,"-$1").toLowerCase()),_s=ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ls=ys(e=>e?`on${_s(e)}`:""),Dt=(e,t)=>!Object.is(e,t),Xn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},po=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},kr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},da=e=>{const t=ke(e)?Number(e):NaN;return isNaN(t)?e:t};let ei;const ks=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ke(s)?ma(s):wr(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(ke(e)||ae(e))return e}const pa=/;(?![^(]*\))/g,ha=/:([^]+)/,ga=/\/\*[^]*?\*\//g;function ma(e){const t={};return e.replace(ga,"").split(pa).forEach(n=>{if(n){const s=n.split(ha);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ve(e){let t="";if(ke(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const s=Ve(e[n]);s&&(t+=s+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ba="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",va=br(ba);function ho(e){return!!e||e===""}function ya(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=xr(e[s],t[s]);return n}function xr(e,t){if(e===t)return!0;let n=Xr(e),s=Xr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ht(e),s=ht(t),n||s)return e===t;if(n=G(e),s=G(t),n||s)return n&&s?ya(e,t):!1;if(n=ae(e),s=ae(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!xr(e[o],t[o]))return!1}}return String(e)===String(t)}const go=e=>!!(e&&e.__v_isRef===!0),W=e=>ke(e)?e:e==null?"":G(e)||ae(e)&&(e.toString===uo||!V(e.toString))?go(e)?W(e.value):JSON.stringify(e,mo,2):String(e),mo=(e,t)=>go(t)?mo(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Ns(s,i)+" =>"]=r,n),{})}:ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ns(n))}:ht(t)?Ns(t):ae(t)&&!G(t)&&!fo(t)?String(t):t,Ns=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fe;class _a{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){++this._on===1&&(this.prevScope=Fe,Fe=this)}off(){this._on>0&&--this._on===0&&(Fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ka(){return Fe}let ve;const Ds=new WeakSet;class bo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ds.has(this)&&(Ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),_o(this);const t=ve,n=Xe;ve=this,Xe=!0;try{return this.fn()}finally{ko(this),ve=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rr(t);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ys(this)&&this.run()}get dirty(){return Ys(this)}}let vo=0,Sn,An;function yo(e,t=!1){if(e.flags|=8,t){e.next=An,An=e;return}e.next=Sn,Sn=e}function Cr(){vo++}function Tr(){if(--vo>0)return;if(An){let t=An;for(An=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Sn;){let t=Sn;for(Sn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function _o(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ko(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Rr(s),wa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Ys(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(wo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function wo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ln)||(e.globalVersion=Ln,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ys(e))))return;e.flags|=2;const t=e.dep,n=ve,s=Xe;ve=e,Xe=!0;try{_o(e);const r=e.fn(e._value);(t.version===0||Dt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ve=n,Xe=s,ko(e),e.flags&=-3}}function Rr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const xo=[];function Tt(){xo.push(Xe),Xe=!1}function Rt(){const e=xo.pop();Xe=e===void 0?!0:e}function ti(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ve;ve=void 0;try{t()}finally{ve=n}}}let Ln=0;class xa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!Xe||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new xa(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,Co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=s)}return n}trigger(t){this.version++,Ln++,this.notify(t)}notify(t){Cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tr()}}}function Co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Co(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Xs=new WeakMap,Kt=Symbol(""),er=Symbol(""),Nn=Symbol("");function Ee(e,t,n){if(Xe&&ve){let s=Xs.get(e);s||Xs.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Sr),r.map=s,r.key=n),r.track()}}function kt(e,t,n,s,r,i){const o=Xs.get(e);if(!o){Ln++;return}const l=a=>{a&&a.trigger()};if(Cr(),t==="clear")o.forEach(l);else{const a=G(e),u=a&&_r(n);if(a&&n==="length"){const c=Number(s);o.forEach((d,p)=>{(p==="length"||p===Nn||!ht(p)&&p>=c)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Nn)),t){case"add":a?u&&l(o.get("length")):(l(o.get(Kt)),fn(e)&&l(o.get(er)));break;case"delete":a||(l(o.get(Kt)),fn(e)&&l(o.get(er)));break;case"set":fn(e)&&l(o.get(Kt));break}}Tr()}function sn(e){const t=se(e);return t===e?t:(Ee(t,"iterate",Nn),Ze(e)?t:t.map(tt))}function ws(e){return Ee(e=se(e),"iterate",Nn),e}function Ot(e,t){return St(e)?hn(Zt(e)?tt(t):t):tt(t)}const Ca={__proto__:null,[Symbol.iterator](){return Bs(this,Symbol.iterator,e=>Ot(this,e))},concat(...e){return sn(this).concat(...e.map(t=>G(t)?sn(t):t))},entries(){return Bs(this,"entries",e=>(e[1]=Ot(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>Ot(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>Ot(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>Ot(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ws(this,"includes",e)},indexOf(...e){return Ws(this,"indexOf",e)},join(e){return sn(this).join(e)},lastIndexOf(...e){return Ws(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return vn(this,"pop")},push(...e){return vn(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return vn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return vn(this,"splice",e)},toReversed(){return sn(this).toReversed()},toSorted(e){return sn(this).toSorted(e)},toSpliced(...e){return sn(this).toSpliced(...e)},unshift(...e){return vn(this,"unshift",e)},values(){return Bs(this,"values",e=>Ot(this,e))}};function Bs(e,t,n){const s=ws(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ta=Array.prototype;function mt(e,t,n,s,r,i){const o=ws(e),l=o!==e&&!Ze(e),a=o[t];if(a!==Ta[t]){const d=a.apply(e,i);return l?tt(d):d}let u=n;o!==e&&(l?u=function(d,p){return n.call(this,Ot(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=a.call(o,u,s);return l&&r?r(c):c}function ni(e,t,n,s){const r=ws(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,Ot(e,l),a,e)}),r[t](i,...s)}function Ws(e,t,n){const s=se(e);Ee(s,"iterate",Nn);const r=s[t](...n);return(r===-1||r===!1)&&Pr(n[0])?(n[0]=se(n[0]),s[t](...n)):r}function vn(e,t,n=[]){Tt(),Cr();const s=se(e)[t].apply(e,n);return Tr(),Rt(),s}const Ra=br("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Sa(e){ht(e)||(e=String(e));const t=se(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ro{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Da:Po:i?Eo:Ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=G(t);if(!r){let a;if(o&&(a=Ca[n]))return a;if(n==="hasOwnProperty")return Sa}const l=Reflect.get(t,n,Ie(t)?t:s);if((ht(n)?To.has(n):Ra(n))||(r||Ee(t,"get",n),i))return l;if(Ie(l)){const a=o&&_r(n)?l:l.value;return r&&ae(a)?nr(a):a}return ae(l)?r?nr(l):xs(l):l}}class So extends Ro{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=G(t)&&_r(n);if(!this._isShallow){const u=St(i);if(!Ze(s)&&!St(s)&&(i=se(i),s=se(s)),!o&&Ie(i)&&!Ie(s))return u||(i.value=s),!0}const l=o?Number(n)<t.length:le(t,n),a=Reflect.set(t,n,s,Ie(t)?t:r);return t===se(r)&&(l?Dt(s,i)&&kt(t,"set",n,s):kt(t,"add",n,s)),a}deleteProperty(t,n){const s=le(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&kt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!To.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",G(t)?"length":Kt),Reflect.ownKeys(t)}}class Aa extends Ro{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ea=new So,Pa=new Aa,Ia=new So(!0);const tr=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function Oa(e,t,n){return function(...s){const r=this.__v_raw,i=se(r),o=fn(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=r[e](...s),c=n?tr:t?hn:tt;return!t&&Ee(i,"iterate",a?er:Kt),Ce(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:l?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function Jn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $a(e,t){const n={get(r){const i=this.__v_raw,o=se(i),l=se(r);e||(Dt(r,l)&&Ee(o,"get",r),Ee(o,"get",l));const{has:a}=Zn(o),u=t?tr:e?hn:tt;if(a.call(o,r))return u(i.get(r));if(a.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(se(r),"iterate",Kt),r.size},has(r){const i=this.__v_raw,o=se(i),l=se(r);return e||(Dt(r,l)&&Ee(o,"has",r),Ee(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,a=se(l),u=t?tr:e?hn:tt;return!e&&Ee(a,"iterate",Kt),l.forEach((c,d)=>r.call(i,u(c),u(d),o))}};return Ce(n,e?{add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear")}:{add(r){!t&&!Ze(r)&&!St(r)&&(r=se(r));const i=se(this);return Zn(i).has.call(i,r)||(i.add(r),kt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!St(i)&&(i=se(i));const o=se(this),{has:l,get:a}=Zn(o);let u=l.call(o,r);u||(r=se(r),u=l.call(o,r));const c=a.call(o,r);return o.set(r,i),u?Dt(i,c)&&kt(o,"set",r,i):kt(o,"add",r,i),this},delete(r){const i=se(this),{has:o,get:l}=Zn(i);let a=o.call(i,r);a||(r=se(r),a=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return a&&kt(i,"delete",r,void 0),u},clear(){const r=se(this),i=r.size!==0,o=r.clear();return i&&kt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Oa(r,e,t)}),n}function Ar(e,t){const n=$a(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const Ma={get:Ar(!1,!1)},La={get:Ar(!1,!0)},Na={get:Ar(!0,!1)};const Ao=new WeakMap,Eo=new WeakMap,Po=new WeakMap,Da=new WeakMap;function Ba(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ba(ca(e))}function xs(e){return St(e)?e:Er(e,!1,Ea,Ma,Ao)}function Io(e){return Er(e,!1,Ia,La,Eo)}function nr(e){return Er(e,!0,Pa,Na,Po)}function Er(e,t,n,s,r){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Wa(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Zt(e){return St(e)?Zt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Pr(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Ha(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&po(e,"__v_skip",!0),e}const tt=e=>ae(e)?xs(e):e,hn=e=>ae(e)?nr(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function Se(e){return Oo(e,!1)}function Fa(e){return Oo(e,!0)}function Oo(e,t){return Ie(e)?e:new ja(e,t)}class ja{constructor(t,n){this.dep=new Sr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:tt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||St(t);t=s?t:se(t),Dt(t,n)&&(this._rawValue=t,this._value=s?t:tt(t),this.dep.trigger())}}function de(e){return Ie(e)?e.value:e}const Ua={get:(e,t,n)=>t==="__v_raw"?e:de(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ie(r)&&!Ie(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function $o(e){return Zt(e)?e:new Proxy(e,Ua)}class Ga{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Sr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return yo(this,!0),!0}get value(){const t=this.dep.track();return wo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function za(e,t,n=!1){let s,r;return V(e)?s=e:(s=e.get,r=e.set),new Ga(s,r,n)}const Qn={},os=new WeakMap;let zt;function Va(e,t=!1,n=zt){if(n){let s=os.get(n);s||os.set(n,s=[]),s.push(e)}}function qa(e,t,n=ge){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:a}=n,u=E=>r?E:Ze(E)||r===!1||r===0?wt(E,1):wt(E);let c,d,p,m,_=!1,v=!1;if(Ie(e)?(d=()=>e.value,_=Ze(e)):Zt(e)?(d=()=>u(e),_=!0):G(e)?(v=!0,_=e.some(E=>Zt(E)||Ze(E)),d=()=>e.map(E=>{if(Ie(E))return E.value;if(Zt(E))return u(E);if(V(E))return a?a(E,2):E()})):V(e)?t?d=a?()=>a(e,2):e:d=()=>{if(p){Tt();try{p()}finally{Rt()}}const E=zt;zt=c;try{return a?a(e,3,[m]):e(m)}finally{zt=E}}:d=pt,t&&r){const E=d,Z=r===!0?1/0:r;d=()=>wt(E(),Z)}const A=ka(),y=()=>{c.stop(),A&&A.active&&yr(A.effects,c)};if(i&&t){const E=t;t=(...Z)=>{E(...Z),y()}}let R=v?new Array(e.length).fill(Qn):Qn;const T=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const Z=c.run();if(r||_||(v?Z.some((te,Q)=>Dt(te,R[Q])):Dt(Z,R))){p&&p();const te=zt;zt=c;try{const Q=[Z,R===Qn?void 0:v&&R[0]===Qn?[]:R,m];R=Z,a?a(t,3,Q):t(...Q)}finally{zt=te}}}else c.run()};return l&&l(T),c=new bo(d),c.scheduler=o?()=>o(T,!1):T,m=E=>Va(E,!1,c),p=c.onStop=()=>{const E=os.get(c);if(E){if(a)a(E,4);else for(const Z of E)Z();os.delete(c)}},t?s?T(!0):R=c.run():o?o(T.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ie(e))wt(e.value,t,n);else if(G(e))for(let s=0;s<e.length;s++)wt(e[s],t,n);else if(ao(e)||fn(e))e.forEach(s=>{wt(s,t,n)});else if(fo(e)){for(const s in e)wt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&wt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(e,t,n,s){try{return s?e(...s):e()}catch(r){Cs(r,t,n)}}function nt(e,t,n,s){if(V(e)){const r=Vn(e,t,n,s);return r&&co(r)&&r.catch(i=>{Cs(i,t,n)}),r}if(G(e)){const r=[];for(let i=0;i<e.length;i++)r.push(nt(e[i],t,n,s));return r}}function Cs(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,u)===!1)return}l=l.parent}if(i){Tt(),Vn(i,null,10,[e,a,u]),Rt();return}}Ka(e,n,r,s,o)}function Ka(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let ut=-1;const dn=[];let $t=null,rn=0;const Mo=Promise.resolve();let ls=null;function Dn(e){const t=ls||Mo;return e?t.then(this?e.bind(this):e):t}function Za(e){let t=ut+1,n=Me.length;for(;t<n;){const s=t+n>>>1,r=Me[s],i=Bn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Ir(e){if(!(e.flags&1)){const t=Bn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Bn(n)?Me.push(e):Me.splice(Za(t),0,e),e.flags|=1,Lo()}}function Lo(){ls||(ls=Mo.then(Do))}function Ja(e){G(e)?dn.push(...e):$t&&e.id===-1?$t.splice(rn+1,0,e):e.flags&1||(dn.push(e),e.flags|=1),Lo()}function si(e,t,n=ut+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(e){if(dn.length){const t=[...new Set(dn)].sort((n,s)=>Bn(n)-Bn(s));if(dn.length=0,$t){$t.push(...t);return}for($t=t,rn=0;rn<$t.length;rn++){const n=$t[rn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$t=null,rn=0}}const Bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Do(e){try{for(ut=0;ut<Me.length;ut++){const t=Me[ut];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ut<Me.length;ut++){const t=Me[ut];t&&(t.flags&=-2)}ut=-1,Me.length=0,No(),ls=null,(Me.length||dn.length)&&Do()}}let Ge=null,Bo=null;function as(e){const t=Ge;return Ge=e,Bo=e&&e.type.__scopeId||null,t}function K(e,t=Ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&fs(-1);const i=as(t);let o;try{o=e(...r)}finally{as(i),s._d&&fs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Or(e,t){if(Ge===null)return e;const n=Ps(Ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,a=ge]=t[r];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&wt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function Ft(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(Tt(),nt(a,n,8,[e.el,l,e,t]),Rt())}}function es(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function et(e,t,n=!1){const s=yl();if(s||pn){let r=pn?pn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const Qa=Symbol.for("v-scx"),Ya=()=>et(Qa);function Jt(e,t,n){return Wo(e,t,n)}function Wo(e,t,n=ge){const{immediate:s,deep:r,flush:i,once:o}=n,l=Ce({},n),a=t&&s||!t&&i!=="post";let u;if(Fn){if(i==="sync"){const m=Ya();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=pt,m.resume=pt,m.pause=pt,m}}const c=Pe;l.call=(m,_,v)=>nt(m,c,_,v);let d=!1;i==="post"?l.scheduler=m=>{He(m,c&&c.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,_)=>{_?m():Ir(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=qa(e,t,l);return Fn&&(u?u.push(p):a&&p()),p}function Xa(e,t,n){const s=this.proxy,r=ke(e)?e.includes(".")?Ho(s,e):()=>s[e]:e.bind(s,s);let i;V(t)?i=t:(i=t.handler,n=t);const o=qn(this),l=Wo(r,i.bind(s),n);return o(),l}function Ho(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ec=Symbol("_vte"),Fo=e=>e.__isTeleport,ft=Symbol("_leaveCb"),yn=Symbol("_enterCb");function tc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xt(()=>{e.isMounted=!0}),Ss(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],jo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Uo=e=>{const t=e.subTree;return t.component?Uo(t.component):t},nc={name:"BaseTransition",props:jo,setup(e,{slots:t}){const n=yl(),s=tc();return()=>{const r=t.default&&Vo(t.default(),!0);if(!r||!r.length)return;const i=Go(r),o=se(e),{mode:l}=o;if(s.isLeaving)return Hs(i);const a=ri(i);if(!a)return Hs(i);let u=sr(a,o,s,n,d=>u=d);a.type!==Le&&Wn(a,u);let c=n.subTree&&ri(n.subTree);if(c&&c.type!==Le&&!Vt(c,a)&&Uo(n).type!==Le){let d=sr(c,o,s,n);if(Wn(c,d),l==="out-in"&&a.type!==Le)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},Hs(i);l==="in-out"&&a.type!==Le?d.delayLeave=(p,m,_)=>{const v=zo(s,c);v[String(c.key)]=c,p[ft]=()=>{m(),p[ft]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Go(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Le){t=n;break}}return t}const sc=nc;function zo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function sr(e,t,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:A,onAppear:y,onAfterAppear:R,onAppearCancelled:T}=t,E=String(e.key),Z=zo(n,e),te=(q,ne)=>{q&&nt(q,s,9,ne)},Q=(q,ne)=>{const me=ne[1];te(q,ne),G(q)?q.every(D=>D.length<=1)&&me():q.length<=1&&me()},Ae={mode:o,persisted:l,beforeEnter(q){let ne=a;if(!n.isMounted)if(i)ne=A||a;else return;q[ft]&&q[ft](!0);const me=Z[E];me&&Vt(e,me)&&me.el[ft]&&me.el[ft](),te(ne,[q])},enter(q){if(Z[E]===e)return;let ne=u,me=c,D=d;if(!n.isMounted)if(i)ne=y||u,me=R||c,D=T||d;else return;let re=!1;q[yn]=je=>{re||(re=!0,je?te(D,[q]):te(me,[q]),Ae.delayedLeave&&Ae.delayedLeave(),q[yn]=void 0)};const Te=q[yn].bind(null,!1);ne?Q(ne,[q,Te]):Te()},leave(q,ne){const me=String(e.key);if(q[yn]&&q[yn](!0),n.isUnmounting)return ne();te(p,[q]);let D=!1;q[ft]=Te=>{D||(D=!0,ne(),Te?te(v,[q]):te(_,[q]),q[ft]=void 0,Z[me]===e&&delete Z[me])};const re=q[ft].bind(null,!1);Z[me]=e,m?Q(m,[q,re]):re()},clone(q){const ne=sr(q,t,n,s,r);return r&&r(ne),ne}};return Ae}function Hs(e){if(Ts(e))return e=Bt(e),e.children=null,e}function ri(e){if(!Ts(e))return Fo(e.type)&&e.children?Go(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Wn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Wn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vo(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===pe?(o.patchFlag&128&&r++,s=s.concat(Vo(o.children,t,l))):(t||o.type!==Le)&&s.push(l!=null?Bt(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function qo(e,t){return V(e)?Ce({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ii(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const cs=new WeakMap;function En(e,t,n,s,r=!1){if(G(e)){e.forEach((v,A)=>En(v,t&&(G(t)?t[A]:t),n,s,r));return}if(Pn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&En(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Ps(s.component):s.el,o=r?null:i,{i:l,r:a}=e,u=t&&t.r,c=l.refs===ge?l.refs={}:l.refs,d=l.setupState,p=se(d),m=d===ge?lo:v=>ii(c,v)?!1:le(p,v),_=(v,A)=>!(A&&ii(c,A));if(u!=null&&u!==a){if(oi(t),ke(u))c[u]=null,m(u)&&(d[u]=null);else if(Ie(u)){const v=t;_(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(V(a))Vn(a,l,12,[o,c]);else{const v=ke(a),A=Ie(a);if(v||A){const y=()=>{if(e.f){const R=v?m(a)?d[a]:c[a]:_()||!e.k?a.value:c[e.k];if(r)G(R)&&yr(R,i);else if(G(R))R.includes(i)||R.push(i);else if(v)c[a]=[i],m(a)&&(d[a]=c[a]);else{const T=[i];_(a,e.k)&&(a.value=T),e.k&&(c[e.k]=T)}}else v?(c[a]=o,m(a)&&(d[a]=o)):A&&(_(a,e.k)&&(a.value=o),e.k&&(c[e.k]=o))};if(o){const R=()=>{y(),cs.delete(e)};R.id=-1,cs.set(e,R),He(R,n)}else oi(e),y()}}}function oi(e){const t=cs.get(e);t&&(t.flags|=8,cs.delete(e))}ks().requestIdleCallback;ks().cancelIdleCallback;const Pn=e=>!!e.type.__asyncLoader,Ts=e=>e.type.__isKeepAlive;function rc(e,t){Zo(e,"a",t)}function ic(e,t){Zo(e,"da",t)}function Zo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Rs(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ts(r.parent.vnode)&&oc(s,t,n,r),r=r.parent}}function oc(e,t,n,s){const r=Rs(t,e,s,!0);Jo(()=>{yr(s[t],r)},n)}function Rs(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Tt();const l=qn(n),a=nt(t,n,e,o);return l(),Rt(),a});return s?r.unshift(i):r.push(i),i}}const At=e=>(t,n=Pe)=>{(!Fn||e==="sp")&&Rs(e,(...s)=>t(...s),n)},lc=At("bm"),Xt=At("m"),ac=At("bu"),cc=At("u"),Ss=At("bum"),Jo=At("um"),uc=At("sp"),fc=At("rtg"),dc=At("rtc");function pc(e,t=Pe){Rs("ec",e,t)}const Qo="components";function Wt(e,t){return Xo(Qo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function hc(e){return ke(e)?Xo(Qo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=Ge||Pe;if(r){const i=r.type;{const l=Yc(i,!1);if(l&&(l===t||l===Je(t)||l===_s(Je(t))))return i}const o=li(r[e]||i[e],t)||li(r.appContext[e],t);return!o&&s?i:o}}function li(e,t){return e&&(e[t]||e[Je(t)]||e[_s(Je(t))])}function Re(e,t,n,s){let r;const i=n,o=G(e);if(o||ke(e)){const l=o&&Zt(e);let a=!1,u=!1;l&&(a=!Ze(e),u=St(e),e=ws(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(a?u?hn(tt(e[c])):tt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(ae(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];r[a]=t(e[c],c,a,i)}}else r=[];return r}const rr=e=>e?_l(e)?Ps(e):rr(e.parent):null,In=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rr(e.parent),$root:e=>rr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>tl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ir(e.update)}),$nextTick:e=>e.n||(e.n=Dn.bind(e.proxy)),$watch:e=>Xa.bind(e)}),Fs=(e,t)=>e!==ge&&!e.__isScriptSetup&&le(e,t),gc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Fs(s,t))return o[t]=1,s[t];if(r!==ge&&le(r,t))return o[t]=2,r[t];if(le(i,t))return o[t]=3,i[t];if(n!==ge&&le(n,t))return o[t]=4,n[t];ir&&(o[t]=0)}}const u=In[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==ge&&le(n,t))return o[t]=4,n[t];if(d=a.config.globalProperties,le(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Fs(r,t)?(r[t]=n,!0):s!==ge&&le(s,t)?(s[t]=n,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let a;return!!(n[l]||e!==ge&&l[0]!=="$"&&le(e,l)||Fs(t,l)||le(i,l)||le(s,l)||le(In,l)||le(r.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ir=!0;function mc(e){const t=tl(e),n=e.proxy,s=e.ctx;ir=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:_,activated:v,deactivated:A,beforeDestroy:y,beforeUnmount:R,destroyed:T,unmounted:E,render:Z,renderTracked:te,renderTriggered:Q,errorCaptured:Ae,serverPrefetch:q,expose:ne,inheritAttrs:me,components:D,directives:re,filters:Te}=t;if(u&&bc(u,s,null),o)for(const fe in o){const ie=o[fe];V(ie)&&(s[fe]=ie.bind(n))}if(r){const fe=r.call(n,n);ae(fe)&&(e.data=xs(fe))}if(ir=!0,i)for(const fe in i){const ie=i[fe],gt=V(ie)?ie.bind(n,n):V(ie.get)?ie.get.bind(n,n):pt,Et=!V(ie)&&V(ie.set)?ie.set.bind(n):pt,rt=ye({get:gt,set:Et});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>rt.value,set:De=>rt.value=De})}if(l)for(const fe in l)el(l[fe],s,n,fe);if(a){const fe=V(a)?a.call(n):a;Reflect.ownKeys(fe).forEach(ie=>{es(ie,fe[ie])})}c&&ci(c,e,"c");function we(fe,ie){G(ie)?ie.forEach(gt=>fe(gt.bind(n))):ie&&fe(ie.bind(n))}if(we(lc,d),we(Xt,p),we(ac,m),we(cc,_),we(rc,v),we(ic,A),we(pc,Ae),we(dc,te),we(fc,Q),we(Ss,R),we(Jo,E),we(uc,q),G(ne))if(ne.length){const fe=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(fe,ie,{get:()=>n[ie],set:gt=>n[ie]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===pt&&(e.render=Z),me!=null&&(e.inheritAttrs=me),D&&(e.components=D),re&&(e.directives=re),q&&Ko(e)}function bc(e,t,n=pt){G(e)&&(e=or(e));for(const s in e){const r=e[s];let i;ae(r)?"default"in r?i=et(r.from||s,r.default,!0):i=et(r.from||s):i=et(r),Ie(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ci(e,t,n){nt(G(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function el(e,t,n,s){let r=s.includes(".")?Ho(n,s):()=>n[s];if(ke(e)){const i=t[e];V(i)&&Jt(r,i)}else if(V(e))Jt(r,e.bind(n));else if(ae(e))if(G(e))e.forEach(i=>el(i,t,n,s));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&Jt(r,i,e)}}function tl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>us(a,u,o,!0)),us(a,t,o)),ae(t)&&i.set(t,a),a}function us(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&us(e,i,n,!0),r&&r.forEach(o=>us(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=vc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const vc={data:ui,props:fi,emits:fi,methods:Tn,computed:Tn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Tn,directives:Tn,watch:_c,provide:ui,inject:yc};function ui(e,t){return t?e?function(){return Ce(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function yc(e,t){return Tn(or(e),or(t))}function or(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Tn(e,t){return e?Ce(Object.create(null),e,t):t}function fi(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:Ce(Object.create(null),ai(e),ai(t??{})):t}function _c(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const s in t)n[s]=Oe(e[s],t[s]);return n}function nl(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kc=0;function wc(e,t){return function(s,r=null){V(s)||(s=Ce({},s)),r!=null&&!ae(r)&&(r=null);const i=nl(),o=new WeakSet,l=[];let a=!1;const u=i.app={_uid:kc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:eu,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(u,...d)):V(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!a){const m=u._ceVNode||j(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),a=!0,u._container=c,c.__vue_app__=u,Ps(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(nt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=pn;pn=u;try{return c()}finally{pn=d}}};return u}}let pn=null;const xc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function Cc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ge;let r=n;const i=t.startsWith("update:"),o=i&&xc(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>ke(c)?c.trim():c)),o.number&&(r=n.map(kr)));let l,a=s[l=Ls(t)]||s[l=Ls(Je(t))];!a&&i&&(a=s[l=Ls(Yt(t))]),a&&nt(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,nt(u,e,6,r)}}const Tc=new WeakMap;function sl(e,t,n=!1){const s=n?Tc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!V(e)){const a=u=>{const c=sl(u,t,!0);c&&(l=!0,Ce(o,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(ae(e)&&s.set(e,null),null):(G(i)?i.forEach(a=>o[a]=null):Ce(o,i),ae(e)&&s.set(e,o),o)}function As(e,t){return!e||!vs(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Yt(t))||le(e,t))}function di(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:a,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:_,inheritAttrs:v}=e,A=as(e);let y,R;try{if(n.shapeFlag&4){const E=r||s,Z=E;y=dt(u.call(Z,E,c,d,m,p,_)),R=l}else{const E=t;y=dt(E.length>1?E(d,{attrs:l,slots:o,emit:a}):E(d,null)),R=t.props?l:Rc(l)}}catch(E){On.length=0,Cs(E,e,1),y=j(Le)}let T=y;if(R&&v!==!1){const E=Object.keys(R),{shapeFlag:Z}=T;E.length&&Z&7&&(i&&E.some(vr)&&(R=Sc(R,i)),T=Bt(T,R,!1,!0))}return n.dirs&&(T=Bt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Wn(T,n.transition),y=T,as(A),y}const Rc=e=>{let t;for(const n in e)(n==="class"||n==="style"||vs(n))&&((t||(t={}))[n]=e[n]);return t},Sc=(e,t)=>{const n={};for(const s in e)(!vr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ac(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?pi(s,o,u):!!o;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(rl(o,s,p)&&!As(u,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?pi(s,o,u):!0:!!o;return!1}function pi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(rl(t,e,i)&&!As(n,i))return!0}return!1}function rl(e,t,n){const s=e[n],r=t[n];return n==="style"&&ae(s)&&ae(r)?!xr(s,r):s!==r}function Ec({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const il={},ol=()=>Object.create(il),ll=e=>Object.getPrototypeOf(e)===il;function Pc(e,t,n,s=!1){const r={},i=ol();e.propsDefaults=Object.create(null),al(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Io(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Ic(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=se(r),[a]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(As(e.emitsOptions,p))continue;const m=t[p];if(a)if(le(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const _=Je(p);r[_]=lr(a,l,_,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{al(e,t,r,i)&&(u=!0);let c;for(const d in l)(!t||!le(t,d)&&((c=Yt(d))===d||!le(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=lr(a,l,d,void 0,e,!0)):delete r[d]);if(i!==l)for(const d in i)(!t||!le(t,d))&&(delete i[d],u=!0)}u&&kt(e.attrs,"set","")}function al(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Rn(a))continue;const u=t[a];let c;r&&le(r,c=Je(a))?!i||!i.includes(c)?n[c]=u:(l||(l={}))[c]=u:As(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(i){const a=se(n),u=l||ge;for(let c=0;c<i.length;c++){const d=i[c];n[d]=lr(r,a,d,u[d],e,!le(u,d))}}return o}function lr(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=le(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=qn(r);s=u[n]=a.call(null,t),c()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}const Oc=new WeakMap;function cl(e,t,n=!1){const s=n?Oc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!V(e)){const c=d=>{a=!0;const[p,m]=cl(d,t,!0);Ce(o,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return ae(e)&&s.set(e,un),un;if(G(i))for(let c=0;c<i.length;c++){const d=Je(i[c]);hi(d)&&(o[d]=ge)}else if(i)for(const c in i){const d=Je(c);if(hi(d)){const p=i[c],m=o[d]=G(p)||V(p)?{type:p}:Ce({},p),_=m.type;let v=!1,A=!0;if(G(_))for(let y=0;y<_.length;++y){const R=_[y],T=V(R)&&R.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(A=!1)}else v=V(_)&&_.name==="Boolean";m[0]=v,m[1]=A,(v||le(m,"default"))&&l.push(d)}}const u=[o,l];return ae(e)&&s.set(e,u),u}function hi(e){return e[0]!=="$"&&!Rn(e)}const $r=e=>e==="_"||e==="_ctx"||e==="$stable",Mr=e=>G(e)?e.map(dt):[dt(e)],$c=(e,t,n)=>{if(t._n)return t;const s=K((...r)=>Mr(t(...r)),n);return s._c=!1,s},ul=(e,t,n)=>{const s=e._ctx;for(const r in e){if($r(r))continue;const i=e[r];if(V(i))t[r]=$c(r,i,s);else if(i!=null){const o=Mr(i);t[r]=()=>o}}},fl=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const s in t)(n||!$r(s))&&(e[s]=t[s])},Mc=(e,t,n)=>{const s=e.slots=ol();if(e.vnode.shapeFlag&32){const r=t._;r?(dl(s,t,n),n&&po(s,"_",r,!0)):ul(t,s)}else t&&fl(e,t)},Lc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ge;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:dl(r,t,n):(i=!t.$stable,ul(t,r)),o=t}else t&&(fl(e,t),o={default:1});if(i)for(const l in r)!$r(l)&&o[l]==null&&delete r[l]},He=Hc;function Nc(e){return Dc(e)}function Dc(e,t){const n=ks();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=pt,insertStaticContent:_}=e,v=(h,g,b,k=null,C=null,w=null,$=void 0,I=null,P=!!g.dynamicChildren)=>{if(h===g)return;h&&!Vt(h,g)&&(k=x(h),De(h,C,w,!0),h=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:S,ref:U,shapeFlag:N}=g;switch(S){case Es:A(h,g,b,k);break;case Le:y(h,g,b,k);break;case ts:h==null&&R(g,b,k,$);break;case pe:D(h,g,b,k,C,w,$,I,P);break;default:N&1?Z(h,g,b,k,C,w,$,I,P):N&6?re(h,g,b,k,C,w,$,I,P):(N&64||N&128)&&S.process(h,g,b,k,C,w,$,I,P,H)}U!=null&&C?En(U,h&&h.ref,w,g||h,!g):U==null&&h&&h.ref!=null&&En(h.ref,null,w,h,!0)},A=(h,g,b,k)=>{if(h==null)s(g.el=l(g.children),b,k);else{const C=g.el=h.el;g.children!==h.children&&u(C,g.children)}},y=(h,g,b,k)=>{h==null?s(g.el=a(g.children||""),b,k):g.el=h.el},R=(h,g,b,k)=>{[h.el,h.anchor]=_(h.children,g,b,k,h.el,h.anchor)},T=({el:h,anchor:g},b,k)=>{let C;for(;h&&h!==g;)C=p(h),s(h,b,k),h=C;s(g,b,k)},E=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},Z=(h,g,b,k,C,w,$,I,P)=>{if(g.type==="svg"?$="svg":g.type==="math"&&($="mathml"),h==null)te(g,b,k,C,w,$,I,P);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),q(h,g,C,w,$,I,P)}finally{S&&S._endPatch()}}},te=(h,g,b,k,C,w,$,I)=>{let P,S;const{props:U,shapeFlag:N,transition:F,dirs:z}=h;if(P=h.el=o(h.type,w,U&&U.is,U),N&8?c(P,h.children):N&16&&Ae(h.children,P,null,k,C,js(h,w),$,I),z&&Ft(h,null,k,"created"),Q(P,h,h.scopeId,$,k),U){for(const be in U)be!=="value"&&!Rn(be)&&i(P,be,null,U[be],w,k);"value"in U&&i(P,"value",null,U.value,w),(S=U.onVnodeBeforeMount)&&at(S,k,h)}z&&Ft(h,null,k,"beforeMount");const X=Bc(C,F);X&&F.beforeEnter(P),s(P,g,b),((S=U&&U.onVnodeMounted)||X||z)&&He(()=>{S&&at(S,k,h),X&&F.enter(P),z&&Ft(h,null,k,"mounted")},C)},Q=(h,g,b,k,C)=>{if(b&&m(h,b),k)for(let w=0;w<k.length;w++)m(h,k[w]);if(C){let w=C.subTree;if(g===w||ml(w.type)&&(w.ssContent===g||w.ssFallback===g)){const $=C.vnode;Q(h,$,$.scopeId,$.slotScopeIds,C.parent)}}},Ae=(h,g,b,k,C,w,$,I,P=0)=>{for(let S=P;S<h.length;S++){const U=h[S]=I?_t(h[S]):dt(h[S]);v(null,U,g,b,k,C,w,$,I)}},q=(h,g,b,k,C,w,$)=>{const I=g.el=h.el;let{patchFlag:P,dynamicChildren:S,dirs:U}=g;P|=h.patchFlag&16;const N=h.props||ge,F=g.props||ge;let z;if(b&&jt(b,!1),(z=F.onVnodeBeforeUpdate)&&at(z,b,g,h),U&&Ft(g,h,b,"beforeUpdate"),b&&jt(b,!0),(N.innerHTML&&F.innerHTML==null||N.textContent&&F.textContent==null)&&c(I,""),S?ne(h.dynamicChildren,S,I,b,k,js(g,C),w):$||ie(h,g,I,null,b,k,js(g,C),w,!1),P>0){if(P&16)me(I,N,F,b,C);else if(P&2&&N.class!==F.class&&i(I,"class",null,F.class,C),P&4&&i(I,"style",N.style,F.style,C),P&8){const X=g.dynamicProps;for(let be=0;be<X.length;be++){const ue=X[be],Be=N[ue],We=F[ue];(We!==Be||ue==="value")&&i(I,ue,Be,We,C,b)}}P&1&&h.children!==g.children&&c(I,g.children)}else!$&&S==null&&me(I,N,F,b,C);((z=F.onVnodeUpdated)||U)&&He(()=>{z&&at(z,b,g,h),U&&Ft(g,h,b,"updated")},k)},ne=(h,g,b,k,C,w,$)=>{for(let I=0;I<g.length;I++){const P=h[I],S=g[I],U=P.el&&(P.type===pe||!Vt(P,S)||P.shapeFlag&198)?d(P.el):b;v(P,S,U,null,k,C,w,$,!0)}},me=(h,g,b,k,C)=>{if(g!==b){if(g!==ge)for(const w in g)!Rn(w)&&!(w in b)&&i(h,w,g[w],null,C,k);for(const w in b){if(Rn(w))continue;const $=b[w],I=g[w];$!==I&&w!=="value"&&i(h,w,I,$,C,k)}"value"in b&&i(h,"value",g.value,b.value,C)}},D=(h,g,b,k,C,w,$,I,P)=>{const S=g.el=h?h.el:l(""),U=g.anchor=h?h.anchor:l("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:z}=g;z&&(I=I?I.concat(z):z),h==null?(s(S,b,k),s(U,b,k),Ae(g.children||[],b,U,C,w,$,I,P)):N>0&&N&64&&F&&h.dynamicChildren&&h.dynamicChildren.length===F.length?(ne(h.dynamicChildren,F,b,C,w,$,I),(g.key!=null||C&&g===C.subTree)&&pl(h,g,!0)):ie(h,g,b,U,C,w,$,I,P)},re=(h,g,b,k,C,w,$,I,P)=>{g.slotScopeIds=I,h==null?g.shapeFlag&512?C.ctx.activate(g,b,k,$,P):Te(g,b,k,C,w,$,P):je(h,g,P)},Te=(h,g,b,k,C,w,$)=>{const I=h.component=qc(h,k,C);if(Ts(h)&&(I.ctx.renderer=H),Kc(I,!1,$),I.asyncDep){if(C&&C.registerDep(I,we,$),!h.el){const P=I.subTree=j(Le);y(null,P,g,b),h.placeholder=P.el}}else we(I,h,g,b,C,w,$)},je=(h,g,b)=>{const k=g.component=h.component;if(Ac(h,g,b))if(k.asyncDep&&!k.asyncResolved){fe(k,g,b);return}else k.next=g,k.update();else g.el=h.el,k.vnode=g},we=(h,g,b,k,C,w,$)=>{const I=()=>{if(h.isMounted){let{next:N,bu:F,u:z,parent:X,vnode:be}=h;{const ot=hl(h);if(ot){N&&(N.el=be.el,fe(h,N,$)),ot.asyncDep.then(()=>{He(()=>{h.isUnmounted||S()},C)});return}}let ue=N,Be;jt(h,!1),N?(N.el=be.el,fe(h,N,$)):N=be,F&&Xn(F),(Be=N.props&&N.props.onVnodeBeforeUpdate)&&at(Be,X,N,be),jt(h,!0);const We=di(h),it=h.subTree;h.subTree=We,v(it,We,d(it.el),x(it),h,C,w),N.el=We.el,ue===null&&Ec(h,We.el),z&&He(z,C),(Be=N.props&&N.props.onVnodeUpdated)&&He(()=>at(Be,X,N,be),C)}else{let N;const{el:F,props:z}=g,{bm:X,m:be,parent:ue,root:Be,type:We}=h,it=Pn(g);jt(h,!1),X&&Xn(X),!it&&(N=z&&z.onVnodeBeforeMount)&&at(N,ue,g),jt(h,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(We);const ot=h.subTree=di(h);v(null,ot,b,k,h,C,w),g.el=ot.el}if(be&&He(be,C),!it&&(N=z&&z.onVnodeMounted)){const ot=g;He(()=>at(N,ue,ot),C)}(g.shapeFlag&256||ue&&Pn(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&He(h.a,C),h.isMounted=!0,g=b=k=null}};h.scope.on();const P=h.effect=new bo(I);h.scope.off();const S=h.update=P.run.bind(P),U=h.job=P.runIfDirty.bind(P);U.i=h,U.id=h.uid,P.scheduler=()=>Ir(U),jt(h,!0),S()},fe=(h,g,b)=>{g.component=h;const k=h.vnode.props;h.vnode=g,h.next=null,Ic(h,g.props,k,b),Lc(h,g.children,b),Tt(),si(h),Rt()},ie=(h,g,b,k,C,w,$,I,P=!1)=>{const S=h&&h.children,U=h?h.shapeFlag:0,N=g.children,{patchFlag:F,shapeFlag:z}=g;if(F>0){if(F&128){Et(S,N,b,k,C,w,$,I,P);return}else if(F&256){gt(S,N,b,k,C,w,$,I,P);return}}z&8?(U&16&&qe(S,C,w),N!==S&&c(b,N)):U&16?z&16?Et(S,N,b,k,C,w,$,I,P):qe(S,C,w,!0):(U&8&&c(b,""),z&16&&Ae(N,b,k,C,w,$,I,P))},gt=(h,g,b,k,C,w,$,I,P)=>{h=h||un,g=g||un;const S=h.length,U=g.length,N=Math.min(S,U);let F;for(F=0;F<N;F++){const z=g[F]=P?_t(g[F]):dt(g[F]);v(h[F],z,b,null,C,w,$,I,P)}S>U?qe(h,C,w,!0,!1,N):Ae(g,b,k,C,w,$,I,P,N)},Et=(h,g,b,k,C,w,$,I,P)=>{let S=0;const U=g.length;let N=h.length-1,F=U-1;for(;S<=N&&S<=F;){const z=h[S],X=g[S]=P?_t(g[S]):dt(g[S]);if(Vt(z,X))v(z,X,b,null,C,w,$,I,P);else break;S++}for(;S<=N&&S<=F;){const z=h[N],X=g[F]=P?_t(g[F]):dt(g[F]);if(Vt(z,X))v(z,X,b,null,C,w,$,I,P);else break;N--,F--}if(S>N){if(S<=F){const z=F+1,X=z<U?g[z].el:k;for(;S<=F;)v(null,g[S]=P?_t(g[S]):dt(g[S]),b,X,C,w,$,I,P),S++}}else if(S>F)for(;S<=N;)De(h[S],C,w,!0),S++;else{const z=S,X=S,be=new Map;for(S=X;S<=F;S++){const Ue=g[S]=P?_t(g[S]):dt(g[S]);Ue.key!=null&&be.set(Ue.key,S)}let ue,Be=0;const We=F-X+1;let it=!1,ot=0;const bn=new Array(We);for(S=0;S<We;S++)bn[S]=0;for(S=z;S<=N;S++){const Ue=h[S];if(Be>=We){De(Ue,C,w,!0);continue}let lt;if(Ue.key!=null)lt=be.get(Ue.key);else for(ue=X;ue<=F;ue++)if(bn[ue-X]===0&&Vt(Ue,g[ue])){lt=ue;break}lt===void 0?De(Ue,C,w,!0):(bn[lt-X]=S+1,lt>=ot?ot=lt:it=!0,v(Ue,g[lt],b,null,C,w,$,I,P),Be++)}const Jr=it?Wc(bn):un;for(ue=Jr.length-1,S=We-1;S>=0;S--){const Ue=X+S,lt=g[Ue],Qr=g[Ue+1],Yr=Ue+1<U?Qr.el||gl(Qr):k;bn[S]===0?v(null,lt,b,Yr,C,w,$,I,P):it&&(ue<0||S!==Jr[ue]?rt(lt,b,Yr,2):ue--)}}},rt=(h,g,b,k,C=null)=>{const{el:w,type:$,transition:I,children:P,shapeFlag:S}=h;if(S&6){rt(h.component.subTree,g,b,k);return}if(S&128){h.suspense.move(g,b,k);return}if(S&64){$.move(h,g,b,H);return}if($===pe){s(w,g,b);for(let N=0;N<P.length;N++)rt(P[N],g,b,k);s(h.anchor,g,b);return}if($===ts){T(h,g,b);return}if(k!==2&&S&1&&I)if(k===0)I.beforeEnter(w),s(w,g,b),He(()=>I.enter(w),C);else{const{leave:N,delayLeave:F,afterLeave:z}=I,X=()=>{h.ctx.isUnmounted?r(w):s(w,g,b)},be=()=>{w._isLeaving&&w[ft](!0),N(w,()=>{X(),z&&z()})};F?F(w,X,be):be()}else s(w,g,b)},De=(h,g,b,k=!1,C=!1)=>{const{type:w,props:$,ref:I,children:P,dynamicChildren:S,shapeFlag:U,patchFlag:N,dirs:F,cacheIndex:z}=h;if(N===-2&&(C=!1),I!=null&&(Tt(),En(I,null,b,h,!0),Rt()),z!=null&&(g.renderCache[z]=void 0),U&256){g.ctx.deactivate(h);return}const X=U&1&&F,be=!Pn(h);let ue;if(be&&(ue=$&&$.onVnodeBeforeUnmount)&&at(ue,g,h),U&6)Ht(h.component,b,k);else{if(U&128){h.suspense.unmount(b,k);return}X&&Ft(h,null,g,"beforeUnmount"),U&64?h.type.remove(h,g,b,H,k):S&&!S.hasOnce&&(w!==pe||N>0&&N&64)?qe(S,g,b,!1,!0):(w===pe&&N&384||!C&&U&16)&&qe(P,g,b),k&&tn(h)}(be&&(ue=$&&$.onVnodeUnmounted)||X)&&He(()=>{ue&&at(ue,g,h),X&&Ft(h,null,g,"unmounted")},b)},tn=h=>{const{type:g,el:b,anchor:k,transition:C}=h;if(g===pe){nn(b,k);return}if(g===ts){E(h);return}const w=()=>{r(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:$,delayLeave:I}=C,P=()=>$(b,w);I?I(h.el,w,P):P()}else w()},nn=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},Ht=(h,g,b)=>{const{bum:k,scope:C,job:w,subTree:$,um:I,m:P,a:S}=h;gi(P),gi(S),k&&Xn(k),C.stop(),w&&(w.flags|=8,De($,h,g,b)),I&&He(I,g),He(()=>{h.isUnmounted=!0},g)},qe=(h,g,b,k=!1,C=!1,w=0)=>{for(let $=w;$<h.length;$++)De(h[$],g,b,k,C)},x=h=>{if(h.shapeFlag&6)return x(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[ec];return b?p(b):g};let B=!1;const M=(h,g,b)=>{let k;h==null?g._vnode&&(De(g._vnode,null,null,!0),k=g._vnode.component):v(g._vnode||null,h,g,null,null,null,b),g._vnode=h,B||(B=!0,si(k),No(),B=!1)},H={p:v,um:De,m:rt,r:tn,mt:Te,mc:Ae,pc:ie,pbc:ne,n:x,o:e};return{render:M,hydrate:void 0,createApp:wc(M)}}function js({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pl(e,t,n=!1){const s=e.children,r=t.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=_t(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&pl(o,l)),l.type===Es&&(l.patchFlag===-1&&(l=r[i]=_t(l)),l.el=o.el),l.type===Le&&!l.el&&(l.el=o.el)}}function Wc(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function hl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hl(t)}function gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function gl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?gl(t.subTree):null}const ml=e=>e.__isSuspense;function Hc(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):Ja(e)}const pe=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),ts=Symbol.for("v-stc"),On=[];let ze=null;function O(e=!1){On.push(ze=e?null:[])}function Fc(){On.pop(),ze=On[On.length-1]||null}let Hn=1;function fs(e,t=!1){Hn+=e,e<0&&ze&&t&&(ze.hasOnce=!0)}function bl(e){return e.dynamicChildren=Hn>0?ze||un:null,Fc(),Hn>0&&ze&&ze.push(e),e}function L(e,t,n,s,r,i){return bl(f(e,t,n,s,r,i,!0))}function an(e,t,n,s,r){return bl(j(e,t,n,s,r,!0))}function ds(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const vl=({key:e})=>e??null,ns=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Ie(e)||V(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===pe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vl(t),ref:t&&ns(t),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return l?(Lr(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=ke(n)?8:16),Hn>0&&!o&&ze&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ze.push(a),a}const j=jc;function jc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Yo)&&(e=Le),ds(e)){const l=Bt(e,t,!0);return n&&Lr(l,n),Hn>0&&!i&&ze&&(l.shapeFlag&6?ze[ze.indexOf(e)]=l:ze.push(l)),l.patchFlag=-2,l}if(Xc(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:l,style:a}=t;l&&!ke(l)&&(t.class=Ve(l)),ae(a)&&(Pr(a)&&!G(a)&&(a=Ce({},a)),t.style=wr(a))}const o=ke(e)?1:ml(e)?128:Fo(e)?64:ae(e)?4:V(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function Uc(e){return e?Pr(e)||ll(e)?Ce({},e):e:null}function Bt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:a}=e,u=t?Gc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&vl(u),ref:t&&t.ref?n&&i?G(i)?i.concat(ns(t)):[i,ns(t)]:ns(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Wn(c,a.clone(c)),c}function J(e=" ",t=0){return j(Es,null,e,t)}function Ye(e,t){const n=j(ts,null,e);return n.staticCount=t,n}function Qe(e="",t=!1){return t?(O(),an(Le,null,e)):j(Le,null,e)}function dt(e){return e==null||typeof e=="boolean"?j(Le):G(e)?j(pe,null,e.slice()):ds(e)?_t(e):j(Es,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Lr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Lr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ll(t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[J(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ve([t.class,s.class]));else if(r==="style")t.style=wr([t.style,s.style]);else if(vs(r)){const i=t[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function at(e,t,n,s=null){nt(e,t,7,[n,s])}const zc=nl();let Vc=0;function qc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||zc,i={uid:Vc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cl(s,r),emitsOptions:sl(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const yl=()=>Pe||Ge;let ps,ar;{const e=ks(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ps=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),ar=t("__VUE_SSR_SETTERS__",n=>Fn=n)}const qn=e=>{const t=Pe;return ps(e),e.scope.on(),()=>{e.scope.off(),ps(t)}},mi=()=>{Pe&&Pe.scope.off(),ps(null)};function _l(e){return e.vnode.shapeFlag&4}let Fn=!1;function Kc(e,t=!1,n=!1){t&&ar(t);const{props:s,children:r}=e.vnode,i=_l(e);Pc(e,s,i,t),Mc(e,r,n||t);const o=i?Zc(e,t):void 0;return t&&ar(!1),o}function Zc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gc);const{setup:s}=n;if(s){Tt();const r=e.setupContext=s.length>1?Qc(e):null,i=qn(e),o=Vn(s,e,0,[e.props,r]),l=co(o);if(Rt(),i(),(l||e.sp)&&!Pn(e)&&Ko(e),l){if(o.then(mi,mi),t)return o.then(a=>{bi(e,a)}).catch(a=>{Cs(a,e,0)});e.asyncDep=o}else bi(e,o)}else kl(e)}function bi(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=$o(t)),kl(e)}function kl(e,t,n){const s=e.type;e.render||(e.render=s.render||pt);{const r=qn(e);Tt();try{mc(e)}finally{Rt(),r()}}}const Jc={get(e,t){return Ee(e,"get",""),e[t]}};function Qc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Jc),slots:e.slots,emit:e.emit,expose:t}}function Ps(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($o(Ha(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in In)return In[n](e)},has(t,n){return n in t||n in In}})):e.proxy}function Yc(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Xc(e){return V(e)&&"__vccOpts"in e}const ye=(e,t)=>za(e,t,Fn);function Nr(e,t,n){try{fs(-1);const s=arguments.length;return s===2?ae(t)&&!G(t)?ds(t)?j(e,null,[t]):j(e,t):j(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ds(n)&&(n=[n]),j(e,t,n))}finally{fs(1)}}const eu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cr;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{cr=vi.createPolicy("vue",{createHTML:e=>e})}catch{}const wl=cr?e=>cr.createHTML(e):e=>e,tu="http://www.w3.org/2000/svg",nu="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,yi=yt&&yt.createElement("template"),su={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?yt.createElementNS(tu,e):t==="mathml"?yt.createElementNS(nu,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{yi.innerHTML=wl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=yi.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",_n="animation",jn=Symbol("_vtc"),xl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ru=Ce({},jo,xl),iu=e=>(e.displayName="Transition",e.props=ru,e),ou=iu((e,{slots:t})=>Nr(sc,lu(e),t)),Ut=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},_i=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function lu(e){const t={};for(const D in e)D in xl||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,_=au(r),v=_&&_[0],A=_&&_[1],{onBeforeEnter:y,onEnter:R,onEnterCancelled:T,onLeave:E,onLeaveCancelled:Z,onBeforeAppear:te=y,onAppear:Q=R,onAppearCancelled:Ae=T}=t,q=(D,re,Te,je)=>{D._enterCancelled=je,Gt(D,re?c:l),Gt(D,re?u:o),Te&&Te()},ne=(D,re)=>{D._isLeaving=!1,Gt(D,d),Gt(D,m),Gt(D,p),re&&re()},me=D=>(re,Te)=>{const je=D?Q:R,we=()=>q(re,D,Te);Ut(je,[re,we]),ki(()=>{Gt(re,D?a:i),bt(re,D?c:l),_i(je)||wi(re,s,v,we)})};return Ce(t,{onBeforeEnter(D){Ut(y,[D]),bt(D,i),bt(D,o)},onBeforeAppear(D){Ut(te,[D]),bt(D,a),bt(D,u)},onEnter:me(!1),onAppear:me(!0),onLeave(D,re){D._isLeaving=!0;const Te=()=>ne(D,re);bt(D,d),D._enterCancelled?(bt(D,p),Ti(D)):(Ti(D),bt(D,p)),ki(()=>{D._isLeaving&&(Gt(D,d),bt(D,m),_i(E)||wi(D,s,A,Te))}),Ut(E,[D,Te])},onEnterCancelled(D){q(D,!1,void 0,!0),Ut(T,[D])},onAppearCancelled(D){q(D,!0,void 0,!0),Ut(Ae,[D])},onLeaveCancelled(D){ne(D),Ut(Z,[D])}})}function au(e){if(e==null)return null;if(ae(e))return[Us(e.enter),Us(e.leave)];{const t=Us(e);return[t,t]}}function Us(e){return da(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[jn]||(e[jn]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[jn];n&&(n.delete(t),n.size||(e[jn]=void 0))}function ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cu=0;function wi(e,t,n,s){const r=e._endId=++cu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=uu(e,t);if(!o)return s();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,p)}function uu(e,t){const n=window.getComputedStyle(e),s=_=>(n[_]||"").split(", "),r=s(`${Pt}Delay`),i=s(`${Pt}Duration`),o=xi(r,i),l=s(`${_n}Delay`),a=s(`${_n}Duration`),u=xi(l,a);let c=null,d=0,p=0;t===Pt?o>0&&(c=Pt,d=o,p=i.length):t===_n?u>0&&(c=_n,d=u,p=a.length):(d=Math.max(o,u),c=d>0?o>u?Pt:_n:null,p=c?c===Pt?i.length:a.length:0);const m=c===Pt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Pt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ci(n)+Ci(e[s])))}function Ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(e){return(e?e.ownerDocument:document).body.offsetHeight}function fu(e,t,n){const s=e[jn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ri=Symbol("_vod"),du=Symbol("_vsh"),pu=Symbol(""),hu=/(?:^|;)\s*display\s*:/;function gu(e,t,n){const s=e.style,r=ke(n);let i=!1;if(n&&!r){if(t)if(ke(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ss(s,l,"")}else for(const o in t)n[o]==null&&ss(s,o,"");for(const o in n)o==="display"&&(i=!0),ss(s,o,n[o])}else if(r){if(t!==n){const o=s[pu];o&&(n+=";"+o),s.cssText=n,i=hu.test(n)}}else t&&e.removeAttribute("style");Ri in e&&(e[Ri]=i?s.display:"",e[du]&&(s.display="none"))}const Si=/\s*!important$/;function ss(e,t,n){if(G(n))n.forEach(s=>ss(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=mu(e,t);Si.test(n)?e.setProperty(Yt(s),n.replace(Si,""),"important"):e[s]=n}}const Ai=["Webkit","Moz","ms"],Gs={};function mu(e,t){const n=Gs[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return Gs[t]=s;s=_s(s);for(let r=0;r<Ai.length;r++){const i=Ai[r]+s;if(i in e)return Gs[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function Pi(e,t,n,s,r,i=va(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n):n==null||i&&!ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ht(n)?String(n):n)}function Ii(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ho(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function on(e,t,n,s){e.addEventListener(t,n,s)}function bu(e,t,n,s){e.removeEventListener(t,n,s)}const Oi=Symbol("_vei");function vu(e,t,n,s,r=null){const i=e[Oi]||(e[Oi]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=yu(t);if(s){const u=i[t]=wu(s,r);on(e,l,u,a)}else o&&(bu(e,l,o,a),i[t]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function yu(e){let t;if($i.test(e)){t={};let s;for(;s=e.match($i);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let zs=0;const _u=Promise.resolve(),ku=()=>zs||(_u.then(()=>zs=0),zs=Date.now());function wu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(xu(s,n.value),t,5,[s])};return n.value=e,n.attached=ku(),n}function xu(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Cu=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?fu(e,s,o):t==="style"?gu(e,n,s):vs(t)?vr(t)||vu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tu(e,t,s,o))?(Ii(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ke(s))?Ii(e,Je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Pi(e,t,s,o))};function Tu(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Mi(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mi(t)&&ke(n)?!1:t in e}const Li=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>Xn(t,n):t};function Ru(e){e.target.composing=!0}function Ni(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Vs=Symbol("_assign");function Di(e,t,n){return t&&(e=e.trim()),n&&(e=kr(e)),e}const Dr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Vs]=Li(r);const i=s||r.props&&r.props.type==="number";on(e,t?"change":"input",o=>{o.target.composing||e[Vs](Di(e.value,n,i))}),(n||i)&&on(e,"change",()=>{e.value=Di(e.value,n,i)}),t||(on(e,"compositionstart",Ru),on(e,"compositionend",Ni),on(e,"change",Ni))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Vs]=Li(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?kr(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a))}},Su=Ce({patchProp:Cu},su);let Bi;function Au(){return Bi||(Bi=Nc(Su))}const Eu=(...e)=>{const t=Au().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Iu(s);if(!r)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Pu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Pu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Iu(e){return ke(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ln=typeof document<"u";function Cl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cl(e.default)}const oe=Object.assign;function qs(e,t){const n={};for(const s in t){const r=t[s];n[s]=st(r)?r.map(e):e(r)}return n}const $n=()=>{},st=Array.isArray;function Wi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Tl=/#/g,$u=/&/g,Mu=/\//g,Lu=/=/g,Nu=/\?/g,Rl=/\+/g,Du=/%5B/g,Bu=/%5D/g,Sl=/%5E/g,Wu=/%60/g,Al=/%7B/g,Hu=/%7C/g,El=/%7D/g,Fu=/%20/g;function Br(e){return e==null?"":encodeURI(""+e).replace(Hu,"|").replace(Du,"[").replace(Bu,"]")}function ju(e){return Br(e).replace(Al,"{").replace(El,"}").replace(Sl,"^")}function ur(e){return Br(e).replace(Rl,"%2B").replace(Fu,"+").replace(Tl,"%23").replace($u,"%26").replace(Wu,"`").replace(Al,"{").replace(El,"}").replace(Sl,"^")}function Uu(e){return ur(e).replace(Lu,"%3D")}function Gu(e){return Br(e).replace(Tl,"%23").replace(Nu,"%3F")}function zu(e){return Gu(e).replace(Mu,"%2F")}function Un(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Vu=/\/$/,qu=e=>e.replace(Vu,"");function Ks(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(s=t.slice(0,a),i=t.slice(a,l>0?l:t.length),r=e(i.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=Qu(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Un(o)}}function Ku(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&gn(t.matched[s],n.matched[r])&&Pl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ju(e[n],t[n]))return!1;return!0}function Ju(e,t){return st(e)?Fi(e,t):st(t)?Fi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Fi(e,t){return st(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Qu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fr=function(e){return e.pop="pop",e.push="push",e}({}),Zs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Yu(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qu(e)}const Xu=/^[^#]+#/;function ef(e,t){return e.replace(Xu,"#")+t}function tf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Is=()=>({left:window.scrollX,top:window.scrollY});function nf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=tf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const dr=new Map;function sf(e,t){dr.set(e,t)}function rf(e){const t=dr.get(e);return dr.delete(e),t}function of(e){return typeof e=="string"||e&&typeof e=="object"}function Il(e){return typeof e=="string"||typeof e=="symbol"}let _e=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Ol=Symbol("");_e.MATCHER_NOT_FOUND+"",_e.NAVIGATION_GUARD_REDIRECT+"",_e.NAVIGATION_ABORTED+"",_e.NAVIGATION_CANCELLED+"",_e.NAVIGATION_DUPLICATED+"";function mn(e,t){return oe(new Error,{type:e,[Ol]:!0},t)}function vt(e,t){return e instanceof Error&&Ol in e&&(t==null||!!(e.type&t))}const lf=["params","query","hash"];function af(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of lf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function cf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Rl," "),i=r.indexOf("="),o=Un(i<0?r:r.slice(0,i)),l=i<0?null:Un(r.slice(i+1));if(o in t){let a=t[o];st(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function Ui(e){let t="";for(let n in e){const s=e[n];if(n=Uu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&ur(r)):[s&&ur(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function uf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=st(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const ff=Symbol(""),Gi=Symbol(""),Os=Symbol(""),Wr=Symbol(""),pr=Symbol("");function kn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const u=p=>{p===!1?a(mn(_e.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):of(p)?a(mn(_e.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>a(p))})}function Js(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Cl(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Mt(u,n,s,o,l,r))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Ou(c)?c.default:c;o.mods[l]=c,o.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&Mt(p,n,s,o,l,r)()}))}}return i}function df(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>gn(u,l))?s.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>gn(u,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pf=()=>location.protocol+"//"+location.host;function $l(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Hi(l,"")}return Hi(n,e)+s+r}function hf(e,t,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const m=$l(e,location),_=n.value,v=t.value;let A=0;if(p){if(n.value=m,t.value=p,o&&o===_){o=null;return}A=v?p.position-v.position:0}else s(m);r.forEach(y=>{y(n.value,_,{delta:A,type:fr.pop,direction:A?A>0?Zs.forward:Zs.back:Zs.unknown})})};function a(){o=n.value}function u(p){r.push(p);const m=()=>{const _=r.indexOf(p);_>-1&&r.splice(_,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(oe({},p.state,{scroll:Is()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:d}}function zi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Is():null}}function gf(e){const{history:t,location:n}=window,s={value:$l(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:pf()+e+a;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function o(a,u){i(a,oe({},t.state,zi(r.value.back,a,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=a}function l(a,u){const c=oe({},r.value,t.state,{forward:a,scroll:Is()});i(c.current,c,!0),i(a,oe({},zi(s.value,a,null),{position:c.position+1},u),!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function mf(e){e=Yu(e);const t=gf(e),n=hf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:e,go:s,createHref:ef.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function bf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),mf(e)}let qt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var xe=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(xe||{});const vf={type:qt.Static,value:""},yf=/[a-zA-Z0-9_]/;function _f(e){if(!e)return[[]];if(e==="/")return[[vf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=xe.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,u="",c="";function d(){u&&(n===xe.Static?i.push({type:qt.Static,value:u}):n===xe.Param||n===xe.ParamRegExp||n===xe.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:qt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==xe.ParamRegExp){s=n,n=xe.EscapeNext;continue}switch(n){case xe.Static:a==="/"?(u&&d(),o()):a===":"?(d(),n=xe.Param):p();break;case xe.EscapeNext:p(),n=s;break;case xe.Param:a==="("?n=xe.ParamRegExp:yf.test(a)?p():(d(),n=xe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case xe.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=xe.ParamRegExpEnd:c+=a;break;case xe.ParamRegExpEnd:d(),n=xe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===xe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const Vi="[^/]+?",kf={sensitive:!1,strict:!1,start:!0,end:!0};var $e=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}($e||{});const wf=/[.+*?^${}()[\]/\\]/g;function xf(e,t){const n=oe({},kf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[$e.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=$e.Segment+(n.sensitive?$e.BonusCaseSensitive:0);if(p.type===qt.Static)d||(r+="/"),r+=p.value.replace(wf,"\\$&"),m+=$e.Static;else if(p.type===qt.Param){const{value:_,repeatable:v,optional:A,regexp:y}=p;i.push({name:_,repeatable:v,optional:A});const R=y||Vi;if(R!==Vi){m+=$e.BonusCustomRegExp;try{`${R}`}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+E.message)}}let T=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(T=A&&u.length<2?`(?:/${T})`:"/"+T),A&&(T+="?"),r+=T,m+=$e.Dynamic,A&&(m+=$e.BonusOptional),v&&(m+=$e.BonusRepeatable),R===".*"&&(m+=$e.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=$e.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const c=u.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",_=i[p-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function a(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===qt.Static)c+=m.value;else if(m.type===qt.Param){const{value:_,repeatable:v,optional:A}=m,y=_ in u?u[_]:"";if(st(y)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=st(y)?y.join("/"):y;if(!R)if(A)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);c+=R}}return c||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function Cf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===$e.Static+$e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$e.Static+$e.Segment?1:-1:0}function Ml(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Cf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(qi(s))return 1;if(qi(r))return-1}return r.length-s.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tf={strict:!1,end:!0,sensitive:!1};function Rf(e,t,n){const s=xf(_f(e.path),n),r=oe(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Sf(e,t){const n=[],s=new Map;t=Wi(Tf,t);function r(d){return s.get(d)}function i(d,p,m){const _=!m,v=Zi(d);v.aliasOf=m&&m.record;const A=Wi(t,d),y=[v];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const Z of E)y.push(Zi(oe({},v,{components:m?m.record.components:v.components,path:Z,aliasOf:m?m.record:v})))}let R,T;for(const E of y){const{path:Z}=E;if(p&&Z[0]!=="/"){const te=p.record.path,Q=te[te.length-1]==="/"?"":"/";E.path=p.record.path+(Z&&Q+Z)}if(R=Rf(E,p,A),m?m.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),_&&d.name&&!Ji(R)&&o(d.name)),Ll(R)&&a(R),v.children){const te=v.children;for(let Q=0;Q<te.length;Q++)i(te[Q],R,m&&m.children[Q])}m=m||R}return T?()=>{o(T)}:$n}function o(d){if(Il(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){const p=Pf(d,n);n.splice(p,0,d),d.record.name&&!Ji(d)&&s.set(d.record.name,d)}function u(d,p){let m,_={},v,A;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw mn(_e.MATCHER_NOT_FOUND,{location:d});A=m.record.name,_=oe(Ki(p.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Ki(d.params,m.keys.map(T=>T.name))),v=m.stringify(_)}else if(d.path!=null)v=d.path,m=n.find(T=>T.re.test(v)),m&&(_=m.parse(v),A=m.record.name);else{if(m=p.name?s.get(p.name):n.find(T=>T.re.test(p.path)),!m)throw mn(_e.MATCHER_NOT_FOUND,{location:d,currentLocation:p});A=m.record.name,_=oe({},p.params,d.params),v=m.stringify(_)}const y=[];let R=m;for(;R;)y.unshift(R.record),R=R.parent;return{name:A,path:v,params:_,matched:y,meta:Ef(y)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:r}}function Ki(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Zi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Af(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Af(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ef(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function Pf(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Ml(e,t[i])<0?s=i:n=i+1}const r=If(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function If(e){let t=e;for(;t=t.parent;)if(Ll(t)&&Ml(e,t)===0)return t}function Ll({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Qi(e){const t=et(Os),n=et(Wr),s=ye(()=>{const a=de(e.to);return t.resolve(a)}),r=ye(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(gn.bind(null,c));if(p>-1)return p;const m=Yi(a[u-2]);return u>1&&Yi(c)===m&&d[d.length-1].path!==m?d.findIndex(gn.bind(null,a[u-2])):p}),i=ye(()=>r.value>-1&&Nf(n.params,s.value.params)),o=ye(()=>r.value>-1&&r.value===n.matched.length-1&&Pl(n.params,s.value.params));function l(a={}){if(Lf(a)){const u=t[de(e.replace)?"replace":"push"](de(e.to)).catch($n);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ye(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function Of(e){return e.length===1?e[0]:e}const $f=qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qi,setup(e,{slots:t}){const n=xs(Qi(e)),{options:s}=et(Os),r=ye(()=>({[Xi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Of(t.default(n));return e.custom?i:Nr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Mf=$f;function Lf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!st(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Df=qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=et(pr),r=ye(()=>e.route||s.value),i=et(Gi,0),o=ye(()=>{let u=de(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=ye(()=>r.value.matched[o.value]);es(Gi,ye(()=>o.value+1)),es(ff,l),es(pr,r);const a=Se();return Jt(()=>[a.value,l.value,e.name],([u,c,d],[p,m,_])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!gn(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=l.value,p=d&&d.components[c];if(!p)return eo(n.default,{Component:p,route:u});const m=d.props[c],_=m?m===!0?u.params:typeof m=="function"?m(u):m:null,A=Nr(p,oe({},_,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return eo(n.default,{Component:A,route:u})||A}}});function eo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bf=Df;function Wf(e){const t=Sf(e.routes,e),n=e.parseQuery||cf,s=e.stringifyQuery||Ui,r=e.history,i=kn(),o=kn(),l=kn(),a=Fa(It);let u=It;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=qs.bind(null,x=>""+x),d=qs.bind(null,zu),p=qs.bind(null,Un);function m(x,B){let M,H;return Il(x)?(M=t.getRecordMatcher(x),H=B):H=x,t.addRoute(H,M)}function _(x){const B=t.getRecordMatcher(x);B&&t.removeRoute(B)}function v(){return t.getRoutes().map(x=>x.record)}function A(x){return!!t.getRecordMatcher(x)}function y(x,B){if(B=oe({},B||a.value),typeof x=="string"){const b=Ks(n,x,B.path),k=t.resolve({path:b.path},B),C=r.createHref(b.fullPath);return oe(b,k,{params:p(k.params),hash:Un(b.hash),redirectedFrom:void 0,href:C})}let M;if(x.path!=null)M=oe({},x,{path:Ks(n,x.path,B.path).path});else{const b=oe({},x.params);for(const k in b)b[k]==null&&delete b[k];M=oe({},x,{params:d(b)}),B.params=d(B.params)}const H=t.resolve(M,B),Y=x.hash||"";H.params=c(p(H.params));const h=Ku(s,oe({},x,{hash:ju(Y),path:H.path})),g=r.createHref(h);return oe({fullPath:h,hash:Y,query:s===Ui?uf(x.query):x.query||{}},H,{redirectedFrom:void 0,href:g})}function R(x){return typeof x=="string"?Ks(n,x,a.value.path):oe({},x)}function T(x,B){if(u!==x)return mn(_e.NAVIGATION_CANCELLED,{from:B,to:x})}function E(x){return Q(x)}function Z(x){return E(oe(R(x),{replace:!0}))}function te(x,B){const M=x.matched[x.matched.length-1];if(M&&M.redirect){const{redirect:H}=M;let Y=typeof H=="function"?H(x,B):H;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=R(Y):{path:Y},Y.params={}),oe({query:x.query,hash:x.hash,params:Y.path!=null?{}:x.params},Y)}}function Q(x,B){const M=u=y(x),H=a.value,Y=x.state,h=x.force,g=x.replace===!0,b=te(M,H);if(b)return Q(oe(R(b),{state:typeof b=="object"?oe({},Y,b.state):Y,force:h,replace:g}),B||M);const k=M;k.redirectedFrom=B;let C;return!h&&Zu(s,H,M)&&(C=mn(_e.NAVIGATION_DUPLICATED,{to:k,from:H}),rt(H,H,!0,!1)),(C?Promise.resolve(C):ne(k,H)).catch(w=>vt(w)?vt(w,_e.NAVIGATION_GUARD_REDIRECT)?w:Et(w):ie(w,k,H)).then(w=>{if(w){if(vt(w,_e.NAVIGATION_GUARD_REDIRECT))return Q(oe({replace:g},R(w.to),{state:typeof w.to=="object"?oe({},Y,w.to.state):Y,force:h}),B||k)}else w=D(k,H,!0,g,Y);return me(k,H,w),w})}function Ae(x,B){const M=T(x,B);return M?Promise.reject(M):Promise.resolve()}function q(x){const B=nn.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(x):x()}function ne(x,B){let M;const[H,Y,h]=df(x,B);M=Js(H.reverse(),"beforeRouteLeave",x,B);for(const b of H)b.leaveGuards.forEach(k=>{M.push(Mt(k,x,B))});const g=Ae.bind(null,x,B);return M.push(g),qe(M).then(()=>{M=[];for(const b of i.list())M.push(Mt(b,x,B));return M.push(g),qe(M)}).then(()=>{M=Js(Y,"beforeRouteUpdate",x,B);for(const b of Y)b.updateGuards.forEach(k=>{M.push(Mt(k,x,B))});return M.push(g),qe(M)}).then(()=>{M=[];for(const b of h)if(b.beforeEnter)if(st(b.beforeEnter))for(const k of b.beforeEnter)M.push(Mt(k,x,B));else M.push(Mt(b.beforeEnter,x,B));return M.push(g),qe(M)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),M=Js(h,"beforeRouteEnter",x,B,q),M.push(g),qe(M))).then(()=>{M=[];for(const b of o.list())M.push(Mt(b,x,B));return M.push(g),qe(M)}).catch(b=>vt(b,_e.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function me(x,B,M){l.list().forEach(H=>q(()=>H(x,B,M)))}function D(x,B,M,H,Y){const h=T(x,B);if(h)return h;const g=B===It,b=ln?history.state:{};M&&(H||g?r.replace(x.fullPath,oe({scroll:g&&b&&b.scroll},Y)):r.push(x.fullPath,Y)),a.value=x,rt(x,B,M,g),Et()}let re;function Te(){re||(re=r.listen((x,B,M)=>{if(!Ht.listening)return;const H=y(x),Y=te(H,Ht.currentRoute.value);if(Y){Q(oe(Y,{replace:!0,force:!0}),H).catch($n);return}u=H;const h=a.value;ln&&sf(ji(h.fullPath,M.delta),Is()),ne(H,h).catch(g=>vt(g,_e.NAVIGATION_ABORTED|_e.NAVIGATION_CANCELLED)?g:vt(g,_e.NAVIGATION_GUARD_REDIRECT)?(Q(oe(R(g.to),{force:!0}),H).then(b=>{vt(b,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&!M.delta&&M.type===fr.pop&&r.go(-1,!1)}).catch($n),Promise.reject()):(M.delta&&r.go(-M.delta,!1),ie(g,H,h))).then(g=>{g=g||D(H,h,!1),g&&(M.delta&&!vt(g,_e.NAVIGATION_CANCELLED)?r.go(-M.delta,!1):M.type===fr.pop&&vt(g,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),me(H,h,g)}).catch($n)}))}let je=kn(),we=kn(),fe;function ie(x,B,M){Et(x);const H=we.list();return H.length?H.forEach(Y=>Y(x,B,M)):console.error(x),Promise.reject(x)}function gt(){return fe&&a.value!==It?Promise.resolve():new Promise((x,B)=>{je.add([x,B])})}function Et(x){return fe||(fe=!x,Te(),je.list().forEach(([B,M])=>x?M(x):B()),je.reset()),x}function rt(x,B,M,H){const{scrollBehavior:Y}=e;if(!ln||!Y)return Promise.resolve();const h=!M&&rf(ji(x.fullPath,0))||(H||!M)&&history.state&&history.state.scroll||null;return Dn().then(()=>Y(x,B,h)).then(g=>g&&nf(g)).catch(g=>ie(g,x,B))}const De=x=>r.go(x);let tn;const nn=new Set,Ht={currentRoute:a,listening:!0,addRoute:m,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:v,resolve:y,options:e,push:E,replace:Z,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:we.add,isReady:gt,install(x){x.component("RouterLink",Mf),x.component("RouterView",Bf),x.config.globalProperties.$router=Ht,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>de(a)}),ln&&!tn&&a.value===It&&(tn=!0,E(r.location).catch(H=>{}));const B={};for(const H in It)Object.defineProperty(B,H,{get:()=>a.value[H],enumerable:!0});x.provide(Os,Ht),x.provide(Wr,Io(B)),x.provide(pr,a);const M=x.unmount;nn.add(x),x.unmount=function(){nn.delete(x),nn.size<1&&(u=It,re&&re(),re=null,a.value=It,tn=!1,fe=!1),M()}}};function qe(x){return x.reduce((B,M)=>B.then(()=>q(M)),Promise.resolve())}return Ht}function Hf(){return et(Os)}function Nl(e){return et(Wr)}const Ff={class:"container nav-shell"},jf={class:"nav-right"},Uf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Se(!1);return(n,s)=>{const r=Wt("router-link");return O(),L("header",{class:Ve(["site-header",{scrolled:e.scrolled}])},[f("div",Ff,[j(r,{class:"brand",to:"/"},{default:K(()=>[...s[10]||(s[10]=[f("span",{class:"brand-mark"},"T",-1),f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Minecraft Server Core")],-1)])]),_:1}),f("div",jf,[s[21]||(s[21]=f("span",{class:"nav-status"},"性能 · 运维 · 内容链路",-1)),f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Ve(["nav-links",{open:t.value}])},[j(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:K(()=>[...s[12]||(s[12]=[J("首页",-1)])]),_:1}),j(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:K(()=>[...s[13]||(s[13]=[J("核心能力",-1)])]),_:1}),j(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:K(()=>[...s[14]||(s[14]=[J("技术文档",-1)])]),_:1}),j(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:K(()=>[...s[15]||(s[15]=[J("下载",-1)])]),_:1}),j(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:K(()=>[...s[16]||(s[16]=[J("路线图",-1)])]),_:1}),j(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:K(()=>[...s[17]||(s[17]=[J("更新日志",-1)])]),_:1}),j(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:K(()=>[...s[18]||(s[18]=[J("团队与支持",-1)])]),_:1}),j(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:K(()=>[...s[19]||(s[19]=[J("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),J(" "+W(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},Hr=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Gf={},zf={class:"site-footer"},Vf={class:"container footer-grid"};function qf(e,t){const n=Wt("router-link");return O(),L("footer",zf,[f("div",Vf,[t[11]||(t[11]=f("div",null,[f("div",{class:"brand footer-brand"},[f("span",{class:"brand-mark"},"T"),f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")])]),f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ")],-1)),f("div",null,[t[5]||(t[5]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[j(n,{to:"/features"},{default:K(()=>[...t[0]||(t[0]=[J("核心能力",-1)])]),_:1})]),f("li",null,[j(n,{to:"/docs"},{default:K(()=>[...t[1]||(t[1]=[J("技术文档",-1)])]),_:1})]),f("li",null,[j(n,{to:"/downloads"},{default:K(()=>[...t[2]||(t[2]=[J("下载",-1)])]),_:1})]),f("li",null,[j(n,{to:"/roadmap"},{default:K(()=>[...t[3]||(t[3]=[J("路线图",-1)])]),_:1})]),f("li",null,[j(n,{to:"/changelog"},{default:K(()=>[...t[4]||(t[4]=[J("更新日志",-1)])]),_:1})])])]),t[12]||(t[12]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[t[10]||(t[10]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[j(n,{to:"/team"},{default:K(()=>[...t[6]||(t[6]=[J("团队与支持",-1)])]),_:1})]),t[7]||(t[7]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),t[8]||(t[8]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),t[9]||(t[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),t[13]||(t[13]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}const Kf=Hr(Gf,[["render",qf]]),Zf=["data-theme"],Jf={class:"site-main"},Qf={__name:"App",setup(e){const t=Se("dark"),n=Se(!1),s=Nl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},o=()=>{i(t.value==="dark"?"light":"dark")},l=()=>{n.value=window.scrollY>8},a=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Dn();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(a.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return Xt(()=>{const c=localStorage.getItem("tree-site-theme");if(c==="dark"||c==="light")i(c);else{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;i(d?"dark":"light")}l(),window.addEventListener("scroll",l,{passive:!0}),u()}),Ss(()=>{window.removeEventListener("scroll",l),r==null||r.disconnect()}),Jt(()=>s.fullPath,()=>{u()}),Jt(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=Wt("router-view");return O(),L("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=Ye('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),j(Uf,{theme:t.value,scrolled:n.value,onToggleTheme:o},null,8,["theme","scrolled"]),f("main",Jf,[j(p,null,{default:K(({Component:m,route:_})=>[j(ou,{name:"page-fade",mode:"out-in"},{default:K(()=>[(O(),an(hc(m),{key:_.fullPath}))]),_:2},1024)]),_:1})]),j(Kf)],8,Zf)}}},Yf="/images/console-preview.png",Xf="/images/console-live.gif",ed="/images/stress-test.gif",td={},nd={class:"hero-section home-hero-section"},sd={class:"container hero-grid home-hero-grid"},rd={class:"hero-copy"},id={class:"hero-actions"},od={class:"section-block"},ld={class:"container"},ad={class:"feature-grid three"},cd={class:"feature-card compact"},ud={class:"feature-card compact"},fd={class:"feature-card compact"},dd={class:"section-block"},pd={class:"container"},hd={class:"feature-grid three"},gd={class:"feature-card compact"},md={class:"feature-card compact"},bd={class:"feature-card compact"},vd={class:"section-block final-cta"},yd={class:"container cta-shell"},_d={class:"hero-actions"};function kd(e,t){const n=Wt("router-link");return O(),L("div",null,[f("section",nd,[f("div",sd,[f("div",rd,[t[3]||(t[3]=Ye('<span class="eyebrow">TREECORE · OFFICIAL WEBSITE</span><h1 class="hero-title">让性能优化、运维与内容链路真正连成一体。</h1><p class="hero-description"> TreeCore 面向高并发、长时间运行与可视化运维场景，提供运行时性能调优、 Web 管理面板、资源包与模型链路、假人与红石热点分析，以及更贴近实战的服务器工具集。 </p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',4)),f("div",id,[j(n,{class:"button primary",to:"/features"},{default:K(()=>[...t[0]||(t[0]=[J("查看能力",-1)])]),_:1}),j(n,{class:"button secondary",to:"/docs"},{default:K(()=>[...t[1]||(t[1]=[J("阅读文档",-1)])]),_:1}),t[2]||(t[2]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1))]),t[4]||(t[4]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),t[5]||(t[5]=Ye('<div class="hero-visual"><div class="hero-spotlight"></div><div class="hero-card image-card hero-stage"><img src="'+Yf+'" alt="TreeCore 控制台预览"><div class="overlay-panel"><strong>Web 管理面板</strong><p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p></div><div class="hero-float-card float-top"><small>运行时调优</small><strong>动态视距 / 模拟距离</strong><span>优先稳住 TPS 与 MSPT</span></div><div class="hero-float-card float-bottom"><small>内容链路</small><strong>ZIP → 重载 → 在线下发</strong><span>资源包和模型维护不再割裂</span></div></div></div>',1))])]),t[35]||(t[35]=Ye('<section class="section-block"><div class="container stats-grid"><article class="stat-card"><strong>11</strong><span>当前 Web 页签</span></article><article class="stat-card"><strong>4 档</strong><span>自动分层预设</span></article><article class="stat-card"><strong>ZIP</strong><span>本地资源包拖拽上传</span></article><article class="stat-card"><strong>Docs</strong><span>GitBook 风格技术 Wiki</span></article></div></section><section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">WHY TREECORE</span><h2>不是只会改配置，而是把服务器维护做成完整产品。</h2><p> TreeCore 不只在运行时调优参数，还把控制台、诊断、资源包、模型、备份、假人、世界管理与文档体系串成统一入口。 </p></div><div class="feature-grid three"><article class="feature-card"><h3>性能在运行时收敛</h3><p>动态视距、动态模拟距离、Paper 配置热调、网络链路优化与自动分层共同工作，优先稳住 TPS 与 MSPT。</p></article><article class="feature-card"><h3>Web 运维真正可用</h3><p>远程控制台、内存快照、线程转储、备份管理、世界操作、ItemsAdder 编辑器与集成状态都能可视化完成。</p></article><article class="feature-card"><h3>内容链路不再割裂</h3><p>模型、纹理、资源包 ZIP、本地托管与在线玩家资源包下发形成闭环，适合内容服与综合服协同维护。</p></article></div></div></section><section class="section-block"><div class="container media-grid"><article class="media-card"><div class="media-copy"><span class="eyebrow">REAL SCENARIO</span><h3>高峰监控与问题排查放在同一块面板里。</h3><p> 先看仪表盘，再看控制台，再做线程转储与备份处理。TreeCore 的目标不是把工具堆进去，而是让它们在实际运维时能够连起来用。 </p></div><img src="'+Xf+'" alt="TreeCore 控制台动图"></article><article class="media-card reverse"><div class="media-copy"><span class="eyebrow">STRESS TEST</span><h3>面向综合服、长周目服与高峰玩家场景。</h3><p> 对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。 </p></div><img src="'+ed+'" alt="TreeCore 压测演示"></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">SCENARIOS</span><h2>适合哪些服务器？</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>生存 / 长周目服</h3><p>希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。</p></article><article class="feature-card compact"><h3>多世界 / 综合服</h3><p>需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。</p></article><article class="feature-card compact"><h3>运维要求高的团队服</h3><p>希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。</p></article></div></div></section>',5)),f("section",od,[f("div",ld,[t[18]||(t[18]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"DOCS INSIDE SITE"),f("h2",null,"文档已经和官网放在同一个站里。"),f("p",null,"现在你可以直接在站内阅读快速开始、配置参考、资源包链路、系统架构与 Web 资源同步机制，不再跳出到 GitHub Markdown 页面。")],-1)),f("div",ad,[f("article",cd,[t[7]||(t[7]=f("span",{class:"card-label"},"GET STARTED",-1)),t[8]||(t[8]=f("h3",null,"快速开始",-1)),t[9]||(t[9]=f("p",null,"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",-1)),j(n,{class:"text-link",to:"/docs/quick-start"},{default:K(()=>[...t[6]||(t[6]=[J("立即阅读 →",-1)])]),_:1})]),f("article",ud,[t[11]||(t[11]=f("span",{class:"card-label"},"OPERATIONS",-1)),t[12]||(t[12]=f("h3",null,"资源包 / 模型链路",-1)),t[13]||(t[13]=f("p",null,"把模型、纹理、ZIP 资源包、本地托管与在线玩家下发串起来理解。",-1)),j(n,{class:"text-link",to:"/docs/resource-pack"},{default:K(()=>[...t[10]||(t[10]=[J("查看文档 →",-1)])]),_:1})]),f("article",fd,[t[15]||(t[15]=f("span",{class:"card-label"},"ARCHITECTURE",-1)),t[16]||(t[16]=f("h3",null,"系统架构总览",-1)),t[17]||(t[17]=f("p",null,"面向技术维护者，快速理解当前 TreeCore 的主要模块与运行关系。",-1)),j(n,{class:"text-link",to:"/docs/system-overview"},{default:K(()=>[...t[14]||(t[14]=[J("进入架构页 →",-1)])]),_:1})])])])]),f("section",dd,[f("div",pd,[t[31]||(t[31]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"PROJECT PAGES"),f("h2",null,"官网里不只是首页和下载页。"),f("p",null,"现在站内已经补上路线图、更新日志和团队与支持页面，让用户能更清楚地看到项目状态、版本节奏和支持入口。")],-1)),f("div",hd,[f("article",gd,[t[20]||(t[20]=f("span",{class:"card-label"},"ROADMAP",-1)),t[21]||(t[21]=f("h3",null,"路线图",-1)),t[22]||(t[22]=f("p",null,"把当前阶段、下一阶段和后续方向清晰列出来，让官网更像正式项目站点。",-1)),j(n,{class:"text-link",to:"/roadmap"},{default:K(()=>[...t[19]||(t[19]=[J("查看路线图 →",-1)])]),_:1})]),f("article",md,[t[24]||(t[24]=f("span",{class:"card-label"},"CHANGELOG",-1)),t[25]||(t[25]=f("h3",null,"更新日志",-1)),t[26]||(t[26]=f("p",null,"统一承接公开版本变化、发布时间和更新摘要，后续发布版本时能直接形成时间线。",-1)),j(n,{class:"text-link",to:"/changelog"},{default:K(()=>[...t[23]||(t[23]=[J("查看更新日志 →",-1)])]),_:1})]),f("article",bd,[t[28]||(t[28]=f("span",{class:"card-label"},"SUPPORT",-1)),t[29]||(t[29]=f("h3",null,"团队与支持",-1)),t[30]||(t[30]=f("p",null,"把社区入口、FAQ、贡献者和反馈方式集中到一个更完整的支持页里。",-1)),j(n,{class:"text-link",to:"/team"},{default:K(()=>[...t[27]||(t[27]=[J("进入支持页 →",-1)])]),_:1})])])])]),t[36]||(t[36]=Ye('<section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">FAQ</span><h2>你可能最先会关心的几个问题</h2></div><div class="feature-grid two"><article class="feature-card compact"><h3>TreeCore 更适合哪类服务器？</h3><p>更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。</p></article><article class="feature-card compact"><h3>默认会不会大幅改动原版行为？</h3><p>整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏“默认原版、按需保护”。</p></article><article class="feature-card compact"><h3>Web 管理面板现在能做什么？</h3><p>当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。</p></article><article class="feature-card compact"><h3>第一次上服最推荐先做什么？</h3><p>建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。</p></article></div></div></section>',1)),f("section",vd,[f("div",yd,[t[34]||(t[34]=f("div",null,[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看官网，再进站内文档，最后按你的节奏发布版本。"),f("p",null,"当前站点已经按“官网 + 站内 Wiki + Releases”结构组织，后续可以继续扩展为更完整的产品官网体系。")],-1)),f("div",_d,[j(n,{class:"button primary",to:"/docs"},{default:K(()=>[...t[32]||(t[32]=[J("进入技术文档",-1)])]),_:1}),j(n,{class:"button secondary",to:"/downloads"},{default:K(()=>[...t[33]||(t[33]=[J("查看下载入口",-1)])]),_:1})])])])])}const wd=Hr(td,[["render",kd]]),xd={},Cd={class:"page-shell container"};function Td(e,t){return O(),L("div",Cd,[...t[0]||(t[0]=[Ye('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>围绕服务器全链路组织的核心能力</h1><p> 从运行时性能调优，到 Web 运维面板，再到资源包、模型、世界与备份管理，TreeCore 当前公开功能已经能覆盖一套完整的服务器维护流程。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const Rd=Hr(xd,[["render",Td]]),Dl="https://api.github.com/repos/TreeMC-cloud/Tree",Sd=`${Dl}/releases?per_page=30`,Ad=`${Dl}/contributors?per_page=24`,Bl="tree-site-cache:",Ed=30*60*1e3,Wl=e=>{try{const t=localStorage.getItem(`${Bl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>Ed?null:n.data}catch{return null}},Hl=(e,t)=>{try{localStorage.setItem(`${Bl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},Fl=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},Pd=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},jl=async()=>{try{const e=await Fl(Sd),t=Array.isArray(e)?e:[];return Hl("releases",t),{data:t,source:"github"}}catch{const e=Wl("releases");if(e)return{data:e,source:"cache"};const t=await Pd();return{data:t,source:t.length?"fallback":"empty"}}},Id=async()=>{try{const e=await Fl(Ad),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Hl("contributors",t),{data:t,source:"github"}}catch{const e=Wl("contributors");return{data:e||[],source:e?"cache":"empty"}}},rs=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Nt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Ul=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Gn=e=>String(e||"").replace(/\r/g,"").trim(),Lt=(e,t=4)=>{const n=Gn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},wn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},to=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Gl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),Od={class:"page-shell container"},$d={class:"page-hero"},Md={class:"hero-actions"},Ld={class:"stack-section"},Nd={class:"section-head left"},Dd={class:"release-hero-grid"},Bd={key:0,class:"release-hero-card surface-card"},Wd={class:"release-head"},Hd={class:"release-date"},Fd={class:"release-tag"},jd={key:0,class:"bullet-list compact-list"},Ud={key:1,class:"release-body"},Gd={class:"release-actions"},zd=["href"],Vd=["href"],qd={key:1,class:"release-hero-card surface-card"},Kd={class:"release-head"},Zd={class:"release-date"},Jd={class:"release-tag"},Qd={key:0,class:"bullet-list compact-list"},Yd={key:1,class:"release-body"},Xd={class:"release-actions"},ep=["href"],tp=["href"],np={key:2,class:"empty-state surface-card"},sp={class:"stack-section surface-card changelog-toolbar"},rp={class:"release-filter-row"},ip={class:"filter-chip-group"},op=["onClick"],lp={key:0,class:"stack-section"},ap={key:1,class:"stack-section release-list-grid"},cp={class:"release-head"},up={class:"release-date"},fp={class:"release-tag"},dp={key:0,class:"bullet-list compact-list"},pp={key:1,class:"release-body"},hp={key:2,class:"asset-group-list"},gp={key:3,class:"release-asset-list"},mp=["href"],bp={class:"release-actions"},vp=["href"],yp={key:2,class:"stack-section"},_p={__name:"DownloadsPage",setup(e){const t=Se(!0),n=Se([]),s=Se("github"),r=Se("all"),i=Se(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=ye(()=>Gl(n.value)),a=ye(()=>l.value.find(A=>Nt(A)==="stable")||null),u=ye(()=>l.value.find(A=>Nt(A)==="preview")||null),c=ye(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=A=>{const y=Gn(A).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return y?y.length>140?`${y.slice(0,140)}…`:y:"暂无发布说明。"},p=A=>{const y=m(A);return y.find(R=>wn(R)==="server")||y[0]||null},m=A=>{const y=Array.isArray(A==null?void 0:A.assets)?[...A.assets]:[],R=["server","archive","source","checksum","metadata","other"];return y.sort((T,E)=>R.indexOf(wn(T))-R.indexOf(wn(E))).slice(0,5)},_=A=>{const y=new Map;for(const R of(A==null?void 0:A.assets)||[]){const T=wn(R),E=y.get(T)||[];E.push(R),y.set(T,E)}return["server","archive","source","checksum","metadata","other"].filter(R=>y.has(R)).map(R=>({type:R,label:to(R),items:y.get(R)}))},v=ye(()=>{const A=i.value.toLowerCase();return l.value.filter(y=>{const R=Nt(y);return r.value!=="all"&&R!==r.value?!1:A?[y.name,y.tag_name,Gn(y.body)].filter(Boolean).join(" ").toLowerCase().includes(A):!0})});return Xt(async()=>{const A=await jl();n.value=A.data,s.value=A.source,t.value=!1}),(A,y)=>{const R=Wt("router-link");return O(),L("div",Od,[f("section",$d,[y[4]||(y[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),y[5]||(y[5]=f("h1",null,"下载与版本入口",-1)),y[6]||(y[6]=f("p",null," 下载页会优先读取公开仓库 Releases，并把最新正式版、预发布版、附件分类和更新摘要整理成更像正式产品站的版本入口。 ",-1)),f("div",Md,[y[3]||(y[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(R,{class:"button secondary",to:"/docs/quick-start"},{default:K(()=>[...y[1]||(y[1]=[J("安装文档",-1)])]),_:1}),j(R,{class:"button ghost",to:"/changelog"},{default:K(()=>[...y[2]||(y[2]=[J("查看更新日志",-1)])]),_:1})])]),f("section",Ld,[f("div",Nd,[y[7]||(y[7]=f("h2",null,"最新版本",-1)),f("p",null,W(c.value),1)]),f("div",Dd,[a.value?(O(),L("article",Bd,[f("div",Wd,[y[8]||(y[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",Hd,W(de(rs)(a.value.published_at)),1)]),f("h3",null,W(a.value.name||a.value.tag_name),1),f("p",Fd,W(a.value.tag_name),1),de(Lt)(a.value.body,4).length?(O(),L("ul",jd,[(O(!0),L(pe,null,Re(de(Lt)(a.value.body,4),T=>(O(),L("li",{key:T},W(T),1))),128))])):(O(),L("p",Ud,W(d(a.value.body)),1)),f("div",Gd,[f("a",{class:"button primary small",href:a.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,zd),p(a.value)?(O(),L("a",{key:0,class:"button secondary small",href:p(a.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+W(p(a.value).name),9,Vd)):Qe("",!0)])])):Qe("",!0),u.value?(O(),L("article",qd,[f("div",Kd,[y[9]||(y[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",Zd,W(de(rs)(u.value.published_at)),1)]),f("h3",null,W(u.value.name||u.value.tag_name),1),f("p",Jd,W(u.value.tag_name),1),de(Lt)(u.value.body,4).length?(O(),L("ul",Qd,[(O(!0),L(pe,null,Re(de(Lt)(u.value.body,4),T=>(O(),L("li",{key:T},W(T),1))),128))])):(O(),L("p",Yd,W(d(u.value.body)),1)),f("div",Xd,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,ep),p(u.value)?(O(),L("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+W(p(u.value).name),9,tp)):Qe("",!0)])])):Qe("",!0),!a.value&&!u.value?(O(),L("article",np,[...y[10]||(y[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Qe("",!0)])]),f("section",sp,[y[11]||(y[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",rp,[f("div",ip,[(O(),L(pe,null,Re(o,T=>f("button",{key:T.value,class:Ve(["filter-chip",{active:r.value===T.value}]),onClick:E=>r.value=T.value},W(T.label),11,op)),64))]),Or(f("input",{"onUpdate:modelValue":y[0]||(y[0]=T=>i.value=T),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Dr,i.value,void 0,{trim:!0}]])])]),t.value?(O(),L("section",lp,[...y[12]||(y[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):v.value.length?(O(),L("section",ap,[(O(!0),L(pe,null,Re(v.value,T=>(O(),L("article",{key:T.id||T.tag_name,class:"release-card enhanced-release-card"},[f("div",cp,[f("span",{class:Ve(["release-badge",{alt:de(Nt)(T)==="preview"}])},W(de(Ul)(de(Nt)(T))),3),f("span",up,W(de(rs)(T.published_at)),1)]),f("h3",null,W(T.name||T.tag_name),1),f("p",fp,W(T.tag_name),1),de(Lt)(T.body,4).length?(O(),L("ul",dp,[(O(!0),L(pe,null,Re(de(Lt)(T.body,4),E=>(O(),L("li",{key:E},W(E),1))),128))])):(O(),L("p",pp,W(d(T.body)),1)),_(T).length?(O(),L("div",hp,[(O(!0),L(pe,null,Re(_(T),E=>(O(),L("div",{key:E.type,class:"asset-group-chip"},[f("strong",null,W(E.label),1),f("span",null,W(E.items.length)+" 个文件",1)]))),128))])):Qe("",!0),T.assets&&T.assets.length?(O(),L("div",gp,[(O(!0),L(pe,null,Re(m(T),E=>(O(),L("a",{key:E.id||E.name,class:"release-asset-link",href:E.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,W(E.name),1),f("small",null,W(de(to)(de(wn)(E))),1)],8,mp))),128))])):Qe("",!0),f("div",bp,[f("a",{class:"button primary small",href:T.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,vp),j(R,{class:"button secondary small",to:"/changelog"},{default:K(()=>[...y[13]||(y[13]=[J("看时间线",-1)])]),_:1})])]))),128))])):(O(),L("section",yp,[...y[14]||(y[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),y[15]||(y[15]=Ye('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},hs=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],cn=hs.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),zl=Object.fromEntries(cn.map(e=>[e.slug,e])),kp={class:"page-shell container"},wp={class:"page-hero docs-hero-grid"},xp={class:"hero-actions"},Cp={class:"stack-section surface-card docs-filter-card"},Tp={class:"docs-filter-bar"},Rp={class:"section-head left"},Sp={class:"feature-grid three"},Ap={class:"card-label"},Ep={class:"doc-card-meta"},Pp={key:0,class:"stack-section"},Ip={__name:"DocsPage",setup(e){const t=Se(""),n=ye(()=>{const s=t.value.toLowerCase();return s?hs.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):hs});return(s,r)=>{const i=Wt("router-link");return O(),L("div",kp,[f("section",wp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档已经整合进官网内。",-1)),r[5]||(r[5]=f("p",null," 现在不再跳去 GitHub Markdown 页面，而是直接在官网站点里阅读部署、运维、配置、架构与 Web 资源同步文档。 ",-1)),f("div",xp,[j(i,{class:"button primary",to:"/docs/quick-start"},{default:K(()=>[...r[1]||(r[1]=[J("从快速开始开始",-1)])]),_:1}),j(i,{class:"button secondary",to:"/docs/configuration"},{default:K(()=>[...r[2]||(r[2]=[J("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Cp,[f("div",Tp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Or(f("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Dr,t.value,void 0,{trim:!0}]])])]),(O(!0),L(pe,null,Re(n.value,o=>(O(),L("section",{class:"stack-section",key:o.key},[f("div",Rp,[f("h2",null,W(o.title),1),f("p",null,W(o.description),1)]),f("div",Sp,[(O(!0),L(pe,null,Re(o.items,l=>(O(),L("article",{class:"feature-card compact",key:l.slug},[f("span",Ap,W(l.tag),1),f("h3",null,W(l.title),1),f("p",null,W(l.description),1),f("div",Ep,[f("span",null,W(o.title),1),f("span",null,W(l.minutes),1)]),j(i,{class:"text-link",to:`/docs/${l.slug}`},{default:K(()=>[...r[8]||(r[8]=[J("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Qe("",!0):(O(),L("section",Pp,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=Ye('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Op=`# Tree 技术文档 / Wiki

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
`,$p=`# Summary

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
`,Mp=`# 模块地图

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
`,Lp=`# 系统架构总览

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
`,Np=`# Web 资源同步机制

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
`,Dp=`# 首次上线检查清单

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
`,Bp=`# 快速开始

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
`,Wp=`# Web 面板访问

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
`,Hp=`# 命令与日常运维

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
`,Fp=`# 诊断与备份

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
`,jp=`# 假人 / 红石运维

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
`,Up=`# 集成与世界管理

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
`,Gp=`# 资源包 / 模型链路

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
`,zp=`# Web 页面总览

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
`,Vp=`# 命令速查表

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
`,qp=`# 配置参考

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
`,Kp=Object.assign({"../../content/docs/README.md":Op,"../../content/docs/SUMMARY.md":$p,"../../content/docs/architecture/module-map.md":Mp,"../../content/docs/architecture/system-overview.md":Lp,"../../content/docs/development/web-ui-pipeline.md":Np,"../../content/docs/getting-started/first-day-checklist.md":Dp,"../../content/docs/getting-started/quick-start.md":Bp,"../../content/docs/getting-started/web-panel.md":Wp,"../../content/docs/operations/commands.md":Hp,"../../content/docs/operations/diagnostics-and-backups.md":Fp,"../../content/docs/operations/fakeplayer-and-redstone.md":jp,"../../content/docs/operations/integrations-and-worlds.md":Up,"../../content/docs/operations/resource-pack.md":Gp,"../../content/docs/operations/web-pages-overview.md":zp,"../../content/docs/reference/command-cheatsheet.md":Vp,"../../content/docs/reference/configuration.md":qp}),Zp="../../content/docs/",Jp=Object.fromEntries(Object.entries(Kp).map(([e,t])=>[e.replace(Zp,""),t]));function Fr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var en=Fr();function Vl(e){en=e}var Mn={exec:()=>null};function ce(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ne.caret,"$1"),n=n.replace(r,o),s},getRegex:()=>new RegExp(n,t)};return s}var Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Qp=/^(?:[ \t]*(?:\n|$))+/,Yp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Xp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Kn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,eh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jr=/(?:[*+-]|\d{1,9}[.)])/,ql=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kl=ce(ql).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),th=ce(ql).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ur=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nh=/^[^\n]+/,Gr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sh=ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Gr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),rh=ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jr).getRegex(),$s="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ih=ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zr).replace("tag",$s).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Zl=ce(Ur).replace("hr",Kn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$s).getRegex(),oh=ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Zl).getRegex(),Vr={blockquote:oh,code:Yp,def:sh,fences:Xp,heading:eh,hr:Kn,html:ih,lheading:Kl,list:rh,newline:Qp,paragraph:Zl,table:Mn,text:nh},no=ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Kn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$s).getRegex(),lh={...Vr,lheading:th,table:no,paragraph:ce(Ur).replace("hr",Kn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",no).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$s).getRegex()},ah={...Vr,html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ce(Ur).replace("hr",Kn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Kl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ch=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,uh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Jl=/^( {2,}|\\)\n(?!\s*$)/,fh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ms=/[\p{P}\p{S}]/u,qr=/[\s\p{P}\p{S}]/u,Ql=/[^\s\p{P}\p{S}]/u,dh=ce(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,qr).getRegex(),Yl=/(?!~)[\p{P}\p{S}]/u,ph=/(?!~)[\s\p{P}\p{S}]/u,hh=/(?:[^\s\p{P}\p{S}]|~)/u,gh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Xl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,mh=ce(Xl,"u").replace(/punct/g,Ms).getRegex(),bh=ce(Xl,"u").replace(/punct/g,Yl).getRegex(),ea="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",vh=ce(ea,"gu").replace(/notPunctSpace/g,Ql).replace(/punctSpace/g,qr).replace(/punct/g,Ms).getRegex(),yh=ce(ea,"gu").replace(/notPunctSpace/g,hh).replace(/punctSpace/g,ph).replace(/punct/g,Yl).getRegex(),_h=ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ql).replace(/punctSpace/g,qr).replace(/punct/g,Ms).getRegex(),kh=ce(/\\(punct)/,"gu").replace(/punct/g,Ms).getRegex(),wh=ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xh=ce(zr).replace("(?:-->|$)","-->").getRegex(),Ch=ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),gs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Th=ce(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",gs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ta=ce(/^!?\[(label)\]\[(ref)\]/).replace("label",gs).replace("ref",Gr).getRegex(),na=ce(/^!?\[(ref)\](?:\[\])?/).replace("ref",Gr).getRegex(),Rh=ce("reflink|nolink(?!\\()","g").replace("reflink",ta).replace("nolink",na).getRegex(),Kr={_backpedal:Mn,anyPunctuation:kh,autolink:wh,blockSkip:gh,br:Jl,code:uh,del:Mn,emStrongLDelim:mh,emStrongRDelimAst:vh,emStrongRDelimUnd:_h,escape:ch,link:Th,nolink:na,punctuation:dh,reflink:ta,reflinkSearch:Rh,tag:Ch,text:fh,url:Mn},Sh={...Kr,link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",gs).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",gs).getRegex()},hr={...Kr,emStrongRDelimAst:yh,emStrongLDelim:bh,url:ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ah={...hr,br:ce(Jl).replace("{2,}","*").getRegex(),text:ce(hr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Yn={normal:Vr,gfm:lh,pedantic:ah},xn={normal:Kr,gfm:hr,breaks:Ah,pedantic:Sh},Eh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},so=e=>Eh[e];function ct(e,t){if(t){if(Ne.escapeTest.test(e))return e.replace(Ne.escapeReplace,so)}else if(Ne.escapeTestNoEncode.test(e))return e.replace(Ne.escapeReplaceNoEncode,so);return e}function ro(e){try{e=encodeURI(e).replace(Ne.percentDecode,"%")}catch{return null}return e}function io(e,t){var i;const n=e.replace(Ne.findPipe,(o,l,a)=>{let u=!1,c=l;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(Ne.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(Ne.slashPipe,"|");return s}function Cn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function Ph(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function oo(e,t,n,s,r){const i=t.href,o=t.title||null,l=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,a}function Ih(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[l]=o;return l.length>=r.length?i.slice(r.length):i}).join(`
`)}var ms=class{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||en}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Cn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Ih(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Cn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Cn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Cn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let o=!1;const l=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))l.push(n[a]),o=!0;else if(!o)l.push(n[a]);else break;n=n.slice(a);const u=l.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,_=m.raw+`
`+n.join(`
`),v=this.blockquote(_);i[i.length-1]=v,s=s.substring(0,s.length-m.raw.length)+v.raw,r=r.substring(0,r.length-m.text.length)+v.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,_=m.raw+`
`+n.join(`
`),v=this.list(_);i[i.length-1]=v,s=s.substring(0,s.length-p.raw.length)+v.raw,r=r.substring(0,r.length-m.raw.length)+v.raw,n=_.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),p=e.split(`
`,1)[0],m=!d.trim(),_=0;if(this.options.pedantic?(_=2,c=d.trimStart()):m?_=t[1].length+1:(_=t[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,c=d.slice(_),_+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),a=!0),!a){const y=this.rules.other.nextBulletRegex(_),R=this.rules.other.hrRegex(_),T=this.rules.other.fencesBeginRegex(_),E=this.rules.other.headingBeginRegex(_),Z=this.rules.other.htmlBeginRegex(_);for(;e;){const te=e.split(`
`,1)[0];let Q;if(p=te,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),Q=p):Q=p.replace(this.rules.other.tabCharGlobal,"    "),T.test(p)||E.test(p)||Z.test(p)||y.test(p)||R.test(p))break;if(Q.search(this.rules.other.nonSpaceChar)>=_||!p.trim())c+=`
`+Q.slice(_);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||T.test(d)||E.test(d)||R.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=te+`
`,e=e.substring(te.length+1),d=Q.slice(_)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let v=null,A;this.options.gfm&&(v=this.rules.other.listIsTask.exec(c),v&&(A=v[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!v,checked:A,loose:!1,text:c,tokens:[]}),r.raw+=u}const l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const u=r.items[a].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=io(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of r)i.rows.push(io(l,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Cn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Ph(t[2],"()");if(i===-2)return;if(i>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),oo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return oo(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let o,l,a=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+l);if(Math.min(i,l)%2){const _=p.slice(1,-1);return{type:"em",raw:p,text:_,tokens:this.lexer.inlineTokens(_)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},xt=class gr{constructor(t){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||en,this.options.tokenizer=this.options.tokenizer||new ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Ne,block:Yn.normal,inline:xn.normal};this.options.pedantic?(n.block=Yn.pedantic,n.inline=xn.pedantic):this.options.gfm&&(n.block=Yn.gfm,this.options.breaks?n.inline=xn.breaks:n.inline=xn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Yn,inline:xn}}static lex(t,n){return new gr(n).lex(t)}static lexInline(t,n){return new gr(n).inlineTokens(t)}lex(t){t=t.replace(Ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,o;for(this.options.pedantic&&(t=t.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));t;){let l;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let a=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),s=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,a,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((a=(l=this.options.extensions)==null?void 0:l.inline)!=null&&a.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let _;this.options.extensions.startInline.forEach(v=>{_=v.call({lexer:this},m),typeof _=="number"&&_>=0&&(p=Math.min(p,_))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},bs=class{constructor(e){he(this,"options");he(this,"parser");this.options=e||en}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(Ne.notSpaceStart))==null?void 0:i[0],r=e.replace(Ne.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ct(s)+'">'+(n?r:ct(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:ct(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let o=0;o<e.items.length;o++){const l=e.items[o];s+=this.listitem(l)}const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+ct(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const i=e.rows[r];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ct(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ro(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+ct(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=ro(e);if(r===null)return ct(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${ct(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ct(e.text)}},Zr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Ct=class mr{constructor(t){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=t||en,this.options.renderer=this.options.renderer||new bs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zr}static parse(t,n){return new mr(n).parse(t)}static parseInline(t,n){return new mr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=l,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const a=l;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=u||"";continue}}const a=l;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},Qs,is=(Qs=class{constructor(e){he(this,"options");he(this,"block");this.options=e||en}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?xt.lex:xt.lexInline}provideParser(){return this.block?Ct.parse:Ct.parseInline}},he(Qs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Qs),Oh=class{constructor(...e){he(this,"defaults",Fr());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Ct);he(this,"Renderer",bs);he(this,"TextRenderer",Zr);he(this,"Lexer",xt);he(this,"Tokenizer",ms);he(this,"Hooks",is);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const a of l)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const a=o[l].flat(1/0);n=n.concat(this.walkTokens(a,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new bs(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,l=n.renderer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new ms(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,l=n.tokenizer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new is;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,l=n.hooks[o],a=r[o];is.passThroughHooks.has(i)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(d=>a.call(r,d));const c=l.call(r,u);return a.call(r,c)}:r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return xt.lex(e,t??this.defaults)}parser(e,t){return Ct.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const l=i.hooks?i.hooks.provideLexer():e?xt.lex:xt.lexInline,a=i.hooks?i.hooks.provideParser():e?Ct.parse:Ct.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+ct(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Qt=new Oh;function ee(e,t){return Qt.parse(e,t)}ee.options=ee.setOptions=function(e){return Qt.setOptions(e),ee.defaults=Qt.defaults,Vl(ee.defaults),ee};ee.getDefaults=Fr;ee.defaults=en;ee.use=function(...e){return Qt.use(...e),ee.defaults=Qt.defaults,Vl(ee.defaults),ee};ee.walkTokens=function(e,t){return Qt.walkTokens(e,t)};ee.parseInline=Qt.parseInline;ee.Parser=Ct;ee.parser=Ct.parse;ee.Renderer=bs;ee.TextRenderer=Zr;ee.Lexer=xt;ee.lexer=xt.lex;ee.Tokenizer=ms;ee.Hooks=is;ee.parse=ee;ee.options;ee.setOptions;ee.use;ee.walkTokens;ee.parseInline;Ct.parse;xt.lex;const $h=Object.fromEntries(cn.map(e=>[e.path,e.slug])),Mh=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),Lh=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return Mh(n.join("/"))},Nh=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",sa=()=>{const e=new Map;return t=>{const n=Nh(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},Dh=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?Lh(t,s):t;if(i.endsWith(".md")){const o=$h[i];if(o)return`#/docs/${o}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};ee.setOptions({gfm:!0,breaks:!0});const Bh=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const o=Dh(i,t,n);return`[${r}](${o})`}),Wh=e=>{const t=ee.lexer(String(e||"")),n=sa();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},Hh=(e,t,n)=>{const s=new ee.Renderer,r=sa();s.link=({href:o,title:l,tokens:a})=>{const u=ee.Parser.parseInline(a),c=o||"",d=/^https?:\/\//i.test(c),p=l?` title="${l}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:o,title:l,text:a})=>{const u=l?` title="${l}"`:"";return`<img src="${o}" alt="${a||""}"${u} />`},s.heading=({tokens:o,depth:l,text:a})=>{const u=r(a),c=ee.Parser.parseInline(o);return`<h${l} id="${u}" data-doc-heading="${u}">${c}</h${l}>`};const i=Bh(e,t,n);return ee.parse(i,{renderer:s})},Fh={class:"docs-sidebar surface-card"},jh={key:0,class:"docs-article-shell"},Uh={class:"doc-breadcrumb"},Gh={class:"doc-header surface-card"},zh={class:"card-label"},Vh={class:"doc-meta"},qh=["innerHTML"],Kh={class:"doc-footer surface-card"},Zh={key:1,class:"docs-outline surface-card"},Jh=["onClick"],Qh={key:2,class:"docs-article-shell"},Yh={class:"empty-state"},Xh={__name:"DocArticlePage",setup(e){const t=Nl(),n=Hf(),s=Se(""),r=ye(()=>zl[t.params.slug]),i=ye(()=>r.value?Jp[r.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),o=ye(()=>Wh(i.value)),l=ye(()=>r.value?Hh(i.value,r.value.path,r.value.slug):""),a=ye(()=>cn.findIndex(_=>{var v;return _.slug===((v=r.value)==null?void 0:v.slug)})),u=ye(()=>a.value>0?cn[a.value-1]:null),c=ye(()=>a.value>=0&&a.value<cn.length-1?cn[a.value+1]:null),d=()=>{const _=o.value.find(v=>{const A=document.getElementById(v.id);if(!A)return!1;const y=A.getBoundingClientRect();return y.top>=0&&y.top<=180});_&&(s.value=_.id)},p=async _=>{await Dn();const v=document.getElementById(_);v&&(s.value=_,v.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:_}}))},m=async()=>{var v;await Dn();const _=t.query.section?String(t.query.section):"";if(_){const A=document.getElementById(_);if(A){s.value=_,requestAnimationFrame(()=>A.scrollIntoView({behavior:"smooth",block:"start"}));return}}s.value=((v=o.value[0])==null?void 0:v.id)||""};return Xt(()=>{window.addEventListener("scroll",d,{passive:!0})}),Ss(()=>{window.removeEventListener("scroll",d)}),Jt([l,()=>t.query.section,()=>t.params.slug],m,{immediate:!0}),(_,v)=>{const A=Wt("router-link");return O(),L("div",{class:Ve(["page-shell container docs-layout-page",{"has-outline":o.value.length}])},[f("aside",Fh,[v[0]||(v[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(O(!0),L(pe,null,Re(de(hs),y=>(O(),L("div",{key:y.key,class:"docs-nav-group"},[f("h3",null,W(y.title),1),(O(!0),L(pe,null,Re(y.items,R=>{var T;return O(),an(A,{key:R.slug,to:`/docs/${R.slug}`,class:Ve(["docs-nav-link",{active:((T=r.value)==null?void 0:T.slug)===R.slug}])},{default:K(()=>[f("span",null,W(R.title),1),f("small",null,W(R.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))]),r.value?(O(),L("section",jh,[f("div",Uh,[j(A,{to:"/docs"},{default:K(()=>[...v[1]||(v[1]=[J("文档首页",-1)])]),_:1}),v[2]||(v[2]=f("span",null,"/",-1)),f("span",null,W(r.value.groupTitle),1)]),f("header",Gh,[f("div",null,[f("span",zh,W(r.value.tag),1),f("h1",null,W(r.value.title),1),f("p",null,W(r.value.description),1)]),f("div",Vh,[f("span",null,W(r.value.groupTitle),1),f("span",null,W(r.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:l.value},null,8,qh),f("footer",Kh,[u.value?(O(),an(A,{key:0,class:"doc-pager",to:`/docs/${u.value.slug}`},{default:K(()=>[v[3]||(v[3]=f("small",null,"上一篇",-1)),f("strong",null,W(u.value.title),1)]),_:1},8,["to"])):(O(),an(A,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:K(()=>[...v[4]||(v[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),c.value?(O(),an(A,{key:2,class:"doc-pager align-right",to:`/docs/${c.value.slug}`},{default:K(()=>[v[5]||(v[5]=f("small",null,"下一篇",-1)),f("strong",null,W(c.value.title),1)]),_:1},8,["to"])):Qe("",!0)])])):Qe("",!0),r.value&&o.value.length?(O(),L("aside",Zh,[v[6]||(v[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(O(!0),L(pe,null,Re(o.value,y=>(O(),L("button",{key:y.id,class:Ve(["docs-outline-link",[`depth-${y.depth}`,{active:s.value===y.id}]]),onClick:R=>p(y.id)},W(y.text),11,Jh))),128))])):r.value?Qe("",!0):(O(),L("section",Qh,[f("div",Yh,[v[8]||(v[8]=f("strong",null,"没有找到对应文档。",-1)),v[9]||(v[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),j(A,{class:"button primary",to:"/docs"},{default:K(()=>[...v[7]||(v[7]=[J("返回文档首页",-1)])]),_:1})])]))],2)}}},eg={class:"page-shell container"},tg={class:"roadmap-grid"},ng={class:"roadmap-head"},sg={class:"card-label"},rg={class:"roadmap-list"},ig={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(O(),L("div",eg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",tg,[(O(),L(pe,null,Re(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",ng,[f("span",sg,W(r.tag),1),f("h2",null,W(r.title),1),f("p",null,W(r.description),1)]),f("div",rg,[(O(!0),L(pe,null,Re(r.items,i=>(O(),L("div",{class:"roadmap-item",key:i.title},[f("div",{class:Ve(["roadmap-state",r.stateClass])},W(r.stateLabel),3),f("h3",null,W(i.title),1),f("p",null,W(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=Ye('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},og={class:"page-shell container"},lg={class:"page-hero"},ag={class:"hero-actions"},cg={class:"stack-section surface-card changelog-toolbar"},ug={class:"release-filter-row"},fg={class:"filter-chip-group"},dg=["onClick"],pg={key:0,class:"stack-section"},hg={key:1,class:"stack-section changelog-timeline"},gg={class:"timeline-card surface-card"},mg={class:"release-head"},bg={class:"release-date"},vg={class:"release-tag"},yg={key:0,class:"bullet-list compact-list"},_g={key:1,class:"release-body"},kg={class:"release-actions"},wg=["href"],xg={class:"muted"},Cg={key:2,class:"stack-section"},Tg={__name:"ChangelogPage",setup(e){const t=Se(!0),n=Se([]),s=Se("all"),r=Se(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=ye(()=>{const l=r.value.toLowerCase();return Gl(n.value).filter(a=>{const u=Nt(a);return s.value!=="all"&&u!==s.value?!1:l?[a.name,a.tag_name,Gn(a.body)].filter(Boolean).join(" ").toLowerCase().includes(l):!0})});return Xt(async()=>{const l=await jl();n.value=l.data,t.value=!1}),(l,a)=>{const u=Wt("router-link");return O(),L("div",og,[f("section",lg,[a[3]||(a[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),a[4]||(a[4]=f("h1",null,"更新日志",-1)),a[5]||(a[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",ag,[a[2]||(a[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(u,{class:"button secondary",to:"/downloads"},{default:K(()=>[...a[1]||(a[1]=[J("查看下载页",-1)])]),_:1})])]),f("section",cg,[a[6]||(a[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",ug,[f("div",fg,[(O(),L(pe,null,Re(i,c=>f("button",{key:c.value,class:Ve(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},W(c.label),11,dg)),64))]),Or(f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Dr,r.value,void 0,{trim:!0}]])])]),t.value?(O(),L("section",pg,[...a[7]||(a[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(O(),L("section",hg,[(O(!0),L(pe,null,Re(o.value,c=>(O(),L("article",{class:"timeline-item",key:c.id||c.tag_name},[a[8]||(a[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",gg,[f("div",mg,[f("span",{class:Ve(["release-badge",{alt:de(Nt)(c)==="preview"}])},W(de(Ul)(de(Nt)(c))),3),f("span",bg,W(de(rs)(c.published_at)),1)]),f("h3",null,W(c.name||c.tag_name),1),f("p",vg,W(c.tag_name),1),de(Lt)(c.body,5).length?(O(),L("ul",yg,[(O(!0),L(pe,null,Re(de(Lt)(c.body,5),d=>(O(),L("li",{key:d},W(d),1))),128))])):(O(),L("p",_g,W(de(Gn)(c.body)||"暂无发布说明。"),1)),f("div",kg,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,wg),f("span",xg,W((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(O(),L("section",Cg,[...a[9]||(a[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Rg={class:"page-shell container"},Sg={class:"stack-section"},Ag={class:"section-head left"},Eg={key:0,class:"contributor-grid"},Pg=["href"],Ig=["src","alt"],Og={key:1,class:"empty-state"},$g={__name:"CommunityPage",setup(e){const t=Se([]),n=Se("empty"),s=ye(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return Xt(async()=>{const r=await Id();t.value=r.data,n.value=r.source}),(r,i)=>(O(),L("div",Rg,[i[2]||(i[2]=Ye('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持入口</h1><p> 这里不是单纯放几个链接，而是把项目协作方式、反馈入口、社区沟通与常见问题集中到一个更像正式官网的团队页里。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",Sg,[f("div",Ag,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,W(s.value),1)]),t.value.length?(O(),L("div",Eg,[(O(!0),L(pe,null,Re(t.value,o=>(O(),L("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login},null,8,Ig),f("strong",null,W(o.login),1),f("small",null,W(o.contributions)+" 次公开提交",1)],8,Pg))),128))])):(O(),L("div",Og,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=Ye('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},Mg=[{path:"/",component:wd,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:Rd,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:_p,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:Ip,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:Xh,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:ig,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:Tg,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:$g,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],ra=Wf({history:bf("/"),routes:Mg}),ia=Eu(Qf);ra.afterEach((e,t)=>{var a,u,c,d;const n="TreeCore 官方网站",s=(a=e.params)!=null&&a.slug?zl[e.params.slug]:null,r=(s==null?void 0:s.title)||((u=e.meta)==null?void 0:u.title),i=(s==null?void 0:s.description)||((c=e.meta)==null?void 0:c.description);document.title=r?`${r} | ${n}`:n;const o=document.querySelector('meta[name="description"]');o&&i&&o.setAttribute("content",i),e.path===t.path&&((d=e.query)==null?void 0:d.section)||window.scrollTo({top:0,behavior:"smooth"})});ia.use(ra);ia.mount("#app");

var la=Object.defineProperty;var aa=(e,t,n)=>t in e?la(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>aa(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const me={},dn=[],dt=()=>{},lo=()=>!1,_s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yr=e=>e.startsWith("onUpdate:"),Se=Object.assign,kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ca=Object.prototype.hasOwnProperty,ae=(e,t)=>ca.call(e,t),G=Array.isArray,pn=e=>Vn(e)==="[object Map]",ao=e=>Vn(e)==="[object Set]",Xr=e=>Vn(e)==="[object Date]",J=e=>typeof e=="function",xe=e=>typeof e=="string",ht=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",co=e=>(ce(e)||J(e))&&J(e.then)&&J(e.catch),uo=Object.prototype.toString,Vn=e=>uo.call(e),ua=e=>Vn(e).slice(8,-1),fo=e=>Vn(e)==="[object Object]",wr=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fa=/-\w/g,Je=ys(e=>e.replace(fa,t=>t.slice(1).toUpperCase())),da=/\B([A-Z])/g,Xt=ys(e=>e.replace(da,"-$1").toLowerCase()),ks=ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ds=ys(e=>e?`on${ks(e)}`:""),Dt=(e,t)=>!Object.is(e,t),es=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},po=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pa=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let ei;const ws=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=xe(s)?ba(s):xs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(xe(e)||ce(e))return e}const ha=/;(?![^(]*\))/g,ga=/:([^]+)/,ma=/\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ma,"").split(ha).forEach(n=>{if(n){const s=n.split(ga);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ie(e){let t="";if(xe(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const s=Ie(e[n]);s&&(t+=s+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_a=_r(va);function ho(e){return!!e||e===""}function ya(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Cr(e[s],t[s]);return n}function Cr(e,t){if(e===t)return!0;let n=Xr(e),s=Xr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ht(e),s=ht(t),n||s)return e===t;if(n=G(e),s=G(t),n||s)return n&&s?ya(e,t):!1;if(n=ce(e),s=ce(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Cr(e[o],t[o]))return!1}}return String(e)===String(t)}const go=e=>!!(e&&e.__v_isRef===!0),$=e=>xe(e)?e:e==null?"":G(e)||ce(e)&&(e.toString===uo||!J(e.toString))?go(e)?$(e.value):JSON.stringify(e,mo,2):String(e),mo=(e,t)=>go(t)?mo(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Bs(s,i)+" =>"]=r,n),{})}:ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Bs(n))}:ht(t)?Bs(t):ce(t)&&!G(t)&&!fo(t)?String(t):t,Bs=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ka{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wa(){return je}let _e;const Ws=new WeakSet;class bo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ws.has(this)&&(Ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),yo(this);const t=_e,n=Ye;_e=this,Ye=!0;try{return this.fn()}finally{ko(this),_e=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sr(t);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){er(this)&&this.run()}get dirty(){return er(this)}}let vo=0,En,Pn;function _o(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=En,En=e}function Tr(){vo++}function Rr(){if(--vo>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;En;){let t=En;for(En=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function yo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ko(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Sr(s),xa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function er(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(wo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function wo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dn)||(e.globalVersion=Dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!er(e))))return;e.flags|=2;const t=e.dep,n=_e,s=Ye;_e=e,Ye=!0;try{yo(e);const r=e.fn(e._value);(t.version===0||Dt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{_e=n,Ye=s,ko(e),e.flags&=-3}}function Sr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function xa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const xo=[];function Tt(){xo.push(Ye),Ye=!1}function Rt(){const e=xo.pop();Ye=e===void 0?!0:e}function ti(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=_e;_e=void 0;try{t()}finally{_e=n}}}let Dn=0;class Ca{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ar{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Ye||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Ca(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,Co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=s)}return n}trigger(t){this.version++,Dn++,this.notify(t)}notify(t){Tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rr()}}}function Co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Co(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const tr=new WeakMap,Jt=Symbol(""),nr=Symbol(""),Bn=Symbol("");function Ee(e,t,n){if(Ye&&_e){let s=tr.get(e);s||tr.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ar),r.map=s,r.key=n),r.track()}}function kt(e,t,n,s,r,i){const o=tr.get(e);if(!o){Dn++;return}const a=l=>{l&&l.trigger()};if(Tr(),t==="clear")o.forEach(a);else{const l=G(e),u=l&&wr(n);if(l&&n==="length"){const c=Number(s);o.forEach((d,p)=>{(p==="length"||p===Bn||!ht(p)&&p>=c)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Bn)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Jt)),pn(e)&&a(o.get(nr)));break;case"delete":l||(a(o.get(Jt)),pn(e)&&a(o.get(nr)));break;case"set":pn(e)&&a(o.get(Jt));break}}Rr()}function rn(e){const t=re(e);return t===e?t:(Ee(t,"iterate",Bn),Ze(e)?t:t.map(et))}function Cs(e){return Ee(e=re(e),"iterate",Bn),e}function $t(e,t){return St(e)?mn(Qt(e)?et(t):t):et(t)}const Ta={__proto__:null,[Symbol.iterator](){return Hs(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return rn(this).concat(...e.map(t=>G(t)?rn(t):t))},entries(){return Hs(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>$t(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return yn(this,"pop")},push(...e){return yn(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return yn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return yn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return yn(this,"unshift",e)},values(){return Hs(this,"values",e=>$t(this,e))}};function Hs(e,t,n){const s=Cs(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ra=Array.prototype;function mt(e,t,n,s,r,i){const o=Cs(e),a=o!==e&&!Ze(e),l=o[t];if(l!==Ra[t]){const d=l.apply(e,i);return a?et(d):d}let u=n;o!==e&&(a?u=function(d,p){return n.call(this,$t(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=l.call(o,u,s);return a&&r?r(c):c}function ni(e,t,n,s){const r=Cs(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,$t(e,a),l,e)}),r[t](i,...s)}function Fs(e,t,n){const s=re(e);Ee(s,"iterate",Bn);const r=s[t](...n);return(r===-1||r===!1)&&Ir(n[0])?(n[0]=re(n[0]),s[t](...n)):r}function yn(e,t,n=[]){Tt(),Tr();const s=re(e)[t].apply(e,n);return Rr(),Rt(),s}const Sa=_r("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Aa(e){ht(e)||(e=String(e));const t=re(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ro{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ba:Po:i?Eo:Ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=G(t);if(!r){let l;if(o&&(l=Ta[n]))return l;if(n==="hasOwnProperty")return Aa}const a=Reflect.get(t,n,$e(t)?t:s);if((ht(n)?To.has(n):Sa(n))||(r||Ee(t,"get",n),i))return a;if($e(a)){const l=o&&wr(n)?a:a.value;return r&&ce(l)?rr(l):l}return ce(a)?r?rr(a):Ts(a):a}}class So extends Ro{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=G(t)&&wr(n);if(!this._isShallow){const u=St(i);if(!Ze(s)&&!St(s)&&(i=re(i),s=re(s)),!o&&$e(i)&&!$e(s))return u||(i.value=s),!0}const a=o?Number(n)<t.length:ae(t,n),l=Reflect.set(t,n,s,$e(t)?t:r);return t===re(r)&&(a?Dt(s,i)&&kt(t,"set",n,s):kt(t,"add",n,s)),l}deleteProperty(t,n){const s=ae(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&kt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!To.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",G(t)?"length":Jt),Reflect.ownKeys(t)}}class Ea extends Ro{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Pa=new So,Ia=new Ea,$a=new So(!0);const sr=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function Oa(e,t,n){return function(...s){const r=this.__v_raw,i=re(r),o=pn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),c=n?sr:t?mn:et;return!t&&Ee(i,"iterate",l?nr:Jt),Se(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function Qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function La(e,t){const n={get(r){const i=this.__v_raw,o=re(i),a=re(r);e||(Dt(r,a)&&Ee(o,"get",r),Ee(o,"get",a));const{has:l}=Jn(o),u=t?sr:e?mn:et;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(re(r),"iterate",Jt),r.size},has(r){const i=this.__v_raw,o=re(i),a=re(r);return e||(Dt(r,a)&&Ee(o,"has",r),Ee(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=re(a),u=t?sr:e?mn:et;return!e&&Ee(l,"iterate",Jt),a.forEach((c,d)=>r.call(i,u(c),u(d),o))}};return Se(n,e?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(r){!t&&!Ze(r)&&!St(r)&&(r=re(r));const i=re(this);return Jn(i).has.call(i,r)||(i.add(r),kt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!St(i)&&(i=re(i));const o=re(this),{has:a,get:l}=Jn(o);let u=a.call(o,r);u||(r=re(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,i),u?Dt(i,c)&&kt(o,"set",r,i):kt(o,"add",r,i),this},delete(r){const i=re(this),{has:o,get:a}=Jn(i);let l=o.call(i,r);l||(r=re(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&kt(i,"delete",r,void 0),u},clear(){const r=re(this),i=r.size!==0,o=r.clear();return i&&kt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Oa(r,e,t)}),n}function Er(e,t){const n=La(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const Ma={get:Er(!1,!1)},Na={get:Er(!1,!0)},Da={get:Er(!0,!1)};const Ao=new WeakMap,Eo=new WeakMap,Po=new WeakMap,Ba=new WeakMap;function Wa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(e){return e.__v_skip||!Object.isExtensible(e)?0:Wa(ua(e))}function Ts(e){return St(e)?e:Pr(e,!1,Pa,Ma,Ao)}function Io(e){return Pr(e,!1,$a,Na,Eo)}function rr(e){return Pr(e,!0,Ia,Da,Po)}function Pr(e,t,n,s,r){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ha(e);if(i===0)return e;const o=r.get(e);if(o)return o;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function Qt(e){return St(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Ir(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Fa(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&po(e,"__v_skip",!0),e}const et=e=>ce(e)?Ts(e):e,mn=e=>ce(e)?rr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function Re(e){return $o(e,!1)}function ja(e){return $o(e,!0)}function $o(e,t){return $e(e)?e:new za(e,t)}class za{constructor(t,n){this.dep=new Ar,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:et(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||St(t);t=s?t:re(t),Dt(t,n)&&(this._rawValue=t,this._value=s?t:et(t),this.dep.trigger())}}function pe(e){return $e(e)?e.value:e}const Ua={get:(e,t,n)=>t==="__v_raw"?e:pe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Oo(e){return Qt(e)?e:new Proxy(e,Ua)}class Ga{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ar(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return _o(this,!0),!0}get value(){const t=this.dep.track();return wo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Va(e,t,n=!1){let s,r;return J(e)?s=e:(s=e.get,r=e.set),new Ga(s,r,n)}const Yn={},ls=new WeakMap;let Vt;function qa(e,t=!1,n=Vt){if(n){let s=ls.get(n);s||ls.set(n,s=[]),s.push(e)}}function Ka(e,t,n=me){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=_=>r?_:Ze(_)||r===!1||r===0?wt(_,1):wt(_);let c,d,p,m,x=!1,T=!1;if($e(e)?(d=()=>e.value,x=Ze(e)):Qt(e)?(d=()=>u(e),x=!0):G(e)?(T=!0,x=e.some(_=>Qt(_)||Ze(_)),d=()=>e.map(_=>{if($e(_))return _.value;if(Qt(_))return u(_);if(J(_))return l?l(_,2):_()})):J(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){Tt();try{p()}finally{Rt()}}const _=Vt;Vt=c;try{return l?l(e,3,[m]):e(m)}finally{Vt=_}}:d=dt,t&&r){const _=d,L=r===!0?1/0:r;d=()=>wt(_(),L)}const O=wa(),k=()=>{c.stop(),O&&O.active&&kr(O.effects,c)};if(i&&t){const _=t;t=(...L)=>{_(...L),k()}}let A=T?new Array(e.length).fill(Yn):Yn;const R=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(t){const L=c.run();if(r||x||(T?L.some((Z,V)=>Dt(Z,A[V])):Dt(L,A))){p&&p();const Z=Vt;Vt=c;try{const V=[L,A===Yn?void 0:T&&A[0]===Yn?[]:A,m];A=L,l?l(t,3,V):t(...V)}finally{Vt=Z}}}else c.run()};return a&&a(R),c=new bo(d),c.scheduler=o?()=>o(R,!1):R,m=_=>qa(_,!1,c),p=c.onStop=()=>{const _=ls.get(c);if(_){if(l)l(_,4);else for(const L of _)L();ls.delete(c)}},t?s?R(!0):A=c.run():o?o(R.bind(null,!0),!0):c.run(),k.pause=c.pause.bind(c),k.resume=c.resume.bind(c),k.stop=k,k}function wt(e,t=1/0,n){if(t<=0||!ce(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))wt(e.value,t,n);else if(G(e))for(let s=0;s<e.length;s++)wt(e[s],t,n);else if(ao(e)||pn(e))e.forEach(s=>{wt(s,t,n)});else if(fo(e)){for(const s in e)wt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&wt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(e,t,n,s){try{return s?e(...s):e()}catch(r){Rs(r,t,n)}}function tt(e,t,n,s){if(J(e)){const r=qn(e,t,n,s);return r&&co(r)&&r.catch(i=>{Rs(i,t,n)}),r}if(G(e)){const r=[];for(let i=0;i<e.length;i++)r.push(tt(e[i],t,n,s));return r}}function Rs(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(i){Tt(),qn(i,null,10,[e,l,u]),Rt();return}}Za(e,n,r,s,o)}function Za(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let ct=-1;const hn=[];let Ot=null,on=0;const Lo=Promise.resolve();let as=null;function Kt(e){const t=as||Lo;return e?t.then(this?e.bind(this):e):t}function Ja(e){let t=ct+1,n=Me.length;for(;t<n;){const s=t+n>>>1,r=Me[s],i=Wn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function $r(e){if(!(e.flags&1)){const t=Wn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Wn(n)?Me.push(e):Me.splice(Ja(t),0,e),e.flags|=1,Mo()}}function Mo(){as||(as=Lo.then(Do))}function Qa(e){G(e)?hn.push(...e):Ot&&e.id===-1?Ot.splice(on+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),Mo()}function si(e,t,n=ct+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(e){if(hn.length){const t=[...new Set(hn)].sort((n,s)=>Wn(n)-Wn(s));if(hn.length=0,Ot){Ot.push(...t);return}for(Ot=t,on=0;on<Ot.length;on++){const n=Ot[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,on=0}}const Wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Do(e){try{for(ct=0;ct<Me.length;ct++){const t=Me[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Me.length;ct++){const t=Me[ct];t&&(t.flags&=-2)}ct=-1,Me.length=0,No(),as=null,(Me.length||hn.length)&&Do()}}let Ge=null,Bo=null;function cs(e){const t=Ge;return Ge=e,Bo=e&&e.type.__scopeId||null,t}function Q(e,t=Ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ds(-1);const i=cs(t);let o;try{o=e(...r)}finally{cs(i),s._d&&ds(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Or(e,t){if(Ge===null)return e;const n=$s(Ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=me]=t[r];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&wt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function jt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Tt(),tt(l,n,8,[e.el,a,e,t]),Rt())}}function ts(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function Xe(e,t,n=!1){const s=_l();if(s||gn){let r=gn?gn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Ya=Symbol.for("v-scx"),Xa=()=>Xe(Ya);function Bt(e,t,n){return Wo(e,t,n)}function Wo(e,t,n=me){const{immediate:s,deep:r,flush:i,once:o}=n,a=Se({},n),l=t&&s||!t&&i!=="post";let u;if(jn){if(i==="sync"){const m=Xa();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Pe;a.call=(m,x,T)=>tt(m,c,x,T);let d=!1;i==="post"?a.scheduler=m=>{Fe(m,c&&c.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,x)=>{x?m():$r(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=Ka(e,t,a);return jn&&(u?u.push(p):l&&p()),p}function ec(e,t,n){const s=this.proxy,r=xe(e)?e.includes(".")?Ho(s,e):()=>s[e]:e.bind(s,s);let i;J(t)?i=t:(i=t.handler,n=t);const o=Kn(this),a=Wo(r,i.bind(s),n);return o(),a}function Ho(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const tc=Symbol("_vte"),Fo=e=>e.__isTeleport,ut=Symbol("_leaveCb"),kn=Symbol("_enterCb");function nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{e.isMounted=!0}),Es(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],jo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},zo=e=>{const t=e.subTree;return t.component?zo(t.component):t},sc={name:"BaseTransition",props:jo,setup(e,{slots:t}){const n=_l(),s=nc();return()=>{const r=t.default&&Vo(t.default(),!0);if(!r||!r.length)return;const i=Uo(r),o=re(e),{mode:a}=o;if(s.isLeaving)return js(i);const l=ri(i);if(!l)return js(i);let u=ir(l,o,s,n,d=>u=d);l.type!==Ne&&Hn(l,u);let c=n.subTree&&ri(n.subTree);if(c&&c.type!==Ne&&!qt(c,l)&&zo(n).type!==Ne){let d=ir(c,o,s,n);if(Hn(c,d),a==="out-in"&&l.type!==Ne)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},js(i);a==="in-out"&&l.type!==Ne?d.delayLeave=(p,m,x)=>{const T=Go(s,c);T[String(c.key)]=c,p[ut]=()=>{m(),p[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Uo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ne){t=n;break}}return t}const rc=sc;function Go(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ir(e,t,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:T,onBeforeAppear:O,onAppear:k,onAfterAppear:A,onAppearCancelled:R}=t,_=String(e.key),L=Go(n,e),Z=(q,se)=>{q&&tt(q,s,9,se)},V=(q,se)=>{const be=se[1];Z(q,se),G(q)?q.every(W=>W.length<=1)&&be():q.length<=1&&be()},ke={mode:o,persisted:a,beforeEnter(q){let se=l;if(!n.isMounted)if(i)se=O||l;else return;q[ut]&&q[ut](!0);const be=L[_];be&&qt(e,be)&&be.el[ut]&&be.el[ut](),Z(se,[q])},enter(q){if(L[_]===e)return;let se=u,be=c,W=d;if(!n.isMounted)if(i)se=k||u,be=A||c,W=R||d;else return;let ie=!1;q[kn]=ze=>{ie||(ie=!0,ze?Z(W,[q]):Z(be,[q]),ke.delayedLeave&&ke.delayedLeave(),q[kn]=void 0)};const Ae=q[kn].bind(null,!1);se?V(se,[q,Ae]):Ae()},leave(q,se){const be=String(e.key);if(q[kn]&&q[kn](!0),n.isUnmounting)return se();Z(p,[q]);let W=!1;q[ut]=Ae=>{W||(W=!0,se(),Ae?Z(T,[q]):Z(x,[q]),q[ut]=void 0,L[be]===e&&delete L[be])};const ie=q[ut].bind(null,!1);L[be]=e,m?V(m,[q,ie]):ie()},clone(q){const se=ir(q,t,n,s,r);return r&&r(se),se}};return ke}function js(e){if(Ss(e))return e=Wt(e),e.children=null,e}function ri(e){if(!Ss(e))return Fo(e.type)&&e.children?Uo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function Hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vo(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Y?(o.patchFlag&128&&r++,s=s.concat(Vo(o.children,t,a))):(t||o.type!==Ne)&&s.push(a!=null?Wt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function qo(e,t){return J(e)?Se({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ii(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const us=new WeakMap;function In(e,t,n,s,r=!1){if(G(e)){e.forEach((T,O)=>In(T,t&&(G(t)?t[O]:t),n,s,r));return}if($n(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&In(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?$s(s.component):s.el,o=r?null:i,{i:a,r:l}=e,u=t&&t.r,c=a.refs===me?a.refs={}:a.refs,d=a.setupState,p=re(d),m=d===me?lo:T=>ii(c,T)?!1:ae(p,T),x=(T,O)=>!(O&&ii(c,O));if(u!=null&&u!==l){if(oi(t),xe(u))c[u]=null,m(u)&&(d[u]=null);else if($e(u)){const T=t;x(u,T.k)&&(u.value=null),T.k&&(c[T.k]=null)}}if(J(l))qn(l,a,12,[o,c]);else{const T=xe(l),O=$e(l);if(T||O){const k=()=>{if(e.f){const A=T?m(l)?d[l]:c[l]:x()||!e.k?l.value:c[e.k];if(r)G(A)&&kr(A,i);else if(G(A))A.includes(i)||A.push(i);else if(T)c[l]=[i],m(l)&&(d[l]=c[l]);else{const R=[i];x(l,e.k)&&(l.value=R),e.k&&(c[e.k]=R)}}else T?(c[l]=o,m(l)&&(d[l]=o)):O&&(x(l,e.k)&&(l.value=o),e.k&&(c[e.k]=o))};if(o){const A=()=>{k(),us.delete(e)};A.id=-1,us.set(e,A),Fe(A,n)}else oi(e),k()}}}function oi(e){const t=us.get(e);t&&(t.flags|=8,us.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const $n=e=>!!e.type.__asyncLoader,Ss=e=>e.type.__isKeepAlive;function ic(e,t){Zo(e,"a",t)}function oc(e,t){Zo(e,"da",t)}function Zo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(As(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ss(r.parent.vnode)&&lc(s,t,n,r),r=r.parent}}function lc(e,t,n,s){const r=As(t,e,s,!0);Jo(()=>{kr(s[t],r)},n)}function As(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Tt();const a=Kn(n),l=tt(t,n,e,o);return a(),Rt(),l});return s?r.unshift(i):r.push(i),i}}const At=e=>(t,n=Pe)=>{(!jn||e==="sp")&&As(e,(...s)=>t(...s),n)},ac=At("bm"),en=At("m"),cc=At("bu"),uc=At("u"),Es=At("bum"),Jo=At("um"),fc=At("sp"),dc=At("rtg"),pc=At("rtc");function hc(e,t=Pe){As("ec",e,t)}const Qo="components";function Ht(e,t){return Xo(Qo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function gc(e){return xe(e)?Xo(Qo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=Ge||Pe;if(r){const i=r.type;{const a=Xc(i,!1);if(a&&(a===t||a===Je(t)||a===ks(Je(t))))return i}const o=li(r[e]||i[e],t)||li(r.appContext[e],t);return!o&&s?i:o}}function li(e,t){return e&&(e[t]||e[Je(t)]||e[ks(Je(t))])}function ye(e,t,n,s){let r;const i=n,o=G(e);if(o||xe(e)){const a=o&&Qt(e);let l=!1,u=!1;a&&(l=!Ze(e),u=St(e),e=Cs(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(l?u?mn(et(e[c])):et(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(ce(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(e[c],c,l,i)}}else r=[];return r}const or=e=>e?yl(e)?$s(e):or(e.parent):null,On=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>tl(e),$forceUpdate:e=>e.f||(e.f=()=>{$r(e.update)}),$nextTick:e=>e.n||(e.n=Kt.bind(e.proxy)),$watch:e=>ec.bind(e)}),zs=(e,t)=>e!==me&&!e.__isScriptSetup&&ae(e,t),mc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(zs(s,t))return o[t]=1,s[t];if(r!==me&&ae(r,t))return o[t]=2,r[t];if(ae(i,t))return o[t]=3,i[t];if(n!==me&&ae(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const u=On[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==me&&ae(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,ae(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return zs(r,t)?(r[t]=n,!0):s!==me&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||e!==me&&a[0]!=="$"&&ae(e,a)||zs(t,a)||ae(i,a)||ae(s,a)||ae(On,a)||ae(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lr=!0;function bc(e){const t=tl(e),n=e.proxy,s=e.ctx;lr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:x,activated:T,deactivated:O,beforeDestroy:k,beforeUnmount:A,destroyed:R,unmounted:_,render:L,renderTracked:Z,renderTriggered:V,errorCaptured:ke,serverPrefetch:q,expose:se,inheritAttrs:be,components:W,directives:ie,filters:Ae}=t;if(u&&vc(u,s,null),o)for(const de in o){const oe=o[de];J(oe)&&(s[de]=oe.bind(n))}if(r){const de=r.call(n,n);ce(de)&&(e.data=Ts(de))}if(lr=!0,i)for(const de in i){const oe=i[de],gt=J(oe)?oe.bind(n,n):J(oe.get)?oe.get.bind(n,n):dt,Et=!J(oe)&&J(oe.set)?oe.set.bind(n):dt,st=he({get:gt,set:Et});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>st.value,set:Be=>st.value=Be})}if(a)for(const de in a)el(a[de],s,n,de);if(l){const de=J(l)?l.call(n):l;Reflect.ownKeys(de).forEach(oe=>{ts(oe,de[oe])})}c&&ci(c,e,"c");function Ce(de,oe){G(oe)?oe.forEach(gt=>de(gt.bind(n))):oe&&de(oe.bind(n))}if(Ce(ac,d),Ce(en,p),Ce(cc,m),Ce(uc,x),Ce(ic,T),Ce(oc,O),Ce(hc,ke),Ce(pc,Z),Ce(dc,V),Ce(Es,A),Ce(Jo,_),Ce(fc,q),G(se))if(se.length){const de=e.exposed||(e.exposed={});se.forEach(oe=>{Object.defineProperty(de,oe,{get:()=>n[oe],set:gt=>n[oe]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});L&&e.render===dt&&(e.render=L),be!=null&&(e.inheritAttrs=be),W&&(e.components=W),ie&&(e.directives=ie),q&&Ko(e)}function vc(e,t,n=dt){G(e)&&(e=ar(e));for(const s in e){const r=e[s];let i;ce(r)?"default"in r?i=Xe(r.from||s,r.default,!0):i=Xe(r.from||s):i=Xe(r),$e(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ci(e,t,n){tt(G(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function el(e,t,n,s){let r=s.includes(".")?Ho(n,s):()=>n[s];if(xe(e)){const i=t[e];J(i)&&Bt(r,i)}else if(J(e))Bt(r,e.bind(n));else if(ce(e))if(G(e))e.forEach(i=>el(i,t,n,s));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Bt(r,i,e)}}function tl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>fs(l,u,o,!0)),fs(l,t,o)),ce(t)&&i.set(t,l),l}function fs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&fs(e,i,n,!0),r&&r.forEach(o=>fs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=_c[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const _c={data:ui,props:fi,emits:fi,methods:Sn,computed:Sn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Sn,directives:Sn,watch:kc,provide:ui,inject:yc};function ui(e,t){return t?e?function(){return Se(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function yc(e,t){return Sn(ar(e),ar(t))}function ar(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Sn(e,t){return e?Se(Object.create(null),e,t):t}function fi(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:Se(Object.create(null),ai(e),ai(t??{})):t}function kc(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const s in t)n[s]=Oe(e[s],t[s]);return n}function nl(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wc=0;function xc(e,t){return function(s,r=null){J(s)||(s=Se({},s)),r!=null&&!ce(r)&&(r=null);const i=nl(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:wc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tu,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(u,...d)):J(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!l){const m=u._ceVNode||F(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),l=!0,u._container=c,c.__vue_app__=u,$s(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(tt(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=gn;gn=u;try{return c()}finally{gn=d}}};return u}}let gn=null;const Cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Tc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||me;let r=n;const i=t.startsWith("update:"),o=i&&Cc(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>xe(c)?c.trim():c)),o.number&&(r=n.map(xr)));let a,l=s[a=Ds(t)]||s[a=Ds(Je(t))];!l&&i&&(l=s[a=Ds(Xt(t))]),l&&tt(l,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(u,e,6,r)}}const Rc=new WeakMap;function sl(e,t,n=!1){const s=n?Rc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!J(e)){const l=u=>{const c=sl(u,t,!0);c&&(a=!0,Se(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(ce(e)&&s.set(e,null),null):(G(i)?i.forEach(l=>o[l]=null):Se(o,i),ce(e)&&s.set(e,o),o)}function Ps(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Xt(t))||ae(e,t))}function di(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:x,inheritAttrs:T}=e,O=cs(e);let k,A;try{if(n.shapeFlag&4){const _=r||s,L=_;k=ft(u.call(L,_,c,d,m,p,x)),A=a}else{const _=t;k=ft(_.length>1?_(d,{attrs:a,slots:o,emit:l}):_(d,null)),A=t.props?a:Sc(a)}}catch(_){Ln.length=0,Rs(_,e,1),k=F(Ne)}let R=k;if(A&&T!==!1){const _=Object.keys(A),{shapeFlag:L}=R;_.length&&L&7&&(i&&_.some(yr)&&(A=Ac(A,i)),R=Wt(R,A,!1,!0))}return n.dirs&&(R=Wt(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&Hn(R,n.transition),k=R,cs(O),k}const Sc=e=>{let t;for(const n in e)(n==="class"||n==="style"||_s(n))&&((t||(t={}))[n]=e[n]);return t},Ac=(e,t)=>{const n={};for(const s in e)(!yr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ec(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?pi(s,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(rl(o,s,p)&&!Ps(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?pi(s,o,u):!0:!!o;return!1}function pi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(rl(t,e,i)&&!Ps(n,i))return!0}return!1}function rl(e,t,n){const s=e[n],r=t[n];return n==="style"&&ce(s)&&ce(r)?!Cr(s,r):s!==r}function Pc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const il={},ol=()=>Object.create(il),ll=e=>Object.getPrototypeOf(e)===il;function Ic(e,t,n,s=!1){const r={},i=ol();e.propsDefaults=Object.create(null),al(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Io(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function $c(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=re(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Ps(e.emitsOptions,p))continue;const m=t[p];if(l)if(ae(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const x=Je(p);r[x]=cr(l,a,x,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{al(e,t,r,i)&&(u=!0);let c;for(const d in a)(!t||!ae(t,d)&&((c=Xt(d))===d||!ae(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=cr(l,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!ae(t,d))&&(delete i[d],u=!0)}u&&kt(e.attrs,"set","")}function al(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(An(l))continue;const u=t[l];let c;r&&ae(r,c=Je(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ps(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=re(n),u=a||me;for(let c=0;c<i.length;c++){const d=i[c];n[d]=cr(r,l,d,u[d],e,!ae(u,d))}}return o}function cr(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Kn(r);s=u[n]=l.call(null,t),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}const Oc=new WeakMap;function cl(e,t,n=!1){const s=n?Oc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!J(e)){const c=d=>{l=!0;const[p,m]=cl(d,t,!0);Se(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ce(e)&&s.set(e,dn),dn;if(G(i))for(let c=0;c<i.length;c++){const d=Je(i[c]);hi(d)&&(o[d]=me)}else if(i)for(const c in i){const d=Je(c);if(hi(d)){const p=i[c],m=o[d]=G(p)||J(p)?{type:p}:Se({},p),x=m.type;let T=!1,O=!0;if(G(x))for(let k=0;k<x.length;++k){const A=x[k],R=J(A)&&A.name;if(R==="Boolean"){T=!0;break}else R==="String"&&(O=!1)}else T=J(x)&&x.name==="Boolean";m[0]=T,m[1]=O,(T||ae(m,"default"))&&a.push(d)}}const u=[o,a];return ce(e)&&s.set(e,u),u}function hi(e){return e[0]!=="$"&&!An(e)}const Lr=e=>e==="_"||e==="_ctx"||e==="$stable",Mr=e=>G(e)?e.map(ft):[ft(e)],Lc=(e,t,n)=>{if(t._n)return t;const s=Q((...r)=>Mr(t(...r)),n);return s._c=!1,s},ul=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Lr(r))continue;const i=e[r];if(J(i))t[r]=Lc(r,i,s);else if(i!=null){const o=Mr(i);t[r]=()=>o}}},fl=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const s in t)(n||!Lr(s))&&(e[s]=t[s])},Mc=(e,t,n)=>{const s=e.slots=ol();if(e.vnode.shapeFlag&32){const r=t._;r?(dl(s,t,n),n&&po(s,"_",r,!0)):ul(t,s)}else t&&fl(e,t)},Nc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=me;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:dl(r,t,n):(i=!t.$stable,ul(t,r)),o=t}else t&&(fl(e,t),o={default:1});if(i)for(const a in r)!Lr(a)&&o[a]==null&&delete r[a]},Fe=Fc;function Dc(e){return Bc(e)}function Bc(e,t){const n=ws();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=dt,insertStaticContent:x}=e,T=(h,g,b,v=null,C=null,y=null,N=void 0,M=null,P=!!g.dynamicChildren)=>{if(h===g)return;h&&!qt(h,g)&&(v=w(h),Be(h,C,y,!0),h=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:S,ref:U,shapeFlag:B}=g;switch(S){case Is:O(h,g,b,v);break;case Ne:k(h,g,b,v);break;case ns:h==null&&A(g,b,v,N);break;case Y:W(h,g,b,v,C,y,N,M,P);break;default:B&1?L(h,g,b,v,C,y,N,M,P):B&6?ie(h,g,b,v,C,y,N,M,P):(B&64||B&128)&&S.process(h,g,b,v,C,y,N,M,P,j)}U!=null&&C?In(U,h&&h.ref,y,g||h,!g):U==null&&h&&h.ref!=null&&In(h.ref,null,y,h,!0)},O=(h,g,b,v)=>{if(h==null)s(g.el=a(g.children),b,v);else{const C=g.el=h.el;g.children!==h.children&&u(C,g.children)}},k=(h,g,b,v)=>{h==null?s(g.el=l(g.children||""),b,v):g.el=h.el},A=(h,g,b,v)=>{[h.el,h.anchor]=x(h.children,g,b,v,h.el,h.anchor)},R=({el:h,anchor:g},b,v)=>{let C;for(;h&&h!==g;)C=p(h),s(h,b,v),h=C;s(g,b,v)},_=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},L=(h,g,b,v,C,y,N,M,P)=>{if(g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),h==null)Z(g,b,v,C,y,N,M,P);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),q(h,g,C,y,N,M,P)}finally{S&&S._endPatch()}}},Z=(h,g,b,v,C,y,N,M)=>{let P,S;const{props:U,shapeFlag:B,transition:z,dirs:K}=h;if(P=h.el=o(h.type,y,U&&U.is,U),B&8?c(P,h.children):B&16&&ke(h.children,P,null,v,C,Us(h,y),N,M),K&&jt(h,null,v,"created"),V(P,h,h.scopeId,N,v),U){for(const ve in U)ve!=="value"&&!An(ve)&&i(P,ve,null,U[ve],y,v);"value"in U&&i(P,"value",null,U.value,y),(S=U.onVnodeBeforeMount)&&lt(S,v,h)}K&&jt(h,null,v,"beforeMount");const ee=Wc(C,z);ee&&z.beforeEnter(P),s(P,g,b),((S=U&&U.onVnodeMounted)||ee||K)&&Fe(()=>{S&&lt(S,v,h),ee&&z.enter(P),K&&jt(h,null,v,"mounted")},C)},V=(h,g,b,v,C)=>{if(b&&m(h,b),v)for(let y=0;y<v.length;y++)m(h,v[y]);if(C){let y=C.subTree;if(g===y||ml(y.type)&&(y.ssContent===g||y.ssFallback===g)){const N=C.vnode;V(h,N,N.scopeId,N.slotScopeIds,C.parent)}}},ke=(h,g,b,v,C,y,N,M,P=0)=>{for(let S=P;S<h.length;S++){const U=h[S]=M?yt(h[S]):ft(h[S]);T(null,U,g,b,v,C,y,N,M)}},q=(h,g,b,v,C,y,N)=>{const M=g.el=h.el;let{patchFlag:P,dynamicChildren:S,dirs:U}=g;P|=h.patchFlag&16;const B=h.props||me,z=g.props||me;let K;if(b&&zt(b,!1),(K=z.onVnodeBeforeUpdate)&&lt(K,b,g,h),U&&jt(g,h,b,"beforeUpdate"),b&&zt(b,!0),(B.innerHTML&&z.innerHTML==null||B.textContent&&z.textContent==null)&&c(M,""),S?se(h.dynamicChildren,S,M,b,v,Us(g,C),y):N||oe(h,g,M,null,b,v,Us(g,C),y,!1),P>0){if(P&16)be(M,B,z,b,C);else if(P&2&&B.class!==z.class&&i(M,"class",null,z.class,C),P&4&&i(M,"style",B.style,z.style,C),P&8){const ee=g.dynamicProps;for(let ve=0;ve<ee.length;ve++){const fe=ee[ve],We=B[fe],He=z[fe];(He!==We||fe==="value")&&i(M,fe,We,He,C,b)}}P&1&&h.children!==g.children&&c(M,g.children)}else!N&&S==null&&be(M,B,z,b,C);((K=z.onVnodeUpdated)||U)&&Fe(()=>{K&&lt(K,b,g,h),U&&jt(g,h,b,"updated")},v)},se=(h,g,b,v,C,y,N)=>{for(let M=0;M<g.length;M++){const P=h[M],S=g[M],U=P.el&&(P.type===Y||!qt(P,S)||P.shapeFlag&198)?d(P.el):b;T(P,S,U,null,v,C,y,N,!0)}},be=(h,g,b,v,C)=>{if(g!==b){if(g!==me)for(const y in g)!An(y)&&!(y in b)&&i(h,y,g[y],null,C,v);for(const y in b){if(An(y))continue;const N=b[y],M=g[y];N!==M&&y!=="value"&&i(h,y,M,N,C,v)}"value"in b&&i(h,"value",g.value,b.value,C)}},W=(h,g,b,v,C,y,N,M,P)=>{const S=g.el=h?h.el:a(""),U=g.anchor=h?h.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:K}=g;K&&(M=M?M.concat(K):K),h==null?(s(S,b,v),s(U,b,v),ke(g.children||[],b,U,C,y,N,M,P)):B>0&&B&64&&z&&h.dynamicChildren&&h.dynamicChildren.length===z.length?(se(h.dynamicChildren,z,b,C,y,N,M),(g.key!=null||C&&g===C.subTree)&&pl(h,g,!0)):oe(h,g,b,U,C,y,N,M,P)},ie=(h,g,b,v,C,y,N,M,P)=>{g.slotScopeIds=M,h==null?g.shapeFlag&512?C.ctx.activate(g,b,v,N,P):Ae(g,b,v,C,y,N,P):ze(h,g,P)},Ae=(h,g,b,v,C,y,N)=>{const M=h.component=Kc(h,v,C);if(Ss(h)&&(M.ctx.renderer=j),Zc(M,!1,N),M.asyncDep){if(C&&C.registerDep(M,Ce,N),!h.el){const P=M.subTree=F(Ne);k(null,P,g,b),h.placeholder=P.el}}else Ce(M,h,g,b,C,y,N)},ze=(h,g,b)=>{const v=g.component=h.component;if(Ec(h,g,b))if(v.asyncDep&&!v.asyncResolved){de(v,g,b);return}else v.next=g,v.update();else g.el=h.el,v.vnode=g},Ce=(h,g,b,v,C,y,N)=>{const M=()=>{if(h.isMounted){let{next:B,bu:z,u:K,parent:ee,vnode:ve}=h;{const it=hl(h);if(it){B&&(B.el=ve.el,de(h,B,N)),it.asyncDep.then(()=>{Fe(()=>{h.isUnmounted||S()},C)});return}}let fe=B,We;zt(h,!1),B?(B.el=ve.el,de(h,B,N)):B=ve,z&&es(z),(We=B.props&&B.props.onVnodeBeforeUpdate)&&lt(We,ee,B,ve),zt(h,!0);const He=di(h),rt=h.subTree;h.subTree=He,T(rt,He,d(rt.el),w(rt),h,C,y),B.el=He.el,fe===null&&Pc(h,He.el),K&&Fe(K,C),(We=B.props&&B.props.onVnodeUpdated)&&Fe(()=>lt(We,ee,B,ve),C)}else{let B;const{el:z,props:K}=g,{bm:ee,m:ve,parent:fe,root:We,type:He}=h,rt=$n(g);zt(h,!1),ee&&es(ee),!rt&&(B=K&&K.onVnodeBeforeMount)&&lt(B,fe,g),zt(h,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(He);const it=h.subTree=di(h);T(null,it,b,v,h,C,y),g.el=it.el}if(ve&&Fe(ve,C),!rt&&(B=K&&K.onVnodeMounted)){const it=g;Fe(()=>lt(B,fe,it),C)}(g.shapeFlag&256||fe&&$n(fe.vnode)&&fe.vnode.shapeFlag&256)&&h.a&&Fe(h.a,C),h.isMounted=!0,g=b=v=null}};h.scope.on();const P=h.effect=new bo(M);h.scope.off();const S=h.update=P.run.bind(P),U=h.job=P.runIfDirty.bind(P);U.i=h,U.id=h.uid,P.scheduler=()=>$r(U),zt(h,!0),S()},de=(h,g,b)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,$c(h,g.props,v,b),Nc(h,g.children,b),Tt(),si(h),Rt()},oe=(h,g,b,v,C,y,N,M,P=!1)=>{const S=h&&h.children,U=h?h.shapeFlag:0,B=g.children,{patchFlag:z,shapeFlag:K}=g;if(z>0){if(z&128){Et(S,B,b,v,C,y,N,M,P);return}else if(z&256){gt(S,B,b,v,C,y,N,M,P);return}}K&8?(U&16&&qe(S,C,y),B!==S&&c(b,B)):U&16?K&16?Et(S,B,b,v,C,y,N,M,P):qe(S,C,y,!0):(U&8&&c(b,""),K&16&&ke(B,b,v,C,y,N,M,P))},gt=(h,g,b,v,C,y,N,M,P)=>{h=h||dn,g=g||dn;const S=h.length,U=g.length,B=Math.min(S,U);let z;for(z=0;z<B;z++){const K=g[z]=P?yt(g[z]):ft(g[z]);T(h[z],K,b,null,C,y,N,M,P)}S>U?qe(h,C,y,!0,!1,B):ke(g,b,v,C,y,N,M,P,B)},Et=(h,g,b,v,C,y,N,M,P)=>{let S=0;const U=g.length;let B=h.length-1,z=U-1;for(;S<=B&&S<=z;){const K=h[S],ee=g[S]=P?yt(g[S]):ft(g[S]);if(qt(K,ee))T(K,ee,b,null,C,y,N,M,P);else break;S++}for(;S<=B&&S<=z;){const K=h[B],ee=g[z]=P?yt(g[z]):ft(g[z]);if(qt(K,ee))T(K,ee,b,null,C,y,N,M,P);else break;B--,z--}if(S>B){if(S<=z){const K=z+1,ee=K<U?g[K].el:v;for(;S<=z;)T(null,g[S]=P?yt(g[S]):ft(g[S]),b,ee,C,y,N,M,P),S++}}else if(S>z)for(;S<=B;)Be(h[S],C,y,!0),S++;else{const K=S,ee=S,ve=new Map;for(S=ee;S<=z;S++){const Ue=g[S]=P?yt(g[S]):ft(g[S]);Ue.key!=null&&ve.set(Ue.key,S)}let fe,We=0;const He=z-ee+1;let rt=!1,it=0;const _n=new Array(He);for(S=0;S<He;S++)_n[S]=0;for(S=K;S<=B;S++){const Ue=h[S];if(We>=He){Be(Ue,C,y,!0);continue}let ot;if(Ue.key!=null)ot=ve.get(Ue.key);else for(fe=ee;fe<=z;fe++)if(_n[fe-ee]===0&&qt(Ue,g[fe])){ot=fe;break}ot===void 0?Be(Ue,C,y,!0):(_n[ot-ee]=S+1,ot>=it?it=ot:rt=!0,T(Ue,g[ot],b,null,C,y,N,M,P),We++)}const Jr=rt?Hc(_n):dn;for(fe=Jr.length-1,S=He-1;S>=0;S--){const Ue=ee+S,ot=g[Ue],Qr=g[Ue+1],Yr=Ue+1<U?Qr.el||gl(Qr):v;_n[S]===0?T(null,ot,b,Yr,C,y,N,M,P):rt&&(fe<0||S!==Jr[fe]?st(ot,b,Yr,2):fe--)}}},st=(h,g,b,v,C=null)=>{const{el:y,type:N,transition:M,children:P,shapeFlag:S}=h;if(S&6){st(h.component.subTree,g,b,v);return}if(S&128){h.suspense.move(g,b,v);return}if(S&64){N.move(h,g,b,j);return}if(N===Y){s(y,g,b);for(let B=0;B<P.length;B++)st(P[B],g,b,v);s(h.anchor,g,b);return}if(N===ns){R(h,g,b);return}if(v!==2&&S&1&&M)if(v===0)M.beforeEnter(y),s(y,g,b),Fe(()=>M.enter(y),C);else{const{leave:B,delayLeave:z,afterLeave:K}=M,ee=()=>{h.ctx.isUnmounted?r(y):s(y,g,b)},ve=()=>{y._isLeaving&&y[ut](!0),B(y,()=>{ee(),K&&K()})};z?z(y,ee,ve):ve()}else s(y,g,b)},Be=(h,g,b,v=!1,C=!1)=>{const{type:y,props:N,ref:M,children:P,dynamicChildren:S,shapeFlag:U,patchFlag:B,dirs:z,cacheIndex:K}=h;if(B===-2&&(C=!1),M!=null&&(Tt(),In(M,null,b,h,!0),Rt()),K!=null&&(g.renderCache[K]=void 0),U&256){g.ctx.deactivate(h);return}const ee=U&1&&z,ve=!$n(h);let fe;if(ve&&(fe=N&&N.onVnodeBeforeUnmount)&&lt(fe,g,h),U&6)Ft(h.component,b,v);else{if(U&128){h.suspense.unmount(b,v);return}ee&&jt(h,null,g,"beforeUnmount"),U&64?h.type.remove(h,g,b,j,v):S&&!S.hasOnce&&(y!==Y||B>0&&B&64)?qe(S,g,b,!1,!0):(y===Y&&B&384||!C&&U&16)&&qe(P,g,b),v&&nn(h)}(ve&&(fe=N&&N.onVnodeUnmounted)||ee)&&Fe(()=>{fe&&lt(fe,g,h),ee&&jt(h,null,g,"unmounted")},b)},nn=h=>{const{type:g,el:b,anchor:v,transition:C}=h;if(g===Y){sn(b,v);return}if(g===ns){_(h);return}const y=()=>{r(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:N,delayLeave:M}=C,P=()=>N(b,y);M?M(h.el,y,P):P()}else y()},sn=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},Ft=(h,g,b)=>{const{bum:v,scope:C,job:y,subTree:N,um:M,m:P,a:S}=h;gi(P),gi(S),v&&es(v),C.stop(),y&&(y.flags|=8,Be(N,h,g,b)),M&&Fe(M,g),Fe(()=>{h.isUnmounted=!0},g)},qe=(h,g,b,v=!1,C=!1,y=0)=>{for(let N=y;N<h.length;N++)Be(h[N],g,b,v,C)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[tc];return b?p(b):g};let H=!1;const D=(h,g,b)=>{let v;h==null?g._vnode&&(Be(g._vnode,null,null,!0),v=g._vnode.component):T(g._vnode||null,h,g,null,null,null,b),g._vnode=h,H||(H=!0,si(v),No(),H=!1)},j={p:T,um:Be,m:st,r:nn,mt:Ae,mc:ke,pc:oe,pbc:se,n:w,o:e};return{render:D,hydrate:void 0,createApp:xc(D)}}function Us({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pl(e,t,n=!1){const s=e.children,r=t.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=yt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&pl(o,a)),a.type===Is&&(a.patchFlag===-1&&(a=r[i]=yt(a)),a.el=o.el),a.type===Ne&&!a.el&&(a.el=o.el)}}function Hc(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function hl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hl(t)}function gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function gl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?gl(t.subTree):null}const ml=e=>e.__isSuspense;function Fc(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):Qa(e)}const Y=Symbol.for("v-fgt"),Is=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),Ln=[];let Ve=null;function E(e=!1){Ln.push(Ve=e?null:[])}function jc(){Ln.pop(),Ve=Ln[Ln.length-1]||null}let Fn=1;function ds(e,t=!1){Fn+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function bl(e){return e.dynamicChildren=Fn>0?Ve||dn:null,jc(),Fn>0&&Ve&&Ve.push(e),e}function I(e,t,n,s,r,i){return bl(f(e,t,n,s,r,i,!0))}function cn(e,t,n,s,r){return bl(F(e,t,n,s,r,!0))}function ps(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const vl=({key:e})=>e??null,ss=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||J(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===Y?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vl(t),ref:t&&ss(t),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return a?(Nr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Fn>0&&!o&&Ve&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ve.push(l),l}const F=zc;function zc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Yo)&&(e=Ne),ps(e)){const a=Wt(e,t,!0);return n&&Nr(a,n),Fn>0&&!i&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(e)]=a:Ve.push(a)),a.patchFlag=-2,a}if(eu(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=Ie(a)),ce(l)&&(Ir(l)&&!G(l)&&(l=Se({},l)),t.style=xs(l))}const o=xe(e)?1:ml(e)?128:Fo(e)?64:ce(e)?4:J(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function Uc(e){return e?Ir(e)||ll(e)?Se({},e):e:null}function Wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,u=t?Gc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&vl(u),ref:t&&t.ref?n&&i?G(i)?i.concat(ss(t)):[i,ss(t)]:ss(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Y?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Hn(c,l.clone(c)),c}function ne(e=" ",t=0){return F(Is,null,e,t)}function pt(e,t){const n=F(ns,null,e);return n.staticCount=t,n}function Qe(e="",t=!1){return t?(E(),cn(Ne,null,e)):F(Ne,null,e)}function ft(e){return e==null||typeof e=="boolean"?F(Ne):G(e)?F(Y,null,e.slice()):ps(e)?yt(e):F(Is,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function Nr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Nr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ll(t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[ne(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ie([t.class,s.class]));else if(r==="style")t.style=xs([t.style,s.style]);else if(_s(r)){const i=t[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function lt(e,t,n,s=null){tt(e,t,7,[n,s])}const Vc=nl();let qc=0;function Kc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Vc,i={uid:qc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cl(s,r),emitsOptions:sl(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const _l=()=>Pe||Ge;let hs,ur;{const e=ws(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};hs=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),ur=t("__VUE_SSR_SETTERS__",n=>jn=n)}const Kn=e=>{const t=Pe;return hs(e),e.scope.on(),()=>{e.scope.off(),hs(t)}},mi=()=>{Pe&&Pe.scope.off(),hs(null)};function yl(e){return e.vnode.shapeFlag&4}let jn=!1;function Zc(e,t=!1,n=!1){t&&ur(t);const{props:s,children:r}=e.vnode,i=yl(e);Ic(e,s,i,t),Mc(e,r,n||t);const o=i?Jc(e,t):void 0;return t&&ur(!1),o}function Jc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,mc);const{setup:s}=n;if(s){Tt();const r=e.setupContext=s.length>1?Yc(e):null,i=Kn(e),o=qn(s,e,0,[e.props,r]),a=co(o);if(Rt(),i(),(a||e.sp)&&!$n(e)&&Ko(e),a){if(o.then(mi,mi),t)return o.then(l=>{bi(e,l)}).catch(l=>{Rs(l,e,0)});e.asyncDep=o}else bi(e,o)}else kl(e)}function bi(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Oo(t)),kl(e)}function kl(e,t,n){const s=e.type;e.render||(e.render=s.render||dt);{const r=Kn(e);Tt();try{bc(e)}finally{Rt(),r()}}}const Qc={get(e,t){return Ee(e,"get",""),e[t]}};function Yc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qc),slots:e.slots,emit:e.emit,expose:t}}function $s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oo(Fa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in On)return On[n](e)},has(t,n){return n in t||n in On}})):e.proxy}function Xc(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function eu(e){return J(e)&&"__vccOpts"in e}const he=(e,t)=>Va(e,t,jn);function Dr(e,t,n){try{ds(-1);const s=arguments.length;return s===2?ce(t)&&!G(t)?ps(t)?F(e,null,[t]):F(e,t):F(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ps(n)&&(n=[n]),F(e,t,n))}finally{ds(1)}}const tu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fr;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{fr=vi.createPolicy("vue",{createHTML:e=>e})}catch{}const wl=fr?e=>fr.createHTML(e):e=>e,nu="http://www.w3.org/2000/svg",su="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,_i=_t&&_t.createElement("template"),ru={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?_t.createElementNS(nu,e):t==="mathml"?_t.createElementNS(su,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_i.innerHTML=wl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=_i.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",wn="animation",zn=Symbol("_vtc"),xl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iu=Se({},jo,xl),ou=e=>(e.displayName="Transition",e.props=iu,e),lu=ou((e,{slots:t})=>Dr(rc,au(e),t)),Ut=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},yi=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function au(e){const t={};for(const W in e)W in xl||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=cu(r),T=x&&x[0],O=x&&x[1],{onBeforeEnter:k,onEnter:A,onEnterCancelled:R,onLeave:_,onLeaveCancelled:L,onBeforeAppear:Z=k,onAppear:V=A,onAppearCancelled:ke=R}=t,q=(W,ie,Ae,ze)=>{W._enterCancelled=ze,Gt(W,ie?c:a),Gt(W,ie?u:o),Ae&&Ae()},se=(W,ie)=>{W._isLeaving=!1,Gt(W,d),Gt(W,m),Gt(W,p),ie&&ie()},be=W=>(ie,Ae)=>{const ze=W?V:A,Ce=()=>q(ie,W,Ae);Ut(ze,[ie,Ce]),ki(()=>{Gt(ie,W?l:i),bt(ie,W?c:a),yi(ze)||wi(ie,s,T,Ce)})};return Se(t,{onBeforeEnter(W){Ut(k,[W]),bt(W,i),bt(W,o)},onBeforeAppear(W){Ut(Z,[W]),bt(W,l),bt(W,u)},onEnter:be(!1),onAppear:be(!0),onLeave(W,ie){W._isLeaving=!0;const Ae=()=>se(W,ie);bt(W,d),W._enterCancelled?(bt(W,p),Ti(W)):(Ti(W),bt(W,p)),ki(()=>{W._isLeaving&&(Gt(W,d),bt(W,m),yi(_)||wi(W,s,O,Ae))}),Ut(_,[W,Ae])},onEnterCancelled(W){q(W,!1,void 0,!0),Ut(R,[W])},onAppearCancelled(W){q(W,!0,void 0,!0),Ut(ke,[W])},onLeaveCancelled(W){se(W),Ut(L,[W])}})}function cu(e){if(e==null)return null;if(ce(e))return[Gs(e.enter),Gs(e.leave)];{const t=Gs(e);return[t,t]}}function Gs(e){return pa(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zn]||(e[zn]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[zn];n&&(n.delete(t),n.size||(e[zn]=void 0))}function ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uu=0;function wi(e,t,n,s){const r=e._endId=++uu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=fu(e,t);if(!o)return s();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,p)}function fu(e,t){const n=window.getComputedStyle(e),s=x=>(n[x]||"").split(", "),r=s(`${Pt}Delay`),i=s(`${Pt}Duration`),o=xi(r,i),a=s(`${wn}Delay`),l=s(`${wn}Duration`),u=xi(a,l);let c=null,d=0,p=0;t===Pt?o>0&&(c=Pt,d=o,p=i.length):t===wn?u>0&&(c=wn,d=u,p=l.length):(d=Math.max(o,u),c=d>0?o>u?Pt:wn:null,p=c?c===Pt?i.length:l.length:0);const m=c===Pt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Pt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ci(n)+Ci(e[s])))}function Ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(e){return(e?e.ownerDocument:document).body.offsetHeight}function du(e,t,n){const s=e[zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ri=Symbol("_vod"),pu=Symbol("_vsh"),hu=Symbol(""),gu=/(?:^|;)\s*display\s*:/;function mu(e,t,n){const s=e.style,r=xe(n);let i=!1;if(n&&!r){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rs(s,a,"")}else for(const o in t)n[o]==null&&rs(s,o,"");for(const o in n)o==="display"&&(i=!0),rs(s,o,n[o])}else if(r){if(t!==n){const o=s[hu];o&&(n+=";"+o),s.cssText=n,i=gu.test(n)}}else t&&e.removeAttribute("style");Ri in e&&(e[Ri]=i?s.display:"",e[pu]&&(s.display="none"))}const Si=/\s*!important$/;function rs(e,t,n){if(G(n))n.forEach(s=>rs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=bu(e,t);Si.test(n)?e.setProperty(Xt(s),n.replace(Si,""),"important"):e[s]=n}}const Ai=["Webkit","Moz","ms"],Vs={};function bu(e,t){const n=Vs[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return Vs[t]=s;s=ks(s);for(let r=0;r<Ai.length;r++){const i=Ai[r]+s;if(i in e)return Vs[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function Pi(e,t,n,s,r,i=_a(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n):n==null||i&&!ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ht(n)?String(n):n)}function Ii(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ho(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function ln(e,t,n,s){e.addEventListener(t,n,s)}function vu(e,t,n,s){e.removeEventListener(t,n,s)}const $i=Symbol("_vei");function _u(e,t,n,s,r=null){const i=e[$i]||(e[$i]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=yu(t);if(s){const u=i[t]=xu(s,r);ln(e,a,u,l)}else o&&(vu(e,a,o,l),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function yu(e){let t;if(Oi.test(e)){t={};let s;for(;s=e.match(Oi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let qs=0;const ku=Promise.resolve(),wu=()=>qs||(ku.then(()=>qs=0),qs=Date.now());function xu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Cu(s,n.value),t,5,[s])};return n.value=e,n.attached=wu(),n}function Cu(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tu=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?du(e,s,o):t==="style"?mu(e,n,s):_s(t)?yr(t)||_u(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ru(e,t,s,o))?(Ii(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(s))?Ii(e,Je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Pi(e,t,s,o))};function Ru(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Li(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Li(t)&&xe(n)?!1:t in e}const Mi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>es(t,n):t};function Su(e){e.target.composing=!0}function Ni(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign");function Di(e,t,n){return t&&(e=e.trim()),n&&(e=xr(e)),e}const Br={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Ks]=Mi(r);const i=s||r.props&&r.props.type==="number";ln(e,t?"change":"input",o=>{o.target.composing||e[Ks](Di(e.value,n,i))}),(n||i)&&ln(e,"change",()=>{e.value=Di(e.value,n,i)}),t||(ln(e,"compositionstart",Su),ln(e,"compositionend",Ni),ln(e,"change",Ni))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Ks]=Mi(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?xr(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},Au=Se({patchProp:Tu},ru);let Bi;function Eu(){return Bi||(Bi=Dc(Au))}const Pu=(...e)=>{const t=Eu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=$u(s);if(!r)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Iu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Iu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $u(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const an=typeof document<"u";function Cl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cl(e.default)}const le=Object.assign;function Zs(e,t){const n={};for(const s in t){const r=t[s];n[s]=nt(r)?r.map(e):e(r)}return n}const Mn=()=>{},nt=Array.isArray;function Wi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Tl=/#/g,Lu=/&/g,Mu=/\//g,Nu=/=/g,Du=/\?/g,Rl=/\+/g,Bu=/%5B/g,Wu=/%5D/g,Sl=/%5E/g,Hu=/%60/g,Al=/%7B/g,Fu=/%7C/g,El=/%7D/g,ju=/%20/g;function Wr(e){return e==null?"":encodeURI(""+e).replace(Fu,"|").replace(Bu,"[").replace(Wu,"]")}function zu(e){return Wr(e).replace(Al,"{").replace(El,"}").replace(Sl,"^")}function dr(e){return Wr(e).replace(Rl,"%2B").replace(ju,"+").replace(Tl,"%23").replace(Lu,"%26").replace(Hu,"`").replace(Al,"{").replace(El,"}").replace(Sl,"^")}function Uu(e){return dr(e).replace(Nu,"%3D")}function Gu(e){return Wr(e).replace(Tl,"%23").replace(Du,"%3F")}function Vu(e){return Gu(e).replace(Mu,"%2F")}function Un(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const qu=/\/$/,Ku=e=>e.replace(qu,"");function Js(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),i=t.slice(l,a>0?a:t.length),r=e(i.slice(1))),a>=0&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=Yu(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Un(o)}}function Zu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ju(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(t.matched[s],n.matched[r])&&Pl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Qu(e[n],t[n]))return!1;return!0}function Qu(e,t){return nt(e)?Fi(e,t):nt(t)?Fi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Fi(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Yu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pr=function(e){return e.pop="pop",e.push="push",e}({}),Qs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Xu(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ku(e)}const ef=/^[^#]+#/;function tf(e,t){return e.replace(ef,"#")+t}function nf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Os=()=>({left:window.scrollX,top:window.scrollY});function sf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=nf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function rf(e,t){hr.set(e,t)}function of(e){const t=hr.get(e);return hr.delete(e),t}function lf(e){return typeof e=="string"||e&&typeof e=="object"}function Il(e){return typeof e=="string"||typeof e=="symbol"}let we=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const $l=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function vn(e,t){return le(new Error,{type:e,[$l]:!0},t)}function vt(e,t){return e instanceof Error&&$l in e&&(t==null||!!(e.type&t))}const af=["params","query","hash"];function cf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of af)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function uf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Rl," "),i=r.indexOf("="),o=Un(i<0?r:r.slice(0,i)),a=i<0?null:Un(r.slice(i+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function zi(e){let t="";for(let n in e){const s=e[n];if(n=Uu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&dr(r)):[s&&dr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ff(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const df=Symbol(""),Ui=Symbol(""),Ls=Symbol(""),Hr=Symbol(""),gr=Symbol("");function xn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(vn(we.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):lf(p)?l(vn(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Ys(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Cl(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Lt(u,n,s,o,a,r))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Ou(c)?c.default:c;o.mods[a]=c,o.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Lt(p,n,s,o,a,r)()}))}}return i}function pf(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>bn(u,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>bn(u,l))||r.push(l))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hf=()=>location.protocol+"//"+location.host;function Ol(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Hi(a,"")}return Hi(n,e)+s+r}function gf(e,t,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=Ol(e,location),x=n.value,T=t.value;let O=0;if(p){if(n.value=m,t.value=p,o&&o===x){o=null;return}O=T?p.position-T.position:0}else s(m);r.forEach(k=>{k(n.value,x,{delta:O,type:pr.pop,direction:O?O>0?Qs.forward:Qs.back:Qs.unknown})})};function l(){o=n.value}function u(p){r.push(p);const m=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(le({},p.state,{scroll:Os()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function Gi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Os():null}}function mf(e){const{history:t,location:n}=window,s={value:Ol(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:hf()+e+l;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function o(l,u){i(l,le({},t.state,Gi(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=l}function a(l,u){const c=le({},r.value,t.state,{forward:l,scroll:Os()});i(c.current,c,!0),i(l,le({},Gi(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function bf(e){e=Xu(e);const t=mf(e),n=gf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:e,go:s,createHref:tf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function vf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),bf(e)}let Zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Te=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Te||{});const _f={type:Zt.Static,value:""},yf=/[a-zA-Z0-9_]/;function kf(e){if(!e)return[[]];if(e==="/")return[[_f]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Te.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",c="";function d(){u&&(n===Te.Static?i.push({type:Zt.Static,value:u}):n===Te.Param||n===Te.ParamRegExp||n===Te.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zt.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==Te.ParamRegExp){s=n,n=Te.EscapeNext;continue}switch(n){case Te.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=Te.Param):p();break;case Te.EscapeNext:p(),n=s;break;case Te.Param:l==="("?n=Te.ParamRegExp:yf.test(l)?p():(d(),n=Te.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Te.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Te.ParamRegExpEnd:c+=l;break;case Te.ParamRegExpEnd:d(),n=Te.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Te.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const Vi="[^/]+?",wf={sensitive:!1,strict:!1,start:!0,end:!0};var Le=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Le||{});const xf=/[.+*?^${}()[\]/\\]/g;function Cf(e,t){const n=le({},wf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Le.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=Le.Segment+(n.sensitive?Le.BonusCaseSensitive:0);if(p.type===Zt.Static)d||(r+="/"),r+=p.value.replace(xf,"\\$&"),m+=Le.Static;else if(p.type===Zt.Param){const{value:x,repeatable:T,optional:O,regexp:k}=p;i.push({name:x,repeatable:T,optional:O});const A=k||Vi;if(A!==Vi){m+=Le.BonusCustomRegExp;try{`${A}`}catch(_){throw new Error(`Invalid custom RegExp for param "${x}" (${A}): `+_.message)}}let R=T?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(R=O&&u.length<2?`(?:/${R})`:"/"+R),O&&(R+="?"),r+=R,m+=Le.Dynamic,O&&(m+=Le.BonusOptional),T&&(m+=Le.BonusRepeatable),A===".*"&&(m+=Le.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Le.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",x=i[p-1];d[x.name]=m&&x.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===Zt.Static)c+=m.value;else if(m.type===Zt.Param){const{value:x,repeatable:T,optional:O}=m,k=x in u?u[x]:"";if(nt(k)&&!T)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const A=nt(k)?k.join("/"):k;if(!A)if(O)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${x}"`);c+=A}}return c||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Tf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Le.Static+Le.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Le.Static+Le.Segment?1:-1:0}function Ll(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Tf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(qi(s))return 1;if(qi(r))return-1}return r.length-s.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rf={strict:!1,end:!0,sensitive:!1};function Sf(e,t,n){const s=Cf(kf(e.path),n),r=le(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Af(e,t){const n=[],s=new Map;t=Wi(Rf,t);function r(d){return s.get(d)}function i(d,p,m){const x=!m,T=Zi(d);T.aliasOf=m&&m.record;const O=Wi(t,d),k=[T];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of _)k.push(Zi(le({},T,{components:m?m.record.components:T.components,path:L,aliasOf:m?m.record:T})))}let A,R;for(const _ of k){const{path:L}=_;if(p&&L[0]!=="/"){const Z=p.record.path,V=Z[Z.length-1]==="/"?"":"/";_.path=p.record.path+(L&&V+L)}if(A=Sf(_,p,O),m?m.alias.push(A):(R=R||A,R!==A&&R.alias.push(A),x&&d.name&&!Ji(A)&&o(d.name)),Ml(A)&&l(A),T.children){const Z=T.children;for(let V=0;V<Z.length;V++)i(Z[V],A,m&&m.children[V])}m=m||A}return R?()=>{o(R)}:Mn}function o(d){if(Il(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=If(d,n);n.splice(p,0,d),d.record.name&&!Ji(d)&&s.set(d.record.name,d)}function u(d,p){let m,x={},T,O;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw vn(we.MATCHER_NOT_FOUND,{location:d});O=m.record.name,x=le(Ki(p.params,m.keys.filter(R=>!R.optional).concat(m.parent?m.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),d.params&&Ki(d.params,m.keys.map(R=>R.name))),T=m.stringify(x)}else if(d.path!=null)T=d.path,m=n.find(R=>R.re.test(T)),m&&(x=m.parse(T),O=m.record.name);else{if(m=p.name?s.get(p.name):n.find(R=>R.re.test(p.path)),!m)throw vn(we.MATCHER_NOT_FOUND,{location:d,currentLocation:p});O=m.record.name,x=le({},p.params,d.params),T=m.stringify(x)}const k=[];let A=m;for(;A;)k.unshift(A.record),A=A.parent;return{name:O,path:T,params:x,matched:k,meta:Pf(k)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Ki(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Zi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,n)=>le(t,n.meta),{})}function If(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Ll(e,t[i])<0?s=i:n=i+1}const r=$f(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function $f(e){let t=e;for(;t=t.parent;)if(Ml(t)&&Ll(e,t)===0)return t}function Ml({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Qi(e){const t=Xe(Ls),n=Xe(Hr),s=he(()=>{const l=pe(e.to);return t.resolve(l)}),r=he(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(bn.bind(null,c));if(p>-1)return p;const m=Yi(l[u-2]);return u>1&&Yi(c)===m&&d[d.length-1].path!==m?d.findIndex(bn.bind(null,l[u-2])):p}),i=he(()=>r.value>-1&&Df(n.params,s.value.params)),o=he(()=>r.value>-1&&r.value===n.matched.length-1&&Pl(n.params,s.value.params));function a(l={}){if(Nf(l)){const u=t[pe(e.replace)?"replace":"push"](pe(e.to)).catch(Mn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:he(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function Of(e){return e.length===1?e[0]:e}const Lf=qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qi,setup(e,{slots:t}){const n=Ts(Qi(e)),{options:s}=Xe(Ls),r=he(()=>({[Xi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Of(t.default(n));return e.custom?i:Dr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Mf=Lf;function Nf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Df(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!nt(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Bf=qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Xe(gr),r=he(()=>e.route||s.value),i=Xe(Ui,0),o=he(()=>{let u=pe(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=he(()=>r.value.matched[o.value]);ts(Ui,he(()=>o.value+1)),ts(df,a),ts(gr,r);const l=Re();return Bt(()=>[l.value,a.value,e.name],([u,c,d],[p,m,x])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!bn(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=a.value,p=d&&d.components[c];if(!p)return eo(n.default,{Component:p,route:u});const m=d.props[c],x=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Dr(p,le({},x,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return eo(n.default,{Component:O,route:u})||O}}});function eo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wf=Bf;function Hf(e){const t=Af(e.routes,e),n=e.parseQuery||uf,s=e.stringifyQuery||zi,r=e.history,i=xn(),o=xn(),a=xn(),l=ja(It);let u=It;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Zs.bind(null,w=>""+w),d=Zs.bind(null,Vu),p=Zs.bind(null,Un);function m(w,H){let D,j;return Il(w)?(D=t.getRecordMatcher(w),j=H):j=w,t.addRoute(j,D)}function x(w){const H=t.getRecordMatcher(w);H&&t.removeRoute(H)}function T(){return t.getRoutes().map(w=>w.record)}function O(w){return!!t.getRecordMatcher(w)}function k(w,H){if(H=le({},H||l.value),typeof w=="string"){const b=Js(n,w,H.path),v=t.resolve({path:b.path},H),C=r.createHref(b.fullPath);return le(b,v,{params:p(v.params),hash:Un(b.hash),redirectedFrom:void 0,href:C})}let D;if(w.path!=null)D=le({},w,{path:Js(n,w.path,H.path).path});else{const b=le({},w.params);for(const v in b)b[v]==null&&delete b[v];D=le({},w,{params:d(b)}),H.params=d(H.params)}const j=t.resolve(D,H),X=w.hash||"";j.params=c(p(j.params));const h=Zu(s,le({},w,{hash:zu(X),path:j.path})),g=r.createHref(h);return le({fullPath:h,hash:X,query:s===zi?ff(w.query):w.query||{}},j,{redirectedFrom:void 0,href:g})}function A(w){return typeof w=="string"?Js(n,w,l.value.path):le({},w)}function R(w,H){if(u!==w)return vn(we.NAVIGATION_CANCELLED,{from:H,to:w})}function _(w){return V(w)}function L(w){return _(le(A(w),{replace:!0}))}function Z(w,H){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:j}=D;let X=typeof j=="function"?j(w,H):j;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=A(X):{path:X},X.params={}),le({query:w.query,hash:w.hash,params:X.path!=null?{}:w.params},X)}}function V(w,H){const D=u=k(w),j=l.value,X=w.state,h=w.force,g=w.replace===!0,b=Z(D,j);if(b)return V(le(A(b),{state:typeof b=="object"?le({},X,b.state):X,force:h,replace:g}),H||D);const v=D;v.redirectedFrom=H;let C;return!h&&Ju(s,j,D)&&(C=vn(we.NAVIGATION_DUPLICATED,{to:v,from:j}),st(j,j,!0,!1)),(C?Promise.resolve(C):se(v,j)).catch(y=>vt(y)?vt(y,we.NAVIGATION_GUARD_REDIRECT)?y:Et(y):oe(y,v,j)).then(y=>{if(y){if(vt(y,we.NAVIGATION_GUARD_REDIRECT))return V(le({replace:g},A(y.to),{state:typeof y.to=="object"?le({},X,y.to.state):X,force:h}),H||v)}else y=W(v,j,!0,g,X);return be(v,j,y),y})}function ke(w,H){const D=R(w,H);return D?Promise.reject(D):Promise.resolve()}function q(w){const H=sn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(w):w()}function se(w,H){let D;const[j,X,h]=pf(w,H);D=Ys(j.reverse(),"beforeRouteLeave",w,H);for(const b of j)b.leaveGuards.forEach(v=>{D.push(Lt(v,w,H))});const g=ke.bind(null,w,H);return D.push(g),qe(D).then(()=>{D=[];for(const b of i.list())D.push(Lt(b,w,H));return D.push(g),qe(D)}).then(()=>{D=Ys(X,"beforeRouteUpdate",w,H);for(const b of X)b.updateGuards.forEach(v=>{D.push(Lt(v,w,H))});return D.push(g),qe(D)}).then(()=>{D=[];for(const b of h)if(b.beforeEnter)if(nt(b.beforeEnter))for(const v of b.beforeEnter)D.push(Lt(v,w,H));else D.push(Lt(b.beforeEnter,w,H));return D.push(g),qe(D)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),D=Ys(h,"beforeRouteEnter",w,H,q),D.push(g),qe(D))).then(()=>{D=[];for(const b of o.list())D.push(Lt(b,w,H));return D.push(g),qe(D)}).catch(b=>vt(b,we.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function be(w,H,D){a.list().forEach(j=>q(()=>j(w,H,D)))}function W(w,H,D,j,X){const h=R(w,H);if(h)return h;const g=H===It,b=an?history.state:{};D&&(j||g?r.replace(w.fullPath,le({scroll:g&&b&&b.scroll},X)):r.push(w.fullPath,X)),l.value=w,st(w,H,D,g),Et()}let ie;function Ae(){ie||(ie=r.listen((w,H,D)=>{if(!Ft.listening)return;const j=k(w),X=Z(j,Ft.currentRoute.value);if(X){V(le(X,{replace:!0,force:!0}),j).catch(Mn);return}u=j;const h=l.value;an&&rf(ji(h.fullPath,D.delta),Os()),se(j,h).catch(g=>vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?g:vt(g,we.NAVIGATION_GUARD_REDIRECT)?(V(le(A(g.to),{force:!0}),j).then(b=>{vt(b,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!D.delta&&D.type===pr.pop&&r.go(-1,!1)}).catch(Mn),Promise.reject()):(D.delta&&r.go(-D.delta,!1),oe(g,j,h))).then(g=>{g=g||W(j,h,!1),g&&(D.delta&&!vt(g,we.NAVIGATION_CANCELLED)?r.go(-D.delta,!1):D.type===pr.pop&&vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),be(j,h,g)}).catch(Mn)}))}let ze=xn(),Ce=xn(),de;function oe(w,H,D){Et(w);const j=Ce.list();return j.length?j.forEach(X=>X(w,H,D)):console.error(w),Promise.reject(w)}function gt(){return de&&l.value!==It?Promise.resolve():new Promise((w,H)=>{ze.add([w,H])})}function Et(w){return de||(de=!w,Ae(),ze.list().forEach(([H,D])=>w?D(w):H()),ze.reset()),w}function st(w,H,D,j){const{scrollBehavior:X}=e;if(!an||!X)return Promise.resolve();const h=!D&&of(ji(w.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return Kt().then(()=>X(w,H,h)).then(g=>g&&sf(g)).catch(g=>oe(g,w,H))}const Be=w=>r.go(w);let nn;const sn=new Set,Ft={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:T,resolve:k,options:e,push:_,replace:L,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:gt,install(w){w.component("RouterLink",Mf),w.component("RouterView",Wf),w.config.globalProperties.$router=Ft,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>pe(l)}),an&&!nn&&l.value===It&&(nn=!0,_(r.location).catch(j=>{}));const H={};for(const j in It)Object.defineProperty(H,j,{get:()=>l.value[j],enumerable:!0});w.provide(Ls,Ft),w.provide(Hr,Io(H)),w.provide(gr,l);const D=w.unmount;sn.add(w),w.unmount=function(){sn.delete(w),sn.size<1&&(u=It,ie&&ie(),ie=null,l.value=It,nn=!1,de=!1),D()}}};function qe(w){return w.reduce((H,D)=>H.then(()=>q(D)),Promise.resolve())}return Ft}function Ff(){return Xe(Ls)}function Nl(e){return Xe(Hr)}const Dl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},jf={__name:"PixelTree",props:{size:{type:String,default:"md"},variant:{type:String,default:"emerald"}},setup(e){const t=["0000g0000","000ggg000","00gglgg00","0ggggggg0","0gglflgg0","00ggggg00","000gtg000","000ttt000","0000t0000"],n=t[0].length,s=t.length,r=he(()=>t.join("").split("")),i=he(()=>({"--cols":n,"--rows":s}));return(o,a)=>(E(),I("div",{class:Ie(["pixel-tree",[`size-${e.size}`,`variant-${e.variant}`]]),style:xs(i.value),"aria-hidden":"true"},[(E(!0),I(Y,null,ye(r.value,(l,u)=>(E(),I("span",{key:u,class:Ie(["pixel-tree-cell",{filled:l!=="0",leaf:l==="g",leafAlt:l==="l",trunk:l==="t",fruit:l==="f"}])},null,2))),128))],6))}},un=Dl(jf,[["__scopeId","data-v-00c24bb5"]]),zf={class:"container nav-shell"},Uf={class:"brand-mark brand-mark-tree"},Gf={class:"nav-right"},Vf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Re(!1);return(n,s)=>{const r=Ht("router-link");return E(),I("header",{class:Ie(["site-header",{scrolled:e.scrolled}])},[f("div",zf,[F(r,{class:"brand",to:"/"},{default:Q(()=>[f("span",Uf,[F(un,{size:"micro",variant:"forest"})]),s[10]||(s[10]=f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Minecraft Server Core")],-1))]),_:1}),f("div",Gf,[f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Ie(["nav-links",{open:t.value}])},[F(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:Q(()=>[...s[12]||(s[12]=[ne("首页",-1)])]),_:1}),F(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:Q(()=>[...s[13]||(s[13]=[ne("核心能力",-1)])]),_:1}),F(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:Q(()=>[...s[14]||(s[14]=[ne("技术文档",-1)])]),_:1}),F(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:Q(()=>[...s[15]||(s[15]=[ne("下载",-1)])]),_:1}),F(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:Q(()=>[...s[16]||(s[16]=[ne("路线图",-1)])]),_:1}),F(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:Q(()=>[...s[17]||(s[17]=[ne("更新日志",-1)])]),_:1}),F(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:Q(()=>[...s[18]||(s[18]=[ne("团队与支持",-1)])]),_:1}),F(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:Q(()=>[...s[19]||(s[19]=[ne("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),ne(" "+$(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},qf={class:"site-footer"},Kf={class:"container footer-grid"},Zf={class:"brand footer-brand"},Jf={class:"brand-mark brand-mark-tree"},Qf={__name:"SiteFooter",setup(e){return(t,n)=>{const s=Ht("router-link");return E(),I("footer",qf,[f("div",Kf,[f("div",null,[f("div",Zf,[f("span",Jf,[F(un,{size:"micro",variant:"forest"})]),n[0]||(n[0]=f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")],-1))]),n[1]||(n[1]=f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ",-1))]),f("div",null,[n[7]||(n[7]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[F(s,{to:"/features"},{default:Q(()=>[...n[2]||(n[2]=[ne("核心能力",-1)])]),_:1})]),f("li",null,[F(s,{to:"/docs"},{default:Q(()=>[...n[3]||(n[3]=[ne("技术文档",-1)])]),_:1})]),f("li",null,[F(s,{to:"/downloads"},{default:Q(()=>[...n[4]||(n[4]=[ne("下载",-1)])]),_:1})]),f("li",null,[F(s,{to:"/roadmap"},{default:Q(()=>[...n[5]||(n[5]=[ne("路线图",-1)])]),_:1})]),f("li",null,[F(s,{to:"/changelog"},{default:Q(()=>[...n[6]||(n[6]=[ne("更新日志",-1)])]),_:1})])])]),n[13]||(n[13]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[n[12]||(n[12]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[F(s,{to:"/team"},{default:Q(()=>[...n[8]||(n[8]=[ne("团队与支持",-1)])]),_:1})]),n[9]||(n[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),n[10]||(n[10]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),n[11]||(n[11]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),n[14]||(n[14]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}}},Yf=["data-theme"],Xf={class:"site-main"},ed={__name:"App",setup(e){const t=Re("dark"),n=Re(!1),s=Nl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},o=()=>{i(t.value==="dark"?"light":"dark")},a=()=>{n.value=window.scrollY>8},l=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".tree-suite-grid > *",".entry-grid > *",".showcase-row > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Kt();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(l.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return en(()=>{const c=localStorage.getItem("tree-site-theme");if(c==="dark"||c==="light")i(c);else{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;i(d?"dark":"light")}a(),window.addEventListener("scroll",a,{passive:!0}),u()}),Es(()=>{window.removeEventListener("scroll",a),r==null||r.disconnect()}),Bt(()=>s.fullPath,()=>{u()}),Bt(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=Ht("router-view");return E(),I("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=pt('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),F(Vf,{theme:t.value,scrolled:n.value,onToggleTheme:o},null,8,["theme","scrolled"]),f("main",Xf,[F(p,null,{default:Q(({Component:m,route:x})=>[F(lu,{name:"page-fade",mode:"out-in"},{default:Q(()=>[(E(),cn(gc(m),{key:x.fullPath}))]),_:2},1024)]),_:1})]),F(Qf)],8,Yf)}}},td="/images/console-preview.png",nd={class:"hero-section home-hero-section"},sd={class:"container hero-grid home-hero-grid"},rd={class:"hero-copy"},id={class:"section-kicker-row hero-kicker-row"},od={class:"hero-actions"},ld={class:"section-block"},ad={class:"container stats-grid"},cd={class:"section-block home-suite-section surface-soft"},ud={class:"container"},fd={class:"section-head"},dd={class:"section-kicker-row"},pd={class:"tree-suite-grid"},hd={class:"suite-card-head"},gd={class:"suite-icon"},md={class:"card-label"},bd={class:"bullet-list compact-list suite-points"},vd={class:"section-block showcase-section"},_d={class:"container showcase-stack"},yd={class:"showcase-visual surface-card"},kd=["src","alt"],wd={class:"showcase-copy"},xd={class:"eyebrow"},Cd={class:"hero-actions"},Td={class:"section-block surface-soft"},Rd={class:"container"},Sd={class:"feature-grid three"},Ad={class:"section-block"},Ed={class:"container"},Pd={class:"entry-grid"},Id={class:"entry-card-head"},$d={class:"card-label"},Od={class:"section-block surface-soft"},Ld={class:"container"},Md={class:"feature-grid two"},Nd={class:"section-block final-cta"},Dd={class:"container cta-shell tree-cta-shell"},Bd={class:"hero-actions"},Wd={__name:"HomePage",setup(e){const t=[{value:"11",label:"当前 Web 页签"},{value:"4 档",label:"自动分层预设"},{value:"ZIP",label:"本地资源包拖拽上传"},{value:"Docs",label:"站内技术 Wiki"}],n=[{kicker:"PERFORMANCE",title:"性能主干",description:"把动态视距、动态模拟距离、自动分层、Paper 热调与网络链路优化收束成同一条性能主线。",points:["动态视距 / 模拟距离","自动分层与运行时调优","更稳的 TPS / MSPT 控制"],link:"/features",linkLabel:"查看性能能力",variant:"forest"},{kicker:"OPERATIONS",title:"运维主干",description:"让控制台、诊断、备份、世界管理与集成状态不再分散在命令和脚本里，而是在 Web 面板内统一可见。",points:["控制台 / 线程转储 / 内存快照","备份创建与恢复","世界管理与集成状态卡片"],link:"/docs/web-panel",linkLabel:"查看 Web 面板",variant:"emerald"},{kicker:"CONTENT FLOW",title:"内容主干",description:"模型、纹理、资源包 ZIP、本地托管与在线玩家下发形成完整闭环，适合内容服与综合服长期维护。",points:["模型 / 纹理上传","资源包拖拽上传与重载","在线玩家远程下发"],link:"/docs/resource-pack",linkLabel:"查看资源链路",variant:"gold"}],s=[{eyebrow:"REAL OPERATIONS",title:"高峰监控、问题排查与恢复动作放在同一条运维流程里。",description:"先看仪表盘，再看控制台，再做线程转储、资源包处理或备份恢复。TreeCore 的目标不是把功能堆进去，而是让它们在实际运维时顺畅接起来。",image:"/images/console-live.gif",link:"/docs/web-pages-overview",linkLabel:"查看页面总览",variant:"teal",reverse:!1},{eyebrow:"LONG TERM SERVER",title:"面向综合服、长周目服与高峰玩家场景持续维护。",description:"对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。",image:"/images/stress-test.gif",link:"/docs/first-day-checklist",linkLabel:"查看上线清单",variant:"forest",reverse:!0},{eyebrow:"DOCS + RELEASE FLOW",title:"首页把文档、下载、路线图和支持入口都收进同一条阅读路径。",description:"现在你可以从首页直接进入快速开始、配置参考、下载页、更新日志、路线图和社区入口，不需要在多个仓库页面之间来回切换。",image:"/images/console-preview.png",link:"/docs/quick-start",linkLabel:"从快速开始进入",variant:"gold",reverse:!1}],r=[{title:"生存 / 长周目服",description:"希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。"},{title:"多世界 / 综合服",description:"需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。"},{title:"运维要求高的团队服",description:"希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。"}],i=[{tag:"GET STARTED",title:"快速开始",description:"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",link:"/docs/quick-start",linkLabel:"进入快速开始",variant:"forest"},{tag:"CONFIG",title:"配置参考",description:"把关键配置项和推荐开关集中整理，便于你在正式服环境中调整。",link:"/docs/configuration",linkLabel:"查看配置参考",variant:"teal"},{tag:"DOWNLOADS",title:"下载与版本",description:"在官网内查看最新版本、更新摘要与下载入口，不再只靠仓库页面跳转。",link:"/downloads",linkLabel:"进入下载页",variant:"gold"},{tag:"ROADMAP",title:"路线图",description:"清楚了解当前阶段、下一阶段与后续方向，避免首页信息只有静态介绍。",link:"/roadmap",linkLabel:"查看路线图",variant:"emerald"},{tag:"CHANGELOG",title:"更新日志",description:"把版本变化、发布时间和更新摘要收束成时间线视图。",link:"/changelog",linkLabel:"查看更新日志",variant:"forest"},{tag:"SUPPORT",title:"团队与支持",description:"集中展示社区入口、贡献者、常见问题与对外支持入口。",link:"/team",linkLabel:"进入支持页",variant:"gold"}],o=[{title:"TreeCore 更适合哪类服务器？",description:"更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。"},{title:"默认会不会大幅改动原版行为？",description:"整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏默认原版、按需保护。"},{title:"Web 管理面板现在能做什么？",description:"当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。"},{title:"第一次上服最推荐先做什么？",description:"建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。"}];return(a,l)=>{const u=Ht("router-link");return E(),I("div",null,[f("section",nd,[f("div",sd,[f("div",rd,[f("div",id,[F(un,{size:"tiny",variant:"forest"}),l[0]||(l[0]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1))]),l[4]||(l[4]=pt('<h1 class="hero-title">高性能 Minecraft 服务端核心，带 Web 管理、诊断和资源链路。</h1><p class="hero-description"> TreeCore 面向需要长期维护的服务器场景，把性能调优、Web 管理面板、资源包与模型流程、 假人和红石分析整理到同一套服务端核心里。 </p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',3)),f("div",od,[F(u,{class:"button primary",to:"/features"},{default:Q(()=>[...l[1]||(l[1]=[ne("查看能力",-1)])]),_:1}),F(u,{class:"button secondary",to:"/docs"},{default:Q(()=>[...l[2]||(l[2]=[ne("阅读文档",-1)])]),_:1}),l[3]||(l[3]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1))]),l[5]||(l[5]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),l[6]||(l[6]=pt('<div class="hero-visual tree-hero-visual"><div class="hero-spotlight"></div><div class="hero-card image-card hero-stage"><img src="'+td+'" alt="TreeCore 控制台预览"><div class="overlay-panel"><strong>Web 管理面板</strong><p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p></div></div></div>',1))])]),f("section",ld,[f("div",ad,[(E(),I(Y,null,ye(t,c=>f("article",{class:"stat-card",key:c.label},[f("strong",null,$(c.value),1),f("span",null,$(c.label),1)])),64))])]),f("section",cd,[f("div",ud,[f("div",fd,[f("div",dd,[F(un,{size:"tiny",variant:"emerald"}),l[7]||(l[7]=f("span",{class:"eyebrow"},"CORE BRANCHES",-1))]),l[8]||(l[8]=f("h2",null,"借鉴 PaperMC 那种清晰的软件分区，但把它改成 TreeCore 的三条主干。",-1)),l[9]||(l[9]=f("p",null," 首页现在不再只是堆叠介绍，而是用更产品化的方式，把 TreeCore 的三条核心主干——性能、运维、内容链路——明确分开展示。 ",-1))]),f("div",pd,[(E(),I(Y,null,ye(n,c=>f("article",{class:"suite-card surface-card",key:c.title},[f("div",hd,[f("div",gd,[F(un,{size:"sm",variant:c.variant},null,8,["variant"])]),f("div",null,[f("span",md,$(c.kicker),1),f("h3",null,$(c.title),1)])]),f("p",null,$(c.description),1),f("ul",bd,[(E(!0),I(Y,null,ye(c.points,d=>(E(),I("li",{key:d},$(d),1))),128))]),F(u,{class:"text-link",to:c.link},{default:Q(()=>[ne($(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),l[16]||(l[16]=pt('<section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section>',1)),f("section",vd,[f("div",_d,[(E(),I(Y,null,ye(s,c=>f("article",{class:Ie(["showcase-row",{reverse:c.reverse}]),key:c.title},[f("div",yd,[f("img",{src:c.image,alt:c.title},null,8,kd)]),f("div",wd,[f("span",xd,$(c.eyebrow),1),f("h2",null,$(c.title),1),f("p",null,$(c.description),1),f("div",Cd,[F(u,{class:"button primary small",to:c.link},{default:Q(()=>[ne($(c.linkLabel),1)]),_:2},1032,["to"])])])],2)),64))])]),f("section",Td,[f("div",Rd,[l[10]||(l[10]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SCENARIOS"),f("h2",null,"适合哪些服务器？")],-1)),f("div",Sd,[(E(),I(Y,null,ye(r,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,$(c.title),1),f("p",null,$(c.description),1)])),64))])])]),f("section",Ad,[f("div",Ed,[l[11]||(l[11]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"INSIDE THE SITE"),f("h2",null,"文档、下载、路线图和支持都在同一个站里。"),f("p",null,"如果你是第一次来看 TreeCore，这里就是最直接的入口区：先找文档，再看下载，最后再看路线图和支持页面。")],-1)),f("div",Pd,[(E(),I(Y,null,ye(i,c=>f("article",{class:"entry-card feature-card compact",key:c.title},[f("div",Id,[F(un,{size:"tiny",variant:c.variant},null,8,["variant"]),f("span",$d,$(c.tag),1)]),f("h3",null,$(c.title),1),f("p",null,$(c.description),1),F(u,{class:"text-link",to:c.link},{default:Q(()=>[ne($(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),f("section",Od,[f("div",Ld,[l[12]||(l[12]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"FAQ"),f("h2",null,"你可能最先会关心的几个问题")],-1)),f("div",Md,[(E(),I(Y,null,ye(o,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,$(c.title),1),f("p",null,$(c.description),1)])),64))])])]),f("section",Nd,[f("div",Dd,[l[15]||(l[15]=f("div",{class:"cta-copy"},[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看能力，再进文档，然后开始部署。"),f("p",null,"官网现在已经把首页、文档、下载入口和后续信息放到同一个站里，阅读路径会简单很多。")],-1)),f("div",Bd,[F(u,{class:"button primary",to:"/docs"},{default:Q(()=>[...l[13]||(l[13]=[ne("进入技术文档",-1)])]),_:1}),F(u,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...l[14]||(l[14]=[ne("查看下载入口",-1)])]),_:1})])])])])}}},Hd={},Fd={class:"page-shell container"};function jd(e,t){return E(),I("div",Fd,[...t[0]||(t[0]=[pt('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>当前可用的核心能力</h1><p> 这页只讲现在已经做出来、并且日常维护能直接用上的部分：性能调优、Web 运维、资源包与模型链路，以及世界和备份管理。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const zd=Dl(Hd,[["render",jd]]),Bl="https://api.github.com/repos/TreeMC-cloud/Tree",Ud=`${Bl}/releases?per_page=30`,Gd=`${Bl}/contributors?per_page=24`,Wl="tree-site-cache:",Vd=30*60*1e3,Hl=e=>{try{const t=localStorage.getItem(`${Wl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>Vd?null:n.data}catch{return null}},Fl=(e,t)=>{try{localStorage.setItem(`${Wl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},jl=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},qd=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},zl=async()=>{try{const e=await jl(Ud),t=Array.isArray(e)?e:[];return Fl("releases",t),{data:t,source:"github"}}catch{const e=Hl("releases");if(e)return{data:e,source:"cache"};const t=await qd();return{data:t,source:t.length?"fallback":"empty"}}},Kd=async()=>{try{const e=await jl(Gd),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Fl("contributors",t),{data:t,source:"github"}}catch{const e=Hl("contributors");return{data:e||[],source:e?"cache":"empty"}}},is=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Nt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Ul=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Gn=e=>String(e||"").replace(/\r/g,"").trim(),Mt=(e,t=4)=>{const n=Gn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},Cn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},to=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Gl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),Zd={class:"page-shell container"},Jd={class:"page-hero"},Qd={class:"hero-actions"},Yd={class:"stack-section"},Xd={class:"section-head left"},ep={class:"release-hero-grid"},tp={key:0,class:"release-hero-card surface-card"},np={class:"release-head"},sp={class:"release-date"},rp={class:"release-tag"},ip={key:0,class:"bullet-list compact-list"},op={key:1,class:"release-body"},lp={class:"release-actions"},ap=["href"],cp=["href"],up={key:1,class:"release-hero-card surface-card"},fp={class:"release-head"},dp={class:"release-date"},pp={class:"release-tag"},hp={key:0,class:"bullet-list compact-list"},gp={key:1,class:"release-body"},mp={class:"release-actions"},bp=["href"],vp=["href"],_p={key:2,class:"empty-state surface-card"},yp={class:"stack-section surface-card changelog-toolbar"},kp={class:"release-filter-row"},wp={class:"filter-chip-group"},xp=["onClick"],Cp={key:0,class:"stack-section"},Tp={key:1,class:"stack-section release-list-grid"},Rp={class:"release-head"},Sp={class:"release-date"},Ap={class:"release-tag"},Ep={key:0,class:"bullet-list compact-list"},Pp={key:1,class:"release-body"},Ip={key:2,class:"asset-group-list"},$p={key:3,class:"release-asset-list"},Op=["href"],Lp={class:"release-actions"},Mp=["href"],Np={key:2,class:"stack-section"},Dp={__name:"DownloadsPage",setup(e){const t=Re(!0),n=Re([]),s=Re("github"),r=Re("all"),i=Re(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],a=he(()=>Gl(n.value)),l=he(()=>a.value.find(O=>Nt(O)==="stable")||null),u=he(()=>a.value.find(O=>Nt(O)==="preview")||null),c=he(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=O=>{const k=Gn(O).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return k?k.length>140?`${k.slice(0,140)}…`:k:"暂无发布说明。"},p=O=>{const k=m(O);return k.find(A=>Cn(A)==="server")||k[0]||null},m=O=>{const k=Array.isArray(O==null?void 0:O.assets)?[...O.assets]:[],A=["server","archive","source","checksum","metadata","other"];return k.sort((R,_)=>A.indexOf(Cn(R))-A.indexOf(Cn(_))).slice(0,5)},x=O=>{const k=new Map;for(const A of(O==null?void 0:O.assets)||[]){const R=Cn(A),_=k.get(R)||[];_.push(A),k.set(R,_)}return["server","archive","source","checksum","metadata","other"].filter(A=>k.has(A)).map(A=>({type:A,label:to(A),items:k.get(A)}))},T=he(()=>{const O=i.value.toLowerCase();return a.value.filter(k=>{const A=Nt(k);return r.value!=="all"&&A!==r.value?!1:O?[k.name,k.tag_name,Gn(k.body)].filter(Boolean).join(" ").toLowerCase().includes(O):!0})});return en(async()=>{const O=await zl();n.value=O.data,s.value=O.source,t.value=!1}),(O,k)=>{const A=Ht("router-link");return E(),I("div",Zd,[f("section",Jd,[k[4]||(k[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),k[5]||(k[5]=f("h1",null,"下载与版本",-1)),k[6]||(k[6]=f("p",null," 这里直接读取公开仓库 Releases，展示最新正式版、预发布版、附件和更新摘要，不需要你再自己去翻仓库页面。 ",-1)),f("div",Qd,[k[3]||(k[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),F(A,{class:"button secondary",to:"/docs/quick-start"},{default:Q(()=>[...k[1]||(k[1]=[ne("安装文档",-1)])]),_:1}),F(A,{class:"button ghost",to:"/changelog"},{default:Q(()=>[...k[2]||(k[2]=[ne("查看更新日志",-1)])]),_:1})])]),f("section",Yd,[f("div",Xd,[k[7]||(k[7]=f("h2",null,"最新版本",-1)),f("p",null,$(c.value),1)]),f("div",ep,[l.value?(E(),I("article",tp,[f("div",np,[k[8]||(k[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",sp,$(pe(is)(l.value.published_at)),1)]),f("h3",null,$(l.value.name||l.value.tag_name),1),f("p",rp,$(l.value.tag_name),1),pe(Mt)(l.value.body,4).length?(E(),I("ul",ip,[(E(!0),I(Y,null,ye(pe(Mt)(l.value.body,4),R=>(E(),I("li",{key:R},$(R),1))),128))])):(E(),I("p",op,$(d(l.value.body)),1)),f("div",lp,[f("a",{class:"button primary small",href:l.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,ap),p(l.value)?(E(),I("a",{key:0,class:"button secondary small",href:p(l.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+$(p(l.value).name),9,cp)):Qe("",!0)])])):Qe("",!0),u.value?(E(),I("article",up,[f("div",fp,[k[9]||(k[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",dp,$(pe(is)(u.value.published_at)),1)]),f("h3",null,$(u.value.name||u.value.tag_name),1),f("p",pp,$(u.value.tag_name),1),pe(Mt)(u.value.body,4).length?(E(),I("ul",hp,[(E(!0),I(Y,null,ye(pe(Mt)(u.value.body,4),R=>(E(),I("li",{key:R},$(R),1))),128))])):(E(),I("p",gp,$(d(u.value.body)),1)),f("div",mp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,bp),p(u.value)?(E(),I("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+$(p(u.value).name),9,vp)):Qe("",!0)])])):Qe("",!0),!l.value&&!u.value?(E(),I("article",_p,[...k[10]||(k[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Qe("",!0)])]),f("section",yp,[k[11]||(k[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",kp,[f("div",wp,[(E(),I(Y,null,ye(o,R=>f("button",{key:R.value,class:Ie(["filter-chip",{active:r.value===R.value}]),onClick:_=>r.value=R.value},$(R.label),11,xp)),64))]),Or(f("input",{"onUpdate:modelValue":k[0]||(k[0]=R=>i.value=R),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Br,i.value,void 0,{trim:!0}]])])]),t.value?(E(),I("section",Cp,[...k[12]||(k[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):T.value.length?(E(),I("section",Tp,[(E(!0),I(Y,null,ye(T.value,R=>(E(),I("article",{key:R.id||R.tag_name,class:"release-card enhanced-release-card"},[f("div",Rp,[f("span",{class:Ie(["release-badge",{alt:pe(Nt)(R)==="preview"}])},$(pe(Ul)(pe(Nt)(R))),3),f("span",Sp,$(pe(is)(R.published_at)),1)]),f("h3",null,$(R.name||R.tag_name),1),f("p",Ap,$(R.tag_name),1),pe(Mt)(R.body,4).length?(E(),I("ul",Ep,[(E(!0),I(Y,null,ye(pe(Mt)(R.body,4),_=>(E(),I("li",{key:_},$(_),1))),128))])):(E(),I("p",Pp,$(d(R.body)),1)),x(R).length?(E(),I("div",Ip,[(E(!0),I(Y,null,ye(x(R),_=>(E(),I("div",{key:_.type,class:"asset-group-chip"},[f("strong",null,$(_.label),1),f("span",null,$(_.items.length)+" 个文件",1)]))),128))])):Qe("",!0),R.assets&&R.assets.length?(E(),I("div",$p,[(E(!0),I(Y,null,ye(m(R),_=>(E(),I("a",{key:_.id||_.name,class:"release-asset-link",href:_.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,$(_.name),1),f("small",null,$(pe(to)(pe(Cn)(_))),1)],8,Op))),128))])):Qe("",!0),f("div",Lp,[f("a",{class:"button primary small",href:R.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Mp),F(A,{class:"button secondary small",to:"/changelog"},{default:Q(()=>[...k[13]||(k[13]=[ne("看时间线",-1)])]),_:1})])]))),128))])):(E(),I("section",Np,[...k[14]||(k[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),k[15]||(k[15]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},gs=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],fn=gs.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Vl=Object.fromEntries(fn.map(e=>[e.slug,e])),Bp={class:"page-shell container"},Wp={class:"page-hero docs-hero-grid"},Hp={class:"hero-actions"},Fp={class:"stack-section surface-card docs-filter-card"},jp={class:"docs-filter-bar"},zp={class:"section-head left"},Up={class:"feature-grid three"},Gp={class:"card-label"},Vp={class:"doc-card-meta"},qp={key:0,class:"stack-section"},Kp={__name:"DocsPage",setup(e){const t=Re(""),n=he(()=>{const s=t.value.toLowerCase();return s?gs.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):gs});return(s,r)=>{const i=Ht("router-link");return E(),I("div",Bp,[f("section",Wp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档都放在站内。",-1)),r[5]||(r[5]=f("p",null," 现在可以直接在这里看部署、运维、配置、架构和 Web 资源同步文档，不用再跳去 GitHub Markdown 页面。 ",-1)),f("div",Hp,[F(i,{class:"button primary",to:"/docs/quick-start"},{default:Q(()=>[...r[1]||(r[1]=[ne("从快速开始开始",-1)])]),_:1}),F(i,{class:"button secondary",to:"/docs/configuration"},{default:Q(()=>[...r[2]||(r[2]=[ne("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Fp,[f("div",jp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Or(f("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Br,t.value,void 0,{trim:!0}]])])]),(E(!0),I(Y,null,ye(n.value,o=>(E(),I("section",{class:"stack-section",key:o.key},[f("div",zp,[f("h2",null,$(o.title),1),f("p",null,$(o.description),1)]),f("div",Up,[(E(!0),I(Y,null,ye(o.items,a=>(E(),I("article",{class:"feature-card compact",key:a.slug},[f("span",Gp,$(a.tag),1),f("h3",null,$(a.title),1),f("p",null,$(a.description),1),f("div",Vp,[f("span",null,$(o.title),1),f("span",null,$(a.minutes),1)]),F(i,{class:"text-link",to:`/docs/${a.slug}`},{default:Q(()=>[...r[8]||(r[8]=[ne("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Qe("",!0):(E(),I("section",qp,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Zp=`# Tree 技术文档 / Wiki

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
`,Jp=`# Summary

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
`,Qp=`# 模块地图

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
`,Yp=`# 系统架构总览

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
`,Xp=`# Web 资源同步机制

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
`,eh=`# 首次上线检查清单

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
`,th=`# 快速开始

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
`,nh=`# Web 面板访问

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
`,sh=`# 命令与日常运维

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
`,rh=`# 诊断与备份

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
`,ih=`# 假人 / 红石运维

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
`,oh=`# 集成与世界管理

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
`,lh=`# 资源包 / 模型链路

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
`,ah=`# Web 页面总览

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
`,ch=`# 命令速查表

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
`,uh=`# 配置参考

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
`,fh=Object.assign({"../../content/docs/README.md":Zp,"../../content/docs/SUMMARY.md":Jp,"../../content/docs/architecture/module-map.md":Qp,"../../content/docs/architecture/system-overview.md":Yp,"../../content/docs/development/web-ui-pipeline.md":Xp,"../../content/docs/getting-started/first-day-checklist.md":eh,"../../content/docs/getting-started/quick-start.md":th,"../../content/docs/getting-started/web-panel.md":nh,"../../content/docs/operations/commands.md":sh,"../../content/docs/operations/diagnostics-and-backups.md":rh,"../../content/docs/operations/fakeplayer-and-redstone.md":ih,"../../content/docs/operations/integrations-and-worlds.md":oh,"../../content/docs/operations/resource-pack.md":lh,"../../content/docs/operations/web-pages-overview.md":ah,"../../content/docs/reference/command-cheatsheet.md":ch,"../../content/docs/reference/configuration.md":uh}),dh="../../content/docs/",ph=Object.fromEntries(Object.entries(fh).map(([e,t])=>[e.replace(dh,""),t]));function Fr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var tn=Fr();function ql(e){tn=e}var Nn={exec:()=>null};function ue(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(De.caret,"$1"),n=n.replace(r,o),s},getRegex:()=>new RegExp(n,t)};return s}var De={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},hh=/^(?:[ \t]*(?:\n|$))+/,gh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,mh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jr=/(?:[*+-]|\d{1,9}[.)])/,Kl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Zl=ue(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vh=ue(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),zr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_h=/^[^\n]+/,Ur=/(?!\s*\])(?:\\.|[^\[\]\\])+/,yh=ue(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ur).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),kh=ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jr).getRegex(),Ms="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Gr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wh=ue("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gr).replace("tag",Ms).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Jl=ue(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),xh=ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Jl).getRegex(),Vr={blockquote:xh,code:gh,def:yh,fences:mh,heading:bh,hr:Zn,html:wh,lheading:Zl,list:kh,newline:hh,paragraph:Jl,table:Nn,text:_h},no=ue("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),Ch={...Vr,lheading:vh,table:no,paragraph:ue(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",no).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex()},Th={...Vr,html:ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Gr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Nn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ue(zr).replace("hr",Zn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Zl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Sh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ql=/^( {2,}|\\)\n(?!\s*$)/,Ah=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ns=/[\p{P}\p{S}]/u,qr=/[\s\p{P}\p{S}]/u,Yl=/[^\s\p{P}\p{S}]/u,Eh=ue(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,qr).getRegex(),Xl=/(?!~)[\p{P}\p{S}]/u,Ph=/(?!~)[\s\p{P}\p{S}]/u,Ih=/(?:[^\s\p{P}\p{S}]|~)/u,$h=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ea=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Oh=ue(ea,"u").replace(/punct/g,Ns).getRegex(),Lh=ue(ea,"u").replace(/punct/g,Xl).getRegex(),ta="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Mh=ue(ta,"gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,qr).replace(/punct/g,Ns).getRegex(),Nh=ue(ta,"gu").replace(/notPunctSpace/g,Ih).replace(/punctSpace/g,Ph).replace(/punct/g,Xl).getRegex(),Dh=ue("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,qr).replace(/punct/g,Ns).getRegex(),Bh=ue(/\\(punct)/,"gu").replace(/punct/g,Ns).getRegex(),Wh=ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hh=ue(Gr).replace("(?:-->|$)","-->").getRegex(),Fh=ue("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ms=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jh=ue(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ms).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),na=ue(/^!?\[(label)\]\[(ref)\]/).replace("label",ms).replace("ref",Ur).getRegex(),sa=ue(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ur).getRegex(),zh=ue("reflink|nolink(?!\\()","g").replace("reflink",na).replace("nolink",sa).getRegex(),Kr={_backpedal:Nn,anyPunctuation:Bh,autolink:Wh,blockSkip:$h,br:Ql,code:Sh,del:Nn,emStrongLDelim:Oh,emStrongRDelimAst:Mh,emStrongRDelimUnd:Dh,escape:Rh,link:jh,nolink:sa,punctuation:Eh,reflink:na,reflinkSearch:zh,tag:Fh,text:Ah,url:Nn},Uh={...Kr,link:ue(/^!?\[(label)\]\((.*?)\)/).replace("label",ms).getRegex(),reflink:ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ms).getRegex()},mr={...Kr,emStrongRDelimAst:Nh,emStrongLDelim:Lh,url:ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gh={...mr,br:ue(Ql).replace("{2,}","*").getRegex(),text:ue(mr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xn={normal:Vr,gfm:Ch,pedantic:Th},Tn={normal:Kr,gfm:mr,breaks:Gh,pedantic:Uh},Vh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},so=e=>Vh[e];function at(e,t){if(t){if(De.escapeTest.test(e))return e.replace(De.escapeReplace,so)}else if(De.escapeTestNoEncode.test(e))return e.replace(De.escapeReplaceNoEncode,so);return e}function ro(e){try{e=encodeURI(e).replace(De.percentDecode,"%")}catch{return null}return e}function io(e,t){var i;const n=e.replace(De.findPipe,(o,a,l)=>{let u=!1,c=a;for(;--c>=0&&l[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(De.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(De.slashPipe,"|");return s}function Rn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function qh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function oo(e,t,n,s,r){const i=t.href,o=t.title||null,a=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}function Kh(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var bs=class{constructor(e){ge(this,"options");ge(this,"rules");ge(this,"lexer");this.options=e||tn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Rn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Kh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Rn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Rn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Rn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let o=!1;const a=[];let l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),o=!0;else if(!o)a.push(n[l]);else break;n=n.slice(l);const u=a.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,x=m.raw+`
`+n.join(`
`),T=this.blockquote(x);i[i.length-1]=T,s=s.substring(0,s.length-m.raw.length)+T.raw,r=r.substring(0,r.length-m.text.length)+T.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,x=m.raw+`
`+n.join(`
`),T=this.list(x);i[i.length-1]=T,s=s.substring(0,s.length-p.raw.length)+T.raw,r=r.substring(0,r.length-m.raw.length)+T.raw,n=x.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let l=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,k=>" ".repeat(3*k.length)),p=e.split(`
`,1)[0],m=!d.trim(),x=0;if(this.options.pedantic?(x=2,c=d.trimStart()):m?x=t[1].length+1:(x=t[2].search(this.rules.other.nonSpaceChar),x=x>4?1:x,c=d.slice(x),x+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),l=!0),!l){const k=this.rules.other.nextBulletRegex(x),A=this.rules.other.hrRegex(x),R=this.rules.other.fencesBeginRegex(x),_=this.rules.other.headingBeginRegex(x),L=this.rules.other.htmlBeginRegex(x);for(;e;){const Z=e.split(`
`,1)[0];let V;if(p=Z,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),V=p):V=p.replace(this.rules.other.tabCharGlobal,"    "),R.test(p)||_.test(p)||L.test(p)||k.test(p)||A.test(p))break;if(V.search(this.rules.other.nonSpaceChar)>=x||!p.trim())c+=`
`+V.slice(x);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(d)||_.test(d)||A.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=Z+`
`,e=e.substring(Z.length+1),d=V.slice(x)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let T=null,O;this.options.gfm&&(T=this.rules.other.listIsTask.exec(c),T&&(O=T[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!T,checked:O,loose:!1,text:c,tokens:[]}),r.raw+=u}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l=0;l<r.items.length;l++)if(this.lexer.state.top=!1,r.items[l].tokens=this.lexer.blockTokens(r.items[l].text,[]),!r.loose){const u=r.items[l].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let l=0;l<r.items.length;l++)r.items[l].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=io(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(const a of r)i.rows.push(io(a,i.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Rn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=qh(t[2],"()");if(i===-2)return;if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),oo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return oo(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let o,a,l=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+a);if(Math.min(i,a)%2){const x=p.slice(1,-1);return{type:"em",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},xt=class br{constructor(t){ge(this,"tokens");ge(this,"options");ge(this,"state");ge(this,"tokenizer");ge(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||tn,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:De,block:Xn.normal,inline:Tn.normal};this.options.pedantic?(n.block=Xn.pedantic,n.inline=Tn.pedantic):this.options.gfm&&(n.block=Xn.gfm,this.options.breaks?n.inline=Tn.breaks:n.inline=Tn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xn,inline:Tn}}static lex(t,n){return new br(n).lex(t)}static lexInline(t,n){return new br(n).inlineTokens(t)}lex(t){t=t.replace(De.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,o;for(this.options.pedantic&&(t=t.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));t;){let a;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(a=u.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);const u=n.at(-1);a.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=t.substring(0,u+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a),s=l.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var a,l,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let x;this.options.extensions.startInline.forEach(T=>{x=T.call({lexer:this},m),typeof x=="number"&&x>=0&&(p=Math.min(p,x))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},vs=class{constructor(e){ge(this,"options");ge(this,"parser");this.options=e||tn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(De.notSpaceStart))==null?void 0:i[0],r=e.replace(De.endingNewline,"")+`
`;return s?'<pre><code class="language-'+at(s)+'">'+(n?r:at(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:at(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let o=0;o<e.items.length;o++){const a=e.items[o];s+=this.listitem(a)}const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+at(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const i=e.rows[r];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ro(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+at(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=ro(e);if(r===null)return at(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${at(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}},Zr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Ct=class vr{constructor(t){ge(this,"options");ge(this,"renderer");ge(this,"textRenderer");this.options=t||tn,this.options.renderer=this.options.renderer||new vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zr}static parse(t,n){return new vr(n).parse(t)}static parseInline(t,n){return new vr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let o=0;o<t.length;o++){const a=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=a,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const l=a;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let u=l,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let o=0;o<t.length;o++){const a=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=u||"";continue}}const l=a;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},Xs,os=(Xs=class{constructor(e){ge(this,"options");ge(this,"block");this.options=e||tn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?xt.lex:xt.lexInline}provideParser(){return this.block?Ct.parse:Ct.parseInline}},ge(Xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xs),Zh=class{constructor(...e){ge(this,"defaults",Fr());ge(this,"options",this.setOptions);ge(this,"parse",this.parseMarkdown(!0));ge(this,"parseInline",this.parseMarkdown(!1));ge(this,"Parser",Ct);ge(this,"Renderer",vs);ge(this,"TextRenderer",Zr);ge(this,"Lexer",xt);ge(this,"Tokenizer",bs);ge(this,"Hooks",os);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const a of o.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of o.rows)for(const l of a)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const l=o[a].flat(1/0);n=n.concat(this.walkTokens(l,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=i.apply(this,o)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new vs(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,a=n.renderer[o],l=r[o];r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new bs(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,a=n.tokenizer[o],l=r[o];r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new os;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,a=n.hooks[o],l=r[o];os.passThroughHooks.has(i)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(d=>l.call(r,d));const c=a.call(r,u);return l.call(r,c)}:r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let a=[];return a.push(i.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return xt.lex(e,t??this.defaults)}parser(e,t){return Ct.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const a=i.hooks?i.hooks.provideLexer():e?xt.lex:xt.lexInline,l=i.hooks?i.hooks.provideParser():e?Ct.parse:Ct.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=a(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=l(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Yt=new Zh;function te(e,t){return Yt.parse(e,t)}te.options=te.setOptions=function(e){return Yt.setOptions(e),te.defaults=Yt.defaults,ql(te.defaults),te};te.getDefaults=Fr;te.defaults=tn;te.use=function(...e){return Yt.use(...e),te.defaults=Yt.defaults,ql(te.defaults),te};te.walkTokens=function(e,t){return Yt.walkTokens(e,t)};te.parseInline=Yt.parseInline;te.Parser=Ct;te.parser=Ct.parse;te.Renderer=vs;te.TextRenderer=Zr;te.Lexer=xt;te.lexer=xt.lex;te.Tokenizer=bs;te.Hooks=os;te.parse=te;te.options;te.setOptions;te.use;te.walkTokens;te.parseInline;Ct.parse;xt.lex;const Jh=Object.fromEntries(fn.map(e=>[e.path,e.slug])),Qh=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),Yh=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return Qh(n.join("/"))},Xh=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",ra=()=>{const e=new Map;return t=>{const n=Xh(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},eg=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?Yh(t,s):t;if(i.endsWith(".md")){const o=Jh[i];if(o)return`#/docs/${o}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};te.setOptions({gfm:!0,breaks:!0});const tg=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const o=eg(i,t,n);return`[${r}](${o})`}),ng=e=>{const t=te.lexer(String(e||"")),n=ra();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},sg=(e,t,n)=>{const s=new te.Renderer,r=ra();s.link=({href:o,title:a,tokens:l})=>{const u=te.Parser.parseInline(l),c=o||"",d=/^https?:\/\//i.test(c),p=a?` title="${a}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:o,title:a,text:l})=>{const u=a?` title="${a}"`:"";return`<img src="${o}" alt="${l||""}"${u} />`},s.heading=({tokens:o,depth:a,text:l})=>{const u=r(l),c=te.Parser.parseInline(o);return`<h${a} id="${u}" data-doc-heading="${u}">${c}</h${a}>`};const i=tg(e,t,n);return te.parse(i,{renderer:s})},rg={key:0,class:"docs-article-shell"},ig={class:"doc-breadcrumb"},og={class:"doc-header surface-card"},lg={class:"card-label"},ag={class:"doc-meta"},cg=["innerHTML"],ug={class:"doc-footer surface-card"},fg=["onClick"],dg={key:2,class:"docs-article-shell"},pg={class:"empty-state"},hg={__name:"DocArticlePage",setup(e){const t=Nl(),n=Ff(),s=Re(""),r=Re(null),i=Re(null),o=he(()=>Vl[t.params.slug]),a=he(()=>o.value?ph[o.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),l=he(()=>ng(a.value)),u=he(()=>o.value?sg(a.value,o.value.path,o.value.slug):""),c=he(()=>fn.findIndex(_=>{var L;return _.slug===((L=o.value)==null?void 0:L.slug)})),d=he(()=>c.value>0?fn[c.value-1]:null),p=he(()=>c.value>=0&&c.value<fn.length-1?fn[c.value+1]:null),m=()=>{var _,L;(_=document.querySelector(".docs-nav-link.active"))==null||_.scrollIntoView({block:"nearest"}),(L=document.querySelector(".docs-outline-link.active"))==null||L.scrollIntoView({block:"nearest"})},x=()=>{const _=l.value.find(L=>{const Z=document.getElementById(L.id);if(!Z)return!1;const V=Z.getBoundingClientRect();return V.top>=0&&V.top<=180});_&&s.value!==_.id&&(s.value=_.id,m())},T=_=>{window.innerWidth<=920||Math.abs(_.deltaY)<Math.abs(_.deltaX)||(_.preventDefault(),window.scrollBy({top:_.deltaY,behavior:"auto"}))},O=()=>{var _,L;(_=r.value)==null||_.addEventListener("wheel",T,{passive:!1}),(L=i.value)==null||L.addEventListener("wheel",T,{passive:!1})},k=()=>{var _,L;(_=r.value)==null||_.removeEventListener("wheel",T),(L=i.value)==null||L.removeEventListener("wheel",T)},A=async _=>{await Kt();const L=document.getElementById(_);L&&(s.value=_,L.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:_}}))},R=async()=>{var L;await Kt();const _=t.query.section?String(t.query.section):"";if(_){const Z=document.getElementById(_);if(Z){s.value=_,requestAnimationFrame(()=>{Z.scrollIntoView({behavior:"smooth",block:"start"}),m()});return}}s.value=((L=l.value[0])==null?void 0:L.id)||"",requestAnimationFrame(m)};return en(async()=>{window.addEventListener("scroll",x,{passive:!0}),await Kt(),O(),m()}),Es(()=>{window.removeEventListener("scroll",x),k()}),Bt([u,()=>t.query.section,()=>t.params.slug],R,{immediate:!0}),Bt([()=>t.params.slug,()=>l.value.length],async()=>{k(),await Kt(),O(),m()}),(_,L)=>{const Z=Ht("router-link");return E(),I("div",{class:Ie(["page-shell container docs-layout-page",{"has-outline":l.value.length}])},[f("aside",{ref_key:"sidebarRef",ref:r,class:"docs-sidebar surface-card"},[L[0]||(L[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(E(!0),I(Y,null,ye(pe(gs),V=>(E(),I("div",{key:V.key,class:"docs-nav-group"},[f("h3",null,$(V.title),1),(E(!0),I(Y,null,ye(V.items,ke=>{var q;return E(),cn(Z,{key:ke.slug,to:`/docs/${ke.slug}`,class:Ie(["docs-nav-link",{active:((q=o.value)==null?void 0:q.slug)===ke.slug}])},{default:Q(()=>[f("span",null,$(ke.title),1),f("small",null,$(ke.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))],512),o.value?(E(),I("section",rg,[f("div",ig,[F(Z,{to:"/docs"},{default:Q(()=>[...L[1]||(L[1]=[ne("文档首页",-1)])]),_:1}),L[2]||(L[2]=f("span",null,"/",-1)),f("span",null,$(o.value.groupTitle),1)]),f("header",og,[f("div",null,[f("span",lg,$(o.value.tag),1),f("h1",null,$(o.value.title),1),f("p",null,$(o.value.description),1)]),f("div",ag,[f("span",null,$(o.value.groupTitle),1),f("span",null,$(o.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:u.value},null,8,cg),f("footer",ug,[d.value?(E(),cn(Z,{key:0,class:"doc-pager",to:`/docs/${d.value.slug}`},{default:Q(()=>[L[3]||(L[3]=f("small",null,"上一篇",-1)),f("strong",null,$(d.value.title),1)]),_:1},8,["to"])):(E(),cn(Z,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:Q(()=>[...L[4]||(L[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),p.value?(E(),cn(Z,{key:2,class:"doc-pager align-right",to:`/docs/${p.value.slug}`},{default:Q(()=>[L[5]||(L[5]=f("small",null,"下一篇",-1)),f("strong",null,$(p.value.title),1)]),_:1},8,["to"])):Qe("",!0)])])):Qe("",!0),o.value&&l.value.length?(E(),I("aside",{key:1,ref_key:"outlineRef",ref:i,class:"docs-outline surface-card"},[L[6]||(L[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(E(!0),I(Y,null,ye(l.value,V=>(E(),I("button",{key:V.id,class:Ie(["docs-outline-link",[`depth-${V.depth}`,{active:s.value===V.id}]]),onClick:ke=>A(V.id)},$(V.text),11,fg))),128))],512)):o.value?Qe("",!0):(E(),I("section",dg,[f("div",pg,[L[8]||(L[8]=f("strong",null,"没有找到对应文档。",-1)),L[9]||(L[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),F(Z,{class:"button primary",to:"/docs"},{default:Q(()=>[...L[7]||(L[7]=[ne("返回文档首页",-1)])]),_:1})])]))],2)}}},gg={class:"page-shell container"},mg={class:"roadmap-grid"},bg={class:"roadmap-head"},vg={class:"card-label"},_g={class:"roadmap-list"},yg={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(E(),I("div",gg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",mg,[(E(),I(Y,null,ye(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",bg,[f("span",vg,$(r.tag),1),f("h2",null,$(r.title),1),f("p",null,$(r.description),1)]),f("div",_g,[(E(!0),I(Y,null,ye(r.items,i=>(E(),I("div",{class:"roadmap-item",key:i.title},[f("div",{class:Ie(["roadmap-state",r.stateClass])},$(r.stateLabel),3),f("h3",null,$(i.title),1),f("p",null,$(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},kg={class:"page-shell container"},wg={class:"page-hero"},xg={class:"hero-actions"},Cg={class:"stack-section surface-card changelog-toolbar"},Tg={class:"release-filter-row"},Rg={class:"filter-chip-group"},Sg=["onClick"],Ag={key:0,class:"stack-section"},Eg={key:1,class:"stack-section changelog-timeline"},Pg={class:"timeline-card surface-card"},Ig={class:"release-head"},$g={class:"release-date"},Og={class:"release-tag"},Lg={key:0,class:"bullet-list compact-list"},Mg={key:1,class:"release-body"},Ng={class:"release-actions"},Dg=["href"],Bg={class:"muted"},Wg={key:2,class:"stack-section"},Hg={__name:"ChangelogPage",setup(e){const t=Re(!0),n=Re([]),s=Re("all"),r=Re(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=he(()=>{const a=r.value.toLowerCase();return Gl(n.value).filter(l=>{const u=Nt(l);return s.value!=="all"&&u!==s.value?!1:a?[l.name,l.tag_name,Gn(l.body)].filter(Boolean).join(" ").toLowerCase().includes(a):!0})});return en(async()=>{const a=await zl();n.value=a.data,t.value=!1}),(a,l)=>{const u=Ht("router-link");return E(),I("div",kg,[f("section",wg,[l[3]||(l[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),l[4]||(l[4]=f("h1",null,"更新日志",-1)),l[5]||(l[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",xg,[l[2]||(l[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),F(u,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...l[1]||(l[1]=[ne("查看下载页",-1)])]),_:1})])]),f("section",Cg,[l[6]||(l[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Tg,[f("div",Rg,[(E(),I(Y,null,ye(i,c=>f("button",{key:c.value,class:Ie(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},$(c.label),11,Sg)),64))]),Or(f("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Br,r.value,void 0,{trim:!0}]])])]),t.value?(E(),I("section",Ag,[...l[7]||(l[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(E(),I("section",Eg,[(E(!0),I(Y,null,ye(o.value,c=>(E(),I("article",{class:"timeline-item",key:c.id||c.tag_name},[l[8]||(l[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",Pg,[f("div",Ig,[f("span",{class:Ie(["release-badge",{alt:pe(Nt)(c)==="preview"}])},$(pe(Ul)(pe(Nt)(c))),3),f("span",$g,$(pe(is)(c.published_at)),1)]),f("h3",null,$(c.name||c.tag_name),1),f("p",Og,$(c.tag_name),1),pe(Mt)(c.body,5).length?(E(),I("ul",Lg,[(E(!0),I(Y,null,ye(pe(Mt)(c.body,5),d=>(E(),I("li",{key:d},$(d),1))),128))])):(E(),I("p",Mg,$(pe(Gn)(c.body)||"暂无发布说明。"),1)),f("div",Ng,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Dg),f("span",Bg,$((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(E(),I("section",Wg,[...l[9]||(l[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Fg={class:"page-shell container"},jg={class:"stack-section"},zg={class:"section-head left"},Ug={key:0,class:"contributor-grid"},Gg=["href"],Vg=["src","alt"],qg={key:1,class:"empty-state"},Kg={__name:"CommunityPage",setup(e){const t=Re([]),n=Re("empty"),s=he(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return en(async()=>{const r=await Kd();t.value=r.data,n.value=r.source}),(r,i)=>(E(),I("div",Fg,[i[2]||(i[2]=pt('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持</h1><p> 如果你想反馈问题、参与讨论、查看贡献者或者先看常见问题，这一页就是对外的统一入口。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",jg,[f("div",zg,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,$(s.value),1)]),t.value.length?(E(),I("div",Ug,[(E(!0),I(Y,null,ye(t.value,o=>(E(),I("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login},null,8,Vg),f("strong",null,$(o.login),1),f("small",null,$(o.contributions)+" 次公开提交",1)],8,Gg))),128))])):(E(),I("div",qg,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},Zg=[{path:"/",component:Wd,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:zd,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:Dp,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:Kp,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:hg,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:yg,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:Hg,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:Kg,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],ia=Hf({history:vf("/"),routes:Zg}),oa=Pu(ed);ia.afterEach((e,t)=>{var l,u,c,d;const n="TreeCore 官方网站",s=(l=e.params)!=null&&l.slug?Vl[e.params.slug]:null,r=(s==null?void 0:s.title)||((u=e.meta)==null?void 0:u.title),i=(s==null?void 0:s.description)||((c=e.meta)==null?void 0:c.description);document.title=r?`${r} | ${n}`:n;const o=document.querySelector('meta[name="description"]');o&&i&&o.setAttribute("content",i),e.path===t.path&&((d=e.query)==null?void 0:d.section)||window.scrollTo({top:0,behavior:"smooth"})});oa.use(ia);oa.mount("#app");

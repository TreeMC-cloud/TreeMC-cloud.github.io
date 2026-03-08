var la=Object.defineProperty;var aa=(e,t,n)=>t in e?la(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>aa(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ve={},dn=[],dt=()=>{},lo=()=>!1,_s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yr=e=>e.startsWith("onUpdate:"),Ae=Object.assign,kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ca=Object.prototype.hasOwnProperty,ue=(e,t)=>ca.call(e,t),K=Array.isArray,pn=e=>qn(e)==="[object Map]",ao=e=>qn(e)==="[object Set]",Xr=e=>qn(e)==="[object Date]",J=e=>typeof e=="function",xe=e=>typeof e=="string",ht=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",co=e=>(fe(e)||J(e))&&J(e.then)&&J(e.catch),uo=Object.prototype.toString,qn=e=>uo.call(e),ua=e=>qn(e).slice(8,-1),fo=e=>qn(e)==="[object Object]",wr=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fa=/-\w/g,Je=ys(e=>e.replace(fa,t=>t.slice(1).toUpperCase())),da=/\B([A-Z])/g,Xt=ys(e=>e.replace(da,"-$1").toLowerCase()),ks=ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ds=ys(e=>e?`on${ks(e)}`:""),Dt=(e,t)=>!Object.is(e,t),es=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},po=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pa=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let ei;const ws=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=xe(s)?ba(s):xs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(xe(e)||fe(e))return e}const ha=/;(?![^(]*\))/g,ga=/:([^]+)/,ma=/\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ma,"").split(ha).forEach(n=>{if(n){const s=n.split(ga);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ie(e){let t="";if(xe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const s=Ie(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_a=_r(va);function ho(e){return!!e||e===""}function ya(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Cr(e[s],t[s]);return n}function Cr(e,t){if(e===t)return!0;let n=Xr(e),s=Xr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ht(e),s=ht(t),n||s)return e===t;if(n=K(e),s=K(t),n||s)return n&&s?ya(e,t):!1;if(n=fe(e),s=fe(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Cr(e[o],t[o]))return!1}}return String(e)===String(t)}const go=e=>!!(e&&e.__v_isRef===!0),$=e=>xe(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===uo||!J(e.toString))?go(e)?$(e.value):JSON.stringify(e,mo,2):String(e),mo=(e,t)=>go(t)?mo(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Bs(s,i)+" =>"]=r,n),{})}:ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Bs(n))}:ht(t)?Bs(t):fe(t)&&!K(t)&&!fo(t)?String(t):t,Bs=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ka{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wa(){return je}let ye;const Ws=new WeakSet;class bo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ws.has(this)&&(Ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),yo(this);const t=ye,n=Ye;ye=this,Ye=!0;try{return this.fn()}finally{ko(this),ye=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sr(t);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){er(this)&&this.run()}get dirty(){return er(this)}}let vo=0,En,Pn;function _o(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=En,En=e}function Tr(){vo++}function Rr(){if(--vo>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;En;){let t=En;for(En=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function yo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ko(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Sr(s),xa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function er(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(wo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function wo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dn)||(e.globalVersion=Dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!er(e))))return;e.flags|=2;const t=e.dep,n=ye,s=Ye;ye=e,Ye=!0;try{yo(e);const r=e.fn(e._value);(t.version===0||Dt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ye=n,Ye=s,ko(e),e.flags&=-3}}function Sr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function xa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const xo=[];function Tt(){xo.push(Ye),Ye=!1}function Rt(){const e=xo.pop();Ye=e===void 0?!0:e}function ti(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let Dn=0;class Ca{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ar{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!Ye||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new Ca(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=s)}return n}trigger(t){this.version++,Dn++,this.notify(t)}notify(t){Tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rr()}}}function Co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Co(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const tr=new WeakMap,Jt=Symbol(""),nr=Symbol(""),Bn=Symbol("");function Ee(e,t,n){if(Ye&&ye){let s=tr.get(e);s||tr.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ar),r.map=s,r.key=n),r.track()}}function kt(e,t,n,s,r,i){const o=tr.get(e);if(!o){Dn++;return}const a=l=>{l&&l.trigger()};if(Tr(),t==="clear")o.forEach(a);else{const l=K(e),u=l&&wr(n);if(l&&n==="length"){const c=Number(s);o.forEach((d,p)=>{(p==="length"||p===Bn||!ht(p)&&p>=c)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Bn)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Jt)),pn(e)&&a(o.get(nr)));break;case"delete":l||(a(o.get(Jt)),pn(e)&&a(o.get(nr)));break;case"set":pn(e)&&a(o.get(Jt));break}}Rr()}function rn(e){const t=oe(e);return t===e?t:(Ee(t,"iterate",Bn),Ze(e)?t:t.map(et))}function Cs(e){return Ee(e=oe(e),"iterate",Bn),e}function $t(e,t){return St(e)?mn(Qt(e)?et(t):t):et(t)}const Ta={__proto__:null,[Symbol.iterator](){return Hs(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return rn(this).concat(...e.map(t=>K(t)?rn(t):t))},entries(){return Hs(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>$t(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return yn(this,"pop")},push(...e){return yn(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return yn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return yn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return yn(this,"unshift",e)},values(){return Hs(this,"values",e=>$t(this,e))}};function Hs(e,t,n){const s=Cs(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ra=Array.prototype;function mt(e,t,n,s,r,i){const o=Cs(e),a=o!==e&&!Ze(e),l=o[t];if(l!==Ra[t]){const d=l.apply(e,i);return a?et(d):d}let u=n;o!==e&&(a?u=function(d,p){return n.call(this,$t(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=l.call(o,u,s);return a&&r?r(c):c}function ni(e,t,n,s){const r=Cs(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,$t(e,a),l,e)}),r[t](i,...s)}function Fs(e,t,n){const s=oe(e);Ee(s,"iterate",Bn);const r=s[t](...n);return(r===-1||r===!1)&&Ir(n[0])?(n[0]=oe(n[0]),s[t](...n)):r}function yn(e,t,n=[]){Tt(),Tr();const s=oe(e)[t].apply(e,n);return Rr(),Rt(),s}const Sa=_r("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Aa(e){ht(e)||(e=String(e));const t=oe(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ro{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ba:Po:i?Eo:Ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=K(t);if(!r){let l;if(o&&(l=Ta[n]))return l;if(n==="hasOwnProperty")return Aa}const a=Reflect.get(t,n,$e(t)?t:s);if((ht(n)?To.has(n):Sa(n))||(r||Ee(t,"get",n),i))return a;if($e(a)){const l=o&&wr(n)?a:a.value;return r&&fe(l)?rr(l):l}return fe(a)?r?rr(a):Ts(a):a}}class So extends Ro{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=K(t)&&wr(n);if(!this._isShallow){const u=St(i);if(!Ze(s)&&!St(s)&&(i=oe(i),s=oe(s)),!o&&$e(i)&&!$e(s))return u||(i.value=s),!0}const a=o?Number(n)<t.length:ue(t,n),l=Reflect.set(t,n,s,$e(t)?t:r);return t===oe(r)&&(a?Dt(s,i)&&kt(t,"set",n,s):kt(t,"add",n,s)),l}deleteProperty(t,n){const s=ue(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&kt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!To.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",K(t)?"length":Jt),Reflect.ownKeys(t)}}class Ea extends Ro{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Pa=new So,Ia=new Ea,$a=new So(!0);const sr=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function Oa(e,t,n){return function(...s){const r=this.__v_raw,i=oe(r),o=pn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),c=n?sr:t?mn:et;return!t&&Ee(i,"iterate",l?nr:Jt),Ae(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function Qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function La(e,t){const n={get(r){const i=this.__v_raw,o=oe(i),a=oe(r);e||(Dt(r,a)&&Ee(o,"get",r),Ee(o,"get",a));const{has:l}=Jn(o),u=t?sr:e?mn:et;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(oe(r),"iterate",Jt),r.size},has(r){const i=this.__v_raw,o=oe(i),a=oe(r);return e||(Dt(r,a)&&Ee(o,"has",r),Ee(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=oe(a),u=t?sr:e?mn:et;return!e&&Ee(l,"iterate",Jt),a.forEach((c,d)=>r.call(i,u(c),u(d),o))}};return Ae(n,e?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(r){!t&&!Ze(r)&&!St(r)&&(r=oe(r));const i=oe(this);return Jn(i).has.call(i,r)||(i.add(r),kt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!St(i)&&(i=oe(i));const o=oe(this),{has:a,get:l}=Jn(o);let u=a.call(o,r);u||(r=oe(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,i),u?Dt(i,c)&&kt(o,"set",r,i):kt(o,"add",r,i),this},delete(r){const i=oe(this),{has:o,get:a}=Jn(i);let l=o.call(i,r);l||(r=oe(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&kt(i,"delete",r,void 0),u},clear(){const r=oe(this),i=r.size!==0,o=r.clear();return i&&kt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Oa(r,e,t)}),n}function Er(e,t){const n=La(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const Ma={get:Er(!1,!1)},Na={get:Er(!1,!0)},Da={get:Er(!0,!1)};const Ao=new WeakMap,Eo=new WeakMap,Po=new WeakMap,Ba=new WeakMap;function Wa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(e){return e.__v_skip||!Object.isExtensible(e)?0:Wa(ua(e))}function Ts(e){return St(e)?e:Pr(e,!1,Pa,Ma,Ao)}function Io(e){return Pr(e,!1,$a,Na,Eo)}function rr(e){return Pr(e,!0,Ia,Da,Po)}function Pr(e,t,n,s,r){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ha(e);if(i===0)return e;const o=r.get(e);if(o)return o;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function Qt(e){return St(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Ir(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Fa(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&po(e,"__v_skip",!0),e}const et=e=>fe(e)?Ts(e):e,mn=e=>fe(e)?rr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function Se(e){return $o(e,!1)}function ja(e){return $o(e,!0)}function $o(e,t){return $e(e)?e:new za(e,t)}class za{constructor(t,n){this.dep=new Ar,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:et(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||St(t);t=s?t:oe(t),Dt(t,n)&&(this._rawValue=t,this._value=s?t:et(t),this.dep.trigger())}}function ge(e){return $e(e)?e.value:e}const Ua={get:(e,t,n)=>t==="__v_raw"?e:ge(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Oo(e){return Qt(e)?e:new Proxy(e,Ua)}class Ga{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ar(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return _o(this,!0),!0}get value(){const t=this.dep.track();return wo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qa(e,t,n=!1){let s,r;return J(e)?s=e:(s=e.get,r=e.set),new Ga(s,r,n)}const Yn={},ls=new WeakMap;let qt;function Va(e,t=!1,n=qt){if(n){let s=ls.get(n);s||ls.set(n,s=[]),s.push(e)}}function Ka(e,t,n=ve){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=A=>r?A:Ze(A)||r===!1||r===0?wt(A,1):wt(A);let c,d,p,m,k=!1,T=!1;if($e(e)?(d=()=>e.value,k=Ze(e)):Qt(e)?(d=()=>u(e),k=!0):K(e)?(T=!0,k=e.some(A=>Qt(A)||Ze(A)),d=()=>e.map(A=>{if($e(A))return A.value;if(Qt(A))return u(A);if(J(A))return l?l(A,2):A()})):J(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){Tt();try{p()}finally{Rt()}}const A=qt;qt=c;try{return l?l(e,3,[m]):e(m)}finally{qt=A}}:d=dt,t&&r){const A=d,M=r===!0?1/0:r;d=()=>wt(A(),M)}const O=wa(),y=()=>{c.stop(),O&&O.active&&kr(O.effects,c)};if(i&&t){const A=t;t=(...M)=>{A(...M),y()}}let S=T?new Array(e.length).fill(Yn):Yn;const C=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const M=c.run();if(r||k||(T?M.some((D,V)=>Dt(D,S[V])):Dt(M,S))){p&&p();const D=qt;qt=c;try{const V=[M,S===Yn?void 0:T&&S[0]===Yn?[]:S,m];S=M,l?l(t,3,V):t(...V)}finally{qt=D}}}else c.run()};return a&&a(C),c=new bo(d),c.scheduler=o?()=>o(C,!1):C,m=A=>Va(A,!1,c),p=c.onStop=()=>{const A=ls.get(c);if(A){if(l)l(A,4);else for(const M of A)M();ls.delete(c)}},t?s?C(!0):S=c.run():o?o(C.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))wt(e.value,t,n);else if(K(e))for(let s=0;s<e.length;s++)wt(e[s],t,n);else if(ao(e)||pn(e))e.forEach(s=>{wt(s,t,n)});else if(fo(e)){for(const s in e)wt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&wt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(e,t,n,s){try{return s?e(...s):e()}catch(r){Rs(r,t,n)}}function tt(e,t,n,s){if(J(e)){const r=Vn(e,t,n,s);return r&&co(r)&&r.catch(i=>{Rs(i,t,n)}),r}if(K(e)){const r=[];for(let i=0;i<e.length;i++)r.push(tt(e[i],t,n,s));return r}}function Rs(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ve;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(i){Tt(),Vn(i,null,10,[e,l,u]),Rt();return}}Za(e,n,r,s,o)}function Za(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let ct=-1;const hn=[];let Ot=null,on=0;const Lo=Promise.resolve();let as=null;function Kt(e){const t=as||Lo;return e?t.then(this?e.bind(this):e):t}function Ja(e){let t=ct+1,n=Me.length;for(;t<n;){const s=t+n>>>1,r=Me[s],i=Wn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function $r(e){if(!(e.flags&1)){const t=Wn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Wn(n)?Me.push(e):Me.splice(Ja(t),0,e),e.flags|=1,Mo()}}function Mo(){as||(as=Lo.then(Do))}function Qa(e){K(e)?hn.push(...e):Ot&&e.id===-1?Ot.splice(on+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),Mo()}function si(e,t,n=ct+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(e){if(hn.length){const t=[...new Set(hn)].sort((n,s)=>Wn(n)-Wn(s));if(hn.length=0,Ot){Ot.push(...t);return}for(Ot=t,on=0;on<Ot.length;on++){const n=Ot[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,on=0}}const Wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Do(e){try{for(ct=0;ct<Me.length;ct++){const t=Me[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Me.length;ct++){const t=Me[ct];t&&(t.flags&=-2)}ct=-1,Me.length=0,No(),as=null,(Me.length||hn.length)&&Do()}}let Ge=null,Bo=null;function cs(e){const t=Ge;return Ge=e,Bo=e&&e.type.__scopeId||null,t}function Q(e,t=Ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ds(-1);const i=cs(t);let o;try{o=e(...r)}finally{cs(i),s._d&&ds(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Or(e,t){if(Ge===null)return e;const n=$s(Ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=ve]=t[r];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&wt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function jt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Tt(),tt(l,n,8,[e.el,a,e,t]),Rt())}}function ts(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function Xe(e,t,n=!1){const s=_l();if(s||gn){let r=gn?gn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Ya=Symbol.for("v-scx"),Xa=()=>Xe(Ya);function Bt(e,t,n){return Wo(e,t,n)}function Wo(e,t,n=ve){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ae({},n),l=t&&s||!t&&i!=="post";let u;if(jn){if(i==="sync"){const m=Xa();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Pe;a.call=(m,k,T)=>tt(m,c,k,T);let d=!1;i==="post"?a.scheduler=m=>{Fe(m,c&&c.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,k)=>{k?m():$r(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=Ka(e,t,a);return jn&&(u?u.push(p):l&&p()),p}function ec(e,t,n){const s=this.proxy,r=xe(e)?e.includes(".")?Ho(s,e):()=>s[e]:e.bind(s,s);let i;J(t)?i=t:(i=t.handler,n=t);const o=Kn(this),a=Wo(r,i.bind(s),n);return o(),a}function Ho(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const tc=Symbol("_vte"),Fo=e=>e.__isTeleport,ut=Symbol("_leaveCb"),kn=Symbol("_enterCb");function nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{e.isMounted=!0}),Es(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],jo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},zo=e=>{const t=e.subTree;return t.component?zo(t.component):t},sc={name:"BaseTransition",props:jo,setup(e,{slots:t}){const n=_l(),s=nc();return()=>{const r=t.default&&qo(t.default(),!0);if(!r||!r.length)return;const i=Uo(r),o=oe(e),{mode:a}=o;if(s.isLeaving)return js(i);const l=ri(i);if(!l)return js(i);let u=ir(l,o,s,n,d=>u=d);l.type!==Ne&&Hn(l,u);let c=n.subTree&&ri(n.subTree);if(c&&c.type!==Ne&&!Vt(c,l)&&zo(n).type!==Ne){let d=ir(c,o,s,n);if(Hn(c,d),a==="out-in"&&l.type!==Ne)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},js(i);a==="in-out"&&l.type!==Ne?d.delayLeave=(p,m,k)=>{const T=Go(s,c);T[String(c.key)]=c,p[ut]=()=>{m(),p[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{k(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Uo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ne){t=n;break}}return t}const rc=sc;function Go(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ir(e,t,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:k,onLeaveCancelled:T,onBeforeAppear:O,onAppear:y,onAfterAppear:S,onAppearCancelled:C}=t,A=String(e.key),M=Go(n,e),D=(z,Y)=>{z&&tt(z,s,9,Y)},V=(z,Y)=>{const le=Y[1];D(z,Y),K(z)?z.every(H=>H.length<=1)&&le():z.length<=1&&le()},se={mode:o,persisted:a,beforeEnter(z){let Y=l;if(!n.isMounted)if(i)Y=O||l;else return;z[ut]&&z[ut](!0);const le=M[A];le&&Vt(e,le)&&le.el[ut]&&le.el[ut](),D(Y,[z])},enter(z){if(M[A]===e)return;let Y=u,le=c,H=d;if(!n.isMounted)if(i)Y=y||u,le=S||c,H=C||d;else return;let re=!1;z[kn]=ze=>{re||(re=!0,ze?D(H,[z]):D(le,[z]),se.delayedLeave&&se.delayedLeave(),z[kn]=void 0)};const Te=z[kn].bind(null,!1);Y?V(Y,[z,Te]):Te()},leave(z,Y){const le=String(e.key);if(z[kn]&&z[kn](!0),n.isUnmounting)return Y();D(p,[z]);let H=!1;z[ut]=Te=>{H||(H=!0,Y(),Te?D(T,[z]):D(k,[z]),z[ut]=void 0,M[le]===e&&delete M[le])};const re=z[ut].bind(null,!1);M[le]=e,m?V(m,[z,re]):re()},clone(z){const Y=ir(z,t,n,s,r);return r&&r(Y),Y}};return se}function js(e){if(Ss(e))return e=Wt(e),e.children=null,e}function ri(e){if(!Ss(e))return Fo(e.type)&&e.children?Uo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function Hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qo(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===X?(o.patchFlag&128&&r++,s=s.concat(qo(o.children,t,a))):(t||o.type!==Ne)&&s.push(a!=null?Wt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Vo(e,t){return J(e)?Ae({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ii(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const us=new WeakMap;function In(e,t,n,s,r=!1){if(K(e)){e.forEach((T,O)=>In(T,t&&(K(t)?t[O]:t),n,s,r));return}if($n(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&In(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?$s(s.component):s.el,o=r?null:i,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ve?a.refs={}:a.refs,d=a.setupState,p=oe(d),m=d===ve?lo:T=>ii(c,T)?!1:ue(p,T),k=(T,O)=>!(O&&ii(c,O));if(u!=null&&u!==l){if(oi(t),xe(u))c[u]=null,m(u)&&(d[u]=null);else if($e(u)){const T=t;k(u,T.k)&&(u.value=null),T.k&&(c[T.k]=null)}}if(J(l))Vn(l,a,12,[o,c]);else{const T=xe(l),O=$e(l);if(T||O){const y=()=>{if(e.f){const S=T?m(l)?d[l]:c[l]:k()||!e.k?l.value:c[e.k];if(r)K(S)&&kr(S,i);else if(K(S))S.includes(i)||S.push(i);else if(T)c[l]=[i],m(l)&&(d[l]=c[l]);else{const C=[i];k(l,e.k)&&(l.value=C),e.k&&(c[e.k]=C)}}else T?(c[l]=o,m(l)&&(d[l]=o)):O&&(k(l,e.k)&&(l.value=o),e.k&&(c[e.k]=o))};if(o){const S=()=>{y(),us.delete(e)};S.id=-1,us.set(e,S),Fe(S,n)}else oi(e),y()}}}function oi(e){const t=us.get(e);t&&(t.flags|=8,us.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const $n=e=>!!e.type.__asyncLoader,Ss=e=>e.type.__isKeepAlive;function ic(e,t){Zo(e,"a",t)}function oc(e,t){Zo(e,"da",t)}function Zo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(As(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ss(r.parent.vnode)&&lc(s,t,n,r),r=r.parent}}function lc(e,t,n,s){const r=As(t,e,s,!0);Jo(()=>{kr(s[t],r)},n)}function As(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Tt();const a=Kn(n),l=tt(t,n,e,o);return a(),Rt(),l});return s?r.unshift(i):r.push(i),i}}const At=e=>(t,n=Pe)=>{(!jn||e==="sp")&&As(e,(...s)=>t(...s),n)},ac=At("bm"),en=At("m"),cc=At("bu"),uc=At("u"),Es=At("bum"),Jo=At("um"),fc=At("sp"),dc=At("rtg"),pc=At("rtc");function hc(e,t=Pe){As("ec",e,t)}const Qo="components";function Ht(e,t){return Xo(Qo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function gc(e){return xe(e)?Xo(Qo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=Ge||Pe;if(r){const i=r.type;{const a=Xc(i,!1);if(a&&(a===t||a===Je(t)||a===ks(Je(t))))return i}const o=li(r[e]||i[e],t)||li(r.appContext[e],t);return!o&&s?i:o}}function li(e,t){return e&&(e[t]||e[Je(t)]||e[ks(Je(t))])}function ke(e,t,n,s){let r;const i=n,o=K(e);if(o||xe(e)){const a=o&&Qt(e);let l=!1,u=!1;a&&(l=!Ze(e),u=St(e),e=Cs(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(l?u?mn(et(e[c])):et(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(fe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(e[c],c,l,i)}}else r=[];return r}const or=e=>e?yl(e)?$s(e):or(e.parent):null,On=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>tl(e),$forceUpdate:e=>e.f||(e.f=()=>{$r(e.update)}),$nextTick:e=>e.n||(e.n=Kt.bind(e.proxy)),$watch:e=>ec.bind(e)}),zs=(e,t)=>e!==ve&&!e.__isScriptSetup&&ue(e,t),mc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(zs(s,t))return o[t]=1,s[t];if(r!==ve&&ue(r,t))return o[t]=2,r[t];if(ue(i,t))return o[t]=3,i[t];if(n!==ve&&ue(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const u=On[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ve&&ue(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,ue(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return zs(r,t)?(r[t]=n,!0):s!==ve&&ue(s,t)?(s[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||e!==ve&&a[0]!=="$"&&ue(e,a)||zs(t,a)||ue(i,a)||ue(s,a)||ue(On,a)||ue(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lr=!0;function bc(e){const t=tl(e),n=e.proxy,s=e.ctx;lr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:k,activated:T,deactivated:O,beforeDestroy:y,beforeUnmount:S,destroyed:C,unmounted:A,render:M,renderTracked:D,renderTriggered:V,errorCaptured:se,serverPrefetch:z,expose:Y,inheritAttrs:le,components:H,directives:re,filters:Te}=t;if(u&&vc(u,s,null),o)for(const he in o){const ae=o[he];J(ae)&&(s[he]=ae.bind(n))}if(r){const he=r.call(n,n);fe(he)&&(e.data=Ts(he))}if(lr=!0,i)for(const he in i){const ae=i[he],gt=J(ae)?ae.bind(n,n):J(ae.get)?ae.get.bind(n,n):dt,Et=!J(ae)&&J(ae.set)?ae.set.bind(n):dt,st=me({get:gt,set:Et});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>st.value,set:Be=>st.value=Be})}if(a)for(const he in a)el(a[he],s,n,he);if(l){const he=J(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ae=>{ts(ae,he[ae])})}c&&ci(c,e,"c");function Ce(he,ae){K(ae)?ae.forEach(gt=>he(gt.bind(n))):ae&&he(ae.bind(n))}if(Ce(ac,d),Ce(en,p),Ce(cc,m),Ce(uc,k),Ce(ic,T),Ce(oc,O),Ce(hc,se),Ce(pc,D),Ce(dc,V),Ce(Es,S),Ce(Jo,A),Ce(fc,z),K(Y))if(Y.length){const he=e.exposed||(e.exposed={});Y.forEach(ae=>{Object.defineProperty(he,ae,{get:()=>n[ae],set:gt=>n[ae]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===dt&&(e.render=M),le!=null&&(e.inheritAttrs=le),H&&(e.components=H),re&&(e.directives=re),z&&Ko(e)}function vc(e,t,n=dt){K(e)&&(e=ar(e));for(const s in e){const r=e[s];let i;fe(r)?"default"in r?i=Xe(r.from||s,r.default,!0):i=Xe(r.from||s):i=Xe(r),$e(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ci(e,t,n){tt(K(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function el(e,t,n,s){let r=s.includes(".")?Ho(n,s):()=>n[s];if(xe(e)){const i=t[e];J(i)&&Bt(r,i)}else if(J(e))Bt(r,e.bind(n));else if(fe(e))if(K(e))e.forEach(i=>el(i,t,n,s));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Bt(r,i,e)}}function tl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>fs(l,u,o,!0)),fs(l,t,o)),fe(t)&&i.set(t,l),l}function fs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&fs(e,i,n,!0),r&&r.forEach(o=>fs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=_c[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const _c={data:ui,props:fi,emits:fi,methods:Sn,computed:Sn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Sn,directives:Sn,watch:kc,provide:ui,inject:yc};function ui(e,t){return t?e?function(){return Ae(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function yc(e,t){return Sn(ar(e),ar(t))}function ar(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Sn(e,t){return e?Ae(Object.create(null),e,t):t}function fi(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Ae(Object.create(null),ai(e),ai(t??{})):t}function kc(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=Oe(e[s],t[s]);return n}function nl(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wc=0;function xc(e,t){return function(s,r=null){J(s)||(s=Ae({},s)),r!=null&&!fe(r)&&(r=null);const i=nl(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:wc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tu,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(u,...d)):J(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!l){const m=u._ceVNode||j(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),l=!0,u._container=c,c.__vue_app__=u,$s(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(tt(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=gn;gn=u;try{return c()}finally{gn=d}}};return u}}let gn=null;const Cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Tc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let r=n;const i=t.startsWith("update:"),o=i&&Cc(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>xe(c)?c.trim():c)),o.number&&(r=n.map(xr)));let a,l=s[a=Ds(t)]||s[a=Ds(Je(t))];!l&&i&&(l=s[a=Ds(Xt(t))]),l&&tt(l,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(u,e,6,r)}}const Rc=new WeakMap;function sl(e,t,n=!1){const s=n?Rc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!J(e)){const l=u=>{const c=sl(u,t,!0);c&&(a=!0,Ae(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(fe(e)&&s.set(e,null),null):(K(i)?i.forEach(l=>o[l]=null):Ae(o,i),fe(e)&&s.set(e,o),o)}function Ps(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,Xt(t))||ue(e,t))}function di(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:k,inheritAttrs:T}=e,O=cs(e);let y,S;try{if(n.shapeFlag&4){const A=r||s,M=A;y=ft(u.call(M,A,c,d,m,p,k)),S=a}else{const A=t;y=ft(A.length>1?A(d,{attrs:a,slots:o,emit:l}):A(d,null)),S=t.props?a:Sc(a)}}catch(A){Ln.length=0,Rs(A,e,1),y=j(Ne)}let C=y;if(S&&T!==!1){const A=Object.keys(S),{shapeFlag:M}=C;A.length&&M&7&&(i&&A.some(yr)&&(S=Ac(S,i)),C=Wt(C,S,!1,!0))}return n.dirs&&(C=Wt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Hn(C,n.transition),y=C,cs(O),y}const Sc=e=>{let t;for(const n in e)(n==="class"||n==="style"||_s(n))&&((t||(t={}))[n]=e[n]);return t},Ac=(e,t)=>{const n={};for(const s in e)(!yr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ec(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?pi(s,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(rl(o,s,p)&&!Ps(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?pi(s,o,u):!0:!!o;return!1}function pi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(rl(t,e,i)&&!Ps(n,i))return!0}return!1}function rl(e,t,n){const s=e[n],r=t[n];return n==="style"&&fe(s)&&fe(r)?!Cr(s,r):s!==r}function Pc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const il={},ol=()=>Object.create(il),ll=e=>Object.getPrototypeOf(e)===il;function Ic(e,t,n,s=!1){const r={},i=ol();e.propsDefaults=Object.create(null),al(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Io(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function $c(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=oe(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Ps(e.emitsOptions,p))continue;const m=t[p];if(l)if(ue(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const k=Je(p);r[k]=cr(l,a,k,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{al(e,t,r,i)&&(u=!0);let c;for(const d in a)(!t||!ue(t,d)&&((c=Xt(d))===d||!ue(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=cr(l,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!ue(t,d))&&(delete i[d],u=!0)}u&&kt(e.attrs,"set","")}function al(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(An(l))continue;const u=t[l];let c;r&&ue(r,c=Je(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ps(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=oe(n),u=a||ve;for(let c=0;c<i.length;c++){const d=i[c];n[d]=cr(r,l,d,u[d],e,!ue(u,d))}}return o}function cr(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Kn(r);s=u[n]=l.call(null,t),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}const Oc=new WeakMap;function cl(e,t,n=!1){const s=n?Oc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!J(e)){const c=d=>{l=!0;const[p,m]=cl(d,t,!0);Ae(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return fe(e)&&s.set(e,dn),dn;if(K(i))for(let c=0;c<i.length;c++){const d=Je(i[c]);hi(d)&&(o[d]=ve)}else if(i)for(const c in i){const d=Je(c);if(hi(d)){const p=i[c],m=o[d]=K(p)||J(p)?{type:p}:Ae({},p),k=m.type;let T=!1,O=!0;if(K(k))for(let y=0;y<k.length;++y){const S=k[y],C=J(S)&&S.name;if(C==="Boolean"){T=!0;break}else C==="String"&&(O=!1)}else T=J(k)&&k.name==="Boolean";m[0]=T,m[1]=O,(T||ue(m,"default"))&&a.push(d)}}const u=[o,a];return fe(e)&&s.set(e,u),u}function hi(e){return e[0]!=="$"&&!An(e)}const Lr=e=>e==="_"||e==="_ctx"||e==="$stable",Mr=e=>K(e)?e.map(ft):[ft(e)],Lc=(e,t,n)=>{if(t._n)return t;const s=Q((...r)=>Mr(t(...r)),n);return s._c=!1,s},ul=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Lr(r))continue;const i=e[r];if(J(i))t[r]=Lc(r,i,s);else if(i!=null){const o=Mr(i);t[r]=()=>o}}},fl=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const s in t)(n||!Lr(s))&&(e[s]=t[s])},Mc=(e,t,n)=>{const s=e.slots=ol();if(e.vnode.shapeFlag&32){const r=t._;r?(dl(s,t,n),n&&po(s,"_",r,!0)):ul(t,s)}else t&&fl(e,t)},Nc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ve;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:dl(r,t,n):(i=!t.$stable,ul(t,r)),o=t}else t&&(fl(e,t),o={default:1});if(i)for(const a in r)!Lr(a)&&o[a]==null&&delete r[a]},Fe=Fc;function Dc(e){return Bc(e)}function Bc(e,t){const n=ws();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=dt,insertStaticContent:k}=e,T=(h,g,b,v=null,x=null,_=null,N=void 0,L=null,P=!!g.dynamicChildren)=>{if(h===g)return;h&&!Vt(h,g)&&(v=w(h),Be(h,x,_,!0),h=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:R,ref:q,shapeFlag:W}=g;switch(R){case Is:O(h,g,b,v);break;case Ne:y(h,g,b,v);break;case ns:h==null&&S(g,b,v,N);break;case X:H(h,g,b,v,x,_,N,L,P);break;default:W&1?M(h,g,b,v,x,_,N,L,P):W&6?re(h,g,b,v,x,_,N,L,P):(W&64||W&128)&&R.process(h,g,b,v,x,_,N,L,P,U)}q!=null&&x?In(q,h&&h.ref,_,g||h,!g):q==null&&h&&h.ref!=null&&In(h.ref,null,_,h,!0)},O=(h,g,b,v)=>{if(h==null)s(g.el=a(g.children),b,v);else{const x=g.el=h.el;g.children!==h.children&&u(x,g.children)}},y=(h,g,b,v)=>{h==null?s(g.el=l(g.children||""),b,v):g.el=h.el},S=(h,g,b,v)=>{[h.el,h.anchor]=k(h.children,g,b,v,h.el,h.anchor)},C=({el:h,anchor:g},b,v)=>{let x;for(;h&&h!==g;)x=p(h),s(h,b,v),h=x;s(g,b,v)},A=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},M=(h,g,b,v,x,_,N,L,P)=>{if(g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),h==null)D(g,b,v,x,_,N,L,P);else{const R=h.el&&h.el._isVueCE?h.el:null;try{R&&R._beginPatch(),z(h,g,x,_,N,L,P)}finally{R&&R._endPatch()}}},D=(h,g,b,v,x,_,N,L)=>{let P,R;const{props:q,shapeFlag:W,transition:G,dirs:Z}=h;if(P=h.el=o(h.type,_,q&&q.is,q),W&8?c(P,h.children):W&16&&se(h.children,P,null,v,x,Us(h,_),N,L),Z&&jt(h,null,v,"created"),V(P,h,h.scopeId,N,v),q){for(const _e in q)_e!=="value"&&!An(_e)&&i(P,_e,null,q[_e],_,v);"value"in q&&i(P,"value",null,q.value,_),(R=q.onVnodeBeforeMount)&&lt(R,v,h)}Z&&jt(h,null,v,"beforeMount");const te=Wc(x,G);te&&G.beforeEnter(P),s(P,g,b),((R=q&&q.onVnodeMounted)||te||Z)&&Fe(()=>{R&&lt(R,v,h),te&&G.enter(P),Z&&jt(h,null,v,"mounted")},x)},V=(h,g,b,v,x)=>{if(b&&m(h,b),v)for(let _=0;_<v.length;_++)m(h,v[_]);if(x){let _=x.subTree;if(g===_||ml(_.type)&&(_.ssContent===g||_.ssFallback===g)){const N=x.vnode;V(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},se=(h,g,b,v,x,_,N,L,P=0)=>{for(let R=P;R<h.length;R++){const q=h[R]=L?yt(h[R]):ft(h[R]);T(null,q,g,b,v,x,_,N,L)}},z=(h,g,b,v,x,_,N)=>{const L=g.el=h.el;let{patchFlag:P,dynamicChildren:R,dirs:q}=g;P|=h.patchFlag&16;const W=h.props||ve,G=g.props||ve;let Z;if(b&&zt(b,!1),(Z=G.onVnodeBeforeUpdate)&&lt(Z,b,g,h),q&&jt(g,h,b,"beforeUpdate"),b&&zt(b,!0),(W.innerHTML&&G.innerHTML==null||W.textContent&&G.textContent==null)&&c(L,""),R?Y(h.dynamicChildren,R,L,b,v,Us(g,x),_):N||ae(h,g,L,null,b,v,Us(g,x),_,!1),P>0){if(P&16)le(L,W,G,b,x);else if(P&2&&W.class!==G.class&&i(L,"class",null,G.class,x),P&4&&i(L,"style",W.style,G.style,x),P&8){const te=g.dynamicProps;for(let _e=0;_e<te.length;_e++){const pe=te[_e],We=W[pe],He=G[pe];(He!==We||pe==="value")&&i(L,pe,We,He,x,b)}}P&1&&h.children!==g.children&&c(L,g.children)}else!N&&R==null&&le(L,W,G,b,x);((Z=G.onVnodeUpdated)||q)&&Fe(()=>{Z&&lt(Z,b,g,h),q&&jt(g,h,b,"updated")},v)},Y=(h,g,b,v,x,_,N)=>{for(let L=0;L<g.length;L++){const P=h[L],R=g[L],q=P.el&&(P.type===X||!Vt(P,R)||P.shapeFlag&198)?d(P.el):b;T(P,R,q,null,v,x,_,N,!0)}},le=(h,g,b,v,x)=>{if(g!==b){if(g!==ve)for(const _ in g)!An(_)&&!(_ in b)&&i(h,_,g[_],null,x,v);for(const _ in b){if(An(_))continue;const N=b[_],L=g[_];N!==L&&_!=="value"&&i(h,_,L,N,x,v)}"value"in b&&i(h,"value",g.value,b.value,x)}},H=(h,g,b,v,x,_,N,L,P)=>{const R=g.el=h?h.el:a(""),q=g.anchor=h?h.anchor:a("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:Z}=g;Z&&(L=L?L.concat(Z):Z),h==null?(s(R,b,v),s(q,b,v),se(g.children||[],b,q,x,_,N,L,P)):W>0&&W&64&&G&&h.dynamicChildren&&h.dynamicChildren.length===G.length?(Y(h.dynamicChildren,G,b,x,_,N,L),(g.key!=null||x&&g===x.subTree)&&pl(h,g,!0)):ae(h,g,b,q,x,_,N,L,P)},re=(h,g,b,v,x,_,N,L,P)=>{g.slotScopeIds=L,h==null?g.shapeFlag&512?x.ctx.activate(g,b,v,N,P):Te(g,b,v,x,_,N,P):ze(h,g,P)},Te=(h,g,b,v,x,_,N)=>{const L=h.component=Kc(h,v,x);if(Ss(h)&&(L.ctx.renderer=U),Zc(L,!1,N),L.asyncDep){if(x&&x.registerDep(L,Ce,N),!h.el){const P=L.subTree=j(Ne);y(null,P,g,b),h.placeholder=P.el}}else Ce(L,h,g,b,x,_,N)},ze=(h,g,b)=>{const v=g.component=h.component;if(Ec(h,g,b))if(v.asyncDep&&!v.asyncResolved){he(v,g,b);return}else v.next=g,v.update();else g.el=h.el,v.vnode=g},Ce=(h,g,b,v,x,_,N)=>{const L=()=>{if(h.isMounted){let{next:W,bu:G,u:Z,parent:te,vnode:_e}=h;{const it=hl(h);if(it){W&&(W.el=_e.el,he(h,W,N)),it.asyncDep.then(()=>{Fe(()=>{h.isUnmounted||R()},x)});return}}let pe=W,We;zt(h,!1),W?(W.el=_e.el,he(h,W,N)):W=_e,G&&es(G),(We=W.props&&W.props.onVnodeBeforeUpdate)&&lt(We,te,W,_e),zt(h,!0);const He=di(h),rt=h.subTree;h.subTree=He,T(rt,He,d(rt.el),w(rt),h,x,_),W.el=He.el,pe===null&&Pc(h,He.el),Z&&Fe(Z,x),(We=W.props&&W.props.onVnodeUpdated)&&Fe(()=>lt(We,te,W,_e),x)}else{let W;const{el:G,props:Z}=g,{bm:te,m:_e,parent:pe,root:We,type:He}=h,rt=$n(g);zt(h,!1),te&&es(te),!rt&&(W=Z&&Z.onVnodeBeforeMount)&&lt(W,pe,g),zt(h,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(He);const it=h.subTree=di(h);T(null,it,b,v,h,x,_),g.el=it.el}if(_e&&Fe(_e,x),!rt&&(W=Z&&Z.onVnodeMounted)){const it=g;Fe(()=>lt(W,pe,it),x)}(g.shapeFlag&256||pe&&$n(pe.vnode)&&pe.vnode.shapeFlag&256)&&h.a&&Fe(h.a,x),h.isMounted=!0,g=b=v=null}};h.scope.on();const P=h.effect=new bo(L);h.scope.off();const R=h.update=P.run.bind(P),q=h.job=P.runIfDirty.bind(P);q.i=h,q.id=h.uid,P.scheduler=()=>$r(q),zt(h,!0),R()},he=(h,g,b)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,$c(h,g.props,v,b),Nc(h,g.children,b),Tt(),si(h),Rt()},ae=(h,g,b,v,x,_,N,L,P=!1)=>{const R=h&&h.children,q=h?h.shapeFlag:0,W=g.children,{patchFlag:G,shapeFlag:Z}=g;if(G>0){if(G&128){Et(R,W,b,v,x,_,N,L,P);return}else if(G&256){gt(R,W,b,v,x,_,N,L,P);return}}Z&8?(q&16&&Ve(R,x,_),W!==R&&c(b,W)):q&16?Z&16?Et(R,W,b,v,x,_,N,L,P):Ve(R,x,_,!0):(q&8&&c(b,""),Z&16&&se(W,b,v,x,_,N,L,P))},gt=(h,g,b,v,x,_,N,L,P)=>{h=h||dn,g=g||dn;const R=h.length,q=g.length,W=Math.min(R,q);let G;for(G=0;G<W;G++){const Z=g[G]=P?yt(g[G]):ft(g[G]);T(h[G],Z,b,null,x,_,N,L,P)}R>q?Ve(h,x,_,!0,!1,W):se(g,b,v,x,_,N,L,P,W)},Et=(h,g,b,v,x,_,N,L,P)=>{let R=0;const q=g.length;let W=h.length-1,G=q-1;for(;R<=W&&R<=G;){const Z=h[R],te=g[R]=P?yt(g[R]):ft(g[R]);if(Vt(Z,te))T(Z,te,b,null,x,_,N,L,P);else break;R++}for(;R<=W&&R<=G;){const Z=h[W],te=g[G]=P?yt(g[G]):ft(g[G]);if(Vt(Z,te))T(Z,te,b,null,x,_,N,L,P);else break;W--,G--}if(R>W){if(R<=G){const Z=G+1,te=Z<q?g[Z].el:v;for(;R<=G;)T(null,g[R]=P?yt(g[R]):ft(g[R]),b,te,x,_,N,L,P),R++}}else if(R>G)for(;R<=W;)Be(h[R],x,_,!0),R++;else{const Z=R,te=R,_e=new Map;for(R=te;R<=G;R++){const Ue=g[R]=P?yt(g[R]):ft(g[R]);Ue.key!=null&&_e.set(Ue.key,R)}let pe,We=0;const He=G-te+1;let rt=!1,it=0;const _n=new Array(He);for(R=0;R<He;R++)_n[R]=0;for(R=Z;R<=W;R++){const Ue=h[R];if(We>=He){Be(Ue,x,_,!0);continue}let ot;if(Ue.key!=null)ot=_e.get(Ue.key);else for(pe=te;pe<=G;pe++)if(_n[pe-te]===0&&Vt(Ue,g[pe])){ot=pe;break}ot===void 0?Be(Ue,x,_,!0):(_n[ot-te]=R+1,ot>=it?it=ot:rt=!0,T(Ue,g[ot],b,null,x,_,N,L,P),We++)}const Jr=rt?Hc(_n):dn;for(pe=Jr.length-1,R=He-1;R>=0;R--){const Ue=te+R,ot=g[Ue],Qr=g[Ue+1],Yr=Ue+1<q?Qr.el||gl(Qr):v;_n[R]===0?T(null,ot,b,Yr,x,_,N,L,P):rt&&(pe<0||R!==Jr[pe]?st(ot,b,Yr,2):pe--)}}},st=(h,g,b,v,x=null)=>{const{el:_,type:N,transition:L,children:P,shapeFlag:R}=h;if(R&6){st(h.component.subTree,g,b,v);return}if(R&128){h.suspense.move(g,b,v);return}if(R&64){N.move(h,g,b,U);return}if(N===X){s(_,g,b);for(let W=0;W<P.length;W++)st(P[W],g,b,v);s(h.anchor,g,b);return}if(N===ns){C(h,g,b);return}if(v!==2&&R&1&&L)if(v===0)L.beforeEnter(_),s(_,g,b),Fe(()=>L.enter(_),x);else{const{leave:W,delayLeave:G,afterLeave:Z}=L,te=()=>{h.ctx.isUnmounted?r(_):s(_,g,b)},_e=()=>{_._isLeaving&&_[ut](!0),W(_,()=>{te(),Z&&Z()})};G?G(_,te,_e):_e()}else s(_,g,b)},Be=(h,g,b,v=!1,x=!1)=>{const{type:_,props:N,ref:L,children:P,dynamicChildren:R,shapeFlag:q,patchFlag:W,dirs:G,cacheIndex:Z}=h;if(W===-2&&(x=!1),L!=null&&(Tt(),In(L,null,b,h,!0),Rt()),Z!=null&&(g.renderCache[Z]=void 0),q&256){g.ctx.deactivate(h);return}const te=q&1&&G,_e=!$n(h);let pe;if(_e&&(pe=N&&N.onVnodeBeforeUnmount)&&lt(pe,g,h),q&6)Ft(h.component,b,v);else{if(q&128){h.suspense.unmount(b,v);return}te&&jt(h,null,g,"beforeUnmount"),q&64?h.type.remove(h,g,b,U,v):R&&!R.hasOnce&&(_!==X||W>0&&W&64)?Ve(R,g,b,!1,!0):(_===X&&W&384||!x&&q&16)&&Ve(P,g,b),v&&nn(h)}(_e&&(pe=N&&N.onVnodeUnmounted)||te)&&Fe(()=>{pe&&lt(pe,g,h),te&&jt(h,null,g,"unmounted")},b)},nn=h=>{const{type:g,el:b,anchor:v,transition:x}=h;if(g===X){sn(b,v);return}if(g===ns){A(h);return}const _=()=>{r(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:L}=x,P=()=>N(b,_);L?L(h.el,_,P):P()}else _()},sn=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},Ft=(h,g,b)=>{const{bum:v,scope:x,job:_,subTree:N,um:L,m:P,a:R}=h;gi(P),gi(R),v&&es(v),x.stop(),_&&(_.flags|=8,Be(N,h,g,b)),L&&Fe(L,g),Fe(()=>{h.isUnmounted=!0},g)},Ve=(h,g,b,v=!1,x=!1,_=0)=>{for(let N=_;N<h.length;N++)Be(h[N],g,b,v,x)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[tc];return b?p(b):g};let F=!1;const B=(h,g,b)=>{let v;h==null?g._vnode&&(Be(g._vnode,null,null,!0),v=g._vnode.component):T(g._vnode||null,h,g,null,null,null,b),g._vnode=h,F||(F=!0,si(v),No(),F=!1)},U={p:T,um:Be,m:st,r:nn,mt:Te,mc:se,pc:ae,pbc:Y,n:w,o:e};return{render:B,hydrate:void 0,createApp:xc(B)}}function Us({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pl(e,t,n=!1){const s=e.children,r=t.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=yt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&pl(o,a)),a.type===Is&&(a.patchFlag===-1&&(a=r[i]=yt(a)),a.el=o.el),a.type===Ne&&!a.el&&(a.el=o.el)}}function Hc(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function hl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hl(t)}function gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function gl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?gl(t.subTree):null}const ml=e=>e.__isSuspense;function Fc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Qa(e)}const X=Symbol.for("v-fgt"),Is=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),Ln=[];let qe=null;function E(e=!1){Ln.push(qe=e?null:[])}function jc(){Ln.pop(),qe=Ln[Ln.length-1]||null}let Fn=1;function ds(e,t=!1){Fn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function bl(e){return e.dynamicChildren=Fn>0?qe||dn:null,jc(),Fn>0&&qe&&qe.push(e),e}function I(e,t,n,s,r,i){return bl(f(e,t,n,s,r,i,!0))}function cn(e,t,n,s,r){return bl(j(e,t,n,s,r,!0))}function ps(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const vl=({key:e})=>e??null,ss=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||J(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===X?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vl(t),ref:t&&ss(t),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return a?(Nr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Fn>0&&!o&&qe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qe.push(l),l}const j=zc;function zc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Yo)&&(e=Ne),ps(e)){const a=Wt(e,t,!0);return n&&Nr(a,n),Fn>0&&!i&&qe&&(a.shapeFlag&6?qe[qe.indexOf(e)]=a:qe.push(a)),a.patchFlag=-2,a}if(eu(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=Ie(a)),fe(l)&&(Ir(l)&&!K(l)&&(l=Ae({},l)),t.style=xs(l))}const o=xe(e)?1:ml(e)?128:Fo(e)?64:fe(e)?4:J(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function Uc(e){return e?Ir(e)||ll(e)?Ae({},e):e:null}function Wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,u=t?Gc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&vl(u),ref:t&&t.ref?n&&i?K(i)?i.concat(ss(t)):[i,ss(t)]:ss(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Hn(c,l.clone(c)),c}function ie(e=" ",t=0){return j(Is,null,e,t)}function pt(e,t){const n=j(ns,null,e);return n.staticCount=t,n}function Qe(e="",t=!1){return t?(E(),cn(Ne,null,e)):j(Ne,null,e)}function ft(e){return e==null||typeof e=="boolean"?j(Ne):K(e)?j(X,null,e.slice()):ps(e)?yt(e):j(Is,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function Nr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Nr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ll(t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[ie(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ie([t.class,s.class]));else if(r==="style")t.style=xs([t.style,s.style]);else if(_s(r)){const i=t[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function lt(e,t,n,s=null){tt(e,t,7,[n,s])}const qc=nl();let Vc=0;function Kc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||qc,i={uid:Vc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cl(s,r),emitsOptions:sl(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const _l=()=>Pe||Ge;let hs,ur;{const e=ws(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};hs=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),ur=t("__VUE_SSR_SETTERS__",n=>jn=n)}const Kn=e=>{const t=Pe;return hs(e),e.scope.on(),()=>{e.scope.off(),hs(t)}},mi=()=>{Pe&&Pe.scope.off(),hs(null)};function yl(e){return e.vnode.shapeFlag&4}let jn=!1;function Zc(e,t=!1,n=!1){t&&ur(t);const{props:s,children:r}=e.vnode,i=yl(e);Ic(e,s,i,t),Mc(e,r,n||t);const o=i?Jc(e,t):void 0;return t&&ur(!1),o}function Jc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,mc);const{setup:s}=n;if(s){Tt();const r=e.setupContext=s.length>1?Yc(e):null,i=Kn(e),o=Vn(s,e,0,[e.props,r]),a=co(o);if(Rt(),i(),(a||e.sp)&&!$n(e)&&Ko(e),a){if(o.then(mi,mi),t)return o.then(l=>{bi(e,l)}).catch(l=>{Rs(l,e,0)});e.asyncDep=o}else bi(e,o)}else kl(e)}function bi(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Oo(t)),kl(e)}function kl(e,t,n){const s=e.type;e.render||(e.render=s.render||dt);{const r=Kn(e);Tt();try{bc(e)}finally{Rt(),r()}}}const Qc={get(e,t){return Ee(e,"get",""),e[t]}};function Yc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qc),slots:e.slots,emit:e.emit,expose:t}}function $s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oo(Fa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in On)return On[n](e)},has(t,n){return n in t||n in On}})):e.proxy}function Xc(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function eu(e){return J(e)&&"__vccOpts"in e}const me=(e,t)=>qa(e,t,jn);function Dr(e,t,n){try{ds(-1);const s=arguments.length;return s===2?fe(t)&&!K(t)?ps(t)?j(e,null,[t]):j(e,t):j(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ps(n)&&(n=[n]),j(e,t,n))}finally{ds(1)}}const tu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fr;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{fr=vi.createPolicy("vue",{createHTML:e=>e})}catch{}const wl=fr?e=>fr.createHTML(e):e=>e,nu="http://www.w3.org/2000/svg",su="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,_i=_t&&_t.createElement("template"),ru={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?_t.createElementNS(nu,e):t==="mathml"?_t.createElementNS(su,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_i.innerHTML=wl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=_i.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",wn="animation",zn=Symbol("_vtc"),xl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iu=Ae({},jo,xl),ou=e=>(e.displayName="Transition",e.props=iu,e),lu=ou((e,{slots:t})=>Dr(rc,au(e),t)),Ut=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},yi=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function au(e){const t={};for(const H in e)H in xl||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,k=cu(r),T=k&&k[0],O=k&&k[1],{onBeforeEnter:y,onEnter:S,onEnterCancelled:C,onLeave:A,onLeaveCancelled:M,onBeforeAppear:D=y,onAppear:V=S,onAppearCancelled:se=C}=t,z=(H,re,Te,ze)=>{H._enterCancelled=ze,Gt(H,re?c:a),Gt(H,re?u:o),Te&&Te()},Y=(H,re)=>{H._isLeaving=!1,Gt(H,d),Gt(H,m),Gt(H,p),re&&re()},le=H=>(re,Te)=>{const ze=H?V:S,Ce=()=>z(re,H,Te);Ut(ze,[re,Ce]),ki(()=>{Gt(re,H?l:i),bt(re,H?c:a),yi(ze)||wi(re,s,T,Ce)})};return Ae(t,{onBeforeEnter(H){Ut(y,[H]),bt(H,i),bt(H,o)},onBeforeAppear(H){Ut(D,[H]),bt(H,l),bt(H,u)},onEnter:le(!1),onAppear:le(!0),onLeave(H,re){H._isLeaving=!0;const Te=()=>Y(H,re);bt(H,d),H._enterCancelled?(bt(H,p),Ti(H)):(Ti(H),bt(H,p)),ki(()=>{H._isLeaving&&(Gt(H,d),bt(H,m),yi(A)||wi(H,s,O,Te))}),Ut(A,[H,Te])},onEnterCancelled(H){z(H,!1,void 0,!0),Ut(C,[H])},onAppearCancelled(H){z(H,!0,void 0,!0),Ut(se,[H])},onLeaveCancelled(H){Y(H),Ut(M,[H])}})}function cu(e){if(e==null)return null;if(fe(e))return[Gs(e.enter),Gs(e.leave)];{const t=Gs(e);return[t,t]}}function Gs(e){return pa(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zn]||(e[zn]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[zn];n&&(n.delete(t),n.size||(e[zn]=void 0))}function ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uu=0;function wi(e,t,n,s){const r=e._endId=++uu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=fu(e,t);if(!o)return s();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,p)}function fu(e,t){const n=window.getComputedStyle(e),s=k=>(n[k]||"").split(", "),r=s(`${Pt}Delay`),i=s(`${Pt}Duration`),o=xi(r,i),a=s(`${wn}Delay`),l=s(`${wn}Duration`),u=xi(a,l);let c=null,d=0,p=0;t===Pt?o>0&&(c=Pt,d=o,p=i.length):t===wn?u>0&&(c=wn,d=u,p=l.length):(d=Math.max(o,u),c=d>0?o>u?Pt:wn:null,p=c?c===Pt?i.length:l.length:0);const m=c===Pt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Pt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ci(n)+Ci(e[s])))}function Ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(e){return(e?e.ownerDocument:document).body.offsetHeight}function du(e,t,n){const s=e[zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ri=Symbol("_vod"),pu=Symbol("_vsh"),hu=Symbol(""),gu=/(?:^|;)\s*display\s*:/;function mu(e,t,n){const s=e.style,r=xe(n);let i=!1;if(n&&!r){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rs(s,a,"")}else for(const o in t)n[o]==null&&rs(s,o,"");for(const o in n)o==="display"&&(i=!0),rs(s,o,n[o])}else if(r){if(t!==n){const o=s[hu];o&&(n+=";"+o),s.cssText=n,i=gu.test(n)}}else t&&e.removeAttribute("style");Ri in e&&(e[Ri]=i?s.display:"",e[pu]&&(s.display="none"))}const Si=/\s*!important$/;function rs(e,t,n){if(K(n))n.forEach(s=>rs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=bu(e,t);Si.test(n)?e.setProperty(Xt(s),n.replace(Si,""),"important"):e[s]=n}}const Ai=["Webkit","Moz","ms"],qs={};function bu(e,t){const n=qs[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return qs[t]=s;s=ks(s);for(let r=0;r<Ai.length;r++){const i=Ai[r]+s;if(i in e)return qs[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function Pi(e,t,n,s,r,i=_a(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n):n==null||i&&!ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ht(n)?String(n):n)}function Ii(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ho(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function ln(e,t,n,s){e.addEventListener(t,n,s)}function vu(e,t,n,s){e.removeEventListener(t,n,s)}const $i=Symbol("_vei");function _u(e,t,n,s,r=null){const i=e[$i]||(e[$i]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=yu(t);if(s){const u=i[t]=xu(s,r);ln(e,a,u,l)}else o&&(vu(e,a,o,l),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function yu(e){let t;if(Oi.test(e)){t={};let s;for(;s=e.match(Oi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let Vs=0;const ku=Promise.resolve(),wu=()=>Vs||(ku.then(()=>Vs=0),Vs=Date.now());function xu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Cu(s,n.value),t,5,[s])};return n.value=e,n.attached=wu(),n}function Cu(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tu=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?du(e,s,o):t==="style"?mu(e,n,s):_s(t)?yr(t)||_u(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ru(e,t,s,o))?(Ii(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(s))?Ii(e,Je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Pi(e,t,s,o))};function Ru(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Li(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Li(t)&&xe(n)?!1:t in e}const Mi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>es(t,n):t};function Su(e){e.target.composing=!0}function Ni(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign");function Di(e,t,n){return t&&(e=e.trim()),n&&(e=xr(e)),e}const Br={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Ks]=Mi(r);const i=s||r.props&&r.props.type==="number";ln(e,t?"change":"input",o=>{o.target.composing||e[Ks](Di(e.value,n,i))}),(n||i)&&ln(e,"change",()=>{e.value=Di(e.value,n,i)}),t||(ln(e,"compositionstart",Su),ln(e,"compositionend",Ni),ln(e,"change",Ni))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Ks]=Mi(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?xr(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},Au=Ae({patchProp:Tu},ru);let Bi;function Eu(){return Bi||(Bi=Dc(Au))}const Pu=(...e)=>{const t=Eu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=$u(s);if(!r)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Iu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Iu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $u(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const an=typeof document<"u";function Cl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cl(e.default)}const ce=Object.assign;function Zs(e,t){const n={};for(const s in t){const r=t[s];n[s]=nt(r)?r.map(e):e(r)}return n}const Mn=()=>{},nt=Array.isArray;function Wi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Tl=/#/g,Lu=/&/g,Mu=/\//g,Nu=/=/g,Du=/\?/g,Rl=/\+/g,Bu=/%5B/g,Wu=/%5D/g,Sl=/%5E/g,Hu=/%60/g,Al=/%7B/g,Fu=/%7C/g,El=/%7D/g,ju=/%20/g;function Wr(e){return e==null?"":encodeURI(""+e).replace(Fu,"|").replace(Bu,"[").replace(Wu,"]")}function zu(e){return Wr(e).replace(Al,"{").replace(El,"}").replace(Sl,"^")}function dr(e){return Wr(e).replace(Rl,"%2B").replace(ju,"+").replace(Tl,"%23").replace(Lu,"%26").replace(Hu,"`").replace(Al,"{").replace(El,"}").replace(Sl,"^")}function Uu(e){return dr(e).replace(Nu,"%3D")}function Gu(e){return Wr(e).replace(Tl,"%23").replace(Du,"%3F")}function qu(e){return Gu(e).replace(Mu,"%2F")}function Un(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Vu=/\/$/,Ku=e=>e.replace(Vu,"");function Js(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),i=t.slice(l,a>0?a:t.length),r=e(i.slice(1))),a>=0&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=Yu(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Un(o)}}function Zu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ju(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(t.matched[s],n.matched[r])&&Pl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Qu(e[n],t[n]))return!1;return!0}function Qu(e,t){return nt(e)?Fi(e,t):nt(t)?Fi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Fi(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Yu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pr=function(e){return e.pop="pop",e.push="push",e}({}),Qs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Xu(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ku(e)}const ef=/^[^#]+#/;function tf(e,t){return e.replace(ef,"#")+t}function nf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Os=()=>({left:window.scrollX,top:window.scrollY});function sf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=nf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function rf(e,t){hr.set(e,t)}function of(e){const t=hr.get(e);return hr.delete(e),t}function lf(e){return typeof e=="string"||e&&typeof e=="object"}function Il(e){return typeof e=="string"||typeof e=="symbol"}let we=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const $l=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function vn(e,t){return ce(new Error,{type:e,[$l]:!0},t)}function vt(e,t){return e instanceof Error&&$l in e&&(t==null||!!(e.type&t))}const af=["params","query","hash"];function cf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of af)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function uf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Rl," "),i=r.indexOf("="),o=Un(i<0?r:r.slice(0,i)),a=i<0?null:Un(r.slice(i+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function zi(e){let t="";for(let n in e){const s=e[n];if(n=Uu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&dr(r)):[s&&dr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ff(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const df=Symbol(""),Ui=Symbol(""),Ls=Symbol(""),Hr=Symbol(""),gr=Symbol("");function xn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(vn(we.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):lf(p)?l(vn(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Ys(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Cl(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Lt(u,n,s,o,a,r))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Ou(c)?c.default:c;o.mods[a]=c,o.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Lt(p,n,s,o,a,r)()}))}}return i}function pf(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>bn(u,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>bn(u,l))||r.push(l))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hf=()=>location.protocol+"//"+location.host;function Ol(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Hi(a,"")}return Hi(n,e)+s+r}function gf(e,t,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=Ol(e,location),k=n.value,T=t.value;let O=0;if(p){if(n.value=m,t.value=p,o&&o===k){o=null;return}O=T?p.position-T.position:0}else s(m);r.forEach(y=>{y(n.value,k,{delta:O,type:pr.pop,direction:O?O>0?Qs.forward:Qs.back:Qs.unknown})})};function l(){o=n.value}function u(p){r.push(p);const m=()=>{const k=r.indexOf(p);k>-1&&r.splice(k,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ce({},p.state,{scroll:Os()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function Gi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Os():null}}function mf(e){const{history:t,location:n}=window,s={value:Ol(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:hf()+e+l;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function o(l,u){i(l,ce({},t.state,Gi(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=l}function a(l,u){const c=ce({},r.value,t.state,{forward:l,scroll:Os()});i(c.current,c,!0),i(l,ce({},Gi(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function bf(e){e=Xu(e);const t=mf(e),n=gf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:e,go:s,createHref:tf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function vf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),bf(e)}let Zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Re=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Re||{});const _f={type:Zt.Static,value:""},yf=/[a-zA-Z0-9_]/;function kf(e){if(!e)return[[]];if(e==="/")return[[_f]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Re.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",c="";function d(){u&&(n===Re.Static?i.push({type:Zt.Static,value:u}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zt.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==Re.ParamRegExp){s=n,n=Re.EscapeNext;continue}switch(n){case Re.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=Re.Param):p();break;case Re.EscapeNext:p(),n=s;break;case Re.Param:l==="("?n=Re.ParamRegExp:yf.test(l)?p():(d(),n=Re.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Re.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Re.ParamRegExpEnd:c+=l;break;case Re.ParamRegExpEnd:d(),n=Re.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const qi="[^/]+?",wf={sensitive:!1,strict:!1,start:!0,end:!0};var Le=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Le||{});const xf=/[.+*?^${}()[\]/\\]/g;function Cf(e,t){const n=ce({},wf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Le.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=Le.Segment+(n.sensitive?Le.BonusCaseSensitive:0);if(p.type===Zt.Static)d||(r+="/"),r+=p.value.replace(xf,"\\$&"),m+=Le.Static;else if(p.type===Zt.Param){const{value:k,repeatable:T,optional:O,regexp:y}=p;i.push({name:k,repeatable:T,optional:O});const S=y||qi;if(S!==qi){m+=Le.BonusCustomRegExp;try{`${S}`}catch(A){throw new Error(`Invalid custom RegExp for param "${k}" (${S}): `+A.message)}}let C=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(C=O&&u.length<2?`(?:/${C})`:"/"+C),O&&(C+="?"),r+=C,m+=Le.Dynamic,O&&(m+=Le.BonusOptional),T&&(m+=Le.BonusRepeatable),S===".*"&&(m+=Le.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Le.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",k=i[p-1];d[k.name]=m&&k.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===Zt.Static)c+=m.value;else if(m.type===Zt.Param){const{value:k,repeatable:T,optional:O}=m,y=k in u?u[k]:"";if(nt(y)&&!T)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const S=nt(y)?y.join("/"):y;if(!S)if(O)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=S}}return c||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Tf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Le.Static+Le.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Le.Static+Le.Segment?1:-1:0}function Ll(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Tf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Vi(s))return 1;if(Vi(r))return-1}return r.length-s.length}function Vi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rf={strict:!1,end:!0,sensitive:!1};function Sf(e,t,n){const s=Cf(kf(e.path),n),r=ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Af(e,t){const n=[],s=new Map;t=Wi(Rf,t);function r(d){return s.get(d)}function i(d,p,m){const k=!m,T=Zi(d);T.aliasOf=m&&m.record;const O=Wi(t,d),y=[T];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of A)y.push(Zi(ce({},T,{components:m?m.record.components:T.components,path:M,aliasOf:m?m.record:T})))}let S,C;for(const A of y){const{path:M}=A;if(p&&M[0]!=="/"){const D=p.record.path,V=D[D.length-1]==="/"?"":"/";A.path=p.record.path+(M&&V+M)}if(S=Sf(A,p,O),m?m.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),k&&d.name&&!Ji(S)&&o(d.name)),Ml(S)&&l(S),T.children){const D=T.children;for(let V=0;V<D.length;V++)i(D[V],S,m&&m.children[V])}m=m||S}return C?()=>{o(C)}:Mn}function o(d){if(Il(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=If(d,n);n.splice(p,0,d),d.record.name&&!Ji(d)&&s.set(d.record.name,d)}function u(d,p){let m,k={},T,O;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw vn(we.MATCHER_NOT_FOUND,{location:d});O=m.record.name,k=ce(Ki(p.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Ki(d.params,m.keys.map(C=>C.name))),T=m.stringify(k)}else if(d.path!=null)T=d.path,m=n.find(C=>C.re.test(T)),m&&(k=m.parse(T),O=m.record.name);else{if(m=p.name?s.get(p.name):n.find(C=>C.re.test(p.path)),!m)throw vn(we.MATCHER_NOT_FOUND,{location:d,currentLocation:p});O=m.record.name,k=ce({},p.params,d.params),T=m.stringify(k)}const y=[];let S=m;for(;S;)y.unshift(S.record),S=S.parent;return{name:O,path:T,params:k,matched:y,meta:Pf(y)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Ki(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Zi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function If(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Ll(e,t[i])<0?s=i:n=i+1}const r=$f(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function $f(e){let t=e;for(;t=t.parent;)if(Ml(t)&&Ll(e,t)===0)return t}function Ml({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Qi(e){const t=Xe(Ls),n=Xe(Hr),s=me(()=>{const l=ge(e.to);return t.resolve(l)}),r=me(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(bn.bind(null,c));if(p>-1)return p;const m=Yi(l[u-2]);return u>1&&Yi(c)===m&&d[d.length-1].path!==m?d.findIndex(bn.bind(null,l[u-2])):p}),i=me(()=>r.value>-1&&Df(n.params,s.value.params)),o=me(()=>r.value>-1&&r.value===n.matched.length-1&&Pl(n.params,s.value.params));function a(l={}){if(Nf(l)){const u=t[ge(e.replace)?"replace":"push"](ge(e.to)).catch(Mn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:me(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function Of(e){return e.length===1?e[0]:e}const Lf=Vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qi,setup(e,{slots:t}){const n=Ts(Qi(e)),{options:s}=Xe(Ls),r=me(()=>({[Xi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Of(t.default(n));return e.custom?i:Dr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Mf=Lf;function Nf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Df(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!nt(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Bf=Vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Xe(gr),r=me(()=>e.route||s.value),i=Xe(Ui,0),o=me(()=>{let u=ge(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=me(()=>r.value.matched[o.value]);ts(Ui,me(()=>o.value+1)),ts(df,a),ts(gr,r);const l=Se();return Bt(()=>[l.value,a.value,e.name],([u,c,d],[p,m,k])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!bn(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=a.value,p=d&&d.components[c];if(!p)return eo(n.default,{Component:p,route:u});const m=d.props[c],k=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Dr(p,ce({},k,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return eo(n.default,{Component:O,route:u})||O}}});function eo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wf=Bf;function Hf(e){const t=Af(e.routes,e),n=e.parseQuery||uf,s=e.stringifyQuery||zi,r=e.history,i=xn(),o=xn(),a=xn(),l=ja(It);let u=It;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Zs.bind(null,w=>""+w),d=Zs.bind(null,qu),p=Zs.bind(null,Un);function m(w,F){let B,U;return Il(w)?(B=t.getRecordMatcher(w),U=F):U=w,t.addRoute(U,B)}function k(w){const F=t.getRecordMatcher(w);F&&t.removeRoute(F)}function T(){return t.getRoutes().map(w=>w.record)}function O(w){return!!t.getRecordMatcher(w)}function y(w,F){if(F=ce({},F||l.value),typeof w=="string"){const b=Js(n,w,F.path),v=t.resolve({path:b.path},F),x=r.createHref(b.fullPath);return ce(b,v,{params:p(v.params),hash:Un(b.hash),redirectedFrom:void 0,href:x})}let B;if(w.path!=null)B=ce({},w,{path:Js(n,w.path,F.path).path});else{const b=ce({},w.params);for(const v in b)b[v]==null&&delete b[v];B=ce({},w,{params:d(b)}),F.params=d(F.params)}const U=t.resolve(B,F),ee=w.hash||"";U.params=c(p(U.params));const h=Zu(s,ce({},w,{hash:zu(ee),path:U.path})),g=r.createHref(h);return ce({fullPath:h,hash:ee,query:s===zi?ff(w.query):w.query||{}},U,{redirectedFrom:void 0,href:g})}function S(w){return typeof w=="string"?Js(n,w,l.value.path):ce({},w)}function C(w,F){if(u!==w)return vn(we.NAVIGATION_CANCELLED,{from:F,to:w})}function A(w){return V(w)}function M(w){return A(ce(S(w),{replace:!0}))}function D(w,F){const B=w.matched[w.matched.length-1];if(B&&B.redirect){const{redirect:U}=B;let ee=typeof U=="function"?U(w,F):U;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),ce({query:w.query,hash:w.hash,params:ee.path!=null?{}:w.params},ee)}}function V(w,F){const B=u=y(w),U=l.value,ee=w.state,h=w.force,g=w.replace===!0,b=D(B,U);if(b)return V(ce(S(b),{state:typeof b=="object"?ce({},ee,b.state):ee,force:h,replace:g}),F||B);const v=B;v.redirectedFrom=F;let x;return!h&&Ju(s,U,B)&&(x=vn(we.NAVIGATION_DUPLICATED,{to:v,from:U}),st(U,U,!0,!1)),(x?Promise.resolve(x):Y(v,U)).catch(_=>vt(_)?vt(_,we.NAVIGATION_GUARD_REDIRECT)?_:Et(_):ae(_,v,U)).then(_=>{if(_){if(vt(_,we.NAVIGATION_GUARD_REDIRECT))return V(ce({replace:g},S(_.to),{state:typeof _.to=="object"?ce({},ee,_.to.state):ee,force:h}),F||v)}else _=H(v,U,!0,g,ee);return le(v,U,_),_})}function se(w,F){const B=C(w,F);return B?Promise.reject(B):Promise.resolve()}function z(w){const F=sn.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function Y(w,F){let B;const[U,ee,h]=pf(w,F);B=Ys(U.reverse(),"beforeRouteLeave",w,F);for(const b of U)b.leaveGuards.forEach(v=>{B.push(Lt(v,w,F))});const g=se.bind(null,w,F);return B.push(g),Ve(B).then(()=>{B=[];for(const b of i.list())B.push(Lt(b,w,F));return B.push(g),Ve(B)}).then(()=>{B=Ys(ee,"beforeRouteUpdate",w,F);for(const b of ee)b.updateGuards.forEach(v=>{B.push(Lt(v,w,F))});return B.push(g),Ve(B)}).then(()=>{B=[];for(const b of h)if(b.beforeEnter)if(nt(b.beforeEnter))for(const v of b.beforeEnter)B.push(Lt(v,w,F));else B.push(Lt(b.beforeEnter,w,F));return B.push(g),Ve(B)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),B=Ys(h,"beforeRouteEnter",w,F,z),B.push(g),Ve(B))).then(()=>{B=[];for(const b of o.list())B.push(Lt(b,w,F));return B.push(g),Ve(B)}).catch(b=>vt(b,we.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function le(w,F,B){a.list().forEach(U=>z(()=>U(w,F,B)))}function H(w,F,B,U,ee){const h=C(w,F);if(h)return h;const g=F===It,b=an?history.state:{};B&&(U||g?r.replace(w.fullPath,ce({scroll:g&&b&&b.scroll},ee)):r.push(w.fullPath,ee)),l.value=w,st(w,F,B,g),Et()}let re;function Te(){re||(re=r.listen((w,F,B)=>{if(!Ft.listening)return;const U=y(w),ee=D(U,Ft.currentRoute.value);if(ee){V(ce(ee,{replace:!0,force:!0}),U).catch(Mn);return}u=U;const h=l.value;an&&rf(ji(h.fullPath,B.delta),Os()),Y(U,h).catch(g=>vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?g:vt(g,we.NAVIGATION_GUARD_REDIRECT)?(V(ce(S(g.to),{force:!0}),U).then(b=>{vt(b,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===pr.pop&&r.go(-1,!1)}).catch(Mn),Promise.reject()):(B.delta&&r.go(-B.delta,!1),ae(g,U,h))).then(g=>{g=g||H(U,h,!1),g&&(B.delta&&!vt(g,we.NAVIGATION_CANCELLED)?r.go(-B.delta,!1):B.type===pr.pop&&vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),le(U,h,g)}).catch(Mn)}))}let ze=xn(),Ce=xn(),he;function ae(w,F,B){Et(w);const U=Ce.list();return U.length?U.forEach(ee=>ee(w,F,B)):console.error(w),Promise.reject(w)}function gt(){return he&&l.value!==It?Promise.resolve():new Promise((w,F)=>{ze.add([w,F])})}function Et(w){return he||(he=!w,Te(),ze.list().forEach(([F,B])=>w?B(w):F()),ze.reset()),w}function st(w,F,B,U){const{scrollBehavior:ee}=e;if(!an||!ee)return Promise.resolve();const h=!B&&of(ji(w.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return Kt().then(()=>ee(w,F,h)).then(g=>g&&sf(g)).catch(g=>ae(g,w,F))}const Be=w=>r.go(w);let nn;const sn=new Set,Ft={currentRoute:l,listening:!0,addRoute:m,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:T,resolve:y,options:e,push:A,replace:M,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:gt,install(w){w.component("RouterLink",Mf),w.component("RouterView",Wf),w.config.globalProperties.$router=Ft,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(l)}),an&&!nn&&l.value===It&&(nn=!0,A(r.location).catch(U=>{}));const F={};for(const U in It)Object.defineProperty(F,U,{get:()=>l.value[U],enumerable:!0});w.provide(Ls,Ft),w.provide(Hr,Io(F)),w.provide(gr,l);const B=w.unmount;sn.add(w),w.unmount=function(){sn.delete(w),sn.size<1&&(u=It,re&&re(),re=null,l.value=It,nn=!1,he=!1),B()}}};function Ve(w){return w.reduce((F,B)=>F.then(()=>z(B)),Promise.resolve())}return Ft}function Ff(){return Xe(Ls)}function Nl(e){return Xe(Hr)}const Dl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},jf={__name:"PixelTree",props:{size:{type:String,default:"md"},variant:{type:String,default:"emerald"}},setup(e){const t=["0000g0000","000ggg000","00gglgg00","0ggggggg0","0gglflgg0","00ggggg00","000gtg000","000ttt000","0000t0000"],n=t[0].length,s=t.length,r=me(()=>t.join("").split("")),i=me(()=>({"--cols":n,"--rows":s}));return(o,a)=>(E(),I("div",{class:Ie(["pixel-tree",[`size-${e.size}`,`variant-${e.variant}`]]),style:xs(i.value),"aria-hidden":"true"},[(E(!0),I(X,null,ke(r.value,(l,u)=>(E(),I("span",{key:u,class:Ie(["pixel-tree-cell",{filled:l!=="0",leaf:l==="g",leafAlt:l==="l",trunk:l==="t",fruit:l==="f"}])},null,2))),128))],6))}},un=Dl(jf,[["__scopeId","data-v-00c24bb5"]]),zf={class:"container nav-shell"},Uf={class:"brand-mark brand-mark-tree"},Gf={class:"nav-right"},qf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Se(!1);return(n,s)=>{const r=Ht("router-link");return E(),I("header",{class:Ie(["site-header",{scrolled:e.scrolled}])},[f("div",zf,[j(r,{class:"brand",to:"/"},{default:Q(()=>[f("span",Uf,[j(un,{size:"micro",variant:"forest"})]),s[10]||(s[10]=f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Minecraft Server Core")],-1))]),_:1}),f("div",Gf,[f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Ie(["nav-links",{open:t.value}])},[j(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:Q(()=>[...s[12]||(s[12]=[ie("首页",-1)])]),_:1}),j(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:Q(()=>[...s[13]||(s[13]=[ie("核心能力",-1)])]),_:1}),j(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:Q(()=>[...s[14]||(s[14]=[ie("技术文档",-1)])]),_:1}),j(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:Q(()=>[...s[15]||(s[15]=[ie("下载",-1)])]),_:1}),j(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:Q(()=>[...s[16]||(s[16]=[ie("路线图",-1)])]),_:1}),j(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:Q(()=>[...s[17]||(s[17]=[ie("更新日志",-1)])]),_:1}),j(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:Q(()=>[...s[18]||(s[18]=[ie("团队与支持",-1)])]),_:1}),j(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:Q(()=>[...s[19]||(s[19]=[ie("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),ie(" "+$(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},Vf={class:"site-footer"},Kf={class:"container footer-grid"},Zf={class:"brand footer-brand"},Jf={class:"brand-mark brand-mark-tree"},Qf={__name:"SiteFooter",setup(e){return(t,n)=>{const s=Ht("router-link");return E(),I("footer",Vf,[f("div",Kf,[f("div",null,[f("div",Zf,[f("span",Jf,[j(un,{size:"micro",variant:"forest"})]),n[0]||(n[0]=f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")],-1))]),n[1]||(n[1]=f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ",-1))]),f("div",null,[n[7]||(n[7]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[j(s,{to:"/features"},{default:Q(()=>[...n[2]||(n[2]=[ie("核心能力",-1)])]),_:1})]),f("li",null,[j(s,{to:"/docs"},{default:Q(()=>[...n[3]||(n[3]=[ie("技术文档",-1)])]),_:1})]),f("li",null,[j(s,{to:"/downloads"},{default:Q(()=>[...n[4]||(n[4]=[ie("下载",-1)])]),_:1})]),f("li",null,[j(s,{to:"/roadmap"},{default:Q(()=>[...n[5]||(n[5]=[ie("路线图",-1)])]),_:1})]),f("li",null,[j(s,{to:"/changelog"},{default:Q(()=>[...n[6]||(n[6]=[ie("更新日志",-1)])]),_:1})])])]),n[13]||(n[13]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[n[12]||(n[12]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[j(s,{to:"/team"},{default:Q(()=>[...n[8]||(n[8]=[ie("团队与支持",-1)])]),_:1})]),n[9]||(n[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),n[10]||(n[10]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),n[11]||(n[11]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),n[14]||(n[14]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}}},Yf=["data-theme"],Xf={class:"site-main"},ed={__name:"App",setup(e){const t=Se("dark"),n=Se(!1),s=Nl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},o=()=>{i(t.value==="dark"?"light":"dark")},a=()=>{n.value=window.scrollY>8},l=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".tree-suite-grid > *",".entry-grid > *",".showcase-row > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Kt();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(l.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return en(()=>{const c=localStorage.getItem("tree-site-theme");if(c==="dark"||c==="light")i(c);else{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;i(d?"dark":"light")}a(),window.addEventListener("scroll",a,{passive:!0}),u()}),Es(()=>{window.removeEventListener("scroll",a),r==null||r.disconnect()}),Bt(()=>s.fullPath,()=>{u()}),Bt(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=Ht("router-view");return E(),I("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=pt('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),j(qf,{theme:t.value,scrolled:n.value,onToggleTheme:o},null,8,["theme","scrolled"]),f("main",Xf,[j(p,null,{default:Q(({Component:m,route:k})=>[j(lu,{name:"page-fade",mode:"out-in"},{default:Q(()=>[(E(),cn(gc(m),{key:k.fullPath}))]),_:2},1024)]),_:1})]),j(Qf)],8,Yf)}}},td="/images/console-preview.png",nd={class:"hero-section home-hero-section"},sd={class:"container hero-grid home-hero-grid"},rd={class:"hero-copy"},id={class:"section-kicker-row hero-kicker-row"},od={class:"hero-actions"},ld={class:"section-block"},ad={class:"container stats-grid"},cd={class:"section-block home-suite-section surface-soft"},ud={class:"container"},fd={class:"section-head"},dd={class:"section-kicker-row"},pd={class:"tree-suite-grid"},hd={class:"suite-card-head"},gd={class:"suite-icon"},md={class:"card-label"},bd={class:"bullet-list compact-list suite-points"},vd={class:"section-block showcase-section"},_d={class:"container showcase-stack"},yd={class:"showcase-visual surface-card"},kd=["src","alt"],wd={class:"showcase-copy"},xd={class:"eyebrow"},Cd={class:"hero-actions"},Td={class:"section-block surface-soft"},Rd={class:"container"},Sd={class:"feature-grid three"},Ad={class:"section-block"},Ed={class:"container"},Pd={class:"entry-grid"},Id={class:"entry-card-head"},$d={class:"card-label"},Od={class:"section-block surface-soft"},Ld={class:"container"},Md={class:"feature-grid two"},Nd={class:"section-block final-cta"},Dd={class:"container cta-shell tree-cta-shell"},Bd={class:"hero-actions"},Wd={__name:"HomePage",setup(e){const t=[{value:"11",label:"当前 Web 页签"},{value:"4 档",label:"自动分层预设"},{value:"ZIP",label:"本地资源包拖拽上传"},{value:"Docs",label:"站内技术 Wiki"}],n=[{kicker:"PERFORMANCE",title:"性能主干",description:"把动态视距、动态模拟距离、自动分层、Paper 热调与网络链路优化收束成同一条性能主线。",points:["动态视距 / 模拟距离","自动分层与运行时调优","更稳的 TPS / MSPT 控制"],link:"/features",linkLabel:"查看性能能力",variant:"forest"},{kicker:"OPERATIONS",title:"运维主干",description:"让控制台、诊断、备份、世界管理与集成状态不再分散在命令和脚本里，而是在 Web 面板内统一可见。",points:["控制台 / 线程转储 / 内存快照","备份创建与恢复","世界管理与集成状态卡片"],link:"/docs/web-panel",linkLabel:"查看 Web 面板",variant:"emerald"},{kicker:"CONTENT FLOW",title:"内容主干",description:"模型、纹理、资源包 ZIP、本地托管与在线玩家下发形成完整闭环，适合内容服与综合服长期维护。",points:["模型 / 纹理上传","资源包拖拽上传与重载","在线玩家远程下发"],link:"/docs/resource-pack",linkLabel:"查看资源链路",variant:"gold"}],s=[{eyebrow:"REAL OPERATIONS",title:"高峰监控、问题排查与恢复动作放在同一条运维流程里。",description:"先看仪表盘，再看控制台，再做线程转储、资源包处理或备份恢复。TreeCore 的目标不是把功能堆进去，而是让它们在实际运维时顺畅接起来。",image:"/images/console-live.gif",link:"/docs/web-pages-overview",linkLabel:"查看页面总览",variant:"teal",reverse:!1},{eyebrow:"LONG TERM SERVER",title:"面向综合服、长周目服与高峰玩家场景持续维护。",description:"对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。",image:"/images/stress-test.gif",link:"/docs/first-day-checklist",linkLabel:"查看上线清单",variant:"forest",reverse:!0},{eyebrow:"DOCS + RELEASE FLOW",title:"首页把文档、下载、路线图和支持入口都收进同一条阅读路径。",description:"现在你可以从首页直接进入快速开始、配置参考、下载页、更新日志、路线图和社区入口，不需要在多个仓库页面之间来回切换。",image:"/images/console-preview.png",link:"/docs/quick-start",linkLabel:"从快速开始进入",variant:"gold",reverse:!1}],r=[{title:"生存 / 长周目服",description:"希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。"},{title:"多世界 / 综合服",description:"需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。"},{title:"运维要求高的团队服",description:"希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。"}],i=[{tag:"GET STARTED",title:"快速开始",description:"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",link:"/docs/quick-start",linkLabel:"进入快速开始",variant:"forest"},{tag:"CONFIG",title:"配置参考",description:"把关键配置项和推荐开关集中整理，便于你在正式服环境中调整。",link:"/docs/configuration",linkLabel:"查看配置参考",variant:"teal"},{tag:"DOWNLOADS",title:"下载与版本",description:"在官网内查看最新版本、更新摘要与下载入口，不再只靠仓库页面跳转。",link:"/downloads",linkLabel:"进入下载页",variant:"gold"},{tag:"ROADMAP",title:"路线图",description:"清楚了解当前阶段、下一阶段与后续方向，避免首页信息只有静态介绍。",link:"/roadmap",linkLabel:"查看路线图",variant:"emerald"},{tag:"CHANGELOG",title:"更新日志",description:"把版本变化、发布时间和更新摘要收束成时间线视图。",link:"/changelog",linkLabel:"查看更新日志",variant:"forest"},{tag:"SUPPORT",title:"团队与支持",description:"集中展示社区入口、贡献者、常见问题与对外支持入口。",link:"/team",linkLabel:"进入支持页",variant:"gold"}],o=[{title:"TreeCore 更适合哪类服务器？",description:"更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。"},{title:"默认会不会大幅改动原版行为？",description:"整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏默认原版、按需保护。"},{title:"Web 管理面板现在能做什么？",description:"当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。"},{title:"第一次上服最推荐先做什么？",description:"建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。"}];return(a,l)=>{const u=Ht("router-link");return E(),I("div",null,[f("section",nd,[f("div",sd,[f("div",rd,[f("div",id,[j(un,{size:"tiny",variant:"forest"}),l[0]||(l[0]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1))]),l[5]||(l[5]=pt('<h1 class="hero-title">TreeCore</h1><p class="hero-summary">高性能服务端核心 · Web 管理 · 诊断</p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',3)),f("div",od,[j(u,{class:"button primary",to:"/features"},{default:Q(()=>[...l[1]||(l[1]=[ie("查看能力",-1)])]),_:1}),j(u,{class:"button secondary",to:"/docs"},{default:Q(()=>[...l[2]||(l[2]=[ie("阅读文档",-1)])]),_:1}),l[3]||(l[3]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1)),l[4]||(l[4]=f("a",{class:"button secondary qq-cta",href:"https://qm.qq.com/q/MfzN81ScIc",target:"_blank",rel:"noreferrer"},"加入 QQ 群",-1))]),l[6]||(l[6]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),l[7]||(l[7]=pt('<div class="hero-visual tree-hero-visual"><div class="hero-spotlight"></div><div class="hero-card image-card hero-stage"><img src="'+td+'" alt="TreeCore 控制台预览"><div class="overlay-panel"><strong>Web 管理面板</strong><p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p></div></div></div>',1))])]),f("section",ld,[f("div",ad,[(E(),I(X,null,ke(t,c=>f("article",{class:"stat-card",key:c.label},[f("strong",null,$(c.value),1),f("span",null,$(c.label),1)])),64))])]),f("section",cd,[f("div",ud,[f("div",fd,[f("div",dd,[j(un,{size:"tiny",variant:"emerald"}),l[8]||(l[8]=f("span",{class:"eyebrow"},"CORE BRANCHES",-1))]),l[9]||(l[9]=f("h2",null,"借鉴 PaperMC 那种清晰的软件分区，但把它改成 TreeCore 的三条主干。",-1)),l[10]||(l[10]=f("p",null," 首页现在不再只是堆叠介绍，而是用更产品化的方式，把 TreeCore 的三条核心主干——性能、运维、内容链路——明确分开展示。 ",-1))]),f("div",pd,[(E(),I(X,null,ke(n,c=>f("article",{class:"suite-card surface-card",key:c.title},[f("div",hd,[f("div",gd,[j(un,{size:"sm",variant:c.variant},null,8,["variant"])]),f("div",null,[f("span",md,$(c.kicker),1),f("h3",null,$(c.title),1)])]),f("p",null,$(c.description),1),f("ul",bd,[(E(!0),I(X,null,ke(c.points,d=>(E(),I("li",{key:d},$(d),1))),128))]),j(u,{class:"text-link",to:c.link},{default:Q(()=>[ie($(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),l[17]||(l[17]=pt('<section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section>',1)),f("section",vd,[f("div",_d,[(E(),I(X,null,ke(s,c=>f("article",{class:Ie(["showcase-row",{reverse:c.reverse}]),key:c.title},[f("div",yd,[f("img",{src:c.image,alt:c.title},null,8,kd)]),f("div",wd,[f("span",xd,$(c.eyebrow),1),f("h2",null,$(c.title),1),f("p",null,$(c.description),1),f("div",Cd,[j(u,{class:"button primary small",to:c.link},{default:Q(()=>[ie($(c.linkLabel),1)]),_:2},1032,["to"])])])],2)),64))])]),f("section",Td,[f("div",Rd,[l[11]||(l[11]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SCENARIOS"),f("h2",null,"适合哪些服务器？")],-1)),f("div",Sd,[(E(),I(X,null,ke(r,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,$(c.title),1),f("p",null,$(c.description),1)])),64))])])]),f("section",Ad,[f("div",Ed,[l[12]||(l[12]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"INSIDE THE SITE"),f("h2",null,"文档、下载、路线图和支持都在同一个站里。"),f("p",null,"如果你是第一次来看 TreeCore，这里就是最直接的入口区：先找文档，再看下载，最后再看路线图和支持页面。")],-1)),f("div",Pd,[(E(),I(X,null,ke(i,c=>f("article",{class:"entry-card feature-card compact",key:c.title},[f("div",Id,[j(un,{size:"tiny",variant:c.variant},null,8,["variant"]),f("span",$d,$(c.tag),1)]),f("h3",null,$(c.title),1),f("p",null,$(c.description),1),j(u,{class:"text-link",to:c.link},{default:Q(()=>[ie($(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),f("section",Od,[f("div",Ld,[l[13]||(l[13]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"FAQ"),f("h2",null,"你可能最先会关心的几个问题")],-1)),f("div",Md,[(E(),I(X,null,ke(o,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,$(c.title),1),f("p",null,$(c.description),1)])),64))])])]),f("section",Nd,[f("div",Dd,[l[16]||(l[16]=f("div",{class:"cta-copy"},[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看能力，再进文档，然后开始部署。"),f("p",null,"官网现在已经把首页、文档、下载入口和后续信息放到同一个站里，阅读路径会简单很多。")],-1)),f("div",Bd,[j(u,{class:"button primary",to:"/docs"},{default:Q(()=>[...l[14]||(l[14]=[ie("进入技术文档",-1)])]),_:1}),j(u,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...l[15]||(l[15]=[ie("查看下载入口",-1)])]),_:1})])])])])}}},Hd={},Fd={class:"page-shell container"};function jd(e,t){return E(),I("div",Fd,[...t[0]||(t[0]=[pt('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>当前可用的核心能力</h1><p> 这页只讲现在已经做出来、并且日常维护能直接用上的部分：性能调优、Web 运维、资源包与模型链路，以及世界和备份管理。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const zd=Dl(Hd,[["render",jd]]),Bl="https://api.github.com/repos/TreeMC-cloud/Tree",Ud=`${Bl}/releases?per_page=30`,Gd=`${Bl}/contributors?per_page=24`,Wl="tree-site-cache:",qd=30*60*1e3,Hl=e=>{try{const t=localStorage.getItem(`${Wl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>qd?null:n.data}catch{return null}},Fl=(e,t)=>{try{localStorage.setItem(`${Wl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},jl=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},Vd=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},zl=async()=>{try{const e=await jl(Ud),t=Array.isArray(e)?e:[];return Fl("releases",t),{data:t,source:"github"}}catch{const e=Hl("releases");if(e)return{data:e,source:"cache"};const t=await Vd();return{data:t,source:t.length?"fallback":"empty"}}},Kd=async()=>{try{const e=await jl(Gd),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Fl("contributors",t),{data:t,source:"github"}}catch{const e=Hl("contributors");return{data:e||[],source:e?"cache":"empty"}}},is=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Nt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Ul=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Gn=e=>String(e||"").replace(/\r/g,"").trim(),Mt=(e,t=4)=>{const n=Gn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},Cn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},to=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Gl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),Zd={class:"page-shell container"},Jd={class:"page-hero"},Qd={class:"hero-actions"},Yd={class:"stack-section"},Xd={class:"section-head left"},ep={class:"release-hero-grid"},tp={key:0,class:"release-hero-card surface-card"},np={class:"release-head"},sp={class:"release-date"},rp={class:"release-tag"},ip={key:0,class:"bullet-list compact-list"},op={key:1,class:"release-body"},lp={class:"release-actions"},ap=["href"],cp=["href"],up={key:1,class:"release-hero-card surface-card"},fp={class:"release-head"},dp={class:"release-date"},pp={class:"release-tag"},hp={key:0,class:"bullet-list compact-list"},gp={key:1,class:"release-body"},mp={class:"release-actions"},bp=["href"],vp=["href"],_p={key:2,class:"empty-state surface-card"},yp={class:"stack-section surface-card changelog-toolbar"},kp={class:"release-filter-row"},wp={class:"filter-chip-group"},xp=["onClick"],Cp={key:0,class:"stack-section"},Tp={key:1,class:"stack-section release-list-grid"},Rp={class:"release-head"},Sp={class:"release-date"},Ap={class:"release-tag"},Ep={key:0,class:"bullet-list compact-list"},Pp={key:1,class:"release-body"},Ip={key:2,class:"asset-group-list"},$p={key:3,class:"release-asset-list"},Op=["href"],Lp={class:"release-actions"},Mp=["href"],Np={key:2,class:"stack-section"},Dp={__name:"DownloadsPage",setup(e){const t=Se(!0),n=Se([]),s=Se("github"),r=Se("all"),i=Se(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],a=me(()=>Gl(n.value)),l=me(()=>a.value.find(O=>Nt(O)==="stable")||null),u=me(()=>a.value.find(O=>Nt(O)==="preview")||null),c=me(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=O=>{const y=Gn(O).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return y?y.length>140?`${y.slice(0,140)}…`:y:"暂无发布说明。"},p=O=>{const y=m(O);return y.find(S=>Cn(S)==="server")||y[0]||null},m=O=>{const y=Array.isArray(O==null?void 0:O.assets)?[...O.assets]:[],S=["server","archive","source","checksum","metadata","other"];return y.sort((C,A)=>S.indexOf(Cn(C))-S.indexOf(Cn(A))).slice(0,5)},k=O=>{const y=new Map;for(const S of(O==null?void 0:O.assets)||[]){const C=Cn(S),A=y.get(C)||[];A.push(S),y.set(C,A)}return["server","archive","source","checksum","metadata","other"].filter(S=>y.has(S)).map(S=>({type:S,label:to(S),items:y.get(S)}))},T=me(()=>{const O=i.value.toLowerCase();return a.value.filter(y=>{const S=Nt(y);return r.value!=="all"&&S!==r.value?!1:O?[y.name,y.tag_name,Gn(y.body)].filter(Boolean).join(" ").toLowerCase().includes(O):!0})});return en(async()=>{const O=await zl();n.value=O.data,s.value=O.source,t.value=!1}),(O,y)=>{const S=Ht("router-link");return E(),I("div",Zd,[f("section",Jd,[y[4]||(y[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),y[5]||(y[5]=f("h1",null,"下载与版本",-1)),y[6]||(y[6]=f("p",null," 这里直接读取公开仓库 Releases，展示最新正式版、预发布版、附件和更新摘要，不需要你再自己去翻仓库页面。 ",-1)),f("div",Qd,[y[3]||(y[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(S,{class:"button secondary",to:"/docs/quick-start"},{default:Q(()=>[...y[1]||(y[1]=[ie("安装文档",-1)])]),_:1}),j(S,{class:"button ghost",to:"/changelog"},{default:Q(()=>[...y[2]||(y[2]=[ie("查看更新日志",-1)])]),_:1})])]),f("section",Yd,[f("div",Xd,[y[7]||(y[7]=f("h2",null,"最新版本",-1)),f("p",null,$(c.value),1)]),f("div",ep,[l.value?(E(),I("article",tp,[f("div",np,[y[8]||(y[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",sp,$(ge(is)(l.value.published_at)),1)]),f("h3",null,$(l.value.name||l.value.tag_name),1),f("p",rp,$(l.value.tag_name),1),ge(Mt)(l.value.body,4).length?(E(),I("ul",ip,[(E(!0),I(X,null,ke(ge(Mt)(l.value.body,4),C=>(E(),I("li",{key:C},$(C),1))),128))])):(E(),I("p",op,$(d(l.value.body)),1)),f("div",lp,[f("a",{class:"button primary small",href:l.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,ap),p(l.value)?(E(),I("a",{key:0,class:"button secondary small",href:p(l.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+$(p(l.value).name),9,cp)):Qe("",!0)])])):Qe("",!0),u.value?(E(),I("article",up,[f("div",fp,[y[9]||(y[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",dp,$(ge(is)(u.value.published_at)),1)]),f("h3",null,$(u.value.name||u.value.tag_name),1),f("p",pp,$(u.value.tag_name),1),ge(Mt)(u.value.body,4).length?(E(),I("ul",hp,[(E(!0),I(X,null,ke(ge(Mt)(u.value.body,4),C=>(E(),I("li",{key:C},$(C),1))),128))])):(E(),I("p",gp,$(d(u.value.body)),1)),f("div",mp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,bp),p(u.value)?(E(),I("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+$(p(u.value).name),9,vp)):Qe("",!0)])])):Qe("",!0),!l.value&&!u.value?(E(),I("article",_p,[...y[10]||(y[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Qe("",!0)])]),f("section",yp,[y[11]||(y[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",kp,[f("div",wp,[(E(),I(X,null,ke(o,C=>f("button",{key:C.value,class:Ie(["filter-chip",{active:r.value===C.value}]),onClick:A=>r.value=C.value},$(C.label),11,xp)),64))]),Or(f("input",{"onUpdate:modelValue":y[0]||(y[0]=C=>i.value=C),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Br,i.value,void 0,{trim:!0}]])])]),t.value?(E(),I("section",Cp,[...y[12]||(y[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):T.value.length?(E(),I("section",Tp,[(E(!0),I(X,null,ke(T.value,C=>(E(),I("article",{key:C.id||C.tag_name,class:"release-card enhanced-release-card"},[f("div",Rp,[f("span",{class:Ie(["release-badge",{alt:ge(Nt)(C)==="preview"}])},$(ge(Ul)(ge(Nt)(C))),3),f("span",Sp,$(ge(is)(C.published_at)),1)]),f("h3",null,$(C.name||C.tag_name),1),f("p",Ap,$(C.tag_name),1),ge(Mt)(C.body,4).length?(E(),I("ul",Ep,[(E(!0),I(X,null,ke(ge(Mt)(C.body,4),A=>(E(),I("li",{key:A},$(A),1))),128))])):(E(),I("p",Pp,$(d(C.body)),1)),k(C).length?(E(),I("div",Ip,[(E(!0),I(X,null,ke(k(C),A=>(E(),I("div",{key:A.type,class:"asset-group-chip"},[f("strong",null,$(A.label),1),f("span",null,$(A.items.length)+" 个文件",1)]))),128))])):Qe("",!0),C.assets&&C.assets.length?(E(),I("div",$p,[(E(!0),I(X,null,ke(m(C),A=>(E(),I("a",{key:A.id||A.name,class:"release-asset-link",href:A.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,$(A.name),1),f("small",null,$(ge(to)(ge(Cn)(A))),1)],8,Op))),128))])):Qe("",!0),f("div",Lp,[f("a",{class:"button primary small",href:C.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Mp),j(S,{class:"button secondary small",to:"/changelog"},{default:Q(()=>[...y[13]||(y[13]=[ie("看时间线",-1)])]),_:1})])]))),128))])):(E(),I("section",Np,[...y[14]||(y[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),y[15]||(y[15]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},gs=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],fn=gs.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),ql=Object.fromEntries(fn.map(e=>[e.slug,e])),Bp={class:"page-shell container"},Wp={class:"page-hero docs-hero-grid"},Hp={class:"hero-actions"},Fp={class:"stack-section surface-card docs-filter-card"},jp={class:"docs-filter-bar"},zp={class:"section-head left"},Up={class:"feature-grid three"},Gp={class:"card-label"},qp={class:"doc-card-meta"},Vp={key:0,class:"stack-section"},Kp={__name:"DocsPage",setup(e){const t=Se(""),n=me(()=>{const s=t.value.toLowerCase();return s?gs.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):gs});return(s,r)=>{const i=Ht("router-link");return E(),I("div",Bp,[f("section",Wp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档都放在站内。",-1)),r[5]||(r[5]=f("p",null," 现在可以直接在这里看部署、运维、配置、架构和 Web 资源同步文档，不用再跳去 GitHub Markdown 页面。 ",-1)),f("div",Hp,[j(i,{class:"button primary",to:"/docs/quick-start"},{default:Q(()=>[...r[1]||(r[1]=[ie("从快速开始开始",-1)])]),_:1}),j(i,{class:"button secondary",to:"/docs/configuration"},{default:Q(()=>[...r[2]||(r[2]=[ie("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Fp,[f("div",jp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Or(f("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Br,t.value,void 0,{trim:!0}]])])]),(E(!0),I(X,null,ke(n.value,o=>(E(),I("section",{class:"stack-section",key:o.key},[f("div",zp,[f("h2",null,$(o.title),1),f("p",null,$(o.description),1)]),f("div",Up,[(E(!0),I(X,null,ke(o.items,a=>(E(),I("article",{class:"feature-card compact",key:a.slug},[f("span",Gp,$(a.tag),1),f("h3",null,$(a.title),1),f("p",null,$(a.description),1),f("div",qp,[f("span",null,$(o.title),1),f("span",null,$(a.minutes),1)]),j(i,{class:"text-link",to:`/docs/${a.slug}`},{default:Q(()=>[...r[8]||(r[8]=[ie("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Qe("",!0):(E(),I("section",Vp,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Zp=`# Tree 技术文档 / Wiki

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
`,fh=Object.assign({"../../content/docs/README.md":Zp,"../../content/docs/SUMMARY.md":Jp,"../../content/docs/architecture/module-map.md":Qp,"../../content/docs/architecture/system-overview.md":Yp,"../../content/docs/development/web-ui-pipeline.md":Xp,"../../content/docs/getting-started/first-day-checklist.md":eh,"../../content/docs/getting-started/quick-start.md":th,"../../content/docs/getting-started/web-panel.md":nh,"../../content/docs/operations/commands.md":sh,"../../content/docs/operations/diagnostics-and-backups.md":rh,"../../content/docs/operations/fakeplayer-and-redstone.md":ih,"../../content/docs/operations/integrations-and-worlds.md":oh,"../../content/docs/operations/resource-pack.md":lh,"../../content/docs/operations/web-pages-overview.md":ah,"../../content/docs/reference/command-cheatsheet.md":ch,"../../content/docs/reference/configuration.md":uh}),dh="../../content/docs/",ph=Object.fromEntries(Object.entries(fh).map(([e,t])=>[e.replace(dh,""),t]));function Fr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var tn=Fr();function Vl(e){tn=e}var Nn={exec:()=>null};function de(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(De.caret,"$1"),n=n.replace(r,o),s},getRegex:()=>new RegExp(n,t)};return s}var De={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},hh=/^(?:[ \t]*(?:\n|$))+/,gh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,mh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jr=/(?:[*+-]|\d{1,9}[.)])/,Kl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Zl=de(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vh=de(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),zr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_h=/^[^\n]+/,Ur=/(?!\s*\])(?:\\.|[^\[\]\\])+/,yh=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ur).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),kh=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jr).getRegex(),Ms="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Gr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wh=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gr).replace("tag",Ms).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Jl=de(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),xh=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Jl).getRegex(),qr={blockquote:xh,code:gh,def:yh,fences:mh,heading:bh,hr:Zn,html:wh,lheading:Zl,list:kh,newline:hh,paragraph:Jl,table:Nn,text:_h},no=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),Ch={...qr,lheading:vh,table:no,paragraph:de(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",no).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex()},Th={...qr,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Gr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Nn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(zr).replace("hr",Zn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Zl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Sh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ql=/^( {2,}|\\)\n(?!\s*$)/,Ah=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ns=/[\p{P}\p{S}]/u,Vr=/[\s\p{P}\p{S}]/u,Yl=/[^\s\p{P}\p{S}]/u,Eh=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Vr).getRegex(),Xl=/(?!~)[\p{P}\p{S}]/u,Ph=/(?!~)[\s\p{P}\p{S}]/u,Ih=/(?:[^\s\p{P}\p{S}]|~)/u,$h=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ea=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Oh=de(ea,"u").replace(/punct/g,Ns).getRegex(),Lh=de(ea,"u").replace(/punct/g,Xl).getRegex(),ta="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Mh=de(ta,"gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,Vr).replace(/punct/g,Ns).getRegex(),Nh=de(ta,"gu").replace(/notPunctSpace/g,Ih).replace(/punctSpace/g,Ph).replace(/punct/g,Xl).getRegex(),Dh=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,Vr).replace(/punct/g,Ns).getRegex(),Bh=de(/\\(punct)/,"gu").replace(/punct/g,Ns).getRegex(),Wh=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hh=de(Gr).replace("(?:-->|$)","-->").getRegex(),Fh=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ms=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jh=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ms).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),na=de(/^!?\[(label)\]\[(ref)\]/).replace("label",ms).replace("ref",Ur).getRegex(),sa=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ur).getRegex(),zh=de("reflink|nolink(?!\\()","g").replace("reflink",na).replace("nolink",sa).getRegex(),Kr={_backpedal:Nn,anyPunctuation:Bh,autolink:Wh,blockSkip:$h,br:Ql,code:Sh,del:Nn,emStrongLDelim:Oh,emStrongRDelimAst:Mh,emStrongRDelimUnd:Dh,escape:Rh,link:jh,nolink:sa,punctuation:Eh,reflink:na,reflinkSearch:zh,tag:Fh,text:Ah,url:Nn},Uh={...Kr,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",ms).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ms).getRegex()},mr={...Kr,emStrongRDelimAst:Nh,emStrongLDelim:Lh,url:de(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gh={...mr,br:de(Ql).replace("{2,}","*").getRegex(),text:de(mr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xn={normal:qr,gfm:Ch,pedantic:Th},Tn={normal:Kr,gfm:mr,breaks:Gh,pedantic:Uh},qh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},so=e=>qh[e];function at(e,t){if(t){if(De.escapeTest.test(e))return e.replace(De.escapeReplace,so)}else if(De.escapeTestNoEncode.test(e))return e.replace(De.escapeReplaceNoEncode,so);return e}function ro(e){try{e=encodeURI(e).replace(De.percentDecode,"%")}catch{return null}return e}function io(e,t){var i;const n=e.replace(De.findPipe,(o,a,l)=>{let u=!1,c=a;for(;--c>=0&&l[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(De.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(De.slashPipe,"|");return s}function Rn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function Vh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function oo(e,t,n,s,r){const i=t.href,o=t.title||null,a=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}function Kh(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var bs=class{constructor(e){be(this,"options");be(this,"rules");be(this,"lexer");this.options=e||tn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Rn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Kh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Rn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Rn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Rn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let o=!1;const a=[];let l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),o=!0;else if(!o)a.push(n[l]);else break;n=n.slice(l);const u=a.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,k=m.raw+`
`+n.join(`
`),T=this.blockquote(k);i[i.length-1]=T,s=s.substring(0,s.length-m.raw.length)+T.raw,r=r.substring(0,r.length-m.text.length)+T.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,k=m.raw+`
`+n.join(`
`),T=this.list(k);i[i.length-1]=T,s=s.substring(0,s.length-p.raw.length)+T.raw,r=r.substring(0,r.length-m.raw.length)+T.raw,n=k.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let l=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),p=e.split(`
`,1)[0],m=!d.trim(),k=0;if(this.options.pedantic?(k=2,c=d.trimStart()):m?k=t[1].length+1:(k=t[2].search(this.rules.other.nonSpaceChar),k=k>4?1:k,c=d.slice(k),k+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),l=!0),!l){const y=this.rules.other.nextBulletRegex(k),S=this.rules.other.hrRegex(k),C=this.rules.other.fencesBeginRegex(k),A=this.rules.other.headingBeginRegex(k),M=this.rules.other.htmlBeginRegex(k);for(;e;){const D=e.split(`
`,1)[0];let V;if(p=D,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),V=p):V=p.replace(this.rules.other.tabCharGlobal,"    "),C.test(p)||A.test(p)||M.test(p)||y.test(p)||S.test(p))break;if(V.search(this.rules.other.nonSpaceChar)>=k||!p.trim())c+=`
`+V.slice(k);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(d)||A.test(d)||S.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=D+`
`,e=e.substring(D.length+1),d=V.slice(k)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let T=null,O;this.options.gfm&&(T=this.rules.other.listIsTask.exec(c),T&&(O=T[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!T,checked:O,loose:!1,text:c,tokens:[]}),r.raw+=u}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l=0;l<r.items.length;l++)if(this.lexer.state.top=!1,r.items[l].tokens=this.lexer.blockTokens(r.items[l].text,[]),!r.loose){const u=r.items[l].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let l=0;l<r.items.length;l++)r.items[l].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=io(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(const a of r)i.rows.push(io(a,i.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Rn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Vh(t[2],"()");if(i===-2)return;if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),oo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return oo(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let o,a,l=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+a);if(Math.min(i,a)%2){const k=p.slice(1,-1);return{type:"em",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},xt=class br{constructor(t){be(this,"tokens");be(this,"options");be(this,"state");be(this,"tokenizer");be(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||tn,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:De,block:Xn.normal,inline:Tn.normal};this.options.pedantic?(n.block=Xn.pedantic,n.inline=Tn.pedantic):this.options.gfm&&(n.block=Xn.gfm,this.options.breaks?n.inline=Tn.breaks:n.inline=Tn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xn,inline:Tn}}static lex(t,n){return new br(n).lex(t)}static lexInline(t,n){return new br(n).inlineTokens(t)}lex(t){t=t.replace(De.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,o;for(this.options.pedantic&&(t=t.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));t;){let a;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(a=u.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);const u=n.at(-1);a.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=t.substring(0,u+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a),s=l.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var a,l,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let k;this.options.extensions.startInline.forEach(T=>{k=T.call({lexer:this},m),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},vs=class{constructor(e){be(this,"options");be(this,"parser");this.options=e||tn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(De.notSpaceStart))==null?void 0:i[0],r=e.replace(De.endingNewline,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ro(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+at(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=ro(e);if(r===null)return at(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${at(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}},Zr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Ct=class vr{constructor(t){be(this,"options");be(this,"renderer");be(this,"textRenderer");this.options=t||tn,this.options.renderer=this.options.renderer||new vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zr}static parse(t,n){return new vr(n).parse(t)}static parseInline(t,n){return new vr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let o=0;o<t.length;o++){const a=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=a,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const l=a;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let u=l,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let o=0;o<t.length;o++){const a=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=u||"";continue}}const l=a;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},Xs,os=(Xs=class{constructor(e){be(this,"options");be(this,"block");this.options=e||tn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?xt.lex:xt.lexInline}provideParser(){return this.block?Ct.parse:Ct.parseInline}},be(Xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xs),Zh=class{constructor(...e){be(this,"defaults",Fr());be(this,"options",this.setOptions);be(this,"parse",this.parseMarkdown(!0));be(this,"parseInline",this.parseMarkdown(!1));be(this,"Parser",Ct);be(this,"Renderer",vs);be(this,"TextRenderer",Zr);be(this,"Lexer",xt);be(this,"Tokenizer",bs);be(this,"Hooks",os);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const a of o.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of o.rows)for(const l of a)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const l=o[a].flat(1/0);n=n.concat(this.walkTokens(l,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=i.apply(this,o)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new vs(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,a=n.renderer[o],l=r[o];r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new bs(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,a=n.tokenizer[o],l=r[o];r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new os;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,a=n.hooks[o],l=r[o];os.passThroughHooks.has(i)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(d=>l.call(r,d));const c=a.call(r,u);return l.call(r,c)}:r[o]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=l.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let a=[];return a.push(i.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return xt.lex(e,t??this.defaults)}parser(e,t){return Ct.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const a=i.hooks?i.hooks.provideLexer():e?xt.lex:xt.lexInline,l=i.hooks?i.hooks.provideParser():e?Ct.parse:Ct.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=a(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=l(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Yt=new Zh;function ne(e,t){return Yt.parse(e,t)}ne.options=ne.setOptions=function(e){return Yt.setOptions(e),ne.defaults=Yt.defaults,Vl(ne.defaults),ne};ne.getDefaults=Fr;ne.defaults=tn;ne.use=function(...e){return Yt.use(...e),ne.defaults=Yt.defaults,Vl(ne.defaults),ne};ne.walkTokens=function(e,t){return Yt.walkTokens(e,t)};ne.parseInline=Yt.parseInline;ne.Parser=Ct;ne.parser=Ct.parse;ne.Renderer=vs;ne.TextRenderer=Zr;ne.Lexer=xt;ne.lexer=xt.lex;ne.Tokenizer=bs;ne.Hooks=os;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;Ct.parse;xt.lex;const Jh=Object.fromEntries(fn.map(e=>[e.path,e.slug])),Qh=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),Yh=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return Qh(n.join("/"))},Xh=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",ra=()=>{const e=new Map;return t=>{const n=Xh(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},eg=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?Yh(t,s):t;if(i.endsWith(".md")){const o=Jh[i];if(o)return`#/docs/${o}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};ne.setOptions({gfm:!0,breaks:!0});const tg=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const o=eg(i,t,n);return`[${r}](${o})`}),ng=e=>{const t=ne.lexer(String(e||"")),n=ra();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},sg=(e,t,n)=>{const s=new ne.Renderer,r=ra();s.link=({href:o,title:a,tokens:l})=>{const u=ne.Parser.parseInline(l),c=o||"",d=/^https?:\/\//i.test(c),p=a?` title="${a}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:o,title:a,text:l})=>{const u=a?` title="${a}"`:"";return`<img src="${o}" alt="${l||""}"${u} />`},s.heading=({tokens:o,depth:a,text:l})=>{const u=r(l),c=ne.Parser.parseInline(o);return`<h${a} id="${u}" data-doc-heading="${u}">${c}</h${a}>`};const i=tg(e,t,n);return ne.parse(i,{renderer:s})},rg={key:0,class:"docs-article-shell"},ig={class:"doc-breadcrumb"},og={class:"doc-header surface-card"},lg={class:"card-label"},ag={class:"doc-meta"},cg=["innerHTML"],ug={class:"doc-footer surface-card"},fg=["onClick"],dg={key:2,class:"docs-article-shell"},pg={class:"empty-state"},hg={__name:"DocArticlePage",setup(e){const t=Nl(),n=Ff(),s=Se(""),r=Se(null),i=Se(null),o=me(()=>ql[t.params.slug]),a=me(()=>o.value?ph[o.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),l=me(()=>ng(a.value)),u=me(()=>o.value?sg(a.value,o.value.path,o.value.slug):""),c=me(()=>fn.findIndex(M=>{var D;return M.slug===((D=o.value)==null?void 0:D.slug)})),d=me(()=>c.value>0?fn[c.value-1]:null),p=me(()=>c.value>=0&&c.value<fn.length-1?fn[c.value+1]:null),m=(M,D,V)=>{if(!M)return;const se=M.querySelector(D);if(!se)return;const z=M.querySelector(V),Y=((z==null?void 0:z.offsetHeight)||0)+10,le=se.offsetTop,H=le+se.offsetHeight,re=M.scrollTop+Y,Te=M.scrollTop+M.clientHeight-10;le<re?M.scrollTop=Math.max(0,le-Y):H>Te&&(M.scrollTop=H-M.clientHeight+10)},k=()=>{m(r.value,".docs-nav-link.active",".docs-sidebar-head"),m(i.value,".docs-outline-link.active",".docs-outline-head")},T=()=>{const M=l.value.find(D=>{const V=document.getElementById(D.id);if(!V)return!1;const se=V.getBoundingClientRect();return se.top>=0&&se.top<=180});M&&s.value!==M.id&&(s.value=M.id,k())},O=M=>{window.innerWidth<=920||Math.abs(M.deltaY)<Math.abs(M.deltaX)||(M.preventDefault(),window.scrollBy({top:M.deltaY,behavior:"auto"}))},y=()=>{var M,D;(M=r.value)==null||M.addEventListener("wheel",O,{passive:!1}),(D=i.value)==null||D.addEventListener("wheel",O,{passive:!1})},S=()=>{var M,D;(M=r.value)==null||M.removeEventListener("wheel",O),(D=i.value)==null||D.removeEventListener("wheel",O)},C=async M=>{await Kt();const D=document.getElementById(M);D&&(s.value=M,D.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:M}}))},A=async()=>{var D;await Kt();const M=t.query.section?String(t.query.section):"";if(M){const V=document.getElementById(M);if(V){s.value=M,requestAnimationFrame(()=>{V.scrollIntoView({behavior:"smooth",block:"start"}),k()});return}}s.value=((D=l.value[0])==null?void 0:D.id)||"",requestAnimationFrame(k)};return en(async()=>{window.addEventListener("scroll",T,{passive:!0}),await Kt(),y(),k()}),Es(()=>{window.removeEventListener("scroll",T),S()}),Bt([u,()=>t.query.section,()=>t.params.slug],A,{immediate:!0}),Bt([()=>t.params.slug,()=>l.value.length],async()=>{S(),await Kt(),y(),k()}),(M,D)=>{const V=Ht("router-link");return E(),I("div",{class:Ie(["page-shell container docs-layout-page",{"has-outline":l.value.length}])},[f("aside",{ref_key:"sidebarRef",ref:r,class:"docs-sidebar surface-card"},[D[0]||(D[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(E(!0),I(X,null,ke(ge(gs),se=>(E(),I("div",{key:se.key,class:"docs-nav-group"},[f("h3",null,$(se.title),1),(E(!0),I(X,null,ke(se.items,z=>{var Y;return E(),cn(V,{key:z.slug,to:`/docs/${z.slug}`,class:Ie(["docs-nav-link",{active:((Y=o.value)==null?void 0:Y.slug)===z.slug}])},{default:Q(()=>[f("span",null,$(z.title),1),f("small",null,$(z.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))],512),o.value?(E(),I("section",rg,[f("div",ig,[j(V,{to:"/docs"},{default:Q(()=>[...D[1]||(D[1]=[ie("文档首页",-1)])]),_:1}),D[2]||(D[2]=f("span",null,"/",-1)),f("span",null,$(o.value.groupTitle),1)]),f("header",og,[f("div",null,[f("span",lg,$(o.value.tag),1),f("h1",null,$(o.value.title),1),f("p",null,$(o.value.description),1)]),f("div",ag,[f("span",null,$(o.value.groupTitle),1),f("span",null,$(o.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:u.value},null,8,cg),f("footer",ug,[d.value?(E(),cn(V,{key:0,class:"doc-pager",to:`/docs/${d.value.slug}`},{default:Q(()=>[D[3]||(D[3]=f("small",null,"上一篇",-1)),f("strong",null,$(d.value.title),1)]),_:1},8,["to"])):(E(),cn(V,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:Q(()=>[...D[4]||(D[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),p.value?(E(),cn(V,{key:2,class:"doc-pager align-right",to:`/docs/${p.value.slug}`},{default:Q(()=>[D[5]||(D[5]=f("small",null,"下一篇",-1)),f("strong",null,$(p.value.title),1)]),_:1},8,["to"])):Qe("",!0)])])):Qe("",!0),o.value&&l.value.length?(E(),I("aside",{key:1,ref_key:"outlineRef",ref:i,class:"docs-outline surface-card"},[D[6]||(D[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(E(!0),I(X,null,ke(l.value,se=>(E(),I("button",{key:se.id,class:Ie(["docs-outline-link",[`depth-${se.depth}`,{active:s.value===se.id}]]),onClick:z=>C(se.id)},$(se.text),11,fg))),128))],512)):o.value?Qe("",!0):(E(),I("section",dg,[f("div",pg,[D[8]||(D[8]=f("strong",null,"没有找到对应文档。",-1)),D[9]||(D[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),j(V,{class:"button primary",to:"/docs"},{default:Q(()=>[...D[7]||(D[7]=[ie("返回文档首页",-1)])]),_:1})])]))],2)}}},gg={class:"page-shell container"},mg={class:"roadmap-grid"},bg={class:"roadmap-head"},vg={class:"card-label"},_g={class:"roadmap-list"},yg={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(E(),I("div",gg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",mg,[(E(),I(X,null,ke(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",bg,[f("span",vg,$(r.tag),1),f("h2",null,$(r.title),1),f("p",null,$(r.description),1)]),f("div",_g,[(E(!0),I(X,null,ke(r.items,i=>(E(),I("div",{class:"roadmap-item",key:i.title},[f("div",{class:Ie(["roadmap-state",r.stateClass])},$(r.stateLabel),3),f("h3",null,$(i.title),1),f("p",null,$(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},kg={class:"page-shell container"},wg={class:"page-hero"},xg={class:"hero-actions"},Cg={class:"stack-section surface-card changelog-toolbar"},Tg={class:"release-filter-row"},Rg={class:"filter-chip-group"},Sg=["onClick"],Ag={key:0,class:"stack-section"},Eg={key:1,class:"stack-section changelog-timeline"},Pg={class:"timeline-card surface-card"},Ig={class:"release-head"},$g={class:"release-date"},Og={class:"release-tag"},Lg={key:0,class:"bullet-list compact-list"},Mg={key:1,class:"release-body"},Ng={class:"release-actions"},Dg=["href"],Bg={class:"muted"},Wg={key:2,class:"stack-section"},Hg={__name:"ChangelogPage",setup(e){const t=Se(!0),n=Se([]),s=Se("all"),r=Se(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=me(()=>{const a=r.value.toLowerCase();return Gl(n.value).filter(l=>{const u=Nt(l);return s.value!=="all"&&u!==s.value?!1:a?[l.name,l.tag_name,Gn(l.body)].filter(Boolean).join(" ").toLowerCase().includes(a):!0})});return en(async()=>{const a=await zl();n.value=a.data,t.value=!1}),(a,l)=>{const u=Ht("router-link");return E(),I("div",kg,[f("section",wg,[l[3]||(l[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),l[4]||(l[4]=f("h1",null,"更新日志",-1)),l[5]||(l[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",xg,[l[2]||(l[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(u,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...l[1]||(l[1]=[ie("查看下载页",-1)])]),_:1})])]),f("section",Cg,[l[6]||(l[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Tg,[f("div",Rg,[(E(),I(X,null,ke(i,c=>f("button",{key:c.value,class:Ie(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},$(c.label),11,Sg)),64))]),Or(f("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Br,r.value,void 0,{trim:!0}]])])]),t.value?(E(),I("section",Ag,[...l[7]||(l[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(E(),I("section",Eg,[(E(!0),I(X,null,ke(o.value,c=>(E(),I("article",{class:"timeline-item",key:c.id||c.tag_name},[l[8]||(l[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",Pg,[f("div",Ig,[f("span",{class:Ie(["release-badge",{alt:ge(Nt)(c)==="preview"}])},$(ge(Ul)(ge(Nt)(c))),3),f("span",$g,$(ge(is)(c.published_at)),1)]),f("h3",null,$(c.name||c.tag_name),1),f("p",Og,$(c.tag_name),1),ge(Mt)(c.body,5).length?(E(),I("ul",Lg,[(E(!0),I(X,null,ke(ge(Mt)(c.body,5),d=>(E(),I("li",{key:d},$(d),1))),128))])):(E(),I("p",Mg,$(ge(Gn)(c.body)||"暂无发布说明。"),1)),f("div",Ng,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Dg),f("span",Bg,$((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(E(),I("section",Wg,[...l[9]||(l[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Fg={class:"page-shell container"},jg={class:"stack-section"},zg={class:"section-head left"},Ug={key:0,class:"contributor-grid"},Gg=["href"],qg=["src","alt"],Vg={key:1,class:"empty-state"},Kg={__name:"CommunityPage",setup(e){const t=Se([]),n=Se("empty"),s=me(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return en(async()=>{const r=await Kd();t.value=r.data,n.value=r.source}),(r,i)=>(E(),I("div",Fg,[i[2]||(i[2]=pt('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持</h1><p> 如果你想反馈问题、参与讨论、查看贡献者或者先看常见问题，这一页就是对外的统一入口。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",jg,[f("div",zg,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,$(s.value),1)]),t.value.length?(E(),I("div",Ug,[(E(!0),I(X,null,ke(t.value,o=>(E(),I("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login},null,8,qg),f("strong",null,$(o.login),1),f("small",null,$(o.contributions)+" 次公开提交",1)],8,Gg))),128))])):(E(),I("div",Vg,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},Zg=[{path:"/",component:Wd,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:zd,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:Dp,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:Kp,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:hg,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:yg,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:Hg,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:Kg,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],ia=Hf({history:vf("/"),routes:Zg}),oa=Pu(ed);ia.afterEach((e,t)=>{var l,u,c,d;const n="TreeCore 官方网站",s=(l=e.params)!=null&&l.slug?ql[e.params.slug]:null,r=(s==null?void 0:s.title)||((u=e.meta)==null?void 0:u.title),i=(s==null?void 0:s.description)||((c=e.meta)==null?void 0:c.description);document.title=r?`${r} | ${n}`:n;const o=document.querySelector('meta[name="description"]');o&&i&&o.setAttribute("content",i),e.path===t.path&&((d=e.query)==null?void 0:d.section)||window.scrollTo({top:0,behavior:"smooth"})});oa.use(ia);oa.mount("#app");

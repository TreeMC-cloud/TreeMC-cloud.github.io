var ca=Object.defineProperty;var ua=(e,t,n)=>t in e?ca(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>ua(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ve={},pn=[],dt=()=>{},co=()=>!1,ys=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wr=e=>e.startsWith("onUpdate:"),Ae=Object.assign,xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fa=Object.prototype.hasOwnProperty,ue=(e,t)=>fa.call(e,t),K=Array.isArray,hn=e=>Vn(e)==="[object Map]",uo=e=>Vn(e)==="[object Set]",ti=e=>Vn(e)==="[object Date]",J=e=>typeof e=="function",xe=e=>typeof e=="string",ht=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",fo=e=>(fe(e)||J(e))&&J(e.then)&&J(e.catch),po=Object.prototype.toString,Vn=e=>po.call(e),da=e=>Vn(e).slice(8,-1),ho=e=>Vn(e)==="[object Object]",Cr=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},pa=/-\w/g,Je=ks(e=>e.replace(pa,t=>t.slice(1).toUpperCase())),ha=/\B([A-Z])/g,Xt=ks(e=>e.replace(ha,"-$1").toLowerCase()),ws=ks(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bs=ks(e=>e?`on${ws(e)}`:""),Dt=(e,t)=>!Object.is(e,t),ts=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},go=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Tr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ga=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let ni;const xs=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=xe(s)?_a(s):Cs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(xe(e)||fe(e))return e}const ma=/;(?![^(]*\))/g,ba=/:([^]+)/,va=/\/\*[^]*?\*\//g;function _a(e){const t={};return e.replace(va,"").split(ma).forEach(n=>{if(n){const s=n.split(ba);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ie(e){let t="";if(xe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const s=Ie(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ya="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ka=kr(ya);function mo(e){return!!e||e===""}function wa(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Rr(e[s],t[s]);return n}function Rr(e,t){if(e===t)return!0;let n=ti(e),s=ti(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ht(e),s=ht(t),n||s)return e===t;if(n=K(e),s=K(t),n||s)return n&&s?wa(e,t):!1;if(n=fe(e),s=fe(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Rr(e[o],t[o]))return!1}}return String(e)===String(t)}const bo=e=>!!(e&&e.__v_isRef===!0),P=e=>xe(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===po||!J(e.toString))?bo(e)?P(e.value):JSON.stringify(e,vo,2):String(e),vo=(e,t)=>bo(t)?vo(e,t.value):hn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Ws(s,i)+" =>"]=r,n),{})}:uo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ws(n))}:ht(t)?Ws(t):fe(t)&&!K(t)&&!ho(t)?String(t):t,Ws=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class xa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ca(){return je}let ke;const Hs=new WeakSet;class _o{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hs.has(this)&&(Hs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ko(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,si(this),wo(this);const t=ke,n=Ye;ke=this,Ye=!0;try{return this.fn()}finally{xo(this),ke=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Er(t);this.deps=this.depsTail=void 0,si(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nr(this)&&this.run()}get dirty(){return nr(this)}}let yo=0,Pn,In;function ko(e,t=!1){if(e.flags|=8,t){e.next=In,In=e;return}e.next=Pn,Pn=e}function Sr(){yo++}function Ar(){if(--yo>0)return;if(In){let t=In;for(In=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function wo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Er(s),Ta(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function nr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Co(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Co(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Bn)||(e.globalVersion=Bn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!nr(e))))return;e.flags|=2;const t=e.dep,n=ke,s=Ye;ke=e,Ye=!0;try{wo(e);const r=e.fn(e._value);(t.version===0||Dt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ke=n,Ye=s,xo(e),e.flags&=-3}}function Er(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Er(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ta(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const To=[];function Tt(){To.push(Ye),Ye=!1}function Rt(){const e=To.pop();Ye=e===void 0?!0:e}function si(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let Bn=0;class Ra{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!Ye||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Ra(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Ro(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=s)}return n}trigger(t){this.version++,Bn++,this.notify(t)}notify(t){Sr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ar()}}}function Ro(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ro(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const sr=new WeakMap,Jt=Symbol(""),rr=Symbol(""),Wn=Symbol("");function Ee(e,t,n){if(Ye&&ke){let s=sr.get(e);s||sr.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Pr),r.map=s,r.key=n),r.track()}}function kt(e,t,n,s,r,i){const o=sr.get(e);if(!o){Bn++;return}const l=a=>{a&&a.trigger()};if(Sr(),t==="clear")o.forEach(l);else{const a=K(e),u=a&&Cr(n);if(a&&n==="length"){const c=Number(s);o.forEach((d,p)=>{(p==="length"||p===Wn||!ht(p)&&p>=c)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Wn)),t){case"add":a?u&&l(o.get("length")):(l(o.get(Jt)),hn(e)&&l(o.get(rr)));break;case"delete":a||(l(o.get(Jt)),hn(e)&&l(o.get(rr)));break;case"set":hn(e)&&l(o.get(Jt));break}}Ar()}function rn(e){const t=oe(e);return t===e?t:(Ee(t,"iterate",Wn),Ze(e)?t:t.map(et))}function Ts(e){return Ee(e=oe(e),"iterate",Wn),e}function $t(e,t){return St(e)?bn(Qt(e)?et(t):t):et(t)}const Sa={__proto__:null,[Symbol.iterator](){return Fs(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return rn(this).concat(...e.map(t=>K(t)?rn(t):t))},entries(){return Fs(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>$t(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return js(this,"includes",e)},indexOf(...e){return js(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return js(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return ri(this,"reduce",e,t)},reduceRight(e,...t){return ri(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return Fs(this,"values",e=>$t(this,e))}};function Fs(e,t,n){const s=Ts(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Aa=Array.prototype;function mt(e,t,n,s,r,i){const o=Ts(e),l=o!==e&&!Ze(e),a=o[t];if(a!==Aa[t]){const d=a.apply(e,i);return l?et(d):d}let u=n;o!==e&&(l?u=function(d,p){return n.call(this,$t(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=a.call(o,u,s);return l&&r?r(c):c}function ri(e,t,n,s){const r=Ts(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,$t(e,l),a,e)}),r[t](i,...s)}function js(e,t,n){const s=oe(e);Ee(s,"iterate",Wn);const r=s[t](...n);return(r===-1||r===!1)&&Or(n[0])?(n[0]=oe(n[0]),s[t](...n)):r}function kn(e,t,n=[]){Tt(),Sr();const s=oe(e)[t].apply(e,n);return Ar(),Rt(),s}const Ea=kr("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Pa(e){ht(e)||(e=String(e));const t=oe(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ao{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ha:$o:i?Io:Po).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=K(t);if(!r){let a;if(o&&(a=Sa[n]))return a;if(n==="hasOwnProperty")return Pa}const l=Reflect.get(t,n,$e(t)?t:s);if((ht(n)?So.has(n):Ea(n))||(r||Ee(t,"get",n),i))return l;if($e(l)){const a=o&&Cr(n)?l:l.value;return r&&fe(a)?or(a):a}return fe(l)?r?or(l):Rs(l):l}}class Eo extends Ao{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=K(t)&&Cr(n);if(!this._isShallow){const u=St(i);if(!Ze(s)&&!St(s)&&(i=oe(i),s=oe(s)),!o&&$e(i)&&!$e(s))return u||(i.value=s),!0}const l=o?Number(n)<t.length:ue(t,n),a=Reflect.set(t,n,s,$e(t)?t:r);return t===oe(r)&&(l?Dt(s,i)&&kt(t,"set",n,s):kt(t,"add",n,s)),a}deleteProperty(t,n){const s=ue(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&kt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!So.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",K(t)?"length":Jt),Reflect.ownKeys(t)}}class Ia extends Ao{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const $a=new Eo,Oa=new Ia,Ma=new Eo(!0);const ir=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function La(e,t,n){return function(...s){const r=this.__v_raw,i=oe(r),o=hn(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=r[e](...s),c=n?ir:t?bn:et;return!t&&Ee(i,"iterate",a?rr:Jt),Ae(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:l?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function Yn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Na(e,t){const n={get(r){const i=this.__v_raw,o=oe(i),l=oe(r);e||(Dt(r,l)&&Ee(o,"get",r),Ee(o,"get",l));const{has:a}=Qn(o),u=t?ir:e?bn:et;if(a.call(o,r))return u(i.get(r));if(a.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(oe(r),"iterate",Jt),r.size},has(r){const i=this.__v_raw,o=oe(i),l=oe(r);return e||(Dt(r,l)&&Ee(o,"has",r),Ee(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,a=oe(l),u=t?ir:e?bn:et;return!e&&Ee(a,"iterate",Jt),l.forEach((c,d)=>r.call(i,u(c),u(d),o))}};return Ae(n,e?{add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear")}:{add(r){!t&&!Ze(r)&&!St(r)&&(r=oe(r));const i=oe(this);return Qn(i).has.call(i,r)||(i.add(r),kt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!St(i)&&(i=oe(i));const o=oe(this),{has:l,get:a}=Qn(o);let u=l.call(o,r);u||(r=oe(r),u=l.call(o,r));const c=a.call(o,r);return o.set(r,i),u?Dt(i,c)&&kt(o,"set",r,i):kt(o,"add",r,i),this},delete(r){const i=oe(this),{has:o,get:l}=Qn(i);let a=o.call(i,r);a||(r=oe(r),a=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return a&&kt(i,"delete",r,void 0),u},clear(){const r=oe(this),i=r.size!==0,o=r.clear();return i&&kt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=La(r,e,t)}),n}function Ir(e,t){const n=Na(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const Da={get:Ir(!1,!1)},Ba={get:Ir(!1,!0)},Wa={get:Ir(!0,!1)};const Po=new WeakMap,Io=new WeakMap,$o=new WeakMap,Ha=new WeakMap;function Fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ja(e){return e.__v_skip||!Object.isExtensible(e)?0:Fa(da(e))}function Rs(e){return St(e)?e:$r(e,!1,$a,Da,Po)}function Oo(e){return $r(e,!1,Ma,Ba,Io)}function or(e){return $r(e,!0,Oa,Wa,$o)}function $r(e,t,n,s,r){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=ja(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Qt(e){return St(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Or(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function za(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&go(e,"__v_skip",!0),e}const et=e=>fe(e)?Rs(e):e,bn=e=>fe(e)?or(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function Se(e){return Mo(e,!1)}function Ua(e){return Mo(e,!0)}function Mo(e,t){return $e(e)?e:new Ga(e,t)}class Ga{constructor(t,n){this.dep=new Pr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:et(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||St(t);t=s?t:oe(t),Dt(t,n)&&(this._rawValue=t,this._value=s?t:et(t),this.dep.trigger())}}function ge(e){return $e(e)?e.value:e}const qa={get:(e,t,n)=>t==="__v_raw"?e:ge(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Lo(e){return Qt(e)?e:new Proxy(e,qa)}class Va{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Pr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return ko(this,!0),!0}get value(){const t=this.dep.track();return Co(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ka(e,t,n=!1){let s,r;return J(e)?s=e:(s=e.get,r=e.set),new Va(s,r,n)}const Xn={},as=new WeakMap;let qt;function Za(e,t=!1,n=qt){if(n){let s=as.get(n);s||as.set(n,s=[]),s.push(e)}}function Ja(e,t,n=ve){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:a}=n,u=E=>r?E:Ze(E)||r===!1||r===0?wt(E,1):wt(E);let c,d,p,m,k=!1,T=!1;if($e(e)?(d=()=>e.value,k=Ze(e)):Qt(e)?(d=()=>u(e),k=!0):K(e)?(T=!0,k=e.some(E=>Qt(E)||Ze(E)),d=()=>e.map(E=>{if($e(E))return E.value;if(Qt(E))return u(E);if(J(E))return a?a(E,2):E()})):J(e)?t?d=a?()=>a(e,2):e:d=()=>{if(p){Tt();try{p()}finally{Rt()}}const E=qt;qt=c;try{return a?a(e,3,[m]):e(m)}finally{qt=E}}:d=dt,t&&r){const E=d,L=r===!0?1/0:r;d=()=>wt(E(),L)}const O=Ca(),y=()=>{c.stop(),O&&O.active&&xr(O.effects,c)};if(i&&t){const E=t;t=(...L)=>{E(...L),y()}}let S=T?new Array(e.length).fill(Xn):Xn;const C=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const L=c.run();if(r||k||(T?L.some((D,V)=>Dt(D,S[V])):Dt(L,S))){p&&p();const D=qt;qt=c;try{const V=[L,S===Xn?void 0:T&&S[0]===Xn?[]:S,m];S=L,a?a(t,3,V):t(...V)}finally{qt=D}}}else c.run()};return l&&l(C),c=new _o(d),c.scheduler=o?()=>o(C,!1):C,m=E=>Za(E,!1,c),p=c.onStop=()=>{const E=as.get(c);if(E){if(a)a(E,4);else for(const L of E)L();as.delete(c)}},t?s?C(!0):S=c.run():o?o(C.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))wt(e.value,t,n);else if(K(e))for(let s=0;s<e.length;s++)wt(e[s],t,n);else if(uo(e)||hn(e))e.forEach(s=>{wt(s,t,n)});else if(ho(e)){for(const s in e)wt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&wt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kn(e,t,n,s){try{return s?e(...s):e()}catch(r){Ss(r,t,n)}}function tt(e,t,n,s){if(J(e)){const r=Kn(e,t,n,s);return r&&fo(r)&&r.catch(i=>{Ss(i,t,n)}),r}if(K(e)){const r=[];for(let i=0;i<e.length;i++)r.push(tt(e[i],t,n,s));return r}}function Ss(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ve;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,u)===!1)return}l=l.parent}if(i){Tt(),Kn(i,null,10,[e,a,u]),Rt();return}}Qa(e,n,r,s,o)}function Qa(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Le=[];let ct=-1;const gn=[];let Ot=null,ln=0;const No=Promise.resolve();let cs=null;function Kt(e){const t=cs||No;return e?t.then(this?e.bind(this):e):t}function Ya(e){let t=ct+1,n=Le.length;for(;t<n;){const s=t+n>>>1,r=Le[s],i=Hn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Mr(e){if(!(e.flags&1)){const t=Hn(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=Hn(n)?Le.push(e):Le.splice(Ya(t),0,e),e.flags|=1,Do()}}function Do(){cs||(cs=No.then(Wo))}function Xa(e){K(e)?gn.push(...e):Ot&&e.id===-1?Ot.splice(ln+1,0,e):e.flags&1||(gn.push(e),e.flags|=1),Do()}function ii(e,t,n=ct+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Bo(e){if(gn.length){const t=[...new Set(gn)].sort((n,s)=>Hn(n)-Hn(s));if(gn.length=0,Ot){Ot.push(...t);return}for(Ot=t,ln=0;ln<Ot.length;ln++){const n=Ot[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,ln=0}}const Hn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Wo(e){try{for(ct=0;ct<Le.length;ct++){const t=Le[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Le.length;ct++){const t=Le[ct];t&&(t.flags&=-2)}ct=-1,Le.length=0,Bo(),cs=null,(Le.length||gn.length)&&Wo()}}let Ge=null,Ho=null;function us(e){const t=Ge;return Ge=e,Ho=e&&e.type.__scopeId||null,t}function Q(e,t=Ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ps(-1);const i=us(t);let o;try{o=e(...r)}finally{us(i),s._d&&ps(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Lr(e,t){if(Ge===null)return e;const n=Os(Ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,a=ve]=t[r];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&wt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function jt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(Tt(),tt(a,n,8,[e.el,l,e,t]),Rt())}}function ns(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function Xe(e,t,n=!1){const s=kl();if(s||mn){let r=mn?mn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const ec=Symbol.for("v-scx"),tc=()=>Xe(ec);function Bt(e,t,n){return Fo(e,t,n)}function Fo(e,t,n=ve){const{immediate:s,deep:r,flush:i,once:o}=n,l=Ae({},n),a=t&&s||!t&&i!=="post";let u;if(zn){if(i==="sync"){const m=tc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Pe;l.call=(m,k,T)=>tt(m,c,k,T);let d=!1;i==="post"?l.scheduler=m=>{Fe(m,c&&c.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,k)=>{k?m():Mr(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=Ja(e,t,l);return zn&&(u?u.push(p):a&&p()),p}function nc(e,t,n){const s=this.proxy,r=xe(e)?e.includes(".")?jo(s,e):()=>s[e]:e.bind(s,s);let i;J(t)?i=t:(i=t.handler,n=t);const o=Zn(this),l=Fo(r,i.bind(s),n);return o(),l}function jo(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const sc=Symbol("_vte"),zo=e=>e.__isTeleport,ut=Symbol("_leaveCb"),wn=Symbol("_enterCb");function rc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{e.isMounted=!0}),Ps(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],Uo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Go=e=>{const t=e.subTree;return t.component?Go(t.component):t},ic={name:"BaseTransition",props:Uo,setup(e,{slots:t}){const n=kl(),s=rc();return()=>{const r=t.default&&Ko(t.default(),!0);if(!r||!r.length)return;const i=qo(r),o=oe(e),{mode:l}=o;if(s.isLeaving)return zs(i);const a=oi(i);if(!a)return zs(i);let u=lr(a,o,s,n,d=>u=d);a.type!==Ne&&Fn(a,u);let c=n.subTree&&oi(n.subTree);if(c&&c.type!==Ne&&!Vt(c,a)&&Go(n).type!==Ne){let d=lr(c,o,s,n);if(Fn(c,d),l==="out-in"&&a.type!==Ne)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},zs(i);l==="in-out"&&a.type!==Ne?d.delayLeave=(p,m,k)=>{const T=Vo(s,c);T[String(c.key)]=c,p[ut]=()=>{m(),p[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{k(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function qo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ne){t=n;break}}return t}const oc=ic;function Vo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function lr(e,t,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:k,onLeaveCancelled:T,onBeforeAppear:O,onAppear:y,onAfterAppear:S,onAppearCancelled:C}=t,E=String(e.key),L=Vo(n,e),D=(z,Y)=>{z&&tt(z,s,9,Y)},V=(z,Y)=>{const le=Y[1];D(z,Y),K(z)?z.every(H=>H.length<=1)&&le():z.length<=1&&le()},se={mode:o,persisted:l,beforeEnter(z){let Y=a;if(!n.isMounted)if(i)Y=O||a;else return;z[ut]&&z[ut](!0);const le=L[E];le&&Vt(e,le)&&le.el[ut]&&le.el[ut](),D(Y,[z])},enter(z){if(L[E]===e)return;let Y=u,le=c,H=d;if(!n.isMounted)if(i)Y=y||u,le=S||c,H=C||d;else return;let re=!1;z[wn]=ze=>{re||(re=!0,ze?D(H,[z]):D(le,[z]),se.delayedLeave&&se.delayedLeave(),z[wn]=void 0)};const Te=z[wn].bind(null,!1);Y?V(Y,[z,Te]):Te()},leave(z,Y){const le=String(e.key);if(z[wn]&&z[wn](!0),n.isUnmounting)return Y();D(p,[z]);let H=!1;z[ut]=Te=>{H||(H=!0,Y(),Te?D(T,[z]):D(k,[z]),z[ut]=void 0,L[le]===e&&delete L[le])};const re=z[ut].bind(null,!1);L[le]=e,m?V(m,[z,re]):re()},clone(z){const Y=lr(z,t,n,s,r);return r&&r(Y),Y}};return se}function zs(e){if(As(e))return e=Wt(e),e.children=null,e}function oi(e){if(!As(e))return zo(e.type)&&e.children?qo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function Fn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ko(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===X?(o.patchFlag&128&&r++,s=s.concat(Ko(o.children,t,l))):(t||o.type!==Ne)&&s.push(l!=null?Wt(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Zo(e,t){return J(e)?Ae({name:e.name},t,{setup:e}):e}function Jo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function li(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const fs=new WeakMap;function $n(e,t,n,s,r=!1){if(K(e)){e.forEach((T,O)=>$n(T,t&&(K(t)?t[O]:t),n,s,r));return}if(On(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$n(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Os(s.component):s.el,o=r?null:i,{i:l,r:a}=e,u=t&&t.r,c=l.refs===ve?l.refs={}:l.refs,d=l.setupState,p=oe(d),m=d===ve?co:T=>li(c,T)?!1:ue(p,T),k=(T,O)=>!(O&&li(c,O));if(u!=null&&u!==a){if(ai(t),xe(u))c[u]=null,m(u)&&(d[u]=null);else if($e(u)){const T=t;k(u,T.k)&&(u.value=null),T.k&&(c[T.k]=null)}}if(J(a))Kn(a,l,12,[o,c]);else{const T=xe(a),O=$e(a);if(T||O){const y=()=>{if(e.f){const S=T?m(a)?d[a]:c[a]:k()||!e.k?a.value:c[e.k];if(r)K(S)&&xr(S,i);else if(K(S))S.includes(i)||S.push(i);else if(T)c[a]=[i],m(a)&&(d[a]=c[a]);else{const C=[i];k(a,e.k)&&(a.value=C),e.k&&(c[e.k]=C)}}else T?(c[a]=o,m(a)&&(d[a]=o)):O&&(k(a,e.k)&&(a.value=o),e.k&&(c[e.k]=o))};if(o){const S=()=>{y(),fs.delete(e)};S.id=-1,fs.set(e,S),Fe(S,n)}else ai(e),y()}}}function ai(e){const t=fs.get(e);t&&(t.flags|=8,fs.delete(e))}xs().requestIdleCallback;xs().cancelIdleCallback;const On=e=>!!e.type.__asyncLoader,As=e=>e.type.__isKeepAlive;function lc(e,t){Qo(e,"a",t)}function ac(e,t){Qo(e,"da",t)}function Qo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Es(t,s,n),n){let r=n.parent;for(;r&&r.parent;)As(r.parent.vnode)&&cc(s,t,n,r),r=r.parent}}function cc(e,t,n,s){const r=Es(t,e,s,!0);Yo(()=>{xr(s[t],r)},n)}function Es(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Tt();const l=Zn(n),a=tt(t,n,e,o);return l(),Rt(),a});return s?r.unshift(i):r.push(i),i}}const At=e=>(t,n=Pe)=>{(!zn||e==="sp")&&Es(e,(...s)=>t(...s),n)},uc=At("bm"),en=At("m"),fc=At("bu"),dc=At("u"),Ps=At("bum"),Yo=At("um"),pc=At("sp"),hc=At("rtg"),gc=At("rtc");function mc(e,t=Pe){Es("ec",e,t)}const Xo="components";function Ht(e,t){return tl(Xo,e,!0,t)||e}const el=Symbol.for("v-ndc");function bc(e){return xe(e)?tl(Xo,e,!1)||e:e||el}function tl(e,t,n=!0,s=!1){const r=Ge||Pe;if(r){const i=r.type;{const l=tu(i,!1);if(l&&(l===t||l===Je(t)||l===ws(Je(t))))return i}const o=ci(r[e]||i[e],t)||ci(r.appContext[e],t);return!o&&s?i:o}}function ci(e,t){return e&&(e[t]||e[Je(t)]||e[ws(Je(t))])}function _e(e,t,n,s){let r;const i=n,o=K(e);if(o||xe(e)){const l=o&&Qt(e);let a=!1,u=!1;l&&(a=!Ze(e),u=St(e),e=Ts(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(a?u?bn(et(e[c])):et(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(fe(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];r[a]=t(e[c],c,a,i)}}else r=[];return r}const ar=e=>e?wl(e)?Os(e):ar(e.parent):null,Mn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ar(e.parent),$root:e=>ar(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>sl(e),$forceUpdate:e=>e.f||(e.f=()=>{Mr(e.update)}),$nextTick:e=>e.n||(e.n=Kt.bind(e.proxy)),$watch:e=>nc.bind(e)}),Us=(e,t)=>e!==ve&&!e.__isScriptSetup&&ue(e,t),vc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Us(s,t))return o[t]=1,s[t];if(r!==ve&&ue(r,t))return o[t]=2,r[t];if(ue(i,t))return o[t]=3,i[t];if(n!==ve&&ue(n,t))return o[t]=4,n[t];cr&&(o[t]=0)}}const u=Mn[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==ve&&ue(n,t))return o[t]=4,n[t];if(d=a.config.globalProperties,ue(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Us(r,t)?(r[t]=n,!0):s!==ve&&ue(s,t)?(s[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let a;return!!(n[l]||e!==ve&&l[0]!=="$"&&ue(e,l)||Us(t,l)||ue(i,l)||ue(s,l)||ue(Mn,l)||ue(r.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ui(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let cr=!0;function _c(e){const t=sl(e),n=e.proxy,s=e.ctx;cr=!1,t.beforeCreate&&fi(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:k,activated:T,deactivated:O,beforeDestroy:y,beforeUnmount:S,destroyed:C,unmounted:E,render:L,renderTracked:D,renderTriggered:V,errorCaptured:se,serverPrefetch:z,expose:Y,inheritAttrs:le,components:H,directives:re,filters:Te}=t;if(u&&yc(u,s,null),o)for(const he in o){const ae=o[he];J(ae)&&(s[he]=ae.bind(n))}if(r){const he=r.call(n,n);fe(he)&&(e.data=Rs(he))}if(cr=!0,i)for(const he in i){const ae=i[he],gt=J(ae)?ae.bind(n,n):J(ae.get)?ae.get.bind(n,n):dt,Et=!J(ae)&&J(ae.set)?ae.set.bind(n):dt,st=me({get:gt,set:Et});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>st.value,set:Be=>st.value=Be})}if(l)for(const he in l)nl(l[he],s,n,he);if(a){const he=J(a)?a.call(n):a;Reflect.ownKeys(he).forEach(ae=>{ns(ae,he[ae])})}c&&fi(c,e,"c");function Ce(he,ae){K(ae)?ae.forEach(gt=>he(gt.bind(n))):ae&&he(ae.bind(n))}if(Ce(uc,d),Ce(en,p),Ce(fc,m),Ce(dc,k),Ce(lc,T),Ce(ac,O),Ce(mc,se),Ce(gc,D),Ce(hc,V),Ce(Ps,S),Ce(Yo,E),Ce(pc,z),K(Y))if(Y.length){const he=e.exposed||(e.exposed={});Y.forEach(ae=>{Object.defineProperty(he,ae,{get:()=>n[ae],set:gt=>n[ae]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});L&&e.render===dt&&(e.render=L),le!=null&&(e.inheritAttrs=le),H&&(e.components=H),re&&(e.directives=re),z&&Jo(e)}function yc(e,t,n=dt){K(e)&&(e=ur(e));for(const s in e){const r=e[s];let i;fe(r)?"default"in r?i=Xe(r.from||s,r.default,!0):i=Xe(r.from||s):i=Xe(r),$e(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function fi(e,t,n){tt(K(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function nl(e,t,n,s){let r=s.includes(".")?jo(n,s):()=>n[s];if(xe(e)){const i=t[e];J(i)&&Bt(r,i)}else if(J(e))Bt(r,e.bind(n));else if(fe(e))if(K(e))e.forEach(i=>nl(i,t,n,s));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Bt(r,i,e)}}function sl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>ds(a,u,o,!0)),ds(a,t,o)),fe(t)&&i.set(t,a),a}function ds(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&ds(e,i,n,!0),r&&r.forEach(o=>ds(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=kc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const kc={data:di,props:pi,emits:pi,methods:An,computed:An,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:An,directives:An,watch:xc,provide:di,inject:wc};function di(e,t){return t?e?function(){return Ae(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function wc(e,t){return An(ur(e),ur(t))}function ur(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function An(e,t){return e?Ae(Object.create(null),e,t):t}function pi(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Ae(Object.create(null),ui(e),ui(t??{})):t}function xc(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=Oe(e[s],t[s]);return n}function rl(){return{app:null,config:{isNativeTag:co,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cc=0;function Tc(e,t){return function(s,r=null){J(s)||(s=Ae({},s)),r!=null&&!fe(r)&&(r=null);const i=rl(),o=new WeakSet,l=[];let a=!1;const u=i.app={_uid:Cc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:su,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(u,...d)):J(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!a){const m=u._ceVNode||j(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),a=!0,u._container=c,c.__vue_app__=u,Os(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(tt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=mn;mn=u;try{return c()}finally{mn=d}}};return u}}let mn=null;const Rc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Sc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let r=n;const i=t.startsWith("update:"),o=i&&Rc(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>xe(c)?c.trim():c)),o.number&&(r=n.map(Tr)));let l,a=s[l=Bs(t)]||s[l=Bs(Je(t))];!a&&i&&(a=s[l=Bs(Xt(t))]),a&&tt(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(u,e,6,r)}}const Ac=new WeakMap;function il(e,t,n=!1){const s=n?Ac:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!J(e)){const a=u=>{const c=il(u,t,!0);c&&(l=!0,Ae(o,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(fe(e)&&s.set(e,null),null):(K(i)?i.forEach(a=>o[a]=null):Ae(o,i),fe(e)&&s.set(e,o),o)}function Is(e,t){return!e||!ys(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,Xt(t))||ue(e,t))}function hi(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:a,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:k,inheritAttrs:T}=e,O=us(e);let y,S;try{if(n.shapeFlag&4){const E=r||s,L=E;y=ft(u.call(L,E,c,d,m,p,k)),S=l}else{const E=t;y=ft(E.length>1?E(d,{attrs:l,slots:o,emit:a}):E(d,null)),S=t.props?l:Ec(l)}}catch(E){Ln.length=0,Ss(E,e,1),y=j(Ne)}let C=y;if(S&&T!==!1){const E=Object.keys(S),{shapeFlag:L}=C;E.length&&L&7&&(i&&E.some(wr)&&(S=Pc(S,i)),C=Wt(C,S,!1,!0))}return n.dirs&&(C=Wt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Fn(C,n.transition),y=C,us(O),y}const Ec=e=>{let t;for(const n in e)(n==="class"||n==="style"||ys(n))&&((t||(t={}))[n]=e[n]);return t},Pc=(e,t)=>{const n={};for(const s in e)(!wr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ic(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?gi(s,o,u):!!o;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(ol(o,s,p)&&!Is(u,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?gi(s,o,u):!0:!!o;return!1}function gi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(ol(t,e,i)&&!Is(n,i))return!0}return!1}function ol(e,t,n){const s=e[n],r=t[n];return n==="style"&&fe(s)&&fe(r)?!Rr(s,r):s!==r}function $c({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ll={},al=()=>Object.create(ll),cl=e=>Object.getPrototypeOf(e)===ll;function Oc(e,t,n,s=!1){const r={},i=al();e.propsDefaults=Object.create(null),ul(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Oo(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Mc(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=oe(r),[a]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Is(e.emitsOptions,p))continue;const m=t[p];if(a)if(ue(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const k=Je(p);r[k]=fr(a,l,k,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{ul(e,t,r,i)&&(u=!0);let c;for(const d in l)(!t||!ue(t,d)&&((c=Xt(d))===d||!ue(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=fr(a,l,d,void 0,e,!0)):delete r[d]);if(i!==l)for(const d in i)(!t||!ue(t,d))&&(delete i[d],u=!0)}u&&kt(e.attrs,"set","")}function ul(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(En(a))continue;const u=t[a];let c;r&&ue(r,c=Je(a))?!i||!i.includes(c)?n[c]=u:(l||(l={}))[c]=u:Is(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(i){const a=oe(n),u=l||ve;for(let c=0;c<i.length;c++){const d=i[c];n[d]=fr(r,a,d,u[d],e,!ue(u,d))}}return o}function fr(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=ue(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&J(a)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Zn(r);s=u[n]=a.call(null,t),c()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}const Lc=new WeakMap;function fl(e,t,n=!1){const s=n?Lc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!J(e)){const c=d=>{a=!0;const[p,m]=fl(d,t,!0);Ae(o,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return fe(e)&&s.set(e,pn),pn;if(K(i))for(let c=0;c<i.length;c++){const d=Je(i[c]);mi(d)&&(o[d]=ve)}else if(i)for(const c in i){const d=Je(c);if(mi(d)){const p=i[c],m=o[d]=K(p)||J(p)?{type:p}:Ae({},p),k=m.type;let T=!1,O=!0;if(K(k))for(let y=0;y<k.length;++y){const S=k[y],C=J(S)&&S.name;if(C==="Boolean"){T=!0;break}else C==="String"&&(O=!1)}else T=J(k)&&k.name==="Boolean";m[0]=T,m[1]=O,(T||ue(m,"default"))&&l.push(d)}}const u=[o,l];return fe(e)&&s.set(e,u),u}function mi(e){return e[0]!=="$"&&!En(e)}const Nr=e=>e==="_"||e==="_ctx"||e==="$stable",Dr=e=>K(e)?e.map(ft):[ft(e)],Nc=(e,t,n)=>{if(t._n)return t;const s=Q((...r)=>Dr(t(...r)),n);return s._c=!1,s},dl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Nr(r))continue;const i=e[r];if(J(i))t[r]=Nc(r,i,s);else if(i!=null){const o=Dr(i);t[r]=()=>o}}},pl=(e,t)=>{const n=Dr(t);e.slots.default=()=>n},hl=(e,t,n)=>{for(const s in t)(n||!Nr(s))&&(e[s]=t[s])},Dc=(e,t,n)=>{const s=e.slots=al();if(e.vnode.shapeFlag&32){const r=t._;r?(hl(s,t,n),n&&go(s,"_",r,!0)):dl(t,s)}else t&&pl(e,t)},Bc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ve;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:hl(r,t,n):(i=!t.$stable,dl(t,r)),o=t}else t&&(pl(e,t),o={default:1});if(i)for(const l in r)!Nr(l)&&o[l]==null&&delete r[l]},Fe=zc;function Wc(e){return Hc(e)}function Hc(e,t){const n=xs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=dt,insertStaticContent:k}=e,T=(h,g,b,v=null,x=null,_=null,N=void 0,M=null,$=!!g.dynamicChildren)=>{if(h===g)return;h&&!Vt(h,g)&&(v=w(h),Be(h,x,_,!0),h=null),g.patchFlag===-2&&($=!1,g.dynamicChildren=null);const{type:R,ref:q,shapeFlag:W}=g;switch(R){case $s:O(h,g,b,v);break;case Ne:y(h,g,b,v);break;case ss:h==null&&S(g,b,v,N);break;case X:H(h,g,b,v,x,_,N,M,$);break;default:W&1?L(h,g,b,v,x,_,N,M,$):W&6?re(h,g,b,v,x,_,N,M,$):(W&64||W&128)&&R.process(h,g,b,v,x,_,N,M,$,U)}q!=null&&x?$n(q,h&&h.ref,_,g||h,!g):q==null&&h&&h.ref!=null&&$n(h.ref,null,_,h,!0)},O=(h,g,b,v)=>{if(h==null)s(g.el=l(g.children),b,v);else{const x=g.el=h.el;g.children!==h.children&&u(x,g.children)}},y=(h,g,b,v)=>{h==null?s(g.el=a(g.children||""),b,v):g.el=h.el},S=(h,g,b,v)=>{[h.el,h.anchor]=k(h.children,g,b,v,h.el,h.anchor)},C=({el:h,anchor:g},b,v)=>{let x;for(;h&&h!==g;)x=p(h),s(h,b,v),h=x;s(g,b,v)},E=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},L=(h,g,b,v,x,_,N,M,$)=>{if(g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),h==null)D(g,b,v,x,_,N,M,$);else{const R=h.el&&h.el._isVueCE?h.el:null;try{R&&R._beginPatch(),z(h,g,x,_,N,M,$)}finally{R&&R._endPatch()}}},D=(h,g,b,v,x,_,N,M)=>{let $,R;const{props:q,shapeFlag:W,transition:G,dirs:Z}=h;if($=h.el=o(h.type,_,q&&q.is,q),W&8?c($,h.children):W&16&&se(h.children,$,null,v,x,Gs(h,_),N,M),Z&&jt(h,null,v,"created"),V($,h,h.scopeId,N,v),q){for(const ye in q)ye!=="value"&&!En(ye)&&i($,ye,null,q[ye],_,v);"value"in q&&i($,"value",null,q.value,_),(R=q.onVnodeBeforeMount)&&lt(R,v,h)}Z&&jt(h,null,v,"beforeMount");const te=Fc(x,G);te&&G.beforeEnter($),s($,g,b),((R=q&&q.onVnodeMounted)||te||Z)&&Fe(()=>{R&&lt(R,v,h),te&&G.enter($),Z&&jt(h,null,v,"mounted")},x)},V=(h,g,b,v,x)=>{if(b&&m(h,b),v)for(let _=0;_<v.length;_++)m(h,v[_]);if(x){let _=x.subTree;if(g===_||vl(_.type)&&(_.ssContent===g||_.ssFallback===g)){const N=x.vnode;V(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},se=(h,g,b,v,x,_,N,M,$=0)=>{for(let R=$;R<h.length;R++){const q=h[R]=M?yt(h[R]):ft(h[R]);T(null,q,g,b,v,x,_,N,M)}},z=(h,g,b,v,x,_,N)=>{const M=g.el=h.el;let{patchFlag:$,dynamicChildren:R,dirs:q}=g;$|=h.patchFlag&16;const W=h.props||ve,G=g.props||ve;let Z;if(b&&zt(b,!1),(Z=G.onVnodeBeforeUpdate)&&lt(Z,b,g,h),q&&jt(g,h,b,"beforeUpdate"),b&&zt(b,!0),(W.innerHTML&&G.innerHTML==null||W.textContent&&G.textContent==null)&&c(M,""),R?Y(h.dynamicChildren,R,M,b,v,Gs(g,x),_):N||ae(h,g,M,null,b,v,Gs(g,x),_,!1),$>0){if($&16)le(M,W,G,b,x);else if($&2&&W.class!==G.class&&i(M,"class",null,G.class,x),$&4&&i(M,"style",W.style,G.style,x),$&8){const te=g.dynamicProps;for(let ye=0;ye<te.length;ye++){const pe=te[ye],We=W[pe],He=G[pe];(He!==We||pe==="value")&&i(M,pe,We,He,x,b)}}$&1&&h.children!==g.children&&c(M,g.children)}else!N&&R==null&&le(M,W,G,b,x);((Z=G.onVnodeUpdated)||q)&&Fe(()=>{Z&&lt(Z,b,g,h),q&&jt(g,h,b,"updated")},v)},Y=(h,g,b,v,x,_,N)=>{for(let M=0;M<g.length;M++){const $=h[M],R=g[M],q=$.el&&($.type===X||!Vt($,R)||$.shapeFlag&198)?d($.el):b;T($,R,q,null,v,x,_,N,!0)}},le=(h,g,b,v,x)=>{if(g!==b){if(g!==ve)for(const _ in g)!En(_)&&!(_ in b)&&i(h,_,g[_],null,x,v);for(const _ in b){if(En(_))continue;const N=b[_],M=g[_];N!==M&&_!=="value"&&i(h,_,M,N,x,v)}"value"in b&&i(h,"value",g.value,b.value,x)}},H=(h,g,b,v,x,_,N,M,$)=>{const R=g.el=h?h.el:l(""),q=g.anchor=h?h.anchor:l("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:Z}=g;Z&&(M=M?M.concat(Z):Z),h==null?(s(R,b,v),s(q,b,v),se(g.children||[],b,q,x,_,N,M,$)):W>0&&W&64&&G&&h.dynamicChildren&&h.dynamicChildren.length===G.length?(Y(h.dynamicChildren,G,b,x,_,N,M),(g.key!=null||x&&g===x.subTree)&&gl(h,g,!0)):ae(h,g,b,q,x,_,N,M,$)},re=(h,g,b,v,x,_,N,M,$)=>{g.slotScopeIds=M,h==null?g.shapeFlag&512?x.ctx.activate(g,b,v,N,$):Te(g,b,v,x,_,N,$):ze(h,g,$)},Te=(h,g,b,v,x,_,N)=>{const M=h.component=Jc(h,v,x);if(As(h)&&(M.ctx.renderer=U),Qc(M,!1,N),M.asyncDep){if(x&&x.registerDep(M,Ce,N),!h.el){const $=M.subTree=j(Ne);y(null,$,g,b),h.placeholder=$.el}}else Ce(M,h,g,b,x,_,N)},ze=(h,g,b)=>{const v=g.component=h.component;if(Ic(h,g,b))if(v.asyncDep&&!v.asyncResolved){he(v,g,b);return}else v.next=g,v.update();else g.el=h.el,v.vnode=g},Ce=(h,g,b,v,x,_,N)=>{const M=()=>{if(h.isMounted){let{next:W,bu:G,u:Z,parent:te,vnode:ye}=h;{const it=ml(h);if(it){W&&(W.el=ye.el,he(h,W,N)),it.asyncDep.then(()=>{Fe(()=>{h.isUnmounted||R()},x)});return}}let pe=W,We;zt(h,!1),W?(W.el=ye.el,he(h,W,N)):W=ye,G&&ts(G),(We=W.props&&W.props.onVnodeBeforeUpdate)&&lt(We,te,W,ye),zt(h,!0);const He=hi(h),rt=h.subTree;h.subTree=He,T(rt,He,d(rt.el),w(rt),h,x,_),W.el=He.el,pe===null&&$c(h,He.el),Z&&Fe(Z,x),(We=W.props&&W.props.onVnodeUpdated)&&Fe(()=>lt(We,te,W,ye),x)}else{let W;const{el:G,props:Z}=g,{bm:te,m:ye,parent:pe,root:We,type:He}=h,rt=On(g);zt(h,!1),te&&ts(te),!rt&&(W=Z&&Z.onVnodeBeforeMount)&&lt(W,pe,g),zt(h,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(He);const it=h.subTree=hi(h);T(null,it,b,v,h,x,_),g.el=it.el}if(ye&&Fe(ye,x),!rt&&(W=Z&&Z.onVnodeMounted)){const it=g;Fe(()=>lt(W,pe,it),x)}(g.shapeFlag&256||pe&&On(pe.vnode)&&pe.vnode.shapeFlag&256)&&h.a&&Fe(h.a,x),h.isMounted=!0,g=b=v=null}};h.scope.on();const $=h.effect=new _o(M);h.scope.off();const R=h.update=$.run.bind($),q=h.job=$.runIfDirty.bind($);q.i=h,q.id=h.uid,$.scheduler=()=>Mr(q),zt(h,!0),R()},he=(h,g,b)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,Mc(h,g.props,v,b),Bc(h,g.children,b),Tt(),ii(h),Rt()},ae=(h,g,b,v,x,_,N,M,$=!1)=>{const R=h&&h.children,q=h?h.shapeFlag:0,W=g.children,{patchFlag:G,shapeFlag:Z}=g;if(G>0){if(G&128){Et(R,W,b,v,x,_,N,M,$);return}else if(G&256){gt(R,W,b,v,x,_,N,M,$);return}}Z&8?(q&16&&Ve(R,x,_),W!==R&&c(b,W)):q&16?Z&16?Et(R,W,b,v,x,_,N,M,$):Ve(R,x,_,!0):(q&8&&c(b,""),Z&16&&se(W,b,v,x,_,N,M,$))},gt=(h,g,b,v,x,_,N,M,$)=>{h=h||pn,g=g||pn;const R=h.length,q=g.length,W=Math.min(R,q);let G;for(G=0;G<W;G++){const Z=g[G]=$?yt(g[G]):ft(g[G]);T(h[G],Z,b,null,x,_,N,M,$)}R>q?Ve(h,x,_,!0,!1,W):se(g,b,v,x,_,N,M,$,W)},Et=(h,g,b,v,x,_,N,M,$)=>{let R=0;const q=g.length;let W=h.length-1,G=q-1;for(;R<=W&&R<=G;){const Z=h[R],te=g[R]=$?yt(g[R]):ft(g[R]);if(Vt(Z,te))T(Z,te,b,null,x,_,N,M,$);else break;R++}for(;R<=W&&R<=G;){const Z=h[W],te=g[G]=$?yt(g[G]):ft(g[G]);if(Vt(Z,te))T(Z,te,b,null,x,_,N,M,$);else break;W--,G--}if(R>W){if(R<=G){const Z=G+1,te=Z<q?g[Z].el:v;for(;R<=G;)T(null,g[R]=$?yt(g[R]):ft(g[R]),b,te,x,_,N,M,$),R++}}else if(R>G)for(;R<=W;)Be(h[R],x,_,!0),R++;else{const Z=R,te=R,ye=new Map;for(R=te;R<=G;R++){const Ue=g[R]=$?yt(g[R]):ft(g[R]);Ue.key!=null&&ye.set(Ue.key,R)}let pe,We=0;const He=G-te+1;let rt=!1,it=0;const yn=new Array(He);for(R=0;R<He;R++)yn[R]=0;for(R=Z;R<=W;R++){const Ue=h[R];if(We>=He){Be(Ue,x,_,!0);continue}let ot;if(Ue.key!=null)ot=ye.get(Ue.key);else for(pe=te;pe<=G;pe++)if(yn[pe-te]===0&&Vt(Ue,g[pe])){ot=pe;break}ot===void 0?Be(Ue,x,_,!0):(yn[ot-te]=R+1,ot>=it?it=ot:rt=!0,T(Ue,g[ot],b,null,x,_,N,M,$),We++)}const Yr=rt?jc(yn):pn;for(pe=Yr.length-1,R=He-1;R>=0;R--){const Ue=te+R,ot=g[Ue],Xr=g[Ue+1],ei=Ue+1<q?Xr.el||bl(Xr):v;yn[R]===0?T(null,ot,b,ei,x,_,N,M,$):rt&&(pe<0||R!==Yr[pe]?st(ot,b,ei,2):pe--)}}},st=(h,g,b,v,x=null)=>{const{el:_,type:N,transition:M,children:$,shapeFlag:R}=h;if(R&6){st(h.component.subTree,g,b,v);return}if(R&128){h.suspense.move(g,b,v);return}if(R&64){N.move(h,g,b,U);return}if(N===X){s(_,g,b);for(let W=0;W<$.length;W++)st($[W],g,b,v);s(h.anchor,g,b);return}if(N===ss){C(h,g,b);return}if(v!==2&&R&1&&M)if(v===0)M.beforeEnter(_),s(_,g,b),Fe(()=>M.enter(_),x);else{const{leave:W,delayLeave:G,afterLeave:Z}=M,te=()=>{h.ctx.isUnmounted?r(_):s(_,g,b)},ye=()=>{_._isLeaving&&_[ut](!0),W(_,()=>{te(),Z&&Z()})};G?G(_,te,ye):ye()}else s(_,g,b)},Be=(h,g,b,v=!1,x=!1)=>{const{type:_,props:N,ref:M,children:$,dynamicChildren:R,shapeFlag:q,patchFlag:W,dirs:G,cacheIndex:Z}=h;if(W===-2&&(x=!1),M!=null&&(Tt(),$n(M,null,b,h,!0),Rt()),Z!=null&&(g.renderCache[Z]=void 0),q&256){g.ctx.deactivate(h);return}const te=q&1&&G,ye=!On(h);let pe;if(ye&&(pe=N&&N.onVnodeBeforeUnmount)&&lt(pe,g,h),q&6)Ft(h.component,b,v);else{if(q&128){h.suspense.unmount(b,v);return}te&&jt(h,null,g,"beforeUnmount"),q&64?h.type.remove(h,g,b,U,v):R&&!R.hasOnce&&(_!==X||W>0&&W&64)?Ve(R,g,b,!1,!0):(_===X&&W&384||!x&&q&16)&&Ve($,g,b),v&&nn(h)}(ye&&(pe=N&&N.onVnodeUnmounted)||te)&&Fe(()=>{pe&&lt(pe,g,h),te&&jt(h,null,g,"unmounted")},b)},nn=h=>{const{type:g,el:b,anchor:v,transition:x}=h;if(g===X){sn(b,v);return}if(g===ss){E(h);return}const _=()=>{r(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:M}=x,$=()=>N(b,_);M?M(h.el,_,$):$()}else _()},sn=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},Ft=(h,g,b)=>{const{bum:v,scope:x,job:_,subTree:N,um:M,m:$,a:R}=h;bi($),bi(R),v&&ts(v),x.stop(),_&&(_.flags|=8,Be(N,h,g,b)),M&&Fe(M,g),Fe(()=>{h.isUnmounted=!0},g)},Ve=(h,g,b,v=!1,x=!1,_=0)=>{for(let N=_;N<h.length;N++)Be(h[N],g,b,v,x)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[sc];return b?p(b):g};let F=!1;const B=(h,g,b)=>{let v;h==null?g._vnode&&(Be(g._vnode,null,null,!0),v=g._vnode.component):T(g._vnode||null,h,g,null,null,null,b),g._vnode=h,F||(F=!0,ii(v),Bo(),F=!1)},U={p:T,um:Be,m:st,r:nn,mt:Te,mc:se,pc:ae,pbc:Y,n:w,o:e};return{render:B,hydrate:void 0,createApp:Tc(B)}}function Gs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gl(e,t,n=!1){const s=e.children,r=t.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=yt(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&gl(o,l)),l.type===$s&&(l.patchFlag===-1&&(l=r[i]=yt(l)),l.el=o.el),l.type===Ne&&!l.el&&(l.el=o.el)}}function jc(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ml(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ml(t)}function bi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function bl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?bl(t.subTree):null}const vl=e=>e.__isSuspense;function zc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Xa(e)}const X=Symbol.for("v-fgt"),$s=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),ss=Symbol.for("v-stc"),Ln=[];let qe=null;function A(e=!1){Ln.push(qe=e?null:[])}function Uc(){Ln.pop(),qe=Ln[Ln.length-1]||null}let jn=1;function ps(e,t=!1){jn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function _l(e){return e.dynamicChildren=jn>0?qe||pn:null,Uc(),jn>0&&qe&&qe.push(e),e}function I(e,t,n,s,r,i){return _l(f(e,t,n,s,r,i,!0))}function un(e,t,n,s,r){return _l(j(e,t,n,s,r,!0))}function hs(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const yl=({key:e})=>e??null,rs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||J(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===X?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yl(t),ref:t&&rs(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return l?(Br(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=xe(n)?8:16),jn>0&&!o&&qe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&qe.push(a),a}const j=Gc;function Gc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===el)&&(e=Ne),hs(e)){const l=Wt(e,t,!0);return n&&Br(l,n),jn>0&&!i&&qe&&(l.shapeFlag&6?qe[qe.indexOf(e)]=l:qe.push(l)),l.patchFlag=-2,l}if(nu(e)&&(e=e.__vccOpts),t){t=qc(t);let{class:l,style:a}=t;l&&!xe(l)&&(t.class=Ie(l)),fe(a)&&(Or(a)&&!K(a)&&(a=Ae({},a)),t.style=Cs(a))}const o=xe(e)?1:vl(e)?128:zo(e)?64:fe(e)?4:J(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function qc(e){return e?Or(e)||cl(e)?Ae({},e):e:null}function Wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:a}=e,u=t?Vc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&yl(u),ref:t&&t.ref?n&&i?K(i)?i.concat(rs(t)):[i,rs(t)]:rs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Fn(c,a.clone(c)),c}function ie(e=" ",t=0){return j($s,null,e,t)}function pt(e,t){const n=j(ss,null,e);return n.staticCount=t,n}function Qe(e="",t=!1){return t?(A(),un(Ne,null,e)):j(Ne,null,e)}function ft(e){return e==null||typeof e=="boolean"?j(Ne):K(e)?j(X,null,e.slice()):hs(e)?yt(e):j($s,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function Br(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Br(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!cl(t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[ie(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ie([t.class,s.class]));else if(r==="style")t.style=Cs([t.style,s.style]);else if(ys(r)){const i=t[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function lt(e,t,n,s=null){tt(e,t,7,[n,s])}const Kc=rl();let Zc=0;function Jc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Kc,i={uid:Zc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fl(s,r),emitsOptions:il(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const kl=()=>Pe||Ge;let gs,dr;{const e=xs(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};gs=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),dr=t("__VUE_SSR_SETTERS__",n=>zn=n)}const Zn=e=>{const t=Pe;return gs(e),e.scope.on(),()=>{e.scope.off(),gs(t)}},vi=()=>{Pe&&Pe.scope.off(),gs(null)};function wl(e){return e.vnode.shapeFlag&4}let zn=!1;function Qc(e,t=!1,n=!1){t&&dr(t);const{props:s,children:r}=e.vnode,i=wl(e);Oc(e,s,i,t),Dc(e,r,n||t);const o=i?Yc(e,t):void 0;return t&&dr(!1),o}function Yc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vc);const{setup:s}=n;if(s){Tt();const r=e.setupContext=s.length>1?eu(e):null,i=Zn(e),o=Kn(s,e,0,[e.props,r]),l=fo(o);if(Rt(),i(),(l||e.sp)&&!On(e)&&Jo(e),l){if(o.then(vi,vi),t)return o.then(a=>{_i(e,a)}).catch(a=>{Ss(a,e,0)});e.asyncDep=o}else _i(e,o)}else xl(e)}function _i(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Lo(t)),xl(e)}function xl(e,t,n){const s=e.type;e.render||(e.render=s.render||dt);{const r=Zn(e);Tt();try{_c(e)}finally{Rt(),r()}}}const Xc={get(e,t){return Ee(e,"get",""),e[t]}};function eu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Xc),slots:e.slots,emit:e.emit,expose:t}}function Os(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Lo(za(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mn)return Mn[n](e)},has(t,n){return n in t||n in Mn}})):e.proxy}function tu(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function nu(e){return J(e)&&"__vccOpts"in e}const me=(e,t)=>Ka(e,t,zn);function Wr(e,t,n){try{ps(-1);const s=arguments.length;return s===2?fe(t)&&!K(t)?hs(t)?j(e,null,[t]):j(e,t):j(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hs(n)&&(n=[n]),j(e,t,n))}finally{ps(1)}}const su="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pr;const yi=typeof window<"u"&&window.trustedTypes;if(yi)try{pr=yi.createPolicy("vue",{createHTML:e=>e})}catch{}const Cl=pr?e=>pr.createHTML(e):e=>e,ru="http://www.w3.org/2000/svg",iu="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,ki=_t&&_t.createElement("template"),ou={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?_t.createElementNS(ru,e):t==="mathml"?_t.createElementNS(iu,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ki.innerHTML=Cl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=ki.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",xn="animation",Un=Symbol("_vtc"),Tl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lu=Ae({},Uo,Tl),au=e=>(e.displayName="Transition",e.props=lu,e),cu=au((e,{slots:t})=>Wr(oc,uu(e),t)),Ut=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},wi=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function uu(e){const t={};for(const H in e)H in Tl||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,k=fu(r),T=k&&k[0],O=k&&k[1],{onBeforeEnter:y,onEnter:S,onEnterCancelled:C,onLeave:E,onLeaveCancelled:L,onBeforeAppear:D=y,onAppear:V=S,onAppearCancelled:se=C}=t,z=(H,re,Te,ze)=>{H._enterCancelled=ze,Gt(H,re?c:l),Gt(H,re?u:o),Te&&Te()},Y=(H,re)=>{H._isLeaving=!1,Gt(H,d),Gt(H,m),Gt(H,p),re&&re()},le=H=>(re,Te)=>{const ze=H?V:S,Ce=()=>z(re,H,Te);Ut(ze,[re,Ce]),xi(()=>{Gt(re,H?a:i),bt(re,H?c:l),wi(ze)||Ci(re,s,T,Ce)})};return Ae(t,{onBeforeEnter(H){Ut(y,[H]),bt(H,i),bt(H,o)},onBeforeAppear(H){Ut(D,[H]),bt(H,a),bt(H,u)},onEnter:le(!1),onAppear:le(!0),onLeave(H,re){H._isLeaving=!0;const Te=()=>Y(H,re);bt(H,d),H._enterCancelled?(bt(H,p),Si(H)):(Si(H),bt(H,p)),xi(()=>{H._isLeaving&&(Gt(H,d),bt(H,m),wi(E)||Ci(H,s,O,Te))}),Ut(E,[H,Te])},onEnterCancelled(H){z(H,!1,void 0,!0),Ut(C,[H])},onAppearCancelled(H){z(H,!0,void 0,!0),Ut(se,[H])},onLeaveCancelled(H){Y(H),Ut(L,[H])}})}function fu(e){if(e==null)return null;if(fe(e))return[qs(e.enter),qs(e.leave)];{const t=qs(e);return[t,t]}}function qs(e){return ga(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Un]||(e[Un]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Un];n&&(n.delete(t),n.size||(e[Un]=void 0))}function xi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let du=0;function Ci(e,t,n,s){const r=e._endId=++du,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=pu(e,t);if(!o)return s();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,p)}function pu(e,t){const n=window.getComputedStyle(e),s=k=>(n[k]||"").split(", "),r=s(`${Pt}Delay`),i=s(`${Pt}Duration`),o=Ti(r,i),l=s(`${xn}Delay`),a=s(`${xn}Duration`),u=Ti(l,a);let c=null,d=0,p=0;t===Pt?o>0&&(c=Pt,d=o,p=i.length):t===xn?u>0&&(c=xn,d=u,p=a.length):(d=Math.max(o,u),c=d>0?o>u?Pt:xn:null,p=c?c===Pt?i.length:a.length:0);const m=c===Pt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Pt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function Ti(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ri(n)+Ri(e[s])))}function Ri(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Si(e){return(e?e.ownerDocument:document).body.offsetHeight}function hu(e,t,n){const s=e[Un];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ai=Symbol("_vod"),gu=Symbol("_vsh"),mu=Symbol(""),bu=/(?:^|;)\s*display\s*:/;function vu(e,t,n){const s=e.style,r=xe(n);let i=!1;if(n&&!r){if(t)if(xe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&is(s,l,"")}else for(const o in t)n[o]==null&&is(s,o,"");for(const o in n)o==="display"&&(i=!0),is(s,o,n[o])}else if(r){if(t!==n){const o=s[mu];o&&(n+=";"+o),s.cssText=n,i=bu.test(n)}}else t&&e.removeAttribute("style");Ai in e&&(e[Ai]=i?s.display:"",e[gu]&&(s.display="none"))}const Ei=/\s*!important$/;function is(e,t,n){if(K(n))n.forEach(s=>is(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=_u(e,t);Ei.test(n)?e.setProperty(Xt(s),n.replace(Ei,""),"important"):e[s]=n}}const Pi=["Webkit","Moz","ms"],Vs={};function _u(e,t){const n=Vs[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return Vs[t]=s;s=ws(s);for(let r=0;r<Pi.length;r++){const i=Pi[r]+s;if(i in e)return Vs[t]=i}return t}const Ii="http://www.w3.org/1999/xlink";function $i(e,t,n,s,r,i=ka(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,n):n==null||i&&!mo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ht(n)?String(n):n)}function Oi(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Cl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=mo(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function an(e,t,n,s){e.addEventListener(t,n,s)}function yu(e,t,n,s){e.removeEventListener(t,n,s)}const Mi=Symbol("_vei");function ku(e,t,n,s,r=null){const i=e[Mi]||(e[Mi]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=wu(t);if(s){const u=i[t]=Tu(s,r);an(e,l,u,a)}else o&&(yu(e,l,o,a),i[t]=void 0)}}const Li=/(?:Once|Passive|Capture)$/;function wu(e){let t;if(Li.test(e)){t={};let s;for(;s=e.match(Li);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let Ks=0;const xu=Promise.resolve(),Cu=()=>Ks||(xu.then(()=>Ks=0),Ks=Date.now());function Tu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Ru(s,n.value),t,5,[s])};return n.value=e,n.attached=Cu(),n}function Ru(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Su=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?hu(e,s,o):t==="style"?vu(e,n,s):ys(t)?wr(t)||ku(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Au(e,t,s,o))?(Oi(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&$i(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(s))?Oi(e,Je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),$i(e,t,s,o))};function Au(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ni(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ni(t)&&xe(n)?!1:t in e}const Di=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>ts(t,n):t};function Eu(e){e.target.composing=!0}function Bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zs=Symbol("_assign");function Wi(e,t,n){return t&&(e=e.trim()),n&&(e=Tr(e)),e}const Hr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Zs]=Di(r);const i=s||r.props&&r.props.type==="number";an(e,t?"change":"input",o=>{o.target.composing||e[Zs](Wi(e.value,n,i))}),(n||i)&&an(e,"change",()=>{e.value=Wi(e.value,n,i)}),t||(an(e,"compositionstart",Eu),an(e,"compositionend",Bi),an(e,"change",Bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Zs]=Di(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Tr(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a))}},Pu=Ae({patchProp:Su},ou);let Hi;function Iu(){return Hi||(Hi=Wc(Pu))}const $u=(...e)=>{const t=Iu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Mu(s);if(!r)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Ou(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ou(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Mu(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const cn=typeof document<"u";function Rl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Rl(e.default)}const ce=Object.assign;function Js(e,t){const n={};for(const s in t){const r=t[s];n[s]=nt(r)?r.map(e):e(r)}return n}const Nn=()=>{},nt=Array.isArray;function Fi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Sl=/#/g,Nu=/&/g,Du=/\//g,Bu=/=/g,Wu=/\?/g,Al=/\+/g,Hu=/%5B/g,Fu=/%5D/g,El=/%5E/g,ju=/%60/g,Pl=/%7B/g,zu=/%7C/g,Il=/%7D/g,Uu=/%20/g;function Fr(e){return e==null?"":encodeURI(""+e).replace(zu,"|").replace(Hu,"[").replace(Fu,"]")}function Gu(e){return Fr(e).replace(Pl,"{").replace(Il,"}").replace(El,"^")}function hr(e){return Fr(e).replace(Al,"%2B").replace(Uu,"+").replace(Sl,"%23").replace(Nu,"%26").replace(ju,"`").replace(Pl,"{").replace(Il,"}").replace(El,"^")}function qu(e){return hr(e).replace(Bu,"%3D")}function Vu(e){return Fr(e).replace(Sl,"%23").replace(Wu,"%3F")}function Ku(e){return Vu(e).replace(Du,"%2F")}function Gn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zu=/\/$/,Ju=e=>e.replace(Zu,"");function Qs(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(s=t.slice(0,a),i=t.slice(a,l>0?l:t.length),r=e(i.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=ef(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Gn(o)}}function Qu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ji(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&vn(t.matched[s],n.matched[r])&&$l(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $l(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Xu(e[n],t[n]))return!1;return!0}function Xu(e,t){return nt(e)?zi(e,t):nt(t)?zi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function zi(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function ef(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gr=function(e){return e.pop="pop",e.push="push",e}({}),Ys=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function tf(e){if(!e)if(cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ju(e)}const nf=/^[^#]+#/;function sf(e,t){return e.replace(nf,"#")+t}function rf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ms=()=>({left:window.scrollX,top:window.scrollY});function of(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=rf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ui(e,t){return(history.state?history.state.position-t:-1)+e}const mr=new Map;function lf(e,t){mr.set(e,t)}function af(e){const t=mr.get(e);return mr.delete(e),t}function cf(e){return typeof e=="string"||e&&typeof e=="object"}function Ol(e){return typeof e=="string"||typeof e=="symbol"}let we=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Ml=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function _n(e,t){return ce(new Error,{type:e,[Ml]:!0},t)}function vt(e,t){return e instanceof Error&&Ml in e&&(t==null||!!(e.type&t))}const uf=["params","query","hash"];function ff(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of uf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function df(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Al," "),i=r.indexOf("="),o=Gn(i<0?r:r.slice(0,i)),l=i<0?null:Gn(r.slice(i+1));if(o in t){let a=t[o];nt(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function Gi(e){let t="";for(let n in e){const s=e[n];if(n=qu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&hr(r)):[s&&hr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function pf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const hf=Symbol(""),qi=Symbol(""),Ls=Symbol(""),jr=Symbol(""),br=Symbol("");function Cn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const u=p=>{p===!1?a(_n(we.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):cf(p)?a(_n(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>a(p))})}function Xs(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Rl(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Mt(u,n,s,o,l,r))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Lu(c)?c.default:c;o.mods[l]=c,o.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&Mt(p,n,s,o,l,r)()}))}}return i}function gf(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>vn(u,l))?s.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>vn(u,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mf=()=>location.protocol+"//"+location.host;function Ll(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),ji(l,"")}return ji(n,e)+s+r}function bf(e,t,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const m=Ll(e,location),k=n.value,T=t.value;let O=0;if(p){if(n.value=m,t.value=p,o&&o===k){o=null;return}O=T?p.position-T.position:0}else s(m);r.forEach(y=>{y(n.value,k,{delta:O,type:gr.pop,direction:O?O>0?Ys.forward:Ys.back:Ys.unknown})})};function a(){o=n.value}function u(p){r.push(p);const m=()=>{const k=r.indexOf(p);k>-1&&r.splice(k,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ce({},p.state,{scroll:Ms()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:d}}function Vi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Ms():null}}function vf(e){const{history:t,location:n}=window,s={value:Ll(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:mf()+e+a;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function o(a,u){i(a,ce({},t.state,Vi(r.value.back,a,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=a}function l(a,u){const c=ce({},r.value,t.state,{forward:a,scroll:Ms()});i(c.current,c,!0),i(a,ce({},Vi(s.value,a,null),{position:c.position+1},u),!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function _f(e){e=tf(e);const t=vf(e),n=bf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:e,go:s,createHref:sf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function yf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),_f(e)}let Zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Re=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Re||{});const kf={type:Zt.Static,value:""},wf=/[a-zA-Z0-9_]/;function xf(e){if(!e)return[[]];if(e==="/")return[[kf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Re.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,u="",c="";function d(){u&&(n===Re.Static?i.push({type:Zt.Static,value:u}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==Re.ParamRegExp){s=n,n=Re.EscapeNext;continue}switch(n){case Re.Static:a==="/"?(u&&d(),o()):a===":"?(d(),n=Re.Param):p();break;case Re.EscapeNext:p(),n=s;break;case Re.Param:a==="("?n=Re.ParamRegExp:wf.test(a)?p():(d(),n=Re.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case Re.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=Re.ParamRegExpEnd:c+=a;break;case Re.ParamRegExpEnd:d(),n=Re.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const Ki="[^/]+?",Cf={sensitive:!1,strict:!1,start:!0,end:!0};var Me=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Me||{});const Tf=/[.+*?^${}()[\]/\\]/g;function Rf(e,t){const n=ce({},Cf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Me.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=Me.Segment+(n.sensitive?Me.BonusCaseSensitive:0);if(p.type===Zt.Static)d||(r+="/"),r+=p.value.replace(Tf,"\\$&"),m+=Me.Static;else if(p.type===Zt.Param){const{value:k,repeatable:T,optional:O,regexp:y}=p;i.push({name:k,repeatable:T,optional:O});const S=y||Ki;if(S!==Ki){m+=Me.BonusCustomRegExp;try{`${S}`}catch(E){throw new Error(`Invalid custom RegExp for param "${k}" (${S}): `+E.message)}}let C=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(C=O&&u.length<2?`(?:/${C})`:"/"+C),O&&(C+="?"),r+=C,m+=Me.Dynamic,O&&(m+=Me.BonusOptional),T&&(m+=Me.BonusRepeatable),S===".*"&&(m+=Me.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Me.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const c=u.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",k=i[p-1];d[k.name]=m&&k.repeatable?m.split("/"):m}return d}function a(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===Zt.Static)c+=m.value;else if(m.type===Zt.Param){const{value:k,repeatable:T,optional:O}=m,y=k in u?u[k]:"";if(nt(y)&&!T)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const S=nt(y)?y.join("/"):y;if(!S)if(O)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=S}}return c||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function Sf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Me.Static+Me.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Me.Static+Me.Segment?1:-1:0}function Nl(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Sf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zi(s))return 1;if(Zi(r))return-1}return r.length-s.length}function Zi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Af={strict:!1,end:!0,sensitive:!1};function Ef(e,t,n){const s=Rf(xf(e.path),n),r=ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Pf(e,t){const n=[],s=new Map;t=Fi(Af,t);function r(d){return s.get(d)}function i(d,p,m){const k=!m,T=Qi(d);T.aliasOf=m&&m.record;const O=Fi(t,d),y=[T];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of E)y.push(Qi(ce({},T,{components:m?m.record.components:T.components,path:L,aliasOf:m?m.record:T})))}let S,C;for(const E of y){const{path:L}=E;if(p&&L[0]!=="/"){const D=p.record.path,V=D[D.length-1]==="/"?"":"/";E.path=p.record.path+(L&&V+L)}if(S=Ef(E,p,O),m?m.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),k&&d.name&&!Yi(S)&&o(d.name)),Dl(S)&&a(S),T.children){const D=T.children;for(let V=0;V<D.length;V++)i(D[V],S,m&&m.children[V])}m=m||S}return C?()=>{o(C)}:Nn}function o(d){if(Ol(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){const p=Of(d,n);n.splice(p,0,d),d.record.name&&!Yi(d)&&s.set(d.record.name,d)}function u(d,p){let m,k={},T,O;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw _n(we.MATCHER_NOT_FOUND,{location:d});O=m.record.name,k=ce(Ji(p.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Ji(d.params,m.keys.map(C=>C.name))),T=m.stringify(k)}else if(d.path!=null)T=d.path,m=n.find(C=>C.re.test(T)),m&&(k=m.parse(T),O=m.record.name);else{if(m=p.name?s.get(p.name):n.find(C=>C.re.test(p.path)),!m)throw _n(we.MATCHER_NOT_FOUND,{location:d,currentLocation:p});O=m.record.name,k=ce({},p.params,d.params),T=m.stringify(k)}const y=[];let S=m;for(;S;)y.unshift(S.record),S=S.parent;return{name:O,path:T,params:k,matched:y,meta:$f(y)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:r}}function Ji(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Qi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:If(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function If(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $f(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Of(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Nl(e,t[i])<0?s=i:n=i+1}const r=Mf(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Mf(e){let t=e;for(;t=t.parent;)if(Dl(t)&&Nl(e,t)===0)return t}function Dl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Xi(e){const t=Xe(Ls),n=Xe(jr),s=me(()=>{const a=ge(e.to);return t.resolve(a)}),r=me(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(vn.bind(null,c));if(p>-1)return p;const m=eo(a[u-2]);return u>1&&eo(c)===m&&d[d.length-1].path!==m?d.findIndex(vn.bind(null,a[u-2])):p}),i=me(()=>r.value>-1&&Wf(n.params,s.value.params)),o=me(()=>r.value>-1&&r.value===n.matched.length-1&&$l(n.params,s.value.params));function l(a={}){if(Bf(a)){const u=t[ge(e.replace)?"replace":"push"](ge(e.to)).catch(Nn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:me(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function Lf(e){return e.length===1?e[0]:e}const Nf=Zo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xi,setup(e,{slots:t}){const n=Rs(Xi(e)),{options:s}=Xe(Ls),r=me(()=>({[to(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[to(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Lf(t.default(n));return e.custom?i:Wr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Df=Nf;function Bf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!nt(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function eo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const to=(e,t,n)=>e??t??n,Hf=Zo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Xe(br),r=me(()=>e.route||s.value),i=Xe(qi,0),o=me(()=>{let u=ge(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=me(()=>r.value.matched[o.value]);ns(qi,me(()=>o.value+1)),ns(hf,l),ns(br,r);const a=Se();return Bt(()=>[a.value,l.value,e.name],([u,c,d],[p,m,k])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!vn(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=l.value,p=d&&d.components[c];if(!p)return no(n.default,{Component:p,route:u});const m=d.props[c],k=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Wr(p,ce({},k,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return no(n.default,{Component:O,route:u})||O}}});function no(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ff=Hf;function jf(e){const t=Pf(e.routes,e),n=e.parseQuery||df,s=e.stringifyQuery||Gi,r=e.history,i=Cn(),o=Cn(),l=Cn(),a=Ua(It);let u=It;cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Js.bind(null,w=>""+w),d=Js.bind(null,Ku),p=Js.bind(null,Gn);function m(w,F){let B,U;return Ol(w)?(B=t.getRecordMatcher(w),U=F):U=w,t.addRoute(U,B)}function k(w){const F=t.getRecordMatcher(w);F&&t.removeRoute(F)}function T(){return t.getRoutes().map(w=>w.record)}function O(w){return!!t.getRecordMatcher(w)}function y(w,F){if(F=ce({},F||a.value),typeof w=="string"){const b=Qs(n,w,F.path),v=t.resolve({path:b.path},F),x=r.createHref(b.fullPath);return ce(b,v,{params:p(v.params),hash:Gn(b.hash),redirectedFrom:void 0,href:x})}let B;if(w.path!=null)B=ce({},w,{path:Qs(n,w.path,F.path).path});else{const b=ce({},w.params);for(const v in b)b[v]==null&&delete b[v];B=ce({},w,{params:d(b)}),F.params=d(F.params)}const U=t.resolve(B,F),ee=w.hash||"";U.params=c(p(U.params));const h=Qu(s,ce({},w,{hash:Gu(ee),path:U.path})),g=r.createHref(h);return ce({fullPath:h,hash:ee,query:s===Gi?pf(w.query):w.query||{}},U,{redirectedFrom:void 0,href:g})}function S(w){return typeof w=="string"?Qs(n,w,a.value.path):ce({},w)}function C(w,F){if(u!==w)return _n(we.NAVIGATION_CANCELLED,{from:F,to:w})}function E(w){return V(w)}function L(w){return E(ce(S(w),{replace:!0}))}function D(w,F){const B=w.matched[w.matched.length-1];if(B&&B.redirect){const{redirect:U}=B;let ee=typeof U=="function"?U(w,F):U;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),ce({query:w.query,hash:w.hash,params:ee.path!=null?{}:w.params},ee)}}function V(w,F){const B=u=y(w),U=a.value,ee=w.state,h=w.force,g=w.replace===!0,b=D(B,U);if(b)return V(ce(S(b),{state:typeof b=="object"?ce({},ee,b.state):ee,force:h,replace:g}),F||B);const v=B;v.redirectedFrom=F;let x;return!h&&Yu(s,U,B)&&(x=_n(we.NAVIGATION_DUPLICATED,{to:v,from:U}),st(U,U,!0,!1)),(x?Promise.resolve(x):Y(v,U)).catch(_=>vt(_)?vt(_,we.NAVIGATION_GUARD_REDIRECT)?_:Et(_):ae(_,v,U)).then(_=>{if(_){if(vt(_,we.NAVIGATION_GUARD_REDIRECT))return V(ce({replace:g},S(_.to),{state:typeof _.to=="object"?ce({},ee,_.to.state):ee,force:h}),F||v)}else _=H(v,U,!0,g,ee);return le(v,U,_),_})}function se(w,F){const B=C(w,F);return B?Promise.reject(B):Promise.resolve()}function z(w){const F=sn.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function Y(w,F){let B;const[U,ee,h]=gf(w,F);B=Xs(U.reverse(),"beforeRouteLeave",w,F);for(const b of U)b.leaveGuards.forEach(v=>{B.push(Mt(v,w,F))});const g=se.bind(null,w,F);return B.push(g),Ve(B).then(()=>{B=[];for(const b of i.list())B.push(Mt(b,w,F));return B.push(g),Ve(B)}).then(()=>{B=Xs(ee,"beforeRouteUpdate",w,F);for(const b of ee)b.updateGuards.forEach(v=>{B.push(Mt(v,w,F))});return B.push(g),Ve(B)}).then(()=>{B=[];for(const b of h)if(b.beforeEnter)if(nt(b.beforeEnter))for(const v of b.beforeEnter)B.push(Mt(v,w,F));else B.push(Mt(b.beforeEnter,w,F));return B.push(g),Ve(B)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),B=Xs(h,"beforeRouteEnter",w,F,z),B.push(g),Ve(B))).then(()=>{B=[];for(const b of o.list())B.push(Mt(b,w,F));return B.push(g),Ve(B)}).catch(b=>vt(b,we.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function le(w,F,B){l.list().forEach(U=>z(()=>U(w,F,B)))}function H(w,F,B,U,ee){const h=C(w,F);if(h)return h;const g=F===It,b=cn?history.state:{};B&&(U||g?r.replace(w.fullPath,ce({scroll:g&&b&&b.scroll},ee)):r.push(w.fullPath,ee)),a.value=w,st(w,F,B,g),Et()}let re;function Te(){re||(re=r.listen((w,F,B)=>{if(!Ft.listening)return;const U=y(w),ee=D(U,Ft.currentRoute.value);if(ee){V(ce(ee,{replace:!0,force:!0}),U).catch(Nn);return}u=U;const h=a.value;cn&&lf(Ui(h.fullPath,B.delta),Ms()),Y(U,h).catch(g=>vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?g:vt(g,we.NAVIGATION_GUARD_REDIRECT)?(V(ce(S(g.to),{force:!0}),U).then(b=>{vt(b,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===gr.pop&&r.go(-1,!1)}).catch(Nn),Promise.reject()):(B.delta&&r.go(-B.delta,!1),ae(g,U,h))).then(g=>{g=g||H(U,h,!1),g&&(B.delta&&!vt(g,we.NAVIGATION_CANCELLED)?r.go(-B.delta,!1):B.type===gr.pop&&vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),le(U,h,g)}).catch(Nn)}))}let ze=Cn(),Ce=Cn(),he;function ae(w,F,B){Et(w);const U=Ce.list();return U.length?U.forEach(ee=>ee(w,F,B)):console.error(w),Promise.reject(w)}function gt(){return he&&a.value!==It?Promise.resolve():new Promise((w,F)=>{ze.add([w,F])})}function Et(w){return he||(he=!w,Te(),ze.list().forEach(([F,B])=>w?B(w):F()),ze.reset()),w}function st(w,F,B,U){const{scrollBehavior:ee}=e;if(!cn||!ee)return Promise.resolve();const h=!B&&af(Ui(w.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return Kt().then(()=>ee(w,F,h)).then(g=>g&&of(g)).catch(g=>ae(g,w,F))}const Be=w=>r.go(w);let nn;const sn=new Set,Ft={currentRoute:a,listening:!0,addRoute:m,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:T,resolve:y,options:e,push:E,replace:L,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ce.add,isReady:gt,install(w){w.component("RouterLink",Df),w.component("RouterView",Ff),w.config.globalProperties.$router=Ft,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(a)}),cn&&!nn&&a.value===It&&(nn=!0,E(r.location).catch(U=>{}));const F={};for(const U in It)Object.defineProperty(F,U,{get:()=>a.value[U],enumerable:!0});w.provide(Ls,Ft),w.provide(jr,Oo(F)),w.provide(br,a);const B=w.unmount;sn.add(w),w.unmount=function(){sn.delete(w),sn.size<1&&(u=It,re&&re(),re=null,a.value=It,nn=!1,he=!1),B()}}};function Ve(w){return w.reduce((F,B)=>F.then(()=>z(B)),Promise.resolve())}return Ft}function zf(){return Xe(Ls)}function Bl(e){return Xe(jr)}const Wl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Uf={__name:"PixelTree",props:{size:{type:String,default:"md"},variant:{type:String,default:"emerald"}},setup(e){const t=["0000g0000","000ggg000","00gglgg00","0ggggggg0","0gglflgg0","00ggggg00","000gtg000","000ttt000","0000t0000"],n=t[0].length,s=t.length,r=me(()=>t.join("").split("")),i=me(()=>({"--cols":n,"--rows":s}));return(o,l)=>(A(),I("div",{class:Ie(["pixel-tree",[`size-${e.size}`,`variant-${e.variant}`]]),style:Cs(i.value),"aria-hidden":"true"},[(A(!0),I(X,null,_e(r.value,(a,u)=>(A(),I("span",{key:u,class:Ie(["pixel-tree-cell",{filled:a!=="0",leaf:a==="g",leafAlt:a==="l",trunk:a==="t",fruit:a==="f"}])},null,2))),128))],6))}},fn=Wl(Uf,[["__scopeId","data-v-00c24bb5"]]),Gf={class:"container nav-shell"},qf={class:"brand-mark brand-mark-tree"},Vf={class:"nav-right"},Kf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Se(!1);return(n,s)=>{const r=Ht("router-link");return A(),I("header",{class:Ie(["site-header",{scrolled:e.scrolled}])},[f("div",Gf,[j(r,{class:"brand",to:"/"},{default:Q(()=>[f("span",qf,[j(fn,{size:"micro",variant:"forest"})]),s[10]||(s[10]=f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Minecraft Server Core")],-1))]),_:1}),f("div",Vf,[f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Ie(["nav-links",{open:t.value}])},[j(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:Q(()=>[...s[12]||(s[12]=[ie("首页",-1)])]),_:1}),j(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:Q(()=>[...s[13]||(s[13]=[ie("核心能力",-1)])]),_:1}),j(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:Q(()=>[...s[14]||(s[14]=[ie("技术文档",-1)])]),_:1}),j(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:Q(()=>[...s[15]||(s[15]=[ie("下载",-1)])]),_:1}),j(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:Q(()=>[...s[16]||(s[16]=[ie("路线图",-1)])]),_:1}),j(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:Q(()=>[...s[17]||(s[17]=[ie("更新日志",-1)])]),_:1}),j(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:Q(()=>[...s[18]||(s[18]=[ie("团队与支持",-1)])]),_:1}),j(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:Q(()=>[...s[19]||(s[19]=[ie("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),ie(" "+P(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},Zf={class:"site-footer"},Jf={class:"container footer-grid"},Qf={class:"brand footer-brand"},Yf={class:"brand-mark brand-mark-tree"},Xf={__name:"SiteFooter",setup(e){return(t,n)=>{const s=Ht("router-link");return A(),I("footer",Zf,[f("div",Jf,[f("div",null,[f("div",Qf,[f("span",Yf,[j(fn,{size:"micro",variant:"forest"})]),n[0]||(n[0]=f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")],-1))]),n[1]||(n[1]=f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ",-1))]),f("div",null,[n[7]||(n[7]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[j(s,{to:"/features"},{default:Q(()=>[...n[2]||(n[2]=[ie("核心能力",-1)])]),_:1})]),f("li",null,[j(s,{to:"/docs"},{default:Q(()=>[...n[3]||(n[3]=[ie("技术文档",-1)])]),_:1})]),f("li",null,[j(s,{to:"/downloads"},{default:Q(()=>[...n[4]||(n[4]=[ie("下载",-1)])]),_:1})]),f("li",null,[j(s,{to:"/roadmap"},{default:Q(()=>[...n[5]||(n[5]=[ie("路线图",-1)])]),_:1})]),f("li",null,[j(s,{to:"/changelog"},{default:Q(()=>[...n[6]||(n[6]=[ie("更新日志",-1)])]),_:1})])])]),n[13]||(n[13]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[n[12]||(n[12]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[j(s,{to:"/team"},{default:Q(()=>[...n[8]||(n[8]=[ie("团队与支持",-1)])]),_:1})]),n[9]||(n[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),n[10]||(n[10]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),n[11]||(n[11]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),n[14]||(n[14]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}}},ed=["data-theme"],td={class:"site-main"},nd={__name:"App",setup(e){const t=Se("dark"),n=Se(!1),s=Bl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},o=()=>{i(t.value==="dark"?"light":"dark")},l=()=>{n.value=window.scrollY>8},a=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".tree-suite-grid > *",".entry-grid > *",".showcase-row > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Kt();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(a.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return en(()=>{const c=localStorage.getItem("tree-site-theme");if(c==="dark"||c==="light")i(c);else{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;i(d?"dark":"light")}l(),window.addEventListener("scroll",l,{passive:!0}),u()}),Ps(()=>{window.removeEventListener("scroll",l),r==null||r.disconnect()}),Bt(()=>s.fullPath,()=>{u()}),Bt(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=Ht("router-view");return A(),I("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=pt('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),j(Kf,{theme:t.value,scrolled:n.value,onToggleTheme:o},null,8,["theme","scrolled"]),f("main",td,[j(p,null,{default:Q(({Component:m,route:k})=>[j(cu,{name:"page-fade",mode:"out-in"},{default:Q(()=>[(A(),un(bc(m),{key:k.fullPath}))]),_:2},1024)]),_:1})]),j(Xf)],8,ed)}}},sd="/images/console-preview.png",rd={class:"hero-section home-hero-section"},id={class:"container hero-grid home-hero-grid"},od={class:"hero-copy"},ld={class:"section-kicker-row hero-kicker-row"},ad={class:"hero-actions"},cd={class:"section-block"},ud={class:"container stats-grid"},fd={class:"section-block home-suite-section surface-soft"},dd={class:"container"},pd={class:"section-head"},hd={class:"section-kicker-row"},gd={class:"tree-suite-grid"},md={class:"suite-card-head"},bd={class:"suite-icon"},vd={class:"card-label"},_d={class:"bullet-list compact-list suite-points"},yd={class:"section-block surface-soft seo-section"},kd={class:"container"},wd={class:"feature-grid three"},xd={class:"card-label"},Cd={class:"section-block showcase-section"},Td={class:"container showcase-stack"},Rd={class:"showcase-visual surface-card"},Sd=["src","alt"],Ad={class:"showcase-copy"},Ed={class:"eyebrow"},Pd={class:"hero-actions"},Id={class:"section-block surface-soft"},$d={class:"container"},Od={class:"feature-grid three"},Md={class:"section-block"},Ld={class:"container"},Nd={class:"entry-grid"},Dd={class:"entry-card-head"},Bd={class:"card-label"},Wd={class:"section-block surface-soft"},Hd={class:"container"},Fd={class:"feature-grid two"},jd={class:"section-block final-cta"},zd={class:"container cta-shell tree-cta-shell"},Ud={class:"hero-actions"},Gd={__name:"HomePage",setup(e){const t=[{value:"11",label:"当前 Web 页签"},{value:"4 档",label:"自动分层预设"},{value:"ZIP",label:"本地资源包拖拽上传"},{value:"Docs",label:"站内技术 Wiki"}],n=[{kicker:"PERFORMANCE",title:"性能主干",description:"把动态视距、动态模拟距离、自动分层、Paper 热调与网络链路优化收束成同一条性能主线。",points:["动态视距 / 模拟距离","自动分层与运行时调优","更稳的 TPS / MSPT 控制"],link:"/features",linkLabel:"查看性能能力",variant:"forest"},{kicker:"OPERATIONS",title:"运维主干",description:"让控制台、诊断、备份、世界管理与集成状态不再分散在命令和脚本里，而是在 Web 面板内统一可见。",points:["控制台 / 线程转储 / 内存快照","备份创建与恢复","世界管理与集成状态卡片"],link:"/docs/web-panel",linkLabel:"查看 Web 面板",variant:"emerald"},{kicker:"CONTENT FLOW",title:"内容主干",description:"模型、纹理、资源包 ZIP、本地托管与在线玩家下发形成完整闭环，适合内容服与综合服长期维护。",points:["模型 / 纹理上传","资源包拖拽上传与重载","在线玩家远程下发"],link:"/docs/resource-pack",linkLabel:"查看资源链路",variant:"gold"}],s=[{eyebrow:"REAL OPERATIONS",title:"高峰监控、问题排查与恢复动作放在同一条运维流程里。",description:"先看仪表盘，再看控制台，再做线程转储、资源包处理或备份恢复。TreeCore 的目标不是把功能堆进去，而是让它们在实际运维时顺畅接起来。",image:"/images/console-live.gif",link:"/docs/web-pages-overview",linkLabel:"查看页面总览",variant:"teal",reverse:!1},{eyebrow:"LONG TERM SERVER",title:"面向综合服、长周目服与高峰玩家场景持续维护。",description:"对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。",image:"/images/stress-test.gif",link:"/docs/first-day-checklist",linkLabel:"查看上线清单",variant:"forest",reverse:!0},{eyebrow:"DOCS + RELEASE FLOW",title:"首页把文档、下载、路线图和支持入口都收进同一条阅读路径。",description:"现在你可以从首页直接进入快速开始、配置参考、下载页、更新日志、路线图和社区入口，不需要在多个仓库页面之间来回切换。",image:"/images/console-preview.png",link:"/docs/quick-start",linkLabel:"从快速开始进入",variant:"gold",reverse:!1}],r=[{tag:"MINECRAFT CORE",title:"我的世界 / Minecraft 服务端核心",description:"TreeCore 面向需要性能优化、资源链路和长期维护能力的 Minecraft 服务器场景。"},{tag:"PAPER / FOLIA",title:"Paper 与 Folia 相关生态",description:"官网内容会自然覆盖 Paper、Folia、Web 管理、诊断和高性能运行等相关关键词。"},{tag:"TREEMC",title:"TreeMC / TreeCore 官方站点",description:"这里提供官方说明、文档、下载和社区入口，避免用户只在仓库目录或零散链接之间查找。"}],i=[{title:"生存 / 长周目服",description:"希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。"},{title:"多世界 / 综合服",description:"需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。"},{title:"运维要求高的团队服",description:"希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。"}],o=[{tag:"GET STARTED",title:"快速开始",description:"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",link:"/docs/quick-start",linkLabel:"进入快速开始",variant:"forest"},{tag:"CONFIG",title:"配置参考",description:"把关键配置项和推荐开关集中整理，便于你在正式服环境中调整。",link:"/docs/configuration",linkLabel:"查看配置参考",variant:"teal"},{tag:"DOWNLOADS",title:"下载与版本",description:"在官网内查看最新版本、更新摘要与下载入口，不再只靠仓库页面跳转。",link:"/downloads",linkLabel:"进入下载页",variant:"gold"},{tag:"ROADMAP",title:"路线图",description:"清楚了解当前阶段、下一阶段与后续方向，避免首页信息只有静态介绍。",link:"/roadmap",linkLabel:"查看路线图",variant:"emerald"},{tag:"CHANGELOG",title:"更新日志",description:"把版本变化、发布时间和更新摘要收束成时间线视图。",link:"/changelog",linkLabel:"查看更新日志",variant:"forest"},{tag:"SUPPORT",title:"团队与支持",description:"集中展示社区入口、贡献者、常见问题与对外支持入口。",link:"/team",linkLabel:"进入支持页",variant:"gold"}],l=[{title:"TreeCore 更适合哪类服务器？",description:"更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。"},{title:"默认会不会大幅改动原版行为？",description:"整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏默认原版、按需保护。"},{title:"Web 管理面板现在能做什么？",description:"当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。"},{title:"第一次上服最推荐先做什么？",description:"建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。"}];return(a,u)=>{const c=Ht("router-link");return A(),I("div",null,[f("section",rd,[f("div",id,[f("div",od,[f("div",ld,[j(fn,{size:"tiny",variant:"forest"}),u[0]||(u[0]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1))]),u[5]||(u[5]=pt('<h1 class="hero-title">TreeCore</h1><p class="hero-summary">高性能服务端核心 · Web 管理 · 诊断</p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',3)),f("div",ad,[j(c,{class:"button primary",to:"/features"},{default:Q(()=>[...u[1]||(u[1]=[ie("查看能力",-1)])]),_:1}),j(c,{class:"button secondary",to:"/docs"},{default:Q(()=>[...u[2]||(u[2]=[ie("阅读文档",-1)])]),_:1}),u[3]||(u[3]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1)),u[4]||(u[4]=f("a",{class:"button secondary qq-cta",href:"https://qm.qq.com/q/MfzN81ScIc",target:"_blank",rel:"noreferrer"},"加入 QQ 群",-1))]),u[6]||(u[6]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),u[7]||(u[7]=pt('<div class="hero-visual tree-hero-visual"><div class="hero-spotlight"></div><div class="hero-card image-card hero-stage"><img src="'+sd+'" alt="TreeCore 控制台预览"><div class="overlay-panel"><strong>Web 管理面板</strong><p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p></div></div></div>',1))])]),f("section",cd,[f("div",ud,[(A(),I(X,null,_e(t,d=>f("article",{class:"stat-card",key:d.label},[f("strong",null,P(d.value),1),f("span",null,P(d.label),1)])),64))])]),f("section",fd,[f("div",dd,[f("div",pd,[f("div",hd,[j(fn,{size:"tiny",variant:"emerald"}),u[8]||(u[8]=f("span",{class:"eyebrow"},"CORE BRANCHES",-1))]),u[9]||(u[9]=f("h2",null,"借鉴 PaperMC 那种清晰的软件分区，但把它改成 TreeCore 的三条主干。",-1)),u[10]||(u[10]=f("p",null," 首页现在不再只是堆叠介绍，而是用更产品化的方式，把 TreeCore 的三条核心主干——性能、运维、内容链路——明确分开展示。 ",-1))]),f("div",gd,[(A(),I(X,null,_e(n,d=>f("article",{class:"suite-card surface-card",key:d.title},[f("div",md,[f("div",bd,[j(fn,{size:"sm",variant:d.variant},null,8,["variant"])]),f("div",null,[f("span",vd,P(d.kicker),1),f("h3",null,P(d.title),1)])]),f("p",null,P(d.description),1),f("ul",_d,[(A(!0),I(X,null,_e(d.points,p=>(A(),I("li",{key:p},P(p),1))),128))]),j(c,{class:"text-link",to:d.link},{default:Q(()=>[ie(P(d.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),u[18]||(u[18]=pt('<section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section>',1)),f("section",yd,[f("div",kd,[u[11]||(u[11]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SEARCH SIGNALS"),f("h2",null,"TreeCore / TreeMC / Paper / Folia 官方入口"),f("p",null," 如果你在找“我的世界核心”“Minecraft 服务端核心”“Paper”“Folia”“TreeMC”或“TreeCore”相关项目， 这里就是 TreeCore 的官方网站入口。TreeCore 面向 Minecraft 1.21.x 服务器场景，聚焦高性能运行、Web 管理、诊断、资源包链路和长期维护。 ")],-1)),f("div",wd,[(A(),I(X,null,_e(r,d=>f("article",{class:"feature-card compact",key:d.title},[f("span",xd,P(d.tag),1),f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",Cd,[f("div",Td,[(A(),I(X,null,_e(s,d=>f("article",{class:Ie(["showcase-row",{reverse:d.reverse}]),key:d.title},[f("div",Rd,[f("img",{src:d.image,alt:d.title},null,8,Sd)]),f("div",Ad,[f("span",Ed,P(d.eyebrow),1),f("h2",null,P(d.title),1),f("p",null,P(d.description),1),f("div",Pd,[j(c,{class:"button primary small",to:d.link},{default:Q(()=>[ie(P(d.linkLabel),1)]),_:2},1032,["to"])])])],2)),64))])]),f("section",Id,[f("div",$d,[u[12]||(u[12]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SCENARIOS"),f("h2",null,"适合哪些服务器？")],-1)),f("div",Od,[(A(),I(X,null,_e(i,d=>f("article",{class:"feature-card compact",key:d.title},[f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",Md,[f("div",Ld,[u[13]||(u[13]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"INSIDE THE SITE"),f("h2",null,"文档、下载、路线图和支持都在同一个站里。"),f("p",null,"如果你是第一次来看 TreeCore，这里就是最直接的入口区：先找文档，再看下载，最后再看路线图和支持页面。")],-1)),f("div",Nd,[(A(),I(X,null,_e(o,d=>f("article",{class:"entry-card feature-card compact",key:d.title},[f("div",Dd,[j(fn,{size:"tiny",variant:d.variant},null,8,["variant"]),f("span",Bd,P(d.tag),1)]),f("h3",null,P(d.title),1),f("p",null,P(d.description),1),j(c,{class:"text-link",to:d.link},{default:Q(()=>[ie(P(d.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),f("section",Wd,[f("div",Hd,[u[14]||(u[14]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"FAQ"),f("h2",null,"你可能最先会关心的几个问题")],-1)),f("div",Fd,[(A(),I(X,null,_e(l,d=>f("article",{class:"feature-card compact",key:d.title},[f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",jd,[f("div",zd,[u[17]||(u[17]=f("div",{class:"cta-copy"},[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看能力，再进文档，然后开始部署。"),f("p",null,"官网现在已经把首页、文档、下载入口和后续信息放到同一个站里，阅读路径会简单很多。")],-1)),f("div",Ud,[j(c,{class:"button primary",to:"/docs"},{default:Q(()=>[...u[15]||(u[15]=[ie("进入技术文档",-1)])]),_:1}),j(c,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...u[16]||(u[16]=[ie("查看下载入口",-1)])]),_:1})])])])])}}},qd={},Vd={class:"page-shell container"};function Kd(e,t){return A(),I("div",Vd,[...t[0]||(t[0]=[pt('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>当前可用的核心能力</h1><p> 这页只讲现在已经做出来、并且日常维护能直接用上的部分：性能调优、Web 运维、资源包与模型链路，以及世界和备份管理。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const Zd=Wl(qd,[["render",Kd]]),Hl="https://api.github.com/repos/TreeMC-cloud/Tree",Jd=`${Hl}/releases?per_page=30`,Qd=`${Hl}/contributors?per_page=24`,Fl="tree-site-cache:",Yd=30*60*1e3,jl=e=>{try{const t=localStorage.getItem(`${Fl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>Yd?null:n.data}catch{return null}},zl=(e,t)=>{try{localStorage.setItem(`${Fl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},Ul=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},Xd=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},Gl=async()=>{try{const e=await Ul(Jd),t=Array.isArray(e)?e:[];return zl("releases",t),{data:t,source:"github"}}catch{const e=jl("releases");if(e)return{data:e,source:"cache"};const t=await Xd();return{data:t,source:t.length?"fallback":"empty"}}},ep=async()=>{try{const e=await Ul(Qd),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return zl("contributors",t),{data:t,source:"github"}}catch{const e=jl("contributors");return{data:e||[],source:e?"cache":"empty"}}},os=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Nt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",ql=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},qn=e=>String(e||"").replace(/\r/g,"").trim(),Lt=(e,t=4)=>{const n=qn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},Tn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},so=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Vl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),tp={class:"page-shell container"},np={class:"page-hero"},sp={class:"hero-actions"},rp={class:"stack-section"},ip={class:"section-head left"},op={class:"release-hero-grid"},lp={key:0,class:"release-hero-card surface-card"},ap={class:"release-head"},cp={class:"release-date"},up={class:"release-tag"},fp={key:0,class:"bullet-list compact-list"},dp={key:1,class:"release-body"},pp={class:"release-actions"},hp=["href"],gp=["href"],mp={key:1,class:"release-hero-card surface-card"},bp={class:"release-head"},vp={class:"release-date"},_p={class:"release-tag"},yp={key:0,class:"bullet-list compact-list"},kp={key:1,class:"release-body"},wp={class:"release-actions"},xp=["href"],Cp=["href"],Tp={key:2,class:"empty-state surface-card"},Rp={class:"stack-section surface-card changelog-toolbar"},Sp={class:"release-filter-row"},Ap={class:"filter-chip-group"},Ep=["onClick"],Pp={key:0,class:"stack-section"},Ip={key:1,class:"stack-section release-list-grid"},$p={class:"release-head"},Op={class:"release-date"},Mp={class:"release-tag"},Lp={key:0,class:"bullet-list compact-list"},Np={key:1,class:"release-body"},Dp={key:2,class:"asset-group-list"},Bp={key:3,class:"release-asset-list"},Wp=["href"],Hp={class:"release-actions"},Fp=["href"],jp={key:2,class:"stack-section"},zp={__name:"DownloadsPage",setup(e){const t=Se(!0),n=Se([]),s=Se("github"),r=Se("all"),i=Se(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=me(()=>Vl(n.value)),a=me(()=>l.value.find(O=>Nt(O)==="stable")||null),u=me(()=>l.value.find(O=>Nt(O)==="preview")||null),c=me(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=O=>{const y=qn(O).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return y?y.length>140?`${y.slice(0,140)}…`:y:"暂无发布说明。"},p=O=>{const y=m(O);return y.find(S=>Tn(S)==="server")||y[0]||null},m=O=>{const y=Array.isArray(O==null?void 0:O.assets)?[...O.assets]:[],S=["server","archive","source","checksum","metadata","other"];return y.sort((C,E)=>S.indexOf(Tn(C))-S.indexOf(Tn(E))).slice(0,5)},k=O=>{const y=new Map;for(const S of(O==null?void 0:O.assets)||[]){const C=Tn(S),E=y.get(C)||[];E.push(S),y.set(C,E)}return["server","archive","source","checksum","metadata","other"].filter(S=>y.has(S)).map(S=>({type:S,label:so(S),items:y.get(S)}))},T=me(()=>{const O=i.value.toLowerCase();return l.value.filter(y=>{const S=Nt(y);return r.value!=="all"&&S!==r.value?!1:O?[y.name,y.tag_name,qn(y.body)].filter(Boolean).join(" ").toLowerCase().includes(O):!0})});return en(async()=>{const O=await Gl();n.value=O.data,s.value=O.source,t.value=!1}),(O,y)=>{const S=Ht("router-link");return A(),I("div",tp,[f("section",np,[y[4]||(y[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),y[5]||(y[5]=f("h1",null,"下载与版本",-1)),y[6]||(y[6]=f("p",null," 这里直接读取公开仓库 Releases，展示最新正式版、预发布版、附件和更新摘要，不需要你再自己去翻仓库页面。 ",-1)),f("div",sp,[y[3]||(y[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(S,{class:"button secondary",to:"/docs/quick-start"},{default:Q(()=>[...y[1]||(y[1]=[ie("安装文档",-1)])]),_:1}),j(S,{class:"button ghost",to:"/changelog"},{default:Q(()=>[...y[2]||(y[2]=[ie("查看更新日志",-1)])]),_:1})])]),f("section",rp,[f("div",ip,[y[7]||(y[7]=f("h2",null,"最新版本",-1)),f("p",null,P(c.value),1)]),f("div",op,[a.value?(A(),I("article",lp,[f("div",ap,[y[8]||(y[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",cp,P(ge(os)(a.value.published_at)),1)]),f("h3",null,P(a.value.name||a.value.tag_name),1),f("p",up,P(a.value.tag_name),1),ge(Lt)(a.value.body,4).length?(A(),I("ul",fp,[(A(!0),I(X,null,_e(ge(Lt)(a.value.body,4),C=>(A(),I("li",{key:C},P(C),1))),128))])):(A(),I("p",dp,P(d(a.value.body)),1)),f("div",pp,[f("a",{class:"button primary small",href:a.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,hp),p(a.value)?(A(),I("a",{key:0,class:"button secondary small",href:p(a.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+P(p(a.value).name),9,gp)):Qe("",!0)])])):Qe("",!0),u.value?(A(),I("article",mp,[f("div",bp,[y[9]||(y[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",vp,P(ge(os)(u.value.published_at)),1)]),f("h3",null,P(u.value.name||u.value.tag_name),1),f("p",_p,P(u.value.tag_name),1),ge(Lt)(u.value.body,4).length?(A(),I("ul",yp,[(A(!0),I(X,null,_e(ge(Lt)(u.value.body,4),C=>(A(),I("li",{key:C},P(C),1))),128))])):(A(),I("p",kp,P(d(u.value.body)),1)),f("div",wp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,xp),p(u.value)?(A(),I("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+P(p(u.value).name),9,Cp)):Qe("",!0)])])):Qe("",!0),!a.value&&!u.value?(A(),I("article",Tp,[...y[10]||(y[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Qe("",!0)])]),f("section",Rp,[y[11]||(y[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",Sp,[f("div",Ap,[(A(),I(X,null,_e(o,C=>f("button",{key:C.value,class:Ie(["filter-chip",{active:r.value===C.value}]),onClick:E=>r.value=C.value},P(C.label),11,Ep)),64))]),Lr(f("input",{"onUpdate:modelValue":y[0]||(y[0]=C=>i.value=C),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Hr,i.value,void 0,{trim:!0}]])])]),t.value?(A(),I("section",Pp,[...y[12]||(y[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):T.value.length?(A(),I("section",Ip,[(A(!0),I(X,null,_e(T.value,C=>(A(),I("article",{key:C.id||C.tag_name,class:"release-card enhanced-release-card"},[f("div",$p,[f("span",{class:Ie(["release-badge",{alt:ge(Nt)(C)==="preview"}])},P(ge(ql)(ge(Nt)(C))),3),f("span",Op,P(ge(os)(C.published_at)),1)]),f("h3",null,P(C.name||C.tag_name),1),f("p",Mp,P(C.tag_name),1),ge(Lt)(C.body,4).length?(A(),I("ul",Lp,[(A(!0),I(X,null,_e(ge(Lt)(C.body,4),E=>(A(),I("li",{key:E},P(E),1))),128))])):(A(),I("p",Np,P(d(C.body)),1)),k(C).length?(A(),I("div",Dp,[(A(!0),I(X,null,_e(k(C),E=>(A(),I("div",{key:E.type,class:"asset-group-chip"},[f("strong",null,P(E.label),1),f("span",null,P(E.items.length)+" 个文件",1)]))),128))])):Qe("",!0),C.assets&&C.assets.length?(A(),I("div",Bp,[(A(!0),I(X,null,_e(m(C),E=>(A(),I("a",{key:E.id||E.name,class:"release-asset-link",href:E.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,P(E.name),1),f("small",null,P(ge(so)(ge(Tn)(E))),1)],8,Wp))),128))])):Qe("",!0),f("div",Hp,[f("a",{class:"button primary small",href:C.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Fp),j(S,{class:"button secondary small",to:"/changelog"},{default:Q(()=>[...y[13]||(y[13]=[ie("看时间线",-1)])]),_:1})])]))),128))])):(A(),I("section",jp,[...y[14]||(y[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),y[15]||(y[15]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},ms=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],dn=ms.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Kl=Object.fromEntries(dn.map(e=>[e.slug,e])),Up={class:"page-shell container"},Gp={class:"page-hero docs-hero-grid"},qp={class:"hero-actions"},Vp={class:"stack-section surface-card docs-filter-card"},Kp={class:"docs-filter-bar"},Zp={class:"section-head left"},Jp={class:"feature-grid three"},Qp={class:"card-label"},Yp={class:"doc-card-meta"},Xp={key:0,class:"stack-section"},eh={__name:"DocsPage",setup(e){const t=Se(""),n=me(()=>{const s=t.value.toLowerCase();return s?ms.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):ms});return(s,r)=>{const i=Ht("router-link");return A(),I("div",Up,[f("section",Gp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档都放在站内。",-1)),r[5]||(r[5]=f("p",null," 现在可以直接在这里看部署、运维、配置、架构和 Web 资源同步文档，不用再跳去 GitHub Markdown 页面。 ",-1)),f("div",qp,[j(i,{class:"button primary",to:"/docs/quick-start"},{default:Q(()=>[...r[1]||(r[1]=[ie("从快速开始开始",-1)])]),_:1}),j(i,{class:"button secondary",to:"/docs/configuration"},{default:Q(()=>[...r[2]||(r[2]=[ie("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Vp,[f("div",Kp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Lr(f("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Hr,t.value,void 0,{trim:!0}]])])]),(A(!0),I(X,null,_e(n.value,o=>(A(),I("section",{class:"stack-section",key:o.key},[f("div",Zp,[f("h2",null,P(o.title),1),f("p",null,P(o.description),1)]),f("div",Jp,[(A(!0),I(X,null,_e(o.items,l=>(A(),I("article",{class:"feature-card compact",key:l.slug},[f("span",Qp,P(l.tag),1),f("h3",null,P(l.title),1),f("p",null,P(l.description),1),f("div",Yp,[f("span",null,P(o.title),1),f("span",null,P(l.minutes),1)]),j(i,{class:"text-link",to:`/docs/${l.slug}`},{default:Q(()=>[...r[8]||(r[8]=[ie("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Qe("",!0):(A(),I("section",Xp,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},th=`# Tree 技术文档 / Wiki

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
`,nh=`# Summary

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
`,sh=`# 模块地图

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
`,rh=`# 系统架构总览

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
`,ih=`# Web 资源同步机制

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
`,oh=`# 首次上线检查清单

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
`,lh=`# 快速开始

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
`,ah=`# Web 面板访问

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
`,ch=`# 命令与日常运维

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
`,uh=`# 诊断与备份

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
`,fh=`# 假人 / 红石运维

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
`,dh=`# 集成与世界管理

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
`,ph=`# 资源包 / 模型链路

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
`,hh=`# Web 页面总览

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
`,gh=`# 命令速查表

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
`,mh=`# 配置参考

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
`,bh=Object.assign({"../../content/docs/README.md":th,"../../content/docs/SUMMARY.md":nh,"../../content/docs/architecture/module-map.md":sh,"../../content/docs/architecture/system-overview.md":rh,"../../content/docs/development/web-ui-pipeline.md":ih,"../../content/docs/getting-started/first-day-checklist.md":oh,"../../content/docs/getting-started/quick-start.md":lh,"../../content/docs/getting-started/web-panel.md":ah,"../../content/docs/operations/commands.md":ch,"../../content/docs/operations/diagnostics-and-backups.md":uh,"../../content/docs/operations/fakeplayer-and-redstone.md":fh,"../../content/docs/operations/integrations-and-worlds.md":dh,"../../content/docs/operations/resource-pack.md":ph,"../../content/docs/operations/web-pages-overview.md":hh,"../../content/docs/reference/command-cheatsheet.md":gh,"../../content/docs/reference/configuration.md":mh}),vh="../../content/docs/",_h=Object.fromEntries(Object.entries(bh).map(([e,t])=>[e.replace(vh,""),t]));function zr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var tn=zr();function Zl(e){tn=e}var Dn={exec:()=>null};function de(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(De.caret,"$1"),n=n.replace(r,o),s},getRegex:()=>new RegExp(n,t)};return s}var De={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},yh=/^(?:[ \t]*(?:\n|$))+/,kh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,wh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Jn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,xh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ur=/(?:[*+-]|\d{1,9}[.)])/,Jl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ql=de(Jl).replace(/bull/g,Ur).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ch=de(Jl).replace(/bull/g,Ur).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Gr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Th=/^[^\n]+/,qr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Rh=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",qr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Sh=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ur).getRegex(),Ns="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Vr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ah=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Vr).replace("tag",Ns).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Yl=de(Gr).replace("hr",Jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex(),Eh=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Yl).getRegex(),Kr={blockquote:Eh,code:kh,def:Rh,fences:wh,heading:xh,hr:Jn,html:Ah,lheading:Ql,list:Sh,newline:yh,paragraph:Yl,table:Dn,text:Th},ro=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex(),Ph={...Kr,lheading:Ch,table:ro,paragraph:de(Gr).replace("hr",Jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ro).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex()},Ih={...Kr,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Vr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Dn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(Gr).replace("hr",Jn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ql).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$h=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Oh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xl=/^( {2,}|\\)\n(?!\s*$)/,Mh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ds=/[\p{P}\p{S}]/u,Zr=/[\s\p{P}\p{S}]/u,ea=/[^\s\p{P}\p{S}]/u,Lh=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Zr).getRegex(),ta=/(?!~)[\p{P}\p{S}]/u,Nh=/(?!~)[\s\p{P}\p{S}]/u,Dh=/(?:[^\s\p{P}\p{S}]|~)/u,Bh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,na=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Wh=de(na,"u").replace(/punct/g,Ds).getRegex(),Hh=de(na,"u").replace(/punct/g,ta).getRegex(),sa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Fh=de(sa,"gu").replace(/notPunctSpace/g,ea).replace(/punctSpace/g,Zr).replace(/punct/g,Ds).getRegex(),jh=de(sa,"gu").replace(/notPunctSpace/g,Dh).replace(/punctSpace/g,Nh).replace(/punct/g,ta).getRegex(),zh=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ea).replace(/punctSpace/g,Zr).replace(/punct/g,Ds).getRegex(),Uh=de(/\\(punct)/,"gu").replace(/punct/g,Ds).getRegex(),Gh=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),qh=de(Vr).replace("(?:-->|$)","-->").getRegex(),Vh=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",qh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Kh=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",bs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ra=de(/^!?\[(label)\]\[(ref)\]/).replace("label",bs).replace("ref",qr).getRegex(),ia=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",qr).getRegex(),Zh=de("reflink|nolink(?!\\()","g").replace("reflink",ra).replace("nolink",ia).getRegex(),Jr={_backpedal:Dn,anyPunctuation:Uh,autolink:Gh,blockSkip:Bh,br:Xl,code:Oh,del:Dn,emStrongLDelim:Wh,emStrongRDelimAst:Fh,emStrongRDelimUnd:zh,escape:$h,link:Kh,nolink:ia,punctuation:Lh,reflink:ra,reflinkSearch:Zh,tag:Vh,text:Mh,url:Dn},Jh={...Jr,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",bs).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bs).getRegex()},vr={...Jr,emStrongRDelimAst:jh,emStrongLDelim:Hh,url:de(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Qh={...vr,br:de(Xl).replace("{2,}","*").getRegex(),text:de(vr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},es={normal:Kr,gfm:Ph,pedantic:Ih},Rn={normal:Jr,gfm:vr,breaks:Qh,pedantic:Jh},Yh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},io=e=>Yh[e];function at(e,t){if(t){if(De.escapeTest.test(e))return e.replace(De.escapeReplace,io)}else if(De.escapeTestNoEncode.test(e))return e.replace(De.escapeReplaceNoEncode,io);return e}function oo(e){try{e=encodeURI(e).replace(De.percentDecode,"%")}catch{return null}return e}function lo(e,t){var i;const n=e.replace(De.findPipe,(o,l,a)=>{let u=!1,c=l;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(De.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(De.slashPipe,"|");return s}function Sn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function Xh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function ao(e,t,n,s,r){const i=t.href,o=t.title||null,l=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,a}function eg(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[l]=o;return l.length>=r.length?i.slice(r.length):i}).join(`
`)}var vs=class{constructor(e){be(this,"options");be(this,"rules");be(this,"lexer");this.options=e||tn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Sn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=eg(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Sn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Sn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Sn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let o=!1;const l=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))l.push(n[a]),o=!0;else if(!o)l.push(n[a]);else break;n=n.slice(a);const u=l.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,k=m.raw+`
`+n.join(`
`),T=this.blockquote(k);i[i.length-1]=T,s=s.substring(0,s.length-m.raw.length)+T.raw,r=r.substring(0,r.length-m.text.length)+T.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,k=m.raw+`
`+n.join(`
`),T=this.list(k);i[i.length-1]=T,s=s.substring(0,s.length-p.raw.length)+T.raw,r=r.substring(0,r.length-m.raw.length)+T.raw,n=k.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),p=e.split(`
`,1)[0],m=!d.trim(),k=0;if(this.options.pedantic?(k=2,c=d.trimStart()):m?k=t[1].length+1:(k=t[2].search(this.rules.other.nonSpaceChar),k=k>4?1:k,c=d.slice(k),k+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),a=!0),!a){const y=this.rules.other.nextBulletRegex(k),S=this.rules.other.hrRegex(k),C=this.rules.other.fencesBeginRegex(k),E=this.rules.other.headingBeginRegex(k),L=this.rules.other.htmlBeginRegex(k);for(;e;){const D=e.split(`
`,1)[0];let V;if(p=D,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),V=p):V=p.replace(this.rules.other.tabCharGlobal,"    "),C.test(p)||E.test(p)||L.test(p)||y.test(p)||S.test(p))break;if(V.search(this.rules.other.nonSpaceChar)>=k||!p.trim())c+=`
`+V.slice(k);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(d)||E.test(d)||S.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=D+`
`,e=e.substring(D.length+1),d=V.slice(k)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let T=null,O;this.options.gfm&&(T=this.rules.other.listIsTask.exec(c),T&&(O=T[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!T,checked:O,loose:!1,text:c,tokens:[]}),r.raw+=u}const l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const u=r.items[a].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=lo(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of r)i.rows.push(lo(l,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Sn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Xh(t[2],"()");if(i===-2)return;if(i>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),ao(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return ao(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let o,l,a=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+l);if(Math.min(i,l)%2){const k=p.slice(1,-1);return{type:"em",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},xt=class _r{constructor(t){be(this,"tokens");be(this,"options");be(this,"state");be(this,"tokenizer");be(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||tn,this.options.tokenizer=this.options.tokenizer||new vs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:De,block:es.normal,inline:Rn.normal};this.options.pedantic?(n.block=es.pedantic,n.inline=Rn.pedantic):this.options.gfm&&(n.block=es.gfm,this.options.breaks?n.inline=Rn.breaks:n.inline=Rn.gfm),this.tokenizer.rules=n}static get rules(){return{block:es,inline:Rn}}static lex(t,n){return new _r(n).lex(t)}static lexInline(t,n){return new _r(n).inlineTokens(t)}lex(t){t=t.replace(De.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,o;for(this.options.pedantic&&(t=t.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));t;){let l;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let a=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),s=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,a,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((a=(l=this.options.extensions)==null?void 0:l.inline)!=null&&a.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let k;this.options.extensions.startInline.forEach(T=>{k=T.call({lexer:this},m),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},_s=class{constructor(e){be(this,"options");be(this,"parser");this.options=e||tn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(De.notSpaceStart))==null?void 0:i[0],r=e.replace(De.endingNewline,"")+`
`;return s?'<pre><code class="language-'+at(s)+'">'+(n?r:at(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:at(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let o=0;o<e.items.length;o++){const l=e.items[o];s+=this.listitem(l)}const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=oo(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+at(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=oo(e);if(r===null)return at(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${at(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}},Qr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Ct=class yr{constructor(t){be(this,"options");be(this,"renderer");be(this,"textRenderer");this.options=t||tn,this.options.renderer=this.options.renderer||new _s,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Qr}static parse(t,n){return new yr(n).parse(t)}static parseInline(t,n){return new yr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=l,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const a=l;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=u||"";continue}}const a=l;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},tr,ls=(tr=class{constructor(e){be(this,"options");be(this,"block");this.options=e||tn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?xt.lex:xt.lexInline}provideParser(){return this.block?Ct.parse:Ct.parseInline}},be(tr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),tr),tg=class{constructor(...e){be(this,"defaults",zr());be(this,"options",this.setOptions);be(this,"parse",this.parseMarkdown(!0));be(this,"parseInline",this.parseMarkdown(!1));be(this,"Parser",Ct);be(this,"Renderer",_s);be(this,"TextRenderer",Qr);be(this,"Lexer",xt);be(this,"Tokenizer",vs);be(this,"Hooks",ls);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const a of l)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const a=o[l].flat(1/0);n=n.concat(this.walkTokens(a,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new _s(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,l=n.renderer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new vs(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,l=n.tokenizer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new ls;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,l=n.hooks[o],a=r[o];ls.passThroughHooks.has(i)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(d=>a.call(r,d));const c=l.call(r,u);return a.call(r,c)}:r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return xt.lex(e,t??this.defaults)}parser(e,t){return Ct.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const l=i.hooks?i.hooks.provideLexer():e?xt.lex:xt.lexInline,a=i.hooks?i.hooks.provideParser():e?Ct.parse:Ct.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Yt=new tg;function ne(e,t){return Yt.parse(e,t)}ne.options=ne.setOptions=function(e){return Yt.setOptions(e),ne.defaults=Yt.defaults,Zl(ne.defaults),ne};ne.getDefaults=zr;ne.defaults=tn;ne.use=function(...e){return Yt.use(...e),ne.defaults=Yt.defaults,Zl(ne.defaults),ne};ne.walkTokens=function(e,t){return Yt.walkTokens(e,t)};ne.parseInline=Yt.parseInline;ne.Parser=Ct;ne.parser=Ct.parse;ne.Renderer=_s;ne.TextRenderer=Qr;ne.Lexer=xt;ne.lexer=xt.lex;ne.Tokenizer=vs;ne.Hooks=ls;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;Ct.parse;xt.lex;const ng=Object.fromEntries(dn.map(e=>[e.path,e.slug])),sg=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),rg=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return sg(n.join("/"))},ig=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",oa=()=>{const e=new Map;return t=>{const n=ig(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},og=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?rg(t,s):t;if(i.endsWith(".md")){const o=ng[i];if(o)return`#/docs/${o}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};ne.setOptions({gfm:!0,breaks:!0});const lg=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const o=og(i,t,n);return`[${r}](${o})`}),ag=e=>{const t=ne.lexer(String(e||"")),n=oa();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},cg=(e,t,n)=>{const s=new ne.Renderer,r=oa();s.link=({href:o,title:l,tokens:a})=>{const u=ne.Parser.parseInline(a),c=o||"",d=/^https?:\/\//i.test(c),p=l?` title="${l}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:o,title:l,text:a})=>{const u=l?` title="${l}"`:"";return`<img src="${o}" alt="${a||""}"${u} />`},s.heading=({tokens:o,depth:l,text:a})=>{const u=r(a),c=ne.Parser.parseInline(o);return`<h${l} id="${u}" data-doc-heading="${u}">${c}</h${l}>`};const i=lg(e,t,n);return ne.parse(i,{renderer:s})},ug={key:0,class:"docs-article-shell"},fg={class:"doc-breadcrumb"},dg={class:"doc-header surface-card"},pg={class:"card-label"},hg={class:"doc-meta"},gg=["innerHTML"],mg={class:"doc-footer surface-card"},bg=["onClick"],vg={key:2,class:"docs-article-shell"},_g={class:"empty-state"},yg={__name:"DocArticlePage",setup(e){const t=Bl(),n=zf(),s=Se(""),r=Se(null),i=Se(null),o=me(()=>Kl[t.params.slug]),l=me(()=>o.value?_h[o.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),a=me(()=>ag(l.value)),u=me(()=>o.value?cg(l.value,o.value.path,o.value.slug):""),c=me(()=>dn.findIndex(L=>{var D;return L.slug===((D=o.value)==null?void 0:D.slug)})),d=me(()=>c.value>0?dn[c.value-1]:null),p=me(()=>c.value>=0&&c.value<dn.length-1?dn[c.value+1]:null),m=(L,D,V)=>{if(!L)return;const se=L.querySelector(D);if(!se)return;const z=L.querySelector(V),Y=((z==null?void 0:z.offsetHeight)||0)+14,le=se.offsetTop,H=le+se.offsetHeight,re=L.scrollTop+Y,Te=L.scrollTop+L.clientHeight-12;le<re?L.scrollTop=Math.max(0,le-Y):H>Te&&(L.scrollTop=H-L.clientHeight+12)},k=()=>{m(r.value,".docs-nav-link.active",".docs-sidebar-head"),m(i.value,".docs-outline-link.active",".docs-outline-head")},T=()=>{const L=a.value.find(D=>{const V=document.getElementById(D.id);if(!V)return!1;const se=V.getBoundingClientRect();return se.top>=0&&se.top<=180});L&&s.value!==L.id&&(s.value=L.id,k())},O=L=>{window.innerWidth<=920||Math.abs(L.deltaY)<Math.abs(L.deltaX)||(L.preventDefault(),window.scrollBy({top:L.deltaY,behavior:"auto"}))},y=()=>{var L,D;(L=r.value)==null||L.addEventListener("wheel",O,{passive:!1}),(D=i.value)==null||D.addEventListener("wheel",O,{passive:!1})},S=()=>{var L,D;(L=r.value)==null||L.removeEventListener("wheel",O),(D=i.value)==null||D.removeEventListener("wheel",O)},C=async L=>{await Kt();const D=document.getElementById(L);D&&(s.value=L,D.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:L}}))},E=async()=>{var D;await Kt();const L=t.query.section?String(t.query.section):"";if(L){const V=document.getElementById(L);if(V){s.value=L,requestAnimationFrame(()=>{V.scrollIntoView({behavior:"smooth",block:"start"}),k()});return}}s.value=((D=a.value[0])==null?void 0:D.id)||"",requestAnimationFrame(k)};return en(async()=>{window.addEventListener("scroll",T,{passive:!0}),await Kt(),y(),k()}),Ps(()=>{window.removeEventListener("scroll",T),S()}),Bt([u,()=>t.query.section,()=>t.params.slug],E,{immediate:!0}),Bt([()=>t.params.slug,()=>a.value.length],async()=>{S(),await Kt(),y(),k()}),(L,D)=>{const V=Ht("router-link");return A(),I("div",{class:Ie(["page-shell container docs-layout-page",{"has-outline":a.value.length}])},[f("aside",{ref_key:"sidebarRef",ref:r,class:"docs-sidebar surface-card"},[D[0]||(D[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(A(!0),I(X,null,_e(ge(ms),se=>(A(),I("div",{key:se.key,class:"docs-nav-group"},[f("h3",null,P(se.title),1),(A(!0),I(X,null,_e(se.items,z=>{var Y;return A(),un(V,{key:z.slug,to:`/docs/${z.slug}`,class:Ie(["docs-nav-link",{active:((Y=o.value)==null?void 0:Y.slug)===z.slug}])},{default:Q(()=>[f("span",null,P(z.title),1),f("small",null,P(z.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))],512),o.value?(A(),I("section",ug,[f("div",fg,[j(V,{to:"/docs"},{default:Q(()=>[...D[1]||(D[1]=[ie("文档首页",-1)])]),_:1}),D[2]||(D[2]=f("span",null,"/",-1)),f("span",null,P(o.value.groupTitle),1)]),f("header",dg,[f("div",null,[f("span",pg,P(o.value.tag),1),f("h1",null,P(o.value.title),1),f("p",null,P(o.value.description),1)]),f("div",hg,[f("span",null,P(o.value.groupTitle),1),f("span",null,P(o.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:u.value},null,8,gg),f("footer",mg,[d.value?(A(),un(V,{key:0,class:"doc-pager",to:`/docs/${d.value.slug}`},{default:Q(()=>[D[3]||(D[3]=f("small",null,"上一篇",-1)),f("strong",null,P(d.value.title),1)]),_:1},8,["to"])):(A(),un(V,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:Q(()=>[...D[4]||(D[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),p.value?(A(),un(V,{key:2,class:"doc-pager align-right",to:`/docs/${p.value.slug}`},{default:Q(()=>[D[5]||(D[5]=f("small",null,"下一篇",-1)),f("strong",null,P(p.value.title),1)]),_:1},8,["to"])):Qe("",!0)])])):Qe("",!0),o.value&&a.value.length?(A(),I("aside",{key:1,ref_key:"outlineRef",ref:i,class:"docs-outline surface-card"},[D[6]||(D[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(A(!0),I(X,null,_e(a.value,se=>(A(),I("button",{key:se.id,class:Ie(["docs-outline-link",[`depth-${se.depth}`,{active:s.value===se.id}]]),onClick:z=>C(se.id)},P(se.text),11,bg))),128))],512)):o.value?Qe("",!0):(A(),I("section",vg,[f("div",_g,[D[8]||(D[8]=f("strong",null,"没有找到对应文档。",-1)),D[9]||(D[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),j(V,{class:"button primary",to:"/docs"},{default:Q(()=>[...D[7]||(D[7]=[ie("返回文档首页",-1)])]),_:1})])]))],2)}}},kg={class:"page-shell container"},wg={class:"roadmap-grid"},xg={class:"roadmap-head"},Cg={class:"card-label"},Tg={class:"roadmap-list"},Rg={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(A(),I("div",kg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",wg,[(A(),I(X,null,_e(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",xg,[f("span",Cg,P(r.tag),1),f("h2",null,P(r.title),1),f("p",null,P(r.description),1)]),f("div",Tg,[(A(!0),I(X,null,_e(r.items,i=>(A(),I("div",{class:"roadmap-item",key:i.title},[f("div",{class:Ie(["roadmap-state",r.stateClass])},P(r.stateLabel),3),f("h3",null,P(i.title),1),f("p",null,P(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},Sg={class:"page-shell container"},Ag={class:"page-hero"},Eg={class:"hero-actions"},Pg={class:"stack-section surface-card changelog-toolbar"},Ig={class:"release-filter-row"},$g={class:"filter-chip-group"},Og=["onClick"],Mg={key:0,class:"stack-section"},Lg={key:1,class:"stack-section changelog-timeline"},Ng={class:"timeline-card surface-card"},Dg={class:"release-head"},Bg={class:"release-date"},Wg={class:"release-tag"},Hg={key:0,class:"bullet-list compact-list"},Fg={key:1,class:"release-body"},jg={class:"release-actions"},zg=["href"],Ug={class:"muted"},Gg={key:2,class:"stack-section"},qg={__name:"ChangelogPage",setup(e){const t=Se(!0),n=Se([]),s=Se("all"),r=Se(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=me(()=>{const l=r.value.toLowerCase();return Vl(n.value).filter(a=>{const u=Nt(a);return s.value!=="all"&&u!==s.value?!1:l?[a.name,a.tag_name,qn(a.body)].filter(Boolean).join(" ").toLowerCase().includes(l):!0})});return en(async()=>{const l=await Gl();n.value=l.data,t.value=!1}),(l,a)=>{const u=Ht("router-link");return A(),I("div",Sg,[f("section",Ag,[a[3]||(a[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),a[4]||(a[4]=f("h1",null,"更新日志",-1)),a[5]||(a[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",Eg,[a[2]||(a[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(u,{class:"button secondary",to:"/downloads"},{default:Q(()=>[...a[1]||(a[1]=[ie("查看下载页",-1)])]),_:1})])]),f("section",Pg,[a[6]||(a[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Ig,[f("div",$g,[(A(),I(X,null,_e(i,c=>f("button",{key:c.value,class:Ie(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},P(c.label),11,Og)),64))]),Lr(f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Hr,r.value,void 0,{trim:!0}]])])]),t.value?(A(),I("section",Mg,[...a[7]||(a[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(A(),I("section",Lg,[(A(!0),I(X,null,_e(o.value,c=>(A(),I("article",{class:"timeline-item",key:c.id||c.tag_name},[a[8]||(a[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",Ng,[f("div",Dg,[f("span",{class:Ie(["release-badge",{alt:ge(Nt)(c)==="preview"}])},P(ge(ql)(ge(Nt)(c))),3),f("span",Bg,P(ge(os)(c.published_at)),1)]),f("h3",null,P(c.name||c.tag_name),1),f("p",Wg,P(c.tag_name),1),ge(Lt)(c.body,5).length?(A(),I("ul",Hg,[(A(!0),I(X,null,_e(ge(Lt)(c.body,5),d=>(A(),I("li",{key:d},P(d),1))),128))])):(A(),I("p",Fg,P(ge(qn)(c.body)||"暂无发布说明。"),1)),f("div",jg,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,zg),f("span",Ug,P((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(A(),I("section",Gg,[...a[9]||(a[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Vg={class:"page-shell container"},Kg={class:"stack-section"},Zg={class:"section-head left"},Jg={key:0,class:"contributor-grid"},Qg=["href"],Yg=["src","alt"],Xg={key:1,class:"empty-state"},em={__name:"CommunityPage",setup(e){const t=Se([]),n=Se("empty"),s=me(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return en(async()=>{const r=await ep();t.value=r.data,n.value=r.source}),(r,i)=>(A(),I("div",Vg,[i[2]||(i[2]=pt('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持</h1><p> 如果你想反馈问题、参与讨论、查看贡献者或者先看常见问题，这一页就是对外的统一入口。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",Kg,[f("div",Zg,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,P(s.value),1)]),t.value.length?(A(),I("div",Jg,[(A(!0),I(X,null,_e(t.value,o=>(A(),I("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login},null,8,Yg),f("strong",null,P(o.login),1),f("small",null,P(o.contributions)+" 次公开提交",1)],8,Qg))),128))])):(A(),I("div",Xg,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=pt('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},tm=[{path:"/",component:Gd,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:Zd,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：Minecraft 服务端性能优化、Paper / Folia 相关生态、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:zp,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:eh,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:yg,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:Rg,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:qg,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:em,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],la=jf({history:yf("/"),routes:tm});outer;const aa=$u(nd),er="https://treemc-cloud.github.io/",nm="TreeCore 官方网站：我的世界 / Minecraft 服务端核心，面向 Paper、Folia、TreeMC 与高性能服务器场景，提供 Web 管理、诊断、资源包链路与技术文档。",on=(e,t)=>{let n=document.head.querySelector(e);n||(n=document.createElement("meta"),document.head.appendChild(n)),Object.entries(t).forEach(([s,r])=>n.setAttribute(s,r))};la.afterEach((e,t)=>{var c,d,p,m;const n="TreeCore 官方网站",s=(c=e.params)!=null&&c.slug?Kl[e.params.slug]:null,r=(s==null?void 0:s.title)||((d=e.meta)==null?void 0:d.title),i=(s==null?void 0:s.description)||((p=e.meta)==null?void 0:p.description)||nm,o=r?`${r} | ${n}`:n,l=e.fullPath==="/"?er:`${er}#${e.fullPath}`;document.title=o,on('meta[name="description"]',{name:"description",content:i}),on('meta[property="og:title"]',{property:"og:title",content:o}),on('meta[property="og:description"]',{property:"og:description",content:i}),on('meta[property="og:url"]',{property:"og:url",content:l}),on('meta[name="twitter:title"]',{name:"twitter:title",content:o}),on('meta[name="twitter:description"]',{name:"twitter:description",content:i});const a=document.querySelector('link[rel="canonical"]');a&&a.setAttribute("href",er),e.path===t.path&&((m=e.query)==null?void 0:m.section)||window.scrollTo({top:0,behavior:"smooth"})});aa.use(la);aa.mount("#app");

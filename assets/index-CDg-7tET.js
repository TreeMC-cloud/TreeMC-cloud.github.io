var pa=Object.defineProperty;var ha=(e,t,n)=>t in e?pa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>ha(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ve={},gn=[],dt=()=>{},fo=()=>!1,xs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Cr=e=>e.startsWith("onUpdate:"),Ae=Object.assign,Tr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ga=Object.prototype.hasOwnProperty,ue=(e,t)=>ga.call(e,t),K=Array.isArray,mn=e=>Qn(e)==="[object Map]",po=e=>Qn(e)==="[object Set]",si=e=>Qn(e)==="[object Date]",Q=e=>typeof e=="function",xe=e=>typeof e=="string",pt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",ho=e=>(fe(e)||Q(e))&&Q(e.then)&&Q(e.catch),go=Object.prototype.toString,Qn=e=>go.call(e),ma=e=>Qn(e).slice(8,-1),mo=e=>Qn(e)==="[object Object]",Sr=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ba=/-\w/g,Qe=Cs(e=>e.replace(ba,t=>t.slice(1).toUpperCase())),va=/\B([A-Z])/g,nn=Cs(e=>e.replace(va,"-$1").toLowerCase()),Ts=Cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hs=Cs(e=>e?`on${Ts(e)}`:""),Wt=(e,t)=>!Object.is(e,t),rs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},bo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Rr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ya=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let ri;const Ss=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=xe(s)?xa(s):Rs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(xe(e)||fe(e))return e}const _a=/;(?![^(]*\))/g,ka=/:([^]+)/,wa=/\/\*[^]*?\*\//g;function xa(e){const t={};return e.replace(wa,"").split(_a).forEach(n=>{if(n){const s=n.split(ka);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(xe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const s=De(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ca="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ta=xr(Ca);function vo(e){return!!e||e===""}function Sa(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Ar(e[s],t[s]);return n}function Ar(e,t){if(e===t)return!0;let n=si(e),s=si(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=pt(e),s=pt(t),n||s)return e===t;if(n=K(e),s=K(t),n||s)return n&&s?Sa(e,t):!1;if(n=fe(e),s=fe(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Ar(e[o],t[o]))return!1}}return String(e)===String(t)}const yo=e=>!!(e&&e.__v_isRef===!0),P=e=>xe(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===go||!Q(e.toString))?yo(e)?P(e.value):JSON.stringify(e,_o,2):String(e),_o=(e,t)=>yo(t)?_o(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[js(s,i)+" =>"]=r,n),{})}:po(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>js(n))}:pt(t)?js(t):fe(t)&&!K(t)&&!mo(t)?String(t):t,js=(e,t="")=>{var n;return pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Ra{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Aa(){return je}let _e;const zs=new WeakSet;class ko{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zs.has(this)&&(zs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ii(this),Co(this);const t=_e,n=Ye;_e=this,Ye=!0;try{return this.fn()}finally{To(this),_e=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ir(t);this.deps=this.depsTail=void 0,ii(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let wo=0,On,Mn;function xo(e,t=!1){if(e.flags|=8,t){e.next=Mn,Mn=e;return}e.next=On,On=e}function Er(){wo++}function Pr(){if(--wo>0)return;if(Mn){let t=Mn;for(Mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;On;){let t=On;for(On=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Co(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function To(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ir(s),Ea(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function rr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(So(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function So(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hn)||(e.globalVersion=Hn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rr(e))))return;e.flags|=2;const t=e.dep,n=_e,s=Ye;_e=e,Ye=!0;try{Co(e);const r=e.fn(e._value);(t.version===0||Wt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{_e=n,Ye=s,To(e),e.flags&=-3}}function Ir(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ir(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ea(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const Ro=[];function Rt(){Ro.push(Ye),Ye=!1}function At(){const e=Ro.pop();Ye=e===void 0?!0:e}function ii(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=_e;_e=void 0;try{t()}finally{_e=n}}}let Hn=0;class Pa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $r{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Ye||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Pa(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,Ao(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=s)}return n}trigger(t){this.version++,Hn++,this.notify(t)}notify(t){Er();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pr()}}}function Ao(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ao(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ir=new WeakMap,Xt=Symbol(""),or=Symbol(""),jn=Symbol("");function Ee(e,t,n){if(Ye&&_e){let s=ir.get(e);s||ir.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new $r),r.map=s,r.key=n),r.track()}}function xt(e,t,n,s,r,i){const o=ir.get(e);if(!o){Hn++;return}const l=a=>{a&&a.trigger()};if(Er(),t==="clear")o.forEach(l);else{const a=K(e),u=a&&Sr(n);if(a&&n==="length"){const c=Number(s);o.forEach((d,p)=>{(p==="length"||p===jn||!pt(p)&&p>=c)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(jn)),t){case"add":a?u&&l(o.get("length")):(l(o.get(Xt)),mn(e)&&l(o.get(or)));break;case"delete":a||(l(o.get(Xt)),mn(e)&&l(o.get(or)));break;case"set":mn(e)&&l(o.get(Xt));break}}Pr()}function an(e){const t=oe(e);return t===e?t:(Ee(t,"iterate",jn),Ze(e)?t:t.map(et))}function As(e){return Ee(e=oe(e),"iterate",jn),e}function Mt(e,t){return Et(e)?yn(en(e)?et(t):t):et(t)}const Ia={__proto__:null,[Symbol.iterator](){return Gs(this,Symbol.iterator,e=>Mt(this,e))},concat(...e){return an(this).concat(...e.map(t=>K(t)?an(t):t))},entries(){return Gs(this,"entries",e=>(e[1]=Mt(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>Mt(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>Mt(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>Mt(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Us(this,"includes",e)},indexOf(...e){return Us(this,"indexOf",e)},join(e){return an(this).join(e)},lastIndexOf(...e){return Us(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return xn(this,"pop")},push(...e){return xn(this,"push",e)},reduce(e,...t){return oi(this,"reduce",e,t)},reduceRight(e,...t){return oi(this,"reduceRight",e,t)},shift(){return xn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return xn(this,"splice",e)},toReversed(){return an(this).toReversed()},toSorted(e){return an(this).toSorted(e)},toSpliced(...e){return an(this).toSpliced(...e)},unshift(...e){return xn(this,"unshift",e)},values(){return Gs(this,"values",e=>Mt(this,e))}};function Gs(e,t,n){const s=As(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const $a=Array.prototype;function mt(e,t,n,s,r,i){const o=As(e),l=o!==e&&!Ze(e),a=o[t];if(a!==$a[t]){const d=a.apply(e,i);return l?et(d):d}let u=n;o!==e&&(l?u=function(d,p){return n.call(this,Mt(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=a.call(o,u,s);return l&&r?r(c):c}function oi(e,t,n,s){const r=As(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,Mt(e,l),a,e)}),r[t](i,...s)}function Us(e,t,n){const s=oe(e);Ee(s,"iterate",jn);const r=s[t](...n);return(r===-1||r===!1)&&Lr(n[0])?(n[0]=oe(n[0]),s[t](...n)):r}function xn(e,t,n=[]){Rt(),Er();const s=oe(e)[t].apply(e,n);return Pr(),At(),s}const Oa=xr("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt));function Ma(e){pt(e)||(e=String(e));const t=oe(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ga:Mo:i?Oo:$o).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=K(t);if(!r){let a;if(o&&(a=Ia[n]))return a;if(n==="hasOwnProperty")return Ma}const l=Reflect.get(t,n,Ie(t)?t:s);if((pt(n)?Eo.has(n):Oa(n))||(r||Ee(t,"get",n),i))return l;if(Ie(l)){const a=o&&Sr(n)?l:l.value;return r&&fe(a)?ar(a):a}return fe(l)?r?ar(l):Es(l):l}}class Io extends Po{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=K(t)&&Sr(n);if(!this._isShallow){const u=Et(i);if(!Ze(s)&&!Et(s)&&(i=oe(i),s=oe(s)),!o&&Ie(i)&&!Ie(s))return u||(i.value=s),!0}const l=o?Number(n)<t.length:ue(t,n),a=Reflect.set(t,n,s,Ie(t)?t:r);return t===oe(r)&&(l?Wt(s,i)&&xt(t,"set",n,s):xt(t,"add",n,s)),a}deleteProperty(t,n){const s=ue(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&xt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!pt(n)||!Eo.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",K(t)?"length":Xt),Reflect.ownKeys(t)}}class La extends Po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Na=new Io,Da=new La,Ba=new Io(!0);const lr=e=>e,es=e=>Reflect.getPrototypeOf(e);function Wa(e,t,n){return function(...s){const r=this.__v_raw,i=oe(r),o=mn(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=r[e](...s),c=n?lr:t?yn:et;return!t&&Ee(i,"iterate",a?or:Xt),Ae(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:l?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function ts(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fa(e,t){const n={get(r){const i=this.__v_raw,o=oe(i),l=oe(r);e||(Wt(r,l)&&Ee(o,"get",r),Ee(o,"get",l));const{has:a}=es(o),u=t?lr:e?yn:et;if(a.call(o,r))return u(i.get(r));if(a.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(oe(r),"iterate",Xt),r.size},has(r){const i=this.__v_raw,o=oe(i),l=oe(r);return e||(Wt(r,l)&&Ee(o,"has",r),Ee(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,a=oe(l),u=t?lr:e?yn:et;return!e&&Ee(a,"iterate",Xt),l.forEach((c,d)=>r.call(i,u(c),u(d),o))}};return Ae(n,e?{add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear")}:{add(r){!t&&!Ze(r)&&!Et(r)&&(r=oe(r));const i=oe(this);return es(i).has.call(i,r)||(i.add(r),xt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!Et(i)&&(i=oe(i));const o=oe(this),{has:l,get:a}=es(o);let u=l.call(o,r);u||(r=oe(r),u=l.call(o,r));const c=a.call(o,r);return o.set(r,i),u?Wt(i,c)&&xt(o,"set",r,i):xt(o,"add",r,i),this},delete(r){const i=oe(this),{has:o,get:l}=es(i);let a=o.call(i,r);a||(r=oe(r),a=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return a&&xt(i,"delete",r,void 0),u},clear(){const r=oe(this),i=r.size!==0,o=r.clear();return i&&xt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Wa(r,e,t)}),n}function Or(e,t){const n=Fa(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const Ha={get:Or(!1,!1)},ja={get:Or(!1,!0)},za={get:Or(!0,!1)};const $o=new WeakMap,Oo=new WeakMap,Mo=new WeakMap,Ga=new WeakMap;function Ua(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ua(ma(e))}function Es(e){return Et(e)?e:Mr(e,!1,Na,Ha,$o)}function Lo(e){return Mr(e,!1,Ba,ja,Oo)}function ar(e){return Mr(e,!0,Da,za,Mo)}function Mr(e,t,n,s,r){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=qa(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function en(e){return Et(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Lr(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Va(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&bo(e,"__v_skip",!0),e}const et=e=>fe(e)?Es(e):e,yn=e=>fe(e)?ar(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function Re(e){return No(e,!1)}function Ka(e){return No(e,!0)}function No(e,t){return Ie(e)?e:new Za(e,t)}class Za{constructor(t,n){this.dep=new $r,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:et(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||Et(t);t=s?t:oe(t),Wt(t,n)&&(this._rawValue=t,this._value=s?t:et(t),this.dep.trigger())}}function me(e){return Ie(e)?e.value:e}const Qa={get:(e,t,n)=>t==="__v_raw"?e:me(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ie(r)&&!Ie(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Do(e){return en(e)?e:new Proxy(e,Qa)}class Ja{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new $r(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return xo(this,!0),!0}get value(){const t=this.dep.track();return So(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ya(e,t,n=!1){let s,r;return Q(e)?s=e:(s=e.get,r=e.set),new Ja(s,r,n)}const ns={},fs=new WeakMap;let Zt;function Xa(e,t=!1,n=Zt){if(n){let s=fs.get(n);s||fs.set(n,s=[]),s.push(e)}}function ec(e,t,n=ve){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:a}=n,u=A=>r?A:Ze(A)||r===!1||r===0?Ct(A,1):Ct(A);let c,d,p,m,k=!1,T=!1;if(Ie(e)?(d=()=>e.value,k=Ze(e)):en(e)?(d=()=>u(e),k=!0):K(e)?(T=!0,k=e.some(A=>en(A)||Ze(A)),d=()=>e.map(A=>{if(Ie(A))return A.value;if(en(A))return u(A);if(Q(A))return a?a(A,2):A()})):Q(e)?t?d=a?()=>a(e,2):e:d=()=>{if(p){Rt();try{p()}finally{At()}}const A=Zt;Zt=c;try{return a?a(e,3,[m]):e(m)}finally{Zt=A}}:d=dt,t&&r){const A=d,L=r===!0?1/0:r;d=()=>Ct(A(),L)}const $=Aa(),_=()=>{c.stop(),$&&$.active&&Tr($.effects,c)};if(i&&t){const A=t;t=(...L)=>{A(...L),_()}}let R=T?new Array(e.length).fill(ns):ns;const C=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const L=c.run();if(r||k||(T?L.some((D,V)=>Wt(D,R[V])):Wt(L,R))){p&&p();const D=Zt;Zt=c;try{const V=[L,R===ns?void 0:T&&R[0]===ns?[]:R,m];R=L,a?a(t,3,V):t(...V)}finally{Zt=D}}}else c.run()};return l&&l(C),c=new ko(d),c.scheduler=o?()=>o(C,!1):C,m=A=>Xa(A,!1,c),p=c.onStop=()=>{const A=fs.get(c);if(A){if(a)a(A,4);else for(const L of A)L();fs.delete(c)}},t?s?C(!0):R=c.run():o?o(C.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function Ct(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ie(e))Ct(e.value,t,n);else if(K(e))for(let s=0;s<e.length;s++)Ct(e[s],t,n);else if(po(e)||mn(e))e.forEach(s=>{Ct(s,t,n)});else if(mo(e)){for(const s in e)Ct(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ct(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jn(e,t,n,s){try{return s?e(...s):e()}catch(r){Ps(r,t,n)}}function tt(e,t,n,s){if(Q(e)){const r=Jn(e,t,n,s);return r&&ho(r)&&r.catch(i=>{Ps(i,t,n)}),r}if(K(e)){const r=[];for(let i=0;i<e.length;i++)r.push(tt(e[i],t,n,s));return r}}function Ps(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ve;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,u)===!1)return}l=l.parent}if(i){Rt(),Jn(i,null,10,[e,a,u]),At();return}}tc(e,n,r,s,o)}function tc(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let ct=-1;const bn=[];let Lt=null,cn=0;const Bo=Promise.resolve();let ds=null;function Jt(e){const t=ds||Bo;return e?t.then(this?e.bind(this):e):t}function nc(e){let t=ct+1,n=Me.length;for(;t<n;){const s=t+n>>>1,r=Me[s],i=zn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Nr(e){if(!(e.flags&1)){const t=zn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=zn(n)?Me.push(e):Me.splice(nc(t),0,e),e.flags|=1,Wo()}}function Wo(){ds||(ds=Bo.then(Ho))}function sc(e){K(e)?bn.push(...e):Lt&&e.id===-1?Lt.splice(cn+1,0,e):e.flags&1||(bn.push(e),e.flags|=1),Wo()}function li(e,t,n=ct+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Fo(e){if(bn.length){const t=[...new Set(bn)].sort((n,s)=>zn(n)-zn(s));if(bn.length=0,Lt){Lt.push(...t);return}for(Lt=t,cn=0;cn<Lt.length;cn++){const n=Lt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lt=null,cn=0}}const zn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ho(e){try{for(ct=0;ct<Me.length;ct++){const t=Me[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Jn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Me.length;ct++){const t=Me[ct];t&&(t.flags&=-2)}ct=-1,Me.length=0,Fo(),ds=null,(Me.length||bn.length)&&Ho()}}let Ue=null,jo=null;function ps(e){const t=Ue;return Ue=e,jo=e&&e.type.__scopeId||null,t}function J(e,t=Ue,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ms(-1);const i=ps(t);let o;try{o=e(...r)}finally{ps(i),s._d&&ms(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Dr(e,t){if(Ue===null)return e;const n=Ns(Ue),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,a=ve]=t[r];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Ct(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function Gt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(Rt(),tt(a,n,8,[e.el,l,e,t]),At())}}function is(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function Xe(e,t,n=!1){const s=xl();if(s||vn){let r=vn?vn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Q(t)?t.call(s&&s.proxy):t}}const rc=Symbol.for("v-scx"),ic=()=>Xe(rc);function Ft(e,t,n){return zo(e,t,n)}function zo(e,t,n=ve){const{immediate:s,deep:r,flush:i,once:o}=n,l=Ae({},n),a=t&&s||!t&&i!=="post";let u;if(qn){if(i==="sync"){const m=ic();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Pe;l.call=(m,k,T)=>tt(m,c,k,T);let d=!1;i==="post"?l.scheduler=m=>{He(m,c&&c.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,k)=>{k?m():Nr(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=ec(e,t,l);return qn&&(u?u.push(p):a&&p()),p}function oc(e,t,n){const s=this.proxy,r=xe(e)?e.includes(".")?Go(s,e):()=>s[e]:e.bind(s,s);let i;Q(t)?i=t:(i=t.handler,n=t);const o=Yn(this),l=zo(r,i.bind(s),n);return o(),l}function Go(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const lc=Symbol("_vte"),Uo=e=>e.__isTeleport,ut=Symbol("_leaveCb"),Cn=Symbol("_enterCb");function ac(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sn(()=>{e.isMounted=!0}),Os(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],qo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Vo=e=>{const t=e.subTree;return t.component?Vo(t.component):t},cc={name:"BaseTransition",props:qo,setup(e,{slots:t}){const n=xl(),s=ac();return()=>{const r=t.default&&Qo(t.default(),!0);if(!r||!r.length)return;const i=Ko(r),o=oe(e),{mode:l}=o;if(s.isLeaving)return qs(i);const a=ai(i);if(!a)return qs(i);let u=cr(a,o,s,n,d=>u=d);a.type!==Le&&Gn(a,u);let c=n.subTree&&ai(n.subTree);if(c&&c.type!==Le&&!Qt(c,a)&&Vo(n).type!==Le){let d=cr(c,o,s,n);if(Gn(c,d),l==="out-in"&&a.type!==Le)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},qs(i);l==="in-out"&&a.type!==Le?d.delayLeave=(p,m,k)=>{const T=Zo(s,c);T[String(c.key)]=c,p[ut]=()=>{m(),p[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{k(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Ko(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Le){t=n;break}}return t}const uc=cc;function Zo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function cr(e,t,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:k,onLeaveCancelled:T,onBeforeAppear:$,onAppear:_,onAfterAppear:R,onAppearCancelled:C}=t,A=String(e.key),L=Zo(n,e),D=(z,Y)=>{z&&tt(z,s,9,Y)},V=(z,Y)=>{const le=Y[1];D(z,Y),K(z)?z.every(F=>F.length<=1)&&le():z.length<=1&&le()},se={mode:o,persisted:l,beforeEnter(z){let Y=a;if(!n.isMounted)if(i)Y=$||a;else return;z[ut]&&z[ut](!0);const le=L[A];le&&Qt(e,le)&&le.el[ut]&&le.el[ut](),D(Y,[z])},enter(z){if(L[A]===e)return;let Y=u,le=c,F=d;if(!n.isMounted)if(i)Y=_||u,le=R||c,F=C||d;else return;let ie=!1;z[Cn]=ze=>{ie||(ie=!0,ze?D(F,[z]):D(le,[z]),se.delayedLeave&&se.delayedLeave(),z[Cn]=void 0)};const Te=z[Cn].bind(null,!1);Y?V(Y,[z,Te]):Te()},leave(z,Y){const le=String(e.key);if(z[Cn]&&z[Cn](!0),n.isUnmounting)return Y();D(p,[z]);let F=!1;z[ut]=Te=>{F||(F=!0,Y(),Te?D(T,[z]):D(k,[z]),z[ut]=void 0,L[le]===e&&delete L[le])};const ie=z[ut].bind(null,!1);L[le]=e,m?V(m,[z,ie]):ie()},clone(z){const Y=cr(z,t,n,s,r);return r&&r(Y),Y}};return se}function qs(e){if(Is(e))return e=Ht(e),e.children=null,e}function ai(e){if(!Is(e))return Uo(e.type)&&e.children?Ko(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function Gn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qo(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===X?(o.patchFlag&128&&r++,s=s.concat(Qo(o.children,t,l))):(t||o.type!==Le)&&s.push(l!=null?Ht(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Jo(e,t){return Q(e)?Ae({name:e.name},t,{setup:e}):e}function Yo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ci(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const hs=new WeakMap;function Ln(e,t,n,s,r=!1){if(K(e)){e.forEach((T,$)=>Ln(T,t&&(K(t)?t[$]:t),n,s,r));return}if(Nn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ln(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Ns(s.component):s.el,o=r?null:i,{i:l,r:a}=e,u=t&&t.r,c=l.refs===ve?l.refs={}:l.refs,d=l.setupState,p=oe(d),m=d===ve?fo:T=>ci(c,T)?!1:ue(p,T),k=(T,$)=>!($&&ci(c,$));if(u!=null&&u!==a){if(ui(t),xe(u))c[u]=null,m(u)&&(d[u]=null);else if(Ie(u)){const T=t;k(u,T.k)&&(u.value=null),T.k&&(c[T.k]=null)}}if(Q(a))Jn(a,l,12,[o,c]);else{const T=xe(a),$=Ie(a);if(T||$){const _=()=>{if(e.f){const R=T?m(a)?d[a]:c[a]:k()||!e.k?a.value:c[e.k];if(r)K(R)&&Tr(R,i);else if(K(R))R.includes(i)||R.push(i);else if(T)c[a]=[i],m(a)&&(d[a]=c[a]);else{const C=[i];k(a,e.k)&&(a.value=C),e.k&&(c[e.k]=C)}}else T?(c[a]=o,m(a)&&(d[a]=o)):$&&(k(a,e.k)&&(a.value=o),e.k&&(c[e.k]=o))};if(o){const R=()=>{_(),hs.delete(e)};R.id=-1,hs.set(e,R),He(R,n)}else ui(e),_()}}}function ui(e){const t=hs.get(e);t&&(t.flags|=8,hs.delete(e))}Ss().requestIdleCallback;Ss().cancelIdleCallback;const Nn=e=>!!e.type.__asyncLoader,Is=e=>e.type.__isKeepAlive;function fc(e,t){Xo(e,"a",t)}function dc(e,t){Xo(e,"da",t)}function Xo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if($s(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Is(r.parent.vnode)&&pc(s,t,n,r),r=r.parent}}function pc(e,t,n,s){const r=$s(t,e,s,!0);el(()=>{Tr(s[t],r)},n)}function $s(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Rt();const l=Yn(n),a=tt(t,n,e,o);return l(),At(),a});return s?r.unshift(i):r.push(i),i}}const Pt=e=>(t,n=Pe)=>{(!qn||e==="sp")&&$s(e,(...s)=>t(...s),n)},hc=Pt("bm"),sn=Pt("m"),gc=Pt("bu"),mc=Pt("u"),Os=Pt("bum"),el=Pt("um"),bc=Pt("sp"),vc=Pt("rtg"),yc=Pt("rtc");function _c(e,t=Pe){$s("ec",e,t)}const tl="components";function jt(e,t){return sl(tl,e,!0,t)||e}const nl=Symbol.for("v-ndc");function kc(e){return xe(e)?sl(tl,e,!1)||e:e||nl}function sl(e,t,n=!0,s=!1){const r=Ue||Pe;if(r){const i=r.type;{const l=iu(i,!1);if(l&&(l===t||l===Qe(t)||l===Ts(Qe(t))))return i}const o=fi(r[e]||i[e],t)||fi(r.appContext[e],t);return!o&&s?i:o}}function fi(e,t){return e&&(e[t]||e[Qe(t)]||e[Ts(Qe(t))])}function ke(e,t,n,s){let r;const i=n,o=K(e);if(o||xe(e)){const l=o&&en(e);let a=!1,u=!1;l&&(a=!Ze(e),u=Et(e),e=As(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(a?u?yn(et(e[c])):et(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(fe(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];r[a]=t(e[c],c,a,i)}}else r=[];return r}const ur=e=>e?Cl(e)?Ns(e):ur(e.parent):null,Dn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ur(e.parent),$root:e=>ur(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>il(e),$forceUpdate:e=>e.f||(e.f=()=>{Nr(e.update)}),$nextTick:e=>e.n||(e.n=Jt.bind(e.proxy)),$watch:e=>oc.bind(e)}),Vs=(e,t)=>e!==ve&&!e.__isScriptSetup&&ue(e,t),wc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Vs(s,t))return o[t]=1,s[t];if(r!==ve&&ue(r,t))return o[t]=2,r[t];if(ue(i,t))return o[t]=3,i[t];if(n!==ve&&ue(n,t))return o[t]=4,n[t];fr&&(o[t]=0)}}const u=Dn[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==ve&&ue(n,t))return o[t]=4,n[t];if(d=a.config.globalProperties,ue(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Vs(r,t)?(r[t]=n,!0):s!==ve&&ue(s,t)?(s[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let a;return!!(n[l]||e!==ve&&l[0]!=="$"&&ue(e,l)||Vs(t,l)||ue(i,l)||ue(s,l)||ue(Dn,l)||ue(r.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function di(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fr=!0;function xc(e){const t=il(e),n=e.proxy,s=e.ctx;fr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:k,activated:T,deactivated:$,beforeDestroy:_,beforeUnmount:R,destroyed:C,unmounted:A,render:L,renderTracked:D,renderTriggered:V,errorCaptured:se,serverPrefetch:z,expose:Y,inheritAttrs:le,components:F,directives:ie,filters:Te}=t;if(u&&Cc(u,s,null),o)for(const ge in o){const ae=o[ge];Q(ae)&&(s[ge]=ae.bind(n))}if(r){const ge=r.call(n,n);fe(ge)&&(e.data=Es(ge))}if(fr=!0,i)for(const ge in i){const ae=i[ge],gt=Q(ae)?ae.bind(n,n):Q(ae.get)?ae.get.bind(n,n):dt,It=!Q(ae)&&Q(ae.set)?ae.set.bind(n):dt,st=he({get:gt,set:It});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>st.value,set:Be=>st.value=Be})}if(l)for(const ge in l)rl(l[ge],s,n,ge);if(a){const ge=Q(a)?a.call(n):a;Reflect.ownKeys(ge).forEach(ae=>{is(ae,ge[ae])})}c&&pi(c,e,"c");function Ce(ge,ae){K(ae)?ae.forEach(gt=>ge(gt.bind(n))):ae&&ge(ae.bind(n))}if(Ce(hc,d),Ce(sn,p),Ce(gc,m),Ce(mc,k),Ce(fc,T),Ce(dc,$),Ce(_c,se),Ce(yc,D),Ce(vc,V),Ce(Os,R),Ce(el,A),Ce(bc,z),K(Y))if(Y.length){const ge=e.exposed||(e.exposed={});Y.forEach(ae=>{Object.defineProperty(ge,ae,{get:()=>n[ae],set:gt=>n[ae]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});L&&e.render===dt&&(e.render=L),le!=null&&(e.inheritAttrs=le),F&&(e.components=F),ie&&(e.directives=ie),z&&Yo(e)}function Cc(e,t,n=dt){K(e)&&(e=dr(e));for(const s in e){const r=e[s];let i;fe(r)?"default"in r?i=Xe(r.from||s,r.default,!0):i=Xe(r.from||s):i=Xe(r),Ie(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function pi(e,t,n){tt(K(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function rl(e,t,n,s){let r=s.includes(".")?Go(n,s):()=>n[s];if(xe(e)){const i=t[e];Q(i)&&Ft(r,i)}else if(Q(e))Ft(r,e.bind(n));else if(fe(e))if(K(e))e.forEach(i=>rl(i,t,n,s));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&Ft(r,i,e)}}function il(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>gs(a,u,o,!0)),gs(a,t,o)),fe(t)&&i.set(t,a),a}function gs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&gs(e,i,n,!0),r&&r.forEach(o=>gs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Tc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Tc={data:hi,props:gi,emits:gi,methods:In,computed:In,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:In,directives:In,watch:Rc,provide:hi,inject:Sc};function hi(e,t){return t?e?function(){return Ae(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Sc(e,t){return In(dr(e),dr(t))}function dr(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function In(e,t){return e?Ae(Object.create(null),e,t):t}function gi(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Ae(Object.create(null),di(e),di(t??{})):t}function Rc(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=$e(e[s],t[s]);return n}function ol(){return{app:null,config:{isNativeTag:fo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ac=0;function Ec(e,t){return function(s,r=null){Q(s)||(s=Ae({},s)),r!=null&&!fe(r)&&(r=null);const i=ol(),o=new WeakSet,l=[];let a=!1;const u=i.app={_uid:Ac++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:lu,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(u,...d)):Q(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!a){const m=u._ceVNode||j(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),a=!0,u._container=c,c.__vue_app__=u,Ns(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(tt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=vn;vn=u;try{return c()}finally{vn=d}}};return u}}let vn=null;const Pc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${nn(t)}Modifiers`];function Ic(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let r=n;const i=t.startsWith("update:"),o=i&&Pc(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>xe(c)?c.trim():c)),o.number&&(r=n.map(Rr)));let l,a=s[l=Hs(t)]||s[l=Hs(Qe(t))];!a&&i&&(a=s[l=Hs(nn(t))]),a&&tt(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(u,e,6,r)}}const $c=new WeakMap;function ll(e,t,n=!1){const s=n?$c:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!Q(e)){const a=u=>{const c=ll(u,t,!0);c&&(l=!0,Ae(o,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(fe(e)&&s.set(e,null),null):(K(i)?i.forEach(a=>o[a]=null):Ae(o,i),fe(e)&&s.set(e,o),o)}function Ms(e,t){return!e||!xs(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,nn(t))||ue(e,t))}function mi(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:a,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:k,inheritAttrs:T}=e,$=ps(e);let _,R;try{if(n.shapeFlag&4){const A=r||s,L=A;_=ft(u.call(L,A,c,d,m,p,k)),R=l}else{const A=t;_=ft(A.length>1?A(d,{attrs:l,slots:o,emit:a}):A(d,null)),R=t.props?l:Oc(l)}}catch(A){Bn.length=0,Ps(A,e,1),_=j(Le)}let C=_;if(R&&T!==!1){const A=Object.keys(R),{shapeFlag:L}=C;A.length&&L&7&&(i&&A.some(Cr)&&(R=Mc(R,i)),C=Ht(C,R,!1,!0))}return n.dirs&&(C=Ht(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(C,n.transition),_=C,ps($),_}const Oc=e=>{let t;for(const n in e)(n==="class"||n==="style"||xs(n))&&((t||(t={}))[n]=e[n]);return t},Mc=(e,t)=>{const n={};for(const s in e)(!Cr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Lc(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?bi(s,o,u):!!o;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(al(o,s,p)&&!Ms(u,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?bi(s,o,u):!0:!!o;return!1}function bi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(al(t,e,i)&&!Ms(n,i))return!0}return!1}function al(e,t,n){const s=e[n],r=t[n];return n==="style"&&fe(s)&&fe(r)?!Ar(s,r):s!==r}function Nc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const cl={},ul=()=>Object.create(cl),fl=e=>Object.getPrototypeOf(e)===cl;function Dc(e,t,n,s=!1){const r={},i=ul();e.propsDefaults=Object.create(null),dl(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Lo(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Bc(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=oe(r),[a]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Ms(e.emitsOptions,p))continue;const m=t[p];if(a)if(ue(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const k=Qe(p);r[k]=pr(a,l,k,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{dl(e,t,r,i)&&(u=!0);let c;for(const d in l)(!t||!ue(t,d)&&((c=nn(d))===d||!ue(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=pr(a,l,d,void 0,e,!0)):delete r[d]);if(i!==l)for(const d in i)(!t||!ue(t,d))&&(delete i[d],u=!0)}u&&xt(e.attrs,"set","")}function dl(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if($n(a))continue;const u=t[a];let c;r&&ue(r,c=Qe(a))?!i||!i.includes(c)?n[c]=u:(l||(l={}))[c]=u:Ms(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(i){const a=oe(n),u=l||ve;for(let c=0;c<i.length;c++){const d=i[c];n[d]=pr(r,a,d,u[d],e,!ue(u,d))}}return o}function pr(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=ue(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Q(a)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Yn(r);s=u[n]=a.call(null,t),c()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Wc=new WeakMap;function pl(e,t,n=!1){const s=n?Wc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!Q(e)){const c=d=>{a=!0;const[p,m]=pl(d,t,!0);Ae(o,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return fe(e)&&s.set(e,gn),gn;if(K(i))for(let c=0;c<i.length;c++){const d=Qe(i[c]);vi(d)&&(o[d]=ve)}else if(i)for(const c in i){const d=Qe(c);if(vi(d)){const p=i[c],m=o[d]=K(p)||Q(p)?{type:p}:Ae({},p),k=m.type;let T=!1,$=!0;if(K(k))for(let _=0;_<k.length;++_){const R=k[_],C=Q(R)&&R.name;if(C==="Boolean"){T=!0;break}else C==="String"&&($=!1)}else T=Q(k)&&k.name==="Boolean";m[0]=T,m[1]=$,(T||ue(m,"default"))&&l.push(d)}}const u=[o,l];return fe(e)&&s.set(e,u),u}function vi(e){return e[0]!=="$"&&!$n(e)}const Br=e=>e==="_"||e==="_ctx"||e==="$stable",Wr=e=>K(e)?e.map(ft):[ft(e)],Fc=(e,t,n)=>{if(t._n)return t;const s=J((...r)=>Wr(t(...r)),n);return s._c=!1,s},hl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Br(r))continue;const i=e[r];if(Q(i))t[r]=Fc(r,i,s);else if(i!=null){const o=Wr(i);t[r]=()=>o}}},gl=(e,t)=>{const n=Wr(t);e.slots.default=()=>n},ml=(e,t,n)=>{for(const s in t)(n||!Br(s))&&(e[s]=t[s])},Hc=(e,t,n)=>{const s=e.slots=ul();if(e.vnode.shapeFlag&32){const r=t._;r?(ml(s,t,n),n&&bo(s,"_",r,!0)):hl(t,s)}else t&&gl(e,t)},jc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ve;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:ml(r,t,n):(i=!t.$stable,hl(t,r)),o=t}else t&&(gl(e,t),o={default:1});if(i)for(const l in r)!Br(l)&&o[l]==null&&delete r[l]},He=Vc;function zc(e){return Gc(e)}function Gc(e,t){const n=Ss();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=dt,insertStaticContent:k}=e,T=(h,g,b,v=null,x=null,y=null,N=void 0,M=null,I=!!g.dynamicChildren)=>{if(h===g)return;h&&!Qt(h,g)&&(v=w(h),Be(h,x,y,!0),h=null),g.patchFlag===-2&&(I=!1,g.dynamicChildren=null);const{type:S,ref:q,shapeFlag:W}=g;switch(S){case Ls:$(h,g,b,v);break;case Le:_(h,g,b,v);break;case os:h==null&&R(g,b,v,N);break;case X:F(h,g,b,v,x,y,N,M,I);break;default:W&1?L(h,g,b,v,x,y,N,M,I):W&6?ie(h,g,b,v,x,y,N,M,I):(W&64||W&128)&&S.process(h,g,b,v,x,y,N,M,I,G)}q!=null&&x?Ln(q,h&&h.ref,y,g||h,!g):q==null&&h&&h.ref!=null&&Ln(h.ref,null,y,h,!0)},$=(h,g,b,v)=>{if(h==null)s(g.el=l(g.children),b,v);else{const x=g.el=h.el;g.children!==h.children&&u(x,g.children)}},_=(h,g,b,v)=>{h==null?s(g.el=a(g.children||""),b,v):g.el=h.el},R=(h,g,b,v)=>{[h.el,h.anchor]=k(h.children,g,b,v,h.el,h.anchor)},C=({el:h,anchor:g},b,v)=>{let x;for(;h&&h!==g;)x=p(h),s(h,b,v),h=x;s(g,b,v)},A=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},L=(h,g,b,v,x,y,N,M,I)=>{if(g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),h==null)D(g,b,v,x,y,N,M,I);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),z(h,g,x,y,N,M,I)}finally{S&&S._endPatch()}}},D=(h,g,b,v,x,y,N,M)=>{let I,S;const{props:q,shapeFlag:W,transition:U,dirs:Z}=h;if(I=h.el=o(h.type,y,q&&q.is,q),W&8?c(I,h.children):W&16&&se(h.children,I,null,v,x,Ks(h,y),N,M),Z&&Gt(h,null,v,"created"),V(I,h,h.scopeId,N,v),q){for(const ye in q)ye!=="value"&&!$n(ye)&&i(I,ye,null,q[ye],y,v);"value"in q&&i(I,"value",null,q.value,y),(S=q.onVnodeBeforeMount)&&lt(S,v,h)}Z&&Gt(h,null,v,"beforeMount");const te=Uc(x,U);te&&U.beforeEnter(I),s(I,g,b),((S=q&&q.onVnodeMounted)||te||Z)&&He(()=>{S&&lt(S,v,h),te&&U.enter(I),Z&&Gt(h,null,v,"mounted")},x)},V=(h,g,b,v,x)=>{if(b&&m(h,b),v)for(let y=0;y<v.length;y++)m(h,v[y]);if(x){let y=x.subTree;if(g===y||_l(y.type)&&(y.ssContent===g||y.ssFallback===g)){const N=x.vnode;V(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},se=(h,g,b,v,x,y,N,M,I=0)=>{for(let S=I;S<h.length;S++){const q=h[S]=M?wt(h[S]):ft(h[S]);T(null,q,g,b,v,x,y,N,M)}},z=(h,g,b,v,x,y,N)=>{const M=g.el=h.el;let{patchFlag:I,dynamicChildren:S,dirs:q}=g;I|=h.patchFlag&16;const W=h.props||ve,U=g.props||ve;let Z;if(b&&Ut(b,!1),(Z=U.onVnodeBeforeUpdate)&&lt(Z,b,g,h),q&&Gt(g,h,b,"beforeUpdate"),b&&Ut(b,!0),(W.innerHTML&&U.innerHTML==null||W.textContent&&U.textContent==null)&&c(M,""),S?Y(h.dynamicChildren,S,M,b,v,Ks(g,x),y):N||ae(h,g,M,null,b,v,Ks(g,x),y,!1),I>0){if(I&16)le(M,W,U,b,x);else if(I&2&&W.class!==U.class&&i(M,"class",null,U.class,x),I&4&&i(M,"style",W.style,U.style,x),I&8){const te=g.dynamicProps;for(let ye=0;ye<te.length;ye++){const pe=te[ye],We=W[pe],Fe=U[pe];(Fe!==We||pe==="value")&&i(M,pe,We,Fe,x,b)}}I&1&&h.children!==g.children&&c(M,g.children)}else!N&&S==null&&le(M,W,U,b,x);((Z=U.onVnodeUpdated)||q)&&He(()=>{Z&&lt(Z,b,g,h),q&&Gt(g,h,b,"updated")},v)},Y=(h,g,b,v,x,y,N)=>{for(let M=0;M<g.length;M++){const I=h[M],S=g[M],q=I.el&&(I.type===X||!Qt(I,S)||I.shapeFlag&198)?d(I.el):b;T(I,S,q,null,v,x,y,N,!0)}},le=(h,g,b,v,x)=>{if(g!==b){if(g!==ve)for(const y in g)!$n(y)&&!(y in b)&&i(h,y,g[y],null,x,v);for(const y in b){if($n(y))continue;const N=b[y],M=g[y];N!==M&&y!=="value"&&i(h,y,M,N,x,v)}"value"in b&&i(h,"value",g.value,b.value,x)}},F=(h,g,b,v,x,y,N,M,I)=>{const S=g.el=h?h.el:l(""),q=g.anchor=h?h.anchor:l("");let{patchFlag:W,dynamicChildren:U,slotScopeIds:Z}=g;Z&&(M=M?M.concat(Z):Z),h==null?(s(S,b,v),s(q,b,v),se(g.children||[],b,q,x,y,N,M,I)):W>0&&W&64&&U&&h.dynamicChildren&&h.dynamicChildren.length===U.length?(Y(h.dynamicChildren,U,b,x,y,N,M),(g.key!=null||x&&g===x.subTree)&&bl(h,g,!0)):ae(h,g,b,q,x,y,N,M,I)},ie=(h,g,b,v,x,y,N,M,I)=>{g.slotScopeIds=M,h==null?g.shapeFlag&512?x.ctx.activate(g,b,v,N,I):Te(g,b,v,x,y,N,I):ze(h,g,I)},Te=(h,g,b,v,x,y,N)=>{const M=h.component=eu(h,v,x);if(Is(h)&&(M.ctx.renderer=G),tu(M,!1,N),M.asyncDep){if(x&&x.registerDep(M,Ce,N),!h.el){const I=M.subTree=j(Le);_(null,I,g,b),h.placeholder=I.el}}else Ce(M,h,g,b,x,y,N)},ze=(h,g,b)=>{const v=g.component=h.component;if(Lc(h,g,b))if(v.asyncDep&&!v.asyncResolved){ge(v,g,b);return}else v.next=g,v.update();else g.el=h.el,v.vnode=g},Ce=(h,g,b,v,x,y,N)=>{const M=()=>{if(h.isMounted){let{next:W,bu:U,u:Z,parent:te,vnode:ye}=h;{const it=vl(h);if(it){W&&(W.el=ye.el,ge(h,W,N)),it.asyncDep.then(()=>{He(()=>{h.isUnmounted||S()},x)});return}}let pe=W,We;Ut(h,!1),W?(W.el=ye.el,ge(h,W,N)):W=ye,U&&rs(U),(We=W.props&&W.props.onVnodeBeforeUpdate)&&lt(We,te,W,ye),Ut(h,!0);const Fe=mi(h),rt=h.subTree;h.subTree=Fe,T(rt,Fe,d(rt.el),w(rt),h,x,y),W.el=Fe.el,pe===null&&Nc(h,Fe.el),Z&&He(Z,x),(We=W.props&&W.props.onVnodeUpdated)&&He(()=>lt(We,te,W,ye),x)}else{let W;const{el:U,props:Z}=g,{bm:te,m:ye,parent:pe,root:We,type:Fe}=h,rt=Nn(g);Ut(h,!1),te&&rs(te),!rt&&(W=Z&&Z.onVnodeBeforeMount)&&lt(W,pe,g),Ut(h,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(Fe);const it=h.subTree=mi(h);T(null,it,b,v,h,x,y),g.el=it.el}if(ye&&He(ye,x),!rt&&(W=Z&&Z.onVnodeMounted)){const it=g;He(()=>lt(W,pe,it),x)}(g.shapeFlag&256||pe&&Nn(pe.vnode)&&pe.vnode.shapeFlag&256)&&h.a&&He(h.a,x),h.isMounted=!0,g=b=v=null}};h.scope.on();const I=h.effect=new ko(M);h.scope.off();const S=h.update=I.run.bind(I),q=h.job=I.runIfDirty.bind(I);q.i=h,q.id=h.uid,I.scheduler=()=>Nr(q),Ut(h,!0),S()},ge=(h,g,b)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,Bc(h,g.props,v,b),jc(h,g.children,b),Rt(),li(h),At()},ae=(h,g,b,v,x,y,N,M,I=!1)=>{const S=h&&h.children,q=h?h.shapeFlag:0,W=g.children,{patchFlag:U,shapeFlag:Z}=g;if(U>0){if(U&128){It(S,W,b,v,x,y,N,M,I);return}else if(U&256){gt(S,W,b,v,x,y,N,M,I);return}}Z&8?(q&16&&Ve(S,x,y),W!==S&&c(b,W)):q&16?Z&16?It(S,W,b,v,x,y,N,M,I):Ve(S,x,y,!0):(q&8&&c(b,""),Z&16&&se(W,b,v,x,y,N,M,I))},gt=(h,g,b,v,x,y,N,M,I)=>{h=h||gn,g=g||gn;const S=h.length,q=g.length,W=Math.min(S,q);let U;for(U=0;U<W;U++){const Z=g[U]=I?wt(g[U]):ft(g[U]);T(h[U],Z,b,null,x,y,N,M,I)}S>q?Ve(h,x,y,!0,!1,W):se(g,b,v,x,y,N,M,I,W)},It=(h,g,b,v,x,y,N,M,I)=>{let S=0;const q=g.length;let W=h.length-1,U=q-1;for(;S<=W&&S<=U;){const Z=h[S],te=g[S]=I?wt(g[S]):ft(g[S]);if(Qt(Z,te))T(Z,te,b,null,x,y,N,M,I);else break;S++}for(;S<=W&&S<=U;){const Z=h[W],te=g[U]=I?wt(g[U]):ft(g[U]);if(Qt(Z,te))T(Z,te,b,null,x,y,N,M,I);else break;W--,U--}if(S>W){if(S<=U){const Z=U+1,te=Z<q?g[Z].el:v;for(;S<=U;)T(null,g[S]=I?wt(g[S]):ft(g[S]),b,te,x,y,N,M,I),S++}}else if(S>U)for(;S<=W;)Be(h[S],x,y,!0),S++;else{const Z=S,te=S,ye=new Map;for(S=te;S<=U;S++){const Ge=g[S]=I?wt(g[S]):ft(g[S]);Ge.key!=null&&ye.set(Ge.key,S)}let pe,We=0;const Fe=U-te+1;let rt=!1,it=0;const wn=new Array(Fe);for(S=0;S<Fe;S++)wn[S]=0;for(S=Z;S<=W;S++){const Ge=h[S];if(We>=Fe){Be(Ge,x,y,!0);continue}let ot;if(Ge.key!=null)ot=ye.get(Ge.key);else for(pe=te;pe<=U;pe++)if(wn[pe-te]===0&&Qt(Ge,g[pe])){ot=pe;break}ot===void 0?Be(Ge,x,y,!0):(wn[ot-te]=S+1,ot>=it?it=ot:rt=!0,T(Ge,g[ot],b,null,x,y,N,M,I),We++)}const ei=rt?qc(wn):gn;for(pe=ei.length-1,S=Fe-1;S>=0;S--){const Ge=te+S,ot=g[Ge],ti=g[Ge+1],ni=Ge+1<q?ti.el||yl(ti):v;wn[S]===0?T(null,ot,b,ni,x,y,N,M,I):rt&&(pe<0||S!==ei[pe]?st(ot,b,ni,2):pe--)}}},st=(h,g,b,v,x=null)=>{const{el:y,type:N,transition:M,children:I,shapeFlag:S}=h;if(S&6){st(h.component.subTree,g,b,v);return}if(S&128){h.suspense.move(g,b,v);return}if(S&64){N.move(h,g,b,G);return}if(N===X){s(y,g,b);for(let W=0;W<I.length;W++)st(I[W],g,b,v);s(h.anchor,g,b);return}if(N===os){C(h,g,b);return}if(v!==2&&S&1&&M)if(v===0)M.beforeEnter(y),s(y,g,b),He(()=>M.enter(y),x);else{const{leave:W,delayLeave:U,afterLeave:Z}=M,te=()=>{h.ctx.isUnmounted?r(y):s(y,g,b)},ye=()=>{y._isLeaving&&y[ut](!0),W(y,()=>{te(),Z&&Z()})};U?U(y,te,ye):ye()}else s(y,g,b)},Be=(h,g,b,v=!1,x=!1)=>{const{type:y,props:N,ref:M,children:I,dynamicChildren:S,shapeFlag:q,patchFlag:W,dirs:U,cacheIndex:Z}=h;if(W===-2&&(x=!1),M!=null&&(Rt(),Ln(M,null,b,h,!0),At()),Z!=null&&(g.renderCache[Z]=void 0),q&256){g.ctx.deactivate(h);return}const te=q&1&&U,ye=!Nn(h);let pe;if(ye&&(pe=N&&N.onVnodeBeforeUnmount)&&lt(pe,g,h),q&6)zt(h.component,b,v);else{if(q&128){h.suspense.unmount(b,v);return}te&&Gt(h,null,g,"beforeUnmount"),q&64?h.type.remove(h,g,b,G,v):S&&!S.hasOnce&&(y!==X||W>0&&W&64)?Ve(S,g,b,!1,!0):(y===X&&W&384||!x&&q&16)&&Ve(I,g,b),v&&on(h)}(ye&&(pe=N&&N.onVnodeUnmounted)||te)&&He(()=>{pe&&lt(pe,g,h),te&&Gt(h,null,g,"unmounted")},b)},on=h=>{const{type:g,el:b,anchor:v,transition:x}=h;if(g===X){ln(b,v);return}if(g===os){A(h);return}const y=()=>{r(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:M}=x,I=()=>N(b,y);M?M(h.el,y,I):I()}else y()},ln=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},zt=(h,g,b)=>{const{bum:v,scope:x,job:y,subTree:N,um:M,m:I,a:S}=h;yi(I),yi(S),v&&rs(v),x.stop(),y&&(y.flags|=8,Be(N,h,g,b)),M&&He(M,g),He(()=>{h.isUnmounted=!0},g)},Ve=(h,g,b,v=!1,x=!1,y=0)=>{for(let N=y;N<h.length;N++)Be(h[N],g,b,v,x)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[lc];return b?p(b):g};let H=!1;const B=(h,g,b)=>{let v;h==null?g._vnode&&(Be(g._vnode,null,null,!0),v=g._vnode.component):T(g._vnode||null,h,g,null,null,null,b),g._vnode=h,H||(H=!0,li(v),Fo(),H=!1)},G={p:T,um:Be,m:st,r:on,mt:Te,mc:se,pc:ae,pbc:Y,n:w,o:e};return{render:B,hydrate:void 0,createApp:Ec(B)}}function Ks({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ut({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bl(e,t,n=!1){const s=e.children,r=t.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=wt(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&bl(o,l)),l.type===Ls&&(l.patchFlag===-1&&(l=r[i]=wt(l)),l.el=o.el),l.type===Le&&!l.el&&(l.el=o.el)}}function qc(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function vl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vl(t)}function yi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function yl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?yl(t.subTree):null}const _l=e=>e.__isSuspense;function Vc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):sc(e)}const X=Symbol.for("v-fgt"),Ls=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),os=Symbol.for("v-stc"),Bn=[];let qe=null;function E(e=!1){Bn.push(qe=e?null:[])}function Kc(){Bn.pop(),qe=Bn[Bn.length-1]||null}let Un=1;function ms(e,t=!1){Un+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function kl(e){return e.dynamicChildren=Un>0?qe||gn:null,Kc(),Un>0&&qe&&qe.push(e),e}function O(e,t,n,s,r,i){return kl(f(e,t,n,s,r,i,!0))}function dn(e,t,n,s,r){return kl(j(e,t,n,s,r,!0))}function bs(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const wl=({key:e})=>e??null,ls=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Ie(e)||Q(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===X?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wl(t),ref:t&&ls(t),scopeId:jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ue};return l?(Fr(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=xe(n)?8:16),Un>0&&!o&&qe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&qe.push(a),a}const j=Zc;function Zc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===nl)&&(e=Le),bs(e)){const l=Ht(e,t,!0);return n&&Fr(l,n),Un>0&&!i&&qe&&(l.shapeFlag&6?qe[qe.indexOf(e)]=l:qe.push(l)),l.patchFlag=-2,l}if(ou(e)&&(e=e.__vccOpts),t){t=Qc(t);let{class:l,style:a}=t;l&&!xe(l)&&(t.class=De(l)),fe(a)&&(Lr(a)&&!K(a)&&(a=Ae({},a)),t.style=Rs(a))}const o=xe(e)?1:_l(e)?128:Uo(e)?64:fe(e)?4:Q(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function Qc(e){return e?Lr(e)||fl(e)?Ae({},e):e:null}function Ht(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:a}=e,u=t?Jc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&wl(u),ref:t&&t.ref?n&&i?K(i)?i.concat(ls(t)):[i,ls(t)]:ls(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Gn(c,a.clone(c)),c}function re(e=" ",t=0){return j(Ls,null,e,t)}function ht(e,t){const n=j(os,null,e);return n.staticCount=t,n}function Je(e="",t=!1){return t?(E(),dn(Le,null,e)):j(Le,null,e)}function ft(e){return e==null||typeof e=="boolean"?j(Le):K(e)?j(X,null,e.slice()):bs(e)?wt(e):j(Ls,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Fr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Fr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!fl(t)?t._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),s&64?(n=16,t=[re(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=De([t.class,s.class]));else if(r==="style")t.style=Rs([t.style,s.style]);else if(xs(r)){const i=t[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function lt(e,t,n,s=null){tt(e,t,7,[n,s])}const Yc=ol();let Xc=0;function eu(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Yc,i={uid:Xc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pl(s,r),emitsOptions:ll(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ic.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const xl=()=>Pe||Ue;let vs,hr;{const e=Ss(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};vs=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),hr=t("__VUE_SSR_SETTERS__",n=>qn=n)}const Yn=e=>{const t=Pe;return vs(e),e.scope.on(),()=>{e.scope.off(),vs(t)}},_i=()=>{Pe&&Pe.scope.off(),vs(null)};function Cl(e){return e.vnode.shapeFlag&4}let qn=!1;function tu(e,t=!1,n=!1){t&&hr(t);const{props:s,children:r}=e.vnode,i=Cl(e);Dc(e,s,i,t),Hc(e,r,n||t);const o=i?nu(e,t):void 0;return t&&hr(!1),o}function nu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wc);const{setup:s}=n;if(s){Rt();const r=e.setupContext=s.length>1?ru(e):null,i=Yn(e),o=Jn(s,e,0,[e.props,r]),l=ho(o);if(At(),i(),(l||e.sp)&&!Nn(e)&&Yo(e),l){if(o.then(_i,_i),t)return o.then(a=>{ki(e,a)}).catch(a=>{Ps(a,e,0)});e.asyncDep=o}else ki(e,o)}else Tl(e)}function ki(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Do(t)),Tl(e)}function Tl(e,t,n){const s=e.type;e.render||(e.render=s.render||dt);{const r=Yn(e);Rt();try{xc(e)}finally{At(),r()}}}const su={get(e,t){return Ee(e,"get",""),e[t]}};function ru(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,su),slots:e.slots,emit:e.emit,expose:t}}function Ns(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Do(Va(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}})):e.proxy}function iu(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function ou(e){return Q(e)&&"__vccOpts"in e}const he=(e,t)=>Ya(e,t,qn);function Hr(e,t,n){try{ms(-1);const s=arguments.length;return s===2?fe(t)&&!K(t)?bs(t)?j(e,null,[t]):j(e,t):j(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bs(n)&&(n=[n]),j(e,t,n))}finally{ms(1)}}const lu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gr;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{gr=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const Sl=gr?e=>gr.createHTML(e):e=>e,au="http://www.w3.org/2000/svg",cu="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,xi=_t&&_t.createElement("template"),uu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?_t.createElementNS(au,e):t==="mathml"?_t.createElementNS(cu,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{xi.innerHTML=Sl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=xi.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",Tn="animation",Vn=Symbol("_vtc"),Rl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fu=Ae({},qo,Rl),du=e=>(e.displayName="Transition",e.props=fu,e),pu=du((e,{slots:t})=>Hr(uc,hu(e),t)),qt=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ci=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function hu(e){const t={};for(const F in e)F in Rl||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,k=gu(r),T=k&&k[0],$=k&&k[1],{onBeforeEnter:_,onEnter:R,onEnterCancelled:C,onLeave:A,onLeaveCancelled:L,onBeforeAppear:D=_,onAppear:V=R,onAppearCancelled:se=C}=t,z=(F,ie,Te,ze)=>{F._enterCancelled=ze,Vt(F,ie?c:l),Vt(F,ie?u:o),Te&&Te()},Y=(F,ie)=>{F._isLeaving=!1,Vt(F,d),Vt(F,m),Vt(F,p),ie&&ie()},le=F=>(ie,Te)=>{const ze=F?V:R,Ce=()=>z(ie,F,Te);qt(ze,[ie,Ce]),Ti(()=>{Vt(ie,F?a:i),bt(ie,F?c:l),Ci(ze)||Si(ie,s,T,Ce)})};return Ae(t,{onBeforeEnter(F){qt(_,[F]),bt(F,i),bt(F,o)},onBeforeAppear(F){qt(D,[F]),bt(F,a),bt(F,u)},onEnter:le(!1),onAppear:le(!0),onLeave(F,ie){F._isLeaving=!0;const Te=()=>Y(F,ie);bt(F,d),F._enterCancelled?(bt(F,p),Ei(F)):(Ei(F),bt(F,p)),Ti(()=>{F._isLeaving&&(Vt(F,d),bt(F,m),Ci(A)||Si(F,s,$,Te))}),qt(A,[F,Te])},onEnterCancelled(F){z(F,!1,void 0,!0),qt(C,[F])},onAppearCancelled(F){z(F,!0,void 0,!0),qt(se,[F])},onLeaveCancelled(F){Y(F),qt(L,[F])}})}function gu(e){if(e==null)return null;if(fe(e))return[Zs(e.enter),Zs(e.leave)];{const t=Zs(e);return[t,t]}}function Zs(e){return ya(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vn]||(e[Vn]=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Vn];n&&(n.delete(t),n.size||(e[Vn]=void 0))}function Ti(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mu=0;function Si(e,t,n,s){const r=e._endId=++mu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=bu(e,t);if(!o)return s();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,p)}function bu(e,t){const n=window.getComputedStyle(e),s=k=>(n[k]||"").split(", "),r=s(`${$t}Delay`),i=s(`${$t}Duration`),o=Ri(r,i),l=s(`${Tn}Delay`),a=s(`${Tn}Duration`),u=Ri(l,a);let c=null,d=0,p=0;t===$t?o>0&&(c=$t,d=o,p=i.length):t===Tn?u>0&&(c=Tn,d=u,p=a.length):(d=Math.max(o,u),c=d>0?o>u?$t:Tn:null,p=c?c===$t?i.length:a.length:0);const m=c===$t&&/\b(?:transform|all)(?:,|$)/.test(s(`${$t}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function Ri(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ai(n)+Ai(e[s])))}function Ai(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ei(e){return(e?e.ownerDocument:document).body.offsetHeight}function vu(e,t,n){const s=e[Vn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pi=Symbol("_vod"),yu=Symbol("_vsh"),_u=Symbol(""),ku=/(?:^|;)\s*display\s*:/;function wu(e,t,n){const s=e.style,r=xe(n);let i=!1;if(n&&!r){if(t)if(xe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&as(s,l,"")}else for(const o in t)n[o]==null&&as(s,o,"");for(const o in n)o==="display"&&(i=!0),as(s,o,n[o])}else if(r){if(t!==n){const o=s[_u];o&&(n+=";"+o),s.cssText=n,i=ku.test(n)}}else t&&e.removeAttribute("style");Pi in e&&(e[Pi]=i?s.display:"",e[yu]&&(s.display="none"))}const Ii=/\s*!important$/;function as(e,t,n){if(K(n))n.forEach(s=>as(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=xu(e,t);Ii.test(n)?e.setProperty(nn(s),n.replace(Ii,""),"important"):e[s]=n}}const $i=["Webkit","Moz","ms"],Qs={};function xu(e,t){const n=Qs[t];if(n)return n;let s=Qe(t);if(s!=="filter"&&s in e)return Qs[t]=s;s=Ts(s);for(let r=0;r<$i.length;r++){const i=$i[r]+s;if(i in e)return Qs[t]=i}return t}const Oi="http://www.w3.org/1999/xlink";function Mi(e,t,n,s,r,i=Ta(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n):n==null||i&&!vo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":pt(n)?String(n):n)}function Li(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Sl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vo(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function un(e,t,n,s){e.addEventListener(t,n,s)}function Cu(e,t,n,s){e.removeEventListener(t,n,s)}const Ni=Symbol("_vei");function Tu(e,t,n,s,r=null){const i=e[Ni]||(e[Ni]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=Su(t);if(s){const u=i[t]=Eu(s,r);un(e,l,u,a)}else o&&(Cu(e,l,o,a),i[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Su(e){let t;if(Di.test(e)){t={};let s;for(;s=e.match(Di);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nn(e.slice(2)),t]}let Js=0;const Ru=Promise.resolve(),Au=()=>Js||(Ru.then(()=>Js=0),Js=Date.now());function Eu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Pu(s,n.value),t,5,[s])};return n.value=e,n.attached=Au(),n}function Pu(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Bi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Iu=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?vu(e,s,o):t==="style"?wu(e,n,s):xs(t)?Cr(t)||Tu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$u(e,t,s,o))?(Li(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mi(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(s))?Li(e,Qe(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Mi(e,t,s,o))};function $u(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Bi(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bi(t)&&xe(n)?!1:t in e}const Wi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>rs(t,n):t};function Ou(e){e.target.composing=!0}function Fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ys=Symbol("_assign");function Hi(e,t,n){return t&&(e=e.trim()),n&&(e=Rr(e)),e}const jr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Ys]=Wi(r);const i=s||r.props&&r.props.type==="number";un(e,t?"change":"input",o=>{o.target.composing||e[Ys](Hi(e.value,n,i))}),(n||i)&&un(e,"change",()=>{e.value=Hi(e.value,n,i)}),t||(un(e,"compositionstart",Ou),un(e,"compositionend",Fi),un(e,"change",Fi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Ys]=Wi(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Rr(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a))}},Mu=Ae({patchProp:Iu},uu);let ji;function Lu(){return ji||(ji=zc(Mu))}const Nu=(...e)=>{const t=Lu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Bu(s);if(!r)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Du(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Bu(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const fn=typeof document<"u";function Al(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Al(e.default)}const ce=Object.assign;function Xs(e,t){const n={};for(const s in t){const r=t[s];n[s]=nt(r)?r.map(e):e(r)}return n}const Wn=()=>{},nt=Array.isArray;function zi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const El=/#/g,Fu=/&/g,Hu=/\//g,ju=/=/g,zu=/\?/g,Pl=/\+/g,Gu=/%5B/g,Uu=/%5D/g,Il=/%5E/g,qu=/%60/g,$l=/%7B/g,Vu=/%7C/g,Ol=/%7D/g,Ku=/%20/g;function zr(e){return e==null?"":encodeURI(""+e).replace(Vu,"|").replace(Gu,"[").replace(Uu,"]")}function Zu(e){return zr(e).replace($l,"{").replace(Ol,"}").replace(Il,"^")}function mr(e){return zr(e).replace(Pl,"%2B").replace(Ku,"+").replace(El,"%23").replace(Fu,"%26").replace(qu,"`").replace($l,"{").replace(Ol,"}").replace(Il,"^")}function Qu(e){return mr(e).replace(ju,"%3D")}function Ju(e){return zr(e).replace(El,"%23").replace(zu,"%3F")}function Yu(e){return Ju(e).replace(Hu,"%2F")}function Kn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Xu=/\/$/,ef=e=>e.replace(Xu,"");function er(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(s=t.slice(0,a),i=t.slice(a,l>0?l:t.length),r=e(i.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=rf(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Kn(o)}}function tf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Gi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nf(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&_n(t.matched[s],n.matched[r])&&Ml(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _n(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ml(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!sf(e[n],t[n]))return!1;return!0}function sf(e,t){return nt(e)?Ui(e,t):nt(t)?Ui(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ui(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function rf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let br=function(e){return e.pop="pop",e.push="push",e}({}),tr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function of(e){if(!e)if(fn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ef(e)}const lf=/^[^#]+#/;function af(e,t){return e.replace(lf,"#")+t}function cf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ds=()=>({left:window.scrollX,top:window.scrollY});function uf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=cf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function qi(e,t){return(history.state?history.state.position-t:-1)+e}const vr=new Map;function ff(e,t){vr.set(e,t)}function df(e){const t=vr.get(e);return vr.delete(e),t}function pf(e){return typeof e=="string"||e&&typeof e=="object"}function Ll(e){return typeof e=="string"||typeof e=="symbol"}let we=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Nl=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function kn(e,t){return ce(new Error,{type:e,[Nl]:!0},t)}function vt(e,t){return e instanceof Error&&Nl in e&&(t==null||!!(e.type&t))}const hf=["params","query","hash"];function gf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of hf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function mf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Pl," "),i=r.indexOf("="),o=Kn(i<0?r:r.slice(0,i)),l=i<0?null:Kn(r.slice(i+1));if(o in t){let a=t[o];nt(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function Vi(e){let t="";for(let n in e){const s=e[n];if(n=Qu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&mr(r)):[s&&mr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function bf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const vf=Symbol(""),Ki=Symbol(""),Bs=Symbol(""),Gr=Symbol(""),yr=Symbol("");function Sn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const u=p=>{p===!1?a(kn(we.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):pf(p)?a(kn(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>a(p))})}function nr(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Al(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Nt(u,n,s,o,l,r))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Wu(c)?c.default:c;o.mods[l]=c,o.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&Nt(p,n,s,o,l,r)()}))}}return i}function yf(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>_n(u,l))?s.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>_n(u,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _f=()=>location.protocol+"//"+location.host;function Dl(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Gi(l,"")}return Gi(n,e)+s+r}function kf(e,t,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const m=Dl(e,location),k=n.value,T=t.value;let $=0;if(p){if(n.value=m,t.value=p,o&&o===k){o=null;return}$=T?p.position-T.position:0}else s(m);r.forEach(_=>{_(n.value,k,{delta:$,type:br.pop,direction:$?$>0?tr.forward:tr.back:tr.unknown})})};function a(){o=n.value}function u(p){r.push(p);const m=()=>{const k=r.indexOf(p);k>-1&&r.splice(k,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ce({},p.state,{scroll:Ds()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:d}}function Zi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Ds():null}}function wf(e){const{history:t,location:n}=window,s={value:Dl(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:_f()+e+a;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function o(a,u){i(a,ce({},t.state,Zi(r.value.back,a,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=a}function l(a,u){const c=ce({},r.value,t.state,{forward:a,scroll:Ds()});i(c.current,c,!0),i(a,ce({},Zi(s.value,a,null),{position:c.position+1},u),!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function xf(e){e=of(e);const t=wf(e),n=kf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:e,go:s,createHref:af.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}let Yt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Se=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Se||{});const Cf={type:Yt.Static,value:""},Tf=/[a-zA-Z0-9_]/;function Sf(e){if(!e)return[[]];if(e==="/")return[[Cf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Se.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,u="",c="";function d(){u&&(n===Se.Static?i.push({type:Yt.Static,value:u}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Yt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==Se.ParamRegExp){s=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:a==="/"?(u&&d(),o()):a===":"?(d(),n=Se.Param):p();break;case Se.EscapeNext:p(),n=s;break;case Se.Param:a==="("?n=Se.ParamRegExp:Tf.test(a)?p():(d(),n=Se.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case Se.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=Se.ParamRegExpEnd:c+=a;break;case Se.ParamRegExpEnd:d(),n=Se.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const Qi="[^/]+?",Rf={sensitive:!1,strict:!1,start:!0,end:!0};var Oe=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Oe||{});const Af=/[.+*?^${}()[\]/\\]/g;function Ef(e,t){const n=ce({},Rf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Oe.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=Oe.Segment+(n.sensitive?Oe.BonusCaseSensitive:0);if(p.type===Yt.Static)d||(r+="/"),r+=p.value.replace(Af,"\\$&"),m+=Oe.Static;else if(p.type===Yt.Param){const{value:k,repeatable:T,optional:$,regexp:_}=p;i.push({name:k,repeatable:T,optional:$});const R=_||Qi;if(R!==Qi){m+=Oe.BonusCustomRegExp;try{`${R}`}catch(A){throw new Error(`Invalid custom RegExp for param "${k}" (${R}): `+A.message)}}let C=T?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(C=$&&u.length<2?`(?:/${C})`:"/"+C),$&&(C+="?"),r+=C,m+=Oe.Dynamic,$&&(m+=Oe.BonusOptional),T&&(m+=Oe.BonusRepeatable),R===".*"&&(m+=Oe.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Oe.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const c=u.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",k=i[p-1];d[k.name]=m&&k.repeatable?m.split("/"):m}return d}function a(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===Yt.Static)c+=m.value;else if(m.type===Yt.Param){const{value:k,repeatable:T,optional:$}=m,_=k in u?u[k]:"";if(nt(_)&&!T)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const R=nt(_)?_.join("/"):_;if(!R)if($)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=R}}return c||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function Pf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Oe.Static+Oe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Oe.Static+Oe.Segment?1:-1:0}function Bl(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Pf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ji(s))return 1;if(Ji(r))return-1}return r.length-s.length}function Ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const If={strict:!1,end:!0,sensitive:!1};function $f(e,t,n){const s=Ef(Sf(e.path),n),r=ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Of(e,t){const n=[],s=new Map;t=zi(If,t);function r(d){return s.get(d)}function i(d,p,m){const k=!m,T=Xi(d);T.aliasOf=m&&m.record;const $=zi(t,d),_=[T];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of A)_.push(Xi(ce({},T,{components:m?m.record.components:T.components,path:L,aliasOf:m?m.record:T})))}let R,C;for(const A of _){const{path:L}=A;if(p&&L[0]!=="/"){const D=p.record.path,V=D[D.length-1]==="/"?"":"/";A.path=p.record.path+(L&&V+L)}if(R=$f(A,p,$),m?m.alias.push(R):(C=C||R,C!==R&&C.alias.push(R),k&&d.name&&!eo(R)&&o(d.name)),Wl(R)&&a(R),T.children){const D=T.children;for(let V=0;V<D.length;V++)i(D[V],R,m&&m.children[V])}m=m||R}return C?()=>{o(C)}:Wn}function o(d){if(Ll(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){const p=Nf(d,n);n.splice(p,0,d),d.record.name&&!eo(d)&&s.set(d.record.name,d)}function u(d,p){let m,k={},T,$;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw kn(we.MATCHER_NOT_FOUND,{location:d});$=m.record.name,k=ce(Yi(p.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Yi(d.params,m.keys.map(C=>C.name))),T=m.stringify(k)}else if(d.path!=null)T=d.path,m=n.find(C=>C.re.test(T)),m&&(k=m.parse(T),$=m.record.name);else{if(m=p.name?s.get(p.name):n.find(C=>C.re.test(p.path)),!m)throw kn(we.MATCHER_NOT_FOUND,{location:d,currentLocation:p});$=m.record.name,k=ce({},p.params,d.params),T=m.stringify(k)}const _=[];let R=m;for(;R;)_.unshift(R.record),R=R.parent;return{name:$,path:T,params:k,matched:_,meta:Lf(_)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:r}}function Yi(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Xi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Mf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lf(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Nf(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Bl(e,t[i])<0?s=i:n=i+1}const r=Df(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Df(e){let t=e;for(;t=t.parent;)if(Wl(t)&&Bl(e,t)===0)return t}function Wl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function to(e){const t=Xe(Bs),n=Xe(Gr),s=he(()=>{const a=me(e.to);return t.resolve(a)}),r=he(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(_n.bind(null,c));if(p>-1)return p;const m=no(a[u-2]);return u>1&&no(c)===m&&d[d.length-1].path!==m?d.findIndex(_n.bind(null,a[u-2])):p}),i=he(()=>r.value>-1&&jf(n.params,s.value.params)),o=he(()=>r.value>-1&&r.value===n.matched.length-1&&Ml(n.params,s.value.params));function l(a={}){if(Hf(a)){const u=t[me(e.replace)?"replace":"push"](me(e.to)).catch(Wn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:he(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function Bf(e){return e.length===1?e[0]:e}const Wf=Jo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:to,setup(e,{slots:t}){const n=Es(to(e)),{options:s}=Xe(Bs),r=he(()=>({[so(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[so(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Bf(t.default(n));return e.custom?i:Hr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ff=Wf;function Hf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!nt(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function no(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const so=(e,t,n)=>e??t??n,zf=Jo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Xe(yr),r=he(()=>e.route||s.value),i=Xe(Ki,0),o=he(()=>{let u=me(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=he(()=>r.value.matched[o.value]);is(Ki,he(()=>o.value+1)),is(vf,l),is(yr,r);const a=Re();return Ft(()=>[a.value,l.value,e.name],([u,c,d],[p,m,k])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!_n(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=l.value,p=d&&d.components[c];if(!p)return ro(n.default,{Component:p,route:u});const m=d.props[c],k=m?m===!0?u.params:typeof m=="function"?m(u):m:null,$=Hr(p,ce({},k,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return ro(n.default,{Component:$,route:u})||$}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Gf=zf;function Uf(e){const t=Of(e.routes,e),n=e.parseQuery||mf,s=e.stringifyQuery||Vi,r=e.history,i=Sn(),o=Sn(),l=Sn(),a=Ka(Ot);let u=Ot;fn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Xs.bind(null,w=>""+w),d=Xs.bind(null,Yu),p=Xs.bind(null,Kn);function m(w,H){let B,G;return Ll(w)?(B=t.getRecordMatcher(w),G=H):G=w,t.addRoute(G,B)}function k(w){const H=t.getRecordMatcher(w);H&&t.removeRoute(H)}function T(){return t.getRoutes().map(w=>w.record)}function $(w){return!!t.getRecordMatcher(w)}function _(w,H){if(H=ce({},H||a.value),typeof w=="string"){const b=er(n,w,H.path),v=t.resolve({path:b.path},H),x=r.createHref(b.fullPath);return ce(b,v,{params:p(v.params),hash:Kn(b.hash),redirectedFrom:void 0,href:x})}let B;if(w.path!=null)B=ce({},w,{path:er(n,w.path,H.path).path});else{const b=ce({},w.params);for(const v in b)b[v]==null&&delete b[v];B=ce({},w,{params:d(b)}),H.params=d(H.params)}const G=t.resolve(B,H),ee=w.hash||"";G.params=c(p(G.params));const h=tf(s,ce({},w,{hash:Zu(ee),path:G.path})),g=r.createHref(h);return ce({fullPath:h,hash:ee,query:s===Vi?bf(w.query):w.query||{}},G,{redirectedFrom:void 0,href:g})}function R(w){return typeof w=="string"?er(n,w,a.value.path):ce({},w)}function C(w,H){if(u!==w)return kn(we.NAVIGATION_CANCELLED,{from:H,to:w})}function A(w){return V(w)}function L(w){return A(ce(R(w),{replace:!0}))}function D(w,H){const B=w.matched[w.matched.length-1];if(B&&B.redirect){const{redirect:G}=B;let ee=typeof G=="function"?G(w,H):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=R(ee):{path:ee},ee.params={}),ce({query:w.query,hash:w.hash,params:ee.path!=null?{}:w.params},ee)}}function V(w,H){const B=u=_(w),G=a.value,ee=w.state,h=w.force,g=w.replace===!0,b=D(B,G);if(b)return V(ce(R(b),{state:typeof b=="object"?ce({},ee,b.state):ee,force:h,replace:g}),H||B);const v=B;v.redirectedFrom=H;let x;return!h&&nf(s,G,B)&&(x=kn(we.NAVIGATION_DUPLICATED,{to:v,from:G}),st(G,G,!0,!1)),(x?Promise.resolve(x):Y(v,G)).catch(y=>vt(y)?vt(y,we.NAVIGATION_GUARD_REDIRECT)?y:It(y):ae(y,v,G)).then(y=>{if(y){if(vt(y,we.NAVIGATION_GUARD_REDIRECT))return V(ce({replace:g},R(y.to),{state:typeof y.to=="object"?ce({},ee,y.to.state):ee,force:h}),H||v)}else y=F(v,G,!0,g,ee);return le(v,G,y),y})}function se(w,H){const B=C(w,H);return B?Promise.reject(B):Promise.resolve()}function z(w){const H=ln.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(w):w()}function Y(w,H){let B;const[G,ee,h]=yf(w,H);B=nr(G.reverse(),"beforeRouteLeave",w,H);for(const b of G)b.leaveGuards.forEach(v=>{B.push(Nt(v,w,H))});const g=se.bind(null,w,H);return B.push(g),Ve(B).then(()=>{B=[];for(const b of i.list())B.push(Nt(b,w,H));return B.push(g),Ve(B)}).then(()=>{B=nr(ee,"beforeRouteUpdate",w,H);for(const b of ee)b.updateGuards.forEach(v=>{B.push(Nt(v,w,H))});return B.push(g),Ve(B)}).then(()=>{B=[];for(const b of h)if(b.beforeEnter)if(nt(b.beforeEnter))for(const v of b.beforeEnter)B.push(Nt(v,w,H));else B.push(Nt(b.beforeEnter,w,H));return B.push(g),Ve(B)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),B=nr(h,"beforeRouteEnter",w,H,z),B.push(g),Ve(B))).then(()=>{B=[];for(const b of o.list())B.push(Nt(b,w,H));return B.push(g),Ve(B)}).catch(b=>vt(b,we.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function le(w,H,B){l.list().forEach(G=>z(()=>G(w,H,B)))}function F(w,H,B,G,ee){const h=C(w,H);if(h)return h;const g=H===Ot,b=fn?history.state:{};B&&(G||g?r.replace(w.fullPath,ce({scroll:g&&b&&b.scroll},ee)):r.push(w.fullPath,ee)),a.value=w,st(w,H,B,g),It()}let ie;function Te(){ie||(ie=r.listen((w,H,B)=>{if(!zt.listening)return;const G=_(w),ee=D(G,zt.currentRoute.value);if(ee){V(ce(ee,{replace:!0,force:!0}),G).catch(Wn);return}u=G;const h=a.value;fn&&ff(qi(h.fullPath,B.delta),Ds()),Y(G,h).catch(g=>vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?g:vt(g,we.NAVIGATION_GUARD_REDIRECT)?(V(ce(R(g.to),{force:!0}),G).then(b=>{vt(b,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===br.pop&&r.go(-1,!1)}).catch(Wn),Promise.reject()):(B.delta&&r.go(-B.delta,!1),ae(g,G,h))).then(g=>{g=g||F(G,h,!1),g&&(B.delta&&!vt(g,we.NAVIGATION_CANCELLED)?r.go(-B.delta,!1):B.type===br.pop&&vt(g,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),le(G,h,g)}).catch(Wn)}))}let ze=Sn(),Ce=Sn(),ge;function ae(w,H,B){It(w);const G=Ce.list();return G.length?G.forEach(ee=>ee(w,H,B)):console.error(w),Promise.reject(w)}function gt(){return ge&&a.value!==Ot?Promise.resolve():new Promise((w,H)=>{ze.add([w,H])})}function It(w){return ge||(ge=!w,Te(),ze.list().forEach(([H,B])=>w?B(w):H()),ze.reset()),w}function st(w,H,B,G){const{scrollBehavior:ee}=e;if(!fn||!ee)return Promise.resolve();const h=!B&&df(qi(w.fullPath,0))||(G||!B)&&history.state&&history.state.scroll||null;return Jt().then(()=>ee(w,H,h)).then(g=>g&&uf(g)).catch(g=>ae(g,w,H))}const Be=w=>r.go(w);let on;const ln=new Set,zt={currentRoute:a,listening:!0,addRoute:m,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:$,getRoutes:T,resolve:_,options:e,push:A,replace:L,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ce.add,isReady:gt,install(w){w.component("RouterLink",Ff),w.component("RouterView",Gf),w.config.globalProperties.$router=zt,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>me(a)}),fn&&!on&&a.value===Ot&&(on=!0,A(r.location).catch(G=>{}));const H={};for(const G in Ot)Object.defineProperty(H,G,{get:()=>a.value[G],enumerable:!0});w.provide(Bs,zt),w.provide(Gr,Lo(H)),w.provide(yr,a);const B=w.unmount;ln.add(w),w.unmount=function(){ln.delete(w),ln.size<1&&(u=Ot,ie&&ie(),ie=null,a.value=Ot,on=!1,ge=!1),B()}}};function Ve(w){return w.reduce((H,B)=>H.then(()=>z(B)),Promise.resolve())}return zt}function qf(){return Xe(Bs)}function Fl(e){return Xe(Gr)}const Hl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Vf={__name:"PixelTree",props:{size:{type:String,default:"md"},variant:{type:String,default:"indigo"}},setup(e){const t=e,n={forest:"emerald",emerald:"cyan",gold:"amber",teal:"teal",violet:"indigo",magenta:"rose",cyan:"cyan",amber:"amber"},s={indigo:{shell:"#5260ff",shellSoft:"#93a0ff",core:"#ffffff",coreGlow:"#7be7ff",spark:"#06b6d4"},cyan:{shell:"#0ea5e9",shellSoft:"#8be3ff",core:"#ffffff",coreGlow:"#5eead4",spark:"#22c55e"},teal:{shell:"#0891b2",shellSoft:"#67e8f9",core:"#ffffff",coreGlow:"#7c82ff",spark:"#6366f1"},amber:{shell:"#f59e0b",shellSoft:"#fde68a",core:"#ffffff",coreGlow:"#fda4af",spark:"#ec4899"},emerald:{shell:"#10b981",shellSoft:"#86efac",core:"#ffffff",coreGlow:"#67e8f9",spark:"#0ea5e9"},rose:{shell:"#ec4899",shellSoft:"#f9a8d4",core:"#ffffff",coreGlow:"#c4b5fd",spark:"#8b5cf6"}},r=he(()=>n[t.variant]||t.variant||"indigo"),i=he(()=>s[r.value]||s.indigo),o=he(()=>({"--glyph-shell":i.value.shell,"--glyph-shell-soft":i.value.shellSoft,"--glyph-core":i.value.core,"--glyph-core-glow":i.value.coreGlow,"--glyph-spark":i.value.spark}));return(l,a)=>(E(),O("div",{class:De(["brand-glyph",`size-${e.size}`]),style:Rs(o.value),"aria-hidden":"true"},[...a[0]||(a[0]=[ht('<span class="glyph-shell" data-v-674b7a0e></span><span class="glyph-orbit orbit-a" data-v-674b7a0e></span><span class="glyph-orbit orbit-b" data-v-674b7a0e></span><span class="glyph-core" data-v-674b7a0e></span><span class="glyph-spark spark-a" data-v-674b7a0e></span><span class="glyph-spark spark-b" data-v-674b7a0e></span>',6)])],6))}},pn=Hl(Vf,[["__scopeId","data-v-674b7a0e"]]),Kf={class:"container nav-shell"},Zf={class:"brand-mark brand-mark-tree"},Qf={class:"nav-right"},Jf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Re(!1);return(n,s)=>{const r=jt("router-link");return E(),O("header",{class:De(["site-header",{scrolled:e.scrolled}])},[f("div",Kf,[j(r,{class:"brand",to:"/"},{default:J(()=>[f("span",Zf,[j(pn,{size:"micro",variant:"indigo"})]),s[10]||(s[10]=f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Server Runtime Platform")],-1))]),_:1}),f("div",Qf,[f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:De(["nav-links",{open:t.value}])},[j(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:J(()=>[...s[12]||(s[12]=[re("首页",-1)])]),_:1}),j(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:J(()=>[...s[13]||(s[13]=[re("核心能力",-1)])]),_:1}),j(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:J(()=>[...s[14]||(s[14]=[re("技术文档",-1)])]),_:1}),j(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:J(()=>[...s[15]||(s[15]=[re("下载",-1)])]),_:1}),j(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:J(()=>[...s[16]||(s[16]=[re("路线图",-1)])]),_:1}),j(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:J(()=>[...s[17]||(s[17]=[re("更新日志",-1)])]),_:1}),j(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:J(()=>[...s[18]||(s[18]=[re("团队与支持",-1)])]),_:1}),j(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:J(()=>[...s[19]||(s[19]=[re("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),re(" "+P(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},Yf={class:"site-footer"},Xf={class:"container footer-grid"},ed={class:"brand footer-brand"},td={class:"brand-mark brand-mark-tree"},nd={__name:"SiteFooter",setup(e){return(t,n)=>{const s=jt("router-link");return E(),O("footer",Yf,[f("div",Xf,[f("div",null,[f("div",ed,[f("span",td,[j(pn,{size:"micro",variant:"indigo"})]),n[0]||(n[0]=f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能服务端运行平台")],-1))]),n[1]||(n[1]=f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ",-1))]),f("div",null,[n[7]||(n[7]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[j(s,{to:"/features"},{default:J(()=>[...n[2]||(n[2]=[re("核心能力",-1)])]),_:1})]),f("li",null,[j(s,{to:"/docs"},{default:J(()=>[...n[3]||(n[3]=[re("技术文档",-1)])]),_:1})]),f("li",null,[j(s,{to:"/downloads"},{default:J(()=>[...n[4]||(n[4]=[re("下载",-1)])]),_:1})]),f("li",null,[j(s,{to:"/roadmap"},{default:J(()=>[...n[5]||(n[5]=[re("路线图",-1)])]),_:1})]),f("li",null,[j(s,{to:"/changelog"},{default:J(()=>[...n[6]||(n[6]=[re("更新日志",-1)])]),_:1})])])]),n[13]||(n[13]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[n[12]||(n[12]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[j(s,{to:"/team"},{default:J(()=>[...n[8]||(n[8]=[re("团队与支持",-1)])]),_:1})]),n[9]||(n[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),n[10]||(n[10]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),n[11]||(n[11]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),n[14]||(n[14]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}}},sd=["data-theme"],rd={class:"site-main"},id={__name:"App",setup(e){const t=Re("light"),n=Re(!1),s=Fl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},o=()=>{i(t.value==="dark"?"light":"dark")},l=()=>{n.value=window.scrollY>8},a=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".tree-suite-grid > *",".entry-grid > *",".showcase-row > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Jt();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(a.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return sn(()=>{const c=localStorage.getItem("tree-site-theme");i(c==="dark"||c==="light"?c:"light"),l(),window.addEventListener("scroll",l,{passive:!0}),u()}),Os(()=>{window.removeEventListener("scroll",l),r==null||r.disconnect()}),Ft(()=>s.fullPath,()=>{u()}),Ft(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=jt("router-view");return E(),O("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=ht('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),j(Jf,{theme:t.value,scrolled:n.value,onToggleTheme:o},null,8,["theme","scrolled"]),f("main",rd,[j(p,null,{default:J(({Component:m,route:k})=>[j(pu,{name:"page-fade",mode:"out-in"},{default:J(()=>[(E(),dn(kc(m),{key:k.fullPath}))]),_:2},1024)]),_:1})]),j(nd)],8,sd)}}},od="/images/console-preview.png",ld={class:"hero-section home-hero-section"},ad={class:"container hero-grid home-hero-grid"},cd={class:"hero-copy"},ud={class:"section-kicker-row hero-kicker-row"},fd={class:"hero-actions"},dd={class:"section-block"},pd={class:"container stats-grid"},hd={class:"section-block home-suite-section surface-soft"},gd={class:"container"},md={class:"section-head"},bd={class:"section-kicker-row"},vd={class:"tree-suite-grid"},yd={class:"suite-card-head"},_d={class:"suite-icon"},kd={class:"card-label"},wd={class:"bullet-list compact-list suite-points"},xd={class:"section-block surface-soft seo-section"},Cd={class:"container"},Td={class:"feature-grid three"},Sd={class:"card-label"},Rd={class:"section-block showcase-section"},Ad={class:"container showcase-stack"},Ed={class:"showcase-visual surface-card"},Pd=["src","alt","width","height","loading"],Id={class:"showcase-copy"},$d={class:"eyebrow"},Od={class:"hero-actions"},Md={class:"section-block surface-soft"},Ld={class:"container"},Nd={class:"feature-grid three"},Dd={class:"section-block"},Bd={class:"container"},Wd={class:"entry-grid"},Fd={class:"entry-card-head"},Hd={class:"card-label"},jd={class:"section-block surface-soft"},zd={class:"container"},Gd={class:"feature-grid two"},Ud={class:"section-block final-cta"},qd={class:"container cta-shell tree-cta-shell"},Vd={class:"hero-actions"},Kd={__name:"HomePage",setup(e){const t=[{value:"11 页",label:"当前 Web 面板页签"},{value:"4 档",label:"自动分层预设"},{value:"14 项",label:"Paper 关键参数热调"},{value:"Docs",label:"站内技术 Wiki"}],n=[{kicker:"PERFORMANCE",title:"性能主干",description:"把动态视距、动态模拟距离、自动分层、Paper 热调与网络链路优化收束成同一条性能主线。",points:["动态视距 / 模拟距离","自动分层与运行时调优","更稳的 TPS / MSPT 控制"],link:"/features",linkLabel:"查看性能能力",variant:"indigo"},{kicker:"OPERATIONS",title:"运维主干",description:"让控制台、诊断、备份、世界管理与集成状态不再分散在命令和脚本里，而是在 Web 面板内统一可见。",points:["控制台 / 线程转储 / 内存快照","备份创建与恢复","世界管理与集成状态卡片"],link:"/docs/web-panel",linkLabel:"查看 Web 面板",variant:"cyan"},{kicker:"CONTENT FLOW",title:"内容主干",description:"模型、纹理、资源包 ZIP、本地托管与在线玩家下发形成完整闭环，适合内容服与综合服长期维护。",points:["模型 / 纹理上传","资源包拖拽上传与重载","在线玩家远程下发"],link:"/docs/resource-pack",linkLabel:"查看资源链路",variant:"amber"}],s=[{eyebrow:"REAL OPERATIONS",title:"高峰监控、问题排查与恢复动作放在同一条运维流程里。",description:"先看仪表盘，再看控制台，再做线程转储、资源包处理或备份恢复。TreeCore 的目标不是把功能堆进去，而是让它们在实际运维时顺畅接起来。",image:"/images/console-preview.png",alt:"TreeCore Web 管理面板静态预览",width:1365,height:768,loading:"lazy",link:"/docs/web-pages-overview",linkLabel:"查看页面总览",variant:"rose",reverse:!1},{eyebrow:"LONG TERM SERVER",title:"面向综合服、长周目服与高峰玩家场景持续维护。",description:"对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。",image:"/docs-images/bstats-servers.png",alt:"TreeCore bStats 服务器数量趋势图",width:800,height:300,loading:"lazy",link:"/docs/first-day-checklist",linkLabel:"查看上线清单",variant:"indigo",reverse:!0},{eyebrow:"DOCS + RELEASE FLOW",title:"首页把文档、下载、路线图和支持入口都收进同一条阅读路径。",description:"现在你可以从首页直接进入快速开始、配置参考、下载页、更新日志、路线图和社区入口，不需要在多个仓库页面之间来回切换。",image:"/docs-images/bstats-cores.png",alt:"TreeCore CPU 核心分布统计图",width:400,height:250,loading:"lazy",link:"/docs/quick-start",linkLabel:"从快速开始进入",variant:"amber",reverse:!1}],r=[{tag:"MINECRAFT CORE",title:"我的世界 / Minecraft 服务端核心",description:"TreeCore 面向需要性能优化、资源链路和长期维护能力的 Minecraft 服务器场景。"},{tag:"PAPER / FOLIA",title:"Paper 与 Folia 相关生态",description:"官网内容会自然覆盖 Paper、Folia、Web 管理、诊断和高性能运行等相关关键词。"},{tag:"TREEMC",title:"TreeMC / TreeCore 官方站点",description:"这里提供官方说明、文档、下载和社区入口，避免用户只在仓库目录或零散链接之间查找。"}],i=[{title:"生存 / 长周目服",description:"希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。"},{title:"多世界 / 综合服",description:"需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。"},{title:"运维要求高的团队服",description:"希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。"}],o=[{tag:"GET STARTED",title:"快速开始",description:"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",link:"/docs/quick-start",linkLabel:"进入快速开始",variant:"indigo"},{tag:"CONFIG",title:"配置参考",description:"把关键配置项和推荐开关集中整理，便于你在正式服环境中调整。",link:"/docs/configuration",linkLabel:"查看配置参考",variant:"rose"},{tag:"DOWNLOADS",title:"下载与版本",description:"在官网内查看最新版本、更新摘要与下载入口，不再只靠仓库页面跳转。",link:"/downloads",linkLabel:"进入下载页",variant:"amber"},{tag:"ROADMAP",title:"路线图",description:"清楚了解当前阶段、下一阶段与后续方向，避免首页信息只有静态介绍。",link:"/roadmap",linkLabel:"查看路线图",variant:"cyan"},{tag:"CHANGELOG",title:"更新日志",description:"把版本变化、发布时间和更新摘要收束成时间线视图。",link:"/changelog",linkLabel:"查看更新日志",variant:"indigo"},{tag:"SUPPORT",title:"团队与支持",description:"集中展示社区入口、贡献者、常见问题与对外支持入口。",link:"/team",linkLabel:"进入支持页",variant:"amber"}],l=[{title:"TreeCore 更适合哪类服务器？",description:"更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。"},{title:"默认会不会大幅改动原版行为？",description:"整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏默认原版、按需保护。"},{title:"Web 管理面板现在能做什么？",description:"当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。"},{title:"第一次上服最推荐先做什么？",description:"建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。"}];return(a,u)=>{const c=jt("router-link");return E(),O("div",null,[f("section",ld,[f("div",ad,[f("div",cd,[f("div",ud,[j(pn,{size:"tiny",variant:"indigo"}),u[0]||(u[0]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1))]),u[5]||(u[5]=ht('<h1 class="hero-title">TreeCore</h1><p class="hero-summary">把 TPS 稳住，同时把原版玩法保住。</p><p class="hero-description"> 不靠长期阉割原版机制换性能，而是通过运行时调优、多核与虚拟线程、Web 管理与诊断能力，把高峰期维护成本和排障成本一起降下来。 </p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',4)),f("div",fd,[j(c,{class:"button primary",to:"/docs/quick-start"},{default:J(()=>[...u[1]||(u[1]=[re("快速开始",-1)])]),_:1}),j(c,{class:"button secondary",to:"/features"},{default:J(()=>[...u[2]||(u[2]=[re("查看能力",-1)])]),_:1}),j(c,{class:"button ghost",to:"/downloads"},{default:J(()=>[...u[3]||(u[3]=[re("查看下载",-1)])]),_:1}),u[4]||(u[4]=f("a",{class:"button secondary qq-cta",href:"https://qm.qq.com/q/MfzN81ScIc",target:"_blank",rel:"noreferrer"},"加入 QQ 群",-1))]),u[6]||(u[6]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),u[7]||(u[7]=f("div",{class:"hero-visual tree-hero-visual"},[f("div",{class:"hero-spotlight"}),f("div",{class:"hero-card image-card hero-stage"},[f("img",{src:od,alt:"TreeCore 控制台预览",width:"1365",height:"768",decoding:"async",fetchpriority:"high"}),f("div",{class:"overlay-panel"},[f("strong",null,"Web 管理面板"),f("p",null,"控制台、诊断、资源包、模型、备份、集成运维统一入口。")])])],-1))])]),f("section",dd,[f("div",pd,[(E(),O(X,null,ke(t,d=>f("article",{class:"stat-card",key:d.label},[f("strong",null,P(d.value),1),f("span",null,P(d.label),1)])),64))])]),f("section",hd,[f("div",gd,[f("div",md,[f("div",bd,[j(pn,{size:"tiny",variant:"cyan"}),u[8]||(u[8]=f("span",{class:"eyebrow"},"CORE BRANCHES",-1))]),u[9]||(u[9]=f("h2",null,"借鉴 PaperMC 那种清晰的软件分区，但把它改成 TreeCore 的三条主干。",-1)),u[10]||(u[10]=f("p",null," 首页现在不再只是堆叠介绍，而是用更产品化的方式，把 TreeCore 的三条核心主干——性能、运维、内容链路——明确分开展示。 ",-1))]),f("div",vd,[(E(),O(X,null,ke(n,d=>f("article",{class:"suite-card surface-card",key:d.title},[f("div",yd,[f("div",_d,[j(pn,{size:"sm",variant:d.variant},null,8,["variant"])]),f("div",null,[f("span",kd,P(d.kicker),1),f("h3",null,P(d.title),1)])]),f("p",null,P(d.description),1),f("ul",wd,[(E(!0),O(X,null,ke(d.points,p=>(E(),O("li",{key:p},P(p),1))),128))]),j(c,{class:"text-link",to:d.link},{default:J(()=>[re(P(d.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),u[18]||(u[18]=ht('<section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section>',1)),f("section",xd,[f("div",Cd,[u[11]||(u[11]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SEARCH SIGNALS"),f("h2",null,"TreeCore / TreeMC / Paper / Folia 官方入口"),f("p",null," 如果你在找“我的世界核心”“Minecraft 服务端核心”“Paper”“Folia”“TreeMC”或“TreeCore”相关项目， 这里就是 TreeCore 的官方网站入口。TreeCore 面向 Minecraft 1.21.x 服务器场景，聚焦高性能运行、Web 管理、诊断、资源包链路和长期维护。 ")],-1)),f("div",Td,[(E(),O(X,null,ke(r,d=>f("article",{class:"feature-card compact",key:d.title},[f("span",Sd,P(d.tag),1),f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",Rd,[f("div",Ad,[(E(),O(X,null,ke(s,d=>f("article",{class:De(["showcase-row",{reverse:d.reverse}]),key:d.title},[f("div",Ed,[f("img",{src:d.image,alt:d.alt||d.title,width:d.width,height:d.height,loading:d.loading||"lazy",decoding:"async"},null,8,Pd)]),f("div",Id,[f("span",$d,P(d.eyebrow),1),f("h2",null,P(d.title),1),f("p",null,P(d.description),1),f("div",Od,[j(c,{class:"button primary small",to:d.link},{default:J(()=>[re(P(d.linkLabel),1)]),_:2},1032,["to"])])])],2)),64))])]),f("section",Md,[f("div",Ld,[u[12]||(u[12]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"SCENARIOS"),f("h2",null,"适合哪些服务器？")],-1)),f("div",Nd,[(E(),O(X,null,ke(i,d=>f("article",{class:"feature-card compact",key:d.title},[f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",Dd,[f("div",Bd,[u[13]||(u[13]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"INSIDE THE SITE"),f("h2",null,"文档、下载、路线图和支持都在同一个站里。"),f("p",null,"如果你是第一次来看 TreeCore，这里就是最直接的入口区：先找文档，再看下载，最后再看路线图和支持页面。")],-1)),f("div",Wd,[(E(),O(X,null,ke(o,d=>f("article",{class:"entry-card feature-card compact",key:d.title},[f("div",Fd,[j(pn,{size:"tiny",variant:d.variant},null,8,["variant"]),f("span",Hd,P(d.tag),1)]),f("h3",null,P(d.title),1),f("p",null,P(d.description),1),j(c,{class:"text-link",to:d.link},{default:J(()=>[re(P(d.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),f("section",jd,[f("div",zd,[u[14]||(u[14]=f("div",{class:"section-head"},[f("span",{class:"eyebrow"},"FAQ"),f("h2",null,"你可能最先会关心的几个问题")],-1)),f("div",Gd,[(E(),O(X,null,ke(l,d=>f("article",{class:"feature-card compact",key:d.title},[f("h3",null,P(d.title),1),f("p",null,P(d.description),1)])),64))])])]),f("section",Ud,[f("div",qd,[u[17]||(u[17]=f("div",{class:"cta-copy"},[f("span",{class:"eyebrow"},"START HERE"),f("h2",null,"先看能力，再进文档，然后开始部署。"),f("p",null,"官网现在已经把首页、文档、下载入口和后续信息放到同一个站里，阅读路径会简单很多。")],-1)),f("div",Vd,[j(c,{class:"button primary",to:"/docs"},{default:J(()=>[...u[15]||(u[15]=[re("进入技术文档",-1)])]),_:1}),j(c,{class:"button secondary",to:"/downloads"},{default:J(()=>[...u[16]||(u[16]=[re("查看下载入口",-1)])]),_:1})])])])])}}},Zd={},Qd={class:"page-shell container"};function Jd(e,t){return E(),O("div",Qd,[...t[0]||(t[0]=[ht('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>当前可用的核心能力</h1><p> 这页只讲现在已经做出来、并且日常维护能直接用上的部分：性能调优、Web 运维、资源包与模型链路，以及世界和备份管理。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const Yd=Hl(Zd,[["render",Jd]]),jl="https://api.github.com/repos/TreeMC-cloud/Tree",Xd=`${jl}/releases?per_page=30`,ep=`${jl}/contributors?per_page=24`,zl="tree-site-cache:",tp=30*60*1e3,Gl=e=>{try{const t=localStorage.getItem(`${zl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>tp?null:n.data}catch{return null}},Ul=(e,t)=>{try{localStorage.setItem(`${zl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},ql=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},Vl=async e=>{try{const t=await fetch(`/data/${e}`);if(!t.ok)return[];const n=await t.json();return Array.isArray(n)?n:[]}catch{return[]}},np=async()=>Vl("releases-fallback.json"),sp=async()=>Vl("contributors-fallback.json"),Kl=async()=>{try{const e=await ql(Xd),t=Array.isArray(e)?e:[];return Ul("releases",t),{data:t,source:"github"}}catch{const e=Gl("releases");if(e)return{data:e,source:"cache"};const t=await np();return{data:t,source:t.length?"fallback":"empty"}}},rp=async()=>{try{const e=await ql(ep),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Ul("contributors",t),{data:t,source:"github"}}catch{const e=Gl("contributors");if(e)return{data:e,source:"cache"};const t=await sp();return{data:t,source:t.length?"fallback":"empty"}}},cs=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Bt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Zl=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Zn=e=>String(e||"").replace(/\r/g,"").trim(),Dt=(e,t=4)=>{const n=Zn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},Rn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},io=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Ql=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),ip={class:"page-shell container"},op={class:"page-hero"},lp={class:"hero-actions"},ap={class:"stack-section"},cp={class:"section-head left"},up={class:"release-hero-grid"},fp={key:0,class:"release-hero-card surface-card"},dp={class:"release-head"},pp={class:"release-date"},hp={class:"release-tag"},gp={key:0,class:"bullet-list compact-list"},mp={key:1,class:"release-body"},bp={class:"release-actions"},vp=["href"],yp=["href"],_p={key:1,class:"release-hero-card surface-card"},kp={class:"release-head"},wp={class:"release-date"},xp={class:"release-tag"},Cp={key:0,class:"bullet-list compact-list"},Tp={key:1,class:"release-body"},Sp={class:"release-actions"},Rp=["href"],Ap=["href"],Ep={key:2,class:"empty-state surface-card"},Pp={class:"stack-section surface-card changelog-toolbar"},Ip={class:"release-filter-row"},$p={class:"filter-chip-group"},Op=["onClick"],Mp={key:0,class:"stack-section"},Lp={key:1,class:"stack-section release-list-grid"},Np={class:"release-head"},Dp={class:"release-date"},Bp={class:"release-tag"},Wp={key:0,class:"bullet-list compact-list"},Fp={key:1,class:"release-body"},Hp={key:2,class:"asset-group-list"},jp={key:3,class:"release-asset-list"},zp=["href"],Gp={class:"release-actions"},Up=["href"],qp={key:2,class:"stack-section"},Vp={__name:"DownloadsPage",setup(e){const t=Re(!0),n=Re([]),s=Re("github"),r=Re("all"),i=Re(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=he(()=>Ql(n.value)),a=he(()=>l.value.find($=>Bt($)==="stable")||null),u=he(()=>l.value.find($=>Bt($)==="preview")||null),c=he(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=$=>{const _=Zn($).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return _?_.length>140?`${_.slice(0,140)}…`:_:"暂无发布说明。"},p=$=>{const _=m($);return _.find(R=>Rn(R)==="server")||_[0]||null},m=$=>{const _=Array.isArray($==null?void 0:$.assets)?[...$.assets]:[],R=["server","archive","source","checksum","metadata","other"];return _.sort((C,A)=>R.indexOf(Rn(C))-R.indexOf(Rn(A))).slice(0,5)},k=$=>{const _=new Map;for(const R of($==null?void 0:$.assets)||[]){const C=Rn(R),A=_.get(C)||[];A.push(R),_.set(C,A)}return["server","archive","source","checksum","metadata","other"].filter(R=>_.has(R)).map(R=>({type:R,label:io(R),items:_.get(R)}))},T=he(()=>{const $=i.value.toLowerCase();return l.value.filter(_=>{const R=Bt(_);return r.value!=="all"&&R!==r.value?!1:$?[_.name,_.tag_name,Zn(_.body)].filter(Boolean).join(" ").toLowerCase().includes($):!0})});return sn(async()=>{const $=await Kl();n.value=$.data,s.value=$.source,t.value=!1}),($,_)=>{const R=jt("router-link");return E(),O("div",ip,[f("section",op,[_[4]||(_[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),_[5]||(_[5]=f("h1",null,"下载与版本",-1)),_[6]||(_[6]=f("p",null," 这里直接读取公开仓库 Releases，展示最新正式版、预发布版、附件和更新摘要，不需要你再自己去翻仓库页面。 ",-1)),f("div",lp,[_[3]||(_[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(R,{class:"button secondary",to:"/docs/quick-start"},{default:J(()=>[..._[1]||(_[1]=[re("安装文档",-1)])]),_:1}),j(R,{class:"button ghost",to:"/changelog"},{default:J(()=>[..._[2]||(_[2]=[re("查看更新日志",-1)])]),_:1})])]),f("section",ap,[f("div",cp,[_[7]||(_[7]=f("h2",null,"最新版本",-1)),f("p",null,P(c.value),1)]),f("div",up,[a.value?(E(),O("article",fp,[f("div",dp,[_[8]||(_[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",pp,P(me(cs)(a.value.published_at)),1)]),f("h3",null,P(a.value.name||a.value.tag_name),1),f("p",hp,P(a.value.tag_name),1),me(Dt)(a.value.body,4).length?(E(),O("ul",gp,[(E(!0),O(X,null,ke(me(Dt)(a.value.body,4),C=>(E(),O("li",{key:C},P(C),1))),128))])):(E(),O("p",mp,P(d(a.value.body)),1)),f("div",bp,[f("a",{class:"button primary small",href:a.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,vp),p(a.value)?(E(),O("a",{key:0,class:"button secondary small",href:p(a.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+P(p(a.value).name),9,yp)):Je("",!0)])])):Je("",!0),u.value?(E(),O("article",_p,[f("div",kp,[_[9]||(_[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",wp,P(me(cs)(u.value.published_at)),1)]),f("h3",null,P(u.value.name||u.value.tag_name),1),f("p",xp,P(u.value.tag_name),1),me(Dt)(u.value.body,4).length?(E(),O("ul",Cp,[(E(!0),O(X,null,ke(me(Dt)(u.value.body,4),C=>(E(),O("li",{key:C},P(C),1))),128))])):(E(),O("p",Tp,P(d(u.value.body)),1)),f("div",Sp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,Rp),p(u.value)?(E(),O("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+P(p(u.value).name),9,Ap)):Je("",!0)])])):Je("",!0),!a.value&&!u.value?(E(),O("article",Ep,[..._[10]||(_[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Je("",!0)])]),f("section",Pp,[_[11]||(_[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",Ip,[f("div",$p,[(E(),O(X,null,ke(o,C=>f("button",{key:C.value,class:De(["filter-chip",{active:r.value===C.value}]),onClick:A=>r.value=C.value},P(C.label),11,Op)),64))]),Dr(f("input",{"onUpdate:modelValue":_[0]||(_[0]=C=>i.value=C),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[jr,i.value,void 0,{trim:!0}]])])]),t.value?(E(),O("section",Mp,[..._[12]||(_[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):T.value.length?(E(),O("section",Lp,[(E(!0),O(X,null,ke(T.value,C=>(E(),O("article",{key:C.id||C.tag_name,class:"release-card enhanced-release-card"},[f("div",Np,[f("span",{class:De(["release-badge",{alt:me(Bt)(C)==="preview"}])},P(me(Zl)(me(Bt)(C))),3),f("span",Dp,P(me(cs)(C.published_at)),1)]),f("h3",null,P(C.name||C.tag_name),1),f("p",Bp,P(C.tag_name),1),me(Dt)(C.body,4).length?(E(),O("ul",Wp,[(E(!0),O(X,null,ke(me(Dt)(C.body,4),A=>(E(),O("li",{key:A},P(A),1))),128))])):(E(),O("p",Fp,P(d(C.body)),1)),k(C).length?(E(),O("div",Hp,[(E(!0),O(X,null,ke(k(C),A=>(E(),O("div",{key:A.type,class:"asset-group-chip"},[f("strong",null,P(A.label),1),f("span",null,P(A.items.length)+" 个文件",1)]))),128))])):Je("",!0),C.assets&&C.assets.length?(E(),O("div",jp,[(E(!0),O(X,null,ke(m(C),A=>(E(),O("a",{key:A.id||A.name,class:"release-asset-link",href:A.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,P(A.name),1),f("small",null,P(me(io)(me(Rn)(A))),1)],8,zp))),128))])):Je("",!0),f("div",Gp,[f("a",{class:"button primary small",href:C.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Up),j(R,{class:"button secondary small",to:"/changelog"},{default:J(()=>[..._[13]||(_[13]=[re("看时间线",-1)])]),_:1})])]))),128))])):(E(),O("section",qp,[..._[14]||(_[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),_[15]||(_[15]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},ys=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],hn=ys.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Jl=Object.fromEntries(hn.map(e=>[e.slug,e])),Kp={class:"page-shell container"},Zp={class:"page-hero docs-hero-grid"},Qp={class:"hero-actions"},Jp={class:"stack-section surface-card docs-filter-card"},Yp={class:"docs-filter-bar"},Xp={class:"section-head left"},eh={class:"feature-grid three"},th={class:"card-label"},nh={class:"doc-card-meta"},sh={key:0,class:"stack-section"},rh={__name:"DocsPage",setup(e){const t=Re(""),n=he(()=>{const s=t.value.toLowerCase();return s?ys.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):ys});return(s,r)=>{const i=jt("router-link");return E(),O("div",Kp,[f("section",Zp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档都放在站内。",-1)),r[5]||(r[5]=f("p",null," 现在可以直接在这里看部署、运维、配置、架构和 Web 资源同步文档，不用再跳去 GitHub Markdown 页面。 ",-1)),f("div",Qp,[j(i,{class:"button primary",to:"/docs/quick-start"},{default:J(()=>[...r[1]||(r[1]=[re("从快速开始开始",-1)])]),_:1}),j(i,{class:"button secondary",to:"/docs/configuration"},{default:J(()=>[...r[2]||(r[2]=[re("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Jp,[f("div",Yp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Dr(f("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[jr,t.value,void 0,{trim:!0}]])])]),(E(!0),O(X,null,ke(n.value,o=>(E(),O("section",{class:"stack-section",key:o.key},[f("div",Xp,[f("h2",null,P(o.title),1),f("p",null,P(o.description),1)]),f("div",eh,[(E(!0),O(X,null,ke(o.items,l=>(E(),O("article",{class:"feature-card compact",key:l.slug},[f("span",th,P(l.tag),1),f("h3",null,P(l.title),1),f("p",null,P(l.description),1),f("div",nh,[f("span",null,P(o.title),1),f("span",null,P(l.minutes),1)]),j(i,{class:"text-link",to:`/docs/${l.slug}`},{default:J(()=>[...r[8]||(r[8]=[re("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Je("",!0):(E(),O("section",sh,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},ih=`# Tree 技术文档 / Wiki

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
`,oh=`# Summary

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
`,lh=`# 模块地图

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
`,ah=`# 系统架构总览

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
`,ch=`# Web 资源同步机制

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
`,uh=`# 首次上线检查清单

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
`,fh=`# 快速开始

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
`,dh=`# Web 面板访问

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
`,ph=`# 命令与日常运维

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
`,hh=`# 诊断与备份

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
`,gh=`# 假人 / 红石运维

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
`,mh=`# 集成与世界管理

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
`,bh=`# 资源包 / 模型链路

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
`,vh=`# Web 页面总览

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
`,yh=`# 命令速查表

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
`,_h=`# 配置参考

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
`,kh=Object.assign({"../../content/docs/README.md":ih,"../../content/docs/SUMMARY.md":oh,"../../content/docs/architecture/module-map.md":lh,"../../content/docs/architecture/system-overview.md":ah,"../../content/docs/development/web-ui-pipeline.md":ch,"../../content/docs/getting-started/first-day-checklist.md":uh,"../../content/docs/getting-started/quick-start.md":fh,"../../content/docs/getting-started/web-panel.md":dh,"../../content/docs/operations/commands.md":ph,"../../content/docs/operations/diagnostics-and-backups.md":hh,"../../content/docs/operations/fakeplayer-and-redstone.md":gh,"../../content/docs/operations/integrations-and-worlds.md":mh,"../../content/docs/operations/resource-pack.md":bh,"../../content/docs/operations/web-pages-overview.md":vh,"../../content/docs/reference/command-cheatsheet.md":yh,"../../content/docs/reference/configuration.md":_h}),wh="../../content/docs/",xh=Object.fromEntries(Object.entries(kh).map(([e,t])=>[e.replace(wh,""),t]));function Ur(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rn=Ur();function Yl(e){rn=e}var Fn={exec:()=>null};function de(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ne.caret,"$1"),n=n.replace(r,o),s},getRegex:()=>new RegExp(n,t)};return s}var Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Ch=/^(?:[ \t]*(?:\n|$))+/,Th=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Sh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Xn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Rh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,qr=/(?:[*+-]|\d{1,9}[.)])/,Xl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ea=de(Xl).replace(/bull/g,qr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ah=de(Xl).replace(/bull/g,qr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Vr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Eh=/^[^\n]+/,Kr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ph=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Kr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ih=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,qr).getRegex(),Ws="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,$h=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zr).replace("tag",Ws).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ta=de(Vr).replace("hr",Xn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ws).getRegex(),Oh=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ta).getRegex(),Qr={blockquote:Oh,code:Th,def:Ph,fences:Sh,heading:Rh,hr:Xn,html:$h,lheading:ea,list:Ih,newline:Ch,paragraph:ta,table:Fn,text:Eh},oo=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Xn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ws).getRegex(),Mh={...Qr,lheading:Ah,table:oo,paragraph:de(Vr).replace("hr",Xn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",oo).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ws).getRegex()},Lh={...Qr,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(Vr).replace("hr",Xn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ea).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Nh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,na=/^( {2,}|\\)\n(?!\s*$)/,Bh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fs=/[\p{P}\p{S}]/u,Jr=/[\s\p{P}\p{S}]/u,sa=/[^\s\p{P}\p{S}]/u,Wh=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Jr).getRegex(),ra=/(?!~)[\p{P}\p{S}]/u,Fh=/(?!~)[\s\p{P}\p{S}]/u,Hh=/(?:[^\s\p{P}\p{S}]|~)/u,jh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ia=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,zh=de(ia,"u").replace(/punct/g,Fs).getRegex(),Gh=de(ia,"u").replace(/punct/g,ra).getRegex(),oa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Uh=de(oa,"gu").replace(/notPunctSpace/g,sa).replace(/punctSpace/g,Jr).replace(/punct/g,Fs).getRegex(),qh=de(oa,"gu").replace(/notPunctSpace/g,Hh).replace(/punctSpace/g,Fh).replace(/punct/g,ra).getRegex(),Vh=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,sa).replace(/punctSpace/g,Jr).replace(/punct/g,Fs).getRegex(),Kh=de(/\\(punct)/,"gu").replace(/punct/g,Fs).getRegex(),Zh=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qh=de(Zr).replace("(?:-->|$)","-->").getRegex(),Jh=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),_s=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Yh=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",_s).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),la=de(/^!?\[(label)\]\[(ref)\]/).replace("label",_s).replace("ref",Kr).getRegex(),aa=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",Kr).getRegex(),Xh=de("reflink|nolink(?!\\()","g").replace("reflink",la).replace("nolink",aa).getRegex(),Yr={_backpedal:Fn,anyPunctuation:Kh,autolink:Zh,blockSkip:jh,br:na,code:Dh,del:Fn,emStrongLDelim:zh,emStrongRDelimAst:Uh,emStrongRDelimUnd:Vh,escape:Nh,link:Yh,nolink:aa,punctuation:Wh,reflink:la,reflinkSearch:Xh,tag:Jh,text:Bh,url:Fn},eg={...Yr,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",_s).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_s).getRegex()},_r={...Yr,emStrongRDelimAst:qh,emStrongLDelim:Gh,url:de(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},tg={..._r,br:de(na).replace("{2,}","*").getRegex(),text:de(_r.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ss={normal:Qr,gfm:Mh,pedantic:Lh},An={normal:Yr,gfm:_r,breaks:tg,pedantic:eg},ng={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lo=e=>ng[e];function at(e,t){if(t){if(Ne.escapeTest.test(e))return e.replace(Ne.escapeReplace,lo)}else if(Ne.escapeTestNoEncode.test(e))return e.replace(Ne.escapeReplaceNoEncode,lo);return e}function ao(e){try{e=encodeURI(e).replace(Ne.percentDecode,"%")}catch{return null}return e}function co(e,t){var i;const n=e.replace(Ne.findPipe,(o,l,a)=>{let u=!1,c=l;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(Ne.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(Ne.slashPipe,"|");return s}function En(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function sg(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function uo(e,t,n,s,r){const i=t.href,o=t.title||null,l=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,a}function rg(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[l]=o;return l.length>=r.length?i.slice(r.length):i}).join(`
`)}var ks=class{constructor(e){be(this,"options");be(this,"rules");be(this,"lexer");this.options=e||rn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:En(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=rg(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=En(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:En(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=En(t[0],`
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
`,1)[0].replace(this.rules.other.listReplaceTabs,_=>" ".repeat(3*_.length)),p=e.split(`
`,1)[0],m=!d.trim(),k=0;if(this.options.pedantic?(k=2,c=d.trimStart()):m?k=t[1].length+1:(k=t[2].search(this.rules.other.nonSpaceChar),k=k>4?1:k,c=d.slice(k),k+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),a=!0),!a){const _=this.rules.other.nextBulletRegex(k),R=this.rules.other.hrRegex(k),C=this.rules.other.fencesBeginRegex(k),A=this.rules.other.headingBeginRegex(k),L=this.rules.other.htmlBeginRegex(k);for(;e;){const D=e.split(`
`,1)[0];let V;if(p=D,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),V=p):V=p.replace(this.rules.other.tabCharGlobal,"    "),C.test(p)||A.test(p)||L.test(p)||_.test(p)||R.test(p))break;if(V.search(this.rules.other.nonSpaceChar)>=k||!p.trim())c+=`
`+V.slice(k);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(d)||A.test(d)||R.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=D+`
`,e=e.substring(D.length+1),d=V.slice(k)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let T=null,$;this.options.gfm&&(T=this.rules.other.listIsTask.exec(c),T&&($=T[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!T,checked:$,loose:!1,text:c,tokens:[]}),r.raw+=u}const l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const u=r.items[a].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=co(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of r)i.rows.push(co(l,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=En(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=sg(t[2],"()");if(i===-2)return;if(i>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),uo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return uo(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let o,l,a=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+l);if(Math.min(i,l)%2){const k=p.slice(1,-1);return{type:"em",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Tt=class kr{constructor(t){be(this,"tokens");be(this,"options");be(this,"state");be(this,"tokenizer");be(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||rn,this.options.tokenizer=this.options.tokenizer||new ks,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Ne,block:ss.normal,inline:An.normal};this.options.pedantic?(n.block=ss.pedantic,n.inline=An.pedantic):this.options.gfm&&(n.block=ss.gfm,this.options.breaks?n.inline=An.breaks:n.inline=An.gfm),this.tokenizer.rules=n}static get rules(){return{block:ss,inline:An}}static lex(t,n){return new kr(n).lex(t)}static lexInline(t,n){return new kr(n).inlineTokens(t)}lex(t){t=t.replace(Ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,o;for(this.options.pedantic&&(t=t.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));t;){let l;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let a=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),s=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,a,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((a=(l=this.options.extensions)==null?void 0:l.inline)!=null&&a.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let k;this.options.extensions.startInline.forEach(T=>{k=T.call({lexer:this},m),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},ws=class{constructor(e){be(this,"options");be(this,"parser");this.options=e||rn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(Ne.notSpaceStart))==null?void 0:i[0],r=e.replace(Ne.endingNewline,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ao(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+at(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=ao(e);if(r===null)return at(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${at(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}},Xr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},St=class wr{constructor(t){be(this,"options");be(this,"renderer");be(this,"textRenderer");this.options=t||rn,this.options.renderer=this.options.renderer||new ws,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Xr}static parse(t,n){return new wr(n).parse(t)}static parseInline(t,n){return new wr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=l,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const a=l;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=u||"";continue}}const a=l;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},sr,us=(sr=class{constructor(e){be(this,"options");be(this,"block");this.options=e||rn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Tt.lex:Tt.lexInline}provideParser(){return this.block?St.parse:St.parseInline}},be(sr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),sr),ig=class{constructor(...e){be(this,"defaults",Ur());be(this,"options",this.setOptions);be(this,"parse",this.parseMarkdown(!0));be(this,"parseInline",this.parseMarkdown(!1));be(this,"Parser",St);be(this,"Renderer",ws);be(this,"TextRenderer",Xr);be(this,"Lexer",Tt);be(this,"Tokenizer",ks);be(this,"Hooks",us);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const a of l)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const a=o[l].flat(1/0);n=n.concat(this.walkTokens(a,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new ws(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,l=n.renderer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new ks(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,l=n.tokenizer[o],a=r[o];r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new us;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,l=n.hooks[o],a=r[o];us.passThroughHooks.has(i)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(d=>a.call(r,d));const c=l.call(r,u);return a.call(r,c)}:r[o]=(...u)=>{let c=l.apply(r,u);return c===!1&&(c=a.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Tt.lex(e,t??this.defaults)}parser(e,t){return St.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const l=i.hooks?i.hooks.provideLexer():e?Tt.lex:Tt.lexInline,a=i.hooks?i.hooks.provideParser():e?St.parse:St.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},tn=new ig;function ne(e,t){return tn.parse(e,t)}ne.options=ne.setOptions=function(e){return tn.setOptions(e),ne.defaults=tn.defaults,Yl(ne.defaults),ne};ne.getDefaults=Ur;ne.defaults=rn;ne.use=function(...e){return tn.use(...e),ne.defaults=tn.defaults,Yl(ne.defaults),ne};ne.walkTokens=function(e,t){return tn.walkTokens(e,t)};ne.parseInline=tn.parseInline;ne.Parser=St;ne.parser=St.parse;ne.Renderer=ws;ne.TextRenderer=Xr;ne.Lexer=Tt;ne.lexer=Tt.lex;ne.Tokenizer=ks;ne.Hooks=us;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;St.parse;Tt.lex;const og=Object.fromEntries(hn.map(e=>[e.path,e.slug])),lg=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),ag=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return lg(n.join("/"))},cg=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",ca=()=>{const e=new Map;return t=>{const n=cg(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},ug=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`/docs/${n}/?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?ag(t,s):t;if(i.endsWith(".md")){const o=og[i];if(o)return`/docs/${o}/${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};ne.setOptions({gfm:!0,breaks:!0});const fg=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const o=ug(i,t,n);return`[${r}](${o})`}),dg=e=>{const t=ne.lexer(String(e||"")),n=ca();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},pg=(e,t,n)=>{const s=new ne.Renderer,r=ca();s.link=({href:o,title:l,tokens:a})=>{const u=ne.Parser.parseInline(a),c=o||"",d=/^https?:\/\//i.test(c),p=l?` title="${l}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:o,title:l,text:a})=>{const u=l?` title="${l}"`:"";return`<img src="${o}" alt="${a||""}"${u} />`},s.heading=({tokens:o,depth:l,text:a})=>{const u=r(a),c=ne.Parser.parseInline(o);return`<h${l} id="${u}" data-doc-heading="${u}">${c}</h${l}>`};const i=fg(e,t,n);return ne.parse(i,{renderer:s})},hg={key:0,class:"docs-article-shell"},gg={class:"doc-breadcrumb"},mg={class:"doc-header surface-card"},bg={class:"card-label"},vg={class:"doc-meta"},yg=["innerHTML"],_g={class:"doc-footer surface-card"},kg=["onClick"],wg={key:2,class:"docs-article-shell"},xg={class:"empty-state"},Cg={__name:"DocArticlePage",setup(e){const t=Fl(),n=qf(),s=Re(""),r=Re(null),i=Re(null),o=he(()=>Jl[t.params.slug]),l=he(()=>o.value?xh[o.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),a=he(()=>dg(l.value)),u=he(()=>o.value?pg(l.value,o.value.path,o.value.slug):""),c=he(()=>hn.findIndex(L=>{var D;return L.slug===((D=o.value)==null?void 0:D.slug)})),d=he(()=>c.value>0?hn[c.value-1]:null),p=he(()=>c.value>=0&&c.value<hn.length-1?hn[c.value+1]:null),m=(L,D,V)=>{if(!L)return;const se=L.querySelector(D);if(!se)return;const z=L.querySelector(V),Y=((z==null?void 0:z.offsetHeight)||0)+14,le=se.offsetTop,F=le+se.offsetHeight,ie=L.scrollTop+Y,Te=L.scrollTop+L.clientHeight-12;le<ie?L.scrollTop=Math.max(0,le-Y):F>Te&&(L.scrollTop=F-L.clientHeight+12)},k=()=>{m(r.value,".docs-nav-link.active",".docs-sidebar-head"),m(i.value,".docs-outline-link.active",".docs-outline-head")},T=()=>{const L=a.value.find(D=>{const V=document.getElementById(D.id);if(!V)return!1;const se=V.getBoundingClientRect();return se.top>=0&&se.top<=180});L&&s.value!==L.id&&(s.value=L.id,k())},$=L=>{window.innerWidth<=920||Math.abs(L.deltaY)<Math.abs(L.deltaX)||(L.preventDefault(),window.scrollBy({top:L.deltaY,behavior:"auto"}))},_=()=>{var L,D;(L=r.value)==null||L.addEventListener("wheel",$,{passive:!1}),(D=i.value)==null||D.addEventListener("wheel",$,{passive:!1})},R=()=>{var L,D;(L=r.value)==null||L.removeEventListener("wheel",$),(D=i.value)==null||D.removeEventListener("wheel",$)},C=async L=>{await Jt();const D=document.getElementById(L);D&&(s.value=L,D.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:L}}))},A=async()=>{var D;await Jt();const L=t.query.section?String(t.query.section):"";if(L){const V=document.getElementById(L);if(V){s.value=L,requestAnimationFrame(()=>{V.scrollIntoView({behavior:"smooth",block:"start"}),k()});return}}s.value=((D=a.value[0])==null?void 0:D.id)||"",requestAnimationFrame(k)};return sn(async()=>{window.addEventListener("scroll",T,{passive:!0}),await Jt(),_(),k()}),Os(()=>{window.removeEventListener("scroll",T),R()}),Ft([u,()=>t.query.section,()=>t.params.slug],A,{immediate:!0}),Ft([()=>t.params.slug,()=>a.value.length],async()=>{R(),await Jt(),_(),k()}),(L,D)=>{const V=jt("router-link");return E(),O("div",{class:De(["page-shell container docs-layout-page",{"has-outline":a.value.length}])},[f("aside",{ref_key:"sidebarRef",ref:r,class:"docs-sidebar surface-card"},[D[0]||(D[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(E(!0),O(X,null,ke(me(ys),se=>(E(),O("div",{key:se.key,class:"docs-nav-group"},[f("h3",null,P(se.title),1),(E(!0),O(X,null,ke(se.items,z=>{var Y;return E(),dn(V,{key:z.slug,to:`/docs/${z.slug}`,class:De(["docs-nav-link",{active:((Y=o.value)==null?void 0:Y.slug)===z.slug}])},{default:J(()=>[f("span",null,P(z.title),1),f("small",null,P(z.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))],512),o.value?(E(),O("section",hg,[f("div",gg,[j(V,{to:"/docs"},{default:J(()=>[...D[1]||(D[1]=[re("文档首页",-1)])]),_:1}),D[2]||(D[2]=f("span",null,"/",-1)),f("span",null,P(o.value.groupTitle),1)]),f("header",mg,[f("div",null,[f("span",bg,P(o.value.tag),1),f("h1",null,P(o.value.title),1),f("p",null,P(o.value.description),1)]),f("div",vg,[f("span",null,P(o.value.groupTitle),1),f("span",null,P(o.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:u.value},null,8,yg),f("footer",_g,[d.value?(E(),dn(V,{key:0,class:"doc-pager",to:`/docs/${d.value.slug}`},{default:J(()=>[D[3]||(D[3]=f("small",null,"上一篇",-1)),f("strong",null,P(d.value.title),1)]),_:1},8,["to"])):(E(),dn(V,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:J(()=>[...D[4]||(D[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),p.value?(E(),dn(V,{key:2,class:"doc-pager align-right",to:`/docs/${p.value.slug}`},{default:J(()=>[D[5]||(D[5]=f("small",null,"下一篇",-1)),f("strong",null,P(p.value.title),1)]),_:1},8,["to"])):Je("",!0)])])):Je("",!0),o.value&&a.value.length?(E(),O("aside",{key:1,ref_key:"outlineRef",ref:i,class:"docs-outline surface-card"},[D[6]||(D[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(E(!0),O(X,null,ke(a.value,se=>(E(),O("button",{key:se.id,class:De(["docs-outline-link",[`depth-${se.depth}`,{active:s.value===se.id}]]),onClick:z=>C(se.id)},P(se.text),11,kg))),128))],512)):o.value?Je("",!0):(E(),O("section",wg,[f("div",xg,[D[8]||(D[8]=f("strong",null,"没有找到对应文档。",-1)),D[9]||(D[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),j(V,{class:"button primary",to:"/docs"},{default:J(()=>[...D[7]||(D[7]=[re("返回文档首页",-1)])]),_:1})])]))],2)}}},Tg={class:"page-shell container"},Sg={class:"roadmap-grid"},Rg={class:"roadmap-head"},Ag={class:"card-label"},Eg={class:"roadmap-list"},Pg={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(E(),O("div",Tg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",Sg,[(E(),O(X,null,ke(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",Rg,[f("span",Ag,P(r.tag),1),f("h2",null,P(r.title),1),f("p",null,P(r.description),1)]),f("div",Eg,[(E(!0),O(X,null,ke(r.items,i=>(E(),O("div",{class:"roadmap-item",key:i.title},[f("div",{class:De(["roadmap-state",r.stateClass])},P(r.stateLabel),3),f("h3",null,P(i.title),1),f("p",null,P(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},Ig={class:"page-shell container"},$g={class:"page-hero"},Og={class:"hero-actions"},Mg={class:"stack-section surface-card changelog-toolbar"},Lg={class:"release-filter-row"},Ng={class:"filter-chip-group"},Dg=["onClick"],Bg={key:0,class:"stack-section"},Wg={key:1,class:"stack-section changelog-timeline"},Fg={class:"timeline-card surface-card"},Hg={class:"release-head"},jg={class:"release-date"},zg={class:"release-tag"},Gg={key:0,class:"bullet-list compact-list"},Ug={key:1,class:"release-body"},qg={class:"release-actions"},Vg=["href"],Kg={class:"muted"},Zg={key:2,class:"stack-section"},Qg={__name:"ChangelogPage",setup(e){const t=Re(!0),n=Re([]),s=Re("all"),r=Re(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=he(()=>{const l=r.value.toLowerCase();return Ql(n.value).filter(a=>{const u=Bt(a);return s.value!=="all"&&u!==s.value?!1:l?[a.name,a.tag_name,Zn(a.body)].filter(Boolean).join(" ").toLowerCase().includes(l):!0})});return sn(async()=>{const l=await Kl();n.value=l.data,t.value=!1}),(l,a)=>{const u=jt("router-link");return E(),O("div",Ig,[f("section",$g,[a[3]||(a[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),a[4]||(a[4]=f("h1",null,"更新日志",-1)),a[5]||(a[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",Og,[a[2]||(a[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),j(u,{class:"button secondary",to:"/downloads"},{default:J(()=>[...a[1]||(a[1]=[re("查看下载页",-1)])]),_:1})])]),f("section",Mg,[a[6]||(a[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Lg,[f("div",Ng,[(E(),O(X,null,ke(i,c=>f("button",{key:c.value,class:De(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},P(c.label),11,Dg)),64))]),Dr(f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[jr,r.value,void 0,{trim:!0}]])])]),t.value?(E(),O("section",Bg,[...a[7]||(a[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(E(),O("section",Wg,[(E(!0),O(X,null,ke(o.value,c=>(E(),O("article",{class:"timeline-item",key:c.id||c.tag_name},[a[8]||(a[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",Fg,[f("div",Hg,[f("span",{class:De(["release-badge",{alt:me(Bt)(c)==="preview"}])},P(me(Zl)(me(Bt)(c))),3),f("span",jg,P(me(cs)(c.published_at)),1)]),f("h3",null,P(c.name||c.tag_name),1),f("p",zg,P(c.tag_name),1),me(Dt)(c.body,5).length?(E(),O("ul",Gg,[(E(!0),O(X,null,ke(me(Dt)(c.body,5),d=>(E(),O("li",{key:d},P(d),1))),128))])):(E(),O("p",Ug,P(me(Zn)(c.body)||"暂无发布说明。"),1)),f("div",qg,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Vg),f("span",Kg,P((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(E(),O("section",Zg,[...a[9]||(a[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Jg={class:"page-shell container"},Yg={class:"stack-section"},Xg={class:"section-head left"},em={key:0,class:"contributor-grid"},tm=["href"],nm=["src","alt"],sm={key:1,class:"empty-state"},rm={__name:"CommunityPage",setup(e){const t=Re([]),n=Re("empty"),s=he(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":n.value==="fallback"?"当前显示的是构建时生成的静态贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return sn(async()=>{const r=await rp();t.value=r.data,n.value=r.source}),(r,i)=>(E(),O("div",Jg,[i[2]||(i[2]=ht('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持</h1><p> 如果你想反馈问题、参与讨论、查看贡献者或者先看常见问题，这一页就是对外的统一入口。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",Yg,[f("div",Xg,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,P(s.value),1)]),t.value.length?(E(),O("div",em,[(E(!0),O(X,null,ke(t.value,o=>(E(),O("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login,loading:"lazy",decoding:"async"},null,8,nm),f("strong",null,P(o.login),1),f("small",null,P(o.contributions)+" 次公开提交",1)],8,tm))),128))])):(E(),O("div",sm,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},im="https://treemc-cloud.github.io",om=`${im}/`,lm="TreeCore 官方网站",yt="TreeCore,TreeMC,我的世界核心,Minecraft 服务端核心,Minecraft server core,Paper,Folia,Paper 核心,Folia 核心,高性能 Minecraft,Web 管理面板",am="TreeCore 官方网站：我的世界 / Minecraft 服务端核心，面向 Paper、Folia、TreeMC 与高性能服务器场景，提供 Web 管理、诊断、资源包链路与技术文档。",kt={"/":{title:"TreeCore | 我的世界 / Minecraft 服务端核心",description:"TreeCore 官方网站：我的世界 / Minecraft 服务端核心，面向 Paper、Folia、TreeMC 与高性能服务器场景，提供 Web 管理、诊断、资源包链路与技术文档。",keywords:`${yt},TreeCore 官网,TreeMC 官网`},"/features":{title:"TreeCore 核心能力 | Minecraft / Paper / Folia",description:"查看 TreeCore 当前对外可用的核心能力：Minecraft 服务端性能优化、Paper / Folia 相关生态、Web 面板、内容链路与运维工具。",keywords:`${yt},Minecraft 性能优化,Paper 优化,Folia 生态`},"/downloads":{title:"TreeCore 下载 | Minecraft / Paper / Folia 构建",description:"查看 TreeCore 公开下载入口、构建发布、版本摘要与获取方式。",keywords:`${yt},TreeCore 下载,TreeMC 下载,Paper 构建,Folia 构建`},"/docs":{title:"TreeCore 技术文档 | Minecraft / Paper / Folia",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面，覆盖部署、配置、资源包、世界管理、Paper / Folia 相关内容。",keywords:`${yt},TreeCore 文档,TreeMC 文档,Paper 文档,Folia 文档`},"/roadmap":{title:"TreeCore 路线图 | 服务端核心与 Web 管理",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。",keywords:`${yt},TreeCore 路线图,TreeMC 路线图`},"/changelog":{title:"TreeCore 更新日志 | 构建与版本变化",description:"查看 TreeCore 公共版本的更新日志与版本时间线。",keywords:`${yt},TreeCore 更新日志,TreeMC 更新日志`},"/team":{title:"TreeCore 团队与支持 | TreeMC 社区入口",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。",keywords:`${yt},TreeMC 社区,TreeCore QQ群,TreeMC 支持`},"/community":{title:"TreeCore 团队与支持 | TreeMC 社区入口",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。",keywords:`${yt},TreeMC 社区,TreeCore QQ群,TreeMC 支持`}},ua=(e="/")=>{if(!e)return"/";const t=String(e).trim();return t==="/"?"/":t.startsWith("/")?t:`/${t}`},cm=(e="/")=>{const t=ua(e);return t==="/"?"/":`${t.replace(/\/+$/,"")}/`},Pn=(e="/")=>new URL(cm(e).replace(/^\//,""),om).toString(),um=(e="/",t=null)=>{if(t)return{title:`${t.title} | ${lm}`,description:t.description||am,keywords:`${yt},${t.title},${t.groupTitle||""},TreeCore 文档,TreeMC 文档`,canonical:Pn(e),url:Pn(e)};const n=ua(e);return{...kt[n]||kt["/"],canonical:Pn(n==="/community"?"/team":n),url:Pn(n)}},fm=[{path:"/",component:Kd,meta:kt["/"]},{path:"/features",component:Yd,meta:kt["/features"]},{path:"/downloads",component:Vp,meta:kt["/downloads"]},{path:"/docs",component:rh,meta:kt["/docs"]},{path:"/docs/:slug",component:Cg,meta:{title:"文档 | TreeCore 官方网站",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:Pg,meta:kt["/roadmap"]},{path:"/changelog",component:Qg,meta:kt["/changelog"]},{path:"/team",alias:"/community",component:rm,meta:kt["/team"]}],fa=Uf({history:xf("/"),routes:fm,scrollBehavior(e,t,n){var s;return n||(e.path===t.path&&((s=e.query)!=null&&s.section)?!1:{top:0})}}),da=Nu(id),Kt=(e,t)=>{let n=document.head.querySelector(e);n||(n=document.createElement("meta"),document.head.appendChild(n)),Object.entries(t).forEach(([s,r])=>n.setAttribute(s,r))};fa.afterEach(e=>{var r;const t=(r=e.params)!=null&&r.slug?Jl[e.params.slug]:null,n=um(e.path,t);document.title=n.title,Kt('meta[name="description"]',{name:"description",content:n.description}),Kt('meta[name="keywords"]',{name:"keywords",content:n.keywords}),Kt('meta[property="og:title"]',{property:"og:title",content:n.title}),Kt('meta[property="og:description"]',{property:"og:description",content:n.description}),Kt('meta[property="og:url"]',{property:"og:url",content:n.url}),Kt('meta[name="twitter:title"]',{name:"twitter:title",content:n.title}),Kt('meta[name="twitter:description"]',{name:"twitter:description",content:n.description});const s=document.querySelector('link[rel="canonical"]');s&&s.setAttribute("href",n.canonical)});da.use(fa);da.mount("#app");

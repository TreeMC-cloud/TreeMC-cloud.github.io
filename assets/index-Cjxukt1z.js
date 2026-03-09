var da=Object.defineProperty;var pa=(e,t,n)=>t in e?da(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>pa(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},pn=[],dt=()=>{},uo=()=>!1,wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ws=e=>e.startsWith("onUpdate:"),Se=Object.assign,xs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ha=Object.prototype.hasOwnProperty,ue=(e,t)=>ha.call(e,t),K=Array.isArray,hn=e=>Qn(e)==="[object Map]",fo=e=>Qn(e)==="[object Set]",ni=e=>Qn(e)==="[object Date]",Z=e=>typeof e=="function",we=e=>typeof e=="string",pt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",po=e=>(fe(e)||Z(e))&&Z(e.then)&&Z(e.catch),ho=Object.prototype.toString,Qn=e=>ho.call(e),ga=e=>Qn(e).slice(8,-1),go=e=>Qn(e)==="[object Object]",Cs=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,In=ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ma=/-\w/g,Ze=xr(e=>e.replace(ma,t=>t.slice(1).toUpperCase())),ba=/\B([A-Z])/g,tn=xr(e=>e.replace(ba,"-$1").toLowerCase()),Cr=xr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wr=xr(e=>e?`on${Cr(e)}`:""),Wt=(e,t)=>!Object.is(e,t),rr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},mo=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t},va=e=>{const t=we(e)?Number(e):NaN;return isNaN(t)?e:t};let ri;const Tr=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=we(r)?wa(r):Rs(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(we(e)||fe(e))return e}const _a=/;(?![^(]*\))/g,ya=/:([^]+)/,ka=/\/\*[^]*?\*\//g;function wa(e){const t={};return e.replace(ka,"").split(_a).forEach(n=>{if(n){const r=n.split(ya);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qe(e){let t="";if(we(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=qe(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ca=ks(xa);function bo(e){return!!e||e===""}function Ta(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ss(e[r],t[r]);return n}function Ss(e,t){if(e===t)return!0;let n=ni(e),r=ni(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=pt(e),r=pt(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?Ta(e,t):!1;if(n=fe(e),r=fe(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Ss(e[o],t[o]))return!1}}return String(e)===String(t)}const vo=e=>!!(e&&e.__v_isRef===!0),B=e=>we(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===ho||!Z(e.toString))?vo(e)?B(e.value):JSON.stringify(e,_o,2):String(e),_o=(e,t)=>vo(t)?_o(e,t.value):hn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Hr(r,i)+" =>"]=s,n),{})}:fo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hr(n))}:pt(t)?Hr(t):fe(t)&&!K(t)&&!go(t)?String(t):t,Hr=(e,t="")=>{var n;return pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fe;class Ra{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){++this._on===1&&(this.prevScope=Fe,Fe=this)}off(){this._on>0&&--this._on===0&&(Fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sa(){return Fe}let _e;const Fr=new WeakSet;class yo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fr.has(this)&&(Fr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,si(this),xo(this);const t=_e,n=Ye;_e=this,Ye=!0;try{return this.fn()}finally{Co(this),_e=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ps(t);this.deps=this.depsTail=void 0,si(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ns(this)&&this.run()}get dirty(){return ns(this)}}let ko=0,$n,On;function wo(e,t=!1){if(e.flags|=8,t){e.next=On,On=e;return}e.next=$n,$n=e}function As(){ko++}function Es(){if(--ko>0)return;if(On){let t=On;for(On=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;$n;){let t=$n;for($n=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function xo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Co(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ps(r),Aa(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ns(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(To(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function To(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hn)||(e.globalVersion=Hn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ns(e))))return;e.flags|=2;const t=e.dep,n=_e,r=Ye;_e=e,Ye=!0;try{xo(e);const s=e.fn(e._value);(t.version===0||Wt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=n,Ye=r,Co(e),e.flags&=-3}}function Ps(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ps(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Aa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const Ro=[];function St(){Ro.push(Ye),Ye=!1}function At(){const e=Ro.pop();Ye=e===void 0?!0:e}function si(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=_e;_e=void 0;try{t()}finally{_e=n}}}let Hn=0;class Ea{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Is{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Ye||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Ea(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,So(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=r)}return n}trigger(t){this.version++,Hn++,this.notify(t)}notify(t){As();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Es()}}}function So(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)So(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const rs=new WeakMap,Jt=Symbol(""),ss=Symbol(""),Fn=Symbol("");function Ee(e,t,n){if(Ye&&_e){let r=rs.get(e);r||rs.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Is),s.map=r,s.key=n),s.track()}}function xt(e,t,n,r,s,i){const o=rs.get(e);if(!o){Hn++;return}const l=a=>{a&&a.trigger()};if(As(),t==="clear")o.forEach(l);else{const a=K(e),u=a&&Cs(n);if(a&&n==="length"){const c=Number(r);o.forEach((d,h)=>{(h==="length"||h===Fn||!pt(h)&&h>=c)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Fn)),t){case"add":a?u&&l(o.get("length")):(l(o.get(Jt)),hn(e)&&l(o.get(ss)));break;case"delete":a||(l(o.get(Jt)),hn(e)&&l(o.get(ss)));break;case"set":hn(e)&&l(o.get(Jt));break}}Es()}function ln(e){const t=ie(e);return t===e?t:(Ee(t,"iterate",Fn),Qe(e)?t:t.map(et))}function Rr(e){return Ee(e=ie(e),"iterate",Fn),e}function Mt(e,t){return Et(e)?bn(Yt(e)?et(t):t):et(t)}const Pa={__proto__:null,[Symbol.iterator](){return jr(this,Symbol.iterator,e=>Mt(this,e))},concat(...e){return ln(this).concat(...e.map(t=>K(t)?ln(t):t))},entries(){return jr(this,"entries",e=>(e[1]=Mt(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(r=>Mt(this,r)),arguments)},find(e,t){return mt(this,"find",e,t,n=>Mt(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>Mt(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return zr(this,"includes",e)},indexOf(...e){return zr(this,"indexOf",e)},join(e){return ln(this).join(e)},lastIndexOf(...e){return zr(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return wn(this,"pop")},push(...e){return wn(this,"push",e)},reduce(e,...t){return ii(this,"reduce",e,t)},reduceRight(e,...t){return ii(this,"reduceRight",e,t)},shift(){return wn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return wn(this,"splice",e)},toReversed(){return ln(this).toReversed()},toSorted(e){return ln(this).toSorted(e)},toSpliced(...e){return ln(this).toSpliced(...e)},unshift(...e){return wn(this,"unshift",e)},values(){return jr(this,"values",e=>Mt(this,e))}};function jr(e,t,n){const r=Rr(e),s=r[t]();return r!==e&&!Qe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ia=Array.prototype;function mt(e,t,n,r,s,i){const o=Rr(e),l=o!==e&&!Qe(e),a=o[t];if(a!==Ia[t]){const d=a.apply(e,i);return l?et(d):d}let u=n;o!==e&&(l?u=function(d,h){return n.call(this,Mt(e,d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const c=a.call(o,u,r);return l&&s?s(c):c}function ii(e,t,n,r){const s=Rr(e);let i=n;return s!==e&&(Qe(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,Mt(e,l),a,e)}),s[t](i,...r)}function zr(e,t,n){const r=ie(e);Ee(r,"iterate",Fn);const s=r[t](...n);return(s===-1||s===!1)&&Ms(n[0])?(n[0]=ie(n[0]),r[t](...n)):s}function wn(e,t,n=[]){St(),As();const r=ie(e)[t].apply(e,n);return Es(),At(),r}const $a=ks("__proto__,__v_isRef,__isVue"),Ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt));function Oa(e){pt(e)||(e=String(e));const t=ie(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Eo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?za:Oo:i?$o:Io).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!s){let a;if(o&&(a=Pa[n]))return a;if(n==="hasOwnProperty")return Oa}const l=Reflect.get(t,n,Ie(t)?t:r);if((pt(n)?Ao.has(n):$a(n))||(s||Ee(t,"get",n),i))return l;if(Ie(l)){const a=o&&Cs(n)?l:l.value;return s&&fe(a)?os(a):a}return fe(l)?s?os(l):Sr(l):l}}class Po extends Eo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=K(t)&&Cs(n);if(!this._isShallow){const u=Et(i);if(!Qe(r)&&!Et(r)&&(i=ie(i),r=ie(r)),!o&&Ie(i)&&!Ie(r))return u||(i.value=r),!0}const l=o?Number(n)<t.length:ue(t,n),a=Reflect.set(t,n,r,Ie(t)?t:s);return t===ie(s)&&(l?Wt(r,i)&&xt(t,"set",n,r):xt(t,"add",n,r)),a}deleteProperty(t,n){const r=ue(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&xt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!pt(n)||!Ao.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",K(t)?"length":Jt),Reflect.ownKeys(t)}}class Ma extends Eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const La=new Po,Na=new Ma,Da=new Po(!0);const is=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function Ba(e,t,n){return function(...r){const s=this.__v_raw,i=ie(s),o=hn(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=s[e](...r),c=n?is:t?bn:et;return!t&&Ee(i,"iterate",a?ss:Jt),Se(Object.create(u),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:l?[c(d[0]),c(d[1])]:c(d),done:h}}})}}function er(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wa(e,t){const n={get(s){const i=this.__v_raw,o=ie(i),l=ie(s);e||(Wt(s,l)&&Ee(o,"get",s),Ee(o,"get",l));const{has:a}=Xn(o),u=t?is:e?bn:et;if(a.call(o,s))return u(i.get(s));if(a.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Ee(ie(s),"iterate",Jt),s.size},has(s){const i=this.__v_raw,o=ie(i),l=ie(s);return e||(Wt(s,l)&&Ee(o,"has",s),Ee(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,a=ie(l),u=t?is:e?bn:et;return!e&&Ee(a,"iterate",Jt),l.forEach((c,d)=>s.call(i,u(c),u(d),o))}};return Se(n,e?{add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear")}:{add(s){!t&&!Qe(s)&&!Et(s)&&(s=ie(s));const i=ie(this);return Xn(i).has.call(i,s)||(i.add(s),xt(i,"add",s,s)),this},set(s,i){!t&&!Qe(i)&&!Et(i)&&(i=ie(i));const o=ie(this),{has:l,get:a}=Xn(o);let u=l.call(o,s);u||(s=ie(s),u=l.call(o,s));const c=a.call(o,s);return o.set(s,i),u?Wt(i,c)&&xt(o,"set",s,i):xt(o,"add",s,i),this},delete(s){const i=ie(this),{has:o,get:l}=Xn(i);let a=o.call(i,s);a||(s=ie(s),a=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return a&&xt(i,"delete",s,void 0),u},clear(){const s=ie(this),i=s.size!==0,o=s.clear();return i&&xt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ba(s,e,t)}),n}function $s(e,t){const n=Wa(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Ha={get:$s(!1,!1)},Fa={get:$s(!1,!0)},ja={get:$s(!0,!1)};const Io=new WeakMap,$o=new WeakMap,Oo=new WeakMap,za=new WeakMap;function Ua(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Va(e){return e.__v_skip||!Object.isExtensible(e)?0:Ua(ga(e))}function Sr(e){return Et(e)?e:Os(e,!1,La,Ha,Io)}function Mo(e){return Os(e,!1,Da,Fa,$o)}function os(e){return Os(e,!0,Na,ja,Oo)}function Os(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Va(e);if(i===0)return e;const o=s.get(e);if(o)return o;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function Yt(e){return Et(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function Ms(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function qa(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&mo(e,"__v_skip",!0),e}const et=e=>fe(e)?Sr(e):e,bn=e=>fe(e)?os(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function Ae(e){return Lo(e,!1)}function Ga(e){return Lo(e,!0)}function Lo(e,t){return Ie(e)?e:new Ka(e,t)}class Ka{constructor(t,n){this.dep=new Is,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:et(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Qe(t)||Et(t);t=r?t:ie(t),Wt(t,n)&&(this._rawValue=t,this._value=r?t:et(t),this.dep.trigger())}}function ge(e){return Ie(e)?e.value:e}const Qa={get:(e,t,n)=>t==="__v_raw"?e:ge(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ie(s)&&!Ie(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function No(e){return Yt(e)?e:new Proxy(e,Qa)}class Za{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Is(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return wo(this,!0),!0}get value(){const t=this.dep.track();return To(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ja(e,t,n=!1){let r,s;return Z(e)?r=e:(r=e.get,s=e.set),new Za(r,s,n)}const tr={},ur=new WeakMap;let Gt;function Ya(e,t=!1,n=Gt){if(n){let r=ur.get(n);r||ur.set(n,r=[]),r.push(e)}}function Xa(e,t,n=be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:a}=n,u=A=>s?A:Qe(A)||s===!1||s===0?Ct(A,1):Ct(A);let c,d,h,m,w=!1,T=!1;if(Ie(e)?(d=()=>e.value,w=Qe(e)):Yt(e)?(d=()=>u(e),w=!0):K(e)?(T=!0,w=e.some(A=>Yt(A)||Qe(A)),d=()=>e.map(A=>{if(Ie(A))return A.value;if(Yt(A))return u(A);if(Z(A))return a?a(A,2):A()})):Z(e)?t?d=a?()=>a(e,2):e:d=()=>{if(h){St();try{h()}finally{At()}}const A=Gt;Gt=c;try{return a?a(e,3,[m]):e(m)}finally{Gt=A}}:d=dt,t&&s){const A=d,O=s===!0?1/0:s;d=()=>Ct(A(),O)}const P=Sa(),v=()=>{c.stop(),P&&P.active&&xs(P.effects,c)};if(i&&t){const A=t;t=(...O)=>{A(...O),v()}}let S=T?new Array(e.length).fill(tr):tr;const C=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const O=c.run();if(s||w||(T?O.some((N,G)=>Wt(N,S[G])):Wt(O,S))){h&&h();const N=Gt;Gt=c;try{const G=[O,S===tr?void 0:T&&S[0]===tr?[]:S,m];S=O,a?a(t,3,G):t(...G)}finally{Gt=N}}}else c.run()};return l&&l(C),c=new yo(d),c.scheduler=o?()=>o(C,!1):C,m=A=>Ya(A,!1,c),h=c.onStop=()=>{const A=ur.get(c);if(A){if(a)a(A,4);else for(const O of A)O();ur.delete(c)}},t?r?C(!0):S=c.run():o?o(C.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function Ct(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ie(e))Ct(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)Ct(e[r],t,n);else if(fo(e)||hn(e))e.forEach(r=>{Ct(r,t,n)});else if(go(e)){for(const r in e)Ct(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ct(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zn(e,t,n,r){try{return r?e(...r):e()}catch(s){Ar(s,t,n)}}function tt(e,t,n,r){if(Z(e)){const s=Zn(e,t,n,r);return s&&po(s)&&s.catch(i=>{Ar(i,t,n)}),s}if(K(e)){const s=[];for(let i=0;i<e.length;i++)s.push(tt(e[i],t,n,r));return s}}function Ar(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,u)===!1)return}l=l.parent}if(i){St(),Zn(i,null,10,[e,a,u]),At();return}}ec(e,n,s,r,o)}function ec(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Me=[];let ct=-1;const gn=[];let Lt=null,an=0;const Do=Promise.resolve();let fr=null;function Qt(e){const t=fr||Do;return e?t.then(this?e.bind(this):e):t}function tc(e){let t=ct+1,n=Me.length;for(;t<n;){const r=t+n>>>1,s=Me[r],i=jn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ls(e){if(!(e.flags&1)){const t=jn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=jn(n)?Me.push(e):Me.splice(tc(t),0,e),e.flags|=1,Bo()}}function Bo(){fr||(fr=Do.then(Ho))}function nc(e){K(e)?gn.push(...e):Lt&&e.id===-1?Lt.splice(an+1,0,e):e.flags&1||(gn.push(e),e.flags|=1),Bo()}function oi(e,t,n=ct+1){for(;n<Me.length;n++){const r=Me[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Me.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wo(e){if(gn.length){const t=[...new Set(gn)].sort((n,r)=>jn(n)-jn(r));if(gn.length=0,Lt){Lt.push(...t);return}for(Lt=t,an=0;an<Lt.length;an++){const n=Lt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lt=null,an=0}}const jn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ho(e){try{for(ct=0;ct<Me.length;ct++){const t=Me[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Me.length;ct++){const t=Me[ct];t&&(t.flags&=-2)}ct=-1,Me.length=0,Wo(),fr=null,(Me.length||gn.length)&&Ho()}}let Ue=null,Fo=null;function dr(e){const t=Ue;return Ue=e,Fo=e&&e.type.__scopeId||null,t}function J(e,t=Ue,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&gr(-1);const i=dr(t);let o;try{o=e(...s)}finally{dr(i),r._d&&gr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ns(e,t){if(Ue===null)return e;const n=Mr(Ue),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,l,a=be]=t[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Ct(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function jt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(St(),tt(a,n,8,[e.el,l,e,t]),At())}}function sr(e,t){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=wl();if(r||mn){let s=mn?mn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Z(t)?t.call(r&&r.proxy):t}}const rc=Symbol.for("v-scx"),sc=()=>Xe(rc);function Xt(e,t,n){return jo(e,t,n)}function jo(e,t,n=be){const{immediate:r,deep:s,flush:i,once:o}=n,l=Se({},n),a=t&&r||!t&&i!=="post";let u;if(Vn){if(i==="sync"){const m=sc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Pe;l.call=(m,w,T)=>tt(m,c,w,T);let d=!1;i==="post"?l.scheduler=m=>{He(m,c&&c.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,w)=>{w?m():Ls(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=Xa(e,t,l);return Vn&&(u?u.push(h):a&&h()),h}function ic(e,t,n){const r=this.proxy,s=we(e)?e.includes(".")?zo(r,e):()=>r[e]:e.bind(r,r);let i;Z(t)?i=t:(i=t.handler,n=t);const o=Jn(this),l=jo(s,i.bind(r),n);return o(),l}function zo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const oc=Symbol("_vte"),Uo=e=>e.__isTeleport,ut=Symbol("_leaveCb"),xn=Symbol("_enterCb");function lc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nn(()=>{e.isMounted=!0}),Ir(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],Vo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},qo=e=>{const t=e.subTree;return t.component?qo(t.component):t},ac={name:"BaseTransition",props:Vo,setup(e,{slots:t}){const n=wl(),r=lc();return()=>{const s=t.default&&Qo(t.default(),!0);if(!s||!s.length)return;const i=Go(s),o=ie(e),{mode:l}=o;if(r.isLeaving)return Ur(i);const a=li(i);if(!a)return Ur(i);let u=ls(a,o,r,n,d=>u=d);a.type!==Le&&zn(a,u);let c=n.subTree&&li(n.subTree);if(c&&c.type!==Le&&!Kt(c,a)&&qo(n).type!==Le){let d=ls(c,o,r,n);if(zn(c,d),l==="out-in"&&a.type!==Le)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},Ur(i);l==="in-out"&&a.type!==Le?d.delayLeave=(h,m,w)=>{const T=Ko(r,c);T[String(c.key)]=c,h[ut]=()=>{m(),h[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Go(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Le){t=n;break}}return t}const cc=ac;function Ko(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ls(e,t,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:m,onAfterLeave:w,onLeaveCancelled:T,onBeforeAppear:P,onAppear:v,onAfterAppear:S,onAppearCancelled:C}=t,A=String(e.key),O=Ko(n,e),N=(j,Y)=>{j&&tt(j,r,9,Y)},G=(j,Y)=>{const le=Y[1];N(j,Y),K(j)?j.every(H=>H.length<=1)&&le():j.length<=1&&le()},ne={mode:o,persisted:l,beforeEnter(j){let Y=a;if(!n.isMounted)if(i)Y=P||a;else return;j[ut]&&j[ut](!0);const le=O[A];le&&Kt(e,le)&&le.el[ut]&&le.el[ut](),N(Y,[j])},enter(j){if(O[A]===e)return;let Y=u,le=c,H=d;if(!n.isMounted)if(i)Y=v||u,le=S||c,H=C||d;else return;let re=!1;j[xn]=je=>{re||(re=!0,je?N(H,[j]):N(le,[j]),ne.delayedLeave&&ne.delayedLeave(),j[xn]=void 0)};const Te=j[xn].bind(null,!1);Y?G(Y,[j,Te]):Te()},leave(j,Y){const le=String(e.key);if(j[xn]&&j[xn](!0),n.isUnmounting)return Y();N(h,[j]);let H=!1;j[ut]=Te=>{H||(H=!0,Y(),Te?N(T,[j]):N(w,[j]),j[ut]=void 0,O[le]===e&&delete O[le])};const re=j[ut].bind(null,!1);O[le]=e,m?G(m,[j,re]):re()},clone(j){const Y=ls(j,t,n,r,s);return s&&s(Y),Y}};return ne}function Ur(e){if(Er(e))return e=Ht(e),e.children=null,e}function li(e){if(!Er(e))return Uo(e.type)&&e.children?Go(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Z(n.default))return n.default()}}function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qo(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===oe?(o.patchFlag&128&&s++,r=r.concat(Qo(o.children,t,l))):(t||o.type!==Le)&&r.push(l!=null?Ht(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Zo(e,t){return Z(e)?Se({name:e.name},t,{setup:e}):e}function Jo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ai(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const pr=new WeakMap;function Mn(e,t,n,r,s=!1){if(K(e)){e.forEach((T,P)=>Mn(T,t&&(K(t)?t[P]:t),n,r,s));return}if(Ln(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Mr(r.component):r.el,o=s?null:i,{i:l,r:a}=e,u=t&&t.r,c=l.refs===be?l.refs={}:l.refs,d=l.setupState,h=ie(d),m=d===be?uo:T=>ai(c,T)?!1:ue(h,T),w=(T,P)=>!(P&&ai(c,P));if(u!=null&&u!==a){if(ci(t),we(u))c[u]=null,m(u)&&(d[u]=null);else if(Ie(u)){const T=t;w(u,T.k)&&(u.value=null),T.k&&(c[T.k]=null)}}if(Z(a))Zn(a,l,12,[o,c]);else{const T=we(a),P=Ie(a);if(T||P){const v=()=>{if(e.f){const S=T?m(a)?d[a]:c[a]:w()||!e.k?a.value:c[e.k];if(s)K(S)&&xs(S,i);else if(K(S))S.includes(i)||S.push(i);else if(T)c[a]=[i],m(a)&&(d[a]=c[a]);else{const C=[i];w(a,e.k)&&(a.value=C),e.k&&(c[e.k]=C)}}else T?(c[a]=o,m(a)&&(d[a]=o)):P&&(w(a,e.k)&&(a.value=o),e.k&&(c[e.k]=o))};if(o){const S=()=>{v(),pr.delete(e)};S.id=-1,pr.set(e,S),He(S,n)}else ci(e),v()}}}function ci(e){const t=pr.get(e);t&&(t.flags|=8,pr.delete(e))}Tr().requestIdleCallback;Tr().cancelIdleCallback;const Ln=e=>!!e.type.__asyncLoader,Er=e=>e.type.__isKeepAlive;function uc(e,t){Yo(e,"a",t)}function fc(e,t){Yo(e,"da",t)}function Yo(e,t,n=Pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Pr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Er(s.parent.vnode)&&dc(r,t,n,s),s=s.parent}}function dc(e,t,n,r){const s=Pr(t,e,r,!0);Xo(()=>{xs(r[t],s)},n)}function Pr(e,t,n=Pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{St();const l=Jn(n),a=tt(t,n,e,o);return l(),At(),a});return r?s.unshift(i):s.push(i),i}}const Pt=e=>(t,n=Pe)=>{(!Vn||e==="sp")&&Pr(e,(...r)=>t(...r),n)},pc=Pt("bm"),nn=Pt("m"),hc=Pt("bu"),gc=Pt("u"),Ir=Pt("bum"),Xo=Pt("um"),mc=Pt("sp"),bc=Pt("rtg"),vc=Pt("rtc");function _c(e,t=Pe){Pr("ec",e,t)}const el="components";function ht(e,t){return nl(el,e,!0,t)||e}const tl=Symbol.for("v-ndc");function yc(e){return we(e)?nl(el,e,!1)||e:e||tl}function nl(e,t,n=!0,r=!1){const s=Ue||Pe;if(s){const i=s.type;{const l=su(i,!1);if(l&&(l===t||l===Ze(t)||l===Cr(Ze(t))))return i}const o=ui(s[e]||i[e],t)||ui(s.appContext[e],t);return!o&&r?i:o}}function ui(e,t){return e&&(e[t]||e[Ze(t)]||e[Cr(Ze(t))])}function Ce(e,t,n,r){let s;const i=n,o=K(e);if(o||we(e)){const l=o&&Yt(e);let a=!1,u=!1;l&&(a=!Qe(e),u=Et(e),e=Rr(e)),s=new Array(e.length);for(let c=0,d=e.length;c<d;c++)s[c]=t(a?u?bn(et(e[c])):et(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];s[a]=t(e[c],c,a,i)}}else s=[];return s}const as=e=>e?xl(e)?Mr(e):as(e.parent):null,Nn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>as(e.parent),$root:e=>as(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>sl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ls(e.update)}),$nextTick:e=>e.n||(e.n=Qt.bind(e.proxy)),$watch:e=>ic.bind(e)}),Vr=(e,t)=>e!==be&&!e.__isScriptSetup&&ue(e,t),kc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Vr(r,t))return o[t]=1,r[t];if(s!==be&&ue(s,t))return o[t]=2,s[t];if(ue(i,t))return o[t]=3,i[t];if(n!==be&&ue(n,t))return o[t]=4,n[t];cs&&(o[t]=0)}}const u=Nn[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==be&&ue(n,t))return o[t]=4,n[t];if(d=a.config.globalProperties,ue(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Vr(s,t)?(s[t]=n,!0):r!==be&&ue(r,t)?(r[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let a;return!!(n[l]||e!==be&&l[0]!=="$"&&ue(e,l)||Vr(t,l)||ue(i,l)||ue(r,l)||ue(Nn,l)||ue(s.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fi(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let cs=!0;function wc(e){const t=sl(e),n=e.proxy,r=e.ctx;cs=!1,t.beforeCreate&&di(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:h,beforeUpdate:m,updated:w,activated:T,deactivated:P,beforeDestroy:v,beforeUnmount:S,destroyed:C,unmounted:A,render:O,renderTracked:N,renderTriggered:G,errorCaptured:ne,serverPrefetch:j,expose:Y,inheritAttrs:le,components:H,directives:re,filters:Te}=t;if(u&&xc(u,r,null),o)for(const he in o){const ae=o[he];Z(ae)&&(r[he]=ae.bind(n))}if(s){const he=s.call(n,n);fe(he)&&(e.data=Sr(he))}if(cs=!0,i)for(const he in i){const ae=i[he],gt=Z(ae)?ae.bind(n,n):Z(ae.get)?ae.get.bind(n,n):dt,It=!Z(ae)&&Z(ae.set)?ae.set.bind(n):dt,rt=ye({get:gt,set:It});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>rt.value,set:De=>rt.value=De})}if(l)for(const he in l)rl(l[he],r,n,he);if(a){const he=Z(a)?a.call(n):a;Reflect.ownKeys(he).forEach(ae=>{sr(ae,he[ae])})}c&&di(c,e,"c");function xe(he,ae){K(ae)?ae.forEach(gt=>he(gt.bind(n))):ae&&he(ae.bind(n))}if(xe(pc,d),xe(nn,h),xe(hc,m),xe(gc,w),xe(uc,T),xe(fc,P),xe(_c,ne),xe(vc,N),xe(bc,G),xe(Ir,S),xe(Xo,A),xe(mc,j),K(Y))if(Y.length){const he=e.exposed||(e.exposed={});Y.forEach(ae=>{Object.defineProperty(he,ae,{get:()=>n[ae],set:gt=>n[ae]=gt,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===dt&&(e.render=O),le!=null&&(e.inheritAttrs=le),H&&(e.components=H),re&&(e.directives=re),j&&Jo(e)}function xc(e,t,n=dt){K(e)&&(e=us(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=Xe(s.from||r,s.default,!0):i=Xe(s.from||r):i=Xe(s),Ie(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function di(e,t,n){tt(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function rl(e,t,n,r){let s=r.includes(".")?zo(n,r):()=>n[r];if(we(e)){const i=t[e];Z(i)&&Xt(s,i)}else if(Z(e))Xt(s,e.bind(n));else if(fe(e))if(K(e))e.forEach(i=>rl(i,t,n,r));else{const i=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(i)&&Xt(s,i,e)}}function sl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(u=>hr(a,u,o,!0)),hr(a,t,o)),fe(t)&&i.set(t,a),a}function hr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&hr(e,i,n,!0),s&&s.forEach(o=>hr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Cc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Cc={data:pi,props:hi,emits:hi,methods:Pn,computed:Pn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Pn,directives:Pn,watch:Rc,provide:pi,inject:Tc};function pi(e,t){return t?e?function(){return Se(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function Tc(e,t){return Pn(us(e),us(t))}function us(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?Se(Object.create(null),e,t):t}function hi(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Se(Object.create(null),fi(e),fi(t??{})):t}function Rc(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const r in t)n[r]=$e(e[r],t[r]);return n}function il(){return{app:null,config:{isNativeTag:uo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sc=0;function Ac(e,t){return function(r,s=null){Z(r)||(r=Se({},r)),s!=null&&!fe(s)&&(s=null);const i=il(),o=new WeakSet,l=[];let a=!1;const u=i.app={_uid:Sc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ou,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(u,...d)):Z(c)&&(o.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,h){if(!a){const m=u._ceVNode||q(r,s);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),a=!0,u._container=c,c.__vue_app__=u,Mr(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(tt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=mn;mn=u;try{return c()}finally{mn=d}}};return u}}let mn=null;const Ec=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ze(t)}Modifiers`]||e[`${tn(t)}Modifiers`];function Pc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||be;let s=n;const i=t.startsWith("update:"),o=i&&Ec(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>we(c)?c.trim():c)),o.number&&(s=n.map(Ts)));let l,a=r[l=Wr(t)]||r[l=Wr(Ze(t))];!a&&i&&(a=r[l=Wr(tn(t))]),a&&tt(a,e,6,s);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(u,e,6,s)}}const Ic=new WeakMap;function ol(e,t,n=!1){const r=n?Ic:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},l=!1;if(!Z(e)){const a=u=>{const c=ol(u,t,!0);c&&(l=!0,Se(o,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(fe(e)&&r.set(e,null),null):(K(i)?i.forEach(a=>o[a]=null):Se(o,i),fe(e)&&r.set(e,o),o)}function $r(e,t){return!e||!wr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,tn(t))||ue(e,t))}function gi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:a,render:u,renderCache:c,props:d,data:h,setupState:m,ctx:w,inheritAttrs:T}=e,P=dr(e);let v,S;try{if(n.shapeFlag&4){const A=s||r,O=A;v=ft(u.call(O,A,c,d,m,h,w)),S=l}else{const A=t;v=ft(A.length>1?A(d,{attrs:l,slots:o,emit:a}):A(d,null)),S=t.props?l:$c(l)}}catch(A){Dn.length=0,Ar(A,e,1),v=q(Le)}let C=v;if(S&&T!==!1){const A=Object.keys(S),{shapeFlag:O}=C;A.length&&O&7&&(i&&A.some(ws)&&(S=Oc(S,i)),C=Ht(C,S,!1,!0))}return n.dirs&&(C=Ht(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&zn(C,n.transition),v=C,dr(P),v}const $c=e=>{let t;for(const n in e)(n==="class"||n==="style"||wr(n))&&((t||(t={}))[n]=e[n]);return t},Oc=(e,t)=>{const n={};for(const r in e)(!ws(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Mc(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?mi(r,o,u):!!o;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(ll(o,r,h)&&!$r(u,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?mi(r,o,u):!0:!!o;return!1}function mi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(ll(t,e,i)&&!$r(n,i))return!0}return!1}function ll(e,t,n){const r=e[n],s=t[n];return n==="style"&&fe(r)&&fe(s)?!Ss(r,s):r!==s}function Lc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const al={},cl=()=>Object.create(al),ul=e=>Object.getPrototypeOf(e)===al;function Nc(e,t,n,r=!1){const s={},i=cl();e.propsDefaults=Object.create(null),fl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Mo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Dc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,l=ie(s),[a]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if($r(e.emitsOptions,h))continue;const m=t[h];if(a)if(ue(i,h))m!==i[h]&&(i[h]=m,u=!0);else{const w=Ze(h);s[w]=fs(a,l,w,m,e,!1)}else m!==i[h]&&(i[h]=m,u=!0)}}}else{fl(e,t,s,i)&&(u=!0);let c;for(const d in l)(!t||!ue(t,d)&&((c=tn(d))===d||!ue(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(s[d]=fs(a,l,d,void 0,e,!0)):delete s[d]);if(i!==l)for(const d in i)(!t||!ue(t,d))&&(delete i[d],u=!0)}u&&xt(e.attrs,"set","")}function fl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(In(a))continue;const u=t[a];let c;s&&ue(s,c=Ze(a))?!i||!i.includes(c)?n[c]=u:(l||(l={}))[c]=u:$r(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=ie(n),u=l||be;for(let c=0;c<i.length;c++){const d=i[c];n[d]=fs(s,a,d,u[d],e,!ue(u,d))}}return o}function fs(e,t,n,r,s,i){const o=e[n];if(o!=null){const l=ue(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Z(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Jn(s);r=u[n]=a.call(null,t),c()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}const Bc=new WeakMap;function dl(e,t,n=!1){const r=n?Bc:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},l=[];let a=!1;if(!Z(e)){const c=d=>{a=!0;const[h,m]=dl(d,t,!0);Se(o,h),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return fe(e)&&r.set(e,pn),pn;if(K(i))for(let c=0;c<i.length;c++){const d=Ze(i[c]);bi(d)&&(o[d]=be)}else if(i)for(const c in i){const d=Ze(c);if(bi(d)){const h=i[c],m=o[d]=K(h)||Z(h)?{type:h}:Se({},h),w=m.type;let T=!1,P=!0;if(K(w))for(let v=0;v<w.length;++v){const S=w[v],C=Z(S)&&S.name;if(C==="Boolean"){T=!0;break}else C==="String"&&(P=!1)}else T=Z(w)&&w.name==="Boolean";m[0]=T,m[1]=P,(T||ue(m,"default"))&&l.push(d)}}const u=[o,l];return fe(e)&&r.set(e,u),u}function bi(e){return e[0]!=="$"&&!In(e)}const Ds=e=>e==="_"||e==="_ctx"||e==="$stable",Bs=e=>K(e)?e.map(ft):[ft(e)],Wc=(e,t,n)=>{if(t._n)return t;const r=J((...s)=>Bs(t(...s)),n);return r._c=!1,r},pl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ds(s))continue;const i=e[s];if(Z(i))t[s]=Wc(s,i,r);else if(i!=null){const o=Bs(i);t[s]=()=>o}}},hl=(e,t)=>{const n=Bs(t);e.slots.default=()=>n},gl=(e,t,n)=>{for(const r in t)(n||!Ds(r))&&(e[r]=t[r])},Hc=(e,t,n)=>{const r=e.slots=cl();if(e.vnode.shapeFlag&32){const s=t._;s?(gl(r,t,n),n&&mo(r,"_",s,!0)):pl(t,r)}else t&&hl(e,t)},Fc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=be;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:gl(s,t,n):(i=!t.$stable,pl(t,s)),o=t}else t&&(hl(e,t),o={default:1});if(i)for(const l in s)!Ds(l)&&o[l]==null&&delete s[l]},He=qc;function jc(e){return zc(e)}function zc(e,t){const n=Tr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:h,setScopeId:m=dt,insertStaticContent:w}=e,T=(p,g,b,_=null,x=null,y=null,M=void 0,$=null,E=!!g.dynamicChildren)=>{if(p===g)return;p&&!Kt(p,g)&&(_=k(p),De(p,x,y,!0),p=null),g.patchFlag===-2&&(E=!1,g.dynamicChildren=null);const{type:R,ref:V,shapeFlag:W}=g;switch(R){case Or:P(p,g,b,_);break;case Le:v(p,g,b,_);break;case ir:p==null&&S(g,b,_,M);break;case oe:H(p,g,b,_,x,y,M,$,E);break;default:W&1?O(p,g,b,_,x,y,M,$,E):W&6?re(p,g,b,_,x,y,M,$,E):(W&64||W&128)&&R.process(p,g,b,_,x,y,M,$,E,z)}V!=null&&x?Mn(V,p&&p.ref,y,g||p,!g):V==null&&p&&p.ref!=null&&Mn(p.ref,null,y,p,!0)},P=(p,g,b,_)=>{if(p==null)r(g.el=l(g.children),b,_);else{const x=g.el=p.el;g.children!==p.children&&u(x,g.children)}},v=(p,g,b,_)=>{p==null?r(g.el=a(g.children||""),b,_):g.el=p.el},S=(p,g,b,_)=>{[p.el,p.anchor]=w(p.children,g,b,_,p.el,p.anchor)},C=({el:p,anchor:g},b,_)=>{let x;for(;p&&p!==g;)x=h(p),r(p,b,_),p=x;r(g,b,_)},A=({el:p,anchor:g})=>{let b;for(;p&&p!==g;)b=h(p),s(p),p=b;s(g)},O=(p,g,b,_,x,y,M,$,E)=>{if(g.type==="svg"?M="svg":g.type==="math"&&(M="mathml"),p==null)N(g,b,_,x,y,M,$,E);else{const R=p.el&&p.el._isVueCE?p.el:null;try{R&&R._beginPatch(),j(p,g,x,y,M,$,E)}finally{R&&R._endPatch()}}},N=(p,g,b,_,x,y,M,$)=>{let E,R;const{props:V,shapeFlag:W,transition:U,dirs:Q}=p;if(E=p.el=o(p.type,y,V&&V.is,V),W&8?c(E,p.children):W&16&&ne(p.children,E,null,_,x,qr(p,y),M,$),Q&&jt(p,null,_,"created"),G(E,p,p.scopeId,M,_),V){for(const ve in V)ve!=="value"&&!In(ve)&&i(E,ve,null,V[ve],y,_);"value"in V&&i(E,"value",null,V.value,y),(R=V.onVnodeBeforeMount)&&lt(R,_,p)}Q&&jt(p,null,_,"beforeMount");const ee=Uc(x,U);ee&&U.beforeEnter(E),r(E,g,b),((R=V&&V.onVnodeMounted)||ee||Q)&&He(()=>{R&&lt(R,_,p),ee&&U.enter(E),Q&&jt(p,null,_,"mounted")},x)},G=(p,g,b,_,x)=>{if(b&&m(p,b),_)for(let y=0;y<_.length;y++)m(p,_[y]);if(x){let y=x.subTree;if(g===y||_l(y.type)&&(y.ssContent===g||y.ssFallback===g)){const M=x.vnode;G(p,M,M.scopeId,M.slotScopeIds,x.parent)}}},ne=(p,g,b,_,x,y,M,$,E=0)=>{for(let R=E;R<p.length;R++){const V=p[R]=$?wt(p[R]):ft(p[R]);T(null,V,g,b,_,x,y,M,$)}},j=(p,g,b,_,x,y,M)=>{const $=g.el=p.el;let{patchFlag:E,dynamicChildren:R,dirs:V}=g;E|=p.patchFlag&16;const W=p.props||be,U=g.props||be;let Q;if(b&&zt(b,!1),(Q=U.onVnodeBeforeUpdate)&&lt(Q,b,g,p),V&&jt(g,p,b,"beforeUpdate"),b&&zt(b,!0),(W.innerHTML&&U.innerHTML==null||W.textContent&&U.textContent==null)&&c($,""),R?Y(p.dynamicChildren,R,$,b,_,qr(g,x),y):M||ae(p,g,$,null,b,_,qr(g,x),y,!1),E>0){if(E&16)le($,W,U,b,x);else if(E&2&&W.class!==U.class&&i($,"class",null,U.class,x),E&4&&i($,"style",W.style,U.style,x),E&8){const ee=g.dynamicProps;for(let ve=0;ve<ee.length;ve++){const pe=ee[ve],Be=W[pe],We=U[pe];(We!==Be||pe==="value")&&i($,pe,Be,We,x,b)}}E&1&&p.children!==g.children&&c($,g.children)}else!M&&R==null&&le($,W,U,b,x);((Q=U.onVnodeUpdated)||V)&&He(()=>{Q&&lt(Q,b,g,p),V&&jt(g,p,b,"updated")},_)},Y=(p,g,b,_,x,y,M)=>{for(let $=0;$<g.length;$++){const E=p[$],R=g[$],V=E.el&&(E.type===oe||!Kt(E,R)||E.shapeFlag&198)?d(E.el):b;T(E,R,V,null,_,x,y,M,!0)}},le=(p,g,b,_,x)=>{if(g!==b){if(g!==be)for(const y in g)!In(y)&&!(y in b)&&i(p,y,g[y],null,x,_);for(const y in b){if(In(y))continue;const M=b[y],$=g[y];M!==$&&y!=="value"&&i(p,y,$,M,x,_)}"value"in b&&i(p,"value",g.value,b.value,x)}},H=(p,g,b,_,x,y,M,$,E)=>{const R=g.el=p?p.el:l(""),V=g.anchor=p?p.anchor:l("");let{patchFlag:W,dynamicChildren:U,slotScopeIds:Q}=g;Q&&($=$?$.concat(Q):Q),p==null?(r(R,b,_),r(V,b,_),ne(g.children||[],b,V,x,y,M,$,E)):W>0&&W&64&&U&&p.dynamicChildren&&p.dynamicChildren.length===U.length?(Y(p.dynamicChildren,U,b,x,y,M,$),(g.key!=null||x&&g===x.subTree)&&ml(p,g,!0)):ae(p,g,b,V,x,y,M,$,E)},re=(p,g,b,_,x,y,M,$,E)=>{g.slotScopeIds=$,p==null?g.shapeFlag&512?x.ctx.activate(g,b,_,M,E):Te(g,b,_,x,y,M,E):je(p,g,E)},Te=(p,g,b,_,x,y,M)=>{const $=p.component=Xc(p,_,x);if(Er(p)&&($.ctx.renderer=z),eu($,!1,M),$.asyncDep){if(x&&x.registerDep($,xe,M),!p.el){const E=$.subTree=q(Le);v(null,E,g,b),p.placeholder=E.el}}else xe($,p,g,b,x,y,M)},je=(p,g,b)=>{const _=g.component=p.component;if(Mc(p,g,b))if(_.asyncDep&&!_.asyncResolved){he(_,g,b);return}else _.next=g,_.update();else g.el=p.el,_.vnode=g},xe=(p,g,b,_,x,y,M)=>{const $=()=>{if(p.isMounted){let{next:W,bu:U,u:Q,parent:ee,vnode:ve}=p;{const it=bl(p);if(it){W&&(W.el=ve.el,he(p,W,M)),it.asyncDep.then(()=>{He(()=>{p.isUnmounted||R()},x)});return}}let pe=W,Be;zt(p,!1),W?(W.el=ve.el,he(p,W,M)):W=ve,U&&rr(U),(Be=W.props&&W.props.onVnodeBeforeUpdate)&&lt(Be,ee,W,ve),zt(p,!0);const We=gi(p),st=p.subTree;p.subTree=We,T(st,We,d(st.el),k(st),p,x,y),W.el=We.el,pe===null&&Lc(p,We.el),Q&&He(Q,x),(Be=W.props&&W.props.onVnodeUpdated)&&He(()=>lt(Be,ee,W,ve),x)}else{let W;const{el:U,props:Q}=g,{bm:ee,m:ve,parent:pe,root:Be,type:We}=p,st=Ln(g);zt(p,!1),ee&&rr(ee),!st&&(W=Q&&Q.onVnodeBeforeMount)&&lt(W,pe,g),zt(p,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(We);const it=p.subTree=gi(p);T(null,it,b,_,p,x,y),g.el=it.el}if(ve&&He(ve,x),!st&&(W=Q&&Q.onVnodeMounted)){const it=g;He(()=>lt(W,pe,it),x)}(g.shapeFlag&256||pe&&Ln(pe.vnode)&&pe.vnode.shapeFlag&256)&&p.a&&He(p.a,x),p.isMounted=!0,g=b=_=null}};p.scope.on();const E=p.effect=new yo($);p.scope.off();const R=p.update=E.run.bind(E),V=p.job=E.runIfDirty.bind(E);V.i=p,V.id=p.uid,E.scheduler=()=>Ls(V),zt(p,!0),R()},he=(p,g,b)=>{g.component=p;const _=p.vnode.props;p.vnode=g,p.next=null,Dc(p,g.props,_,b),Fc(p,g.children,b),St(),oi(p),At()},ae=(p,g,b,_,x,y,M,$,E=!1)=>{const R=p&&p.children,V=p?p.shapeFlag:0,W=g.children,{patchFlag:U,shapeFlag:Q}=g;if(U>0){if(U&128){It(R,W,b,_,x,y,M,$,E);return}else if(U&256){gt(R,W,b,_,x,y,M,$,E);return}}Q&8?(V&16&&Ge(R,x,y),W!==R&&c(b,W)):V&16?Q&16?It(R,W,b,_,x,y,M,$,E):Ge(R,x,y,!0):(V&8&&c(b,""),Q&16&&ne(W,b,_,x,y,M,$,E))},gt=(p,g,b,_,x,y,M,$,E)=>{p=p||pn,g=g||pn;const R=p.length,V=g.length,W=Math.min(R,V);let U;for(U=0;U<W;U++){const Q=g[U]=E?wt(g[U]):ft(g[U]);T(p[U],Q,b,null,x,y,M,$,E)}R>V?Ge(p,x,y,!0,!1,W):ne(g,b,_,x,y,M,$,E,W)},It=(p,g,b,_,x,y,M,$,E)=>{let R=0;const V=g.length;let W=p.length-1,U=V-1;for(;R<=W&&R<=U;){const Q=p[R],ee=g[R]=E?wt(g[R]):ft(g[R]);if(Kt(Q,ee))T(Q,ee,b,null,x,y,M,$,E);else break;R++}for(;R<=W&&R<=U;){const Q=p[W],ee=g[U]=E?wt(g[U]):ft(g[U]);if(Kt(Q,ee))T(Q,ee,b,null,x,y,M,$,E);else break;W--,U--}if(R>W){if(R<=U){const Q=U+1,ee=Q<V?g[Q].el:_;for(;R<=U;)T(null,g[R]=E?wt(g[R]):ft(g[R]),b,ee,x,y,M,$,E),R++}}else if(R>U)for(;R<=W;)De(p[R],x,y,!0),R++;else{const Q=R,ee=R,ve=new Map;for(R=ee;R<=U;R++){const ze=g[R]=E?wt(g[R]):ft(g[R]);ze.key!=null&&ve.set(ze.key,R)}let pe,Be=0;const We=U-ee+1;let st=!1,it=0;const kn=new Array(We);for(R=0;R<We;R++)kn[R]=0;for(R=Q;R<=W;R++){const ze=p[R];if(Be>=We){De(ze,x,y,!0);continue}let ot;if(ze.key!=null)ot=ve.get(ze.key);else for(pe=ee;pe<=U;pe++)if(kn[pe-ee]===0&&Kt(ze,g[pe])){ot=pe;break}ot===void 0?De(ze,x,y,!0):(kn[ot-ee]=R+1,ot>=it?it=ot:st=!0,T(ze,g[ot],b,null,x,y,M,$,E),Be++)}const Xs=st?Vc(kn):pn;for(pe=Xs.length-1,R=We-1;R>=0;R--){const ze=ee+R,ot=g[ze],ei=g[ze+1],ti=ze+1<V?ei.el||vl(ei):_;kn[R]===0?T(null,ot,b,ti,x,y,M,$,E):st&&(pe<0||R!==Xs[pe]?rt(ot,b,ti,2):pe--)}}},rt=(p,g,b,_,x=null)=>{const{el:y,type:M,transition:$,children:E,shapeFlag:R}=p;if(R&6){rt(p.component.subTree,g,b,_);return}if(R&128){p.suspense.move(g,b,_);return}if(R&64){M.move(p,g,b,z);return}if(M===oe){r(y,g,b);for(let W=0;W<E.length;W++)rt(E[W],g,b,_);r(p.anchor,g,b);return}if(M===ir){C(p,g,b);return}if(_!==2&&R&1&&$)if(_===0)$.beforeEnter(y),r(y,g,b),He(()=>$.enter(y),x);else{const{leave:W,delayLeave:U,afterLeave:Q}=$,ee=()=>{p.ctx.isUnmounted?s(y):r(y,g,b)},ve=()=>{y._isLeaving&&y[ut](!0),W(y,()=>{ee(),Q&&Q()})};U?U(y,ee,ve):ve()}else r(y,g,b)},De=(p,g,b,_=!1,x=!1)=>{const{type:y,props:M,ref:$,children:E,dynamicChildren:R,shapeFlag:V,patchFlag:W,dirs:U,cacheIndex:Q}=p;if(W===-2&&(x=!1),$!=null&&(St(),Mn($,null,b,p,!0),At()),Q!=null&&(g.renderCache[Q]=void 0),V&256){g.ctx.deactivate(p);return}const ee=V&1&&U,ve=!Ln(p);let pe;if(ve&&(pe=M&&M.onVnodeBeforeUnmount)&&lt(pe,g,p),V&6)Ft(p.component,b,_);else{if(V&128){p.suspense.unmount(b,_);return}ee&&jt(p,null,g,"beforeUnmount"),V&64?p.type.remove(p,g,b,z,_):R&&!R.hasOnce&&(y!==oe||W>0&&W&64)?Ge(R,g,b,!1,!0):(y===oe&&W&384||!x&&V&16)&&Ge(E,g,b),_&&sn(p)}(ve&&(pe=M&&M.onVnodeUnmounted)||ee)&&He(()=>{pe&&lt(pe,g,p),ee&&jt(p,null,g,"unmounted")},b)},sn=p=>{const{type:g,el:b,anchor:_,transition:x}=p;if(g===oe){on(b,_);return}if(g===ir){A(p);return}const y=()=>{s(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:M,delayLeave:$}=x,E=()=>M(b,y);$?$(p.el,y,E):E()}else y()},on=(p,g)=>{let b;for(;p!==g;)b=h(p),s(p),p=b;s(g)},Ft=(p,g,b)=>{const{bum:_,scope:x,job:y,subTree:M,um:$,m:E,a:R}=p;vi(E),vi(R),_&&rr(_),x.stop(),y&&(y.flags|=8,De(M,p,g,b)),$&&He($,g),He(()=>{p.isUnmounted=!0},g)},Ge=(p,g,b,_=!1,x=!1,y=0)=>{for(let M=y;M<p.length;M++)De(p[M],g,b,_,x)},k=p=>{if(p.shapeFlag&6)return k(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=h(p.anchor||p.el),b=g&&g[oc];return b?h(b):g};let F=!1;const D=(p,g,b)=>{let _;p==null?g._vnode&&(De(g._vnode,null,null,!0),_=g._vnode.component):T(g._vnode||null,p,g,null,null,null,b),g._vnode=p,F||(F=!0,oi(_),Wo(),F=!1)},z={p:T,um:De,m:rt,r:sn,mt:Te,mc:ne,pc:ae,pbc:Y,n:k,o:e};return{render:D,hydrate:void 0,createApp:Ac(D)}}function qr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ml(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=wt(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ml(o,l)),l.type===Or&&(l.patchFlag===-1&&(l=s[i]=wt(l)),l.el=o.el),l.type===Le&&!l.el&&(l.el=o.el)}}function Vc(e){const t=e.slice(),n=[0];let r,s,i,o,l;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function bl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bl(t)}function vi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function vl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?vl(t.subTree):null}const _l=e=>e.__isSuspense;function qc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):nc(e)}const oe=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),Dn=[];let Ve=null;function I(e=!1){Dn.push(Ve=e?null:[])}function Gc(){Dn.pop(),Ve=Dn[Dn.length-1]||null}let Un=1;function gr(e,t=!1){Un+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function yl(e){return e.dynamicChildren=Un>0?Ve||pn:null,Gc(),Un>0&&Ve&&Ve.push(e),e}function L(e,t,n,r,s,i){return yl(f(e,t,n,r,s,i,!0))}function fn(e,t,n,r,s){return yl(q(e,t,n,r,s,!0))}function mr(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const kl=({key:e})=>e??null,or=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ie(e)||Z(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,r=0,s=null,i=e===oe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kl(t),ref:t&&or(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ue};return l?(Ws(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=we(n)?8:16),Un>0&&!o&&Ve&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ve.push(a),a}const q=Kc;function Kc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===tl)&&(e=Le),mr(e)){const l=Ht(e,t,!0);return n&&Ws(l,n),Un>0&&!i&&Ve&&(l.shapeFlag&6?Ve[Ve.indexOf(e)]=l:Ve.push(l)),l.patchFlag=-2,l}if(iu(e)&&(e=e.__vccOpts),t){t=Qc(t);let{class:l,style:a}=t;l&&!we(l)&&(t.class=qe(l)),fe(a)&&(Ms(a)&&!K(a)&&(a=Se({},a)),t.style=Rs(a))}const o=we(e)?1:_l(e)?128:Uo(e)?64:fe(e)?4:Z(e)?2:0;return f(e,t,n,r,s,o,i,!0)}function Qc(e){return e?Ms(e)||ul(e)?Se({},e):e:null}function Ht(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:a}=e,u=t?Zc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&kl(u),ref:t&&t.ref?n&&i?K(i)?i.concat(or(t)):[i,or(t)]:or(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&zn(c,a.clone(c)),c}function se(e=" ",t=0){return q(Or,null,e,t)}function vn(e,t){const n=q(ir,null,e);return n.staticCount=t,n}function Je(e="",t=!1){return t?(I(),fn(Le,null,e)):q(Le,null,e)}function ft(e){return e==null||typeof e=="boolean"?q(Le):K(e)?q(oe,null,e.slice()):mr(e)?wt(e):q(Or,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Ws(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ws(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ul(t)?t._ctx=Ue:s===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),r&64?(n=16,t=[se(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=qe([t.class,r.class]));else if(s==="style")t.style=Rs([t.style,r.style]);else if(wr(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function lt(e,t,n,r=null){tt(e,t,7,[n,r])}const Jc=il();let Yc=0;function Xc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Jc,i={uid:Yc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dl(r,s),emitsOptions:ol(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const wl=()=>Pe||Ue;let br,ds;{const e=Tr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};br=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),ds=t("__VUE_SSR_SETTERS__",n=>Vn=n)}const Jn=e=>{const t=Pe;return br(e),e.scope.on(),()=>{e.scope.off(),br(t)}},_i=()=>{Pe&&Pe.scope.off(),br(null)};function xl(e){return e.vnode.shapeFlag&4}let Vn=!1;function eu(e,t=!1,n=!1){t&&ds(t);const{props:r,children:s}=e.vnode,i=xl(e);Nc(e,r,i,t),Hc(e,s,n||t);const o=i?tu(e,t):void 0;return t&&ds(!1),o}function tu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kc);const{setup:r}=n;if(r){St();const s=e.setupContext=r.length>1?ru(e):null,i=Jn(e),o=Zn(r,e,0,[e.props,s]),l=po(o);if(At(),i(),(l||e.sp)&&!Ln(e)&&Jo(e),l){if(o.then(_i,_i),t)return o.then(a=>{yi(e,a)}).catch(a=>{Ar(a,e,0)});e.asyncDep=o}else yi(e,o)}else Cl(e)}function yi(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=No(t)),Cl(e)}function Cl(e,t,n){const r=e.type;e.render||(e.render=r.render||dt);{const s=Jn(e);St();try{wc(e)}finally{At(),s()}}}const nu={get(e,t){return Ee(e,"get",""),e[t]}};function ru(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,nu),slots:e.slots,emit:e.emit,expose:t}}function Mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(No(qa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nn)return Nn[n](e)},has(t,n){return n in t||n in Nn}})):e.proxy}function su(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function iu(e){return Z(e)&&"__vccOpts"in e}const ye=(e,t)=>Ja(e,t,Vn);function Hs(e,t,n){try{gr(-1);const r=arguments.length;return r===2?fe(t)&&!K(t)?mr(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),q(e,t,n))}finally{gr(1)}}const ou="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ps;const ki=typeof window<"u"&&window.trustedTypes;if(ki)try{ps=ki.createPolicy("vue",{createHTML:e=>e})}catch{}const Tl=ps?e=>ps.createHTML(e):e=>e,lu="http://www.w3.org/2000/svg",au="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,wi=yt&&yt.createElement("template"),cu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yt.createElementNS(lu,e):t==="mathml"?yt.createElementNS(au,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wi.innerHTML=Tl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=wi.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",Cn="animation",qn=Symbol("_vtc"),Rl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},uu=Se({},Vo,Rl),fu=e=>(e.displayName="Transition",e.props=uu,e),du=fu((e,{slots:t})=>Hs(cc,pu(e),t)),Ut=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},xi=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function pu(e){const t={};for(const H in e)H in Rl||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=hu(s),T=w&&w[0],P=w&&w[1],{onBeforeEnter:v,onEnter:S,onEnterCancelled:C,onLeave:A,onLeaveCancelled:O,onBeforeAppear:N=v,onAppear:G=S,onAppearCancelled:ne=C}=t,j=(H,re,Te,je)=>{H._enterCancelled=je,Vt(H,re?c:l),Vt(H,re?u:o),Te&&Te()},Y=(H,re)=>{H._isLeaving=!1,Vt(H,d),Vt(H,m),Vt(H,h),re&&re()},le=H=>(re,Te)=>{const je=H?G:S,xe=()=>j(re,H,Te);Ut(je,[re,xe]),Ci(()=>{Vt(re,H?a:i),bt(re,H?c:l),xi(je)||Ti(re,r,T,xe)})};return Se(t,{onBeforeEnter(H){Ut(v,[H]),bt(H,i),bt(H,o)},onBeforeAppear(H){Ut(N,[H]),bt(H,a),bt(H,u)},onEnter:le(!1),onAppear:le(!0),onLeave(H,re){H._isLeaving=!0;const Te=()=>Y(H,re);bt(H,d),H._enterCancelled?(bt(H,h),Ai(H)):(Ai(H),bt(H,h)),Ci(()=>{H._isLeaving&&(Vt(H,d),bt(H,m),xi(A)||Ti(H,r,P,Te))}),Ut(A,[H,Te])},onEnterCancelled(H){j(H,!1,void 0,!0),Ut(C,[H])},onAppearCancelled(H){j(H,!0,void 0,!0),Ut(ne,[H])},onLeaveCancelled(H){Y(H),Ut(O,[H])}})}function hu(e){if(e==null)return null;if(fe(e))return[Gr(e.enter),Gr(e.leave)];{const t=Gr(e);return[t,t]}}function Gr(e){return va(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qn]||(e[qn]=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[qn];n&&(n.delete(t),n.size||(e[qn]=void 0))}function Ci(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gu=0;function Ti(e,t,n,r){const s=e._endId=++gu,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=mu(e,t);if(!o)return r();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,h),i()},h=m=>{m.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,h)}function mu(e,t){const n=window.getComputedStyle(e),r=w=>(n[w]||"").split(", "),s=r(`${$t}Delay`),i=r(`${$t}Duration`),o=Ri(s,i),l=r(`${Cn}Delay`),a=r(`${Cn}Duration`),u=Ri(l,a);let c=null,d=0,h=0;t===$t?o>0&&(c=$t,d=o,h=i.length):t===Cn?u>0&&(c=Cn,d=u,h=a.length):(d=Math.max(o,u),c=d>0?o>u?$t:Cn:null,h=c?c===$t?i.length:a.length:0);const m=c===$t&&/\b(?:transform|all)(?:,|$)/.test(r(`${$t}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:m}}function Ri(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Si(n)+Si(e[r])))}function Si(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ai(e){return(e?e.ownerDocument:document).body.offsetHeight}function bu(e,t,n){const r=e[qn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ei=Symbol("_vod"),vu=Symbol("_vsh"),_u=Symbol(""),yu=/(?:^|;)\s*display\s*:/;function ku(e,t,n){const r=e.style,s=we(n);let i=!1;if(n&&!s){if(t)if(we(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&lr(r,l,"")}else for(const o in t)n[o]==null&&lr(r,o,"");for(const o in n)o==="display"&&(i=!0),lr(r,o,n[o])}else if(s){if(t!==n){const o=r[_u];o&&(n+=";"+o),r.cssText=n,i=yu.test(n)}}else t&&e.removeAttribute("style");Ei in e&&(e[Ei]=i?r.display:"",e[vu]&&(r.display="none"))}const Pi=/\s*!important$/;function lr(e,t,n){if(K(n))n.forEach(r=>lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wu(e,t);Pi.test(n)?e.setProperty(tn(r),n.replace(Pi,""),"important"):e[r]=n}}const Ii=["Webkit","Moz","ms"],Kr={};function wu(e,t){const n=Kr[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return Kr[t]=r;r=Cr(r);for(let s=0;s<Ii.length;s++){const i=Ii[s]+r;if(i in e)return Kr[t]=i}return t}const $i="http://www.w3.org/1999/xlink";function Oi(e,t,n,r,s,i=Ca(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS($i,t.slice(6,t.length)):e.setAttributeNS($i,t,n):n==null||i&&!bo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":pt(n)?String(n):n)}function Mi(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Tl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=bo(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function cn(e,t,n,r){e.addEventListener(t,n,r)}function xu(e,t,n,r){e.removeEventListener(t,n,r)}const Li=Symbol("_vei");function Cu(e,t,n,r,s=null){const i=e[Li]||(e[Li]={}),o=i[t];if(r&&o)o.value=r;else{const[l,a]=Tu(t);if(r){const u=i[t]=Au(r,s);cn(e,l,u,a)}else o&&(xu(e,l,o,a),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Tu(e){let t;if(Ni.test(e)){t={};let r;for(;r=e.match(Ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Qr=0;const Ru=Promise.resolve(),Su=()=>Qr||(Ru.then(()=>Qr=0),Qr=Date.now());function Au(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tt(Eu(r,n.value),t,5,[r])};return n.value=e,n.attached=Su(),n}function Eu(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pu=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?bu(e,r,o):t==="style"?ku(e,n,r):wr(t)?ws(t)||Cu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Iu(e,t,r,o))?(Mi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oi(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!we(r))?Mi(e,Ze(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Oi(e,t,r,o))};function Iu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Di(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Di(t)&&we(n)?!1:t in e}const Bi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>rr(t,n):t};function $u(e){e.target.composing=!0}function Wi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zr=Symbol("_assign");function Hi(e,t,n){return t&&(e=e.trim()),n&&(e=Ts(e)),e}const Fs={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Zr]=Bi(s);const i=r||s.props&&s.props.type==="number";cn(e,t?"change":"input",o=>{o.target.composing||e[Zr](Hi(e.value,n,i))}),(n||i)&&cn(e,"change",()=>{e.value=Hi(e.value,n,i)}),t||(cn(e,"compositionstart",$u),cn(e,"compositionend",Wi),cn(e,"change",Wi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Zr]=Bi(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Ts(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===a)||(e.value=a))}},Ou=Se({patchProp:Pu},cu);let Fi;function Mu(){return Fi||(Fi=jc(Ou))}const Lu=(...e)=>{const t=Mu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Du(r);if(!s)return;const i=t._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Nu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Du(e){return we(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const un=typeof document<"u";function Sl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Bu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Sl(e.default)}const ce=Object.assign;function Jr(e,t){const n={};for(const r in t){const s=t[r];n[r]=nt(s)?s.map(e):e(s)}return n}const Bn=()=>{},nt=Array.isArray;function ji(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Al=/#/g,Wu=/&/g,Hu=/\//g,Fu=/=/g,ju=/\?/g,El=/\+/g,zu=/%5B/g,Uu=/%5D/g,Pl=/%5E/g,Vu=/%60/g,Il=/%7B/g,qu=/%7C/g,$l=/%7D/g,Gu=/%20/g;function js(e){return e==null?"":encodeURI(""+e).replace(qu,"|").replace(zu,"[").replace(Uu,"]")}function Ku(e){return js(e).replace(Il,"{").replace($l,"}").replace(Pl,"^")}function hs(e){return js(e).replace(El,"%2B").replace(Gu,"+").replace(Al,"%23").replace(Wu,"%26").replace(Vu,"`").replace(Il,"{").replace($l,"}").replace(Pl,"^")}function Qu(e){return hs(e).replace(Fu,"%3D")}function Zu(e){return js(e).replace(Al,"%23").replace(ju,"%3F")}function Ju(e){return Zu(e).replace(Hu,"%2F")}function Gn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Yu=/\/$/,Xu=e=>e.replace(Yu,"");function Yr(e,t,n="/"){let r,s={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(r=t.slice(0,a),i=t.slice(a,l>0?l:t.length),s=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=rf(r??t,n),{fullPath:r+i+o,path:r,query:s,hash:Gn(o)}}function ef(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function zi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tf(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_n(t.matched[r],n.matched[s])&&Ol(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _n(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ol(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!nf(e[n],t[n]))return!1;return!0}function nf(e,t){return nt(e)?Ui(e,t):nt(t)?Ui(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ui(e,t){return nt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function rf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gs=function(e){return e.pop="pop",e.push="push",e}({}),Xr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function sf(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xu(e)}const of=/^[^#]+#/;function lf(e,t){return e.replace(of,"#")+t}function af(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Lr=()=>({left:window.scrollX,top:window.scrollY});function cf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=af(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Vi(e,t){return(history.state?history.state.position-t:-1)+e}const ms=new Map;function uf(e,t){ms.set(e,t)}function ff(e){const t=ms.get(e);return ms.delete(e),t}function df(e){return typeof e=="string"||e&&typeof e=="object"}function Ml(e){return typeof e=="string"||typeof e=="symbol"}let ke=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Ll=Symbol("");ke.MATCHER_NOT_FOUND+"",ke.NAVIGATION_GUARD_REDIRECT+"",ke.NAVIGATION_ABORTED+"",ke.NAVIGATION_CANCELLED+"",ke.NAVIGATION_DUPLICATED+"";function yn(e,t){return ce(new Error,{type:e,[Ll]:!0},t)}function vt(e,t){return e instanceof Error&&Ll in e&&(t==null||!!(e.type&t))}const pf=["params","query","hash"];function hf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of pf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function gf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(El," "),i=s.indexOf("="),o=Gn(i<0?s:s.slice(0,i)),l=i<0?null:Gn(s.slice(i+1));if(o in t){let a=t[o];nt(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function qi(e){let t="";for(let n in e){const r=e[n];if(n=Qu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(r)?r.map(s=>s&&hs(s)):[r&&hs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function mf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=nt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const bf=Symbol(""),Gi=Symbol(""),Nr=Symbol(""),zs=Symbol(""),bs=Symbol("");function Tn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const u=h=>{h===!1?a(yn(ke.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?a(h):df(h)?a(yn(ke.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),l())},c=i(()=>e.call(r&&r.instances[s],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(h=>a(h))})}function es(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Sl(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Nt(u,n,r,o,l,s))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Bu(c)?c.default:c;o.mods[l]=c,o.components[l]=d;const h=(d.__vccOpts||d)[t];return h&&Nt(h,n,r,o,l,s)()}))}}return i}function vf(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>_n(u,l))?r.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>_n(u,a))||s.push(a))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _f=()=>location.protocol+"//"+location.host;function Nl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),zi(l,"")}return zi(n,e)+r+s}function yf(e,t,n,r){let s=[],i=[],o=null;const l=({state:h})=>{const m=Nl(e,location),w=n.value,T=t.value;let P=0;if(h){if(n.value=m,t.value=h,o&&o===w){o=null;return}P=T?h.position-T.position:0}else r(m);s.forEach(v=>{v(n.value,w,{delta:P,type:gs.pop,direction:P?P>0?Xr.forward:Xr.back:Xr.unknown})})};function a(){o=n.value}function u(h){s.push(h);const m=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ce({},h.state,{scroll:Lr()}),"")}}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:d}}function Ki(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Lr():null}}function kf(e){const{history:t,location:n}=window,r={value:Nl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:_f()+e+a;try{t[c?"replaceState":"pushState"](u,"",h),s.value=u}catch(m){console.error(m),n[c?"replace":"assign"](h)}}function o(a,u){i(a,ce({},t.state,Ki(s.value.back,a,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=a}function l(a,u){const c=ce({},s.value,t.state,{forward:a,scroll:Lr()});i(c.current,c,!0),i(a,ce({},Ki(r.value,a,null),{position:c.position+1},u),!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function wf(e){e=sf(e);const t=kf(e),n=yf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:e,go:r,createHref:lf.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Re=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Re||{});const xf={type:Zt.Static,value:""},Cf=/[a-zA-Z0-9_]/;function Tf(e){if(!e)return[[]];if(e==="/")return[[xf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Re.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,u="",c="";function d(){u&&(n===Re.Static?i.push({type:Zt.Static,value:u}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==Re.ParamRegExp){r=n,n=Re.EscapeNext;continue}switch(n){case Re.Static:a==="/"?(u&&d(),o()):a===":"?(d(),n=Re.Param):h();break;case Re.EscapeNext:h(),n=r;break;case Re.Param:a==="("?n=Re.ParamRegExp:Cf.test(a)?h():(d(),n=Re.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case Re.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=Re.ParamRegExpEnd:c+=a;break;case Re.ParamRegExpEnd:d(),n=Re.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Qi="[^/]+?",Rf={sensitive:!1,strict:!1,start:!0,end:!0};var Oe=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Oe||{});const Sf=/[.+*?^${}()[\]/\\]/g;function Af(e,t){const n=ce({},Rf,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Oe.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const h=u[d];let m=Oe.Segment+(n.sensitive?Oe.BonusCaseSensitive:0);if(h.type===Zt.Static)d||(s+="/"),s+=h.value.replace(Sf,"\\$&"),m+=Oe.Static;else if(h.type===Zt.Param){const{value:w,repeatable:T,optional:P,regexp:v}=h;i.push({name:w,repeatable:T,optional:P});const S=v||Qi;if(S!==Qi){m+=Oe.BonusCustomRegExp;try{`${S}`}catch(A){throw new Error(`Invalid custom RegExp for param "${w}" (${S}): `+A.message)}}let C=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(C=P&&u.length<2?`(?:/${C})`:"/"+C),P&&(C+="?"),s+=C,m+=Oe.Dynamic,P&&(m+=Oe.BonusOptional),T&&(m+=Oe.BonusRepeatable),S===".*"&&(m+=Oe.BonusWildcard)}c.push(m)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Oe.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const c=u.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",w=i[h-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function a(u){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of h)if(m.type===Zt.Static)c+=m.value;else if(m.type===Zt.Param){const{value:w,repeatable:T,optional:P}=m,v=w in u?u[w]:"";if(nt(v)&&!T)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const S=nt(v)?v.join("/"):v;if(!S)if(P)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);c+=S}}return c||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function Ef(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Oe.Static+Oe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Oe.Static+Oe.Segment?1:-1:0}function Dl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ef(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zi(r))return 1;if(Zi(s))return-1}return s.length-r.length}function Zi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Pf={strict:!1,end:!0,sensitive:!1};function If(e,t,n){const r=Af(Tf(e.path),n),s=ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $f(e,t){const n=[],r=new Map;t=ji(Pf,t);function s(d){return r.get(d)}function i(d,h,m){const w=!m,T=Yi(d);T.aliasOf=m&&m.record;const P=ji(t,d),v=[T];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of A)v.push(Yi(ce({},T,{components:m?m.record.components:T.components,path:O,aliasOf:m?m.record:T})))}let S,C;for(const A of v){const{path:O}=A;if(h&&O[0]!=="/"){const N=h.record.path,G=N[N.length-1]==="/"?"":"/";A.path=h.record.path+(O&&G+O)}if(S=If(A,h,P),m?m.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),w&&d.name&&!Xi(S)&&o(d.name)),Bl(S)&&a(S),T.children){const N=T.children;for(let G=0;G<N.length;G++)i(N[G],S,m&&m.children[G])}m=m||S}return C?()=>{o(C)}:Bn}function o(d){if(Ml(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){const h=Lf(d,n);n.splice(h,0,d),d.record.name&&!Xi(d)&&r.set(d.record.name,d)}function u(d,h){let m,w={},T,P;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw yn(ke.MATCHER_NOT_FOUND,{location:d});P=m.record.name,w=ce(Ji(h.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Ji(d.params,m.keys.map(C=>C.name))),T=m.stringify(w)}else if(d.path!=null)T=d.path,m=n.find(C=>C.re.test(T)),m&&(w=m.parse(T),P=m.record.name);else{if(m=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!m)throw yn(ke.MATCHER_NOT_FOUND,{location:d,currentLocation:h});P=m.record.name,w=ce({},h.params,d.params),T=m.stringify(w)}const v=[];let S=m;for(;S;)v.unshift(S.record),S=S.parent;return{name:P,path:T,params:w,matched:v,meta:Mf(v)}}e.forEach(d=>i(d));function c(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:s}}function Ji(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Of(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Of(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Xi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mf(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Lf(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Dl(e,t[i])<0?r=i:n=i+1}const s=Nf(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Nf(e){let t=e;for(;t=t.parent;)if(Bl(t)&&Dl(e,t)===0)return t}function Bl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function eo(e){const t=Xe(Nr),n=Xe(zs),r=ye(()=>{const a=ge(e.to);return t.resolve(a)}),s=ye(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(_n.bind(null,c));if(h>-1)return h;const m=to(a[u-2]);return u>1&&to(c)===m&&d[d.length-1].path!==m?d.findIndex(_n.bind(null,a[u-2])):h}),i=ye(()=>s.value>-1&&Ff(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&Ol(n.params,r.value.params));function l(a={}){if(Hf(a)){const u=t[ge(e.replace)?"replace":"push"](ge(e.to)).catch(Bn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Df(e){return e.length===1?e[0]:e}const Bf=Zo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:eo,setup(e,{slots:t}){const n=Sr(eo(e)),{options:r}=Xe(Nr),s=ye(()=>({[no(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[no(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Df(t.default(n));return e.custom?i:Hs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wf=Bf;function Hf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ff(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function to(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const no=(e,t,n)=>e??t??n,jf=Zo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(bs),s=ye(()=>e.route||r.value),i=Xe(Gi,0),o=ye(()=>{let u=ge(i);const{matched:c}=s.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=ye(()=>s.value.matched[o.value]);sr(Gi,ye(()=>o.value+1)),sr(bf,l),sr(bs,s);const a=Ae();return Xt(()=>[a.value,l.value,e.name],([u,c,d],[h,m,w])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!_n(c,m)||!h)&&(c.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,d=l.value,h=d&&d.components[c];if(!h)return ro(n.default,{Component:h,route:u});const m=d.props[c],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Hs(h,ce({},w,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return ro(n.default,{Component:P,route:u})||P}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zf=jf;function Uf(e){const t=$f(e.routes,e),n=e.parseQuery||gf,r=e.stringifyQuery||qi,s=e.history,i=Tn(),o=Tn(),l=Tn(),a=Ga(Ot);let u=Ot;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Jr.bind(null,k=>""+k),d=Jr.bind(null,Ju),h=Jr.bind(null,Gn);function m(k,F){let D,z;return Ml(k)?(D=t.getRecordMatcher(k),z=F):z=k,t.addRoute(z,D)}function w(k){const F=t.getRecordMatcher(k);F&&t.removeRoute(F)}function T(){return t.getRoutes().map(k=>k.record)}function P(k){return!!t.getRecordMatcher(k)}function v(k,F){if(F=ce({},F||a.value),typeof k=="string"){const b=Yr(n,k,F.path),_=t.resolve({path:b.path},F),x=s.createHref(b.fullPath);return ce(b,_,{params:h(_.params),hash:Gn(b.hash),redirectedFrom:void 0,href:x})}let D;if(k.path!=null)D=ce({},k,{path:Yr(n,k.path,F.path).path});else{const b=ce({},k.params);for(const _ in b)b[_]==null&&delete b[_];D=ce({},k,{params:d(b)}),F.params=d(F.params)}const z=t.resolve(D,F),X=k.hash||"";z.params=c(h(z.params));const p=ef(r,ce({},k,{hash:Ku(X),path:z.path})),g=s.createHref(p);return ce({fullPath:p,hash:X,query:r===qi?mf(k.query):k.query||{}},z,{redirectedFrom:void 0,href:g})}function S(k){return typeof k=="string"?Yr(n,k,a.value.path):ce({},k)}function C(k,F){if(u!==k)return yn(ke.NAVIGATION_CANCELLED,{from:F,to:k})}function A(k){return G(k)}function O(k){return A(ce(S(k),{replace:!0}))}function N(k,F){const D=k.matched[k.matched.length-1];if(D&&D.redirect){const{redirect:z}=D;let X=typeof z=="function"?z(k,F):z;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=S(X):{path:X},X.params={}),ce({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function G(k,F){const D=u=v(k),z=a.value,X=k.state,p=k.force,g=k.replace===!0,b=N(D,z);if(b)return G(ce(S(b),{state:typeof b=="object"?ce({},X,b.state):X,force:p,replace:g}),F||D);const _=D;_.redirectedFrom=F;let x;return!p&&tf(r,z,D)&&(x=yn(ke.NAVIGATION_DUPLICATED,{to:_,from:z}),rt(z,z,!0,!1)),(x?Promise.resolve(x):Y(_,z)).catch(y=>vt(y)?vt(y,ke.NAVIGATION_GUARD_REDIRECT)?y:It(y):ae(y,_,z)).then(y=>{if(y){if(vt(y,ke.NAVIGATION_GUARD_REDIRECT))return G(ce({replace:g},S(y.to),{state:typeof y.to=="object"?ce({},X,y.to.state):X,force:p}),F||_)}else y=H(_,z,!0,g,X);return le(_,z,y),y})}function ne(k,F){const D=C(k,F);return D?Promise.reject(D):Promise.resolve()}function j(k){const F=on.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(k):k()}function Y(k,F){let D;const[z,X,p]=vf(k,F);D=es(z.reverse(),"beforeRouteLeave",k,F);for(const b of z)b.leaveGuards.forEach(_=>{D.push(Nt(_,k,F))});const g=ne.bind(null,k,F);return D.push(g),Ge(D).then(()=>{D=[];for(const b of i.list())D.push(Nt(b,k,F));return D.push(g),Ge(D)}).then(()=>{D=es(X,"beforeRouteUpdate",k,F);for(const b of X)b.updateGuards.forEach(_=>{D.push(Nt(_,k,F))});return D.push(g),Ge(D)}).then(()=>{D=[];for(const b of p)if(b.beforeEnter)if(nt(b.beforeEnter))for(const _ of b.beforeEnter)D.push(Nt(_,k,F));else D.push(Nt(b.beforeEnter,k,F));return D.push(g),Ge(D)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),D=es(p,"beforeRouteEnter",k,F,j),D.push(g),Ge(D))).then(()=>{D=[];for(const b of o.list())D.push(Nt(b,k,F));return D.push(g),Ge(D)}).catch(b=>vt(b,ke.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function le(k,F,D){l.list().forEach(z=>j(()=>z(k,F,D)))}function H(k,F,D,z,X){const p=C(k,F);if(p)return p;const g=F===Ot,b=un?history.state:{};D&&(z||g?s.replace(k.fullPath,ce({scroll:g&&b&&b.scroll},X)):s.push(k.fullPath,X)),a.value=k,rt(k,F,D,g),It()}let re;function Te(){re||(re=s.listen((k,F,D)=>{if(!Ft.listening)return;const z=v(k),X=N(z,Ft.currentRoute.value);if(X){G(ce(X,{replace:!0,force:!0}),z).catch(Bn);return}u=z;const p=a.value;un&&uf(Vi(p.fullPath,D.delta),Lr()),Y(z,p).catch(g=>vt(g,ke.NAVIGATION_ABORTED|ke.NAVIGATION_CANCELLED)?g:vt(g,ke.NAVIGATION_GUARD_REDIRECT)?(G(ce(S(g.to),{force:!0}),z).then(b=>{vt(b,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&!D.delta&&D.type===gs.pop&&s.go(-1,!1)}).catch(Bn),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ae(g,z,p))).then(g=>{g=g||H(z,p,!1),g&&(D.delta&&!vt(g,ke.NAVIGATION_CANCELLED)?s.go(-D.delta,!1):D.type===gs.pop&&vt(g,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),le(z,p,g)}).catch(Bn)}))}let je=Tn(),xe=Tn(),he;function ae(k,F,D){It(k);const z=xe.list();return z.length?z.forEach(X=>X(k,F,D)):console.error(k),Promise.reject(k)}function gt(){return he&&a.value!==Ot?Promise.resolve():new Promise((k,F)=>{je.add([k,F])})}function It(k){return he||(he=!k,Te(),je.list().forEach(([F,D])=>k?D(k):F()),je.reset()),k}function rt(k,F,D,z){const{scrollBehavior:X}=e;if(!un||!X)return Promise.resolve();const p=!D&&ff(Vi(k.fullPath,0))||(z||!D)&&history.state&&history.state.scroll||null;return Qt().then(()=>X(k,F,p)).then(g=>g&&cf(g)).catch(g=>ae(g,k,F))}const De=k=>s.go(k);let sn;const on=new Set,Ft={currentRoute:a,listening:!0,addRoute:m,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:T,resolve:v,options:e,push:A,replace:O,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:xe.add,isReady:gt,install(k){k.component("RouterLink",Wf),k.component("RouterView",zf),k.config.globalProperties.$router=Ft,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(a)}),un&&!sn&&a.value===Ot&&(sn=!0,A(s.location).catch(z=>{}));const F={};for(const z in Ot)Object.defineProperty(F,z,{get:()=>a.value[z],enumerable:!0});k.provide(Nr,Ft),k.provide(zs,Mo(F)),k.provide(bs,a);const D=k.unmount;on.add(k),k.unmount=function(){on.delete(k),on.size<1&&(u=Ot,re&&re(),re=null,a.value=Ot,sn=!1,he=!1),D()}}};function Ge(k){return k.reduce((F,D)=>F.then(()=>j(D)),Promise.resolve())}return Ft}function Vf(){return Xe(Nr)}function Wl(e){return Xe(zs)}const qf={class:"container nav-shell"},Gf={class:"nav-right"},Kf={__name:"SiteHeader",props:{scrolled:{type:Boolean,default:!1}},setup(e){const t=Ae(!1);return(n,r)=>{const s=ht("router-link");return I(),L("header",{class:qe(["site-header",{scrolled:e.scrolled}])},[f("div",qf,[q(s,{class:"brand",to:"/",onClick:r[0]||(r[0]=i=>t.value=!1)},{default:J(()=>[...r[8]||(r[8]=[f("strong",null,"TreeCore",-1)])]),_:1}),f("div",Gf,[f("button",{class:"menu-toggle",onClick:r[1]||(r[1]=i=>t.value=!t.value),"aria-label":"切换导航"},[...r[9]||(r[9]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:qe(["nav-links",{open:t.value}])},[q(s,{to:"/",onClick:r[2]||(r[2]=i=>t.value=!1)},{default:J(()=>[...r[10]||(r[10]=[se("首页",-1)])]),_:1}),q(s,{to:"/downloads",onClick:r[3]||(r[3]=i=>t.value=!1)},{default:J(()=>[...r[11]||(r[11]=[se("下载",-1)])]),_:1}),q(s,{to:"/features",onClick:r[4]||(r[4]=i=>t.value=!1)},{default:J(()=>[...r[12]||(r[12]=[se("特性",-1)])]),_:1}),q(s,{to:"/docs",onClick:r[5]||(r[5]=i=>t.value=!1)},{default:J(()=>[...r[13]||(r[13]=[se("文档",-1)])]),_:1}),q(s,{to:"/team",onClick:r[6]||(r[6]=i=>t.value=!1)},{default:J(()=>[...r[14]||(r[14]=[se("团队",-1)])]),_:1}),q(s,{class:"nav-cta",to:"/docs/quick-start",onClick:r[7]||(r[7]=i=>t.value=!1)},{default:J(()=>[...r[15]||(r[15]=[se("快速开始",-1)])]),_:1})],2)])])],2)}}},Hl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Qf={},Zf={class:"site-footer"},Jf={class:"container footer-grid"},Yf={class:"footer-column"},Xf={class:"footer-column"};function ed(e,t){const n=ht("router-link");return I(),L("footer",Zf,[f("div",Jf,[f("div",Yf,[t[3]||(t[3]=f("h3",null,"快速开始",-1)),f("ul",null,[f("li",null,[q(n,{to:"/downloads"},{default:J(()=>[...t[0]||(t[0]=[se("下载版本",-1)])]),_:1})]),f("li",null,[q(n,{to:"/docs/quick-start"},{default:J(()=>[...t[1]||(t[1]=[se("安装文档",-1)])]),_:1})]),f("li",null,[q(n,{to:"/docs/configuration"},{default:J(()=>[...t[2]||(t[2]=[se("配置参考",-1)])]),_:1})])])]),t[8]||(t[8]=f("div",{class:"footer-column"},[f("h3",null,"社区"),f("ul",null,[f("li",null,[f("a",{href:"https://qm.qq.com/q/MfzN81ScIc",target:"_blank",rel:"noreferrer"},"QQ 群")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",Xf,[t[7]||(t[7]=f("h3",null,"TreeCore",-1)),f("ul",null,[f("li",null,[q(n,{to:"/team"},{default:J(()=>[...t[4]||(t[4]=[se("团队与支持",-1)])]),_:1})]),f("li",null,[q(n,{to:"/roadmap"},{default:J(()=>[...t[5]||(t[5]=[se("路线图",-1)])]),_:1})]),f("li",null,[q(n,{to:"/changelog"},{default:J(()=>[...t[6]||(t[6]=[se("更新日志",-1)])]),_:1})])])]),t[9]||(t[9]=f("div",{class:"footer-column"},[f("h3",null,"相关链接"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")])])],-1))]),t[10]||(t[10]=f("div",{class:"container footer-bottom"},[f("p",null,"© 2026 TreeMC-cloud. All rights reserved."),f("p",{class:"footer-disclaimer"},"TreeCore 官方站点仅聚焦产品介绍、文档、下载与社区入口。")],-1))])}const td=Hl(Qf,[["render",ed]]),nd={class:"site-shell","data-theme":"light"},rd={class:"site-main"},sd={__name:"App",setup(e){const t=Ae(!1),n=Wl();let r=null;const s=()=>{t.value=window.scrollY>8},i=[".page-hero",".hero-grid > *",".section-head",".feature-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".empty-state",".doc-header",".doc-article",".doc-footer",".final-cta-panel",".footer-grid > *"],o=async()=>{await Qt();const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=[...new Set(i.flatMap(u=>Array.from(document.querySelectorAll(u))))];r&&(r.disconnect(),r=null),a.forEach((u,c)=>{u.classList.add("reveal"),u.style.setProperty("--reveal-delay",`${c%6*60}ms`),l?u.classList.add("is-visible"):u.classList.remove("is-visible")}),!l&&(r=new IntersectionObserver(u=>{u.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-visible"),r==null||r.unobserve(c.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"}),a.forEach(u=>r==null?void 0:r.observe(u)))};return nn(()=>{document.documentElement.dataset.theme="light",s(),window.addEventListener("scroll",s,{passive:!0}),o()}),Ir(()=>{window.removeEventListener("scroll",s),r==null||r.disconnect()}),Xt(()=>n.fullPath,()=>{o()}),(l,a)=>{const u=ht("router-view");return I(),L("div",nd,[q(Kf,{scrolled:t.value},null,8,["scrolled"]),f("main",rd,[q(u,null,{default:J(({Component:c,route:d})=>[q(du,{name:"page-fade",mode:"out-in"},{default:J(()=>[(I(),fn(yc(c),{key:d.fullPath}))]),_:2},1024)]),_:1})]),q(td)])}}},id="/images/console-live.gif",od={class:"home-page"},ld={class:"hero-section hero-section--reference"},ad={class:"container hero-grid hero-grid--reference"},cd={class:"hero-copy hero-copy--reference"},ud={class:"hero-actions hero-actions--reference"},fd={class:"section-block"},dd={class:"container"},pd={class:"feature-grid three"},hd={class:"section-block section-block--muted"},gd={class:"container"},md={class:"feature-grid three"},bd={class:"section-block"},vd={class:"container"},_d={class:"feature-grid three"},yd={class:"card-label"},kd={class:"section-block final-cta final-cta--reference"},wd={class:"container final-cta-panel"},xd={class:"hero-actions"},Cd={__name:"HomePage",setup(e){const t=[{title:"性能运行层",description:"围绕 TPS / MSPT、动态视距、自动分层与关键运行参数，降低高峰期掉速与手工调参成本。",link:"/features",linkLabel:"查看性能能力 →"},{title:"Web 运维层",description:"把控制台、诊断、备份、世界管理与集成状态汇总到 Web 面板，避免维护动作分散在脚本和命令里。",link:"/docs/web-panel",linkLabel:"查看 Web 面板 →"},{title:"内容维护层",description:"覆盖模型、资源包、纹理、在线玩家下发与版本协同，适合综合服与内容服长期维护。",link:"/docs/resource-pack",linkLabel:"查看资源链路 →"}],n=[{title:"动态视距与模拟距离",description:"根据当前负载自动收紧与恢复，减少高峰时无效世界开销。"},{title:"四档自动分层预设",description:"按玩家数和压力切换运行策略，适配从中小型到高峰综合服的不同阶段。"},{title:"Paper 关键项热调",description:"降低“改配置—重启—观察”的循环成本，把调优动作放到更接近日常维护的位置。"},{title:"控制台与诊断工具",description:"支持远程命令、日志流、内存快照、线程转储与常用排障动作。"},{title:"资源包与模型闭环",description:"从上传、托管到在线分发形成完整链路，不再把资源维护拆散。"},{title:"世界与集成管理",description:"对 Multiverse、ItemsAdder、CraftEngine 等常见场景提供集中式管理入口。"}],r=[{tag:"DOWNLOAD",title:"下载与版本",description:"查看当前公开版本、附件与发布说明，作为进入官网的第一步。",link:"/downloads",linkLabel:"打开下载页 →"},{tag:"DOCS",title:"技术文档",description:"从快速开始、配置参考到资源链路与系统架构，都可以在站内连续阅读。",link:"/docs",linkLabel:"进入文档 →"},{tag:"SUPPORT",title:"团队与支持",description:"集中查看社区入口、贡献者信息、FAQ 与公开反馈渠道。",link:"/team",linkLabel:"查看支持入口 →"}];return(s,i)=>{const o=ht("router-link");return I(),L("div",od,[f("section",ld,[f("div",ad,[f("div",cd,[i[3]||(i[3]=f("span",{class:"eyebrow eyebrow--light"},"TreeCore",-1)),i[4]||(i[4]=f("h1",{class:"hero-title hero-title--reference"},"面向现代 Minecraft 服务器的高性能运行平台。",-1)),i[5]||(i[5]=f("p",{class:"hero-description hero-description--light"}," TreeCore 聚焦高负载运行、可视化运维与内容链路维护，把服主最常用的能力——性能调优、Web 管理、诊断、备份与资源包流程——收束到一套更稳定的运行平台里。 ",-1)),f("div",ud,[q(o,{class:"button button--hero-primary",to:"/downloads"},{default:J(()=>[...i[0]||(i[0]=[se("开始使用",-1)])]),_:1}),q(o,{class:"button button--hero-secondary",to:"/features"},{default:J(()=>[...i[1]||(i[1]=[se("了解特性",-1)])]),_:1}),i[2]||(i[2]=f("a",{class:"button button--hero-secondary",href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub",-1))]),i[6]||(i[6]=f("p",{class:"hero-note"},"覆盖下载、文档、更新日志、团队支持与站内技术 Wiki。",-1))]),i[7]||(i[7]=f("div",{class:"hero-visual hero-visual--reference"},[f("div",{class:"hero-preview-card"},[f("div",{class:"hero-preview-media"},[f("img",{src:id,alt:"TreeCore Web 管理面板动态预览",width:"1897",height:"836",decoding:"async",fetchpriority:"high"})])])],-1))])]),f("section",fd,[f("div",dd,[i[8]||(i[8]=f("div",{class:"section-head left"},[f("h2",null,"核心模块"),f("p",null,"按照官网、下载、文档和运维场景去理解 TreeCore，而不是从仓库目录开始反推整个项目结构。")],-1)),f("div",pd,[(I(),L(oe,null,Ce(t,l=>f("article",{class:"feature-card feature-card--reference",key:l.title},[f("h3",null,B(l.title),1),f("p",null,B(l.description),1),q(o,{class:"text-link",to:l.link},{default:J(()=>[se(B(l.linkLabel),1)]),_:2},1032,["to"])])),64))])])]),f("section",hd,[f("div",gd,[i[9]||(i[9]=f("div",{class:"section-head left"},[f("h2",null,"核心能力"),f("p",null,"优先把真实服主会用到的运行、维护与内容更新能力讲清楚，而不是只堆抽象概念。")],-1)),f("div",md,[(I(),L(oe,null,Ce(n,l=>f("article",{class:"feature-card feature-card--reference",key:l.title},[f("h3",null,B(l.title),1),f("p",null,B(l.description),1)])),64))])])]),f("section",bd,[f("div",vd,[i[10]||(i[10]=f("div",{class:"section-head left"},[f("h2",null,"推荐阅读路径"),f("p",null,"第一次进入官网时，建议先从下载和快速开始进入，再根据场景继续看文档、路线图和团队支持。")],-1)),f("div",_d,[(I(),L(oe,null,Ce(r,l=>f("article",{class:"feature-card feature-card--reference",key:l.title},[f("span",yd,B(l.tag),1),f("h3",null,B(l.title),1),f("p",null,B(l.description),1),q(o,{class:"text-link",to:l.link},{default:J(()=>[se(B(l.linkLabel),1)]),_:2},1032,["to"])])),64))])])]),f("section",kd,[f("div",wd,[i[13]||(i[13]=f("div",{class:"cta-copy"},[f("h2",null,"从官网下载页进入，再按文档完成部署。"),f("p",null,"如果你已经准备开始试用，直接从下载页拿版本，然后按快速开始与配置参考完成首轮部署。")],-1)),f("div",xd,[q(o,{class:"button primary",to:"/downloads"},{default:J(()=>[...i[11]||(i[11]=[se("打开下载页",-1)])]),_:1}),q(o,{class:"button secondary",to:"/docs/quick-start"},{default:J(()=>[...i[12]||(i[12]=[se("查看快速开始",-1)])]),_:1})])])])])}}},Td={},Rd={class:"page-shell container"},Sd={class:"page-hero page-hero-grid"},Ad={class:"page-hero-main"},Ed={class:"hero-actions"};function Pd(e,t){const n=ht("router-link");return I(),L("div",Rd,[f("section",Sd,[f("div",Ad,[t[2]||(t[2]=f("span",{class:"eyebrow eyebrow--light"},"FEATURES",-1)),t[3]||(t[3]=f("h1",null,"当前可用的核心能力",-1)),t[4]||(t[4]=f("p",null," 这页只讲现在已经做出来、并且日常维护能直接用上的部分：性能调优、Web 运维、资源包与模型链路，以及世界和备份管理。 ",-1)),f("div",Ed,[q(n,{class:"button primary",to:"/downloads"},{default:J(()=>[...t[0]||(t[0]=[se("查看下载",-1)])]),_:1}),q(n,{class:"button secondary",to:"/docs"},{default:J(()=>[...t[1]||(t[1]=[se("打开文档",-1)])]),_:1})])]),t[5]||(t[5]=f("div",{class:"page-hero-card"},[f("strong",null,"当前能力范围"),f("ul",null,[f("li",null,"运行时性能调优"),f("li",null,"Web 管理面板"),f("li",null,"资源包 / 模型维护"),f("li",null,"世界与备份管理")])],-1))]),t[6]||(t[6]=vn('<section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',3))])}const Id=Hl(Td,[["render",Pd]]),Fl="https://api.github.com/repos/TreeMC-cloud/Tree",$d=`${Fl}/releases?per_page=30`,Od=`${Fl}/contributors?per_page=24`,jl="tree-site-cache:",Md=30*60*1e3,zl=e=>{try{const t=localStorage.getItem(`${jl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>Md?null:n.data}catch{return null}},Ul=(e,t)=>{try{localStorage.setItem(`${jl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},Vl=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},ql=async e=>{try{const t=await fetch(`/data/${e}`);if(!t.ok)return[];const n=await t.json();return Array.isArray(n)?n:[]}catch{return[]}},Ld=async()=>ql("releases-fallback.json"),Nd=async()=>ql("contributors-fallback.json"),Gl=async()=>{try{const e=await Vl($d),t=Array.isArray(e)?e:[];return Ul("releases",t),{data:t,source:"github"}}catch{const e=zl("releases");if(e)return{data:e,source:"cache"};const t=await Ld();return{data:t,source:t.length?"fallback":"empty"}}},Dd=async()=>{try{const e=await Vl(Od),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Ul("contributors",t),{data:t,source:"github"}}catch{const e=zl("contributors");if(e)return{data:e,source:"cache"};const t=await Nd();return{data:t,source:t.length?"fallback":"empty"}}},ar=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Bt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Kl=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Kn=e=>String(e||"").replace(/\r/g,"").trim(),Dt=(e,t=4)=>{const n=Kn(e);if(!n)return[];const r=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),s=[];for(const i of r)if(s.includes(i)||s.push(i),s.length>=t)break;return s},Rn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},so=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Ql=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),Bd={class:"page-shell container"},Wd={class:"page-hero page-hero-grid"},Hd={class:"page-hero-main"},Fd={class:"hero-actions"},jd={class:"page-hero-card"},zd={class:"stack-section"},Ud={class:"section-head left"},Vd={class:"release-hero-grid"},qd={key:0,class:"release-hero-card surface-card"},Gd={class:"release-head"},Kd={class:"release-date"},Qd={class:"release-tag"},Zd={key:0,class:"bullet-list compact-list"},Jd={key:1,class:"release-body"},Yd={class:"release-actions"},Xd=["href"],ep=["href"],tp={key:1,class:"release-hero-card surface-card"},np={class:"release-head"},rp={class:"release-date"},sp={class:"release-tag"},ip={key:0,class:"bullet-list compact-list"},op={key:1,class:"release-body"},lp={class:"release-actions"},ap=["href"],cp=["href"],up={key:2,class:"empty-state surface-card"},fp={class:"stack-section surface-card changelog-toolbar"},dp={class:"release-filter-row"},pp={class:"filter-chip-group"},hp=["onClick"],gp={key:0,class:"stack-section"},mp={key:1,class:"stack-section release-list-grid"},bp={class:"release-head"},vp={class:"release-date"},_p={class:"release-tag"},yp={key:0,class:"bullet-list compact-list"},kp={key:1,class:"release-body"},wp={key:2,class:"asset-group-list"},xp={key:3,class:"release-asset-list"},Cp=["href"],Tp={class:"release-actions"},Rp=["href"],Sp={key:2,class:"stack-section"},Ap={__name:"DownloadsPage",setup(e){const t=Ae(!0),n=Ae([]),r=Ae("github"),s=Ae("all"),i=Ae(""),o=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=ye(()=>Ql(n.value)),a=ye(()=>l.value.find(P=>Bt(P)==="stable")||null),u=ye(()=>l.value.find(P=>Bt(P)==="preview")||null),c=ye(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?r.value==="cache"?"当前数据来自本地缓存。":r.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=P=>{const v=Kn(P).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return v?v.length>140?`${v.slice(0,140)}…`:v:"暂无发布说明。"},h=P=>{const v=m(P);return v.find(S=>Rn(S)==="server")||v[0]||null},m=P=>{const v=Array.isArray(P==null?void 0:P.assets)?[...P.assets]:[],S=["server","archive","source","checksum","metadata","other"];return v.sort((C,A)=>S.indexOf(Rn(C))-S.indexOf(Rn(A))).slice(0,5)},w=P=>{const v=new Map;for(const S of(P==null?void 0:P.assets)||[]){const C=Rn(S),A=v.get(C)||[];A.push(S),v.set(C,A)}return["server","archive","source","checksum","metadata","other"].filter(S=>v.has(S)).map(S=>({type:S,label:so(S),items:v.get(S)}))},T=ye(()=>{const P=i.value.toLowerCase();return l.value.filter(v=>{const S=Bt(v);return s.value!=="all"&&S!==s.value?!1:P?[v.name,v.tag_name,Kn(v.body)].filter(Boolean).join(" ").toLowerCase().includes(P):!0})});return nn(async()=>{const P=await Gl();n.value=P.data,r.value=P.source,t.value=!1}),(P,v)=>{const S=ht("router-link");return I(),L("div",Bd,[f("section",Wd,[f("div",Hd,[v[4]||(v[4]=f("span",{class:"eyebrow eyebrow--light"},"DOWNLOADS",-1)),v[5]||(v[5]=f("h1",null,"下载与版本",-1)),v[6]||(v[6]=f("p",null," 这里直接读取公开仓库 Releases，展示最新正式版、预发布版、附件和更新摘要，不需要你再自己去翻仓库页面。 ",-1)),f("div",Fd,[v[3]||(v[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),q(S,{class:"button secondary",to:"/docs/quick-start"},{default:J(()=>[...v[1]||(v[1]=[se("安装文档",-1)])]),_:1}),q(S,{class:"button ghost",to:"/changelog"},{default:J(()=>[...v[2]||(v[2]=[se("查看更新日志",-1)])]),_:1})])]),f("div",jd,[v[10]||(v[10]=f("strong",null,"版本入口",-1)),f("ul",null,[v[7]||(v[7]=f("li",null,"优先展示最新正式版",-1)),v[8]||(v[8]=f("li",null,"预发布版本并列展示",-1)),v[9]||(v[9]=f("li",null,"附件按类型分类整理",-1)),f("li",null,B(c.value),1)])])]),f("section",zd,[f("div",Ud,[v[11]||(v[11]=f("h2",null,"最新版本",-1)),f("p",null,B(c.value),1)]),f("div",Vd,[a.value?(I(),L("article",qd,[f("div",Gd,[v[12]||(v[12]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",Kd,B(ge(ar)(a.value.published_at)),1)]),f("h3",null,B(a.value.name||a.value.tag_name),1),f("p",Qd,B(a.value.tag_name),1),ge(Dt)(a.value.body,4).length?(I(),L("ul",Zd,[(I(!0),L(oe,null,Ce(ge(Dt)(a.value.body,4),C=>(I(),L("li",{key:C},B(C),1))),128))])):(I(),L("p",Jd,B(d(a.value.body)),1)),f("div",Yd,[f("a",{class:"button primary small",href:a.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,Xd),h(a.value)?(I(),L("a",{key:0,class:"button secondary small",href:h(a.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+B(h(a.value).name),9,ep)):Je("",!0)])])):Je("",!0),u.value?(I(),L("article",tp,[f("div",np,[v[13]||(v[13]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",rp,B(ge(ar)(u.value.published_at)),1)]),f("h3",null,B(u.value.name||u.value.tag_name),1),f("p",sp,B(u.value.tag_name),1),ge(Dt)(u.value.body,4).length?(I(),L("ul",ip,[(I(!0),L(oe,null,Ce(ge(Dt)(u.value.body,4),C=>(I(),L("li",{key:C},B(C),1))),128))])):(I(),L("p",op,B(d(u.value.body)),1)),f("div",lp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,ap),h(u.value)?(I(),L("a",{key:0,class:"button secondary small",href:h(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+B(h(u.value).name),9,cp)):Je("",!0)])])):Je("",!0),!a.value&&!u.value?(I(),L("article",up,[...v[14]||(v[14]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Je("",!0)])]),f("section",fp,[v[15]||(v[15]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",dp,[f("div",pp,[(I(),L(oe,null,Ce(o,C=>f("button",{key:C.value,class:qe(["filter-chip",{active:s.value===C.value}]),onClick:A=>s.value=C.value},B(C.label),11,hp)),64))]),Ns(f("input",{"onUpdate:modelValue":v[0]||(v[0]=C=>i.value=C),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Fs,i.value,void 0,{trim:!0}]])])]),t.value?(I(),L("section",gp,[...v[16]||(v[16]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):T.value.length?(I(),L("section",mp,[(I(!0),L(oe,null,Ce(T.value,C=>(I(),L("article",{key:C.id||C.tag_name,class:"release-card enhanced-release-card"},[f("div",bp,[f("span",{class:qe(["release-badge",{alt:ge(Bt)(C)==="preview"}])},B(ge(Kl)(ge(Bt)(C))),3),f("span",vp,B(ge(ar)(C.published_at)),1)]),f("h3",null,B(C.name||C.tag_name),1),f("p",_p,B(C.tag_name),1),ge(Dt)(C.body,4).length?(I(),L("ul",yp,[(I(!0),L(oe,null,Ce(ge(Dt)(C.body,4),A=>(I(),L("li",{key:A},B(A),1))),128))])):(I(),L("p",kp,B(d(C.body)),1)),w(C).length?(I(),L("div",wp,[(I(!0),L(oe,null,Ce(w(C),A=>(I(),L("div",{key:A.type,class:"asset-group-chip"},[f("strong",null,B(A.label),1),f("span",null,B(A.items.length)+" 个文件",1)]))),128))])):Je("",!0),C.assets&&C.assets.length?(I(),L("div",xp,[(I(!0),L(oe,null,Ce(m(C),A=>(I(),L("a",{key:A.id||A.name,class:"release-asset-link",href:A.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,B(A.name),1),f("small",null,B(ge(so)(ge(Rn)(A))),1)],8,Cp))),128))])):Je("",!0),f("div",Tp,[f("a",{class:"button primary small",href:C.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Rp),q(S,{class:"button secondary small",to:"/changelog"},{default:J(()=>[...v[17]||(v[17]=[se("看时间线",-1)])]),_:1})])]))),128))])):(I(),L("section",Sp,[...v[18]||(v[18]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),v[19]||(v[19]=vn('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},vr=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],dn=vr.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Zl=Object.fromEntries(dn.map(e=>[e.slug,e])),Ep={class:"page-shell container"},Pp={class:"page-hero page-hero-grid docs-hero-grid"},Ip={class:"page-hero-main"},$p={class:"hero-actions"},Op={class:"stack-section surface-card docs-filter-card"},Mp={class:"docs-filter-bar"},Lp={class:"section-head left"},Np={class:"feature-grid three"},Dp={class:"card-label"},Bp={class:"doc-card-meta"},Wp={key:0,class:"stack-section"},Hp={__name:"DocsPage",setup(e){const t=Ae(""),n=ye(()=>{const r=t.value.toLowerCase();return r?vr.map(s=>({...s,items:s.items.filter(i=>[i.title,i.description,i.tag,s.title].join(" ").toLowerCase().includes(r))})).filter(s=>s.items.length>0):vr});return(r,s)=>{const i=ht("router-link");return I(),L("div",Ep,[f("section",Pp,[f("div",Ip,[s[3]||(s[3]=f("span",{class:"eyebrow eyebrow--light"},"WIKI INSIDE SITE",-1)),s[4]||(s[4]=f("h1",null,"技术文档都放在站内。",-1)),s[5]||(s[5]=f("p",null," 现在可以直接在这里看部署、运维、配置、架构和 Web 资源同步文档，不用再跳去 GitHub Markdown 页面。 ",-1)),f("div",$p,[q(i,{class:"button primary",to:"/docs/quick-start"},{default:J(()=>[...s[1]||(s[1]=[se("从快速开始开始",-1)])]),_:1}),q(i,{class:"button secondary",to:"/docs/configuration"},{default:J(()=>[...s[2]||(s[2]=[se("查看配置参考",-1)])]),_:1})])]),s[6]||(s[6]=f("div",{class:"page-hero-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Op,[f("div",Mp,[s[7]||(s[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Ns(f("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Fs,t.value,void 0,{trim:!0}]])])]),(I(!0),L(oe,null,Ce(n.value,o=>(I(),L("section",{class:"stack-section",key:o.key},[f("div",Lp,[f("h2",null,B(o.title),1),f("p",null,B(o.description),1)]),f("div",Np,[(I(!0),L(oe,null,Ce(o.items,l=>(I(),L("article",{class:"feature-card compact",key:l.slug},[f("span",Dp,B(l.tag),1),f("h3",null,B(l.title),1),f("p",null,B(l.description),1),f("div",Bp,[f("span",null,B(o.title),1),f("span",null,B(l.minutes),1)]),q(i,{class:"text-link",to:`/docs/${l.slug}`},{default:J(()=>[...s[8]||(s[8]=[se("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Je("",!0):(I(),L("section",Wp,[...s[9]||(s[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),s[10]||(s[10]=vn('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Fp=`# Tree 技术文档 / Wiki

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
`,jp=`# Summary

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
`,zp=`# 模块地图

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
`,Up=`# 系统架构总览

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
`,Vp=`# Web 资源同步机制

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
`,qp=`# 首次上线检查清单

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
`,Gp=`# 快速开始

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
`,Kp=`# Web 面板访问

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
`,Qp=`# 命令与日常运维

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
`,Zp=`# 诊断与备份

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
`,Jp=`# 假人 / 红石运维

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
`,Yp=`# 集成与世界管理

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
`,Xp=`# 资源包 / 模型链路

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
`,eh=`# Web 页面总览

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
`,th=`# 命令速查表

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
`,nh=`# 配置参考

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
`,rh=Object.assign({"../../content/docs/README.md":Fp,"../../content/docs/SUMMARY.md":jp,"../../content/docs/architecture/module-map.md":zp,"../../content/docs/architecture/system-overview.md":Up,"../../content/docs/development/web-ui-pipeline.md":Vp,"../../content/docs/getting-started/first-day-checklist.md":qp,"../../content/docs/getting-started/quick-start.md":Gp,"../../content/docs/getting-started/web-panel.md":Kp,"../../content/docs/operations/commands.md":Qp,"../../content/docs/operations/diagnostics-and-backups.md":Zp,"../../content/docs/operations/fakeplayer-and-redstone.md":Jp,"../../content/docs/operations/integrations-and-worlds.md":Yp,"../../content/docs/operations/resource-pack.md":Xp,"../../content/docs/operations/web-pages-overview.md":eh,"../../content/docs/reference/command-cheatsheet.md":th,"../../content/docs/reference/configuration.md":nh}),sh="../../content/docs/",ih=Object.fromEntries(Object.entries(rh).map(([e,t])=>[e.replace(sh,""),t]));function Us(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rn=Us();function Jl(e){rn=e}var Wn={exec:()=>null};function de(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ne.caret,"$1"),n=n.replace(s,o),r},getRegex:()=>new RegExp(n,t)};return r}var Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},oh=/^(?:[ \t]*(?:\n|$))+/,lh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ah=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Yn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ch=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Vs=/(?:[*+-]|\d{1,9}[.)])/,Yl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Xl=de(Yl).replace(/bull/g,Vs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),uh=de(Yl).replace(/bull/g,Vs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fh=/^[^\n]+/,Gs=/(?!\s*\])(?:\\.|[^\[\]\\])+/,dh=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Gs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ph=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Vs).getRegex(),Dr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ks=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,hh=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ks).replace("tag",Dr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ea=de(qs).replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dr).getRegex(),gh=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ea).getRegex(),Qs={blockquote:gh,code:lh,def:dh,fences:ah,heading:ch,hr:Yn,html:hh,lheading:Xl,list:ph,newline:oh,paragraph:ea,table:Wn,text:fh},io=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dr).getRegex(),mh={...Qs,lheading:uh,table:io,paragraph:de(qs).replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",io).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dr).getRegex()},bh={...Qs,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ks).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(qs).replace("hr",Yn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Xl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_h=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ta=/^( {2,}|\\)\n(?!\s*$)/,yh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Br=/[\p{P}\p{S}]/u,Zs=/[\s\p{P}\p{S}]/u,na=/[^\s\p{P}\p{S}]/u,kh=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Zs).getRegex(),ra=/(?!~)[\p{P}\p{S}]/u,wh=/(?!~)[\s\p{P}\p{S}]/u,xh=/(?:[^\s\p{P}\p{S}]|~)/u,Ch=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,sa=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Th=de(sa,"u").replace(/punct/g,Br).getRegex(),Rh=de(sa,"u").replace(/punct/g,ra).getRegex(),ia="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Sh=de(ia,"gu").replace(/notPunctSpace/g,na).replace(/punctSpace/g,Zs).replace(/punct/g,Br).getRegex(),Ah=de(ia,"gu").replace(/notPunctSpace/g,xh).replace(/punctSpace/g,wh).replace(/punct/g,ra).getRegex(),Eh=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,na).replace(/punctSpace/g,Zs).replace(/punct/g,Br).getRegex(),Ph=de(/\\(punct)/,"gu").replace(/punct/g,Br).getRegex(),Ih=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$h=de(Ks).replace("(?:-->|$)","-->").getRegex(),Oh=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$h).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),_r=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Mh=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",_r).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),oa=de(/^!?\[(label)\]\[(ref)\]/).replace("label",_r).replace("ref",Gs).getRegex(),la=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",Gs).getRegex(),Lh=de("reflink|nolink(?!\\()","g").replace("reflink",oa).replace("nolink",la).getRegex(),Js={_backpedal:Wn,anyPunctuation:Ph,autolink:Ih,blockSkip:Ch,br:ta,code:_h,del:Wn,emStrongLDelim:Th,emStrongRDelimAst:Sh,emStrongRDelimUnd:Eh,escape:vh,link:Mh,nolink:la,punctuation:kh,reflink:oa,reflinkSearch:Lh,tag:Oh,text:yh,url:Wn},Nh={...Js,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",_r).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_r).getRegex()},vs={...Js,emStrongRDelimAst:Ah,emStrongLDelim:Rh,url:de(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Dh={...vs,br:de(ta).replace("{2,}","*").getRegex(),text:de(vs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nr={normal:Qs,gfm:mh,pedantic:bh},Sn={normal:Js,gfm:vs,breaks:Dh,pedantic:Nh},Bh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oo=e=>Bh[e];function at(e,t){if(t){if(Ne.escapeTest.test(e))return e.replace(Ne.escapeReplace,oo)}else if(Ne.escapeTestNoEncode.test(e))return e.replace(Ne.escapeReplaceNoEncode,oo);return e}function lo(e){try{e=encodeURI(e).replace(Ne.percentDecode,"%")}catch{return null}return e}function ao(e,t){var i;const n=e.replace(Ne.findPipe,(o,l,a)=>{let u=!1,c=l;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Ne.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Ne.slashPipe,"|");return r}function An(e,t,n){const r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function Wh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function co(e,t,n,r,s){const i=t.href,o=t.title||null,l=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,a}function Hh(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const s=r[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[l]=o;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var yr=class{constructor(e){me(this,"options");me(this,"rules");me(this,"lexer");this.options=e||rn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:An(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Hh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=An(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:An(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=An(t[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let o=!1;const l=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))l.push(n[a]),o=!0;else if(!o)l.push(n[a]);else break;n=n.slice(a);const u=l.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const h=i.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){const m=h,w=m.raw+`
`+n.join(`
`),T=this.blockquote(w);i[i.length-1]=T,r=r.substring(0,r.length-m.raw.length)+T.raw,s=s.substring(0,s.length-m.text.length)+T.text;break}else if((h==null?void 0:h.type)==="list"){const m=h,w=m.raw+`
`+n.join(`
`),T=this.list(w);i[i.length-1]=T,r=r.substring(0,r.length-h.raw.length)+T.raw,s=s.substring(0,s.length-m.raw.length)+T.raw,n=w.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,v=>" ".repeat(3*v.length)),h=e.split(`
`,1)[0],m=!d.trim(),w=0;if(this.options.pedantic?(w=2,c=d.trimStart()):m?w=t[1].length+1:(w=t[2].search(this.rules.other.nonSpaceChar),w=w>4?1:w,c=d.slice(w),w+=t[1].length),m&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,e=e.substring(h.length+1),a=!0),!a){const v=this.rules.other.nextBulletRegex(w),S=this.rules.other.hrRegex(w),C=this.rules.other.fencesBeginRegex(w),A=this.rules.other.headingBeginRegex(w),O=this.rules.other.htmlBeginRegex(w);for(;e;){const N=e.split(`
`,1)[0];let G;if(h=N,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),G=h):G=h.replace(this.rules.other.tabCharGlobal,"    "),C.test(h)||A.test(h)||O.test(h)||v.test(h)||S.test(h))break;if(G.search(this.rules.other.nonSpaceChar)>=w||!h.trim())c+=`
`+G.slice(w);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(d)||A.test(d)||S.test(d))break;c+=`
`+h}!m&&!h.trim()&&(m=!0),u+=N+`
`,e=e.substring(N.length+1),d=G.slice(w)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0));let T=null,P;this.options.gfm&&(T=this.rules.other.listIsTask.exec(c),T&&(P=T[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!T,checked:P,loose:!1,text:c,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let a=0;a<s.items.length;a++)if(this.lexer.state.top=!1,s.items[a].tokens=this.lexer.blockTokens(s.items[a].text,[]),!s.loose){const u=s.items[a].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));s.loose=c}if(s.loose)for(let a=0;a<s.items.length;a++)s.items[a].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){var o;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=ao(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of s)i.rows.push(ao(l,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=An(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Wh(t[2],"()");if(i===-2)return;if(i>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),co(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return co(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let o,l,a=i,u=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(r=c.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=[...o].length,r[3]||r[4]){a+=l;continue}else if((r[5]||r[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+u);const d=[...r[0]][0].length,h=e.slice(0,i+r.index+d+l);if(Math.min(i,l)%2){const w=h.slice(1,-1);return{type:"em",raw:h,text:w,tokens:this.lexer.inlineTokens(w)}}const m=h.slice(2,-2);return{type:"strong",raw:h,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Tt=class _s{constructor(t){me(this,"tokens");me(this,"options");me(this,"state");me(this,"tokenizer");me(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||rn,this.options.tokenizer=this.options.tokenizer||new yr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Ne,block:nr.normal,inline:Sn.normal};this.options.pedantic?(n.block=nr.pedantic,n.inline=Sn.pedantic):this.options.gfm&&(n.block=nr.gfm,this.options.breaks?n.inline=Sn.breaks:n.inline=Sn.gfm),this.tokenizer.rules=n}static get rules(){return{block:nr,inline:Sn}}static lex(t,n){return new _s(n).lex(t)}static lexInline(t,n){return new _s(n).inlineTokens(t)}lex(t){t=t.replace(Ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var s,i,o;for(this.options.pedantic&&(t=t.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));t;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let a=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,a,u;let r=t,s=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let c;if((a=(l=this.options.extensions)==null?void 0:l.inline)!=null&&a.some(h=>(c=h.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const h=n.at(-1);c.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=c.raw,h.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,r,o)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let h=1/0;const m=t.slice(1);let w;this.options.extensions.startInline.forEach(T=>{w=T.call({lexer:this},m),typeof w=="number"&&w>=0&&(h=Math.min(h,w))}),h<1/0&&h>=0&&(d=t.substring(0,h+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),i=!0;const h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=c.raw,h.text+=c.text):n.push(c);continue}if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},kr=class{constructor(e){me(this,"options");me(this,"parser");this.options=e||rn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const r=(i=(t||"").match(Ne.notSpaceStart))==null?void 0:i[0],s=e.replace(Ne.endingNewline,"")+`
`;return r?'<pre><code class="language-'+at(r)+'">'+(n?s:at(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:at(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let o=0;o<e.items.length;o++){const l=e.items[o];r+=this.listitem(l)}const s=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+at(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let r="";for(let s=0;s<e.rows.length;s++){const i=e.rows[s];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),s=lo(e);if(s===null)return r;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+at(t)+'"'),i+=">"+r+"</a>",i}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=lo(e);if(s===null)return at(n);e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${at(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}},Ys=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Rt=class ys{constructor(t){me(this,"options");me(this,"renderer");me(this,"textRenderer");this.options=t||rn,this.options.renderer=this.options.renderer||new kr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ys}static parse(t,n){return new ys(n).parse(t)}static parseInline(t,n){return new ys(n).parseInline(t)}parse(t,n=!0){var s,i;let r="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=l,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=c||"";continue}}const a=l;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],c+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(t,n=this.renderer){var s,i;let r="";for(let o=0;o<t.length;o++){const l=t[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}const a=l;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},ts,cr=(ts=class{constructor(e){me(this,"options");me(this,"block");this.options=e||rn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Tt.lex:Tt.lexInline}provideParser(){return this.block?Rt.parse:Rt.parseInline}},me(ts,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ts),Fh=class{constructor(...e){me(this,"defaults",Us());me(this,"options",this.setOptions);me(this,"parse",this.parseMarkdown(!0));me(this,"parseInline",this.parseMarkdown(!1));me(this,"Parser",Rt);me(this,"Renderer",kr);me(this,"TextRenderer",Ys);me(this,"Lexer",Tt);me(this,"Tokenizer",yr);me(this,"Hooks",cr);this.use(...e)}walkTokens(e,t){var r,s;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const o=i;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const a of l)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const a=o[l].flat(1/0);n=n.concat(this.walkTokens(a,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=t.renderers[s.name];i?t.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[s.level];i?i.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){const s=this.defaults.renderer||new kr(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,l=n.renderer[o],a=s[o];s[o]=(...u)=>{let c=l.apply(s,u);return c===!1&&(c=a.apply(s,u)),c||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new yr(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,l=n.tokenizer[o],a=s[o];s[o]=(...u)=>{let c=l.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new cr;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,l=n.hooks[o],a=s[o];cr.passThroughHooks.has(i)?s[o]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(d=>a.call(s,d));const c=l.call(s,u);return a.call(s,c)}:s[o]=(...u)=>{let c=l.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Tt.lex(e,t??this.defaults)}parser(e,t){return Rt.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const s={...r},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const l=i.hooks?i.hooks.provideLexer():e?Tt.lex:Tt.lexInline,a=i.hooks?i.hooks.provideParser():e?Rt.parse:Rt.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},en=new Fh;function te(e,t){return en.parse(e,t)}te.options=te.setOptions=function(e){return en.setOptions(e),te.defaults=en.defaults,Jl(te.defaults),te};te.getDefaults=Us;te.defaults=rn;te.use=function(...e){return en.use(...e),te.defaults=en.defaults,Jl(te.defaults),te};te.walkTokens=function(e,t){return en.walkTokens(e,t)};te.parseInline=en.parseInline;te.Parser=Rt;te.parser=Rt.parse;te.Renderer=kr;te.TextRenderer=Ys;te.Lexer=Tt;te.lexer=Tt.lex;te.Tokenizer=yr;te.Hooks=cr;te.parse=te;te.options;te.setOptions;te.use;te.walkTokens;te.parseInline;Rt.parse;Tt.lex;const jh=Object.fromEntries(dn.map(e=>[e.path,e.slug])),zh=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),Uh=(e,t)=>{const n=e.split("/");n.pop();const r=t.split("/");for(const s of r)if(!(!s||s===".")){if(s===".."){n.pop();continue}n.push(s)}return zh(n.join("/"))},Vh=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",aa=()=>{const e=new Map;return t=>{const n=Vh(t),r=e.get(n)||0;return e.set(n,r+1),r===0?n:`${n}-${r+1}`}},qh=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`/docs/${n}/?section=${encodeURIComponent(e.slice(1))}`;const[r,s]=e.split("#"),i=r?Uh(t,r):t;if(i.endsWith(".md")){const o=jh[i];if(o)return`/docs/${o}/${s?`?section=${encodeURIComponent(s)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};te.setOptions({gfm:!0,breaks:!0});const Gh=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(r,s,i)=>{const o=qh(i,t,n);return`[${s}](${o})`}),Kh=e=>{const t=te.lexer(String(e||"")),n=aa();return t.filter(r=>r.type==="heading"&&r.depth>=2&&r.depth<=4).map(r=>({depth:r.depth,text:r.text,id:n(r.text)}))},Qh=(e,t,n)=>{const r=new te.Renderer,s=aa();r.link=({href:o,title:l,tokens:a})=>{const u=te.Parser.parseInline(a),c=o||"",d=/^https?:\/\//i.test(c),h=l?` title="${l}"`:"";return`<a href="${c}"${h}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},r.image=({href:o,title:l,text:a})=>{const u=l?` title="${l}"`:"";return`<img src="${o}" alt="${a||""}"${u} />`},r.heading=({tokens:o,depth:l,text:a})=>{const u=s(a),c=te.Parser.parseInline(o);return`<h${l} id="${u}" data-doc-heading="${u}">${c}</h${l}>`};const i=Gh(e,t,n);return te.parse(i,{renderer:r})},Zh={key:0,class:"docs-article-shell"},Jh={class:"doc-breadcrumb"},Yh={class:"doc-header surface-card"},Xh={class:"card-label"},eg={class:"doc-meta"},tg=["innerHTML"],ng={class:"doc-footer surface-card"},rg=["onClick"],sg={key:2,class:"docs-article-shell"},ig={class:"empty-state"},og={__name:"DocArticlePage",setup(e){const t=Wl(),n=Vf(),r=Ae(""),s=Ae(null),i=Ae(null),o=ye(()=>Zl[t.params.slug]),l=ye(()=>o.value?ih[o.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),a=ye(()=>Kh(l.value)),u=ye(()=>o.value?Qh(l.value,o.value.path,o.value.slug):""),c=ye(()=>dn.findIndex(O=>{var N;return O.slug===((N=o.value)==null?void 0:N.slug)})),d=ye(()=>c.value>0?dn[c.value-1]:null),h=ye(()=>c.value>=0&&c.value<dn.length-1?dn[c.value+1]:null),m=(O,N,G)=>{if(!O)return;const ne=O.querySelector(N);if(!ne)return;const j=O.querySelector(G),Y=((j==null?void 0:j.offsetHeight)||0)+14,le=ne.offsetTop,H=le+ne.offsetHeight,re=O.scrollTop+Y,Te=O.scrollTop+O.clientHeight-12;le<re?O.scrollTop=Math.max(0,le-Y):H>Te&&(O.scrollTop=H-O.clientHeight+12)},w=()=>{m(s.value,".docs-nav-link.active",".docs-sidebar-head"),m(i.value,".docs-outline-link.active",".docs-outline-head")},T=()=>{const O=a.value.find(N=>{const G=document.getElementById(N.id);if(!G)return!1;const ne=G.getBoundingClientRect();return ne.top>=0&&ne.top<=180});O&&r.value!==O.id&&(r.value=O.id,w())},P=O=>{window.innerWidth<=920||Math.abs(O.deltaY)<Math.abs(O.deltaX)||(O.preventDefault(),window.scrollBy({top:O.deltaY,behavior:"auto"}))},v=()=>{var O,N;(O=s.value)==null||O.addEventListener("wheel",P,{passive:!1}),(N=i.value)==null||N.addEventListener("wheel",P,{passive:!1})},S=()=>{var O,N;(O=s.value)==null||O.removeEventListener("wheel",P),(N=i.value)==null||N.removeEventListener("wheel",P)},C=async O=>{await Qt();const N=document.getElementById(O);N&&(r.value=O,N.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:O}}))},A=async()=>{var N;await Qt();const O=t.query.section?String(t.query.section):"";if(O){const G=document.getElementById(O);if(G){r.value=O,requestAnimationFrame(()=>{G.scrollIntoView({behavior:"smooth",block:"start"}),w()});return}}r.value=((N=a.value[0])==null?void 0:N.id)||"",requestAnimationFrame(w)};return nn(async()=>{window.addEventListener("scroll",T,{passive:!0}),await Qt(),v(),w()}),Ir(()=>{window.removeEventListener("scroll",T),S()}),Xt([u,()=>t.query.section,()=>t.params.slug],A,{immediate:!0}),Xt([()=>t.params.slug,()=>a.value.length],async()=>{S(),await Qt(),v(),w()}),(O,N)=>{const G=ht("router-link");return I(),L("div",{class:qe(["page-shell container docs-layout-page",{"has-outline":a.value.length}])},[f("aside",{ref_key:"sidebarRef",ref:s,class:"docs-sidebar surface-card"},[N[0]||(N[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(I(!0),L(oe,null,Ce(ge(vr),ne=>(I(),L("div",{key:ne.key,class:"docs-nav-group"},[f("h3",null,B(ne.title),1),(I(!0),L(oe,null,Ce(ne.items,j=>{var Y;return I(),fn(G,{key:j.slug,to:`/docs/${j.slug}`,class:qe(["docs-nav-link",{active:((Y=o.value)==null?void 0:Y.slug)===j.slug}])},{default:J(()=>[f("span",null,B(j.title),1),f("small",null,B(j.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))],512),o.value?(I(),L("section",Zh,[f("div",Jh,[q(G,{to:"/docs"},{default:J(()=>[...N[1]||(N[1]=[se("文档首页",-1)])]),_:1}),N[2]||(N[2]=f("span",null,"/",-1)),f("span",null,B(o.value.groupTitle),1)]),f("header",Yh,[f("div",null,[f("span",Xh,B(o.value.tag),1),f("h1",null,B(o.value.title),1),f("p",null,B(o.value.description),1)]),f("div",eg,[f("span",null,B(o.value.groupTitle),1),f("span",null,B(o.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:u.value},null,8,tg),f("footer",ng,[d.value?(I(),fn(G,{key:0,class:"doc-pager",to:`/docs/${d.value.slug}`},{default:J(()=>[N[3]||(N[3]=f("small",null,"上一篇",-1)),f("strong",null,B(d.value.title),1)]),_:1},8,["to"])):(I(),fn(G,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:J(()=>[...N[4]||(N[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),h.value?(I(),fn(G,{key:2,class:"doc-pager align-right",to:`/docs/${h.value.slug}`},{default:J(()=>[N[5]||(N[5]=f("small",null,"下一篇",-1)),f("strong",null,B(h.value.title),1)]),_:1},8,["to"])):Je("",!0)])])):Je("",!0),o.value&&a.value.length?(I(),L("aside",{key:1,ref_key:"outlineRef",ref:i,class:"docs-outline surface-card"},[N[6]||(N[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(I(!0),L(oe,null,Ce(a.value,ne=>(I(),L("button",{key:ne.id,class:qe(["docs-outline-link",[`depth-${ne.depth}`,{active:r.value===ne.id}]]),onClick:j=>C(ne.id)},B(ne.text),11,rg))),128))],512)):o.value?Je("",!0):(I(),L("section",sg,[f("div",ig,[N[8]||(N[8]=f("strong",null,"没有找到对应文档。",-1)),N[9]||(N[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),q(G,{class:"button primary",to:"/docs"},{default:J(()=>[...N[7]||(N[7]=[se("返回文档首页",-1)])]),_:1})])]))],2)}}},lg={class:"page-shell container"},ag={class:"page-hero page-hero-grid"},cg={class:"page-hero-main"},ug={class:"hero-actions"},fg={class:"roadmap-grid"},dg={class:"roadmap-head"},pg={class:"card-label"},hg={class:"roadmap-list"},gg={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,r)=>{const s=ht("router-link");return I(),L("div",lg,[f("section",ag,[f("div",cg,[r[2]||(r[2]=f("span",{class:"eyebrow eyebrow--light"},"ROADMAP",-1)),r[3]||(r[3]=f("h1",null,"TreeCore 路线图",-1)),r[4]||(r[4]=f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ",-1)),f("div",ug,[q(s,{class:"button primary",to:"/changelog"},{default:J(()=>[...r[0]||(r[0]=[se("查看更新日志",-1)])]),_:1}),q(s,{class:"button secondary",to:"/downloads"},{default:J(()=>[...r[1]||(r[1]=[se("查看下载页",-1)])]),_:1})])]),r[5]||(r[5]=f("div",{class:"page-hero-card"},[f("strong",null,"阶段视图"),f("ul",null,[f("li",null,"当前阶段：已经落地的能力"),f("li",null,"下一阶段：正在排期的重点"),f("li",null,"后续方向：长期演进路线")])],-1))]),f("section",fg,[(I(),L(oe,null,Ce(t,i=>f("article",{class:"roadmap-column surface-card",key:i.title},[f("div",dg,[f("span",pg,B(i.tag),1),f("h2",null,B(i.title),1),f("p",null,B(i.description),1)]),f("div",hg,[(I(!0),L(oe,null,Ce(i.items,o=>(I(),L("div",{class:"roadmap-item",key:o.title},[f("div",{class:qe(["roadmap-state",i.stateClass])},B(i.stateLabel),3),f("h3",null,B(o.title),1),f("p",null,B(o.description),1)]))),128))])])),64))]),r[6]||(r[6]=vn('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))])}}},mg={class:"page-shell container"},bg={class:"page-hero page-hero-grid"},vg={class:"page-hero-main"},_g={class:"hero-actions"},yg={class:"stack-section surface-card changelog-toolbar"},kg={class:"release-filter-row"},wg={class:"filter-chip-group"},xg=["onClick"],Cg={key:0,class:"stack-section"},Tg={key:1,class:"stack-section changelog-timeline"},Rg={class:"timeline-card surface-card"},Sg={class:"release-head"},Ag={class:"release-date"},Eg={class:"release-tag"},Pg={key:0,class:"bullet-list compact-list"},Ig={key:1,class:"release-body"},$g={class:"release-actions"},Og=["href"],Mg={class:"muted"},Lg={key:2,class:"stack-section"},Ng={__name:"ChangelogPage",setup(e){const t=Ae(!0),n=Ae([]),r=Ae("all"),s=Ae(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],o=ye(()=>{const l=s.value.toLowerCase();return Ql(n.value).filter(a=>{const u=Bt(a);return r.value!=="all"&&u!==r.value?!1:l?[a.name,a.tag_name,Kn(a.body)].filter(Boolean).join(" ").toLowerCase().includes(l):!0})});return nn(async()=>{const l=await Gl();n.value=l.data,t.value=!1}),(l,a)=>{const u=ht("router-link");return I(),L("div",mg,[f("section",bg,[f("div",vg,[a[3]||(a[3]=f("span",{class:"eyebrow eyebrow--light"},"CHANGELOG",-1)),a[4]||(a[4]=f("h1",null,"更新日志",-1)),a[5]||(a[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",_g,[a[2]||(a[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),q(u,{class:"button secondary",to:"/downloads"},{default:J(()=>[...a[1]||(a[1]=[se("查看下载页",-1)])]),_:1})])]),a[6]||(a[6]=f("div",{class:"page-hero-card"},[f("strong",null,"时间线视图"),f("ul",null,[f("li",null,"按版本类型筛选"),f("li",null,"按关键词检索更新内容"),f("li",null,"直接跳转公开发布页")])],-1))]),f("section",yg,[a[7]||(a[7]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",kg,[f("div",wg,[(I(),L(oe,null,Ce(i,c=>f("button",{key:c.value,class:qe(["filter-chip",{active:r.value===c.value}]),onClick:d=>r.value=c.value},B(c.label),11,xg)),64))]),Ns(f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Fs,s.value,void 0,{trim:!0}]])])]),t.value?(I(),L("section",Cg,[...a[8]||(a[8]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):o.value.length?(I(),L("section",Tg,[(I(!0),L(oe,null,Ce(o.value,c=>(I(),L("article",{class:"timeline-item",key:c.id||c.tag_name},[a[9]||(a[9]=f("div",{class:"timeline-dot"},null,-1)),f("div",Rg,[f("div",Sg,[f("span",{class:qe(["release-badge",{alt:ge(Bt)(c)==="preview"}])},B(ge(Kl)(ge(Bt)(c))),3),f("span",Ag,B(ge(ar)(c.published_at)),1)]),f("h3",null,B(c.name||c.tag_name),1),f("p",Eg,B(c.tag_name),1),ge(Dt)(c.body,5).length?(I(),L("ul",Pg,[(I(!0),L(oe,null,Ce(ge(Dt)(c.body,5),d=>(I(),L("li",{key:d},B(d),1))),128))])):(I(),L("p",Ig,B(ge(Kn)(c.body)||"暂无发布说明。"),1)),f("div",$g,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Og),f("span",Mg,B((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(I(),L("section",Lg,[...a[10]||(a[10]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Dg={class:"page-shell container"},Bg={class:"stack-section"},Wg={class:"section-head left"},Hg={key:0,class:"contributor-grid"},Fg=["href"],jg=["src","alt"],zg={key:1,class:"empty-state"},Ug={__name:"CommunityPage",setup(e){const t=Ae([]),n=Ae("empty"),r=ye(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":n.value==="fallback"?"当前显示的是构建时生成的静态贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return nn(async()=>{const s=await Dd();t.value=s.data,n.value=s.source}),(s,i)=>(I(),L("div",Dg,[i[2]||(i[2]=vn('<section class="page-hero page-hero-grid"><div class="page-hero-main"><span class="eyebrow eyebrow--light">TEAM &amp; SUPPORT</span><h1>团队、社区与支持</h1><p> 如果你想反馈问题、参与讨论、查看贡献者或者先看常见问题，这一页就是对外的统一入口。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></div><div class="page-hero-card"><strong>支持入口</strong><ul><li>Issues / Discussions</li><li>QQ群即时交流</li><li>公开贡献者展示</li><li>FAQ 常见问题</li></ul></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",Bg,[f("div",Wg,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,B(r.value),1)]),t.value.length?(I(),L("div",Hg,[(I(!0),L(oe,null,Ce(t.value,o=>(I(),L("a",{key:o.login,class:"contributor-card surface-card",href:o.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:o.avatar_url,alt:o.login,loading:"lazy",decoding:"async"},null,8,jg),f("strong",null,B(o.login),1),f("small",null,B(o.contributions)+" 次公开提交",1)],8,Fg))),128))])):(I(),L("div",zg,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=vn('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},Vg="https://treemc-cloud.github.io",qg=`${Vg}/`,Gg="TreeCore 官方网站",_t="TreeCore,TreeMC,我的世界核心,Minecraft 服务端核心,Minecraft server core,Paper,Folia,Paper 核心,Folia 核心,高性能 Minecraft,Web 管理面板",Kg="TreeCore 官方网站：我的世界 / Minecraft 服务端核心，面向 Paper、Folia、TreeMC 与高性能服务器场景，提供 Web 管理、诊断、资源包链路与技术文档。",kt={"/":{title:"TreeCore | 我的世界 / Minecraft 服务端核心",description:"TreeCore 官方网站：我的世界 / Minecraft 服务端核心，面向 Paper、Folia、TreeMC 与高性能服务器场景，提供 Web 管理、诊断、资源包链路与技术文档。",keywords:`${_t},TreeCore 官网,TreeMC 官网`},"/features":{title:"TreeCore 核心能力 | Minecraft / Paper / Folia",description:"查看 TreeCore 当前对外可用的核心能力：Minecraft 服务端性能优化、Paper / Folia 相关生态、Web 面板、内容链路与运维工具。",keywords:`${_t},Minecraft 性能优化,Paper 优化,Folia 生态`},"/downloads":{title:"TreeCore 下载 | Minecraft / Paper / Folia 构建",description:"查看 TreeCore 公开下载入口、构建发布、版本摘要与获取方式。",keywords:`${_t},TreeCore 下载,TreeMC 下载,Paper 构建,Folia 构建`},"/docs":{title:"TreeCore 技术文档 | Minecraft / Paper / Folia",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面，覆盖部署、配置、资源包、世界管理、Paper / Folia 相关内容。",keywords:`${_t},TreeCore 文档,TreeMC 文档,Paper 文档,Folia 文档`},"/roadmap":{title:"TreeCore 路线图 | 服务端核心与 Web 管理",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。",keywords:`${_t},TreeCore 路线图,TreeMC 路线图`},"/changelog":{title:"TreeCore 更新日志 | 构建与版本变化",description:"查看 TreeCore 公共版本的更新日志与版本时间线。",keywords:`${_t},TreeCore 更新日志,TreeMC 更新日志`},"/team":{title:"TreeCore 团队与支持 | TreeMC 社区入口",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。",keywords:`${_t},TreeMC 社区,TreeCore QQ群,TreeMC 支持`},"/community":{title:"TreeCore 团队与支持 | TreeMC 社区入口",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。",keywords:`${_t},TreeMC 社区,TreeCore QQ群,TreeMC 支持`}},ca=(e="/")=>{if(!e)return"/";const t=String(e).trim();return t==="/"?"/":t.startsWith("/")?t:`/${t}`},Qg=(e="/")=>{const t=ca(e);return t==="/"?"/":`${t.replace(/\/+$/,"")}/`},En=(e="/")=>new URL(Qg(e).replace(/^\//,""),qg).toString(),Zg=(e="/",t=null)=>{if(t)return{title:`${t.title} | ${Gg}`,description:t.description||Kg,keywords:`${_t},${t.title},${t.groupTitle||""},TreeCore 文档,TreeMC 文档`,canonical:En(e),url:En(e)};const n=ca(e);return{...kt[n]||kt["/"],canonical:En(n==="/community"?"/team":n),url:En(n)}},Jg=[{path:"/",component:Cd,meta:kt["/"]},{path:"/features",component:Id,meta:kt["/features"]},{path:"/downloads",component:Ap,meta:kt["/downloads"]},{path:"/docs",component:Hp,meta:kt["/docs"]},{path:"/docs/:slug",component:og,meta:{title:"文档 | TreeCore 官方网站",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:gg,meta:kt["/roadmap"]},{path:"/changelog",component:Ng,meta:kt["/changelog"]},{path:"/team",alias:"/community",component:Ug,meta:kt["/team"]}],ua=Uf({history:wf("/"),routes:Jg,scrollBehavior(e,t,n){var r;return n||(e.path===t.path&&((r=e.query)!=null&&r.section)?!1:{top:0})}}),fa=Lu(sd),qt=(e,t)=>{let n=document.head.querySelector(e);n||(n=document.createElement("meta"),document.head.appendChild(n)),Object.entries(t).forEach(([r,s])=>n.setAttribute(r,s))};ua.afterEach(e=>{var s;const t=(s=e.params)!=null&&s.slug?Zl[e.params.slug]:null,n=Zg(e.path,t);document.title=n.title,qt('meta[name="description"]',{name:"description",content:n.description}),qt('meta[name="keywords"]',{name:"keywords",content:n.keywords}),qt('meta[property="og:title"]',{property:"og:title",content:n.title}),qt('meta[property="og:description"]',{property:"og:description",content:n.description}),qt('meta[property="og:url"]',{property:"og:url",content:n.url}),qt('meta[name="twitter:title"]',{name:"twitter:title",content:n.title}),qt('meta[name="twitter:description"]',{name:"twitter:description",content:n.description});const r=document.querySelector('link[rel="canonical"]');r&&r.setAttribute("href",n.canonical)});fa.use(ua);fa.mount("#app");

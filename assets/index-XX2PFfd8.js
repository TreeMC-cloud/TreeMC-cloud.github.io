var pl=Object.defineProperty;var dl=(e,t,n)=>t in e?pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var re=(e,t,n)=>dl(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ie={},Vt=[],Qe=()=>{},Ii=()=>!1,er=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zr=e=>e.startsWith("onUpdate:"),be=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,Z=(e,t)=>hl.call(e,t),W=Array.isArray,qt=e=>An(e)==="[object Map]",Oi=e=>An(e)==="[object Set]",Is=e=>An(e)==="[object Date]",j=e=>typeof e=="function",de=e=>typeof e=="string",Xe=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Mi=e=>(te(e)||j(e))&&j(e.then)&&j(e.catch),Ni=Object.prototype.toString,An=e=>Ni.call(e),gl=e=>An(e).slice(8,-1),$i=e=>An(e)==="[object Object]",Qr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-\w/g,De=tr(e=>e.replace(ml,t=>t.slice(1).toUpperCase())),bl=/\B([A-Z])/g,$t=tr(e=>e.replace(bl,"-$1").toLowerCase()),nr=tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),gr=tr(e=>e?`on${nr(e)}`:""),yt=(e,t)=>!Object.is(e,t),Dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Di=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Os;const rr=()=>Os||(Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?yl(r):Xr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||te(e))return e}const vl=/;(?![^(]*\))/g,_l=/:([^]+)/,kl=/\/\*[^]*?\*\//g;function yl(e){const t={};return e.replace(kl,"").split(vl).forEach(n=>{if(n){const r=n.split(_l);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function en(e){let t="";if(de(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=en(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const wl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xl=Kr(wl);function Li(e){return!!e||e===""}function Rl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=es(e[r],t[r]);return n}function es(e,t){if(e===t)return!0;let n=Is(e),r=Is(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Xe(e),r=Xe(t),n||r)return e===t;if(n=W(e),r=W(t),n||r)return n&&r?Rl(e,t):!1;if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const l in e){const o=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(o&&!a||!o&&a||!es(e[l],t[l]))return!1}}return String(e)===String(t)}const Bi=e=>!!(e&&e.__v_isRef===!0),se=e=>de(e)?e:e==null?"":W(e)||te(e)&&(e.toString===Ni||!j(e.toString))?Bi(e)?se(e.value):JSON.stringify(e,Wi,2):String(e),Wi=(e,t)=>Bi(t)?Wi(e,t.value):qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[mr(r,i)+" =>"]=s,n),{})}:Oi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>mr(n))}:Xe(t)?mr(t):te(t)&&!W(t)&&!$i(t)?String(t):t,mr=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Tl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sl(){return Ee}let ae;const br=new WeakSet;class Hi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,br.has(this)&&(br.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ms(this),Gi(this);const t=ae,n=Le;ae=this,Le=!0;try{return this.fn()}finally{zi(this),ae=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)rs(t);this.deps=this.depsTail=void 0,Ms(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?br.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pr(this)&&this.run()}get dirty(){return Pr(this)}}let ji=0,pn,dn;function Fi(e,t=!1){if(e.flags|=8,t){e.next=dn,dn=e;return}e.next=pn,pn=e}function ts(){ji++}function ns(){if(--ji>0)return;if(dn){let t=dn;for(dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Gi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zi(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),rs(r),Cl(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ui(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ui(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yn)||(e.globalVersion=yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pr(e))))return;e.flags|=2;const t=e.dep,n=ae,r=Le;ae=e,Le=!0;try{Gi(e);const s=e.fn(e._value);(t.version===0||yt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=n,Le=r,zi(e),e.flags&=-3}}function rs(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const Vi=[];function ut(){Vi.push(Le),Le=!1}function ft(){const e=Vi.pop();Le=e===void 0?!0:e}function Ms(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ae;ae=void 0;try{t()}finally{ae=n}}}let yn=0;class Al{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ss{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!Le||ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ae)n=this.activeLink=new Al(ae,this),ae.deps?(n.prevDep=ae.depsTail,ae.depsTail.nextDep=n,ae.depsTail=n):ae.deps=ae.depsTail=n,qi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ae.depsTail,n.nextDep=void 0,ae.depsTail.nextDep=n,ae.depsTail=n,ae.deps===n&&(ae.deps=r)}return n}trigger(t){this.version++,yn++,this.notify(t)}notify(t){ts();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ns()}}}function qi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)qi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ir=new WeakMap,Et=Symbol(""),Or=Symbol(""),wn=Symbol("");function ve(e,t,n){if(Le&&ae){let r=Ir.get(e);r||Ir.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ss),s.map=r,s.key=n),s.track()}}function ot(e,t,n,r,s,i){const l=Ir.get(e);if(!l){yn++;return}const o=a=>{a&&a.trigger()};if(ts(),t==="clear")l.forEach(o);else{const a=W(e),u=a&&Qr(n);if(a&&n==="length"){const c=Number(r);l.forEach((p,d)=>{(d==="length"||d===wn||!Xe(d)&&d>=c)&&o(p)})}else switch((n!==void 0||l.has(void 0))&&o(l.get(n)),u&&o(l.get(wn)),t){case"add":a?u&&o(l.get("length")):(o(l.get(Et)),qt(e)&&o(l.get(Or)));break;case"delete":a||(o(l.get(Et)),qt(e)&&o(l.get(Or)));break;case"set":qt(e)&&o(l.get(Et));break}}ns()}function jt(e){const t=K(e);return t===e?t:(ve(t,"iterate",wn),$e(e)?t:t.map(Be))}function sr(e){return ve(e=K(e),"iterate",wn),e}function vt(e,t){return pt(e)?Jt(Pt(e)?Be(t):t):Be(t)}const El={__proto__:null,[Symbol.iterator](){return vr(this,Symbol.iterator,e=>vt(this,e))},concat(...e){return jt(this).concat(...e.map(t=>W(t)?jt(t):t))},entries(){return vr(this,"entries",e=>(e[1]=vt(this,e[1]),e))},every(e,t){return nt(this,"every",e,t,void 0,arguments)},filter(e,t){return nt(this,"filter",e,t,n=>n.map(r=>vt(this,r)),arguments)},find(e,t){return nt(this,"find",e,t,n=>vt(this,n),arguments)},findIndex(e,t){return nt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return nt(this,"findLast",e,t,n=>vt(this,n),arguments)},findLastIndex(e,t){return nt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return nt(this,"forEach",e,t,void 0,arguments)},includes(...e){return _r(this,"includes",e)},indexOf(...e){return _r(this,"indexOf",e)},join(e){return jt(this).join(e)},lastIndexOf(...e){return _r(this,"lastIndexOf",e)},map(e,t){return nt(this,"map",e,t,void 0,arguments)},pop(){return rn(this,"pop")},push(...e){return rn(this,"push",e)},reduce(e,...t){return Ns(this,"reduce",e,t)},reduceRight(e,...t){return Ns(this,"reduceRight",e,t)},shift(){return rn(this,"shift")},some(e,t){return nt(this,"some",e,t,void 0,arguments)},splice(...e){return rn(this,"splice",e)},toReversed(){return jt(this).toReversed()},toSorted(e){return jt(this).toSorted(e)},toSpliced(...e){return jt(this).toSpliced(...e)},unshift(...e){return rn(this,"unshift",e)},values(){return vr(this,"values",e=>vt(this,e))}};function vr(e,t,n){const r=sr(e),s=r[t]();return r!==e&&!$e(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Pl=Array.prototype;function nt(e,t,n,r,s,i){const l=sr(e),o=l!==e&&!$e(e),a=l[t];if(a!==Pl[t]){const p=a.apply(e,i);return o?Be(p):p}let u=n;l!==e&&(o?u=function(p,d){return n.call(this,vt(e,p),d,e)}:n.length>2&&(u=function(p,d){return n.call(this,p,d,e)}));const c=a.call(l,u,r);return o&&s?s(c):c}function Ns(e,t,n,r){const s=sr(e);let i=n;return s!==e&&($e(e)?n.length>3&&(i=function(l,o,a){return n.call(this,l,o,a,e)}):i=function(l,o,a){return n.call(this,l,vt(e,o),a,e)}),s[t](i,...r)}function _r(e,t,n){const r=K(e);ve(r,"iterate",wn);const s=r[t](...n);return(s===-1||s===!1)&&ls(n[0])?(n[0]=K(n[0]),r[t](...n)):s}function rn(e,t,n=[]){ut(),ts();const r=K(e)[t].apply(e,n);return ns(),ft(),r}const Il=Kr("__proto__,__v_isRef,__isVue"),Ki=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function Ol(e){Xe(e)||(e=String(e));const t=K(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Zi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Fl:Xi:i?Yi:Qi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=W(t);if(!s){let a;if(l&&(a=El[n]))return a;if(n==="hasOwnProperty")return Ol}const o=Reflect.get(t,n,ke(t)?t:r);if((Xe(n)?Ki.has(n):Il(n))||(s||ve(t,"get",n),i))return o;if(ke(o)){const a=l&&Qr(n)?o:o.value;return s&&te(a)?Nr(a):a}return te(o)?s?Nr(o):ir(o):o}}class Ji extends Zi{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const l=W(t)&&Qr(n);if(!this._isShallow){const u=pt(i);if(!$e(r)&&!pt(r)&&(i=K(i),r=K(r)),!l&&ke(i)&&!ke(r))return u||(i.value=r),!0}const o=l?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,ke(t)?t:s);return t===K(s)&&(o?yt(r,i)&&ot(t,"set",n,r):ot(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ot(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Xe(n)||!Ki.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",W(t)?"length":Et),Reflect.ownKeys(t)}}class Ml extends Zi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Nl=new Ji,$l=new Ml,Dl=new Ji(!0);const Mr=e=>e,On=e=>Reflect.getPrototypeOf(e);function Ll(e,t,n){return function(...r){const s=this.__v_raw,i=K(s),l=qt(i),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,u=s[e](...r),c=n?Mr:t?Jt:Be;return!t&&ve(i,"iterate",a?Or:Et),be(Object.create(u),{next(){const{value:p,done:d}=u.next();return d?{value:p,done:d}:{value:o?[c(p[0]),c(p[1])]:c(p),done:d}}})}}function Mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bl(e,t){const n={get(s){const i=this.__v_raw,l=K(i),o=K(s);e||(yt(s,o)&&ve(l,"get",s),ve(l,"get",o));const{has:a}=On(l),u=t?Mr:e?Jt:Be;if(a.call(l,s))return u(i.get(s));if(a.call(l,o))return u(i.get(o));i!==l&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ve(K(s),"iterate",Et),s.size},has(s){const i=this.__v_raw,l=K(i),o=K(s);return e||(yt(s,o)&&ve(l,"has",s),ve(l,"has",o)),s===o?i.has(s):i.has(s)||i.has(o)},forEach(s,i){const l=this,o=l.__v_raw,a=K(o),u=t?Mr:e?Jt:Be;return!e&&ve(a,"iterate",Et),o.forEach((c,p)=>s.call(i,u(c),u(p),l))}};return be(n,e?{add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear")}:{add(s){!t&&!$e(s)&&!pt(s)&&(s=K(s));const i=K(this);return On(i).has.call(i,s)||(i.add(s),ot(i,"add",s,s)),this},set(s,i){!t&&!$e(i)&&!pt(i)&&(i=K(i));const l=K(this),{has:o,get:a}=On(l);let u=o.call(l,s);u||(s=K(s),u=o.call(l,s));const c=a.call(l,s);return l.set(s,i),u?yt(i,c)&&ot(l,"set",s,i):ot(l,"add",s,i),this},delete(s){const i=K(this),{has:l,get:o}=On(i);let a=l.call(i,s);a||(s=K(s),a=l.call(i,s)),o&&o.call(i,s);const u=i.delete(s);return a&&ot(i,"delete",s,void 0),u},clear(){const s=K(this),i=s.size!==0,l=s.clear();return i&&ot(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ll(s,e,t)}),n}function is(e,t){const n=Bl(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Wl={get:is(!1,!1)},Hl={get:is(!1,!0)},jl={get:is(!0,!1)};const Qi=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,Fl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(gl(e))}function ir(e){return pt(e)?e:os(e,!1,Nl,Wl,Qi)}function eo(e){return os(e,!1,Dl,Hl,Yi)}function Nr(e){return os(e,!0,$l,jl,Xi)}function os(e,t,n,r,s){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=zl(e);if(i===0)return e;const l=s.get(e);if(l)return l;const o=new Proxy(e,i===2?r:n);return s.set(e,o),o}function Pt(e){return pt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function ls(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Ul(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Di(e,"__v_skip",!0),e}const Be=e=>te(e)?ir(e):e,Jt=e=>te(e)?Nr(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function It(e){return to(e,!1)}function Vl(e){return to(e,!0)}function to(e,t){return ke(e)?e:new ql(e,t)}class ql{constructor(t,n){this.dep=new ss,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:K(t),this._value=n?t:Be(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||$e(t)||pt(t);t=r?t:K(t),yt(t,n)&&(this._rawValue=t,this._value=r?t:Be(t),this.dep.trigger())}}function Ot(e){return ke(e)?e.value:e}const Kl={get:(e,t,n)=>t==="__v_raw"?e:Ot(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return Pt(e)?e:new Proxy(e,Kl)}class Zl{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ss(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return Fi(this,!0),!0}get value(){const t=this.dep.track();return Ui(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jl(e,t,n=!1){let r,s;return j(e)?r=e:(r=e.get,s=e.set),new Zl(r,s,n)}const Nn={},Fn=new WeakMap;let Ct;function Ql(e,t=!1,n=Ct){if(n){let r=Fn.get(n);r||Fn.set(n,r=[]),r.push(e)}}function Yl(e,t,n=ie){const{immediate:r,deep:s,once:i,scheduler:l,augmentJob:o,call:a}=n,u=O=>s?O:$e(O)||s===!1||s===0?lt(O,1):lt(O);let c,p,d,b,x=!1,R=!1;if(ke(e)?(p=()=>e.value,x=$e(e)):Pt(e)?(p=()=>u(e),x=!0):W(e)?(R=!0,x=e.some(O=>Pt(O)||$e(O)),p=()=>e.map(O=>{if(ke(O))return O.value;if(Pt(O))return u(O);if(j(O))return a?a(O,2):O()})):j(e)?t?p=a?()=>a(e,2):e:p=()=>{if(d){ut();try{d()}finally{ft()}}const O=Ct;Ct=c;try{return a?a(e,3,[b]):e(b)}finally{Ct=O}}:p=Qe,t&&s){const O=p,Y=s===!0?1/0:s;p=()=>lt(O(),Y)}const B=Sl(),D=()=>{c.stop(),B&&B.active&&Jr(B.effects,c)};if(i&&t){const O=t;t=(...Y)=>{O(...Y),D()}}let P=R?new Array(e.length).fill(Nn):Nn;const M=O=>{if(!(!(c.flags&1)||!c.dirty&&!O))if(t){const Y=c.run();if(s||x||(R?Y.some((pe,X)=>yt(pe,P[X])):yt(Y,P))){d&&d();const pe=Ct;Ct=c;try{const X=[Y,P===Nn?void 0:R&&P[0]===Nn?[]:P,b];P=Y,a?a(t,3,X):t(...X)}finally{Ct=pe}}}else c.run()};return o&&o(M),c=new Hi(p),c.scheduler=l?()=>l(M,!1):M,b=O=>Ql(O,!1,c),d=c.onStop=()=>{const O=Fn.get(c);if(O){if(a)a(O,4);else for(const Y of O)Y();Fn.delete(c)}},t?r?M(!0):P=c.run():l?l(M.bind(null,!0),!0):c.run(),D.pause=c.pause.bind(c),D.resume=c.resume.bind(c),D.stop=D,D}function lt(e,t=1/0,n){if(t<=0||!te(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ke(e))lt(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)lt(e[r],t,n);else if(Oi(e)||qt(e))e.forEach(r=>{lt(r,t,n)});else if($i(e)){for(const r in e)lt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&lt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function En(e,t,n,r){try{return r?e(...r):e()}catch(s){or(s,t,n)}}function et(e,t,n,r){if(j(e)){const s=En(e,t,n,r);return s&&Mi(s)&&s.catch(i=>{or(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(et(e[i],t,n,r));return s}}function or(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ie;if(t){let o=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,a,u)===!1)return}o=o.parent}if(i){ut(),En(i,null,10,[e,a,u]),ft();return}}Xl(e,n,s,r,l)}function Xl(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const xe=[];let Ze=-1;const Kt=[];let _t=null,Ft=0;const ro=Promise.resolve();let Gn=null;function so(e){const t=Gn||ro;return e?t.then(this?e.bind(this):e):t}function ea(e){let t=Ze+1,n=xe.length;for(;t<n;){const r=t+n>>>1,s=xe[r],i=xn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function as(e){if(!(e.flags&1)){const t=xn(e),n=xe[xe.length-1];!n||!(e.flags&2)&&t>=xn(n)?xe.push(e):xe.splice(ea(t),0,e),e.flags|=1,io()}}function io(){Gn||(Gn=ro.then(lo))}function ta(e){W(e)?Kt.push(...e):_t&&e.id===-1?_t.splice(Ft+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1),io()}function $s(e,t,n=Ze+1){for(;n<xe.length;n++){const r=xe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;xe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function oo(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,r)=>xn(n)-xn(r));if(Kt.length=0,_t){_t.push(...t);return}for(_t=t,Ft=0;Ft<_t.length;Ft++){const n=_t[Ft];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_t=null,Ft=0}}const xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function lo(e){try{for(Ze=0;Ze<xe.length;Ze++){const t=xe[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),En(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<xe.length;Ze++){const t=xe[Ze];t&&(t.flags&=-2)}Ze=-1,xe.length=0,oo(),Gn=null,(xe.length||Kt.length)&&lo()}}let Oe=null,ao=null;function zn(e){const t=Oe;return Oe=e,ao=e&&e.type.__scopeId||null,t}function oe(e,t=Oe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&qn(-1);const i=zn(t);let l;try{l=e(...s)}finally{zn(i),r._d&&qn(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function na(e,t){if(Oe===null)return e;const n=ur(Oe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,l,o,a=ie]=t[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&lt(l),r.push({dir:i,instance:n,value:l,oldValue:void 0,arg:o,modifiers:a}))}return e}function Tt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];i&&(o.oldValue=i[l].value);let a=o.dir[r];a&&(ut(),et(a,n,8,[e.el,o,e,t]),ft())}}function Ln(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=nc();if(r||Zt){let s=Zt?Zt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}const ra=Symbol.for("v-scx"),sa=()=>Ye(ra);function hn(e,t,n){return co(e,t,n)}function co(e,t,n=ie){const{immediate:r,deep:s,flush:i,once:l}=n,o=be({},n),a=t&&r||!t&&i!=="post";let u;if(Sn){if(i==="sync"){const b=sa();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=Qe,b.resume=Qe,b.pause=Qe,b}}const c=_e;o.call=(b,x,R)=>et(b,c,x,R);let p=!1;i==="post"?o.scheduler=b=>{Ae(b,c&&c.suspense)}:i!=="sync"&&(p=!0,o.scheduler=(b,x)=>{x?b():as(b)}),o.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const d=Yl(e,t,o);return Sn&&(u?u.push(d):a&&d()),d}function ia(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?uo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const l=Pn(this),o=co(s,i.bind(r),n);return l(),o}function uo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const oa=Symbol("_vte"),la=e=>e.__isTeleport,aa=Symbol("_leaveCb");function cs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,cs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fo(e,t){return j(e)?be({name:e.name},t,{setup:e}):e}function po(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ds(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Un=new WeakMap;function gn(e,t,n,r,s=!1){if(W(e)){e.forEach((R,B)=>gn(R,t&&(W(t)?t[B]:t),n,r,s));return}if(mn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ur(r.component):r.el,l=s?null:i,{i:o,r:a}=e,u=t&&t.r,c=o.refs===ie?o.refs={}:o.refs,p=o.setupState,d=K(p),b=p===ie?Ii:R=>Ds(c,R)?!1:Z(d,R),x=(R,B)=>!(B&&Ds(c,B));if(u!=null&&u!==a){if(Ls(t),de(u))c[u]=null,b(u)&&(p[u]=null);else if(ke(u)){const R=t;x(u,R.k)&&(u.value=null),R.k&&(c[R.k]=null)}}if(j(a))En(a,o,12,[l,c]);else{const R=de(a),B=ke(a);if(R||B){const D=()=>{if(e.f){const P=R?b(a)?p[a]:c[a]:x()||!e.k?a.value:c[e.k];if(s)W(P)&&Jr(P,i);else if(W(P))P.includes(i)||P.push(i);else if(R)c[a]=[i],b(a)&&(p[a]=c[a]);else{const M=[i];x(a,e.k)&&(a.value=M),e.k&&(c[e.k]=M)}}else R?(c[a]=l,b(a)&&(p[a]=l)):B&&(x(a,e.k)&&(a.value=l),e.k&&(c[e.k]=l))};if(l){const P=()=>{D(),Un.delete(e)};P.id=-1,Un.set(e,P),Ae(P,n)}else Ls(e),D()}}}function Ls(e){const t=Un.get(e);t&&(t.flags|=8,Un.delete(e))}rr().requestIdleCallback;rr().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,ho=e=>e.type.__isKeepAlive;function ca(e,t){go(e,"a",t)}function ua(e,t){go(e,"da",t)}function go(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(lr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ho(s.parent.vnode)&&fa(r,t,n,s),s=s.parent}}function fa(e,t,n,r){const s=lr(t,e,r,!0);mo(()=>{Jr(r[t],s)},n)}function lr(e,t,n=_e,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{ut();const o=Pn(n),a=et(t,n,e,l);return o(),ft(),a});return r?s.unshift(i):s.push(i),i}}const dt=e=>(t,n=_e)=>{(!Sn||e==="sp")&&lr(e,(...r)=>t(...r),n)},pa=dt("bm"),us=dt("m"),da=dt("bu"),ha=dt("u"),ga=dt("bum"),mo=dt("um"),ma=dt("sp"),ba=dt("rtg"),va=dt("rtc");function _a(e,t=_e){lr("ec",e,t)}const ka="components";function Dt(e,t){return wa(ka,e,!0,t)||e}const ya=Symbol.for("v-ndc");function wa(e,t,n=!0,r=!1){const s=Oe||_e;if(s){const i=s.type;{const o=lc(i,!1);if(o&&(o===t||o===De(t)||o===nr(De(t))))return i}const l=Bs(s[e]||i[e],t)||Bs(s.appContext[e],t);return!l&&r?i:l}}function Bs(e,t){return e&&(e[t]||e[De(t)]||e[nr(De(t))])}function Rn(e,t,n,r){let s;const i=n,l=W(e);if(l||de(e)){const o=l&&Pt(e);let a=!1,u=!1;o&&(a=!$e(e),u=pt(e),e=sr(e)),s=new Array(e.length);for(let c=0,p=e.length;c<p;c++)s[c]=t(a?u?Jt(Be(e[c])):Be(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(te(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const c=o[a];s[a]=t(e[c],c,a,i)}}else s=[];return s}const $r=e=>e?Do(e)?ur(e):$r(e.parent):null,bn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>vo(e),$forceUpdate:e=>e.f||(e.f=()=>{as(e.update)}),$nextTick:e=>e.n||(e.n=so.bind(e.proxy)),$watch:e=>ia.bind(e)}),kr=(e,t)=>e!==ie&&!e.__isScriptSetup&&Z(e,t),xa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:l,type:o,appContext:a}=e;if(t[0]!=="$"){const d=l[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(kr(r,t))return l[t]=1,r[t];if(s!==ie&&Z(s,t))return l[t]=2,s[t];if(Z(i,t))return l[t]=3,i[t];if(n!==ie&&Z(n,t))return l[t]=4,n[t];Dr&&(l[t]=0)}}const u=bn[t];let c,p;if(u)return t==="$attrs"&&ve(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==ie&&Z(n,t))return l[t]=4,n[t];if(p=a.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return kr(s,t)?(s[t]=n,!0):r!==ie&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:l}},o){let a;return!!(n[o]||e!==ie&&o[0]!=="$"&&Z(e,o)||kr(t,o)||Z(i,o)||Z(r,o)||Z(bn,o)||Z(s.config.globalProperties,o)||(a=l.__cssModules)&&a[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ws(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dr=!0;function Ra(e){const t=vo(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&Hs(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:o,provide:a,inject:u,created:c,beforeMount:p,mounted:d,beforeUpdate:b,updated:x,activated:R,deactivated:B,beforeDestroy:D,beforeUnmount:P,destroyed:M,unmounted:O,render:Y,renderTracked:pe,renderTriggered:X,errorCaptured:He,serverPrefetch:ht,expose:je,inheritAttrs:gt,components:xt,directives:Fe,filters:tn}=t;if(u&&Ta(u,r,null),l)for(const ne in l){const V=l[ne];j(V)&&(r[ne]=V.bind(n))}if(s){const ne=s.call(n,n);te(ne)&&(e.data=ir(ne))}if(Dr=!0,i)for(const ne in i){const V=i[ne],tt=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):Qe,mt=!j(V)&&j(V.set)?V.set.bind(n):Qe,Ge=me({get:tt,set:mt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Te=>Ge.value=Te})}if(o)for(const ne in o)bo(o[ne],r,n,ne);if(a){const ne=j(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(V=>{Ln(V,ne[V])})}c&&Hs(c,e,"c");function ge(ne,V){W(V)?V.forEach(tt=>ne(tt.bind(n))):V&&ne(V.bind(n))}if(ge(pa,p),ge(us,d),ge(da,b),ge(ha,x),ge(ca,R),ge(ua,B),ge(_a,He),ge(va,pe),ge(ba,X),ge(ga,P),ge(mo,O),ge(ma,ht),W(je))if(je.length){const ne=e.exposed||(e.exposed={});je.forEach(V=>{Object.defineProperty(ne,V,{get:()=>n[V],set:tt=>n[V]=tt,enumerable:!0})})}else e.exposed||(e.exposed={});Y&&e.render===Qe&&(e.render=Y),gt!=null&&(e.inheritAttrs=gt),xt&&(e.components=xt),Fe&&(e.directives=Fe),ht&&po(e)}function Ta(e,t,n=Qe){W(e)&&(e=Lr(e));for(const r in e){const s=e[r];let i;te(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),ke(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function Hs(e,t,n){et(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bo(e,t,n,r){let s=r.includes(".")?uo(n,r):()=>n[r];if(de(e)){const i=t[e];j(i)&&hn(s,i)}else if(j(e))hn(s,e.bind(n));else if(te(e))if(W(e))e.forEach(i=>bo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&hn(s,i,e)}}function vo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,o=i.get(t);let a;return o?a=o:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(u=>Vn(a,u,l,!0)),Vn(a,t,l)),te(t)&&i.set(t,a),a}function Vn(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Vn(e,i,n,!0),s&&s.forEach(l=>Vn(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const o=Sa[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const Sa={data:js,props:Fs,emits:Fs,methods:cn,computed:cn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:cn,directives:cn,watch:Aa,provide:js,inject:Ca};function js(e,t){return t?e?function(){return be(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ca(e,t){return cn(Lr(e),Lr(t))}function Lr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?be(Object.create(null),e,t):t}function Fs(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:be(Object.create(null),Ws(e),Ws(t??{})):t}function Aa(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function _o(){return{app:null,config:{isNativeTag:Ii,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ea=0;function Pa(e,t){return function(r,s=null){j(r)||(r=be({},r)),s!=null&&!te(s)&&(s=null);const i=_o(),l=new WeakSet,o=[];let a=!1;const u=i.app={_uid:Ea++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cc,get config(){return i.config},set config(c){},use(c,...p){return l.has(c)||(c&&j(c.install)?(l.add(c),c.install(u,...p)):j(c)&&(l.add(c),c(u,...p))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,p){return p?(i.components[c]=p,u):i.components[c]},directive(c,p){return p?(i.directives[c]=p,u):i.directives[c]},mount(c,p,d){if(!a){const b=u._ceVNode||F(r,s);return b.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(b,c,d),a=!0,u._container=c,c.__vue_app__=u,ur(b.component)}},onUnmount(c){o.push(c)},unmount(){a&&(et(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,p){return i.provides[c]=p,u},runWithContext(c){const p=Zt;Zt=u;try{return c()}finally{Zt=p}}};return u}}let Zt=null;const Ia=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${$t(t)}Modifiers`];function Oa(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let s=n;const i=t.startsWith("update:"),l=i&&Ia(r,t.slice(7));l&&(l.trim&&(s=n.map(c=>de(c)?c.trim():c)),l.number&&(s=n.map(Yr)));let o,a=r[o=gr(t)]||r[o=gr(De(t))];!a&&i&&(a=r[o=gr($t(t))]),a&&et(a,e,6,s);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,et(u,e,6,s)}}const Ma=new WeakMap;function ko(e,t,n=!1){const r=n?Ma:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let l={},o=!1;if(!j(e)){const a=u=>{const c=ko(u,t,!0);c&&(o=!0,be(l,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!o?(te(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>l[a]=null):be(l,i),te(e)&&r.set(e,l),l)}function ar(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,$t(t))||Z(e,t))}function Gs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:l,attrs:o,emit:a,render:u,renderCache:c,props:p,data:d,setupState:b,ctx:x,inheritAttrs:R}=e,B=zn(e);let D,P;try{if(n.shapeFlag&4){const O=s||r,Y=O;D=Je(u.call(Y,O,c,p,b,d,x)),P=o}else{const O=t;D=Je(O.length>1?O(p,{attrs:o,slots:l,emit:a}):O(p,null)),P=t.props?o:Na(o)}}catch(O){vn.length=0,or(O,e,1),D=F(wt)}let M=D;if(P&&R!==!1){const O=Object.keys(P),{shapeFlag:Y}=M;O.length&&Y&7&&(i&&O.some(Zr)&&(P=$a(P,i)),M=Qt(M,P,!1,!0))}return n.dirs&&(M=Qt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&cs(M,n.transition),D=M,zn(B),D}const Na=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},$a=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Da(e,t,n){const{props:r,children:s,component:i}=e,{props:l,children:o,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?zs(r,l,u):!!l;if(a&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const d=c[p];if(yo(l,r,d)&&!ar(u,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===l?!1:r?l?zs(r,l,u):!0:!!l;return!1}function zs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(yo(t,e,i)&&!ar(n,i))return!0}return!1}function yo(e,t,n){const r=e[n],s=t[n];return n==="style"&&te(r)&&te(s)?!es(r,s):r!==s}function La({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const wo={},xo=()=>Object.create(wo),Ro=e=>Object.getPrototypeOf(e)===wo;function Ba(e,t,n,r=!1){const s={},i=xo();e.propsDefaults=Object.create(null),To(e,t,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=r?s:eo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Wa(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,o=K(s),[a]=e.propsOptions;let u=!1;if((r||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let d=c[p];if(ar(e.emitsOptions,d))continue;const b=t[d];if(a)if(Z(i,d))b!==i[d]&&(i[d]=b,u=!0);else{const x=De(d);s[x]=Br(a,o,x,b,e,!1)}else b!==i[d]&&(i[d]=b,u=!0)}}}else{To(e,t,s,i)&&(u=!0);let c;for(const p in o)(!t||!Z(t,p)&&((c=$t(p))===p||!Z(t,c)))&&(a?n&&(n[p]!==void 0||n[c]!==void 0)&&(s[p]=Br(a,o,p,void 0,e,!0)):delete s[p]);if(i!==o)for(const p in i)(!t||!Z(t,p))&&(delete i[p],u=!0)}u&&ot(e.attrs,"set","")}function To(e,t,n,r){const[s,i]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(fn(a))continue;const u=t[a];let c;s&&Z(s,c=De(a))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:ar(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,l=!0)}if(i){const a=K(n),u=o||ie;for(let c=0;c<i.length;c++){const p=i[c];n[p]=Br(s,a,p,u[p],e,!Z(u,p))}}return l}function Br(e,t,n,r,s,i){const l=e[n];if(l!=null){const o=Z(l,"default");if(o&&r===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&j(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Pn(s);r=u[n]=a.call(null,t),c()}}else r=a;s.ce&&s.ce._setProp(n,r)}l[0]&&(i&&!o?r=!1:l[1]&&(r===""||r===$t(n))&&(r=!0))}return r}const Ha=new WeakMap;function So(e,t,n=!1){const r=n?Ha:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,l={},o=[];let a=!1;if(!j(e)){const c=p=>{a=!0;const[d,b]=So(p,t,!0);be(l,d),b&&o.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return te(e)&&r.set(e,Vt),Vt;if(W(i))for(let c=0;c<i.length;c++){const p=De(i[c]);Us(p)&&(l[p]=ie)}else if(i)for(const c in i){const p=De(c);if(Us(p)){const d=i[c],b=l[p]=W(d)||j(d)?{type:d}:be({},d),x=b.type;let R=!1,B=!0;if(W(x))for(let D=0;D<x.length;++D){const P=x[D],M=j(P)&&P.name;if(M==="Boolean"){R=!0;break}else M==="String"&&(B=!1)}else R=j(x)&&x.name==="Boolean";b[0]=R,b[1]=B,(R||Z(b,"default"))&&o.push(p)}}const u=[l,o];return te(e)&&r.set(e,u),u}function Us(e){return e[0]!=="$"&&!fn(e)}const fs=e=>e==="_"||e==="_ctx"||e==="$stable",ps=e=>W(e)?e.map(Je):[Je(e)],ja=(e,t,n)=>{if(t._n)return t;const r=oe((...s)=>ps(t(...s)),n);return r._c=!1,r},Co=(e,t,n)=>{const r=e._ctx;for(const s in e){if(fs(s))continue;const i=e[s];if(j(i))t[s]=ja(s,i,r);else if(i!=null){const l=ps(i);t[s]=()=>l}}},Ao=(e,t)=>{const n=ps(t);e.slots.default=()=>n},Eo=(e,t,n)=>{for(const r in t)(n||!fs(r))&&(e[r]=t[r])},Fa=(e,t,n)=>{const r=e.slots=xo();if(e.vnode.shapeFlag&32){const s=t._;s?(Eo(r,t,n),n&&Di(r,"_",s,!0)):Co(t,r)}else t&&Ao(e,t)},Ga=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,l=ie;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:Eo(s,t,n):(i=!t.$stable,Co(t,s)),l=t}else t&&(Ao(e,t),l={default:1});if(i)for(const o in s)!fs(o)&&l[o]==null&&delete s[o]},Ae=Ka;function za(e){return Ua(e)}function Ua(e,t){const n=rr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:l,createText:o,createComment:a,setText:u,setElementText:c,parentNode:p,nextSibling:d,setScopeId:b=Qe,insertStaticContent:x}=e,R=(f,h,g,v=null,y=null,_=null,C=void 0,S=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!sn(f,h)&&(v=k(f),Te(f,y,_,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:w,ref:L,shapeFlag:E}=h;switch(w){case cr:B(f,h,g,v);break;case wt:D(f,h,g,v);break;case Bn:f==null&&P(h,g,v,C);break;case Pe:xt(f,h,g,v,y,_,C,S,T);break;default:E&1?Y(f,h,g,v,y,_,C,S,T):E&6?Fe(f,h,g,v,y,_,C,S,T):(E&64||E&128)&&w.process(f,h,g,v,y,_,C,S,T,N)}L!=null&&y?gn(L,f&&f.ref,_,h||f,!h):L==null&&f&&f.ref!=null&&gn(f.ref,null,_,f,!0)},B=(f,h,g,v)=>{if(f==null)r(h.el=o(h.children),g,v);else{const y=h.el=f.el;h.children!==f.children&&u(y,h.children)}},D=(f,h,g,v)=>{f==null?r(h.el=a(h.children||""),g,v):h.el=f.el},P=(f,h,g,v)=>{[f.el,f.anchor]=x(f.children,h,g,v,f.el,f.anchor)},M=({el:f,anchor:h},g,v)=>{let y;for(;f&&f!==h;)y=d(f),r(f,g,v),f=y;r(h,g,v)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=d(f),s(f),f=g;s(h)},Y=(f,h,g,v,y,_,C,S,T)=>{if(h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),f==null)pe(h,g,v,y,_,C,S,T);else{const w=f.el&&f.el._isVueCE?f.el:null;try{w&&w._beginPatch(),ht(f,h,y,_,C,S,T)}finally{w&&w._endPatch()}}},pe=(f,h,g,v,y,_,C,S)=>{let T,w;const{props:L,shapeFlag:E,transition:$,dirs:H}=f;if(T=f.el=l(f.type,_,L&&L.is,L),E&8?c(T,f.children):E&16&&He(f.children,T,null,v,y,yr(f,_),C,S),H&&Tt(f,null,v,"created"),X(T,f,f.scopeId,C,v),L){for(const le in L)le!=="value"&&!fn(le)&&i(T,le,null,L[le],_,v);"value"in L&&i(T,"value",null,L.value,_),(w=L.onVnodeBeforeMount)&&qe(w,v,f)}H&&Tt(f,null,v,"beforeMount");const z=Va(y,$);z&&$.beforeEnter(T),r(T,h,g),((w=L&&L.onVnodeMounted)||z||H)&&Ae(()=>{w&&qe(w,v,f),z&&$.enter(T),H&&Tt(f,null,v,"mounted")},y)},X=(f,h,g,v,y)=>{if(g&&b(f,g),v)for(let _=0;_<v.length;_++)b(f,v[_]);if(y){let _=y.subTree;if(h===_||Mo(_.type)&&(_.ssContent===h||_.ssFallback===h)){const C=y.vnode;X(f,C,C.scopeId,C.slotScopeIds,y.parent)}}},He=(f,h,g,v,y,_,C,S,T=0)=>{for(let w=T;w<f.length;w++){const L=f[w]=S?it(f[w]):Je(f[w]);R(null,L,h,g,v,y,_,C,S)}},ht=(f,h,g,v,y,_,C)=>{const S=h.el=f.el;let{patchFlag:T,dynamicChildren:w,dirs:L}=h;T|=f.patchFlag&16;const E=f.props||ie,$=h.props||ie;let H;if(g&&St(g,!1),(H=$.onVnodeBeforeUpdate)&&qe(H,g,h,f),L&&Tt(h,f,g,"beforeUpdate"),g&&St(g,!0),(E.innerHTML&&$.innerHTML==null||E.textContent&&$.textContent==null)&&c(S,""),w?je(f.dynamicChildren,w,S,g,v,yr(h,y),_):C||V(f,h,S,null,g,v,yr(h,y),_,!1),T>0){if(T&16)gt(S,E,$,g,y);else if(T&2&&E.class!==$.class&&i(S,"class",null,$.class,y),T&4&&i(S,"style",E.style,$.style,y),T&8){const z=h.dynamicProps;for(let le=0;le<z.length;le++){const ee=z[le],Se=E[ee],Ce=$[ee];(Ce!==Se||ee==="value")&&i(S,ee,Se,Ce,y,g)}}T&1&&f.children!==h.children&&c(S,h.children)}else!C&&w==null&&gt(S,E,$,g,y);((H=$.onVnodeUpdated)||L)&&Ae(()=>{H&&qe(H,g,h,f),L&&Tt(h,f,g,"updated")},v)},je=(f,h,g,v,y,_,C)=>{for(let S=0;S<h.length;S++){const T=f[S],w=h[S],L=T.el&&(T.type===Pe||!sn(T,w)||T.shapeFlag&198)?p(T.el):g;R(T,w,L,null,v,y,_,C,!0)}},gt=(f,h,g,v,y)=>{if(h!==g){if(h!==ie)for(const _ in h)!fn(_)&&!(_ in g)&&i(f,_,h[_],null,y,v);for(const _ in g){if(fn(_))continue;const C=g[_],S=h[_];C!==S&&_!=="value"&&i(f,_,S,C,y,v)}"value"in g&&i(f,"value",h.value,g.value,y)}},xt=(f,h,g,v,y,_,C,S,T)=>{const w=h.el=f?f.el:o(""),L=h.anchor=f?f.anchor:o("");let{patchFlag:E,dynamicChildren:$,slotScopeIds:H}=h;H&&(S=S?S.concat(H):H),f==null?(r(w,g,v),r(L,g,v),He(h.children||[],g,L,y,_,C,S,T)):E>0&&E&64&&$&&f.dynamicChildren&&f.dynamicChildren.length===$.length?(je(f.dynamicChildren,$,g,y,_,C,S),(h.key!=null||y&&h===y.subTree)&&Po(f,h,!0)):V(f,h,g,L,y,_,C,S,T)},Fe=(f,h,g,v,y,_,C,S,T)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?y.ctx.activate(h,g,v,C,T):tn(h,g,v,y,_,C,T):Bt(f,h,T)},tn=(f,h,g,v,y,_,C)=>{const S=f.component=tc(f,v,y);if(ho(f)&&(S.ctx.renderer=N),rc(S,!1,C),S.asyncDep){if(y&&y.registerDep(S,ge,C),!f.el){const T=S.subTree=F(wt);D(null,T,h,g),f.placeholder=T.el}}else ge(S,f,h,g,y,_,C)},Bt=(f,h,g)=>{const v=h.component=f.component;if(Da(f,h,g))if(v.asyncDep&&!v.asyncResolved){ne(v,h,g);return}else v.next=h,v.update();else h.el=f.el,v.vnode=h},ge=(f,h,g,v,y,_,C)=>{const S=()=>{if(f.isMounted){let{next:E,bu:$,u:H,parent:z,vnode:le}=f;{const Ue=Io(f);if(Ue){E&&(E.el=le.el,ne(f,E,C)),Ue.asyncDep.then(()=>{Ae(()=>{f.isUnmounted||w()},y)});return}}let ee=E,Se;St(f,!1),E?(E.el=le.el,ne(f,E,C)):E=le,$&&Dn($),(Se=E.props&&E.props.onVnodeBeforeUpdate)&&qe(Se,z,E,le),St(f,!0);const Ce=Gs(f),ze=f.subTree;f.subTree=Ce,R(ze,Ce,p(ze.el),k(ze),f,y,_),E.el=Ce.el,ee===null&&La(f,Ce.el),H&&Ae(H,y),(Se=E.props&&E.props.onVnodeUpdated)&&Ae(()=>qe(Se,z,E,le),y)}else{let E;const{el:$,props:H}=h,{bm:z,m:le,parent:ee,root:Se,type:Ce}=f,ze=mn(h);St(f,!1),z&&Dn(z),!ze&&(E=H&&H.onVnodeBeforeMount)&&qe(E,ee,h),St(f,!0);{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(Ce);const Ue=f.subTree=Gs(f);R(null,Ue,g,v,f,y,_),h.el=Ue.el}if(le&&Ae(le,y),!ze&&(E=H&&H.onVnodeMounted)){const Ue=h;Ae(()=>qe(E,ee,Ue),y)}(h.shapeFlag&256||ee&&mn(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&Ae(f.a,y),f.isMounted=!0,h=g=v=null}};f.scope.on();const T=f.effect=new Hi(S);f.scope.off();const w=f.update=T.run.bind(T),L=f.job=T.runIfDirty.bind(T);L.i=f,L.id=f.uid,T.scheduler=()=>as(L),St(f,!0),w()},ne=(f,h,g)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,Wa(f,h.props,v,g),Ga(f,h.children,g),ut(),$s(f),ft()},V=(f,h,g,v,y,_,C,S,T=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,E=h.children,{patchFlag:$,shapeFlag:H}=h;if($>0){if($&128){mt(w,E,g,v,y,_,C,S,T);return}else if($&256){tt(w,E,g,v,y,_,C,S,T);return}}H&8?(L&16&&Ne(w,y,_),E!==w&&c(g,E)):L&16?H&16?mt(w,E,g,v,y,_,C,S,T):Ne(w,y,_,!0):(L&8&&c(g,""),H&16&&He(E,g,v,y,_,C,S,T))},tt=(f,h,g,v,y,_,C,S,T)=>{f=f||Vt,h=h||Vt;const w=f.length,L=h.length,E=Math.min(w,L);let $;for($=0;$<E;$++){const H=h[$]=T?it(h[$]):Je(h[$]);R(f[$],H,g,null,y,_,C,S,T)}w>L?Ne(f,y,_,!0,!1,E):He(h,g,v,y,_,C,S,T,E)},mt=(f,h,g,v,y,_,C,S,T)=>{let w=0;const L=h.length;let E=f.length-1,$=L-1;for(;w<=E&&w<=$;){const H=f[w],z=h[w]=T?it(h[w]):Je(h[w]);if(sn(H,z))R(H,z,g,null,y,_,C,S,T);else break;w++}for(;w<=E&&w<=$;){const H=f[E],z=h[$]=T?it(h[$]):Je(h[$]);if(sn(H,z))R(H,z,g,null,y,_,C,S,T);else break;E--,$--}if(w>E){if(w<=$){const H=$+1,z=H<L?h[H].el:v;for(;w<=$;)R(null,h[w]=T?it(h[w]):Je(h[w]),g,z,y,_,C,S,T),w++}}else if(w>$)for(;w<=E;)Te(f[w],y,_,!0),w++;else{const H=w,z=w,le=new Map;for(w=z;w<=$;w++){const Ie=h[w]=T?it(h[w]):Je(h[w]);Ie.key!=null&&le.set(Ie.key,w)}let ee,Se=0;const Ce=$-z+1;let ze=!1,Ue=0;const nn=new Array(Ce);for(w=0;w<Ce;w++)nn[w]=0;for(w=H;w<=E;w++){const Ie=f[w];if(Se>=Ce){Te(Ie,y,_,!0);continue}let Ve;if(Ie.key!=null)Ve=le.get(Ie.key);else for(ee=z;ee<=$;ee++)if(nn[ee-z]===0&&sn(Ie,h[ee])){Ve=ee;break}Ve===void 0?Te(Ie,y,_,!0):(nn[Ve-z]=w+1,Ve>=Ue?Ue=Ve:ze=!0,R(Ie,h[Ve],g,null,y,_,C,S,T),Se++)}const As=ze?qa(nn):Vt;for(ee=As.length-1,w=Ce-1;w>=0;w--){const Ie=z+w,Ve=h[Ie],Es=h[Ie+1],Ps=Ie+1<L?Es.el||Oo(Es):v;nn[w]===0?R(null,Ve,g,Ps,y,_,C,S,T):ze&&(ee<0||w!==As[ee]?Ge(Ve,g,Ps,2):ee--)}}},Ge=(f,h,g,v,y=null)=>{const{el:_,type:C,transition:S,children:T,shapeFlag:w}=f;if(w&6){Ge(f.component.subTree,h,g,v);return}if(w&128){f.suspense.move(h,g,v);return}if(w&64){C.move(f,h,g,N);return}if(C===Pe){r(_,h,g);for(let E=0;E<T.length;E++)Ge(T[E],h,g,v);r(f.anchor,h,g);return}if(C===Bn){M(f,h,g);return}if(v!==2&&w&1&&S)if(v===0)S.beforeEnter(_),r(_,h,g),Ae(()=>S.enter(_),y);else{const{leave:E,delayLeave:$,afterLeave:H}=S,z=()=>{f.ctx.isUnmounted?s(_):r(_,h,g)},le=()=>{_._isLeaving&&_[aa](!0),E(_,()=>{z(),H&&H()})};$?$(_,z,le):le()}else r(_,h,g)},Te=(f,h,g,v=!1,y=!1)=>{const{type:_,props:C,ref:S,children:T,dynamicChildren:w,shapeFlag:L,patchFlag:E,dirs:$,cacheIndex:H}=f;if(E===-2&&(y=!1),S!=null&&(ut(),gn(S,null,g,f,!0),ft()),H!=null&&(h.renderCache[H]=void 0),L&256){h.ctx.deactivate(f);return}const z=L&1&&$,le=!mn(f);let ee;if(le&&(ee=C&&C.onVnodeBeforeUnmount)&&qe(ee,h,f),L&6)Rt(f.component,g,v);else{if(L&128){f.suspense.unmount(g,v);return}z&&Tt(f,null,h,"beforeUnmount"),L&64?f.type.remove(f,h,g,N,v):w&&!w.hasOnce&&(_!==Pe||E>0&&E&64)?Ne(w,h,g,!1,!0):(_===Pe&&E&384||!y&&L&16)&&Ne(T,h,g),v&&Wt(f)}(le&&(ee=C&&C.onVnodeUnmounted)||z)&&Ae(()=>{ee&&qe(ee,h,f),z&&Tt(f,null,h,"unmounted")},g)},Wt=f=>{const{type:h,el:g,anchor:v,transition:y}=f;if(h===Pe){Ht(g,v);return}if(h===Bn){O(f);return}const _=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:S}=y,T=()=>C(g,_);S?S(f.el,_,T):T()}else _()},Ht=(f,h)=>{let g;for(;f!==h;)g=d(f),s(f),f=g;s(h)},Rt=(f,h,g)=>{const{bum:v,scope:y,job:_,subTree:C,um:S,m:T,a:w}=f;Vs(T),Vs(w),v&&Dn(v),y.stop(),_&&(_.flags|=8,Te(C,f,h,g)),S&&Ae(S,h),Ae(()=>{f.isUnmounted=!0},h)},Ne=(f,h,g,v=!1,y=!1,_=0)=>{for(let C=_;C<f.length;C++)Te(f[C],h,g,v,y)},k=f=>{if(f.shapeFlag&6)return k(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=d(f.anchor||f.el),g=h&&h[oa];return g?d(g):h};let I=!1;const A=(f,h,g)=>{let v;f==null?h._vnode&&(Te(h._vnode,null,null,!0),v=h._vnode.component):R(h._vnode||null,f,h,null,null,null,g),h._vnode=f,I||(I=!0,$s(v),oo(),I=!1)},N={p:R,um:Te,m:Ge,r:Wt,mt:tn,mc:He,pc:V,pbc:je,n:k,o:e};return{render:A,hydrate:void 0,createApp:Pa(A)}}function yr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function St({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Va(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Po(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const l=r[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=it(s[i]),o.el=l.el),!n&&o.patchFlag!==-2&&Po(l,o)),o.type===cr&&(o.patchFlag===-1&&(o=s[i]=it(o)),o.el=l.el),o.type===wt&&!o.el&&(o.el=l.el)}}function qa(e){const t=e.slice(),n=[0];let r,s,i,l,o;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,l=n.length-1;i<l;)o=i+l>>1,e[n[o]]<u?i=o+1:l=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Io(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Io(t)}function Vs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Oo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Oo(t.subTree):null}const Mo=e=>e.__isSuspense;function Ka(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):ta(e)}const Pe=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),vn=[];let Me=null;function J(e=!1){vn.push(Me=e?null:[])}function Za(){vn.pop(),Me=vn[vn.length-1]||null}let Tn=1;function qn(e,t=!1){Tn+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function No(e){return e.dynamicChildren=Tn>0?Me||Vt:null,Za(),Tn>0&&Me&&Me.push(e),e}function ce(e,t,n,r,s,i){return No(m(e,t,n,r,s,i,!0))}function un(e,t,n,r,s){return No(F(e,t,n,r,s,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const $o=({key:e})=>e??null,Wn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ke(e)||j(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,r=0,s=null,i=e===Pe?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$o(t),ref:t&&Wn(t),scopeId:ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return o?(hs(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),Tn>0&&!l&&Me&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Me.push(a),a}const F=Ja;function Ja(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ya)&&(e=wt),Kn(e)){const o=Qt(e,t,!0);return n&&hs(o,n),Tn>0&&!i&&Me&&(o.shapeFlag&6?Me[Me.indexOf(e)]=o:Me.push(o)),o.patchFlag=-2,o}if(ac(e)&&(e=e.__vccOpts),t){t=Qa(t);let{class:o,style:a}=t;o&&!de(o)&&(t.class=en(o)),te(a)&&(ls(a)&&!W(a)&&(a=be({},a)),t.style=Xr(a))}const l=de(e)?1:Mo(e)?128:la(e)?64:te(e)?4:j(e)?2:0;return m(e,t,n,r,s,l,i,!0)}function Qa(e){return e?ls(e)||Ro(e)?be({},e):e:null}function Qt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:l,children:o,transition:a}=e,u=t?Ya(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&$o(u),ref:t&&t.ref?n&&i?W(i)?i.concat(Wn(t)):[i,Wn(t)]:Wn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&cs(c,a.clone(c)),c}function fe(e=" ",t=0){return F(cr,null,e,t)}function Mt(e,t){const n=F(Bn,null,e);return n.staticCount=t,n}function ds(e="",t=!1){return t?(J(),un(wt,null,e)):F(wt,null,e)}function Je(e){return e==null||typeof e=="boolean"?F(wt):W(e)?F(Pe,null,e.slice()):Kn(e)?it(e):F(cr,null,String(e))}function it(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function hs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),hs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ro(t)?t._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[fe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ya(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=en([t.class,r.class]));else if(s==="style")t.style=Xr([t.style,r.style]);else if(er(s)){const i=t[s],l=r[s];l&&i!==l&&!(W(i)&&i.includes(l))&&(t[s]=i?[].concat(i,l):l)}else s!==""&&(t[s]=r[s])}return t}function qe(e,t,n,r=null){et(e,t,7,[n,r])}const Xa=_o();let ec=0;function tc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Xa,i={uid:ec++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:So(r,s),emitsOptions:ko(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Oa.bind(null,i),e.ce&&e.ce(i),i}let _e=null;const nc=()=>_e||Oe;let Zn,Wr;{const e=rr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(l=>l(i)):s[0](i)}};Zn=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),Wr=t("__VUE_SSR_SETTERS__",n=>Sn=n)}const Pn=e=>{const t=_e;return Zn(e),e.scope.on(),()=>{e.scope.off(),Zn(t)}},qs=()=>{_e&&_e.scope.off(),Zn(null)};function Do(e){return e.vnode.shapeFlag&4}let Sn=!1;function rc(e,t=!1,n=!1){t&&Wr(t);const{props:r,children:s}=e.vnode,i=Do(e);Ba(e,r,i,t),Fa(e,s,n||t);const l=i?sc(e,t):void 0;return t&&Wr(!1),l}function sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xa);const{setup:r}=n;if(r){ut();const s=e.setupContext=r.length>1?oc(e):null,i=Pn(e),l=En(r,e,0,[e.props,s]),o=Mi(l);if(ft(),i(),(o||e.sp)&&!mn(e)&&po(e),o){if(l.then(qs,qs),t)return l.then(a=>{Ks(e,a)}).catch(a=>{or(a,e,0)});e.asyncDep=l}else Ks(e,l)}else Lo(e)}function Ks(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=no(t)),Lo(e)}function Lo(e,t,n){const r=e.type;e.render||(e.render=r.render||Qe);{const s=Pn(e);ut();try{Ra(e)}finally{ft(),s()}}}const ic={get(e,t){return ve(e,"get",""),e[t]}};function oc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ic),slots:e.slots,emit:e.emit,expose:t}}function ur(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(no(Ul(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)},has(t,n){return n in t||n in bn}})):e.proxy}function lc(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function ac(e){return j(e)&&"__vccOpts"in e}const me=(e,t)=>Jl(e,t,Sn);function Bo(e,t,n){try{qn(-1);const r=arguments.length;return r===2?te(t)&&!W(t)?Kn(t)?F(e,null,[t]):F(e,t):F(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kn(n)&&(n=[n]),F(e,t,n))}finally{qn(1)}}const cc="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hr;const Zs=typeof window<"u"&&window.trustedTypes;if(Zs)try{Hr=Zs.createPolicy("vue",{createHTML:e=>e})}catch{}const Wo=Hr?e=>Hr.createHTML(e):e=>e,uc="http://www.w3.org/2000/svg",fc="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,Js=st&&st.createElement("template"),pc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?st.createElementNS(uc,e):t==="mathml"?st.createElementNS(fc,e):n?st.createElement(e,{is:n}):st.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const l=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Js.innerHTML=Wo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=Js.content;if(r==="svg"||r==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},dc=Symbol("_vtc");function hc(e,t,n){const r=e[dc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qs=Symbol("_vod"),gc=Symbol("_vsh"),mc=Symbol(""),bc=/(?:^|;)\s*display\s*:/;function vc(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();n[o]==null&&Hn(r,o,"")}else for(const l in t)n[l]==null&&Hn(r,l,"");for(const l in n)l==="display"&&(i=!0),Hn(r,l,n[l])}else if(s){if(t!==n){const l=r[mc];l&&(n+=";"+l),r.cssText=n,i=bc.test(n)}}else t&&e.removeAttribute("style");Qs in e&&(e[Qs]=i?r.display:"",e[gc]&&(r.display="none"))}const Ys=/\s*!important$/;function Hn(e,t,n){if(W(n))n.forEach(r=>Hn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_c(e,t);Ys.test(n)?e.setProperty($t(r),n.replace(Ys,""),"important"):e[r]=n}}const Xs=["Webkit","Moz","ms"],wr={};function _c(e,t){const n=wr[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return wr[t]=r;r=nr(r);for(let s=0;s<Xs.length;s++){const i=Xs[s]+r;if(i in e)return wr[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function ti(e,t,n,r,s,i=xl(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n):n==null||i&&!Li(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Xe(n)?String(n):n)}function ni(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wo(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Li(n):n==null&&o==="string"?(n="",l=!0):o==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function Gt(e,t,n,r){e.addEventListener(t,n,r)}function kc(e,t,n,r){e.removeEventListener(t,n,r)}const ri=Symbol("_vei");function yc(e,t,n,r,s=null){const i=e[ri]||(e[ri]={}),l=i[t];if(r&&l)l.value=r;else{const[o,a]=wc(t);if(r){const u=i[t]=Tc(r,s);Gt(e,o,u,a)}else l&&(kc(e,o,l,a),i[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function wc(e){let t;if(si.test(e)){t={};let r;for(;r=e.match(si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let xr=0;const xc=Promise.resolve(),Rc=()=>xr||(xc.then(()=>xr=0),xr=Date.now());function Tc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;et(Sc(r,n.value),t,5,[r])};return n.value=e,n.attached=Rc(),n}function Sc(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ii=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Cc=(e,t,n,r,s,i)=>{const l=s==="svg";t==="class"?hc(e,r,l):t==="style"?vc(e,n,r):er(t)?Zr(t)||yc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,r,l))?(ni(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ti(e,t,r,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?ni(e,De(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ti(e,t,r,l))};function Ac(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ii(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ii(t)&&de(n)?!1:t in e}const oi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>Dn(t,n):t};function Ec(e){e.target.composing=!0}function li(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rr=Symbol("_assign");function ai(e,t,n){return t&&(e=e.trim()),n&&(e=Yr(e)),e}const Pc={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Rr]=oi(s);const i=r||s.props&&s.props.type==="number";Gt(e,t?"change":"input",l=>{l.target.composing||e[Rr](ai(e.value,n,i))}),(n||i)&&Gt(e,"change",()=>{e.value=ai(e.value,n,i)}),t||(Gt(e,"compositionstart",Ec),Gt(e,"compositionend",li),Gt(e,"change",li))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},l){if(e[Rr]=oi(l),e.composing)return;const o=(i||e.type==="number")&&!/^0\d/.test(e.value)?Yr(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===a)||(e.value=a))}},Ic=be({patchProp:Cc},pc);let ci;function Oc(){return ci||(ci=za(Ic))}const Mc=(...e)=>{const t=Oc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=$c(r);if(!s)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,Nc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function Nc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $c(e){return de(e)?document.querySelector(e):e}const Dc={class:"site-header"},Lc={class:"container nav-shell"},Bc={__name:"SiteHeader",props:{theme:{type:String,default:"dark"}},emits:["toggle-theme"],setup(e){const t=It(!1);return(n,r)=>{const s=Dt("router-link");return J(),ce("header",Dc,[m("div",Lc,[F(s,{class:"brand",to:"/"},{default:oe(()=>[...r[7]||(r[7]=[m("span",{class:"brand-mark"},"T",-1),m("div",null,[m("strong",null,"TreeCore"),m("small",null,"Official Site")],-1)])]),_:1}),m("button",{class:"menu-toggle",onClick:r[0]||(r[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...r[8]||(r[8]=[m("span",null,null,-1),m("span",null,null,-1),m("span",null,null,-1)])]),m("nav",{class:en(["nav-links",{open:t.value}])},[F(s,{to:"/",onClick:r[1]||(r[1]=i=>t.value=!1)},{default:oe(()=>[...r[9]||(r[9]=[fe("首页",-1)])]),_:1}),F(s,{to:"/features",onClick:r[2]||(r[2]=i=>t.value=!1)},{default:oe(()=>[...r[10]||(r[10]=[fe("核心能力",-1)])]),_:1}),F(s,{to:"/downloads",onClick:r[3]||(r[3]=i=>t.value=!1)},{default:oe(()=>[...r[11]||(r[11]=[fe("下载",-1)])]),_:1}),F(s,{to:"/docs",onClick:r[4]||(r[4]=i=>t.value=!1)},{default:oe(()=>[...r[12]||(r[12]=[fe("技术文档",-1)])]),_:1}),F(s,{to:"/community",onClick:r[5]||(r[5]=i=>t.value=!1)},{default:oe(()=>[...r[13]||(r[13]=[fe("社区",-1)])]),_:1}),m("button",{class:"theme-toggle",onClick:r[6]||(r[6]=i=>n.$emit("toggle-theme"))},se(e.theme==="dark"?"浅色":"深色"),1)],2)])])}}},fr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Wc={},Hc={class:"site-footer"},jc={class:"container footer-grid"};function Fc(e,t){const n=Dt("router-link");return J(),ce("footer",Hc,[m("div",jc,[t[4]||(t[4]=m("div",null,[m("div",{class:"brand footer-brand"},[m("span",{class:"brand-mark"},"T"),m("div",null,[m("strong",null,"TreeCore"),m("small",null,"高性能 Minecraft 服务端核心")])]),m("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ")],-1)),m("div",null,[t[3]||(t[3]=m("h4",null,"站点",-1)),m("ul",null,[m("li",null,[F(n,{to:"/features"},{default:oe(()=>[...t[0]||(t[0]=[fe("核心能力",-1)])]),_:1})]),m("li",null,[F(n,{to:"/downloads"},{default:oe(()=>[...t[1]||(t[1]=[fe("下载",-1)])]),_:1})]),m("li",null,[F(n,{to:"/docs"},{default:oe(()=>[...t[2]||(t[2]=[fe("技术文档",-1)])]),_:1})])])]),t[5]||(t[5]=Mt('<div><h4>资源</h4><ul><li><a href="https://github.com/TreeMC-cloud/Tree" target="_blank" rel="noreferrer">GitHub</a></li><li><a href="https://github.com/TreeMC-cloud/Tree/releases" target="_blank" rel="noreferrer">Releases</a></li><li><a href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">Discussions</a></li></ul></div><div><h4>支持</h4><ul><li><a href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">Issues</a></li><li><a href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">安全策略</a></li><li><a href="https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">贡献指南</a></li></ul></div>',2))]),t[6]||(t[6]=m("div",{class:"container footer-bottom"},[m("span",null,"© 2026 TreeMC-cloud"),m("span",null,"TreeCore / Tree")],-1))])}const Gc=fr(Wc,[["render",Fc]]),zc=["data-theme"],Uc={class:"site-main"},Vc={__name:"App",setup(e){const t=It("dark"),n=s=>{t.value=s,document.documentElement.dataset.theme=s,localStorage.setItem("tree-site-theme",s)},r=()=>{n(t.value==="dark"?"light":"dark")};return us(()=>{const s=localStorage.getItem("tree-site-theme");if(s==="dark"||s==="light"){n(s);return}const i=window.matchMedia("(prefers-color-scheme: dark)").matches;n(i?"dark":"light")}),hn(t,s=>{document.documentElement.dataset.theme=s}),(s,i)=>{const l=Dt("router-view");return J(),ce("div",{class:"site-shell","data-theme":t.value},[F(Bc,{theme:t.value,onToggleTheme:r},null,8,["theme"]),m("main",Uc,[F(l)]),F(Gc)],8,zc)}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zt=typeof document<"u";function Ho(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ho(e.default)}const q=Object.assign;function Tr(e,t){const n={};for(const r in t){const s=t[r];n[r]=We(s)?s.map(e):e(s)}return n}const _n=()=>{},We=Array.isArray;function ui(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const jo=/#/g,Kc=/&/g,Zc=/\//g,Jc=/=/g,Qc=/\?/g,Fo=/\+/g,Yc=/%5B/g,Xc=/%5D/g,Go=/%5E/g,eu=/%60/g,zo=/%7B/g,tu=/%7C/g,Uo=/%7D/g,nu=/%20/g;function gs(e){return e==null?"":encodeURI(""+e).replace(tu,"|").replace(Yc,"[").replace(Xc,"]")}function ru(e){return gs(e).replace(zo,"{").replace(Uo,"}").replace(Go,"^")}function jr(e){return gs(e).replace(Fo,"%2B").replace(nu,"+").replace(jo,"%23").replace(Kc,"%26").replace(eu,"`").replace(zo,"{").replace(Uo,"}").replace(Go,"^")}function su(e){return jr(e).replace(Jc,"%3D")}function iu(e){return gs(e).replace(jo,"%23").replace(Qc,"%3F")}function ou(e){return iu(e).replace(Zc,"%2F")}function Cn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const lu=/\/$/,au=e=>e.replace(lu,"");function Sr(e,t,n="/"){let r,s={},i="",l="";const o=t.indexOf("#");let a=t.indexOf("?");return a=o>=0&&a>o?-1:a,a>=0&&(r=t.slice(0,a),i=t.slice(a,o>0?o:t.length),s=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),l=t.slice(o,t.length)),r=pu(r??t,n),{fullPath:r+i+l,path:r,query:s,hash:Cn(l)}}function cu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function uu(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yt(t.matched[r],n.matched[s])&&Vo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!fu(e[n],t[n]))return!1;return!0}function fu(e,t){return We(e)?pi(e,t):We(t)?pi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function pi(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function pu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,l,o;for(l=0;l<r.length;l++)if(o=r[l],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(l).join("/")}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Fr=function(e){return e.pop="pop",e.push="push",e}({}),Cr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function du(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),au(e)}const hu=/^[^#]+#/;function gu(e,t){return e.replace(hu,"#")+t}function mu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const pr=()=>({left:window.scrollX,top:window.scrollY});function bu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mu(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function di(e,t){return(history.state?history.state.position-t:-1)+e}const Gr=new Map;function vu(e,t){Gr.set(e,t)}function _u(e){const t=Gr.get(e);return Gr.delete(e),t}function ku(e){return typeof e=="string"||e&&typeof e=="object"}function qo(e){return typeof e=="string"||typeof e=="symbol"}let ue=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Ko=Symbol("");ue.MATCHER_NOT_FOUND+"",ue.NAVIGATION_GUARD_REDIRECT+"",ue.NAVIGATION_ABORTED+"",ue.NAVIGATION_CANCELLED+"",ue.NAVIGATION_DUPLICATED+"";function Xt(e,t){return q(new Error,{type:e,[Ko]:!0},t)}function rt(e,t){return e instanceof Error&&Ko in e&&(t==null||!!(e.type&t))}const yu=["params","query","hash"];function wu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of yu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Fo," "),i=s.indexOf("="),l=Cn(i<0?s:s.slice(0,i)),o=i<0?null:Cn(s.slice(i+1));if(l in t){let a=t[l];We(a)||(a=t[l]=[a]),a.push(o)}else t[l]=o}return t}function hi(e){let t="";for(let n in e){const r=e[n];if(n=su(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(s=>s&&jr(s)):[r&&jr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ru(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Tu=Symbol(""),gi=Symbol(""),ms=Symbol(""),bs=Symbol(""),zr=Symbol("");function on(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kt(e,t,n,r,s,i=l=>l()){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const u=d=>{d===!1?a(Xt(ue.NAVIGATION_ABORTED,{from:n,to:t})):d instanceof Error?a(d):ku(d)?a(Xt(ue.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(l&&r.enterCallbacks[s]===l&&typeof d=="function"&&l.push(d),o())},c=i(()=>e.call(r&&r.instances[s],t,n,u));let p=Promise.resolve(c);e.length<3&&(p=p.then(u)),p.catch(d=>a(d))})}function Ar(e,t,n,r,s=i=>i()){const i=[];for(const l of e)for(const o in l.components){let a=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(Ho(a)){const u=(a.__vccOpts||a)[t];u&&i.push(kt(u,n,r,l,o,s))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const p=qc(c)?c.default:c;l.mods[o]=c,l.components[o]=p;const d=(p.__vccOpts||p)[t];return d&&kt(d,n,r,l,o,s)()}))}}return i}function Su(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const o=t.matched[l];o&&(e.matched.find(u=>Yt(u,o))?r.push(o):n.push(o));const a=e.matched[l];a&&(t.matched.find(u=>Yt(u,a))||s.push(a))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cu=()=>location.protocol+"//"+location.host;function Zo(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,o=s.slice(l);return o[0]!=="/"&&(o="/"+o),fi(o,"")}return fi(n,e)+r+s}function Au(e,t,n,r){let s=[],i=[],l=null;const o=({state:d})=>{const b=Zo(e,location),x=n.value,R=t.value;let B=0;if(d){if(n.value=b,t.value=d,l&&l===x){l=null;return}B=R?d.position-R.position:0}else r(b);s.forEach(D=>{D(n.value,x,{delta:B,type:Fr.pop,direction:B?B>0?Cr.forward:Cr.back:Cr.unknown})})};function a(){l=n.value}function u(d){s.push(d);const b=()=>{const x=s.indexOf(d);x>-1&&s.splice(x,1)};return i.push(b),b}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(q({},d.state,{scroll:pr()}),"")}}function p(){for(const d of i)d();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:p}}function mi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?pr():null}}function Eu(e){const{history:t,location:n}=window,r={value:Zo(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const p=e.indexOf("#"),d=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Cu()+e+a;try{t[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(b){console.error(b),n[c?"replace":"assign"](d)}}function l(a,u){i(a,q({},t.state,mi(s.value.back,a,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=a}function o(a,u){const c=q({},s.value,t.state,{forward:a,scroll:pr()});i(c.current,c,!0),i(a,q({},mi(r.value,a,null),{position:c.position+1},u),!1),r.value=a}return{location:r,state:s,push:o,replace:l}}function Pu(e){e=du(e);const t=Eu(e),n=Au(e,t.state,t.location,t.replace);function r(i,l=!0){l||n.pauseListeners(),history.go(i)}const s=q({location:"",base:e,go:r,createHref:gu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Iu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Pu(e)}let At=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var he=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(he||{});const Ou={type:At.Static,value:""},Mu=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${u}": ${b}`)}let n=he.Static,r=n;const s=[];let i;function l(){i&&s.push(i),i=[]}let o=0,a,u="",c="";function p(){u&&(n===he.Static?i.push({type:At.Static,value:u}):n===he.Param||n===he.ParamRegExp||n===he.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:At.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}for(;o<e.length;){if(a=e[o++],a==="\\"&&n!==he.ParamRegExp){r=n,n=he.EscapeNext;continue}switch(n){case he.Static:a==="/"?(u&&p(),l()):a===":"?(p(),n=he.Param):d();break;case he.EscapeNext:d(),n=r;break;case he.Param:a==="("?n=he.ParamRegExp:Mu.test(a)?d():(p(),n=he.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case he.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=he.ParamRegExpEnd:c+=a;break;case he.ParamRegExpEnd:p(),n=he.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===he.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),l(),s}const bi="[^/]+?",$u={sensitive:!1,strict:!1,start:!0,end:!0};var we=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(we||{});const Du=/[.+*?^${}()[\]/\\]/g;function Lu(e,t){const n=q({},$u,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[we.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const d=u[p];let b=we.Segment+(n.sensitive?we.BonusCaseSensitive:0);if(d.type===At.Static)p||(s+="/"),s+=d.value.replace(Du,"\\$&"),b+=we.Static;else if(d.type===At.Param){const{value:x,repeatable:R,optional:B,regexp:D}=d;i.push({name:x,repeatable:R,optional:B});const P=D||bi;if(P!==bi){b+=we.BonusCustomRegExp;try{`${P}`}catch(O){throw new Error(`Invalid custom RegExp for param "${x}" (${P}): `+O.message)}}let M=R?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;p||(M=B&&u.length<2?`(?:/${M})`:"/"+M),B&&(M+="?"),s+=M,b+=we.Dynamic,B&&(b+=we.BonusOptional),R&&(b+=we.BonusRepeatable),P===".*"&&(b+=we.BonusWildcard)}c.push(b)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=we.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function o(u){const c=u.match(l),p={};if(!c)return null;for(let d=1;d<c.length;d++){const b=c[d]||"",x=i[d-1];p[x.name]=b&&x.repeatable?b.split("/"):b}return p}function a(u){let c="",p=!1;for(const d of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const b of d)if(b.type===At.Static)c+=b.value;else if(b.type===At.Param){const{value:x,repeatable:R,optional:B}=b,D=x in u?u[x]:"";if(We(D)&&!R)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const P=We(D)?D.join("/"):D;if(!P)if(B)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);c+=P}}return c||"/"}return{re:l,score:r,keys:i,parse:o,stringify:a}}function Bu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===we.Static+we.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===we.Static+we.Segment?1:-1:0}function Jo(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Bu(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vi(r))return 1;if(vi(s))return-1}return s.length-r.length}function vi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wu={strict:!1,end:!0,sensitive:!1};function Hu(e,t,n){const r=Lu(Nu(e.path),n),s=q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function ju(e,t){const n=[],r=new Map;t=ui(Wu,t);function s(p){return r.get(p)}function i(p,d,b){const x=!b,R=ki(p);R.aliasOf=b&&b.record;const B=ui(t,p),D=[R];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const Y of O)D.push(ki(q({},R,{components:b?b.record.components:R.components,path:Y,aliasOf:b?b.record:R})))}let P,M;for(const O of D){const{path:Y}=O;if(d&&Y[0]!=="/"){const pe=d.record.path,X=pe[pe.length-1]==="/"?"":"/";O.path=d.record.path+(Y&&X+Y)}if(P=Hu(O,d,B),b?b.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),x&&p.name&&!yi(P)&&l(p.name)),Qo(P)&&a(P),R.children){const pe=R.children;for(let X=0;X<pe.length;X++)i(pe[X],P,b&&b.children[X])}b=b||P}return M?()=>{l(M)}:_n}function l(p){if(qo(p)){const d=r.get(p);d&&(r.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&r.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function o(){return n}function a(p){const d=zu(p,n);n.splice(d,0,p),p.record.name&&!yi(p)&&r.set(p.record.name,p)}function u(p,d){let b,x={},R,B;if("name"in p&&p.name){if(b=r.get(p.name),!b)throw Xt(ue.MATCHER_NOT_FOUND,{location:p});B=b.record.name,x=q(_i(d.params,b.keys.filter(M=>!M.optional).concat(b.parent?b.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&_i(p.params,b.keys.map(M=>M.name))),R=b.stringify(x)}else if(p.path!=null)R=p.path,b=n.find(M=>M.re.test(R)),b&&(x=b.parse(R),B=b.record.name);else{if(b=d.name?r.get(d.name):n.find(M=>M.re.test(d.path)),!b)throw Xt(ue.MATCHER_NOT_FOUND,{location:p,currentLocation:d});B=b.record.name,x=q({},d.params,p.params),R=b.stringify(x)}const D=[];let P=b;for(;P;)D.unshift(P.record),P=P.parent;return{name:B,path:R,params:x,matched:D,meta:Gu(D)}}e.forEach(p=>i(p));function c(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:l,clearRoutes:c,getRoutes:o,getRecordMatcher:s}}function _i(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ki(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gu(e){return e.reduce((t,n)=>q(t,n.meta),{})}function zu(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Jo(e,t[i])<0?r=i:n=i+1}const s=Uu(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Uu(e){let t=e;for(;t=t.parent;)if(Qo(t)&&Jo(e,t)===0)return t}function Qo({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function wi(e){const t=Ye(ms),n=Ye(bs),r=me(()=>{const a=Ot(e.to);return t.resolve(a)}),s=me(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],p=n.matched;if(!c||!p.length)return-1;const d=p.findIndex(Yt.bind(null,c));if(d>-1)return d;const b=xi(a[u-2]);return u>1&&xi(c)===b&&p[p.length-1].path!==b?p.findIndex(Yt.bind(null,a[u-2])):d}),i=me(()=>s.value>-1&&Ju(n.params,r.value.params)),l=me(()=>s.value>-1&&s.value===n.matched.length-1&&Vo(n.params,r.value.params));function o(a={}){if(Zu(a)){const u=t[Ot(e.replace)?"replace":"push"](Ot(e.to)).catch(_n);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:l,navigate:o}}function Vu(e){return e.length===1?e[0]:e}const qu=fo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:wi,setup(e,{slots:t}){const n=ir(wi(e)),{options:r}=Ye(ms),s=me(()=>({[Ri(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ri(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Vu(t.default(n));return e.custom?i:Bo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ku=qu;function Zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ju(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!We(s)||s.length!==r.length||r.some((i,l)=>i.valueOf()!==s[l].valueOf()))return!1}return!0}function xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ri=(e,t,n)=>e??t??n,Qu=fo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(zr),s=me(()=>e.route||r.value),i=Ye(gi,0),l=me(()=>{let u=Ot(i);const{matched:c}=s.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),o=me(()=>s.value.matched[l.value]);Ln(gi,me(()=>l.value+1)),Ln(Tu,o),Ln(zr,s);const a=It();return hn(()=>[a.value,o.value,e.name],([u,c,p],[d,b,x])=>{c&&(c.instances[p]=u,b&&b!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=b.leaveGuards),c.updateGuards.size||(c.updateGuards=b.updateGuards))),u&&c&&(!b||!Yt(c,b)||!d)&&(c.enterCallbacks[p]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,p=o.value,d=p&&p.components[c];if(!d)return Ti(n.default,{Component:d,route:u});const b=p.props[c],x=b?b===!0?u.params:typeof b=="function"?b(u):b:null,B=Bo(d,q({},x,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[c]=null)},ref:a}));return Ti(n.default,{Component:B,route:u})||B}}});function Ti(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yu=Qu;function Xu(e){const t=ju(e.routes,e),n=e.parseQuery||xu,r=e.stringifyQuery||hi,s=e.history,i=on(),l=on(),o=on(),a=Vl(bt);let u=bt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Tr.bind(null,k=>""+k),p=Tr.bind(null,ou),d=Tr.bind(null,Cn);function b(k,I){let A,N;return qo(k)?(A=t.getRecordMatcher(k),N=I):N=k,t.addRoute(N,A)}function x(k){const I=t.getRecordMatcher(k);I&&t.removeRoute(I)}function R(){return t.getRoutes().map(k=>k.record)}function B(k){return!!t.getRecordMatcher(k)}function D(k,I){if(I=q({},I||a.value),typeof k=="string"){const g=Sr(n,k,I.path),v=t.resolve({path:g.path},I),y=s.createHref(g.fullPath);return q(g,v,{params:d(v.params),hash:Cn(g.hash),redirectedFrom:void 0,href:y})}let A;if(k.path!=null)A=q({},k,{path:Sr(n,k.path,I.path).path});else{const g=q({},k.params);for(const v in g)g[v]==null&&delete g[v];A=q({},k,{params:p(g)}),I.params=p(I.params)}const N=t.resolve(A,I),G=k.hash||"";N.params=c(d(N.params));const f=cu(r,q({},k,{hash:ru(G),path:N.path})),h=s.createHref(f);return q({fullPath:f,hash:G,query:r===hi?Ru(k.query):k.query||{}},N,{redirectedFrom:void 0,href:h})}function P(k){return typeof k=="string"?Sr(n,k,a.value.path):q({},k)}function M(k,I){if(u!==k)return Xt(ue.NAVIGATION_CANCELLED,{from:I,to:k})}function O(k){return X(k)}function Y(k){return O(q(P(k),{replace:!0}))}function pe(k,I){const A=k.matched[k.matched.length-1];if(A&&A.redirect){const{redirect:N}=A;let G=typeof N=="function"?N(k,I):N;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=P(G):{path:G},G.params={}),q({query:k.query,hash:k.hash,params:G.path!=null?{}:k.params},G)}}function X(k,I){const A=u=D(k),N=a.value,G=k.state,f=k.force,h=k.replace===!0,g=pe(A,N);if(g)return X(q(P(g),{state:typeof g=="object"?q({},G,g.state):G,force:f,replace:h}),I||A);const v=A;v.redirectedFrom=I;let y;return!f&&uu(r,N,A)&&(y=Xt(ue.NAVIGATION_DUPLICATED,{to:v,from:N}),Ge(N,N,!0,!1)),(y?Promise.resolve(y):je(v,N)).catch(_=>rt(_)?rt(_,ue.NAVIGATION_GUARD_REDIRECT)?_:mt(_):V(_,v,N)).then(_=>{if(_){if(rt(_,ue.NAVIGATION_GUARD_REDIRECT))return X(q({replace:h},P(_.to),{state:typeof _.to=="object"?q({},G,_.to.state):G,force:f}),I||v)}else _=xt(v,N,!0,h,G);return gt(v,N,_),_})}function He(k,I){const A=M(k,I);return A?Promise.reject(A):Promise.resolve()}function ht(k){const I=Ht.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(k):k()}function je(k,I){let A;const[N,G,f]=Su(k,I);A=Ar(N.reverse(),"beforeRouteLeave",k,I);for(const g of N)g.leaveGuards.forEach(v=>{A.push(kt(v,k,I))});const h=He.bind(null,k,I);return A.push(h),Ne(A).then(()=>{A=[];for(const g of i.list())A.push(kt(g,k,I));return A.push(h),Ne(A)}).then(()=>{A=Ar(G,"beforeRouteUpdate",k,I);for(const g of G)g.updateGuards.forEach(v=>{A.push(kt(v,k,I))});return A.push(h),Ne(A)}).then(()=>{A=[];for(const g of f)if(g.beforeEnter)if(We(g.beforeEnter))for(const v of g.beforeEnter)A.push(kt(v,k,I));else A.push(kt(g.beforeEnter,k,I));return A.push(h),Ne(A)}).then(()=>(k.matched.forEach(g=>g.enterCallbacks={}),A=Ar(f,"beforeRouteEnter",k,I,ht),A.push(h),Ne(A))).then(()=>{A=[];for(const g of l.list())A.push(kt(g,k,I));return A.push(h),Ne(A)}).catch(g=>rt(g,ue.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function gt(k,I,A){o.list().forEach(N=>ht(()=>N(k,I,A)))}function xt(k,I,A,N,G){const f=M(k,I);if(f)return f;const h=I===bt,g=zt?history.state:{};A&&(N||h?s.replace(k.fullPath,q({scroll:h&&g&&g.scroll},G)):s.push(k.fullPath,G)),a.value=k,Ge(k,I,A,h),mt()}let Fe;function tn(){Fe||(Fe=s.listen((k,I,A)=>{if(!Rt.listening)return;const N=D(k),G=pe(N,Rt.currentRoute.value);if(G){X(q(G,{replace:!0,force:!0}),N).catch(_n);return}u=N;const f=a.value;zt&&vu(di(f.fullPath,A.delta),pr()),je(N,f).catch(h=>rt(h,ue.NAVIGATION_ABORTED|ue.NAVIGATION_CANCELLED)?h:rt(h,ue.NAVIGATION_GUARD_REDIRECT)?(X(q(P(h.to),{force:!0}),N).then(g=>{rt(g,ue.NAVIGATION_ABORTED|ue.NAVIGATION_DUPLICATED)&&!A.delta&&A.type===Fr.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(A.delta&&s.go(-A.delta,!1),V(h,N,f))).then(h=>{h=h||xt(N,f,!1),h&&(A.delta&&!rt(h,ue.NAVIGATION_CANCELLED)?s.go(-A.delta,!1):A.type===Fr.pop&&rt(h,ue.NAVIGATION_ABORTED|ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),gt(N,f,h)}).catch(_n)}))}let Bt=on(),ge=on(),ne;function V(k,I,A){mt(k);const N=ge.list();return N.length?N.forEach(G=>G(k,I,A)):console.error(k),Promise.reject(k)}function tt(){return ne&&a.value!==bt?Promise.resolve():new Promise((k,I)=>{Bt.add([k,I])})}function mt(k){return ne||(ne=!k,tn(),Bt.list().forEach(([I,A])=>k?A(k):I()),Bt.reset()),k}function Ge(k,I,A,N){const{scrollBehavior:G}=e;if(!zt||!G)return Promise.resolve();const f=!A&&_u(di(k.fullPath,0))||(N||!A)&&history.state&&history.state.scroll||null;return so().then(()=>G(k,I,f)).then(h=>h&&bu(h)).catch(h=>V(h,k,I))}const Te=k=>s.go(k);let Wt;const Ht=new Set,Rt={currentRoute:a,listening:!0,addRoute:b,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:R,resolve:D,options:e,push:O,replace:Y,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:l.add,afterEach:o.add,onError:ge.add,isReady:tt,install(k){k.component("RouterLink",Ku),k.component("RouterView",Yu),k.config.globalProperties.$router=Rt,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(a)}),zt&&!Wt&&a.value===bt&&(Wt=!0,O(s.location).catch(N=>{}));const I={};for(const N in bt)Object.defineProperty(I,N,{get:()=>a.value[N],enumerable:!0});k.provide(ms,Rt),k.provide(bs,eo(I)),k.provide(zr,a);const A=k.unmount;Ht.add(k),k.unmount=function(){Ht.delete(k),Ht.size<1&&(u=bt,Fe&&Fe(),Fe=null,a.value=bt,Wt=!1,ne=!1),A()}}};function Ne(k){return k.reduce((I,A)=>I.then(()=>ht(A)),Promise.resolve())}return Rt}function ef(e){return Ye(bs)}const tf="/images/console-preview.png",nf="/images/console-live.gif",rf="/images/stress-test.gif",sf={},of={class:"hero-section"},lf={class:"container hero-grid"},af={class:"hero-actions"},cf={class:"section-block"},uf={class:"container"},ff={class:"feature-grid three"},pf={class:"feature-card compact"},df={class:"feature-card compact"},hf={class:"feature-card compact"},gf={class:"section-block final-cta"},mf={class:"container cta-shell"},bf={class:"hero-actions"};function vf(e,t){const n=Dt("router-link");return J(),ce("div",null,[m("section",of,[m("div",lf,[m("div",null,[t[3]||(t[3]=m("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1)),t[4]||(t[4]=m("h1",{class:"hero-title"},"让性能优化、运维与内容链路真正连成一体。",-1)),t[5]||(t[5]=m("p",{class:"hero-description"}," TreeCore 面向高并发、长时间运行与可视化运维场景，提供运行时性能调优、 Web 管理面板、资源包与模型链路、假人与红石热点分析，以及更贴近实战的服务器工具集。 ",-1)),m("div",af,[F(n,{class:"button primary",to:"/features"},{default:oe(()=>[...t[0]||(t[0]=[fe("查看能力",-1)])]),_:1}),F(n,{class:"button secondary",to:"/docs"},{default:oe(()=>[...t[1]||(t[1]=[fe("阅读文档",-1)])]),_:1}),t[2]||(t[2]=m("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1))]),t[6]||(t[6]=m("div",{class:"hero-badges"},[m("span",null,"Java 21+"),m("span",null,"Minecraft 1.21.x"),m("span",null,"11 个 Web 页面"),m("span",null,"4 档自动分层")],-1))]),t[7]||(t[7]=m("div",{class:"hero-card image-card"},[m("img",{src:tf,alt:"TreeCore 控制台预览"}),m("div",{class:"overlay-panel"},[m("strong",null,"Web 管理面板"),m("p",null,"控制台、诊断、资源包、模型、备份、集成运维统一入口。")])],-1))])]),t[24]||(t[24]=Mt('<section class="section-block"><div class="container stats-grid"><article class="stat-card"><strong>11</strong><span>当前 Web 页签</span></article><article class="stat-card"><strong>4 档</strong><span>自动分层预设</span></article><article class="stat-card"><strong>ZIP</strong><span>本地资源包拖拽上传</span></article><article class="stat-card"><strong>Docs</strong><span>GitBook 风格技术 Wiki</span></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">WHY TREECORE</span><h2>不是只会改配置，而是把服务器维护做成完整产品。</h2><p> TreeCore 不只在运行时调优参数，还把控制台、诊断、资源包、模型、备份、假人、世界管理与文档体系串成统一入口。 </p></div><div class="feature-grid three"><article class="feature-card"><h3>性能在运行时收敛</h3><p>动态视距、动态模拟距离、Paper 配置热调、网络链路优化与自动分层共同工作，优先稳住 TPS 与 MSPT。</p></article><article class="feature-card"><h3>Web 运维真正可用</h3><p>远程控制台、内存快照、线程转储、备份管理、世界操作、ItemsAdder 编辑器与集成状态都能可视化完成。</p></article><article class="feature-card"><h3>内容链路不再割裂</h3><p>模型、纹理、资源包 ZIP、本地托管与在线玩家资源包下发形成闭环，适合内容服与综合服协同维护。</p></article></div></div></section><section class="section-block"><div class="container media-grid"><article class="media-card"><div class="media-copy"><span class="eyebrow">REAL SCENARIO</span><h3>高峰监控与问题排查放在同一块面板里。</h3><p> 先看仪表盘，再看控制台，再做线程转储与备份处理。TreeCore 的目标不是把工具堆进去，而是让它们在实际运维时能够连起来用。 </p></div><img src="'+nf+'" alt="TreeCore 控制台动图"></article><article class="media-card reverse"><div class="media-copy"><span class="eyebrow">STRESS TEST</span><h3>面向综合服、长周目服与高峰玩家场景。</h3><p> 对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。 </p></div><img src="'+rf+'" alt="TreeCore 压测演示"></article></div></section><section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">SCENARIOS</span><h2>适合哪些服务器？</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>生存 / 长周目服</h3><p>希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。</p></article><article class="feature-card compact"><h3>多世界 / 综合服</h3><p>需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。</p></article><article class="feature-card compact"><h3>运维要求高的团队服</h3><p>希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。</p></article></div></div></section>',4)),m("section",cf,[m("div",uf,[t[20]||(t[20]=m("div",{class:"section-head"},[m("span",{class:"eyebrow"},"DOCS INSIDE SITE"),m("h2",null,"文档已经和官网放在同一个站里。"),m("p",null,"现在你可以直接在站内阅读快速开始、配置参考、资源包链路、系统架构与 Web 资源同步机制，不再跳出到 GitHub Markdown 页面。")],-1)),m("div",ff,[m("article",pf,[t[9]||(t[9]=m("span",{class:"card-label"},"GET STARTED",-1)),t[10]||(t[10]=m("h3",null,"快速开始",-1)),t[11]||(t[11]=m("p",null,"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",-1)),F(n,{class:"text-link",to:"/docs/quick-start"},{default:oe(()=>[...t[8]||(t[8]=[fe("立即阅读 →",-1)])]),_:1})]),m("article",df,[t[13]||(t[13]=m("span",{class:"card-label"},"OPERATIONS",-1)),t[14]||(t[14]=m("h3",null,"资源包 / 模型链路",-1)),t[15]||(t[15]=m("p",null,"把模型、纹理、ZIP 资源包、本地托管与在线玩家下发串起来理解。",-1)),F(n,{class:"text-link",to:"/docs/resource-pack"},{default:oe(()=>[...t[12]||(t[12]=[fe("查看文档 →",-1)])]),_:1})]),m("article",hf,[t[17]||(t[17]=m("span",{class:"card-label"},"ARCHITECTURE",-1)),t[18]||(t[18]=m("h3",null,"系统架构总览",-1)),t[19]||(t[19]=m("p",null,"面向技术维护者，快速理解当前 TreeCore 的主要模块与运行关系。",-1)),F(n,{class:"text-link",to:"/docs/system-overview"},{default:oe(()=>[...t[16]||(t[16]=[fe("进入架构页 →",-1)])]),_:1})])])])]),t[25]||(t[25]=Mt('<section class="section-block surface-soft"><div class="container"><div class="section-head"><span class="eyebrow">FAQ</span><h2>你可能最先会关心的几个问题</h2></div><div class="feature-grid two"><article class="feature-card compact"><h3>官网和文档是不是同一套站点？</h3><p>是。当前官网首页、下载页、社区页和技术文档都在同一个站内，通过站内路由切换。</p></article><article class="feature-card compact"><h3>源码是否公开？</h3><p>官网源码保存在私有网站仓库中，公开站点只发布构建产物；对外访问不需要登录 GitHub。</p></article><article class="feature-card compact"><h3>现在能免费访问吗？</h3><p>可以。当前使用免费托管方式发布，直接打开站点地址即可访问，不需要你自己买服务器。</p></article><article class="feature-card compact"><h3>以后还能接独立域名吗？</h3><p>可以。当前结构已经适合继续接入独立域名或独立 docs 子域名，后续只需要调整发布层。</p></article></div></div></section>',1)),m("section",gf,[m("div",mf,[t[23]||(t[23]=m("div",null,[m("span",{class:"eyebrow"},"START HERE"),m("h2",null,"先看官网，再进站内文档，最后按你的节奏发布版本。"),m("p",null,"当前站点已经按“官网 + 站内 Wiki + Releases”结构组织，后续可以继续扩展为更完整的产品官网体系。")],-1)),m("div",bf,[F(n,{class:"button primary",to:"/docs"},{default:oe(()=>[...t[21]||(t[21]=[fe("进入技术文档",-1)])]),_:1}),F(n,{class:"button secondary",to:"/downloads"},{default:oe(()=>[...t[22]||(t[22]=[fe("查看下载入口",-1)])]),_:1})])])])])}const _f=fr(sf,[["render",vf]]),kf={},yf={class:"page-shell container"};function wf(e,t){return J(),ce("div",yf,[...t[0]||(t[0]=[Mt('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>围绕服务器全链路组织的核心能力</h1><p> 从运行时性能调优，到 Web 运维面板，再到资源包、模型、世界与备份管理，TreeCore 当前公开功能已经能覆盖一套完整的服务器维护流程。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const xf=fr(kf,[["render",wf]]),Rf={class:"page-shell container"},Tf={class:"page-hero"},Sf={class:"hero-actions"},Cf={class:"stack-section"},Af={class:"section-head left"},Ef={key:0,class:"empty-state"},Pf={key:1,class:"release-grid"},If={class:"release-head"},Of={class:"release-date"},Mf={class:"release-tag"},Nf={class:"release-body"},$f={class:"release-actions"},Df=["href"],Lf=["href"],Bf={key:2,class:"empty-state"},Wf={__name:"DownloadsPage",setup(e){const t=It(!0),n=It([]),r=It("github"),s=me(()=>t.value?"正在从 GitHub Releases 获取公开构建列表。":n.value.length?r.value==="github"?"当前数据来自 GitHub 官方 Releases。":"当前数据来自本地回退文件。":"当前还没有公开版本列表，建议先在公开仓库建立 Release 流程。"),i=u=>{if(!u)return"暂无发布说明。";const c=String(u).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return c.length>140?`${c.slice(0,140)}…`:c},l=u=>u?new Date(u).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",o=async()=>{const u=await fetch("/data/releases-fallback.json");if(!u.ok)return[];const c=await u.json();return r.value="fallback",Array.isArray(c)?c:[]};return us(async()=>{t.value=!0;try{const u=await fetch("https://api.github.com/repos/TreeMC-cloud/Tree/releases?per_page=12",{headers:{Accept:"application/vnd.github+json"}});if(u.ok){const c=await u.json();n.value=Array.isArray(c)?c:[],r.value="github"}else n.value=await o()}catch{n.value=await o()}finally{t.value=!1}}),(u,c)=>{const p=Dt("router-link");return J(),ce("div",Rf,[m("section",Tf,[c[3]||(c[3]=m("span",{class:"eyebrow"},"DOWNLOADS",-1)),c[4]||(c[4]=m("h1",null,"下载与发布入口",-1)),c[5]||(c[5]=m("p",null," 当前页面优先读取公开仓库 Releases；如果你后续在公开仓库发布构建，这里会自动展示版本列表。 ",-1)),m("div",Sf,[c[1]||(c[1]=m("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),F(p,{class:"button secondary",to:"/docs/quick-start"},{default:oe(()=>[...c[0]||(c[0]=[fe("安装文档",-1)])]),_:1}),c[2]||(c[2]=m("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"查看仓库",-1))])]),m("section",Cf,[m("div",Af,[c[6]||(c[6]=m("h2",null,"公开构建",-1)),m("p",null,se(s.value),1)]),t.value?(J(),ce("div",Ef,[...c[7]||(c[7]=[m("strong",null,"正在获取版本信息…",-1)])])):n.value.length?(J(),ce("div",Pf,[(J(!0),ce(Pe,null,Rn(n.value,d=>(J(),ce("article",{key:d.id||d.tag_name,class:"release-card"},[m("div",If,[m("span",{class:en(["release-badge",{alt:d.prerelease}])},se(d.prerelease?"预发布":"正式版"),3),m("span",Of,se(l(d.published_at)),1)]),m("h3",null,se(d.name||d.tag_name),1),m("p",Mf,se(d.tag_name),1),m("p",Nf,se(i(d.body)),1),m("div",$f,[m("a",{class:"button primary small",href:d.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Df),d.assets&&d.assets.length?(J(),ce("a",{key:0,class:"button secondary small",href:d.assets[0].browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+se(d.assets[0].name),9,Lf)):ds("",!0)])]))),128))])):(J(),ce("div",Bf,[...c[8]||(c[8]=[m("strong",null,"当前公开仓库还没有可展示的 Release。",-1),m("p",null," 你可以先继续完善官网和文档，后续在公开仓库发布构建产物后，这个页面会自动展示版本信息。 ",-1)])]))]),c[9]||(c[9]=Mt('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点可以从 GitHub API 读取版本信息，或后续接入你自己的缓存 JSON。</p></article><article class="feature-card compact"><h3>独立域名</h3><p>后续接入自定义域名时，用户只看到官网，不需要感知仓库结构。</p></article></div></section>',1))])}}},Jn=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],Ut=Jn.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Yo=Object.fromEntries(Ut.map(e=>[e.slug,e])),Hf={class:"page-shell container"},jf={class:"page-hero docs-hero-grid"},Ff={class:"hero-actions"},Gf={class:"stack-section surface-card docs-filter-card"},zf={class:"docs-filter-bar"},Uf={class:"section-head left"},Vf={class:"feature-grid three"},qf={class:"card-label"},Kf={class:"doc-card-meta"},Zf={key:0,class:"stack-section"},Jf={__name:"DocsPage",setup(e){const t=It(""),n=me(()=>{const r=t.value.toLowerCase();return r?Jn.map(s=>({...s,items:s.items.filter(i=>[i.title,i.description,i.tag,s.title].join(" ").toLowerCase().includes(r))})).filter(s=>s.items.length>0):Jn});return(r,s)=>{const i=Dt("router-link");return J(),ce("div",Hf,[m("section",jf,[m("div",null,[s[3]||(s[3]=m("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),s[4]||(s[4]=m("h1",null,"技术文档已经整合进官网内。",-1)),s[5]||(s[5]=m("p",null," 现在不再跳去 GitHub Markdown 页面，而是直接在官网站点里阅读部署、运维、配置、架构与 Web 资源同步文档。 ",-1)),m("div",Ff,[F(i,{class:"button primary",to:"/docs/quick-start"},{default:oe(()=>[...s[1]||(s[1]=[fe("从快速开始开始",-1)])]),_:1}),F(i,{class:"button secondary",to:"/docs/configuration"},{default:oe(()=>[...s[2]||(s[2]=[fe("查看配置参考",-1)])]),_:1})])]),s[6]||(s[6]=m("div",{class:"surface-card docs-hero-card"},[m("strong",null,"当前站内文档能力"),m("ul",{class:"bullet-list compact-list"},[m("li",null,"文档主页 + 站内详情页"),m("li",null,"分组导航 + 上一篇 / 下一篇"),m("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),m("li",null,"可继续接独立 docs 子域名")])],-1))]),m("section",Gf,[m("div",zf,[s[7]||(s[7]=m("div",null,[m("span",{class:"eyebrow"},"DOC INDEX"),m("h2",null,"按主题或关键词查文档")],-1)),na(m("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Pc,t.value,void 0,{trim:!0}]])])]),(J(!0),ce(Pe,null,Rn(n.value,l=>(J(),ce("section",{class:"stack-section",key:l.key},[m("div",Uf,[m("h2",null,se(l.title),1),m("p",null,se(l.description),1)]),m("div",Vf,[(J(!0),ce(Pe,null,Rn(l.items,o=>(J(),ce("article",{class:"feature-card compact",key:o.slug},[m("span",qf,se(o.tag),1),m("h3",null,se(o.title),1),m("p",null,se(o.description),1),m("div",Kf,[m("span",null,se(l.title),1),m("span",null,se(o.minutes),1)]),F(i,{class:"text-link",to:`/docs/${o.slug}`},{default:oe(()=>[...s[8]||(s[8]=[fe("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?ds("",!0):(J(),ce("section",Zf,[...s[9]||(s[9]=[m("div",{class:"empty-state"},[m("strong",null,"没有找到匹配的文档。"),m("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),s[10]||(s[10]=Mt('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},Qf=`# Tree 技术文档 / Wiki

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
`,Yf=`# Summary

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
`,Xf=`# 模块地图

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
`,ep=`# 系统架构总览

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
`,tp=`# Web 资源同步机制

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
`,np=`# 首次上线检查清单

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
`,rp=`# 快速开始

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
`,ip=`# 命令与日常运维

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
`,op=`# 诊断与备份

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
`,lp=`# 假人 / 红石运维

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
`,ap=`# 集成与世界管理

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
`,cp=`# 资源包 / 模型链路

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
`,up=`# Web 页面总览

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
`,fp=`# 命令速查表

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
`,pp=`# 配置参考

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
`,dp=Object.assign({"../../content/docs/README.md":Qf,"../../content/docs/SUMMARY.md":Yf,"../../content/docs/architecture/module-map.md":Xf,"../../content/docs/architecture/system-overview.md":ep,"../../content/docs/development/web-ui-pipeline.md":tp,"../../content/docs/getting-started/first-day-checklist.md":np,"../../content/docs/getting-started/quick-start.md":rp,"../../content/docs/getting-started/web-panel.md":sp,"../../content/docs/operations/commands.md":ip,"../../content/docs/operations/diagnostics-and-backups.md":op,"../../content/docs/operations/fakeplayer-and-redstone.md":lp,"../../content/docs/operations/integrations-and-worlds.md":ap,"../../content/docs/operations/resource-pack.md":cp,"../../content/docs/operations/web-pages-overview.md":up,"../../content/docs/reference/command-cheatsheet.md":fp,"../../content/docs/reference/configuration.md":pp}),hp="../../content/docs/",gp=Object.fromEntries(Object.entries(dp).map(([e,t])=>[e.replace(hp,""),t]));function vs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Lt=vs();function Xo(e){Lt=e}var kn={exec:()=>null};function Q(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(s,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(Re.caret,"$1"),n=n.replace(s,l),r},getRegex:()=>new RegExp(n,t)};return r}var Re={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},mp=/^(?:[ \t]*(?:\n|$))+/,bp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,In=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_p=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_s=/(?:[*+-]|\d{1,9}[.)])/,el=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,tl=Q(el).replace(/bull/g,_s).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kp=Q(el).replace(/bull/g,_s).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ks=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,yp=/^[^\n]+/,ys=/(?!\s*\])(?:\\.|[^\[\]\\])+/,wp=Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ys).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),xp=Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_s).getRegex(),dr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ws=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Rp=Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ws).replace("tag",dr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nl=Q(ks).replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",dr).getRegex(),Tp=Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nl).getRegex(),xs={blockquote:Tp,code:bp,def:wp,fences:vp,heading:_p,hr:In,html:Rp,lheading:tl,list:xp,newline:mp,paragraph:nl,table:kn,text:yp},Si=Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",dr).getRegex(),Sp={...xs,lheading:kp,table:Si,paragraph:Q(ks).replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Si).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",dr).getRegex()},Cp={...xs,html:Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ws).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:kn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Q(ks).replace("hr",In).replace("heading",` *#{1,6} *[^
]`).replace("lheading",tl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ap=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ep=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,rl=/^( {2,}|\\)\n(?!\s*$)/,Pp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hr=/[\p{P}\p{S}]/u,Rs=/[\s\p{P}\p{S}]/u,sl=/[^\s\p{P}\p{S}]/u,Ip=Q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Rs).getRegex(),il=/(?!~)[\p{P}\p{S}]/u,Op=/(?!~)[\s\p{P}\p{S}]/u,Mp=/(?:[^\s\p{P}\p{S}]|~)/u,Np=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ol=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,$p=Q(ol,"u").replace(/punct/g,hr).getRegex(),Dp=Q(ol,"u").replace(/punct/g,il).getRegex(),ll="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Lp=Q(ll,"gu").replace(/notPunctSpace/g,sl).replace(/punctSpace/g,Rs).replace(/punct/g,hr).getRegex(),Bp=Q(ll,"gu").replace(/notPunctSpace/g,Mp).replace(/punctSpace/g,Op).replace(/punct/g,il).getRegex(),Wp=Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,sl).replace(/punctSpace/g,Rs).replace(/punct/g,hr).getRegex(),Hp=Q(/\\(punct)/,"gu").replace(/punct/g,hr).getRegex(),jp=Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fp=Q(ws).replace("(?:-->|$)","-->").getRegex(),Gp=Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,zp=Q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Qn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),al=Q(/^!?\[(label)\]\[(ref)\]/).replace("label",Qn).replace("ref",ys).getRegex(),cl=Q(/^!?\[(ref)\](?:\[\])?/).replace("ref",ys).getRegex(),Up=Q("reflink|nolink(?!\\()","g").replace("reflink",al).replace("nolink",cl).getRegex(),Ts={_backpedal:kn,anyPunctuation:Hp,autolink:jp,blockSkip:Np,br:rl,code:Ep,del:kn,emStrongLDelim:$p,emStrongRDelimAst:Lp,emStrongRDelimUnd:Wp,escape:Ap,link:zp,nolink:cl,punctuation:Ip,reflink:al,reflinkSearch:Up,tag:Gp,text:Pp,url:kn},Vp={...Ts,link:Q(/^!?\[(label)\]\((.*?)\)/).replace("label",Qn).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qn).getRegex()},Ur={...Ts,emStrongRDelimAst:Bp,emStrongLDelim:Dp,url:Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},qp={...Ur,br:Q(rl).replace("{2,}","*").getRegex(),text:Q(Ur.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},$n={normal:xs,gfm:Sp,pedantic:Cp},ln={normal:Ts,gfm:Ur,breaks:qp,pedantic:Vp},Kp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ci=e=>Kp[e];function Ke(e,t){if(t){if(Re.escapeTest.test(e))return e.replace(Re.escapeReplace,Ci)}else if(Re.escapeTestNoEncode.test(e))return e.replace(Re.escapeReplaceNoEncode,Ci);return e}function Ai(e){try{e=encodeURI(e).replace(Re.percentDecode,"%")}catch{return null}return e}function Ei(e,t){var i;const n=e.replace(Re.findPipe,(l,o,a)=>{let u=!1,c=o;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Re.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Re.slashPipe,"|");return r}function an(e,t,n){const r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function Zp(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Pi(e,t,n,r,s){const i=t.href,l=t.title||null,o=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}function Jp(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const s=r[1];return t.split(`
`).map(i=>{const l=i.match(n.other.beginningSpace);if(l===null)return i;const[o]=l;return o.length>=s.length?i.slice(s.length):i}).join(`
`)}var Yn=class{constructor(e){re(this,"options");re(this,"rules");re(this,"lexer");this.options=e||Lt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:an(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Jp(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=an(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:an(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=an(t[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let l=!1;const o=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))o.push(n[a]),l=!0;else if(!l)o.push(n[a]);else break;n=n.slice(a);const u=o.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${c}`:c;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=p,n.length===0)break;const d=i.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){const b=d,x=b.raw+`
`+n.join(`
`),R=this.blockquote(x);i[i.length-1]=R,r=r.substring(0,r.length-b.raw.length)+R.raw,s=s.substring(0,s.length-b.text.length)+R.text;break}else if((d==null?void 0:d.type)==="list"){const b=d,x=b.raw+`
`+n.join(`
`),R=this.list(x);i[i.length-1]=R,r=r.substring(0,r.length-d.raw.length)+R.raw,s=s.substring(0,s.length-b.raw.length)+R.raw,n=x.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let p=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),d=e.split(`
`,1)[0],b=!p.trim(),x=0;if(this.options.pedantic?(x=2,c=p.trimStart()):b?x=t[1].length+1:(x=t[2].search(this.rules.other.nonSpaceChar),x=x>4?1:x,c=p.slice(x),x+=t[1].length),b&&this.rules.other.blankLine.test(d)&&(u+=d+`
`,e=e.substring(d.length+1),a=!0),!a){const D=this.rules.other.nextBulletRegex(x),P=this.rules.other.hrRegex(x),M=this.rules.other.fencesBeginRegex(x),O=this.rules.other.headingBeginRegex(x),Y=this.rules.other.htmlBeginRegex(x);for(;e;){const pe=e.split(`
`,1)[0];let X;if(d=pe,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),X=d):X=d.replace(this.rules.other.tabCharGlobal,"    "),M.test(d)||O.test(d)||Y.test(d)||D.test(d)||P.test(d))break;if(X.search(this.rules.other.nonSpaceChar)>=x||!d.trim())c+=`
`+X.slice(x);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(p)||O.test(p)||P.test(p))break;c+=`
`+d}!b&&!d.trim()&&(b=!0),u+=pe+`
`,e=e.substring(pe.length+1),p=X.slice(x)}}s.loose||(l?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let R=null,B;this.options.gfm&&(R=this.rules.other.listIsTask.exec(c),R&&(B=R[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!R,checked:B,loose:!1,text:c,tokens:[]}),s.raw+=u}const o=s.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let a=0;a<s.items.length;a++)if(this.lexer.state.top=!1,s.items[a].tokens=this.lexer.blockTokens(s.items[a].text,[]),!s.loose){const u=s.items[a].tokens.filter(p=>p.type==="space"),c=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=c}if(s.loose)for(let a=0;a<s.items.length;a++)s.items[a].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=Ei(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<n.length;o++)i.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:i.align[o]});for(const o of s)i.rows.push(Ei(o,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=an(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Zp(t[2],"()");if(i===-2)return;if(i>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Pi(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Pi(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let l,o,a=i,u=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(r=c.exec(t))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){a+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){u+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+u);const p=[...r[0]][0].length,d=e.slice(0,i+r.index+p+o);if(Math.min(i,o)%2){const x=d.slice(1,-1);return{type:"em",raw:d,text:x,tokens:this.lexer.inlineTokens(x)}}const b=d.slice(2,-2);return{type:"strong",raw:d,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},at=class Vr{constructor(t){re(this,"tokens");re(this,"options");re(this,"state");re(this,"tokenizer");re(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Lt,this.options.tokenizer=this.options.tokenizer||new Yn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Re,block:$n.normal,inline:ln.normal};this.options.pedantic?(n.block=$n.pedantic,n.inline=ln.pedantic):this.options.gfm&&(n.block=$n.gfm,this.options.breaks?n.inline=ln.breaks:n.inline=ln.gfm),this.tokenizer.rules=n}static get rules(){return{block:$n,inline:ln}}static lex(t,n){return new Vr(n).lex(t)}static lexInline(t,n){return new Vr(n).inlineTokens(t)}lex(t){t=t.replace(Re.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var s,i,l;for(this.options.pedantic&&(t=t.replace(Re.tabCharGlobal,"    ").replace(Re.spaceLine,""));t;){let o;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(o=u.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);const u=n.at(-1);o.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let a=t;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const c=t.slice(1);let p;this.options.extensions.startBlock.forEach(d=>{p=d.call({lexer:this},c),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o),r=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var o,a,u;let r=t,s=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,l="";for(;t;){i||(l=""),i=!1;let c;if((a=(o=this.options.extensions)==null?void 0:o.inline)!=null&&a.some(d=>(c=d.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const d=n.at(-1);c.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=c.raw,d.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,r,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let p=t;if((u=this.options.extensions)!=null&&u.startInline){let d=1/0;const b=t.slice(1);let x;this.options.extensions.startInline.forEach(R=>{x=R.call({lexer:this},b),typeof x=="number"&&x>=0&&(d=Math.min(d,x))}),d<1/0&&d>=0&&(p=t.substring(0,d+1))}if(c=this.tokenizer.inlineText(p)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),i=!0;const d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=c.raw,d.text+=c.text):n.push(c);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}},Xn=class{constructor(e){re(this,"options");re(this,"parser");this.options=e||Lt}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const r=(i=(t||"").match(Re.notSpaceStart))==null?void 0:i[0],s=e.replace(Re.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Ke(r)+'">'+(n?s:Ke(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Ke(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let l=0;l<e.items.length;l++){const o=e.items[l];r+=this.listitem(o)}const s=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+Ke(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let r="";for(let s=0;s<e.rows.length;s++){const i=e.rows[s];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ke(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),s=Ai(e);if(s===null)return r;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+Ke(t)+'"'),i+=">"+r+"</a>",i}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Ai(e);if(s===null)return Ke(n);e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${Ke(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ke(e.text)}},Ss=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ct=class qr{constructor(t){re(this,"options");re(this,"renderer");re(this,"textRenderer");this.options=t||Lt,this.options.renderer=this.options.renderer||new Xn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ss}static parse(t,n){return new qr(n).parse(t)}static parseInline(t,n){return new qr(n).parseInline(t)}parse(t,n=!0){var s,i;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[o.type]){const u=o,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=c||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;l+1<t.length&&t[l+1].type==="text";)u=t[++l],c+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(t,n=this.renderer){var s,i;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[o.type]){const u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=u||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},Er,jn=(Er=class{constructor(e){re(this,"options");re(this,"block");this.options=e||Lt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?at.lex:at.lexInline}provideParser(){return this.block?ct.parse:ct.parseInline}},re(Er,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Er),Qp=class{constructor(...e){re(this,"defaults",vs());re(this,"options",this.setOptions);re(this,"parse",this.parseMarkdown(!0));re(this,"parseInline",this.parseMarkdown(!1));re(this,"Parser",ct);re(this,"Renderer",Xn);re(this,"TextRenderer",Ss);re(this,"Lexer",at);re(this,"Tokenizer",Yn);re(this,"Hooks",jn);this.use(...e)}walkTokens(e,t){var r,s;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const l=i;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const a=l[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=t.renderers[s.name];i?t.renderers[s.name]=function(...l){let o=s.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[s.level];i?i.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){const s=this.defaults.renderer||new Xn(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const l=i,o=n.renderer[l],a=s[l];s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Yn(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,o=n.tokenizer[l],a=s[l];s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new jn;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const l=i,o=n.hooks[l],a=s[l];jn.passThroughHooks.has(i)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(s,u)).then(p=>a.call(s,p));const c=o.call(s,u);return a.call(s,c)}:s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),s&&(o=o.concat(s.call(this,l))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return at.lex(e,t??this.defaults)}parser(e,t){return ct.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const s={...r},i={...this.defaults,...s},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const o=i.hooks?i.hooks.provideLexer():e?at.lex:at.lexInline,a=i.hooks?i.hooks.provideParser():e?ct.parse:ct.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>o(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let u=o(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return l(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+Ke(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},Nt=new Qp;function U(e,t){return Nt.parse(e,t)}U.options=U.setOptions=function(e){return Nt.setOptions(e),U.defaults=Nt.defaults,Xo(U.defaults),U};U.getDefaults=vs;U.defaults=Lt;U.use=function(...e){return Nt.use(...e),U.defaults=Nt.defaults,Xo(U.defaults),U};U.walkTokens=function(e,t){return Nt.walkTokens(e,t)};U.parseInline=Nt.parseInline;U.Parser=ct;U.parser=ct.parse;U.Renderer=Xn;U.TextRenderer=Ss;U.Lexer=at;U.lexer=at.lex;U.Tokenizer=Yn;U.Hooks=jn;U.parse=U;U.options;U.setOptions;U.use;U.walkTokens;U.parseInline;ct.parse;at.lex;const Yp=Object.fromEntries(Ut.map(e=>[e.path,e.slug])),Xp=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),ed=(e,t)=>{const n=e.split("/");n.pop();const r=t.split("/");for(const s of r)if(!(!s||s===".")){if(s===".."){n.pop();continue}n.push(s)}return Xp(n.join("/"))},td=(e,t)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:")||e.startsWith("#"))return e;const[n,r]=e.split("#"),s=n?ed(t,n):t;if(s.endsWith(".md")){const i=Yp[s];if(i)return`#/docs/${i}`}return s.startsWith("images/")?`/docs-images/${s.substring(7)}`:e},Cs=new U.Renderer;Cs.link=({href:e,title:t,tokens:n})=>{const r=U.Parser.parseInline(n),s=e||"",i=/^https?:\/\//i.test(s),l=t?` title="${t}"`:"";return`<a href="${s}"${l}${i?' target="_blank" rel="noreferrer"':""}>${r}</a>`};Cs.image=({href:e,title:t,text:n})=>{const r=t?` title="${t}"`:"";return`<img src="${e}" alt="${n||""}"${r} />`};U.setOptions({gfm:!0,breaks:!0});const nd=(e,t)=>{const n=String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(r,s,i)=>{const l=td(i,t);return`[${s}](${l})`});return U.parse(n,{renderer:Cs})},rd={class:"page-shell container docs-layout-page"},sd={class:"docs-sidebar surface-card"},id={key:0,class:"docs-article-shell"},od={class:"doc-breadcrumb"},ld={class:"doc-header surface-card"},ad={class:"card-label"},cd={class:"doc-meta"},ud=["innerHTML"],fd={class:"doc-footer surface-card"},pd={key:1,class:"docs-article-shell"},dd={class:"empty-state"},hd={__name:"DocArticlePage",setup(e){const t=ef(),n=me(()=>Yo[t.params.slug]),r=me(()=>{if(!n.value)return"";const o=gp[n.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`;return nd(o,n.value.path)}),s=me(()=>Ut.findIndex(o=>{var a;return o.slug===((a=n.value)==null?void 0:a.slug)})),i=me(()=>s.value>0?Ut[s.value-1]:null),l=me(()=>s.value>=0&&s.value<Ut.length-1?Ut[s.value+1]:null);return(o,a)=>{const u=Dt("router-link");return J(),ce("div",rd,[m("aside",sd,[a[0]||(a[0]=m("div",{class:"docs-sidebar-head"},[m("span",{class:"eyebrow"},"DOCS"),m("h2",null,"技术文档"),m("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(J(!0),ce(Pe,null,Rn(Ot(Jn),c=>(J(),ce("div",{key:c.key,class:"docs-nav-group"},[m("h3",null,se(c.title),1),(J(!0),ce(Pe,null,Rn(c.items,p=>{var d;return J(),un(u,{key:p.slug,to:`/docs/${p.slug}`,class:en(["docs-nav-link",{active:((d=n.value)==null?void 0:d.slug)===p.slug}])},{default:oe(()=>[m("span",null,se(p.title),1),m("small",null,se(p.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))]),n.value?(J(),ce("section",id,[m("div",od,[F(u,{to:"/docs"},{default:oe(()=>[...a[1]||(a[1]=[fe("文档首页",-1)])]),_:1}),a[2]||(a[2]=m("span",null,"/",-1)),m("span",null,se(n.value.groupTitle),1)]),m("header",ld,[m("div",null,[m("span",ad,se(n.value.tag),1),m("h1",null,se(n.value.title),1),m("p",null,se(n.value.description),1)]),m("div",cd,[m("span",null,se(n.value.groupTitle),1),m("span",null,se(n.value.minutes),1)])]),m("article",{class:"surface-card doc-article markdown-body",innerHTML:r.value},null,8,ud),m("footer",fd,[i.value?(J(),un(u,{key:0,class:"doc-pager",to:`/docs/${i.value.slug}`},{default:oe(()=>[a[3]||(a[3]=m("small",null,"上一篇",-1)),m("strong",null,se(i.value.title),1)]),_:1},8,["to"])):(J(),un(u,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:oe(()=>[...a[4]||(a[4]=[m("small",null,"返回",-1),m("strong",null,"文档首页",-1)])]),_:1})),l.value?(J(),un(u,{key:2,class:"doc-pager align-right",to:`/docs/${l.value.slug}`},{default:oe(()=>[a[5]||(a[5]=m("small",null,"下一篇",-1)),m("strong",null,se(l.value.title),1)]),_:1},8,["to"])):ds("",!0)])])):(J(),ce("section",pd,[m("div",dd,[a[7]||(a[7]=m("strong",null,"没有找到对应文档。",-1)),a[8]||(a[8]=m("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),F(u,{class:"button primary",to:"/docs"},{default:oe(()=>[...a[6]||(a[6]=[fe("返回文档首页",-1)])]),_:1})])]))])}}},gd={},md={class:"page-shell container"};function bd(e,t){return J(),ce("div",md,[...t[0]||(t[0]=[Mt('<section class="page-hero"><span class="eyebrow">COMMUNITY</span><h1>社区、反馈与项目入口</h1><p> 对外站点的目标不是把信息分散，而是把下载、反馈、交流、贡献和安全说明集中到清晰入口里。 </p></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">GitHub</span><h3>仓库与更新</h3><p>查看公开仓库、Releases、更新记录与文档源内容。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree" target="_blank" rel="noreferrer">打开仓库 →</a></article><article class="feature-card compact"><span class="card-label">Feedback</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交 Issues →</a></article><article class="feature-card compact"><span class="card-label">Community</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与使用沟通。</span></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>公开站点建议保留的入口</h2></div><div class="feature-grid two"><article class="feature-card"><h3>下载与版本</h3><p>通过 Releases 作为对外下载主入口，官网只负责做清晰导航与版本说明。</p></article><article class="feature-card"><h3>文档与 Wiki</h3><p>部署、运维、资源包链路、配置与架构说明已经可以直接在官网站内阅读。</p></article><article class="feature-card"><h3>贡献与安全</h3><p>明确公开 `CONTRIBUTING.md` 与 `SECURITY.md`，让外部协作和问题上报有固定路径。</p></article><article class="feature-card"><h3>社区与反馈</h3><p>把 GitHub 与 QQ 群分工清楚：一个偏沉淀，一个偏即时交流。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>项目治理入口</h2></div><div class="link-list"><a href="https://github.com/TreeMC-cloud/Tree/releases" target="_blank" rel="noreferrer">Releases</a><a href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">Discussions</a><a href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">Issues</a><a href="https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">贡献指南</a><a href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">安全策略</a></div></section>',4)])])}const vd=fr(gd,[["render",bd]]),_d=[{path:"/",component:_f,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:xf,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:Wf,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:Jf,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:hd,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/community",component:vd,meta:{title:"社区与支持",description:"获取 TreeCore 的社区入口、反馈方式、贡献与安全说明。"}}],ul=Xu({history:Iu("/"),routes:_d}),fl=Mc(Vc);ul.afterEach(e=>{var l,o,a;const t="TreeCore 官方网站",n=(l=e.params)!=null&&l.slug?Yo[e.params.slug]:null,r=(n==null?void 0:n.title)||((o=e.meta)==null?void 0:o.title),s=(n==null?void 0:n.description)||((a=e.meta)==null?void 0:a.description);document.title=r?`${r} | ${t}`:t;const i=document.querySelector('meta[name="description"]');i&&s&&i.setAttribute("content",s),window.scrollTo({top:0,behavior:"smooth"})});fl.use(ul);fl.mount("#app");

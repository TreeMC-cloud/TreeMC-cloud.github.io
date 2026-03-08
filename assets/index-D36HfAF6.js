var la=Object.defineProperty;var aa=(e,t,n)=>t in e?la(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>aa(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const me={},fn=[],pt=()=>{},lo=()=>!1,_s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yr=e=>e.startsWith("onUpdate:"),Te=Object.assign,kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ca=Object.prototype.hasOwnProperty,ae=(e,t)=>ca.call(e,t),U=Array.isArray,dn=e=>Vn(e)==="[object Map]",ao=e=>Vn(e)==="[object Set]",Xr=e=>Vn(e)==="[object Date]",V=e=>typeof e=="function",we=e=>typeof e=="string",gt=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",co=e=>(ce(e)||V(e))&&V(e.then)&&V(e.catch),uo=Object.prototype.toString,Vn=e=>uo.call(e),ua=e=>Vn(e).slice(8,-1),fo=e=>Vn(e)==="[object Object]",wr=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Sn=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fa=/-\w/g,Je=ys(e=>e.replace(fa,t=>t.slice(1).toUpperCase())),da=/\B([A-Z])/g,Xt=ys(e=>e.replace(da,"-$1").toLowerCase()),ks=ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ds=ys(e=>e?`on${ks(e)}`:""),Bt=(e,t)=>!Object.is(e,t),es=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},po=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pa=e=>{const t=we(e)?Number(e):NaN;return isNaN(t)?e:t};let ei;const ws=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=we(s)?ba(s):xs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(we(e)||ce(e))return e}const ha=/;(?![^(]*\))/g,ga=/:([^]+)/,ma=/\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ma,"").split(ha).forEach(n=>{if(n){const s=n.split(ga);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ie(e){let t="";if(we(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const s=Ie(e[n]);s&&(t+=s+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_a=_r(va);function ho(e){return!!e||e===""}function ya(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Cr(e[s],t[s]);return n}function Cr(e,t){if(e===t)return!0;let n=Xr(e),s=Xr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=gt(e),s=gt(t),n||s)return e===t;if(n=U(e),s=U(t),n||s)return n&&s?ya(e,t):!1;if(n=ce(e),s=ce(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const l in e){const a=e.hasOwnProperty(l),o=t.hasOwnProperty(l);if(a&&!o||!a&&o||!Cr(e[l],t[l]))return!1}}return String(e)===String(t)}const go=e=>!!(e&&e.__v_isRef===!0),O=e=>we(e)?e:e==null?"":U(e)||ce(e)&&(e.toString===uo||!V(e.toString))?go(e)?O(e.value):JSON.stringify(e,mo,2):String(e),mo=(e,t)=>go(t)?mo(e,t.value):dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Bs(s,i)+" =>"]=r,n),{})}:ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Bs(n))}:gt(t)?Bs(t):ce(t)&&!U(t)&&!fo(t)?String(t):t,Bs=(e,t="")=>{var n;return gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ka{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wa(){return je}let _e;const Ws=new WeakSet;class bo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ws.has(this)&&(Ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),yo(this);const t=_e,n=Xe;_e=this,Xe=!0;try{return this.fn()}finally{ko(this),_e=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sr(t);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){er(this)&&this.run()}get dirty(){return er(this)}}let vo=0,An,En;function _o(e,t=!1){if(e.flags|=8,t){e.next=En,En=e;return}e.next=An,An=e}function Tr(){vo++}function Rr(){if(--vo>0)return;if(En){let t=En;for(En=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;An;){let t=An;for(An=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function yo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ko(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Sr(s),xa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function er(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(wo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function wo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nn)||(e.globalVersion=Nn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!er(e))))return;e.flags|=2;const t=e.dep,n=_e,s=Xe;_e=e,Xe=!0;try{yo(e);const r=e.fn(e._value);(t.version===0||Bt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{_e=n,Xe=s,ko(e),e.flags&=-3}}function Sr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function xa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const xo=[];function Rt(){xo.push(Xe),Xe=!1}function St(){const e=xo.pop();Xe=e===void 0?!0:e}function ti(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=_e;_e=void 0;try{t()}finally{_e=n}}}let Nn=0;class Ca{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ar{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Xe||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Ca(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,Co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=s)}return n}trigger(t){this.version++,Nn++,this.notify(t)}notify(t){Tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rr()}}}function Co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Co(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const tr=new WeakMap,Zt=Symbol(""),nr=Symbol(""),Dn=Symbol("");function Ee(e,t,n){if(Xe&&_e){let s=tr.get(e);s||tr.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ar),r.map=s,r.key=n),r.track()}}function wt(e,t,n,s,r,i){const l=tr.get(e);if(!l){Nn++;return}const a=o=>{o&&o.trigger()};if(Tr(),t==="clear")l.forEach(a);else{const o=U(e),u=o&&wr(n);if(o&&n==="length"){const c=Number(s);l.forEach((d,p)=>{(p==="length"||p===Dn||!gt(p)&&p>=c)&&a(d)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),u&&a(l.get(Dn)),t){case"add":o?u&&a(l.get("length")):(a(l.get(Zt)),dn(e)&&a(l.get(nr)));break;case"delete":o||(a(l.get(Zt)),dn(e)&&a(l.get(nr)));break;case"set":dn(e)&&a(l.get(Zt));break}}Rr()}function rn(e){const t=re(e);return t===e?t:(Ee(t,"iterate",Dn),Ze(e)?t:t.map(tt))}function Cs(e){return Ee(e=re(e),"iterate",Dn),e}function Ot(e,t){return At(e)?gn(Jt(e)?tt(t):t):tt(t)}const Ta={__proto__:null,[Symbol.iterator](){return Hs(this,Symbol.iterator,e=>Ot(this,e))},concat(...e){return rn(this).concat(...e.map(t=>U(t)?rn(t):t))},entries(){return Hs(this,"entries",e=>(e[1]=Ot(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(s=>Ot(this,s)),arguments)},find(e,t){return bt(this,"find",e,t,n=>Ot(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>Ot(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return _n(this,"pop")},push(...e){return _n(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return _n(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return _n(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return _n(this,"unshift",e)},values(){return Hs(this,"values",e=>Ot(this,e))}};function Hs(e,t,n){const s=Cs(e),r=s[t]();return s!==e&&!Ze(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ra=Array.prototype;function bt(e,t,n,s,r,i){const l=Cs(e),a=l!==e&&!Ze(e),o=l[t];if(o!==Ra[t]){const d=o.apply(e,i);return a?tt(d):d}let u=n;l!==e&&(a?u=function(d,p){return n.call(this,Ot(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=o.call(l,u,s);return a&&r?r(c):c}function ni(e,t,n,s){const r=Cs(e);let i=n;return r!==e&&(Ze(e)?n.length>3&&(i=function(l,a,o){return n.call(this,l,a,o,e)}):i=function(l,a,o){return n.call(this,l,Ot(e,a),o,e)}),r[t](i,...s)}function Fs(e,t,n){const s=re(e);Ee(s,"iterate",Dn);const r=s[t](...n);return(r===-1||r===!1)&&Ir(n[0])?(n[0]=re(n[0]),s[t](...n)):r}function _n(e,t,n=[]){Rt(),Tr();const s=re(e)[t].apply(e,n);return Rr(),St(),s}const Sa=_r("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt));function Aa(e){gt(e)||(e=String(e));const t=re(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ro{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ba:Po:i?Eo:Ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=U(t);if(!r){let o;if(l&&(o=Ta[n]))return o;if(n==="hasOwnProperty")return Aa}const a=Reflect.get(t,n,$e(t)?t:s);if((gt(n)?To.has(n):Sa(n))||(r||Ee(t,"get",n),i))return a;if($e(a)){const o=l&&wr(n)?a:a.value;return r&&ce(o)?rr(o):o}return ce(a)?r?rr(a):Ts(a):a}}class So extends Ro{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const l=U(t)&&wr(n);if(!this._isShallow){const u=At(i);if(!Ze(s)&&!At(s)&&(i=re(i),s=re(s)),!l&&$e(i)&&!$e(s))return u||(i.value=s),!0}const a=l?Number(n)<t.length:ae(t,n),o=Reflect.set(t,n,s,$e(t)?t:r);return t===re(r)&&(a?Bt(s,i)&&wt(t,"set",n,s):wt(t,"add",n,s)),o}deleteProperty(t,n){const s=ae(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&wt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!gt(n)||!To.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",U(t)?"length":Zt),Reflect.ownKeys(t)}}class Ea extends Ro{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Pa=new So,Ia=new Ea,$a=new So(!0);const sr=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function Oa(e,t,n){return function(...s){const r=this.__v_raw,i=re(r),l=dn(i),a=e==="entries"||e===Symbol.iterator&&l,o=e==="keys"&&l,u=r[e](...s),c=n?sr:t?gn:tt;return!t&&Ee(i,"iterate",o?nr:Zt),Te(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function Qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function La(e,t){const n={get(r){const i=this.__v_raw,l=re(i),a=re(r);e||(Bt(r,a)&&Ee(l,"get",r),Ee(l,"get",a));const{has:o}=Jn(l),u=t?sr:e?gn:tt;if(o.call(l,r))return u(i.get(r));if(o.call(l,a))return u(i.get(a));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(re(r),"iterate",Zt),r.size},has(r){const i=this.__v_raw,l=re(i),a=re(r);return e||(Bt(r,a)&&Ee(l,"has",r),Ee(l,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const l=this,a=l.__v_raw,o=re(a),u=t?sr:e?gn:tt;return!e&&Ee(o,"iterate",Zt),a.forEach((c,d)=>r.call(i,u(c),u(d),l))}};return Te(n,e?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(r){!t&&!Ze(r)&&!At(r)&&(r=re(r));const i=re(this);return Jn(i).has.call(i,r)||(i.add(r),wt(i,"add",r,r)),this},set(r,i){!t&&!Ze(i)&&!At(i)&&(i=re(i));const l=re(this),{has:a,get:o}=Jn(l);let u=a.call(l,r);u||(r=re(r),u=a.call(l,r));const c=o.call(l,r);return l.set(r,i),u?Bt(i,c)&&wt(l,"set",r,i):wt(l,"add",r,i),this},delete(r){const i=re(this),{has:l,get:a}=Jn(i);let o=l.call(i,r);o||(r=re(r),o=l.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return o&&wt(i,"delete",r,void 0),u},clear(){const r=re(this),i=r.size!==0,l=r.clear();return i&&wt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Oa(r,e,t)}),n}function Er(e,t){const n=La(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const Ma={get:Er(!1,!1)},Na={get:Er(!1,!0)},Da={get:Er(!0,!1)};const Ao=new WeakMap,Eo=new WeakMap,Po=new WeakMap,Ba=new WeakMap;function Wa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(e){return e.__v_skip||!Object.isExtensible(e)?0:Wa(ua(e))}function Ts(e){return At(e)?e:Pr(e,!1,Pa,Ma,Ao)}function Io(e){return Pr(e,!1,$a,Na,Eo)}function rr(e){return Pr(e,!0,Ia,Da,Po)}function Pr(e,t,n,s,r){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ha(e);if(i===0)return e;const l=r.get(e);if(l)return l;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function Jt(e){return At(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Ir(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Fa(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&po(e,"__v_skip",!0),e}const tt=e=>ce(e)?Ts(e):e,gn=e=>ce(e)?rr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function Se(e){return $o(e,!1)}function ja(e){return $o(e,!0)}function $o(e,t){return $e(e)?e:new za(e,t)}class za{constructor(t,n){this.dep=new Ar,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:tt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ze(t)||At(t);t=s?t:re(t),Bt(t,n)&&(this._rawValue=t,this._value=s?t:tt(t),this.dep.trigger())}}function pe(e){return $e(e)?e.value:e}const Ua={get:(e,t,n)=>t==="__v_raw"?e:pe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Oo(e){return Jt(e)?e:new Proxy(e,Ua)}class Ga{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ar(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return _o(this,!0),!0}get value(){const t=this.dep.track();return wo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Va(e,t,n=!1){let s,r;return V(e)?s=e:(s=e.get,r=e.set),new Ga(s,r,n)}const Yn={},ls=new WeakMap;let Vt;function qa(e,t=!1,n=Vt){if(n){let s=ls.get(n);s||ls.set(n,s=[]),s.push(e)}}function Ka(e,t,n=me){const{immediate:s,deep:r,once:i,scheduler:l,augmentJob:a,call:o}=n,u=P=>r?P:Ze(P)||r===!1||r===0?xt(P,1):xt(P);let c,d,p,m,y=!1,v=!1;if($e(e)?(d=()=>e.value,y=Ze(e)):Jt(e)?(d=()=>u(e),y=!0):U(e)?(v=!0,y=e.some(P=>Jt(P)||Ze(P)),d=()=>e.map(P=>{if($e(P))return P.value;if(Jt(P))return u(P);if(V(P))return o?o(P,2):P()})):V(e)?t?d=o?()=>o(e,2):e:d=()=>{if(p){Rt();try{p()}finally{St()}}const P=Vt;Vt=c;try{return o?o(e,3,[m]):e(m)}finally{Vt=P}}:d=pt,t&&r){const P=d,Z=r===!0?1/0:r;d=()=>xt(P(),Z)}const A=wa(),_=()=>{c.stop(),A&&A.active&&kr(A.effects,c)};if(i&&t){const P=t;t=(...Z)=>{P(...Z),_()}}let R=v?new Array(e.length).fill(Yn):Yn;const T=P=>{if(!(!(c.flags&1)||!c.dirty&&!P))if(t){const Z=c.run();if(r||y||(v?Z.some((ne,Q)=>Bt(ne,R[Q])):Bt(Z,R))){p&&p();const ne=Vt;Vt=c;try{const Q=[Z,R===Yn?void 0:v&&R[0]===Yn?[]:R,m];R=Z,o?o(t,3,Q):t(...Q)}finally{Vt=ne}}}else c.run()};return a&&a(T),c=new bo(d),c.scheduler=l?()=>l(T,!1):T,m=P=>qa(P,!1,c),p=c.onStop=()=>{const P=ls.get(c);if(P){if(o)o(P,4);else for(const Z of P)Z();ls.delete(c)}},t?s?T(!0):R=c.run():l?l(T.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function xt(e,t=1/0,n){if(t<=0||!ce(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))xt(e.value,t,n);else if(U(e))for(let s=0;s<e.length;s++)xt(e[s],t,n);else if(ao(e)||dn(e))e.forEach(s=>{xt(s,t,n)});else if(fo(e)){for(const s in e)xt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&xt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(e,t,n,s){try{return s?e(...s):e()}catch(r){Rs(r,t,n)}}function nt(e,t,n,s){if(V(e)){const r=qn(e,t,n,s);return r&&co(r)&&r.catch(i=>{Rs(i,t,n)}),r}if(U(e)){const r=[];for(let i=0;i<e.length;i++)r.push(nt(e[i],t,n,s));return r}}function Rs(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||me;if(t){let a=t.parent;const o=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,u)===!1)return}a=a.parent}if(i){Rt(),qn(i,null,10,[e,o,u]),St();return}}Za(e,n,r,s,l)}function Za(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let ut=-1;const pn=[];let Lt=null,on=0;const Lo=Promise.resolve();let as=null;function Bn(e){const t=as||Lo;return e?t.then(this?e.bind(this):e):t}function Ja(e){let t=ut+1,n=Me.length;for(;t<n;){const s=t+n>>>1,r=Me[s],i=Wn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function $r(e){if(!(e.flags&1)){const t=Wn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Wn(n)?Me.push(e):Me.splice(Ja(t),0,e),e.flags|=1,Mo()}}function Mo(){as||(as=Lo.then(Do))}function Qa(e){U(e)?pn.push(...e):Lt&&e.id===-1?Lt.splice(on+1,0,e):e.flags&1||(pn.push(e),e.flags|=1),Mo()}function si(e,t,n=ut+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(e){if(pn.length){const t=[...new Set(pn)].sort((n,s)=>Wn(n)-Wn(s));if(pn.length=0,Lt){Lt.push(...t);return}for(Lt=t,on=0;on<Lt.length;on++){const n=Lt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lt=null,on=0}}const Wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Do(e){try{for(ut=0;ut<Me.length;ut++){const t=Me[ut];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ut<Me.length;ut++){const t=Me[ut];t&&(t.flags&=-2)}ut=-1,Me.length=0,No(),as=null,(Me.length||pn.length)&&Do()}}let Ge=null,Bo=null;function cs(e){const t=Ge;return Ge=e,Bo=e&&e.type.__scopeId||null,t}function K(e,t=Ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ds(-1);const i=cs(t);let l;try{l=e(...r)}finally{cs(i),s._d&&ds(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Or(e,t){if(Ge===null)return e;const n=$s(Ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,a,o=me]=t[r];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&xt(l),s.push({dir:i,instance:n,value:l,oldValue:void 0,arg:a,modifiers:o}))}return e}function jt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let l=0;l<r.length;l++){const a=r[l];i&&(a.oldValue=i[l].value);let o=a.dir[s];o&&(Rt(),nt(o,n,8,[e.el,a,e,t]),St())}}function ts(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function et(e,t,n=!1){const s=_l();if(s||hn){let r=hn?hn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const Ya=Symbol.for("v-scx"),Xa=()=>et(Ya);function Qt(e,t,n){return Wo(e,t,n)}function Wo(e,t,n=me){const{immediate:s,deep:r,flush:i,once:l}=n,a=Te({},n),o=t&&s||!t&&i!=="post";let u;if(jn){if(i==="sync"){const m=Xa();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!o){const m=()=>{};return m.stop=pt,m.resume=pt,m.pause=pt,m}}const c=Pe;a.call=(m,y,v)=>nt(m,c,y,v);let d=!1;i==="post"?a.scheduler=m=>{Fe(m,c&&c.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,y)=>{y?m():$r(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=Ka(e,t,a);return jn&&(u?u.push(p):o&&p()),p}function ec(e,t,n){const s=this.proxy,r=we(e)?e.includes(".")?Ho(s,e):()=>s[e]:e.bind(s,s);let i;V(t)?i=t:(i=t.handler,n=t);const l=Kn(this),a=Wo(r,i.bind(s),n);return l(),a}function Ho(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const tc=Symbol("_vte"),Fo=e=>e.__isTeleport,ft=Symbol("_leaveCb"),yn=Symbol("_enterCb");function nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{e.isMounted=!0}),Es(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],jo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},zo=e=>{const t=e.subTree;return t.component?zo(t.component):t},sc={name:"BaseTransition",props:jo,setup(e,{slots:t}){const n=_l(),s=nc();return()=>{const r=t.default&&Vo(t.default(),!0);if(!r||!r.length)return;const i=Uo(r),l=re(e),{mode:a}=l;if(s.isLeaving)return js(i);const o=ri(i);if(!o)return js(i);let u=ir(o,l,s,n,d=>u=d);o.type!==Ne&&Hn(o,u);let c=n.subTree&&ri(n.subTree);if(c&&c.type!==Ne&&!qt(c,o)&&zo(n).type!==Ne){let d=ir(c,l,s,n);if(Hn(c,d),a==="out-in"&&o.type!==Ne)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},js(i);a==="in-out"&&o.type!==Ne?d.delayLeave=(p,m,y)=>{const v=Go(s,c);v[String(c.key)]=c,p[ft]=()=>{m(),p[ft]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Uo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ne){t=n;break}}return t}const rc=sc;function Go(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ir(e,t,n,s,r){const{appear:i,mode:l,persisted:a=!1,onBeforeEnter:o,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:y,onLeaveCancelled:v,onBeforeAppear:A,onAppear:_,onAfterAppear:R,onAppearCancelled:T}=t,P=String(e.key),Z=Go(n,e),ne=(q,se)=>{q&&nt(q,s,9,se)},Q=(q,se)=>{const be=se[1];ne(q,se),U(q)?q.every(B=>B.length<=1)&&be():q.length<=1&&be()},Ae={mode:l,persisted:a,beforeEnter(q){let se=o;if(!n.isMounted)if(i)se=A||o;else return;q[ft]&&q[ft](!0);const be=Z[P];be&&qt(e,be)&&be.el[ft]&&be.el[ft](),ne(se,[q])},enter(q){if(Z[P]===e)return;let se=u,be=c,B=d;if(!n.isMounted)if(i)se=_||u,be=R||c,B=T||d;else return;let ie=!1;q[yn]=ze=>{ie||(ie=!0,ze?ne(B,[q]):ne(be,[q]),Ae.delayedLeave&&Ae.delayedLeave(),q[yn]=void 0)};const Re=q[yn].bind(null,!1);se?Q(se,[q,Re]):Re()},leave(q,se){const be=String(e.key);if(q[yn]&&q[yn](!0),n.isUnmounting)return se();ne(p,[q]);let B=!1;q[ft]=Re=>{B||(B=!0,se(),Re?ne(v,[q]):ne(y,[q]),q[ft]=void 0,Z[be]===e&&delete Z[be])};const ie=q[ft].bind(null,!1);Z[be]=e,m?Q(m,[q,ie]):ie()},clone(q){const se=ir(q,t,n,s,r);return r&&r(se),se}};return Ae}function js(e){if(Ss(e))return e=Wt(e),e.children=null,e}function ri(e){if(!Ss(e))return Fo(e.type)&&e.children?Uo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vo(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===J?(l.patchFlag&128&&r++,s=s.concat(Vo(l.children,t,a))):(t||l.type!==Ne)&&s.push(a!=null?Wt(l,{key:a}):l)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function qo(e,t){return V(e)?Te({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ii(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const us=new WeakMap;function Pn(e,t,n,s,r=!1){if(U(e)){e.forEach((v,A)=>Pn(v,t&&(U(t)?t[A]:t),n,s,r));return}if(In(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Pn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?$s(s.component):s.el,l=r?null:i,{i:a,r:o}=e,u=t&&t.r,c=a.refs===me?a.refs={}:a.refs,d=a.setupState,p=re(d),m=d===me?lo:v=>ii(c,v)?!1:ae(p,v),y=(v,A)=>!(A&&ii(c,A));if(u!=null&&u!==o){if(oi(t),we(u))c[u]=null,m(u)&&(d[u]=null);else if($e(u)){const v=t;y(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(V(o))qn(o,a,12,[l,c]);else{const v=we(o),A=$e(o);if(v||A){const _=()=>{if(e.f){const R=v?m(o)?d[o]:c[o]:y()||!e.k?o.value:c[e.k];if(r)U(R)&&kr(R,i);else if(U(R))R.includes(i)||R.push(i);else if(v)c[o]=[i],m(o)&&(d[o]=c[o]);else{const T=[i];y(o,e.k)&&(o.value=T),e.k&&(c[e.k]=T)}}else v?(c[o]=l,m(o)&&(d[o]=l)):A&&(y(o,e.k)&&(o.value=l),e.k&&(c[e.k]=l))};if(l){const R=()=>{_(),us.delete(e)};R.id=-1,us.set(e,R),Fe(R,n)}else oi(e),_()}}}function oi(e){const t=us.get(e);t&&(t.flags|=8,us.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const In=e=>!!e.type.__asyncLoader,Ss=e=>e.type.__isKeepAlive;function ic(e,t){Zo(e,"a",t)}function oc(e,t){Zo(e,"da",t)}function Zo(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(As(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ss(r.parent.vnode)&&lc(s,t,n,r),r=r.parent}}function lc(e,t,n,s){const r=As(t,e,s,!0);Jo(()=>{kr(s[t],r)},n)}function As(e,t,n=Pe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Rt();const a=Kn(n),o=nt(t,n,e,l);return a(),St(),o});return s?r.unshift(i):r.push(i),i}}const Et=e=>(t,n=Pe)=>{(!jn||e==="sp")&&As(e,(...s)=>t(...s),n)},ac=Et("bm"),en=Et("m"),cc=Et("bu"),uc=Et("u"),Es=Et("bum"),Jo=Et("um"),fc=Et("sp"),dc=Et("rtg"),pc=Et("rtc");function hc(e,t=Pe){As("ec",e,t)}const Qo="components";function Ht(e,t){return Xo(Qo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function gc(e){return we(e)?Xo(Qo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=Ge||Pe;if(r){const i=r.type;{const a=Xc(i,!1);if(a&&(a===t||a===Je(t)||a===ks(Je(t))))return i}const l=li(r[e]||i[e],t)||li(r.appContext[e],t);return!l&&s?i:l}}function li(e,t){return e&&(e[t]||e[Je(t)]||e[ks(Je(t))])}function ye(e,t,n,s){let r;const i=n,l=U(e);if(l||we(e)){const a=l&&Jt(e);let o=!1,u=!1;a&&(o=!Ze(e),u=At(e),e=Cs(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(o?u?gn(tt(e[c])):tt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(ce(e))if(e[Symbol.iterator])r=Array.from(e,(a,o)=>t(a,o,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let o=0,u=a.length;o<u;o++){const c=a[o];r[o]=t(e[c],c,o,i)}}else r=[];return r}const or=e=>e?yl(e)?$s(e):or(e.parent):null,$n=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>tl(e),$forceUpdate:e=>e.f||(e.f=()=>{$r(e.update)}),$nextTick:e=>e.n||(e.n=Bn.bind(e.proxy)),$watch:e=>ec.bind(e)}),zs=(e,t)=>e!==me&&!e.__isScriptSetup&&ae(e,t),mc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:l,type:a,appContext:o}=e;if(t[0]!=="$"){const p=l[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(zs(s,t))return l[t]=1,s[t];if(r!==me&&ae(r,t))return l[t]=2,r[t];if(ae(i,t))return l[t]=3,i[t];if(n!==me&&ae(n,t))return l[t]=4,n[t];lr&&(l[t]=0)}}const u=$n[t];let c,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==me&&ae(n,t))return l[t]=4,n[t];if(d=o.config.globalProperties,ae(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return zs(r,t)?(r[t]=n,!0):s!==me&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:l}},a){let o;return!!(n[a]||e!==me&&a[0]!=="$"&&ae(e,a)||zs(t,a)||ae(i,a)||ae(s,a)||ae($n,a)||ae(r.config.globalProperties,a)||(o=l.__cssModules)&&o[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lr=!0;function bc(e){const t=tl(e),n=e.proxy,s=e.ctx;lr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:a,provide:o,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:A,beforeDestroy:_,beforeUnmount:R,destroyed:T,unmounted:P,render:Z,renderTracked:ne,renderTriggered:Q,errorCaptured:Ae,serverPrefetch:q,expose:se,inheritAttrs:be,components:B,directives:ie,filters:Re}=t;if(u&&vc(u,s,null),l)for(const de in l){const oe=l[de];V(oe)&&(s[de]=oe.bind(n))}if(r){const de=r.call(n,n);ce(de)&&(e.data=Ts(de))}if(lr=!0,i)for(const de in i){const oe=i[de],mt=V(oe)?oe.bind(n,n):V(oe.get)?oe.get.bind(n,n):pt,Pt=!V(oe)&&V(oe.set)?oe.set.bind(n):pt,rt=he({get:mt,set:Pt});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Be=>rt.value=Be})}if(a)for(const de in a)el(a[de],s,n,de);if(o){const de=V(o)?o.call(n):o;Reflect.ownKeys(de).forEach(oe=>{ts(oe,de[oe])})}c&&ci(c,e,"c");function xe(de,oe){U(oe)?oe.forEach(mt=>de(mt.bind(n))):oe&&de(oe.bind(n))}if(xe(ac,d),xe(en,p),xe(cc,m),xe(uc,y),xe(ic,v),xe(oc,A),xe(hc,Ae),xe(pc,ne),xe(dc,Q),xe(Es,R),xe(Jo,P),xe(fc,q),U(se))if(se.length){const de=e.exposed||(e.exposed={});se.forEach(oe=>{Object.defineProperty(de,oe,{get:()=>n[oe],set:mt=>n[oe]=mt,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===pt&&(e.render=Z),be!=null&&(e.inheritAttrs=be),B&&(e.components=B),ie&&(e.directives=ie),q&&Ko(e)}function vc(e,t,n=pt){U(e)&&(e=ar(e));for(const s in e){const r=e[s];let i;ce(r)?"default"in r?i=et(r.from||s,r.default,!0):i=et(r.from||s):i=et(r),$e(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i}}function ci(e,t,n){nt(U(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function el(e,t,n,s){let r=s.includes(".")?Ho(n,s):()=>n[s];if(we(e)){const i=t[e];V(i)&&Qt(r,i)}else if(V(e))Qt(r,e.bind(n));else if(ce(e))if(U(e))e.forEach(i=>el(i,t,n,s));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&Qt(r,i,e)}}function tl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let o;return a?o=a:!r.length&&!n&&!s?o=t:(o={},r.length&&r.forEach(u=>fs(o,u,l,!0)),fs(o,t,l)),ce(t)&&i.set(t,o),o}function fs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&fs(e,i,n,!0),r&&r.forEach(l=>fs(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const a=_c[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const _c={data:ui,props:fi,emits:fi,methods:Rn,computed:Rn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Rn,directives:Rn,watch:kc,provide:ui,inject:yc};function ui(e,t){return t?e?function(){return Te(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function yc(e,t){return Rn(ar(e),ar(t))}function ar(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Rn(e,t){return e?Te(Object.create(null),e,t):t}function fi(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:Te(Object.create(null),ai(e),ai(t??{})):t}function kc(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const s in t)n[s]=Oe(e[s],t[s]);return n}function nl(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wc=0;function xc(e,t){return function(s,r=null){V(s)||(s=Te({},s)),r!=null&&!ce(r)&&(r=null);const i=nl(),l=new WeakSet,a=[];let o=!1;const u=i.app={_uid:wc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tu,get config(){return i.config},set config(c){},use(c,...d){return l.has(c)||(c&&V(c.install)?(l.add(c),c.install(u,...d)):V(c)&&(l.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!o){const m=u._ceVNode||H(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),o=!0,u._container=c,c.__vue_app__=u,$s(m.component)}},onUnmount(c){a.push(c)},unmount(){o&&(nt(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=hn;hn=u;try{return c()}finally{hn=d}}};return u}}let hn=null;const Cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Tc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||me;let r=n;const i=t.startsWith("update:"),l=i&&Cc(s,t.slice(7));l&&(l.trim&&(r=n.map(c=>we(c)?c.trim():c)),l.number&&(r=n.map(xr)));let a,o=s[a=Ds(t)]||s[a=Ds(Je(t))];!o&&i&&(o=s[a=Ds(Xt(t))]),o&&nt(o,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,nt(u,e,6,r)}}const Rc=new WeakMap;function sl(e,t,n=!1){const s=n?Rc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let l={},a=!1;if(!V(e)){const o=u=>{const c=sl(u,t,!0);c&&(a=!0,Te(l,c))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!i&&!a?(ce(e)&&s.set(e,null),null):(U(i)?i.forEach(o=>l[o]=null):Te(l,i),ce(e)&&s.set(e,l),l)}function Ps(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Xt(t))||ae(e,t))}function di(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:l,attrs:a,emit:o,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:y,inheritAttrs:v}=e,A=cs(e);let _,R;try{if(n.shapeFlag&4){const P=r||s,Z=P;_=dt(u.call(Z,P,c,d,m,p,y)),R=a}else{const P=t;_=dt(P.length>1?P(d,{attrs:a,slots:l,emit:o}):P(d,null)),R=t.props?a:Sc(a)}}catch(P){On.length=0,Rs(P,e,1),_=H(Ne)}let T=_;if(R&&v!==!1){const P=Object.keys(R),{shapeFlag:Z}=T;P.length&&Z&7&&(i&&P.some(yr)&&(R=Ac(R,i)),T=Wt(T,R,!1,!0))}return n.dirs&&(T=Wt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Hn(T,n.transition),_=T,cs(A),_}const Sc=e=>{let t;for(const n in e)(n==="class"||n==="style"||_s(n))&&((t||(t={}))[n]=e[n]);return t},Ac=(e,t)=>{const n={};for(const s in e)(!yr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ec(e,t,n){const{props:s,children:r,component:i}=e,{props:l,children:a,patchFlag:o}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?pi(s,l,u):!!l;if(o&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(rl(l,s,p)&&!Ps(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===l?!1:s?l?pi(s,l,u):!0:!!l;return!1}function pi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(rl(t,e,i)&&!Ps(n,i))return!0}return!1}function rl(e,t,n){const s=e[n],r=t[n];return n==="style"&&ce(s)&&ce(r)?!Cr(s,r):s!==r}function Pc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const il={},ol=()=>Object.create(il),ll=e=>Object.getPrototypeOf(e)===il;function Ic(e,t,n,s=!1){const r={},i=ol();e.propsDefaults=Object.create(null),al(e,t,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);n?e.props=s?r:Io(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function $c(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,a=re(r),[o]=e.propsOptions;let u=!1;if((s||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Ps(e.emitsOptions,p))continue;const m=t[p];if(o)if(ae(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const y=Je(p);r[y]=cr(o,a,y,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{al(e,t,r,i)&&(u=!0);let c;for(const d in a)(!t||!ae(t,d)&&((c=Xt(d))===d||!ae(t,c)))&&(o?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=cr(o,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!ae(t,d))&&(delete i[d],u=!0)}u&&wt(e.attrs,"set","")}function al(e,t,n,s){const[r,i]=e.propsOptions;let l=!1,a;if(t)for(let o in t){if(Sn(o))continue;const u=t[o];let c;r&&ae(r,c=Je(o))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ps(e.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,l=!0)}if(i){const o=re(n),u=a||me;for(let c=0;c<i.length;c++){const d=i[c];n[d]=cr(r,o,d,u[d],e,!ae(u,d))}}return l}function cr(e,t,n,s,r,i){const l=e[n];if(l!=null){const a=ae(l,"default");if(a&&s===void 0){const o=l.default;if(l.type!==Function&&!l.skipFactory&&V(o)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Kn(r);s=u[n]=o.call(null,t),c()}}else s=o;r.ce&&r.ce._setProp(n,s)}l[0]&&(i&&!a?s=!1:l[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}const Oc=new WeakMap;function cl(e,t,n=!1){const s=n?Oc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,l={},a=[];let o=!1;if(!V(e)){const c=d=>{o=!0;const[p,m]=cl(d,t,!0);Te(l,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!o)return ce(e)&&s.set(e,fn),fn;if(U(i))for(let c=0;c<i.length;c++){const d=Je(i[c]);hi(d)&&(l[d]=me)}else if(i)for(const c in i){const d=Je(c);if(hi(d)){const p=i[c],m=l[d]=U(p)||V(p)?{type:p}:Te({},p),y=m.type;let v=!1,A=!0;if(U(y))for(let _=0;_<y.length;++_){const R=y[_],T=V(R)&&R.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(A=!1)}else v=V(y)&&y.name==="Boolean";m[0]=v,m[1]=A,(v||ae(m,"default"))&&a.push(d)}}const u=[l,a];return ce(e)&&s.set(e,u),u}function hi(e){return e[0]!=="$"&&!Sn(e)}const Lr=e=>e==="_"||e==="_ctx"||e==="$stable",Mr=e=>U(e)?e.map(dt):[dt(e)],Lc=(e,t,n)=>{if(t._n)return t;const s=K((...r)=>Mr(t(...r)),n);return s._c=!1,s},ul=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Lr(r))continue;const i=e[r];if(V(i))t[r]=Lc(r,i,s);else if(i!=null){const l=Mr(i);t[r]=()=>l}}},fl=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const s in t)(n||!Lr(s))&&(e[s]=t[s])},Mc=(e,t,n)=>{const s=e.slots=ol();if(e.vnode.shapeFlag&32){const r=t._;r?(dl(s,t,n),n&&po(s,"_",r,!0)):ul(t,s)}else t&&fl(e,t)},Nc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,l=me;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:dl(r,t,n):(i=!t.$stable,ul(t,r)),l=t}else t&&(fl(e,t),l={default:1});if(i)for(const a in r)!Lr(a)&&l[a]==null&&delete r[a]},Fe=Fc;function Dc(e){return Bc(e)}function Bc(e,t){const n=ws();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:l,createText:a,createComment:o,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=pt,insertStaticContent:y}=e,v=(h,g,b,k=null,C=null,w=null,M=void 0,L=null,I=!!g.dynamicChildren)=>{if(h===g)return;h&&!qt(h,g)&&(k=x(h),Be(h,C,w,!0),h=null),g.patchFlag===-2&&(I=!1,g.dynamicChildren=null);const{type:S,ref:z,shapeFlag:D}=g;switch(S){case Is:A(h,g,b,k);break;case Ne:_(h,g,b,k);break;case ns:h==null&&R(g,b,k,M);break;case J:B(h,g,b,k,C,w,M,L,I);break;default:D&1?Z(h,g,b,k,C,w,M,L,I):D&6?ie(h,g,b,k,C,w,M,L,I):(D&64||D&128)&&S.process(h,g,b,k,C,w,M,L,I,F)}z!=null&&C?Pn(z,h&&h.ref,w,g||h,!g):z==null&&h&&h.ref!=null&&Pn(h.ref,null,w,h,!0)},A=(h,g,b,k)=>{if(h==null)s(g.el=a(g.children),b,k);else{const C=g.el=h.el;g.children!==h.children&&u(C,g.children)}},_=(h,g,b,k)=>{h==null?s(g.el=o(g.children||""),b,k):g.el=h.el},R=(h,g,b,k)=>{[h.el,h.anchor]=y(h.children,g,b,k,h.el,h.anchor)},T=({el:h,anchor:g},b,k)=>{let C;for(;h&&h!==g;)C=p(h),s(h,b,k),h=C;s(g,b,k)},P=({el:h,anchor:g})=>{let b;for(;h&&h!==g;)b=p(h),r(h),h=b;r(g)},Z=(h,g,b,k,C,w,M,L,I)=>{if(g.type==="svg"?M="svg":g.type==="math"&&(M="mathml"),h==null)ne(g,b,k,C,w,M,L,I);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),q(h,g,C,w,M,L,I)}finally{S&&S._endPatch()}}},ne=(h,g,b,k,C,w,M,L)=>{let I,S;const{props:z,shapeFlag:D,transition:j,dirs:G}=h;if(I=h.el=l(h.type,w,z&&z.is,z),D&8?c(I,h.children):D&16&&Ae(h.children,I,null,k,C,Us(h,w),M,L),G&&jt(h,null,k,"created"),Q(I,h,h.scopeId,M,k),z){for(const ve in z)ve!=="value"&&!Sn(ve)&&i(I,ve,null,z[ve],w,k);"value"in z&&i(I,"value",null,z.value,w),(S=z.onVnodeBeforeMount)&&at(S,k,h)}G&&jt(h,null,k,"beforeMount");const X=Wc(C,j);X&&j.beforeEnter(I),s(I,g,b),((S=z&&z.onVnodeMounted)||X||G)&&Fe(()=>{S&&at(S,k,h),X&&j.enter(I),G&&jt(h,null,k,"mounted")},C)},Q=(h,g,b,k,C)=>{if(b&&m(h,b),k)for(let w=0;w<k.length;w++)m(h,k[w]);if(C){let w=C.subTree;if(g===w||ml(w.type)&&(w.ssContent===g||w.ssFallback===g)){const M=C.vnode;Q(h,M,M.scopeId,M.slotScopeIds,C.parent)}}},Ae=(h,g,b,k,C,w,M,L,I=0)=>{for(let S=I;S<h.length;S++){const z=h[S]=L?kt(h[S]):dt(h[S]);v(null,z,g,b,k,C,w,M,L)}},q=(h,g,b,k,C,w,M)=>{const L=g.el=h.el;let{patchFlag:I,dynamicChildren:S,dirs:z}=g;I|=h.patchFlag&16;const D=h.props||me,j=g.props||me;let G;if(b&&zt(b,!1),(G=j.onVnodeBeforeUpdate)&&at(G,b,g,h),z&&jt(g,h,b,"beforeUpdate"),b&&zt(b,!0),(D.innerHTML&&j.innerHTML==null||D.textContent&&j.textContent==null)&&c(L,""),S?se(h.dynamicChildren,S,L,b,k,Us(g,C),w):M||oe(h,g,L,null,b,k,Us(g,C),w,!1),I>0){if(I&16)be(L,D,j,b,C);else if(I&2&&D.class!==j.class&&i(L,"class",null,j.class,C),I&4&&i(L,"style",D.style,j.style,C),I&8){const X=g.dynamicProps;for(let ve=0;ve<X.length;ve++){const fe=X[ve],We=D[fe],He=j[fe];(He!==We||fe==="value")&&i(L,fe,We,He,C,b)}}I&1&&h.children!==g.children&&c(L,g.children)}else!M&&S==null&&be(L,D,j,b,C);((G=j.onVnodeUpdated)||z)&&Fe(()=>{G&&at(G,b,g,h),z&&jt(g,h,b,"updated")},k)},se=(h,g,b,k,C,w,M)=>{for(let L=0;L<g.length;L++){const I=h[L],S=g[L],z=I.el&&(I.type===J||!qt(I,S)||I.shapeFlag&198)?d(I.el):b;v(I,S,z,null,k,C,w,M,!0)}},be=(h,g,b,k,C)=>{if(g!==b){if(g!==me)for(const w in g)!Sn(w)&&!(w in b)&&i(h,w,g[w],null,C,k);for(const w in b){if(Sn(w))continue;const M=b[w],L=g[w];M!==L&&w!=="value"&&i(h,w,L,M,C,k)}"value"in b&&i(h,"value",g.value,b.value,C)}},B=(h,g,b,k,C,w,M,L,I)=>{const S=g.el=h?h.el:a(""),z=g.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:G}=g;G&&(L=L?L.concat(G):G),h==null?(s(S,b,k),s(z,b,k),Ae(g.children||[],b,z,C,w,M,L,I)):D>0&&D&64&&j&&h.dynamicChildren&&h.dynamicChildren.length===j.length?(se(h.dynamicChildren,j,b,C,w,M,L),(g.key!=null||C&&g===C.subTree)&&pl(h,g,!0)):oe(h,g,b,z,C,w,M,L,I)},ie=(h,g,b,k,C,w,M,L,I)=>{g.slotScopeIds=L,h==null?g.shapeFlag&512?C.ctx.activate(g,b,k,M,I):Re(g,b,k,C,w,M,I):ze(h,g,I)},Re=(h,g,b,k,C,w,M)=>{const L=h.component=Kc(h,k,C);if(Ss(h)&&(L.ctx.renderer=F),Zc(L,!1,M),L.asyncDep){if(C&&C.registerDep(L,xe,M),!h.el){const I=L.subTree=H(Ne);_(null,I,g,b),h.placeholder=I.el}}else xe(L,h,g,b,C,w,M)},ze=(h,g,b)=>{const k=g.component=h.component;if(Ec(h,g,b))if(k.asyncDep&&!k.asyncResolved){de(k,g,b);return}else k.next=g,k.update();else g.el=h.el,k.vnode=g},xe=(h,g,b,k,C,w,M)=>{const L=()=>{if(h.isMounted){let{next:D,bu:j,u:G,parent:X,vnode:ve}=h;{const ot=hl(h);if(ot){D&&(D.el=ve.el,de(h,D,M)),ot.asyncDep.then(()=>{Fe(()=>{h.isUnmounted||S()},C)});return}}let fe=D,We;zt(h,!1),D?(D.el=ve.el,de(h,D,M)):D=ve,j&&es(j),(We=D.props&&D.props.onVnodeBeforeUpdate)&&at(We,X,D,ve),zt(h,!0);const He=di(h),it=h.subTree;h.subTree=He,v(it,He,d(it.el),x(it),h,C,w),D.el=He.el,fe===null&&Pc(h,He.el),G&&Fe(G,C),(We=D.props&&D.props.onVnodeUpdated)&&Fe(()=>at(We,X,D,ve),C)}else{let D;const{el:j,props:G}=g,{bm:X,m:ve,parent:fe,root:We,type:He}=h,it=In(g);zt(h,!1),X&&es(X),!it&&(D=G&&G.onVnodeBeforeMount)&&at(D,fe,g),zt(h,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(He);const ot=h.subTree=di(h);v(null,ot,b,k,h,C,w),g.el=ot.el}if(ve&&Fe(ve,C),!it&&(D=G&&G.onVnodeMounted)){const ot=g;Fe(()=>at(D,fe,ot),C)}(g.shapeFlag&256||fe&&In(fe.vnode)&&fe.vnode.shapeFlag&256)&&h.a&&Fe(h.a,C),h.isMounted=!0,g=b=k=null}};h.scope.on();const I=h.effect=new bo(L);h.scope.off();const S=h.update=I.run.bind(I),z=h.job=I.runIfDirty.bind(I);z.i=h,z.id=h.uid,I.scheduler=()=>$r(z),zt(h,!0),S()},de=(h,g,b)=>{g.component=h;const k=h.vnode.props;h.vnode=g,h.next=null,$c(h,g.props,k,b),Nc(h,g.children,b),Rt(),si(h),St()},oe=(h,g,b,k,C,w,M,L,I=!1)=>{const S=h&&h.children,z=h?h.shapeFlag:0,D=g.children,{patchFlag:j,shapeFlag:G}=g;if(j>0){if(j&128){Pt(S,D,b,k,C,w,M,L,I);return}else if(j&256){mt(S,D,b,k,C,w,M,L,I);return}}G&8?(z&16&&qe(S,C,w),D!==S&&c(b,D)):z&16?G&16?Pt(S,D,b,k,C,w,M,L,I):qe(S,C,w,!0):(z&8&&c(b,""),G&16&&Ae(D,b,k,C,w,M,L,I))},mt=(h,g,b,k,C,w,M,L,I)=>{h=h||fn,g=g||fn;const S=h.length,z=g.length,D=Math.min(S,z);let j;for(j=0;j<D;j++){const G=g[j]=I?kt(g[j]):dt(g[j]);v(h[j],G,b,null,C,w,M,L,I)}S>z?qe(h,C,w,!0,!1,D):Ae(g,b,k,C,w,M,L,I,D)},Pt=(h,g,b,k,C,w,M,L,I)=>{let S=0;const z=g.length;let D=h.length-1,j=z-1;for(;S<=D&&S<=j;){const G=h[S],X=g[S]=I?kt(g[S]):dt(g[S]);if(qt(G,X))v(G,X,b,null,C,w,M,L,I);else break;S++}for(;S<=D&&S<=j;){const G=h[D],X=g[j]=I?kt(g[j]):dt(g[j]);if(qt(G,X))v(G,X,b,null,C,w,M,L,I);else break;D--,j--}if(S>D){if(S<=j){const G=j+1,X=G<z?g[G].el:k;for(;S<=j;)v(null,g[S]=I?kt(g[S]):dt(g[S]),b,X,C,w,M,L,I),S++}}else if(S>j)for(;S<=D;)Be(h[S],C,w,!0),S++;else{const G=S,X=S,ve=new Map;for(S=X;S<=j;S++){const Ue=g[S]=I?kt(g[S]):dt(g[S]);Ue.key!=null&&ve.set(Ue.key,S)}let fe,We=0;const He=j-X+1;let it=!1,ot=0;const vn=new Array(He);for(S=0;S<He;S++)vn[S]=0;for(S=G;S<=D;S++){const Ue=h[S];if(We>=He){Be(Ue,C,w,!0);continue}let lt;if(Ue.key!=null)lt=ve.get(Ue.key);else for(fe=X;fe<=j;fe++)if(vn[fe-X]===0&&qt(Ue,g[fe])){lt=fe;break}lt===void 0?Be(Ue,C,w,!0):(vn[lt-X]=S+1,lt>=ot?ot=lt:it=!0,v(Ue,g[lt],b,null,C,w,M,L,I),We++)}const Jr=it?Hc(vn):fn;for(fe=Jr.length-1,S=He-1;S>=0;S--){const Ue=X+S,lt=g[Ue],Qr=g[Ue+1],Yr=Ue+1<z?Qr.el||gl(Qr):k;vn[S]===0?v(null,lt,b,Yr,C,w,M,L,I):it&&(fe<0||S!==Jr[fe]?rt(lt,b,Yr,2):fe--)}}},rt=(h,g,b,k,C=null)=>{const{el:w,type:M,transition:L,children:I,shapeFlag:S}=h;if(S&6){rt(h.component.subTree,g,b,k);return}if(S&128){h.suspense.move(g,b,k);return}if(S&64){M.move(h,g,b,F);return}if(M===J){s(w,g,b);for(let D=0;D<I.length;D++)rt(I[D],g,b,k);s(h.anchor,g,b);return}if(M===ns){T(h,g,b);return}if(k!==2&&S&1&&L)if(k===0)L.beforeEnter(w),s(w,g,b),Fe(()=>L.enter(w),C);else{const{leave:D,delayLeave:j,afterLeave:G}=L,X=()=>{h.ctx.isUnmounted?r(w):s(w,g,b)},ve=()=>{w._isLeaving&&w[ft](!0),D(w,()=>{X(),G&&G()})};j?j(w,X,ve):ve()}else s(w,g,b)},Be=(h,g,b,k=!1,C=!1)=>{const{type:w,props:M,ref:L,children:I,dynamicChildren:S,shapeFlag:z,patchFlag:D,dirs:j,cacheIndex:G}=h;if(D===-2&&(C=!1),L!=null&&(Rt(),Pn(L,null,b,h,!0),St()),G!=null&&(g.renderCache[G]=void 0),z&256){g.ctx.deactivate(h);return}const X=z&1&&j,ve=!In(h);let fe;if(ve&&(fe=M&&M.onVnodeBeforeUnmount)&&at(fe,g,h),z&6)Ft(h.component,b,k);else{if(z&128){h.suspense.unmount(b,k);return}X&&jt(h,null,g,"beforeUnmount"),z&64?h.type.remove(h,g,b,F,k):S&&!S.hasOnce&&(w!==J||D>0&&D&64)?qe(S,g,b,!1,!0):(w===J&&D&384||!C&&z&16)&&qe(I,g,b),k&&nn(h)}(ve&&(fe=M&&M.onVnodeUnmounted)||X)&&Fe(()=>{fe&&at(fe,g,h),X&&jt(h,null,g,"unmounted")},b)},nn=h=>{const{type:g,el:b,anchor:k,transition:C}=h;if(g===J){sn(b,k);return}if(g===ns){P(h);return}const w=()=>{r(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:M,delayLeave:L}=C,I=()=>M(b,w);L?L(h.el,w,I):I()}else w()},sn=(h,g)=>{let b;for(;h!==g;)b=p(h),r(h),h=b;r(g)},Ft=(h,g,b)=>{const{bum:k,scope:C,job:w,subTree:M,um:L,m:I,a:S}=h;gi(I),gi(S),k&&es(k),C.stop(),w&&(w.flags|=8,Be(M,h,g,b)),L&&Fe(L,g),Fe(()=>{h.isUnmounted=!0},g)},qe=(h,g,b,k=!1,C=!1,w=0)=>{for(let M=w;M<h.length;M++)Be(h[M],g,b,k,C)},x=h=>{if(h.shapeFlag&6)return x(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=p(h.anchor||h.el),b=g&&g[tc];return b?p(b):g};let W=!1;const N=(h,g,b)=>{let k;h==null?g._vnode&&(Be(g._vnode,null,null,!0),k=g._vnode.component):v(g._vnode||null,h,g,null,null,null,b),g._vnode=h,W||(W=!0,si(k),No(),W=!1)},F={p:v,um:Be,m:rt,r:nn,mt:Re,mc:Ae,pc:oe,pbc:se,n:x,o:e};return{render:N,hydrate:void 0,createApp:xc(N)}}function Us({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pl(e,t,n=!1){const s=e.children,r=t.children;if(U(s)&&U(r))for(let i=0;i<s.length;i++){const l=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kt(r[i]),a.el=l.el),!n&&a.patchFlag!==-2&&pl(l,a)),a.type===Is&&(a.patchFlag===-1&&(a=r[i]=kt(a)),a.el=l.el),a.type===Ne&&!a.el&&(a.el=l.el)}}function Hc(e){const t=e.slice(),n=[0];let s,r,i,l,a;const o=e.length;for(s=0;s<o;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,l=n.length-1;i<l;)a=i+l>>1,e[n[a]]<u?i=a+1:l=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function hl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hl(t)}function gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function gl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?gl(t.subTree):null}const ml=e=>e.__isSuspense;function Fc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):Qa(e)}const J=Symbol.for("v-fgt"),Is=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),On=[];let Ve=null;function E(e=!1){On.push(Ve=e?null:[])}function jc(){On.pop(),Ve=On[On.length-1]||null}let Fn=1;function ds(e,t=!1){Fn+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function bl(e){return e.dynamicChildren=Fn>0?Ve||fn:null,jc(),Fn>0&&Ve&&Ve.push(e),e}function $(e,t,n,s,r,i){return bl(f(e,t,n,s,r,i,!0))}function cn(e,t,n,s,r){return bl(H(e,t,n,s,r,!0))}function ps(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const vl=({key:e})=>e??null,ss=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||$e(e)||V(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===J?0:1,l=!1,a=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vl(t),ref:t&&ss(t),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return a?(Nr(o,n),i&128&&e.normalize(o)):n&&(o.shapeFlag|=we(n)?8:16),Fn>0&&!l&&Ve&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&Ve.push(o),o}const H=zc;function zc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Yo)&&(e=Ne),ps(e)){const a=Wt(e,t,!0);return n&&Nr(a,n),Fn>0&&!i&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(e)]=a:Ve.push(a)),a.patchFlag=-2,a}if(eu(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:a,style:o}=t;a&&!we(a)&&(t.class=Ie(a)),ce(o)&&(Ir(o)&&!U(o)&&(o=Te({},o)),t.style=xs(o))}const l=we(e)?1:ml(e)?128:Fo(e)?64:ce(e)?4:V(e)?2:0;return f(e,t,n,s,r,l,i,!0)}function Uc(e){return e?Ir(e)||ll(e)?Te({},e):e:null}function Wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:l,children:a,transition:o}=e,u=t?Gc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&vl(u),ref:t&&t.ref?n&&i?U(i)?i.concat(ss(t)):[i,ss(t)]:ss(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==J?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:o,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return o&&s&&Hn(c,o.clone(c)),c}function te(e=" ",t=0){return H(Is,null,e,t)}function ht(e,t){const n=H(ns,null,e);return n.staticCount=t,n}function Ye(e="",t=!1){return t?(E(),cn(Ne,null,e)):H(Ne,null,e)}function dt(e){return e==null||typeof e=="boolean"?H(Ne):U(e)?H(J,null,e.slice()):ps(e)?kt(e):H(Is,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function Nr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Nr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ll(t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[te(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ie([t.class,s.class]));else if(r==="style")t.style=xs([t.style,s.style]);else if(_s(r)){const i=t[r],l=s[r];l&&i!==l&&!(U(i)&&i.includes(l))&&(t[r]=i?[].concat(i,l):l)}else r!==""&&(t[r]=s[r])}return t}function at(e,t,n,s=null){nt(e,t,7,[n,s])}const Vc=nl();let qc=0;function Kc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Vc,i={uid:qc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cl(s,r),emitsOptions:sl(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tc.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const _l=()=>Pe||Ge;let hs,ur;{const e=ws(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};hs=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),ur=t("__VUE_SSR_SETTERS__",n=>jn=n)}const Kn=e=>{const t=Pe;return hs(e),e.scope.on(),()=>{e.scope.off(),hs(t)}},mi=()=>{Pe&&Pe.scope.off(),hs(null)};function yl(e){return e.vnode.shapeFlag&4}let jn=!1;function Zc(e,t=!1,n=!1){t&&ur(t);const{props:s,children:r}=e.vnode,i=yl(e);Ic(e,s,i,t),Mc(e,r,n||t);const l=i?Jc(e,t):void 0;return t&&ur(!1),l}function Jc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,mc);const{setup:s}=n;if(s){Rt();const r=e.setupContext=s.length>1?Yc(e):null,i=Kn(e),l=qn(s,e,0,[e.props,r]),a=co(l);if(St(),i(),(a||e.sp)&&!In(e)&&Ko(e),a){if(l.then(mi,mi),t)return l.then(o=>{bi(e,o)}).catch(o=>{Rs(o,e,0)});e.asyncDep=l}else bi(e,l)}else kl(e)}function bi(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Oo(t)),kl(e)}function kl(e,t,n){const s=e.type;e.render||(e.render=s.render||pt);{const r=Kn(e);Rt();try{bc(e)}finally{St(),r()}}}const Qc={get(e,t){return Ee(e,"get",""),e[t]}};function Yc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qc),slots:e.slots,emit:e.emit,expose:t}}function $s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oo(Fa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)},has(t,n){return n in t||n in $n}})):e.proxy}function Xc(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function eu(e){return V(e)&&"__vccOpts"in e}const he=(e,t)=>Va(e,t,jn);function Dr(e,t,n){try{ds(-1);const s=arguments.length;return s===2?ce(t)&&!U(t)?ps(t)?H(e,null,[t]):H(e,t):H(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ps(n)&&(n=[n]),H(e,t,n))}finally{ds(1)}}const tu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fr;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{fr=vi.createPolicy("vue",{createHTML:e=>e})}catch{}const wl=fr?e=>fr.createHTML(e):e=>e,nu="http://www.w3.org/2000/svg",su="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,_i=yt&&yt.createElement("template"),ru={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?yt.createElementNS(nu,e):t==="mathml"?yt.createElementNS(su,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const l=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_i.innerHTML=wl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=_i.content;if(s==="svg"||s==="mathml"){const o=a.firstChild;for(;o.firstChild;)a.appendChild(o.firstChild);a.removeChild(o)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},It="transition",kn="animation",zn=Symbol("_vtc"),xl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iu=Te({},jo,xl),ou=e=>(e.displayName="Transition",e.props=iu,e),lu=ou((e,{slots:t})=>Dr(rc,au(e),t)),Ut=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},yi=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function au(e){const t={};for(const B in e)B in xl||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:o=i,appearActiveClass:u=l,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,y=cu(r),v=y&&y[0],A=y&&y[1],{onBeforeEnter:_,onEnter:R,onEnterCancelled:T,onLeave:P,onLeaveCancelled:Z,onBeforeAppear:ne=_,onAppear:Q=R,onAppearCancelled:Ae=T}=t,q=(B,ie,Re,ze)=>{B._enterCancelled=ze,Gt(B,ie?c:a),Gt(B,ie?u:l),Re&&Re()},se=(B,ie)=>{B._isLeaving=!1,Gt(B,d),Gt(B,m),Gt(B,p),ie&&ie()},be=B=>(ie,Re)=>{const ze=B?Q:R,xe=()=>q(ie,B,Re);Ut(ze,[ie,xe]),ki(()=>{Gt(ie,B?o:i),vt(ie,B?c:a),yi(ze)||wi(ie,s,v,xe)})};return Te(t,{onBeforeEnter(B){Ut(_,[B]),vt(B,i),vt(B,l)},onBeforeAppear(B){Ut(ne,[B]),vt(B,o),vt(B,u)},onEnter:be(!1),onAppear:be(!0),onLeave(B,ie){B._isLeaving=!0;const Re=()=>se(B,ie);vt(B,d),B._enterCancelled?(vt(B,p),Ti(B)):(Ti(B),vt(B,p)),ki(()=>{B._isLeaving&&(Gt(B,d),vt(B,m),yi(P)||wi(B,s,A,Re))}),Ut(P,[B,Re])},onEnterCancelled(B){q(B,!1,void 0,!0),Ut(T,[B])},onAppearCancelled(B){q(B,!0,void 0,!0),Ut(Ae,[B])},onLeaveCancelled(B){se(B),Ut(Z,[B])}})}function cu(e){if(e==null)return null;if(ce(e))return[Gs(e.enter),Gs(e.leave)];{const t=Gs(e);return[t,t]}}function Gs(e){return pa(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zn]||(e[zn]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[zn];n&&(n.delete(t),n.size||(e[zn]=void 0))}function ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uu=0;function wi(e,t,n,s){const r=e._endId=++uu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:l,timeout:a,propCount:o}=fu(e,t);if(!l)return s();const u=l+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=o&&d()};setTimeout(()=>{c<o&&d()},a+1),e.addEventListener(u,p)}function fu(e,t){const n=window.getComputedStyle(e),s=y=>(n[y]||"").split(", "),r=s(`${It}Delay`),i=s(`${It}Duration`),l=xi(r,i),a=s(`${kn}Delay`),o=s(`${kn}Duration`),u=xi(a,o);let c=null,d=0,p=0;t===It?l>0&&(c=It,d=l,p=i.length):t===kn?u>0&&(c=kn,d=u,p=o.length):(d=Math.max(l,u),c=d>0?l>u?It:kn:null,p=c?c===It?i.length:o.length:0);const m=c===It&&/\b(?:transform|all)(?:,|$)/.test(s(`${It}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ci(n)+Ci(e[s])))}function Ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(e){return(e?e.ownerDocument:document).body.offsetHeight}function du(e,t,n){const s=e[zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ri=Symbol("_vod"),pu=Symbol("_vsh"),hu=Symbol(""),gu=/(?:^|;)\s*display\s*:/;function mu(e,t,n){const s=e.style,r=we(n);let i=!1;if(n&&!r){if(t)if(we(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&rs(s,a,"")}else for(const l in t)n[l]==null&&rs(s,l,"");for(const l in n)l==="display"&&(i=!0),rs(s,l,n[l])}else if(r){if(t!==n){const l=s[hu];l&&(n+=";"+l),s.cssText=n,i=gu.test(n)}}else t&&e.removeAttribute("style");Ri in e&&(e[Ri]=i?s.display:"",e[pu]&&(s.display="none"))}const Si=/\s*!important$/;function rs(e,t,n){if(U(n))n.forEach(s=>rs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=bu(e,t);Si.test(n)?e.setProperty(Xt(s),n.replace(Si,""),"important"):e[s]=n}}const Ai=["Webkit","Moz","ms"],Vs={};function bu(e,t){const n=Vs[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return Vs[t]=s;s=ks(s);for(let r=0;r<Ai.length;r++){const i=Ai[r]+s;if(i in e)return Vs[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function Pi(e,t,n,s,r,i=_a(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n):n==null||i&&!ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":gt(n)?String(n):n)}function Ii(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(a!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ho(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(r||t)}function ln(e,t,n,s){e.addEventListener(t,n,s)}function vu(e,t,n,s){e.removeEventListener(t,n,s)}const $i=Symbol("_vei");function _u(e,t,n,s,r=null){const i=e[$i]||(e[$i]={}),l=i[t];if(s&&l)l.value=s;else{const[a,o]=yu(t);if(s){const u=i[t]=xu(s,r);ln(e,a,u,o)}else l&&(vu(e,a,l,o),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function yu(e){let t;if(Oi.test(e)){t={};let s;for(;s=e.match(Oi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let qs=0;const ku=Promise.resolve(),wu=()=>qs||(ku.then(()=>qs=0),qs=Date.now());function xu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(Cu(s,n.value),t,5,[s])};return n.value=e,n.attached=wu(),n}function Cu(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tu=(e,t,n,s,r,i)=>{const l=r==="svg";t==="class"?du(e,s,l):t==="style"?mu(e,n,s):_s(t)?yr(t)||_u(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ru(e,t,s,l))?(Ii(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,s,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!we(s))?Ii(e,Je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Pi(e,t,s,l))};function Ru(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Li(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Li(t)&&we(n)?!1:t in e}const Mi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>es(t,n):t};function Su(e){e.target.composing=!0}function Ni(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign");function Di(e,t,n){return t&&(e=e.trim()),n&&(e=xr(e)),e}const Br={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Ks]=Mi(r);const i=s||r.props&&r.props.type==="number";ln(e,t?"change":"input",l=>{l.target.composing||e[Ks](Di(e.value,n,i))}),(n||i)&&ln(e,"change",()=>{e.value=Di(e.value,n,i)}),t||(ln(e,"compositionstart",Su),ln(e,"compositionend",Ni),ln(e,"change",Ni))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},l){if(e[Ks]=Mi(l),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?xr(e.value):e.value,o=t??"";a!==o&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===o)||(e.value=o))}},Au=Te({patchProp:Tu},ru);let Bi;function Eu(){return Bi||(Bi=Dc(Au))}const Pu=(...e)=>{const t=Eu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=$u(s);if(!r)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,Iu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function Iu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $u(e){return we(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const an=typeof document<"u";function Cl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cl(e.default)}const le=Object.assign;function Zs(e,t){const n={};for(const s in t){const r=t[s];n[s]=st(r)?r.map(e):e(r)}return n}const Ln=()=>{},st=Array.isArray;function Wi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Tl=/#/g,Lu=/&/g,Mu=/\//g,Nu=/=/g,Du=/\?/g,Rl=/\+/g,Bu=/%5B/g,Wu=/%5D/g,Sl=/%5E/g,Hu=/%60/g,Al=/%7B/g,Fu=/%7C/g,El=/%7D/g,ju=/%20/g;function Wr(e){return e==null?"":encodeURI(""+e).replace(Fu,"|").replace(Bu,"[").replace(Wu,"]")}function zu(e){return Wr(e).replace(Al,"{").replace(El,"}").replace(Sl,"^")}function dr(e){return Wr(e).replace(Rl,"%2B").replace(ju,"+").replace(Tl,"%23").replace(Lu,"%26").replace(Hu,"`").replace(Al,"{").replace(El,"}").replace(Sl,"^")}function Uu(e){return dr(e).replace(Nu,"%3D")}function Gu(e){return Wr(e).replace(Tl,"%23").replace(Du,"%3F")}function Vu(e){return Gu(e).replace(Mu,"%2F")}function Un(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const qu=/\/$/,Ku=e=>e.replace(qu,"");function Js(e,t,n="/"){let s,r={},i="",l="";const a=t.indexOf("#");let o=t.indexOf("?");return o=a>=0&&o>a?-1:o,o>=0&&(s=t.slice(0,o),i=t.slice(o,a>0?a:t.length),r=e(i.slice(1))),a>=0&&(s=s||t.slice(0,a),l=t.slice(a,t.length)),s=Yu(s??t,n),{fullPath:s+i+l,path:s,query:r,hash:Un(l)}}function Zu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ju(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&mn(t.matched[s],n.matched[r])&&Pl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Qu(e[n],t[n]))return!1;return!0}function Qu(e,t){return st(e)?Fi(e,t):st(t)?Fi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Fi(e,t){return st(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Yu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,l,a;for(l=0;l<s.length;l++)if(a=s[l],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(l).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pr=function(e){return e.pop="pop",e.push="push",e}({}),Qs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Xu(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ku(e)}const ef=/^[^#]+#/;function tf(e,t){return e.replace(ef,"#")+t}function nf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Os=()=>({left:window.scrollX,top:window.scrollY});function sf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=nf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function rf(e,t){hr.set(e,t)}function of(e){const t=hr.get(e);return hr.delete(e),t}function lf(e){return typeof e=="string"||e&&typeof e=="object"}function Il(e){return typeof e=="string"||typeof e=="symbol"}let ke=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const $l=Symbol("");ke.MATCHER_NOT_FOUND+"",ke.NAVIGATION_GUARD_REDIRECT+"",ke.NAVIGATION_ABORTED+"",ke.NAVIGATION_CANCELLED+"",ke.NAVIGATION_DUPLICATED+"";function bn(e,t){return le(new Error,{type:e,[$l]:!0},t)}function _t(e,t){return e instanceof Error&&$l in e&&(t==null||!!(e.type&t))}const af=["params","query","hash"];function cf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of af)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function uf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Rl," "),i=r.indexOf("="),l=Un(i<0?r:r.slice(0,i)),a=i<0?null:Un(r.slice(i+1));if(l in t){let o=t[l];st(o)||(o=t[l]=[o]),o.push(a)}else t[l]=a}return t}function zi(e){let t="";for(let n in e){const s=e[n];if(n=Uu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&dr(r)):[s&&dr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ff(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=st(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const df=Symbol(""),Ui=Symbol(""),Ls=Symbol(""),Hr=Symbol(""),gr=Symbol("");function wn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,s,r,i=l=>l()){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const u=p=>{p===!1?o(bn(ke.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?o(p):lf(p)?o(bn(ke.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(l&&s.enterCallbacks[r]===l&&typeof p=="function"&&l.push(p),a())},c=i(()=>e.call(s&&s.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>o(p))})}function Ys(e,t,n,s,r=i=>i()){const i=[];for(const l of e)for(const a in l.components){let o=l.components[a];if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(Cl(o)){const u=(o.__vccOpts||o)[t];u&&i.push(Mt(u,n,s,l,a,r))}else{let u=o();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);const d=Ou(c)?c.default:c;l.mods[a]=c,l.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Mt(p,n,s,l,a,r)()}))}}return i}function pf(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(u=>mn(u,a))?s.push(a):n.push(a));const o=e.matched[l];o&&(t.matched.find(u=>mn(u,o))||r.push(o))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hf=()=>location.protocol+"//"+location.host;function Ol(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),Hi(a,"")}return Hi(n,e)+s+r}function gf(e,t,n,s){let r=[],i=[],l=null;const a=({state:p})=>{const m=Ol(e,location),y=n.value,v=t.value;let A=0;if(p){if(n.value=m,t.value=p,l&&l===y){l=null;return}A=v?p.position-v.position:0}else s(m);r.forEach(_=>{_(n.value,y,{delta:A,type:pr.pop,direction:A?A>0?Qs.forward:Qs.back:Qs.unknown})})};function o(){l=n.value}function u(p){r.push(p);const m=()=>{const y=r.indexOf(p);y>-1&&r.splice(y,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(le({},p.state,{scroll:Os()}),"")}}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:o,listen:u,destroy:d}}function Gi(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Os():null}}function mf(e){const{history:t,location:n}=window,s={value:Ol(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(o,u,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+o:hf()+e+o;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function l(o,u){i(o,le({},t.state,Gi(r.value.back,o,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=o}function a(o,u){const c=le({},r.value,t.state,{forward:o,scroll:Os()});i(c.current,c,!0),i(o,le({},Gi(s.value,o,null),{position:c.position+1},u),!1),s.value=o}return{location:s,state:r,push:a,replace:l}}function bf(e){e=Xu(e);const t=mf(e),n=gf(e,t.state,t.location,t.replace);function s(i,l=!0){l||n.pauseListeners(),history.go(i)}const r=le({location:"",base:e,go:s,createHref:tf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function vf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),bf(e)}let Kt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Ce=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Ce||{});const _f={type:Kt.Static,value:""},yf=/[a-zA-Z0-9_]/;function kf(e){if(!e)return[[]];if(e==="/")return[[_f]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=Ce.Static,s=n;const r=[];let i;function l(){i&&r.push(i),i=[]}let a=0,o,u="",c="";function d(){u&&(n===Ce.Static?i.push({type:Kt.Static,value:u}):n===Ce.Param||n===Ce.ParamRegExp||n===Ce.ParamRegExpEnd?(i.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Kt.Param,value:u,regexp:c,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=o}for(;a<e.length;){if(o=e[a++],o==="\\"&&n!==Ce.ParamRegExp){s=n,n=Ce.EscapeNext;continue}switch(n){case Ce.Static:o==="/"?(u&&d(),l()):o===":"?(d(),n=Ce.Param):p();break;case Ce.EscapeNext:p(),n=s;break;case Ce.Param:o==="("?n=Ce.ParamRegExp:yf.test(o)?p():(d(),n=Ce.Static,o!=="*"&&o!=="?"&&o!=="+"&&a--);break;case Ce.ParamRegExp:o===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+o:n=Ce.ParamRegExpEnd:c+=o;break;case Ce.ParamRegExpEnd:d(),n=Ce.Static,o!=="*"&&o!=="?"&&o!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),l(),r}const Vi="[^/]+?",wf={sensitive:!1,strict:!1,start:!0,end:!0};var Le=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Le||{});const xf=/[.+*?^${}()[\]/\\]/g;function Cf(e,t){const n=le({},wf,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Le.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=Le.Segment+(n.sensitive?Le.BonusCaseSensitive:0);if(p.type===Kt.Static)d||(r+="/"),r+=p.value.replace(xf,"\\$&"),m+=Le.Static;else if(p.type===Kt.Param){const{value:y,repeatable:v,optional:A,regexp:_}=p;i.push({name:y,repeatable:v,optional:A});const R=_||Vi;if(R!==Vi){m+=Le.BonusCustomRegExp;try{`${R}`}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+P.message)}}let T=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(T=A&&u.length<2?`(?:/${T})`:"/"+T),A&&(T+="?"),r+=T,m+=Le.Dynamic,A&&(m+=Le.BonusOptional),v&&(m+=Le.BonusRepeatable),R===".*"&&(m+=Le.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Le.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(l),d={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",y=i[p-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function o(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of p)if(m.type===Kt.Static)c+=m.value;else if(m.type===Kt.Param){const{value:y,repeatable:v,optional:A}=m,_=y in u?u[y]:"";if(st(_)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=st(_)?_.join("/"):_;if(!R)if(A)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);c+=R}}return c||"/"}return{re:l,score:s,keys:i,parse:a,stringify:o}}function Tf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Le.Static+Le.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Le.Static+Le.Segment?1:-1:0}function Ll(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Tf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(qi(s))return 1;if(qi(r))return-1}return r.length-s.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rf={strict:!1,end:!0,sensitive:!1};function Sf(e,t,n){const s=Cf(kf(e.path),n),r=le(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Af(e,t){const n=[],s=new Map;t=Wi(Rf,t);function r(d){return s.get(d)}function i(d,p,m){const y=!m,v=Zi(d);v.aliasOf=m&&m.record;const A=Wi(t,d),_=[v];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const Z of P)_.push(Zi(le({},v,{components:m?m.record.components:v.components,path:Z,aliasOf:m?m.record:v})))}let R,T;for(const P of _){const{path:Z}=P;if(p&&Z[0]!=="/"){const ne=p.record.path,Q=ne[ne.length-1]==="/"?"":"/";P.path=p.record.path+(Z&&Q+Z)}if(R=Sf(P,p,A),m?m.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),y&&d.name&&!Ji(R)&&l(d.name)),Ml(R)&&o(R),v.children){const ne=v.children;for(let Q=0;Q<ne.length;Q++)i(ne[Q],R,m&&m.children[Q])}m=m||R}return T?()=>{l(T)}:Ln}function l(d){if(Il(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function a(){return n}function o(d){const p=If(d,n);n.splice(p,0,d),d.record.name&&!Ji(d)&&s.set(d.record.name,d)}function u(d,p){let m,y={},v,A;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw bn(ke.MATCHER_NOT_FOUND,{location:d});A=m.record.name,y=le(Ki(p.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Ki(d.params,m.keys.map(T=>T.name))),v=m.stringify(y)}else if(d.path!=null)v=d.path,m=n.find(T=>T.re.test(v)),m&&(y=m.parse(v),A=m.record.name);else{if(m=p.name?s.get(p.name):n.find(T=>T.re.test(p.path)),!m)throw bn(ke.MATCHER_NOT_FOUND,{location:d,currentLocation:p});A=m.record.name,y=le({},p.params,d.params),v=m.stringify(y)}const _=[];let R=m;for(;R;)_.unshift(R.record),R=R.parent;return{name:A,path:v,params:y,matched:_,meta:Pf(_)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:l,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Ki(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Zi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,n)=>le(t,n.meta),{})}function If(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Ll(e,t[i])<0?s=i:n=i+1}const r=$f(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function $f(e){let t=e;for(;t=t.parent;)if(Ml(t)&&Ll(e,t)===0)return t}function Ml({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Qi(e){const t=et(Ls),n=et(Hr),s=he(()=>{const o=pe(e.to);return t.resolve(o)}),r=he(()=>{const{matched:o}=s.value,{length:u}=o,c=o[u-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(mn.bind(null,c));if(p>-1)return p;const m=Yi(o[u-2]);return u>1&&Yi(c)===m&&d[d.length-1].path!==m?d.findIndex(mn.bind(null,o[u-2])):p}),i=he(()=>r.value>-1&&Df(n.params,s.value.params)),l=he(()=>r.value>-1&&r.value===n.matched.length-1&&Pl(n.params,s.value.params));function a(o={}){if(Nf(o)){const u=t[pe(e.replace)?"replace":"push"](pe(e.to)).catch(Ln);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:he(()=>s.value.href),isActive:i,isExactActive:l,navigate:a}}function Of(e){return e.length===1?e[0]:e}const Lf=qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qi,setup(e,{slots:t}){const n=Ts(Qi(e)),{options:s}=et(Ls),r=he(()=>({[Xi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Of(t.default(n));return e.custom?i:Dr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Mf=Lf;function Nf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Df(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!st(r)||r.length!==s.length||s.some((i,l)=>i.valueOf()!==r[l].valueOf()))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Bf=qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=et(gr),r=he(()=>e.route||s.value),i=et(Ui,0),l=he(()=>{let u=pe(i);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=he(()=>r.value.matched[l.value]);ts(Ui,he(()=>l.value+1)),ts(df,a),ts(gr,r);const o=Se();return Qt(()=>[o.value,a.value,e.name],([u,c,d],[p,m,y])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!mn(c,m)||!p)&&(c.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=a.value,p=d&&d.components[c];if(!p)return eo(n.default,{Component:p,route:u});const m=d.props[c],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,A=Dr(p,le({},y,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[c]=null)},ref:o}));return eo(n.default,{Component:A,route:u})||A}}});function eo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wf=Bf;function Hf(e){const t=Af(e.routes,e),n=e.parseQuery||uf,s=e.stringifyQuery||zi,r=e.history,i=wn(),l=wn(),a=wn(),o=ja($t);let u=$t;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Zs.bind(null,x=>""+x),d=Zs.bind(null,Vu),p=Zs.bind(null,Un);function m(x,W){let N,F;return Il(x)?(N=t.getRecordMatcher(x),F=W):F=x,t.addRoute(F,N)}function y(x){const W=t.getRecordMatcher(x);W&&t.removeRoute(W)}function v(){return t.getRoutes().map(x=>x.record)}function A(x){return!!t.getRecordMatcher(x)}function _(x,W){if(W=le({},W||o.value),typeof x=="string"){const b=Js(n,x,W.path),k=t.resolve({path:b.path},W),C=r.createHref(b.fullPath);return le(b,k,{params:p(k.params),hash:Un(b.hash),redirectedFrom:void 0,href:C})}let N;if(x.path!=null)N=le({},x,{path:Js(n,x.path,W.path).path});else{const b=le({},x.params);for(const k in b)b[k]==null&&delete b[k];N=le({},x,{params:d(b)}),W.params=d(W.params)}const F=t.resolve(N,W),Y=x.hash||"";F.params=c(p(F.params));const h=Zu(s,le({},x,{hash:zu(Y),path:F.path})),g=r.createHref(h);return le({fullPath:h,hash:Y,query:s===zi?ff(x.query):x.query||{}},F,{redirectedFrom:void 0,href:g})}function R(x){return typeof x=="string"?Js(n,x,o.value.path):le({},x)}function T(x,W){if(u!==x)return bn(ke.NAVIGATION_CANCELLED,{from:W,to:x})}function P(x){return Q(x)}function Z(x){return P(le(R(x),{replace:!0}))}function ne(x,W){const N=x.matched[x.matched.length-1];if(N&&N.redirect){const{redirect:F}=N;let Y=typeof F=="function"?F(x,W):F;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=R(Y):{path:Y},Y.params={}),le({query:x.query,hash:x.hash,params:Y.path!=null?{}:x.params},Y)}}function Q(x,W){const N=u=_(x),F=o.value,Y=x.state,h=x.force,g=x.replace===!0,b=ne(N,F);if(b)return Q(le(R(b),{state:typeof b=="object"?le({},Y,b.state):Y,force:h,replace:g}),W||N);const k=N;k.redirectedFrom=W;let C;return!h&&Ju(s,F,N)&&(C=bn(ke.NAVIGATION_DUPLICATED,{to:k,from:F}),rt(F,F,!0,!1)),(C?Promise.resolve(C):se(k,F)).catch(w=>_t(w)?_t(w,ke.NAVIGATION_GUARD_REDIRECT)?w:Pt(w):oe(w,k,F)).then(w=>{if(w){if(_t(w,ke.NAVIGATION_GUARD_REDIRECT))return Q(le({replace:g},R(w.to),{state:typeof w.to=="object"?le({},Y,w.to.state):Y,force:h}),W||k)}else w=B(k,F,!0,g,Y);return be(k,F,w),w})}function Ae(x,W){const N=T(x,W);return N?Promise.reject(N):Promise.resolve()}function q(x){const W=sn.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(x):x()}function se(x,W){let N;const[F,Y,h]=pf(x,W);N=Ys(F.reverse(),"beforeRouteLeave",x,W);for(const b of F)b.leaveGuards.forEach(k=>{N.push(Mt(k,x,W))});const g=Ae.bind(null,x,W);return N.push(g),qe(N).then(()=>{N=[];for(const b of i.list())N.push(Mt(b,x,W));return N.push(g),qe(N)}).then(()=>{N=Ys(Y,"beforeRouteUpdate",x,W);for(const b of Y)b.updateGuards.forEach(k=>{N.push(Mt(k,x,W))});return N.push(g),qe(N)}).then(()=>{N=[];for(const b of h)if(b.beforeEnter)if(st(b.beforeEnter))for(const k of b.beforeEnter)N.push(Mt(k,x,W));else N.push(Mt(b.beforeEnter,x,W));return N.push(g),qe(N)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),N=Ys(h,"beforeRouteEnter",x,W,q),N.push(g),qe(N))).then(()=>{N=[];for(const b of l.list())N.push(Mt(b,x,W));return N.push(g),qe(N)}).catch(b=>_t(b,ke.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function be(x,W,N){a.list().forEach(F=>q(()=>F(x,W,N)))}function B(x,W,N,F,Y){const h=T(x,W);if(h)return h;const g=W===$t,b=an?history.state:{};N&&(F||g?r.replace(x.fullPath,le({scroll:g&&b&&b.scroll},Y)):r.push(x.fullPath,Y)),o.value=x,rt(x,W,N,g),Pt()}let ie;function Re(){ie||(ie=r.listen((x,W,N)=>{if(!Ft.listening)return;const F=_(x),Y=ne(F,Ft.currentRoute.value);if(Y){Q(le(Y,{replace:!0,force:!0}),F).catch(Ln);return}u=F;const h=o.value;an&&rf(ji(h.fullPath,N.delta),Os()),se(F,h).catch(g=>_t(g,ke.NAVIGATION_ABORTED|ke.NAVIGATION_CANCELLED)?g:_t(g,ke.NAVIGATION_GUARD_REDIRECT)?(Q(le(R(g.to),{force:!0}),F).then(b=>{_t(b,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&!N.delta&&N.type===pr.pop&&r.go(-1,!1)}).catch(Ln),Promise.reject()):(N.delta&&r.go(-N.delta,!1),oe(g,F,h))).then(g=>{g=g||B(F,h,!1),g&&(N.delta&&!_t(g,ke.NAVIGATION_CANCELLED)?r.go(-N.delta,!1):N.type===pr.pop&&_t(g,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),be(F,h,g)}).catch(Ln)}))}let ze=wn(),xe=wn(),de;function oe(x,W,N){Pt(x);const F=xe.list();return F.length?F.forEach(Y=>Y(x,W,N)):console.error(x),Promise.reject(x)}function mt(){return de&&o.value!==$t?Promise.resolve():new Promise((x,W)=>{ze.add([x,W])})}function Pt(x){return de||(de=!x,Re(),ze.list().forEach(([W,N])=>x?N(x):W()),ze.reset()),x}function rt(x,W,N,F){const{scrollBehavior:Y}=e;if(!an||!Y)return Promise.resolve();const h=!N&&of(ji(x.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return Bn().then(()=>Y(x,W,h)).then(g=>g&&sf(g)).catch(g=>oe(g,x,W))}const Be=x=>r.go(x);let nn;const sn=new Set,Ft={currentRoute:o,listening:!0,addRoute:m,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:v,resolve:_,options:e,push:P,replace:Z,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:xe.add,isReady:mt,install(x){x.component("RouterLink",Mf),x.component("RouterView",Wf),x.config.globalProperties.$router=Ft,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>pe(o)}),an&&!nn&&o.value===$t&&(nn=!0,P(r.location).catch(F=>{}));const W={};for(const F in $t)Object.defineProperty(W,F,{get:()=>o.value[F],enumerable:!0});x.provide(Ls,Ft),x.provide(Hr,Io(W)),x.provide(gr,o);const N=x.unmount;sn.add(x),x.unmount=function(){sn.delete(x),sn.size<1&&(u=$t,ie&&ie(),ie=null,o.value=$t,nn=!1,de=!1),N()}}};function qe(x){return x.reduce((W,N)=>W.then(()=>q(N)),Promise.resolve())}return Ft}function Ff(){return et(Ls)}function Nl(e){return et(Hr)}const Dl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},jf={__name:"PixelTree",props:{size:{type:String,default:"md"},variant:{type:String,default:"emerald"}},setup(e){const t=["0000g0000","000ggg000","00gglgg00","0ggggggg0","0gglflgg0","00ggggg00","000gtg000","000ttt000","0000t0000"],n=t[0].length,s=t.length,r=he(()=>t.join("").split("")),i=he(()=>({"--cols":n,"--rows":s}));return(l,a)=>(E(),$("div",{class:Ie(["pixel-tree",[`size-${e.size}`,`variant-${e.variant}`]]),style:xs(i.value),"aria-hidden":"true"},[(E(!0),$(J,null,ye(r.value,(o,u)=>(E(),$("span",{key:u,class:Ie(["pixel-tree-cell",{filled:o!=="0",leaf:o==="g",leafAlt:o==="l",trunk:o==="t",fruit:o==="f"}])},null,2))),128))],6))}},Qe=Dl(jf,[["__scopeId","data-v-00c24bb5"]]),zf={class:"container nav-shell"},Uf={class:"brand-mark brand-mark-tree"},Gf={class:"nav-right"},Vf={__name:"SiteHeader",props:{theme:{type:String,default:"dark"},scrolled:{type:Boolean,default:!1}},emits:["toggle-theme"],setup(e){const t=Se(!1);return(n,s)=>{const r=Ht("router-link");return E(),$("header",{class:Ie(["site-header",{scrolled:e.scrolled}])},[f("div",zf,[H(r,{class:"brand",to:"/"},{default:K(()=>[f("span",Uf,[H(Qe,{size:"micro",variant:"forest"})]),s[10]||(s[10]=f("div",{class:"brand-copy"},[f("strong",null,"TreeCore"),f("small",null,"Minecraft Server Core")],-1))]),_:1}),f("div",Gf,[f("button",{class:"menu-toggle",onClick:s[0]||(s[0]=i=>t.value=!t.value),"aria-label":"切换导航"},[...s[11]||(s[11]=[f("span",null,null,-1),f("span",null,null,-1),f("span",null,null,-1)])]),f("nav",{class:Ie(["nav-links",{open:t.value}])},[H(r,{to:"/",onClick:s[1]||(s[1]=i=>t.value=!1)},{default:K(()=>[...s[12]||(s[12]=[te("首页",-1)])]),_:1}),H(r,{to:"/features",onClick:s[2]||(s[2]=i=>t.value=!1)},{default:K(()=>[...s[13]||(s[13]=[te("核心能力",-1)])]),_:1}),H(r,{to:"/docs",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:K(()=>[...s[14]||(s[14]=[te("技术文档",-1)])]),_:1}),H(r,{to:"/downloads",onClick:s[4]||(s[4]=i=>t.value=!1)},{default:K(()=>[...s[15]||(s[15]=[te("下载",-1)])]),_:1}),H(r,{to:"/roadmap",onClick:s[5]||(s[5]=i=>t.value=!1)},{default:K(()=>[...s[16]||(s[16]=[te("路线图",-1)])]),_:1}),H(r,{to:"/changelog",onClick:s[6]||(s[6]=i=>t.value=!1)},{default:K(()=>[...s[17]||(s[17]=[te("更新日志",-1)])]),_:1}),H(r,{to:"/team",onClick:s[7]||(s[7]=i=>t.value=!1)},{default:K(()=>[...s[18]||(s[18]=[te("团队与支持",-1)])]),_:1}),H(r,{class:"nav-cta",to:"/docs/quick-start",onClick:s[8]||(s[8]=i=>t.value=!1)},{default:K(()=>[...s[19]||(s[19]=[te("快速开始",-1)])]),_:1}),f("button",{class:"theme-toggle",onClick:s[9]||(s[9]=i=>n.$emit("toggle-theme"))},[s[20]||(s[20]=f("span",{class:"theme-dot"},null,-1)),te(" "+O(e.theme==="dark"?"浅色":"深色"),1)])],2)])])],2)}}},qf={class:"site-footer"},Kf={class:"container footer-grid"},Zf={class:"brand footer-brand"},Jf={class:"brand-mark brand-mark-tree"},Qf={__name:"SiteFooter",setup(e){return(t,n)=>{const s=Ht("router-link");return E(),$("footer",qf,[f("div",Kf,[f("div",null,[f("div",Zf,[f("span",Jf,[H(Qe,{size:"micro",variant:"forest"})]),n[0]||(n[0]=f("div",null,[f("strong",null,"TreeCore"),f("small",null,"高性能 Minecraft 服务端核心")],-1))]),n[1]||(n[1]=f("p",{class:"footer-copy"}," 面向高并发、长时间运行与运维可视化的服务端核心。 ",-1))]),f("div",null,[n[7]||(n[7]=f("h4",null,"站点",-1)),f("ul",null,[f("li",null,[H(s,{to:"/features"},{default:K(()=>[...n[2]||(n[2]=[te("核心能力",-1)])]),_:1})]),f("li",null,[H(s,{to:"/docs"},{default:K(()=>[...n[3]||(n[3]=[te("技术文档",-1)])]),_:1})]),f("li",null,[H(s,{to:"/downloads"},{default:K(()=>[...n[4]||(n[4]=[te("下载",-1)])]),_:1})]),f("li",null,[H(s,{to:"/roadmap"},{default:K(()=>[...n[5]||(n[5]=[te("路线图",-1)])]),_:1})]),f("li",null,[H(s,{to:"/changelog"},{default:K(()=>[...n[6]||(n[6]=[te("更新日志",-1)])]),_:1})])])]),n[13]||(n[13]=f("div",null,[f("h4",null,"资源"),f("ul",null,[f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree",target:"_blank",rel:"noreferrer"},"GitHub")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"Releases")]),f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/discussions",target:"_blank",rel:"noreferrer"},"Discussions")])])],-1)),f("div",null,[n[12]||(n[12]=f("h4",null,"支持",-1)),f("ul",null,[f("li",null,[H(s,{to:"/team"},{default:K(()=>[...n[8]||(n[8]=[te("团队与支持",-1)])]),_:1})]),n[9]||(n[9]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/issues",target:"_blank",rel:"noreferrer"},"Issues")],-1)),n[10]||(n[10]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md",target:"_blank",rel:"noreferrer"},"安全策略")],-1)),n[11]||(n[11]=f("li",null,[f("a",{href:"https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"贡献指南")],-1))])])]),n[14]||(n[14]=f("div",{class:"container footer-bottom"},[f("span",null,"© 2026 TreeMC-cloud"),f("span",null,"TreeCore / Tree")],-1))])}}},Yf=["data-theme"],Xf={class:"site-main"},ed={__name:"App",setup(e){const t=Se("dark"),n=Se(!1),s=Nl();let r=null;const i=c=>{t.value=c,document.documentElement.dataset.theme=c,localStorage.setItem("tree-site-theme",c)},l=()=>{i(t.value==="dark"?"light":"dark")},a=()=>{n.value=window.scrollY>8},o=[".page-hero",".hero-grid > *",".stats-grid > *",".section-head",".feature-grid > *",".tree-suite-grid > *",".entry-grid > *",".showcase-row > *",".media-grid > *",".release-hero-grid > *",".release-list-grid > *",".roadmap-grid > *",".timeline-item",".contributor-grid > *",".faq-grid > *",".docs-layout-page > *",".cta-shell",".changelog-toolbar",".empty-state",".doc-header",".doc-article",".doc-footer",".trust-strip > *"],u=async()=>{await Bn();const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[...new Set(o.flatMap(p=>Array.from(document.querySelectorAll(p))))];r&&(r.disconnect(),r=null),d.forEach((p,m)=>{p.classList.add("reveal"),p.style.setProperty("--reveal-delay",`${m%6*70}ms`),c?p.classList.add("is-visible"):p.classList.remove("is-visible")}),!c&&(r=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("is-visible"),r==null||r.unobserve(m.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"}),d.forEach(p=>r==null?void 0:r.observe(p)))};return en(()=>{const c=localStorage.getItem("tree-site-theme");if(c==="dark"||c==="light")i(c);else{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;i(d?"dark":"light")}a(),window.addEventListener("scroll",a,{passive:!0}),u()}),Es(()=>{window.removeEventListener("scroll",a),r==null||r.disconnect()}),Qt(()=>s.fullPath,()=>{u()}),Qt(t,c=>{document.documentElement.dataset.theme=c}),(c,d)=>{const p=Ht("router-view");return E(),$("div",{class:"site-shell","data-theme":t.value},[d[0]||(d[0]=ht('<div class="site-backdrop" aria-hidden="true"><span class="backdrop-orb orb-a"></span><span class="backdrop-orb orb-b"></span><span class="backdrop-orb orb-c"></span><span class="backdrop-grid"></span><span class="backdrop-noise"></span></div>',1)),H(Vf,{theme:t.value,scrolled:n.value,onToggleTheme:l},null,8,["theme","scrolled"]),f("main",Xf,[H(p,null,{default:K(({Component:m,route:y})=>[H(lu,{name:"page-fade",mode:"out-in"},{default:K(()=>[(E(),cn(gc(m),{key:y.fullPath}))]),_:2},1024)]),_:1})]),H(Qf)],8,Yf)}}},td="/images/console-preview.png",nd={class:"hero-section home-hero-section"},sd={class:"container hero-grid home-hero-grid"},rd={class:"hero-copy"},id={class:"section-kicker-row hero-kicker-row"},od={class:"hero-actions"},ld={class:"section-block"},ad={class:"container stats-grid"},cd={class:"section-block home-suite-section surface-soft"},ud={class:"container"},fd={class:"section-head"},dd={class:"section-kicker-row"},pd={class:"tree-suite-grid"},hd={class:"suite-card-head"},gd={class:"suite-icon"},md={class:"card-label"},bd={class:"bullet-list compact-list suite-points"},vd={class:"section-block showcase-section"},_d={class:"container showcase-stack"},yd={class:"showcase-visual surface-card"},kd=["src","alt"],wd={class:"showcase-copy"},xd={class:"section-kicker-row"},Cd={class:"eyebrow"},Td={class:"hero-actions"},Rd={class:"section-block surface-soft"},Sd={class:"container"},Ad={class:"section-head"},Ed={class:"section-kicker-row"},Pd={class:"feature-grid three"},Id={class:"section-block"},$d={class:"container"},Od={class:"section-head"},Ld={class:"section-kicker-row"},Md={class:"entry-grid"},Nd={class:"entry-card-head"},Dd={class:"card-label"},Bd={class:"section-block surface-soft"},Wd={class:"container"},Hd={class:"section-head"},Fd={class:"section-kicker-row"},jd={class:"feature-grid two"},zd={class:"section-block final-cta"},Ud={class:"container cta-shell tree-cta-shell"},Gd={class:"cta-copy"},Vd={class:"section-kicker-row"},qd={class:"hero-actions"},Kd={__name:"HomePage",setup(e){const t=[{value:"11",label:"当前 Web 页签"},{value:"4 档",label:"自动分层预设"},{value:"ZIP",label:"本地资源包拖拽上传"},{value:"Docs",label:"站内技术 Wiki"}],n=[{kicker:"PERFORMANCE",title:"性能主干",description:"把动态视距、动态模拟距离、自动分层、Paper 热调与网络链路优化收束成同一条性能主线。",points:["动态视距 / 模拟距离","自动分层与运行时调优","更稳的 TPS / MSPT 控制"],link:"/features",linkLabel:"查看性能能力",variant:"forest"},{kicker:"OPERATIONS",title:"运维主干",description:"让控制台、诊断、备份、世界管理与集成状态不再分散在命令和脚本里，而是在 Web 面板内统一可见。",points:["控制台 / 线程转储 / 内存快照","备份创建与恢复","世界管理与集成状态卡片"],link:"/docs/web-panel",linkLabel:"查看 Web 面板",variant:"emerald"},{kicker:"CONTENT FLOW",title:"内容主干",description:"模型、纹理、资源包 ZIP、本地托管与在线玩家下发形成完整闭环，适合内容服与综合服长期维护。",points:["模型 / 纹理上传","资源包拖拽上传与重载","在线玩家远程下发"],link:"/docs/resource-pack",linkLabel:"查看资源链路",variant:"gold"}],s=[{eyebrow:"REAL OPERATIONS",title:"高峰监控、问题排查与恢复动作放在同一条运维流程里。",description:"先看仪表盘，再看控制台，再做线程转储、资源包处理或备份恢复。TreeCore 的目标不是把功能堆进去，而是让它们在实际运维时顺畅接起来。",image:"/images/console-live.gif",link:"/docs/web-pages-overview",linkLabel:"查看页面总览",variant:"teal",reverse:!1},{eyebrow:"LONG TERM SERVER",title:"面向综合服、长周目服与高峰玩家场景持续维护。",description:"对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。",image:"/images/stress-test.gif",link:"/docs/first-day-checklist",linkLabel:"查看上线清单",variant:"forest",reverse:!0},{eyebrow:"DOCS + RELEASE FLOW",title:"从官网到文档再到下载入口，形成更像正式项目站点的阅读路径。",description:"借鉴 PaperMC 那种“首页清楚给出入口，再用分区承接内容”的思路，现在你可以从首页直接进入快速开始、配置参考、下载页、更新日志和路线图。",image:"/images/console-preview.png",link:"/docs/quick-start",linkLabel:"从快速开始进入",variant:"gold",reverse:!1}],r=[{title:"生存 / 长周目服",description:"希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。"},{title:"多世界 / 综合服",description:"需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。"},{title:"运维要求高的团队服",description:"希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。"}],i=[{tag:"GET STARTED",title:"快速开始",description:"适合第一次接触 TreeCore 的服主，快速完成下载、启动和首次检查。",link:"/docs/quick-start",linkLabel:"进入快速开始",variant:"forest"},{tag:"CONFIG",title:"配置参考",description:"把关键配置项和推荐开关集中整理，便于你在正式服环境中调整。",link:"/docs/configuration",linkLabel:"查看配置参考",variant:"teal"},{tag:"DOWNLOADS",title:"下载与版本",description:"在官网内查看最新版本、更新摘要与下载入口，不再只靠仓库页面跳转。",link:"/downloads",linkLabel:"进入下载页",variant:"gold"},{tag:"ROADMAP",title:"路线图",description:"清楚了解当前阶段、下一阶段与后续方向，避免首页信息只有静态介绍。",link:"/roadmap",linkLabel:"查看路线图",variant:"emerald"},{tag:"CHANGELOG",title:"更新日志",description:"把版本变化、发布时间和更新摘要收束成时间线视图。",link:"/changelog",linkLabel:"查看更新日志",variant:"forest"},{tag:"SUPPORT",title:"团队与支持",description:"集中展示社区入口、贡献者、常见问题与对外支持入口。",link:"/team",linkLabel:"进入支持页",variant:"gold"}],l=[{title:"TreeCore 更适合哪类服务器？",description:"更适合生存服、长周目服、多世界综合服，以及希望把性能优化、资源包、模型和运维工具整合到一起维护的服务器。"},{title:"默认会不会大幅改动原版行为？",description:"整体思路是优先稳态和兼容。很多优化是压力感知或运行时调优，不是简单粗暴地长期关闭原版机制；像红石这类也更偏默认原版、按需保护。"},{title:"Web 管理面板现在能做什么？",description:"当前已经能覆盖控制台、诊断、资源包、模型、世界管理、集成状态、ItemsAdder 菜单维护、假人 / 红石运维以及备份恢复等常用维护动作。"},{title:"第一次上服最推荐先做什么？",description:"建议先跑快速开始和首次检查清单，确认 `/tc perf`、Web 面板、基础配置生成、资源包链路和关键插件兼容，再进入正式服环境。"}];return(a,o)=>{const u=Ht("router-link");return E(),$("div",null,[f("section",nd,[f("div",sd,[f("div",rd,[f("div",id,[H(Qe,{size:"tiny",variant:"forest"}),o[0]||(o[0]=f("span",{class:"eyebrow"},"TREECORE · OFFICIAL WEBSITE",-1))]),o[4]||(o[4]=ht('<h1 class="hero-title">高性能 Minecraft 服务端核心，带 Web 管理、诊断和资源链路。</h1><p class="hero-description"> TreeCore 面向需要长期维护的服务器场景，把性能调优、Web 管理面板、资源包与模型流程、 假人和红石分析整理到同一套服务端核心里。 </p><div class="hero-meta-row"><span class="hero-meta-pill">运行时性能调优</span><span class="hero-meta-pill">Web 管理与诊断</span><span class="hero-meta-pill">资源包 / 模型闭环</span></div>',3)),f("div",od,[H(u,{class:"button primary",to:"/features"},{default:K(()=>[...o[1]||(o[1]=[te("查看能力",-1)])]),_:1}),H(u,{class:"button secondary",to:"/docs"},{default:K(()=>[...o[2]||(o[2]=[te("阅读文档",-1)])]),_:1}),o[3]||(o[3]=f("a",{class:"button ghost",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"下载构建",-1))]),o[5]||(o[5]=f("div",{class:"hero-badges"},[f("span",null,"Java 21+"),f("span",null,"Minecraft 1.21.x"),f("span",null,"11 个 Web 页面"),f("span",null,"4 档自动分层")],-1))]),o[6]||(o[6]=ht('<div class="hero-visual tree-hero-visual"><div class="hero-spotlight"></div><div class="hero-card image-card hero-stage"><img src="'+td+'" alt="TreeCore 控制台预览"><div class="overlay-panel"><strong>Web 管理面板</strong><p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p></div></div></div>',1))])]),f("section",ld,[f("div",ad,[(E(),$(J,null,ye(t,c=>f("article",{class:"stat-card",key:c.label},[f("strong",null,O(c.value),1),f("span",null,O(c.label),1)])),64))])]),f("section",cd,[f("div",ud,[f("div",fd,[f("div",dd,[H(Qe,{size:"tiny",variant:"emerald"}),o[7]||(o[7]=f("span",{class:"eyebrow"},"CORE BRANCHES",-1))]),o[8]||(o[8]=f("h2",null,"借鉴 PaperMC 那种清晰的软件分区，但把它改成 TreeCore 的三条主干。",-1)),o[9]||(o[9]=f("p",null," 首页现在不再只是堆叠介绍，而是用更产品化的方式，把 TreeCore 的三条核心主干——性能、运维、内容链路——明确分开展示。 ",-1))]),f("div",pd,[(E(),$(J,null,ye(n,c=>f("article",{class:"suite-card surface-card",key:c.title},[f("div",hd,[f("div",gd,[H(Qe,{size:"sm",variant:c.variant},null,8,["variant"])]),f("div",null,[f("span",md,O(c.kicker),1),f("h3",null,O(c.title),1)])]),f("p",null,O(c.description),1),f("ul",bd,[(E(!0),$(J,null,ye(c.points,d=>(E(),$("li",{key:d},O(d),1))),128))]),H(u,{class:"text-link",to:c.link},{default:K(()=>[te(O(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),o[22]||(o[22]=ht('<section class="section-block trust-section"><div class="container trust-strip"><article class="trust-item surface-card"><strong>性能引擎</strong><span>动态视距、自动分层、Paper 热调与网络链路优化协同工作。</span></article><article class="trust-item surface-card"><strong>运维面板</strong><span>控制台、诊断、备份、世界管理和集成状态放进同一入口。</span></article><article class="trust-item surface-card"><strong>内容维护</strong><span>模型、纹理、资源包、本地托管与在线玩家下发形成闭环。</span></article></div></section>',1)),f("section",vd,[f("div",_d,[(E(),$(J,null,ye(s,c=>f("article",{class:Ie(["showcase-row",{reverse:c.reverse}]),key:c.title},[f("div",yd,[f("img",{src:c.image,alt:c.title},null,8,kd)]),f("div",wd,[f("div",xd,[H(Qe,{size:"tiny",variant:c.variant},null,8,["variant"]),f("span",Cd,O(c.eyebrow),1)]),f("h2",null,O(c.title),1),f("p",null,O(c.description),1),f("div",Td,[H(u,{class:"button primary small",to:c.link},{default:K(()=>[te(O(c.linkLabel),1)]),_:2},1032,["to"])])])],2)),64))])]),f("section",Rd,[f("div",Sd,[f("div",Ad,[f("div",Ed,[H(Qe,{size:"tiny",variant:"gold"}),o[10]||(o[10]=f("span",{class:"eyebrow"},"SCENARIOS",-1))]),o[11]||(o[11]=f("h2",null,"适合哪些服务器？",-1))]),f("div",Pd,[(E(),$(J,null,ye(r,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,O(c.title),1),f("p",null,O(c.description),1)])),64))])])]),f("section",Id,[f("div",$d,[f("div",Od,[f("div",Ld,[H(Qe,{size:"tiny",variant:"teal"}),o[12]||(o[12]=f("span",{class:"eyebrow"},"INSIDE THE SITE",-1))]),o[13]||(o[13]=f("h2",null,"文档、下载、路线图和支持都在同一个站里。",-1)),o[14]||(o[14]=f("p",null,"如果你是第一次来看 TreeCore，这里就是最直接的入口区：先找文档，再看下载，最后再看路线图和支持页面。",-1))]),f("div",Md,[(E(),$(J,null,ye(i,c=>f("article",{class:"entry-card feature-card compact",key:c.title},[f("div",Nd,[H(Qe,{size:"tiny",variant:c.variant},null,8,["variant"]),f("span",Dd,O(c.tag),1)]),f("h3",null,O(c.title),1),f("p",null,O(c.description),1),H(u,{class:"text-link",to:c.link},{default:K(()=>[te(O(c.linkLabel)+" →",1)]),_:2},1032,["to"])])),64))])])]),f("section",Bd,[f("div",Wd,[f("div",Hd,[f("div",Fd,[H(Qe,{size:"tiny",variant:"forest"}),o[15]||(o[15]=f("span",{class:"eyebrow"},"FAQ",-1))]),o[16]||(o[16]=f("h2",null,"你可能最先会关心的几个问题",-1))]),f("div",jd,[(E(),$(J,null,ye(l,c=>f("article",{class:"feature-card compact",key:c.title},[f("h3",null,O(c.title),1),f("p",null,O(c.description),1)])),64))])])]),f("section",zd,[f("div",Ud,[f("div",Gd,[f("div",Vd,[H(Qe,{size:"tiny",variant:"emerald"}),o[17]||(o[17]=f("span",{class:"eyebrow"},"START HERE",-1))]),o[18]||(o[18]=f("h2",null,"先看能力，再进文档，然后开始部署。",-1)),o[19]||(o[19]=f("p",null,"官网现在已经把首页、文档、下载入口和后续信息放到同一个站里，阅读路径会简单很多。",-1))]),f("div",qd,[H(u,{class:"button primary",to:"/docs"},{default:K(()=>[...o[20]||(o[20]=[te("进入技术文档",-1)])]),_:1}),H(u,{class:"button secondary",to:"/downloads"},{default:K(()=>[...o[21]||(o[21]=[te("查看下载入口",-1)])]),_:1})])])])])}}},Zd={},Jd={class:"page-shell container"};function Qd(e,t){return E(),$("div",Jd,[...t[0]||(t[0]=[ht('<section class="page-hero"><span class="eyebrow">FEATURES</span><h1>围绕服务器全链路组织的核心能力</h1><p> 从运行时性能调优，到 Web 运维面板，再到资源包、模型、世界与备份管理，TreeCore 当前公开功能已经能覆盖一套完整的服务器维护流程。 </p></section><section class="stack-section"><div class="section-head left"><h2>性能引擎</h2><p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p></div><div class="feature-grid three"><article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article><article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article><article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article><article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article><article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article><article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>Web 管理面板</h2><p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p></div><div class="feature-grid two"><article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article><article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article><article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article><article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article><article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article><article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article></div></section><section class="stack-section"><div class="section-head left"><h2>内容生产与生态集成</h2><p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p></div><div class="feature-grid three"><article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article><article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article><article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article><article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article><article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article><article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article></div></section>',4)])])}const Yd=Dl(Zd,[["render",Qd]]),Bl="https://api.github.com/repos/TreeMC-cloud/Tree",Xd=`${Bl}/releases?per_page=30`,ep=`${Bl}/contributors?per_page=24`,Wl="tree-site-cache:",tp=30*60*1e3,Hl=e=>{try{const t=localStorage.getItem(`${Wl}${e}`);if(!t)return null;const n=JSON.parse(t);return!n||typeof n!="object"||Date.now()-n.timestamp>tp?null:n.data}catch{return null}},Fl=(e,t)=>{try{localStorage.setItem(`${Wl}${e}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}},jl=async e=>{const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API ${t.status}`);return t.json()},np=async()=>{try{const e=await fetch("/data/releases-fallback.json");if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}},zl=async()=>{try{const e=await jl(Xd),t=Array.isArray(e)?e:[];return Fl("releases",t),{data:t,source:"github"}}catch{const e=Hl("releases");if(e)return{data:e,source:"cache"};const t=await np();return{data:t,source:t.length?"fallback":"empty"}}},sp=async()=>{try{const e=await jl(ep),t=Array.isArray(e)?e.filter(n=>n&&n.type==="User"&&!String(n.login).endsWith("[bot]")):[];return Fl("contributors",t),{data:t,source:"github"}}catch{const e=Hl("contributors");return{data:e||[],source:e?"cache":"empty"}}},is=e=>e?new Date(e).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间",Dt=e=>e?e.prerelease?"preview":e.draft?"draft":"stable":"unknown",Ul=e=>{switch(e){case"stable":return"正式版";case"preview":return"预发布";case"draft":return"草稿";default:return"未知"}},Gn=e=>String(e||"").replace(/\r/g,"").trim(),Nt=(e,t=4)=>{const n=Gn(e);if(!n)return[];const s=n.split(`
`).map(i=>i.trim()).filter(Boolean).filter(i=>!i.startsWith("#")).map(i=>i.replace(/^[-*+]\s*/,"").replace(/^\d+\.\s*/,"").trim()).filter(i=>i.length>=4),r=[];for(const i of s)if(r.includes(i)||r.push(i),r.length>=t)break;return r},xn=e=>{const t=String((e==null?void 0:e.name)||"").toLowerCase();return t.endsWith(".jar")?"server":t.endsWith(".zip")&&/src|source/.test(t)?"source":t.endsWith(".zip")?"archive":t.endsWith(".sha1")||t.endsWith(".sha256")||t.endsWith(".md5")?"checksum":t.endsWith(".json")||t.endsWith(".txt")||t.endsWith(".yml")?"metadata":"other"},to=e=>{switch(e){case"server":return"服务端构建";case"archive":return"压缩包";case"source":return"源码包";case"checksum":return"校验文件";case"metadata":return"说明 / 元数据";default:return"其他文件"}},Gl=e=>[...e].sort((t,n)=>new Date((n==null?void 0:n.published_at)||0).getTime()-new Date((t==null?void 0:t.published_at)||0).getTime()),rp={class:"page-shell container"},ip={class:"page-hero"},op={class:"hero-actions"},lp={class:"stack-section"},ap={class:"section-head left"},cp={class:"release-hero-grid"},up={key:0,class:"release-hero-card surface-card"},fp={class:"release-head"},dp={class:"release-date"},pp={class:"release-tag"},hp={key:0,class:"bullet-list compact-list"},gp={key:1,class:"release-body"},mp={class:"release-actions"},bp=["href"],vp=["href"],_p={key:1,class:"release-hero-card surface-card"},yp={class:"release-head"},kp={class:"release-date"},wp={class:"release-tag"},xp={key:0,class:"bullet-list compact-list"},Cp={key:1,class:"release-body"},Tp={class:"release-actions"},Rp=["href"],Sp=["href"],Ap={key:2,class:"empty-state surface-card"},Ep={class:"stack-section surface-card changelog-toolbar"},Pp={class:"release-filter-row"},Ip={class:"filter-chip-group"},$p=["onClick"],Op={key:0,class:"stack-section"},Lp={key:1,class:"stack-section release-list-grid"},Mp={class:"release-head"},Np={class:"release-date"},Dp={class:"release-tag"},Bp={key:0,class:"bullet-list compact-list"},Wp={key:1,class:"release-body"},Hp={key:2,class:"asset-group-list"},Fp={key:3,class:"release-asset-list"},jp=["href"],zp={class:"release-actions"},Up=["href"],Gp={key:2,class:"stack-section"},Vp={__name:"DownloadsPage",setup(e){const t=Se(!0),n=Se([]),s=Se("github"),r=Se("all"),i=Se(""),l=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],a=he(()=>Gl(n.value)),o=he(()=>a.value.find(A=>Dt(A)==="stable")||null),u=he(()=>a.value.find(A=>Dt(A)==="preview")||null),c=he(()=>t.value?"正在从 GitHub Releases 获取版本信息。":n.value.length?s.value==="cache"?"当前数据来自本地缓存。":s.value==="fallback"?"当前数据来自回退文件。":"当前数据来自 GitHub 官方 Releases。":"当前还没有公开版本列表，建议后续在公开仓库建立 Release 流程。"),d=A=>{const _=Gn(A).replace(/[#>*`]/g," ").replace(/\s+/g," ").trim();return _?_.length>140?`${_.slice(0,140)}…`:_:"暂无发布说明。"},p=A=>{const _=m(A);return _.find(R=>xn(R)==="server")||_[0]||null},m=A=>{const _=Array.isArray(A==null?void 0:A.assets)?[...A.assets]:[],R=["server","archive","source","checksum","metadata","other"];return _.sort((T,P)=>R.indexOf(xn(T))-R.indexOf(xn(P))).slice(0,5)},y=A=>{const _=new Map;for(const R of(A==null?void 0:A.assets)||[]){const T=xn(R),P=_.get(T)||[];P.push(R),_.set(T,P)}return["server","archive","source","checksum","metadata","other"].filter(R=>_.has(R)).map(R=>({type:R,label:to(R),items:_.get(R)}))},v=he(()=>{const A=i.value.toLowerCase();return a.value.filter(_=>{const R=Dt(_);return r.value!=="all"&&R!==r.value?!1:A?[_.name,_.tag_name,Gn(_.body)].filter(Boolean).join(" ").toLowerCase().includes(A):!0})});return en(async()=>{const A=await zl();n.value=A.data,s.value=A.source,t.value=!1}),(A,_)=>{const R=Ht("router-link");return E(),$("div",rp,[f("section",ip,[_[4]||(_[4]=f("span",{class:"eyebrow"},"DOWNLOADS",-1)),_[5]||(_[5]=f("h1",null,"下载与版本入口",-1)),_[6]||(_[6]=f("p",null," 下载页会优先读取公开仓库 Releases，并把最新正式版、预发布版、附件分类和更新摘要整理成更像正式产品站的版本入口。 ",-1)),f("div",op,[_[3]||(_[3]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),H(R,{class:"button secondary",to:"/docs/quick-start"},{default:K(()=>[..._[1]||(_[1]=[te("安装文档",-1)])]),_:1}),H(R,{class:"button ghost",to:"/changelog"},{default:K(()=>[..._[2]||(_[2]=[te("查看更新日志",-1)])]),_:1})])]),f("section",lp,[f("div",ap,[_[7]||(_[7]=f("h2",null,"最新版本",-1)),f("p",null,O(c.value),1)]),f("div",cp,[o.value?(E(),$("article",up,[f("div",fp,[_[8]||(_[8]=f("span",{class:"release-badge"},"最新正式版",-1)),f("span",dp,O(pe(is)(o.value.published_at)),1)]),f("h3",null,O(o.value.name||o.value.tag_name),1),f("p",pp,O(o.value.tag_name),1),pe(Nt)(o.value.body,4).length?(E(),$("ul",hp,[(E(!0),$(J,null,ye(pe(Nt)(o.value.body,4),T=>(E(),$("li",{key:T},O(T),1))),128))])):(E(),$("p",gp,O(d(o.value.body)),1)),f("div",mp,[f("a",{class:"button primary small",href:o.value.html_url,target:"_blank",rel:"noreferrer"},"查看正式版",8,bp),p(o.value)?(E(),$("a",{key:0,class:"button secondary small",href:p(o.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+O(p(o.value).name),9,vp)):Ye("",!0)])])):Ye("",!0),u.value?(E(),$("article",_p,[f("div",yp,[_[9]||(_[9]=f("span",{class:"release-badge alt"},"最新预发布",-1)),f("span",kp,O(pe(is)(u.value.published_at)),1)]),f("h3",null,O(u.value.name||u.value.tag_name),1),f("p",wp,O(u.value.tag_name),1),pe(Nt)(u.value.body,4).length?(E(),$("ul",xp,[(E(!0),$(J,null,ye(pe(Nt)(u.value.body,4),T=>(E(),$("li",{key:T},O(T),1))),128))])):(E(),$("p",Cp,O(d(u.value.body)),1)),f("div",Tp,[f("a",{class:"button primary small",href:u.value.html_url,target:"_blank",rel:"noreferrer"},"查看预发布",8,Rp),p(u.value)?(E(),$("a",{key:0,class:"button secondary small",href:p(u.value).browser_download_url,target:"_blank",rel:"noreferrer"}," 下载 "+O(p(u.value).name),9,Sp)):Ye("",!0)])])):Ye("",!0),!o.value&&!u.value?(E(),$("article",Ap,[..._[10]||(_[10]=[f("strong",null,"当前公开仓库还没有可展示的 Release。",-1),f("p",null,"你可以先继续完善官网和文档；一旦公开仓库开始发布版本，这里会自动切成版本入口页。",-1)])])):Ye("",!0)])]),f("section",Ep,[_[11]||(_[11]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"版本筛选")],-1)),f("div",Pp,[f("div",Ip,[(E(),$(J,null,ye(l,T=>f("button",{key:T.value,class:Ie(["filter-chip",{active:r.value===T.value}]),onClick:P=>r.value=T.value},O(T.label),11,$p)),64))]),Or(f("input",{"onUpdate:modelValue":_[0]||(_[0]=T=>i.value=T),class:"docs-search",placeholder:"搜索 tag、标题、更新说明…"},null,512),[[Br,i.value,void 0,{trim:!0}]])])]),t.value?(E(),$("section",Op,[..._[12]||(_[12]=[f("div",{class:"empty-state"},[f("strong",null,"正在获取版本信息…")],-1)])])):v.value.length?(E(),$("section",Lp,[(E(!0),$(J,null,ye(v.value,T=>(E(),$("article",{key:T.id||T.tag_name,class:"release-card enhanced-release-card"},[f("div",Mp,[f("span",{class:Ie(["release-badge",{alt:pe(Dt)(T)==="preview"}])},O(pe(Ul)(pe(Dt)(T))),3),f("span",Np,O(pe(is)(T.published_at)),1)]),f("h3",null,O(T.name||T.tag_name),1),f("p",Dp,O(T.tag_name),1),pe(Nt)(T.body,4).length?(E(),$("ul",Bp,[(E(!0),$(J,null,ye(pe(Nt)(T.body,4),P=>(E(),$("li",{key:P},O(P),1))),128))])):(E(),$("p",Wp,O(d(T.body)),1)),y(T).length?(E(),$("div",Hp,[(E(!0),$(J,null,ye(y(T),P=>(E(),$("div",{key:P.type,class:"asset-group-chip"},[f("strong",null,O(P.label),1),f("span",null,O(P.items.length)+" 个文件",1)]))),128))])):Ye("",!0),T.assets&&T.assets.length?(E(),$("div",Fp,[(E(!0),$(J,null,ye(m(T),P=>(E(),$("a",{key:P.id||P.name,class:"release-asset-link",href:P.browser_download_url,target:"_blank",rel:"noreferrer"},[f("span",null,O(P.name),1),f("small",null,O(pe(to)(pe(xn)(P))),1)],8,jp))),128))])):Ye("",!0),f("div",zp,[f("a",{class:"button primary small",href:T.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Up),H(R,{class:"button secondary small",to:"/changelog"},{default:K(()=>[..._[13]||(_[13]=[te("看时间线",-1)])]),_:1})])]))),128))])):(E(),$("section",Gp,[..._[14]||(_[14]=[f("div",{class:"empty-state"},[f("strong",null,"没有符合当前筛选条件的版本。"),f("p",null,"可以尝试切换“正式版 / 预发布”筛选，或清空关键词后重试。")],-1)])])),_[15]||(_[15]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>建议的下载链路</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article><article class="feature-card compact"><h3>官网下载页</h3><p>站点从 GitHub API 读取版本信息，并把正式版、预发布和附件分类统一展示。</p></article><article class="feature-card compact"><h3>更新日志联动</h3><p>下载页与更新日志页共用同一版本源，后续发布节奏会自然沉淀成时间线。</p></article></div></section>',1))])}}},gs=[{key:"getting-started",title:"入门",description:"适合第一次接触 TreeCore 的服主、维护者和部署人员。",items:[{slug:"quick-start",title:"快速开始",description:"查看启动要求、基础运行方式和首次建议动作。",path:"getting-started/quick-start.md",tag:"Getting Started",minutes:"3 分钟"},{slug:"web-panel",title:"Web 面板访问",description:"了解默认监听地址、远程访问和鉴权配置。",path:"getting-started/web-panel.md",tag:"Access",minutes:"5 分钟"},{slug:"first-day-checklist",title:"首次上线检查清单",description:"把测试服 / 正式服第一次上线时要确认的动作列成清单。",path:"getting-started/first-day-checklist.md",tag:"Checklist",minutes:"4 分钟"}]},{key:"operations",title:"运维",description:"适合处理控制台、资源包、世界、假人、备份与 Web 页面。",items:[{slug:"web-pages-overview",title:"Web 页面总览",description:"11 个页签怎么分工、典型使用流转是什么。",path:"operations/web-pages-overview.md",tag:"Operations",minutes:"5 分钟"},{slug:"commands",title:"命令与日常运维",description:"整理当前 TreeCoreCommand 实际实现的运维命令。",path:"operations/commands.md",tag:"Commands",minutes:"6 分钟"},{slug:"resource-pack",title:"资源包 / 模型链路",description:"模型、纹理、资源包 ZIP 与在线下发流程。",path:"operations/resource-pack.md",tag:"Content Pipeline",minutes:"6 分钟"},{slug:"integrations-and-worlds",title:"集成与世界管理",description:"CraftEngine、Multiverse、ItemsAdder 与多世界操作的统一入口。",path:"operations/integrations-and-worlds.md",tag:"Integrations",minutes:"5 分钟"},{slug:"fakeplayer-and-redstone",title:"假人 / 红石运维",description:"假人命令、热点回放和生电保护的理解方式。",path:"operations/fakeplayer-and-redstone.md",tag:"Redstone",minutes:"5 分钟"},{slug:"diagnostics-and-backups",title:"诊断与备份",description:"如何用 TreeCore 做日志、线程、内存和备份处理。",path:"operations/diagnostics-and-backups.md",tag:"Diagnostics",minutes:"5 分钟"}]},{key:"reference",title:"参考",description:"适合需要快速查配置和命令的人。",items:[{slug:"configuration",title:"配置参考",description:"整理当前最常用、最值得优先理解的配置项。",path:"reference/configuration.md",tag:"Reference",minutes:"8 分钟"},{slug:"command-cheatsheet",title:"命令速查表",description:"快速查命令，不展开概念说明。",path:"reference/command-cheatsheet.md",tag:"Cheatsheet",minutes:"2 分钟"}]},{key:"architecture",title:"技术视角",description:"适合继续深入配置、代码结构与 Web 资源同步的人。",items:[{slug:"system-overview",title:"系统架构总览",description:"从模块职责视角看当前 TreeCore 的整体构成。",path:"architecture/system-overview.md",tag:"Architecture",minutes:"7 分钟"},{slug:"module-map",title:"模块地图",description:"按代码目录视角梳理当前主要包结构和阅读顺序。",path:"architecture/module-map.md",tag:"Modules",minutes:"5 分钟"},{slug:"web-ui-pipeline",title:"Web 资源同步机制",description:"理解 treecore-web、JAR 内嵌资源与运行时目录的关系。",path:"development/web-ui-pipeline.md",tag:"Web Pipeline",minutes:"6 分钟"}]}],un=gs.flatMap(e=>e.items.map(t=>({...t,groupKey:e.key,groupTitle:e.title,groupDescription:e.description}))),Vl=Object.fromEntries(un.map(e=>[e.slug,e])),qp={class:"page-shell container"},Kp={class:"page-hero docs-hero-grid"},Zp={class:"hero-actions"},Jp={class:"stack-section surface-card docs-filter-card"},Qp={class:"docs-filter-bar"},Yp={class:"section-head left"},Xp={class:"feature-grid three"},eh={class:"card-label"},th={class:"doc-card-meta"},nh={key:0,class:"stack-section"},sh={__name:"DocsPage",setup(e){const t=Se(""),n=he(()=>{const s=t.value.toLowerCase();return s?gs.map(r=>({...r,items:r.items.filter(i=>[i.title,i.description,i.tag,r.title].join(" ").toLowerCase().includes(s))})).filter(r=>r.items.length>0):gs});return(s,r)=>{const i=Ht("router-link");return E(),$("div",qp,[f("section",Kp,[f("div",null,[r[3]||(r[3]=f("span",{class:"eyebrow"},"WIKI INSIDE SITE",-1)),r[4]||(r[4]=f("h1",null,"技术文档已经整合进官网内。",-1)),r[5]||(r[5]=f("p",null," 现在不再跳去 GitHub Markdown 页面，而是直接在官网站点里阅读部署、运维、配置、架构与 Web 资源同步文档。 ",-1)),f("div",Zp,[H(i,{class:"button primary",to:"/docs/quick-start"},{default:K(()=>[...r[1]||(r[1]=[te("从快速开始开始",-1)])]),_:1}),H(i,{class:"button secondary",to:"/docs/configuration"},{default:K(()=>[...r[2]||(r[2]=[te("查看配置参考",-1)])]),_:1})])]),r[6]||(r[6]=f("div",{class:"surface-card docs-hero-card"},[f("strong",null,"当前站内文档能力"),f("ul",{class:"bullet-list compact-list"},[f("li",null,"文档主页 + 站内详情页"),f("li",null,"分组导航 + 上一篇 / 下一篇"),f("li",null,"站内跳转，不依赖 GitHub Markdown 阅读"),f("li",null,"可继续接独立 docs 子域名")])],-1))]),f("section",Jp,[f("div",Qp,[r[7]||(r[7]=f("div",null,[f("span",{class:"eyebrow"},"DOC INDEX"),f("h2",null,"按主题或关键词查文档")],-1)),Or(f("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>t.value=l),class:"docs-search",placeholder:"搜索：资源包、配置、红石、世界、架构…"},null,512),[[Br,t.value,void 0,{trim:!0}]])])]),(E(!0),$(J,null,ye(n.value,l=>(E(),$("section",{class:"stack-section",key:l.key},[f("div",Yp,[f("h2",null,O(l.title),1),f("p",null,O(l.description),1)]),f("div",Xp,[(E(!0),$(J,null,ye(l.items,a=>(E(),$("article",{class:"feature-card compact",key:a.slug},[f("span",eh,O(a.tag),1),f("h3",null,O(a.title),1),f("p",null,O(a.description),1),f("div",th,[f("span",null,O(l.title),1),f("span",null,O(a.minutes),1)]),H(i,{class:"text-link",to:`/docs/${a.slug}`},{default:K(()=>[...r[8]||(r[8]=[te("进入文档 →",-1)])]),_:1},8,["to"])]))),128))])]))),128)),n.value.length?Ye("",!0):(E(),$("section",nh,[...r[9]||(r[9]=[f("div",{class:"empty-state"},[f("strong",null,"没有找到匹配的文档。"),f("p",null,"你可以尝试搜索“配置”“资源包”“红石”“架构”等关键词。")],-1)])])),r[10]||(r[10]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>推荐阅读路径</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>新服主</h3><p>快速开始 → Web 面板访问 → 首次上线检查清单 → 配置参考。</p></article><article class="feature-card compact"><h3>内容服维护者</h3><p>Web 页面总览 → 资源包 / 模型链路 → 集成与世界管理 → 假人 / 红石运维。</p></article><article class="feature-card compact"><h3>技术向维护者</h3><p>系统架构总览 → 模块地图 → Web 资源同步机制 → 命令速查表。</p></article></div></section>',1))])}}},rh=`# Tree 技术文档 / Wiki

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
`,ih=`# Summary

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
`,oh=`# 模块地图

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
`,lh=`# 系统架构总览

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
`,ah=`# Web 资源同步机制

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
`,ch=`# 首次上线检查清单

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
`,uh=`# 快速开始

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
`,fh=`# Web 面板访问

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
`,dh=`# 命令与日常运维

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
`,ph=`# 诊断与备份

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
`,hh=`# 假人 / 红石运维

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
`,gh=`# 集成与世界管理

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
`,mh=`# 资源包 / 模型链路

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
`,bh=`# Web 页面总览

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
`,vh=`# 命令速查表

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
`,yh=Object.assign({"../../content/docs/README.md":rh,"../../content/docs/SUMMARY.md":ih,"../../content/docs/architecture/module-map.md":oh,"../../content/docs/architecture/system-overview.md":lh,"../../content/docs/development/web-ui-pipeline.md":ah,"../../content/docs/getting-started/first-day-checklist.md":ch,"../../content/docs/getting-started/quick-start.md":uh,"../../content/docs/getting-started/web-panel.md":fh,"../../content/docs/operations/commands.md":dh,"../../content/docs/operations/diagnostics-and-backups.md":ph,"../../content/docs/operations/fakeplayer-and-redstone.md":hh,"../../content/docs/operations/integrations-and-worlds.md":gh,"../../content/docs/operations/resource-pack.md":mh,"../../content/docs/operations/web-pages-overview.md":bh,"../../content/docs/reference/command-cheatsheet.md":vh,"../../content/docs/reference/configuration.md":_h}),kh="../../content/docs/",wh=Object.fromEntries(Object.entries(yh).map(([e,t])=>[e.replace(kh,""),t]));function Fr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var tn=Fr();function ql(e){tn=e}var Mn={exec:()=>null};function ue(e,t=""){let n=typeof e=="string"?e:e.source;const s={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(De.caret,"$1"),n=n.replace(r,l),s},getRegex:()=>new RegExp(n,t)};return s}var De={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},xh=/^(?:[ \t]*(?:\n|$))+/,Ch=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Th=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Rh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jr=/(?:[*+-]|\d{1,9}[.)])/,Kl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Zl=ue(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Sh=ue(Kl).replace(/bull/g,jr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),zr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ah=/^[^\n]+/,Ur=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Eh=ue(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ur).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ph=ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jr).getRegex(),Ms="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Gr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ih=ue("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gr).replace("tag",Ms).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Jl=ue(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),$h=ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Jl).getRegex(),Vr={blockquote:$h,code:Ch,def:Eh,fences:Th,heading:Rh,hr:Zn,html:Ih,lheading:Zl,list:Ph,newline:xh,paragraph:Jl,table:Mn,text:Ah},no=ue("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),Oh={...Vr,lheading:Sh,table:no,paragraph:ue(zr).replace("hr",Zn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",no).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex()},Lh={...Vr,html:ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Gr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ue(zr).replace("hr",Zn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Zl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Mh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ql=/^( {2,}|\\)\n(?!\s*$)/,Dh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ns=/[\p{P}\p{S}]/u,qr=/[\s\p{P}\p{S}]/u,Yl=/[^\s\p{P}\p{S}]/u,Bh=ue(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,qr).getRegex(),Xl=/(?!~)[\p{P}\p{S}]/u,Wh=/(?!~)[\s\p{P}\p{S}]/u,Hh=/(?:[^\s\p{P}\p{S}]|~)/u,Fh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ea=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,jh=ue(ea,"u").replace(/punct/g,Ns).getRegex(),zh=ue(ea,"u").replace(/punct/g,Xl).getRegex(),ta="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Uh=ue(ta,"gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,qr).replace(/punct/g,Ns).getRegex(),Gh=ue(ta,"gu").replace(/notPunctSpace/g,Hh).replace(/punctSpace/g,Wh).replace(/punct/g,Xl).getRegex(),Vh=ue("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,qr).replace(/punct/g,Ns).getRegex(),qh=ue(/\\(punct)/,"gu").replace(/punct/g,Ns).getRegex(),Kh=ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Zh=ue(Gr).replace("(?:-->|$)","-->").getRegex(),Jh=ue("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Zh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ms=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Qh=ue(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ms).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),na=ue(/^!?\[(label)\]\[(ref)\]/).replace("label",ms).replace("ref",Ur).getRegex(),sa=ue(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ur).getRegex(),Yh=ue("reflink|nolink(?!\\()","g").replace("reflink",na).replace("nolink",sa).getRegex(),Kr={_backpedal:Mn,anyPunctuation:qh,autolink:Kh,blockSkip:Fh,br:Ql,code:Nh,del:Mn,emStrongLDelim:jh,emStrongRDelimAst:Uh,emStrongRDelimUnd:Vh,escape:Mh,link:Qh,nolink:sa,punctuation:Bh,reflink:na,reflinkSearch:Yh,tag:Jh,text:Dh,url:Mn},Xh={...Kr,link:ue(/^!?\[(label)\]\((.*?)\)/).replace("label",ms).getRegex(),reflink:ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ms).getRegex()},mr={...Kr,emStrongRDelimAst:Gh,emStrongLDelim:zh,url:ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},eg={...mr,br:ue(Ql).replace("{2,}","*").getRegex(),text:ue(mr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xn={normal:Vr,gfm:Oh,pedantic:Lh},Cn={normal:Kr,gfm:mr,breaks:eg,pedantic:Xh},tg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},so=e=>tg[e];function ct(e,t){if(t){if(De.escapeTest.test(e))return e.replace(De.escapeReplace,so)}else if(De.escapeTestNoEncode.test(e))return e.replace(De.escapeReplaceNoEncode,so);return e}function ro(e){try{e=encodeURI(e).replace(De.percentDecode,"%")}catch{return null}return e}function io(e,t){var i;const n=e.replace(De.findPipe,(l,a,o)=>{let u=!1,c=a;for(;--c>=0&&o[c]==="\\";)u=!u;return u?"|":" |"}),s=n.split(De.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(De.slashPipe,"|");return s}function Tn(e,t,n){const s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function ng(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function oo(e,t,n,s,r){const i=t.href,l=t.title||null,a=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const o={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,o}function sg(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(s===null)return t;const r=s[1];return t.split(`
`).map(i=>{const l=i.match(n.other.beginningSpace);if(l===null)return i;const[a]=l;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var bs=class{constructor(e){ge(this,"options");ge(this,"rules");ge(this,"lexer");this.options=e||tn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Tn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=sg(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Tn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Tn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Tn(t[0],`
`).split(`
`),s="",r="";const i=[];for(;n.length>0;){let l=!1;const a=[];let o;for(o=0;o<n.length;o++)if(this.rules.other.blockquoteStart.test(n[o]))a.push(n[o]),l=!0;else if(!l)a.push(n[o]);else break;n=n.slice(o);const u=a.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,y=m.raw+`
`+n.join(`
`),v=this.blockquote(y);i[i.length-1]=v,s=s.substring(0,s.length-m.raw.length)+v.raw,r=r.substring(0,r.length-m.text.length)+v.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,y=m.raw+`
`+n.join(`
`),v=this.list(y);i[i.length-1]=v,s=s.substring(0,s.length-p.raw.length)+v.raw,r=r.substring(0,r.length-m.raw.length)+v.raw,n=y.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let o=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,_=>" ".repeat(3*_.length)),p=e.split(`
`,1)[0],m=!d.trim(),y=0;if(this.options.pedantic?(y=2,c=d.trimStart()):m?y=t[1].length+1:(y=t[2].search(this.rules.other.nonSpaceChar),y=y>4?1:y,c=d.slice(y),y+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),o=!0),!o){const _=this.rules.other.nextBulletRegex(y),R=this.rules.other.hrRegex(y),T=this.rules.other.fencesBeginRegex(y),P=this.rules.other.headingBeginRegex(y),Z=this.rules.other.htmlBeginRegex(y);for(;e;){const ne=e.split(`
`,1)[0];let Q;if(p=ne,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),Q=p):Q=p.replace(this.rules.other.tabCharGlobal,"    "),T.test(p)||P.test(p)||Z.test(p)||_.test(p)||R.test(p))break;if(Q.search(this.rules.other.nonSpaceChar)>=y||!p.trim())c+=`
`+Q.slice(y);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||T.test(d)||P.test(d)||R.test(d))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=ne+`
`,e=e.substring(ne.length+1),d=Q.slice(y)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let v=null,A;this.options.gfm&&(v=this.rules.other.listIsTask.exec(c),v&&(A=v[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!v,checked:A,loose:!1,text:c,tokens:[]}),r.raw+=u}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let o=0;o<r.items.length;o++)if(this.lexer.state.top=!1,r.items[o].tokens=this.lexer.blockTokens(r.items[o].text,[]),!r.loose){const u=r.items[o].tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=c}if(r.loose)for(let o=0;o<r.items.length;o++)r.items[o].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=io(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(const a of r)i.rows.push(io(a,i.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Tn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=ng(t[2],"()");if(i===-2)return;if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),oo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return oo(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let l,a,o=i,u=0;const c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(a=[...l].length,s[3]||s[4]){o+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+u);const d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+a);if(Math.min(i,a)%2){const y=p.slice(1,-1);return{type:"em",raw:p,text:y,tokens:this.lexer.inlineTokens(y)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Ct=class br{constructor(t){ge(this,"tokens");ge(this,"options");ge(this,"state");ge(this,"tokenizer");ge(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||tn,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:De,block:Xn.normal,inline:Cn.normal};this.options.pedantic?(n.block=Xn.pedantic,n.inline=Cn.pedantic):this.options.gfm&&(n.block=Xn.gfm,this.options.breaks?n.inline=Cn.breaks:n.inline=Cn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xn,inline:Cn}}static lex(t,n){return new br(n).lex(t)}static lexInline(t,n){return new br(n).inlineTokens(t)}lex(t){t=t.replace(De.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var r,i,l;for(this.options.pedantic&&(t=t.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));t;){let a;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(u=>(a=u.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);const u=n.at(-1);a.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const c=t.slice(1);let d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(o=t.substring(0,u+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){const u=n.at(-1);s&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a),s=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+a.raw,u.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(a);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var a,o,u;let s=t,r=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,l="";for(;t;){i||(l=""),i=!1;let c;if((o=(a=this.options.extensions)==null?void 0:a.inline)!=null&&o.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let d=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let y;this.options.extensions.startInline.forEach(v=>{y=v.call({lexer:this},m),typeof y=="number"&&y>=0&&(p=Math.min(p,y))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},vs=class{constructor(e){ge(this,"options");ge(this,"parser");this.options=e||tn}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const s=(i=(t||"").match(De.notSpaceStart))==null?void 0:i[0],r=e.replace(De.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ct(s)+'">'+(n?r:ct(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:ct(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let l=0;l<e.items.length;l++){const a=e.items[l];s+=this.listitem(a)}const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+ct(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const i=e.rows[r];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ct(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ro(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+ct(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=ro(e);if(r===null)return ct(n);e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${ct(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ct(e.text)}},Zr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Tt=class vr{constructor(t){ge(this,"options");ge(this,"renderer");ge(this,"textRenderer");this.options=t||tn,this.options.renderer=this.options.renderer||new vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zr}static parse(t,n){return new vr(n).parse(t)}static parseInline(t,n){return new vr(n).parseInline(t)}parse(t,n=!0){var r,i;let s="";for(let l=0;l<t.length;l++){const a=t[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=a,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=c||"";continue}}const o=a;switch(o.type){case"space":{s+=this.renderer.space(o);continue}case"hr":{s+=this.renderer.hr(o);continue}case"heading":{s+=this.renderer.heading(o);continue}case"code":{s+=this.renderer.code(o);continue}case"table":{s+=this.renderer.table(o);continue}case"blockquote":{s+=this.renderer.blockquote(o);continue}case"list":{s+=this.renderer.list(o);continue}case"html":{s+=this.renderer.html(o);continue}case"paragraph":{s+=this.renderer.paragraph(o);continue}case"text":{let u=o,c=this.renderer.text(u);for(;l+1<t.length&&t[l+1].type==="text";)u=t[++l],c+=`
`+this.renderer.text(u);n?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(t,n=this.renderer){var r,i;let s="";for(let l=0;l<t.length;l++){const a=t[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){const u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=u||"";continue}}const o=a;switch(o.type){case"escape":{s+=n.text(o);break}case"html":{s+=n.html(o);break}case"link":{s+=n.link(o);break}case"image":{s+=n.image(o);break}case"strong":{s+=n.strong(o);break}case"em":{s+=n.em(o);break}case"codespan":{s+=n.codespan(o);break}case"br":{s+=n.br(o);break}case"del":{s+=n.del(o);break}case"text":{s+=n.text(o);break}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},Xs,os=(Xs=class{constructor(e){ge(this,"options");ge(this,"block");this.options=e||tn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Ct.lex:Ct.lexInline}provideParser(){return this.block?Tt.parse:Tt.parseInline}},ge(Xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xs),rg=class{constructor(...e){ge(this,"defaults",Fr());ge(this,"options",this.setOptions);ge(this,"parse",this.parseMarkdown(!0));ge(this,"parseInline",this.parseMarkdown(!1));ge(this,"Parser",Tt);ge(this,"Renderer",vs);ge(this,"TextRenderer",Zr);ge(this,"Lexer",Ct);ge(this,"Tokenizer",bs);ge(this,"Hooks",os);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const l=i;for(const a of l.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of l.rows)for(const o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{const o=l[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=i.apply(this,l)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new vs(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const l=i,a=n.renderer[l],o=r[l];r[l]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=o.apply(r,u)),c||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new bs(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,a=n.tokenizer[l],o=r[l];r[l]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=o.apply(r,u)),c}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new os;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const l=i,a=n.hooks[l],o=r[l];os.passThroughHooks.has(i)?r[l]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(d=>o.call(r,d));const c=a.call(r,u);return o.call(r,c)}:r[l]=(...u)=>{let c=a.apply(r,u);return c===!1&&(c=o.apply(r,u)),c}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(l){let a=[];return a.push(i.call(this,l)),r&&(a=a.concat(r.call(this,l))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ct.lex(e,t??this.defaults)}parser(e,t){return Tt.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},i={...this.defaults,...r},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const a=i.hooks?i.hooks.provideLexer():e?Ct.lex:Ct.lexInline,o=i.hooks?i.hooks.provideParser():e?Tt.parse:Tt.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>o(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let u=a(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=o(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return l(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+ct(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Yt=new rg;function ee(e,t){return Yt.parse(e,t)}ee.options=ee.setOptions=function(e){return Yt.setOptions(e),ee.defaults=Yt.defaults,ql(ee.defaults),ee};ee.getDefaults=Fr;ee.defaults=tn;ee.use=function(...e){return Yt.use(...e),ee.defaults=Yt.defaults,ql(ee.defaults),ee};ee.walkTokens=function(e,t){return Yt.walkTokens(e,t)};ee.parseInline=Yt.parseInline;ee.Parser=Tt;ee.parser=Tt.parse;ee.Renderer=vs;ee.TextRenderer=Zr;ee.Lexer=Ct;ee.lexer=Ct.lex;ee.Tokenizer=bs;ee.Hooks=os;ee.parse=ee;ee.options;ee.setOptions;ee.use;ee.walkTokens;ee.parseInline;Tt.parse;Ct.lex;const ig=Object.fromEntries(un.map(e=>[e.path,e.slug])),og=e=>e.replace(/^\.\//,"").replace(/\\/g,"/"),lg=(e,t)=>{const n=e.split("/");n.pop();const s=t.split("/");for(const r of s)if(!(!r||r===".")){if(r===".."){n.pop();continue}n.push(r)}return og(n.join("/"))},ag=e=>String(e).trim().toLowerCase().replace(/[~`!@#$%^&*()+={}[\]|\\:;"'<>,.?/]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"section",ra=()=>{const e=new Map;return t=>{const n=ag(t),s=e.get(n)||0;return e.set(n,s+1),s===0?n:`${n}-${s+1}`}},cg=(e,t,n)=>{if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:"))return e;if(e.startsWith("#"))return`#/docs/${n}?section=${encodeURIComponent(e.slice(1))}`;const[s,r]=e.split("#"),i=s?lg(t,s):t;if(i.endsWith(".md")){const l=ig[i];if(l)return`#/docs/${l}${r?`?section=${encodeURIComponent(r)}`:""}`}return i.startsWith("images/")?`/docs-images/${i.substring(7)}`:e};ee.setOptions({gfm:!0,breaks:!0});const ug=(e,t,n)=>String(e).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(s,r,i)=>{const l=cg(i,t,n);return`[${r}](${l})`}),fg=e=>{const t=ee.lexer(String(e||"")),n=ra();return t.filter(s=>s.type==="heading"&&s.depth>=2&&s.depth<=4).map(s=>({depth:s.depth,text:s.text,id:n(s.text)}))},dg=(e,t,n)=>{const s=new ee.Renderer,r=ra();s.link=({href:l,title:a,tokens:o})=>{const u=ee.Parser.parseInline(o),c=l||"",d=/^https?:\/\//i.test(c),p=a?` title="${a}"`:"";return`<a href="${c}"${p}${d?' target="_blank" rel="noreferrer"':""}>${u}</a>`},s.image=({href:l,title:a,text:o})=>{const u=a?` title="${a}"`:"";return`<img src="${l}" alt="${o||""}"${u} />`},s.heading=({tokens:l,depth:a,text:o})=>{const u=r(o),c=ee.Parser.parseInline(l);return`<h${a} id="${u}" data-doc-heading="${u}">${c}</h${a}>`};const i=ug(e,t,n);return ee.parse(i,{renderer:s})},pg={class:"docs-sidebar surface-card"},hg={key:0,class:"docs-article-shell"},gg={class:"doc-breadcrumb"},mg={class:"doc-header surface-card"},bg={class:"card-label"},vg={class:"doc-meta"},_g=["innerHTML"],yg={class:"doc-footer surface-card"},kg={key:1,class:"docs-outline surface-card"},wg=["onClick"],xg={key:2,class:"docs-article-shell"},Cg={class:"empty-state"},Tg={__name:"DocArticlePage",setup(e){const t=Nl(),n=Ff(),s=Se(""),r=he(()=>Vl[t.params.slug]),i=he(()=>r.value?wh[r.value.path]||`# 文档未找到

当前页面对应的文档内容还没有同步进站点。`:""),l=he(()=>fg(i.value)),a=he(()=>r.value?dg(i.value,r.value.path,r.value.slug):""),o=he(()=>un.findIndex(y=>{var v;return y.slug===((v=r.value)==null?void 0:v.slug)})),u=he(()=>o.value>0?un[o.value-1]:null),c=he(()=>o.value>=0&&o.value<un.length-1?un[o.value+1]:null),d=()=>{const y=l.value.find(v=>{const A=document.getElementById(v.id);if(!A)return!1;const _=A.getBoundingClientRect();return _.top>=0&&_.top<=180});y&&(s.value=y.id)},p=async y=>{await Bn();const v=document.getElementById(y);v&&(s.value=y,v.scrollIntoView({behavior:"smooth",block:"start"}),n.replace({path:t.path,query:{...t.query,section:y}}))},m=async()=>{var v;await Bn();const y=t.query.section?String(t.query.section):"";if(y){const A=document.getElementById(y);if(A){s.value=y,requestAnimationFrame(()=>A.scrollIntoView({behavior:"smooth",block:"start"}));return}}s.value=((v=l.value[0])==null?void 0:v.id)||""};return en(()=>{window.addEventListener("scroll",d,{passive:!0})}),Es(()=>{window.removeEventListener("scroll",d)}),Qt([a,()=>t.query.section,()=>t.params.slug],m,{immediate:!0}),(y,v)=>{const A=Ht("router-link");return E(),$("div",{class:Ie(["page-shell container docs-layout-page",{"has-outline":l.value.length}])},[f("aside",pg,[v[0]||(v[0]=f("div",{class:"docs-sidebar-head"},[f("span",{class:"eyebrow"},"DOCS"),f("h2",null,"技术文档"),f("p",null,"当前文档已内置到官网站点中，可直接在站内阅读。")],-1)),(E(!0),$(J,null,ye(pe(gs),_=>(E(),$("div",{key:_.key,class:"docs-nav-group"},[f("h3",null,O(_.title),1),(E(!0),$(J,null,ye(_.items,R=>{var T;return E(),cn(A,{key:R.slug,to:`/docs/${R.slug}`,class:Ie(["docs-nav-link",{active:((T=r.value)==null?void 0:T.slug)===R.slug}])},{default:K(()=>[f("span",null,O(R.title),1),f("small",null,O(R.minutes),1)]),_:2},1032,["to","class"])}),128))]))),128))]),r.value?(E(),$("section",hg,[f("div",gg,[H(A,{to:"/docs"},{default:K(()=>[...v[1]||(v[1]=[te("文档首页",-1)])]),_:1}),v[2]||(v[2]=f("span",null,"/",-1)),f("span",null,O(r.value.groupTitle),1)]),f("header",mg,[f("div",null,[f("span",bg,O(r.value.tag),1),f("h1",null,O(r.value.title),1),f("p",null,O(r.value.description),1)]),f("div",vg,[f("span",null,O(r.value.groupTitle),1),f("span",null,O(r.value.minutes),1)])]),f("article",{class:"surface-card doc-article markdown-body",innerHTML:a.value},null,8,_g),f("footer",yg,[u.value?(E(),cn(A,{key:0,class:"doc-pager",to:`/docs/${u.value.slug}`},{default:K(()=>[v[3]||(v[3]=f("small",null,"上一篇",-1)),f("strong",null,O(u.value.title),1)]),_:1},8,["to"])):(E(),cn(A,{key:1,class:"doc-pager muted-block",to:"/docs"},{default:K(()=>[...v[4]||(v[4]=[f("small",null,"返回",-1),f("strong",null,"文档首页",-1)])]),_:1})),c.value?(E(),cn(A,{key:2,class:"doc-pager align-right",to:`/docs/${c.value.slug}`},{default:K(()=>[v[5]||(v[5]=f("small",null,"下一篇",-1)),f("strong",null,O(c.value.title),1)]),_:1},8,["to"])):Ye("",!0)])])):Ye("",!0),r.value&&l.value.length?(E(),$("aside",kg,[v[6]||(v[6]=f("div",{class:"docs-outline-head"},[f("span",{class:"eyebrow"},"OUTLINE"),f("h3",null,"本页目录")],-1)),(E(!0),$(J,null,ye(l.value,_=>(E(),$("button",{key:_.id,class:Ie(["docs-outline-link",[`depth-${_.depth}`,{active:s.value===_.id}]]),onClick:R=>p(_.id)},O(_.text),11,wg))),128))])):r.value?Ye("",!0):(E(),$("section",xg,[f("div",Cg,[v[8]||(v[8]=f("strong",null,"没有找到对应文档。",-1)),v[9]||(v[9]=f("p",null,"你可以先回到文档首页，或从左侧目录继续浏览。",-1)),H(A,{class:"button primary",to:"/docs"},{default:K(()=>[...v[7]||(v[7]=[te("返回文档首页",-1)])]),_:1})])]))],2)}}},Rg={class:"page-shell container"},Sg={class:"roadmap-grid"},Ag={class:"roadmap-head"},Eg={class:"card-label"},Pg={class:"roadmap-list"},Ig={__name:"RoadmapPage",setup(e){const t=[{tag:"NOW",title:"当前阶段",description:"已经在站点和对外能力上落地或进入持续完善阶段。",stateLabel:"进行中",stateClass:"active",items:[{title:"官网 + 站内文档一体化",description:"把原本分散在 README、Wiki 和文档目录里的内容统一到官网站内阅读。"},{title:"下载页与版本入口",description:"让官网能直接承接 GitHub Releases，并为后续版本发布留好位置。"},{title:"产品化官网结构",description:"继续补齐路线图、更新日志、FAQ、团队与支持页面，让站点更像正式产品官网。"}]},{tag:"NEXT",title:"下一阶段",description:"优先级较高，适合在现有站点骨架上继续补完。",stateLabel:"计划中",stateClass:"planned",items:[{title:"下载版本高亮与筛选细化",description:"继续细化最新版高亮、构建分类、更新摘要与版本检索。"},{title:"更完整的文档阅读体验",description:"继续增强文内导航、阅读布局、专题页组织和文档首页索引能力。"},{title:"站点品牌与视觉强化",description:"补更多场景图、产品说明、模块图和更正式的对外展示内容。"}]},{tag:"LATER",title:"后续方向",description:"适合在对外站点稳定后逐步补充。",stateLabel:"后续",stateClass:"later",items:[{title:"独立域名 / 子域名体系",description:"把官网、文档、下载入口做成更正式的多域名结构。"},{title:"更完整的发布公告页",description:"让更新日志、发布说明和功能变化能在站内有更强的沉淀形式。"},{title:"数据面板与项目状态页",description:"如果后续有稳定数据源，可以继续扩展运行数据、下载数据或公开状态展示。"}]}];return(n,s)=>(E(),$("div",Rg,[s[0]||(s[0]=f("section",{class:"page-hero"},[f("span",{class:"eyebrow"},"ROADMAP"),f("h1",null,"TreeCore 路线图"),f("p",null," 路线图页面的目的不是承诺所有事情都立刻完成，而是让官网能清楚表达“现在在做什么、接下来要补什么、长期想演进到哪里”。 ")],-1)),f("section",Sg,[(E(),$(J,null,ye(t,r=>f("article",{class:"roadmap-column surface-card",key:r.title},[f("div",Ag,[f("span",Eg,O(r.tag),1),f("h2",null,O(r.title),1),f("p",null,O(r.description),1)]),f("div",Pg,[(E(!0),$(J,null,ye(r.items,i=>(E(),$("div",{class:"roadmap-item",key:i.title},[f("div",{class:Ie(["roadmap-state",r.stateClass])},O(r.stateLabel),3),f("h3",null,O(i.title),1),f("p",null,O(i.description),1)]))),128))])])),64))]),s[1]||(s[1]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>当前路线重点</h2></div><div class="feature-grid three"><article class="feature-card compact"><h3>官网与文档一体化</h3><p>继续把更多文档、FAQ、更新说明和发布节奏整合到官网站内阅读体验中。</p></article><article class="feature-card compact"><h3>下载与发布流程清晰化</h3><p>后续让最新版本、更新摘要和构建发布节奏更直接地展示在官网页面上。</p></article><article class="feature-card compact"><h3>Web 管理体验收束</h3><p>围绕当前已可用的控制台、资源包、模型、世界与诊断链路继续打磨，不再保留未闭环入口。</p></article></div></section>',1))]))}},$g={class:"page-shell container"},Og={class:"page-hero"},Lg={class:"hero-actions"},Mg={class:"stack-section surface-card changelog-toolbar"},Ng={class:"release-filter-row"},Dg={class:"filter-chip-group"},Bg=["onClick"],Wg={key:0,class:"stack-section"},Hg={key:1,class:"stack-section changelog-timeline"},Fg={class:"timeline-card surface-card"},jg={class:"release-head"},zg={class:"release-date"},Ug={class:"release-tag"},Gg={key:0,class:"bullet-list compact-list"},Vg={key:1,class:"release-body"},qg={class:"release-actions"},Kg=["href"],Zg={class:"muted"},Jg={key:2,class:"stack-section"},Qg={__name:"ChangelogPage",setup(e){const t=Se(!0),n=Se([]),s=Se("all"),r=Se(""),i=[{value:"all",label:"全部版本"},{value:"stable",label:"正式版"},{value:"preview",label:"预发布"}],l=he(()=>{const a=r.value.toLowerCase();return Gl(n.value).filter(o=>{const u=Dt(o);return s.value!=="all"&&u!==s.value?!1:a?[o.name,o.tag_name,Gn(o.body)].filter(Boolean).join(" ").toLowerCase().includes(a):!0})});return en(async()=>{const a=await zl();n.value=a.data,t.value=!1}),(a,o)=>{const u=Ht("router-link");return E(),$("div",$g,[f("section",Og,[o[3]||(o[3]=f("span",{class:"eyebrow"},"CHANGELOG",-1)),o[4]||(o[4]=f("h1",null,"更新日志",-1)),o[5]||(o[5]=f("p",null," 更新日志页会优先读取公开仓库的 Releases，把版本变化、发布日期和主要更新摘要整理成官网内的时间线视图。 ",-1)),f("div",Lg,[o[2]||(o[2]=f("a",{class:"button primary",href:"https://github.com/TreeMC-cloud/Tree/releases",target:"_blank",rel:"noreferrer"},"打开 Releases",-1)),H(u,{class:"button secondary",to:"/downloads"},{default:K(()=>[...o[1]||(o[1]=[te("查看下载页",-1)])]),_:1})])]),f("section",Mg,[o[6]||(o[6]=f("div",null,[f("span",{class:"eyebrow"},"FILTER"),f("h2",null,"按版本类型筛选")],-1)),f("div",Ng,[f("div",Dg,[(E(),$(J,null,ye(i,c=>f("button",{key:c.value,class:Ie(["filter-chip",{active:s.value===c.value}]),onClick:d=>s.value=c.value},O(c.label),11,Bg)),64))]),Or(f("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>r.value=c),class:"docs-search",placeholder:"搜索 tag、标题或更新内容…"},null,512),[[Br,r.value,void 0,{trim:!0}]])])]),t.value?(E(),$("section",Wg,[...o[7]||(o[7]=[f("div",{class:"empty-state"},[f("strong",null,"正在读取更新日志…")],-1)])])):l.value.length?(E(),$("section",Hg,[(E(!0),$(J,null,ye(l.value,c=>(E(),$("article",{class:"timeline-item",key:c.id||c.tag_name},[o[8]||(o[8]=f("div",{class:"timeline-dot"},null,-1)),f("div",Fg,[f("div",jg,[f("span",{class:Ie(["release-badge",{alt:pe(Dt)(c)==="preview"}])},O(pe(Ul)(pe(Dt)(c))),3),f("span",zg,O(pe(is)(c.published_at)),1)]),f("h3",null,O(c.name||c.tag_name),1),f("p",Ug,O(c.tag_name),1),pe(Nt)(c.body,5).length?(E(),$("ul",Gg,[(E(!0),$(J,null,ye(pe(Nt)(c.body,5),d=>(E(),$("li",{key:d},O(d),1))),128))])):(E(),$("p",Vg,O(pe(Gn)(c.body)||"暂无发布说明。"),1)),f("div",qg,[f("a",{class:"button primary small",href:c.html_url,target:"_blank",rel:"noreferrer"},"查看发布页",8,Kg),f("span",Zg,O((c.assets||[]).length)+" 个附件",1)])])]))),128))])):(E(),$("section",Jg,[...o[9]||(o[9]=[f("div",{class:"empty-state"},[f("strong",null,"当前还没有可展示的公开更新日志。"),f("p",null,"你可以先通过路线图和下载页了解站点结构，后续在公开仓库发布版本后这里会自动显示。")],-1)])]))])}}},Yg={class:"page-shell container"},Xg={class:"stack-section"},em={class:"section-head left"},tm={key:0,class:"contributor-grid"},nm=["href"],sm=["src","alt"],rm={key:1,class:"empty-state"},im={__name:"CommunityPage",setup(e){const t=Se([]),n=Se("empty"),s=he(()=>t.value.length?n.value==="cache"?"当前显示的是缓存的公开贡献者数据。":"当前显示的是公开仓库贡献者信息。":"正在尝试读取公开仓库贡献者列表。");return en(async()=>{const r=await sp();t.value=r.data,n.value=r.source}),(r,i)=>(E(),$("div",Yg,[i[2]||(i[2]=ht('<section class="page-hero"><span class="eyebrow">TEAM &amp; SUPPORT</span><h1>团队、社区与支持入口</h1><p> 这里不是单纯放几个链接，而是把项目协作方式、反馈入口、社区沟通与常见问题集中到一个更像正式官网的团队页里。 </p><div class="hero-actions"><a class="button primary" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">提交问题</a><a class="button secondary" href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">参与讨论</a></div></section><section class="feature-grid three"><article class="feature-card compact"><span class="card-label">COMMUNITY</span><h3>QQ 群交流</h3><p>核心测试 QQ 群：<strong>910574536</strong></p><span class="muted">适合快速交流、测试反馈与日常使用沟通。</span></article><article class="feature-card compact"><span class="card-label">FEEDBACK</span><h3>Issues / Discussions</h3><p>适合提交问题、使用反馈、功能建议与后续路线讨论。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">打开反馈入口 →</a></article><article class="feature-card compact"><span class="card-label">SECURITY</span><h3>安全与协作说明</h3><p>公开提供贡献指南和安全策略，方便外部协作与安全问题上报。</p><a class="text-link" href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">查看安全策略 →</a></article></section><section class="stack-section surface-card"><div class="section-head left"><h2>项目协作方式</h2><p>当前更适合按照“公开官网 / 文档 / 反馈 + 私有开发流水线”的思路维护，不把用户不需要理解的内部细节暴露到对外站点里。</p></div><div class="feature-grid three"><article class="feature-card compact"><h3>对外展示</h3><p>官网负责产品能力、下载、文档与社区导航；用户从这里理解项目，而不是直接从仓库目录开始看。</p></article><article class="feature-card compact"><h3>反馈沉淀</h3><p>GitHub Issues / Discussions 用于沉淀问题与路线讨论，QQ 群更偏即时沟通和测试交流。</p></article><article class="feature-card compact"><h3>持续发布</h3><p>站点、文档与下载页保持统一入口，后续继续接入版本发布节奏与更新记录即可形成完整闭环。</p></article></div></section>',3)),f("section",Xg,[f("div",em,[i[0]||(i[0]=f("h2",null,"贡献者",-1)),f("p",null,O(s.value),1)]),t.value.length?(E(),$("div",tm,[(E(!0),$(J,null,ye(t.value,l=>(E(),$("a",{key:l.login,class:"contributor-card surface-card",href:l.html_url,target:"_blank",rel:"noreferrer"},[f("img",{src:l.avatar_url,alt:l.login},null,8,sm),f("strong",null,O(l.login),1),f("small",null,O(l.contributions)+" 次公开提交",1)],8,nm))),128))])):(E(),$("div",rm,[...i[1]||(i[1]=[f("strong",null,"当前没有加载到可展示的公开贡献者。",-1),f("p",null,"这不影响官网访问，通常是 GitHub API 暂时不可用或当前公开仓库贡献数据较少。",-1)])]))]),i[3]||(i[3]=ht('<section class="stack-section surface-card"><div class="section-head left"><h2>常见问题</h2><p>这里整理的是用户进入官网后最容易先问到的问题。</p></div><div class="faq-grid"><details class="faq-item" open><summary>官网和文档是不是同一个站？</summary><p>是。当前官网首页、下载页、路线图、更新日志和技术文档都在同一个站点内，通过站内路由切换。</p></details><details class="faq-item"><summary>访问官网需要登录 GitHub 吗？</summary><p>不需要。官网是公开静态站点，对外访问不要求 GitHub 登录。</p></details><details class="faq-item"><summary>官网是否就是管理后台？</summary><p>不是。官网负责产品展示、文档和下载入口；TreeCore 的服务器管理后台仍由服务端自身提供。</p></details><details class="faq-item"><summary>文档为什么不直接跳 GitHub Markdown？</summary><p>因为站内阅读体验更统一，用户不用离开官网就能完成入门、查看配置和阅读架构说明。</p></details><details class="faq-item"><summary>后续还能接独立域名吗？</summary><p>可以。当前站点结构已经适合继续接入主域名或 docs 子域名，后续只需要调整发布层。</p></details><details class="faq-item"><summary>如果 GitHub Releases 还没有版本怎么办？</summary><p>下载页会保留空状态说明，你可以继续先完善官网、文档和发布流程，后续发布版本后下载页会自动显示。</p></details></div></section>',1))]))}},om=[{path:"/",component:Kd,meta:{title:"首页",description:"TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。"}},{path:"/features",component:Yd,meta:{title:"核心能力",description:"查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。"}},{path:"/downloads",component:Vp,meta:{title:"下载",description:"查看 TreeCore 公开下载入口、构建发布与获取方式。"}},{path:"/docs",component:sh,meta:{title:"技术文档",description:"查看 TreeCore 已整合进官网内的技术文档与 Wiki 页面。"}},{path:"/docs/:slug",component:Tg,meta:{title:"文档",description:"在 TreeCore 官网内阅读技术文档详情页。"}},{path:"/roadmap",component:Ig,meta:{title:"路线图",description:"查看 TreeCore 当前阶段、下一阶段与后续方向。"}},{path:"/changelog",component:Qg,meta:{title:"更新日志",description:"查看 TreeCore 公共版本的更新日志与版本时间线。"}},{path:"/team",alias:"/community",component:im,meta:{title:"团队与支持",description:"获取 TreeCore 的团队、社区、支持与 FAQ 入口。"}}],ia=Hf({history:vf("/"),routes:om}),oa=Pu(ed);ia.afterEach((e,t)=>{var o,u,c,d;const n="TreeCore 官方网站",s=(o=e.params)!=null&&o.slug?Vl[e.params.slug]:null,r=(s==null?void 0:s.title)||((u=e.meta)==null?void 0:u.title),i=(s==null?void 0:s.description)||((c=e.meta)==null?void 0:c.description);document.title=r?`${r} | ${n}`:n;const l=document.querySelector('meta[name="description"]');l&&i&&l.setAttribute("content",i),e.path===t.path&&((d=e.query)==null?void 0:d.section)||window.scrollTo({top:0,behavior:"smooth"})});oa.use(ia);oa.mount("#app");

"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9168],{79168:(t,s,e)=>{e.r(s),e.d(s,{dyte_simple_grid:()=>h});var i=e(94196),n=e(47502),o=e(7147),r=e(61070),c=e(62292);e(55752);function a({dimensions:t,count:s,aspectRatio:e,gap:i}){const{width:n,height:o,rows:r,cols:c}=function({count:t,dimensions:s,aspectRatio:e,gap:i}){let{width:n,height:o}=s;if(0===n||0===o)return{width:0,height:0,rows:1,cols:1};n-=2*i,o-=2*i;const r=i,c=t,a=l(e);let h=0,p=0,d=1,u=1;const f=[];for(let l=1;l<=c;l++)f.push((n-r*(l-1))/l),f.push((o-r*(l-1))/(l*a));f.sort(((t,s)=>s-t));for(const l of f)if(h=l,p=h*a,d=Math.floor((n+r)/(h+r)),u=Math.floor((o+r)/(p+r)),d*u>=c){u=Math.ceil(c/d);break}return{width:h,height:p,rows:u,cols:d}}({dimensions:t,count:s,aspectRatio:e,gap:i}),a=function({parentDimensions:t,dimensions:s,rows:e,cols:i,count:n,gap:o}){const{width:r,height:c}=t,{width:a,height:l}=s,h=(c-(l*e+(e-1)*o))/2;let p=(r-(a*i+(i-1)*o))/2;const d=l+o,u=a+o;let f=0,g=0;const y=n%i;function m(t){const s=n-t;s===y&&(p=(r-(a*s+(s-1)*o))/2);const e=h+g*d,c=p+f*u;return f++,(t+1)%i==0&&(g++,f=0),{top:e,left:c}}return m}({parentDimensions:t,dimensions:{width:n,height:o},rows:r,cols:c,count:s,gap:i});return{width:n,height:o,getPosition:a}}const l=t=>{const[s,e]=t.split(":");return Number.parseInt(e)/Number.parseInt(s)},h=class{constructor(t){(0,i.r)(this,t),this.participants=[],this.aspectRatio="16:9",this.gap=8,this.config=n.d,this.iconPack=o.d,this.t=(0,r.u)(),this.dimensions={width:0,height:0},this.setHostDimensions=()=>{const{clientWidth:t,clientHeight:s}=this.host;this.dimensions={width:t,height:s}}}connectedCallback(){this.resizeObserver=new ResizeObserver(this.setHostDimensions),this.resizeObserver.observe(this.host)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const t={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},{width:s,height:e,getPosition:n}=a({dimensions:this.dimensions,count:this.participants.length,aspectRatio:this.aspectRatio,gap:this.gap});return(0,i.h)(i.H,null,this.participants.map(((o,r)=>{const{top:a,left:l}=n(r);return(0,i.h)(c.R,{element:"dyte-participant-tile",defaults:t,props:{participant:o,style:{position:"absolute",top:`${a}px`,left:`${l}px`,width:`${s}px`,height:`${e}px`},key:o.id,"data-participant":o.id},childProps:{participant:o},deepProps:!0})})),(0,i.h)("slot",null))}get host(){return(0,i.g)(this)}};h.style=":host{position:relative;display:block;height:100%;width:100%}"},61070:(t,s,e)=>{e.d(s,{g:()=>n,u:()=>o});var i=e(55752);const n=async t=>{if(null==t||"en"===t||""===t.trim())return i.d;try{const s=await fetch(`http://localhost:5000/${t}.json`);return s.ok?Object.assign({},i.d,await s.json()):i.d}catch(s){return i.d}},o=(t=i.d)=>s=>{var e;return null!==(e=t[s])&&void 0!==e?e:s}},62292:(t,s,e)=>{e.d(s,{R:()=>o});var i=e(94196);const n=({elements:t,defaults:s,props:e={},deepProps:n=!1})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,i.h)(o,{element:t,defaults:s,props:e,childProps:n&&e}))):null,o=({element:t,defaults:s,childProps:e={},props:o={},onlyChildren:r=!1,asHost:c=!1,deepProps:a=!1},l)=>{var h;const{config:p,size:d,states:u}=s;let f,g={};Array.isArray(t)?[f,g]=t:f=t;const y=null===(h=null==p?void 0:p.root)||void 0===h?void 0:h[f];null!=y&&"props"in y&&(o=Object.assign(Object.assign({},y.props),o)),o=Object.assign(Object.assign({},o),g);const m=(({element:t,size:s,states:e={},config:i={}})=>{let n=[];const o=null==i?void 0:i.root[t],r=t=>{n.push(t),"string"==typeof s&&n.push(`${t}.${s}`)};if(r(t),"object"==typeof o&&!Array.isArray(o)&&null!==o){const{state:s,states:i}=o;let n=t,c=[];if(Array.isArray(i)){c=i.filter((t=>e[t])),c.sort();for(const t of c)r(`${n}.${t}`);c.length>1&&r([n,...c].join("."))}if("string"==typeof s){const i=`${t}[${s}=${e[s]}]`;r(i);for(const t of c)r(`${i}.${t}`);c.length>1&&r([i,...c].join("."))}}return n})({element:f,size:d,states:u,config:p}),b=(({selectors:t,root:s})=>{if(!Array.isArray(t)||null==s)return[];for(let e=t.length-1;e>=0;e--){const i=s[t[e]];if(Array.isArray(i))return i;if(Array.isArray(null==i?void 0:i.children))return i.children}return[]})({selectors:m,root:p.root});if(r)return(0,i.h)(n,{elements:b,defaults:s,props:e,deepProps:a});const w=(({selectors:t,styles:s})=>{if(!Array.isArray(t)||null==s)return{};const e={};for(const i of t){const t=s[i];null!=t&&Object.assign(e,t)}return e})({selectors:m,styles:p.styles});if(c)return(0,i.h)(i.H,Object.assign({},s,{style:w},o),(0,i.h)(n,{elements:b,defaults:s,props:e,deepProps:a}),l);if(f.startsWith("dyte-"))return(0,i.h)(f,Object.assign({},s,{style:w},o),(0,i.h)(n,{elements:b,defaults:s,props:e,deepProps:a}),l);{const[t,o]=f.split("#");return(0,i.h)(t,{id:o,style:w},(0,i.h)(n,{elements:b,defaults:s,props:e,deepProps:a}),l)}}}}]);
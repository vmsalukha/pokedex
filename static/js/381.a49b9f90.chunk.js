(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[381],{4381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ee});var n=r(2791),o=r(7689),s=r(5527),a=r(2090),i=r(1087),l=r(184);const c=e=>{var t,r,o;let{pokemon:c}=e;return(0,l.jsxs)(s.Z,{elevation:3,sx:{width:"30em",height:"auto",display:"flex",flexDirection:"column"},children:[(0,l.jsx)("div",{style:{alignSelf:"flex-start"},children:(0,l.jsx)(i.rU,{to:"/",style:{textDecoration:"none",color:"inherit"},onClick:()=>{(0,n.startTransition)((()=>{window.location.href="/"}))},children:(0,l.jsx)(a.Z,{sx:{fontSize:40}})})}),(0,l.jsx)("div",{style:{flex:"30%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("h1",{style:{margin:"0"},children:c.name})}),(0,l.jsx)("div",{style:{flex:"70%"},children:(0,l.jsx)("img",{style:{width:"90%",height:"auto"},alt:c.name,src:(null===(t=c.sprites)||void 0===t||null===(r=t.other)||void 0===r||null===(o=r.home)||void 0===o?void 0:o.front_default)||""})})]})};var d=r(697);const u=e=>{let{sprite:t,spriteKey:r}=e;return(0,l.jsx)("img",{alt:"Sprite ".concat(r),src:t,style:{width:"2.3em",height:"auto"}})};var p,h=new Uint8Array(16);function v(){if(!p&&!(p="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(h)}const f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const m=function(e){return"string"===typeof e&&f.test(e)};for(var x=[],g=0;g<256;++g)x.push((g+256).toString(16).substr(1));const j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(x[e[t+0]]+x[e[t+1]]+x[e[t+2]]+x[e[t+3]]+"-"+x[e[t+4]]+x[e[t+5]]+"-"+x[e[t+6]]+x[e[t+7]]+"-"+x[e[t+8]]+x[e[t+9]]+"-"+x[e[t+10]]+x[e[t+11]]+x[e[t+12]]+x[e[t+13]]+x[e[t+14]]+x[e[t+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};const y=function(e,t,r){var n=(e=e||{}).random||(e.rng||v)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return j(n)},Z=e=>{let{sprites:t}=e;return(0,l.jsx)("div",{className:"gallery-sprite",children:(()=>{const e=[];return Object.values(t).forEach((t=>{Object.values(t).forEach((t=>{Object.values(t).forEach((t=>{t&&"string"===typeof t&&t.startsWith("http")&&e.push(t)}))}))})),e.map((e=>(0,l.jsx)(u,{sprite:e,spriteKey:y()},y())))})()})},b=e=>{let{sprites:t}=e;return(0,l.jsx)(d.Z,{className:"box-sprite",children:(0,l.jsx)(s.Z,{elevation:3,sx:{width:"100%"},children:(0,l.jsxs)("div",{className:"sprite-item",children:[(0,l.jsx)("h3",{children:"Sprites:"}),(0,l.jsx)(Z,{sprites:t})]})})})},C=e=>{let{stat:t}=e;return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"column-chart",children:[(()=>{const e=[];for(let r=15;r>=0;r--){const n=t.base_stat>=10*(r+1)?"column column-".concat(r+1):"column-empty";e.push((0,l.jsx)("div",{className:n},r))}return e})(),(0,l.jsx)("p",{children:t.stat.name.split("-").map(((e,r)=>(0,l.jsxs)(n.Fragment,{children:[e.toUpperCase(),r!==t.stat.name.split("-").length-1&&(0,l.jsx)("br",{})]},r)))})]})})},w=e=>{let{stats:t}=e;return(0,l.jsx)(d.Z,{className:"box-paper",children:(0,l.jsxs)(s.Z,{elevation:3,children:[(0,l.jsx)("h3",{children:"Stats:"}),(0,l.jsx)("div",{className:"group-charts",children:null===t||void 0===t?void 0:t.map((e=>(0,l.jsx)("div",{children:(0,l.jsx)(C,{stat:e})},e.stat.name)))})]})})};var S=r(3366),A=r(7462),M=r(3733),k=r(838),z=r(3616),E=r(3685),I=r(1046),L=r(4036),N=r(9703),P=r(4657);function R(e){return(0,P.ZP)("MuiAlert",e)}const _=(0,N.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var O=r(3400),V=r(6189);const W=(0,V.Z)((0,l.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),F=(0,V.Z)((0,l.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),T=(0,V.Z)((0,l.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),B=(0,V.Z)((0,l.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),H=(0,V.Z)((0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),U=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],D=(0,E.ZP)(s.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t["".concat(r.variant).concat((0,L.Z)(r.color||r.severity))]]}})((e=>{let{theme:t,ownerState:r}=e;const n="light"===t.palette.mode?z._j:z.$n,o="light"===t.palette.mode?z.$n:z._j,s=r.color||r.severity;return(0,A.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===r.variant&&{color:t.vars?t.vars.palette.Alert["".concat(s,"Color")]:n(t.palette[s].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(s,"StandardBg")]:o(t.palette[s].light,.9),["& .".concat(_.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(s,"IconColor")]}:{color:t.palette[s].main}},s&&"outlined"===r.variant&&{color:t.vars?t.vars.palette.Alert["".concat(s,"Color")]:n(t.palette[s].light,.6),border:"1px solid ".concat((t.vars||t).palette[s].light),["& .".concat(_.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(s,"IconColor")]}:{color:t.palette[s].main}},s&&"filled"===r.variant&&(0,A.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(s,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(s,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main,color:t.palette.getContrastText(t.palette[s].main)}))})),$=(0,E.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),K=(0,E.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),q=(0,E.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),G={success:(0,l.jsx)(W,{fontSize:"inherit"}),warning:(0,l.jsx)(F,{fontSize:"inherit"}),error:(0,l.jsx)(T,{fontSize:"inherit"}),info:(0,l.jsx)(B,{fontSize:"inherit"})},J=n.forwardRef((function(e,t){var r,n,o,s,a,i;const c=(0,I.Z)({props:e,name:"MuiAlert"}),{action:d,children:u,className:p,closeText:h="Close",color:v,components:f={},componentsProps:m={},icon:x,iconMapping:g=G,onClose:j,role:y="alert",severity:Z="success",slotProps:b={},slots:C={},variant:w="standard"}=c,z=(0,S.Z)(c,U),E=(0,A.Z)({},c,{color:v,severity:Z,variant:w}),N=(e=>{const{variant:t,color:r,severity:n,classes:o}=e,s={root:["root","".concat(t).concat((0,L.Z)(r||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,k.Z)(s,R,o)})(E),P=null!=(r=null!=(n=C.closeButton)?n:f.CloseButton)?r:O.Z,_=null!=(o=null!=(s=C.closeIcon)?s:f.CloseIcon)?o:H,V=null!=(a=b.closeButton)?a:m.closeButton,W=null!=(i=b.closeIcon)?i:m.closeIcon;return(0,l.jsxs)(D,(0,A.Z)({role:y,elevation:0,ownerState:E,className:(0,M.Z)(N.root,p),ref:t},z,{children:[!1!==x?(0,l.jsx)($,{ownerState:E,className:N.icon,children:x||g[Z]||G[Z]}):null,(0,l.jsx)(K,{ownerState:E,className:N.message,children:u}),null!=d?(0,l.jsx)(q,{ownerState:E,className:N.action,children:d}):null,null==d&&j?(0,l.jsx)(q,{ownerState:E,className:N.action,children:(0,l.jsx)(P,(0,A.Z)({size:"small","aria-label":h,title:h,color:"inherit",onClick:j},V,{children:(0,l.jsx)(_,(0,A.Z)({fontSize:"small"},W))}))}):null]}))})),Q=e=>{let{ability:t}=e;const{name:r}=t.ability,[o,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch("https://pokeapi.co/api/v2/ability/".concat(r)),t=(await e.json()).effect_entries.find((e=>"en"===e.language.name));s(t?t.short_effect:"Short effect not available")}catch(e){console.error("Error fetching short effect: ",e),s("Error fetching short effect")}})()}),[r]),(0,l.jsx)("div",{children:(0,l.jsxs)(J,{variant:"outlined",severity:"info",children:[(0,l.jsx)("h3",{children:r}),o]})})},X=e=>{let{abilities:t}=e;return(0,l.jsxs)(s.Z,{elevation:3,className:"box-ability",children:[(0,l.jsx)("h3",{children:"Abilities:"}),(0,l.jsx)("div",{children:t&&t.map(((e,t)=>(0,l.jsx)(Q,{ability:e},t)))})]})},Y=()=>{const{id:e}=(0,o.UO)(),[t,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(0,n.startTransition)((()=>{(async()=>{try{const t=await fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)),n=await t.json();r(n)}catch(t){console.error("Error fetching Pokemon detail: ",t)}})()}))}),[e]),(0,l.jsx)("div",{children:t?(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"row-container",children:[(0,l.jsx)(c,{pokemon:t}),(0,l.jsx)(X,{abilities:t.abilities})]}),(0,l.jsxs)("div",{className:"row-container",children:[(0,l.jsx)(w,{stats:t.stats}),(0,l.jsx)(b,{sprites:t.sprites.versions})]})]}):(0,l.jsx)("p",{children:"Loading..."})})},ee=()=>(0,l.jsx)("div",{children:(0,l.jsx)(Y,{})})},2090:(e,t,r)=>{"use strict";var n=r(4836);t.Z=void 0;var o=n(r(5649)),s=r(184);t.Z=(0,o.default)((0,s.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8M8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16z"}),"ArrowCircleLeftOutlined")},5649:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(7294)},7294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>s,createSvgIcon:()=>a.Z,debounce:()=>i.Z,deprecatedPropType:()=>l,isMuiElement:()=>c.Z,ownerDocument:()=>d.Z,ownerWindow:()=>u.Z,requirePropFactory:()=>p,setRef:()=>h,unstable_ClassNameGenerator:()=>Z,unstable_useEnhancedEffect:()=>v.Z,unstable_useId:()=>f.Z,unsupportedProp:()=>m,useControlled:()=>x.Z,useEventCallback:()=>g.Z,useForkRef:()=>j.Z,useIsFocusVisible:()=>y.Z});var n=r(4925),o=r(4036);const s=r(5253).Z;var a=r(6189),i=r(3199);const l=function(e,t){return()=>null};var c=r(5925),d=r(8301),u=r(7602);r(7462);const p=function(e,t){return()=>null};const h=r(7576).Z;var v=r(162),f=r(7384);const m=function(e,t,r,n,o){return null};var x=r(9552),g=r(9683),j=r(2071),y=r(6786);const Z={configure:e=>{n.Z.configure(e)}}},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=381.a49b9f90.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{3451:function(e,t,n){Promise.resolve().then(n.bind(n,5060))},1087:function(e,t,n){"use strict";n.d(t,{A:function(){return r}}),n(3514);var r=(0,n(7027).$)("4649ad17d922e3ccf081fcb49c8b04e6e2a64d4f")},5807:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(6793);async function i(e){let{document:t,variables:n,apiSecret:i,config:s}=e,c=await fetch("/api/auth/token").then(e=>e.json());return(0,r.x)({document:t,apiSecret:i,config:s,variables:n,token:c})}},8064:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(229);let i=n(3982).forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("button",{ref:t,className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors\n      bg-primary text-primary-foreground hover:bg-primary/90\n      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2\n      disabled:opacity-50 disabled:pointer-events-none\n      h-10 px-4 ".concat(n),...i})});i.displayName="Button"},2915:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var r=n(229),i=n(3982),s=n(2329);let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});c.displayName="Textarea"},7743:function(e,t,n){"use strict";n.d(t,{Dx:function(){return s},Rn:function(){return c}});var r=n(229),i=n(2329);let s=e=>{let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("text-xl font-semibold capitalize mb-2",n),children:t})},c=e=>{let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("text-lg font-semibold capitalize mb-2",n),children:t})}},5060:function(e,t,n){"use strict";n.r(t),n.d(t,{CreateProduct:function(){return y}});var r=n(229),i=n(2003),s=n(5870),c=n(774);let u=()=>(0,s.cI)({resolver:(0,i.F)(c.C3)});var l=n(2679),a=n(2915),o=n(932),d=n(6032),f=n.n(d);let m=e=>{let{src:t,clearImage:n,children:i}=e;return t?(0,r.jsxs)("div",{className:"relative flex items-center justify-center w-full h-full min-h-[12rem]",children:[(0,r.jsx)("button",{onClick:n,className:"z-10 p-1 text-white bg-red/50",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(f(),{className:"absolute object-cover h-full z-full ",alt:"",width:300,height:300,src:URL.createObjectURL(t)})]}):(0,r.jsx)("div",{className:"flex items-center justify-center w-full h-full bg-gray-100",children:i})};var b=n(5649),p=n(1087),h=n(5357),x=n(661),v=n(5807),g=n(7743),j=n(8064);let y=e=>{let{manufacturerId:t}=e,{register:n,handleSubmit:i,reset:c,resetField:o,control:d,watch:f}=u(),{image:y}=f(),[,N]=(0,b.iN)(),w=(0,x.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(g.Dx,{className:"mb-2 text-lg font-semibold",children:"Create product"})," ",(0,r.jsxs)("form",{onSubmit:i(async e=>{let{name:n,description:r,image:i}=e,s=await N(i);console.log("name, description, image",n,r,i);let{data:u,error:l}=await (0,v.k)({document:h.E5,variables:{createProductInput:{image:s[0],name:n,description:r,manufacturerId:t}}});u&&(c(),(0,p.A)(h.CN.Query.myProducts),w.replace("/manufacturer/products")),l&&alert(l)}),className:"flex gap-2",children:[(0,r.jsx)("div",{className:"w-48 h-48",children:(0,r.jsx)(m,{src:null==y?void 0:y[0],clearImage:()=>o("image"),children:(0,r.jsx)(s.Qr,{control:d,name:"image",render:e=>{let{field:t}=e;return(0,r.jsx)(l.I,{type:"file",accept:"image/*",multiple:!1,onChange:e=>{var n;return t.onChange(null==e?void 0:null===(n=e.target)||void 0===n?void 0:n.files)}})}})})}),(0,r.jsxs)("div",{className:"flex-grow space-y-2",children:[(0,r.jsx)(l.I,{...n("name"),placeholder:"Product name"}),(0,r.jsx)(a.g,{...n("description"),placeholder:"Product description"}),(0,r.jsx)(j.z,{type:"submit",children:"Create product"})]})]})]})}},5649:function(e,t,n){"use strict";n.d(t,{VC:function(){return m},bZ:function(){return o},iN:function(){return b}});var r=n(661),i=n(3982),s=n(5004),c=n(5441),u=n(6997),l=n(564),a=n(5203);let o=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[t,n]=(0,i.useState)(e),s=(0,r.usePathname)(),c=(0,i.useRef)(s);return(0,i.useEffect)(()=>{s!==c.current&&(n(!1),c.current=s)},[s,t]),[t,n]},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,[t]=(0,i.useState)(()=>new s.x);return(0,i.useEffect)(()=>{let n=t.pipe((0,c.b)(e),(0,u.b)(e=>e()),(0,l.K)(()=>a.E)).subscribe();return()=>n.unsubscribe()},[e,t]),t},f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,[n,r]=(0,i.useState)(e),s=d(t);return(0,i.useEffect)(()=>{s.next(()=>r(e))},[s,e]),n},m=()=>{let[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(()=>[]),u=f(e,300);return(0,i.useEffect)(()=>{r(!0),fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(u,".json?fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ")).then(e=>e.json()).then(e=>{var t;c(null===(t=e.features)||void 0===t?void 0:t.map(e=>({placeName:e.place_name,latLng:[e.center[1],e.center[0]]})))}).finally(()=>r(!1))},[u,c]),{loading:n,setLoading:r,searchText:e,setSearchText:t,locationInfo:s}},b=()=>{let[e,t]=(0,i.useState)(!1);return[{uploading:e,percent:0},async e=>{if(!(null==e?void 0:e.length))return[];t(!0);try{return t(!1),[]}catch(e){return console.log(e),t(!1),[]}}]}}},function(e){e.O(0,[2,177,307,55,72,449,53,852,194,744],function(){return e(e.s=3451)}),_N_E=e.O()}]);
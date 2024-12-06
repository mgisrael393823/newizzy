exports.id=5e3,exports.ids=[5e3],exports.modules={22511:(e,s,t)=>{Promise.resolve().then(t.bind(t,50709)),Promise.resolve().then(t.bind(t,49076))},2270:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,19918,23)),Promise.resolve().then(t.t.bind(t,82057,23)),Promise.resolve().then(t.t.bind(t,46148,23)),Promise.resolve().then(t.t.bind(t,88359,23)),Promise.resolve().then(t.t.bind(t,51860,23)),Promise.resolve().then(t.t.bind(t,92427,23))},50709:(e,s,t)=>{"use strict";t.r(s),t.d(s,{Header:()=>M});var a=t(60080),r=t(9885),n=t(11440),o=t.n(n),i=t(57114),d=t(23161),l=t(14904),c=t(70279),m=t(71072),f=t(68384);function x(){let{theme:e,setTheme:s}=(0,m.useTheme)();return(0,a.jsxs)(f.z,{variant:"ghost",size:"icon",onClick:()=>s("light"===e?"dark":"light"),children:[a.jsx(l.Z,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),a.jsx(c.Z,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),a.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}var p=t(7589),u=t(97389),h=t(56206);let g=p.fC,j=p.xz;p.x8;let v=p.h_,N=r.forwardRef(({className:e,...s},t)=>a.jsx(p.aV,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...s,ref:t}));N.displayName=p.aV.displayName;let b=(0,u.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=r.forwardRef(({side:e="right",className:s,children:t,...r},n)=>(0,a.jsxs)(v,{children:[a.jsx(N,{}),(0,a.jsxs)(p.VY,{ref:n,className:(0,d.cn)(b({side:e}),s),...r,children:[t,(0,a.jsxs)(p.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(h.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));y.displayName=p.VY.displayName;let w=r.forwardRef(({className:e,...s},t)=>a.jsx(p.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold text-foreground",e),...s}));w.displayName=p.Dx.displayName;let k=r.forwardRef(({className:e,...s},t)=>a.jsx(p.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",e),...s}));k.displayName=p.dk.displayName;var R=t(93303),z=t(69518),S=t(87371),Z=t(97849),C=t(13482),T=t(3514),A=t(18310),_=t(93680),D=t(5987),P=t(90092),V=t(80774),F=t(7382),O=t(97018);let I=[{name:"Find a Home",href:"/listings",icon:z.Z,description:"Browse available properties"},{name:"Saved Homes",href:"/saved",icon:S.Z,description:"View your favorited properties"},{name:"Applications",href:"/dashboard/applications",icon:z.Z,description:"Track your rental applications"}],E=[{name:"Dashboard",href:"/dashboard",icon:Z.Z,description:"Manage your properties"},{name:"Properties",href:"/dashboard/properties",icon:C.Z,description:"View and edit your listings"},{name:"Applications",href:"/dashboard/applications",icon:z.Z,description:"Review tenant applications"}];function M(){let[e,s]=(0,r.useState)(!1),t=(0,i.useRouter)(),[n,l]=(0,r.useState)(!1),c=(0,r.useCallback)(e=>{t.push(e),s(!1)},[t]);return a.jsx("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors",children:(0,a.jsxs)("div",{className:"container flex h-16 items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-8",children:[(0,a.jsxs)(o(),{href:"/",className:"flex items-center space-x-2",children:[a.jsx(C.Z,{className:"h-6 w-6 text-primary transition-colors hover:text-primary/80"}),a.jsx("span",{className:"hidden font-semibold sm:inline-block",children:"RentSpace"})]}),(0,a.jsxs)("nav",{className:"hidden md:flex items-center gap-6",children:[(0,a.jsxs)(R.h_,{children:[a.jsx(R.$F,{asChild:!0,children:(0,a.jsxs)(f.z,{variant:"ghost",className:"flex items-center gap-2",children:[a.jsx(z.Z,{className:"h-4 w-4"}),"Find a Home"]})}),(0,a.jsxs)(R.AW,{align:"start",className:"w-[240px]",children:[a.jsx(R.Ju,{children:"For Renters"}),a.jsx(R.VD,{}),I.map(e=>(0,a.jsxs)(R.Xi,{onClick:()=>c(e.href),children:[a.jsx(e.icon,{className:"mr-2 h-4 w-4"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("span",{children:e.name}),e.description&&a.jsx("span",{className:"text-xs text-muted-foreground",children:e.description})]})]},e.name))]})]}),(0,a.jsxs)(R.h_,{children:[a.jsx(R.$F,{asChild:!0,children:(0,a.jsxs)(f.z,{variant:"ghost",className:"flex items-center gap-2",children:[a.jsx(C.Z,{className:"h-4 w-4"}),"For Landlords"]})}),(0,a.jsxs)(R.AW,{align:"start",className:"w-[240px]",children:[a.jsx(R.Ju,{children:"Property Management"}),a.jsx(R.VD,{}),E.map(e=>(0,a.jsxs)(R.Xi,{onClick:()=>c(e.href),children:[a.jsx(e.icon,{className:"mr-2 h-4 w-4"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("span",{children:e.name}),e.description&&a.jsx("span",{className:"text-xs text-muted-foreground",children:e.description})]})]},e.name))]})]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"hidden md:flex items-center gap-2",children:[n?(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)(f.z,{variant:"ghost",size:"icon",className:"relative",children:[a.jsx(T.Z,{className:"h-5 w-5"}),a.jsx("span",{className:"absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center",children:"3"})]}),a.jsx(f.z,{variant:"ghost",size:"icon",onClick:()=>c("/inbox"),children:a.jsx(A.Z,{className:"h-5 w-5"})}),(0,a.jsxs)(R.h_,{children:[a.jsx(R.$F,{asChild:!0,children:a.jsx(f.z,{variant:"ghost",size:"icon",children:a.jsx(_.Z,{className:"h-5 w-5"})})}),(0,a.jsxs)(R.AW,{align:"end",className:"w-56",children:[a.jsx(R.Ju,{className:"font-normal",children:(0,a.jsxs)("div",{className:"flex flex-col space-y-1",children:[a.jsx("p",{className:"text-sm font-medium leading-none",children:"username"}),a.jsx("p",{className:"text-xs leading-none text-muted-foreground",children:"user@example.com"})]})}),a.jsx(R.VD,{}),(0,a.jsxs)(R.Qk,{children:[(0,a.jsxs)(R.Xi,{onClick:()=>c("/dashboard"),children:[a.jsx(Z.Z,{className:"mr-2 h-4 w-4"}),"Dashboard"]}),(0,a.jsxs)(R.Xi,{onClick:()=>c("/settings"),children:[a.jsx(D.Z,{className:"mr-2 h-4 w-4"}),"Settings"]})]}),a.jsx(R.VD,{}),(0,a.jsxs)(R.Xi,{children:[a.jsx(P.Z,{className:"mr-2 h-4 w-4"}),"Log out"]})]})]})]}):a.jsx(a.Fragment,{children:a.jsx(f.z,{variant:"ghost",onClick:()=>c("/sign-in"),children:"Sign In"})}),(0,a.jsxs)(f.z,{className:(0,d.cn)("bg-primary text-primary-foreground hover:bg-primary/90","transition-all duration-200 ease-in-out","shadow-sm hover:shadow-md"),onClick:()=>c("/list-property"),children:[a.jsx(V.Z,{className:"mr-2 h-4 w-4"}),"List Property"]})]}),a.jsx(x,{})]}),(0,a.jsxs)(g,{open:e,onOpenChange:s,children:[a.jsx(j,{asChild:!0,children:(0,a.jsxs)(f.z,{variant:"ghost",size:"icon",className:"md:hidden",children:[a.jsx(F.Z,{className:"h-5 w-5"}),a.jsx("span",{className:"sr-only",children:"Toggle menu"})]})}),a.jsx(y,{side:"left",className:"w-72",children:(0,a.jsxs)("div",{className:"flex flex-col h-full",children:[(0,a.jsxs)(o(),{href:"/",className:"flex items-center space-x-2 mb-8",onClick:()=>s(!1),children:[a.jsx(C.Z,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold",children:"RentSpace"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-6 flex-1",children:[a.jsx("div",{className:"flex flex-col gap-2",children:!n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f.z,{className:"w-full",onClick:()=>c("/sign-in"),children:[a.jsx(_.Z,{className:"mr-2 h-4 w-4"}),"Sign In"]}),(0,a.jsxs)(f.z,{variant:"outline",className:"w-full",onClick:()=>c("/sign-up"),children:[a.jsx(O.Z,{className:"mr-2 h-4 w-4"}),"Create Account"]})]})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-medium text-sm text-muted-foreground mb-2",children:"For Renters"}),a.jsx("nav",{className:"flex flex-col space-y-1",children:[...I,{name:"Messages",href:"/inbox",icon:A.Z}].map(e=>(0,a.jsxs)(o(),{href:e.href,onClick:()=>c(e.href),className:(0,d.cn)("flex items-center gap-2 py-2 px-3 text-sm rounded-md","text-foreground/60 transition-colors hover:text-foreground","hover:bg-accent hover:text-accent-foreground"),children:[a.jsx(e.icon,{className:"h-4 w-4"}),e.name]},e.name))})]}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-medium text-sm text-muted-foreground mb-2",children:"For Landlords"}),a.jsx("nav",{className:"flex flex-col space-y-1",children:E.map(e=>(0,a.jsxs)(o(),{href:e.href,onClick:()=>c(e.href),className:(0,d.cn)("flex items-center gap-2 py-2 px-3 text-sm rounded-md","text-foreground/60 transition-colors hover:text-foreground","hover:bg-accent hover:text-accent-foreground"),children:[a.jsx(e.icon,{className:"h-4 w-4"}),e.name]},e.name))})]})]}),a.jsx("div",{className:"border-t pt-4 mt-auto",children:(0,a.jsxs)(f.z,{variant:"outline",className:"w-full",onClick:()=>c("/list-property"),children:[a.jsx(V.Z,{className:"mr-2 h-4 w-4"}),"List Your Property"]})})]})})]})]})})}},49076:(e,s,t)=>{"use strict";t.r(s),t.d(s,{RootProvider:()=>S});var a=t(60080),r=t(71072),n=t(9885);let o=0,i=new Map,d=e=>{if(i.has(e))return;let s=setTimeout(()=>{i.delete(e),f({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,s)},l=(e,s)=>{switch(s.type){case"ADD_TOAST":return{...e,toasts:[s.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=s;return t?d(t):e.toasts.forEach(e=>{d(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===s.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==s.toastId)}}},c=[],m={toasts:[]};function f(e){m=l(m,e),c.forEach(e=>{e(m)})}function x({...e}){let s=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),t=()=>f({type:"DISMISS_TOAST",toastId:s});return f({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:e=>{e||t()}}}),{id:s,dismiss:t,update:e=>f({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var p=t(40031),u=t(97389),h=t(56206),g=t(23161);let j=p.zt,v=n.forwardRef(({className:e,...s},t)=>a.jsx(p.l_,{ref:t,className:(0,g.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...s}));v.displayName=p.l_.displayName;let N=(0,u.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),b=n.forwardRef(({className:e,variant:s,...t},r)=>a.jsx(p.fC,{ref:r,className:(0,g.cn)(N({variant:s}),e),...t}));b.displayName=p.fC.displayName;let y=n.forwardRef(({className:e,...s},t)=>a.jsx(p.aU,{ref:t,className:(0,g.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...s}));y.displayName=p.aU.displayName;let w=n.forwardRef(({className:e,...s},t)=>a.jsx(p.x8,{ref:t,className:(0,g.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...s,children:a.jsx(h.Z,{className:"h-4 w-4"})}));w.displayName=p.x8.displayName;let k=n.forwardRef(({className:e,...s},t)=>a.jsx(p.Dx,{ref:t,className:(0,g.cn)("text-sm font-semibold",e),...s}));k.displayName=p.Dx.displayName;let R=n.forwardRef(({className:e,...s},t)=>a.jsx(p.dk,{ref:t,className:(0,g.cn)("text-sm opacity-90",e),...s}));function z(){let{toasts:e}=function(){let[e,s]=n.useState(m);return n.useEffect(()=>(c.push(s),()=>{let e=c.indexOf(s);e>-1&&c.splice(e,1)}),[e]),{...e,toast:x,dismiss:e=>f({type:"DISMISS_TOAST",toastId:e})}}();return(0,a.jsxs)(j,{children:[e.map(function({id:e,title:s,description:t,action:r,...n}){return(0,a.jsxs)(b,{...n,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[s&&a.jsx(k,{children:s}),t&&a.jsx(R,{children:t})]}),r,a.jsx(w,{})]},e)}),a.jsx(v,{})]})}function S({children:e}){return(0,a.jsxs)(r.ThemeProvider,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[e,a.jsx(z,{})]})}R.displayName=p.dk.displayName},68384:(e,s,t)=>{"use strict";t.d(s,{d:()=>d,z:()=>l});var a=t(60080),r=t(9885),n=t(71085),o=t(97389),i=t(23161);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=r.forwardRef(({className:e,variant:s,size:t,asChild:r=!1,...o},l)=>{let c=r?n.g7:"button";return a.jsx(c,{className:(0,i.cn)(d({variant:s,size:t,className:e})),ref:l,...o})});l.displayName="Button"},93303:(e,s,t)=>{"use strict";t.d(s,{$F:()=>m,AW:()=>u,Ju:()=>v,Qk:()=>f,VD:()=>N,Xi:()=>h,h_:()=>c});var a=t(60080),r=t(9885),n=t(97827),o=t(11922),i=t(1264),d=t(74151),l=t(23161);let c=n.fC,m=n.xz,f=n.ZA;n.Uv,n.Tr,n.Ee;let x=r.forwardRef(({className:e,inset:s,children:t,...r},i)=>(0,a.jsxs)(n.fF,{ref:i,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",e),...r,children:[t,a.jsx(o.Z,{className:"ml-auto h-4 w-4"})]}));x.displayName=n.fF.displayName;let p=r.forwardRef(({className:e,...s},t)=>a.jsx(n.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s}));p.displayName=n.tu.displayName;let u=r.forwardRef(({className:e,sideOffset:s=4,...t},r)=>a.jsx(n.Uv,{children:a.jsx(n.VY,{ref:r,sideOffset:s,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})}));u.displayName=n.VY.displayName;let h=r.forwardRef(({className:e,inset:s,...t},r)=>a.jsx(n.ck,{ref:r,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",e),...t}));h.displayName=n.ck.displayName;let g=r.forwardRef(({className:e,children:s,checked:t,...r},o)=>(0,a.jsxs)(n.oC,{ref:o,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...r,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(n.wU,{children:a.jsx(i.Z,{className:"h-4 w-4"})})}),s]}));g.displayName=n.oC.displayName;let j=r.forwardRef(({className:e,children:s,...t},r)=>(0,a.jsxs)(n.Rk,{ref:r,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(n.wU,{children:a.jsx(d.Z,{className:"h-2 w-2 fill-current"})})}),s]}));j.displayName=n.Rk.displayName;let v=r.forwardRef(({className:e,inset:s,...t},r)=>a.jsx(n.__,{ref:r,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",e),...t}));v.displayName=n.__.displayName;let N=r.forwardRef(({className:e,...s},t)=>a.jsx(n.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",e),...s}));N.displayName=n.Z0.displayName},23161:(e,s,t)=>{"use strict";t.d(s,{cn:()=>n});var a=t(10566),r=t(78126);function n(...e){return(0,r.m6)((0,a.W)(e))}},33784:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p,metadata:()=>x});var a=t(48144);t(67272),t(23285),t(72428),t(61264),t(43297),t(44863),t(55789),t(84908),t(7432);var r=t(17536);let n=(0,r.createProxy)(String.raw`/home/project/components/root-provider.tsx`),{__esModule:o,$$typeof:i}=n;n.default;let d=n.RootProvider,l=(0,r.createProxy)(String.raw`/home/project/components/layout/header.tsx`),{__esModule:c,$$typeof:m}=l;l.default;let f=l.Header,x={title:"RentSpace | Modern Rental Platform",description:"Find your perfect rental home with AI-powered matching and exclusive perks.",keywords:"rental, apartment, housing, property management, tenant screening"};function p({children:e}){return a.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:a.jsx("body",{className:"font-sans antialiased",children:a.jsx(d,{children:(0,a.jsxs)("div",{className:"relative flex min-h-screen flex-col",children:[a.jsx(f,{}),a.jsx("main",{className:"flex-1",children:e})]})})})})}},67272:()=>{}};
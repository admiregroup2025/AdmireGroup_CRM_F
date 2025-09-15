import{r as n,m,j as e}from"./index-BTLMSJlm.js";const p=()=>{const[r,l]=n.useState([]),d=m(),i=[{id:1,name:"Travelnworld",logo:"🚀",industry:"Technology",color:"from-blue-500 to-purple-600"},{id:2,name:"Admire Holidays",logo:"⚡",industry:"Innovation",color:"from-purple-500 to-pink-600"},{id:3,name:"Admire Softech",logo:"📊",industry:"Analytics",color:"from-green-500 to-teal-600"},{id:4,name:"Trip To Honeymoon",logo:"☁️",industry:"Cloud Services",color:"from-blue-400 to-cyan-600"}];n.useEffect(()=>{i.forEach((t,a)=>{setTimeout(()=>{l(s=>[...s,a])},a*150)})},[]);const c=t=>{d("/login",{state:{company:t}})};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8",children:[e.jsx("link",{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",rel:"stylesheet"}),e.jsx("style",{children:`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-5xl font-bold text-white mb-4 animate-pulse",children:"Our Partners"}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",children:i.map((t,a)=>e.jsx("div",{className:`transform transition-all duration-700 cursor-pointer ${r.includes(a)?"translate-y-0 opacity-100 scale-100":"translate-y-20 opacity-0 scale-95"}`,style:{transitionDelay:`${a*50}ms`},onClick:()=>c(t),children:e.jsxs("div",{className:"group relative",children:[e.jsx("div",{className:`
                relative overflow-hidden rounded-2xl bg-gradient-to-r ${t.color}
                p-1 transition-all duration-500 hover:scale-105 hover:rotate-1
                before:absolute before:inset-0 before:rounded-2xl 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                before:-translate-x-full before:transition-transform before:duration-700
                hover:before:translate-x-full
              `,children:e.jsxs("div",{className:"relative bg-white/10 backdrop-blur-sm rounded-xl p-6 h-48 flex flex-col justify-between",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"text-6xl mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12",children:t.logo}),e.jsx("div",{className:"absolute -top-2 -left-2 text-6xl opacity-30 blur-sm transition-opacity duration-500 group-hover:opacity-60",children:t.logo})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-yellow-300",children:t.name}),e.jsx("p",{className:"text-white/80 text-sm transition-all duration-300 group-hover:text-white",children:t.industry})]}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl"}),e.jsx("div",{className:"absolute bottom-4 right-4 transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",children:e.jsx("div",{className:"bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer",children:"View Details"})})]})}),e.jsx("div",{className:"absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700",children:[...Array(6)].map((s,o)=>e.jsx("div",{className:"absolute w-2 h-2 bg-white rounded-full animate-ping",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${o*.2}s`,animationDuration:"2s"}},o))})]})},t.id))}),r.length<i.length&&e.jsxs("div",{className:"text-center mt-12",children:[e.jsxs("div",{className:"inline-flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full animate-bounce"}),e.jsx("div",{className:"w-3 h-3 bg-pink-500 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),e.jsx("p",{className:"text-white/60 mt-2 text-sm",children:"Loading companies..."})]}),e.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/10 to-transparent rounded-full animate-spin",style:{animationDuration:"20s"}}),e.jsx("div",{className:"absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent rounded-full animate-spin",style:{animationDuration:"25s",animationDirection:"reverse"}})]})]})};export{p as default};

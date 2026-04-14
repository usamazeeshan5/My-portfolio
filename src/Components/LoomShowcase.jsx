
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const LoomShowcase = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [activeStack, setActiveStack] = useState('fullstack');

//   const masterVideos = {
//     fullstack: "daa7181c3eca46668ce26b427d928ad8",
//     wordpress: "e9de6ec0973c4904bf637eb63827aefe" 
//   };

//   const loomProjects = [
//     { id: "daa7181c3eca46668ce26b427d928ad8", title: "Car Bot APIs Integration", category: "Backend Automation" },
//     { id: "6eb6abddd7ad4b5fb3a9cf6f724a9054", title: "Supabase Backend Architecture", category: "Database Design" },
//     { id: "e9de6ec0973c4904bf637eb63827aefe", title: "Ez-Signature System", category: "SaaS Overview" },
//     { id: "b6273473dcfe4fbda985da78d1c9a1dc", title: "Table Tracking System", category: "Business Logic" },
//     { id: "f1666986c455446399a058799999defe", title: "Figma to Next.js", category: "Frontend Excellence" },
//     { id: "b160c9d1a11a4ab488c55d88cc48eebf", title: "Location Dropdown Logic", category: "UI Implementation" },
//     { id: "a928f2d09a6e4d3099e523d643de07d8", title: "Discourse SSO Integration", category: "Security & Auth" }
//   ];

//   return (
//     <div className="w-full bg-[#050505] py-20 px-6 md:px-20 min-h-screen">
      
//       {/* 1. HERO LAPTOP SECTION (Always Playing) */}
//       <div className="max-w-6xl mx-auto mb-32">
//         <div className="text-center mb-12">
//           <h3 className="text-emerald-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Interactive Showcase</h3>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {['fullstack', 'wordpress'].map((stack) => (
//               <button 
//                 key={stack}
//                 onClick={() => setActiveStack(stack)}
//                 className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${activeStack === stack ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
//               >
//                 {stack === 'fullstack' ? 'Full Stack Projects' : 'WordPress & PHP'}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="relative mx-auto max-w-[950px]">
//           <div className="relative rounded-[2rem] border-[14px] border-[#121212] bg-[#121212] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[16/10]">
//             <div className="relative w-full h-full bg-[#050505] overflow-hidden">
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeStack}
//                       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                       className="w-full h-full"
//                     >
//                     <iframe
//                         src={`https://www.loom.com/embed/${masterVideos[activeStack]}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_status=true&autoplay=1&muted=1&loop=1`}
//                         frameBorder="0"
//                         className="w-full h-full pointer-events-none scale-[1.1]"
//                     ></iframe>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//           </div>
//           <div className="relative h-[10px] w-[106%] -left-[3%] bg-[#1a1a1a] border-t border-white/20 rounded-b-lg z-10" />
//         </div>
//       </div>

//        <div className="max-w-7xl mx-auto mb-16 pt-20 border-t border-white/5">
//         <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter">
//           Visual <br /> 
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">Walkthroughs</span>
//         </h2>
//       </div>

//       {/* 2. GRID SECTION (Always Playing Backgrounds) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {loomProjects.map((project) => (
//           <motion.div
//             key={project.id}
//             whileHover={{ y: -10 }}
//             className="group relative cursor-pointer"
//             onClick={() => setSelectedVideo(project.id)}
//           >
//             <div className="relative aspect-video rounded-[24px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-500 group-hover:border-emerald-500/50">
              
//               {/* VIDEO LAYER - Always visible, muted, and looping */}
//               <div className="absolute inset-0 w-full h-full z-10">
//                 <iframe
//                   src={`https://www.loom.com/embed/${project.id}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_status=true&autoplay=1&muted=1&loop=1`}
//                   frameBorder="0"
//                   className="absolute inset-0 w-full h-full scale-[1.5] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
//                 ></iframe>
//               </div>

//               {/* OVERLAY LAYER (Darkens video slightly for text readability) */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

//               {/* INTERACTIVE UI */}
//               <div className="absolute inset-0 flex items-center justify-center z-30">
//                 <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:text-black">
//                   <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 px-1">
//               <p className="text-emerald-500 text-[9px] font-black uppercase tracking-[0.2em] mb-1">{project.category}</p>
//               <h4 className="text-white text-lg font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h4>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 3. MODAL (With Sound) */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
//           >
//             <button className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl" onClick={() => setSelectedVideo(null)}>×</button>
//             <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//               <iframe 
//                 src={`https://www.loom.com/embed/${selectedVideo}?autoplay=1`} 
//                 frameBorder="0" allowFullScreen 
//                 className="absolute top-0 left-0 w-full h-full"
//               ></iframe>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LoomShowcase;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoomShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeStack, setActiveStack] = useState('fullstack');

  const masterVideos = {
    fullstack: "daa7181c3eca46668ce26b427d928ad8",
    wordpress: "e9de6ec0973c4904bf637eb63827aefe" 
  };

  const loomProjects = [
    { id: "daa7181c3eca46668ce26b427d928ad8", title: "Car Bot APIs Integration", category: "Backend Automation" },
    { id: "6eb6abddd7ad4b5fb3a9cf6f724a9054", title: "Supabase Backend Architecture", category: "Database Design" },
    { id: "e9de6ec0973c4904bf637eb63827aefe", title: "Ez-Signature System", category: "SaaS Overview" },
    { id: "b6273473dcfe4fbda985da78d1c9a1dc", title: "Table Tracking System", category: "Business Logic" },
    { id: "f1666986c455446399a058799999defe", title: "Figma to Next.js", category: "Frontend Excellence" },
    { id: "b160c9d1a11a4ab488c55d88cc48eebf", title: "Location Dropdown Logic", category: "UI Implementation" },
    { id: "a928f2d09a6e4d3099e523d643de07d8", title: "Discourse SSO Integration", category: "Security & Auth" }
  ];

  return (
    <div className="w-full bg-[#050505] py-16 md:py-20 px-4 sm:px-6 md:px-20 min-h-screen">
      
      {/* HERO */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-32">
        
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-emerald-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-bold mb-4">
            Interactive Showcase
          </h3>

          {/* STACK BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12">
            {['fullstack', 'wordpress'].map((stack) => (
              <button 
                key={stack}
                onClick={() => setActiveStack(stack)}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeStack === stack 
                  ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                  : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'
                }`}
              >
                {stack === 'fullstack' ? 'Full Stack Projects' : 'WordPress & PHP'}
              </button>
            ))}
          </div>
        </div>

        {/* LAPTOP */}
        <div className="relative mx-auto max-w-[950px]">
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] border-[8px] sm:border-[10px] md:border-[14px] border-[#121212] bg-[#121212] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] md:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[16/10]">
            
            <div className="relative w-full h-full bg-[#050505] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStack}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                >
                  <iframe
                    src={`https://www.loom.com/embed/${masterVideos[activeStack]}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_status=true&autoplay=1&muted=1&loop=1`}
                    frameBorder="0"
                    className="w-full h-full pointer-events-none scale-[1.05] md:scale-[1.1]"
                  ></iframe>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative h-[6px] md:h-[10px] w-[104%] md:w-[106%] -left-[2%] md:-left-[3%] bg-[#1a1a1a] border-t border-white/20 rounded-b-lg z-10" />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 pt-10 md:pt-20 border-t border-white/5">
        <h2 className="text-3xl sm:text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter">
          Visual <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">
            Walkthroughs
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 max-w-7xl mx-auto">
        {loomProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedVideo(project.id)}
          >
            <div className="relative aspect-video rounded-[18px] md:rounded-[24px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-xl md:shadow-2xl transition-all duration-500 group-hover:border-emerald-500/50">
              
              {/* VIDEO */}
              <div className="absolute inset-0 w-full h-full z-10">
                <iframe
                  src={`https://www.loom.com/embed/${project.id}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_status=true&autoplay=1&muted=1&loop=1`}
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full scale-[1.3] md:scale-[1.5] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                ></iframe>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:text-black">
                  <svg className="w-4 h-4 md:w-5 md:h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-3 md:mt-5 px-1">
              <p className="text-emerald-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1">
                {project.category}
              </p>
              <h4 className="text-white text-sm sm:text-base md:text-lg font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-4"
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white text-2xl md:text-4xl"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>

            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              className="relative w-full max-w-5xl aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe 
                src={`https://www.loom.com/embed/${selectedVideo}?autoplay=1`} 
                frameBorder="0" 
                allowFullScreen 
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoomShowcase;
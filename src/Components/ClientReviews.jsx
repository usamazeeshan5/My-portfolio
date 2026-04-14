
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2, X } from 'lucide-react';

// const ClientReviews = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Data generation (keeping your logic)
//   const fiverrReviews = Array.from({ length: 32 }, (_, i) => ({
//     id: `f-${i + 1}`,
//     platform: "Fiverr",
//     image: new URL(`../assets/f${i + 1}.png`, import.meta.url).href, 
//   }));

//   const upworkReviews = Array.from({ length: 8 }, (_, i) => ({
//     id: `u-${i + 1}`,
//     platform: "Upwork",
//     image: new URL(`../assets/u${i + 1}.png`, import.meta.url).href,
//   }));

//   const allReviews = [...fiverrReviews, ...upworkReviews].sort(() => Math.random() - 0.5);

//   const filteredReviews = activeTab === 'all' 
//     ? allReviews 
//     : allReviews.filter(r => r.platform.toLowerCase() === activeTab);

//   return (
//     <section className="w-full bg-[#050505] py-32 px-6 md:px-20 overflow-hidden min-h-screen">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
//           <div>
//             <h3 className="text-emerald-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 italic">Success Stories</h3>
//             <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter">
//               TRUSTED <br /> <span className="text-white/10">RESULTS</span>
//             </h2>
//           </div>

//           {/* Platform Tabs */}
//           <div className="flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-3xl">
//             {['all', 'upwork', 'fiverr'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
//                   activeTab === tab 
//                   ? 'bg-emerald-500 text-black shadow-[0_10px_30px_rgba(16,185,129,0.3)]' 
//                   : 'text-white/40 hover:text-white'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Masonry Grid */}
//         <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
//           <AnimatePresence mode='popLayout'>
//             {filteredReviews.map((review) => (
//               <motion.div
//                 key={review.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 whileHover={{ y: -10 }}
//                 onClick={() => setSelectedImage(review.image)}
//                 className="relative break-inside-avoid rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 group cursor-zoom-in"
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden aspect-auto">
//                   <img 
//                     src={review.image} 
//                     alt="Client Feedback" 
//                     className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Overlay on Hover */}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                         <Maximize2 className="text-white w-6 h-6" />
//                      </div>
//                   </div>
//                 </div>

//                 {/* Badge */}
//                 <div className="absolute bottom-6 right-6">
//                   <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-black/60 text-white border border-white/10 backdrop-blur-md">
//                     {review.platform}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Fullscreen Image Modal */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedImage(null)}
//               className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
//             >
//               <button className="absolute top-10 right-10 text-white/50 hover:text-white">
//                 <X size={40} />
//               </button>
//               <motion.img 
//                 initial={{ scale: 0.9, y: 20 }}
//                 animate={{ scale: 1, y: 0 }}
//                 src={selectedImage} 
//                 className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Stats Section */}
//         <div className="mt-32 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-12">
//             {[
//               { label: "Total Reviews", value: "40+" },
//               { label: "Job Success", value: "100%" },
//               { label: "Avg Rating", value: "5.0" }
//             ].map((stat, i) => (
//               <div key={i} className="text-center group">
//                 <p className="text-4xl md:text-6xl font-black text-white group-hover:text-emerald-500 transition-colors duration-500">{stat.value}</p>
//                 <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mt-2">{stat.label}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const ClientReviews = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const fiverrReviews = Array.from({ length: 32 }, (_, i) => ({
    id: `f-${i + 1}`,
    platform: "Fiverr",
    image: new URL(`../assets/f${i + 1}.png`, import.meta.url).href, 
  }));

  const upworkReviews = Array.from({ length: 8 }, (_, i) => ({
    id: `u-${i + 1}`,
    platform: "Upwork",
    image: new URL(`../assets/u${i + 1}.png`, import.meta.url).href,
  }));

  const allReviews = [...fiverrReviews, ...upworkReviews].sort(() => Math.random() - 0.5);

  const filteredReviews = activeTab === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.platform.toLowerCase() === activeTab);

  return (
    <section className="w-full bg-[#050505] py-20 md:py-32 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-8">
          <div>
            <h3 className="text-emerald-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-bold mb-3 md:mb-4 italic">
              Success Stories
            </h3>

            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] md:leading-[0.8] tracking-tighter">
              TRUSTED <br /> <span className="text-white/10">RESULTS</span>
            </h2>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-3xl w-full lg:w-auto">
            {['all', 'upwork', 'fiverr'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 lg:flex-none px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-lg md:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-500 ${
                  activeTab === tab 
                    ? 'bg-emerald-500 text-black shadow-[0_10px_30px_rgba(16,185,129,0.3)]' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY GRID */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          <AnimatePresence mode='popLayout'>
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(review.image)}
                className="relative break-inside-avoid rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 group cursor-zoom-in"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img 
                    src={review.image} 
                    alt="Client Feedback" 
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 className="text-white w-4 h-4 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>

                {/* BADGE */}
                <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6">
                  <span className="px-2 sm:px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-black/60 text-white border border-white/10 backdrop-blur-md">
                    {review.platform}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
            >
              <button className="absolute top-4 right-4 md:top-10 md:right-10 text-white/50 hover:text-white">
                <X size={24} className="md:w-10 md:h-10" />
              </button>

              <motion.img 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                src={selectedImage} 
                className="max-w-full max-h-full rounded-xl md:rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATS */}
        <div className="mt-16 md:mt-32 pt-10 md:pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {[
            { label: "Total Reviews", value: "40+" },
            { label: "Job Success", value: "100%" },
            { label: "Avg Rating", value: "5.0" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-2xl sm:text-3xl md:text-6xl font-black text-white group-hover:text-emerald-500 transition-colors duration-500">
                {stat.value}
              </p>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
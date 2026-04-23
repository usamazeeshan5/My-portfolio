import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Star, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';

const ClientReviews = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 8;

  const reviews = useMemo(() => {
    const fiverr = Array.from({ length: 32 }, (_, i) => ({
      id: `f-${i + 1}`,
      platform: "Fiverr",
      image: new URL(`../assets/f${i + 1}.png`, import.meta.url).href,
    }));
    const upwork = Array.from({ length: 8 }, (_, i) => ({
      id: `u-${i + 1}`,
      platform: "Upwork",
      image: new URL(`../assets/u${i + 1}.png`, import.meta.url).href,
    }));
    return [...fiverr, ...upwork].sort(() => Math.random() - 0.5);
  }, []);

  const filteredReviews = activeTab === 'all' 
    ? reviews 
    : reviews.filter(r => r.platform.toLowerCase() === activeTab);

  const displayedReviews = isExpanded ? filteredReviews : filteredReviews.slice(0, INITIAL_COUNT);

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-40 px-4 sm:px-6 md:px-12 overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-24 gap-8">
          <div>
            <h3 className="text-emerald-500 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold mb-4 flex items-center gap-2">
              <span className="w-6 md:w-8 h-[1px] bg-emerald-500"></span> Verified Results
            </h3>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
              CLIENT <br /> <span className="text-white/10 italic">VERDICTS</span>
            </h2>
          </div>

          {/* TABS */}
          <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-xl w-full sm:w-auto">
            {['all', 'upwork', 'fiverr'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                    setActiveTab(tab);
                    setIsExpanded(false);
                }}
                className={`flex-1 sm:flex-none relative px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab ? 'text-black' : 'text-white/40 hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-emerald-500 rounded-lg md:rounded-xl" />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY GRID */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          <AnimatePresence mode='popLayout'>
            {displayedReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer"
                onClick={() => setSelectedImage(review.image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={review.image} 
                    alt="Proof" 
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4 flex items-center justify-between bg-black/40 backdrop-blur-sm border-t border-white/5">
                   <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-emerald-500 fill-emerald-500" />)}
                   </div>
                   <span className="text-[7px] md:text-[8px] font-bold text-white/30 tracking-widest uppercase">{review.platform}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SEE MORE BUTTON */}
        {filteredReviews.length > INITIAL_COUNT && (
          <div className="mt-12 md:mt-20 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative px-8 md:px-12 py-4 md:py-5 bg-white/[0.03] border border-white/10 hover:border-emerald-500 rounded-full transition-all duration-500"
            >
              <div className="relative z-10 flex items-center gap-3 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px]">
                {isExpanded ? (
                  <>Collapse List <ChevronUp size={14} /></>
                ) : (
                  <>View All Proof <ChevronDown size={14} /></>
                )}
              </div>
              <div className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-10" />
            </button>
          </div>
        )}

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

      {/* ZOOMABLE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[1010] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Help text for mobile */}
            <p className="absolute bottom-10 text-white/30 text-[10px] uppercase tracking-widest md:hidden">
                Pinch or Drag to explore details
            </p>

            <div className="w-full h-full flex items-center justify-center p-4">
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage} 
                // Enable Zoom and Pan
                drag
                dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                whileTap={{ cursor: "grabbing" }}
                className="max-w-full max-h-[85vh] rounded-xl md:rounded-2xl border border-white/10 shadow-2xl cursor-grab touch-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientReviews;
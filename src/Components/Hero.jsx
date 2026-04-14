
// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useRef } from "react";
// import ceoImage from "../assets/u1-removebg-preview.png";

// export function Hero() {
//   const containerRef = useRef(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // 1. Scroll-driven 3D Scaling
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Smoothing out the movement
//   const springConfig = { damping: 25, stiffness: 100 };
//   const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.4]), springConfig);
//   const textScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.8]), springConfig);
//   const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   // 2. Mouse Tilt Effect (Next Level 3D Feel)
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
//     mouseX.set((clientX / innerWidth - 0.5) * 40); // Max tilt 40px
//     mouseY.set((clientY / innerHeight - 0.5) * 40);
//   };

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="h-[120vh] flex items-center justify-center bg-black text-white relative overflow-hidden perspective-1000"
//     >
//       {/* BACKGROUND TEXT (Moves Slower) */}
//       <motion.div 
//         style={{ scale: textScale, opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
//         className="absolute z-0 select-none pointer-events-none"
//       >
//         <h1 className="text-[10vw] font-black text-white/5 leading-none uppercase italic">
//           INARTIA Product Manager
//         </h1>
//       </motion.div>

//       {/* DYNAMIC LIGHTING GLOW */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.2, 1], 
//           opacity: [0.3, 0.5, 0.3] 
//         }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[180px] rounded-full z-10"
//       />

//       {/* THE CEO IMAGE (3D TRANSFORM) */}
//       <motion.div 
//         style={{ 
//           scale: imageScale,
//           y: imageY,
//           x: mouseX,
//           y: mouseY,
//           rotateY: useTransform(mouseX, [-20, 20], [-10, 10]),
//           rotateX: useTransform(mouseY, [-20, 20], [10, -10])
//         }}
//         className="relative z-20 w-full max-w-4xl h-[80vh] flex items-center justify-center"
//       >
//         {/* Replace this with your high-res CEO PNG (Transperent Background) */}
//         <img 
//            src={ceoImage} 
//           alt="Usama Zeeshan"
//           className="h-full object-contain drop-shadow-[0_0_80px_rgba(34,197,94,0.4)] transition-all duration-300"
//         />
        
//         {/* Floating Glassmorphism Badge */}
//         <motion.div 
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute right-[10%] top-1/4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hidden md:block"
//         >
//           <p className="text-green-400 font-mono text-sm">7+ Years Exp.</p>
//           <p className="text-xs text-gray-400">Mastering Tech</p>
//         </motion.div>
//       </motion.div>

//       {/* FRONT TEXT CONTENT */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="absolute bottom-32 z-30 text-center"
//       >
//         <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-2">
//           USAMA ZEESHAN
//         </h2>
//         <div className="flex gap-4 justify-center text-green-500 font-mono text-lg">
//           <span>DEVELOPER</span>
//           <span>•</span>
//           <span>ARCHITECT</span>
//           <span>•</span>
//           <span>Product Manager</span>
//         </div>
//       </motion.div>

//       {/* MOUSE SCROLL INDICATOR */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40">
//         <div className="w-[2px] h-16 bg-gradient-to-b from-green-500 to-transparent animate-pulse" />
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import ceoImage from "../assets/u1-removebg-preview.png";

export function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 25, stiffness: 100 };
  const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.4]), springConfig);
  const textScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.8]), springConfig);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 40);
    mouseY.set((clientY / innerHeight - 0.5) * 40);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-[100vh] md:h-[120vh] flex items-center justify-center bg-black text-white relative overflow-hidden perspective-1000 px-4"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{
          scale: textScale,
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
        }}
        className="absolute z-0 select-none pointer-events-none text-center"
      >
        <h1 className="text-[14vw] md:text-[10vw] font-black text-white/5 leading-none uppercase italic">
          INARTIA Product Manager
        </h1>
      </motion.div>

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-500/20 blur-[120px] md:blur-[180px] rounded-full z-10"
      />

      {/* IMAGE */}
      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
          x: mouseX,
          y: mouseY,
          rotateY: useTransform(mouseX, [-20, 20], [-10, 10]),
          rotateX: useTransform(mouseY, [-20, 20], [10, -10]),
        }}
        className="relative z-20 w-full max-w-4xl h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center"
      >
        <img
          src={ceoImage}
          alt="Usama Zeeshan"
          className="h-full object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.4)] md:drop-shadow-[0_0_80px_rgba(34,197,94,0.4)] transition-all duration-300"
        />

        {/* BADGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] md:right-[10%] top-[20%] md:top-1/4 p-3 md:p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hidden sm:block"
        >
          <p className="text-green-400 font-mono text-xs md:text-sm">
            7+ Years Exp.
          </p>
          <p className="text-[10px] md:text-xs text-gray-400">
            Mastering Tech
          </p>
        </motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute bottom-16 md:bottom-32 z-30 text-center px-2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-2">
          USAMA ZEESHAN
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-4 justify-center text-green-500 font-mono text-sm sm:text-base md:text-lg">
          <span>DEVELOPER</span>
          <span>•</span>
          <span>ARCHITECT</span>
          <span>•</span>
          <span>Product Manager</span>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40">
        <div className="w-[2px] h-10 md:h-16 bg-gradient-to-b from-green-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
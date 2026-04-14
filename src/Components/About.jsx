// import { motion } from "framer-motion";

// export function About() {
//   // Animation for the "Staggered" reveal of text and cards
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
//   };

//   const stats = [
//     { label: "7+ Years", sub: "Core Experience" },
//     { label: "50+", sub: "US Projects" },
//     { label: "SaaS/AI", sub: "Specialization" },
//     { label: "Product Manager", sub: "Tech Agency" },
//   ];

//   return (
//     <section id="about" className="py-32 px-6 md:px-20 bg-black text-white relative overflow-hidden">
      
//       {/* BACKGROUND DECOR: Next-gen radial glow */}
//       <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start"
//       >
//         {/* LEFT COLUMN: The Visionary Content */}
//         <div className="space-y-8">
//           <motion.div variants={itemVariants} className="flex items-center gap-4">
//             <span className="h-[1px] w-12 bg-green-500"></span>
//             <h2 className="text-green-500 font-mono tracking-widest text-sm uppercase">The Architect</h2>
//           </motion.div>

//           <motion.h3 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
//             Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Digital Empires.</span>
//           </motion.h3>

//           <motion.div variants={itemVariants} className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
//             <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
//               I help businesses turn ideas into fast, scalable, and revenue-driven digital products. 
//               With 7+ years of experience as a <span className="text-white">Full Stack Developer</span>, 
//               and as the Product Manager of both a tech startup and a development agency, I’ve delivered 50+ successful 
//               projects for U.S. clients.
//             </p>
            
//             <p className="p-6 bg-white/5 border-l-4 border-green-500 rounded-r-2xl italic backdrop-blur-md">
//               "I specialize in MERN stack development, AI automations, and cloud-based solutions, 
//               building high-performance web and mobile applications, MVPs, dashboards, CRMs, and SaaS platforms."
//             </p>
//           </motion.div>
//         </div>

//         {/* RIGHT COLUMN: Modern Tech Stack & Stats */}
//         <div className="grid grid-cols-2 gap-4 h-full">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
//               className="relative group p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2rem] flex flex-col justify-center items-center text-center overflow-hidden"
//             >
//               {/* Inner Glow on Hover */}
//               <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <h4 className="text-4xl font-black text-white group-hover:text-green-400 transition-colors">
//                 {stat.label}
//               </h4>
//               <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-2">
//                 {stat.sub}
//               </p>
//             </motion.div>
//           ))}

//           {/* Large CTA or Image Card */}
//           <motion.div 
//             variants={itemVariants}
//             className="col-span-2 p-8 bg-green-500 rounded-[2rem] text-black flex justify-between items-center group cursor-pointer"
//           >
//             <div>
//               <p className="font-bold text-xl uppercase italic">Have a Project?</p>
//               <p className="text-sm font-medium opacity-80 underline">Let's build the future together.</p>
//             </div>
//             <motion.div 
//               animate={{ x: [0, 10, 0] }} 
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="text-3xl"
//             >
//               →
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { label: "7+ Years", sub: "Core Experience" },
    { label: "50+", sub: "US Projects" },
    { label: "SaaS/AI", sub: "Specialization" },
    { label: "Product Manager", sub: "Tech Agency" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 md:px-20 bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/4 -left-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-green-500/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-start"
      >
        {/* LEFT */}
        <div className="space-y-6 md:space-y-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4"
          >
            <span className="h-[1px] w-8 md:w-12 bg-green-500"></span>
            <h2 className="text-green-500 font-mono tracking-widest text-xs md:text-sm uppercase">
              The Architect
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter"
          >
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Digital Empires.
            </span>
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            <p className="first-letter:text-3xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left">
              I help businesses turn ideas into fast, scalable, and revenue-driven digital products.
              With 7+ years of experience as a{" "}
              <span className="text-white">Full Stack Developer</span>, and as the Product Manager
              of both a tech startup and a development agency, I’ve delivered 50+ successful
              projects for Global clients.
            </p>

            <p className="p-4 md:p-6 bg-white/5 border-l-4 border-green-500 rounded-r-2xl italic backdrop-blur-md text-sm sm:text-base md:text-lg">
              "I specialize in MERN stack development, AI automations, and cloud-based solutions,
              building high-performance web and mobile applications, MVPs, dashboards, CRMs, and
              SaaS platforms."
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 197, 94, 0.5)",
              }}
              className="relative group p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col justify-center items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-green-400 transition-colors">
                {stat.label}
              </h4>
              <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest mt-2">
                {stat.sub}
              </p>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 p-4 sm:p-6 md:p-8 bg-green-500 rounded-2xl md:rounded-[2rem] text-black flex justify-between items-center group cursor-pointer"
          >
            <div>
              <p className="font-bold text-sm sm:text-lg md:text-xl uppercase italic">
                Have a Project?
              </p>
              <p className="text-xs sm:text-sm font-medium opacity-80 underline">
                Let's build the future together.
              </p>
            </div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xl sm:text-2xl md:text-3xl"
            >
              →
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
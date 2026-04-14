
// import { motion } from "framer-motion";

// export function Testimonials() {
//   const reviews = [
//     {
//       name: "Michael Barillio",
//       role: "Web Partner",
//       text: "Usama has been an incredible partner for our web development needs. Their team’s expertise and dedication have exceeded our expectations, delivering a robust and user-friendly platform that has significantly enhanced our digital presence.",
//     },
//     {
//       name: "David Smith",
//       role: "Blockchain Client",
//       text: "Working with Usama has been a game-changer for our business. Their blockchain development services have provided us with a secure and efficient system that has streamlined our operations. Professionalism and commitment are truly outstanding.",
//     },
//     {
//       name: "Christopher",
//       role: "Digital Partner",
//       text: "Usama has been a game-changer for our web development projects. Their team combines technical excellence with a deep understanding of user experience, delivering a platform that is both powerful and intuitive.",
//     },
//     {
//       name: "Andrew",
//       role: "Brand Owner",
//       text: "We couldn’t be happier with the results from Usama. Their professionalism, creativity, and attention to detail have transformed our website into a modern, user-friendly platform that truly represents our brand.",
//     },
//     {
//       name: "Emily",
//       role: "Innovation Lead",
//       text: "Usama exceeded our expectations at every stage of the process. From concept to execution, their team demonstrated unmatched expertise and commitment. The final product is sleek, responsive, and perfectly aligned with our goals.",
//     },
//   ];

//   return (
//     <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
//       {/* Visual Accents (Matches the green lines in your image) */}
//       <div className="absolute top-10 right-10 w-32 h-32 opacity-20 pointer-events-none">
//         <div className="w-full h-[1px] bg-green-500 rotate-45 mb-4" />
//         <div className="w-full h-[1px] bg-green-500 rotate-45 mb-4" />
//         <div className="w-full h-[1px] bg-green-500 rotate-45" />
//       </div>

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic"
//           >
//             Success <span className="text-green-500 not-italic">Stories</span>
//           </motion.h2>
//           <p className="text-gray-500 font-mono mt-4 tracking-widest uppercase text-sm">// Verified Client Results</p>
//         </div>

//         {/* Masonry-style Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className={`p-8 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 backdrop-blur-xl relative group hover:border-green-500/50 transition-all duration-500 ${
//                 i === 1 || i === 4 ? "lg:scale-105 bg-green-950/10 border-green-500/20" : ""
//               }`}
//             >
//               {/* Quote Icon */}
//               <div className="text-green-500 text-5xl font-serif absolute top-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
//                 ”
//               </div>

//               <p className="text-gray-300 leading-relaxed mb-8 relative z-10 italic">
//                 "{review.text}"
//               </p>

//               <div className="flex items-center gap-4">
//                 {/* Avatar Placeholder (Matches the circles in your image) */}
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-800 flex items-center justify-center text-black font-bold border-2 border-white/10">
//                   {review.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white group-hover:text-green-400 transition-colors">
//                     {review.name}
//                   </h4>
//                   <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
//                     {review.role}
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Glow */}
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-green-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    {
      name: "Michael Barillio",
      role: "Web Partner",
      text: "Usama has been an incredible partner for our web development needs. Their team’s expertise and dedication have exceeded our expectations, delivering a robust and user-friendly platform that has significantly enhanced our digital presence.",
    },
    {
      name: "David Smith",
      role: "Blockchain Client",
      text: "Working with Usama has been a game-changer for our business. Their blockchain development services have provided us with a secure and efficient system that has streamlined our operations. Professionalism and commitment are truly outstanding.",
    },
    {
      name: "Christopher",
      role: "Digital Partner",
      text: "Usama has been a game-changer for our web development projects. Their team combines technical excellence with a deep understanding of user experience, delivering a platform that is both powerful and intuitive.",
    },
    {
      name: "Andrew",
      role: "Brand Owner",
      text: "We couldn’t be happier with the results from Usama. Their professionalism, creativity, and attention to detail have transformed our website into a modern, user-friendly platform that truly represents our brand.",
    },
    {
      name: "Emily",
      role: "Innovation Lead",
      text: "Usama exceeded our expectations at every stage of the process. From concept to execution, their team demonstrated unmatched expertise and commitment. The final product is sleek, responsive, and perfectly aligned with our goals.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-10 lg:px-20 bg-black text-white relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-6 md:top-10 right-4 md:right-10 w-20 md:w-32 h-20 md:h-32 opacity-20 pointer-events-none">
        <div className="w-full h-[1px] bg-green-500 rotate-45 mb-2 md:mb-4" />
        <div className="w-full h-[1px] bg-green-500 rotate-45 mb-2 md:mb-4" />
        <div className="w-full h-[1px] bg-green-500 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter uppercase italic"
          >
            Success <span className="text-green-500 not-italic">Stories</span>
          </motion.h2>

          <p className="text-gray-500 font-mono mt-3 md:mt-4 tracking-[0.2em] md:tracking-widest uppercase text-[10px] sm:text-xs md:text-sm">
            // Verified Client Results
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-neutral-900/40 border border-white/5 backdrop-blur-xl relative group hover:border-green-500/50 transition-all duration-500 ${
                i === 1 || i === 4
                  ? "lg:scale-105 bg-green-950/10 border-green-500/20"
                  : ""
              }`}
            >
              {/* QUOTE ICON */}
              <div className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-serif absolute top-4 md:top-6 right-4 md:right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                ”
              </div>

              {/* TEXT */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 md:mb-8 relative z-10 italic">
                "{review.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-800 flex items-center justify-center text-black text-sm md:text-base font-bold border-2 border-white/10">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm md:text-base group-hover:text-green-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* GLOW */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-green-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// export function Services() {
//   const serviceGroups = [
//     {
//       title: "Full Stack Mastery",
//       icon: "⚡",
//       skills: ["MERN Stack", "Next.js", "PHP Laravel", "Mongoose ODM"],
//       description: "Building high-performance, SEO-friendly web architectures from scratch."
//     },
//     {
//       title: "Backend & API Architecture",
//       icon: "🔗",
//       skills: ["REST APIs", "GraphQL", "Express.js", "Passport.js Auth"],
//       description: "Secure, scalable server-side logic and complex data integrations."
//     },
//     {
//       title: "Cloud & DevOps",
//       icon: "☁️",
//       skills: ["AWS (EC2/S3)", "Docker", "GCP / Azure", "CI/CD Hosting"],
//       description: "Deploying enterprise-grade infrastructure with 99.9% uptime."
//     },
//     {
//       title: "AI & Future Tech",
//       icon: "🤖",
//       skills: ["AI Integrations", "Automation", "Machine Learning APIs"],
//       description: "Infusing digital products with intelligent features and automated workflows."
//     }
//   ];

//   return (
//     <section id="services" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      
//       {/* Dynamic Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-sm font-mono text-green-500 tracking-[0.5em] uppercase mb-4"
//           >
//             Expertise
//           </motion.h2>
//           <motion.h3 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-extrabold tracking-tighter"
//           >
//             Technical <span className="text-gray-500">Arsenal.</span>
//           </motion.h3>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {serviceGroups.map((group, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-neutral-900/50 border border-white/5 rounded-[2.5rem] backdrop-blur-xl hover:border-green-500/50 transition-all duration-500"
//             >
//               <div className="flex items-start justify-between mb-8">
//                 <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
//                   {group.icon}
//                 </div>
//                 <div className="text-xs font-mono text-gray-600 group-hover:text-green-500">
//                   0{i + 1} //
//                 </div>
//               </div>

//               <h4 className="text-2xl font-bold mb-4">{group.title}</h4>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 {group.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {group.skills.map((skill, si) => (
//                   <span 
//                     key={si}
//                     className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 group-hover:border-green-500/30 group-hover:text-white transition-colors"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export function Services() {
  const serviceGroups = [
    {
      title: "Full Stack Mastery",
      icon: "⚡",
      skills: ["MERN Stack", "Next.js", "PHP Laravel", "Mongoose ODM"],
      description: "Building high-performance, SEO-friendly web architectures from scratch."
    },
    {
      title: "Backend & API Architecture",
      icon: "🔗",
      skills: ["REST APIs", "GraphQL", "Express.js", "Passport.js Auth"],
      description: "Secure, scalable server-side logic and complex data integrations."
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS (EC2/S3)", "Docker", "GCP / Azure", "CI/CD Hosting"],
      description: "Deploying enterprise-grade infrastructure with 99.9% uptime."
    },
    {
      title: "AI & Future Tech",
      icon: "🤖",
      skills: ["AI Integrations", "Automation", "Machine Learning APIs"],
      description: "Infusing digital products with intelligent features and automated workflows."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 px-4 sm:px-6 md:px-10 lg:px-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] sm:text-xs md:text-sm font-mono text-green-500 tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4"
          >
            Expertise
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter"
          >
            Technical <span className="text-gray-500">Arsenal.</span>
          </motion.h3>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {serviceGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              className="group p-5 sm:p-6 md:p-8 bg-neutral-900/50 border border-white/5 rounded-2xl md:rounded-[2.5rem] backdrop-blur-xl hover:border-green-500/50 transition-all duration-500"
            >
              {/* TOP */}
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500">
                  {group.icon}
                </div>

                <div className="text-[10px] sm:text-xs font-mono text-gray-600 group-hover:text-green-500">
                  0{i + 1} //
                </div>
              </div>

              {/* TITLE */}
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {group.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-400 text-sm sm:text-base mb-5 md:mb-8 leading-relaxed">
                {group.description}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-3 sm:px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-gray-300 group-hover:border-green-500/30 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
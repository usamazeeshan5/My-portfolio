import React from 'react';
import { motion } from 'framer-motion';

const ProjectDeepDive = () => {
  const deepDiveProjects = [
    {
      id: 1,
      tag: "PHP LARAVEL WITH REACT.JS",
      title: "AFI AROMATIC FRAGRANCES",
      problem: [
        "AFI USA needed a modern, scalable web platform to showcase industrial automation solutions.",
        "Existing system lacked a dynamic UI for high-end user experience.",
        "Backend was unable to handle complex industrial workflows robustly.",
        "Design was non-responsive for mobile and desktop users."
      ],
      solution: [
        "Developed custom PHP Laravel backend for secure, enterprise-grade scaling.",
        "Integrated React.js frontend for a fast, interactive single-page experience.",
        "Dynamic product catalog with advanced filtering and search logic.",
        "API-ready architecture allowing for seamless third-party expansion."
      ],
      accent: "from-emerald-600 to-teal-400"
    },
    {
      id: 2,
      tag: "PHP LARAVEL WITH REACT.JS",
      title: "FRAGRANCE UNIVERSITY",
      problem: [
        "Needed a scalable educational platform to manage content and users professionally.",
        "Existing setup lacked performance and flexibility for growth.",
        "Content updates were slow and the system was not mobile-friendly.",
        "User experience was fragmented and difficult to navigate."
      ],
      solution: [
        "High-performance architecture using Laravel and React for zero-latency navigation.",
        "Built-in robust user management and educational content delivery system.",
        "Fully responsive UI/UX optimized for students on all devices.",
        "Future-proofed the codebase to support advanced interactive learning features."
      ],
      accent: "from-blue-600 to-indigo-400"
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <h3 className="text-emerald-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Case Studies</h3>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter">
            Our <br /> <span className="text-white/10 italic">Projects</span>
          </h2>
        </div>

        <div className="space-y-40">
          {deepDiveProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Title & Tags */}
              <div className="lg:col-span-5 sticky top-24">
                <div className={`w-20 h-1 bg-gradient-to-r ${project.accent} mb-8`} />
                <span className="text-emerald-400 text-xs font-black tracking-widest uppercase mb-4 block">
                  {project.tag}
                </span>
                <h4 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none mb-6">
                  {project.title}
                </h4>
                <p className="text-white/30 text-sm uppercase tracking-widest font-bold">About Project</p>
              </div>

              {/* Right Column: Problem & Solution Blocks */}
              <div className="lg:col-span-7 space-y-8">
                {/* Problem Card */}
                <div className="relative p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${project.accent} opacity-50`} />
                  <h5 className="text-red-400 text-xl font-black uppercase tracking-widest mb-6">The Problem</h5>
                  <ul className="space-y-4">
                    {project.problem.map((item, i) => (
                      <li key={i} className="flex gap-4 text-white/60 text-lg leading-relaxed">
                        <span className="text-red-400/50">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Card */}
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="relative p-8 md:p-12 rounded-[40px] bg-emerald-500/[0.03] border border-emerald-500/10 backdrop-blur-3xl overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-400`} />
                  <h5 className="text-emerald-400 text-xl font-black uppercase tracking-widest mb-6">The Solution</h5>
                  <ul className="space-y-4">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex gap-4 text-white/80 text-lg leading-relaxed">
                        <span className="text-emerald-400">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to next section */}
        <div className="mt-40 pt-20 border-t border-white/5 flex justify-center">
           <h3 className="text-white/20 text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Our Wordpress Projects
           </h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectDeepDive;
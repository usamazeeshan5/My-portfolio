

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// export function Projects() {
//   const [filter, setFilter] = useState("All");

//   const projectData = [
//     // 1. AI & INTELLIGENCE
//     {
//       title: "AI Voice Agent Backend",
//       category: "AI",
//       tags: ["Node.js", "WebSockets", "Twilio", "OpenAI"],
//       desc: "Real-time telephony AI with multi-LLM pipelines, function calling, and automated transcripts.",
//     },
//     {
//       title: "Self-Hosted AI Chat Platform",
//       category: "AI",
//       tags: ["SvelteKit", "FastAPI", "LangChain", "ChromaDB"],
//       desc: "Multi-model LLM assistant featuring RAG search, vector embeddings, and semantic queries.",
//     },
//     {
//       title: "LLM Integration System",
//       category: "AI",
//       tags: ["Svelte", "Python", "LLM"],
//       desc: "Secure cloud-native infrastructure for Large Language Model integration and scaling.",
//     },
//     {
//       title: "Enterprise Automation Platform",
//       category: "AI",
//       tags: ["Next.js", "Node.js", "ServiceNow", "AI"],
//       desc: "Modular UI hubs for AI-driven enterprise automation and third-party integration (POS, ThousandEyes).",
//     },

//     // 2. SECURITY & FINTECH
//     {
//       title: "Geospatial Intelligence Platform",
//       category: "Security",
//       tags: ["FastAPI", "Electron", "React", "RSA"],
//       desc: "Threat management platform with secure scanning engines, PII detection, and RSA encryption.",
//     },
//     {
//       title: "Data Marketplace Platform",
//       category: "Security",
//       tags: ["FastAPI", "PostgreSQL", "Stripe", "KYC"],
//       desc: "Full marketplace system with automated KYC, subscription billing, and secure data handling.",
//     },
//     {
//       title: "Enterprise Password Management",
//       category: "Security",
//       tags: ["Next.js", "Redis", "OpenPGP.js", "RBAC"],
//       desc: "Encrypted vault system with multi-tenant organizations and offline-first PWA credential lifecycle.",
//     },
//     {
//       title: "Padlock Security",
//       category: "Security",
//       tags: ["React", "Material UI", "TypeScript"],
//       desc: "High-security password management system with a focus on encrypted data visualization.",
//     },

//     // 3. ENTERPRISE SAAS & CLOUD
//     {
//       title: "Novascale Cloud Platform",
//       category: "SaaS",
//       tags: ["AWS", "Docker", "Terraform", "CI/CD"],
//       desc: "High-availability infrastructure with automated deployments and performance optimization.",
//     },
//     {
//       title: "GeoTrack Supply Chain",
//       category: "SaaS",
//       tags: ["SCM", "Logistics", "ERP", "AI Forecasting"],
//       desc: "End-to-end supply chain intelligence with real-time tracking, SCM dashboards, and AI planning.",
//     },
//     {
//       title: "vCandidates Recruitment",
//       category: "SaaS",
//       tags: ["MEAN Stack", "Twilio", "Stripe", "Moodle"],
//       desc: "Online recruiting and career development center with automated reference checks and Moodel integration.",
//     },
//     {
//       title: "Fitness / Gym Management SaaS",
//       category: "SaaS",
//       tags: ["Next.js", "PostgreSQL", "Socket.io", "QR"],
//       desc: "Member/trainer management with QR equipment tracking, real-time chat, and analytics.",
//     },
//     {
//       title: "ADNOC Data Viz",
//       category: "SaaS",
//       tags: ["MERN", "Highcharts", "Mobx"],
//       desc: "Full-stack data visualization applications for industrial data analysis and charting.",
//     },
//     {
//       title: "FiveFarm Analytics",
//       category: "SaaS",
//       tags: ["MERN", "NFT R&D", "Docker", "Jenkins"],
//       desc: "Chia management and analytics platform with NFT wallet integrations (Ronin).",
//     },
//     {
//       title: "Fynite AI",
//       category: "SaaS",
//       tags: ["React", "Go", "Material UI"],
//       desc: "Enterprise-grade dashboard and management platform built for scalability.",
//     },

//     // 4. WEB & SPECIALIZED APPS
//     {
//       title: "AFI Aromatic Fragrances",
//       category: "Web",
//       tags: ["Laravel", "React", "SEO", "Industrial"],
//       desc: "Modern industrial automation platform with dynamic product catalogs and role-based access.",
//     },
//     {
//       title: "Fragrance University",
//       category: "Web",
//       tags: ["PHP Laravel", "React", "EdTech"],
//       desc: "High-performance educational platform designed for smooth content delivery and user management.",
//     },
//     {
//       title: "SeaSalt Immigration",
//       category: "Web",
//       tags: ["WordPress", "Elementor", "Legal"],
//       desc: "Professional immigration services portal with a focus on UX and conversion.",
//     },
//     {
//       title: "Ozean Reality",
//       category: "Web",
//       tags: ["WordPress", "Real Estate"],
//       desc: "Luxury real estate platform with high-end property listings and lead generation.",
//     },
//     {
//       title: "Cndea & Serene",
//       category: "Web",
//       tags: ["WordPress", "Design"],
//       desc: "Stylish, responsive web presences for boutique brands and service providers.",
//     }
//   ];

//   const categories = ["All", "AI", "Security", "SaaS", "Web"];
//   const filteredProjects = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

//   return (
//     <section id="projects" className="py-32 px-6 bg-black text-white relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//           <div>
//             <h2 className="text-sm font-mono text-green-500 tracking-widest uppercase mb-4">// Portfolio</h2>
//             <h3 className="text-5xl md:text-7xl font-bold tracking-tighter italic">20+ Major <span className="text-gray-500 not-italic">Deployments.</span></h3>
//           </div>
          
//           <div className="flex bg-neutral-900/50 p-1 rounded-full border border-white/5 backdrop-blur-md flex-wrap justify-center">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
//                   filter === cat ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Dynamic Project Grid */}
//         <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project) => (
//               <motion.div
//                 layout
//                 key={project.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 whileHover={{ y: -8, borderColor: "rgba(34, 197, 94, 0.4)" }}
//                 className="group relative p-8 bg-neutral-900/30 border border-white/5 rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-sm"
//               >
//                 <div>
//                   <div className="flex justify-between items-start mb-6">
//                     <span className="text-[10px] font-mono text-green-500 px-3 py-1 border border-green-500/20 rounded-full uppercase tracking-widest">
//                       {project.category}
//                     </span>
//                     <div className="text-gray-600 group-hover:text-green-500 transition-colors">↗</div>
//                   </div>
                  
//                   <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
//                     {project.title}
//                   </h4>
//                   <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
//                     {project.desc}
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="text-[9px] font-mono text-gray-500 uppercase tracking-tighter">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         <div className="mt-20 text-center text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">
//           End of Portfolio // Built by Usama Zeeshan
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const projectData = [
    // (UNCHANGED DATA)
    {
      title: "AI Voice Agent Backend",
      category: "AI",
      tags: ["Node.js", "WebSockets", "Twilio", "OpenAI"],
      desc: "Real-time telephony AI with multi-LLM pipelines, function calling, and automated transcripts.",
    },
    {
      title: "Self-Hosted AI Chat Platform",
      category: "AI",
      tags: ["SvelteKit", "FastAPI", "LangChain", "ChromaDB"],
      desc: "Multi-model LLM assistant featuring RAG search, vector embeddings, and semantic queries.",
    },
    {
      title: "LLM Integration System",
      category: "AI",
      tags: ["Svelte", "Python", "LLM"],
      desc: "Secure cloud-native infrastructure for Large Language Model integration and scaling.",
    },
    {
      title: "Enterprise Automation Platform",
      category: "AI",
      tags: ["Next.js", "Node.js", "ServiceNow", "AI"],
      desc: "Modular UI hubs for AI-driven enterprise automation and third-party integration (POS, ThousandEyes).",
    },

    {
      title: "Geospatial Intelligence Platform",
      category: "Security",
      tags: ["FastAPI", "Electron", "React", "RSA"],
      desc: "Threat management platform with secure scanning engines, PII detection, and RSA encryption.",
    },
    {
      title: "Data Marketplace Platform",
      category: "Security",
      tags: ["FastAPI", "PostgreSQL", "Stripe", "KYC"],
      desc: "Full marketplace system with automated KYC, subscription billing, and secure data handling.",
    },
    {
      title: "Enterprise Password Management",
      category: "Security",
      tags: ["Next.js", "Redis", "OpenPGP.js", "RBAC"],
      desc: "Encrypted vault system with multi-tenant organizations and offline-first PWA credential lifecycle.",
    },
    {
      title: "Padlock Security",
      category: "Security",
      tags: ["React", "Material UI", "TypeScript"],
      desc: "High-security password management system with a focus on encrypted data visualization.",
    },

    {
      title: "Novascale Cloud Platform",
      category: "SaaS",
      tags: ["AWS", "Docker", "Terraform", "CI/CD"],
      desc: "High-availability infrastructure with automated deployments and performance optimization.",
    },
    {
      title: "GeoTrack Supply Chain",
      category: "SaaS",
      tags: ["SCM", "Logistics", "ERP", "AI Forecasting"],
      desc: "End-to-end supply chain intelligence with real-time tracking, SCM dashboards, and AI planning.",
    },
    {
      title: "vCandidates Recruitment",
      category: "SaaS",
      tags: ["MEAN Stack", "Twilio", "Stripe", "Moodle"],
      desc: "Online recruiting and career development center with automated reference checks and Moodel integration.",
    },
    {
      title: "Fitness / Gym Management SaaS",
      category: "SaaS",
      tags: ["Next.js", "PostgreSQL", "Socket.io", "QR"],
      desc: "Member/trainer management with QR equipment tracking, real-time chat, and analytics.",
    },
    {
      title: "ADNOC Data Viz",
      category: "SaaS",
      tags: ["MERN", "Highcharts", "Mobx"],
      desc: "Full-stack data visualization applications for industrial data analysis and charting.",
    },
    {
      title: "FiveFarm Analytics",
      category: "SaaS",
      tags: ["MERN", "NFT R&D", "Docker", "Jenkins"],
      desc: "Chia management and analytics platform with NFT wallet integrations (Ronin).",
    },
    {
      title: "Fynite AI",
      category: "SaaS",
      tags: ["React", "Go", "Material UI"],
      desc: "Enterprise-grade dashboard and management platform built for scalability.",
    },

    {
      title: "AFI Aromatic Fragrances",
      category: "Web",
      tags: ["Laravel", "React", "SEO", "Industrial"],
      desc: "Modern industrial automation platform with dynamic product catalogs and role-based access.",
    },
    {
      title: "Fragrance University",
      category: "Web",
      tags: ["PHP Laravel", "React", "EdTech"],
      desc: "High-performance educational platform designed for smooth content delivery and user management.",
    },
    {
      title: "SeaSalt Immigration",
      category: "Web",
      tags: ["WordPress", "Elementor", "Legal"],
      desc: "Professional immigration services portal with a focus on UX and conversion.",
    },
    {
      title: "Ozean Reality",
      category: "Web",
      tags: ["WordPress", "Real Estate"],
      desc: "Luxury real estate platform with high-end property listings and lead generation.",
    },
    {
      title: "Cndea & Serene",
      category: "Web",
      tags: ["WordPress", "Design"],
      desc: "Stylish, responsive web presences for boutique brands and service providers.",
    }
  ];

  const categories = ["All", "AI", "Security", "SaaS", "Web"];
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 md:px-10 lg:px-20 bg-black text-white relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between md:items-end items-start mb-10 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-xs md:text-sm font-mono text-green-500 tracking-widest uppercase mb-3 md:mb-4">
              // Portfolio
            </h2>

            <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter italic leading-tight">
              20+ Major{" "}
              <span className="text-gray-500 not-italic">Deployments.</span>
            </h3>
          </div>

          {/* FILTER */}
          <div className="flex bg-neutral-900/50 p-1 rounded-full border border-white/5 backdrop-blur-md flex-wrap justify-start md:justify-center w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-green-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, borderColor: "rgba(34, 197, 94, 0.4)" }}
                className="group relative p-5 sm:p-6 md:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl md:rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <span className="text-[9px] sm:text-[10px] font-mono text-green-500 px-2 sm:px-3 py-1 border border-green-500/20 rounded-full uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="text-gray-600 group-hover:text-green-500 transition-colors text-sm">
                      ↗
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-4 md:mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 md:pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase tracking-tighter"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-12 md:mt-20 text-center text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
          End of Portfolio // Built by Usama Zeeshan
        </div>
      </div>
    </section>
  );
}
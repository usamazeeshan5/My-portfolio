import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Fullstackproject = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const projects = [
    { 
      title: "QTAP DISPATCH", 
      subtitle: "DASHBOARD", 
      tags: ["Full Stack", "Real-Time"], 
      description: "Transport management and real-time dispatch tracking system.", 
      link: "https://dashboard.qtap.qa/login" 
    },
    { 
      title: "AI VOICE AGENT", 
      subtitle: "BACKEND", 
      tags: ["Node.js", "WebSockets", "LLM"], 
      description: "Real-time telephony system using LLMs and WebSocket servers for AI voice conversations.", 
      link: "#" 
    },
    { 
      title: "KRONAXYS", 
      subtitle: "PLATFORM", 
      tags: ["Next.js", "GSAP"], 
      description: "Advanced digital ecosystem built for scale and performance.", 
      link: "https://kronaxys.com/" 
    },
    { 
      title: "THREAT MGMT", 
      subtitle: "GEOSPATIAL", 
      tags: ["FastAPI", "Electron", "PostgreSQL"], 
      description: "Intelligence and threat management platform with a cross-platform desktop application.", 
      link: "#" 
    },
    { 
      title: "EZ-SIGNATURE", 
      subtitle: "SECURITY", 
      tags: ["Supabase", "Auth"], 
      description: "Digital document signing system with Supabase backend.", 
      link: "http://ezsignature.org/" 
    },
    { 
      title: "AI CHAT PLATFORM", 
      subtitle: "SVELTE KIT", 
      tags: ["LangChain", "RAG", "Python"], 
      description: "Multi-model LLM assistant featuring RAG search and semantic queries.", 
      link: "#" 
    },
    { 
      title: "TABLE TRACKING", 
      subtitle: "LOGIC", 
      tags: ["Logic", "React"], 
      description: "Real-time table management and tracking project.", 
      link: "https://www.loom.com/share/b6273473dcfe4fbda985da78d1c9a1dc" 
    },
    { 
      title: "GYM SAAS", 
      subtitle: "MANAGEMENT", 
      tags: ["Next.js", "AWS S3", "Socket.io"], 
      description: "Complete fitness SaaS with member tracking and QR equipment management.", 
      link: "#" 
    },
    { 
      title: "CAR BOT", 
      subtitle: "API", 
      tags: ["API", "Automation"], 
      description: "Integration of automotive bot APIs.", 
      link: "https://www.loom.com/share/daa7181c3eca46668ce26b427d928ad8" 
    },
    { 
      title: "FIGMA TO NEXT.JS", 
      subtitle: "CONVERSION", 
      tags: ["UI/UX", "Next.js"], 
      description: "Pixel-perfect conversion of Figma designs.", 
      link: "https://www.loom.com/share/f1666986c455446399a058799999defe" 
    },
    { 
      title: "DISCOURSE SSO", 
      subtitle: "AUTH", 
      tags: ["SSO", "Security"], 
      description: "Custom SSO login integration.", 
      link: "https://www.loom.com/share/a928f2d09a6e4d3099e523d643de07d8" 
    },
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray('.project-panel');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${panels.length * 150}%`, 
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    tl.to(".portfolio-header", {
      y: -50,
      opacity: 0.5,
      duration: 0.5
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;
      
      tl.fromTo(panel, 
        { yPercent: 100 }, 
        { 
          yPercent: 0, 
          ease: "none",
          duration: 1 
        }
      ).to({}, { duration: 0.5 }); 
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="w-full bg-[#0a0a0a] h-screen overflow-hidden flex flex-col">
      
      <div className="portfolio-header w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-16 flex-shrink-0 z-50">
        <h3 className="text-emerald-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-2">Portfolio</h3>
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white">
          Full Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200">Projects</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative flex-grow w-full overflow-hidden">
        {projects.map((project, index) => (
          <section
            key={index}
            className="project-panel absolute inset-0 w-full h-full flex items-start justify-center px-4 md:px-10"
            style={{ zIndex: index + 1 }}
          >
            <div className="relative w-full max-w-[1300px] h-[85%] bg-[#1c1f23] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl mt-4">
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

              <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
                <h4 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-4">
                  {project.title} <br />
                  <span className="text-white/10">{project.subtitle}</span>
                </h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] uppercase text-emerald-400 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/5">
                  <p className="max-w-xl text-sm md:text-base text-white/40 leading-relaxed italic">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 bg-white text-black px-10 py-3.5 rounded-full font-bold transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95"
                  >
                    View Project <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Fullstackproject;
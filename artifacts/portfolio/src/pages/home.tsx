import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Terminal, Radio, Cpu, Workflow, ChevronRight, Server, Focus } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import aboutStudio from "@/assets/about-studio.png";

// --- Components ---

function NavBar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference"
    >
      <div className="font-mono text-xs tracking-widest text-primary flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        SYS.CTRL // K.V.
      </div>
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">Stack</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#contact" className="text-primary border border-primary/30 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all">Engage</a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12 xl:px-24">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <img src={heroBg} alt="Live event stage" className="w-full h-full object-cover mix-blend-screen opacity-50" />
      </motion.div>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">System Online</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] text-foreground"
        >
          ENGINEERING THE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            INVISIBLE MAGIC
          </span> <br/>
          OF LIVE EVENTS.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-light"
        >
          Audiovisual technology & creative applications for massive scale.
          Where code meets the arena.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 xl:right-24 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[10px] text-muted-foreground rotate-90 origin-right translate-x-3 translate-y-6">SCROLL</span>
        <div className="w-[1px] h-16 bg-muted relative overflow-hidden mt-8">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ top: ['-50%', '150%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

const projects = [
  {
    title: "LUMINA KINETIC",
    type: "Immersive Light Installation",
    image: project1,
    desc: "A 500-tube LED installation reacting in real-time to crowd movement via computer vision and custom node-based control software.",
    tech: ["TouchDesigner", "C++", "DMX/Art-Net", "OpenCV"]
  },
  {
    title: "NEXUS SUMMIT 2024",
    type: "Corporate Mainstage",
    image: project2,
    desc: "Data-driven generative visuals spanning a 120ft ultra-widescreen LED wall, synchronized with keynote speaker cues.",
    tech: ["Notch", "Unreal Engine", "OSC", "Resolume"]
  },
  {
    title: "BRUTALIST ECHOES",
    type: "Architectural Mapping",
    image: project3,
    desc: "Large-scale 3D projection mapping on urban architecture, exploring cyberpunk themes through optical illusions.",
    tech: ["MadMapper", "Cinema4D", "After Effects", "Node.js"]
  },
  {
    title: "SHOWKONTROL",
    type: "Custom Control Software",
    image: project4,
    desc: "Bespoke timeline and mixing software built for a world-touring DJ, unifying lighting, lasers, and video into a single interface.",
    tech: ["React", "Electron", "WebSockets", "MIDI"]
  }
];

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 xl:px-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> 01 // SELECTED_WORKS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Signal to Screen.</h3>
          </div>
          <p className="max-w-md text-muted-foreground text-sm">
            From low-level protocol engineering to massive front-of-house visual execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-muted">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap max-w-[80%]">
          {project.tech.map(t => (
            <span key={t} className="bg-background/80 backdrop-blur px-2 py-1 text-[10px] font-mono text-foreground border border-border/50">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">{project.type}</p>
          <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-sm">
            {project.desc}
          </p>
        </div>
        <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all shrink-0 mt-2">
          <ArrowDown className="w-4 h-4 -rotate-45" />
        </button>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 xl:px-24 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-12 flex items-center gap-2">
          <Cpu className="w-4 h-4" /> 02 // TECHNICAL_STACK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold">AV Systems & Routing</h3>
            <p className="text-muted-foreground text-sm">Designing robust, zero-latency networks for massive data streams.</p>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between border-b border-border/50 pb-2"><span>DMX / Art-Net</span><span className="text-primary">95%</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>OSC / MIDI</span><span className="text-primary">98%</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>NDI / Syphon / Spout</span><span className="text-primary">90%</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Dante / SMPTE</span><span className="text-primary">85%</span></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Real-time Generation</h3>
            <p className="text-muted-foreground text-sm">Creating performant, reactive visuals that run at 60fps+ under pressure.</p>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between border-b border-border/50 pb-2"><span>TouchDesigner</span><span className="text-primary">Expert</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Notch</span><span className="text-primary">Advanced</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Unreal Engine</span><span className="text-primary">Intermediate</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Resolume Arena</span><span className="text-primary">Expert</span></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Creative Coding</h3>
            <p className="text-muted-foreground text-sm">Building custom tools, interfaces, and bridges when off-the-shelf fails.</p>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Node.js / React</span><span className="text-primary">Advanced</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>C++ / openFrameworks</span><span className="text-primary">Intermediate</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>Python</span><span className="text-primary">Intermediate</span></li>
              <li className="flex justify-between border-b border-border/50 pb-2"><span>GLSL / Shaders</span><span className="text-primary">Advanced</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Interactive System Design",
      desc: "Architecting the logic and physical layout for sensors, cameras, and triggers that allow crowds to manipulate their environment in real-time."
    },
    {
      title: "Generative Content Creation",
      desc: "Programming data-driven visual content using TouchDesigner and Notch that reacts dynamically to music, data feeds, or environment."
    },
    {
      title: "Custom Show Control",
      desc: "Developing bespoke software (React/Electron/Node) to unify disparate hardware into a single intuitive UI for front-of-house operators."
    },
    {
      title: "Technical Direction",
      desc: "Overseeing the technical execution of massive AV deployments, ensuring networking, power, and signal flow perform flawlessly under pressure."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 xl:px-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-12 flex items-center gap-2">
          <Server className="w-4 h-4" /> 03 // CORE_SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-border/50 bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <div className="mb-6 w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Focus className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 xl:px-24 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] bg-muted overflow-hidden"
        >
          <img src={aboutStudio} alt="AV Control Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-primary/20 mix-blend-overlay" />
          
          {/* Tech overlay decorations */}
          <div className="absolute top-4 right-4 text-primary font-mono text-[10px] text-right">
            REC: 00:14:59:23 <br/>
            BITRATE: 50MBPS
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground">
            STUDIO_B // LA
          </div>
        </motion.div>

        <div>
          <h2 className="text-sm font-mono text-primary mb-6 flex items-center gap-2">
            <Radio className="w-4 h-4" /> 04 // PHILOSOPHY
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The best technology is felt, not seen.
          </h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I sit at the intersection of rigorous systems engineering and creative expression. In the live event space, there are no second takes. The code must compile, the packets must route, and the lights must hit exactly on the downbeat.
            </p>
            <p>
              For over a decade, I've designed control systems for arena tours, programmed generative visuals for Fortune 500 summits, and built bespoke interactive applications that bridge the physical and digital worlds.
            </p>
            <p>
              I don't just push buttons; I build the software that controls the buttons. When off-the-shelf software limits the creative vision, I write custom node apps, scripts, and shaders to force the technology to bend to the art.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-border grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-xs font-mono text-muted-foreground uppercase">Years Active</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-xs font-mono text-muted-foreground uppercase">Live Shows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 xl:px-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background noise on contact section */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-sm font-mono text-primary-foreground/70 mb-12 flex items-center gap-2">
          <Workflow className="w-4 h-4" /> 05 // INITIATE_SEQUENCE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              READY TO <br/>GO LIVE.
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-md mb-12">
              Available for technical direction, custom software development, and generative visual design.
            </p>
            
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-4 text-xl font-bold border-b-2 border-primary-foreground pb-2 hover:gap-6 transition-all"
            >
              TRANSMIT MESSAGE <ChevronRight className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <div className="space-y-4 font-mono text-sm text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/20 pb-4">
                <span>LOCATION</span>
                <span className="text-primary-foreground">LOS ANGELES / GLOBAL</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/20 pb-4">
                <span>STATUS</span>
                <span className="text-primary-foreground">ACCEPTING Q3 BOOKINGS</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/20 pb-4">
                <span>COMM</span>
                <span className="text-primary-foreground">+1 (555) 019-8472</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 xl:px-24 bg-background border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
      <div>© {new Date().getFullYear()} SYS.CTRL. ALL RIGHTS RESERVED.</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
        <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
        <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground bg-noise">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

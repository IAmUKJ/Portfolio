import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Award, Briefcase, GraduationCap, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      name: "LifeLong",
      description: "AI-Powered Patient doctor connect platform.",
      tech: ["React","Vite","MongodB","Redis","TailwindCSS","Material-UI","Framer Motion","Node.js","Express.js","Razorpay"],
      features: [
        "Built a Doctor-Patient connect portal , patient can cannect to doctors and can chat with the doctors.",
        "There is an AI-Health Assistant , patient can asks anything by telling their symptoms.",
        "Integrated Razorpay Payment Gateway for platform fee.",
        "Integrated redis for caching.",
        "Implement JWT Authentication using cookies."
      ],
      link: "https://lifelong-1.netlify.app/"
    },
    {
      name: "SpeakUp",
      description: "AI-Powered Speech Practice Platform using WebRTC and real-time feedback through AI-driven analysis",
      tech: ["React", "Material UI", "Framer Motion", "Node.js", "Express.js"],
      features: [
        "React-based web app helping speech and language-impaired children",
        "Role-based dashboards with real-time progress tracking",
        "Interactive games using Framer Motion and Recharts",
        "Whisper API integration for speech analysis"
      ],
      link: "https://rococo-cobbler-2ce0a4.netlify.app/dashboard"
    },
    {
      name: "Chatly",
      description: "Real-time chat application with 1:1 conversations and live typing indicators",
      tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      features: [
        "Full-stack real-time messaging with Socket.io",
        "JWT authentication and cookie-based sessions",
        "Cloudinary integration for image uploads",
        "Cross-device compatibility with responsive design"
      ],
      link: "https://chatly-1-xv0u.onrender.com/"
    },
    {
      name: "Institute Management System (Currently working to integrate payment for fees)",
      description: "Developed for my father's coaching institute with all my love",
      tech: [ "React.js", "Vite", "nodemailer", "Tailwind CSS", "React Router", "node.js", "express.js", "mongodb"],
      features: [
        "Developed a modern webapplication for managing admission of students , create courses and implement attendance portal system and uploading class materials for students.",
        "Workfor demoaccount for teacher portal : admin@gmail.com password: admin",
        "Includes features like book CRUD, user records, and dashboard analytics",
      ],
      link: "https://coaching-manage-webapp.netlify.app/"
    },
    {
      name: "Imagify",
      description: "Developed a text to image generator",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Clipdrop API"],
      features: [
        "Implemented JWT-based user authentication using cookies.",
        "Integrated razorpay payment gateway for subscription. ",
        "Integrated Clipdrop API for image generation. "
      ],
      link: "https://text2imagegenerator-1.onrender.com/"
    },
    {
      name: "NPTEL Preparation App",
      description: "Built for college students to ace their NPTEL exam preparations",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Developed a modern web application for student to ace their nptel preparation by attempting quizzes and analysing their scores and get access of various lectures, transcripts and nptel books.",
        "Developed a user friendly , modern and impressive catchy ui for users",
      ],
      link: "https://ukj-prep4nptel.netlify.app/"
    }
  ];

  const skills = {
    "Languages": ["C++", "JavaScript"],
    "Web Development": ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    "Libraries/Frameworks": ["React.js", "Node.js", "Express.js"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["GitHub", "VS Code", "Netlify", "Vercel", "Render", "Postman", "Thunderclient"]
  };

  const achievements = [
    {
      title: "Siemens Code Connect Hackathon",
      description: "Top 5 team out of 451 teams",
      icon: Award
    },
    {
      title: "Hacktoberfest 2025",
      description: "Successfully merged 6PR(pull requests).",
      icon: Award
    },
    {
      title: "Highest Leetcode Rating",
      description: "Rating of 1834",
      icon: Code
    },
    {
      title: "JEE Mains Success",
      description: "AIR 17605 in top 1.5%",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1F1F1F] to-[#121212] text-[#EDEDED]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#121212]/95 backdrop-blur-md z-50 border-b border-[#F8D210]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
              UKJ
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-[#F8D210] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1F1F1F]/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 hover:bg-[#F8D210]/20 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F8D210] via-[#FFA500] to-[#F8D210] bg-clip-text text-transparent animate-pulse">
              Utkarsh Kumar Jha
            </h1>
            <p className="text-xl md:text-2xl text-[#F8D210] mb-4">
              MERN Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto">
              Building innovative web applications with cutting-edge technologies. 
              Specialized in full-stack development with a passion for algorithms and data structures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://github.com/IAmUKJ" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-[#F8D210] hover:bg-[#FFA500] text-[#121212] font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/utkarsh-kumar-jha-59a44b239/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#F8D210] hover:text-[#121212] border border-[#F8D210] px-6 py-3 rounded-full transition-all hover:scale-105">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/Ukj1976/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#F8D210] hover:text-[#121212] border border-[#F8D210] px-6 py-3 rounded-full transition-all hover:scale-105">
                <Code size={20} />
                LeetCode
              </a>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={40} className="text-[#F8D210]" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:shadow-lg hover:shadow-[#F8D210]/20">
              <GraduationCap className="text-[#F8D210] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-[#F8D210]">B.Tech (Computer Science)</p>
                  <p className="text-[#EDEDED]">Netaji Subhas University of Technology</p>
                  <p className="text-[#EDEDED]/60">2023-2027 | CGPA: 7.62</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#F8D210]">CBSE (Class XII)</p>
                  <p className="text-[#EDEDED]">Shri Daulat Ram Public Sr. Sec. School</p>
                  <p className="text-[#EDEDED]/60">2021-22 | 89.60%</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:shadow-lg hover:shadow-[#F8D210]/20">
              <Briefcase className="text-[#F8D210] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div>
                <p className="text-lg font-semibold text-[#F8D210]">Volunteer | NSS</p>
                <p className="text-[#EDEDED]/60 mb-2">August 2023 - November 2024</p>
                <p className="text-[#EDEDED]">
                  Volunteered under NSS certificate, contributing to plantation drives, health and hygiene campaigns, 
                  and community outreach programs focused on sustainability and social welfare.
                </p>
              </div>
            </div>
          </div>
          <div className={`mt-8 bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 transition-all duration-1000 delay-200 hover:shadow-lg hover:shadow-[#F8D210]/20 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Mail className="text-[#F8D210] mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex flex-wrap gap-6 text-[#EDEDED]">
              <a href="mailto:iamukj013@gmail.com" className="flex items-center gap-2 hover:text-[#F8D210] transition-colors">
                <Mail size={20} />
                iamukj013@gmail.com
              </a>
              <a href="tel:+918368885301" className="flex items-center gap-2 hover:text-[#F8D210] transition-colors">
                <Phone size={20} />
                +91-8368885301
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className={`bg-[#1F1F1F]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#F8D210]/20 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-[#F8D210]">{project.name}</h3>
                <p className="text-[#EDEDED] mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#F8D210] mb-2">Key Features:</p>
                  <ul className="text-sm text-[#EDEDED] space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F8D210] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-[#F8D210]/20 px-3 py-1 rounded-full text-[#F8D210]">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F8D210] hover:text-[#FFA500] transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={idx}
                className="bg-[#1F1F1F]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8D210]/20"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#F8D210]">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-[#F8D210]/20 px-3 py-1 rounded-full text-sm text-[#EDEDED]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {achievements.map((achievement, idx) => (
              <div 
                key={idx}
                className="bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8D210]/20 text-center"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <achievement.icon className="text-[#F8D210] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-[#F8D210]">{achievement.title}</h3>
                <p className="text-[#EDEDED]">{achievement.description}</p>
              </div>
            ))}
          </div>
          <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${isVisible.achievements ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[#EDEDED] mb-4">Participated in various hackathons including:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#F8D210]/20 px-4 py-2 rounded-full text-[#F8D210]">Vihaan (DTU)</span>
              <span className="bg-[#F8D210]/20 px-4 py-2 rounded-full text-[#F8D210]">Tatsam-Decode (Intercollege)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#F8D210] to-[#FFA500] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-[#EDEDED] mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <a 
              href="mailto:iamukj013@gmail.com"
              className="bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8D210]/20 flex flex-col items-center gap-4"
            >
              <Mail className="text-[#F8D210]" size={48} />
              <div>
                <p className="font-semibold text-[#F8D210]">Email</p>
                <p className="text-[#EDEDED]">iamukj013@gmail.com</p>
              </div>
            </a>
            <a 
              href="tel:+918368885301"
              className="bg-[#1F1F1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F8D210]/20 hover:border-[#F8D210]/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8D210]/20 flex flex-col items-center gap-4"
            >
              <Phone className="text-[#F8D210]" size={48} />
              <div>
                <p className="font-semibold text-[#F8D210]">Phone</p>
                <p className="text-[#EDEDED]">+91-8368885301</p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/IAmUKJ" target="_blank" rel="noopener noreferrer"
               className="text-[#EDEDED] hover:text-[#F8D210] transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/utkarsh-kumar-jha-59a44b239/" target="_blank" rel="noopener noreferrer"
               className="text-[#EDEDED] hover:text-[#F8D210] transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://leetcode.com/u/Ukj1976/" target="_blank" rel="noopener noreferrer"
                className="text-[#EDEDED] hover:text-[#F8D210] transition-colors">
              <Code size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212]/80 backdrop-blur-sm border-t border-[#F8D210]/20 py-8 text-center">
        <p className="text-[#EDEDED]/60">
          © 2024 Utkarsh Kumar Jha. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
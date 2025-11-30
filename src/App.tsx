import {
  ChevronDown,
  Code,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
  User
} from 'lucide-react';
import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { SectionWrapper } from './components/SectionWrapper';
import { SkillCard } from './components/SkillCard';
import { SocialLink } from './components/SocialLink';
import { StatCard } from './components/StatCard';
import { PORTFOLIO_DATA } from "./data";
import { useParallax } from './hooks/useParallax';

/**
 * MAIN COMPONENT
 */
export default function Portfolio() {
  const [lang, setLang] = useState('en'); // 'en' or 'id'
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollY = useParallax(0.2);
  const bgScrollY = useParallax(0.1);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Sections Refs
  const sections = {
    home: 'home',
    about: 'about',
    experience: 'experience',
    skills: 'skills',
    contact: 'contact'
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const t = (path) => {
    if (path === 'nav') return PORTFOLIO_DATA.nav[lang];
    return null;
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-teal-500 selection:text-white overflow-hidden relative transition-colors duration-500">
        
        {/* Dynamic Background */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-30 transition-opacity duration-500"
          style={{ transform: `translateY(${bgScrollY}px)` }}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/20 dark:bg-teal-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="fixed inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none transition-opacity duration-500" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => scrollTo('home')}>
              <Code className="text-teal-600 dark:text-teal-400" />
              <span>yudimy<span className="text-teal-600 dark:text-teal-400">.id</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {Object.keys(sections).map((key, index) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize ${activeSection === key ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  {t('nav')[index]}
                </button>
              ))}
              
              <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2"></div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Lang Switcher */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700">
                <Globe size={14} className="text-slate-500 dark:text-slate-400" />
                <button 
                  onClick={() => setLang('en')} 
                  className={`text-xs ${lang === 'en' ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                >
                  EN
                </button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button 
                  onClick={() => setLang('id')} 
                  className={`text-xs ${lang === 'id' ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                >
                  ID
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="text-slate-800 dark:text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 absolute w-full p-4 flex flex-col gap-4 shadow-xl">
               {Object.keys(sections).map((key, index) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 capitalize py-2 font-medium"
                >
                  {t('nav')[index]}
                </button>
              ))}
               <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={lang === 'en' ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-500'}>English</button>
                  <button onClick={() => { setLang('id'); setIsMenuOpen(false); }} className={lang === 'id' ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-500'}>Indonesia</button>
               </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center min-h-screen">
          <div className="z-10 text-center max-w-3xl" style={{ transform: `translateY(${scrollY * -0.5}px)` }}>
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-6 animate-pulse">
              <img 
                src="/api/placeholder/150/150" 
                alt="Profile" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-50 dark:border-slate-900 object-cover"
                onError={(e) => {
                   e.target.onerror = null; 
                   e.target.parentNode.innerHTML = '<div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-3xl">👨‍💻</div>';
                }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 font-mono mb-8 transition-colors">
              {PORTFOLIO_DATA.personal.title}
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 bg-teal-500 dark:bg-teal-500 text-white dark:text-slate-900 font-bold rounded-full hover:bg-teal-600 dark:hover:bg-teal-400 transition-all hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                {lang === 'en' ? 'Hire Me' : 'Rekrut Saya'}
              </button>
              <button 
                onClick={() => scrollTo('experience')}
                className="px-8 py-3 bg-transparent border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              >
                {lang === 'en' ? 'View Work' : 'Lihat Karya'}
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600">
            <ChevronDown />
          </div>
        </section>

        {/* About Section */}
        <SectionWrapper id="about">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20 transform rotate-3"></div>
              <Card className="relative h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                  <User className="text-teal-600 dark:text-teal-400" />
                  {lang === 'en' ? 'About Me' : 'Tentang Saya'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {PORTFOLIO_DATA.summary[lang]}
                </p>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <StatCard number="6+" label={lang === 'en' ? 'Years Exp' : 'Tahun Pengalaman'} />
               <StatCard number="10+" label={lang === 'en' ? 'Projects' : 'Proyek'} />
               <StatCard number="100%" label={lang === 'en' ? 'Commitment' : 'Komitmen'} />
               <StatCard number="24/7" label={lang === 'en' ? 'Support' : 'Dukungan'} />
            </div>
          </div>
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper id="experience" title={lang === 'en' ? 'Work Experience' : 'Pengalaman Kerja'}>
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700/50 hidden md:block"></div>

            {PORTFOLIO_DATA.experience.map((job, idx) => (
              <div key={job.id} className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1"></div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-teal-500 items-center justify-center z-10">
                   <div className="w-2 h-2 bg-slate-800 dark:bg-white rounded-full"></div>
                </div>

                <div className="flex-1">
                  <Card className="group hover:-translate-y-1 transition-transform">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-500 font-medium">{job.company}</p>
                      </div>
                      <div className="text-xs font-mono py-1 px-2 bg-slate-200 dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700 w-fit text-slate-700 dark:text-slate-400">
                        {job.period}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.description[lang].map((desc, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm">
                          <span className="text-teal-600 dark:text-teal-500 mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={12} /> {job.location}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" title={lang === 'en' ? 'Technical Skills' : 'Keahlian Teknis'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper id="education" title={lang === 'en' ? 'Education' : 'Pendidikan'}>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu) => (
              <Card key={edu.id} className="flex items-start gap-4">
                 <div className="p-3 bg-teal-100 dark:bg-teal-500/10 rounded-lg">
                   <GraduationCap className="text-teal-600 dark:text-teal-400" size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-800 dark:text-white">{edu.school}</h4>
                   <p className="text-teal-600 dark:text-teal-400 mb-1">{edu.degree}</p>
                   <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                     <span>{edu.period}</span>
                   </div>
                   <p className="text-sm text-slate-500 italic">{edu.details}</p>
                 </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" title={lang === 'en' ? 'Get In Touch' : 'Hubungi Saya'}>
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 md:p-12">
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                {lang === 'en' 
                  ? "Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." 
                  : "Tertarik bekerja sama? Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda."}
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-3 px-6 py-4 bg-slate-100 dark:bg-slate-900 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-500/10 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors border border-slate-200 dark:border-slate-700 w-full md:w-auto">
                  <Mail size={20} />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </a>
                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="flex items-center gap-3 px-6 py-4 bg-slate-100 dark:bg-slate-900 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-500/10 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors border border-slate-200 dark:border-slate-700 w-full md:w-auto">
                  <Phone size={20} />
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                </a>
              </div>

              <div className="flex justify-center gap-6">
                 <SocialLink href={PORTFOLIO_DATA.personal.social.github} icon={<Github />} />
                 <SocialLink href={PORTFOLIO_DATA.personal.social.linkedin} icon={<Linkedin />} />
              </div>
              
              <p className="mt-8 text-sm text-slate-500">
                 <MapPin className="inline-block mr-1" size={14} /> {PORTFOLIO_DATA.personal.location}
              </p>
            </Card>
          </div>
        </SectionWrapper>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 transition-colors">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <p className="mt-2">Built with React, Rsbuild & Tailwind CSS</p>
        </footer>

      </div>
    </div>
  );
}
import Navigation from '@/components/Navigation';
import { PixelCard } from '@/components/PixelCard';
import { Github, Linkedin, Mail, ExternalLink, Code, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(/lovable-uploads/6a2a7baa-b45f-43b1-987a-1dc481c1f085.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />
      
      <Navigation />
      
      <div className="relative z-10 px-4 md:px-8 lg:px-16 md:pl-24 lg:pl-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-pixel-cyan pixel-glow pixel-flicker mb-4">
              DHAIRYA
            </h1>
            <p className="text-2xl md:text-3xl text-pixel-yellow pixel-glow font-bold">
              Software Engineer
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/DhairyaDutt" target="_blank" className="text-pixel-cyan hover:text-pixel-cyan/80 transition-colors">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/dhairya-dutt/" target="_blank" className="text-pixel-cyan hover:text-pixel-cyan/80 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="dd8053@g.rit.edu" className="text-pixel-cyan hover:text-pixel-cyan/80 transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <PixelCard variant="terminal" className="pixel-float no-controls h-full">
                <div className="mt-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pixel-cyan to-pixel-purple rounded-lg flex items-center justify-center">
                    <div className="w-28 h-28 bg-card rounded-lg flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                  </div>
                  <div className="text-terminal-text">
                    <div className="mb-2">$ whoami</div>
                    <div className="mb-4 text-pixel-green">dhairya@portfolio:~$</div>
                    <div className="text-foreground">
                      A passionate Software Engineer and a problem-solver who graduated with a master's degree in Information Technology and Analytics with a solid GPA of 4.0.
                    </div>
                  </div>
                </div>
              </PixelCard>
              
              <PixelCard variant="glow" className="h-full">
                <h3 className="text-xl font-bold text-pixel-yellow mb-4">Technical Skills</h3>

                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pixel-yellow rounded-full"></span>
                  <span className="text-muted-foreground">Fundamentals: DSA, DBMS, OS, OOPs, System Design</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-pixel-green rounded-full"></span>
                    <span className="text-muted-foreground">Languages: C++, MySQL, Java, Python, Javascript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-pixel-cyan rounded-full"></span>
                    <span className="text-muted-foreground">Web Development and Analysis: React, Figma, Looker Studio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-pixel-cyan rounded-full"></span>
                    <span className="text-muted-foreground">Machine Learning & AI: Selenium, NLP, GPT API</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-pixel-purple rounded-full"></span>
                    <span className="text-muted-foreground">Cloud Computing & DevOps: BigQuery, Github</span>
                  </div>
                  
                </div>
              </PixelCard>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              Education
            </h2>
            <div className="space-y-8">
              <PixelCard variant="project" className="pixel-float">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-pixel-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pixel-yellow">Master of Science</h3>
                    <p className="text-pixel-cyan">Information Technology and Analytics</p>
                    <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>August 2023 - May 2025</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>Rochester Institute of Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PixelCard>

              <PixelCard variant="project" className="pixel-float">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-pixel-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pixel-yellow">Bachelor of Science</h3>
                    <p className="text-pixel-cyan">ECE + CS</p>
                    <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>June 2019 - June 2023</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>Nirma University</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Web App",
                  description: "A machine learning platform with real-time predictions and interactive visualizations.",
                  tech: ["React", "Python", "TensorFlow"],
                  color: "pixel-cyan"
                },
                {
                  title: "Blockchain Voting System",
                  description: "Secure and transparent voting platform built on Ethereum with smart contracts.",
                  tech: ["Solidity", "Web3.js", "Node.js"],
                  color: "pixel-purple"
                },
                {
                  title: "Cloud-Native Microservices",
                  description: "Scalable microservices architecture deployed on Kubernetes with CI/CD pipeline.",
                  tech: ["Docker", "Kubernetes", "Go"],
                  color: "pixel-green"
                },
                {
                  title: "Real-time Chat Platform",
                  description: "High-performance chat application with WebSocket connections and message encryption.",
                  tech: ["Socket.io", "Redis", "MongoDB"],
                  color: "pixel-yellow"
                }
              ].map((project, index) => (
                <PixelCard key={index} variant="project" className="pixel-float">
                  <div className={`w-full h-32 bg-${project.color}/20 border border-${project.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Code size={48} className={`text-${project.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-pixel-yellow mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 text-pixel-cyan hover:text-pixel-cyan/80 transition-colors">
                      <Code size={16} />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center space-x-1 text-pixel-green hover:text-pixel-green/80 transition-colors">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </PixelCard>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pixel-cyan"></div>
              <div className="space-y-12">
                {[
                  {
                    company: "D360",
                    role: "Software Engineering Intern",
                    duration: "Jan 2023 - May 2023",
                    description: "Accomplished efficient search and filtering of diamonds as measured by 65% quick rendering of over 1 million diamonds by applying indexing and pagination while developing a full-stack React app from scratch in 3 months."
                  },
                  {
                    company: "einfochips",
                    role: "Software Engineering Intern", 
                    duration: "June 2022 - August 2022",
                    description: "Automated the email-sending functionality to employees, which reduced 25+ hours per month and manual repetitive work of the employers. Built a GUI for the email-sending feature, now used by over 200+ faculties."
                  },
                  {
                    company: "TechTable",
                    role: "Software Engineering Intern",
                    duration: "March 2021 - August 2021", 
                    description: "Made 5 front-end pages on a professional website for a client and satisfying the client’s need called “Teenr”. Contributed to the ”My team” section of the firm’s official website, consisting of 20+ team members using CSS styling."
                  }
                ].map((exp, index) => (
                  <PixelCard key={index} variant="terminal" className="ml-16 pixel-float no-controls">
                    <div className="absolute -left-20 top-8 w-4 h-4 bg-pixel-cyan rounded-full"></div>
                    <h3 className="text-xl font-bold text-pixel-yellow">{exp.role}</h3>
                    <p className="text-pixel-cyan font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground mb-3">{exp.duration}</p>
                    <p className="text-foreground">{exp.description}</p>
                  </PixelCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              Publications
            </h2>
            <div className="flex justify-center">
              <PixelCard variant="glow" className="max-w-2xl pixel-float">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-pixel-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pixel-yellow mb-2">
                      "Development and Testing of Automation Tools using Python "
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Published in International Journal of Advances in Soft Computing and Intelligent Systems
                    </p>
                    <button className="flex items-center space-x-2 text-pixel-cyan hover:text-pixel-cyan/80 transition-colors">
                      <a
                        href="https://sciencetransactions.com/index.php/ijascis/article/view/50/45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-pixel-cyan hover:text-pixel-cyan/80 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Read Paper</span>
                      </a>

                      {/* <ExternalLink size={16} />
                      <span>Read Paper</span> */}
                    </button>
                  </div>
                </div>
              </PixelCard>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12 text-center">
              Hobbies & Interests
            </h2>
            <PixelCard variant="terminal" className="pixel-float no-controls">
              <div className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  {[
                    { icon: "🎮", label: "Gaming", color: "pixel-cyan" },
                    { icon: "📚", label: "Reading", color: "pixel-green" },
                    { icon: "💪", label: "Fitness", color: "pixel-orange" },
                    { icon: "🎵", label: "Music", color: "pixel-purple" }
                  ].map((hobby, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 bg-${hobby.color}/20 border border-${hobby.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-2xl`}>
                        {hobby.icon}
                      </div>
                      <p className="text-foreground">{hobby.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-foreground text-center">
                  When I'm not coding, you'll find me exploring new games, diving into tech books, 
                  hitting the gym, or discovering new music. I believe in maintaining a balanced 
                  lifestyle that fuels creativity and keeps me motivated in my professional work.
                </p>
              </div>
            </PixelCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pixel-cyan pixel-glow-subtle mb-12">
              Get In Touch
            </h2>
            <PixelCard variant="default" className="pixel-float">
              <p className="text-xl text-foreground mb-8">
                Let's build something amazing together! Whether you have a project in mind 
                or just want to chat about technology, I'd love to hear from you.
              </p>
              <div className="flex justify-center space-x-8">
                <a 
                  href="mailto:dhairyadut2022@gmail.com" 
                  className="flex flex-col items-center space-y-2 text-pixel-cyan hover:text-pixel-cyan/80 transition-colors"
                >
                  <div className="w-16 h-16 bg-pixel-cyan/20 border border-pixel-cyan rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <span>Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/dhairya-dutt/" 
                  className="flex flex-col items-center space-y-2 text-pixel-purple hover:text-pixel-purple/80 transition-colors"
                >
                  <div className="w-16 h-16 bg-pixel-purple/20 border border-pixel-purple rounded-lg flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/DhairyaDutt" 
                  className="flex flex-col items-center space-y-2 text-pixel-green hover:text-pixel-green/80 transition-colors"
                >
                  <div className="w-16 h-16 bg-pixel-green/20 border border-pixel-green rounded-lg flex items-center justify-center">
                    <Github size={24} />
                  </div>
                  <span>GitHub</span>
                </a>
              </div>
            </PixelCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
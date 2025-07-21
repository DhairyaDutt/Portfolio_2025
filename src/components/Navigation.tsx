import { useState } from 'react';
import { Menu, X, Home, User, GraduationCap, Code, Briefcase, BookOpen, Heart, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'publications', icon: BookOpen, label: 'Publications' },
    { id: 'hobbies', icon: Heart, label: 'Hobbies' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 pixel-button md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative p-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              title={item.label}
            >
              <item.icon size={20} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-card text-card-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 bg-card border-l border-border p-4">
            <div className="mt-16 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full p-3 text-left hover:bg-muted rounded-lg transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
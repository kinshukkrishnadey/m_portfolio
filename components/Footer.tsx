import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/elenarose_model', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/elenarose_model', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/elenarose', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl tracking-wider mb-4">Sup Zan</h3>
            <p className="text-background/80 leading-relaxed">
              Professional model bringing elegance and sophistication to every project. 
              Based in West Bengal, available now in UAE.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-background/80 hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg tracking-wide mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Sup Zan. All rights reserved. | Professional Model Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
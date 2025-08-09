import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Shudhanshu9122',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/shudhanshukumar',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:shudhanshukumar112003@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-2xl text-glow mb-2 cursor-pointer"
            >
              SK
            </motion.button>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-smooth"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with 
              <Heart size={14} className="mx-1 text-red-500 fill-red-500" />
              by Shudhanshu Kumar
            </p>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
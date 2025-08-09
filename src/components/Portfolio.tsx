import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'GatePrePortal',
      category: 'Web',
      description: 'A comprehensive competitive exam mock test platform built with modern web technologies.',
      longDescription: 'Advanced mock test platform for competitive exams featuring real-time scoring, detailed analytics, and adaptive question difficulty. Built with React and Supabase for seamless user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Fashion Designer Platform',
      category: 'Web',
      description: 'Real-time 3D clothing customization platform with interactive design tools.',
      longDescription: 'Revolutionary fashion platform enabling real-time 3D clothing customization with advanced visualization, material selection, and collaborative design features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'FitPhysique',
      category: 'Web',
      description: 'Modern gym and fitness website with interactive features and smooth animations.',
      longDescription: 'Comprehensive fitness platform featuring workout tracking, nutrition planning, and community features with smooth animations and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ScrollReveal', 'Swiper.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'AI Disaster Predictor',
      category: 'Open Source',
      description: 'Machine learning model for natural disaster prediction and early warning systems.',
      longDescription: 'Advanced AI system for predicting natural disasters using machine learning algorithms and real-time data analysis for early warning systems.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Portfolio Design System',
      category: 'UI-UX',
      description: 'Modern design system with reusable components and consistent branding.',
      longDescription: 'Comprehensive design system featuring modern UI components, consistent typography, and accessible color schemes for web applications.',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'CSS3', 'Tailwind CSS', 'Storybook'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Open Source Tools',
      category: 'Open Source',
      description: 'Collection of developer tools and utilities for the open-source community.',
      longDescription: 'Various open-source tools and utilities designed to improve developer productivity and community collaboration.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'Node.js', 'CLI Tools', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filters = ['All', 'Web', 'Open Source', 'UI-UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative projects and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`transition-smooth ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Filter size={14} className="mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeFilter}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              layout
            >
              <Card className={`overflow-hidden card-gradient border-border/50 hover:border-primary/30 transition-smooth group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}>
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} h-full`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Preview Coming Soon</p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border border-white/30"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm border border-white/30"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.featured ? project.longDescription : project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 rounded bg-muted/50 text-xs text-muted-foreground border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/Shudhanshu9122" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
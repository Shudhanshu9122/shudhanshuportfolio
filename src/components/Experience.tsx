import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'ISET Club, SRM University',
      location: 'Chennai, India',
      period: '2023 - Present',
      type: 'Technical Member',
      description: [
        'Developed AI/ML-based projects focusing on natural disaster prediction systems',
        'Collaborated with IIT experts in conducting technical workshops and seminars',
        'Optimized full-stack applications resulting in 40% improved performance',
        'Led team initiatives for implementing machine learning solutions in real-world scenarios',
      ],
      technologies: ['React.js', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
    },
    {
      title: 'Open Source Contributor',
      company: 'Connect India 2025 Initiative',
      location: 'Remote',
      period: '2025 - Present',
      type: 'Contributor',
      description: [
        'Built scalable development tools and utilities for the open-source community',
        'Collaborated with developers worldwide on accessibility improvements',
        'Conducted comprehensive code reviews and technical documentation',
        'Engaged in mentoring new contributors and promoting best practices',
      ],
      technologies: ['JavaScript', 'TypeScript', 'React', 'Git', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and contributing to meaningful projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-smooth">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Briefcase size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs mt-2">
                        {experience.type}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Paintbrush, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'End-to-end development of scalable web applications using modern technologies like React, Node.js, and cloud deployment.',
      features: [
        'Responsive Design',
        'RESTful APIs',
        'Database Integration',
        'Performance Optimization',
        'Cloud Deployment',
      ],
      color: 'from-primary to-primary-glow',
    },
    {
      icon: Paintbrush,
      title: 'Custom UI/UX Design',
      description: 'Creating visually appealing and user-friendly interfaces that provide exceptional user experiences across all devices.',
      features: [
        'Modern Design Systems',
        'Interactive Animations',
        'Mobile-First Approach',
        'Accessibility Standards',
        'User Research',
      ],
      color: 'from-accent to-secondary',
    },
    {
      icon: GitBranch,
      title: 'Open Source Collaboration',
      description: 'Contributing to community-driven development projects and building tools that solve real-world problems.',
      features: [
        'Code Reviews',
        'Documentation',
        'Community Engagement',
        'Best Practices',
        'Mentoring',
      ],
      color: 'from-secondary to-secondary-glow',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into digital solutions with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-smooth h-full group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-smooth`}>
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your project to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold neon-glow transition-bounce"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
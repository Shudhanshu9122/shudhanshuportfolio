import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      year: '2024 - 2028',
      degree: 'B.Tech in AI & ML',
      institution: 'SRM University',
      status: 'Expected 2028',
    },
    {
      year: '2024',
      degree: 'Class 12',
      institution: 'Swarajaya School, Alwar',
      status: 'Completed',
    },
    {
      year: '2022',
      degree: 'Class 10',
      institution: 'Cambridge School, Buxar',
      status: 'Completed',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey in technology and passion for innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate second-year Computer Science Engineering student specializing in 
                AI & ML at SRM University. With 1.5 years of hands-on experience in full-stack 
                development, I've built dynamic, user-centric web applications that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in technology began with a curiosity about how software can transform lives. 
                Today, I'm deeply involved in cutting-edge AI and ML projects, constantly exploring 
                new frameworks and contributing to open-source initiatives that make a difference.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me staying updated with the latest tech trends, 
                collaborating with fellow developers, or working on innovative solutions that bridge 
                the gap between complex technology and everyday needs.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 card-gradient border-border/50">
              <h3 className="text-2xl font-display font-bold mb-8 text-center">
                Educational <span className="text-primary">Journey</span>
              </h3>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <GraduationCap size={20} className="text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-sm font-medium text-primary">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-1">{item.degree}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                        <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
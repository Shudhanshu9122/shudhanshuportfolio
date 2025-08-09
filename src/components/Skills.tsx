import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, GitBranch, Brain, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Full Stack Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST API', level: 88 },
      ],
      color: 'from-primary to-primary-glow',
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'UI/UX Design', level: 82 },
      ],
      color: 'from-accent to-secondary',
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'API Development', level: 85 },
        { name: 'Database Management', level: 80 },
        { name: 'Authentication', level: 83 },
        { name: 'Cloud Deployment', level: 78 },
        { name: 'Server Management', level: 75 },
      ],
      color: 'from-secondary to-secondary-glow',
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 72 },
        { name: 'Linux', level: 75 },
      ],
      color: 'from-primary to-accent',
    },
  ];

  const additionalSkills = [
    { name: 'Open Source Contribution', icon: GitBranch },
    { name: 'Problem Solving & Innovation', icon: Brain },
    { name: 'Team Leadership', icon: Zap },
    { name: 'Technical Writing', icon: Code },
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across the full stack of modern web development
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-smooth h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-8">
            Additional <span className="text-primary">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-smooth cursor-pointer"
              >
                <skill.icon size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
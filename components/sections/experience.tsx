'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TimelineItem } from './timeline-item';

const experiences = [
  {
    title: 'Développeur Full Stack',
    company: 'Entreprise A',
    period: '2022 - Présent',
    description: 'Développement d\'applications web avec React, Node.js et TypeScript.',
  },
  {
    title: 'Développeur Front-end',
    company: 'Entreprise B',
    period: '2020 - 2022',
    description: 'Création d\'interfaces utilisateur modernes avec React et Vue.js.',
  },
  {
    title: 'Stage Développeur',
    company: 'Entreprise C',
    period: '2019 - 2020',
    description: 'Première expérience professionnelle en développement d\'applications web.',
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Expérience Professionnelle
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export function TimelineItem({ title, company, period, description, index }: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 shadow-lg"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ delay: index * 0.2 }}
          className="w-0.5 bg-gradient-to-b from-primary/50 to-secondary/50 flex-grow mt-2"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 }}
        className="flex-grow"
      >
        <Card className="p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-card to-accent/20 border-none">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground font-medium">{company}</p>
          <p className="text-sm text-muted-foreground mb-4">{period}</p>
          <p className="text-foreground/80">{description}</p>
        </Card>
      </motion.div>
    </div>
  );
}
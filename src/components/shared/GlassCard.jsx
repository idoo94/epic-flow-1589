import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const GlassCard = ({ children, className, whileHover, ...props }) => {
  return (
    <motion.div
      className={cn(
        "glass-effect p-6 rounded-xl relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/5 before:to-transparent before:opacity-0",
        "hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      whileHover={whileHover || { scale: 1.02, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
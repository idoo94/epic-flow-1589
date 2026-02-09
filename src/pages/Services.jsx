import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { Scissors, Zap, Users, Child, Timer } from 'lucide-react';
import { cn } from '../lib/utils';

const servicesVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const serviceCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const servicesData = [
  {
    icon: <Scissors className="h-8 w-8 text-amber-400" />,
    title: "The Signature Haircut",
    description: "A precision cut tailored to your style, including a refreshing wash and hot towel finish.",
    price: "$45",
    time: "45-60 min",
    details: ["Personalized Consultation", "Expert Scissor & Clipper Work", "Hot Towel & Rinse", "Styling & Product Advice"],
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-400" />,
    title: "Fade / Skin Fade",
    description: "Sharp, clean fade from zero to your desired length. Perfect for a modern, sleek look.",
    price: "$50",
    time: "45-60 min",
    details: ["Zero/Skin Fade", "Crisp Edges", "Precision Blending", "Post-fade Styling"],
  },
  {
    icon: <Users className="h-8 w-8 text-amber-400" />,
    title: "Beard Trim & Shape",
    description: "Expert shaping, trimming, and grooming for a perfectly sculpted beard. Includes hot towel.",
    price: "$30",
    time: "30-40 min",
    details: ["Consultation for Beard Style", "Precision Trimming & Lining", "Hot Towel Service", "Beard Oil & Balm Application"],
  },
  {
    icon: <Scissors className="h-8 w-8 text-amber-400" />,
    title: "Haircut + Beard Combo",
    description: "The ultimate grooming package: a full haircut and a meticulously groomed beard.",
    price: "$70",
    time: "75-90 min",
    details: ["Full Signature Haircut", "Complete Beard Trim & Shape", "Hot Towel Experience", "Enhanced Styling"],
  },
  {
    icon: <Child className="h-8 w-8 text-amber-400" />,
    title: "Kids Cut (Under 12)",
    description: "A stylish and comfortable haircut experience for our younger clients.",
    price: "$30",
    time: "30-40 min",
    details: ["Friendly & Fast Service", "Stylish Cut for Kids", "Comfortable Environment"],
  },
];

const Services = () => {
  return (
    <motion.div
      variants={servicesVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-24"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight text-shadow-md"
        >
          Our <span className="text-amber-400">Signature</span> Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-20"
        >
          Experience precision, style, and confidence with AmosCut. Each service is crafted to perfection, ensuring you leave looking and feeling your best.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between border-amber-400/20 gradient-border" style={{ '--speed': '15s' }}>
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-white text-shadow-sm">{service.title}</h2>
                  </div>
                  <p className="text-zinc-300 mb-6">{service.description}</p>
                  <ul className="text-zinc-400 text-sm mb-6 space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <Timer className="h-5 w-5 text-amber-400" />
                    <span>{service.time}</span>
                  </div>
                  <span className="text-3xl font-extrabold text-amber-400">{service.price}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
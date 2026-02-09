import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { Award, Sparkles, Trophy, Calendar, Zap } from 'lucide-react';

const aboutVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const About = () => {
  const images = ["https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]; // Reusing for conceptual Amos's portrait

  return (
    <motion.div
      variants={aboutVariants}
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
          Meet <span className="text-amber-400">Amos</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-amber-400/50"
          >
            <img
              src={images[0]} // Using a barber image for Amos's portrait
              alt="Amos, the master barber"
              className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
            <p className="absolute bottom-6 right-6 text-zinc-200 text-sm italic font-semibold">
              "Crafting Confidence, One Cut at a Time."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <GlassCard className="p-8 border-amber-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight text-shadow-sm">
                The Story Behind <span className="text-amber-400">AmosCut</span>
              </h2>
              <p className="text-lg text-zinc-300 mb-6">
                Amos, the visionary behind AmosCut, started his journey over 15 years ago with a single pair of clippers and a passion for perfection. What began in a small garage has evolved into a premium barbershop known for its meticulous attention to detail, personalized service, and a welcoming atmosphere where clients become family.
              </p>
              <p className="text-lg text-zinc-300">
                His philosophy is simple: a haircut should not just look good, but make you feel good. It's about empowering men to embrace their unique style and walk out with renewed confidence.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Experience & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-6 h-full border-zinc-700/50 flex flex-col items-center text-center">
              <Award className="h-16 w-16 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">15+ Years Experience</h3>
              <p className="text-zinc-400">
                Amos brings over a decade and a half of mastery to every cut, continuously refining his craft.
              </p>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6 h-full border-zinc-700/50 flex flex-col items-center text-center">
              <Sparkles className="h-16 w-16 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Certified Master Barber</h3>
              <p className="text-zinc-400">
                Holding top-tier certifications in advanced barbering techniques and hygiene standards.
              </p>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-6 h-full border-zinc-700/50 flex flex-col items-center text-center">
              <Trophy className="h-16 w-16 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Award-Winning Styles</h3>
              <p className="text-zinc-400">
                Recognized for innovative designs and setting new trends in men's grooming.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Vibe Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight text-shadow-sm">
            Our <span className="text-amber-400">Vibe</span>: Where Luxury Meets Comfort
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Beyond the cut, AmosCut offers an unparalleled atmosphere. Step into a sanctuary where you can relax, unwind, and enjoy a moment of self-care. We blend street-luxury aesthetics with a professional, friendly service.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-zinc-300"
            >
              <Calendar className="h-10 w-10 text-amber-400 mb-2" />
              <span className="text-lg font-semibold">Easy Booking</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-zinc-300"
            >
              <Zap className="h-10 w-10 text-amber-400 mb-2" />
              <span className="text-lg font-semibold">Modern Aesthetics</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-zinc-300"
            >
              <Users className="h-10 w-10 text-amber-400 mb-2" />
              <span className="text-lg font-semibold">Community Focused</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
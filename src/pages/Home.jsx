import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { cn } from '../lib/utils';
import { BentoGrid, BentoGridItem } from '../components/shared/BentoGrid';
import { Zap, Scissors, BarChart, Clock } from 'lucide-react';

const homeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const images = [
  "https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
];

const features = [
  {
    title: "Expert Barbers",
    description: "Our skilled team offers unmatched precision and style.",
    icon: <Scissors className="h-6 w-6 text-amber-400" />,
    header: <img src={images[1]} alt="Expert Barber" className="w-full h-32 object-cover rounded-xl" />,
  },
  {
    title: "Seamless Booking",
    description: "Effortlessly schedule your next grooming session online.",
    icon: <Clock className="h-6 w-6 text-amber-400" />,
    header: <img src={images[2]} alt="Seamless Booking" className="w-full h-32 object-cover rounded-xl" />,
  },
  {
    title: "Premium Products",
    description: "We use only the finest products for your hair and beard.",
    icon: <Zap className="h-6 w-6 text-amber-400" />,
    header: <img src={images[0]} alt="Premium Products" className="w-full h-32 object-cover rounded-xl" />,
  },
];

const Home = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-zinc-950 text-white"
    >
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden p-4"
        style={{
          backgroundImage: `url(${images[0]})`, // Using the first image for hero
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-brightness-75 z-10"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col items-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-white text-shadow-md">
            Amos<span className="text-amber-400">Cut</span> — Precision. Style. Confidence.
          </motion.h1>
          <motion.p variants={textVariants} className="text-lg md:text-xl text-zinc-300 max-w-2xl">
            Elevating your look with unmatched artistry and a premium grooming experience.
          </motion.p>
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/booking">
              <Button variant="glass" size="lg" className="px-10 py-3 text-lg border-amber-400/50">
                Book Now
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="px-10 py-3 text-lg border-zinc-700 text-white hover:bg-zinc-800">
                View Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto py-24 px-4 md:px-8 lg:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="lg:order-2">
            <GlassCard className="p-8 h-full flex flex-col justify-center border-amber-400/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-shadow-sm">
                The <span className="text-amber-400">AmosCut</span> Difference
              </h2>
              <p className="text-lg text-zinc-300 mb-8">
                At AmosCut, we believe a haircut is more than just a trim—it's an experience, a statement, and a boost of confidence. Our master barbers blend classic techniques with modern trends, ensuring every client leaves feeling sharp, refined, and ready to conquer.
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 text-md">
                <li><strong className="text-amber-400">Masterful Craftsmanship:</strong> Decades of combined experience.</li>
                <li><strong className="text-amber-400">Personalized Consultations:</strong> Your style, our expertise.</li>
                <li><strong className="text-amber-400">Luxurious Atmosphere:</strong> Relax and rejuvenate in comfort.</li>
              </ul>
              <Link to="/about" className="mt-8 self-start">
                <Button variant="glass" className="border-amber-400/50 hover:bg-amber-400/10">
                  Learn More About Us
                </Button>
              </Link>
            </GlassCard>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:order-1 relative rounded-xl overflow-hidden shadow-2xl border-2 border-amber-400/50"
          >
            <img
              src={images[3]} // Using another Pexels image
              alt="Barber working on a client"
              className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-zinc-200 text-sm italic">
              "Every cut is a masterpiece."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="container mx-auto py-24 px-4 md:px-8 lg:px-12 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-4xl md:text-5xl font-bold text-white mb-16 leading-tight text-shadow-sm"
        >
          Why Choose <span className="text-amber-400">AmosCut</span>?
        </motion.h2>
        <BentoGrid className="max-w-4xl mx-auto lg:max-w-7xl">
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              index={i}
              className={i === 0 ? "md:col-span-1" : i === 1 ? "md:col-span-1" : "md:col-span-1"}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Call to Action */}
      <section className="bg-zinc-900 py-20 px-4 md:px-8 lg:px-12 xl:px-24 text-center border-t border-b border-zinc-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight text-shadow-sm">
            Ready for a <span className="text-amber-400">Transformation</span>?
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl">
            Book your next appointment with AmosCut today and experience the pinnacle of men's grooming. Your journey to impeccable style starts here.
          </p>
          <Link to="/booking">
            <Button variant="glass" size="lg" className="px-12 py-3 text-xl border-amber-400/50 group">
              <span className="flex items-center gap-2">
                Book Your Cut
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
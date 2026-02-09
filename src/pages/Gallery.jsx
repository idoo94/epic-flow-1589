import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Instagram } from 'lucide-react';
import GlassCard from '../components/shared/GlassCard';

const galleryVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const images = [
  "https://images.pexels.com/photos/12304510/pexels-photo-12304510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4351727/pexels-photo-4351727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/12464841/pexels-photo-12464841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  // Add more unique images from the provided list
  "https://images.pexels.com/photos/12304510/pexels-photo-12304510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/4351727/pexels-photo-4351727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
];

const Gallery = () => {
  return (
    <motion.div
      variants={galleryVariants}
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
          Our <span className="text-amber-400">Masterpiece</span> Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-20"
        >
          Explore our collection of precision cuts, flawless fades, and expertly styled beards. Get inspired for your next transformation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={imageCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <GlassCard
                className="p-3 h-full cursor-pointer group relative overflow-hidden gradient-border"
                style={{ '--speed': '12s' }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`AmosCut Gallery Image ${index + 1}`}
                  className="w-full h-72 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 flex items-center space-x-2 text-white text-lg font-semibold"
                  >
                    <ZoomIn size={24} className="text-amber-400" />
                    <span>View Detail</span>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <p className="text-xl text-zinc-300 mb-8">
            Follow us on Instagram for daily dose of style inspiration and behind-the-scenes content!
          </p>
          <a
            href="https://instagram.com/amoscut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white text-xl font-bold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Instagram className="h-7 w-7 mr-3" />
            <span>Follow @AmosCut</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { Calendar, Users, Briefcase, Image, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const adminVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const AdminDashboard = () => {
  // This page would typically be protected by actual authentication logic
  // For this example, we'll just render it as if the user is authenticated.

  const adminMenuItems = [
    { title: "Appointments", description: "Manage all bookings", icon: <Calendar />, link: "/admin/appointments" },
    { title: "Barbers", description: "Edit barber profiles & schedules", icon: <Users />, link: "/admin/barbers" },
    { title: "Services", description: "Update services & pricing", icon: <Briefcase />, link: "/admin/services" },
    { title: "Gallery", description: "Manage shop images", icon: <Image />, link: "/admin/gallery" },
    { title: "Settings", description: "Configure shop settings", icon: <Settings />, link: "/admin/settings" },
    { title: "Logout", description: "Sign out of admin panel", icon: <LogOut />, link: "/auth" },
  ];

  return (
    <motion.div
      variants={adminVariants}
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
          Admin <span className="text-amber-400">Dashboard</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-20"
        >
          Welcome, Admin! Manage your barber shop operations with ease.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adminMenuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Link to={item.link}>
                <GlassCard className="p-6 h-full border-amber-400/20 text-center flex flex-col items-center justify-center gradient-border" style={{ '--speed': '15s' }}>
                  <div className="text-amber-400 mb-4">{React.cloneElement(item.icon, { size: 48 })}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-shadow-sm">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for recent activity/summary (could be a separate component) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <GlassCard className="p-8 border-zinc-700/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-shadow-sm">Recent Activity & Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-4">Today's Appointments</h3>
                <ul className="space-y-2">
                  <li>10:00 AM - John Doe (Haircut)</li>
                  <li>11:00 AM - Jane Smith (Fade)</li>
                  <li>01:00 PM - Mike Johnson (Haircut + Beard)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-4">Key Metrics</h3>
                <p><strong>Total Appointments This Week:</strong> 45</p>
                <p><strong>Upcoming Appointments:</strong> 12</p>
                <p><strong>New Users This Month:</strong> 8</p>
                <p><strong>Top Barber:</strong> Amos (20 bookings)</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
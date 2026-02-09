import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Amos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4 glass-effect px-4 md:px-8 lg:px-12 xl:px-24"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-bold tracking-tight group">
          <Zap className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
          <span className="text-shadow-sm">Amos<span className="text-amber-400">Cut</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium text-zinc-300 hover:text-amber-400 transition-colors relative group",
                  isActive && "text-amber-400"
                )
              }
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                isActive && "scale-x-100"
              )}></span>
            </NavLink>
          ))}
          <Button
            onClick={() => console.log('Login clicked')} // Placeholder for login logic
            variant="glass"
            className="ml-4 h-9 px-6 text-white text-md border-amber-400/50 hover:bg-amber-400/10"
          >
            Login
          </Button>
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="hover:bg-zinc-700">
            {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-zinc-300" />}
          </Button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex lg:hidden items-center space-x-2">
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="hover:bg-zinc-700">
            {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-zinc-300" />}
          </Button>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="glass"
            size="icon"
            className="border-amber-400/50 text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-0 right-0 w-2/3 h-screen bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-700 shadow-2xl flex flex-col p-8 pt-20 space-y-6 overflow-y-auto"
          >
            <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-zinc-300 hover:bg-zinc-800"
            >
                <X className="h-6 w-6" />
            </Button>
            {navItems.map((item, index) => (
              <motion.div key={item.name} variants={linkVariants} initial="hidden" animate="visible" exit="hidden" custom={index}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block text-xl font-semibold text-zinc-200 hover:text-amber-400 transition-colors py-2",
                      isActive && "text-amber-400 border-l-4 border-amber-400 pl-2"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={linkVariants} initial="hidden" animate="visible" exit="hidden" custom={navItems.length}>
              <Button
                onClick={() => { console.log('Login clicked'); setIsOpen(false); }}
                variant="glass"
                className="w-full mt-4 h-11 text-white text-lg border-amber-400/50 hover:bg-amber-400/10"
              >
                Login
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
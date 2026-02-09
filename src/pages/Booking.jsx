import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import GlassCard from '../components/shared/GlassCard';
import { Calendar, Clock, User, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

const bookingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const stepContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const services = [
  { id: 'cut', name: 'Signature Haircut', price: 45, time: 60, icon: <ScissorsIcon /> },
  { id: 'fade', name: 'Fade / Skin Fade', price: 50, time: 60, icon: <ZapIcon /> },
  { id: 'beard', name: 'Beard Trim & Shape', price: 30, time: 40, icon: <UserIcon /> },
  { id: 'combo', name: 'Haircut + Beard Combo', price: 70, time: 90, icon: <ComboIcon /> },
  { id: 'kids', name: 'Kids Cut (Under 12)', price: 30, time: 40, icon: <ChildIcon /> },
];

const barbers = [
  { id: 'amos', name: 'Amos', specialty: 'Fades, Modern Styles' },
  { id: 'dave', name: 'Dave', specialty: 'Classic Cuts, Beard Artistry' },
  { id: 'lisa', name: 'Lisa', specialty: 'Long Hair, Textured Cuts' },
];

const availableTimes = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM"
];

const ScissorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors"><circle cx="6" cy="7" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><line x1="14.47" x2="20" y1="14.47" y2="20"/><circle cx="6" cy="17" r="3"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const ChildIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16a2 2 0 1 1 4 0"/><path d="M21 11v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h1a4 4 0 0 0 8 0h1a4 4 0 0 1 4 4Z"/><path d="M16 16c.8.8 1.5 2 1.5 3.5a1.5 1.5 0 0 1-3 0c0-1.5.7-2.7 1.5-3.5Z"/></svg>;
const ComboIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-combine"><path d="M8 18V8h4"/><path d="M2 12h10"/><path d="M12 18h10"/><path d="M18 2V8h4"/></svg>;


const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    barberId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  useEffect(() => {
    // Scroll to top on step change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const validateStep = () => {
    const newErrors = {};
    if (step === 1 && !formData.serviceId) newErrors.serviceId = "Please select a service.";
    if (step === 2 && !formData.barberId) newErrors.barberId = "Please select a barber.";
    if (step === 3) {
      if (!formData.date) newErrors.date = "Please select a date.";
      if (!formData.time) newErrors.time = "Please select a time.";
    }
    if (step === 4) {
      if (!formData.name) newErrors.name = "Name is required.";
      if (!formData.email) newErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
      if (!formData.phone) newErrors.phone = "Phone number is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    setErrors({}); // Clear errors on back
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      console.log('Booking Data:', formData);
      // Simulate API call to backend
      try {
        const response = await fetch('/api/book', { // Vercel Serverless Function endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setBookingConfirmation(data);
          setStep(5); // Go to confirmation step
        } else {
          setErrors({ form: data.message || 'Failed to book appointment.' });
        }
      } catch (error) {
        console.error('Booking error:', error);
        setErrors({ form: 'Network error or server unavailable.' });
      }
    }
  };

  const getStepProgress = () => {
    return (step - 1) / 4 * 100;
  };

  const selectedService = services.find(s => s.id === formData.serviceId);
  const selectedBarber = barbers.find(b => b.id === formData.barberId);

  return (
    <motion.div
      variants={bookingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-24"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight text-shadow-md"
        >
          Book Your <span className="text-amber-400">Appointment</span>
        </motion.h1>

        {/* Progress Bar */}
        <div className="mb-12 relative h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-amber-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${getStepProgress()}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <GlassCard className="p-8 md:p-12 border-amber-400/20 gradient-border" style={{ '--speed': '20s' }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={stepContentVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">1. Select Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(251, 191, 36, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 border",
                        formData.serviceId === service.id
                          ? "bg-amber-400/20 border-amber-400"
                          : "bg-zinc-800/50 border-zinc-700 hover:border-amber-400/50"
                      )}
                      onClick={() => setFormData({ ...formData, serviceId: service.id })}
                    >
                      <span className="text-amber-400 mr-4">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <p className="text-zinc-400 text-sm">~{service.time} min - ${service.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {errors.serviceId && <p className="text-red-500 text-sm mt-4">{errors.serviceId}</p>}
                <div className="flex justify-end mt-10">
                  <Button onClick={handleNext} variant="glass" className="border-amber-400/50">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={stepContentVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">2. Choose Your Barber</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {barbers.map((barber) => (
                    <motion.div
                      key={barber.id}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(251, 191, 36, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 border",
                        formData.barberId === barber.id
                          ? "bg-amber-400/20 border-amber-400"
                          : "bg-zinc-800/50 border-zinc-700 hover:border-amber-400/50"
                      )}
                      onClick={() => setFormData({ ...formData, barberId: barber.id })}
                    >
                      <User className="text-amber-400 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{barber.name}</h3>
                        <p className="text-zinc-400 text-sm">{barber.specialty}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {errors.barberId && <p className="text-red-500 text-sm mt-4">{errors.barberId}</p>}
                <div className="flex justify-between mt-10">
                  <Button onClick={handleBack} variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} variant="glass" className="border-amber-400/50">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={stepContentVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">3. Date & Time</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date" className="text-white mb-2 block flex items-center gap-2"><Calendar className="h-4 w-4 text-amber-400"/> Select Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
                      className="w-full"
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-white mb-2 block flex items-center gap-2"><Clock className="h-4 w-4 text-amber-400"/> Select Time</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {availableTimes.map((time) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "py-2 px-4 rounded-lg border transition-all duration-200",
                            formData.time === time
                              ? "bg-amber-400/20 border-amber-400 text-white font-semibold"
                              : "bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-700/70"
                          )}
                          onClick={() => setFormData({ ...formData, time: time })}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                    {errors.time && <p className="text-red-500 text-sm mt-2">{errors.time}</p>}
                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <Button onClick={handleBack} variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} variant="glass" className="border-amber-400/50">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={stepContentVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">4. Your Details</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                  </div>
                </div>
                {errors.form && <p className="text-red-500 text-sm mt-4">{errors.form}</p>}
                <div className="flex justify-between mt-10">
                  <Button onClick={handleBack} variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleSubmit} variant="glass" className="bg-amber-400 text-white hover:bg-amber-500 border-amber-400/50">
                    Confirm Booking
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 5 && bookingConfirmation && (
              <motion.div key="step5" variants={stepContentVariants} initial="initial" animate="animate" exit="exit" className="text-center">
                <CheckCircle className="h-24 w-24 text-amber-400 mx-auto mb-8" />
                <h2 className="text-4xl font-bold text-white mb-4 text-shadow-sm">Booking Confirmed!</h2>
                <p className="text-lg text-zinc-300 mb-6">Your appointment has been successfully booked.</p>
                <div className="text-left bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 max-w-sm mx-auto space-y-3">
                  <p className="text-zinc-200"><strong>Booking ID:</strong> <span className="text-amber-400">{bookingConfirmation.bookingId}</span></p>
                  <p className="text-zinc-200"><strong>Service:</strong> {selectedService?.name}</p>
                  <p className="text-zinc-200"><strong>Barber:</strong> {selectedBarber?.name}</p>
                  <p className="text-zinc-200"><strong>Date:</strong> {formData.date}</p>
                  <p className="text-zinc-200"><strong>Time:</strong> {formData.time}</p>
                  <p className="text-zinc-200"><strong>Name:</strong> {formData.name}</p>
                  <p className="text-zinc-200"><strong>Email:</strong> {formData.email}</p>
                </div>
                <p className="text-md text-zinc-400 mt-8">
                  A confirmation email has been sent to {formData.email}. We look forward to seeing you!
                </p>
                <Button onClick={() => setStep(1)} variant="glass" className="mt-8 border-amber-400/50">
                  Book Another Appointment
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default Booking;
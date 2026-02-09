import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { LogIn, UserPlus } from 'lucide-react';

const authVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // For showing success/error messages

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignupChange = (e) => {
    const { id, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Simulate API call to Vercel Serverless Function
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Login successful!' });
        // In a real app, save token (e.g., localStorage) and redirect
        console.log('Login successful:', data);
      } else {
        setMessage({ type: 'error', text: data.message || 'Login failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error or server unavailable.' });
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      // Simulate API call to Vercel Serverless Function
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupForm),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Signup successful! Please log in.' });
        setSignupForm({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form
        setActiveTab('login'); // Switch to login tab
      } else {
        setMessage({ type: 'error', text: data.message || 'Signup failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error or server unavailable.' });
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={authVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-24 flex items-center justify-center"
    >
      <GlassCard className="p-8 md:p-12 w-full max-w-md border-amber-400/20 gradient-border" style={{ '--speed': '25s' }}>
        <h1 className="text-4xl font-bold text-center text-white mb-10 text-shadow-sm">
          Welcome to <span className="text-amber-400">AmosCut</span>
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 mb-8 bg-zinc-800 rounded-md">
            <TabsTrigger
              value="login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-amber-400 data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm text-zinc-300 hover:text-white"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-amber-400 data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm text-zinc-300 hover:text-white"
            >
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email-login" className="text-white mb-2 block">Email</Label>
                <Input
                  id="email-login"
                  type="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="password-login" className="text-white mb-2 block">Password</Label>
                <Input
                  id="password-login"
                  type="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" disabled={loading} variant="glass" className="border-amber-400/50 bg-amber-400 text-white hover:bg-amber-500 w-full">
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSignupSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name-signup" className="text-white mb-2 block">Full Name</Label>
                <Input
                  id="name-signup"
                  type="text"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="email-signup" className="text-white mb-2 block">Email</Label>
                <Input
                  id="email-signup"
                  type="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="password-signup" className="text-white mb-2 block">Password</Label>
                <Input
                  id="password-signup"
                  type="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword-signup" className="text-white mb-2 block">Confirm Password</Label>
                <Input
                  id="confirmPassword-signup"
                  type="password"
                  value={signupForm.confirmPassword}
                  onChange={handleSignupChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" disabled={loading} variant="glass" className="border-amber-400/50 bg-amber-400 text-white hover:bg-amber-500 w-full">
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 text-center text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
          >
            {message.text}
          </motion.p>
        )}
      </GlassCard>
    </motion.div>
  );
};

export default Auth;
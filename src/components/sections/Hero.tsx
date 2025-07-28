'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { GlassmorphismCard } from '@/components/animations/GlassmorphismCard';
import { ChevronRight, Play, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute -bottom-8 left-32 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElements intensity={15}>
          <div className="absolute top-20 left-20 text-purple-400/30">
            <Sparkles size={24} />
          </div>
        </FloatingElements>
        <FloatingElements intensity={10}>
          <div className="absolute top-40 right-32 text-indigo-400/30">
            <Zap size={32} />
          </div>
        </FloatingElements>
        <FloatingElements intensity={20}>
          <div className="absolute bottom-40 left-40 text-pink-400/30">
            <TrendingUp size={28} />
          </div>
        </FloatingElements>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
            🚀 Introducing AI-Powered Marketing
            <ChevronRight size={16} />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          AI Marketing Suite That{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Grows With You
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-12 leading-relaxed"
        >
          Automate content creation, track performance in real-time, and scale campaigns 
          effortlessly — all with the power of cutting-edge AI technology.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" size="lg" className="group text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-2xl">
            Start Free Trial
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <GlassmorphismCard delay={0.2}>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Trust Us</div>
            </div>
          </GlassmorphismCard>
          <GlassmorphismCard delay={0.4}>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">10M+</div>
              <div className="text-gray-300">Campaigns Launched</div>
            </div>
          </GlassmorphismCard>
          <GlassmorphismCard delay={0.6}>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">3x</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </section>
  );
}

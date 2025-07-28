'use client';

import Testimonial from '@/components/ui/Testimonial';
import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 text-indigo-200 dark:text-indigo-800/30">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-200 dark:text-purple-800/30">
        <Quote size={80} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their marketing with our AI suite.
          </p>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400 ml-2">
              4.9/5 from 2,000+ reviews
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Testimonial {...t} />
            </motion.div>
          ))}
        </div>

        {/* Social proof section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos placeholder */}
            <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 font-semibold">
              BrandX
            </div>
            <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 font-semibold">
              WebZy
            </div>
            <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 font-semibold">
              EcoWare
            </div>
            <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 font-semibold">
              TechFlow
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

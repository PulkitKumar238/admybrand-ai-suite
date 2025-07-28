'use client';

import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  avatar: string;
  quote: string;
}

const Testimonial = ({ name, title, avatar, quote }: TestimonialProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="text-indigo-500 dark:text-indigo-400 mb-4 opacity-30">
          <Quote size={32} />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className="text-left">
            <p className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

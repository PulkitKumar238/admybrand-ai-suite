'use client';

import { Button } from './Button';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ name, price, description, features, popular }: Plan) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl border-2 p-8 shadow-2xl bg-gradient-to-b transition-all duration-300 ${
        popular 
          ? 'border-indigo-500 from-indigo-50 to-white dark:from-indigo-900/50 dark:to-gray-900 shadow-indigo-500/25' 
          : 'border-gray-200 dark:border-gray-700 from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
          popular 
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
            : 'bg-gradient-to-br from-gray-400 to-gray-600'
        }`}>
          <Zap className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        
        <div className="mb-8">
          <div className="text-5xl font-bold mb-2">
            {price}
            {price !== 'Custom' && (
              <span className="text-lg font-normal text-gray-500">/month</span>
            )}
          </div>
          {price !== 'Custom' && (
            <p className="text-sm text-gray-500">Billed annually</p>
          )}
        </div>

        <ul className="text-left space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          variant={popular ? "primary" : "outline"} 
          size="lg" 
          className={`w-full text-lg py-4 ${
            popular 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg' 
              : 'hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
          }`}
        >
          {price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
        </Button>

        {price !== 'Custom' && (
          <p className="text-xs text-gray-500 mt-4">No credit card required</p>
        )}
      </div>
    </motion.div>
  );
}

'use client';

import { useState } from 'react';
import { faq } from '@/data/faq';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-16 bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 text-indigo-200/30 dark:text-indigo-800/20">
        <HelpCircle size={120} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-indigo-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors duration-300">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our AI marketing suite and how it can transform your business.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-8 font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between group"
              >
                <span className="text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white"
                  >
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-indigo-100 mb-6 max-w-md mx-auto">
              Our team is here to help you get the most out of our AI marketing suite.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

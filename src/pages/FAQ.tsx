import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I start using EcoLoop?',
          answer: 'Getting started is simple! Create your account, download our mobile app or use the web platform, then scan your first item using our AI scanner. The system will guide you through the process and suggest the best recycling or refurbishment options.'
        },
        {
          question: 'What types of items can I submit?',
          answer: 'We accept a wide range of items including electronics (phones, laptops, tablets), clothing and textiles, furniture, books, and household items. Our AI scanner will determine if an item is suitable for refurbishment, recycling, or donation.'
        },
        {
          question: 'Is there a fee to use EcoLoop?',
          answer: 'No! EcoLoop is completely free for individual users. In fact, you earn EcoPoints for every item you submit, which can be redeemed for eco-friendly products in our marketplace.'
        }
      ]
    },
    {
      title: 'AI Scanner & Classification',
      faqs: [
        {
          question: 'How accurate is the AI scanner?',
          answer: 'Our AI scanner has a 94% accuracy rate in product classification. It uses advanced computer vision and machine learning algorithms trained on millions of product images to identify items and determine their condition and best processing method.'
        },
        {
          question: 'What if the AI gets it wrong?',
          answer: 'You can always review and override AI suggestions. Our system learns from user feedback to continuously improve accuracy. If you disagree with a classification, you can submit a correction that helps train our models.'
        },
        {
          question: 'Can I scan multiple items at once?',
          answer: 'Yes! You can scan multiple items in a single session. Our batch processing feature allows you to upload photos of multiple products and get classifications for all of them together.'
        }
      ]
    },
    {
      title: 'Pickup & Logistics',
      faqs: [
        {
          question: 'How does pickup work?',
          answer: 'We offer both traditional pickup services and drone-based pickup for eligible items. You can schedule a pickup time that works for you, and our logistics partners will collect your items. For drone pickup, items must be under 5kg and in eligible coverage areas.'
        },
        {
          question: 'How long does pickup take?',
          answer: 'Traditional pickup typically takes 1-3 business days from scheduling. Drone pickup is available within 30 minutes for eligible items in covered areas. You\'ll receive real-time tracking for all pickups.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We currently serve major metropolitan areas including San Francisco, Los Angeles, New York, Chicago, and Seattle. We\'re rapidly expanding to new cities. Check our coverage map for the most up-to-date service areas.'
        }
      ]
    },
    {
      title: 'EcoPoints & Rewards',
      faqs: [
        {
          question: 'How do I earn EcoPoints?',
          answer: 'You earn EcoPoints for every sustainable action: scanning items (50 points), successful pickups (100-300 points based on item value), and completing your profile (100 points). Bonus points are awarded for items that get successfully refurbished.'
        },
        {
          question: 'What can I do with EcoPoints?',
          answer: 'EcoPoints can be redeemed in our marketplace for eco-friendly products, from reusable water bottles to refurbished electronics. You can also donate points to environmental charities or use them for premium features.'
        },
        {
          question: 'Do EcoPoints expire?',
          answer: 'No, EcoPoints never expire! They remain in your account indefinitely. However, limited-time bonus point promotions may have expiration dates, which will be clearly communicated when you earn them.'
        }
      ]
    },
    {
      title: 'Business Accounts',
      faqs: [
        {
          question: 'How does the business portal work?',
          answer: 'Our business portal provides enterprise-grade reverse logistics management. You can track returns, view sustainability metrics, manage partner relationships, and integrate with your existing systems via our API.'
        },
        {
          question: 'What are the costs for businesses?',
          answer: 'Business pricing is based on volume and services used. We offer tiered pricing starting at $99/month for small businesses, with enterprise plans available. Contact our sales team for a custom quote based on your needs.'
        },
        {
          question: 'Can EcoLoop integrate with our existing systems?',
          answer: 'Yes! We provide REST APIs, webhooks, and pre-built integrations for popular e-commerce platforms, ERPs, and inventory management systems. Our technical team can assist with custom integrations.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about EcoLoop's platform and services
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span>{category.title}</span>
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No FAQs found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or browse all categories
            </p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Live Chat</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
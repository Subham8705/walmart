import React, { useState } from 'react';
import { Wrench, Users, Clock, CheckCircle, TrendingUp, Award } from 'lucide-react';

const Refurbishment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const refurbishmentCycle = [
    {
      step: 1,
      title: 'Item Assessment',
      description: 'AI-powered evaluation determines refurbishment potential and required work',
      duration: '30 minutes',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 2,
      title: 'Partner Assignment',
      description: 'Matched with certified refurbishment specialist based on item type',
      duration: '2 hours',
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 3,
      title: 'Refurbishment Process',
      description: 'Professional restoration to like-new condition with quality guarantee',
      duration: '3-5 days',
      icon: <Wrench className="h-6 w-6" />
    },
    {
      step: 4,
      title: 'Quality Control',
      description: 'Comprehensive testing and certification before marketplace listing',
      duration: '1 day',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const partnerBenefits = [
    {
      title: 'Steady Workflow',
      description: 'Consistent stream of refurbishment tasks from our AI routing system',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Fair Compensation',
      description: 'Competitive rates based on complexity and quality of work completed',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Quality Tools',
      description: 'Access to professional-grade tools and diagnostic equipment',
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: 'Skill Development',
      description: 'Continuous training and certification programs for skill enhancement',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const stats = [
    { label: 'Active Partners', value: '2,500+', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Items Refurbished', value: '45,000+', color: 'text-green-600 dark:text-green-400' },
    { label: 'Success Rate', value: '94%', color: 'text-yellow-600 dark:text-yellow-400' },
    { label: 'Avg. Turnaround', value: '4.2 days', color: 'text-purple-600 dark:text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Refurbishment-as-a-Service (RaaS)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional refurbishment services that extend product lifecycles and create 
            sustainable income opportunities for skilled technicians.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', name: 'Service Overview' },
                { id: 'process', name: 'Refurbishment Process' },
                { id: 'partners', name: 'Partner Program' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is RaaS?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Refurbishment-as-a-Service is our comprehensive platform that connects items 
                    needing restoration with certified refurbishment specialists. We use AI to 
                    assess refurbishment potential, match items with the right experts, and 
                    ensure quality standards throughout the process.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Wrench className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Expert Craftsmanship
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Certified technicians with specialized skills in electronics, furniture, 
                      textiles, and more.
                    </p>
                  </div>

                  <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Quality Guarantee
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Every refurbished item comes with quality certification and extended 
                      warranty coverage.
                    </p>
                  </div>

                  <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Economic Impact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Creating sustainable jobs while extending product lifecycles and 
                      reducing waste.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Refurbishment Cycle
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Our streamlined process ensures efficient, high-quality refurbishment 
                    with full transparency and tracking.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {refurbishmentCycle.map((step, index) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'partners' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Join Our Partner Network
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Become a certified refurbishment partner and access a consistent stream 
                    of work while contributing to a sustainable future.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {partnerBenefits.map((benefit, index) => (
                    <div key={index} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-6">
                    Join thousands of skilled technicians already earning through our platform. 
                    Complete our certification process and start receiving refurbishment tasks.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refurbishment;
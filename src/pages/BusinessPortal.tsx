import React, { useState } from 'react';
import { Building, BarChart3, Package, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const BusinessPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const businessStats = [
    { label: 'Items Processed', value: '12,450', change: '+18%', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Items Refurbished', value: '8,320', change: '+22%', color: 'text-green-600 dark:text-green-400' },
    { label: 'Items Recycled', value: '3,890', change: '+15%', color: 'text-yellow-600 dark:text-yellow-400' },
    { label: 'CO₂ Offset', value: '28.7 tons', change: '+25%', color: 'text-purple-600 dark:text-purple-400' }
  ];

  const recentActivity = [
    { 
      id: 1, 
      action: 'New return batch processed', 
      items: 45, 
      type: 'Electronics', 
      time: '2 hours ago',
      status: 'completed'
    },
    { 
      id: 2, 
      action: 'Refurbishment completed', 
      items: 12, 
      type: 'Smartphones', 
      time: '4 hours ago',
      status: 'completed'
    },
    { 
      id: 3, 
      action: 'Quality control pending', 
      items: 8, 
      type: 'Laptops', 
      time: '6 hours ago',
      status: 'pending'
    },
    { 
      id: 4, 
      action: 'Batch ready for pickup', 
      items: 23, 
      type: 'Mixed Items', 
      time: '8 hours ago',
      status: 'ready'
    }
  ];

  const services = [
    {
      title: 'Enterprise Returns Management',
      description: 'Automated processing of customer returns with AI-powered classification',
      features: ['Bulk processing', 'Real-time tracking', 'Custom workflows'],
      icon: <Package className="h-8 w-8" />
    },
    {
      title: 'Sustainability Reporting',
      description: 'Comprehensive analytics on environmental impact and circular economy metrics',
      features: ['CO₂ tracking', 'Compliance reports', 'ESG metrics'],
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      title: 'Partner Network Access',
      description: 'Connect with certified refurbishment and recycling specialists',
      features: ['Vetted partners', 'Quality guarantees', 'Transparent pricing'],
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'White-Label Solutions',
      description: 'Branded reverse logistics solutions for your customers',
      features: ['Custom branding', 'API integration', 'Dedicated support'],
      icon: <Building className="h-8 w-8" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
      case 'pending': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20';
      case 'ready': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Business Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade reverse logistics solutions for brands committed to sustainability
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {businessStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    vs last month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', name: 'Dashboard' },
                { id: 'services', name: 'Services' },
                { id: 'analytics', name: 'Analytics' },
                { id: 'integration', name: 'Integration' }
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {activity.action}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                          <span>{activity.items} items • {activity.type}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Quick Actions
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full p-4 text-left bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">
                        Upload Return Batch
                      </h3>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Process new customer returns
                      </p>
                    </button>
                    
                    <button className="w-full p-4 text-left bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                      <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">
                        Generate Report
                      </h3>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Download sustainability metrics
                      </p>
                    </button>
                    
                    <button className="w-full p-4 text-left bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                      <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                        Schedule Pickup
                      </h3>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        Arrange logistics for processed items
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Enterprise Services
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Comprehensive reverse logistics solutions tailored for enterprise needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {service.description}
                          </p>
                          <div className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Analytics & Reporting
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Detailed insights into your reverse logistics performance and environmental impact
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Processing Efficiency</span>
                        <span className="font-semibold text-gray-900 dark:text-white">94%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Refurbishment Rate</span>
                        <span className="font-semibold text-gray-900 dark:text-white">67%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Cost Savings</span>
                        <span className="font-semibold text-gray-900 dark:text-white">$125K</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Environmental Impact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Total CO₂ Offset</span>
                        <span className="font-semibold text-gray-900 dark:text-white">28.7 tons</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Waste Diverted</span>
                        <span className="font-semibold text-gray-900 dark:text-white">15.2 tons</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Resource Savings</span>
                        <span className="font-semibold text-gray-900 dark:text-white">$89K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integration' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    API Integration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Seamlessly integrate EcoLoop services into your existing workflows
                  </p>
                </div>

                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-4">
                    <span className="text-gray-500">{/* Initialize EcoLoop API */}</span>
                  </div>
                  <div className="space-y-2">
                    <div><span className="text-blue-400">const</span> ecoloop = <span className="text-yellow-400">new</span> <span className="text-blue-400">EcoLoopAPI</span>(&#123;</div>
                    <div className="ml-4">apiKey: <span className="text-green-300">'your-api-key'</span>,</div>
                    <div className="ml-4">environment: <span className="text-green-300">'production'</span></div>
                    <div>&#125;);</div>
                    <br />
                    <div><span className="text-gray-500">{/* Submit items for processing */}</span></div>
                    <div><span className="text-blue-400">const</span> result = <span className="text-purple-400">await</span> ecoloop.submitItems(&#123;</div>
                    <div className="ml-4">items: [&#123; id: <span className="text-green-300">'item-123'</span>, type: <span className="text-green-300">'electronics'</span> &#125;],</div>
                    <div className="ml-4">pickupAddress: <span className="text-green-300">'123 Main St'</span></div>
                    <div>&#125;);</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      REST API
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      RESTful endpoints for all major operations including item submission, 
                      tracking, and reporting.
                    </p>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline">
                      View Documentation →
                    </button>
                  </div>

                  <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Webhooks
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Real-time notifications for status updates, completion events, 
                      and processing milestones.
                    </p>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline">
                      Setup Guide →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Returns?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Join leading brands in creating a sustainable circular economy with our 
            enterprise reverse logistics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPortal;
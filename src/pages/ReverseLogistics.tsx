import React, { useState } from 'react';
import { Truck, MapPin, Clock, Package, Route, Zap, Calendar, CheckCircle } from 'lucide-react';

const ReverseLogistics = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const locations = [
    { id: 1, name: 'Downtown Recycling Center', distance: '2.3 miles', type: 'Electronics & General' },
    { id: 2, name: 'TechRefurb Hub', distance: '3.1 miles', type: 'Electronics Refurbishment' },
    { id: 3, name: 'Textile Recycling Co', distance: '4.5 miles', type: 'Clothing & Textiles' },
    { id: 4, name: 'GreenCycle Facility', distance: '5.2 miles', type: 'Mixed Materials' }
  ];

  const automationFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI-Powered Routing',
      description: 'Intelligent algorithms determine the most efficient pickup and delivery routes automatically.'
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: 'Real-Time Optimization',
      description: 'Dynamic route adjustments based on traffic, capacity, and priority items.'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Smart Sorting',
      description: 'Automated classification and sorting of items at collection points.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Predictive Scheduling',
      description: 'Machine learning predicts optimal pickup times and schedules.'
    }
  ];

  const processSteps = [
    { step: 1, title: 'Item Submission', description: 'Scan and categorize your items using our AI scanner', status: 'completed' },
    { step: 2, title: 'Route Planning', description: 'AI calculates optimal collection and delivery route', status: 'completed' },
    { step: 3, title: 'Pickup Scheduling', description: 'Schedule pickup via traditional or drone delivery', status: 'active' },
    { step: 4, title: 'Processing', description: 'Items are processed at appropriate facilities', status: 'pending' },
    { step: 5, title: 'Completion', description: 'Receive EcoPoints and impact report', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reverse Logistics Automation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our intelligent logistics system automates the entire reverse supply chain, 
            from pickup to processing, ensuring maximum efficiency and environmental impact.
          </p>
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Automated Process Flow
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="relative flex items-start space-x-4">
                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold ${
                    step.status === 'completed' 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : step.status === 'active'
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold ${
                      step.status === 'completed' || step.status === 'active'
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pickup Scheduling */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Schedule Pickup
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nearest Facilities
                </label>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <div 
                      key={location.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        selectedLocation === location.name
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                      onClick={() => setSelectedLocation(location.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {location.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{location.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Schedule Traditional Pickup</span>
                </button>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Request Drone Pickup</span>
                </button>
              </div>
            </div>
          </div>

          {/* Automation Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Automation Features
            </h2>
            
            <div className="space-y-6">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Tracking */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Real-Time Logistics Tracking
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                127
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Active Pickups Today
              </div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                94%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Route Efficiency
              </div>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                23 min
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Average Pickup Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseLogistics;
import React, { useState } from 'react';
import { Zap, Package, MapPin, Clock, CheckCircle, AlertCircle, Truck } from 'lucide-react';

const DronePickup = () => {
  const [itemType, setItemType] = useState('');
  const [location, setLocation] = useState('');
  const [eligibilityResult, setEligibilityResult] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(false);

  const itemTypes = [
    { id: 'electronics', name: 'Electronics', weight: '< 5kg', eligible: true },
    { id: 'clothing', name: 'Clothing', weight: '< 2kg', eligible: true },
    { id: 'books', name: 'Books', weight: '< 3kg', eligible: true },
    { id: 'furniture', name: 'Furniture', weight: '> 10kg', eligible: false },
    { id: 'appliances', name: 'Large Appliances', weight: '> 15kg', eligible: false }
  ];

  const droneFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Ultra-Fast Delivery',
      description: 'Pickup within 30 minutes in eligible zones',
      color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Smart Packaging',
      description: 'Automated secure packaging for safe transport',
      color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'GPS Tracking',
      description: 'Real-time tracking from pickup to destination',
      color: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service in supported areas',
      color: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  const checkEligibility = () => {
    setIsChecking(true);
    setTimeout(() => {
      const selectedItem = itemTypes.find(item => item.id === itemType);
      setEligibilityResult({
        eligible: selectedItem?.eligible && location.length > 0,
        item: selectedItem,
        estimatedTime: selectedItem?.eligible ? '25-35 minutes' : null,
        reason: selectedItem?.eligible ? null : 'Item exceeds weight limit for drone pickup'
      });
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone-Based Pickup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of reverse logistics with our autonomous drone pickup service. 
            Fast, efficient, and environmentally friendly.
          </p>
        </div>

        {/* Hero Section with Drone Animation */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 rounded-xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Revolutionary Drone Technology</h2>
            <p className="text-blue-100 text-lg mb-6">
              Our fleet of eco-friendly drones provides rapid pickup services for eligible items, 
              reducing carbon footprint and delivery times by up to 80%.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">30 min</div>
                <div className="text-blue-200">Average Pickup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5kg</div>
                <div className="text-blue-200">Max Weight</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15 miles</div>
                <div className="text-blue-200">Coverage Radius</div>
              </div>
            </div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Eligibility Checker */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Check Drone Pickup Eligibility
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Item Type
                </label>
                <div className="space-y-2">
                  {itemTypes.map((item) => (
                    <div 
                      key={item.id}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                        itemType === item.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                      onClick={() => setItemType(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                            ({item.weight})
                          </span>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${
                          item.eligible ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your address or zip code"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <button
                onClick={checkEligibility}
                disabled={!itemType || !location || isChecking}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isChecking ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Checking Eligibility...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Check Eligibility</span>
                  </>
                )}
              </button>
            </div>

            {/* Results */}
            {eligibilityResult && (
              <div className={`mt-6 p-4 rounded-lg border-2 ${
                eligibilityResult.eligible 
                  ? 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20' 
                  : 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {eligibilityResult.eligible ? (
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  )}
                  <span className={`font-semibold ${
                    eligibilityResult.eligible 
                      ? 'text-green-800 dark:text-green-300' 
                      : 'text-red-800 dark:text-red-300'
                  }`}>
                    {eligibilityResult.eligible ? 'Eligible for Drone Pickup!' : 'Not Eligible for Drone Pickup'}
                  </span>
                </div>
                
                {eligibilityResult.eligible ? (
                  <div className="space-y-2">
                    <p className="text-green-700 dark:text-green-400">
                      Estimated pickup time: {eligibilityResult.estimatedTime}
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Schedule Drone Pickup
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-red-700 dark:text-red-400">
                      {eligibilityResult.reason}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Traditional pickup available instead
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Drone Service Features
            </h2>
            
            <div className="space-y-6">
              {droneFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
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

        {/* Service Map */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Drone Service Coverage
          </h2>
          
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Interactive Coverage Map
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently serving downtown and metropolitan areas with plans for expansion
              </p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                View Full Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DronePickup;
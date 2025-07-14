import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Star, ShoppingCart, Recycle, Zap, Globe, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: 'AI-Powered Classification',
      description: 'Smart product recognition determines the best recycling or refurbishment path.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automated Logistics',
      description: 'Seamless pickup and routing with drone and traditional delivery options.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'EcoPoints Rewards',
      description: 'Earn points for every sustainable action and redeem for eco-friendly products.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'Track your environmental impact and contribute to a circular economy.'
    }
  ];

  const stats = [
    { value: '2.5M+', label: 'Items Recycled' },
    { value: '150K+', label: 'Active Users' },
    { value: '500+', label: 'Partner Businesses' },
    { value: '75K', label: 'Tons CO₂ Saved' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Smarter Returns.{' '}
              <span className="text-yellow-400">Greener Planet.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered reverse logistics platform that transforms how we handle returns, 
              refurbishment, and recycling for a sustainable circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ai-scanner"
                className="group bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Product</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ecopoints"
                className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Star className="h-5 w-5" />
                <span>Earn EcoPoints</span>
              </Link>
              <Link
                to="/marketplace"
                className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Explore Store</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-yellow-400/15 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionizing Reverse Logistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, automated logistics, and gamification 
              to create the most efficient circular economy solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious individuals and businesses creating a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/business-portal"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Business Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
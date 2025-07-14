import React from 'react';
import { TrendingUp, Package, Star, Globe, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const UserDashboard = () => {
  const { user } = useUser();

  const recentItems = [
    { 
      id: 1, 
      name: 'iPhone 12 Pro', 
      status: 'Refurbished', 
      date: '2025-01-10', 
      points: 150,
      co2Saved: '2.1kg',
      location: 'TechRefurb Center'
    },
    { 
      id: 2, 
      name: 'Nike Air Max', 
      status: 'Donated', 
      date: '2025-01-08', 
      points: 75,
      co2Saved: '1.4kg',
      location: 'Goodwill Center'
    },
    { 
      id: 3, 
      name: 'Dell Laptop', 
      status: 'In Transit', 
      date: '2025-01-12', 
      points: 200,
      co2Saved: '3.2kg',
      location: 'ElectroRecycle Hub'
    },
    { 
      id: 4, 
      name: 'Cotton T-Shirt', 
      status: 'Recycled', 
      date: '2025-01-05', 
      points: 50,
      co2Saved: '0.8kg',
      location: 'Textile Recycling Co'
    }
  ];

  const weeklyData = [
    { day: 'Mon', items: 2, points: 120 },
    { day: 'Tue', items: 1, points: 75 },
    { day: 'Wed', items: 3, points: 180 },
    { day: 'Thu', items: 0, points: 0 },
    { day: 'Fri', items: 2, points: 150 },
    { day: 'Sat', items: 4, points: 220 },
    { day: 'Sun', items: 1, points: 80 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Refurbished': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
      case 'Donated': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
      case 'Recycled': return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20';
      case 'In Transit': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Refurbished': return <CheckCircle className="h-4 w-4" />;
      case 'Donated': return <CheckCircle className="h-4 w-4" />;
      case 'Recycled': return <CheckCircle className="h-4 w-4" />;
      case 'In Transit': return <Clock className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your environmental impact and manage your sustainable actions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total EcoPoints</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user?.ecoPoints.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">+12%</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">vs last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">CO₂ Offset</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user?.co2Offset}kg
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">+8%</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">vs last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Items Processed</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user?.itemsRecycled}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">+15%</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">vs last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Global Rank</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">#2</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">+1 rank</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">this week</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              {recentItems.map((item) => (
                <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      <span>{item.status}</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-900 dark:text-white font-medium">+{item.points}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{item.co2Saved} CO₂</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              View All Activity
            </button>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Weekly Progress
            </h2>
            
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm font-medium w-8">
                    {day.day}
                  </span>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(day.items / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right min-w-[60px]">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {day.items} items
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{day.points} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg text-white">
              <h3 className="font-semibold mb-1">This Week's Goal</h3>
              <p className="text-sm text-green-100">
                You're 2 items away from your weekly goal of 15 items!
              </p>
              <div className="mt-2 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
import React, { useState } from 'react';
import { MapPin, Filter, Search, Phone, Clock, Star } from 'lucide-react';

const RecyclersMap = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchLocation, setSearchLocation] = useState('');

  const materialTypes = [
    { id: 'all', name: 'All Materials', color: 'bg-gray-500' },
    { id: 'electronics', name: 'Electronics', color: 'bg-blue-500' },
    { id: 'plastic', name: 'Plastic', color: 'bg-green-500' },
    { id: 'metal', name: 'Metal', color: 'bg-yellow-500' },
    { id: 'fabric', name: 'Fabric', color: 'bg-purple-500' },
    { id: 'glass', name: 'Glass', color: 'bg-cyan-500' },
    { id: 'paper', name: 'Paper', color: 'bg-orange-500' }
  ];

  const recyclers = [
    {
      id: 1,
      name: 'TechRefurb Center',
      type: 'electronics',
      address: '123 Innovation Drive, Downtown',
      distance: '2.3 miles',
      rating: 4.8,
      reviews: 156,
      phone: '(555) 123-4567',
      hours: '9 AM - 6 PM',
      specialties: ['Smartphones', 'Laptops', 'Tablets'],
      verified: true
    },
    {
      id: 2,
      name: 'GreenCycle Plastics',
      type: 'plastic',
      address: '456 Eco Way, Industrial District',
      distance: '3.1 miles',
      rating: 4.6,
      reviews: 89,
      phone: '(555) 234-5678',
      hours: '8 AM - 5 PM',
      specialties: ['Bottles', 'Containers', 'Packaging'],
      verified: true
    },
    {
      id: 3,
      name: 'MetalWorks Recycling',
      type: 'metal',
      address: '789 Steel Street, Manufacturing Zone',
      distance: '4.5 miles',
      rating: 4.7,
      reviews: 124,
      phone: '(555) 345-6789',
      hours: '7 AM - 4 PM',
      specialties: ['Aluminum', 'Steel', 'Copper'],
      verified: true
    },
    {
      id: 4,
      name: 'Fabric Revival Co',
      type: 'fabric',
      address: '321 Textile Lane, Arts District',
      distance: '1.8 miles',
      rating: 4.9,
      reviews: 67,
      phone: '(555) 456-7890',
      hours: '10 AM - 7 PM',
      specialties: ['Cotton', 'Wool', 'Synthetic'],
      verified: true
    },
    {
      id: 5,
      name: 'Crystal Clear Glass',
      type: 'glass',
      address: '654 Transparent Ave, Central',
      distance: '2.7 miles',
      rating: 4.5,
      reviews: 93,
      phone: '(555) 567-8901',
      hours: '9 AM - 5 PM',
      specialties: ['Bottles', 'Windows', 'Containers'],
      verified: false
    },
    {
      id: 6,
      name: 'Paper Trail Recycling',
      type: 'paper',
      address: '987 Document Drive, Business Park',
      distance: '5.2 miles',
      rating: 4.4,
      reviews: 78,
      phone: '(555) 678-9012',
      hours: '8 AM - 6 PM',
      specialties: ['Newspapers', 'Cardboard', 'Office Paper'],
      verified: true
    }
  ];

  const filteredRecyclers = recyclers.filter(recycler => 
    selectedFilter === 'all' || recycler.type === selectedFilter
  );

  const getTypeColor = (type: string) => {
    const materialType = materialTypes.find(m => m.id === type);
    return materialType?.color || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recyclers & Donation Centers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find verified recycling facilities and donation centers in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Location Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter location or zip code"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Material Filter */}
            <div className="flex flex-wrap gap-2">
              {materialTypes.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setSelectedFilter(material.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedFilter === material.id
                      ? `${material.color} text-white shadow-lg`
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${material.color} ${selectedFilter === material.id ? 'bg-white/30' : ''}`}></div>
                  <span>{material.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Interactive Map
            </h2>
            
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Simulated Map with Pins */}
              <div className="absolute inset-4 grid grid-cols-3 gap-4">
                {filteredRecyclers.slice(0, 6).map((recycler, index) => (
                  <div 
                    key={recycler.id}
                    className={`w-6 h-6 rounded-full ${getTypeColor(recycler.type)} border-2 border-white shadow-lg animate-pulse cursor-pointer transform hover:scale-110 transition-transform`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                    title={recycler.name}
                  ></div>
                ))}
              </div>
              
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Map View
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Click on pins to view facility details
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Map Legend</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {materialTypes.slice(1).map((material) => (
                  <div key={material.id} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${material.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{material.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facilities List */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Nearby Facilities
              </h2>
              <span className="text-gray-500 dark:text-gray-400">
                {filteredRecyclers.length} found
              </span>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredRecyclers.map((recycler) => (
                <div key={recycler.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {recycler.name}
                        </h3>
                        {recycler.verified && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-medium rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < Math.floor(recycler.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {recycler.rating} ({recycler.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${getTypeColor(recycler.type)}`}></div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {recycler.address} • {recycler.distance}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {recycler.hours}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {recycler.phone}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {recycler.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Get Directions
                    </button>
                    <button className="flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclersMap;
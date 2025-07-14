import React, { useState } from 'react';
import { Search, Filter, Heart, Star, ShoppingCart, Eye, Package } from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [condition, setCondition] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'books', name: 'Books' },
    { id: 'sports', name: 'Sports & Outdoors' }
  ];

  const products = [
    {
      id: 1,
      name: 'Refurbished iPhone 12',
      category: 'electronics',
      price: 499,
      originalPrice: 699,
      condition: 'Excellent',
      rating: 4.8,
      reviews: 124,
      ecoPoints: 250,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=300',
      seller: 'TechRefurb Pro',
      co2Saved: '3.2kg'
    },
    {
      id: 2,
      name: 'Vintage Leather Jacket',
      category: 'clothing',
      price: 89,
      originalPrice: 180,
      condition: 'Good',
      rating: 4.6,
      reviews: 78,
      ecoPoints: 150,
      image: 'https://images.pexels.com/photos/1124062/pexels-photo-1124062.jpeg?w=300',
      seller: 'Fashion Forward',
      co2Saved: '2.1kg'
    },
    {
      id: 3,
      name: 'Restored Oak Dining Table',
      category: 'furniture',
      price: 320,
      originalPrice: 600,
      condition: 'Excellent',
      rating: 4.9,
      reviews: 45,
      ecoPoints: 400,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=300',
      seller: 'Furniture Revival',
      co2Saved: '8.5kg'
    },
    {
      id: 4,
      name: 'MacBook Air M1 Refurbished',
      category: 'electronics',
      price: 849,
      originalPrice: 999,
      condition: 'Excellent',
      rating: 4.7,
      reviews: 156,
      ecoPoints: 300,
      image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?w=300',
      seller: 'Apple Certified',
      co2Saved: '4.7kg'
    },
    {
      id: 5,
      name: 'Designer Running Shoes',
      category: 'sports',
      price: 65,
      originalPrice: 120,
      condition: 'Good',
      rating: 4.4,
      reviews: 89,
      ecoPoints: 100,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=300',
      seller: 'Sports Resale',
      co2Saved: '1.8kg'
    },
    {
      id: 6,
      name: 'Classic Literature Collection',
      category: 'books',
      price: 45,
      originalPrice: 85,
      condition: 'Very Good',
      rating: 4.8,
      reviews: 67,
      ecoPoints: 75,
      image: 'https://images.pexels.com/photos/159751/book-open-pages-literature-159751.jpeg?w=300',
      seller: 'Book Haven',
      co2Saved: '0.9kg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under100' && product.price < 100) ||
      (priceRange === '100-300' && product.price >= 100 && product.price <= 300) ||
      (priceRange === 'over300' && product.price > 300);
    const matchesCondition = condition === 'all' || product.condition.toLowerCase() === condition;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Refurbished Marketplace
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover high-quality refurbished items while making a positive environmental impact
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Prices</option>
                <option value="under100">Under $100</option>
                <option value="100-300">$100 - $300</option>
                <option value="over300">Over $300</option>
              </select>

              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Conditions</option>
                <option value="excellent">Excellent</option>
                <option value="very good">Very Good</option>
                <option value="good">Good</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors">
                    <Eye className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    product.condition === 'Excellent' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : product.condition === 'Very Good'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {product.condition}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">EcoPoints:</span>
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">
                      +{product.ecoPoints}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">CO₂ Saved:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {product.co2Saved}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Seller:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {product.seller}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
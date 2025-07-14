import React, { useState, useEffect } from 'react';
import { Camera, Upload, Scan, CheckCircle, RefreshCw, MapPin, Calendar, Clock, List, X, Save } from 'lucide-react';

interface ReturnItem {
  id: string;
  item: string;
  category: string;
  condition: string;
  classification: string;
  estimatedValue: string;
  ecoPointsEarned: number;
  co2Impact: string;
  nearestFacility: string;
  scheduledDate: string;
  scheduledTime: string;
  dateCreated: string;
  status: 'scheduled' | 'picked-up' | 'processing' | 'completed';
}

const AIScanner = () => {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showReturnsList, setShowReturnsList] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [returnItems, setReturnItems] = useState<ReturnItem[]>([]);

  // Available time slots
  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  // Load return items from localStorage on component mount
  useEffect(() => {
    const savedReturns = localStorage.getItem('ecoloop-returns');
    if (savedReturns) {
      setReturnItems(JSON.parse(savedReturns));
    }
  }, []);

  // Save return items to localStorage whenever returnItems changes
  useEffect(() => {
    localStorage.setItem('ecoloop-returns', JSON.stringify(returnItems));
  }, [returnItems]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      simulateAIScan();
    }
  };

  const simulateAIScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        category: 'Electronics',
        item: 'iPhone 12 Pro',
        condition: 'Good',
        classification: 'Refurbishable',
        confidence: 94,
        suggestedAction: 'Route to certified refurbishment partner',
        estimatedValue: '$320',
        ecoPointsEarned: 150,
        co2Impact: '2.1 kg CO₂ saved',
        nearestFacility: 'TechRefurb Center - 2.3 miles away'
      });
      setIsScanning(false);
    }, 3000);
  };

  const handleBarcodeScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        category: 'Textiles',
        item: 'Nike Air Max Sneakers',
        condition: 'Fair',
        classification: 'Donatable',
        confidence: 87,
        suggestedAction: 'Route to local charity partner',
        estimatedValue: '$45',
        ecoPointsEarned: 75,
        co2Impact: '1.4 kg CO₂ saved',
        nearestFacility: 'Goodwill Donation Center - 1.8 miles away'
      });
      setIsScanning(false);
    }, 2500);
  };

  const handleSchedulePickup = () => {
    setShowScheduleModal(true);
  };

  const handleSaveSchedule = () => {
    if (!selectedDate || !selectedTime || !scanResult) {
      alert('Please select both date and time');
      return;
    }

    const newReturnItem: ReturnItem = {
      id: Date.now().toString(),
      item: scanResult.item,
      category: scanResult.category,
      condition: scanResult.condition,
      classification: scanResult.classification,
      estimatedValue: scanResult.estimatedValue,
      ecoPointsEarned: scanResult.ecoPointsEarned,
      co2Impact: scanResult.co2Impact,
      nearestFacility: scanResult.nearestFacility,
      scheduledDate: selectedDate,
      scheduledTime: selectedTime,
      dateCreated: new Date().toISOString().split('T')[0],
      status: 'scheduled'
    };

    setReturnItems(prev => [...prev, newReturnItem]);
    setShowScheduleModal(false);
    setSelectedDate('');
    setSelectedTime('');
    setScanResult(null);
    setSelectedFile(null);
    
    alert('Pickup scheduled successfully!');
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14); // 2 weeks from now
    return maxDate.toISOString().split('T')[0];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
      case 'picked-up': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20';
      case 'processing': return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20';
      case 'completed': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Product Scanner
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upload a photo or scan a barcode to get instant AI-powered classification and routing suggestions
          </p>
          
          {/* Return List Button */}
          <div className="mt-6">
            <button
              onClick={() => setShowReturnsList(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
            >
              <List className="h-5 w-5" />
              <span>View Return List ({returnItems.length})</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Scan Your Product
            </h2>
            
            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Upload Product Photo
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Click to select or drag and drop
                  </p>
                </label>
              </div>

              {/* Barcode Scanner */}
              <div className="text-center">
                <span className="text-gray-500 dark:text-gray-400">or</span>
              </div>

              <button
                onClick={handleBarcodeScan}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Scan className="h-5 w-5" />
                <span>Scan Barcode</span>
              </button>
            </div>

            {selectedFile && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">
                    {selectedFile.name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Scan Results
            </h2>

            {isScanning ? (
              <div className="text-center py-12">
                <RefreshCw className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 animate-spin" />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  AI is analyzing your product...
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  This may take a few seconds
                </p>
              </div>
            ) : scanResult ? (
              <div className="space-y-6">
                {/* Product Info */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Product Identified
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {scanResult.item}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Category: {scanResult.category} • Condition: {scanResult.condition}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Confidence: {scanResult.confidence}%
                  </p>
                </div>

                {/* Classification */}
                <div className={`p-4 rounded-lg ${
                  scanResult.classification === 'Refurbishable' 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                    : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                }`}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    AI Classification: {scanResult.classification}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {scanResult.suggestedAction}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Estimated Value:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {scanResult.estimatedValue}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">EcoPoints:</span>
                      <p className="font-semibold text-yellow-600 dark:text-yellow-400">
                        +{scanResult.ecoPointsEarned}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Environmental Impact
                  </h3>
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    {scanResult.co2Impact}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Nearest Facility
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {scanResult.nearestFacility}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={handleSchedulePickup}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Pickup
                  </button>
                  <button className="flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Save Result
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">
                  Upload a photo or scan a barcode to get started
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Schedule Pickup Modal */}
        {showScheduleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Schedule Pickup
                </h3>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={getMinDate()}
                      max={getMaxDate()}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Available Time Slots
                  </label>
                  <div className="space-y-2">
                    {timeSlots.map((time) => (
                      <label
                        key={time}
                        className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          value={time}
                          checked={selectedTime === time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="sr-only"
                        />
                        <Clock className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-900 dark:text-white font-medium">
                          {time}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowScheduleModal(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveSchedule}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Save className="h-5 w-5" />
                    <span>Save Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Return List Modal */}
        {showReturnsList && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Return List ({returnItems.length} items)
                </h3>
                <button
                  onClick={() => setShowReturnsList(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {returnItems.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    <List className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No returns scheduled yet</p>
                    <p className="text-sm">Scan a product and schedule pickup to see items here</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {returnItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                              {item.item}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                              {item.category} • {item.condition} • {item.classification}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Scheduled:</span>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {item.scheduledDate}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              {item.scheduledTime}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Value:</span>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {item.estimatedValue}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">EcoPoints:</span>
                            <p className="font-medium text-yellow-600 dark:text-yellow-400">
                              +{item.ecoPointsEarned}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">CO₂ Impact:</span>
                            <p className="font-medium text-green-600 dark:text-green-400">
                              {item.co2Impact}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4" />
                          <span>{item.nearestFacility}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIScanner;
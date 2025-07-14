import React, { useState } from 'react';
import { Camera, Upload, Scan, CheckCircle, RefreshCw, MapPin } from 'lucide-react';

const AIScanner = () => {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
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
      </div>
    </div>
  );
};

export default AIScanner;

import React, { useState, useEffect } from 'react';
import CampusNavigator from '../components/CampusNavigator';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Show splash for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          {/* Campus Image Animation */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KPR</span>
              </div>
            </div>
          </div>
          
          {/* College Name Animation */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in animation-delay-1000">
              KPR CAS
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 animate-fade-in animation-delay-2000">
              Campus Navigation System
            </h2>
            <p className="text-lg text-purple-200 animate-fade-in animation-delay-3000">
              Find your way around campus
            </p>
          </div>
          
          {/* Loading Animation */}
          <div className="mt-8 animate-fade-in animation-delay-3500">
            <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-slide-in-right"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CampusNavigator />;
};

export default Index;

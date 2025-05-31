
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Menu, X, MapPin, Navigation, Route, Clock, Building } from 'lucide-react';
import CampusMap from './CampusMap';
import { roomLocations } from '../data/roomData';

const CampusNavigator = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [showNavigation, setShowNavigation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState([]);
  const [directions, setDirections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState('');

  const floors = [
    { id: 1, name: 'Ground Floor', rooms: roomLocations.filter(room => room.floor === 1) },
    { id: 2, name: 'First Floor', rooms: roomLocations.filter(room => room.floor === 2) },
    { id: 3, name: 'Second Floor', rooms: roomLocations.filter(room => room.floor === 3) }
  ];

  const currentFloorRooms = floors.find(floor => floor.id === selectedFloor)?.rooms || [];

  const handleNavigation = () => {
    if (!startingPoint || !destination) {
      return;
    }

    setIsLoading(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const startRoom = roomLocations.find(room => room.id === startingPoint);
      const destRoom = roomLocations.find(room => room.id === destination);

      if (!startRoom || !destRoom) {
        setIsLoading(false);
        return;
      }

      // Check if navigation involves floor change
      if (startRoom.floor !== destRoom.floor) {
        handleMultiFloorNavigation(startRoom, destRoom);
      } else {
        // Same floor navigation
        setSelectedFloor(startRoom.floor);
        setShowNavigation(true);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleMultiFloorNavigation = (startRoom, destRoom) => {
    // Find stairs/elevator on start floor
    const stairsOnStartFloor = roomLocations.find(room => 
      room.floor === startRoom.floor && (room.name.includes('Step') || room.name.includes('Steps'))
    );

    // Find stairs/elevator on destination floor
    const stairsOnDestFloor = roomLocations.find(room => 
      room.floor === destRoom.floor && (room.name.includes('Step') || room.name.includes('Steps'))
    );

    if (stairsOnStartFloor && stairsOnDestFloor) {
      // Create multi-floor directions
      const multiFloorDirections = [
        `Start from ${startRoom.name} on ${getFloorName(startRoom.floor)}`,
        `Navigate to ${stairsOnStartFloor.name}`,
        `Take stairs to ${getFloorName(destRoom.floor)}`,
        `Continue from ${stairsOnDestFloor.name}`,
        `Navigate to ${destRoom.name}`
      ];
      
      setDirections(multiFloorDirections);
      setSelectedFloor(startRoom.floor);
      setShowNavigation(true);
      
      // Auto-switch to destination floor after 3 seconds
      setTimeout(() => {
        setSelectedFloor(destRoom.floor);
      }, 3000);
    }
  };

  const getFloorName = (floorNumber) => {
    const floorNames = {
      1: 'Ground Floor',
      2: 'First Floor', 
      3: 'Second Floor'
    };
    return floorNames[floorNumber] || `Floor ${floorNumber}`;
  };

  const clearNavigation = () => {
    setStartingPoint('');
    setDestination('');
    setShowNavigation(false);
    setCurrentPath([]);
    setDirections([]);
  };

  const swapLocations = () => {
    const temp = startingPoint;
    setStartingPoint(destination);
    setDestination(temp);
  };

  if (showNavigation) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-slate-800 text-white p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowNavigation(false)}
              className="text-white hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl font-bold animate-fade-in">Campus Navigation</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-slate-700 md:hidden transition-all duration-300"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </header>

        <div className="flex h-[calc(100vh-80px)]">
          {/* Sidebar */}
          <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-80 bg-slate-800 text-white p-4 overflow-y-auto transition-all duration-300`}>
            <div className="space-y-4">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg flex items-center">
                    <Route className="w-5 h-5 mr-2" />
                    Navigation Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">From: {roomLocations.find(r => r.id === startingPoint)?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors">
                    <Navigation className="w-4 h-4" />
                    <span className="text-sm">To: {roomLocations.find(r => r.id === destination)?.name}</span>
                  </div>
                  <div className="text-blue-400 text-sm flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Current: {getFloorName(selectedFloor)}</span>
                  </div>
                  <div className="text-purple-400 text-sm flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Est. time: 2-5 minutes</span>
                  </div>
                </CardContent>
              </Card>

              {directions.length > 0 && (
                <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white text-lg">Step-by-Step Directions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {directions.map((direction, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start space-x-3 hover:text-white transition-colors">
                          <span className="bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse">
                            {index + 1}
                          </span>
                          <span>{direction}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              )}

              <Button 
                onClick={clearNavigation}
                className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105"
              >
                Clear Navigation
              </Button>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative">
            <CampusMap 
              selectedFloor={selectedFloor}
              startingPoint={startingPoint}
              destination={destination}
              onFloorChange={setSelectedFloor}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-800 text-white p-4 text-center">
          <p className="text-sm">© 2025 Cloud Net Park. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 animate-fade-in">
            KPR CAS Campus Navigator
          </h1>
          <p className="text-center text-gray-600 mt-2 animate-fade-in animation-delay-1000">
            Find your way around campus with ease
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center flex items-center justify-center">
                <Route className="w-6 h-6 mr-2" />
                Plan Your Route
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Starting Point */}
              <div className="space-y-2 group">
                <label className="text-lg font-semibold text-gray-700 flex items-center group-hover:text-green-600 transition-colors">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  Starting Point
                </label>
                <Select 
                  value={startingPoint} 
                  onValueChange={setStartingPoint}
                >
                  <SelectTrigger className="w-full h-12 text-lg hover:border-green-400 transition-all duration-300 focus:ring-2 focus:ring-green-400">
                    <SelectValue placeholder="Select starting point" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {roomLocations.map((room) => (
                      <SelectItem 
                        key={room.id} 
                        value={room.id}
                        className="hover:bg-green-50 transition-colors cursor-pointer"
                        onMouseEnter={() => setHoveredRoom(room.name)}
                        onMouseLeave={() => setHoveredRoom('')}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{room.name}</span>
                          <span className="text-xs text-gray-500 ml-2">({getFloorName(room.floor)})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={swapLocations}
                  disabled={!startingPoint || !destination}
                  className="rounded-full hover:scale-110 transition-all duration-300 disabled:opacity-50"
                >
                  ↕️ Swap
                </Button>
              </div>

              {/* Destination */}
              <div className="space-y-2 group">
                <label className="text-lg font-semibold text-gray-700 flex items-center group-hover:text-red-600 transition-colors">
                  <Navigation className="w-5 h-5 mr-2 text-red-600" />
                  Destination
                </label>
                <Select 
                  value={destination} 
                  onValueChange={setDestination}
                >
                  <SelectTrigger className="w-full h-12 text-lg hover:border-red-400 transition-all duration-300 focus:ring-2 focus:ring-red-400">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {roomLocations.map((room) => (
                      <SelectItem 
                        key={room.id} 
                        value={room.id}
                        className="hover:bg-red-50 transition-colors cursor-pointer"
                        onMouseEnter={() => setHoveredRoom(room.name)}
                        onMouseLeave={() => setHoveredRoom('')}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{room.name}</span>
                          <span className="text-xs text-gray-500 ml-2">({getFloorName(room.floor)})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Navigate Button */}
              <Button 
                onClick={handleNavigation}
                disabled={!startingPoint || !destination || isLoading}
                className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Start Navigation'
                )}
              </Button>

              {/* Hover Preview */}
              {hoveredRoom && (
                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400 animate-fade-in">
                  <p className="text-sm text-blue-800">
                    <strong>Preview:</strong> {hoveredRoom}
                  </p>
                </div>
              )}

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mt-6 border border-blue-200 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  How to Use:
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li className="flex items-center"><span className="mr-2">📍</span>Select your starting point from the dropdown</li>
                  <li className="flex items-center"><span className="mr-2">🎯</span>Choose your destination</li>
                  <li className="flex items-center"><span className="mr-2">🚀</span>Click "Start Navigation" to see the route</li>
                  <li className="flex items-center"><span className="mr-2">📱</span>Follow the blue path and directions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="hover:text-blue-300 transition-colors">© 2025 Cloud Net Park. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CampusNavigator;

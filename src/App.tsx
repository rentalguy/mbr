import React, { useState } from 'react';
import { 
  MapPin, 
  Key, 
  Wifi, 
  Car, 
  Phone, 
  Clock, 
  Home, 
  Utensils, 
  Camera, 
  Heart,
  CheckCircle,
  AlertCircle,
  Info,
  Waves,
  Sun,
  Coffee,
  Bed,
  Bath,
  Tv,
  AirVent,
  ChefHat,
  ShoppingCart,
  Star,
  Calendar,
  Users
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const sections = [
    { id: 'welcome', label: 'Welcome', icon: Heart },
    { id: 'checkin', label: 'Check-in', icon: Key },
    { id: 'property', label: 'Property Info', icon: Home },
    { id: 'amenities', label: 'Amenities', icon: Star },
    { id: 'local', label: 'Local Guide', icon: MapPin },
    { id: 'checkout', label: 'Check-out', icon: CheckCircle }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', detail: 'Network: MorgansBayside | Password: OceanView2024' },
    { icon: Tv, title: 'Smart TV', detail: '65" 4K TV with Netflix, Hulu, and streaming apps' },
    { icon: AirVent, title: 'Central A/C', detail: 'Climate control throughout the property' },
    { icon: ChefHat, title: 'Full Kitchen', detail: 'Fully equipped with all cooking essentials' },
    { icon: Waves, title: 'Bay Access', detail: 'Private dock with stunning water views' },
    { icon: Car, title: 'Free Parking', detail: '2 dedicated parking spots included' }
  ];

  const localSpots = [
    { 
      category: 'Dining',
      icon: Utensils,
      places: [
        { name: 'The Bayside Skillet', type: 'Breakfast', distance: '0.3 miles' },
        { name: 'Dough Roller', type: 'Pizza & Family', distance: '0.5 miles' },
        { name: 'Seacrets', type: 'Waterfront Dining', distance: '1.2 miles' },
        { name: 'Fager\'s Island', type: 'Fine Dining', distance: '1.5 miles' }
      ]
    },
    {
      category: 'Attractions',
      icon: Camera,
      places: [
        { name: 'Ocean City Boardwalk', type: 'Entertainment', distance: '1.8 miles' },
        { name: 'Assateague Island', type: 'Wildlife & Beach', distance: '8 miles' },
        { name: 'Jolly Roger Amusement Park', type: 'Family Fun', distance: '2.1 miles' },
        { name: 'OC Beach', type: 'Swimming & Sunbathing', distance: '1.5 miles' }
      ]
    }
  ];

  const NavigationButton = ({ section, isActive, onClick }) => {
    const Icon = section.icon;
    return (
      <button
        onClick={() => onClick(section.id)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
            : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span className="font-medium">{section.label}</span>
      </button>
    );
  };

  const SectionCard = ({ children, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Morgan's Bayside Retreat</h1>
              <div className="flex items-center space-x-2 text-blue-100">
                <MapPin className="w-4 h-4" />
                <span>Ocean City, Maryland</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <Waves className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm">Waterfront</span>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm">Sleeps 8</span>
              </div>
              <div className="text-center">
                <Bed className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm">4 Bedrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {sections.map((section) => (
            <NavigationButton
              key={section.id}
              section={section}
              isActive={activeSection === section.id}
              onClick={setActiveSection}
            />
          ))}
        </div>

        {/* Welcome Section */}
        {activeSection === 'welcome' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Bayside Getaway!</h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  We're thrilled to have you stay at Morgan's Bayside Retreat. This beautiful waterfront property 
                  offers the perfect blend of relaxation and adventure, with stunning bay views and easy access 
                  to all that Ocean City has to offer.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Perfect Location</h3>
                  <p className="text-gray-600">Minutes from the beach and boardwalk</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Waves className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Waterfront Views</h3>
                  <p className="text-gray-600">Private dock with breathtaking sunsets</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Home className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Modern Comfort</h3>
                  <p className="text-gray-600">Fully equipped for a perfect stay</p>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Check-in Section */}
        {activeSection === 'checkin' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Check-in Instructions</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Step 1: Arrival Time</h3>
                    <p className="text-gray-600">Check-in is available after 4:00 PM. If you need early check-in, please contact us in advance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Key className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Step 2: Access Code</h3>
                    <p className="text-gray-600 mb-2">Your door code is: <span className="font-bold text-blue-600 text-lg">2024</span></p>
                    <p className="text-gray-600">Enter the code on the keypad and press the lock button. The door will unlock automatically.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <Car className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Step 3: Parking</h3>
                    <p className="text-gray-600">Two parking spots are reserved for you in front of the house. Additional street parking is available if needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Info className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Step 4: Getting Settled</h3>
                    <p className="text-gray-600">Once inside, you'll find welcome information on the kitchen counter, including WiFi details and local recommendations.</p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard className="bg-red-50 border border-red-200">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-red-800">Important Contact Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-red-800">Property Manager</p>
                    <p className="text-red-700">(410) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-red-800">Emergency Only</p>
                    <p className="text-red-700">911</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Property Info Section */}
        {activeSection === 'property' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <Home className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Property Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Property Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Bed className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">4 Bedrooms (Sleeps 8 comfortably)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bath className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">3 Full Bathrooms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Waves className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">Waterfront with Private Dock</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">2 Dedicated Parking Spots</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">House Rules</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Check-in: 4:00 PM | Check-out: 11:00 AM</p>
                    <p>• Maximum occupancy: 8 guests</p>
                    <p>• No smoking inside the property</p>
                    <p>• No pets allowed</p>
                    <p>• Quiet hours: 10 PM - 8 AM</p>
                    <p>• No parties or events</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Important Notes</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Thermostat:</strong> Located in the main hallway. Please keep between 68-78°F.</p>
                    <p className="mb-2"><strong>Water Heater:</strong> Allow 30 minutes between showers for hot water recovery.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Dock Usage:</strong> Use at your own risk. Life jackets available in the utility closet.</p>
                    <p className="mb-2"><strong>Garbage:</strong> Collection is Tuesday and Friday. Place bins at curb by 7 AM.</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Amenities Section */}
        {activeSection === 'amenities' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Amenities & Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                      <Icon className="w-8 h-8 text-blue-500 mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">{amenity.title}</h3>
                      <p className="text-gray-600 text-sm">{amenity.detail}</p>
                    </div>
                  );
                })}
              </div>
            </SectionCard>

            <SectionCard>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kitchen & Dining</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Fully Stocked Kitchen</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Full-size refrigerator and freezer</li>
                    <li>• Electric stove and oven</li>
                    <li>• Microwave and dishwasher</li>
                    <li>• Coffee maker and toaster</li>
                    <li>• All cookware and utensils</li>
                    <li>• Dishes and glassware for 8</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Dining Area</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Dining table seats 8</li>
                    <li>• Bar seating for 4</li>
                    <li>• Outdoor dining on deck</li>
                    <li>• Gas grill available</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Local Guide Section */}
        {activeSection === 'local' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Local Area Guide</h2>
              </div>
              
              {localSpots.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="mb-8">
                    <div className="flex items-center mb-4">
                      <Icon className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.places.map((place, placeIndex) => (
                        <div key={placeIndex} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{place.name}</h4>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{place.distance}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{place.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </SectionCard>

            <SectionCard className="bg-green-50">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Grocery & Essentials</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Food Lion</h4>
                  <p className="text-gray-600 text-sm mb-1">Full-service grocery store</p>
                  <p className="text-green-600 font-medium">0.8 miles</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Wawa</h4>
                  <p className="text-gray-600 text-sm mb-1">Convenience store & gas</p>
                  <p className="text-green-600 font-medium">0.4 miles</p>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Check-out Section */}
        {activeSection === 'checkout' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Check-out Instructions</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Check-out Time: 11:00 AM</h3>
                    <p className="text-gray-600">Please vacate the property by 11:00 AM to allow time for cleaning before the next guests arrive.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-800 mb-4">Before You Leave</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Start dishwasher if dishes are dirty</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Take out trash to bins outside</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Turn off all lights and AC</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Lock all doors and windows</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-800 mb-4">No Need To...</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strip beds or wash linens</li>
                      <li>• Deep clean the property</li>
                      <li>• Wash dishes (just rinse and load)</li>
                      <li>• Vacuum or mop floors</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="font-bold text-gray-800">Thank You!</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We hope you had a wonderful stay at Morgan's Bayside Retreat! Your feedback means the world to us.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">Leave a review:</span>
                    <span className="font-medium text-blue-600">OC Rental Pro Guest Portal</span>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="w-6 h-6" />
            <span className="text-xl font-bold">OC Rental Pro</span>
          </div>
          <p className="text-gray-300 mb-2">Making your Ocean City vacation unforgettable</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>(410) 555-0123</span>
            <span>•</span>
            <span>info@ocrentalpro.com</span>
            <span>•</span>
            <span>Available 24/7</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
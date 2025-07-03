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
  Users,
  MessageCircle,
  Send,
  Bot,
  Play,
  Navigation,
  ThumbsUp,
  ThumbsDown,
  X,
  Image as ImageIcon
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface NavigationButtonProps {
  section: {
    id: string;
    label: string;
    icon: React.ComponentType<any>;
  };
  isActive: boolean;
  onClick: (id: string) => void;
}

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

const App = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: "Welcome to Morgan's Bayside Retreat! I'm here to help make your stay amazing. I can assist with activity recommendations, budget planning, local dining, and answer any questions about the property.",
      timestamp: new Date(),
      suggestions: [
        "Show me free activities nearby",
        "Help me plan a daily budget",
        "What are the best restaurants?",
        "Tell me about the property amenities"
      ]
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [checkInForm, setCheckInForm] = useState({
    experience: '',
    category: '',
    feedback: '',
    contactRequest: false
  });

  // Check if today is check-in day (for demo, we'll make it always available)
  const isCheckInDay = true;

  const sections = [
    { id: 'welcome', label: 'Welcome', icon: Heart },
    { id: 'chat', label: 'Chat Assistant', icon: MessageCircle },
    { id: 'media', label: 'Photos & Tour', icon: Camera },
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

  const getBotResponse = (userMessage: string): { content: string; suggestions: string[] } => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('free') || message.includes('budget') || message.includes('cheap')) {
      return {
        content: `**🆓 FREE & LOW-COST ACTIVITIES**

**Completely Free:**
• Walk the Ocean City Boardwalk (1.8 miles away)
• Visit Assateague Island State Park - $5 parking only
• Sunset watching from your private dock
• Beach access at multiple public points
• Hiking trails at Assateague Island

**Under $20 per person:**
• Mini golf at various boardwalk locations ($8-12)
• Arcade games on the boardwalk ($10-15)
• Ice cream and treats ($5-8)
• Fishing from public piers ($10 day pass)

**Family Packages:**
• Jolly Roger all-day passes: $35/person
• Ripley's Believe It or Not: $18/adult, $12/child

Would you like me to help you plan a specific daily budget?`,
        suggestions: [
          "Plan a $50/day budget for 2 people",
          "Plan a $100/day budget for a family",
          "Show me restaurant recommendations",
          "What about evening entertainment?"
        ]
      };
    }
    
    if (message.includes('budget') && (message.includes('plan') || message.includes('daily'))) {
      return {
        content: `**💰 DAILY BUDGET PLANNING**

**Budget Option ($50/day for 2 people):**
• Breakfast: Cook at property ($8)
• Lunch: Boardwalk food ($20)
• Dinner: Casual dining ($35)
• Activities: Beach/boardwalk walk (Free)
• Evening: Ice cream treat ($7)

**Moderate Option ($100/day for 2 people):**
• Breakfast: Local café ($25)
• Lunch: Waterfront restaurant ($40)
• Dinner: Nice restaurant ($50)
• Activities: Mini golf or attraction ($20)
• Drinks/snacks: ($15)

**Premium Option ($200/day for 2 people):**
• Breakfast: Upscale brunch ($45)
• Lunch: Fine dining ($60)
• Dinner: Premium restaurant ($80)
• Activities: Multiple attractions ($40)
• Spa/premium experiences ($75)

Which budget range works best for your group?`,
        suggestions: [
          "Show me specific restaurants for each budget",
          "What activities fit my budget?",
          "Help me save money on dining",
          "Plan a romantic evening"
        ]
      };
    }
    
    if (message.includes('restaurant') || message.includes('dining') || message.includes('food')) {
      return {
        content: `**🍽️ RESTAURANT RECOMMENDATIONS**

**Budget-Friendly ($10-20/person):**
• Dough Roller - Famous pizza & subs (0.5 mi)
• Dumser's Dairyland - Ice cream & casual (1.2 mi)
• Thrashers French Fries - Boardwalk classic (1.8 mi)

**Mid-Range ($20-40/person):**
• The Bayside Skillet - Great breakfast (0.3 mi)
• Seacrets - Waterfront dining & drinks (1.2 mi)
• Phillips Seafood - Local seafood favorite (1.5 mi)

**Fine Dining ($40+/person):**
• Fager's Island - Upscale waterfront (1.5 mi)
• The Hobbit - Cozy fine dining (2.1 mi)
• Liquid Assets - Wine bar & cuisine (1.8 mi)

**Special Dietary Options:**
• Vegetarian/Vegan: Greene Turtle, Seacrets
• Gluten-Free: Most restaurants accommodate

Need reservations help or specific cuisine recommendations?`,
        suggestions: [
          "Make a reservation recommendation",
          "Show me breakfast spots",
          "What about late-night dining?",
          "Best seafood restaurants"
        ]
      };
    }
    
    if (message.includes('amenities') || message.includes('property') || message.includes('wifi')) {
      return {
        content: `**🏠 PROPERTY AMENITIES**

**Technology:**
• WiFi: Network "MorgansBayside" | Password: "OceanView2024"
• 65" Smart TV with Netflix, Hulu, Prime Video
• High-speed internet throughout

**Kitchen & Dining:**
• Fully equipped kitchen with all appliances
• Dining for 8 people
• Gas grill on deck
• Coffee maker, toaster, microwave

**Comfort Features:**
• Central A/C and heating
• 4 bedrooms, 3 full bathrooms
• Washer and dryer
• Fresh linens and towels provided

**Outdoor Features:**
• Private dock with bay access
• Outdoor dining area
• 2 dedicated parking spots
• Stunning sunset views

**Safety & Security:**
• Keyless entry system
• Life jackets available
• First aid kit in kitchen
• Emergency contact information posted

Is there a specific amenity you'd like to know more about?`,
        suggestions: [
          "How do I use the smart TV?",
          "Tell me about the dock",
          "Kitchen appliance instructions",
          "Parking information"
        ]
      };
    }
    
    // Default response
    return {
      content: `I'm here to help with any questions about your stay! I can assist with:

• **Activity Planning** - Free and paid attractions
• **Budget Planning** - Daily spending recommendations  
• **Dining** - Restaurant suggestions for all budgets
• **Property Info** - Amenities, WiFi, and house details
• **Local Area** - Directions, shopping, and hidden gems
• **Check-in/out** - Process and requirements

What would you like to know about?`,
      suggestions: [
        "Show me free activities",
        "Help plan my budget",
        "Restaurant recommendations",
        "Property amenities"
      ]
    };
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    const botResponse = getBotResponse(currentMessage);
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: botResponse.content,
      timestamp: new Date(),
      suggestions: botResponse.suggestions
    };

    setChatMessages(prev => [...prev, userMessage, botMessage]);
    setCurrentMessage('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
    handleSendMessage();
  };

  const handleCheckInSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Check-in feedback submitted:', checkInForm);
    setShowCheckInModal(false);
    setCheckInForm({
      experience: '',
      category: '',
      feedback: '',
      contactRequest: false
    });
    alert('Thank you for your feedback! We appreciate your input.');
  };

  const NavigationButton: React.FC<NavigationButtonProps> = ({ section, isActive, onClick }) => {
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

  const SectionCard: React.FC<SectionCardProps> = ({ children, className = '' }) => (
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
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
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

              {/* Reservation Info */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Your Reservation</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>
                    <p className="font-medium">Check-in</p>
                    <p className="text-lg">Today, 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Check-out</p>
                    <p className="text-lg">Sunday, 11:00 AM</p>
                  </div>
                  <div>
                    <p className="font-medium">Guests</p>
                    <p className="text-lg">4 Adults</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Chat Section */}
        {activeSection === 'chat' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <Bot className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Your Personal Assistant</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto mb-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-3xl p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line">{message.content}</div>
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="block w-full text-left p-2 bg-blue-50 hover:bg-blue-100 rounded text-blue-700 text-sm transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about your stay..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Media Section */}
        {activeSection === 'media' && (
          <div className="space-y-8">
            <SectionCard>
              <div className="flex items-center mb-6">
                <Camera className="w-8 h-8 text-purple-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Photos & Virtual Tour</h2>
              </div>
              
              {/* Photo Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Property Photos</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Virtual Tour */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Virtual Tour</h3>
                <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-lg">Click to Start Virtual Tour</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location & Directions</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions to Property</span>
                </button>
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
              
              <div className="space-y-6 mb-8">
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
              </div>

              {/* Check-in Button */}
              <button
                onClick={() => setShowCheckInModal(true)}
                disabled={!isCheckInDay}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  isCheckInDay
                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isCheckInDay ? 'Complete Check-in Process' : 'Check-in Available on Arrival Day'}
              </button>
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
              </div>
            </SectionCard>
          </div>
        )}
      </div>

      {/* Check-in Modal */}
      {showCheckInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Check-in Feedback</h3>
              <button
                onClick={() => setShowCheckInModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How was your arrival experience?
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setCheckInForm({...checkInForm, experience: 'positive'})}
                    className={`flex items-center space-x-2 p-3 rounded-lg border ${
                      checkInForm.experience === 'positive' 
                        ? 'bg-green-50 border-green-500 text-green-700' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>Great</span>
                  </button>
                  <button
                    onClick={() => setCheckInForm({...checkInForm, experience: 'negative'})}
                    className={`flex items-center space-x-2 p-3 rounded-lg border ${
                      checkInForm.experience === 'negative' 
                        ? 'bg-red-50 border-red-500 text-red-700' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsDown className="w-5 h-5" />
                    <span>Issues</span>
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category (if applicable)
                </label>
                <select
                  value={checkInForm.category}
                  onChange={(e) => setCheckInForm({...checkInForm, category: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="parking">Parking</option>
                  <option value="missing-items">Missing Items</option>
                  <option value="directions">Directions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  value={checkInForm.feedback}
                  onChange={(e) => setCheckInForm({...checkInForm, feedback: e.target.value})}
                  placeholder="Please share any details about your experience..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contact-request"
                  checked={checkInForm.contactRequest}
                  onChange={(e) => setCheckInForm({...checkInForm, contactRequest: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="contact-request" className="text-sm text-gray-700">
                  I would like the host to contact me about this experience
                </label>
              </div>
              
              <button
                onClick={handleCheckInSubmit}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}

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
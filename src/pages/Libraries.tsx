
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Clock, Star, BookOpen } from "lucide-react";

const librariesData = [
  {
    id: 1,
    name: "Central Library",
    address: "123 Main Street, Bangalore",
    rating: 4.8,
    distance: "1.2 km",
    openHours: "8:00 AM - 8:00 PM",
    description: "A spacious library with a vast collection of books across all genres.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=500"
  },
  {
    id: 2,
    name: "Knowledge Hub",
    address: "456 Park Avenue, Bangalore",
    rating: 4.6,
    distance: "2.5 km",
    openHours: "9:00 AM - 7:00 PM",
    description: "Modern library with digital resources and comfortable study areas.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500"
  },
  {
    id: 3,
    name: "City Public Library",
    address: "789 Lake View, Bangalore",
    rating: 4.5,
    distance: "3.1 km",
    openHours: "8:30 AM - 9:00 PM",
    description: "Historic library with extensive research materials and quiet reading rooms.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=500"
  }
];

const Libraries = () => {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get location from URL params if available
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const locationParam = params.get('location');
    if (locationParam) {
      setLocation(locationParam);
    }
  }, []);

  // Filter libraries based on search query
  const filteredLibraries = librariesData.filter(library => 
    library.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    library.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-dola-primary/10 to-white dark:from-dola-primary/5 dark:to-gray-900 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Libraries Near You</h1>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    className="pl-10" 
                    placeholder="Enter your location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                  />
                </div>
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    className="pl-10" 
                    placeholder="Search libraries by name" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="bg-dola-primary hover:bg-dola-primary/90">
                  <Search className="mr-2" size={18} />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Libraries {location && `near ${location}`}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLibraries.map((library) => (
                <Card key={library.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={library.image} 
                      alt={library.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{library.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        <Star className="fill-yellow-500 h-4 w-4" />
                        <span className="ml-1 text-sm">{library.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{library.address}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{library.openHours}</span>
                    </div>
                    
                    <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                      {library.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-dola-primary text-sm font-medium">
                        {library.distance} away
                      </span>
                      <Link to={`/libraries/${library.id}`}>
                        <Button size="sm" className="bg-dola-primary hover:bg-dola-primary/90">
                          <BookOpen className="mr-1 h-4 w-4" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Libraries;

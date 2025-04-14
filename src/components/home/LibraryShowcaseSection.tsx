
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder for library data - would come from API in production
const libraryData = [
  {
    id: 1,
    name: "Central Library",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637",
    rating: 4.8,
    ratingCount: 156,
    hours: "8:00 AM - 10:00 PM",
    currentVisitors: 42,
    amenities: ["WiFi", "Quiet Zones", "Cafe", "AC"],
  },
  {
    id: 2,
    name: "Knowledge Hub",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1562932831-afcfe48b5786",
    rating: 4.5,
    ratingCount: 120,
    hours: "9:00 AM - 8:00 PM",
    currentVisitors: 28,
    amenities: ["WiFi", "Study Rooms", "Power Outlets"],
  },
  {
    id: 3,
    name: "Bookworm Paradise",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1510172951991-856a654063f9",
    rating: 4.9,
    ratingCount: 210,
    hours: "24x7",
    currentVisitors: 56,
    amenities: ["WiFi", "Cafe", "AC", "Meeting Rooms", "Printing"],
  },
  {
    id: 4,
    name: "Scholar's Haven",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54",
    rating: 4.7,
    ratingCount: 89,
    hours: "10:00 AM - 9:00 PM",
    currentVisitors: 35,
    amenities: ["WiFi", "Coffee Machine", "AC", "Quiet Zones"],
  },
];

const LibraryShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const librariesPerView = 3;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + librariesPerView >= libraryData.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, libraryData.length - librariesPerView) 
        : prevIndex - 1
    );
  };
  
  const visibleLibraries = libraryData.slice(
    currentIndex,
    Math.min(currentIndex + librariesPerView, libraryData.length)
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Libraries</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover top-rated libraries across India
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-gray-300 dark:border-gray-700"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-gray-300 dark:border-gray-700"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleLibraries.map((library) => (
            <div 
              key={library.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={`${library.image}?auto=format&fit=crop&w=800&q=80`} 
                  alt={library.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-2 py-1 rounded-md flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#FBBF24" />
                  <span className="font-medium">{library.rating}</span>
                  <span className="text-gray-500 text-xs ml-1">({library.ratingCount})</span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{library.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{library.location}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {library.amenities.map((amenity, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{library.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{library.currentVisitors} visitors now</span>
                  </div>
                </div>
                
                <Link 
                  to={`/libraries/${library.id}`} 
                  className="block w-full text-center py-2 bg-dola-primary/10 text-dola-primary font-medium rounded-lg hover:bg-dola-primary/20 transition-colors"
                >
                  View Library
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/libraries">
            <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10">
              View All Libraries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LibraryShowcaseSection;

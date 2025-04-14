
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Users,
  Star,
  StarHalf,
  BookOpen,
  ArrowLeft,
  Share2,
  Bookmark,
  Info,
  CalendarDays,
  Wifi,
  Coffee,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample library data - would come from API in production
const librariesData = [
  {
    id: 1,
    name: "Central Library",
    address: "123 Main Street, Bangalore",
    rating: 4.8,
    reviewCount: 156,
    distance: "1.2 km",
    openHours: "8:00 AM - 8:00 PM",
    openDays: "Monday - Saturday",
    phone: "+91 98765 43210",
    email: "central@libraries.in",
    capacity: 200,
    currentVisitors: 42,
    description: "A spacious library with a vast collection of books across all genres. Features comfortable reading spaces, free Wi-Fi, and a coffee shop.",
    longDescription: "The Central Library is one of Bangalore's premier literary institutions. Founded in 1965, it houses over 100,000 books across fiction, non-fiction, reference, and academic categories. The recently renovated building features modern amenities including high-speed internet, climate-controlled reading rooms, and a newly opened café on the ground floor. The library hosts regular events including author meetups, book clubs, and children's reading sessions on weekends. The digital catalog allows members to reserve books online and access e-books and digital periodicals.",
    amenities: ["Free Wi-Fi", "Coffee Shop", "Reading Rooms", "Study Cubicles", "Computer Access", "Printing Services", "Children's Section", "Meeting Rooms"],
    images: [
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1500",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1500",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1500",
      "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=1500"
    ],
    events: [
      {
        name: "Book Club: Modern Fiction",
        date: "2025-04-20",
        time: "5:30 PM - 7:00 PM"
      },
      {
        name: "Children's Reading Hour",
        date: "2025-04-21",
        time: "10:00 AM - 11:00 AM"
      },
      {
        name: "Author Meet: Sudha Murty",
        date: "2025-04-25",
        time: "4:00 PM - 6:00 PM"
      }
    ],
    reviews: [
      {
        user: "Priya M.",
        rating: 5,
        comment: "Amazing collection of books and very helpful staff. The new coffee shop is a great addition!",
        date: "2025-03-15"
      },
      {
        user: "Rahul K.",
        rating: 4,
        comment: "Great study environment. Internet could be faster during peak hours.",
        date: "2025-03-10"
      },
      {
        user: "Anika S.",
        rating: 5,
        comment: "The children's section is wonderful! My kids love coming here on weekends.",
        date: "2025-03-05"
      }
    ]
  },
  {
    id: 2,
    name: "Knowledge Hub",
    address: "456 Park Avenue, Bangalore",
    rating: 4.6,
    reviewCount: 120,
    distance: "2.5 km",
    openHours: "9:00 AM - 7:00 PM",
    openDays: "Monday - Sunday",
    phone: "+91 87654 32109",
    email: "info@knowledgehub.in",
    capacity: 150,
    currentVisitors: 28,
    description: "Modern library with digital resources and comfortable study areas.",
    longDescription: "Knowledge Hub is a contemporary library built in 2010 with a focus on digital learning resources and modern study facilities. The library offers a blend of traditional books and extensive digital archives accessible through in-house computers. The building features energy-efficient design with plenty of natural light and ergonomic seating. Knowledge Hub specializes in academic and research materials, making it popular among university students and researchers. The quiet study zones and group discussion rooms can be booked in advance through their mobile app.",
    amenities: ["Fast Internet", "Digital Archives", "Study Rooms", "Charging Stations", "Print & Scan Services", "Reference Section", "Academic Journals", "Outdoor Reading Area"],
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1500",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1500",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1500",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1500"
    ],
    events: [
      {
        name: "Research Methodology Workshop",
        date: "2025-04-18",
        time: "2:00 PM - 5:00 PM"
      },
      {
        name: "Digital Resources Training",
        date: "2025-04-22",
        time: "11:00 AM - 12:30 PM"
      },
      {
        name: "Career Guidance Session",
        date: "2025-04-28",
        time: "3:00 PM - 5:00 PM"
      }
    ],
    reviews: [
      {
        user: "Vikram S.",
        rating: 5,
        comment: "The digital resources are extensive and up-to-date. Perfect for research work!",
        date: "2025-03-18"
      },
      {
        user: "Meera T.",
        rating: 4,
        comment: "Love the study rooms, but wish they had more of them. Gets crowded during exam season.",
        date: "2025-03-12"
      },
      {
        user: "Arjun P.",
        rating: 5,
        comment: "The staff is extremely knowledgeable and helped me find some rare academic papers.",
        date: "2025-03-02"
      }
    ]
  },
  {
    id: 3,
    name: "City Public Library",
    address: "789 Lake View, Bangalore",
    rating: 4.5,
    reviewCount: 198,
    distance: "3.1 km",
    openHours: "8:30 AM - 9:00 PM",
    openDays: "Monday - Saturday",
    phone: "+91 76543 21098",
    email: "contact@citylibrary.in",
    capacity: 180,
    currentVisitors: 35,
    description: "Historic library with extensive research materials and quiet reading rooms.",
    longDescription: "The City Public Library is housed in a heritage building dating back to 1932 and is known for its impressive architecture and peaceful atmosphere. The library maintains a vast collection of rare books, manuscripts, and historical documents related to the city's heritage. The main reading hall features high ceilings, wooden furnishings, and traditional decor, providing a classic library experience. Despite its historical setting, the library has been carefully modernized with current amenities while preserving its original charm. It's particularly popular among history enthusiasts, writers, and those seeking a quiet retreat for focused work or reading.",
    amenities: ["Historical Archives", "Manuscript Collection", "Quiet Reading Hall", "Preservation Lab", "Local History Section", "Microfilm Collection", "Newspaper Archives", "Heritage Tours"],
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1500",
      "https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=1500",
      "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1500",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1500"
    ],
    events: [
      {
        name: "Heritage Building Tour",
        date: "2025-04-19",
        time: "10:00 AM - 11:30 AM"
      },
      {
        name: "Local History Exhibition",
        date: "2025-04-23",
        time: "9:00 AM - 7:00 PM"
      },
      {
        name: "Rare Book Preservation Workshop",
        date: "2025-04-27",
        time: "2:00 PM - 4:30 PM"
      }
    ],
    reviews: [
      {
        user: "Deepak R.",
        rating: 5,
        comment: "A gem for history buffs! The rare manuscripts section is absolutely fascinating.",
        date: "2025-03-20"
      },
      {
        user: "Lakshmi N.",
        rating: 4,
        comment: "Beautiful historic building with a serene atmosphere. Perfect for quiet reading.",
        date: "2025-03-14"
      },
      {
        user: "Sanjay G.",
        rating: 4,
        comment: "I appreciate the well-preserved historical documents. Staff could be more helpful though.",
        date: "2025-03-08"
      }
    ]
  }
];

const LibraryDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [library, setLibrary] = useState<any | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Find the library with the matching id
    const libraryId = parseInt(id || "0");
    const foundLibrary = librariesData.find(lib => lib.id === libraryId);
    
    if (foundLibrary) {
      setLibrary(foundLibrary);
      // Set page title
      document.title = `${foundLibrary.name} | DOLA`;
    }
  }, [id]);

  if (!library) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Library not found</h2>
            <Link to="/libraries">
              <Button>
                <ArrowLeft className="mr-2" size={18} />
                Back to Libraries
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === library.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? library.images.length - 1 : prevIndex - 1
    );
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    
    toast({
      title: isBookmarked ? "Library removed from bookmarks" : "Library added to bookmarks",
      description: isBookmarked ? 
        `${library.name} has been removed from your bookmarks` : 
        `${library.name} has been added to your bookmarks`,
      duration: 3000,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `DOLA - ${library.name}`,
        text: `Check out ${library.name} on DOLA!`,
        url: window.location.href,
      })
      .catch((error) => {
        toast({
          title: "Error sharing",
          description: "There was an error sharing this library",
          variant: "destructive",
        });
      });
    } else {
      // Fallback if Web Share API is not supported
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Library link copied to clipboard",
        duration: 2000,
      });
    }
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-500 text-yellow-500" size={18} />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-500 text-yellow-500" size={18} />);
    }
    
    // Add empty stars to complete 5 stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={18} />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Image Carousel */}
        <section className="relative h-64 md:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={library.images[currentImageIndex]} 
              alt={library.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl bg-white/20 backdrop-blur-md px-6 py-4 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{library.name}</h1>
                <div className="flex items-center space-x-2 mt-2 text-white">
                  <MapPin size={18} />
                  <span>{library.address}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image navigation buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Image indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {library.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </section>
        
        {/* Library Info Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(library.rating)}
                      </div>
                      <span className="text-gray-600">
                        {library.rating} ({library.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleShare}
                      className="rounded-full"
                    >
                      <Share2 size={18} />
                    </Button>
                    <Button
                      variant={isBookmarked ? "default" : "outline"}
                      size="icon"
                      onClick={toggleBookmark}
                      className={`rounded-full ${isBookmarked ? 'bg-dola-primary text-white' : ''}`}
                    >
                      <Bookmark size={18} className={isBookmarked ? 'fill-white' : ''} />
                    </Button>
                  </div>
                </div>
                
                <Tabs defaultValue="about">
                  <TabsList className="mb-6">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="events">Events</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">About {library.name}</h2>
                        <p className="text-gray-700 mb-6">{library.longDescription}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Contact Information</h3>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Phone className="text-dola-primary mr-2" size={18} />
                                <span>{library.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="text-dola-primary mr-2" size={18} />
                                <span>{library.email}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Opening Hours</h3>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Clock className="text-dola-primary mr-2" size={18} />
                                <span>{library.openHours}</span>
                              </div>
                              <div className="flex items-start">
                                <CalendarDays className="text-dola-primary mr-2 mt-0.5" size={18} />
                                <span>{library.openDays}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {library.images.map((image, index) => (
                        <div 
                          key={index} 
                          className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img 
                            src={image} 
                            alt={`${library.name} - Image ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="amenities">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {library.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              {amenity.toLowerCase().includes('wifi') && <Wifi className="text-dola-primary mr-2" size={18} />}
                              {amenity.toLowerCase().includes('coffee') && <Coffee className="text-dola-primary mr-2" size={18} />}
                              {!amenity.toLowerCase().includes('wifi') && !amenity.toLowerCase().includes('coffee') && 
                                <Info className="text-dola-primary mr-2" size={18} />
                              }
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="events">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                        <div className="space-y-4">
                          {library.events.map((event, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                              <h3 className="font-semibold text-lg">{event.name}</h3>
                              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <CalendarDays className="mr-1" size={16} />
                                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1" size={16} />
                                  <span>{event.time}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-xl font-semibold">Reviews</h2>
                          <Button className="bg-dola-primary hover:bg-dola-primary/90">
                            Write a Review
                          </Button>
                        </div>
                        
                        <div className="space-y-6">
                          {library.reviews.map((review, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">{review.user}</h3>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex mb-2">
                                {renderStars(review.rating)}
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="w-full md:w-1/3">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">Quick Info</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Open Now
                      </Badge>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="text-dola-primary mr-2" size={18} />
                          <span>Current Visitors</span>
                        </div>
                        <Badge variant="secondary">
                          {library.currentVisitors} / {library.capacity}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MapPin className="text-dola-primary mr-2" size={18} />
                          <span>Distance</span>
                        </div>
                        <span className="font-medium">{library.distance}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BookOpen className="text-dola-primary mr-2" size={18} />
                          <span>Card Required</span>
                        </div>
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <Button className="w-full bg-dola-primary hover:bg-dola-primary/90 mb-3">
                      Check-in Now
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Similar Libraries Nearby</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {librariesData
                .filter(item => item.id !== library.id)
                .map((library) => (
                <Card key={library.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={library.images[0]} 
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
        
        <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-dola-dark dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Visit?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Sign up for a DOLA card to access all libraries across India with a single membership.
              Get exclusive benefits and track your library usage.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button className="bg-dola-primary hover:bg-dola-primary/90 min-w-[150px]">
                  Register Now
                </Button>
              </Link>
              <Link to="/card">
                <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10 min-w-[150px]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LibraryDetail;

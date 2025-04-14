
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder testimonial data - would come from an API in production
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Student, Delhi University",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "DOLA has transformed how I study. I can now access any library near my college or home with just one card. The pay-per-use model saves me money compared to monthly subscriptions.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "As someone who works remotely, finding quiet places to work was always challenging. DOLA helps me discover new libraries with good WiFi and comfortable seating. It's been a game-changer for my productivity.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Ph.D. Researcher",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The variety of libraries available through DOLA is impressive. I can choose different environments depending on my mood and research needs. The rating system helps me find the best places with required resources.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "UPSC Aspirant",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "Preparing for government exams requires long hours of focused study. DOLA helps me find libraries with 24x7 access and proper facilities. The digital card is so convenient compared to carrying multiple memberships.",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover how DOLA is transforming library access for students, professionals, 
            and knowledge seekers across India.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Large Quote Icon */}
          <div className="absolute -top-10 left-0 text-gray-200 dark:text-gray-800">
            <Quote size={80} />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg relative z-10">
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-dola-primary mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-gray-300 dark:border-gray-700 h-9 w-9"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-gray-300 dark:border-gray-700 h-9 w-9"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? "bg-dola-primary" 
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

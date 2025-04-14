
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="relative bg-gradient-to-b from-dola-primary/10 to-white dark:from-dola-primary/5 dark:to-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Access Libraries<br />
              <span className="text-dola-primary">Digitally</span> Across India
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              DOLA lets you access any registered library using a single digital card. 
              Learn, study, and grow with comfortable spaces near you.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button className="bg-dola-primary hover:bg-dola-primary/90 text-white font-medium px-6 py-6 w-full sm:w-auto">
                  Get Your Card
                </Button>
              </Link>
              <Link to="/libraries">
                <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10 px-6 py-6 w-full sm:w-auto">
                  Find Libraries
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Find Libraries Near You
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-dola-primary/50"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => setLocation("Bangalore")} className="bg-gray-100 dark:bg-gray-700 border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                    Bangalore
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setLocation("Mumbai")} className="bg-gray-100 dark:bg-gray-700 border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                    Mumbai
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setLocation("Delhi")} className="bg-gray-100 dark:bg-gray-700 border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                    Delhi
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setLocation("Chennai")} className="bg-gray-100 dark:bg-gray-700 border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                    Chennai
                  </Button>
                </div>
                <Link to={`/libraries?location=${encodeURIComponent(location)}`}>
                  <Button className="w-full bg-dola-primary hover:bg-dola-primary/90">
                    <Search className="mr-2" size={18} />
                    Search Libraries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

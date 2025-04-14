
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-dola-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Library Experience?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Join thousands of users who are already enjoying seamless access 
            to libraries across India with DOLA's digital card system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-dola-primary hover:bg-gray-100 px-8 py-6 text-lg">
                Get Your DOLA Card
              </Button>
            </Link>
            <Link to="/libraries">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Explore Libraries <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

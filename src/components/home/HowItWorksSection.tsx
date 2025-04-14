
import { Button } from "@/components/ui/button";
import { CreditCard, MapPin, QrCode, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <CreditCard className="h-12 w-12 text-white" />,
    title: "Register & Get Your Card",
    description: "Sign up and activate your digital library card with a quick online process.",
    color: "bg-dola-primary",
  },
  {
    icon: <MapPin className="h-12 w-12 text-white" />,
    title: "Find A Library",
    description: "Discover libraries near you using our location-based search and filters.",
    color: "bg-dola-secondary",
  },
  {
    icon: <QrCode className="h-12 w-12 text-white" />,
    title: "Scan & Enter",
    description: "Simply scan your card's QR code at the library entrance for instant access.",
    color: "bg-dola-accent",
  },
  {
    icon: <Wallet className="h-12 w-12 text-white" />,
    title: "Pay Per Use",
    description: "Only pay for the time you spend, automatically calculated upon exit.",
    color: "bg-emerald-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How DOLA Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with DOLA in just a few simple steps and enjoy seamless access to libraries across India.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
              >
                <div className={`${step.color} p-4 rounded-full mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <div className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full border-2 border-dola-primary text-dola-primary font-bold">
                  {index + 1}
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-900 rounded-full border-2 border-dola-primary text-dola-primary font-bold absolute top-24 -mt-24">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/register">
            <Button className="bg-dola-primary hover:bg-dola-primary/90 px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

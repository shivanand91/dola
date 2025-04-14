
import { 
  CreditCard, 
  MapPin, 
  Clock, 
  Wallet, 
  QrCode, 
  Star, 
  Shield, 
  BookOpen 
} from "lucide-react";

const features = [
  {
    icon: <CreditCard className="h-10 w-10 text-dola-primary" />,
    title: "Digital Library Card",
    description: "One card to access all registered libraries across India - both online and offline.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-dola-primary" />,
    title: "Library Finder",
    description: "Easily locate nearby libraries with advanced filtering by amenities and services.",
  },
  {
    icon: <QrCode className="h-10 w-10 text-dola-primary" />,
    title: "Seamless Entry",
    description: "Just scan the QR code or enter your card number for instant library access.",
  },
  {
    icon: <Clock className="h-10 w-10 text-dola-primary" />,
    title: "Usage Tracking",
    description: "Automatically tracks your in/out times and calculates pay-per-hour usage.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-dola-primary" />,
    title: "Easy Recharge",
    description: "Recharge your card online via UPI, credit/debit card, or at offline centers.",
  },
  {
    icon: <Star className="h-10 w-10 text-dola-primary" />,
    title: "Ratings & Reviews",
    description: "Share your experience and help others find the best libraries for their needs.",
  },
  {
    icon: <Shield className="h-10 w-10 text-dola-primary" />,
    title: "Secure Access",
    description: "Advanced authentication with OTP verifications for complete security.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-dola-primary" />,
    title: "Extensive Network",
    description: "Growing network of partner libraries offering diverse environments for learning.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose DOLA?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our digital library card system makes finding and accessing libraries simpler than ever before,
            with convenient features designed for modern learners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="p-3 rounded-full bg-dola-primary/10 mb-4 group-hover:bg-dola-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

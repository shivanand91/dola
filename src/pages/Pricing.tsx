
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, HelpCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for occasional library visitors",
      price: isAnnual ? "Free" : "Free",
      features: [
        "Pay-per-hour library access",
        "Base rate at all partner libraries",
        "Digital library card",
        "View transaction history",
        "Find nearby libraries"
      ],
      cta: "Get Started",
      color: "bg-gray-100 dark:bg-gray-800",
      popular: false
    },
    {
      name: "Premium",
      description: "For regular library users and students",
      price: isAnnual ? "₹999/year" : "₹99/month",
      savings: isAnnual ? "Save ₹189" : null,
      features: [
        "Everything in Basic",
        "20% discount on hourly rates",
        "Priority access during peak hours",
        "Reserve study rooms in advance",
        "No convenience fees"
      ],
      cta: "Choose Premium",
      color: "bg-dola-primary text-white",
      popular: true
    },
    {
      name: "Scholar",
      description: "For researchers and avid readers",
      price: isAnnual ? "₹1999/year" : "₹199/month",
      savings: isAnnual ? "Save ₹389" : null,
      features: [
        "Everything in Premium",
        "40% discount on hourly rates",
        "Free access for 10 hours/month",
        "Digital locker for materials",
        "Access to exclusive collections"
      ],
      cta: "Choose Scholar",
      color: "bg-gray-100 dark:bg-gray-800",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-dola-primary/10 to-white dark:from-dola-primary/5 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose a plan that works for your library usage needs. No hidden fees, just pay for what you use with additional benefits.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 inline-flex mb-12">
              <button 
                className={`px-6 py-2 rounded-full ${!isAnnual ? 'bg-dola-primary text-white' : 'text-gray-600 dark:text-gray-400'}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button 
                className={`px-6 py-2 rounded-full ${isAnnual ? 'bg-dola-primary text-white' : 'text-gray-600 dark:text-gray-400'}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className={`rounded-xl overflow-hidden shadow-lg relative ${plan.popular ? 'transform md:-translate-y-4' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-dola-accent text-white px-4 py-1 font-medium text-sm rounded-bl">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className={`${plan.color} p-8`}>
                    <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : ''}`}>{plan.name}</h3>
                    <p className={`mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : ''}`}>{plan.price}</span>
                      {plan.savings && (
                        <span className="ml-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-8 bg-white dark:bg-gray-900">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/register">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-dola-primary hover:bg-dola-primary/90' : 'bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How Our Pricing Works</h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                Our pay-per-use model means you only pay for the time you spend at the library, with subscription plans offering discounts on hourly rates.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Library Hourly Rates</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left">Library Type</th>
                        <th className="py-3 px-4 text-left">Basic Rate</th>
                        <th className="py-3 px-4 text-left">Premium Rate</th>
                        <th className="py-3 px-4 text-left">Scholar Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4">General Libraries</td>
                        <td className="py-3 px-4">₹20/hour</td>
                        <td className="py-3 px-4">₹16/hour</td>
                        <td className="py-3 px-4">₹12/hour</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4">Premium Libraries</td>
                        <td className="py-3 px-4">₹30/hour</td>
                        <td className="py-3 px-4">₹24/hour</td>
                        <td className="py-3 px-4">₹18/hour</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Research Libraries</td>
                        <td className="py-3 px-4">₹40/hour</td>
                        <td className="py-3 px-4">₹32/hour</td>
                        <td className="py-3 px-4">₹24/hour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the pay-per-hour system work?</AccordionTrigger>
                  <AccordionContent>
                    When you check into a library using your DOLA card, our system starts tracking your time. Upon exit, the total duration is calculated, multiplied by the library's hourly rate, and deducted from your DOLA wallet balance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing period. When downgrading, the new rate will apply at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a minimum time charge?</AccordionTrigger>
                  <AccordionContent>
                    Most libraries have a minimum charge of 30 minutes, after which you're billed by the minute. This means you only pay for the exact time you use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if my wallet balance runs out while at a library?</AccordionTrigger>
                  <AccordionContent>
                    You'll receive a notification when your balance is running low. If it depletes entirely, you'll need to recharge your wallet through the DOLA app or website before you can check out of the library.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do annual subscriptions auto-renew?</AccordionTrigger>
                  <AccordionContent>
                    Yes, annual subscriptions auto-renew by default. You'll receive a notification 7 days before renewal, and you can cancel auto-renewal at any time from your account settings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-dola-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Start Your DOLA Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Create your account now and get access to libraries across India with our digital card system.
            </p>
            <Link to="/register">
              <Button className="bg-white text-dola-primary hover:bg-gray-100 px-8 py-6 text-lg">
                Get Your DOLA Card Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

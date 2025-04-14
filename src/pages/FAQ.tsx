
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      id: "general",
      name: "General",
      questions: [
        {
          id: "what-is-dola",
          question: "What is DOLA?",
          answer: "DOLA (Digital Online Library Access) is a service that provides a unified digital card to access libraries across India. Our system allows you to pay only for the time you use at any partner library without needing separate memberships for each."
        },
        {
          id: "cities-available",
          question: "Which cities is DOLA available in?",
          answer: "DOLA is currently available in Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, and Kochi. We are rapidly expanding to more cities across India."
        },
        {
          id: "how-many-libraries",
          question: "How many libraries are part of the DOLA network?",
          answer: "As of April 2025, over 200 libraries across 10 cities are part of the DOLA network, including public libraries, academic libraries, and private reading spaces."
        }
      ]
    },
    {
      id: "cards-accounts",
      name: "Cards & Accounts",
      questions: [
        {
          id: "get-started",
          question: "How do I get started with DOLA?",
          answer: "Simply register on our website or mobile app, verify your email, and complete your profile. Once registered, you can activate your digital card by adding money to your DOLA wallet and start using it immediately."
        },
        {
          id: "card-activation",
          question: "How do I activate my DOLA card?",
          answer: "After registration, you need to add a minimum balance of ₹100 to your DOLA wallet using any of our supported payment methods (UPI, credit/debit cards, net banking). Once your payment is confirmed, your digital card is automatically activated."
        },
        {
          id: "multiple-devices",
          question: "Can I use my DOLA card on multiple devices?",
          answer: "Yes, you can access your DOLA card from any device by logging into your account. However, for security reasons, only one device can be used to check in/out of libraries at a time."
        }
      ]
    },
    {
      id: "payments-billing",
      name: "Payments & Billing",
      questions: [
        {
          id: "payment-methods",
          question: "What payment methods does DOLA accept?",
          answer: "DOLA accepts all major UPI apps (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking. We plan to add more payment options in the future."
        },
        {
          id: "minimum-balance",
          question: "Is there a minimum balance requirement?",
          answer: "We recommend maintaining a minimum balance of ₹50 in your DOLA wallet to ensure uninterrupted access. If your balance falls below this amount, you'll receive a notification to recharge."
        },
        {
          id: "refund-policy",
          question: "What is DOLA's refund policy?",
          answer: "Unused wallet balance can be refunded to your original payment method upon account closure, subject to a ₹25 processing fee. Subscription fees are non-refundable once the service period has begun."
        }
      ]
    },
    {
      id: "using-libraries",
      name: "Using Libraries",
      questions: [
        {
          id: "check-in-out",
          question: "How do I check in and out of libraries?",
          answer: "At the library entrance, scan the QR code displayed at the entry kiosk using the DOLA app, or show your DOLA card QR code to the library staff to scan. For check-out, follow the same process at the exit."
        },
        {
          id: "rate-calculation",
          question: "How is my library usage rate calculated?",
          answer: "Rates vary by library type (general, premium, or research) and your subscription plan. Basic users pay the standard rate, while Premium and Scholar subscribers receive discounts. The time is calculated from check-in to check-out, billed by the minute after the first 30 minutes."
        },
        {
          id: "bring-guests",
          question: "Can I bring guests with my DOLA card?",
          answer: "Each DOLA card is for individual use only. Your guests will need their own DOLA accounts and cards to access partner libraries. However, some libraries offer a guest pass option for an additional fee."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about DOLA's services, policies, and features. Can't find what you're looking for? Contact our support team.
            </p>
            
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-3 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-dola-primary/50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                <ul className="space-y-2">
                  {faqCategories.map((category) => (
                    <li key={category.id}>
                      <a 
                        href={`#${category.id}`}
                        className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-dola-primary"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
                    {category.name}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item) => (
                      <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly support team is here to help you with any questions about DOLA services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-dola-primary hover:bg-dola-primary/90">
                Contact Support
              </Button>
              <Link to="/about">
                <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10">
                  Learn More About DOLA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

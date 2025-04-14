
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Library, MapPin, Clock, CreditCard, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-dola-primary/10 to-white dark:from-dola-primary/5 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About DOLA
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Digital Online Library Access (DOLA) is revolutionizing how people access libraries across India. Our mission is to make knowledge accessible to everyone through a simple, affordable pay-per-use digital card system.
                </p>
                <div className="flex space-x-4">
                  <Link to="/register">
                    <Button className="bg-dola-primary hover:bg-dola-primary/90">
                      Join DOLA Today
                    </Button>
                  </Link>
                  <Link to="/libraries">
                    <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10">
                      Find Libraries
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920" 
                    alt="Library" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-dola-primary/10 text-dola-primary rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <Library className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessible Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Making library resources accessible to everyone in India, regardless of location or economic background.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-dola-primary/10 text-dola-primary rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <CreditCard className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simple Payments</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pay only for what you use with our transparent per-hour pricing system, no complicated memberships.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-dola-primary/10 text-dola-primary rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <MapPin className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nationwide Network</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building a vast network of partner libraries across India to ensure access wherever you go.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2023, DOLA emerged from a simple observation: despite the digital revolution, accessing physical libraries remained unnecessarily complicated.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our founder, Aditya Sharma, experienced this frustration firsthand when moving between cities for work. Each time, he had to navigate complex membership processes at local libraries, often paying for annual memberships despite only needing access for short periods.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  This inspired the creation of DOLA – a unified digital card system that works across multiple libraries with a simple pay-per-hour model. Today, we're partnered with over 200 libraries across 15 Indian cities and growing rapidly.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=500" 
                      alt="Library interior" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500" 
                      alt="Person studying" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=500" 
                      alt="Library from outside" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=500" 
                      alt="Books on shelf" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-dola-primary mr-3 h-5 w-5" />
                      <span className="text-gray-700 dark:text-gray-300">contact@dola.in</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-dola-primary mr-3 h-5 w-5" />
                      <span className="text-gray-700 dark:text-gray-300">+91 98765 43210</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-dola-primary mr-3 h-5 w-5 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">
                        DOLA Headquarters<br />
                        123 Library Road, Indiranagar<br />
                        Bangalore, India - 560001
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-dola-primary mr-3 h-5 w-5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Your Message" 
                        rows={4} 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-dola-primary hover:bg-dola-primary/90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

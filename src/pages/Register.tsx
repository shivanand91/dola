
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto py-12 px-4">
          <Link to="/" className="inline-block mb-8">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Button>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">
                  Join the DOLA Community
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Get your digital library card and access thousands of libraries across India.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-dola-primary/10 text-dola-primary p-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">One Card, All Libraries</h3>
                      <p className="text-gray-600 dark:text-gray-400">Access any registered library with a single card</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-dola-primary/10 text-dola-primary p-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Pay Only For What You Use</h3>
                      <p className="text-gray-600 dark:text-gray-400">Flexible pay-per-hour system without memberships</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-dola-primary/10 text-dola-primary p-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Secure & Simple</h3>
                      <p className="text-gray-600 dark:text-gray-400">OTP verification and easy QR-based check-in system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full flex justify-center">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;


import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LibraryAdminLoginForm from "@/components/auth/LibraryAdminLoginForm";

const LibraryAdminLogin = () => {
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
          
          <div className="flex justify-center">
            <LibraryAdminLoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LibraryAdminLogin;

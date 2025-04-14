
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-dola-primary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <span className="font-bold text-xl text-dola-primary">DOLA</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Digital Online Library Access - Transforming how India accesses libraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-dola-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dola-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dola-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dola-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/libraries" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Find Libraries
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">User Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/card" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  My Card
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-600 dark:text-gray-400 hover:text-dola-primary transition-colors">
                  Usage History
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-dola-primary mt-1" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Library Road, Bangalore, India - 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-dola-primary" size={18} />
                <span className="text-gray-600 dark:text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-dola-primary" size={18} />
                <span className="text-gray-600 dark:text-gray-400">contact@dola.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} DOLA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 text-sm hover:text-dola-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 text-sm hover:text-dola-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-gray-600 dark:text-gray-400 text-sm hover:text-dola-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

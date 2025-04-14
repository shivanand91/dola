
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  LogIn,
  Menu,
  X,
  Search,
  CreditCard,
  Library,
  Home,
  Clock,
  LogOut
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dola-dark shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-dola-primary rounded-full p-2">
            <Library className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-dola-primary">DOLA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-dola-primary dark:hover:text-dola-primary transition-colors">
            <div className="flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/libraries" className="text-gray-700 dark:text-gray-300 hover:text-dola-primary dark:hover:text-dola-primary transition-colors">
            <div className="flex items-center space-x-1">
              <Search className="h-4 w-4" />
              <span>Find Libraries</span>
            </div>
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/card" className="text-gray-700 dark:text-gray-300 hover:text-dola-primary dark:hover:text-dola-primary transition-colors">
                <div className="flex items-center space-x-1">
                  <CreditCard className="h-4 w-4" />
                  <span>My Card</span>
                </div>
              </Link>
              <Link to="/history" className="text-gray-700 dark:text-gray-300 hover:text-dola-primary dark:hover:text-dola-primary transition-colors">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>History</span>
                </div>
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2"
                onClick={logout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
              <Link to="/profile">
                <div className="bg-dola-primary/10 text-dola-primary rounded-full p-2">
                  <User className="h-5 w-5" />
                </div>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/register">
                <Button variant="outline" className="border-dola-primary text-dola-primary hover:bg-dola-primary/10">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-dola-primary hover:bg-dola-primary/90">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
              </Link>
            </div>
          )}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dola-dark border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto py-4 px-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <Home className="h-5 w-5 text-dola-primary" />
              <span>Home</span>
            </Link>
            <Link 
              to="/libraries" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <Search className="h-5 w-5 text-dola-primary" />
              <span>Find Libraries</span>
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to="/card" 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  <CreditCard className="h-5 w-5 text-dola-primary" />
                  <span>My Card</span>
                </Link>
                <Link 
                  to="/history" 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  <Clock className="h-5 w-5 text-dola-primary" />
                  <span>History</span>
                </Link>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  <User className="h-5 w-5 text-dola-primary" />
                  <span>Profile</span>
                </Link>
                <button 
                  className="flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                >
                  <LogOut className="h-5 w-5 text-dola-primary" />
                  <span>Logout</span>
                </button>
              </>
            )}
            {!isAuthenticated && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                <Link 
                  to="/register" 
                  className="w-full"
                  onClick={toggleMenu}
                >
                  <Button variant="outline" className="w-full border-dola-primary text-dola-primary">
                    Register
                  </Button>
                </Link>
                <Link 
                  to="/login" 
                  className="w-full"
                  onClick={toggleMenu}
                >
                  <Button className="w-full bg-dola-primary hover:bg-dola-primary/90">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

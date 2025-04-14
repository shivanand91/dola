
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertCircle, 
  CheckCircle2, 
  Loader2,
  Mail,
  Phone,
  Lock,
  User
} from "lucide-react";

const RegisterForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing in a field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Here we would make an API call to register the user
      // For now, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success toast and move to OTP verification
      toast({
        title: "Verification code sent",
        description: "Please check your email for the verification code.",
        variant: "default",
      });
      
      setIsOtpSent(true);
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp.trim() || otp.length !== 6) {
      setErrors({ otp: "Please enter a valid 6-digit code" });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Here we would make an API call to verify the OTP
      // For now, we'll simulate a successful verification
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration successful!",
        description: "Your account has been created successfully.",
        variant: "default",
      });
      
      // Redirect to login or dashboard
      window.location.href = "/login";
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "The code you entered is incorrect. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
      {!isOtpSent ? (
        <>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join DOLA to access libraries across India
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.name}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.email}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  placeholder="10-digit mobile number"
                  className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.phone}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className={`pl-10 ${errors.password ? "border-red-500" : ""}`}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.password}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className={`pl-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.confirmPassword}
                </p>
              )}
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-dola-primary hover:bg-dola-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-dola-primary font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-dola-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
            <p className="text-gray-600 dark:text-gray-400">
              We've sent a 6-digit verification code to<br />
              <span className="font-medium">{formData.email}</span>
            </p>
          </div>
          
          <form onSubmit={verifyOtp} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                name="otp"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  if (errors.otp) setErrors({});
                }}
                className={`text-center text-lg ${errors.otp ? "border-red-500" : ""}`}
                maxLength={6}
              />
              {errors.otp && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.otp}
                </p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-dola-primary hover:bg-dola-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify & Continue"
              )}
            </Button>
            
            <div className="text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Didn't receive the code?
              </p>
              <Button 
                type="button" 
                variant="link" 
                className="text-dola-primary font-medium hover:underline"
                onClick={() => {
                  toast({
                    title: "Code resent",
                    description: "A new verification code has been sent to your email.",
                    variant: "default",
                  });
                }}
              >
                Resend Code
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;

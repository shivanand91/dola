
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Loader2, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing in a field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
      // Here we would make an API call to authenticate the user
      // For now, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Login successful",
        description: "Welcome back to DOLA!",
      });

      // Redirect to dashboard
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Log in to access your DOLA account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="text-sm text-dola-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
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

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-dola-primary hover:bg-dola-primary/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-dola-primary font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

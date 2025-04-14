
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Mail, Phone, MapPin, Shield, Bell, 
  Edit, Save, CreditCard, KeyRound, LogOut
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Indiranagar, Bangalore - 560038"
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({...user});

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Profile</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-dola-primary/10 text-dola-primary p-6 rounded-full mb-4">
                    <User className="h-12 w-12" />
                  </div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Basic Plan</p>
                  <Button className="w-full bg-dola-primary hover:bg-dola-primary/90">
                    Upgrade to Premium
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-4">
                <h3 className="font-medium mb-4 px-2">Profile Menu</h3>
                <ul className="space-y-1">
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg bg-dola-primary/10 text-dola-primary">
                      <User className="mr-3 h-4 w-4" /> Profile Details
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <CreditCard className="mr-3 h-4 w-4" /> My Card
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <KeyRound className="mr-3 h-4 w-4" /> Change Password
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Shield className="mr-3 h-4 w-4" /> Privacy & Security
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Bell className="mr-3 h-4 w-4" /> Notifications
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                      <LogOut className="mr-3 h-4 w-4" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-900 shadow rounded-xl overflow-hidden">
                <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsEditing(false);
                          setEditedUser({...user});
                        }}
                      >
                        Cancel
                      </Button>
                      <Button className="bg-dola-primary hover:bg-dola-primary/90" onClick={handleSave}>
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="border-dola-primary text-dola-primary"
                      onClick={() => setIsEditing(true)}
                    >
                      <Edit className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                  )}
                </div>
                
                <div className="p-6">
                  <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="mb-6 bg-gray-100 dark:bg-gray-800">
                      <TabsTrigger value="personal">Personal Information</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      <TabsTrigger value="subscription">Subscription</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Full Name
                            </label>
                            {isEditing ? (
                              <input
                                type="text"
                                value={editedUser.name}
                                onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                              />
                            ) : (
                              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <User className="text-dola-primary mr-3 h-5 w-5" />
                                <span>{user.name}</span>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Email Address
                            </label>
                            {isEditing ? (
                              <input
                                type="email"
                                value={editedUser.email}
                                onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                              />
                            ) : (
                              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <Mail className="text-dola-primary mr-3 h-5 w-5" />
                                <span>{user.email}</span>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Phone Number
                            </label>
                            {isEditing ? (
                              <input
                                type="tel"
                                value={editedUser.phone}
                                onChange={(e) => setEditedUser({...editedUser, phone: e.target.value})}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                              />
                            ) : (
                              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <Phone className="text-dola-primary mr-3 h-5 w-5" />
                                <span>{user.phone}</span>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Address
                            </label>
                            {isEditing ? (
                              <textarea
                                value={editedUser.address}
                                onChange={(e) => setEditedUser({...editedUser, address: e.target.value})}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-dola-primary/50 focus:outline-none"
                                rows={3}
                              ></textarea>
                            ) : (
                              <div className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <MapPin className="text-dola-primary mr-3 h-5 w-5 mt-0.5" />
                                <span>{user.address}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h3 className="font-medium mb-4">Account Security</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full justify-start">
                                  <KeyRound className="mr-3 h-4 w-4" />
                                  Change Password
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Change Password</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 pt-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Current Password
                                    </label>
                                    <input 
                                      type="password"
                                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" 
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      New Password
                                    </label>
                                    <input 
                                      type="password"
                                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" 
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Confirm New Password
                                    </label>
                                    <input 
                                      type="password"
                                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" 
                                    />
                                  </div>
                                  <Button className="w-full mt-2 bg-dola-primary hover:bg-dola-primary/90">
                                    Update Password
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full justify-start">
                                  <Shield className="mr-3 h-4 w-4" />
                                  Two-Factor Authentication
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Two-Factor Authentication</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 pt-4">
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Enhance your account security by enabling two-factor authentication.
                                    This adds an extra layer of protection to your account.
                                  </p>
                                  <Button className="w-full mt-2 bg-dola-primary hover:bg-dola-primary/90">
                                    Enable 2FA
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preferences">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-4">Email Notifications</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">Library Check-in/Check-out</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dola-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dola-primary"></div>
                              </label>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">Wallet Balance Alerts</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dola-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dola-primary"></div>
                              </label>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">Promotions and Offers</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dola-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dola-primary"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h3 className="font-medium mb-4">App Preferences</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">Enable Dark Mode</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dola-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dola-primary"></div>
                              </label>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">Location Services</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dola-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dola-primary"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="subscription">
                      <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">Current Plan</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400 rounded-full text-sm">
                              Active
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-medium">Basic</span>
                            <span className="text-2xl font-bold">Free</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Pay-per-hour library access with standard rates.
                          </p>
                          <Button className="w-full bg-dola-primary hover:bg-dola-primary/90">
                            Upgrade Plan
                          </Button>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-4">Plan Comparison</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  <th className="text-left p-3">Feature</th>
                                  <th className="text-center p-3">Basic</th>
                                  <th className="text-center p-3">Premium</th>
                                  <th className="text-center p-3">Scholar</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  <td className="p-3">Digital Library Card</td>
                                  <td className="text-center p-3 text-green-500">✓</td>
                                  <td className="text-center p-3 text-green-500">✓</td>
                                  <td className="text-center p-3 text-green-500">✓</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  <td className="p-3">Hourly Rate Discount</td>
                                  <td className="text-center p-3 text-red-500">✗</td>
                                  <td className="text-center p-3">20%</td>
                                  <td className="text-center p-3">40%</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  <td className="p-3">Free Hours/Month</td>
                                  <td className="text-center p-3 text-red-500">✗</td>
                                  <td className="text-center p-3 text-red-500">✗</td>
                                  <td className="text-center p-3">10 hrs</td>
                                </tr>
                                <tr>
                                  <td className="p-3">Priority Access</td>
                                  <td className="text-center p-3 text-red-500">✗</td>
                                  <td className="text-center p-3 text-green-500">✓</td>
                                  <td className="text-center p-3 text-green-500">✓</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

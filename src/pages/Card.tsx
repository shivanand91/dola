
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card as UICard, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CreditCard, Wallet, QrCode, RefreshCw, Clock, ArrowDownRight } from "lucide-react";

const Card = () => {
  const [balance, setBalance] = useState(250);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My DOLA Card</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <UICard className="shadow-lg">
                <CardHeader className="bg-dola-primary text-white">
                  <CardTitle className="text-xl">Digital Library Card</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/2 aspect-[1.58/1] bg-gradient-to-r from-dola-primary to-dola-secondary rounded-xl shadow-inner overflow-hidden relative">
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-white font-medium">DOLA</h3>
                              <p className="text-white/80 text-xs">Digital Online Library Access</p>
                            </div>
                            <div>
                              <CreditCard className="h-8 w-8 text-white/90" />
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <p className="text-white/80 text-xs mb-1">Card Number</p>
                              <p className="text-white font-mono text-lg">4721 **** **** 3218</p>
                            </div>
                            <div className="flex justify-between">
                              <div>
                                <p className="text-white/80 text-xs mb-1">Card Holder</p>
                                <p className="text-white">John Doe</p>
                              </div>
                              <div>
                                <p className="text-white/80 text-xs mb-1">Valid Thru</p>
                                <p className="text-white">04/26</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/2">
                        <div className="mb-8">
                          <p className="text-gray-500 dark:text-gray-400 mb-1">Current Balance</p>
                          <div className="flex items-baseline">
                            <h2 className="text-3xl font-bold text-dola-primary">₹{balance.toFixed(2)}</h2>
                            <span className="ml-2 text-gray-500">INR</span>
                          </div>
                        </div>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full mb-3 bg-dola-primary hover:bg-dola-primary/90">
                              <Wallet className="mr-2 h-5 w-5" />
                              Add Money to Wallet
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Money to Your DOLA Wallet</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                {[100, 200, 500, 1000].map((amount) => (
                                  <Button 
                                    key={amount} 
                                    variant="outline" 
                                    onClick={() => setBalance(prev => prev + amount)}
                                    className="text-lg"
                                  >
                                    ₹{amount}
                                  </Button>
                                ))}
                              </div>
                              <Button 
                                className="bg-dola-primary hover:bg-dola-primary/90"
                                onClick={() => setBalance(prev => prev + 100)}
                              >
                                Add Money
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                              <QrCode className="mr-2 h-5 w-5" />
                              Show QR Code
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Your DOLA Card QR Code</DialogTitle>
                            </DialogHeader>
                            <div className="flex justify-center p-6">
                              <div className="bg-white p-4 rounded-lg shadow">
                                <div className="bg-gray-200 w-64 h-64 flex items-center justify-center">
                                  <QrCode className="h-48 w-48" />
                                </div>
                              </div>
                            </div>
                            <p className="text-center text-sm text-gray-500">
                              Scan this QR code at the library entrance for access
                            </p>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </UICard>
            </div>
            
            <div>
              <UICard className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                          <ArrowDownRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium">Wallet Recharge</p>
                          <p className="text-xs text-gray-500">Today, 10:24 AM</p>
                        </div>
                      </div>
                      <p className="text-green-600 dark:text-green-400 font-medium">+₹100.00</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                          <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <p className="font-medium">Central Library</p>
                          <p className="text-xs text-gray-500">Yesterday, 2:30 PM</p>
                        </div>
                      </div>
                      <p className="text-red-600 dark:text-red-400 font-medium">-₹45.00</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                          <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <p className="font-medium">Knowledge Hub</p>
                          <p className="text-xs text-gray-500">Apr 12, 11:45 AM</p>
                        </div>
                      </div>
                      <p className="text-red-600 dark:text-red-400 font-medium">-₹30.00</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-dola-primary">
                    View All Transactions
                  </Button>
                </CardContent>
              </UICard>
              
              <UICard>
                <CardHeader>
                  <CardTitle className="text-lg">Card Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Renew Card
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Report Lost Card
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Wallet className="mr-2 h-4 w-4" />
                      Auto-Reload Settings
                    </Button>
                  </div>
                </CardContent>
              </UICard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Card;

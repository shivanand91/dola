
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Wallet, Calendar, CreditCard, Library, Download } from "lucide-react";

const historyData = {
  library: [
    {
      id: 1,
      libraryName: "Central Library",
      date: "April 13, 2025",
      checkIn: "10:30 AM",
      checkOut: "02:45 PM",
      duration: "4h 15m",
      amount: "₹85.00",
      location: "Bangalore"
    },
    {
      id: 2,
      libraryName: "Knowledge Hub",
      date: "April 11, 2025",
      checkIn: "09:00 AM",
      checkOut: "12:30 PM",
      duration: "3h 30m",
      amount: "₹70.00",
      location: "Bangalore"
    },
    {
      id: 3,
      libraryName: "City Public Library",
      date: "April 8, 2025",
      checkIn: "02:15 PM",
      checkOut: "05:45 PM",
      duration: "3h 30m",
      amount: "₹70.00",
      location: "Bangalore"
    },
  ],
  recharge: [
    {
      id: 1,
      amount: "₹500.00",
      date: "April 10, 2025",
      time: "11:20 AM",
      method: "UPI - example@okicici",
      status: "Success",
      reference: "DOL5827456928"
    },
    {
      id: 2,
      amount: "₹200.00",
      date: "April 1, 2025",
      time: "04:45 PM",
      method: "Credit Card - xxxx 3218",
      status: "Success",
      reference: "DOL5826237654"
    }
  ]
};

const History = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Usage History</h1>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold">Transaction Summary</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Your activity for the last 30 days
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  This Month
                </Button>
                <Button variant="outline" className="text-gray-500">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm">Total Spending</h3>
                  <CreditCard className="h-4 w-4 text-dola-primary" />
                </div>
                <p className="text-2xl font-bold">₹225.00</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm">Library Hours</h3>
                  <Clock className="h-4 w-4 text-dola-primary" />
                </div>
                <p className="text-2xl font-bold">11h 15m</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm">Total Recharges</h3>
                  <Wallet className="h-4 w-4 text-dola-primary" />
                </div>
                <p className="text-2xl font-bold">₹700.00</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="library" className="bg-white dark:bg-gray-900 rounded-xl shadow">
            <TabsList className="p-1 m-4 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="library" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Library className="mr-2 h-4 w-4" />
                Library Usage
              </TabsTrigger>
              <TabsTrigger value="recharge" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Wallet className="mr-2 h-4 w-4" />
                Card Recharges
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="library" className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Library</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Date</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Check-in</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Check-out</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Duration</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {historyData.library.map((entry) => (
                      <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="p-4">
                          <div className="font-medium">{entry.libraryName}</div>
                          <div className="text-sm text-gray-500">{entry.location}</div>
                        </td>
                        <td className="p-4 text-gray-600 dark:text-gray-300">{entry.date}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-300">{entry.checkIn}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-300">{entry.checkOut}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-300">{entry.duration}</td>
                        <td className="p-4 font-medium text-gray-900 dark:text-white">{entry.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="recharge" className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Amount</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Date & Time</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Payment Method</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Status</th>
                      <th className="p-4 text-left text-gray-500 dark:text-gray-400">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {historyData.recharge.map((entry) => (
                      <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="p-4 font-medium text-gray-900 dark:text-white">{entry.amount}</td>
                        <td className="p-4">
                          <div className="text-gray-600 dark:text-gray-300">{entry.date}</div>
                          <div className="text-sm text-gray-500">{entry.time}</div>
                        </td>
                        <td className="p-4 text-gray-600 dark:text-gray-300">{entry.method}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded text-xs">
                            {entry.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600 dark:text-gray-300 font-mono text-sm">{entry.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;

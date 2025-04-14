
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-500 dark:text-gray-400">Last Updated: April 10, 2025</p>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                At DOLA (Digital Online Library Access), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or any of our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>Register for an account</li>
                <li>Fill out a form</li>
                <li>Sign up for a subscription</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, address, payment information, and any other information you choose to provide.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Usage Information</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our platforms. This information does not reveal your specific identity but may include:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>Device and usage information</li>
                <li>IP address</li>
                <li>Browser and device characteristics</li>
                <li>Operating system</li>
                <li>Language preferences</li>
                <li>Referring URLs</li>
                <li>Information about how and when you use our services</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Location Data</h3>
              <p>
                We collect location data to enable features such as finding nearby libraries. You can opt-out of location tracking through your device settings, but this may limit certain features of our service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>To facilitate account creation and authentication</li>
                <li>To process your transactions and manage your account</li>
                <li>To provide you with access to libraries and track usage time</li>
                <li>To send administrative information such as confirmation emails and receipts</li>
                <li>To respond to inquiries and offer customer support</li>
                <li>To send marketing and promotional communications (with your consent)</li>
                <li>To improve our services, website, and user experience</li>
                <li>To enforce our terms, conditions, and policies</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li><strong>With Library Partners:</strong> We share necessary information with our library partners to facilitate your access and usage tracking.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, reorganization, or sale of assets.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where required to comply with applicable law, governmental requests, judicial proceedings, or legal process.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
              <p>
                Depending on where you reside, you may have various rights regarding your personal information:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>Right to access and obtain a copy of your personal information</li>
                <li>Right to rectify or update your personal information</li>
                <li>Right to erase your personal information</li>
                <li>Right to restrict processing of your personal information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing of your personal information</li>
                <li>Right to withdraw your consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at privacy@dola.in.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@dola.in<br />
                <strong>Address:</strong> DOLA Headquarters, 123 Library Road, Indiranagar, Bangalore, India - 560001<br />
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <Link to="/terms" className="text-dola-primary hover:underline flex items-center">
                  Terms of Service <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <Button className="bg-dola-primary hover:bg-dola-primary/90">
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
              <p className="text-gray-500 dark:text-gray-400">Last Updated: April 10, 2025</p>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the DOLA (Digital Online Library Access) platform, including our website, mobile application, and services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Account Registration and Management</h2>
              <p>
                To use most features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mt-4">
                You are responsible for safeguarding your account password and for any activities or actions under your account. You agree not to share your account credentials with any third party. DOLA cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Digital Library Card</h2>
              <p>
                The DOLA digital library card is personal to you and may not be transferred to or used by another person. You agree to use the card only for legitimate purposes and in accordance with these Terms.
              </p>
              <p className="mt-4">
                Your card may be suspended or terminated if:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>You violate these Terms or any library partner's rules</li>
                <li>You engage in fraudulent or abusive behavior</li>
                <li>Your account payment method is invalid or insufficient funds are available</li>
                <li>We suspect unauthorized use of your account</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payments and Billing</h2>
              <p>
                By providing a payment method, you authorize us to charge you for all fees incurred in connection with your use of the Services. Fees are non-refundable except as expressly set forth in these Terms or as required by applicable law.
              </p>
              <p className="mt-4">
                For subscription plans, you will be billed in advance on a recurring basis based on your selected billing cycle. For pay-per-use charges, you authorize us to charge your payment method for the time spent at partner libraries according to the applicable rate.
              </p>
              <p className="mt-4">
                You are responsible for maintaining a sufficient balance in your DOLA wallet to cover usage charges. If your wallet balance is insufficient at check-out, you agree to promptly recharge your wallet to settle the outstanding balance.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Library Usage Rules</h2>
              <p>
                When using our Services at partner libraries, you agree to:
              </p>
              <ul className="list-disc ml-6 mt-2 mb-4">
                <li>Follow all rules and policies established by the partner library</li>
                <li>Handle library materials with care and report any damage</li>
                <li>Check in and check out properly using the DOLA system</li>
                <li>Not disturb other library users</li>
                <li>Not attempt to circumvent the DOLA tracking system</li>
              </ul>
              <p className="mt-4">
                Partner libraries reserve the right to refuse entry or ask users to leave for violations of their policies or these Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p>
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and code) are owned by DOLA, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any materials from our Services without our prior written consent.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, DOLA shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with your use of the Services.
              </p>
              <p className="mt-4">
                Our total liability for all claims related to the Services shall not exceed the greater of ₹1,000 or the amount you paid to DOLA during the three months preceding the event giving rise to the liability.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use the Services after revisions become effective, you agree to be bound by the revised Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will cease immediately.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of Bangalore, Karnataka, India.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@dola.in<br />
                <strong>Address:</strong> DOLA Headquarters, 123 Library Road, Indiranagar, Bangalore, India - 560001<br />
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link to="/privacy" className="text-dola-primary hover:underline flex items-center">
                Privacy Policy <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Company Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cashstack is owned and operated by <strong className="text-white">ASKAM AI LIMITED</strong>, 
              a private company limited by shares registered in Nigeria (RC Number: 7390882) on March 8, 2024.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Registered Address:</strong><br/>
              No. 8, Ahmadu Bello Way, Opposite NIPOST, Jos, Plateau State, Nigeria
            </p>
            <p className="text-gray-300 leading-relaxed">
              For any legal matters or correspondence, please contact us at:
            </p>
            <ul className="text-gray-300 mt-2 ml-6">
              <li>Email: askamai@gmail.com</li>
              <li>Phone: +234 706 606 2431 / +234 803 887 8026</li>
              <li>Address: No. 8, Ahmadu Bello Way, Opposite NIPOST, Jos, Plateau State, Nigeria</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. General Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Cashstack, an AI-powered banking platform that offers a variety of services such as 
              seamless digital transactions, StackPoints rewards program, smart analytics, secure banking, 
              and instant transfers. These Terms of Service (&ldquo;Agreement&rdquo;) govern your use of the Cashstack 
              platform and any related services provided by ASKAM AI LIMITED.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you agree to be bound by the terms and conditions of this Agreement. 
              Please read this Agreement carefully, and if you do not agree with the terms and conditions 
              stated herein, do not use the Cashstack platform and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Account Creation and Eligibility</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">3.1 Account Creation</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To access specific features on our apps and platforms (&ldquo;Platforms&rdquo;), you must create an account 
              (&ldquo;Account&rdquo;) and provide the necessary information about yourself as prompted. By registering, you confirm that:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• All the required information you provide during registration is accurate and truthful</li>
              <li>• You will keep this information up-to-date</li>
              <li>• You are at least 18 years old and legally capable of entering into this Agreement</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              If you wish to do so, you can delete your Account at any time by following the instructions on the Site and Platforms. 
              Please note that ASKAM AI LIMITED reserves the right to suspend or terminate your Account under certain circumstances.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.2 Account Responsibilities</h3>
            <p className="text-gray-300 leading-relaxed">
              You are solely responsible for maintaining the confidentiality of your Account login details and will be held 
              accountable for all activities that occur under your Account. If you suspect any unauthorized use or breach 
              of security related to your Account, please notify ASKAM AI LIMITED immediately. It&apos;s essential to comply 
              with these requirements, as ASKAM AI LIMITED cannot be held liable for any loss or damage resulting from 
              your failure to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Use of Cashstack Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cashstack provides a variety of services, including seamless digital transactions, StackPoints rewards program, 
              smart analytics, secure banking, and instant transfers. You agree to use our services only for lawful purposes 
              and in compliance with all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Access to the Site</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">5.1 License</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Subject to the terms outlined here, ASKAM AI LIMITED grants you a limited, non-transferable, non-exclusive, 
              revocable license to access and use the Site strictly for your personal, non-commercial purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">5.2 Certain Restrictions</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your rights to use the Site are subject to the following restrictions:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• You are not allowed to commercially exploit the Site, its content, or any part thereof</li>
              <li>• You shall not modify, create derivative works of, reverse engineer, or attempt to extract the source code</li>
              <li>• Usage of the Site to build similar or competitive websites, products, or services is strictly prohibited</li>
              <li>• No part of the Site may be copied, reproduced, distributed, or transmitted without express permission</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">5.3 Ownership</h3>
            <p className="text-gray-300 leading-relaxed">
              You recognize that all intellectual property rights, including copyrights, patents, trademarks, and trade secrets, 
              associated with the Site and its content, are owned by ASKAM AI LIMITED or its suppliers. These Terms do not 
              transfer to you or any third party any rights, title, or interest in or to such intellectual property rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Prohibited Activities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited activities while using the Cashstack platform and related services:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Use our services for any illegal purpose, including but not limited to money laundering, terrorist financing, or fraudulent activities</li>
              <li>• Violate any laws, rules, or regulations applicable to your use of our services</li>
              <li>• Impersonate any person or entity, or falsely state or otherwise misrepresent yourself, your age, or your affiliation with any person or entity</li>
              <li>• Transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature</li>
              <li>• Modify, adapt, sublicense, translate, sell, reverse engineer, or create derivative works based on any portion of the Cashstack platform</li>
              <li>• Attempt to gain unauthorized access to any portion of the platform or any other systems or networks connected to the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Transaction Fees</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">7.1 General Fees</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• A withdrawal fee will be charged for transactions conducted in Nigerian Naira (NGN)</li>
              <li>• For card transactions conducted with Cashstack virtual card, you will be charged by the card payment processor</li>
              <li>• Transaction fees may be charged on utility bill payments such as electricity, cable TV</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">7.2 Additional Fees</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Failed Transactions: If a transaction fails due to insufficient funds, a fee may be charged</li>
              <li>• Currency conversion fees may apply for international transactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">7.3 Payment and Fee Collection</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The applicable fees will be clearly displayed and disclosed to you before completing the transaction.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">7.4 Modifications to Fees</h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify transaction fees at any time. However, any changes to the fees will be 
              communicated to you in advance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. StackPoints Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our StackPoints rewards program is subject to the following terms:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Points are earned based on transaction volume and frequency</li>
              <li>• Points can be redeemed for cash, gift cards, and exclusive rewards</li>
              <li>• ASKAM AI LIMITED reserves the right to modify or discontinue the program</li>
              <li>• Points may expire after a period of inactivity</li>
              <li>• StackPoints are non-transferable and have no cash value except as stated in the program terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Site is provided on an &ldquo;as-is&rdquo; and &ldquo;as available&rdquo; basis, and ASKAM AI LIMITED (along with our suppliers) 
              expressly disclaims any and all warranties and conditions, whether express, implied, or statutory. This includes 
              but is not limited to warranties or conditions of merchantability, fitness for a particular purpose, title, 
              quiet enjoyment, accuracy, or non-infringement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We (and our suppliers) do not guarantee that the Site will meet your requirements or be available on an 
              uninterrupted, timely, secure, or error-free basis. Moreover, we make no warranty regarding the accuracy, 
              reliability, freedom from viruses or other harmful code, completeness, legality, or safety of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall ASKAM AI LIMITED or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
              use Cashstack, even if ASKAM AI LIMITED or an authorized representative has been notified orally or in writing 
              of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Term and Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms will be in effect as long as you use the Site. We reserve the right to suspend or terminate your 
              access to the Site, including your Account, at our sole discretion and for any reason, especially if there is 
              any violation of these Terms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Upon termination of these Terms, your Account will be deactivated, and your access to the Site will cease 
              immediately. ASKAM AI LIMITED holds no liability to you for the termination of your rights under these Terms, 
              including the termination of your Account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms may undergo occasional revisions, and in the event of significant changes, we will make efforts to notify you. 
              Notice of such changes may be sent to your last provided email address (if available) or prominently posted on our Site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Changes to these Terms will take effect either thirty (30) calendar days after we send the email notice to you 
              (if applicable) or thirty (30) calendar days after we post the notice on our Site. Your continued use of the Site 
              after receiving notice of such changes signifies your acknowledgment and agreement to be bound by the updated terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria 
              and you irrevocably submit to the exclusive jurisdiction of the courts in Nigeria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">14. General</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms constitute the entire agreement between you and ASKAM AI LIMITED regarding the use of the Site. 
              Failure to enforce any provision of these Terms does not waive the right to enforce it in the future.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain 
              valid and enforceable to the maximum extent permitted by law. You may not transfer or assign these Terms without 
              ASKAM AI LIMITED&apos;s prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">15. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any concerns or dissatisfaction regarding any aspect of the Services provided by Cashstack, 
              you have several options to get in touch with us. You can send your complaint to askamai@gmail.com, 
              call us at +234 706 606 2431 or +234 803 887 8026, or use the in-app customer support chat available 
              on the Cashstack mobile app to lodge your complaint.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are here to assist you and address any issues you may encounter.
            </p>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <p className="text-white font-semibold">ASKAM AI LIMITED</p>
              <p className="text-gray-300">RC Number: 7390882</p>
              <p className="text-gray-300">Email: askamai@gmail.com</p>
              <p className="text-gray-300">Phone: +234 706 606 2431 / +234 803 887 8026</p>
              <p className="text-gray-300">Address: No. 8, Ahmadu Bello Way, Opposite NIPOST, Jos, Plateau State, Nigeria</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

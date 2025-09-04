import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Company Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Privacy Policy describes how <strong className="text-white">ASKAM AI LIMITED</strong> 
              (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects your information when you use Cashstack, 
              our AI-powered banking platform.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              ASKAM AI LIMITED is a private company limited by shares registered in Nigeria (RC Number: 7390882) 
              on March 8, 2024, and is the data controller for your personal information.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our contact details are:
            </p>
            <ul className="text-gray-300 mt-2 ml-6">
              <li>Company: ASKAM AI LIMITED</li>
              <li>RC Number: 7390882</li>
              <li>Email: askamai@gmail.com</li>
              <li>Phone: +234 706 606 2431 / +234 803 887 8026</li>
              <li>Address: No. 8, Ahmadu Bello Way, Opposite NIPOST, Jos, Plateau State, Nigeria</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Applicability of Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This privacy policy applies to all information we collect through our Services from current and former Cashstack users, including you. &ldquo;Services&rdquo; means any products, services, content, features, technologies, or functions, and all related websites, applications and services offered to you with a Cashstack account. When you are no longer our customer, we may continue to use your information as described in this policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Throughout this policy, we use the term &ldquo;personal information&rdquo; to describe information that can be associated with a specific person and can be used to identify that person. We do not consider personal information to include information that has been aggregated and/or anonymised so that it does not identify a specific user.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. The Information We Collect</h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit our website or use the Cashstack app, we may collect your IP address, and standard web log information, such as your browser type and the pages you accessed on our website or app. We also may collect Geolocation Information. If you do not agree to our collection of this information, you may not be able to use the Services.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              If you open a Cashstack account, we may collect the following information from you:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">3.1 Account Information</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Text-enabled cellular/wireless telephone number</li>
              <li>• Machine or mobile device ID and other similar information</li>
              <li>• Email address and password</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.2 Identification Information</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Your name, street address, email address, date of birth</li>
              <li>• Government issued verification numbers (BVN, NIN)</li>
              <li>• Profile image and biometric data for authentication</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.3 Device Information</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Device type, machine or mobile device identification number</li>
              <li>• Geolocation Information, time zone, language setting</li>
              <li>• Browser type and IP address</li>
              <li>• Information from third parties for transaction processing and fraud detection</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.4 Financial Information</h3>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Bank account details for payment processing</li>
              <li>• Transaction history and spending patterns</li>
              <li>• StackPoints balance and redemption history</li>
              <li>• Credit and debit card information (encrypted)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.5 Geolocation Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Information that identifies with reasonable specificity your location by using longitude and latitude coordinates obtained through GPS, Wi-Fi, or cell site triangulation. We collect this data for fraud and risk purposes. If you do not agree to our collection of Geolocation Information, our Services may not function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Information from Children</h2>
            <p className="text-gray-300 leading-relaxed">
              The Services are not directed to children under the age of 18. If we obtain actual knowledge that we have collected personal information from a child under the age of 18, we will promptly delete it, unless we are legally obligated to retain such data. Contact us if you believe that we have mistakenly or unintentionally collected information from a child under the age of 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit our website or use our Services, or visit a third-party website for which we provide online services, we and certain business partners and vendors may use cookies and other tracking technologies (collectively, &ldquo;Cookies&rdquo;). We use Cookies to:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Recognize you as a customer and customize Services</li>
              <li>• Measure the effectiveness of promotions and perform analytics</li>
              <li>• Mitigate risk and prevent potential fraud</li>
              <li>• Promote trust and safety across our Services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Certain Services may only be available through the use of Cookies, so if you choose to disable or decline Cookies, your use of certain Services may be limited or not possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. How We Protect & Store Personal Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to ensure security on our systems. Despite our efforts, we cannot guarantee that personal information may not be accessed, disclosed, altered or destroyed by breach of our administrative, managerial and technical safeguards. Therefore, we urge you to take adequate precautions to protect your personal data as well, including never sharing your Cashstack password with anyone.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If we learn of a systems security breach, we may attempt to notify you electronically so that you can take appropriate protective steps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. How We Use the Personal Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our primary purpose in collecting personal information is to provide you with a safe, smooth, efficient, and customized experience. We may use your personal information to:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Provide the Services as well as any customer support you request</li>
              <li>• Process transactions and send notices about your transactions</li>
              <li>• Resolve disputes, collect fees, and troubleshoot problems</li>
              <li>• Calculate and award StackPoints rewards</li>
              <li>• Create an account connection between your Cashstack account and a third-party account</li>
              <li>• Customize, personalize, measure, and improve our Services</li>
              <li>• Send you updates about new products and services</li>
              <li>• Compare information for accuracy and verify it with third parties</li>
              <li>• Prevent potentially fraudulent, prohibited, or illegal activities</li>
              <li>• Perform other duties as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. How We Share Personal Information Within the Cashstack Network</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To process payments on Cashstack, we may need to share some of your personal information with the person or company that you are paying or is paying you. Your contact information, date of sign-up, the number of payments you have received, and other verification metrics may be provided to users or companies when you transact with, on, or through Cashstack.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We work with vendors to enable them to accept payments from you using Cashstack. In doing so, a vendor may share information about you with us, such as your mobile phone number or Cashstack username when you attempt to pay that vendor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. How We Share Personal Information With Other Parties</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cashstack does not share your personal information with third parties for their promotional or marketing purposes. We may share your personal information with:
            </p>
            <ul className="text-gray-300 ml-6 space-y-2">
              <li>• Our affiliates and subsidiaries, but only for purposes allowed by this document</li>
              <li>• Companies that we plan to merge with or be acquired by</li>
              <li>• Law enforcement, government officials, or other third parties if compelled by subpoena, court order, or similar legal procedure</li>
              <li>• Third-party service providers who assist us in providing the Services to you</li>
              <li>• Service providers under contract who help with parts of our business operations (fraud prevention, payment processing, technology services)</li>
              <li>• Other third parties with your consent or at your direction</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Regardless, we will not disclose your credit card number or bank account number to anyone you have paid or who has paid you through Cashstack, except with your express permission or if we are required to do so to comply with a subpoena or other legal process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. How You Can Access or Change Your Personal Information</h2>
            <p className="text-gray-300 leading-relaxed">
              You can review and update your personal information in your account settings at any time by logging in to your Cashstack account. You may also contact us to request access to, correction of, or deletion of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Links to Other Services or Sites</h2>
            <p className="text-gray-300 leading-relaxed">
              The Services may contain links to (or allow you to link to) other third-party services or websites. We do not control the information collection of third-party services or websites that can be reached through such links. We encourage our users to be aware when they are linking to a third-party service or website and to read the privacy statements of any third-party service or website that collects personally identifiable information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to Our Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are always improving. As the Services evolve, we may occasionally update this privacy policy. If we modify this privacy policy, we will post the revised privacy policy to the website and the Cashstack app, and we will also revise the &ldquo;last updated date&rdquo; stated above.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If we make material changes in the way we use personal information, we will notify you by posting an announcement on our mobile application or website or by sending you an e-mail. It is your responsibility to periodically review this privacy policy; users are bound by any changes to the privacy policy by using the Services after such changes have been first posted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. How to Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions or concerns regarding this privacy policy, or any feedback pertaining to your privacy and the Services that you would like us to consider, please email us at askamai@gmail.com.
            </p>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <p className="text-white font-semibold">ASKAM AI LIMITED</p>
              <p className="text-gray-300">RC Number: 7390882</p>
              <p className="text-gray-300">Privacy Officer</p>
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

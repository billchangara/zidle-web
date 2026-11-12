export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
      <p className="text-sm font-bold text-textTertiary mb-12">Last Updated: November 12, 2026</p>

      <div className="space-y-8 text-textSecondary text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">1. Introduction</h2>
          <p>Welcome to ZIDLE. ZIDLE is a digital learning platform owned and operated by BiLaTech Solutions ("we," "our," or "us"), a company registered in Zimbabwe. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, desktop application, and website (collectively, the "Service"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.</p>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the Service includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to us when you register for the Service.</li>
            <li><strong>Educational Data:</strong> Your grade level (Form 1 through 6), subjects enrolled, quiz scores, flashcard reviews, assignment submissions, and exam predictions.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Service, such as your IP address, browser type, operating system, and access times.</li>
            <li><strong>Device Data:</strong> Information about your mobile or desktop device, including unique device identifiers (used for offline token generation).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">3. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Create and manage your account.</li>
            <li>Process your subscription payments (via EcoCash, Paynow, or manual bank transfers).</li>
            <li>Deliver educational content, track your progress, and generate AI-driven exam predictions.</li>
            <li>Facilitate live virtual classrooms and secure student-teacher messaging.</li>
            <li>Prevent fraudulent transactions and monitor against theft.</li>
            <li>Respond to customer service requests and provide support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">4. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law, investigate potential violations of our policies, or protect the rights, property, and safety of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing (Paynow) and video conferencing infrastructure (LiveKit).</li>
            <li><strong>Teachers and Administrators:</strong> Your enrolled teachers and authorized school administrators have access to your educational data to grade assignments and monitor academic progress.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">5. Children's Privacy</h2>
          <p>ZIDLE is designed for students, which may include minors under the age of 18. We take children's privacy very seriously. We comply with applicable data protection laws, including the principles of COPPA and local Zimbabwean data protection acts. If we learn that we have inadvertently collected personal information from a child without parental consent, we will delete that information as quickly as possible. Parents or guardians may contact us to review, update, or delete their child's information.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">6. Data Security and Retention</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. We retain your data for as long as your account is active or as needed to provide you services.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">7. Your Rights</h2>
          <p>Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at support@zidle.co.zw.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date of this Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-textPrimary mb-3">9. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact BiLaTech Solutions at:</p>
          <p className="mt-2 font-bold text-textPrimary">BiLaTech Solutions<br />Harare, Zimbabwe<br />Email: support@zidle.co.zw</p>
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Helvety",
  description: "Privacy Policy for Helvety - How we handle your data",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <article className="space-y-10">
          <header>
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: January 30, 2026
            </p>
          </header>

          {/* Introduction */}
          <p className="text-sm text-muted-foreground">
            Helvety by Rubin (&quot;we,&quot; &quot;us,&quot; or &quot;the Company&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Helvety services (&quot;the Services&quot;). This policy complies with the Swiss Federal Act on Data Protection (DSG/nDSG), the EU General Data Protection Regulation (GDPR), and other applicable data protection laws.
          </p>

          {/* Table of Contents */}
          <nav className="p-6 bg-card border border-border">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li><a href="#controller" className="hover:text-foreground transition-colors">Data Controller</a></li>
              <li><a href="#data-collected" className="hover:text-foreground transition-colors">Data We Collect</a></li>
              <li><a href="#legal-basis" className="hover:text-foreground transition-colors">Legal Basis for Processing</a></li>
              <li><a href="#how-we-use" className="hover:text-foreground transition-colors">How We Use Your Data</a></li>
              <li><a href="#third-parties" className="hover:text-foreground transition-colors">Third-Party Service Providers</a></li>
              <li><a href="#data-transfers" className="hover:text-foreground transition-colors">International Data Transfers</a></li>
              <li><a href="#retention" className="hover:text-foreground transition-colors">Data Retention</a></li>
              <li><a href="#your-rights" className="hover:text-foreground transition-colors">Your Rights</a></li>
              <li><a href="#california" className="hover:text-foreground transition-colors">California Privacy Rights</a></li>
              <li><a href="#cookies" className="hover:text-foreground transition-colors">Cookies and Tracking</a></li>
              <li><a href="#security" className="hover:text-foreground transition-colors">Security Measures</a></li>
              <li><a href="#children" className="hover:text-foreground transition-colors">Children&apos;s Privacy</a></li>
              <li><a href="#changes" className="hover:text-foreground transition-colors">Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Information</a></li>
            </ol>
          </nav>

          {/* Section 1 */}
          <section id="controller">
            <h2 className="text-xl font-semibold mb-4">1. Data Controller</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The data controller responsible for your personal data is:
            </p>
            <address className="text-sm text-muted-foreground not-italic mb-4">
              <strong className="text-foreground">Helvety by Rubin</strong><br />
              Holeestrasse 116<br />
              4054 Basel<br />
              Switzerland<br /><br />
              Email:{" "}
              <a href="mailto:contact@helvety.com" className="underline hover:text-foreground transition-colors">
                contact@helvety.com
              </a><br />
              Phone:{" "}
              <a href="tel:+41798700208" className="underline hover:text-foreground transition-colors">
                +41 79 870 02 08
              </a>
            </address>
            <p className="text-sm text-muted-foreground">
              For any privacy-related inquiries or to exercise your data protection rights, please contact us at the above address.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collected">
            <h2 className="text-xl font-semibold mb-4">2. Data We Collect</h2>

            <h3 className="text-lg font-medium mb-3">2.1 Account Information</h3>
            <p className="text-sm text-muted-foreground mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Email address (required for authentication)</li>
              <li>Name (if provided)</li>
            </ul>

            <h3 className="text-lg font-medium mb-3">2.2 Order and Transaction Data</h3>
            <p className="text-sm text-muted-foreground mb-4">
              When you make a purchase, we collect:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Purchase history and order details</li>
              <li>Shipping address (for physical products)</li>
              <li>Billing information (processed by Stripe; we do not store complete payment card details)</li>
            </ul>

            <h3 className="text-lg font-medium mb-3">2.3 Technical and Usage Data</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We automatically collect certain information when you use the Services:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and features used</li>
              <li>Date and time of access</li>
              <li>Referring website</li>
            </ul>

            <h3 className="text-lg font-medium mb-3">2.4 Communication Data</h3>
            <p className="text-sm text-muted-foreground">
              If you contact us, we collect the information you provide in your communication, including your email address and message content.
            </p>
          </section>

          {/* Section 3 */}
          <section id="legal-basis">
            <h2 className="text-xl font-semibold mb-4">3. Legal Basis for Processing</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We process your personal data based on the following legal grounds (as required by GDPR and Swiss DSG):
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Contract Performance (Art. 6(1)(b) GDPR):</strong> Processing necessary to fulfill our contractual obligations to you, including processing orders, managing subscriptions, and providing the Services.</li>
              <li><strong className="text-foreground">Legal Obligations (Art. 6(1)(c) GDPR):</strong> Processing required to comply with applicable laws, such as tax and accounting requirements.</li>
              <li><strong className="text-foreground">Legitimate Interests (Art. 6(1)(f) GDPR):</strong> Processing for our legitimate business interests, such as fraud prevention, security, and improving our Services, where such interests are not overridden by your rights.</li>
              <li><strong className="text-foreground">Consent (Art. 6(1)(a) GDPR):</strong> Where you have given explicit consent, such as for marketing communications. You may withdraw consent at any time.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="how-we-use">
            <h2 className="text-xl font-semibold mb-4">4. How We Use Your Data</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>To create and manage your account</li>
              <li>To process and fulfill your orders</li>
              <li>To manage subscriptions and billing</li>
              <li>To send transactional emails (order confirmations, receipts, etc.)</li>
              <li>To provide customer support</li>
              <li>To detect and prevent fraud and security incidents</li>
              <li>To comply with legal obligations</li>
              <li>To improve and optimize the Services</li>
              <li>To enforce our Terms of Service</li>
            </ul>

            <h3 className="text-lg font-medium mb-3">4.1 Marketing Communications</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We will only send you marketing communications (such as newsletters, promotional offers, or product announcements) if you have given us your explicit consent to do so.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Opt-Out:</strong> You can withdraw your consent and unsubscribe from marketing communications at any time by:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Clicking the &quot;unsubscribe&quot; link at the bottom of any marketing email</li>
              <li>Updating your communication preferences in your account settings</li>
              <li>Contacting us at contact@helvety.com</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Please note that even if you opt out of marketing communications, we may still send you transactional or service-related communications (such as order confirmations, account notifications, or important service updates) as necessary to provide the Services.
            </p>
          </section>

          {/* Section 5 */}
          <section id="third-parties">
            <h2 className="text-xl font-semibold mb-4">5. Third-Party Service Providers</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We share your personal data with the following third-party service providers who process data on our behalf:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-card">
                    <th className="text-left p-3 border-b border-border font-medium text-foreground">Provider</th>
                    <th className="text-left p-3 border-b border-border font-medium text-foreground">Purpose</th>
                    <th className="text-left p-3 border-b border-border font-medium text-foreground">Location</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="p-3 border-b border-border">Vercel Inc.</td>
                    <td className="p-3 border-b border-border">Website hosting and delivery</td>
                    <td className="p-3 border-b border-border">USA</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Supabase Inc.</td>
                    <td className="p-3 border-b border-border">Database and authentication</td>
                    <td className="p-3 border-b border-border">USA</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Stripe Inc.</td>
                    <td className="p-3 border-b border-border">Payment processing</td>
                    <td className="p-3 border-b border-border">USA</td>
                  </tr>
                  <tr>
                    <td className="p-3">Resend Inc.</td>
                    <td className="p-3">Transactional email delivery</td>
                    <td className="p-3">USA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              All service providers are contractually obligated to protect your data and process it only according to our instructions. Where applicable, we have entered into Data Processing Agreements (DPAs) with these providers.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Stripe:</strong> As a PCI DSS Level 1 certified payment processor, Stripe handles all payment card information. We do not have access to or store your complete card details.
            </p>
          </section>

          {/* Section 6 */}
          <section id="data-transfers">
            <h2 className="text-xl font-semibold mb-4">6. International Data Transfers</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Your personal data may be transferred to and processed in countries outside Switzerland and the European Economic Area (EEA), particularly the United States, where our service providers are located.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              For transfers to the USA, we rely on the following safeguards to ensure adequate protection of your data:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">EU-US Data Privacy Framework:</strong> Where applicable, our US-based providers are certified under the EU-US Data Privacy Framework.</li>
              <li><strong className="text-foreground">Standard Contractual Clauses (SCCs):</strong> We use EU Commission-approved Standard Contractual Clauses for data transfers where required.</li>
              <li><strong className="text-foreground">Swiss-US Safeguards:</strong> We implement appropriate safeguards recognized under Swiss data protection law.</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              By using the Services, you acknowledge that your data may be transferred internationally as described above.
            </p>
          </section>

          {/* Section 7 */}
          <section id="retention">
            <h2 className="text-xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Account data:</strong> Retained while your account is active and for up to 2 years after account deletion for legal compliance.</li>
              <li><strong className="text-foreground">Transaction data:</strong> Retained for 10 years as required by Swiss accounting and tax laws (Art. 958f Swiss Code of Obligations).</li>
              <li><strong className="text-foreground">Communication records:</strong> Retained for up to 3 years after last contact.</li>
              <li><strong className="text-foreground">Technical logs:</strong> Retained for up to 90 days for security purposes.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="your-rights">
            <h2 className="text-xl font-semibold mb-4">8. Your Rights</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Under the GDPR, Swiss DSG, and other applicable laws, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Right of Access (Art. 15 GDPR / Art. 25 DSG):</strong> You have the right to request a copy of the personal data we hold about you.</li>
              <li><strong className="text-foreground">Right to Rectification (Art. 16 GDPR / Art. 32 DSG):</strong> You have the right to request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-foreground">Right to Erasure (Art. 17 GDPR):</strong> You have the right to request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong className="text-foreground">Right to Restrict Processing (Art. 18 GDPR):</strong> You have the right to request limitation of processing in certain circumstances.</li>
              <li><strong className="text-foreground">Right to Data Portability (Art. 20 GDPR / Art. 28 DSG):</strong> You have the right to receive your data in a structured, commonly used format.</li>
              <li><strong className="text-foreground">Right to Object (Art. 21 GDPR / Art. 32 DSG):</strong> You have the right to object to processing based on legitimate interests.</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting prior processing.</li>
            </ul>
            <p className="text-sm text-muted-foreground mb-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:contact@helvety.com" className="underline hover:text-foreground transition-colors">contact@helvety.com</a>. We will respond to your request within 30 days.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Right to Lodge a Complaint:</strong> If you believe your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority. In Switzerland, this is the Federal Data Protection and Information Commissioner (FDPIC). In the EU, you may contact the data protection authority in your country of residence.
            </p>
          </section>

          {/* Section 9 - California Privacy Rights */}
          <section id="california">
            <h2 className="text-xl font-semibold mb-4">9. California Privacy Rights (CCPA/CPRA)</h2>
            <p className="text-sm text-muted-foreground mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, the sources of that information, our purposes for collecting it, and the categories of third parties with whom we share it.</li>
              <li><strong className="text-foreground">Right to Delete:</strong> You have the right to request that we delete the personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong className="text-foreground">Right to Correct:</strong> You have the right to request that we correct inaccurate personal information we maintain about you.</li>
              <li><strong className="text-foreground">Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information. <strong>We do not sell or share your personal information</strong> as defined under CCPA/CPRA.</li>
              <li><strong className="text-foreground">Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit the use and disclosure of sensitive personal information.</li>
              <li><strong className="text-foreground">Right to Non-Discrimination:</strong> You have the right not to receive discriminatory treatment for exercising your privacy rights.</li>
            </ul>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">How to Exercise Your Rights:</strong> To exercise any of these rights, please contact us at{" "}
              <a href="mailto:contact@helvety.com" className="underline hover:text-foreground transition-colors">contact@helvety.com</a>. We will verify your identity before processing your request and respond within 45 days (or up to 90 days in certain circumstances, with notice).
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Authorized Agents:</strong> You may designate an authorized agent to make a request on your behalf. We may require proof of your authorization and verification of your identity.
            </p>
          </section>

          {/* Section 10 */}
          <section id="cookies">
            <h2 className="text-xl font-semibold mb-4">10. Cookies and Tracking</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We use only essential cookies that are strictly necessary for the operation of the Services. These include:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Authentication cookies:</strong> To keep you logged in during your session.</li>
              <li><strong className="text-foreground">Security cookies:</strong> To protect against security threats.</li>
              <li><strong className="text-foreground">Preference cookies:</strong> To remember your settings (e.g., theme preference).</li>
            </ul>
            <p className="text-sm text-muted-foreground mb-4">
              We may use privacy-respecting analytics (such as Vercel Analytics) to understand how our Services are used. These tools are configured to respect user privacy and do not track users across websites.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Essential cookies do not require consent under Swiss and EU law as they are necessary for the Services to function. You can configure your browser to reject cookies, but this may affect your ability to use certain features.
            </p>

            <h3 className="text-lg font-medium mb-3">10.1 Do Not Track (DNT)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              &quot;Do Not Track&quot; (DNT) is a browser setting that requests websites not to track the user. We do not currently respond to DNT signals in a standardized manner, as there is no industry-wide standard for DNT. However, because we do not engage in cross-site tracking or sell your personal information, the practical effect is the same regardless of your DNT setting.
            </p>

            <h3 className="text-lg font-medium mb-3">10.2 Automated Decision-Making</h3>
            <p className="text-sm text-muted-foreground">
              We do not use automated decision-making processes, including profiling, that produce legal effects concerning you or similarly significantly affect you, as described in Article 22 GDPR. While we may use automated tools for fraud detection, spam filtering, or service optimization, these processes do not result in decisions that have legal or similarly significant effects on individuals. If this changes in the future, we will update this policy and, where required, provide you with notice and an opportunity to object.
            </p>
          </section>

          {/* Section 11 */}
          <section id="security">
            <h2 className="text-xl font-semibold mb-4">11. Security Measures</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Encryption of data in transit (TLS/HTTPS)</li>
              <li>Encryption of data at rest</li>
              <li>Secure authentication mechanisms</li>
              <li>Access controls and authentication for administrative access</li>
              <li>Regular security assessments</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p className="text-sm text-muted-foreground mb-4">
              While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>

            <h3 className="text-lg font-medium mb-3">11.1 Data Breach Notification</h3>
            <p className="text-sm text-muted-foreground mb-4">
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Notify the relevant supervisory authority (Swiss FDPIC and/or applicable EU data protection authorities) within 72 hours of becoming aware of the breach, as required by Article 33 GDPR and Swiss DSG</li>
              <li>Notify affected individuals without undue delay if the breach is likely to result in a high risk to their rights and freedoms</li>
              <li>Document the breach, including its effects and the remedial actions taken</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Our breach notification will include, where possible: a description of the nature of the breach, the likely consequences, the measures taken to address the breach, and contact information for further inquiries.
            </p>
          </section>

          {/* Section 12 */}
          <section id="children">
            <h2 className="text-xl font-semibold mb-4">12. Children&apos;s Privacy</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The Services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children under 18.
            </p>
            <p className="text-sm text-muted-foreground">
              If you are a parent or guardian and believe your child has provided us with personal data, please contact us at{" "}
              <a href="mailto:contact@helvety.com" className="underline hover:text-foreground transition-colors">contact@helvety.com</a>. If we become aware that we have collected personal data from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          {/* Section 13 */}
          <section id="changes">
            <h2 className="text-xl font-semibold mb-4">13. Changes to This Policy</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
              <li>Update the &quot;Last updated&quot; date at the top of this page</li>
              <li>Notify you via email (if you have an account) or through a notice on the Services</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              We encourage you to review this Privacy Policy periodically. Your continued use of the Services after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          {/* Section 14 */}
          <section id="contact">
            <h2 className="text-xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-sm text-muted-foreground mb-4">
              For any questions about this Privacy Policy or our data practices, or to exercise your data protection rights, please contact us:
            </p>
            <address className="text-sm text-muted-foreground not-italic">
              <strong className="text-foreground">Helvety by Rubin</strong><br />
              Holeestrasse 116<br />
              4054 Basel<br />
              Switzerland<br /><br />
              Email:{" "}
              <a href="mailto:contact@helvety.com" className="underline hover:text-foreground transition-colors">
                contact@helvety.com
              </a><br />
              Phone:{" "}
              <a href="tel:+41798700208" className="underline hover:text-foreground transition-colors">
                +41 79 870 02 08
              </a>
            </address>
          </section>

          {/* Final Notice */}
          <footer className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              By using Helvety services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}

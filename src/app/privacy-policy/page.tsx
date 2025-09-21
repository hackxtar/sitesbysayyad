import Header from '@/components/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for SitesBySayyad. We are committed to protecting your personal information and your right to privacy.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <article className="prose lg:prose-xl dark:prose-invert mx-auto">
            <h1>Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <p>
              Your privacy is important to us. It is SitesBySayyad's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            
            <h3>Log Data</h3>
            <p>
              When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
            </p>
            
            <h3>Personal Information</h3>
            <p>
              We may ask for personal information, such as your:
            </p>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Company Name</li>
              <li>Project Details</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Generate project quotes and communicate with you</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Send you emails for customer service, updates, and marketing purposes</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>3. Security of Your Information</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            
            <h2>4. Links to Other Sites</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            
            <h2>5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@sitesbysayyad.com.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

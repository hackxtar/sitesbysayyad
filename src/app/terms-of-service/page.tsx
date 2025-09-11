import Header from '@/components/Header';
import Footer from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose lg:prose-xl dark:prose-invert mx-auto">
            <h1>Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Terms</h2>
            <p>
              By accessing this Website, accessible from your-website.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on SitesBySayyad's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on SitesBySayyad's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This will let SitesBySayyad to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              All the materials on SitesBySayyad’s Website are provided "as is". SitesBySayyad makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, SitesBySayyad does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>

            <h2>4. Limitations</h2>
            <p>
              SitesBySayyad or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on SitesBySayyad’s Website, even if SitesBySayyad or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on SitesBySayyad’s Website may include technical, typographical, or photographic errors. SitesBySayyad will not promise that any of the materials in this Website are accurate, complete, or current. SitesBySayyad may change the materials contained on its Website at any time without notice. SitesBySayyad does not make any commitment to update the materials.
            </p>
            
            <h2>6. Governing Law</h2>
            <p>
              Any claim related to SitesBySayyad's Website shall be governed by the laws of in without regards to its conflict of law provisions.
            </p>
            
            <h2>7. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these terms of service at any time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@sitesbysayyad.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

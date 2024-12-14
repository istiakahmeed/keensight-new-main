"use client";

import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";


export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p><strong>Effective Date:</strong> December 1, 2024</p>

        <p>
          At KeenSight Analytics LLC, we value the privacy of individuals whose information we collect and process through LinkedIn or related platforms. This Privacy Policy outlines how we handle data collected from LinkedIn leads and ensures our commitment to using it solely for internal purposes.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li><strong>Contact Information:</strong> Name, job title, company name, email address, phone number, or LinkedIn profile URL.</li>
          <li><strong>Professional Details:</strong> Industry, skills, experience, and any other publicly available professional information from LinkedIn.</li>
          <li><strong>Interaction Data:</strong> Details of communication or engagement with our outreach efforts.</li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">2. Purpose of Data Collection</h2>
        <p>We collect and use LinkedIn lead information strictly for <strong>internal purposes</strong>, including:</p>
        <ul className="list-disc list-inside">
          <li>Identifying and evaluating potential partnerships, collaborations, or business opportunities.</li>
          <li>Customizing and improving outreach and engagement strategies.</li>
          <li>Assessing the relevance of our services to potential clients or partners.</li>
          <li>Maintaining accurate internal records for business development.</li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">3. Data Usage Policy</h2>
        <ul className="list-disc list-inside">
          <li><strong>Internal Use Only:</strong> The information collected will not be sold, rented, or shared with third parties outside of KeenSight Analytics LLC.</li>
          <li><strong>Purpose Limitation:</strong> Data will be used solely for the purposes outlined in this policy and in compliance with applicable laws.</li>
          <li><strong>Data Minimization:</strong> We collect only the information necessary to achieve the stated purposes.</li>
          <li><strong>Transparency:</strong> We are committed to providing clear information about how we process and use data.</li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">4. Data Retention</h2>
        <p>We retain LinkedIn lead information only as long as necessary to fulfill the purposes described in this policy or to comply with legal obligations. Once the information is no longer needed, it will be securely deleted or anonymized.</p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">5. Security Measures</h2>
        <p>To protect LinkedIn lead data, we implement robust security measures, including:</p>
        <ul className="list-disc list-inside">
          <li>Encryption of sensitive data.</li>
          <li>Restricted access to lead information on a need-to-know basis.</li>
          <li>Regular audits and monitoring of our data protection systems.</li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
        <p>As a LinkedIn lead, you have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside">
          <li><strong>Access:</strong> Request a copy of the information we hold about you.</li>
          <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request the deletion of your information from our systems.</li>
          <li><strong>Restriction:</strong> Request limited processing of your data under certain conditions.</li>
          <li><strong>Objection:</strong> Object to the processing of your data for legitimate interests.</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href="mailto:info@keensightanalytics.com" className="text-blue-500 underline">info@keensightanalytics.com</a>.</p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on our website, with the effective date revised accordingly. We encourage you to review this policy periodically.</p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
        <p>For questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:info@keensightanalytics.com" className="text-blue-500 underline">info@keensightanalytics.com</a></p>

        <hr className="my-6" />

        <p><strong>Acknowledgment:</strong> By engaging with our outreach efforts or responding to our communications, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</p>
      </section>
    </main>
  );
}



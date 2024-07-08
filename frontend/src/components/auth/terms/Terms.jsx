// src/components/Auth/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1>Terms and Conditions</h1>
      <p>Welcome to our platform. Please read these terms and conditions carefully before using our services.</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using our platform, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
      
      <h2>2. Changes to Terms</h2>
      <p>We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the platform following any such change constitutes your agreement to follow and be bound by the terms as changed.</p>
      
      <h2>3. Description of Service</h2>
      <p>Our platform provides users with access to a rich collection of resources and tools, including various communications tools, forums, and personalized content.</p>
      
      <h2>4. User Responsibilities</h2>
      <ul>
        <li>Users must provide accurate, current, and complete information during the registration process.</li>
        <li>Users are responsible for maintaining the confidentiality of their password and account.</li>
        <li>Users are responsible for all activities that occur under their account.</li>
      </ul>
      
      <h2>5. Prohibited Conduct</h2>
      <p>Users agree not to use the platform for any unlawful purpose or any purpose prohibited by these terms. Prohibited conduct includes, but is not limited to:</p>
      <ul>
        <li>Harassing, abusing, or harming another person.</li>
        <li>Transmitting any content that is offensive, inappropriate, or otherwise objectionable.</li>
        <li>Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
      </ul>
      
      <h2>6. Termination</h2>
      <p>We may terminate or suspend access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.</p>
      
      <h2>7. Disclaimer of Warranties</h2>
      <p>The platform is provided on an "as is" and "as available" basis. We make no warranty that the platform will meet your requirements or that the service will be uninterrupted, timely, secure, or error-free.</p>
      
      <h2>8. Limitation of Liability</h2>
      <p>In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
      
      <Link to="/auth/signup" className={styles.backLink}>Back to Sign Up</Link>
    </div>
  );
};

export default Terms;

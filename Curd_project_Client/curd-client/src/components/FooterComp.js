// src/components/Footer.js

import React from 'react';

const FooterComp = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 Employee Management System. All Rights Reserved.</p>
        <p>
          <a href="mailto:support@company.com" className="text-white">
            Contact Support
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComp;

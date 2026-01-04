import React from "react";

const TermsCondition = () => {
  return (
    <div className="min-h-screen mt-20 px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>

      <p className="text-gray-700 text-lg mb-4">
        Welcome to PlateShare! By using our platform, you agree to the following terms and conditions:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Users must provide accurate and truthful information when creating an account or posting food.</li>
        <li>Food shared must be safe and suitable for donation. PlateShare is not responsible for any health issues arising from shared food.</li>
        <li>Respect all users. Harassment, discrimination, or misuse of the platform is strictly prohibited.</li>
        <li>Food requests and donations are voluntary. Users must coordinate responsibly and follow local health regulations.</li>
        <li>PlateShare may suspend or terminate accounts for violations of these terms.</li>
      </ul>

      <p className="text-gray-700 text-lg">
        By using PlateShare, you acknowledge that you have read and agreed to these terms. For any questions, please contact our support team via the Contact page.
      </p>
    </div>
  );
};

export default TermsCondition;

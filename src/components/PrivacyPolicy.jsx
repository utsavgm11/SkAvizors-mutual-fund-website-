// rafce
'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
    // --- Theme Configuration (Consistent Blue/Light Theme) ---
    const accentColor = 'text-blue-700';
    const accentBorder = 'border-blue-600';
    const lightGradient = 'from-blue-50 via-white to-gray-50'; // Consistent light background

    return (
        <>
            <Head>
                <title>Privacy Policy - SK Advizors</title>
                <meta
                    name="description"
                    content="Privacy Policy for SK Advizors explaining how customer data is collected, used, and protected, in association with Prudent Corporate Advisory Services Limited."
                />
            </Head>
            
            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 pb-16 px-4 sm:px-6 lg:px-8 font-sans`}>
                
                <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 border-t-4 border-orange-500">
                    
                    {/* Home Link (Standardized Icon Style) */}
                    <Link href="/" aria-label="Go to Home" className="inline-block mb-8 p-2 rounded-full hover:bg-gray-100 transition-all">
                        <img
                            src="/images/home.svg"
                            alt="Home"
                            className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                            draggable={false}
                        />
                    </Link>

                    <h1 className={`text-4xl font-extrabold ${accentColor} mb-2 text-center`}>
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-center mb-8 border-b pb-4">
                        Last Updated: October 2025
                    </p>

                    {/* Section 1: Introduction and Association */}
                    <div className="space-y-6 text-gray-700">
                        <p>
                            Shrikant Krishna is associated with Prudent Corporate Advisory Services Limited (“Prudent”) as a channel partner to avail various support services related to distribution of financial products as offered by Prudent. Prudent is the owner and copyright holder of FundzBazar portal including the website{" "}
                            <a href="http://www.fundzbazar.com" className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">
                                www.fundzbazar.com
                            </a>, the mobile application (the “Portal”).
                        </p>
                        <p>
                            Shrikant Krishna provides distribution services in various financial products to its clients through website{" "}
                            <a href="http://www.skadvizors.com" className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">
                                http://www.skadvizors.com
                            </a> as well as mobile application.
                        </p>
                        <p>
                            Your privacy is important to us. While information is the cornerstone of our ability to provide superior service, our most important asset is our customers' trust. Keeping customer information secure and using it only as our customers would want us to, is a top priority for all of us. This privacy policy sets out how Prudent uses and protects any information that you share when you use this website.
                        </p>
                        <p className="font-semibold">
                            At Prudent, we endeavor to ensure the confidentiality, integrity, and security of your and your family’s personal information, at all times.
                        </p>
                    </div>

                    {/* Section 2: Data Collection */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        1. What We Collect
                    </h2>
                    <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-1">
                        <li>Name and Contact information, including email address</li>
                        <li>Personal information, including date of birth and **Permanent Account Number (PAN)**</li>
                        <li>Demographic information such as gender and income</li>
                        <li>Other information that can help us improve our services</li>
                    </ul>

                    {/* Section 3: Data Usage */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        2. How We Use Your Personal Information
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            <strong className={accentColor.replace('text-', 'text-')}>Pre-registration:</strong> You can access certain sections and features of{" "}
                            <a href="http://www.fundzbazar.com" className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">
                                www.fundzbazar.com
                            </a> without registering or disclosing any personal information. Your web browser or computer makes anonymous visitor data (HTTP cookies) available to us. We use this data to understand which areas of the website are the most popular and how to best present and customize our website.
                        </p>
                        <p>
                            <strong className={accentColor.replace('text-', 'text-')}>Registration:</strong> To avail our services and start investing, you will register for an investment account with Prudent. This requires you to disclose sensitive **Registration Information** (e.g., mobile number, email, address, bank details). We use this information to contact you and undertake activities that you have specifically authorized us to do.
                        </p>
                    </div>

                    {/* Section 4: Information Handling */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        3. What We Do with the Information We Gather
                    </h2>
                    <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
                        <li>To perform compliance checks and internal record keeping</li>
                        <li>To use the information to improve our products and services</li>
                        <li>
                            To periodically send emails to your registered email address about new products, special offers, or other information. You are free to **unsubscribe** your email address at any time.
                        </li>
                        <li>
                            From time to time, we may also use your information to contact you via phone or email for market research purposes.
                        </li>
                    </ul>
                    <p className="text-gray-700 font-semibold mb-6">
                        We will not sell, distribute, or lease your personal information to third parties unless required to share such information under the terms and conditions of the products and services you avail, or we are required to do so by law.
                    </p>

                    {/* Section 5: Access and Updates */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        4. How You Can Access and Update Your Personal Information
                    </h2>
                    <p className="text-gray-700 mb-6">
                        To access or update your information, please **login and make changes as required**. Some changes may require documentary evidence. Upon request, Prudent has a legal obligation to provide every registered user with a readable copy of the personal data we keep about you. We may require additional proof of identity prior to such disclosure.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Remember to keep your **Login Credentials safe and secret**. If you believe the security of your account has been compromised, contact us immediately at{" "}
                        <a href="mailto:aminsk1982@gmail.com" className="text-blue-600 underline font-medium">
                            aminsk1982@gmail.com
                        </a> or **+91 99209 63209** for further assistance.
                    </p>

                    {/* Section 6: Cookies */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        5. How We Use Cookies
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            A **cookie** is a small file placed on your computer's hard drive that helps analyze web traffic and customize website operations based on your preferences.
                        </p>
                        <p>
                            We use traffic log cookies only for **statistical analysis** to monitor which pages are being used, allowing us to improve our website. This data is then removed from the system.
                        </p>
                        <p>
                            A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to **accept or decline cookies** in your browser settings, though declining may prevent you from taking full advantage of the website.
                        </p>
                    </div>

                    {/* Section 7: Links & Third Parties */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        6. Links to Other Websites & Third Parties
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            Our website may contain links to other websites of interest. We are **not responsible** for the protection and privacy of any information you provide while visiting such third-party sites. Exercise caution and check the privacy statement applicable to that website.
                        </p>
                        <p>
                            We may use third-party vendors (like payment gateway providers) to help us provide services. Such third parties are **contractually and legally required** to maintain the confidentiality of the information we provide to them.
                        </p>
                    </div>

                    {/* Section 8: Data Security */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        7. Data Protection and Information Security
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            We do not share information about current or former investors or their accounts to/from third parties. We follow **strict security procedures** (including encryption) for obtaining, processing, and storing personal information. Prudent has appropriate security measures to protect against unauthorized access or alteration of data. Our website is authenticated by Symantec.
                        </p>
                        <p>
                            You can help protect your information by ensuring that you keep your login and password secure and by logging out of your account when using a shared computer.
                        </p>
                    </div>

                    {/* Section 9: Password Policy */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        8. Password Policy
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            The password policy is designed to maintain the confidentiality of personal information by requiring **strong passwords** and protection of these passwords.
                        </p>
                        <p>
                            Access to secured areas of the Site is restricted to authorized users only. Unauthorized individuals attempting to access these areas can be subject to criminal and/or civil prosecution.
                        </p>
                        <p>
                            If you maintain an account, you are solely responsible for maintaining the confidentiality of your account and password. **Notify us immediately** if you become aware of any disclosure, loss, theft, or unauthorized use of your password.
                        </p>
                    </div>
                    
                    {/* Section 10: Legal Obligation */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        9. Our Legal Obligation to You
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            We are bound by the **(Indian) Information Technology Act, 2000**, and comply with all its provisions, including Section 43A, which obliges Prudent to maintain reasonable security procedures to safeguard your data.
                        </p>
                        <p>
                            Under **Regulation 4 of the Information Technology Rules, 2011**, Prudent is obliged to provide every registered user with a readable copy of the information that it keeps about you.
                        </p>
                    </div>

                    {/* Section 11: Changes */}
                    <h2 className={`text-2xl font-bold ${accentColor} mb-4 mt-10 border-b pb-2`}>
                        10. Changes to This Privacy Policy
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            This Privacy Policy is published on the website in compliance with Regulation 4 of the (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011.
                        </p>
                        <p>
                            This privacy policy is reviewed from time to time and, as such, will be subject to changes. If we decide to change this privacy policy, we will post the changes on the website.
                        </p>
                    </div>

                </section>
            </main>
        </>
    );
};

export default PrivacyPolicy;
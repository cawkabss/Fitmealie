import { SUPPORT_EMAIL } from 'constants/common';

export const PrivacyPolicy = () => {
  return (
    <div>
      <h1>
        Privacy Policy
      </h1>

      <p>
        Fitmealie.com Privacy Policy (the “Policy”) explains all the privacy matters you may face when using our website, https://www.fitmealie.com and other websites run by Fitmealie (the “Website”) and Fitmealie mobile and web-based applications (the “App”), jointly the “Service”, operated by Primaris Corp. (“Fitmealie” or “we”).
      </p>
      <p>
        This Policy is an integral part of Fitmealie Terms of Use (the “Terms”) and incorporated by reference into them. Please read this Policy carefully and if you have any ongoing questions about how to exercise your rights, etc., you may also contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
      <p>
        Some services which may be employed by either Fitmealie or you to interact with the Services may have their own privacy rules (third-party privacy policies). Thus, if your personal data is processed by such services, such processing is governed by third-party privacy policies, not this present Policy.
      </p>
      <p>
        By using the Service, you agree that collection and processing of your data will be covered by the terms of this Policy. In some circumstances, we may provide you with additional or supplemental privacy notices to the extent they apply to you because of the products and services you obtain from us or different laws that may apply to you. If you are a California resident, please refer to the <a href='https://docs.google.com/document/d/1xdGUpQMcAVyWXSr8AEdbMEhZsiFt40ag/edit#heading=h.gjdgxs' target='_blank'>Notice for California Users</a>.
      </p>
      <p>
        By using any of our Services, you acknowledge the privacy practices we describe in this Privacy Policy. You also acknowledge that you have read this policy and any other policies described (if any).
      </p>

      <h2>
        What and how we collect your personal information
      </h2>

      <ul className='decimal-list'>
        {/* 1 */}
        <li className='decimal-list__item'>
          <p>
            Here at Fitmealie we usually collect the information you provide to us through your interactions with our Website and App. For e.g.: when you set up your account in Application, You typically provide us with your name, home address, phone number etc., - this is the information we collect from you. During your interactions with our Services, we might also collect additional information from You, necessary for Us to perform our Services. Please see below the list of information we may collect from you during your usage of our Services (we also included the CCPA / CPRA reference if you are the user from California*)
          </p>
          <i>
            * in the event you are a resident of the State of California, you may find a data on categories of your personal data that we may collect in accordance with section 1798.140(o)(1) of the California Consumer Privacy Act (CCPA):
          </i>

          <ul className='alpha-lower-list'>
            <li className="alpha-lower-list__item">
              identifiers such as a real name, alias, unique personal identifier, online identifier, internet protocol address, email address, account name or other similar identifiers (CCPA category A);
            </li>
            <li className="alpha-lower-list__item">
              personal information, as defined in the California customer records law, such as name, physical characteristics or description, telephone number, bank account number, credit card number, debit card number, or any other financial information, medical information (CCPA category B);
            </li>
            <li className="alpha-lower-list__item">
              characteristics of protected classifications under California or federal law (if you choose to provide them), such as age (CCPA category C);
            </li>
            <li className="alpha-lower-list__item">
              commercial information, including records of products or services purchased or other purchasing or consuming histories or tendencies (CCPA category D); 
            </li>
            <li className="alpha-lower-list__item">
              internet or other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding a consumer’s interaction with an internet website, application, or advertisement (CCPA category F);
            </li>
            <li className="alpha-lower-list__item">
              geolocation data, such as mobile device location (CCPA category G);
            </li>
            <li className="alpha-lower-list__item">
              audio, electronic, visual and similar information, such as photos and videos (CCPA category H);
            </li>
            <li className="alpha-lower-list__item">
              professional or employment-related information (CCPA category I);
            </li>
            <li className="alpha-lower-list__item">
              inferences drawn from any of the personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics or a summary of these characteristics (CCPA category K).
            </li>
          </ul>
          <p>
            For EU residents You may find the categories of data that we may collect in accordance with GDPR following the previous list. In particular, the personal data that falls within the special categories (genetic data, biometric data, data concerning health or data concerning a natural person’s sex life) will only be collected if you choose to provide them and expressly consent so (as considered in GDPR Article 9.2.a).
          </p>

          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Personal Data collected</th>
                <th>Source</th>
                <th>Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  To make the Website work properly and provide you with access to it
                </td>
                <td>
                  IP address; User Agent (CCPA categories A and F)
                </td>
                <td>
                  we automatically get these from your device
                </td>
                <td>
                  performing of the contract with you
                </td>
              </tr>

              <tr>
                <td>
                  to reply to your request sent via the Website (or directly via email)
                </td>
                <td>
                  Name; email address; IP address; your message, including any data you decided to share with us (A, B and H);
                </td>
                <td>
                  we receive this data from you
                </td>
                <td>
                  performing of the contract with you or your consent (when you start a communication via email)
                </td>
              </tr>

              <tr>
                <td>
                  to allow you to create a profile
                </td>
                <td>
                  name or nickname; date of birth (age); email address; phone number; weight, height; age group; your field of occupation; photos; your description (CCPA categories A, B, C, F, and H)
                </td>
                <td>
                  we receive this data from you
                </td>
                <td>
                  performing of the contract with you
                </td>
              </tr>

              <tr>
                <td>
                  to provide you with better communication and connection experience
                </td>
                <td>
                  name or nickname; date of birth (age); email address; phone number; weight, height; age group; your field of occupation; photos; your description (CCPA categories A, B, C, F, and H)
                </td>
                <td>
                  we receive this data from you
                </td>
                <td>
                  performing of the contract with you
                </td>
              </tr>
              <tr>
                <td>
                  o process your requests and claims
                </td>
                <td>
                  name; email address; IP address; your message, including any data you decided to share with us (A, B and H)
                </td>
                <td>
                  we receive this data from you
                </td>
                <td>
                  legitimate interest
                </td>
              </tr>
              <tr>
                <td>
                  to ensure legal compliance with our policies, laws; exercise our rights; assist law protection and enforcement bodies
                </td>
                <td>
                  any data that we hold about you, depending on the issue that we are dealing with (CCPA categories A, B, D, F, G, and I)
                </td>
                <td>
                  we may get data from you, third parties or automatically collect them from your device
                </td>
                <td>
                  legitimate interest or legal obligation
                </td>
              </tr>
              <tr>
                <td>
                  to provide you with paid features
                </td>
                <td>
                  history of purchases; payment details; payment card details (CCPA categories B and D)
                </td>
                <td>
                  you provide this information to us
                </td>
                <td>
                  performing of the contract with you and our legal interest
                </td>
              </tr>
              <tr>
                <td>
                  to serve you relevant offers and ads
                </td>
                <td>
                  location; history of purchases; interests; gender; age; activity; device and OS ID (CCPA categories A, B, F, G, and K)
                </td>
                <td>
                  you indirectly provide this information to us and we automatically collect it from your device
                </td>
                <td>
                  your consent
                </td>
              </tr>
              <tr>
                <td>
                  to ensure a consistent experience across your devices
                </td>
                <td>
                  user ID, including third party’s ones; duration of a session; the history of the interaction of the Site; data you provided our support team with via “Contact-us” form, including, email address, name, content of your request; localization of your device system; type and preferences of your device’s system; your device type; OS type (CCPA categories A, B, D, F, G and K)
                </td>
                <td>
                  we automatically collect from your device
                </td>
                <td>
                  performing of the contract with you
                </td>
              </tr>
              <tr>
                <td>
                  to analyze use of the Services; to improve our Services
                </td>
                <td>
                  gender; age; body shapes data; occupation; content placing history; logins/logouts log; duration of sessions; location; type and preference of your device’s system; your device type; OS type; lodged and received complaints
                </td>
                <td>
                  you directly provide this information to us and we automatically collect it from your device (location, type and preferences of your device’s system, your device type, OS type)
                </td>
                <td>
                  legitimate interest
                </td>
              </tr>
              <tr>
                <td>
                  to contact you in order to obtain feedback and to find out if you want to take part in marketing campaigns
                </td>
                <td>
                  name; email address; user ID; data you disclose to us (CCPA categories A and B)
                </td>
                <td>
                  you directly provide this information to us and we automatically collect it from your device (user id)
                </td>
                <td>
                  legitimate interest or consent
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Please note that this list of categories of information we collect is not inclusive and might change over time. Make sure you periodically visit this Privacy Policy to identify if there were any changes.
          </p>
        </li>

        {/* 2 */}
        <li className='decimal-list__item'>
          <p>
            Please note we collect personal data directly from you and we may also receive some of your personal data from third parties. For example:
          </p>

          <ul className="dash-list">
            <li className="dash-list__item">
              From advertising networks: some of our partners may transmit personal data about you (for example when you access our website by clicking on an advert for the Fitmealie mobile application published on a partner's website);
            </li>
            <li className="dash-list__item">
              From mailing list providers
            </li>
            <li className="dash-list__item">
              From data brokers
            </li>
            <li className="dash-list__item">
              From other service providers, as from time to time may be deemed necessary for Us.
            </li>
          </ul>
          <p>
            The categories and special pieces of information we collect from third parties depends on the type of data they have in their possession and our needs for delivery of the Services or fulfilling our legal obligations. Examples of the types of information we receive include financial account information, information about account balance, information about credit accounts, information about loan accounts, information about investment accounts, identifiers and information about account owners, information about account transactions and employment information.
          </p>
        </li>

        {/* 3 */}
        <li className='decimal-list__item'>
          <p>
            There are also some categories of information we might collect automatically which might be used for the further development and improvement of our Services as well as information that is technically necessary for us in order to deliver Services. Here are some examples of the information we might collect automatically:
          </p>

          <ul className='dash-list'>
            <li className="dash-list__item">
              Transactional Information: When you make a purchase or complete a transaction, we collect information about the transaction, such as product or service details, financial details and the date and location of the transaction.
            </li>
            <li className="dash-list__item">
              Device and Usage Information: We collect information about how you access our Services, including data about the device and network you use, such as hardware model, operating system version, mobile network, IP address, unique device identifiers and device regional and language settings, browser type, and app version. We also collect information about your activity on our Services, such as access times, pages viewed, links clicked, products and services considered, and the page you visited before navigating to our Services.
            </li>
            <li className="dash-list__item">
              Location Information: In accordance with your device permissions, we may collect information about the precise location of your device. You may stop the collection of precise location information at any time.
            </li>
            <li className="dash-list__item">
              Information Collected by Cookies and Similar Tracking Technologies: We (and those who perform work for us) use tracking technologies, such as cookies and web beacons, to collect information about your interactions with the Services.
            </li>
            <li className="dash-list__item">
              Information Collected by Cookies and Similar Tracking Technologies: We (and those who perform work for us) use tracking technologies, such as cookies and web beacons, to collect information about your interactions with the Services.

              <ul className="dash-list">
                <li className="dash-list__item">
                  Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular and which emails and advertisements you view, authenticate users, reconstruct or observe activity relating to a session or by a user for troubleshooting, issue resolution, and other purposes, and count visits to our websites.
                </li>
                <li className="dash-list__item">
                  Web beacons (also known as "pixel tags" or "clear GIFs") are electronic images that we use on our Services and in our emails to help deliver cookies, count visits, and understand usage and campaign effectiveness. In our mobile apps, we may also use technologies that are not browser-based like cookies.
                </li>
                <li className="dash-list__item">
                  For example, our apps may include software development kits (known as SDKs) which are code that sends information about your use to a server. These SDKs allow us to track our conversions, bring you advertising both on and off the Service, and provide you additional functionality.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* 4 */}
        <li className='decimal-list__item'>
          <p>
            Finally, we may also derive information or draw inferences about you based on the information we collect. For example, as noted above, we may make inferences about your location based on your IP address, we may infer that certain products or services may be of interest to you based on your transaction history, and we may draw inferences about potentially fraudulent activity.
          </p>
        </li>
      </ul>

      <h2>
        Your Data Controller and Data Processors
      </h2>

      <p>
        We believe that it is important for you to know who collects is collecting the data about you and with whom it typically can be shared. If you would like to know more please visit the section “How do we share your personal information” below.
      </p>
      <p>
        To begin with, according the GDPR “Data Controller” means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data. in this current case, your data controller is Primaris Corp., a company with its registered address at 200 S. Virginia, 8th Floor, Reno, Nevada 89501; email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
      <p>
        The “Data Processor” means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller. When processing your data, we may use the following data processors:
      </p>
      <ul className="alpha-lower-list">
        <li className="alpha-lower-list__item">
          AWS service (Amazon Web Services) represented by Amazon Web Services, Inc. with a registered office at 410 Terry Avenue North, Seattle, WA 98109-5210, which is a storage place provider, in order to store the data. AWS provides more information on how it processes data in its Privacy Policy;
        </li>
        <li className="alpha-lower-list__item">
          Servers.com service represented by SERVERS.com B.V., with a registered office at Keienbergweg 22 (1101 GB), Amsterdam, The Netherlands, which is a storage place provider, in order to store the data. Servers.com provides more information on how it processes data in its Privacy Policy;
        </li>
        <li className="alpha-lower-list__item">
          Firebase service which may be represented by Google LLC (California, USA), Google Ireland Limited (the Republic of Ireland), Google Asia Pacific Pte. Ltd. (Singapore), or any other entity that directly or indirectly controls, is controlled by, or is under common control with Google LLC, to analyze activity on the Website and in the App. Google provides more information on how it processes data in its Privacy Policy.
        </li>
      </ul>

      <p>
        here there is a necessity, we may also engage additional third-party services and may share the data with them. That will help us operate, provide, improve, integrate, customize, support, and market our Service and the Website. We share the data, in particular, for purposes indicated herein. The types of third parties we may share information with include, in particular: cloud storage providers, data analytics providers, measurement partners, marketing partners, payment processing providers, communication services providers, etc.
      </p>

      <h2>
        How do we use your personal information
      </h2>

      <p>
        We use the information we collect to provide, maintain, and improve our Services, including to process transactions, identify and repair errors in our Services, and analyze usage over time. We also use the information we collect based on the following:
      </p>

      <ul className="alpha-lower-list">
        <li className="alpha-lower-list__item">
          performing of the contract with you — the main legal basis that we use to process your data. It includes mostly everything we do to provide you with services, under our Terms of Use and their appendices. You may restrict us from processing of your data, but please be advised that, in such a case, we will not be able to provide services to you.;
        </li>
        <li className="alpha-lower-list__item">
          legal obligation — we may process your data when we have a legal obligation when it is required by applicable laws, e.g., in order to prevent fraud, assist law protection and enforcement bodies.
        </li>
        <li className="alpha-lower-list__item">
          Legitimate interest – we have a commercial interest to process with your personal data that is justified, balanced and does not infringe on your privacy (e.g. statistical reporting). Where the legal basis is legitimate interests, you have a right to object to our use of your data. Please see section 8 to find out more;
        </li>
        <li className="alpha-lower-list__item">
          consent — we may process some of your data when we have your consent to do so. Where the legal basis is consent, you can withdraw consent at any time.
        </li>
        <li className="alpha-lower-list__item">
          You hereby acknowledge and agree that we may receive your personal data from any third parties (such as described in cl. 2 above.) when you connect your Fitmealie.com profile with other services, when we receive enquires, court orders, subpoenas, claims, etc.
        </li>
        <li className="alpha-lower-list__item">
          From time to time we may start surveys/feedbacks for research purposes and we may contact you to find out if you would like to take part. We may also contact you to find out if you would like to take part in marketing campaigns. Such activities are optional. If you do not wish to be contacted to take part in a survey or marketing campaign, please contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or via the respective in-App feature. If you do not want to contact us but you also do not want to participate in our activities, please ignore our messages.
        </li>
      </ul>

      <p>
        We typically use the information you provide us for the following purposes:
      </p>

      <ul className="dash-list">
        <li className="dash-list__item">
          Fulfill or deliver the services you requested
        </li>
        <li className="dash-list__item">
          Provide, maintain, improve and develop new products, services and features, including debugging and repairing errors in our Services
        </li>
        <li className="dash-list__item">
          Personalize your experience with us
        </li>
        <li className="dash-list__item">
          Send you technical notices, security alerts, support messages and other transactional or relationship messages, including responding to your inquiries and comments
        </li>
        <li className="dash-list__item">
          Communicate with you about products, services, and events offered by Us and others and provide news and information that we think will interest you.
        </li>
        <li className="dash-list__item">
          Monitor and analyze trends, usage, and activities in connection with our products and services
        </li>
        <li className="dash-list__item">
          Personalize the advertisements you see on third-party platforms and websites. 
        </li>
        <li className="dash-list__item">
          Show you offers for third-party services personalized to you, based on information we have collected about you
        </li>
        <li className="dash-list__item">
          Facilitate contests, sweepstakes and promotions, and process and deliver entries and rewards
        </li>
        <li className="dash-list__item">
          Detect, investigate, and help prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity, and help protect the rights and property of Us and others
        </li>
        <li className="dash-list__item">
          Comply with our legal and financial obligations
        </li>
        <li className="dash-list__item">
          Create de-identified, anonymized or aggregated information
        </li>
        <li className="dash-list__item">
          Fulfill any other purpose at your direction
        </li>
        <li className="dash-list__item">
          Carry out any other purpose described to you at the time the information was collected
        </li>
      </ul>

      <h2>
        Location and duration of processing
      </h2>

      <ul className="decimal-list">
        {/* 1 */}
        <li className="decimal-list__item">
          Your data will be stored within the term of your use of the Services and up to the termination of such use (or upon agreement between you and Us) which means the deletion, blocking or suspension of your account on the mobile application and the restriction of your further use of the mobile application; we shall terminate the processing of your personal information, unless the special retention period for the storage of such data is set by the relevant legislation at the time.
        </li>
        {/* 2 */}
        <li className="decimal-list__item">
          Exemptions. In practice, we delete or anonymize your information upon termination of your profile or after two years of your continuous inactivity. There may be special rules applied in case that:

          <ul className="alpha-lower-list">
            <li className="alpha-lower-list__item">
              we must hold your data to comply with applicable laws;
            </li>
            <li className="alpha-lower-list__item">
              we must hold your data to evidence our compliance with applicable laws;
            </li>
            <li className="alpha-lower-list__item">
              there is an outstanding issue, claim or dispute requiring us to hold the relevant data until it is resolved; or
            </li>
            <li className="alpha-lower-list__item">
              your data must be kept for our legitimate business interests, such as fraud prevention and enhancing users’ safety and security.
            </li>
          </ul>
        </li>
        {/* 3 */}
        <li className="decimal-list__item">
          Terms of Deletion. All your data is to be fully erased (or anonymised) within 7 calendar days following deletion of your Fitmealie profile, except:
          <ul className="alpha-lower-list">
            <li className="alpha-lower-list__item">
              in-app features and subscription purchases which are being retained during the term of your subscription and 5 years from the deletion of your user account;
            </li>
            <li className="alpha-lower-list__item">
              support tickets, emails with our support team and your name (as identified in your email), as part of support tickets data that are being retained during the term of your subscription and 5 years from the deletion of your user account;
            </li>
            <li className="alpha-lower-list__item">
              hashed email address, phone number, IP address, profile ID (including, Fitmealie ID) and device ID (NOT a device IMEI) associated with banned account which are being retained during the term of your subscription and 5 years from the deletion of your user account owing to our legitimate interest;
            </li>
          </ul>
        </li>
        {/* 4 */}
        <li className="decimal-list__item">
          Leftovers. When your account is deleted (as well as your data) from the Services, copies of your data may still be viewable, if your data has been previously shared with others, or copied or stored by other users or other third parties. We cannot control this, nor do we accept any liability for this. If you have given third party applications or websites access to your data, they may retain such information to the extent permitted under their own privacy policies.
        </li>
        {/* 5 */}
        <li className="decimal-list__item">
          Removed and deleted data may be hosted in backup copies for up to 30 days, but will not be available to others in the meantime. We put that backup data ‘beyond use’. At the end of this period, these data will be permanently deleted.
        </li>
        {/* 6 */}
        <li className="decimal-list__item">
          Location of Servers; Data Transfer. Our servers are based in the USA and EU, so your data may be processed and hosted inside the EU.
        </li>
      </ul>

      <h2>
        How do we share your personal information
      </h2>

      <p>
        We share information about you in the following circumstances or as otherwise described in this notice:
      </p>

      <ul className="alpha-lower-list">
        <li className="alpha-lower-list__item">
          With companies, professional advisors, and contractors that access your information to perform services for us, such as companies that assist us with web hosting, data storage, identity verification, fraud prevention, payment processing, financial services, customer service and support, legal and consulting services, customer communications, analytics, and marketing and advertising;
        </li>
        <li className="alpha-lower-list__item">
          With business partners that provide products or services you request or that jointly offer products and services with us;
        </li>
        <li className="alpha-lower-list__item">
          If we believe that disclosure is in accordance with, or required by, any applicable law or legal process. For example, we may disclose information about users or transactions in connection with tax filings, regulatory requests, court orders, or law enforcement requests;
        </li>
        <li className="alpha-lower-list__item">
          If we believe that your actions are inconsistent with our user agreements or policies, that you have violated the law, or that it is necessary to protect the rights, property, and safety of Fitmealie, our users, the public, or others.
        </li>
        <li className="alpha-lower-list__item">
          In connection with, or during negotiations concerning, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.
        </li>
        <li className="alpha-lower-list__item">
          Between and among Fitmealie and its affiliates for use in connection with the purposes outlined above.
        </li>
        <li className="alpha-lower-list__item">
          With your consent or at your direction, such as by sending your user information and transaction amount in connection with transactions you engage in with other users.
        </li>
      </ul>
      <p>
        We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
      </p>
      <p>
        We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
      </p>
      <p>
        Please note that you can withdraw your consent for data sharing with third parties at any time. You can withdraw your consent by notifying us via the email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>
        Analytics
      </h2>

      <p>
        We allow others to provide analytics services in connection with our Services. These entities may use cookies, web beacons, device identifiers, and other technologies to collect information about your use of our Services and across other websites and online services, including your IP address, web browser, mobile network information, pages viewed, time spent on pages or in mobile apps, and links clicked. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, and better understand your online activity.
      </p>
      <p>
        If you don`t wish the tracking technologies to be active for You, you can change the settings in your browser. Please be advised that turning off the tracking technologies might affect the delivery of the Services and will not stop you from seeing the ads, though they will be less relevant to you.
      </p>

      <h2>
        Children's Privacy
      </h2>

      <p>
        Fitmealie.com products are not intended for children. We don't direct our Services to persons under 18, or knowingly attempt to solicit or receive information from children.
      </p>

      <h2>
        Updates to this policy
      </h2>

      <p>
        We may revise the Policy according to new developments or advances in legislation and the broader data protection landscape from time to time, so please check this page regularly to ensure you’re always up-to-date with any changes.
      </p>
      <p>
        If we make any changes hereto that, in our sole discretion, are substantial, we will notify you on the Site home page, or make a notification appear in your profile when you next log in to the Site before amendments become effective. A notification regarding other changes may be rendered to you by publishing at <a href={window.location.href}>{window.location.href}</a>
      </p>

      <h2>
        How to contact the appropriate authority
      </h2>

      <p>
        Should you wish to file a complaint or if You feel that We have not addressed your concerns in a satisfactory manner, you may contact the Information Commissioner Office: <a href='https://edpb.europa.eu/about-edpb/about-edpb/members_en' target='_blank'>https://edpb.europa.eu/about-edpb/about-edpb/members_en</a>.
      </p>

      <h2>
        Notice to California Users
      </h2>

      <p>
        The California Consumer Privacy Act or "CCPA" (Cal. Civ. Code § 1798.100 et seq.), as well as further amendments to it by California Privacy Rights Act “CPRA” (Cal. Civ. Code § 1798.100 et seq.) (hereinafter – the “Law” and collectively – the “Laws”) affords consumers residing in California certain rights with respect to their personal information. If you are a California resident, this California Privacy Policy applies to you.
      </p>
      <p>
        According to the abovementioned Laws you may execute the following rights:
      </p>

      <ul className="dash-list">
        <li className="dash-list__item">
          Right to Know What Personal Information is Being Collected;
        </li>
        <li className="dash-list__item">
          Right to access Personal Information;
        </li>
        <li className="dash-list__item">
          Right to Correct Inaccurate Personal Information
        </li>
        <li className="dash-list__item">
          Right to Delete Personal Information
        </li>
        <li className="dash-list__item">
          Right to Know What Personal Information is Sold or Shared and to Whom;
        </li>
        <li className="dash-list__item">
          Right to Opt Out of Sale or Sharing of Personal Information;
        </li>
        <li className="dash-list__item">
          Right to Limit Use and Disclosure of Sensitive Personal Information;
        </li>
        <li className="dash-list__item">
          Right of No Retaliation Following Opt Out or Exercise of Other Rights;
        </li>
      </ul>
      <p>
        Here you can find the how you can find some details:
      </p>

      <h2>
        Collection and Use of Personal Information
      </h2>

      <p>
        In the preceding 12 month, we collected the following categories of personal information:
      </p>

      <table>
        <thead>
          <tr>
            <th>Category of Personal Information</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Identifiers
            </td>
            <td>
              Name, alias, postal address, online identifier (including IP address), email address, or other similar identifiers.
            </td>
          </tr>
          <tr>
            <td>
              Personal Information Categories Listed In The California Customer Records Statute (Cal. Civ. Code § 1798.80(e))
            </td>
            <td>
              Bank account number, credit card number, debit card number, and other financial information (including credit report, salary, and net worth).
            </td>
          </tr>
          <tr>
            <td>
              Protected Classification Characteristics Under California Or Federal Law
            </td>
            <td>
              Age, gender.
            </td>
          </tr>
          <tr>
            <td>
              Commercial Information
            </td>
            <td>
              Records of products or services purchased.
            </td>
          </tr>
          <tr>
            <td>
              Internet Or Other Similar Network Activity
            </td>
            <td>
              Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement.
            </td>
          </tr>
          <tr>
            <td>
              Sensory Data
            </td>
            <td>
              Audio (such as call recordings) or the contents of videos you choose to upload.
            </td>
          </tr>
          <tr>
            <td>
              Professional Or Employment-Related Information
            </td>
            <td>
              Current employment status.
            </td>
          </tr>
          <tr>
            <td>
              Inferences Drawn From Other Personal Information
            </td>
            <td>
              Preferences, characteristics and approximate location.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        For details about the precise data points we collect and the categories of sources of such collection, please see the “What and how we collect your personal Information” section. We collect personal information for the business and commercial purposes described in the  section.
      </p>

      <h2>
        Disclosure of Personal Information
      </h2>

      <p>
        In the preceding 12 months, we've disclosed the following categories of personal information for business or commercial purposes to the following categories of recipients:
      </p>

      <table>
        <thead>
          <tr>
            <th>Category of Personal Information</th>
            <th>Category of Recipients</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Identifiers
            </td>
            <td>
              Partners, advertising networks, and service providers (such as internet service providers, data analytics providers, email service providers, data storage providers, customer support providers, account management providers, operating systems and platforms).
            </td>
          </tr>
          <tr>
            <td>
              ategories Of Personal Information Described In Subdivision (e) Of Section 1798.80
            </td>
            <td>
              Partners, advertising networks, and service providers (such as internet service providers, data analytics providers, email service providers, data storage providers, customer support providers, account management providers, operating systems and platforms).
            </td>
          </tr>
          <tr>
            <td>
              Protected Classification Characteristics
            </td>
            <td>
              Service providers, Affiliates, and partner companies.
            </td>
          </tr>
          <tr>
            <td>
              Commercial Information
            </td>
            <td>
              Partners, advertising networks, and service providers (such as internet service providers, data analytics providers, email service providers, data storage providers, customer support providers, account management providers, operating systems and platforms).
            </td>
          </tr>
          <tr>
            <td>
              Internet Or Other Network Activity
            </td>
            <td>
              Advertising networks and service providers (such as internet service providers, data analytics providers, data storage providers, operating systems and platforms).
            </td>
          </tr>
          <tr>
            <td>
              Geolocation Data
            </td>
            <td>
              Partners and service providers.
            </td>
          </tr>
          <tr>
            <td>
              Sensory Data
            </td>
            <td>
              Partners.
            </td>
          </tr>
          <tr>
            <td>
              Professional Or Employment-Related Information
            </td>
            <td>
              Service providers and partners.
            </td>
          </tr>
          <tr>
            <td>
              Inferences Drawn From Other Personal Information
            </td>
            <td>
              Partners, advertising networks, and service providers (such as internet service providers, data analytics providers, email service providers, data storage providers, customer support providers, account management providers, operating systems and platforms).
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        We make collect certain “sensitive personal information” in the meaning of the CCPA/CPRA. Please not that  you have the right to limit the Use and Disclosure of Sensitive Personal Information at any time by visiting our “Limit Use and Disclosure of Sensitive Personal Information” webpage.
      </p>

      <h2>
        Sale of Personal Information
      </h2>
      <p>
        California law provides for certain disclosures about personal information we "sell", which for the purposes of the CCPA, means certain scenarios in which Fitmealie has shared personal information with third parties or Affiliates, in exchange for valuable consideration.
      </p>
      <p>
        Under this definition, we "sell" personal information for the following commercial purposes: to enable our Affiliates and certain third parties to use your information in accordance with their privacy policies. We "sell" the following categories of personal information to the following categories of third parties:
      </p>

      <table>
        <thead>
          <tr>
            <th>Category of Personal Information</th>
            <th>Category of Recipients</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Identifiers
            </td>
            <td>
              Affiliates and non-affiliated third parties.
            </td>
          </tr>
          <tr>
            <td>
              Categories Of Personal Information Described In Subdivision (e) Of Section 1798.80
            </td>
            <td>
              Affiliates and non-affiliated third parties
            </td>
          </tr>
          <tr>
            <td>
              Commercial Information
            </td>
            <td>
              Affiliates and non-affiliated third parties
            </td>
          </tr>
          <tr>
            <td>
              Internet Or Other Network Activity
            </td>
            <td>
              Affiliates and non-affiliated third parties
            </td>
          </tr>
          <tr>
            <td>
              Inferences Drawn From Other Personal Information
            </td>
            <td>
              Affiliates and non-affiliated third parties
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        You have the right to opt out of these "sales" at any time by visiting our “Do not sell or share my personal information” webpage. We do not knowingly sell personal information about consumers under the age of 16.
      </p>
      <p>
        Execution of rights
      </p>
      <p>
        If you are a resident of California and you would like to use any of your rights under the Laws: (1) request to know more about the categories and specific pieces of personal information we collect, use, disclose and sell, (2) request deletion of your personal information, (3) opt out of "sales" of your personal information and (4) not be discriminated against for exercising these rights – you can contact us via the <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or mail us directly to the following address: 200 S. Virginia, 8th Floor, Reno, Nevada 89501. Please note that we might require you to verify your identity by asking you to provide some information about our interactions with you.
      </p>
      <p>
        If you would like to “opt – out” or sell or share you Personal information you can use the following Do not sell my personal information page.
      </p>
      <p>
        If we receive your request from an authorized agent, we may ask for evidence that you've provided such agent with a power of attorney, or that the agent otherwise has valid written authority to submit requests to exercise rights on your behalf. If you're an authorized agent seeking to make a request, please contact us as set out above.
      </p>

      <h2>
        Contact Us
      </h2>

      <p>
        If you are in the United States and have any questions about this privacy notice, please contact us at:
      </p>
      <p>
        Post Box.: 200 S. Virginia, 8th Floor, Reno, Nevada 89501
      </p>
      <p>
        E-mail.: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </div>
  );
};

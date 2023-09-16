import React from "react";
import "./practiceAreas.css";

const PracticeAreas = () => {
  return (
    <div className="practiceContent">
        <div className="headingPractice">
            <h1>Our Practice Areas</h1>
        </div>
        <div className="descPractice">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis?</p>
        </div>
      <div className="about_cards">
        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Civil Litigation</h3>
          <small>Are you embroiled in a legal dispute or facing civil litigation? Our eNyaya Seva platform is here to guide you through the complexities of civil law. Our team of experienced legal experts can help you navigate the legal process, from filing lawsuits to defending your rights in court. Trust us to provide you with the support and knowledge you need to achieve a favorable outcome in your civil case.</small>
        </div>

        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Trade & Finance Law</h3>
          <small>In the fast-paced world of trade and finance, staying compliant with ever-changing regulations is crucial. eNyaya Seva offers comprehensive guidance on trade and finance law matters. Whether you're a business owner, investor, or individual, our legal professionals can help you make informed decisions, manage risk, and ensure your financial transactions are in compliance with the law.</small>
        </div>

        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Family Law</h3>
          <small>Family matters can be emotionally challenging and legally complex. eNyaya Seva understands the sensitivity of family law issues and offers compassionate guidance for divorce, child custody, adoption, and more. Our experienced family law attorneys are dedicated to helping you navigate these challenging times while protecting your best interests and the well-being of your loved ones.</small>
        </div>

        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Business Taxation</h3>
          <small>Navigating the intricacies of business taxation is crucial to the success and compliance of your company. eNyaya Seva offers comprehensive support for businesses of all sizes, ensuring you meet your tax obligations while optimizing your financial strategies. Our tax experts can help you minimize tax liability, plan for the future, and keep your business on the path to success.</small>
        </div>

        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Accident Injuries</h3>
          <small>Accidents happen when we least expect them, and they can be life-changing events. If you or a loved one has suffered injuries due to someone else's negligence, eNyaya Seva is here to help you seek justice. Our team of personal injury attorneys will work tirelessly to ensure you receive fair compensation for medical expenses, pain, and suffering, allowing you to focus on your recovery.</small>
        </div>

        <div className="about_card">
          <div className="about_icon"></div>
          <h3>Education Law</h3>
          <small>Education is a fundamental right, and our eNyaya Seva platform is here to protect and uphold it. We specialize in education law matters, addressing issues such as student rights, school disputes, special education, and more. Our team of experts is dedicated to ensuring that every individual has access to quality education and that their rights within the education system are safeguarded.</small>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;

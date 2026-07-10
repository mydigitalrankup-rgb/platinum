"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .wcu-section { background-color: #f5f5f3; padding: 60px 60px 70px; }
        .wcu-heading { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: #c8102e; margin: 0 0 30px 0; }
        .wcu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
        .wcu-img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .wcu-text { padding-top: 10px; font-size: 13px; color: #333; line-height: 1.9; text-align: center; }
        .wcu-text p { margin: 0; }
        .wcu-spacer { margin-top: 14px !important; }
        @media (max-width: 1024px) and (min-width: 481px) {
          .wcu-section { padding: 40px 36px 60px; }
          .wcu-heading { text-align: center; }
          .wcu-grid { grid-template-columns: 1fr; gap: 32px; }
          .wcu-img { height: 340px; }
          .wcu-spacer br { display: none; }
        }
        @media (max-width: 480px) {
          .wcu-section { padding: 36px 18px 48px; }
          .wcu-heading { font-size: 24px; text-align: center; margin-bottom: 22px; }
          .wcu-grid { grid-template-columns: 1fr; gap: 22px; }
          .wcu-img { height: 220px; }
          .wcu-text { font-size: 13px; line-height: 1.75; }
          .wcu-spacer br { display: none; }
        }
      `}</style>

      <section className="wcu-section">
        <h2 className="wcu-heading">Why Choose Us?</h2>
        <div className="wcu-grid">
          <Image src="/images/why-choose-us.jpg" alt="Luxury interior" className="wcu-img" width={700} height={420} />
          <div className="wcu-text">
            <p>Extensive experience in financial analysis and risk assessment</p>
            <p>Expert guidance for apartments, plots, and villas</p>
            <p>Strong market presence in Mohali, Zirakpur, and Panchkula</p>
            <p>Access to premium and high-growth investment opportunities</p>
            <p>Transparent and ethical business practices</p>
            <p>Personalized property consultation based on individual goals</p>
            <p>End-to-end assistance from property selection to final transaction</p>
            <p className="wcu-spacer">
              Our mission is simple: to help our clients make smart real estate<br />
              decisions that create long-term value and financial growth.<br />
              Whether you are searching for your dream home, planning your<br />
              next investment, or exploring opportunities in emerging markets<br />
              like Dholera, Platinum Realtors is committed to delivering trusted<br />
              advice, professional service, and complete peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
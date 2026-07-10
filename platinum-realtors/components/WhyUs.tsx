"use client";
import Image from "next/image";

const features = [
  "Expert market\nknowledge\nand insights",
  "Personalized\nproperty\nmatching",
  "Transparent\npricing and\nprocess",
  "End-to-end\nsupport and\nassistance",
  "Verified and\npremium\nlistings",
];

export default function WhyUs() {
  return (
    <>
      <style>{`
        .why-us { padding: 60px 40px 0; background-color: #fff; }
        .why-us-heading { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: #c8102e; text-align: center; margin-bottom: 10px; }
        .why-us-desc { font-size: 13px; color: #555; text-align: center; margin-bottom: 6px; font-family: "Montserrat"; }
        .why-us-desc-two { font-size: 13px; color: #555; text-align: center; margin-bottom: 40px; }
        .why-us-cards { display: flex; gap: 12px; }
        .why-us-card { flex: 1; position: relative; padding: 48px 20px; display: flex; align-items: center; justify-content: center; text-align: center; min-height: 160px;overflow: hidden; }
        .why-us-card::before { content: ""; position: absolute; inset: 0; background-image: url('/images/card-bg.png'); background-size: 100% 100%; background-position: center; z-index: 0; }
        .why-us-card::after { content: ""; position: absolute; inset: 0; z-index: 1; }
        .why-us-card span { position: relative; z-index: 2; color: #fff; font-size: 13px; line-height: 1.6; white-space: pre-line; font-family: "Montserrat"; }
        @media (max-width: 768px) {
          .why-us { padding: 60px 24px 0; }
          .why-us-cards { flex-wrap: wrap; gap: 10px; }
          .why-us-card { flex: 1 1 calc(50% - 10px); min-height: 140px; }
        }
        @media (max-width: 480px) {
          .why-us { padding: 60px 16px 0; }
          .why-us-cards { flex-direction: column; }
          .why-us-card { flex: 1 1 100%; min-height: 100px; }
        }
      `}</style>

      <section className="why-us">
        <h2 className="why-us-heading">Why Us?</h2>
        <p className="why-us-desc"></p>
        <p className="why-us-desc-two">Our commitment to excellence and customer satisfaction sets us apart. <br />
          With over 15 years of experience in the real estate industry, we've helped <br /> thousands of clients find their perfect property.</p>
        <div className="why-us-cards">
          {features.map((feat, i) => (
            <div className="why-us-card" key={i}>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
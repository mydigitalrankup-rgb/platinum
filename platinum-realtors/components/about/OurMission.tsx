"use client";
import Image from "next/image";

export default function OurMission() {
  return (
    <>
      <style>{`
        .om-section { background-color: #f5f5f3; padding: 20px 60px 70px; }
        .om-heading { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: #c8102e; text-align: right; margin: 0 0 30px 0; }
        .om-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
        .om-text { font-size: 13px; color: #333; line-height: 1.85; padding-top: 10px; margin: 0; text-align: center; }
        .om-img { width: 100%; height: 420px; object-fit: cover; display: block; }
        @media (max-width: 1024px) and (min-width: 481px) {
          .om-section { padding: 20px 36px 60px; }
          .om-grid { grid-template-columns: 1fr; gap: 32px; }
          .om-heading { text-align: center; }
          .om-img { height: 340px; order: -1; }
          .om-text br { display: none; }
        }
        @media (max-width: 480px) {
          .om-section { padding: 20px 18px 48px; }
          .om-heading { font-size: 24px; text-align: center; margin-bottom: 22px; }
          .om-grid { grid-template-columns: 1fr; gap: 22px; }
          .om-img { height: 220px; order: -1; }
          .om-text { font-size: 13px; line-height: 1.75; }
          .om-text br { display: none; }
        }
      `}</style>

      <section className="om-section">
        <h2 className="om-heading">Our Mission</h2>
        <div className="om-grid">
          <p className="om-text">
            Our mission is to simplify property ownership for families and<br />
            business owners alike by matching your diverse real estate<br />
            aspirations with deep, data-driven local insights. Whether you<br />
            are looking for a commercial storefront to scale your business<br />
            or a residential home to plant your roots, we eliminate the<br />
            guesswork through total transparency and responsive<br />
            guidance. By bridging the gap between commercial growth<br />
            and residential comfort, our trusted expertise ensures every<br />
            transaction builds lasting financial security.
          </p>
          <Image src="/images/our-mission.jpg" alt="Mission - living space" className="om-img" width={700} height={420} />
        </div>
      </section>
    </>
  );
}
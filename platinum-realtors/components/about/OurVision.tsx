"use client";
import Image from "next/image";

export default function OurVision() {
  return (
    <>
      <style>{`
        .ov-section { background-color: #f5f5f3; padding: 20px 60px 70px; }
        .ov-heading { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: #c8102e; margin: 0 0 30px 0; }
        .ov-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
        .ov-img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .ov-text { font-size: 13px; color: #333; line-height: 1.85; text-align: center; padding-top: 10px; margin: 0; }
        @media (max-width: 1024px) and (min-width: 481px) {
          .ov-section { padding: 20px 36px 60px; }
          .ov-heading { text-align: center; }
          .ov-grid { grid-template-columns: 1fr; gap: 32px; }
          .ov-img { height: 340px; }
          .ov-text br { display: none; }
        }
        @media (max-width: 480px) {
          .ov-section { padding: 20px 18px 48px; }
          .ov-heading { font-size: 24px; text-align: center; margin-bottom: 22px; }
          .ov-grid { grid-template-columns: 1fr; gap: 22px; }
          .ov-img { height: 220px; }
          .ov-text { font-size: 13px; line-height: 1.75; }
          .ov-text br { display: none; }
        }
      `}</style>

      <section className="ov-section">
        <h2 className="ov-heading">Our Vision</h2>
        <div className="ov-grid">
          <Image src="/images/our-vision.jpg" alt="Vision - corridor" className="ov-img" width={700} height={420} />
          <p className="ov-text">
            Our vision is to become the premier real estate anchor where<br />
            commercial ambition and residential comfort seamlessly<br />
            connect to build thriving local communities. We envision a<br />
            future where finding the perfect workspace or a dream family<br />
            home is entirely stress-free, driven by cutting-edge market data<br />
            and a legacy of absolute trust. By continuously elevating the<br />
            standards of real estate service, we aim to empower our clients<br />
            to build generational wealth and secure their futures across<br />
            both personal and professional landscapes. Through our<br />
            forward-thinking approach, we don't just facilitate transactions;<br />
            we cultivate the very spaces where businesses prosper and<br />
            families flourish for generations to come.
          </p>
        </div>
      </section>
    </>
  );
}
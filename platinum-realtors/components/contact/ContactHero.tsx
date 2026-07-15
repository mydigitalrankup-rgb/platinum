"use client";

export default function ContactHero() {
  return (
    <>
      <style>{`
        .contact-hero {
          position: relative;
          width: 100%;
          height: 500px;
          min-height: 300px;
          overflow: visible;
          display: flex;
          align-items: center;
          z-index: 1;
        }
        .contact-hero__media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .contact-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
        
        }
        .contact-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, transparent 45%);
        }
        .contact-hero__content {
          position: relative;
          z-index: 2;
          padding: 128px 81px 72px;
          max-width: 720px;
        }
        .contact-hero__title {
                 font-family:Montserrat;

          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 12px;
        }
        .contact-hero__subtitle {
          font-size: clamp(14px, 2vw, 16px);
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          font-weight: 400;
        }
        .contact-hero__divider {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #D7172A;
          z-index: 3;
        }
        @media (max-width: 1024px) {
          .contact-hero__content { padding: 108px 40px 64px; }
        }
        @media (max-width: 768px) {
          .contact-hero { height: 300px; }
          .contact-hero__content { padding: 96px 20px 56px; }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero__media">
          <img
            src="/cotact_us_hero.png"
            alt="Platinum Real Estate building at night"
            className="contact-hero__img"
          />
          <div className="contact-hero__overlay" />
        </div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__subtitle">
            Your Dream Property Starts with a Conversation
          </p>
        </div>
        <div className="contact-hero__divider" />
      </section>
    </>
  );
}

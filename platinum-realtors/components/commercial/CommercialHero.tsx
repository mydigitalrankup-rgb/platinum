"use client";
import Image from "next/image";

export default function CommercialHero() {
  return (
    <>
      <style>{`
        .ch-hero { position: relative; width: 100%; height: 100vh;  overflow: hidden; display: flex; align-items: center; }
        .ch-bg { position: absolute; inset: 0; z-index: 0; filter: grayscale(0%);
        
         width: 100%;
  min-height: 100vh;

  background-image: url("/images/commercial-hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
        
        
        }
      //  .ch-overlay-red { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to right, rgba(160, 10, 10, 0.53) 0%, rgba(0, 76, 255, 0.86) 28%, rgba(120,10,10,0.18) 48%, transparent 65%); }
        //  .ch-overlay-dark { position: absolute; inset: 0; z-index: 2; background: linear-gradient(to right, rgb(77, 243, 0) 0%, rgba(0,0,0,0.25) 30%, transparent 55%); }
        .ch-content { position: relative; z-index: 3; margin:0 7%; max-width: 520px;  }
        .ch-pre { font-size: 28px; font-weight: 400; color: #fff; line-height: 1.2; margin: 0 0 2px; }
        .ch-title { font-size: 68px; font-weight: 800; color: #fff; line-height: 1.05; margin: 0 0 2px; letter-spacing: -1px; }
        .ch-post { font-size: 28px; font-weight: 400; color: #fff; line-height: 1.2; margin: 0 0 28px; }
        .ch-desc {backdrop-filter: blur(4px);  background: rgba(0,0,0,0.52); padding: 16px 18px; max-width: 290px; margin-bottom: 32px; border-radius: 2px; }
        .ch-desc p { font-size: 13px; color: rgba(255,255,255,0.88); line-height: 1.7; margin: 0; }
        .ch-btn { display: inline-block; background: #D7172A; color: #fff; font-size: 14px; font-weight: 600; padding: 13px 28px; border: none; border-radius: 2px; cursor: pointer; text-decoration: none; letter-spacing: 0.3px; transition: background 0.2s; }
        .ch-btn:hover { background: #b51222; }
        @media (max-width: 1024px) { .ch-content { padding: 0 36px; max-width: 460px; } .ch-title { font-size: 56px; } .ch-pre, .ch-post { font-size: 24px; } }
        @media (max-width: 767px) { .ch-hero { align-items: flex-end; padding-bottom: 48px; } .ch-overlay-red { background: linear-gradient(to right, rgba(160,10,10,0.78) 0%, rgba(160,10,10,0.60) 40%, rgba(120,10,10,0.25) 65%, transparent 85%); } .ch-content { padding: 0 24px; max-width: 100%; } .ch-title { font-size: 48px; letter-spacing: -0.5px; } .ch-pre, .ch-post { font-size: 22px; } .ch-desc { max-width: 340px; margin-bottom: 24px; } }
        @media (max-width: 599px) { .ch-hero { align-items: flex-end; padding-bottom: 40px; } .ch-overlay-red { background: linear-gradient(to bottom, rgba(120,10,10,0.10) 0%, rgba(140,10,10,0.50) 40%, rgba(160,10,10,0.82) 100%); } .ch-overlay-dark { background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.45) 100%); } .ch-content { padding: 0 20px; max-width: 100%; } .ch-pre { font-size: 18px; } .ch-title { font-size: 40px; letter-spacing: -0.5px; } .ch-post { font-size: 18px; margin-bottom: 20px; } .ch-desc { max-width: 100%; padding: 14px 16px; margin-bottom: 24px; } .ch-desc p { font-size: 13px; line-height: 1.65; } .ch-btn { width: 100%; text-align: center; padding: 14px 28px; font-size: 15px; } }
        @media (max-width: 380px) { .ch-hero { padding-bottom: 32px; } .ch-content { padding: 0 16px; } .ch-pre { font-size: 16px; } .ch-title { font-size: 34px; } .ch-post { font-size: 16px; margin-bottom: 16px; } .ch-desc { padding: 12px 14px; margin-bottom: 20px; } .ch-desc p { font-size: 12px; } .ch-btn { font-size: 14px; padding: 13px 24px; } }
      `}</style>

      <section className="ch-hero">
        <div className="ch-bg">
          {/* <Image src="/images/commercial-hero.png" alt="Commercial properties" fill style={{ objectFit: "cover", objectPosition: "center" }} priority sizes="100vw" /> */}
        </div>
        <div className="ch-overlay-red" />
        <div className="ch-overlay-dark" />
        <div className="ch-content">
          <p className="ch-pre">Prime</p>
          <h1 className="ch-title">Commercial</h1>
          <p className="ch-post">Properties</p>
          <div className="ch-desc">
            <p>The city's commercial towers offer a perfect mix of Grade-A office spaces, high-street retail showrooms, and premium entertainment zones.</p>
          </div>
          <a href="#projects" className="ch-btn">Have a look</a>
        </div>
      </section>
    </>
  );
}
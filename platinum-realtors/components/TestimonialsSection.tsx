"use client";
import Image from "next/image";

const customers = [
  { img: "/images/first.jpg",  name: "",            height: 150, width: 120, marginBottom: 44 },
  { img: "/images/second.jpg", name: "",            height: 190, width: 140, marginBottom: 30 },
  { img: "/images/third.jpg",  name: "Mr. Rajat Sood", height: 250, width: 185, featured: true },
  { img: "/images/fourth.jpg", name: "",            height: 190, width: 140, marginBottom: 30 },
  { img: "/images/fifth.jpg",  name: "",            height: 150, width: 120, marginBottom: 44 },
];

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
        .ts-section { padding: 56px 60px 48px; text-align: center; position: relative; overflow: hidden; background-color: #ffffff; font-family: 'Playfair Display', serif; }
        .ts-watermark { position: absolute; top: 70px; left: 51%; transform: translateX(-50%); font-size: 130px; font-weight: 900; color: rgba(210, 30, 60, 0.07); white-space: nowrap; pointer-events: none; letter-spacing: 12px; font-family: 'Playfair Display', serif; user-select: none; line-height: 1; z-index: 0; }
        .ts-heading { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; font-style: italic; color: #c8102e; margin: 0 0 44px 0; position: relative; z-index: 1; letter-spacing: 0.01em; }
        .ts-row { display: flex; justify-content: center; align-items: flex-end; gap: 14px; margin-bottom: 20px; position: relative; z-index: 1; }
        .ts-card { position: relative; flex-shrink: 0; border: 1.5px solid rgba(180, 20, 40, 0.55); overflow: hidden; }
        .ts-card--featured { border: 2px solid #c8102e; box-shadow: 0 4px 24px rgba(0,0,0,0.12); }
        .ts-card-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(20, 20, 20, 0.52); color: #fff; font-family: 'Playfair Display', serif; font-size: 11px; font-weight: 400; padding: 5px 8px 6px; text-align: left; letter-spacing: 0.02em; }
        .ts-footer { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 400; color: #1a1a1a; line-height: 1.5; position: relative; z-index: 1; margin: 0; }
        @media (max-width: 1024px) { .ts-section { padding: 48px 32px 40px; } .ts-watermark { font-size: 110px; letter-spacing: 8px; } }
        @media (max-width: 767px) {
          .ts-section { padding: 40px 20px 36px; } .ts-watermark { font-size: 80px; letter-spacing: 5px; top: 60px; } .ts-heading { font-size: 20px; margin-bottom: 32px; } .ts-row { gap: 8px; }
          .ts-row .ts-card:nth-child(1), .ts-row .ts-card:nth-child(5) { width: 90px !important; height: 112px !important; margin-bottom: 33px !important; }
          .ts-row .ts-card:nth-child(2), .ts-row .ts-card:nth-child(4) { width: 105px !important; height: 142px !important; margin-bottom: 22px !important; }
          .ts-row .ts-card:nth-child(3) { width: 138px !important; height: 188px !important; }
          .ts-footer { font-size: 14px; }
        }
        @media (max-width: 599px) {
          .ts-section { padding: 36px 16px 32px; } .ts-watermark { font-size: 58px; letter-spacing: 3px; top: 50px; } .ts-heading { font-size: 18px; margin-bottom: 28px; } .ts-row { gap: 6px; }
          .ts-row .ts-card:nth-child(1), .ts-row .ts-card:nth-child(5) { width: 66px !important; height: 87px !important; margin-bottom: 26px !important; }
          .ts-row .ts-card:nth-child(2), .ts-row .ts-card:nth-child(4) { width: 81px !important; height: 110px !important; margin-bottom: 17px !important; }
          .ts-row .ts-card:nth-child(3) { width: 107px !important; height: 145px !important; }
          .ts-card-label { font-size: 9px; padding: 4px 6px 5px; } .ts-footer { font-size: 13px; }
        }
        @media (max-width: 380px) {
          .ts-section { padding: 28px 10px 24px; } .ts-watermark { font-size: 44px; letter-spacing: 2px; } .ts-heading { font-size: 16px; margin-bottom: 24px; } .ts-row { gap: 5px; }
          .ts-row .ts-card:nth-child(1), .ts-row .ts-card:nth-child(5) { width: 52px !important; height: 69px !important; margin-bottom: 20px !important; }
          .ts-row .ts-card:nth-child(2), .ts-row .ts-card:nth-child(4) { width: 64px !important; height: 88px !important; margin-bottom: 14px !important; }
          .ts-row .ts-card:nth-child(3) { width: 84px !important; height: 114px !important; }
          .ts-card-label { font-size: 8px; padding: 3px 5px 4px; } .ts-footer { font-size: 12px; }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-watermark" aria-hidden="true">PLATINUM</div>
        <h2 className="ts-heading">Thousands of Satisfied Customers</h2>
        <div className="ts-row">
          {customers.map((c, i) => (
            <div
              key={i}
              className={`ts-card${c.featured ? " ts-card--featured" : ""}`}
              style={{ width: c.width, height: c.height, marginBottom: c.marginBottom }}
            >
              <Image
                src={c.img}
                alt={c.name || `Customer ${i + 1}`}
                width={c.width}
                height={c.height}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              {c.name && <span className="ts-card-label">{c.name}</span>}
            </div>
          ))}
        </div>
        <p className="ts-footer">Hundreds of Happy<br />clients</p>
      </section>
    </>
  );
}
"use client";
import Image from "next/image";

const IMAGES = [
  { id: 1, src: "/images/a1.jpg", alt: "Marble room",     top: 18,  left: 160, width: 350, height: 200 },
  { id: 2, src: "/images/a2.jpg", alt: "Living room",     top: 128, left: 400, width: 250, height: 200 },
  { id: 3, src: "/images/a3.jpg", alt: "Dark kitchen",    top: 278, left: 158, width: 300, height: 148 },
  { id: 4, src: "/images/a4.jpg", alt: "Flowers kitchen", top: 395, left: 270, width: 255, height: 175 },
  { id: 5, src: "/images/a5.jpg", alt: "White kitchen",   top: 500, left: 400, width: 250, height: 175 },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        .about-section { position: relative; width: 100%; min-height: 800px; display: flex; flex-direction: row; overflow: hidden; font-family: 'Georgia', serif; }
        .about-collage { position: relative; width: 52%; flex-shrink: 0; height: 100%; z-index: 2; }
        .c-img { position: absolute; object-fit: cover; display: block; top: var(--top); left: var(--left); width: var(--width); height: var(--height); }
        .collage-grid { display: none; }
        .collage-line { position: absolute; top: 18px; left: 444px; width: 1px; height: 295px; background: linear-gradient(to bottom, #c8a96e 70%, transparent); }
        .collage-arc { position: absolute; bottom: 48px; left: -8px; width: 185px; height: 65px; border-bottom: 1px solid rgba(200,169,110,0.32); border-right: 1px solid rgba(200,169,110,0.12); border-radius: 0 0 36px 0; pointer-events: none; }
        .about-panels { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 26px; padding: 44px 34px 44px 20px; position: relative; z-index: 2; }
        .about-panel { width:90%; background: rgba(26,24,24,0.90); border: 1px solid rgba(200,169,110,0.22); padding: 22px 26px; text-align: center; }
        .about-panel p {font-family:Montserrat; margin: 0; font-size: 12.5px; color: #b5b0a6; line-height: 1.85; }
        .panel-brand { font-weight: 700; color: #c0392b; font-style: italic; }
        .panel-big-red {font-size: 20px; font-weight: 700; color: #c0392b;   font-family: "Playfair Display", serif;line-height: 1.1; display: inline; }
        .panel-big-red-sm {  font-family: "Playfair Display", serif; font-size: 20px; font-weight: 700; color: #c0392b; line-height: 1.1; display: inline; }
        .prism-wrap { position: absolute; bottom: 0; right: 0; width: 175px; height: 290px; pointer-events: none; }
        .prism { position: absolute; border: 1px solid rgba(200,169,110,0.38); background: linear-gradient(135deg, rgba(180,140,60,0.07), transparent); }
        .prism--lg { width: 80px; height: 130px; bottom: 22px; right: 26px; transform: rotate(14deg) skewY(-6deg); }
        .prism--md { width: 48px; height: 76px; bottom: 85px; right: 98px; transform: rotate(14deg) skewY(-6deg); border-color: rgba(200,169,110,0.22); }
        .prism--sm { width: 30px; height: 48px; bottom: 168px; right: 55px; transform: rotate(14deg) skewY(-6deg); border-color: rgba(200,169,110,0.13); }
        @media (max-width: 1024px) and (min-width: 481px) {
          .about-section { height: auto; flex-direction: column; }
          .about-collage { width: 100%; height: 420px; flex-shrink: 0; }
          .about-collage .c-img { transform: scale(0.64); transform-origin: top left; }
          .collage-line { left: 284px; }
          .about-panels { width: 100%; padding: 32px 28px; gap: 20px; }
          .prism-wrap { width: 120px; height: 200px; }
          .prism--lg { width: 60px; height: 96px; bottom: 16px; right: 18px; }
          .prism--md { width: 36px; height: 56px; bottom: 64px; right: 72px; }
          .prism--sm { width: 22px; height: 36px; bottom: 124px; right: 40px; }
        }
        @media (max-width: 980px) {
          .about-section { height: auto; flex-direction: column; }
          .about-collage { display: none; }
          .collage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; padding: 16px 16px 0; z-index: 2; position: relative; }
          .collage-grid-img { position: relative; width: 100%; height: 130px; overflow: hidden; }
          .collage-grid-img:first-child { grid-column: 1 / -1; height: 180px; }
          .about-panels { width: 100%; padding: 20px 16px 24px; gap: 16px; }
          .about-panel { padding: 18px 16px; }
          .about-panel p { font-size: 12px; line-height: 1.75; }
          .panel-big-red { font-size: 16px; }
          .panel-big-red-sm { font-size: 14px; }
          .prism-wrap { width: 90px; height: 150px; }
          .prism--lg { width: 44px; height: 72px; bottom: 12px; right: 12px; }
          .prism--md { width: 28px; height: 44px; bottom: 50px; right: 54px; }
          .prism--sm { width: 18px; height: 28px; bottom: 96px; right: 30px; }
        }
      `}</style>

      <section className="about-section">
        <Image src="/images/bg.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }} priority={false} />

        <div className="about-collage">
          <div className="collage-line" />
          <div className="collage-arc" />
          {IMAGES.map((img) => (
            <Image
              key={img.id}
              className="c-img"
              src={img.src}
              alt={img.alt}
              style={{ "--top": `${img.top}px`, "--left": `${img.left}px`, "--width": `${img.width}px`, "--height": `${img.height}px` } as React.CSSProperties}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>

        <div className="collage-grid">
          {IMAGES.map((img) => (
            <div className="collage-grid-img" key={img.id}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="50vw" />
            </div>
          ))}
        </div>

        <div className="about-panels">
          <div className="about-panel">
            <p>At <span className=" panel-big-red">Platinum Realtors,</span> we help buyers, sellers, and investors navigate the real estate market with confidence. Our experienced team is dedicated to providing personalized solutions, market expertise, and exceptional service at every step.
           
          Whether you're searching for your dream home or a <span className="panel-big-red"> valuable investment</span> opportunity, we are committed to making your property journey seamless, transparent, and rewarding.</p>
          </div>
          <div className="about-panel">
            <p>Our commitment to transparency, integrity, and client satisfaction has earned us the trust of homeowners, buyers, sellers, and investors alike. Whether you're looking for your
            <span className="panel-big-red-sm"> dream home, or a commercial space,</span> We strive to deliver exceptional service, valuable insights, and lasting relationships built on trust and professionalism.</p>
          </div>
          <div className="prism-wrap">
            <div className="prism prism--lg" />
            <div className="prism prism--md" />
            <div className="prism prism--sm" />
          </div>
        </div>
      </section>
    </>
  );
}
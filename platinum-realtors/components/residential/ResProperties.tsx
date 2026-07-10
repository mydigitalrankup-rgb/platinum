"use client";
import Image from "next/image";

export default function ResProperties() {
  return (
    <>
      <style>{`
        .com-props { background: #ffffff; padding: 100px 40px 40px; }
        .com-props-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 1400px; margin: 0 auto; border: 2px solid #222; padding: 16px; background: #000; }
        .com-prop-card { background: #090000; overflow: hidden; }
        .com-prop-image-wrapper { position: relative; width: 100%; height: 340px; overflow: hidden; margin-bottom: 20px; background-color: black; }
        .com-prop-image-wrapper:hover .com-prop-img { transform: scale(1.04); }
        .com-prop-img { transition: transform 0.4s ease; }
        .com-prop-label { background: #D7172A; color: #fff; font-size: 14px; font-weight: 700; padding: 10px 20px; text-align: center; letter-spacing: 0.3px; border: none; cursor: pointer; width: 50%; margin-left: 25%; display: block; }
        .com-prop-label:hover { background: #b01222; }
        @media (max-width: 768px) { .com-props { padding: 40px 16px; } .com-props-grid { grid-template-columns: 1fr; padding: 10px; } .com-prop-image-wrapper { height: 260px; } .com-prop-label { font-size: 13px; padding: 8px 16px; } }
      `}</style>

      <div className="com-props">
        <div className="com-props-grid">
          <div className="com-prop-card">
            <div className="com-prop-image-wrapper">
              <Image src="/images/cm2.png" alt="Residential Properties" fill className="com-prop-img" style={{ objectFit: "cover" }} sizes="50vw" />
            </div>
            <button className="com-prop-label">Residential Properties</button>
          </div>
          <div className="com-prop-card">
            <div className="com-prop-image-wrapper">
              <Image src="/images/cm3.png" alt="Commercial Properties" fill className="com-prop-img" style={{ objectFit: "cover" }} sizes="50vw" />
            </div>
            <button className="com-prop-label">Commercial Properties</button>
          </div>
        </div>
      </div>
    </>
  );
}
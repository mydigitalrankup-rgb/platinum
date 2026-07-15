"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResHero() {
  return (
    <>
      <style>{`
        .com-page { background: #111; }
        .com-hero { display: flex; height: 640px; position: relative; }
        .com-hero-left { width: 45%; background: #1a1a1a; display: flex; flex-direction: column; justify-content: flex-end; padding: 100px 7%; z-index: 2; }
        .com-hero-tag { font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.7); margin-bottom: 8px; letter-spacing: 0.5px; }
        .com-hero-title { font-size: 52px; font-weight: 700; color: #fff; line-height: 1.1; margin: 0 0 6px 0; }
        .com-hero-subtitle { font-size: 22px; font-weight: 400; color: rgba(255,255,255,0.85); margin: 0 0 24px 0; }
        .com-hero-desc { backdrop-filter: blur(4px); font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.6; max-width: 280px; border: 1px solid rgba(255,255,255,0.15); padding: 14px 16px; margin-bottom: 28px; }
        .com-hero-btn { display: inline-block; background: #D7172A; color: #fff; font-size: 14px; font-weight: 500; padding: 10px 24px; border-radius: 3px; text-decoration: none; width: fit-content; transition: background 0.2s; }
        .com-hero-btn:hover { background: #b5121f; }
        .com-hero-right { width: 55%; position: relative; top: 0px; height: calc(105%); }
        @media (max-width: 768px) { .com-hero { flex-direction: column; height: auto; } .com-hero-left { width: 100%; padding: 160px 24px 40px; justify-content: flex-start; } .com-hero-right { width: 100%; height: 280px; top: 0; } .com-hero-title { font-size: 36px; } }
      `}</style>

      <div className="com-page">
        <div className="com-hero">
          <div className="com-hero-left">
            <p className="com-hero-tag">Prime</p>
            <h1 className="com-hero-title">Residential</h1>
            <p className="com-hero-subtitle">Properties</p>
            <div className="com-hero-desc">
              Explore a wide range of residential properties. Whether you're a first-time buyer or looking to upgrade, we make finding your ideal home simple and stress-free.
            </div>
            <a href="#Mohali" className="com-hero-btn">Have a look</a>
          </div>
          <div className="com-hero-right">
            <Image src="/images/comhero.jpg" alt="Residential Property" fill style={{ objectFit: "cover" }} sizes="55vw" />
          </div>
        </div>
      </div>
    </>
  );
}
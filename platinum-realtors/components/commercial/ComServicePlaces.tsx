"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "Mohali",
    name: "RGI Grand Carnival",
    description: "Your commercial project description goes here.",
    images: ["/images/com1img1.jpg", "/images/com1img2.jpg", "/images/com1img3.jpg", "/images/com1img4.jpg"],
    theme: "dark",
    bgImage: "/images/com1-bg.png",
  },
  {
    id: 2,
    name: "Homeland Global Park",
    description: "Homeland Global Park is a premier commercial mega-development strategically located on Airport Road in Mohali. This destination blends high-street retail stores, executive office spaces, and upscale serviced residences into a single integrated hub. It creates a vibrant business and lifestyle ecosystem designed to serve corporate professionals and premium shoppers.",
    images: ["/images/com2img1.png", "/images/com2img2.jpg", "/images/com2img3.png", "/images/com2img4.jpg"],
    theme: "light",
    bgImage: null,
  },
  // {
  //   id: 3,
  //   location: "Mohali", // remove this line if you want the "light" theme like project 2
  //   name: "Your New Project Name",
  //   description: "Replace this with the description for your new project.",
  //   images: ["/images/jpeg-optimizer_RSP07397.jpeg", "/images/jpeg-optimizer_RSP07410.jpeg", "/images/com3img3.jpg", "/images/com3img4.jpg"],
  //   theme: "dark", // or "light" if you want it to match project 2's white-card style
  //    bgImage: "/images/com1-bg.png",// set to null if theme is "light"
  // },
];

export default function ComServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));

  const prev = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === 0 ? projects[pi].images.length - 1 : ci - 1) : ci));
  const next = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === projects[pi].images.length - 1 ? 0 : ci + 1) : ci));

  return (
    <>
      <style>{`
        .rp-section { background: #ffffff; padding: 60px 0 20px; }
        .rp-project { width: 90%;  margin: 0 auto 18px; padding: 0 18px; }
        .rp-location { color: #d71920; font-size: 32px; font-weight: 700; margin-bottom: 24px; font-family: Playfair Display; }
        .rp-card { position: relative; height: 500px; overflow: hidden; background-size: cover; background-position: center; background-repeat: no-repeat; }
        .rp-overlay { position: absolute; inset: 0; }
        .rp-card.dark .rp-overlay { background: rgba(0,0,0,.40); }
        .rp-card.red .rp-overlay { background: rgba(0,0,0,.38); }
        .rp-card.light { background: #ffffff; height: auto; min-height: 380px; }
        .rp-card.light .rp-overlay { background: linear-gradient(to right, rgba(255,182,210,0.55) 0%, transparent 18%), linear-gradient(to left, rgba(180,210,255,0.55) 0%, transparent 18%); pointer-events: none; }
        .rp-content { position: relative; z-index: 2; width: 100%; height: 100%; padding: 18px 20px 30px; display: flex; flex-direction: column; align-items: center; }
        .rp-title { color: #fff; font-family: Playfair Display; font-size: 32px; font-weight: 700; margin-top: 6px; margin-bottom: 18px; text-align: center; line-height: 1; }
        .rp-card.light .rp-title { color: #1a1a1a; position: relative; padding-bottom: 10px; }
        .rp-card.light .rp-title::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: #d71920; border-radius: 2px; }
        .rp-description { color: #efefef; width: 94%; margin: 0 auto; text-align: left; font-size: 15px; line-height: 1.35; font-weight: 400; margin-bottom: 42px; }
        .rp-card.light .rp-description { color: #333333; line-height: 1.65; margin-bottom: 32px; }
        .rp-slider { width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .rp-arrow { width: 44px; height: 44px; border: none; background: none; color: #e21828; font-size: 42px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: .25s; user-select: none; }
        .rp-arrow:hover { transform: scale(1.15); }
        .rp-images { width: 90%; display: flex; justify-content: center; gap: 18px; }
        .rp-image-box { position: relative; width: 238px; height: 182px; border-left: 2px solid #df1b27; border-right: 2px solid #df1b27; overflow: hidden; flex-shrink: 0; }
        .rp-image-box img { transition: .35s; }
        .rp-image-box:hover img { transform: scale(1.05); }
        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){ .rp-card{ padding-bottom:30px; } .rp-slider{ flex-direction:column; gap:20px; } .rp-arrow{ font-size:36px; } .rp-images{ width:100%; justify-content:center; gap:14px; } .rp-image-box{ width:46%; height:170px; } .rp-description{ text-align:center; width:100%; } }
        @media(max-width:480px){ .rp-location{ font-size:18px; } .rp-title{ font-size:24px; } .rp-description{ font-size:13px; line-height:1.6; } .rp-image-box{ width:100%; height:220px; } .rp-images{ flex-direction:column; align-items:center; } }
      `}</style>

      <section className="rp-section">
        {projects.map((project, pi) => {
          const start = indices[pi];
          const visibleImages = [0,1,2,3].map(i => project.images[(start + i) % project.images.length]);
          const bgStyle = project.bgImage ? { backgroundImage: `url(${project.bgImage})` } : {};

          return (
            <div className="rp-project" key={project.id}>
              <div className="rp-location">{project.location}</div>
              <div className={`rp-card ${project.theme}`} style={bgStyle}>
                <div className="rp-overlay" />
                <div className="rp-content">
                  <h2 className="rp-title">{project.name}</h2>
                  <p className="rp-description">{project.description}</p>
                  <div className="rp-slider">
                    <button className="rp-arrow" onClick={() => prev(pi)}>&#10094;</button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => (
                        <div className="rp-image-box" key={index}>
                          <Image src={img} alt={`${project.name}-${index}`} fill sizes="300px" style={{ objectFit: "cover" }} />
                        </div>
                      ))}
                    </div>
                    <button className="rp-arrow" onClick={() => next(pi)}>&#10095;</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
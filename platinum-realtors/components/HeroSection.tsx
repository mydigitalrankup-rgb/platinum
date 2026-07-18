import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Poppins:wght@400;500&display=swap');

        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
            font-family:Montserrat;
        }

      
        .hero-inner {
          position: absolute;
          left:50%;
          transform:translate(-50%);
          top:0px;
         
          z-index: 100;
          height: 100%;
          width:70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
         
        }

        .hero-inner h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 87px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          letter-spacing: 0;
         
        }

        .hero-inner p {
          font-family: 'Montserrat';
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
        }
   
        .hero-search-bar {
          position: absolute;
          bottom: 28px;
          left: 5%;
         
          z-index: 10;
          width: 50%;
          max-width: 1100px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }

        .search-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .search-group label {
          font-size: 11px;
          font-weight: 500;
          color: #ffffff;
          padding-left: 2px;
         font-family:Montserrat;
        }

        .search-select-wrap {
          position: relative;
        }

        .search-select-wrap::after {
          content: '▾';
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: white;
          pointer-events: none;
        }

        .search-select-wrap select {
          width: 100%;
          height: 40px;
          padding: 0 30px 0 12px;
          border: 2px solid #D7172A;
          border-radius: 0px;
          font-size: 13px;
         font-family:Montserrat;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.4);
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-select-wrap select:focus {
          outline: 1px solid #D7172A;
        }

        .search-find-btn {
          height: 40px;
          padding: 0 22px;
          background: #D7172A;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
           font-family:Montserrat;
          border-radius: 0px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          align-self: flex-end;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .search-find-btn:hover {
          background: #b5121f;
        }

        @media (max-width: 1024px) {
          .hero-inner h1 { font-size: 60px; }
          .hero-inner { padding-bottom: 180px; }
          .hero-search-bar { gap: 10px; width: 92%; }
        }

        @media (max-width: 767px) {
          .hero { min-height: 640px; height: auto; padding-bottom: 0; }
          .hero-inner { padding: 80px 24px 280px; justify-content: flex-start; padding-top: 100px; }
          .hero-inner h1 { font-size: 42px; line-height: 1.1;}
              
          .hero-inner p { font-size: 14px; }
          .hero-search-bar { bottom: 24px; width: 90%; flex-wrap: wrap; gap: 10px; align-items: flex-end; }
          .search-group { flex: 1 1 calc(50% - 6px); min-width: 0; }
          .search-find-btn { flex: 0 0 100%; width: 100%; height: 44px; font-size: 15px;  padding: 10px 22px; }
        }

        @media (max-width: 599px) {
          .hero { min-height: 580px; }
          .hero-inner { padding: 80px 20px 320px; padding-top: 90px; }
          .hero-inner h1 { font-size: 32px; line-height: 1.15; }
          .hero-inner p { font-size: 13px; }
          .hero-search-bar { bottom: 20px; width: 88%; flex-direction: column; align-items: stretch; gap: 10px; }
          .search-group { flex: none; width: 100%; }
          .search-select-wrap select { min-width: 100%; height: 44px; font-size: 14px; }
          .search-find-btn { width: 100%; height: 46px; font-size: 15px; }
        }

        @media (max-width: 360px) {
          .hero-inner h1 { font-size: 26px; }
          .hero-inner { padding-top: 70px; }
        }


        .hero-video {
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
  margin-top: 0;
}

    `}</style>

      <section className="hero">


        <video
  className="hero-video"
  autoPlay
  loop
  muted
  playsInline
>
  <source
    media="(max-width: 768px)"
    src="/images/platinuum mobile banner v5.mp4"
    type="video/mp4"
  />
  <source
    src="/images/PLAT WEBSITE BANNER v5.mp4"
    type="video/mp4"
  />
</video>
      {/* <video 
  className="hero-video"
  src="/images/PLAT WEBSITE BANNER v5.mp4"
  autoPlay
  loop
  muted
  playsInline
/> */}
        {/* <video
          src="/images/PLAT WEBSITE BANNER v5.mp4"
          alt="Hero Background"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
        /> */}
        {/* <div className="hero-overlay" /> */}
        <div className="hero-inner">
          <h1>
            Elevate Lifestyle<br />
            Luxury Meets Comfort
          </h1>
          <p>Explore a wide range of properties</p>
        </div>
        <div className="hero-search-bar">
          <div className="search-group">
            <label>Location</label>
            <div className="search-select-wrap">
              <select>
                <option>Mohali</option>
                <option>Zirakpur</option>
                <option>Dholera</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label>Property</label>
            <div className="search-select-wrap">
              <select>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label>Price Range</label>
            <div className="search-select-wrap">
              <select>
                <option>Rs 5.9Lac – Rs 1.2 Cr</option>
                <option>Rs 1.2 Cr – Rs 3 Cr</option>
                <option>Rs 3 Cr+</option>
              </select>
            </div>
          </div>
          <button className="search-find-btn">Find Now</button>
        </div>
      </section>
    </>
  );
}
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="image-column">
          <div className="image-outer">
            <div className="image-shape">
              <Image
                src="/images/platinum-owner.jpeg"
                alt="Ravi Sehgal"
                fill
                priority
                className="about-image"
              />
            </div>
            <div className="red-box" />
          </div>
        </div>

        <div className="content-column">
          <h2>About Me</h2>
          <p>
            Welcome to Platinum Realtors – your trusted partner in real estate
            investments and property solutions.
            Founded by Ravi Sehgal, Platinum Realtors is built on a strong foundation of
            professionalism, integrity, and customer-centric service. With over 12 years of
            experience in the banking sector, specializing in Sales and Risk Analysis, Ravi
            brings a unique financial perspective to real estate, helping clients make
            informed and profitable investment decisions.
          </p>
          <p>
            For the past 2 years, Ravi has been actively serving the real estate market
            across Mohali, Zirakpur, and Panchkula, assisting homebuyers, investors, and
            families in finding the right properties that match their goals and aspirations.
            His expertise spans across premium apartments, residential plots, luxury
            villas, and investment-oriented real estate opportunities.
            At Platinum Realtors, we understand that purchasing a property is more than
            just a transaction—it is a significant financial and emotional decision. Our
            approach combines in-depth market knowledge, transparent guidance, and
            personalized consultation to ensure every client receives the best possible
            advice and support throughout their property journey.
          </p>
          <p>
            In addition to our strong presence in the Tricity region, we also offer carefully
            selected plotting opportunities in Dholera, India's first planned Greenfield
            Smart City and one of the country's most promising long-term investment
            destinations. Our clients benefit from access to verified projects with high
            growth potential and comprehensive investment guidance.
          </p>
          <h4>Platinum Realtors – Turning&nbsp; Dreams into Addresses</h4>
        </div>

      </div>

      <style>{`
        .about-section { background: #000; padding: 80px 60px 100px; }
        .about-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: flex-start; gap: 80px; }
        .image-column { flex-shrink: 0; width:50%;}
        .image-outer { position: relative; width: 500px; height: 560px; }
        .image-shape { position: absolute; top: 0; left: 0; width: 320px; height: 520px; border-radius: 160px 160px 0 0; overflow: hidden; z-index: 2; }
        .about-image { object-fit: cover; object-position: top center; }
        .red-box { position: absolute; bottom: 0; border-radius: 160px 160px 0 0; left: 150px; width: 260px; height: 450px; border: 2px solid #c8102e; z-index: 1; }
        .content-column {width:50%; flex: 1; text-align: center; padding-top: 10px; }
        .content-column h2 { font-family: Playfair Display;  font-size: 42px; font-weight: 700; color: #c8102e; margin: 0 0 36px; }
        .content-column p { color: #fff; font-size: 15px; line-height: 1.2; margin: 0 0 28px; font-family: 
Montserrat; font-weight:regular }
        .content-column h4 {  font-family: Playfair Display;  font-size: 16px; font-weight: 600; color: #c8102e; margin: 20px 0 0; }
        @media (max-width: 1024px) and (min-width: 481px) {
          .about-section { padding: 60px 40px 80px; }
          .about-container { flex-direction: column; align-items: center; gap: 48px; }
          .image-outer { width: 420px; height: 500px; }
          .image-shape { width: 280px; height: 460px; border-radius: 140px 140px 0 0; }
          .red-box { left: 130px; width: 230px; height: 400px; border-radius: 140px 140px 0 0; }
          .content-column { width: 100%; padding-top: 0; }
          .content-column h2 { font-size: 36px; margin-bottom: 28px; }
          .content-column p { font-size: 14px; }
          .content-column h4 { font-size: 15px; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 48px 18px 64px; }
          .about-container { flex-direction: column; align-items: center; gap: 36px; }
          .image-outer { width: 280px; height: 400px; }
          .image-shape { width: 210px; height: 360px; border-radius: 105px 105px 0 0; }
          .red-box { left: 90px; width: 175px; height: 310px; border-radius: 105px 105px 0 0; }
          .content-column { width: 100%; padding-top: 0; }
          .content-column h2 { font-size: 28px; margin-bottom: 22px; }
          .content-column p { font-size: 13px; line-height: 1.6; }
          .content-column p br { display: none; }
          .content-column h4 { font-size: 13px; margin-top: 16px; }
        }
      `}</style>
    </section>
  );
}
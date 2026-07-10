import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(/images/footer-bg.png)`,
      }}
    >
      <div className="footer-top-space"></div>
      <div className="footer-content">
        <div className="col col-1">
          <div className="logo-wrapper">
            <Image src="/images/platinum-logo.png" alt="Platinum Logo" width={130} height={65} priority />
          </div>
          <p className="description">
            We're your trusted partner in real estate. With 20 years of experience in Punjab Real Estate, our team of experts is dedicated to providing personalised service and achieving the best possible results.
          </p>
          <div className="social-icons">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
            </svg>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ cursor: "pointer" }}>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>

        <div className="col col-2">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="col col-3">
          <h3>Our Services</h3>
          <ul>
            <li>Residential Properties</li>
            <li>Commercial Properties</li>
          </ul>
        </div>

        <div className="col col-4">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li className="address">Shop No. 8, Bindra Complex,
Jagadhri Gate, Patti Mehar,
Ambala, Haryana 134003</li>
            <li className="contact-item" >
              <span className="contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
                </svg>
              </span>
             platinumrealors569@gmail.com
            </li>
            <li className="contact-item">
              <span className="contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
            +91-9518478179
            </li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Platinum Realtors. All rights reserved.</p>
      </div>

      <style>{`
        .footer {background:rgb(26,48,68); position: relative; width: 100%; min-height: 350px; background-size: cover; background-position: center -120px; background-repeat: no-repeat; padding: 0 80px 40px; box-sizing: border-box; }
        .footer-top-space { height: 310px; }
        .footer-content { display: flex; justify-content: space-between; align-items: flex-start; max-width: 1400px; width: 100%; margin: 0 auto; gap: 20px; }
        .col { display: flex; flex-direction: column; }
        .col-1 { flex: 0 0 240px; }
        .col-2 { flex: 0 0 150px; padding-top: 4px; }
        .col-3 { flex: 0 0 210px; padding-top: 4px; }
        .col-4 { flex: 0 0 260px; padding-top: 4px; display: flex; flex-direction: column; align-items: flex-start; }
        .logo-wrapper { margin-bottom: 18px; }
        .description { color: #ffffff; font-size: 13px; line-height: 1.65; margin: 0 0 18px; max-width: 240px; }
        .social-icons { display: flex; gap: 14px; align-items: center; }
        .social-icons svg { transition: opacity 0.25s ease; }
        .social-icons svg:hover { opacity: 0.65; }
        .col h3 { color: #e53935; font-size: 20px; font-weight: 700; margin: 0 0 22px; letter-spacing: 0.01em; }
        .col ul { list-style: none; padding: 0; margin: 0; }
        .col-2 ul li, .col-3 ul li { color: #ffffff; font-size: 15px; font-weight: 500; line-height: 1.4; margin-bottom: 18px; cursor: pointer; transition: color 0.2s ease; }
        .col-2 ul li:hover, .col-3 ul li:hover { color: #e53935; }
        .contact-list { width: 100%; display: flex; flex-direction: column; }
        .contact-list li { color: #ffffff; font-size: 14px; line-height: 1.55; cursor: default; }
        .address { text-align: left; margin-bottom: 24px; font-size: 14px; font-weight: 500; width: 100%; display: block; }
        .contact-item { text-align:right; display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 14px; width: 100%; padding-left: 0; }
        .contact-icon { display: flex; align-items: center; flex-shrink: 0; }
        .divider { width: 100%; max-width: 1400px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 30px auto 0; }
        .copyright { max-width: 1400px; width: 100%; margin: 18px auto 0; }
        .copyright p { color: rgba(255, 255, 255, 0.6); font-size: 13px; margin: 0; text-align: center; }
        @media (max-width: 1024px) {
          .footer { padding: 0 40px 40px; }
          .footer-top-space { height: 250px; }
          .footer-content { flex-wrap: wrap; gap: 36px; }
          .col-1 { flex: 0 0 100%; }
          .description { max-width: 100%; }
          .col-2, .col-3, .col-4 { flex: 1 1 180px; }
          .col-4 { align-items: flex-start; }
          .address { text-align: left; }
        }
        @media (max-width: 768px) {
          .footer { padding: 0 20px 30px; }
          .footer-top-space { height: 150px; }
          .footer-content { flex-direction: column; gap: 28px; }
          .col-1, .col-2, .col-3, .col-4 { flex: 0 0 100%; }
          .col-4 { align-items: flex-start; }
          .address { text-align: left; }
          .contact-item { padding-left: 0; }
          .description { max-width: 100%; }
        }
      `}</style>
    </footer>
  );
}
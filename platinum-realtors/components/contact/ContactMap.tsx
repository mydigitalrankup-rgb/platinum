export default function ContactMap() {
  return (
    <>
      <style>{`
        .contact-map {
          width: 100%;
          height: 380px;
          background: #e5e7eb;
          margin:20px 0
        }
        .contact-map iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
        @media (max-width: 768px) {
          .contact-map { height: 300px; }
        }
      `}</style>

      <section className="contact-map" aria-label="Office location map">
        <iframe
          title="Platinum Realtors office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.578887654321!2d76.7174883!3d30.7046486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0b9c8c8c8d%3A0x0!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          allowFullScreen
        />
      </section>
    </>
  );
}

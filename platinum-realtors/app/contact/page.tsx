import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <div className="contact-top">
        <Navbar />
        <ContactHero />
        <ContactInfo />
      </div>
      <ContactForm />
      <ContactFAQ />
      <ContactMap />
      <Footer />
    </main>
  );
}
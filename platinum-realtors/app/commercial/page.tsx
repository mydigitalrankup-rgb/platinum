import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommercialHero from "@/components/commercial/CommercialHero";
import ComServicePlaces from "@/components/commercial/ComServicePlaces";

export default function CommercialPage() {
  return (
    <>
      <Navbar />
      <CommercialHero />
      <ComServicePlaces />
      <Footer />
    </>
  );
}
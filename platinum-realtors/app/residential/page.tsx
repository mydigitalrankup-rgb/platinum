import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResHero from "@/components/residential/ResHero";
import ResProperties from "@/components/residential/ResProperties";
import ResServicePlaces from "@/components/residential/ResServicePlaces";

export default function ResidentialPage() {
  return (
    <>
      <Navbar />
      <ResHero />
      <ResProperties />
      <ResServicePlaces/>
      <Footer />
    </>
  );
}
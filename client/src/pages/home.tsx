import Navbar from "@/components/Navbar";
import SimpleHero from "@/components/SimpleHero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <SimpleHero />
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import Farmers from "@/components/Farmers";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll-responsive Header navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow pt-20">
        <Hero />
        <Mission />
        <Process />
        <Farmers />
        <Newsletter />
      </main>

      {/* Footer containing desktop footer and mobile bottom navbar */}
      <Footer />
    </div>
  );
}

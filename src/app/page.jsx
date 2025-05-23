import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return(
      <main className="flex min-h-screen flex-col bg-[#121212]  ">
        <Navbar/>
          <div className="flex-grow">
        <HeroSection />
      </div>
          <Footer/>
      </main>
  )
}

import Certificates from "@/components/certificates";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="relative  flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#151523]  via-black to-[#151523] antialiased md:from-[#000] md:via-[#181828] md:to-[#000]">
      <Nav />
      <Hero />
      {/* <Certificates /> */}
      <Footer />
    </main>
  );
}

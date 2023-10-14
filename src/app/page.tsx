import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/landing-nav";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0f0f19] to-[#0c0c14] md:from-[#000] md:via-[#181828] md:to-[#000]">
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}

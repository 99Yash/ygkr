import Certificates from "@/components/certificates";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="relative  flex min-h-screen flex-col items-center justify-center gap-4">
      <Nav />
      <Hero />
      {/* <Certificates /> */}
      <Footer />
    </main>
  );
}

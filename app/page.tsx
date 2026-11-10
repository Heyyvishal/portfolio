import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <Work />
      <Services />
      <About />
      <Process />
      <Contact />
    </main>
  );
}

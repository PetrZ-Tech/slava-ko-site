import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { WorkSteps } from "@/components/WorkSteps";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <WorkSteps />
        <Projects />
      </main>
    </>
  );
}

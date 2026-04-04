import { Navbar } from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { About } from "../Components/About";
import { Services } from "../Components/Services";
import { Projects } from "../Components/Projects";
import { Testimonials } from "../Components/Testimonials";
import { Contact } from "../Components/Contact";
import Fullstackproject from "../Components/Fullstackproject";
import LoomShowcase from "../Components/LoomShowcase";
import ClientReviews from "../Components/ClientReviews";
import ProjectDeepDive from "../Components/ProjectDeepDive";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Fullstackproject />
      <ProjectDeepDive />
      <LoomShowcase />
      <Testimonials />
      <ClientReviews />
      <Contact />
    </>
  );
}
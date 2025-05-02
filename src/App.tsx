import Hero from "./components/layout/Hero";
import Promos from "./components/layout/Promos";
import Contact from "./components/layout/Contact";
import Feedback from "./components/layout/Feedback";
import Sponsors from "./components/layout/Sponsors";
import ScrollReveal from "./components/ui/ScrollReveal";

function App() {
  return (
    <>
      <Hero />
      <Promos />
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal>
        <Feedback />
      </ScrollReveal>
      <ScrollReveal>
        <Sponsors />
      </ScrollReveal>
    </>
  );
}

export default App;

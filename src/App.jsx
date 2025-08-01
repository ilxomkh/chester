import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutUs from "./components/AboutUs";
import Outsource from "./components/Outsource";
import PartnerSection from "./components/PartnerSection";
import ClientsSay from "./components/ClientsSay";
import Answers from "./components/Answers";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <MainSection scrollToSection={scrollToSection} />
      <AboutUs scrollToSection={scrollToSection} />
      <Outsource scrollToSection={scrollToSection} />
      <PartnerSection />
      <ClientsSay />
      <Answers scrollToSection={scrollToSection} />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
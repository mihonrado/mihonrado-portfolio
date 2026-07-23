import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import JourneySection from './components/JourneySection/JourneySection';
import CertificationsSection from './components/CertificationsSection/CertificationsSection';
import FAQSection from './components/FAQSection/FAQSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <JourneySection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

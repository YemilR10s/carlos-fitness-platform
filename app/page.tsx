import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import NutritionSection from "./components/nutrition-section";
import PlansSection from "./components/plans-section";
import ScheduleSection from "./components/schedule-section";
import StickyBanner from "./components/sticky-banner";
import TestimonialsSection from "./components/testimonials-section";


export default function Home() {
  return (
    <>
    <StickyBanner/>
    <Header/>
    <HeroSection/>
    <PlansSection/>
    <ScheduleSection/>
    <TestimonialsSection/>
    <NutritionSection/>
    <ContactSection/>
    <Footer/>
    
    </>
  );
}

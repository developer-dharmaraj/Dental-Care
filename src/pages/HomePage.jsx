import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import OurWork from "../components/OurWork"
import Footer from "../components/layouts/Footer";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Services />
            <OurWork />
            <Footer />
        </div>
    )
}

export default HomePage;
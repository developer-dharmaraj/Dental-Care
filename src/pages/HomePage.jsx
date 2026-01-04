import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Footer from "../components/layouts/Footer";

const HomePage = () => {
    return (
        <div>
            <section id="home">
                <HeroSection />
            </section>

            <section id="about" className="scroll-mt-15">
                <AboutSection />
            </section>

            <section id="services" className="scroll-mt-15">
                <Services />
            </section>

            <section id="product" className="scroll-mt-15">
                <OurWork />
            </section>

            <section id="appointment" className="scroll-mt-15">
                <Footer />
            </section>
        </div>
    );
};

export default HomePage;

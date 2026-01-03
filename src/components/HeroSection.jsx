import { heroData } from "../config/HeroData";
import Navbar from "./layouts/Navbar";

const HeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 mt-2">
            {heroData.map((hero) => (
                <div key={hero.id} className="relative pb-20 rounded-b-3xl overflow-hidden">
                    <div className="absolute w-full top-3 z-50"><Navbar /></div>
                    <img src={hero.backgroundImage} alt="Dental Care" className="absolute inset-0 w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${hero.overlay}`} />
                    <div className="relative flex items-center z-10 h-full mt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-white">
                        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-24 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-40">
                            <h1 className="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                {hero.title.line1} <br /> {hero.title.line2}
                            </h1>
                            <p className="mt-4 text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">{hero.description}</p>
                            <a href={hero.button.link}>
                                <button className="mt-6 bg-white text-black rounded-full font-medium px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95">
                                    {hero.button.text}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroSection;
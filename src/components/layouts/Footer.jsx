import { footerConfig } from "../../config/footerConfig";

const Footer = () => {
    return (
        <footer className="mx-4 mt-15 mb-2">
            <div className="relative max-w-7xl mx-auto bg-black text-gray-400 overflow-hidden rounded-xl min-h-[420px]">
                <h1 className="absolute bottom-[-30px] left-5 text-[180px] font-bold text-white/10 select-none leading-none">
                    {footerConfig.backgroundText}
                </h1>
                <div className="relative z-10 px-4 pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-6 whitespace-pre-line">{footerConfig.newsletter.title}</h2>
                        <div className="flex justify-around items-center border-b border-gray-600 pb-2 max-w-xs">
                            <input type="email" placeholder={footerConfig.newsletter.placeholder}
                                className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500 flex-1"
                            />
                            <span className="text-white text-lg cursor-pointer hover:translate-x-1 transition">
                                {footerConfig.newsletter.actionIcon}
                            </span>
                        </div>
                    </div>

                    {footerConfig.sections.map((section) => (
                        <div key={section.id}>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link, index) => (
                                    <li key={index} className="hover:text-white cursor-pointer transition-colors">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
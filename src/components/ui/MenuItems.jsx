import { useState } from "react";

const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Product", id: "product" },
    { label: "Services", id: "services" },
    { label: "Appointment", id: "appointment" },
];

const MenuItems = () => {
    const [activeItem, setActiveItem] = useState("home");
    const handleScroll = (id) => {
        setActiveItem(id);
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-white/30 backdrop-blur-xl max-w-7xl mx-auto rounded-full px-1.5 py-1.5 hidden md:flex justify-between items-center gap-4 border border-white/20">
            {navItems.map((item) => (
                <div key={item.id} onClick={() => handleScroll(item.id)}
                    className={`cursor-pointer flex items-center text-sm rounded-full px-4 py-2 transition
                        ${activeItem === item.id
                            ? "bg-gray-50 text-gray-900"
                            : "text-white hover:bg-white/40"}`}>
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export default MenuItems;
import { useState } from "react";

const MenuItems = () => {
    const navItem = ["Home", "About", "Product", "Services", "Appointment"]
    const [activeItem, setActiveItem] = useState("Home")
    return (
        <>
            <div className="bg-white/30 backdrop-blur-xl max-w-7xl mx-auto rounded-full px-1.5 py-1.5 hidden md:flex justify-between  items-center gap-4 border border-white/20">
                {navItem.map((item) => (
                    <div key={item} onClick={() => setActiveItem(item)} className={`cursor-pointer flex items-center text-sm rounded-full px-4 py-2 ${activeItem === item ? "bg-gray-50 text-gray-900" : "text-white hover:bg-white/40"}`}>{item}</div>
                ))}
            </div>
        </>
    )
}

export default MenuItems;
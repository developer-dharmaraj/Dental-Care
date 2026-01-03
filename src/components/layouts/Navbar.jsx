import BrandLogo from "../ui/BrandLogo"
import Call from "../ui/Call"
import MenuItems from "../ui/MenuItems"

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center px-4 py-2">
                <BrandLogo />
                <MenuItems />
                <Call />
            </nav>
        </header>
    )
}

export default Navbar
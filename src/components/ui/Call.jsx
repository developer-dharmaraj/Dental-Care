import { Phone } from "lucide-react"

const Call = () => {
    return (
        <div className="flex justify-between items-center gap-2 md:px-6 md:py-3 px-4 py-2 rounded-full md:text-[15px] text-sm font-medium text-gray-900 bg-white">
            <Phone size={18}/>
            <span>Call Now</span>
        </div>
    )
}

export default Call
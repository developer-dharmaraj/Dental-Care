
const servicesSectionData = {
    heading: "Services We Provide Are Listed Below",
    description:
        "The blocks & components you need to build a professional website are based drivers.",
    buttonText: "Book Appointment →",

    services: [
        {
            title: "Cavity Protection",
            desc:
                "As we move into this new era of technology, we tend to look at the future with confidence and pride.",
            icon: "🦷",
            bg: "bg-[#dcead0]",
        },
        {
            title: "Root Canal Treatment",
            desc:
                "In the new era of technology we look in the future with certainty and pride.",
            icon: "🪥",
            bg: "bg-[#eadbff]",
        },
        {
            title: "Oral Surgery",
            desc:
                "In the new era of technology we look in the future with certainty and pride.",
            icon: "🦷",
            bg: "bg-[#cdeaff]",
        },
        {
            title: "Dental Implants",
            desc:
                "Advanced implant solutions designed for comfort, durability and natural appearance.",
            icon: "🦷",
            bg: "bg-[#cdeaff]",
        },
    ],

    video: {
        thumbnail: "/about1.jpg",
        alt: "Dental Care Video",
        playIcon: "▶",
    },

    infoBox: {
        title: "Advanced & Gentle Dental Care",
        description:
            "We provide modern dental treatments using advanced technology, ensuring painless procedures, long-term care and confident smiles for every patient.",

        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "5k+", label: "Happy Patients" },
            { value: "100%", label: "Care & Hygiene" },
        ],
    },
};

const Services = () => {
    const {
        heading,
        description,
        buttonText,
        services,
        video,
        infoBox,
    } = servicesSectionData;

    return (
        <div className="mt-15">
            <div className="bg-white rounded-3xl mx-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-14">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-lg leading-tight">
                            {heading}
                        </h2>

                        <div className="text-sm text-gray-600 max-w-sm">
                            <p>{description}</p>
                            <button className="mt-4 inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition">
                                {buttonText}
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((item, index) => (
                                <div key={index} className={`relative ${item.bg} rounded-3xl p-6 min-h-[240px]`}>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {item.desc}
                                    </p>
                                    <a className="absolute bottom-6 left-6 text-sm font-medium flex items-center gap-2 cursor-pointer">
                                        Read More →
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-2">
                            <div className="relative rounded-[32px] overflow-hidden aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                                <img src={video.thumbnail} alt={video.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                    <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer">
                                        {video.playIcon}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-[#faf7f2] rounded-3xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {infoBox.title}
                                </h3>
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    {infoBox.description}
                                </p>
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    {infoBox.stats.map((stat, index) => (
                                        <div key={index}>
                                            <h4 className="text-xl font-semibold text-gray-900">
                                                {stat.value}
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
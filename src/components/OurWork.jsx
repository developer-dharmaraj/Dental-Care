
const servicesSectionData = {
    tag: "( our works )",
    heading: "Services We Provide Are Listed Below",
    description: "Our team of skilled and experienced dental professionals strives to create a comfortable and welcoming environment for each patient.",
    cta: { text: "Book Appointment →", link: "#", },
    members: { text: "10k+ happy member", avatars: ["/user1.jpg", "/user2.jpg", "/user3.jpg"], },
    services: [
        {
            title: "Teeth Straightening",
            subtitle: "Improve your smile with cleaning.",
            image: "/about.jpg",
        },
        {
            title: "Dental Implant",
            subtitle: "Improve your smile with cleaning.",
            image: "/about.jpg",
        },
    ],
};


const OurWork = () => {
    const { tag, heading, description, cta, members, services } =
        servicesSectionData;

    return (
        <div className="mx-4">
            <section className="bg-[#dfead1] max-w-7xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-14 mt-15">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-1">
                        <span className="text-xs text-gray-600 uppercase tracking-wide">{tag}</span>
                        <p className="mt-6 text-sm text-gray-700 leading-relaxed">{description}</p>
                        <a href={cta.link} className="inline-block mt-6 bg-black text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition">{cta.text}</a>
                        <div className="flex items-center gap-3 mt-8">
                            <div className="flex -space-x-2">
                                {members.avatars.map((avatar, index) => (
                                    <img key={index} src={avatar} alt="member" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                ))}
                            </div>
                            <p className="text-xs text-gray-700">{members.text}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-lg mb-8">{heading}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index}>
                                    <div className="rounded-2xl overflow-hidden">
                                        <img src={service.image} alt={service.title} className="w-full h-[200px] sm:h-[240px] object-cover" />
                                    </div>
                                    <h3 className="mt-4 text-sm font-semibold text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-600">
                                        {service.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurWork;

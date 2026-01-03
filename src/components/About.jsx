const About = () => {
    return (
        <div className="mt-15">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <span className="text-sm uppercase tracking-widest text-orange-500 font-medium">About Us</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                            A Simple Way to Save <br className="hidden sm:block" />
                            on Dental Care
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Our experienced dental professionals are dedicated to providing
                            high-quality care in a comfortable and welcoming environment.
                            Your smile is our top priority.
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start gap-10">
                            <div>
                                <h3 className="text-3xl font-semibold text-gray-900">98%</h3>
                                <p className="text-xs text-gray-600">
                                    Client Satisfaction
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold text-gray-900">10+</h3>
                                <p className="text-xs text-gray-600">
                                    Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative ">
                            <img src="/about.jpg" alt="Dental Care" className="w-[260px] sm:w-[300px] h-[380px] object-cover rounded-3xl border-4 border-[#faf7f2]" />
                            <img src="/about1.jpg" alt="Dental Checkup" className="absolute -bottom-8 -left-12 w-[180px] h-[200px] object-cover rounded-3xl border-4 border-[#faf7f2]" />
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <img src="/about2.jpg" alt="Dental Treatment" className="w-full max-w-4xl h-[200px] md:h-[240px] object-cover rounded-3xl border-4 border-[#faf7f2]" />
                </div>
            </div>
        </div>
    )
}

export default About;
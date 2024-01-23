
const Hero = () => {
    return (
        <section className="h-full text-white relative z-50">
            <div className="flex justify-center items-center h-full p-4">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 lg:pr-36">
                        <h1 data-aos="fade-up" className="font-bold uppercase text-5xl">Orbite The Earth</h1>

                        <p data-aos="fade-up" data-aos-delay="300" className="font-medium text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero. Placeat quas eum libero voluptates. Repellat sapiente, tempora vero laudantium architecto placeat natus veritatis. Voluptatum doloribus facere dolorem non recusandae.</p>

                        <button data-aos="fade-up" data-aos-delay="500" className="bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 transition-all duration-200">Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="assets/moon-surface-hd.png"
                    alt="moonSurface"
                    className="absolute bottom-0 left-0 brightness-50 z-10 w-full h-[130px] lg:h-[190px]"
                />
            </div>

            <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent from-10% to-black to-90% w-full h-[20px] sm:h-[50px] md:h-[60px] z-30"></div>
        </section>
    )
}

export default Hero;
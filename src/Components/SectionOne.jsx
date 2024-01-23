
const SectionOne = () => {
  return (
    <section className="bg-black relative z-50 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src="assets/satelite1.jpg"
            alt="satelite1"
            className="max-h-[350px] w-[80%] mx-auto"
            data-aos="zoom-in"
          />

          <div className="flex flex-col justify-center items-start space-y-3 border-b-2 border-r-2 border-sky-700 p-4">
            <p data-aos="fade-up" className="text-sky-800 uppercase text-xl font-thin">Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-white text-5xl uppercase">Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-slate-200 text-xl w-full max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.
            </p>
            <button data-aos="fade-up" data-aos-delay="600" className="text-white bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-500 transition-all duration-200">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne;
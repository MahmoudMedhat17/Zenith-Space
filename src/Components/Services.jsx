import { FaSpaceAwesome } from "react-icons/fa6";
import { FaReact, FaSpaceShuttle } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      icon: <FaReact className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]" />,
      title: "HST",
      speed: "300 - 1500 km",
      desrciption:
        "Used for astronomical observations, capturing stunning images of the universe.",
    },
    {
      icon: (
        <FaSpaceShuttle className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]" />
      ),
      title: "ISS",
      speed: "500 - 1500 km",
      desrciption:
        "it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    },
    {
      icon: (
        <FaSpaceAwesome className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]" />
      ),
      title: "GPS",
      speed: "300 - 1500 km",
      desrciption:
        "Part of the Global Positioning System (GPS) used for navigation.",
    },
  ];

  return (
    <section className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {serviceData.map((service, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-sky-900/40 backdrop-blur-md flex flex-col justify-center items-center text-center space-y-3 py-8 px-3 w-full lg:w-[300px] mx-auto rounded-md min-h-[190px]"
              >
                {service.icon}
                <h1 className="text-3xl">{service.title}</h1>
                <p className="text-2xl">{service.speed}</p>
                <p>{service.desrciption}</p>
              </div>
            ))}
          </div>
          <img
            src="assets/wave Gif.gif"
            alt="waveGif"
            className="w-full h-[200px] mix-blend-screen object-cover -translate-y-24 relative z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

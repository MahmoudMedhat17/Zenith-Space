import { useState } from "react";
import { FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";



const Navbar = () => {

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <nav data-aos="fade-down" className="fixed top-0 right-0 w-full bg-black/30 backdrop-blur-md py-4 z-[999] text-white">
      <div className="container">
        <div className="flex justify-between items-center">

          {/* Nav Logo */}
          <div className="flex items-center gap-4 font-bold text-2xl">
            <img
              src="assets/space.png"
              alt="logo"
              className="w-10"
            />
            <p className="max-md:hidden">ZENITH SPACE</p>

            <p className="md:hidden text-xl">ZS</p>
          </div>

          {/* Nav contents */}
          <div className="max-md:hidden">
            <ul className="flex gap-5">
              <li className="font-medium text-[19px] hover:text-blue-300 transition-all duration-200"><a href="#">About</a></li>
              <li className="font-medium text-[19px] hover:text-blue-300 transition-all duration-200"><a href="#">Technology</a></li>
              <li className="font-medium text-[19px] hover:text-blue-300 transition-all duration-200"><a href="#">Galaxy</a></li>
              <li className="font-medium text-[19px] hover:text-blue-300 transition-all duration-200"><a href="#">Satelite</a></li>
            </ul>
          </div>

          {/* Nav login btn */}
          <div>
            <button className="border-2 border-white py-1 px-3 rounded-md hover:border-blue-300 hover:transition-all hover:duration-200 max-md:hidden">Login</button>
          </div>

          {/* Nav for mobile design */}
          <button className="md:hidden" onClick={handleClick}>
            {
              !active ? <FaBars size={20} className="text-blue-300" /> : <FaTimes size={20} className="text-blue-300" />
            }
          </button>
        </div>

        <div className={`md:hidden ${active ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center gap-5">
            <li className="font-medium text-[18px] mt-10"><a href="#">About</a></li>
            <li className="font-medium text-[18px] mt-10"><a href="#">Technology</a></li>
            <li className="font-medium text-[18px] mt-10"><a href="#">Galaxy</a></li>
            <li className="font-medium text-[18px] mt-10"><a href="#">Satelite</a></li>
          </ul>

          <div className="flex justify-center gap-3 pt-10">
            <a href="https://www.instagram.com/"><FaInstagram className="w-[30px] h-[30px] " /></a>
            <a href="https://www.facebook.com/"><FaFacebook className="w-[30px] h-[30px]" /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin className="w-[30px] h-[30px]" /></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
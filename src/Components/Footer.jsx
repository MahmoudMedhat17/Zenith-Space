import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const time = new Date();
    const copyRightTime = time.getFullYear();

    return (
        <section className="bg-gray-800 relative z-50 px-5 text-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
                    <div className="space-y-4">
                        <h1 className="font-bold text-3xl">Be Ready To Grow</h1>
                        <p className="font-medium">Get Exclusive <span className="font-bold">Update</span>straigt to your inbox.</p>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 w-[80%] max-sm:w-[80%] max-lg:w-[50%] bg-transparent border-2 gap-2 outline-none focus:border-blue-400"
                            />
                            <button className="bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-500 transition-all duration-200">Ok</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-5 max-md:gap-10 md:pl-10">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Links</h1>
                            <ul className="flex flex-col gap-4 font-medium">
                                <li><a href="#" className="hover:cursor-pointer hover:text-blue-300 hover:transition-all hover:duration-200">Home</a></li>
                                <li><a href="#" className="hover:cursor-pointer hover:text-blue-300 hover:transition-all hover:duration-200">About</a></li>
                                <li><a href="#" className="hover:cursor-pointer hover:text-blue-300 hover:transition-all hover:duration-200">Services</a></li>
                                <li><a href="#" className="hover:cursor-pointer hover:text-blue-300 hover:transition-all hover:duration-200">Login</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Links</h1>
                            <ul className="flex flex-col gap-4 font-medium">
                                <li><a href="#" className="hover:text-blue-300 hover:transition-all hover:duration-200 hover:cursor-pointer">Home</a></li>
                                <li><a href="#" className="hover:text-blue-300 hover:transition-all hover:duration-200 hover:cursor-pointer">About</a></li>
                                <li><a href="#" className="hover:text-blue-300 hover:transition-all hover:duration-200 hover:cursor-pointer">Services</a></li>
                                <li><a href="#" className="hover:text-blue-300 hover:transition-all hover:duration-200 hover:cursor-pointer">Login</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Contact Us</h1>
                            <div className="flex gap-2 items-center font-medium max-md:font-normal">
                                <FaLocationDot />
                                <p>Giza, Egypt</p>
                            </div>
                            <div className="flex gap-2 items-center font-medium max-md:font-normal">
                                <MdEmail />
                                <p>m7moooud.17@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center font-medium max-md:font-normal">
                                <FaPhoneFlip />
                                <p>+20 1012107269</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-gray-400 flex justify-between items-center py-6 max-md:hidden">
                    <div>
                        <p className="text-gray-400">copyright © {copyRightTime} by ZS</p>
                    </div>

                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/"><FaInstagram className="w-[40px] h-[40px] hover:cursor-pointer hover:text-[#C13584] hover:transition-all hover:duration-200" /></a>
                        <a href="https://www.facebook.com/"><FaFacebook className="w-[40px] h-[40px] hover:cursor-pointer hover:text-[#4267B2] hover:transition-all hover:duration-200" /></a>
                        <a href="https://www.linkedin.com/"><FaLinkedin className="w-[40px] h-[40px] hover:cursor-pointer hover:text-[#0077b5] hover:transition-all hover:duration-200" /></a>
                    </div>

                    <div className="flex gap-3 text-gray-400">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
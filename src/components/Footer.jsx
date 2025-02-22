import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks,SiCodechef } from "react-icons/si";  // ✅ Add this import


const Footer = ({ isVisible }) => {
  return (
    <footer
      className={`w-full py-6 px-6 bg-white/10 backdrop-blur-md text-white flex flex-col sm:flex-row justify-between items-center rounded-lg mt-10 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Left Side: Copyright and Creator Info */}
      <div className="text-center sm:text-left text-sm sm:text-base">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <p>Created by <span className="font-bold">Venkat Kotha</span></p>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="flex gap-4 text-xl mt-4 sm:mt-0">
      <a href="https://github.com/venkat20051" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/venkat-kotha-bb59b6267/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/sapio26I2/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <SiLeetcode />
          </a>
          <a href="https://www.geeksforgeeks.org/user/venkat83414/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <SiGeeksforgeeks />
          </a>
          <a href="https://www.codechef.com/users/venkat_83414" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <SiCodechef />
          </a>
      </div>
    </footer>
  );
};

export default Footer;

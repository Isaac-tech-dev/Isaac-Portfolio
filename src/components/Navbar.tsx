import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
//import Resume from "../assets/Isaac Resume.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300`}
    >
      {/* Initials */}
      <div className={`text-pink-600`}>IA</div>

      {/* Menu */}
      <ul className={`hidden md:flex`}>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className={`md:hidden z-10`} onClick={handleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? `hidden`
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center`
        }
      >
        <li className={`py-6 text-4xl`}>
          <Link onClick={handleNav} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={`py-6 text-4xl`}>
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className={`py-6 text-4xl`}>
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={`py-6 text-4xl`}>
          <Link onClick={handleNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className={`py-6 text-4xl`}>
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className={`lg:flex flex-col fixed top-[35%] left-0 hidden`}>
        <ul>
          <li
            className={`w-[160px] h-[60px] flex flex-row  justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600`}
          >
            <a
              className={`flex justify-between items-center w-full text-gray-300`}
              href="https://www.linkedin.com/in/isaac-ayeni/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className={`w-[160px] h-[60px] flex flex-row  justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]`}
          >
            <a
              className={`flex justify-between items-center w-full text-gray-300`}
              href="https://github.com/Isaac-tech-dev?tab=repositories"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li
            className={`w-[160px] h-[60px] flex flex-row  justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]`}
          >
            <a
              className={`flex justify-between items-center w-full text-gray-300`}
              href="mailto:ayeniisaac1on1@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className={`w-[160px] h-[60px] flex flex-row  justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600`}
          >
            <a
              className={`flex justify-between items-center w-full text-gray-300`}
              href="https://drive.google.com/file/d/18Nvqyj9YqpZ-uWnB6kOuD0sCnJnz25l3/view?usp=drive_link"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

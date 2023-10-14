import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../resume/resume.pdf";
import Modal from "./Modal";
import Contacts from "./Contacts";
import { Link } from "react-scroll";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleHamburger() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className="relative z-20 flex h-20 w-full items-center justify-between  px-4 text-gray-300">
      <div>
        <img
          className="text-yellow-400 brightness-125"
          style={{ width: "100px", filter: "grayscale(100) invert(1)" }}
          src={"./assets/newlogo.png"}
        />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-yellow-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          {" "}
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <Modal>
          <Modal.Open opens="contacts">
            <li className="hover:text-yellow-400">Contacts</li>
          </Modal.Open>
          <Modal.Window name="contacts" type="contacts">
            <Contacts />
          </Modal.Window>
        </Modal>
      </ul>

      {/* Hamburger */}
      <div onClick={handleHamburger} className="z-10 cursor-pointer md:hidden">
        {!isNavOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`absolute left-0 top-0 flex ${
          !isNavOpen && "hidden"
        } h-screen w-full flex-col items-center justify-center bg-slate-900`}
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleHamburger}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleHamburger}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleHamburger}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <Modal>
          <Modal.Open opens="contacts">
            <li className="py-6 text-4xl">
              <span onClick={handleHamburger}>Contacts</span>
            </li>
          </Modal.Open>
          <Modal.Window name="contacts" type="contacts">
            <Contacts />
          </Modal.Window>
        </Modal>
      </ul>

      {/* Social Icons */}
      <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-blue-500 transition-all duration-300 hover:ml-[-10px] ">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href="www.linkedin.com/in/victor-rait-36b5b2254"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-gray-700 transition-all duration-300 hover:ml-[-10px] ">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href="https://github.com/VictorRait"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Modal>
            <Modal.Open opens="contacts">
              <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-emerald-500 transition-all duration-300 hover:ml-[-10px] ">
                <span
                  className="flex w-full items-center justify-between text-gray-200"
                  href=""
                >
                  Email <HiOutlineMail size={30} />
                </span>
              </li>
            </Modal.Open>
            <Modal.Window name="contacts" type="contacts">
              <Contacts />
            </Modal.Window>
          </Modal>

          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-gray-600 transition-all duration-300 hover:ml-[-10px] ">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

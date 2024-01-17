import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </Link>
        </div>
        <nav className="flex gap-5 font-medium p-1 cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500} className="hover: text-green transition-all">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover: text-green transition-all">
            About
          </Link>
          <Link to="courses" spy={true} smooth={true} duration={500} className="hover: text-green transition-all">
            Courses
          </Link>
          <Link to="Reviews" spy={true} smooth={true} duration={500} className="hover: text-green transition-all">
            reviews
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="hover: text-green transition-all">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

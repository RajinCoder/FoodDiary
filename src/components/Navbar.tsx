import React from "react";
import MenuBtn from "./MenuBtn";
import Heading from "./Heading";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  onClick: () => void;
  status: string;
}

const Navbar = ({ onClick, status }: Props) => {
  return (
    <div className="navBox sticky-top">
      <nav id="navBar" className="navbar sticky-top" data-bs-theme="dark">
        <MenuBtn onClick={onClick} />
        <Heading />
      </nav>

      <nav className={`navMenu ${status}`}>
        <Link className="linkBtn" to="#aboutDesc">
          <button onClick={onClick} type="button" className="navBtn">
            About
          </button>
        </Link>
        <Link className="linkBtn" to="#entryBox1">
          <button onClick={onClick} className="navBtn">
            White Rice
          </button>
        </Link>
        <Link className="linkBtn" to="#entryBox2">
          <button onClick={onClick} className="navBtn">
            Epis
          </button>
        </Link>
        <Link className="linkBtn" to="#entryBox3">
          <button onClick={onClick} className="navBtn">
            Black Rice
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

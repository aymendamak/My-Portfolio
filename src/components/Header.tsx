import { useState } from "react";

import NavBar from "./NavBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex 
    items-center z-40 bg-gradient-to-b 
    from-zinc-900-to-zinc-900/0"
    >
      <div
        className="max-w-screen-2 pl-0 pr-0 w-full mx-auto px-4 
      flex justify-between items-center md:px-6 md-grid-cols-[1fr, 3fr, 1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img
              src="./images/FWD-logo-removedbg.png"
              width={90}
              height={90}
              alt="DAMAK Aymen"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <NavBar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justity-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;

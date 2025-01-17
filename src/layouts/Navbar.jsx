import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import Wrapper from "../components/Wrapper";
import { navOptions } from "../static-data";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import MenuDropDown from "../components/MenuDropDown";
import "../layouts/Navbar.css"; // Import the CSS file

const Navbar = ({ theme }) => {
  const [showMobNavbar, setShowMobNavbar] = useState(false);
  return (
    <div>
      <div className={theme ? theme : ""}>
        <Wrapper className="hidden lg:block">
          <div className={theme ? "nav-color" : "text-color-white"}>
            <ul className="flex justify-between items-center">
              <Link to="/">
                <li className="bg-white px-2 py-3">
                  <img src={logo} alt="connect-logo" className="w-[5rem]" />
                </li>
              </Link>
              <ul className="flex items-center gap-12 whitespace-nowrap">
                {navOptions.map((option, index) => {
                  if (option.dropdown === true) {
                    return (
                      <MenuDropDown
                        key={index}
                        title={option.option}
                        secondaryTitle={option.secondaryTitle}
                      />
                    );
                  }
                  return (
                    <Link to={option.link} key={index}>
                      <li className="nav-item uppercase font-medium">
                        {option.option}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </ul>
          </div>
        </Wrapper>
        <Wrapper className="lg:hidden block py-6">
          <div className="flex items-center justify-between">
            <div className="bg-white px-2 py-3">
              <Link to="/">
                <img src={logo} alt="connect-logo" className="w-[5rem]" />
              </Link>
            </div>
            <div
              className={`text-3xl ${
                showMobNavbar && "z-[999999] text-color-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setShowMobNavbar((prevState) => !prevState)}
              >
                {!showMobNavbar ? <FaBars /> : <RxCross2 />}
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
      {showMobNavbar && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-color z-50 opacity-95 text-color-white">
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] text-center">
            <ul className="text-2xl">
              {navOptions.map((option, index) => {
                if (option.dropdown === true) {
                  return (
                    <MenuDropDown
                      key={index}
                      title={option.option}
                      secondaryTitle={option.secondaryTitle}
                    />
                  );
                }
                return (
                  <Link to={option.link} key={index}>
                    <li className="nav-item uppercase font-medium py-3">
                      {option.option}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
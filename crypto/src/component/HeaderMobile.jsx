import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="md:hidden flex items-center justify-around py-3 bg-[#ffe13a] z-1">
        <div className="flex items-center justify-center">
        <h1 className="px-3 py-2 text-2xl font-bold bg-gray-900 rounded-l-full rounded-br-full text-[gold]">$TGEOC</h1>
        </div>

        <button onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <FaBars />}
        </button>
      </header>
      <hr className="flex border-t-2 border-gray-100 md:hidden " />

      {/* menu open */}
      {isMenuOpen ? (
        <div className="h-screen fixed top-0 right-0 w-full sm:w-1/2 bg-[#ffe13a] border-l-gray-200 border-l-2 z-20">
          <div className="flex items-center justify-around py-3 md:hidden z-1">
            <div className="flex items-center justify-center">
            <h1 className="px-3 py-2 text-2xl font-bold bg-gray-900 rounded-l-full rounded-br-full text-[gold]">$TGEOC</h1>
            </div>

            <button onClick={toggleMenu}>
              {isMenuOpen ? <IoClose /> : <FaBars />}
            </button>
          </div>
          
      <hr className="flex border-t-2 border-gray-100 md:hidden " />
          <nav>
            <ul className="flex flex-col items-center gap-16 mt-8 text-xl font-semibold font-bold text-gray-900 no-underline list-none"> 
              <li onClick={toggleMenu}
                id="home"
                className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
              >
                <a href="#home">Home</a>
              </li>
              <li onClick={toggleMenu} 
                id="about"
                className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
              >
                <a href="#about">About</a>
              </li>
              <li onClick={toggleMenu}
                id="contact"
                className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
              >
                <a href="https://x.com/TGEOConSolana" target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default HeaderMobile;

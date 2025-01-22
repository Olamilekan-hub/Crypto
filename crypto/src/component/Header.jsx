const Header = () => {
  return (
    <>
      <header className="hidden md:flex items-center justify-around py-3 bg-[#ffe13a] z-1">
        <div className="flex items-center justify-center">
          <h1 className="px-3 py-2 text-2xl font-bold bg-gray-900 rounded-l-full rounded-br-full text-[gold]">$TGEOC</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-16 text-xl font-semibold font-bold text-gray-900 no-underline list-none">
            <li
              id="home"
              className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
            >
              <a href="#home">Home</a>
            </li>
            <li
              id="about"
              className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
            >
              <a href="#about">About</a>
            </li>
            <li
              id="contact"
              className="hover:bg-gray-900 hover:py-1.5 hover:px-3 hover:rounded-full hover:text-gray-200"
            >
              <a href="https://x.com/TGEOConSolana">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <hr className="hidden border-t-2 border-gray-100 md:flex" />
    </>
  );
};
export default Header;

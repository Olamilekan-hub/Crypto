import { LuWallet } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const year = new Date().getFullYear();


  return (
    <footer className="bottom-0 left-0 w-screen pb-6 bg-[#1f1f1f]">
      <hr className="border-t-2 border-gray-400" />
      <section className="flex items-center justify-between w-screen px-16 mt-3">
        <div className="flex">
          <span>&copy; {year}</span>
        </div>
        <div className="flex">
          <span>All Rights Reserved by Zachwifhat</span>
        </div>
        <div className="flex items-center gap-4 justiify-center">
        <LuWallet className="w-4 h-4" />
          <FaXTwitter className="w-4 h-4" />
        </div>
      </section>
    </footer>
  )
}
export default Footer
import { useState } from "react";

const WelcomePopup = ({ coin }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[gold] bg-opacity-30 z-10">
          <div className="bg-[gold] rounded-lg  h-[15rem] w-[20rem] shadow-lg flex flex-col gap-8 items-center justify-center"><div>
            <h2 className="mb-4 text-xl font-bold text-center text-gray-900">
              Welcome to
            </h2>
            <span className="bg-gray-900 rounded-l-full rounded-br-full text-[gold] py-2 px-3 mt-2 font-semibold text-lg">
              The Golden Era of Crypto
            </span></div>
            <button
              className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-[gold] hover:border-2 hover:border-gray-900 hover:text-gray-900"
              onClick={handleClose}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePopup;

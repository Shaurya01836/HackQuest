import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative bg-customDark min-h-screen w-full flex flex-col items-center justify-center gap-10 px-4 md:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center text-shadow-custom relative z-10 gap-4">
        <h1 className="text-customPurple text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Empowering the Horizon of
        </h1>
        <h1 className="text-customBlue text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Secure DEFI Solutions
        </h1>
        <p className="text-slate-400 font-medium text-lg md:text-xl lg:text-xl w-full md:w-3/4 lg:w-1/2 py-4">
          Unlock the potential of secure transfers, group payments, and smart
          savings — all with unmatched security and a seamless user experience.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 md:gap-10 relative z-10">
        <button className="text-white bg-customPurple px-8 py-3 md:px-10 md:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-custom-purple transition-transform duration-300 hover:scale-105">
          <Link to="/docs">View Documentation</Link>
        </button>
        <button className="text-customBlue bg-white px-8 py-3 md:px-10 md:py-4 rounded-2xl font-semibold border-2 border-customBlue shadow-lg hover:bg-customBlue hover:text-white hover:border-white transition-transform duration-300 hover:scale-105">
          <Link to="/transfer">Transfer Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;

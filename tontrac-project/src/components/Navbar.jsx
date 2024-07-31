import React from "react";
import NavIconButton from "./NavIconButton";

const Navbar = ({ handleBack }) => {
  return (
    <nav className="bg-background-light p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-text text-xl md:text-2xl ml-24 lg:ml-5 tracking-tighter">
          TonTrac React Project - Phase 2
        </h1>
        <div className="hidden md:block">
          <NavIconButton onClick={handleBack} label="Back to Home" />
        </div>
      </div>
      {/* smaller screens */}
      <div className="md:hidden flex justify-center mt-4">
        <NavIconButton onClick={handleBack} label="Back to Home" />
      </div>
    </nav>
  );
};

export default Navbar;

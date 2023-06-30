import React from "react";

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <button>
            <span>Header</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

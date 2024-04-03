import React from "react";

const Logo = () => {
  return (
    <header className="header [ bled row flexible ]">
      <h1 className="logo">
        <span className="logo__sun"></span>SUNBAE
      </h1>
      <h2 className="logo__slogan">
        Bulk check the contrast of all your color combinations
      </h2>
    </header>
  );
};

const Marquee = () => {
  return (
    <div className="marquee [ bled ]">
      <div className="marquee__inner [ row ]" aria-hidden="true">
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
        <span>Select two or more colors to start</span>
        <span>✽</span>
      </div>
    </div>
  );
};

const Header = {
  Logo,
  Marquee,
};

export default Header;

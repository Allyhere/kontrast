import React from "react";

const Rainbow = () => {
  const BASE_STAGGER = 50;
  const COLORS = [
    "#E81416",
    "#FFA500",
    "#FAEB36",
    "#79C314",
    "#487DE7",
    "#4B369D",
    "#70369D",
  ];

  return (
    <div className="rainbow">
      {COLORS.map((color, index) => (
        <div
          className="rainbow__item"
          style={{ "--stagger": `${BASE_STAGGER * index}ms`, "--color": color }}
        ></div>
      ))}
    </div>
  );
};

const Logo = () => {
  return (
    <header className="header [ bled row flexible ]">
      <h1 className="logo">
        <span className="logo__sun"></span>SUNBAE
      </h1>
      <h2 className="logo__slogan">
        Bulk check the contrast of all your color combinations
      </h2>
      {/* <Rainbow /> */}
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

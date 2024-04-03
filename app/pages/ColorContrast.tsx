import React, { useState } from "react";
import TextContrastList from "@/components/TextContrast/TextContrastList";
import ColorSelect from "@/components/ColorSelect/ColorSelect";
import { arrayOfColorsType } from "@/components/ColorPicker/types";
import Header from "@/components/Header/Header";

const ColorContrast = () => {
  const [colorPickers, setColorPickers] = useState<arrayOfColorsType>(["#ddd"]);

  return (
    <main className="centered main">
      <Header.Logo />
      <Header.Marquee />
      <ColorSelect colors={colorPickers} setColors={setColorPickers} />
      {colorPickers.length > 1 ? (
        <TextContrastList colors={colorPickers} />
      ) : null}
    </main>
  );
};

export default ColorContrast;

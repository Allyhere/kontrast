import React, { useState } from "react";
import TextContrastList from "@/components/TextContrast/TextContrastList";
import ColorSelect from "@/components/ColorSelect/ColorSelect";
import { arrayOfColorsType } from "@/components/ColorPicker/types";
import { levelType } from "@/utils/types";
import kontrast from "@/assets/images/kontrast.svg";

const ColorContrast = () => {
  const [colorPickers, setColorPickers] = useState<arrayOfColorsType>(["#ddd"]);


  return (
    <main className="centered">
      <img src={kontrast} alt="" />
      <ColorSelect colors={colorPickers} setColors={setColorPickers} />
      {colorPickers.length > 1 ? (
        <TextContrastList colors={colorPickers} />
      ) : null}
    </main>
  );
};

export default ColorContrast;

import React, { useState } from "react";
import TextContrastList from "@/components/TextContrast/TextContrastList";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { arrayOfColorsType } from "@/components/ColorPicker/types";
import TextControls from "@/components/TextControls/TextControls";
import { levelType } from "@/utils/types";
import kontrast from "@/assets/images/kontrast.svg";

const ColorContrast = () => {
  const [colorPickers, setColorPickers] = useState<arrayOfColorsType>(["#ddd"]);
  const [controlValues, setControlValues] = useState<{
    isBold: boolean;
    fontSize: number;
    aLevel: levelType;
  }>({
    isBold: false,
    fontSize: 1,
    aLevel: "AA",
  });

  return (
    <main className="centered">
      <img src={kontrast} alt="" />
      <ColorPicker
        colorPickers={colorPickers}
        setColorPickers={setColorPickers}
      />
      <TextControls
        controlValues={controlValues}
        setControlValues={setControlValues}
      />
      {colorPickers.length > 1 ? (
        <TextContrastList colors={colorPickers} textControls={controlValues} />
      ) : null}
    </main>
  );
};

export default ColorContrast;

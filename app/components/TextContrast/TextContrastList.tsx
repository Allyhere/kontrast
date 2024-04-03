import React, { useState, useEffect } from "react";
import { makeColorPairings, parsedContrast } from "@/utils/colors";
import { arrayOfColorsType, colorType } from "../ColorPicker/types";
import ContrastList from "../ContrastList/ContrastList";

const TextContrastList = ({ colors }) => {
  const [colorList, setColorList] = useState<arrayOfColorsType>(
    makeColorPairings(colors)
  );

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    handleOrderChange(isChecked);
  }, [isChecked, colors]);

  const filterPairings = () =>
    makeColorPairings(colors).filter(
      (pair: colorType) => parsedContrast(pair) > 4.5
    );

  const handleOrderChange = (checked: boolean) =>
    setColorList(checked ? filterPairings() : makeColorPairings(colors));

  return (
    <>
      <label
        htmlFor="contrast"
        className="row"
        style={{ "--alignment": "center" }}
      >
        <input
          type="checkbox"
          name="contrast"
          id="contrast"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Filtrar cores com contraste suficiente.
      </label>
      <ul className="[ centered bled ]">
        {colorList.length > 0
          ? colorList.map((pair: colorType, index) => (
              <li className="row" key={index} flexible>
                <ContrastList pair={pair} contrast={parsedContrast(pair)} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default TextContrastList;

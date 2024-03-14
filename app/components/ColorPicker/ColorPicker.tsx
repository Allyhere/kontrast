import React from "react";
import ColorItem from "@/components/ColorPicker/ColorItem";
import { HEX_REGEX } from "@/utils/constants";
import { colorType } from "./types";

const ColorPicker = ({ colorPickers, setColorPickers }) => {
  console.count("ColorPicker");
  
  const addColorPicker = () => {
    setColorPickers([...colorPickers, colorPickers.at(-1) || "#ddd"]);
  };

  const removeColorPicker = (index: number) => {
    const changedColorPickers = [...colorPickers];
    changedColorPickers.splice(index, 1);
    setColorPickers(changedColorPickers);
  };

  const changeColorPicker = (value: string, index: number) => {
    const changedColorPickers = [...colorPickers];
    const validHexValue = HEX_REGEX.test(value) ? value : "#ddd";
    changedColorPickers[index] = validHexValue;
    setColorPickers(changedColorPickers);
  };

  return (
    <section className="stack">
      <ul className="color-list grid">
        {colorPickers.map((color: colorType, index: number) => {
          return (
            <ColorItem
              color={color}
              index={index}
              setColor={changeColorPicker}
              removeColor={removeColorPicker}
              hasDelete={colorPickers.length > 1}
              key={index}
            />
          );
        })}
      </ul>
      <button onClick={addColorPicker} type="button">
        Adicionar Cor
      </button>
    </section>
  );
};

export default ColorPicker;

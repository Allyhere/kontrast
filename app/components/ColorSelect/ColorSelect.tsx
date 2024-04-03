import React, { useCallback, useState } from "react";
import { isValidString, hasInArray } from "@/utils/general";
import { isColor } from "@/utils/colors";
import { colorType } from "@/components/types";
import ColorItem from "./ColorItem";
import { X } from "@phosphor-icons/react";

function ColorSelect({ colors, setColors }) {
  const [tempColor, setTempColor] = useState<string>("");

  const handleTempColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempColor(event.target.value);
  };

  const parseColorPick = useCallback(
    (input: string): colorType => {
      const validateInput = (input: string) =>
        isValidString(input) && !hasInArray(colors, input);

      const parsedInput = (isColor(input) || []).filter(
        (color) => validateInput(color) && !hasInArray(colors, color)
      );

      return parsedInput;
    },
    [colors]
  );

  const handleColorChange = (color: colorType) => {
    setColors((prevColors: colorType) => [...prevColors, ...color]);
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    let pasteValue = (
      event.clipboardData || (window as any).clipboardData
    ).getData("text");

    const parsedInput = parseColorPick(pasteValue);
    if (!parsedInput) return;
    handleColorChange(parsedInput);
  };

  const handlePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedInput = parseColorPick(inputValue);
    if (!parsedInput) {
      event.target.value = "";
      return;
    }
    setTempColor("");
    handleColorChange(parsedInput);
    event.target.value = "";
  };

  const handleSpecificColorChange = (value: string, index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1, value);
    setColors(newColors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      currentTarget,
      currentTarget: { elements: inputElements },
    } = event;
    const inputValue = (inputElements[1] as HTMLInputElement).value;

    const parsedInput = parseColorPick(inputValue);
    if (!parsedInput) {
      currentTarget.reset();
      return;
    }

    handleColorChange(parsedInput);
    currentTarget.reset();
  };

  const handleDelete = (index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const clearSelection = () => setColors([]);

  return (
    <ul className="color-select [ bled row ]" flexible>
      <li className="color-select__item">
        <form
          className="color-field [ stack ]"
          onSubmit={handleSubmit}
          noValidate
          style={{ "--gap": "1ch" } as React.CSSProperties}
        >
          <label
            htmlFor="color"
            aria-label="add a color"
            className="color-field__label"
          >
            <small>add a color (or a list of colors)</small>
          </label>
          <label
            htmlFor="colorpicker"
            className="color-picker"
            style={{ "--color": tempColor } as React.CSSProperties}
          >
            <input
              type="color"
              name="colorpicker"
              id="colorpicker"
              className="color-picker__input"
              onInput={handleTempColor}
              onBlur={handlePicker}
            />
          </label>
          <input
            type="text"
            placeholder="add a color"
            name="color"
            className="color-field__input"
            onPaste={handlePaste}
            onBlur={handlePicker}
          />
        </form>
      </li>
      {tempColor ? (
        <ColorItem color={tempColor} index={colors.length + 1} />
      ) : null}
      {colors.length ? (
        colors.map((color: string, index: number) => (
          <ColorItem
            key={index}
            index={index}
            color={color}
            colorChange={handleSpecificColorChange}
            colorDelete={handleDelete}
          />
        ))
      ) : (
        <li className="color-select__item">your color here</li>
      )}
      <li className="color-select__item">
        <button
          onClick={clearSelection}
          type="button"
          className="color-select__clear [ btn ]"
          aria-label="Clear selection"
        >
          <X size={32} color="currentColor" />
        </button>
      </li>
    </ul>
  );
}

export default ColorSelect;

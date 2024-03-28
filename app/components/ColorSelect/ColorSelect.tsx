import React from "react";
import { isValidString, hasInArray } from "@/utils/general";
import { isColor } from "@/utils/colors";
import { colorType } from "@/components/ColorPicker/types";
import { Trash } from "@phosphor-icons/react";

function ColorSelect({ colors, setColors }) {
  const validateInput = (input: string) =>
    isValidString(input) && !hasInArray(colors, input);

  const handlePaste = (event: React.ClipboardEvent) => {
    let pasteValue = (
      event.clipboardData || (window as any).clipboardData
    ).getData("text");
    let parsedPaste = (isColor(pasteValue) || []).filter(
      (color) => !hasInArray(colors, color)
    );

    if (!validateInput(pasteValue)) return;
    setColors((prevColors: colorType) => [...prevColors, ...parsedPaste]);
  };

  const handlePicker = (event) => {
    const inputValue = event.target.value;
    if (!validateInput(inputValue)) {
      event.target.value = "";
      return;
    }
    let parsedInput = (isColor(inputValue) || []).filter(
      (color) => !hasInArray(colors, color)
    );
    setColors((prevColors: colorType) => [...prevColors, ...parsedInput]);

    event.target.value = "";
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors];
    newColors.splice(index, 1, value);
    console.log(colors, newColors);
    setColors(newColors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    if (!validateInput(inputValue)) {
      event.currentTarget.reset();
      return;
    }
    setColors((prevColors: colorType) => [...prevColors, inputValue]);
    event.currentTarget.reset();
  };

  const handleDelete = (index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const clearSelection = () => setColors([]);

  return (
    <ul className="color-select [ row ]" flexible>
      {colors.length
        ? colors.map((color: string, index: number) => {
            return (
              <li key={index} className="color-select__item">
                <label
                  htmlFor="color"
                  className="color-picker"
                  style={{ "--color": color } as React.CSSProperties}
                >
                  <input
                    type="color"
                    className="color-picker__input"
                    value={color}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleColorChange(index, event.target.value)
                    }
                  />
                </label>
                {color.toUpperCase()}
                <button
                  className="btn:delete"
                  onClick={() => handleDelete(index)}
                  aria-label="Delete color"
                >
                  <Trash size={20} />
                </button>
              </li>
            );
          })
        : null}
      <li className="color-select__item">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="row"
          style={{ "--gap": "1ch" } as React.CSSProperties}
        >
          <label htmlFor="colorpicker" className="color-picker">
            <input
              type="color"
              name="colorpicker"
              id="colorpicker"
              className="color-picker__input"
              onChange={handlePicker}
            />
          </label>
          <label
            htmlFor="color"
            aria-label="add a color"
            className="color-field"
          >
            <input
              type="text"
              placeholder="add a color"
              className="color-field__input"
              onPaste={handlePaste}
              onBlur={handlePicker}
            />
          </label>
          <button onClick={clearSelection}>Clear selection</button>
        </form>
      </li>
    </ul>
  );
}

export default ColorSelect;

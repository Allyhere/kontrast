import React from "react";

const TextControls = ({ controlValues, setControlValues }) => {
  const handleControlChange = (name: string, value: string | boolean) => {
    setControlValues((oldControls: typeof controlValues) => ({
      ...oldControls,
      [name]: value,
    }));
  };

  return (
    <menu className="text-controls">
      <li>
        <label htmlFor="font-slider">
          Font size
          <input
            type="range"
            name="fontSize"
            id="fontSize"
            step="0.25"
            max="4"
            min="0.75"
            value={controlValues.fontSize}
            onChange={(event) =>
              handleControlChange(event.target.name, event.target.value)
            }
          />
        </label>
        <p
          className="font"
          style={{
            fontSize: `${controlValues.fontSize}rem`,
          }}
        >
          {controlValues.fontSize}rem
        </p>
      </li>
      <li>
        <label htmlFor="font-slider">
          <input
            type="checkbox"
            name="isBold"
            id="isBold"
            value={controlValues.isBold}
            onChange={(event) =>
              handleControlChange(event.target.name, event.target.checked)
            }
          />
          Bold
        </label>
      </li>
      <li>
        <label htmlFor="aLevel">
          AA
          <input
            type="radio"
            name="aLevel"
            id="aLevel"
            value="AA"
            onChange={(event) =>
              handleControlChange(event.target.name, event.target.value)
            }
          />
        </label>
        <label htmlFor="aLevel">
          AAA
          <input
            type="radio"
            name="aLevel"
            id="aLevel"
            value="AAA"
            onChange={(event) =>
              handleControlChange(event.target.name, event.target.value)
            }
          />
        </label>
      </li>
    </menu>
  );
};

export default TextControls;

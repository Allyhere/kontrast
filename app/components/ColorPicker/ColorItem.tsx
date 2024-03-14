import React, { useId, useRef } from "react";

const ColorItem = ({ color, setColor, removeColor, index, hasDelete }) => {
  const inputId = useId();
  const colorId = `${inputId}-color`;
  const fieldId = `${inputId}-field`;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value, index);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setColor(
      (event.currentTarget.elements[1] as HTMLInputElement).value,
      index
    );
  };

  return (
    <li className="row">
      <form noValidate className="color-picker [ row ]" onSubmit={handleSubmit}>
        <span className="color-picker__title">{color.toUpperCase()}</span>
        <label
          htmlFor={colorId}
          className="color-drop"
          style={{ "--default-color": color } as React.CSSProperties}
          aria-label="Escolha uma cor"
        >
          <input
            type="color"
            name={colorId}
            id={colorId}
            className="color-drop__input"
            onInput={handleInputChange}
            value={color}
          />
        </label>
        <label htmlFor={fieldId} className="color-input">
          <input
            type="text"
            name={fieldId}
            id={fieldId}
            placeholder=""
            className="color-input__field"
            onBlur={handleInputChange}
            ref={inputRef}
          />
          <span className="color-input__name">Cor</span>
        </label>
      </form>
      {hasDelete ? (
        <button onClick={() => removeColor(index)} type="button">
          Delete
        </button>
      ) : null}
    </li>
  );
};

export default ColorItem;

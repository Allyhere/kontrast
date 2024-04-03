import React, { useId } from "react";
import { Trash } from "@phosphor-icons/react";

const ColorItem = ({
  color,
  index,
  colorChange,
  colorDelete,
}: {
  color: string;
  index: number;
  colorChange?: (index: string, number: number) => void;
  colorDelete?: (arg0: number) => void;
}) => {
  const colorId = useId();
  const colorUniqueId = `color-${colorId}`;
  return (
    <li className="color-select__item [ bordered ]">
      <label
        htmlFor={colorUniqueId}
        className="color-picker:round"
        style={{ "--color": color } as React.CSSProperties}
      >
        <input
          type="color"
          className="color-picker__input"
          value={color}
          name={colorUniqueId}
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            colorChange(event.target.value, index)
          }
        />
      </label>
      {color.toUpperCase()}
      {colorDelete ? (
        <button
          className="btn:delete"
          onClick={() => colorDelete(index)}
          aria-label="Delete color"
        >
          <Trash size={20} color="currentColor"/>
        </button>
      ) : null}
    </li>
  );
};

export default ColorItem;

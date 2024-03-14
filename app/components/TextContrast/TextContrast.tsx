import React, { useRef } from "react";
import { calculateLargeContrast } from "../../utils/largeTextCalculator";

const TextContrast = ({ pair, contrast, textControls }) => {
  const [background, foreground] = pair;

  const imageContrastStyle = (contrast: number) => {
    return calculateLargeContrast(
      contrast,
      textControls.aLevel,
      textControls.fontSize,
      textControls.isBold
    );
  };

  return (
    <>
      <p
        className="text-contrast"
        style={
          {
            "--background": background,
            "--foreground": foreground,
            "--size": `${textControls.fontSize}rem`,
            "--weight": textControls.isBold && "bold",
          } as React.CSSProperties
        }
      >
        Cor do texto {foreground} na cor de fundo {background}
      </p>
      <p
        className="text-contrast__ratio"
        style={
          {
            "--contrast-color": imageContrastStyle(contrast),
          } as React.CSSProperties
        }
      >
        {contrast}
      </p>
    </>
  );
};

export default TextContrast;

import {
  ACCEPTABLE_CONTRAST_AA,
  LARGE_SCALE_CONTRAST_AA,
  LARGE_FONT_INDEX,
  LARGE_FONT_WITH_BOLD_INDEX,
  ACCEPTABLE_CONTRAST_AAA,
  LARGE_SCALE_CONTRAST_AAA,
} from "./constants";

import { levelType } from "./types";

const calculateLargeContrast = (
  contrast: number,
  level: levelType = "AA",
  fontSize: number,
  isBold: boolean
) => {
  const fontSizeToPx = fontSize * 16;
  const aimedContrast =
    level === "AA" ? ACCEPTABLE_CONTRAST_AA : ACCEPTABLE_CONTRAST_AAA;

  const aimedContrastLargeScale =
    level === "AA" ? LARGE_SCALE_CONTRAST_AA : LARGE_SCALE_CONTRAST_AAA;

  const isLargeScale = () => {
    const fontSizeComparation =
      fontSizeToPx >= (isBold ? LARGE_FONT_WITH_BOLD_INDEX : LARGE_FONT_INDEX);

    return fontSizeComparation ? aimedContrastLargeScale : aimedContrast;
  };

  const RED_COLOR = "tomato";
  const GREEN_COLOR = "limegreen";

  return contrast > isLargeScale() ? GREEN_COLOR : RED_COLOR;
};

export { calculateLargeContrast };

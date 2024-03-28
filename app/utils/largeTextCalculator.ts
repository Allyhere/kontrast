import {
  ACCEPTABLE_CONTRAST_AA,
  LARGE_SCALE_CONTRAST_AA,
  LARGE_FONT_INDEX,
  LARGE_FONT_WITH_BOLD_INDEX,
  ACCEPTABLE_CONTRAST_AAA,
  LARGE_SCALE_CONTRAST_AAA,
} from "./constants";

import { levelType } from "./types";

const retrieveTags = (contrast: number) => {
  const tags = [];
  const passAsLargeAA =
    contrast > LARGE_SCALE_CONTRAST_AA && contrast < ACCEPTABLE_CONTRAST_AA;
  const passAsLargeAAA =
    contrast > LARGE_SCALE_CONTRAST_AAA && contrast < ACCEPTABLE_CONTRAST_AAA;

  if (contrast > ACCEPTABLE_CONTRAST_AA) tags.push("AA");
  if (contrast > ACCEPTABLE_CONTRAST_AAA) tags.push("AAA");

  return { tags, passAsLargeAA, passAsLargeAAA };
};

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

export { calculateLargeContrast, retrieveTags };

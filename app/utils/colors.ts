import Color from "colorjs.io/dist/color.js";
import { arrayOfColorsType, colorType } from "@/components/ColorPicker/types";

const isColor = (colorString: string) => {
  const HEX_REGEX = /(#|)([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
  const hasHash = (match: string) => /#/.test(match);
  const matchRegex = colorString.match(HEX_REGEX);
  if (!matchRegex) return;
  return matchRegex.map((regex) => (hasHash(regex) ? regex : `#${regex}`));
};

const parsedContrast = ([background, foreground]: colorType): number => {
  const backgroundContrast = new Color(background);
  const textContrast = new Color(foreground);
  return backgroundContrast.contrast(textContrast, "WCAG21").toFixed(2);
};

const makeColorPairings = (colors: arrayOfColorsType) => {
  let pairs: Array<arrayOfColorsType> = [];
  const retrieveColors = [...colors];

  for (let i = 0; i < colors.length; ++i) {
    if (retrieveColors[i + 1] === undefined) break;
    for (let l = 1; l < colors.length; ++l) {
      if (retrieveColors[i] === retrieveColors[l]) continue;
      const newPairing = [...pairs, [retrieveColors[i], retrieveColors[l]]];
      pairs = newPairing;
    }
  }

  // const reversedPairs = [...pairs].map((pair) => pair.slice().reverse());
  const parsedTuples = new Set([...pairs].map((pair) => JSON.stringify(pair)));

  return Array.from(parsedTuples, (tuple) => JSON.parse(tuple))
    .sort((a, b) => parsedContrast(a) - parsedContrast(b))
    .reverse();
};

export { makeColorPairings, parsedContrast, isColor };

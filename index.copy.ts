import Color from "colorjs.io/dist/color.js";

let colors: Set<string>;
let pairs: Array<Array<string>> = [];

const colorCheckers: Array<HTMLInputElement> = [
  ...document.getElementsByTagName("input"),
];

const result = document.getElementById("result");

const createTextNodes = (contrast: string, colors: Array<string>) => {
  const [foreground, background] = colors;
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed delectus a aliquid veniam repellat, quae illo nisi possimus tempore eius corporis laborum libero dolorum alias ex odio praesentium doloremque saepe.";
  const textNode = document.createElement("p");
  const invisibleTextNode = document.createElement("span");
  const contrastNode = document.createElement("span");
  invisibleTextNode.innerText = text;
  invisibleTextNode.ariaLabel = "Texto de exemplo";
  contrastNode.innerText = contrast;
  contrastNode.ariaLabel = `O contraste da combinação das cores ${foreground} e ${background} é ${contrast}`;
  contrastNode.classList.add("color-canva__contrast");
  textNode.appendChild(invisibleTextNode);
  textNode.appendChild(contrastNode);

  textNode.classList.add("color-canva");
  textNode.style.setProperty("--foreground", foreground);
  textNode.style.setProperty("--background", background);

  return textNode;
};

const updateColorNodes = () => {
  const colorsFragment = document.createDocumentFragment();
  const contrastFromPairings = pairs.map((pair) => {
    const [foreground, background] = pair;
    const backgroundContrast = new Color(background);
    const textContrast = new Color(foreground);
    return backgroundContrast.contrast(textContrast, "WCAG21").toFixed(2);
  });

  pairs.forEach((pair, index) => {
    colorsFragment.appendChild(
      createTextNodes(contrastFromPairings[index], pair)
    );
  });

  if (result) {
    result.innerHTML = "";
    result.appendChild(colorsFragment);
  }
};

const makeColorPairings = () => {
  pairs.length = 0;
  const retrieveColors = [...colors];
  for (let i = 0; i < colors.size; ++i) {
    if (retrieveColors[i + 1] === undefined) break;
    pairs.push([retrieveColors[i], retrieveColors[i + 1]]);
  }

  const reversedPairs = [...pairs].map((pair) => pair.slice().reverse());
  pairs = [...pairs, ...reversedPairs];
};

const updateCheckers = () => {
  colors = new Set();
  colorCheckers.forEach((checker) => colors.add(checker.value));
};

const checkContrast = () => {
  updateCheckers();
  makeColorPairings();
  updateColorNodes();
};

const initialize = () => {
  colorCheckers.forEach((checker) =>
    checker.addEventListener("input", checkContrast)
  );
};

initialize();

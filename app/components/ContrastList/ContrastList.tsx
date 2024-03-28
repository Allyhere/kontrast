import { retrieveTags } from "@/utils/largeTextCalculator";
import React from "react";

const ContrastList = ({ pair, contrast }) => {
  const [background, foreground] = pair;
  const { tags, passAsLargeAA, passAsLargeAAA } = retrieveTags(contrast);
  const isLargeText = passAsLargeAA || passAsLargeAAA;
  const largeTextMessage = passAsLargeAAA ? "AAA" : passAsLargeAA ? "AA" : null;

  return (
    <div className="contrast-list">
      <div className="contrast-list__pair">
        <p
          className="contast-list__item [ outline ]"
          style={{ "--background": background, "--foreground": foreground }}
        >
          Text color is {foreground} and foreground color is {background}
        </p>
        <p
          className="contast-list__item [ outline ]"
          style={{ "--background": foreground, "--foreground": background }}
        >
          Text color is {background} and foreground color is {foreground}
        </p>
      </div>
      <div className="contrast-details [ outline stack ]">
        <p className="contrast-details__index">{contrast}</p>
        {tags.length ? (
          <ul className="contrast-details__tags [ row ]">
            {tags.map((tag, index) => (
              <li className="contrast-details__tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        ) : (
          <span className="contrast-details__tag">BAD</span>
        )}
        {isLargeText && (
          <p className="contrast-details__text">
            This combination may pass as {largeTextMessage} if it has at least
            18.5px of size and bold or 24px of size{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContrastList;

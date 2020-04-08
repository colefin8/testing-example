import React from "react";
import { generateColor } from "./Functions";
import renderer from "react-test-renderer";
import TestMe from "../components/TestMe";

//# when to use act()? When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. React provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions:

describe("unit tests for App.js", () => {
  let testColor = generateColor();
  const possibleValues = "0123456789ABCDEF";

  test("random color generator only generates valid hex codes (starts with #)", () => {
    expect(testColor[0]).toBe("#");
  });

  test("random color generator only generates valid hex codes (string of 7 chars)", () => {
    expect(testColor.length).toBe(7);
  });

  test("random color generator only generates valid hex codes (6 random values are between 0-9, or A-F)", () => {
    //#technically has 6 expect statements in one test
    for (let i = 1; i < 7; i++) {
      expect(possibleValues).toContain(testColor[i]);
    }
  });

  test("random color generator creates a new random color each time", () => {
    const newColor = generateColor();
    expect(newColor).not.toBe(testColor);
  });

});

describe("component tests for TestMe component", () => {
  let name = "cole";
  const component = renderer.create(<TestMe name={name} />);
  let tree = component.toJSON();

  test("component renders the same each time if given same input", () => {
    expect(tree).toMatchSnapshot();
  });

  test("component displays name prop", () => {
    expect(tree.children[0]).toBe(name);
  });
});

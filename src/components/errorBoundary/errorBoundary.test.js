import React from "react";
import ErrorBoundary from ".";
// import RenderError from "./renderError";
import { render } from "@testing-library/react";

// const Throw = () => {
//   throw new Error("bad");
// };

describe("ErrorBoundary", () => {
  const component = render(<ErrorBoundary>"oh no"</ErrorBoundary>);
  it("should render error", () => {
    expect(component).toMatchSnapshot();
  });
});

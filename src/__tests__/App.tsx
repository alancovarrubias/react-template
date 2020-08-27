import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders a header with text 'React Template'", async () => {
  const titleRegEx = /react template/i;
  const { getByText } = render(<App />);
  const header = getByText(titleRegEx);
  expect(header).toHaveTextContent(titleRegEx);
});

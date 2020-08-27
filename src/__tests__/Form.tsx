import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Form from "../Form";

test("renders a form with no accessibility issues", async () => {
  const { container } = render(<Form />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

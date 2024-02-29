import { render } from "@testing-library/react";
import App from "../App";

describe("Test the app component", () => {
  it("should render the app component", () => {
    const { getByText } = render(<App />);

    expect(getByText(/trending products/i)).toBeInTheDocument();
  });
});

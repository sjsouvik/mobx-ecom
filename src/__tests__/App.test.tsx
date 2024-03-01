import { act, render } from "@testing-library/react";
import { Mock } from "vitest";
import { products } from "../helper/testData";
import App from "../App";

describe("Test the home page", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ products }),
        status: 200,
      });
    }) as Mock;
  });

  it("should render the home page with trending products", async () => {
    const { getByRole, container } = await act(async () => render(<App />));

    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      /trending products/i
    );
    expect(container.getElementsByClassName("v-card")).toHaveLength(2);
  });
});

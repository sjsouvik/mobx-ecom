import { act, fireEvent, render, within } from "@testing-library/react";
import App from "../App";
import { products } from "../common/testData";
import { Mock } from "vitest";

describe("Tests for the ProductDetails page", () => {
  beforeAll(() => {
    globalThis.fetch = vi.fn((url) => {
      return Promise.resolve({
        json: () => {
          switch (true) {
            case url.includes("/products/2"):
              return Promise.resolve(products[1]);

            case url.includes("/products"):
              return Promise.resolve({ products });
          }
        },
        status: 200,
      });
    }) as Mock;
  });

  it("should render the product details page with all the product details", async () => {
    const { container } = await act(async () => render(<App />));

    expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
    const trendingProducts = container.getElementsByClassName("v-card");
    expect(trendingProducts).toHaveLength(2);

    await act(async () =>
      fireEvent.click(
        within(trendingProducts[1] as HTMLElement).getByRole("link")
      )
    );
    expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/2");
    expect(location.href).toContain("/products/2");

    expect(container.getElementsByClassName("product-details")).toHaveLength(1);
  });
});

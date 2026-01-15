import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Shopping Items Rendering", () => {
  test("renders both shopping items", () => {
    render(<App />);

    expect(screen.getByText("apples")).toBeInTheDocument();
    expect(screen.getByText("oranges")).toBeInTheDocument();
  });

  test("renders total price for apples correct", async () => {
    render(<App />);

    const appleButton = screen.getAllByText("Add")[0];
    userEvent.click(appleButton);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(screen.getByTestId("summary-price")).toHaveTextContent(
        "total price is £0.6"
      );
    });
  });
});

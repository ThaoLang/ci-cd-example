/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

it("Home: Works with Home Components (React State)", () => {
  render(<Home />);
  expect(screen.getByRole("heading")).toHaveTextContent("Click a button ....");
  fireEvent.click(screen.getByRole("button", { name: "Button 1" }));
  expect(screen.getByRole("heading")).toHaveTextContent("Button 1");
  fireEvent.click(screen.getByRole("button", { name: "Button 2" }));
  expect(screen.getByRole("heading")).toHaveTextContent("Button 2");
});

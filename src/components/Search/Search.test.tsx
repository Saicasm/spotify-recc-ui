import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./Search";

describe("SearchBar component", () => {
  const mockSearchQueryChange = jest.fn();
  const mockSearchSelect = jest.fn();

  beforeEach(() => {
    mockSearchQueryChange.mockClear();
    mockSearchSelect.mockClear();
  });

  it("renders without crashing", () => {
    render(<SearchBar />);
  });

  it("calls onSearchQueryChange when input value changes", () => {
    const { getByPlaceholderText } = render(
      <SearchBar onSearchQueryChange={mockSearchQueryChange} />
    );
    const input = getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "test" } });

    expect(mockSearchQueryChange).toHaveBeenCalledWith("test");
  });

  it("calls onSearchSelect when dropdown item is clicked", () => {
    const { getByText } = render(
      <SearchBar
        items={["Item 1", "Item 2", "Item 3"]}
        onSearchSelect={mockSearchSelect}
      />
    );
    const dropdownItem = getByText("Item 1");

    fireEvent.click(dropdownItem);

    expect(mockSearchSelect).toHaveBeenCalledWith("Item 1");
  });

  it("displays dropdown items when input value length is greater than 2", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar
        items={["Item 1", "Item 2", "Item 3"]}
        onSearchQueryChange={mockSearchQueryChange}
        onSearchSelect={mockSearchSelect}
      />
    );
    const input = getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "te" } });

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
    expect(getByText("Item 3")).toBeInTheDocument();
  });

  it("hides dropdown items when input value length is less than or equal to 2", () => {
    const { getByPlaceholderText, queryByText } = render(
      <SearchBar
        items={["Item 1", "Item 2", "Item 3"]}
        onSearchQueryChange={mockSearchQueryChange}
        onSearchSelect={mockSearchSelect}
      />
    );
    const input = getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "t" } });

    expect(queryByText("Item 1")).toBeNull();
    expect(queryByText("Item 2")).toBeNull();
    expect(queryByText("Item 3")).toBeNull();
  });
});

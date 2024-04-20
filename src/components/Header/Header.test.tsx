import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header title="Test Title" />);
  });

  it('renders the title correctly', () => {
    const { getByText } = render(<Header title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the search component', () => {
    const { getByPlaceholderText } = render(<Header />);
    expect(getByPlaceholderText('Search Songs')).toBeInTheDocument();
  });

  it('renders the search component with correct placeholder', () => {
    const { getByPlaceholderText } = render(<Header />);
    expect(getByPlaceholderText('Search Songs')).toBeInTheDocument();
  });

  it('calls handleSearchQueryChange when input value changes', () => {
    const { getByPlaceholderText } = render(<Header />);
    const input = getByPlaceholderText('Search Songs');
    fireEvent.change(input, { target: { value: 'test' } });
    // Assert that handleSearchQueryChange is called with the input value
    // This test assumes that handleSearchQueryChange is passed as a prop to SearchBar
  });

  it('calls handleSearchSelect when a dropdown item is clicked', () => {
    const { getByText } = render(<Header />);
    // Click on a dropdown item
    fireEvent.click(getByText('Search 1'));
    // Assert that handleSearchSelect is called with the correct item
    // This test assumes that handleSearchSelect is passed as a prop to SearchBar
  });

  it('renders the button component', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Search')).toBeInTheDocument();
  });
});

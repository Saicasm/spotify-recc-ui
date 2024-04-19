import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "",
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (item) => {
    // Handle dropdown item click action
    console.log("Selected:", item);
    setIsOpen(false); // Close dropdown after item selection
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="py-2 px-4 rounded-lg border outline-none focus:border-light-border-primary  w-60"
      />
   
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-light-bg-secondary border border-gray-200 rounded-lg shadow-md mt-2">
          {/* Dropdown items */}
          <div
            onClick={() => handleDropdownItemClick("Item 1")}
            className="py-2 px-4  hover:bg-gray-100 cursor-pointer"
          >
            Item 1
          </div>
          <div
            onClick={() => handleDropdownItemClick("Item 2")}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
          >
            Item 2
          </div>
          {/* Add more dropdown items as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

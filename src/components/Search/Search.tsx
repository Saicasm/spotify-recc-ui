import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  items?: string[];
  onSearchQueryChange?: (query: string) => void;
  onSearchSelect?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "",
  className = "",
  items = [] as string[],
  onSearchQueryChange,
  onSearchSelect
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if(inputValue.length>2){
        onSearchQueryChange?.(inputValue);
        setIsOpen(true);
    }  
  };

  const handleDropdownItemClick = (item: string) => {
    // Handle dropdown item click action
    onSearchSelect?.(item);
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
          {items?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleDropdownItemClick(item)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
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

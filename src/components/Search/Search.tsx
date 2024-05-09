import React, { useState } from "react";

interface SearchBarProps<T> {
  placeholder?: string;
  className?: string;
  items?: T[];
  displayKey: keyof T;
  onSearchQueryChange?: (query: string) => void;
  onSearchSelect?: (item: T) => void;
}

const SearchBar= <T,>({
  placeholder = "",
  className = "",
  items = [],
  displayKey,
  onSearchQueryChange,
  onSearchSelect
}:SearchBarProps<T> ) => {
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

  const handleDropdownItemClick = (item: T) => {
    // Handle dropdown item click action
    console.log(item);
    onSearchSelect?.(item);
    setIsOpen(false); // Close dropdown after item selection
  };

  return (
    <div className="relative font-mono">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="py-2 px-4 rounded-sm  border outline-none focus:border-light-border-primary  w-60"
      />
      {isOpen && (
       <div className="absolute top-full left-0 w-full bg-light-bg-secondary border border-gray-200 rounded-lg shadow-md mt-2 z-10">
       {items.map((item, index) => (
         <div
           key={index}
           onClick={() => handleDropdownItemClick(item)}
           className="py-2 px-4 hover:bg-gray-100 cursor-pointer "
         >
           {item[displayKey]as React.ReactNode}
         </div>
       ))}
     </div>
      )}
    </div>
  );
};

export default SearchBar;

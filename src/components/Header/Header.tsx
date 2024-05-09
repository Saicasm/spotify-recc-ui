"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import SearchBar from "../Search/Search";
import MusicIon from "../../../public/music.svg";
import UserIcon from "../../../public/user.svg";
import { getSongsForSearch } from "@/api/recommendations";

interface HeaderProps {
  /**
   * The Title of the APP
   */
  title: string;
  /**
   * Additional classes to be added to the Header
   */
  className?: string;
}

interface SearchComponentProps {
  artist_name: string;
  _id: string;
  track_name: string;
  trackId: string;
}

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");

  const [dropdownItems, setDropdownItems] = useState<SearchComponentProps[]>(
    []
  );
  const [selectedItems, setSelectedItems] = useState<SearchComponentProps[]>(
    []
  );
  const handleSearchQueryChange = (query: string) => {
    setSearchInput(query);
    getSearchDropdownItem(searchInput);
  };

  const handleSearchSelect = (item: SearchComponentProps) => {
    setSelectedItems([...selectedItems, item]);
  };
  const getSearchDropdownItem = async (query: string) => {
    try {
      const dropdownData = await getSongsForSearch(query);
      setDropdownItems(dropdownData);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    window.dispatchEvent(
      new CustomEvent("localStorageUpdated", { detail: selectedItems })
    );
  }, [selectedItems]);
  return (
    <div className="">
      <SearchBar
        placeholder="Search Songs"
        onSearchQueryChange={handleSearchQueryChange}
        items={dropdownItems}
        displayKey="track_name"
        onSearchSelect={handleSearchSelect}
      />
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="pr-2">
      <Image
        priority
        src={UserIcon}
        height={32}
        width={32}
        alt="User Settings"
      />{" "}
    </div>
  );
};
const Header: React.FC<HeaderProps> = ({
  title = "Musicfic",
  className = "",
}) => {
  //TODO: Added General Layout of the header, need to finish it
  return (
    <div className="h-16 border-b-2 border-light-border-secondary flex flex-row justify-between items-center">
      <div className="flex">
        <Image
          priority
          src={MusicIon}
          height={32}
          width={32}
          alt="MusicFic Icon"
        />
        <div className="h2 pl-2 font-bold	font-mono ">{title}</div>
      </div>
      <div className="w-60 flex flex-row items-center justify-between">
        <SearchComponent />
        <div className="">
          {/* <Button variant="primary">Search</Button> */}
        </div>
      </div>
      <UserProfile />
    </div>
  );
};

export default Header;

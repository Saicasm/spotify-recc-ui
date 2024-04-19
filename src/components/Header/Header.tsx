import React from "react";
import Button from "../Button/Button";
import SearchBar from "../Search/Search";
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

const Header: React.FC<HeaderProps> = ({
  title = "Musicfic",
  className = "",
}) => {
  //TODO: Added General Layout of the header, need to finish it
  return (
    <div className="h-16 border-b-2 border-black flex flex-row justify-between items-center">
      <div className="">{title}</div>
      <div className="w-60 flex flex-row items-center justify-between">
        <div className="	"><SearchBar placeholder="Search Songs"/></div>
        <div className="">
          <Button variant="primary">Search</Button>
        </div>
      </div>
      <div className="w-25 text-right">User Profile</div>
    </div>
  );
};

export default Header;

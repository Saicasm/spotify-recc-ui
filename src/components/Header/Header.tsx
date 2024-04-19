import React from "react";
import Button from "../Button/Button";

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
      <div className="w-40">{title}</div>
      <div className="flex-1 flex items-center justify-center">
        <div className="">Search Songs</div>
        <div className="">
          <Button variant="primary">Search</Button>
        </div>
      </div>
      <div className="w-25 text-right">User Profile</div>
    </div>
  );
};

export default Header;

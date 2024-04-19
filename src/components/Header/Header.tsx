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
    <div className=" h-16 border-b-2 border-black flex justify-center items-center">
    <div className="">{title}</div>
    <div>Search Songs</div>
    <div><Button variant="primary" >Search</Button></div>
    <div>User Profile</div>
  </div>
  );
};

export default Header;

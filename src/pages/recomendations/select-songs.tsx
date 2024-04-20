import Button from "@/components/Button/Button";
import { useState } from "react";
import Card from "@/components/Card/Card";
import RootLayout from "@/app/layout";
interface SelectSongProps {
  /**
   * The Title of the APP
   */
  title: string;
  /**
   * Additional classes to be added to the Header
   */
  className?: string;
}

const SelectSongs: React.FC<SelectSongProps> = ({
  title = "Song Selection and Rec",
  className = "",
}) => {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="">
        <div className="h2 font-mono text-xl	">{title}</div>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <div>Select a song</div>
        <div>Song 1</div>
        <div>Song 2</div>
        <div>Song 3</div>
        <Button className="" onClick={ handleClick} variant={"primary"}> Generate</Button>   

      </div>
    </>
  );
};

export default SelectSongs;

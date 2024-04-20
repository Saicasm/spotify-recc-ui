import Button from "@/components/Button/Button";
import { useState } from "react";
import Chips from "@/components/Chips/Chips";
interface SelectSongProps {
  /**
   * The Title of the APP
   */
  title: string;
  /**
   * Additional classes to be added to the Header
   */
  className?: string;
  /**
   * List of songs
   */
  songsList?: string[];
}

const SelectSongs: React.FC<SelectSongProps> = ({
  title = "Song Selection and Rec",
  className = "",
  songsList = [],
}) => {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="">
        <div className="h2 font-mono text-xl">{title}</div>
      </div>
      <div className="flex font-mono space-x-2 justify-center items-center">
        <div>Selected songs:</div>
        {songsList?.map((item, index) => <Chips name={item} key={index} />)}
        <Button className="" onClick={handleClick} variant={"primary"}>
          {" "}
          Generate
        </Button>
      </div>
    </>
  );
};

export default SelectSongs;

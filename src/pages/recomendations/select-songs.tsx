
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
    title = "Song Selections",
    className = "",
  }) => {
    function handleClick(): void {
        throw new Error("Function not implemented.");
    }

  return (
  
     <main className='flex   '>
      <div className="flex">
        <div className="h2 pl-2 font-bold	">{title}</div>
      </div>
  </main>
  
  );
};

export default SelectSongs;

"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
interface DisplaySongsProps {
    /**
     * The Title of the APP
     */
    title: string;
    /**
     * Additional classes to be added to the Header
     */
    className?: string;
  }

const DisplaySongs: React.FC<DisplaySongsProps> = ({
    title = "Display Songs",
    className = "",
  }) => {
    function handleClick(): void {
        throw new Error("Function not implemented.");
    }

  return (
  
     <main className='flex  '>
      <div className="flex">
        <div className="h2   font-mono	text-xl	">{title}</div>
      </div>
  </main>
  
  );
};

export default DisplaySongs;


import Button from "@/components/Button/Button";
import { useState } from "react";

interface UploadPlaylistProps {
    /**
     * The Title of the APP
     */
    title: string;
    /**
     * Additional classes to be added to the Header
     */
    className?: string;
  }

const UploadPlaylist: React.FC<UploadPlaylistProps> = ({
    title = "Upload Playlist",
    className = "",
  }) => {
    function handleClick(): void {
        throw new Error("Function not implemented.");
    }

  return (
  
     <main className='flex flex-col justify-end space-y-6'>
        <div className="h2 font-mono text-xl">{title}</div>
           <Button className="py-4" onClick={ handleClick} variant={"primary"}> Upload Playlist</Button>   
  </main>
  
  );
};

export default UploadPlaylist;

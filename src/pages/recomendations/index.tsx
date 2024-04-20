"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
import Card from "@/components/Card/Card";
import RootLayout from "@/app/layout";
import SelectSongs from "./select-songs";
import DisplaySongs from "./display-songs";
import UploadPlaylist from "./upload-playlist";

const Recommendation = () => {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <RootLayout>
      <div className="flex  flex-col items-start justify-evenly p-8 	space-y-10 ">
        <SelectSongs title="Song Selection and Recommendations" />
        <UploadPlaylist title="Upload Playlist" />
        <DisplaySongs title="Display Content" />
      </div>
    </RootLayout>
  );
};

export default Recommendation;

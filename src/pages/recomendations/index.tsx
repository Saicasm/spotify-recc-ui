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
      <main className="flex  flex-col items-start justify-evenly p-8  ">
        <SelectSongs title="Song Selection" />
        <UploadPlaylist title="Upload Playlist" />
        <DisplaySongs title="Display Content" />
      </main>
    </RootLayout>
  );
};

export default Recommendation;

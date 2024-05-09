"use client";

import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import RootLayout from "@/app/layout";
import SelectSongs from "./select-songs";
import DisplaySongs from "./display-songs";
import UploadPlaylist from "./upload-playlist";
interface SearchComponentProps {
  artist_name: string;
  _id: string;
  track_name: string;
  trackId: string;
}
const Recommendation = () => {
  const [selectedItems, setSelectedItems] = useState<SearchComponentProps[]>(
    []
  );
  const [recommendedItems, setRecommendedItems] = useState<
    SearchComponentProps[]
  >([]);
  const handleSearchQueryChange = async (item: any) => {
    console.log("item", item);
    await setRecommendedItems(item);
  };
  useEffect(() => {
    const handleLocalStorageUpdated = (event: any) => {
      console.log("selectedItems update", event.detail);
      setSelectedItems(event.detail);
    };
    window.addEventListener("localStorageUpdated", handleLocalStorageUpdated);
    return () => {
      window.removeEventListener(
        "localStorageUpdated",
        handleLocalStorageUpdated
      );
    };
  }, []);
  return (
    <RootLayout>
      <div className="flex  flex-col items-start justify-evenly p-8 	space-y-10 ">
        <SelectSongs
          title="Song Selection and Recommendations"
          songsList={selectedItems}
          onGenerateRecommendations={handleSearchQueryChange}
        />
        <UploadPlaylist title="Upload Playlist" />
        <DisplaySongs
          title="Display Content"
          recommendations={recommendedItems}
        />
      </div>
    </RootLayout>
  );
};

export default Recommendation;

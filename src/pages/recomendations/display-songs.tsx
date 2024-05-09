"use client";

import Card from "@/components/Card/Card";
import React from "react";
import { useState } from "react";
interface SearchComponentProps {
  artist_name: string;
  _id: string;
  track_name: string;
  trackId: string;
}
interface DisplaySongsProps {
  /**
   * The Title of the APP
   */
  title: string;
  /**
   * Additional classes to be added to the Header
   */
  className?: string;
  recommendations?: SearchComponentProps[];
}

const DisplaySongs: React.FC<DisplaySongsProps> = ({
  title = "Display Songs",
  className = "",
  recommendations,
}) => {
  return (
    <main className="flex  ">
      <div className="flex flex-col align-baseline">
        <div className="h2   font-mono	text-xl	">{title}</div>
        <div className="flex flex-wrap">
          {recommendations?.map((item, index) => (
            <Card
              title={item.track_name}
              key={index}
              description={item.artist_name}
              className="mx-2 my-2"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DisplaySongs;

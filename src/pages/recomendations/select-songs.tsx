import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Chips from "@/components/Chips/Chips";
import { getRecommendations } from "@/api/recommendations";
interface SearchComponentProps {
  artist_name: string;
  _id: string;
  track_name: string;
  trackId: string;
}
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
  songsList?: SearchComponentProps[];
  onGenerateRecommendations?: (items: SearchComponentProps[]) => void;
}

const SelectSongs: React.FC<SelectSongProps> = ({
  title = "Song Selection and Rec",
  className = "",
  songsList = [],
  onGenerateRecommendations,
}) => {
  const [recommendations, setRecommendations] = useState<
    SearchComponentProps[]
  >([]);
  const handleClick = async () => {
    if (songsList.length > 0) {
      try {
        const result = await getRecommendations(songsList);
        const jsonArrayString = result;
        const jsonArray = JSON.parse(jsonArrayString);
        console.log("jsonArray", jsonArray);
        await setRecommendations(jsonArray);
        await onGenerateRecommendations?.(jsonArray);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };

  return (
    <>
      <div className="">
        <div className="h2 font-mono text-xl">{title}</div>
      </div>
      <div className="flex font-mono space-x-2 justify-center items-center flex-wrap">
        <div>Selected songs:</div>
        {songsList?.map((item, index) => (
          <Chips name={item.track_name} key={index} />
        ))}
        <Button className="" onClick={handleClick} variant={"primary"}>
          {" "}
          Generate
        </Button>
      </div>
    </>
  );
};

export default SelectSongs;

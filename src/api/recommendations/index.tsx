

interface geRecommendationsProps {
    /**
     * The Title of the APP
     */
    artist_name: string;
    /**
     * Additional classes to be added to the Header
     */
    _id: string;
    track_name: string;
    trackId: string;
  }


export const getSongsForSearch = async (searchInput: string): Promise<any> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_SERVICE}/search?q=${searchInput}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
  
  export const getRecommendations = async (songsBody: geRecommendationsProps[]): Promise<any> => {
    try {
      const response = await fetch((`${process.env.NEXT_PUBLIC_SEARCH_SERVICE}/recommendation`),{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(songsBody),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
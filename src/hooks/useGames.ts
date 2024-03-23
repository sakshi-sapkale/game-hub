import useData from "./useData";
import { Ganres } from "./useGenere";

export interface Platform{
    id:number,
    name:string,
    slug:string,
}
export interface Game {
    id: number;
    name: string;
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic:number
  }
 const useGames = (selectedGenre:Ganres| null, selectedPlatform:Platform| null) => useData<Game>('/games', 
 {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
},  [selectedGenre?.id, selectedPlatform?.id])

export default useGames

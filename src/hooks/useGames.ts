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
 const useGames = (selectedGenre:Ganres| null) => useData<Game>('/games', {params:{genres:selectedGenre?.id}}, [selectedGenre?.id])

export default useGames

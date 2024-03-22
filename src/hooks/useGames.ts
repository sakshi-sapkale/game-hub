import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
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
  interface GameResponse {
    count: number;
    results: Game[];
  }
 const useGames = () => {
    const [game, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] =  useState(false)
  
    useEffect(() => {
      setLoading(true)
      apiClient
        .get<GameResponse>("/games")
        .then((res) => {
          setGames(res.data.results);
          setLoading(false)
        })
        .catch((err: AxiosError) => {
          setError(err.message);
          setLoading(false)
        });
    }, []);

    return {game, error, isLoading}
}

export default useGames

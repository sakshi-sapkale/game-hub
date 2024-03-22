import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
interface Game {
    id: number;
    name: string;
  }
  interface GameResponse {
    count: number;
    results: Game[];
  }
 const useGames = () => {
    const [game, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<GameResponse>("/games")
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err: AxiosError) => {
          setError(err.message);
        });
    }, []);

    return {game, error}
}

export default useGames

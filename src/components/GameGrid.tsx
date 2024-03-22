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
export const GameGrid = () => {
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
  return (
    <>
      {error && <p>Error fetch games</p>}
      <ul>
        {game.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

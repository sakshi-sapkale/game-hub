import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { error, game } = useGames();
  return (
    <>
      {error && <p>Error fetch games</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {game.map((game) => (
          //   <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

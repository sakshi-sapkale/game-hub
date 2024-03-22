import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { error, game, isLoading } = useGames();
  const skeletonsItems = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>Error fetch games</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading && skeletonsItems.map(() => <GameCardSkeleton />)}
        {game.map((game) => (
          //   <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

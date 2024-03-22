import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { error, game } = useGames();
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

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GanresList } from "./components/GanresList";
import { useState } from "react";
import { Ganres } from "./hooks/useGenere";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  ganre: Ganres | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }} // fix column width
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GanresList
            onSelectedGanres={(ganre) => setGameQuery({ ...gameQuery, ganre })}
            selectedGanre={gameQuery.ganre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        <PlatformSelector
          setSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

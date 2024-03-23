import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GanresList } from "./components/GanresList";
import { useState } from "react";
import { Ganres } from "./hooks/useGenere";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGanres, setSelectedGanres] = useState<Ganres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            onSelectedGanres={(ganres) => setSelectedGanres(ganres)}
            selectedGanre={selectedGanres}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        <PlatformSelector
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGanres}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

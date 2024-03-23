import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GanresList } from "./components/GanresList";
import useGenres from "./hooks/useGenere";
function App() {
  const { Ganres } = useGenres();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GanresList ganres={Ganres} />
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

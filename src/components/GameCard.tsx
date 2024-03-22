import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  console.log("parent_platform" + game.parent_platforms);
  console.log("platform:" + game.parent_platforms[0]);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="zxl">{game.name}</Heading>
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

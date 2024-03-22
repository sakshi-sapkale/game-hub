import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  console.log("parent_platform" + game.parent_platforms);
  console.log("platform:" + game.parent_platforms[0]);
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="zxl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Ganres } from "../hooks/useGenere";

interface Props {
  onSelectedGanres: (ganres: Ganres) => void;
}
export const GanresList = ({ onSelectedGanres }: Props) => {
  const { error, data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List>
        {data.map((ganre) => (
          <ListItem key={ganre.id} paddingY="5px">
            <HStack>
              <Image src={ganre.image_background} boxSize="30px" />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelectedGanres(ganre)}
              >
                {ganre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

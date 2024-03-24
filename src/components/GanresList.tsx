import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Ganres } from "../hooks/useGenere";

interface Props {
  onSelectedGanres: (ganres: Ganres) => void;
  selectedGanre: Ganres | null;
}
export const GanresList = ({ selectedGanre, onSelectedGanres }: Props) => {
  const { error, data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom="7px">
        Ganres
      </Heading>
      <List>
        {data.map((ganre) => (
          <ListItem key={ganre.id} paddingY="5px">
            <HStack>
              <Image
                src={ganre.image_background}
                objectFit="cover"
                boxSize="30px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={selectedGanre?.id === ganre.id ? "bold" : "normal"}
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

import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenere";

export const GanresList = () => {
  const { error, data } = useGenres();
  return (
    <>
      {error && <span>Error fetching ganres</span>}

      <List>
        {data.map((ganre) => (
          <ListItem key={ganre.id} paddingY="5px">
            <HStack>
              <Image src={ganre.image_background} boxSize="30px" />
              <Text fontSize="lg">{ganre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

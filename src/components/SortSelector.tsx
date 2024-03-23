import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Add by relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Item1 </MenuItem>
        <MenuItem>Item1 </MenuItem>
        <MenuItem>Item1 </MenuItem>
      </MenuList>
    </Menu>
  );
};

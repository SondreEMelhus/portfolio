import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorMode
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';

export default function NavbarDropdown () {

    const { colorMode } = useColorMode();

    return (
        <Menu>
            <MenuButton as={IconButton} w={[6, 8, 12]} h={[8, 10, 12]}   icon={<HamburgerIcon />} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
            </MenuButton>
            <MenuList w={[12, 14, 16]}>
                <MenuItem>
                    <Link as={ReachLink} to='/'>Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link as={ReachLink} to='/work'>Work</Link>
                </MenuItem>
                <MenuItem>
                    <Link as={ReachLink} to='/contact'>Contact</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
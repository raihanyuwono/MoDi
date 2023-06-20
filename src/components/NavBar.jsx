import {Flex, Spacer} from '@chakra-ui/react'
import {color} from "../themes/Themes"
import NavLeft from './details/NavLeft';
import NavRight from './details/NavRight';
import Search from './details/Search';

function NavBar(){
    return (
        <Flex w={"full"} h={"4rem"}
            px={"1rem"}
            position={"sticky"}
            top={"0px"}
            alignItems={"center"}
            color={color.textIcon}
            bgColor={color.darkPrimary}>
            <NavLeft />
            <Spacer />
            <Search />
            <Spacer />
            <NavRight />
        </Flex>
    );
}

export default NavBar;
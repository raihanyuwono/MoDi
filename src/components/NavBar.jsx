import {Center, Flex, Spacer} from '@chakra-ui/react'
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
            bgColor={"#555555DD"}>
            <NavLeft />
            <Spacer />
            <Search />
            <Spacer />
            <NavRight />
        </Flex>
    );
}

export default NavBar;
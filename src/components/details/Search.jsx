import { HStack, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

function Search() {
    return (
        <InputGroup w={"45%"}>
            <InputLeftElement pointerEvents={"none"}>
                <BsSearch/>
            </InputLeftElement>
            <Input type="text" placeholder="Search"/>
        </InputGroup>
    );
}

export default Search;
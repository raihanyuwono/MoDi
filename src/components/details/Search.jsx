import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import {BsSearch, BsChevronRight} from "react-icons/bs";

function Search() {
    return (
        <InputGroup w={"45%"}>
            <InputLeftElement pointerEvents={"none"}>
                <BsSearch color="#ffffff"/>
            </InputLeftElement>
            <Input type="text" color={"#ffffff"} placeholder="Search"/>
            <InputRightElement>
                <BsChevronRight color="#ffffff"/>
            </InputRightElement>
        </InputGroup>
    );
}

export default Search;
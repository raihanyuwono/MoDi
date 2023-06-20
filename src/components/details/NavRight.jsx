import { Avatar, Flex } from "@chakra-ui/react";
import {RiNotificationLine} from "react-icons/ri"
import {BsBookmark} from "react-icons/bs"
import WriteButton from "./WriteButton";
import LoginButton from "./LoginButton";

function NavRight() {
    const isLogin = false;
    if (isLogin)
    return (
        <Flex direction={"row"} alignItems={"center"} gap={2}>
            <WriteButton />
            <BsBookmark color="#ffffff" size={"1.25rem"}/>
            <RiNotificationLine color="wh" size={"1.25rem"}/>
            <Avatar size={"sm"}/>
        </Flex>
    );
    
    return (
        <Flex direction={"row"} alignItems={"center"} gap={2}>
            <WriteButton />
            <LoginButton />
        </Flex>
    );
}

export default NavRight;
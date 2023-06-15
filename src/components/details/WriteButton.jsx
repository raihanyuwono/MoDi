import { Button } from "@chakra-ui/react";
import {RiQuillPenLine} from "react-icons/ri"

function WriteButton({isWriting = false}){

    const btnTextColor = "#FFFFFF"
    const btnColor = "#04B33E"

    return (
        <Button leftIcon={<RiQuillPenLine/>}
        variant={"outline"}
        w={"6rem"}
        color={btnTextColor}
        borderColor={btnColor}
        _hover={{bgColor: btnColor}}>
            {isWriting ? "Publish" : "Write"}
        </Button>
    );
}

export default WriteButton;
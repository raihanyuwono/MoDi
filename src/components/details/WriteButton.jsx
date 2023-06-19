import { Button } from "@chakra-ui/react";
import {RiQuillPenLine} from "react-icons/ri"
import { color } from "../../themes/Themes";

function WriteButton({isWriting = false}){

    return (
        <Button leftIcon={<RiQuillPenLine/>}
        variant={"outline"}
        color={color.textIcon}
        borderColor={color.login}
        _hover={{bgColor: color.login}}>
            {isWriting ? "Publish" : "Write"}
        </Button>
    );
}

export default WriteButton;
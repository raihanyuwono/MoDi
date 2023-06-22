import { Button } from "@chakra-ui/react";
import {RiQuillPenLine} from "react-icons/ri"

function WriteButton({isWriting = false}){

    return (
        <Button leftIcon={<RiQuillPenLine/>}
        variant={"outline"}
        color={"primaryTextIcon"}
        borderColor={"login"}
        _hover={{bgColor: "loginSecondary"}}>
            {isWriting ? "Publish" : "Write"}
        </Button>
    );
}

export default WriteButton;
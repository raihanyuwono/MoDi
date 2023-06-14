import { Button } from "@chakra-ui/react";
import {RiQuillPenLine} from "react-icons/ri"

function WriteButton({isWriting = false}){
    return (
        <Button leftIcon={<RiQuillPenLine/>}
        variant={"outline"}
        w={"6rem"}>
            {isWriting ? "Publish" : "Write"}
        </Button>
    );
}

export default WriteButton;
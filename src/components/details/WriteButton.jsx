import { Button } from "@chakra-ui/react";
import {RiQuillPenLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom";

function WriteButton({isWriting = false}){

    const navigate = useNavigate();

    return (
        <Button leftIcon={<RiQuillPenLine/>}
        variant={"outline"}
        color={"primaryTextIcon"}
        borderColor={"login"}
        onClick={() => navigate('write')}
        _hover={{bgColor: "loginSecondary"}}>
            {isWriting ? "Publish" : "Write"}
        </Button>
    );
}

export default WriteButton;
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getImage } from "../../api/UserApi";

function AvatarUser({size = 'sm'}){
    const {imgProfile} = useSelector((state) => state.auth.user);
    return (
        <Avatar size={size} src={getImage(imgProfile)}/>
    )
}

export default AvatarUser;
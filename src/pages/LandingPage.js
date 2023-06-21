import { Flex } from "@chakra-ui/react";
import CategorySidebar from "../components/CategorySidebar";
import ContainerPosts from "../components/ContainerPosts";

function LandingPage(){
    return (
        <Flex direction={"row"} w={"full"}>
            {/* <TabContents/> */}
            <CategorySidebar />
            <ContainerPosts />
        </Flex>
    )
}

export default LandingPage;
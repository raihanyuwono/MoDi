import { Grid } from "@chakra-ui/react";
import CardArticles from "./details/CardArticles";

const dummy = [
    {
        title : "Harry Potter",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci."
    },
    {
        title : "Harry Potter",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci."
    },
    {
        title : "Harry Potter",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci."
    },
    {
        title : "Harry Potter",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci."
    },
]

function ContainerPosts(){
    return (
        <Grid gap={2} w={"calc(100% - 16rem)"} templateColumns={"repeat(2, 1fr)"}>
            <CardArticles articles={dummy}/>
        </Grid>
    );
}

export default ContainerPosts;
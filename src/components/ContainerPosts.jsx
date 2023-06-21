import { Grid } from "@chakra-ui/react";
import CardArticles from "./details/CardArticles";

const dummy = [
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
    {
        title : "Harry Potter",
        img : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.",
        likes : 40,
    },
]

function ContainerPosts(){
    return (
        <Grid 
        p={3}
        gap={3} w={"calc(100% - 16rem)"} templateColumns={"repeat(2, 1fr)"}>
            <CardArticles articles={dummy}/>
        </Grid>
    );
}

export default ContainerPosts;
import { Flex, Image } from "@chakra-ui/react";

function CardArticles({articles}){
    return articles.map((item) => {
        return (
            <Flex>
                <Image src="https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"/>
            </Flex>
        )
    })
}

export default CardArticles;
import { extendTheme } from "@chakra-ui/react";

export const color = {
    darkPrimary : "#303F9F",
    lightPrimary : "#C5CAE9",
    primary : "#3F51B5",
    accent : "#448AFF",
    accentSecondary : "#101B49",
    textIcon : "#FFFFFF",
    primaryText : "#212121",
    secondaryText : "#757575",
    divider : "#BDBDBD",
    login: "#059B37",
    loginSecondary: "#06ac67",
}

export const theme = extendTheme({
    components: {
        Button: {
            baseStyle:{
                fontWeight: "semibold"
            },
            sizes: {
                md:{
                    width: "4rem",
                    height: "2.3rem",
                    fontSize: "0.75rem"
                },
                xl:{
                    width: "5.6rem",
                    height: "2.6rem",
                    fontSize: "1rem"
                }
            },
            defaultProps: {
                size: "xl"
            }
        }
    }
});
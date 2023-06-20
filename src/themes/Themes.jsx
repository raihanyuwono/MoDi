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
    fonts: {
        body: "Fira Sans, monospace",
    },
    components: {
        Button: {
            baseStyle:{
                fontWeight: "regular",
                fontFamily: "Fira Code, monospace",
            },
            sizes: {
                md:{
                    width: "4.2rem",
                    height: "2.3rem",
                    fontSize: "0.70rem",
                },
                xl:{
                    width: "5.6rem",
                    height: "2.65rem",
                    fontSize: "0.95rem",
                }
            },
            defaultProps: {
                size: "xl"
            }
        }
    }
});
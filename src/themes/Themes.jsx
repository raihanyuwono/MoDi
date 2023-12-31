import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Fira Sans, monospace',
  },
  colors: {
    darkPrimary: '#303F9F',
    lightPrimary: '#C5CAE9',
    sidebar: '#B5B8CF',
    primary: '#3F51B5',
    accent: '#448AFF',
    accentSecondary: '#1B60D8',
    primaryTextIcon: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#757575',
    card: '#D1D4E9',
    divider: '#BDBDBD',
    dividerSidebar: 'linear-gradient(to right, #B5B8CF, #777777, #B5B8CF)',
    login: '#059B37',
    loginSecondary: '#06ac67',
    inputBorder : "#C5CAE9",
  },
  components: {
    Text: {
      baseStyle: {
        color: "primaryText",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'regular',
        fontFamily: 'Fira Code, monospace',
      },
      sizes: {
        md: {
          width: '4.2rem',
          height: '2.3rem',
          fontSize: '0.70rem',
        },
        xl: {
          width: '5.6rem',
          height: '2.65rem',
          fontSize: '0.95rem',
        },
      },
      defaultProps: {
        size: 'xl',
        fontWeight: "semibold",
      },
    },
  },
});

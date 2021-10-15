import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      400: "hsl(7, 99%, 70%)",
      500: "hsl(51, 100%, 49%)",
      600: "hsl(167, 40%, 24%)",
      700: "hsl(198, 62%, 26%)",
      800: "hsl(168, 34%, 41%)",
    },
    secondary: {
      400: `hsl(212, 27%, 19%)`,
      500: `hsl(213, 9%, 39%)`,
      600: "hsl(232, 10%, 55%)",
      700: "hsl(210, 4%, 67%)",
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: "1200px",
    },
  },
  fonts: {
    body: "Barlow",
    heading: "Fraunces",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({colorScheme = "secondary"}) => ({
          backgroundColor: `${colorScheme}.50`,
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.100`,
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
});

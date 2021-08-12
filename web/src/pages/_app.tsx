import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        ></ColorModeProvider>
      }
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

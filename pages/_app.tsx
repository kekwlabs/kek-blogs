import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import Footer from "../Components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider> 
  )
}
export default MyApp;

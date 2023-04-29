import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Main from "../layouts/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ChakraProvider>
    </>
  );
}

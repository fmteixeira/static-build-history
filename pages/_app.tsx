import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "../node_modules/react-simple-tree-menu/dist/main.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    // @ts-ignore
    queryClientRef.current = new QueryClient();
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

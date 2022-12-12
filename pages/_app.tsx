import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
  );
}

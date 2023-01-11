import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { store } from "../src/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";

import "../styles/globals.scss";
import { json } from "stream/consumers";

export const queryClient = new QueryClient();
console.log(store.getState());
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistStore(store)}
        >
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

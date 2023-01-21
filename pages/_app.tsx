import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import { store } from '../src/store'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'

import '../styles/globals.scss'
import { json } from 'stream/consumers'
import Gauth from 'components/Gauth/Gauth'

export const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Gauth>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ToastContainer />
            <ReactQueryDevtools />
          </Hydrate>
        </QueryClientProvider>
      </Gauth>
    </Provider>
  )
}

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import RefreshToken from 'HOC/RefreshToken'
import InitUserState from 'HOC/InitUserState'

import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'

import { store } from '../src/store'

import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'

import '../styles/globals.scss'

export const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <RefreshToken>
            <InitUserState>
              <Component {...pageProps} />
              <ToastContainer />
            </InitUserState>
          </RefreshToken>
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

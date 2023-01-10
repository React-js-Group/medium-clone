import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { store } from '../src/store'

import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'

import '../styles/globals.scss'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette : {
    mode : "dark"
  }
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import NavBar from '@/components/NavBar'

const theme = createTheme({
  palette : {
    mode : "dark"
  }
})

const navBarPages =[
  {
    page : "Sobre",
    href : "/sobre"
  },
  {
    page: "Projects",
    href : "/projects"
  }
]

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <NavBar pages={navBarPages}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

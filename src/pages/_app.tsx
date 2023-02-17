import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from '@/components/NavBar'
import theme from '@/components/Theme'
import Background from '@/components/Background'

const navBarPages =[
  {
    page : "Sobre",
    href : "/sobre"
  },
  {
    page: "Projetos",
    href : "/projetos"
  }
]

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Background>
        <NavBar pages={navBarPages}/>
        <Component {...pageProps} />
      </Background>

    </ThemeProvider>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import {Toolbar, AppBar, Container, Typography, Box, Button } from "@mui/material"
import { AiOutlineHome } from "react-icons/ai/index.js"
import Link from 'next/link'

export default function Home() {

  const navBarPages =[
    {
      page: "about",
      href : "/about"
    }
  ]

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar>

            <AiOutlineHome 
              style={{
                width : "30px",
                height : "30px",
                marginLeft : "10px",
                marginRight : "10px"
              }}
            />

            <Typography
              variant="h5"
              fontWeight={700}
            >
              Portfolio
            </Typography>

            <Box
              style={{
                paddingLeft : "20px",
                paddingRight : "20px"
              }}
            >
              { navBarPages.map( (value) => (
                <Link href={value.href} key={value.page}>
                  <Button
                  >
                    <Typography>

                    {value.page}
                    </Typography>
                  </Button>
                </Link>
              ))}
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

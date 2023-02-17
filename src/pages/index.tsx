import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Stats from '@/components/Stats'
import Links from '@/components/Links'

import { Container, Grid, Paper, Box, Typography, List, ListItem, Button, IconButton } from "@mui/material"
import projects from '@/data/projects'

export default function Home() {


  return (
    <>
      <Container
        sx={{
          maxWidth : { md : "900px"}
        }}
      >

        <div 
          style={{
            paddingTop : "100px"
          }}
        >
          <Typography variant="h1"
            sx={{
            }}
          >
            Olá 
          </Typography>

          <Typography
            sx={{
              maxWidth : "500px"
            }}
          >
            Eu sou um estudante de programação autodidata por mais de 3 anos fascinado em criar novos projetos e soluções
          </Typography>
        </div>

        <Links/>

      </Container>

      <Stats/>
    </>
  )
}

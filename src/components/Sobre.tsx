import { Typography } from "@mui/material"

export default function Sobre(){
    return (
        <div>
            <Typography variant="h1" fontWeight={600}>
                olá
            </Typography>

            <Typography
                sx={{
                    maxWidth : "500px"
                }}
            >
                Eu sou Ryan da Costa Sousa, um estudante de programação autodidata por mais de 3 anos fascinado em criar novos projetos e soluções.
                <br/>
                <br/>
                
                comecei a programar com 14 anos, criando jogos por pura diversão desde lá visitei várias áreas da programação e várias linguagens e frameworks, aprendi Python, C++
                e Atualmente Javascript e Typescript.

            </Typography>
        </div>
    )
}
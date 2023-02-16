import Image from "next/image";
import ProjectItem from "@/components/ProjectItem";
import { ProjectItemProps } from "@/components/ProjectItem";

import { Typography, Container, Paper, Grid } from "@mui/material";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non blandit lectus. Pellentesque lacinia ultrices mollis. Aliquam vel nisl posuere, auctor ipsum non, dignissim nisi."

const projects :ProjectItemProps[]= [
    {
        projectName : "Bytethesis",
        githubLink : "https://github.com/izkeas/ByteThesis",
        imagePath : "/projects/bytethesis.png",
        siteLink : "https://bytethesis.one",
        description : "Um site blog de tecnologia voltado a programação criado com hugo framework"
    },
    {
        projectName : "ChaoticForge",
        githubLink : "https://github.com/izkeas/ChaoticForge",
        imagePath : "/projects/chaoticforge.png",
        siteLink : "https://chaoticforge.onrender.com",
        description : "Um site para escritores e jogadores de RPG que dá insights de criação de personagems, mundos e histórias."
    },
    {
        projectName : "Go Pong!",
        githubLink : "https://github.com/izkeas/Go-Pong",
        imagePath : "/projects/go-pong.png",
        description : "Jogo Pong recriado na linguagem GO com a framework Raylib"
    },
    {
        projectName : "Atlas MapGenerator",
        githubLink : "https://github.com/izkeas/Atlas-MapGenerator",
        imagePath : "/projects/MapGenerator.png",
        description : "Um programa gerador de mapas feito usando a linguagem C++, Opengl e SimplexNoise"
    }
]

export default function ProjectContainer(){



    return (
        <>
            <Container
                sx={{
                    maxWidth : {md : "1200px"},
                    paddingTop : "50px"
                }}
            >
                <Typography variant="h3" fontWeight={600}>
                    Projetos
                </Typography>

                <Grid container spacing={15}
                    sx={{
                        paddingBottom : "100px"
                    }}
                >

                    { projects.map( (proj) => (
                        <Grid item xs={6} key={proj.projectName}>
                            <ProjectItem {...proj}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
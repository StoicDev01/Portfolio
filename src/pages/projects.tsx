import Image from "next/image";
import ProjectItem from "@/components/ProjectItem";
import { ProjectItemProps } from "@/components/ProjectItem";

import { Typography, Container, Paper, Grid } from "@mui/material";

import projects from "@/data/projects";

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
import Image from "next/image";
import ProjectItem from "@/components/ProjectItem";

import { Typography, Container, Paper, Grid } from "@mui/material";

export default function ProjectContainer(){


    return (
        <>
            <Container
                sx={{
                    maxWidth : {md : "900px"},
                    paddingTop : "50px"
                }}
            >
                <Typography variant="h3" fontWeight={600}>
                    Projetos
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ProjectItem/>
                    </Grid>

                    <Grid item xs={6}>
                        <ProjectItem/>
                    </Grid>

                    <Grid item xs={6}>
                        <ProjectItem/>
                    </Grid>

                    <Grid item xs={6}>
                        <ProjectItem/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
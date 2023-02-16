import { Typography, Container, Grid } from "@mui/material"

import projects from "@/data/projects";

export default function Stats(){

    const projectCount = projects.length;

    return (
            <Grid container spacing={0}
                style={{
                    position : "absolute",
                    bottom : 30
                }}
            >
            <Grid item xs={3}>
                <div
                    style={{
                        width : "fit-content",
                        margin : "auto",
                        textAlign : "center"

                    }}
                >
                    <Typography variant="h3">
                        10
                    </Typography>

                    <Typography>
                        Projetos
                    </Typography>
                </div>
            </Grid>

            <Grid item xs={3}>
                <div
                    style={{
                        width : "fit-content",
                        margin : "auto",
                        textAlign : "center"

                    }}
                >
                    <Typography variant="h3">
                    +400
                    </Typography>

                    <Typography >
                    Commits
                    </Typography>
                </div>
            </Grid>

            <Grid item xs={3}>
                <div
                    style={{
                        width : "fit-content",
                        margin : "auto",
                        textAlign : "center"

                    }}
                >
                    <Typography variant="h3">
                    18
                    </Typography>

                    <Typography>
                    Estrelas
                    </Typography>
                </div>
            </Grid>

            <Grid item xs={3}>
                <div
                    style={{
                        width : "fit-content",
                        margin : "auto",
                        textAlign : "center"
                    }}
                >
                    <Typography variant="h3">
                    {projectCount}
                    </Typography>

                    <Typography >
                    Projetos
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}
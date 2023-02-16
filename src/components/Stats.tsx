import { Typography, Container, Grid } from "@mui/material"

export default function Stats(){
    return (
        <Container>
            <Grid container
                style={{
                    position : "absolute",
                    bottom : 30
                }}
            >
            <Grid item xs={2}>
                <Typography variant="h3">
                    10
                </Typography>

                <Typography 
                    sx={{
                        marginTop : "auto",
                        marginBottom : "14px",
                        marginLeft : "5px"
                    }}
                >
                    Projetos
                </Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="h3">
                +400
                </Typography>

                <Typography 
                sx={{
                    marginTop : "auto",
                    marginBottom : "14px",
                    marginLeft : "5px"
                }}
                >
                Commits
                </Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="h3">
                18
                </Typography>

                <Typography 
                sx={{
                    marginTop : "auto",
                    marginBottom : "14px",
                    marginLeft : "5px"
                }}
                >
                Estrelas
                </Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="h3">
                X
                </Typography>

                <Typography 
                sx={{
                    marginTop : "auto",
                    marginBottom : "14px",
                    marginLeft : "5px"
                }}
                >
                Projetos
                </Typography>
            </Grid>
        </Grid>
      </Container>
    )
}
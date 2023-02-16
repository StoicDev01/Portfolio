import { Paper, Typography } from "@mui/material";

export default function Contato(){

    return (
        <>
            <div
                style={{
                    paddingBottom : "50px"
                }}
            >
                <Typography variant="h2">
                    Contato
                </Typography>

                <Typography variant="h4">
                    <Paper
                        sx={{
                            overflow : "auto"
                        }}
                    >
                        <div style={{margin : "10px"}}>
                            izkeas@protonmail.com
                        </div>
                    </Paper>
                </Typography>
            </div>
        </>
    )
}
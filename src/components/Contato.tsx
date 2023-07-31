import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function Contato(){
    const theme = useTheme();

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
                        
                        <div 
                            style={{
                                margin : "10px",
                                color : theme.palette.primary.main
                            }}
                        >
                            ryan.costasousa01@gmail.com
                        </div>
                    </Paper>
                </Typography>
            </div>
        </>
    )
}
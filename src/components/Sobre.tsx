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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non blandit lectus. Pellentesque lacinia ultrices mollis. Aliquam vel nisl posuere, auctor ipsum non, dignissim nisi.            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non blandit lectus. Pellentesque lacinia ultrices mollis. Aliquam vel nisl posuere, auctor ipsum non, dignissim nisi.            
            </Typography>
        </div>
    )
}
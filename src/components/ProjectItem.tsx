import Image from "next/image"
import { Paper, Typography } from "@mui/material"

export default function ProjectItem(){

    function onFocus(){

    }

    return (
        <div>
            <Paper
                sx={{
                    maxWidth : "100%",
                    height : "240px",
                    overflow : "auto"
                }}
            >

                <div
                    style={{
                        width : "100%",
                        height : "100%",
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}
                >

                    {/* Size Wrapper */}
                    <div
                        style={{
                            width : "95%", height : "auto", margin : "auto",
                            boxShadow : "2px 2px 5px black", overflow : "auto", position : "relative"
                        }}
                    >

                        { /* Overlay */}
                        <div
                            style={{
                                width : "100%", height : "100%", background : "red", zIndex : 9,
                                position : "absolute", top : 0, left : 0, opacity : 0.2
                            }}
                        >

                        </div>

                        { /* Project image */}
                        <Image src="/projects/bytethesis.png" alt="bytethesis" width={1600} height={723} 
                            onFocus={ () => {}}

                            style={{
                                width : "100%", height : "100%", display : "block"
                            }}
                        />
                    </div>
                </div>

            </Paper>

            <Typography variant="h5" fontWeight={600}
                sx={{
                    marginTop : "4px"
                }}
            >
                Project Name
            </Typography>
        </div>
    )
}
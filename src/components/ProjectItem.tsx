import React from "react";
import Link from "next/link";
import Shadow from "./Shadow";
import Image from "next/image"

import { Paper, Typography } from "@mui/material"
import { TbWorld} from "react-icons/tb/index.js"
import NeonSelect from "./NeonSelect";
import {useTheme} from "@mui/material";

export interface ProjectItemProps {
    projectName : string;
    githubLink : string;
    siteLink? : string;
    imagePath : string;
    description : string;
}

export default function ProjectItem(props : ProjectItemProps){

    const [ mouseOverlayHover, setMouseOverlayHover] = React.useState(false);
    const theme = useTheme();

    return (
        <div>
            <Shadow>
                <Paper
                    sx={{
                        maxWidth : "100%",
                        overflow : "auto",
                        boxSizing : "border-box"
                    }}
                >
                    {/* Size Wrapper */}
                    <div
                        style={{
                            position : "relative", margin : "10px", height : "90%",
                        }}
                    >
                        { /* Overlay */}
                        <div
                            style={{
                                width : "100%", height : "100%", background : "white", zIndex : 9,
                                position : "absolute", top : 0, left : 0,
                                backgroundColor : mouseOverlayHover ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.0)",
                                transitionProperty : "background-color",
                                transitionDuration : "0.5s",
                            }}

                            onMouseEnter={ () => {setMouseOverlayHover(true)}}
                            onMouseLeave={() =>  {setMouseOverlayHover(false)}}
                        >
                            { /* Project Links */}
                            <div 
                                style={{
                                    display : "flex",
                                    justifyContent : "center",
                                    alignItems : "center",
                                    height : "100%",
                                    gap : "10px"
                                }}
                            >
                                {/* Github link */}
                                <a href={props.githubLink} target={"_blank"} rel="noReferrer">
                                    <Image src="/icons/github.png" alt="Github repo" width={512} height={512}
                                        style={{
                                            width : "40px", height : "40px",
                                            transitionDuration : "0.5s", transitionProperty : "opacity",
                                            opacity : mouseOverlayHover ? 1.0 : 0.0
                                        }}
                                    />
                                </a>

                                {/* Site Link */}
                                { props.siteLink && (
                                    <a href={props.siteLink} target={"_blank"} rel="noReferrer">
                                        <TbWorld
                                            style={{
                                                width : "40px", height : "40px",
                                                color : "black",
                                                transitionDuration : "0.5s", transitionProperty : "opacity",
                                                opacity : mouseOverlayHover ? 1.0 : 0.0
                                            }}
                                        />
                                    </a>
                                )}

                            </div>
                        </div>

                        { /* Project image */}
                        <Image src={props.imagePath} alt="bytethesis" width={1600} height={700} 

                            style={{
                                outlineStyle : mouseOverlayHover ? "solid" : "none",
                                outlineColor : theme.palette.primary.main,
                                width : "100%", height : "auto", display : "block"
                            }}
                        />
                    </div>
                </Paper>
            </Shadow>
            
            { /* Project Name */}
            <Typography variant="h5" fontWeight={600}
                sx={{
                    paddingTop : "15px"
                }}
            >
                {props.projectName}
            </Typography>

            <Typography>
                {props.description}            
            </Typography>
        </div>
    )
}
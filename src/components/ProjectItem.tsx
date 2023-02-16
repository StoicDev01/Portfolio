import Image from "next/image"
import { Paper, Typography } from "@mui/material"
import React from "react";
import { TbWorld} from "react-icons/tb/index.js"
import Link from "next/link";

export interface ProjectItemProps {
    projectName : string;
    githubLink : string;
    siteLink? : string;
    imagePath : string;
    description : string;
}

export default function ProjectItem(props : ProjectItemProps){

    const [ mouseOverlayHover, setMouseOverlayHover] = React.useState(false);

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
                        overflow : "auto"
                    }}
                >

                    {/* Size Wrapper */}
                    <div
                        style={{
                            width : "100%", height : "auto", margin : "10px",
                            boxShadow : "2px 2px 5px black", overflow : "auto", position : "relative"
                        }}
                    >

                        { /* Overlay */}
                        <div
                            style={{
                                width : "100%", height : "100%", background : "white", zIndex : 9,
                                position : "absolute", top : 0, left : 0, opacity : mouseOverlayHover ? 0.2 : 0.0,
                                transitionProperty : "opacity",
                                transitionDuration : "0.5s"
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
                                            width : "40px", height : "40px"
                                        }}
                                    />
                                </a>

                                {/* Site Link */}
                                { props.siteLink && (
                                    <a href={props.siteLink} target={"_blank"} rel="noReferrer">
                                        <TbWorld
                                            style={{
                                                width : "40px", height : "40px",
                                                opacity : "1.0",
                                                color : "black"
                                            }}
                                        />
                                    </a>
                                )}

                            </div>
                        </div>

                        { /* Project image */}
                        <Image src={props.imagePath} alt="bytethesis" width={1600} height={723} 
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
                    paddingTop : "8px"
                }}
            >
                {props.projectName}
            </Typography>

            <Typography
                sx={{
                    paddingTop : "4px"
                }}
            >
                {props.description}            
            </Typography>
        </div>
    )
}
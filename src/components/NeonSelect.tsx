import { useTheme } from "@mui/material"
import React from "react"

interface Props {
    children : React.ReactNode
}

export default function NeonSelect(props : Props){
    const [ hover, setHover ] = React.useState(false);

    const theme = useTheme();

    return (
        <div
            onMouseEnter={ () => { setHover(true)}}
            onMouseLeave={ () => { setHover(false)}}

            style={{
                outlineStyle : hover ? "solid" : "none",
                outlineColor : theme.palette.primary.main,
            }}
        >

            {props.children}

        </div>
    )
}
import {Toolbar, Typography, Box, Button, useTheme } from "@mui/material"
import { BiMenu } from "react-icons/bi/index.js"
import { BsCodeSlash} from "react-icons/bs/index.js"
import Link from 'next/link'
import MenuPanel from "./MenuPanel";
import React from "react"

interface Props{
    pages? : { page : string, href: string} [ ],
    onclickMenu? : () => void;
}

export default function NavBar(props : Props){
    const theme = useTheme();

    const [ menuPanelActive, setMenuPanelActive] = React.useState(false);

    return(
        <div>
            <MenuPanel pages={props.pages} active={menuPanelActive} onClose={() => setMenuPanelActive(false)}/>

            <Toolbar>

                <Link href="/">
                    <BsCodeSlash
                        style={{
                            width : "30px",
                            height : "30px",
                            marginLeft : "10px",
                            marginRight : "10px",
                            color : theme.palette.primary.main
                        }}
                        />
                </Link> 

                <Link href="/"> 
                    <Typography
                        variant="h3"
                        fontWeight={700}

                        sx={{
                        }}
                    >
                        Ryan C. Sousa
                    </Typography>
                </Link> 

                { /* Medium Screens */}
                <Box
                    sx={{
                        paddingLeft : "60px",
                        display : { xs : "none", md : "flex"}
                    }}
                >
                    <nav>
                        { props.pages && props.pages.map( (value) => (
                            <Link href={value.href} key={value.page}>
                            <Button
                            >
                                <Typography fontWeight={600}>

                                {value.page}
                                </Typography>
                            </Button>
                            </Link>
                        ))}
                    </nav>
                </Box>

                { /* Small Screens */}
                <Box
                    sx={{
                        display : {xs : "flex", md : "none"},
                        marginLeft : "auto",
                        marginRight : 0
                    }}
                >
                    <Button
                        style={{
                            display : menuPanelActive ? "none" : "block"
                        }}
                        onClick={ () => setMenuPanelActive( !menuPanelActive ) }
                    >
                        <BiMenu
                            style={{
                                height : "30px",
                                width : "auto"
                            }}
                        />
                    </Button>
                </Box>
            
            </Toolbar>
        </div>
    )
}
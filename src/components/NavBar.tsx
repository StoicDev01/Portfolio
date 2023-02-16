import {Toolbar, AppBar, Container, Typography, Box, Button } from "@mui/material"
import { AiOutlineHome } from "react-icons/ai/index.js"
import { BiMenu } from "react-icons/bi/index.js"
import Link from 'next/link'

interface Props{
    pages? : { page : string, href: string} [ ],
    onclickMenu? : () => void;
}

export default function NavBar(props : Props){
    return(
        <div>
            <Toolbar>

                <Link href="/">
                    <AiOutlineHome 
                        style={{
                            width : "30px",
                            height : "30px",
                            marginLeft : "10px",
                            marginRight : "10px"
                        }}
                        />
                </Link> 

                <Link href="/"> 
                    <Typography
                        variant="h5"
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
                        paddingLeft : "20px",
                        paddingRight : "20px",
                        display : { xs : "none", md : "flex"}

                    }}
                >
                    <nav>
                        { props.pages && props.pages.map( (value) => (
                            <Link href={value.href} key={value.page}>
                            <Button
                            >
                                <Typography>

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
                        onClick={ () => props.onclickMenu ? props.onclickMenu() : 0 }
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
import { useTheme, Button, Box, Typography } from "@mui/material"
import { AiOutlineClose} from "react-icons/ai/index.js"
import Link from "next/link"
import { motion } from "framer-motion"

interface Props {
    pages? : { page : string, href: string} [ ],
    active? : boolean,
    onClose : () => void;
}

export default function MenuPanel(props : Props){

    const theme = useTheme();

    return (
        <div
            style={{
                position : "absolute",
                top : 0,
                right : 0,
                width : "300px",
                height : "100%",
                background : "rgba(0,0,0, 80%)",
                zIndex : 10,
                display : props.active ? "block" : "none"
            }}
        >

            <Box
                sx={{
                    marginLeft : "auto",
                    marginRight : "15px",
                    width : "fit-content",
                    marginTop : "10px"
                }}
            >
                <Button 
                    onClick={ () => props.onClose() }
                >
                    <AiOutlineClose
                        style={{
                            height : "30px",
                            width : "auto"
                        }}
                    />
                </Button>
            </Box>

            <Box
                sx={{
                    marginTop : "20px",
                    display : "block",
                    textAlign : "center"
                }}
            >

                <div key="Home">
                    <Link href={"/"} >
                        <Button onClick={ () => props.onClose()}>
                            <Typography fontWeight={600}>
                            Home
                            </Typography>
                        </Button>
                    </Link>
                </div>

                { props.pages && props.pages.map( (page) => (
                    <div key={page.page}>
                        <Link href={page.href} >
                            <Button onClick={ () => props.onClose()}>
                                <Typography fontWeight={600}>

                                {page.page}
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                ))}
            </Box>

        </div>
    )
}
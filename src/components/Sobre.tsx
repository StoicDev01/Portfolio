import { Typography, useTheme } from "@mui/material"
import Link from "next/link"

export default function Sobre(){

    const theme = useTheme();

    return (
        <div>
            <Typography variant="h1" fontWeight={600}>
                olá
            </Typography>

            <Typography
                sx={{
                }}
            >
                Me chamo Ryan, sou um desenvolvedor FullStack fascinado em criar novos projetos e soluções. Atualmente curso análise e desenvolvimento de sistemas na FAM e faço bootcamps. Tenho projetos e
                <Link target="_blank" href={"https://www.hackerrank.com/izkeas?hr_r=1"}
                    style={{
                        color : theme.palette.primary.main
                    }}
                    >
                    &nbsp;certificados do HackerRank.
                </Link> 

                <br/>
                <br/>
            </Typography>
        </div>
    )
}
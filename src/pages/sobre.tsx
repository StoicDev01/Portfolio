import Skills from "@/components/Skills"
import SobreComponent from "@/components/Sobre"
import { Typography, Container, Stack } from "@mui/material"

export default function Sobre(){

    return (
    <>
        <Container
            sx={{
                maxWidth : { md : "900px"}
            }}
        >
            <Stack spacing={4}>
                <SobreComponent/>
                <Skills/>
            </Stack>
        </Container>
    </>
    )
}
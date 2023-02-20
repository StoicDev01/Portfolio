import { Typography, Container, Grid } from "@mui/material"

import projects from "@/data/projects";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, MutableRefObject, Dispatch, SetStateAction } from "react";

function statCounterInterval(ref : MutableRefObject<number>, max : number, set : Dispatch<SetStateAction<number>>, delay : number){
    const interval = setInterval( () => {
        if ( ref.current != undefined){
            if (ref.current === max){
                clearInterval(delay);
            }
            else{
                set(ref.current + 1);
            }
        }
    }, delay)

    return delay
}

function StatAnimation(props : {children : React.ReactNode} ){
    return (
        <motion.div
            animate={{ y : -0}}
            style={{
                y : 100
            }}
        >
            {props.children}
        </motion.div>
    )
}

export default function Stats(){

    const maxProjects = projects.length;
    const [projectCount, setProjectCount] = useState<number>(0);
    const projectRef = useRef<number>(0);

    const a = useState(null)

    const maxCommits = 400;
    const [ commits, setCommits] = useState<number>(0);
    const commitsRef = useRef<number>(0);

    const maxStars = 18;
    const [starsCount, setStarsCount] = useState<number>(0);
    const starsRef = useRef<number>(0);

    commitsRef.current = commits;
    projectRef.current = projectCount;
    starsRef.current = starsCount;


    useEffect( ()=> {
        const commitsInterval = statCounterInterval(commitsRef, maxCommits, setCommits, 8);
        const projectsInterval = statCounterInterval(projectRef, maxProjects, setProjectCount, 100);
        const starsInterval = statCounterInterval(starsRef, maxStars, setStarsCount, 100);

        return () => {clearInterval(commitsInterval); clearInterval(projectsInterval); clearInterval(starsInterval)}
    }, [])

    return (
        <Grid container spacing={0}
            style={{
                position : "absolute",
                bottom : 30
            }}
        >

            <Grid item xs={3}>
                <StatAnimation>
                    <div
                        style={{
                            width : "fit-content",
                            margin : "auto",
                            textAlign : "center",
                        }}
                    >
                        <Typography variant="h3" color={"primary.main"} fontWeight={600}>
                            +{commits}
                        </Typography>

                        <Typography >
                        Commits
                        </Typography>
                    </div>
                </StatAnimation>
            </Grid>

            <Grid item xs={3}>
                <StatAnimation>
                    <div
                        style={{
                            width : "fit-content",
                            margin : "auto",
                            textAlign : "center"

                        }}
                    >
                        <Typography variant="h3" color={"primary.main"}  fontWeight={600}> 
                        {starsCount}
                        </Typography>

                        <Typography>
                        Estrelas
                        </Typography>
                    </div>
                </StatAnimation>
            </Grid>

            <Grid item xs={3}>
                <StatAnimation>
                    <div
                        style={{
                            width : "fit-content",
                            margin : "auto",
                            textAlign : "center"
                        }}
                    >
                        <Typography variant="h3" color={"primary.main"} fontWeight={600}>
                        {projectCount}
                        </Typography>

                        <Typography >
                        Projetos
                        </Typography>
                    </div>
                </StatAnimation>
            </Grid>
    </Grid>
    )
}
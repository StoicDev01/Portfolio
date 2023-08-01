import Image from "next/image"
import { Typography, Grid, Button, Paper } from "@mui/material"

export default function Skills(){
    return (
        <div
        >

          <Typography variant="h2">
            Skills
          </Typography>

          <Grid container spacing={0}>
            <Grid item>
              <Button>
                <Image src="/icons/javascript.png" alt="javascript" width={40} height={40}/>
              </Button>
            </Grid>

            <Grid item >
              <Button>
                <Image src="/icons/typescript.png" alt="typescript" width={40} height={40}/>
              </Button>
            </Grid>

            <Grid item>
              <Button>
                <Image src="/icons/react.png" alt="react" width={40} height={40}/>
              </Button>
            </Grid>

            <Grid item>
              <Button>
                <Image src="/icons/nodejs.png" alt="nodejs" width={40} height={40}/>
              </Button>
            </Grid>

            <Grid item >
              <Button>
                <Image src="/icons/c++.png" alt="c++" width={40} height={40}/>
              </Button>
            </Grid>

            <Grid item >
              <Button>
                <Image src="/icons/nextjs.png" alt="nextjs" width={40} height={40}/>
              </Button>
            </Grid>



          </Grid>
        </div>
    )
}
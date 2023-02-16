import Image from "next/image"
import { Grid, Button } from "@mui/material"

export default function Links(){
    return (
        <Grid container spacing={0.5}
            sx={{
            paddingTop : "2px"
            }}
        >
          <Grid item>
            <a href="https://github.com/izkeas" target={"_blank"} rel={"noReferrer"}>
              <Button
                sx={{
                  maxWidth : "35px",
                  maxHeight: "35px",
                  minWidth : "35px",
                  minHeight: "35px"
                }}
              >
                <Image src="/icons/github.png" width={30} height={30} alt="github" style={{
                  background : "white",
                  borderRadius : "4px"
                }}/>
              </Button>
            </a>
          </Grid>

          <Grid item>
            <a href="https://www.linkedin.com/in/ryan-da-costa-sousa-6b1009224/" target={"_blank"} rel={"noReferrer"}>
              <Button
                sx={{
                  maxWidth : "35px",
                  maxHeight: "35px",
                  minWidth : "35px",
                  minHeight: "35px"
                }}
              >
                <Image src="/icons/linkedin.png" width={30} height={30} alt="linkedin"/>
              </Button>
            </a>
          </Grid>

          <Grid item>
            <a href="https://bytethesis.one" target="_blank" rel="noReferrer">
                <Button
                
                  sx={{
                    maxWidth : "35px",
                    maxHeight: "35px",
                    minWidth : "35px",
                    minHeight: "35px"
                  }}
                >
                  <Image src="/icons/bytethesis.png" width={30} height={30} alt="blog"
                    style={{
                      borderRadius : "4px"
                    }}
                  />
                </Button>
            </a>
          </Grid>

      </Grid>
    )
}
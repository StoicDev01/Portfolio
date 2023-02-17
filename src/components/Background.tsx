import { useTheme } from "@mui/material";

export default function Background(props : { children : React.ReactNode}){
    const theme = useTheme();
  
    return ( 
      <div id="background"
        style={{
          background: `linear-gradient(152deg, rgba(21,23,23,1) 40%,  rgba(38,52,52,1) 80%);`,
          minWidth : "100vw",
          minHeight : "100vh",
          width : "100%",
          height : "100%"
        }}
      >
        {props.children}
      </div>
    )
  }
  
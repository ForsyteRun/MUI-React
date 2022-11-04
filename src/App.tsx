import React, { FC } from "react";
import { Box } from "@mui/material";
import { MuiTypograthy } from "./components/MuiTypograthy";

export const App: FC = React.memo(() => {
  return (
    <div>
        <MuiTypograthy/>
    </div>
  // <Box
  // sx={{
  //   height: '100vh',
  //   width: {
  //     xs: 320, 
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536
  //   },
  //   bgcolor: 'secondary.main',
  //   margin: '0 auto'
  // }}
  // ></Box>
  )
});

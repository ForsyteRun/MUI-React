import React, { FC } from "react";
import { Box } from "@mui/material";
import { MuiTypograthy } from "./components/MuiTypograthy";
import { MuiButton } from "./components/MuiButton";
import { MuiForm } from "./components/MuiForm";

export const App: FC = React.memo(() => {
  return (
    <div>
        <MuiTypograthy/>
        <MuiButton/>
        <MuiForm/>
    </div>
  )
});

import React, { useState } from "react";
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export const MuiButton = () => {
const [format, setFormat] = useState<Array<string>>([])

const  handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
  setFormat(updatedFormats)
}

  return (
    <Stack display="block" direction="row" spacing={3}>
      <Button variant="text" href="htttp://google.com">
        Text
      </Button>
      <Button variant="contained" color="primary">
        Cont
      </Button>
      <Button variant="contained" color="secondary">
        Cont
      </Button>
      <Button variant="contained" color="warning">
        Cont
      </Button>
      <Button variant="contained" color="error" size="small">
        Cont
      </Button>
      <Button variant="contained" color="info" size="medium">
        Cont
      </Button>
      <Button variant="contained" color="success" size="large">
        Cont
      </Button>
      <Button variant="outlined">Out</Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        startIcon={<CallIcon />}
        disableElevation
        disableRipple
      >
        Cont
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        endIcon={<CallIcon />}
      >
        Cont
      </Button>
      <IconButton aria-label="send">
        <CallIcon />
      </IconButton>
      <ButtonGroup aria-label='alignment button group' variant="text" orientation="vertical">
        <Button color="error">
        Cont
        </Button>
        <Button color="info" size="medium">
          Cont
        </Button>
        <Button color="success" size="large">
          Cont
        </Button>
      </ButtonGroup>
      <Stack direction='row'>
        <ToggleButtonGroup area-label='text formatting' value={format} onChange={handleFormatChange}>
          <ToggleButton value='bold' area-label='bolf'><CallIcon/></ToggleButton>
          <ToggleButton value='italic' area-label='italic'><AccessAlarmIcon/></ToggleButton>
          <ToggleButton value='underlined' area-label='underlined'><AccessibilityIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

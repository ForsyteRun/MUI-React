import {
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const MuiForm = () => {
  const [sountry, setCountry] = useState<string>("");
  const [value, setValue] = useState<number | null>(null);
  console.log(sountry);

  const handleSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box>xs=8</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>xs=4</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>xs=4</Box>
        </Grid>
        <Grid item xs={8}>
          <Box>xs=8</Box>
        </Grid>
      </Grid>
      <Stack spacing={4}>
        <Box
          component="span"
          sx={{
            backgroundColor: "green",
            width: "200px",
            height: "50px",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          13
        </Box>
        <Stack spacing={5}>
          <Typography component="legend">Controlled</Typography>
          <Rating
            precision={0.5}
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Stack>
        <Stack spacing={4} sx={{ width: "250px", m: "20px" }}>
          <TextField
            value={sountry}
            onChange={handleSet}
            error={!sountry}
            color={sountry ? "primary" : "error"}
            id="outlined-error-helper-text"
            label="Name"
            defaultValue="Hello World"
            helperText={sountry ? "" : "inccorect"}
          />
          <TextField
            label="name"
            variant="outlined"
            color="secondary"
            required
            helperText="vjhvjhvjjyhv"
          />
          <TextField label="name" variant="standard" />
          <TextField label="select" select value={sountry} onChange={handleSet}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Stack>
      </Stack>
    </>
  );
};

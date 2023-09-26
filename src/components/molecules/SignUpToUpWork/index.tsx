"use client";

import React, { useState } from "react";
import {
  Box, FormControl, InputLabel, InputAdornment,
  IconButton, OutlinedInput, MenuItem, ListItemText,
  Checkbox, FormControlLabel, Button, TextField
} from "@mui/material";
import { BigHeading, SmallText, SmallText2 } from "@/components/atoms/typography";
import { StyleMainSignUpToUpWork } from "./style";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { theme } from "@/styles/theme";


// for filed password
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Algeria',
  'Anguilla',
  'Palestinian Territories',
  'Paname',
  'Egypt',
  'Qutr',
  'Morooco',
  'Hong kong',
];




const SignUpToUpWork = () => {
  // for filed password
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  //  for filed select

  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <StyleMainSignUpToUpWork>


      <Box className="box__style" sx={{}}>
        <BigHeading className="main__heading">Sign up to find work you love</BigHeading>

        <FormControl className="signup__from__control" >
        {/* variant="outlined" */}
          <div className="contain__full__name"  >

            <TextField id="outlined-basic" variant="outlined" placeholder="First Name" className="input__signup inp__first" />
            <TextField id="outlined-basic" className="input__signup inp__secound" variant="outlined" placeholder="Last Name" />


          </div>

          <TextField id="outlined-basic" variant="outlined" placeholder="Email" className="input__signup inp__email" />


          <FormControl sx={{ width: '100%' }} variant="outlined">
            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}

            <OutlinedInput
              id="outlined-adornment-password"
              className="input__signup inp__password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            // label="Password"
            />
          </FormControl>


          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            className="input__signup inp__select"


            // multiple
            value={personName}
            onChange={handleChange}

            input={<OutlinedInput />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}

          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>

          <FormControlLabel control={<Checkbox defaultChecked className="sginup__chexkbox" />} label={<SmallText>Send me helpful emails to find rewarding work and job leads.</SmallText>} />


          <FormControlLabel control={<Checkbox className="sginup__chexkbox chec__2" />} label={<SmallText>Yes, I understand and agree to the <span className="for__color__words__green">Upwork
            Terms of Service</span> , including the <span className="for__color__words__green">User Agreement</span> and<br /> <span className="for__color__words__green">Privacy Policy</span> .</SmallText>} />

          <Button className='btn__with__create' variant="contained"  >Create my account</Button>

          <SmallText2 className="span__text">Alrady have an account? <span className="for__color__words__green">Log In</span></SmallText2>

        </FormControl>
      </Box>

    </StyleMainSignUpToUpWork>
  );
};

export default SignUpToUpWork;

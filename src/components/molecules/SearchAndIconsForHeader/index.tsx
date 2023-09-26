'use client'

import React, { useState } from 'react'

import { Avatar, Box, InputAdornment, MenuItem, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { QuestionMark, Search } from "@mui/icons-material";

import Select, { SelectChangeEvent } from '@mui/material/Select';

import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { StyleMainSearchAndIconsForHeader } from './style';



const SearchAndIconsForHeader = () => {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };




  return (
    <StyleMainSearchAndIconsForHeader>
      <Box className="contain_textfield__contain">

        <div className="contain__select__serch">
          <TextField
            id="outlined-basic"
            className='field__field'
            variant="outlined"
            placeholder="search"
            InputProps={{
              startAdornment: <InputAdornment position="start" ><Search /></InputAdornment>,
            }}
          />

          <Select
            labelId="demo-simple-select-label"
            className="select__for__search"
            id="demo-simple-select"
            value={age}
            // label="Age"
            placeholder="nonono"
            onChange={handleChange}
          >
            <MenuItem value={10}>Jobs </MenuItem>
            <MenuItem value={20}>Talent</MenuItem>
            <MenuItem value={30}>Prohects</MenuItem>
          </Select>

        </div>


        <QuestionMark />
        <Image src={"assets/images/homeJops/sendUp.svg"} alt="sendUp" width={24} height={24} />
        <Badge color="error" variant="dot">
          <NotificationsIcon />
        </Badge>
        <Stack direction="row" spacing={2}>
          
        <Avatar
                alt="Hazem Badran"
                src="/assets/images/profile/hhh.jpg"
                sx={{ width: 40, height: 40 }}
              />
        </Stack>

      </Box>
    </StyleMainSearchAndIconsForHeader>
  )
}

export default SearchAndIconsForHeader;
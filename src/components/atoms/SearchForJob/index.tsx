'use client'

import React from 'react'
import { StyleMainSearchForJob } from './style'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchForJob = () => {
  return (

    <StyleMainSearchForJob>
      <Box>
        <TextField 
          id="outlined-basic"
          className='input__search__jop'
          // label="Outlined"
          placeholder='Searh for job'
          variant="outlined"
        />
        <IconButton  size="medium" className='icon__btn__mui' >
          <SearchIcon fontSize="inherit" />
        </IconButton>

      </Box>
    </StyleMainSearchForJob>
  )
}

export default SearchForJob
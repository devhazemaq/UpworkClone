'use client'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import { Box, Button } from '@mui/material'
import { BigHeading } from '@/components/atoms/typography';
import { StyleMainLogInToUpWork } from './style';
import PersonIcon from '@mui/icons-material/Person';
import OrSapatate from '@/components/atoms/OrSapatate';

const LogInToUpWork = () => {
  return (
    <StyleMainLogInToUpWork >
      <Box className="box__style" sx={{  }}>

        <BigHeading>Log in to Upwork</BigHeading>

        <FormControl className='from__control' variant="outlined" >
          <OutlinedInput className='input__login'
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment position="start"><PersonIcon /> </InputAdornment>}
            placeholder="Username or Email"
          />

          <Button className='btn__with__email' variant="contained"  >Continue with Email</Button>

          <div className="or__sapatate">
            < OrSapatate  textOr= "Don't have an Upwork account?"   />
          </div>

          <Button variant="outlined" className='btn__signup'>Sign Up</Button>

        </FormControl>
      </Box>
    </StyleMainLogInToUpWork>

  )
}

export default LogInToUpWork
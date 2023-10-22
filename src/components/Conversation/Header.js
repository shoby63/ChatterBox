import { Box, IconButton, Stack, Typography,Avatar,Divider} from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import {faker} from '@faker-js/faker';
import StyledBadge from '../StyledBadge';
import React from 'react'
import {useTheme} from '@mui/material/styles'
//import { d } from '../../redux/store';
import {toggleSidebar} from '../../redux/slices/app'
import {useDispatch} from 'react-redux'
const Header = () => {
    const theme =useTheme();
    const dispatch=useDispatch();
  return (
    <Box
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack 
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          sx={{ width: "100%" ,height:"100%"}}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}
            onClick={()=>{
              dispatch(toggleSidebar());
            }}
           >
            <Box
              sx={{ display: "flex", justifyContent: "space-around" }}
              gap={2}
              p={3}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                ></Avatar>
              </StyledBadge>
              <Stack spacing={0.2}>
                <Typography variant="h5">{faker.name.fullName()}</Typography>
                <Typography variant="caption">Online</Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            gap={2}
          >
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Header
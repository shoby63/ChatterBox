import { Divider, IconButton,Box, Stack, Typography, useTheme, Avatar } from '@mui/material'
import { Article, Bell, CaretLeft, ClipboardText, Image, Key, Lock, PencilCircle, WarningCircle } from 'phosphor-react'
import settings from '../../public/Assets/settings.svg'
import React from 'react'
import { faker } from '@faker-js/faker'
import Shortcuts from '../../sections/settings/sections/Shortcuts'

const Settings = () => {
    const theme =useTheme();
    const [open,setOpen]=React.useState(false);
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <Stack direction={"row"} sx={{width:"100%"}}>
        {/* LeftPanel */}
    <Box sx={{
        width:320,
        backgroundColor:theme.palette.mode==="light"?"#f8faff":theme.palette.background,
        position:"relative",
        height:"100vh",
        boxShadow:"0px 0px 2px rgba(0,0,0,0.5)",
        overflowY:"scroll"
    }}>
        
       <Stack spacing={3} m={3} direction={"row"} alignItems={"center"}>
        <IconButton>
            <CaretLeft />
        </IconButton>
            <Typography variant='h3'>Settings</Typography> 
       </Stack>
       <Stack direction={"row"} alignItems={"center"} spacing={1} m={1} justifyContent={"space-evenly"}>
           <Avatar src={faker.image.avatar()}/>
           <Stack>
            <Typography variant='h4'>
                {faker.name.fullName()}
            </Typography>
            <Typography variant='subtitle'>
                Exploring
            </Typography>

           </Stack>
        </Stack>
       <Stack spacing={1} p={2}>
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}} >
            <IconButton>
              <Bell />
            </IconButton>
            <Typography>
                  Notifications
            </Typography>
            </Stack><Divider />
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
                <Lock />
            </IconButton>
            <Typography>
               Privacy
            </Typography>
            </Stack><Divider />
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
                 <Key />
            </IconButton>
            <Typography>
                   Security
            </Typography>
            </Stack><Divider />
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
                   <PencilCircle />
            </IconButton>
            <Typography>
                  Theme
            </Typography>
            </Stack><Divider />
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
                  <Image />
            </IconButton>
            <Typography>
                 Chat Wallpaper
            </Typography>
            </Stack><Divider />
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
               <ClipboardText />
            </IconButton>
            <Typography>
                      Request Account Info
            </Typography>
            </Stack><Divider />
            <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}} onClick={()=>{
                setOpen(true);
            }}>
            <IconButton>
               <Article />
            </IconButton>
            <Typography>
                     Keyboard Shortcuts
            </Typography>
            </Stack>
            <Divider />
            <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor:"pointer"}}>
            <IconButton>
               <WarningCircle />
            </IconButton>
            <Typography>
                     Help
            </Typography>
            </Stack>  
         </Stack>
    </Box>
    {/* RightPanel */}
    <Box sx={{
        width:"1000px",
        backgroundColor:theme.palette.mode?"fff":theme.palette.background,
        position:"relative",
        maxWidth:"1200px"
    }}>
       <Stack sx={{top:"40%",background:'##fff',position:"absolute",left:"40%",width:"250px",height:"250px"}}> 
        <img src={settings} alt='settings' width={"200px"} height={"200px"} style={{margin:"auto"}} ></img>
        <Typography variant='subtitle' fontWeight={800} fontSize={"small"}>
            Select a conversation or start a <a href='/app'>new one</a>
        </Typography>
       </Stack>
    </Box>
    <Shortcuts open={open} handleClose={handleClose} />
    </Stack>
  )
}

export default Settings
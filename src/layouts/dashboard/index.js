import { Avatar, Box, Divider, Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles'
import avatar from '../../public/Assets/avatar.svg'
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
const DashboardLayout = () => {
    const theme = useTheme();
    console.log(theme)
    const [selected,setSelected]=useState(0);
    const handleClick=(idx)=>{
        setSelected(idx);
    }
    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", height: "100vh", width: 100 }} p={2}>
                <Stack sx={{ width: "100" }} direction="column" alignItems="center" spacing={3}>
                    <Box sx={{
                        backgroundColor: theme.palette.primary.dark,
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>
                        <img src={avatar} alt='avatar' />
                    </Box>
                    <Stack spacing={3} direction="column" sx={{
                        width: "max-content"
                    }} alignItems="center">
                        {Nav_Buttons.map((ele) => (selected===ele.index)?
                           ( <Box sx={{
                             backgroundColor:theme.palette.primary.main,
                             borderRadius:1.5,
                             }} p={1}><IconButton key={ele.index}
                             sx={
                                {
                                    width:"max-content"
                                }
                             }>
                                {ele.icon}
                            </IconButton>
                            </Box>
                            ):(<Box sx={{
                                backgroundColor:theme.palette.background.paper,
                                borderRadius:1.5,
                                }} p={1}><IconButton
                                onClick={()=>
                                    handleClick(ele.index)}
                                key={ele.index}
                                sx={
                                   {
                                       width:"max-content"
                                   }
                                } 
                               >
                                   {ele.icon}
                               </IconButton>
                               </Box>
                            )
                        )}
                    </Stack>
                    <Divider sx={{
                        width:"48px",}}/>
                       {selected===3?<Box sx={{
                             backgroundColor:theme.palette.primary.main,
                             borderRadius:1.5,
                             }} p={1}><IconButton key={3}
                             sx={
                                {
                                    width:"max-content",
                                    color:"#fff"
                                }
                             }>
                            <Gear/>
                            </IconButton>
                            </Box>:<IconButton
                            onClick={()=>setSelected(3)}>
                        <Gear />
                    </IconButton>
}
                </Stack>
                <Stack>
                <Avatar src={avatar}/>
                </Stack>
            </Box>
        </>
    )
}

export default DashboardLayout
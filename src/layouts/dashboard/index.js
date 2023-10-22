import { Avatar, Box, Divider, Icon, IconButton, Switch } from '@mui/material'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { useTheme,styled } from '@mui/material/styles'
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
import {faker} from '@faker-js/faker'
import NotificationsIcon from '@mui/icons-material/Notifications';
import useSettings from '../../hooks/useSettings'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
const DashboardLayout = () => {
    const theme = useTheme();
    console.log(theme)
    const [selected,setSelected]=useState(0);
    const handleClick=(idx)=>{
        setSelected(idx);
    }
    console.log(useSettings(),"jii")
    const {onToggleMode}=useSettings();
    
    const receiveNotification=()=>{
      setNotificationCount(notificationCount+1)
    }
    const [notificationCount, setNotificationCount] = useState(0);
    return (
      <Stack direction="row">
       <SideBar selected={selected}
        setSelected={setSelected}
        onToggleMode={onToggleMode}
        handleClick={handleClick}/>
      <Outlet/>
      </Stack>
    )
}

export default DashboardLayout
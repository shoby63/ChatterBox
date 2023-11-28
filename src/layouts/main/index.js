import { Container, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../public/Assets/chat.png'
const MainLayout = () => {
  return (
  <>
  <Container sx={{mt:5, maxWidth:"sm"}}>
    <Stack spacing={3}>
        <Stack sx={{width:"100%"}} direction="row"alignItems={"center"} justifyContent={"center"}>
              <img  style={{height:100,width:100}} src={Logo}/>
        </Stack>
    </Stack>
    {/* <div>Main Layout</div> */}
    <Outlet />
  </Container>
  </>
  )
}

export default MainLayout;
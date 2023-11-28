import { Box, Stack, useTheme, Typography, IconButton, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { CaretLeft } from "phosphor-react";
import { updateSidebarType } from "../redux/slices/app";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import {DocMsg,LinkMsg} from './/Conversation/MessageTypes'
import { Shared_links,Shared_docs } from "../data";
const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [crntType,setcrntType]=useState(0);
//   const isActive=crntType;
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8faff"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"} m={3}>
          <Button sx={{borderBottom:crntType===0?"5px solid #5B96F7":0,  ...(crntType === 0 ? { borderRadius: 0 } : {})}}><Typography variant="article" color={"black"} onClick={()=>{
            setcrntType(0);
          }}>Media</Typography></Button>
          <Button sx={{borderBottom:crntType===1?"5px solid #5B96F7":0,  ...(crntType === 1 ? { borderRadius: 0 } : {})}} onClick={()=>{
             setcrntType(1);
          }}><Typography variant="article" color={"black"} >Docs</Typography></Button>
          <Button sx={{borderBottom:crntType===2?"5px solid #5B96F7":0,  ...(crntType === 2 ? { borderRadius: 0 } : {})}} onClick={()=>{
            setcrntType(2);
          }}><Typography variant="article" color={"black"}>Links</Typography></Button>
        </Stack>
        <Stack
  sx={{
    height: "100%",
    position: "relative",
    flexGrow: 1,
    overflowY: "scroll",
  }}
  p={3}
  spacing={crntType===1?1:3}
>
  {(() => {
    switch (crntType) {
      case 0:
        return (
          <Grid container spacing={3} sx={{overflowX:"clip"}}>
            {[0, 1, 2, 3, 4, 5, 6].map((el) => {
              return (
                <Grid item xs={4} key={el} sx={{width:64,height:64,marginBottom:"8px"}} >
                  <img src={faker.image.avatar()}width={64} height={64} alt={faker.name.firstName()} />
                </Grid>
              );
            })}
          </Grid>
        );
      case 1:return  (<Stack spacing={2}>
        {Shared_docs.map((el)=>{
         return <DocMsg el={el}/>
        })}
     </Stack>);
      case 2:
        return (<Stack spacing={2}>
            {Shared_links.map((el)=>{
              console.log(el);
             return <LinkMsg el={el}/>
            })}
         </Stack>);
    }
  })()}
</Stack>

      </Stack>
    </Box>
  );
};

export default SharedMessages;

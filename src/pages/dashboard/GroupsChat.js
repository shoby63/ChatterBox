import { Box, IconButton, Stack ,InputBase,Badge, Button, Divider,Avatar, Typography} from "@mui/material";
import {styled, useTheme} from '@mui/material/styles'
import { ArchiveBox, CircleDashed, MagnifyingGlass, Plus } from "phosphor-react";
import { ChatList } from "../../data";
import StyledBadge from '../../components/StyledBadge'
import Search from '../../components/Search';
import CreateGroup from "../../sections/main/CreateGroup";
import React from 'react'
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
const ChatElement=({id,name,img,msg,time,online,unread})=>{
    return (
      <Box sx={{
        width:"100%",
        borderRadius:1,
        backgroundColor:"#FFFFFF",
      }} p={1.5}>
        <Stack
         direction={"row"}
         alignItems="center"
         justifyContent="space-between"
         >
          <Stack direction={"row"} spacing={2}>
         
        {online?<StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          >
          <Avatar alt="Remy Sharp" src={img} />
        </StyledBadge>: <Avatar alt="Remy Sharp" src={img} />
       }
        <Stack spacing={0.3}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption">{msg}</Typography>
        </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
              <Typography sx={{
                fontWeight:600
              }}>{time}</Typography>
              <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
  
        </Stack>
      </Box>
    )
  };
const GroupsChat = () => {
  const theme=useTheme();
  const [openBlock, setOpenBlock] = React.useState(false);

  const handleClickOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
 
  return (
    <>
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
      flexDirection="column"
      justifyContent="center"
    >
      <Stack p={1} spacing={1} sx={{height:"100vh"}}>
      <Stack
        sx={{
          width: "95%",
          height: "50px",
          borderRadius: "20px",
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        m={1}
        p={2}
      >
        <h2> Groups</h2>
        <IconButton> 
           <CircleDashed />
        </IconButton>
      </Stack>
      <Box
        sx={{
          width: "95%",
          height: "50px",
          borderRadius: "20px",
          background: "#EAF2FE",
        }}
        m={1}
      >
        <Search>
          <SearchIconWrapper>
           <MagnifyingGlass color="#709CE6"/>
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search ..." inputProps={{"aria-label":"Search"}}/>
        </Search>    
      </Box>
      <Stack spacing={1}>
        <Stack direction={"row"} alignItems={"center"} spacing={1.5} justifyContent={"space-between"}>
        <Typography variant="subtitle2">Create new Group
            </Typography>
            <IconButton onClick={()=>setOpenBlock(true)}>
              <Plus style={{
                color:theme.palette.primary.main
              }} />
            </IconButton>
        </Stack>
        <Divider/>
      </Stack>
      <Stack direction={"column"} sx={{flexGrow:1,overflowY:"scroll",height:"100%"}}>
        {/* <SimpleBarStyle></SimpleBarStyle> */}
        <Stack spacing={2}>
          <Typography variant="subtitle2" sx={{color:"#676767"}}>Pinned</Typography>
           {ChatList.filter((el)=>el.pinned).map((el)=><ChatElement {...el}/>
           )}
        </Stack>
        <Stack spacing={2}>
          <Typography variant="subtitle2" sx={{color:"#676767"}}>All Groups</Typography>
          {ChatList.filter((el)=>!el.pinned).map((el)=><ChatElement {...el}/>
           )}
        </Stack>
      </Stack>
      </Stack>
    </Box>
    {openBlock && <CreateGroup openBlock={openBlock} handleClickOpenBlock={handleClickOpenBlock} handleCloseBlock={handleCloseBlock}/>}
    </>

  )
}

export default GroupsChat;
import React from "react";
import { Box, IconButton, Stack ,InputBase,Badge, Button, Divider,Avatar, Typography} from "@mui/material";
import {styled, alpha} from '@mui/material/styles'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
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
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
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
const Chats = () => {

  
  return (
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
        <h2> Chats</h2>
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
        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
        <ArchiveBox size={24}/>
        <Button color="primary">Archive</Button>
        </Stack>
        <Divider/>
      </Stack>
      <Stack direction={"column"} sx={{flexGrow:1,overflowY:"scroll",height:"100%"}}>
        <Stack spacing={2}>
          <Typography variant="subtitle2" sx={{color:"#676767"}}>Pinned</Typography>
           {ChatList.filter((el)=>el.pinned).map((el)=><ChatElement {...el}/>
           )}
        </Stack>
        <Stack spacing={2}>
          <Typography variant="subtitle2" sx={{color:"#676767"}}>All Chats</Typography>
          {ChatList.filter((el)=>!el.pinned).map((el)=><ChatElement {...el}/>
           )}
        </Stack>
      </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;

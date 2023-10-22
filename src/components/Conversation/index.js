import React from "react";
import {
  Stack,
  Box,
  useTheme,
} from "@mui/material";
// import StyledBadge from '../../components/'
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
// import { useTheme } from '@emotion/react';

const Conversation = () => {
  const online = true;
  const theme = useTheme();

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} spacing={1}>
      {/* Chat Header */}
       <Header/>
      {/* MSg */}
      <Box sx={{ flexGrow: 1,height:"100%",overflow:"scroll"}} width={"100%"}>
      <Message/>
      </Box>      
      {/* Chat Footer */}
     <Footer/>
    </Stack>
  );
};

export default Conversation;

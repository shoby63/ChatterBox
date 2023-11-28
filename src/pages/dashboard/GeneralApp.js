import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
const GeneralApp = () => {
  console.log("jef");
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/*Chats */}
      <Chats />
      {/* Conversation */}
      <Box
        sx={{
          width: sidebar.open ? "calc(100vw - 640px)" : "calc(100vw - 320px)",
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      {/* contact */}
      {sidebar.open ? (() => {
  switch (sidebar.type) {
    case "CONTACT":
      return <Contact />;
    case "SHARED":
      return <SharedMessages />;
    case "STARRED":
      return <StarredMessages />;
    default:
      return <></>;
  }
})() : <></>}
    </Stack>
  );
};

export default GeneralApp;

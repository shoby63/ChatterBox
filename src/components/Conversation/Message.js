import { Box, Divider, Typography ,Stack} from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMessage, Timeline } from "./MessageTypes";
import { useTheme } from "@mui/material/styles";
// import { he } from '@faker-js/faker'
const Message = () => {
  const theme = useTheme();
  return (
    <Box p={3}>
    <Stack spacing={3} sx={{overflowX:"hidden"}}>
    {Chat_History.map((el,idx)=>{
        console.log(el);
            switch(el.type){
                case "divider":
                    //Timeline
                  return ( <Timeline el={el} key={idx}/> );                  
                case "msg":
                    switch(el.subtype){
                        case "img":
                            //img msg
                            return <MediaMsg el={el} key={idx}/>;
                        case "doc":
                            //doc m
                            return <DocMsg el={el} />;
                        case "link":
                            return <LinkMsg el={el}/>;
                        case "reply":
                            //reply
                            return <ReplyMsg el={el} />
                        default:
                            return <TextMessage el={el}/>;
                    }
                    break;
                default:
                   
        }})}
    </Stack>
    </Box>
  );
};

export default Message;

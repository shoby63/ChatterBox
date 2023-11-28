import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowArcRight,
  ArrowRight,
  Bell,
  CaretRight,
  Flag,
  Phone,
  Star,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar,updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Delete, Image } from "@mui/icons-material";
import AntSwitch from "./AntSwitch";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BlockDialog= ({openBlock,handleClickOpenBlock,handleCloseBlock})=>{
  return (
    <Dialog
    open={openBlock}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleCloseBlock}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseBlock}>Disagree</Button>
      <Button onClick={handleCloseBlock}>Agree</Button>
    </DialogActions>
  </Dialog>
  )
}
const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = React.useState(false);

  const handleClickOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
 
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
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25",
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack
            alignItems={"center"}
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
          >
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {"+91-6386148251"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={1}>
            <Typography variant="article"> About</Typography>
            <Typography variant="body">
              {" "}
              Hii there , I am using ChatterBox
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body">Media, links and docs</Typography>

            <Stack
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography variant="body" fontWeight={500}>
                201
              </Typography>
              <IconButton onClick={()=>{
                    dispatch(updateSidebarType("SHARED"));
              }}>
                <ArrowRight />
              </IconButton>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            spacing={3}
          >
            {[1, 2, 3].map((el, idx) => {
              return (
                <Box key={el} sx={{ width: 64, height: 64 }}>
                  <img
                    src={faker.image.avatar()}
                    alt={faker.name.firstName()}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              );
            })}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton onClick={()=>{
              dispatch(updateSidebarType("STARRED"))
            }}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle3"> 1 Group in common</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Box>
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.firstName()}
                  sx={{ height: 64, width: 64 }}
                />
              </Box>
              <Box spacing={3}>
                <Typography variant="article"> Camel's Gang</Typography>
                <br />
                <Typography variant="body"> owl, Stepha, Paul</Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-around"}>
              <Button onClick={handleClickOpenBlock}>
                <Stack
                  direction="row"
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={0.3}
                  m={1}
                >
                  <Flag />
                  <Typography color={"#5B96F7"}>Block</Typography>
                </Stack>
              </Button>
              <Button>
                <Stack direction="row" justifyContent={"center"}>
                  <Delete />
                  <Typography color={"#5B96F7"}>Delete</Typography>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;

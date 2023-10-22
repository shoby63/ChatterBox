import { DownloadDoneSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  DotsThreeCircleVertical,
  DotsThreeOutlineVertical,
  DotsThreeVertical,
  DownloadSimple,
  Image,
} from "phosphor-react";
import React from "react";
import { Message_options } from "../../data";
const DocMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"row"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
            alignContent={"center"}
          >
            <Image size={40} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: el.incoming ? theme.palette.text : "#fff",
              marginLeft: 1,
            }}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};
const LinkMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={3}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img src={el.preview} alt={el.message} style={{ maxHeight: 150 }} />
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2} p={1}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"center"}
            direction={"column"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
            justifyContent={el.incoming ? "start" : "end"}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};
const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1} justifyContent={"start"}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 150, borderRadius: "10px" }}
          />
          <Stack spacing={2}>
            <Typography variant="subtitle2">Creating Chat app</Typography>
            <Typography
              variant="subtitle2"
              component={Link}
              sx={{ color: theme.palette.primary.main }}
              to="//https://www.youtube.com"
            >
              www.youtube.com
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};
const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Divider width="46%" />
      <Typography
        variant="caption"
        sx={{ color: theme.palette.text, margin: "0 12px" }}
        letterSpacing={1}
      >
        {el.text}
      </Typography>
      <Divider width="46%" />
      <Divider />
      <MessageOptions />
    </Stack>
  );
};
const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  console.log(Message_options)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        
        <DotsThreeVertical
  size={20}
  id="basic-button"
  aria-controls={open ? "basic-menu" : undefined}
  aria-haspopup="true"
  aria-expanded={open ? "true" : undefined}
  onClick={handleClick}
/>
<Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    "aria-labelledby": "basic-button",
  }}
>
  <Stack spacing={1} px={1} sx={{ zIndex: 10 }}>
    {Message_options.map((el, idx) => (
      // You were missing the return statement here
      <MenuItem onClick={() => {}} key={idx}>
        {el.title}
      </MenuItem>
    ))}
  </Stack>
</Menu>

    </>
  );
};
const TextMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
      minHeight={"30px"}
      p={2}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      <MessageOptions />
    </Stack>
  );
};
export { DocMsg, LinkMsg, ReplyMsg, TextMessage, Timeline, MediaMsg };

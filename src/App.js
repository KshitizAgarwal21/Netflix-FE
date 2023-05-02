import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Box } from "@mui/material";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
function App() {
  const [value, setValue] = useState(30);
  const [isloggedin, setloggedinstatus] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [play, setplayback] = useState(false);
  const [videostate, setvideostate] = useState("Play");
  return (
    <div className="App">
      {!isloggedin && (
        <>
          <Home />
        </>
      )}
      {isloggedin && (
        <>
          <User />
        </>
      )}

      {/* <ReactPlayer
        url="https://www.twitch.tv/furioussscs"
        volume={value / 100}
        playing={play}
        controls={true}
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onSeek={(e) => console.log("onSeek", e)}
      ></ReactPlayer>

      <button
        onClick={() => {
          setplayback(!play);
          setvideostate(play ? "Play" : "Pause");
        }}
      >
        {videostate}
      </button>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
      </Box> */}
    </div>
  );
}

export default App;

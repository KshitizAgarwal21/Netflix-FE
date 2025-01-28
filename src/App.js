import "./App.css";


import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Components/Player/Player";
import Landing from "./Components/Landing/Landing";
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {!isloggedin && (
          <>
            <Home />
          </>
        )}
        {isloggedin && (
          <>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/player" element={<Player />}></Route>
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

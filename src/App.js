import logo from "./logo.svg";
import "./App.css";

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

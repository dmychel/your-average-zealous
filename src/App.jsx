// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components and routes
import SideNav from "./components/SideNav";
import ArtDesign from "./routes/ArtDesign";
import Elevate from "./routes/Elevate";
import SonicRedesign from "./routes/SonicRedesign";
import AlbumRedesign from "./routes/AlbumRedesign";

// styles
import "/src/styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideNav />
        <main>
          <Routes>
            <Route path="/" element={<ArtDesign />} />
            <Route path="/elevate" element={<Elevate />} />
            <Route path="/sonic-redesign" element={<SonicRedesign />} />
            <Route path="/album-redesign" element={<AlbumRedesign />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

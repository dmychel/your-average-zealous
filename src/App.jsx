import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Index from "./components/routes/Index";
import "/src/styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideNav />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

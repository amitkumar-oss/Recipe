
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ViewDetails from "./pages/ViewDetails";
import Favourite from "./pages/Favourite";
import Pagenotfound from "./pages/Pagenotfound";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/viewdetails" element={<ViewDetails />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/*" element={<Pagenotfound />} />

          </Route>
        </Routes>

      </BrowserRouter>





    </div>
  );
}

export default App;

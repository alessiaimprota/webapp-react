import "bootstrap/dist/css/bootstrap.min.css";
//importo libreria rottee
import { BrowserRouter, Routes, Route } from "react-router";

//importo layout
import DefaultLayout from "./layout/DefaultLayout";
//importo pages
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";

//Gestisco le rotte in app dove la route di defaultlayout racchiuderà le rotte di homepage e moviedetail che prenderanno il posto di outlet in base al path
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

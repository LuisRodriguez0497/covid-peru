import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/css/fonts.css";
import AcercaDeLosDesarrolladores from "./components/informacion/AcercaDeLosDesarrolladores";
import ComoHicimosLaPagina from "./components/informacion/ComoHicimosLaPagina";
import PrevenirElCovid19 from "./components/informacion/PrevenirElCovid19";
import Layout from "./layout/layout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/prevencion" element={<PrevenirElCovid19 />} />
          <Route path="/desarrolladores" element={<AcercaDeLosDesarrolladores/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

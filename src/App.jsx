import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Promotion from "./pages/Promotion";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="services" element={<Services />}>
              <Route path=":serviceName" element={<ServiceDetail />} />
            </Route>

            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

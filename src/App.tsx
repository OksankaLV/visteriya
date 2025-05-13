import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Contact from "./components/Contact";
import MasterClassesPage from "./pages/MasterClassesPage/MasterClassesPage";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/visteriya">
        <NavBar />
        {/* <Cart /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/workshops" element={<MasterClassesPage />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

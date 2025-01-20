import Container from "./pages/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewVideo from "./pages/NewVideo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Container />} />
          <Route path="añadir_video" element={<NewVideo />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

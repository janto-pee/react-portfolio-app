import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

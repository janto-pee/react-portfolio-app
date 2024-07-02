import "./App.css";
import "./styles/index.scss";
import AllRoutes from "./routers/AllRoutes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <AllRoutes />;
}

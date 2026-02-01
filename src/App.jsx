import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ComponentReminder from "./dev/ComponentReminder";
import Header from "@templates/Header";
import Main from "@templates/Main";
import Footer from "@templates/Footer";
import "./i18n/config";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      {import.meta.env.DEV && <ComponentReminder />}
      <Footer />
    </BrowserRouter>
  );
}

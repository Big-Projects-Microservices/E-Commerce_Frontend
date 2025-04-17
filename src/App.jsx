import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ComponentReminder from "./dev/ComponentReminder";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      {import.meta.env.DEV && <ComponentReminder />}
    </BrowserRouter>
  );
}

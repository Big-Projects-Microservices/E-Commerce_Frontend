import Header from "./components/organisms/Header";
import "./styles/index.css";
import Main from "./components/organisms/Main";
import { BrowserRouter } from "react-router-dom";
import ComponentReminder from "./dev/ComponentReminder";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      {import.meta.env.DEV && <ComponentReminder />}
    </BrowserRouter>
  );
}

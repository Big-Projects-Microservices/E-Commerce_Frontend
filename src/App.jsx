import Header from "./components/organisms/Header";
import "./styles/index.css";
import Main from "./components/organisms/Main";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

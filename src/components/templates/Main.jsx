import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "@pages/Checkout";
export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
      </Routes>
    </>
  );
}

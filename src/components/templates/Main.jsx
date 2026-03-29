import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "@pages/Checkout";
import HotDeal from "@pages/HotDeal";
import Error404Page from "@pages/Error404Page";
import Error500Page from "@pages/Error500Page";
import ProductPage from "@pages/ProductPage";
import Shop from "@pages/Shop";
import Bags from "@pages/Bags";
import Sneakers from "@pages/Sneakers";
import Belt from "@pages/Belt";
import Contact from "@pages/Contact";
import About from "@pages/About";
import { LanguageGuard } from "@atoms";
export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LanguageGuard />} />

        <Route path="/:lang" element={<LanguageGuard />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Checkout />} />
          <Route path="hot-deal" element={<HotDeal />} />
          <Route path="shop" element={<Shop />} />
          <Route path="bags" element={<Bags />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="belt" element={<Belt />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="500" element={<Error500Page />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>

        <Route path="*" element={<LanguageGuard />} />
      </Routes>
    </main>
  );
}

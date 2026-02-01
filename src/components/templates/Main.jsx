import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "@pages/Checkout";
import HotDeal from "@pages/HotDeal";
import Error404Page from "@pages/Error404Page";
import Error500Page from "@pages/Error500Page";
import ProductPage from "@pages/ProductPage";
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
          <Route path="500" element={<Error500Page />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>

        <Route path="*" element={<LanguageGuard />} />
      </Routes>
    </main>
  );
}

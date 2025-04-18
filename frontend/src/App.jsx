// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { SharedLayout } from './components/SharedLayout'
// import { useEffect } from 'react'
// import Home from './pages/Home'
// import Shop from './pages/Shop'
// import OnSales from './pages/OnSales'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'
// import Lenis from '@studio-freight/lenis'
// import { Admin } from './pages/Admin'
// import Magazine from './pages/Magazine'
// import InsertProduct from './pages/InsertProduct'
// import DetailedProduct from './pages/DetailedProduct'
// // import { ShoppingCart } from 'lucide-react'
// import ShoppingCart from './pages/ShoppingCart'

// function App() {
//   useEffect(() => {
//     const lenis = new Lenis()
//     function raf(time) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
//   })
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/onSales" element={<OnSales />} />
//             <Route path="/product/:id" element={<DetailedProduct />} />
//             <Route path="/ShoppingCart" element={<ShoppingCart />} />
//           </Route>
//           <Route path="/Login" element={<Login />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/Magazine" element={<Magazine />} />
//           <Route path="/InsertProduct" element={<InsertProduct />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { useEffect } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OnSales from "./pages/OnSales";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Lenis from "@studio-freight/lenis";
import { Admin } from "./pages/Admin";
import Magazine from "./pages/Magazine";
import InsertProduct from "./pages/InsertProduct";
import DetailedProduct from "./pages/DetailedProduct";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./components/CartContext";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/onSales" element={<OnSales />} />
            <Route path="/product/:id" element={<DetailedProduct />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Magazine" element={<Magazine />} />
          <Route path="/InsertProduct" element={<InsertProduct />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

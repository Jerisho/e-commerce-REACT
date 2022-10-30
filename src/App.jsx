import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext"
import Cart from "./components/NavBar/Cart/Cart";
import CheckOutBuy from "./components/Forms/CheckOutBuy";
import Thanksyou from "./components/Thanksyou/Thanksyou";

function App() {
  return (
   <main className="main">
     <CartContextProvider> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={ 
              <ItemListContainer greetig="Welcome to the e-commerce" />
            } />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer/>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart />
            }
          />
          <Route 
            path="/item/:id"
            element={
              <ItemDetailContainer />
            }/>
          <Route
            path="/checkOut"
            element={
             <CheckOutBuy/>
            }
          />
          <Route
            path="/thankyou/:id"
            element={
             <Thanksyou/>
            }
          />
        </Routes>
      </BrowserRouter> 
    </CartContextProvider>
   </main>
  );
}

export default App;

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
   <main className="main">
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
          path="/item/:id"
          element={
            <ItemDetailContainer />
          }/>
      </Routes>
    </BrowserRouter> 
   </main>
  );
}

export default App;

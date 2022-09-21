import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './global.css'
function App() {
  return (
   <main className="main">
      <NavBar />
      <ItemListContainer />
   </main>
  );
}

export default App;

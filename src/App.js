import { BrowserRouter } from "react-router-dom";
import { Main } from './Main';
import { Footer } from './Footer';
import { Header } from './Header';
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ItemListContainer greeting={'Bienvenidos a Beerload'} />
      <Main/>
      <ItemDetailContainer/>
      <Footer/>
    </BrowserRouter>

);
} 

export default App;

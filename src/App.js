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
      <Main/>
      <Footer/>
      <ItemListContainer greeting={'Bienvenidos a Beerload'} />
      <ItemDetailContainer/>
    </BrowserRouter>

);
} 

export default App;

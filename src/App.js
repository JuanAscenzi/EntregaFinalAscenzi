import { BrowserRouter } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { MiCustomProvider } from "./components/MiContexto";

export function App() {
  return (

    <BrowserRouter>
      <MiCustomProvider>
        <Header/>
        <ItemListContainer greeting={'Bienvenidos a Beerload'} />
        <ItemDetailContainer/>
        <Footer/>
      </MiCustomProvider>
    </BrowserRouter>

);
} 

export default App;


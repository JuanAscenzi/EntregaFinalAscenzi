import { BrowserRouter } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main'
import { MiCustomProvider } from "./components/MiContexto";
import "./db/migrations"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Toaster } from 'sonner';
import { CartProvider } from "./context/CartContext";

export function App() {
  return (

    <BrowserRouter>
      {/* <CartProvider> */}
        <MiCustomProvider>
          <Header/>
          <Toaster position="top right" />
          <Main/>
          <Footer/>
        </MiCustomProvider>
      {/* </CartProvider> */}
    </BrowserRouter>

);
} 

export default App;


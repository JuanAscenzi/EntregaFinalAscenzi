import { BrowserRouter } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main'
import { Toaster } from 'sonner';
import { MiCustomProvider } from "./components/MiContexto";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./db/migrations"

export function App() {
  return (
  <CartProvider>
      <BrowserRouter>
            <MiCustomProvider>
            <Header/>
            <Toaster position="top right" />
            <Main/>
            <Footer/>
          </MiCustomProvider>
      </BrowserRouter>
  </CartProvider>

);
} 

export default App;


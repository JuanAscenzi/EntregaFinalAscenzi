import { BrowserRouter } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main'
import { Toaster } from 'sonner';
import { CartContext } from "./context/CartContext";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./db/migrations"

export function App() {
  return (
  <CartProvider>
      <BrowserRouter>
            <CartContext>
            <Header/>
            <Toaster position="top right" />
            <Main/>
            <Footer/>
          </CartContext>
      </BrowserRouter>
  </CartProvider>

  );
} 

export default App;


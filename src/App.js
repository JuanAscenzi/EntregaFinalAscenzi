import { BrowserRouter } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main'
import { MiCustomProvider } from "./components/MiContexto";
import "./db/migrations"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Toaster, toast } from 'sonner';

export function App() {
  return (

    <BrowserRouter>
      <MiCustomProvider>
        <Header/>
        <Toaster position="top right" />
        <Main/>
        <Footer/>
      </MiCustomProvider>
    </BrowserRouter>

);
} 

export default App;


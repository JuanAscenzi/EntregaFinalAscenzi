import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Toaster } from "sonner";
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Toaster position='top right' />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
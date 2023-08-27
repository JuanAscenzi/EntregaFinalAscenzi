import { Header } from "./Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <Header/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <Main/>        
      <Footer/>
    </>
  );
}
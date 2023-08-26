import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

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
import Image from "next/image";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductContainer from "./components/ProductsContainer";
import Menu from "./components/Menu";
import CategoriesMenu from "./components/CaterogiesMenu";
// import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="p-2.5">
      {/* searchbar */}
      <Header/>
      {/* hero */}
      <CategoriesMenu/>
      <div>hero</div>
      {/* products */}
      <div>product</div>
      {/* <ProductCard/> */}
      <ProductContainer />
      <Menu/>
    </main>
  );
}
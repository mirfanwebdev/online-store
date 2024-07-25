import Image from "next/image";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="p-2.5">
      {/* searchbar */}
      <Header/>
      {/* hero */}
      <div>hero</div>
      {/* products */}
      <div>product</div>
    </main>
  );
}
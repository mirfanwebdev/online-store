import { IoCartOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center">
                <SearchBar />
                <IoCartOutline className="text-2xl" />
            </header>
        </>
    )
}

export default Header;
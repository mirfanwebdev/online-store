import { IoSearch } from "react-icons/io5";
export default function SearchBar() {
    return (
        <>
            <form>
                <label htmlFor="search" className="flex items-center px-4 py-1 gap-2 border-2 rounded-full focus-within:border-sky-400">
                    <IoSearch />
                    <input type="text" id="search" placeholder="Search..." className="flex-1 focus:outline-none" />
                </label>
            </form>
        </>
    );
}
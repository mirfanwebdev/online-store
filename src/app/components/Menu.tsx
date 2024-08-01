import { IoHeartOutline, IoHomeOutline } from "react-icons/io5";

const Menu = () => {
    const menuList = [
        {
            name: "Home",
            icon: <IoHomeOutline/>,
        },
        {
            name: "Wishlist",
            icon: <IoHeartOutline/>
        }
    ]
    return (
        <>
            <div className="fixed bottom-0 flex justify-center gap-4 w-full bg-white border-t py-2">
                {menuList.map((item) => (
                    <div key={item.name} className="flex flex-col items-center">
                        <div className="text-xl">{item.icon}</div>
                        <p className="text-xs">{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Menu;
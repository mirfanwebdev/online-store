import { IoHeartOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5";

const Menu = () => {
    const menuList = [
        {
            name: "Home",
            icon: <IoHomeOutline/>,
        },
        {
            name: "Wishlist",
            icon: <IoHeartOutline/>
        },
        {
            name: "Account",
            icon: <IoPersonOutline/>
        }
    ]
    return (
        <>
            <div className="fixed bottom-0 flex justify-evenly items-center gap-4 w-full bg-white border-t py-2">
                {menuList.map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-0.5">
                        <div className="text-2xl">{item.icon}</div>
                        <p className="text-xs">{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Menu;
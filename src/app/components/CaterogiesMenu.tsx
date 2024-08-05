import { GiClothes } from "react-icons/gi";
import {MdOutlineDiamond, MdOutlinePhoneAndroid } from "react-icons/md";

const CategoriesMenu = () => {
    const menuList = [
        { id: 1, name: "electronic", icon: <MdOutlinePhoneAndroid/> },
        { id: 2, name: "jewellery", icon: <MdOutlineDiamond/> },
        { id: 3, name: "men's clothing", icon: <GiClothes /> },
        { id: 4, name: "women's clothing", icon: <GiClothes/> }
    ]
    return (
        <>
            <div className="flex flex-wrap justify-between">
                {menuList.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-1">
                        <div className="text-2xl bg-black text-white p-2 rounded-full">{item.icon}</div>
                        <p className="text-xs max-w-14 text-center">{item.name}</p>
                    </div>
                ))}
            </div>
        </>
)
}

export default CategoriesMenu;
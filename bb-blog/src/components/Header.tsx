import { Link } from "react-router-dom";
import assets from "../assets/asset"
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";


const Header = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    }

    const handleMenu = () => {
        setIsMenu(!isMenu);
    }
  return (
    <>    <header className="md:flex hidden justify-between py-3 bg-[#ABDFFF]  items-center">
       <Link to="/">
        <div className="ml-6">
            <h3 className="text-xl">The Metropolitan Battalion Council</h3>
        </div>
        </Link>

        <div className="flex items-center">
            <img className="w-10 mr-3" src={assets.bblogo} alt="BB Logo" />
            <p className="text-xl">MBC BLOG</p>
        </div>

        <nav className="mr-14" >
            <ul className="flex">
                <Link to="/">
                <li className="mr-3 hover:text-[#795d38] text-xl">News</li>
                </Link>
                <li className="mr-3 text-xl">Events</li>
                <li className="mr-3 text-xl">History</li>
            </ul>
        </nav>
    </header>

    {/* Mobile View */}

    <header className="bg-[#ABDFFF] p-3 md:hidden flex items-center justify-between">
    <Link to="/">
    <div className="flex items-center ml-7">
            <img className="w-10 mr-3" src={assets.bblogo} alt="BB Logo" />
            <p className="text-xl">MBC BLOG</p>
        </div>
        </Link>

            <div onClick={toggleRotation}>
            <MdMenuOpen onClick={handleMenu} className={`transition-transform duration-500 ${isRotated ? "rotate-90" : ""}`} size={30} />
            </div>

       {isMenu ? <nav className="absolute right-4 top-16 bg-[#205781] py-7 px-10 rounded-tr-sm rounded-2xl">
        <img className="w-7 mb-5 m-auto" src={assets.bblogo} alt="BB Logo" />
        <ul className=" ">
           <Link to="/">
            <li className="mb-4 text-xl hover:text-[#F6F8D5] duration-300">News</li>
            </Link>
            <Link to="/">
            <li className="mb-4 text-xl hover:text-[#F6F8D5] duration-300">Events</li>
            </Link>
            <Link to="/">
            <li className="mb-3 text-xl hover:text-[#F6F8D5] duration-300">History</li>
            </Link>
           
        </ul>
        </nav> : null}
    </header>
    </>

  )
}

export default Header
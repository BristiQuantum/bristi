import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar px-2 lg:px-[46px] xl:px-[113px] bg-black bg-opacity-20 text-white fixed top-0 w-full left-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className="text-[#CA0945] hi text-lg sm:text-2xl tracking-[3px]">Bristi</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="font-semibold">Home</Link></li>
                    <li><Link to="/about" className="font-semibold">About Me</Link></li>
                    <li><a className="font-semibold">My Skills</a></li>
                    <li><a className="font-semibold">Portfolio</a></li>
                    <li><Link to="/contact" className="font-semibold">Contact</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <button className='button-copy hidden sm:block'>Contact</button>
            </div>
        </div>

    );
};

export default Navbar;
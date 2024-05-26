import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const NavOption = <>
        <li><a href="#home" className="font-semibold">Home</a></li>
        <li><a href="#about" className="font-semibold">About Me</a></li>
        <li><a href="#skill" className="font-semibold">My Skills</a></li>
        <li><a href="#portfolio" className="font-semibold">Portfolio</a></li>
        <li><a href="#contact" className="font-semibold">Contact</a></li>
    </>



    return (
        <div className="navbar px-2 lg:px-[46px] xl:px-[113px] bg-black bg-opacity-20  fixed top-0 w-full left-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={() => setOpen(true)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul onClick={() => setOpen(false)} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        { open &&
                            NavOption
                        }
                    </ul>
                </div>
                <a href="#home" className="logo">Bristi</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        NavOption
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {/* <button className='button-copy hidden sm:block'>Contact</button> */}
            </div>
        </div>

    );
};

export default Navbar;
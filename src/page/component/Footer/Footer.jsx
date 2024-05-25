import { FaFacebookF} from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center py-4 bg-gray-800 text-neutral-content px-2 lg:px-[46px] xl:px-[113px] ">
                <aside className="text-center w-full">
                    <p className='text-xs text-[#CA0945] font-semibold text-center'>Copyright © 2024 - All right reserved</p>
                </aside>

                     {/* social icon  */}
            <div className=" flex items-center gap-3 sm:gap-5 justify-end text-right ml-auto ">
            <FaFacebookF className=' outline-8 outline-double bg-[#CA0945] outline-[#2CA024] text-white rounded-full text-3xl sm:text-4xl p-1 sm:p-2'/>
            <ImWhatsapp className=' outline-8 outline-double bg-[#CA0945] outline-[#2CA024] text-white rounded-full text-3xl sm:text-4xl p-1 sm:p-2'/>
            <IoLogoGithub className=' outline-8 outline-double bg-[#CA0945] outline-[#2CA024] text-white rounded-full text-3xl sm:text-4xl p-1 sm:p-2'/>
            {/* <FaLinkedinIn className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/> */}
            </div>
               
            </footer>
        </div>
    );
};

export default Footer;
import { FaFacebookF } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center py-4 bg-gray-800 text-neutral-content px-2 lg:px-[46px] xl:px-[113px] ">
                <aside className="text-center w-full">
                    <a href="#home" className="footer-logo">Bristi</a>
                    <p className='text-xs text-[#CA0945] font-semibold text-center -mt-2'>Copyright © 2024 - All right reserved</p>
                </aside>

                {/* social icon  */}
                <div className=" flex items-center gap-3 sm:gap-5 justify-end text-right ml-auto ">
                   <a href="https://www.facebook.com/profile.php?id=100094010508888&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"> <FaFacebookF className='footer-social' /></a>
                    
                    <a href="https://wa.me/12390875" target="_blank" rel="noopener noreferrer"><ImWhatsapp className='footer-social' /></a>

                    <a href="https://github.com/BristiQuantum" target="_blank" rel="noopener noreferrer"><IoLogoGithub className='footer-social' /></a>
                    {/* <FaLinkedinIn className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/> */}
                </div>

            </footer>
        </div>
    );
};

export default Footer;
import { IoGlobeOutline } from 'react-icons/io5';
import bristi from '../../../assets/img/bristi.png'
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import hi from '../../../assets/gif/hi.gif'

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-9 pt-24 pb-10 sm:pb-24 mx-2 lg:mx-[46px] xl:mx-[113px] border-b-2 border-black border-dotted">
            {/* right side  */}
            <div className="w-full xs:w-[85%] md:w-auto ">
                <div className=" space-y-7">
                    <div className="br_shadow lg:pr-20">
                        <div className="flex items-center gap-3 text-sm md:text-base xl:text-2xl  hi flex-nowrap">
                            <span className='text-nowrap'>H e l l o !</span> 
                            <div className=""><img src={hi} alt="" className='w-10 sm:min-w-10 sm:w-16'/></div>
                            <span className='text-nowrap'>i &rsquo; m</span> 
                            <h1 className='text-[#CA0945] tracking-[8px] text-3xl sm:text-6xl h1'>Bristi</h1>
                        </div>
                        
                        <h2 className='text-xl sm:text-2xl md:text-3xl my-3 tracking-[1.6px] h2'>Front-End Developer</h2>
                        <div className=" ">
                            <p className='text-sm sm:text-[16px] flex items-center justify-start gap-2 mb-2'><IoGlobeOutline className='text-xl font-bold text-[#CA0945]' /> <span>www.bristi.com</span></p>
                            <p className='text-sm sm:text-[16px] flex items-center justify-start gap-2 mb-2'><HiOutlineMail className='text-xl font-bold text-[#CA0945]' /> <span>bristi.get.contact@gmail.com</span></p>
                            <p className='text-sm sm:text-[16px] flex items-center justify-start gap-2 mb-2'><MdLocationOn className='text-xl font-bold text-[#CA0945]' /> <span>Dhaka, Bangladesh</span></p>
                        </div>
                    </div>
                    <div className="br_shadow py-12 ">
                        <p className='text-lg sm:text-xl capitalize mb-5'>Download my resume :</p>
                        <div className=" flex items-center justify-center gap-5">
                            <button className='border-none px-8 font-bold py-3 xs:py-4 text-[10px] text-nowrap sm:text-[16px] uppercase text-[#CA0945]  rounded-xl btn_shadow'>Download</button>
                            <button className='border-none px-8 font-bold py-3 xs:py-4 text-[10px] text-nowrap sm:text-[16px] uppercase text-[#CA0945]  rounded-xl btn_shadow'>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* left side  */}
            <div className="">
                <div className="br_shadow">
                    <img src={bristi} alt="" className='rounded-3xl min-w-[278px] w-[380px] border-2 border-[#ca09466e] border-dotted' />
                </div>
            </div>
        </div>
    );
};

export default Home;
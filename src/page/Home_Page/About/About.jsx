
import { FaFacebookF} from 'react-icons/fa';
import bristi from '../../../assets/img/bristi1.png'
import profile from '../../../assets/img/bristi2.png'
import d1 from '../../../assets/img/d1.png'
import Section_Title from '../../component/Section_Title/Section_Title';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io5';

const About = () => {
    return (
        <div className="w-full max-w-7xl px-2 xs:px-4 mx-auto sm:px-8 mt-10 xs:mt-24 pb-10 sm:pb-24 border-b-2 border-black border-dotted  ">
            <blockquote className="relative grid items-center shadow-xl md:grid-cols-3 rounded-xl mb-14">
                <img
                    className="hidden object-cover w-full h-full rounded-l-xl md:block"
                    style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
                    src={bristi}
                    alt="John Doe"
                />
                <article className="relative xs:pl-6 pr-0 lg:p-8 md:col-span-2">

                    <Section_Title
                    subTitle='About me'
                    title='So, Who Am I ?'></Section_Title>

                    <div className="space-y-8">
                        <p className="text-sm xs:text-base sm:leading-relaxed sm:text-lg lg:text-xl xl:text-2xl">
                            Experienced Front-End Developer specializing in React js. Creating  applications for high-profile clients with challenging demands and visions. Leading projects for dynamic
                            interfaces, driving growth through innovation and precision. 
                         
                            <p className='mt-2'> Proven success in achieving broad compatibility across browsers, devices, and operating systems.</p>
                        </p>

                        <button className='button-copy'>Know more</button>

                        <footer className="flex items-center space-x-4 md:space-x-0">
                            <img
                                className="w-12 h-12 rounded-full md:hidden"
                                src={profile}
                                alt="John Doe"
                            />
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-[#CA0945] text-sm xs:text-xl hi text-nowrap">B r i s t i</span>
                            <img src={d1} alt="" className='w-40 mt-4'/>
                            </div>
                        </footer>
                    </div>
                </article>
            </blockquote>


            {/* social icon  */}
            <div className=" flex items-center gap-3 sm:gap-5 justify-end border-b-2 border-[#CA0945] border-dotted xs:w-[45%] md:w-[35%] 2xl:w-[25%] pb-3 text-right ml-auto">
            <FaFacebookF className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/>
            <ImWhatsapp className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/>
            <IoLogoGithub className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/>
            {/* <FaLinkedinIn className='border-2 border-[#CA0945] text-[#CA0945] rounded-full text-3xl sm:text-5xl p-1 sm:p-2'/> */}
            </div>

        </div>
    );
};

export default About;

import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import Section_Title from "../component/Section_Title/Section_Title";
import { MdOutlineTextsms } from "react-icons/md";
import { IoMdCall } from "react-icons/io";


const Contact_Form = () => {
    return (
        <div>
            <div className="px-2 xs:px-4 mx-auto sm:px-8 pt-24 pb-10 sm:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 ">

                    {/* chat with me  */}
                    <div className="bg-gray-900 md:col-span-4 p-2 xs:p-10 md:p-2 lg:p-10 text-white rounded-3xl h-fit mb-10">

                        <div className="space-y-5">
                            <div className="br_shadow text-xs space-y-1">
                                <p className="text-xl font-semibold contact-t">Chat with me</p>
                                <p className="text-sm">Representives are available</p>
                                <p className="text-sm"><span className="font-semibold">Mon - Thurs</span> : 5:30am - 12:00am (GMT+6) </p>

                                <div className="flex flex-col pt-7">
                                    <a href="https://wa.me/12390875" target='_blank' className="contact-socail-container">
                                        <FaWhatsapp className="contact-icon" /> <span>WhatsApp</span>
                                    </a>

                                    <a href="mailto:bristi.get.contact@gmail.com" target='_blank' className="contact-socail-container">
                                        <FaRegEnvelope className="contact-icon" /> <span>Email</span>
                                    </a>

                                    <div className="contact-socail-container">
                                        <MdOutlineTextsms className="contact-icon" /> <span>+880 12390875</span>
                                    </div>
                                </div>
                            </div>

                            <div className="br_shadow text-xs space-y-1">
                                <p className="text-xl font-semibold contact-t">Call me</p>
                                <p className="text-sm">Representives are available</p>
                                <p className="text-sm"><span className="font-semibold">Mon - Thurs</span> : 5:30am - 12:00am (GMT+6) </p>

                                <div className="flex flex-col pt-7">
                                    <a href="https://wa.me/12390875" target='_blank' className="contact-socail-container">
                                        <FaWhatsapp className="contact-icon" /> <span>WhatsApp</span>
                                    </a>

                                    <a href="tel:+4733378901" target='_blank' className="contact-socail-container">
                                        <IoMdCall className="contact-icon" /> <span>+880 12390875</span>
                                    </a>
                                </div>
                            </div>
                        </div>











                    </div>


                    {/* contact form 
                    ---------------------------------- */}
                    <div className="md:col-span-8 xs:p-10 pb-0">

                        <Section_Title
                            subTitle='Contact'
                            title='Get In Touch'></Section_Title>

                        <p>
                            <p className="mb-2">Got Ideas ? Let’s team up. Tell me about what you want to build. </p>
                            <p className="mb-2"> I have acquired several key skills and attributes that have greatly aided me in my current profession and streamlined my work. As a detail-oriented team player with strong organizational skills, I excel at both independent work and collaborative teamwork within diverse environments. </p>
                            <p>So let’s get work together !</p>
                        </p>


                        {/* form 
                            --------------------- */}
                        <form action="" className="bg-[#111827] p-8 rounded-3xl mt-10">

                            <p className='text-lg sm:text-xl  mb-9'>Submit  a  message : </p>

                            <div className="flex flex-col xs:flex-row items-center xs:gap-8">
                                <input type="text" name="name" placeholder="Your Name" className="box-border w-full p-3 pl-5 rounded-md focus:outline-none bg-transparent border border-[#ca09466f] placeholder:text-xs placeholder:text-gray-500 focus:text-[#CA0945] focus:border-gray-500   mb-5" autoComplete="off" />
                                <input type="email" name="email" id="" placeholder="Your email" className="box-border w-full p-3 pl-5 rounded-md focus:outline-none bg-transparent border border-[#ca09466f] placeholder:text-xs placeholder:text-gray-500 focus:text-[#CA0945] focus:border-gray-500    mb-5" autoComplete="off" />
                            </div>
                            <textarea name="message" id="" placeholder="Your message..." className="box-border w-full p-3 pl-5 rounded-md focus:outline-none bg-transparent border border-[#ca09466f] placeholder:text-xs placeholder:text-gray-500 focus:text-[#CA0945] focus:border-gray-500   mb-5" autoComplete="off"></textarea>
                            <input type="submit" value="Submit" className="contact-btn" />
                        </form>


                        {/* others info  */}
                        {/* <div className="mt-9">

                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight contact-t border-b-2 border-white border-dotted w-fit pb-2 mb-5 pr-5">
                                Full Contact info
                            </h3>
                            <div className="text-lg md:text-xl pb-9 md:pb-0 space-y-2">
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Name :</span>Mst Ismat Ara Bristi</p>
                               
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Phone :</span>+(880) 1612390875</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Email :</span>bristi.get.contact@gmail.com</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Facebook :</span>link</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Github :</span>link</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">WhatsApp :</span>link</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Experience :</span>3+ Years</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Freelance :</span>Available</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Nationality :</span>Bangladeshi</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Language :</span>English, Bengali</p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Adress :</span></p>
                                <p ><span className="font-bold text-[#E8BF96] mr-4">Zipe Code :</span></p>
                               
                            </div>

                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact_Form;
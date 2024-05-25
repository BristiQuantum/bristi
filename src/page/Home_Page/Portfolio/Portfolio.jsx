import Section_Title from "../../component/Section_Title/Section_Title";
import img1 from '../../../assets/img/1.jpg'
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/1.png'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
    const navigate = useNavigate()

    const GoToSushi = () => {
        navigate("/sushi")
    }
    return (
        <div className="pt-10 sm:pt-24 pb-10 sm:pb-24 mx-2 lg:mx-[46px] xl:mx-[113px] border-b-2 border-black border-dotted">

            <Section_Title
                subTitle='Portfolio'
                title='My All Project'></Section_Title>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card   br_shadow p-5 rounded-3xl">
                    <div className="bg-[#212428]  p-0">
                        <div className="">
                            <img src={img2} alt="" className="rounded-3xl" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 px-3">
                        <p className="protffollio-title">01. Sushi Restruent</p>
                        <MdArrowOutward onClick={GoToSushi} className="text-3xl font-bold text-[#CA0945]"/>
                    </div>
                </div>

                <div className="card   br_shadow p-5 rounded-3xl">
                    <div className="bg-[#212428]  p-0">
                        <div className="">
                            <img src={img1} alt="" className="rounded-3xl" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 px-3">
                        <p className="protffollio-title">02. Revelation ToyShop</p>
                        <MdArrowOutward className="text-3xl font-bold text-[#CA0945]"/>
                    </div>
                </div>

                <div className="card   br_shadow p-5 rounded-3xl">
                    <div className="bg-[#212428]  p-0">
                        <div className="h-[195px]">
                            <img src={img3} alt="" className="rounded-3xl h-[195px]"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 px-3">
                        <p className="protffollio-title">03. Coming Soon</p>
                        <MdArrowOutward className="text-3xl font-bold text-[#CA0945]"/>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Portfolio;
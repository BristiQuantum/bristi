import Section_Title from "../../component/Section_Title/Section_Title";
import img1 from '../../../assets/img/1.jpg'
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/1.png'
import { MdArrowOutward } from "react-icons/md";

const Portfolio = () => {


    return (
        <div id="portfolio" className="pt-10 sm:pt-24 pb-10 sm:pb-24 mx-2 lg:mx-[46px] xl:mx-[113px] border-b-2 border-black border-dotted">

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
                        <a href="https://sushi-rouge.vercel.app" target="_blank"><MdArrowOutward className="portfolio-arrow" /></a>
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
                        <a href="https://2-revelation-toy-shop-client-side.vercel.app" target="_blank"><MdArrowOutward className="portfolio-arrow" /></a>
                    </div>
                </div>

                <div className="card   br_shadow p-5 rounded-3xl">
                    <div className="bg-[#212428]  p-0">
                        <div className="h-[195px]">
                            <img src={img3} alt="" className="rounded-3xl h-[195px]" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 px-3">
                        <p className="protffollio-title">03. Coming Soon</p>
                        


                        {/* modal  */}
                        {/* The button to open modal */}
                        <label htmlFor="my_modal_6"><MdArrowOutward className="portfolio-arrow" /></label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box text-black">
                                <h3 className="font-bold text-lg">Please keep patience !</h3>
                                <p className="py-4">This page is not ready for explore...</p>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Portfolio;
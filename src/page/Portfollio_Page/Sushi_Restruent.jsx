import img from '../../assets/img/2.jpg'
import Section_Title from '../component/Section_Title/Section_Title';

const Sushi_Restruent = () => {
    return (
        <div className='px-2 xs:px-4 mx-auto sm:px-8 pt-24 pb-10 sm:pb-24'>


            <div className="flex items-center justify-center gap-9 mb-16">
                <div className="basis-1/2">
                    <img src={img} alt="" />
                </div>

                <div className="basis-1/2">
                    <div className="mt-9">

                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight contact-t border-b-2 border-white border-dotted w-fit pb-2 mb-5 pr-5">
                        Visiteable Link :
                        </h3>
                        <div className="text-lg md:text-xl pb-9 md:pb-0 space-y-2">
                            <p ><span className="font-bold text-[#E8BF96] mr-4">Live link :</span>link</p>

                            <p ><span className="font-bold text-[#E8BF96] mr-4">video link :</span>link</p>
                            <p ><span className="font-bold text-[#E8BF96] mr-4">Git Repositorie :</span>link</p>
                            
                        </div>

                    </div>
                </div>
            </div>


            <div className="">
                <Section_Title
                subTitle='Description - Sushi Rouge'
                title='Overview'></Section_Title>
                <p className='-mt-4'>Sushi Rouge is a modern, visually appealing web application designed to enhance the user experience of exploring a sushi restaurant's offerings. The site features high-quality images, detailed descriptions, and a clean, intuitive layout that makes navigation straightforward and enjoyable.
                 </p>
                 <p className='pt-2'>Sushi Rouge is more than just a menu; it is a comprehensive platform that provides users with insights into the restaurant's mission, the ability to book tables, manage orders, read blog posts about sushi, and contact the restaurant easily.</p>
            </div>

            <div className="">
            <Section_Title
                title='Overview'></Section_Title>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semiboticing image of sushi and a clear call-to-action button to explore more.ld'>2. Menu : </span>A detailed list of sushi dishes with high-resolution images and descriptions, allowing users to browse and decide on their orders.</p>
                <p><span className='font-semibold'>3. 1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
                <p><span className='font-semibold'>1. Homepage : </span>The landing page welcomes users with an enticing image of sushi and a clear call-to-action button to explore more.</p>
            </div>


        </div>
    );
};

export default Sushi_Restruent;
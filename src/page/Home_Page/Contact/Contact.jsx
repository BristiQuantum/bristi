import Section_Title from "../../component/Section_Title/Section_Title";


const Contact = () => {
    return (
        <div className="px-2 xs:px-4 mx-auto sm:px-8 mt-10 xs:mt-24 pb-10 sm:pb-24">
            <div className="flex flex-col xs:p-4 mx-auto max-w-xl">

                <Section_Title
                    subTitle='Contact'
                    title='Get in Touch'></Section_Title>

                <textarea rows="4" className="mb-4 placeholder:text-white/50 text-white border-2  border-[#ca09465b] focus:border-[#CA0945] focus:text-[#CA0945] rounded-3xl br_shadow bg-transparent focus:outline-none" id="comment" name="comment" placeholder="Write your message here..."></textarea>
                <div className="flex justify-end">
                    <button className='button-copy'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;

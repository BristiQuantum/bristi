/* eslint-disable react/prop-types */
import d2 from '../../../assets/img/d2.png'

const Section_Title = ({subTitle, title}) => {
    return (
        <div className='mb-6'>
            {/* subTitle  */}
            {
                subTitle &&
                <div className="flex items-center gap-1">
                    <p className="sub-title">{subTitle}</p>
                    <img src={d2} alt="" className='w-24'/>
                </div>
            }

            {/* title  */}
            {
                title &&
                <p className='title'>{title}</p>
            }
            
        </div>
    );
};

export default Section_Title;
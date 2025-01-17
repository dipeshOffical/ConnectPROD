import { IoIosArrowForward } from "react-icons/io";

const FlexButton = ({ title, isActive, index }) => {
    return (
        <div className={`flex items-center justify-between px-3 py-3 ${isActive ? 'bg-color text-color-white' : 'light-bg'} border-b border-gray-300 ${index === 0 ? 'rounded-tr-2xl rounded-tl-2xl' : ''} cursor-pointer`}>
            <div><h4>{title}</h4></div>
            <div className="text-xl "><IoIosArrowForward /></div>
        </div>
    );
}

export default FlexButton;
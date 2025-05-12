import map from "../assets/map.png";
import InfoWithIcon from "./InfoWithIcon";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const BranchContact = () => {
    return (
        <div className="bg-color w-full text-color-white lg:ml-56 lg:h-[30rem]">
            <div className="lg:flex justify-between lg:px-20 px-6 lg:h-full">
                <div className="lg:pl-20 self-center relative hidden lg:block">
                    <img src={map} alt="connect-location-img" />
                    <div className="text-2xl absolute top-40 right-20 text-red-600 hidden xl:block"><MdLocationPin /></div>
                    <div className="text-2xl absolute top-32 right-40 text-red-600 hidden xl:block"><MdLocationPin /></div>
                </div>
                <div className="py-20 break-all lg:break-normal">
                    <h2 className="py-2 mt-2">Adelaide Australia</h2>
                    <InfoWithIcon icon={<FiPhone />} info="0883176091" className="py-2" />
                    <InfoWithIcon icon={<FaRegEnvelope />} info="admin@connectforstudy.com.au" className="py-2" />
                    <InfoWithIcon icon={<IoLocationOutline />} info="11/1057 South Road, Melrose Park, SA 5039" className="py-2" />
                </div>
            </div>
        </div>
    );
}

export default BranchContact;
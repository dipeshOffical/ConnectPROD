import map from "../assets/map.png";
import InfoWithIcon from "./InfoWithIcon";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const BranchContactNepal = () => {
    const branches = [
        {
            title: "Nepal Office (Chitwan – Head Office)",
            phone: "056-493378 / 9801313378 / 9801316378",
            email: "admin@connectforstudy.com.au",
            address: "Lions Chowk, Narayanghar, Chitwan, Nepal",
        },
        {
            title: "Nepal Office (Kathmandu)",
            phone: "9801313378 / 9801316378",
            email: "ktm@connectforstudy.com.au",
            address: "Putali Sadak, Kathmandu, Nepal",
        },
        {
            title: "Nepal Office (Butwal)",
            phone: "+977 078-521199 / 9855050378",
            email: "butwal@connectforstudy.com.au",
            address: "Rajmarga Chauraha, Butwal, Nepal",
        },
        {
            title: "Nepal Office (Dulegaunda)",
            phone: "+977 9856032493",
            email: "dulegaunda@connectforstudy.com.au",
            address: "Dulegaunda Bazar, Tanahun, Nepal",
        },
        {
            title: "Nepal Office (Damauli)",
            phone: "+977 9804190580",
            email: "damauli@connectforstudy.com.au",
            address: "Byass-2, Byass, Damauli, Nepal",
        },
    ];

    return (
        <div className="bg-color w-full text-color-white lg:ml-56 lg:h-auto">
            <div className="lg:flex justify-between lg:px-20 px-6 lg:py-10">
                {/* Map Section */}
                <div className="lg:pl-20 self-center relative hidden lg:block">
                    <img src={map} alt="connect-location-img" className="rounded-lg shadow-lg" />
                    <div className="text-2xl absolute top-40 right-20 text-red-600 hidden xl:block">
                        <MdLocationPin />
                    </div>
                    <div className="text-2xl absolute top-32 right-40 text-red-600 hidden xl:block">
                        <MdLocationPin />
                    </div>
                </div>
                {/* Contact Information Section */}
                <div className="py-10 lg:py-0 break-words lg:break-normal space-y-8">
                    {branches.map((branch, index) => (
                        <div key={index} className="space-y-2">
                            <h5 className="font-semibold text-lg">{branch.title}</h5>
                            <InfoWithIcon icon={<FiPhone />} info={branch.phone} className="py-1" />
                            <InfoWithIcon icon={<FaRegEnvelope />} info={branch.email} className="py-1" />
                            <InfoWithIcon icon={<IoLocationOutline />} info={branch.address} className="py-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BranchContactNepal;

import DropDown from "../../components/DropDown";
import FlexButton from "../../components/FlexButton";
import Input from "../../components/Input";
import { ieltsOtherPages } from "../../static-data";
import { Link, NavLink } from "react-router-dom";

const states = ["New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"];
const services = ["Counseling", "Visa Assistance", "Course Selection", "University Application", "Accommodation Assistance"];

const SideBar = () => {
    return (
        <div className="lg:col-span-2 text-color-black">
            {ieltsOtherPages.map((page, index) => {
                return (
                    <NavLink to={page.link}>
                        {({ isActive }) => {
                            return (
                                <FlexButton title={page.title} isActive={isActive} index={index}></FlexButton>
                            );
                        }}
                    </NavLink>
                );
            })}
            <div className="light-bg mt-8 p-4">
                <h3 className="text-xl text-color-main font-semibold">Ready to apply to your ideal university? Let's get started!</h3>
                <p className="text-sm py-4 text-color-black">Please fill out the form below and let us help you</p>
                <div>
                    <Input label="Name" type="text" id="name" placeholder="E.g: John Cena" />
                    <Input label="Email" type="email" id="email" placeholder="E.g: johncena@gmail.com" className="mt-4" />
                    <Input label="Interested Course" type="text" id="course" placeholder="E.g: BIT" className="mt-4" />
                    <Input label="Interested Institute" type="text" id="institute" placeholder="E.g: UTAS" className="mt-4" />
                    <div className="mt-4">
                        <label htmlFor="state" className="text-sm font-medium">Interested State</label>
                        <div className="w-full mt-2">
                            <select id="state" className="w-full border border-gray-300 p-2">
                                <option value="">Select State</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="visa" className="text-sm font-medium">Have your visa been rejected before?</label>
                        <div className="xl:flex lg:block flex items-center mt-4 px-2">
                            <div><input type="radio" name="visa" id="visa" className="text-3xl" /><span className="px-4">Yes</span></div>
                            <div className="xl:px-8 lg:py-3 xl:py-0"><input type="radio" name="visa" id="visa" /><span className="px-4">No</span></div>
                        </div>
                    </div>
                    <Input label="Current Address" type="text" id="address" placeholder="E.g: Bharatpur 8" className="mt-4" />
                    <div className="mt-4">
                        <label htmlFor="service" className="text-sm font-medium">Service Required</label>
                        <div className="w-full mt-2">
                            <select id="service" className="w-full border border-gray-300 p-2">
                                <option value="">Select Service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="question" className="text-sm font-medium">Any Question For Us?</label>
                        <div className="mt-2"><textarea id="question" className="border border-gray-300 h-40 w-full"></textarea></div>
                    </div>
                    <div className="mt-4"><button type="button" className="btn-color px-6 py-2 text-color-white">Submit</button></div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
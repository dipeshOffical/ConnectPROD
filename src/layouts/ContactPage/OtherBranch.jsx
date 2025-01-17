import FlexButton from "../../components/FlexButton";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { NavLink, Outlet } from "react-router-dom";
import { branches } from "../../static-data";

const OtherBranch = () => {
    return (
        <Wrapper className="pb-20">
            <div className="text-center"><Heading title="More Information About Our Other Branches" /></div>
            <div className="lg:flex items-center mt-10 lg:relative">
                <div className="lg:w-[30%] rounded-tr-2xl rounded-tl-2xl lg:absolute">
                    {branches.map((page, index) => {
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
                </div>
                <Outlet />
            </div>
        </Wrapper>
    );
}

export default OtherBranch;
import Wrapper from "../../components/Wrapper";
import { associatedColleges } from "../../static-data";

const Association = () => {
    //create a simple array to store the college names
    const collegeNames = [
        "ichm", "up-cdu", "up-swinburne", "up-tasmania", "builders", 
        "adeliade-intl-school", "adeliade-institute", "adeliade-higher-education",
        "uhe", "ihna", "Acknowledge", "Acknowledge2", "Acknowledge3", "Acknowledge4",
        "ozford", "ECA-Swin", "eca-canberra", "ECA-VU", "ECA-LMU", "ECA-HE", 
        "eca-professional", "ECA-Eng", "eca-online", "Kingsford", "afc", "alliance", 
        "alice-spring", "harbour-college", "culinary", "raymond", "qiba", "ihm", 
        "meridian", "sydney-insitute-of-higher-education", "melnourne-metropoly", 
        "reach", "aibt", "envirotech", "sydney-city-coll-of-mgmt", "builders uni", 
        "albright", "stanley", "nnnn_updated"
    ];
        return (
        <Wrapper className="lg:py-28 py-20 px-8 xl:px-0">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
                {associatedColleges.map((college, index) => {
                    return (
                        <div className="bg-blue-100 flex justify-center py-6"><img src={college.logo} alt="college-logo" width={130} /></div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default Association;
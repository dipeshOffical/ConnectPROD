import point from "../assets/point.png";

const ObjectiveItem = ({ title, objectives }) => {
    return (
        <div className="mt-6">
            <div className="lg:flex gap-6">
                <div><img src={point} alt="connect-list-img" /></div>
                <div>
                    <h4 className="text-color-main text-xl font-semibold mt-4 lg:mt-0">{title}</h4>
                    <div className="mt-3">
                        <ul className="obj-list">
                            {objectives.map((obj, index) => {
                                return (
                                    <li className="py-0.5" key={index}>
                                        <span className="font-semibold">{obj.heading}: </span>
                                        <span className="text-color-black">{obj.info}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ObjectiveItem;
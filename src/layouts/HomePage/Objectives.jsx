import React from 'react';
import { objectives } from "../../static-data";

const Objectives = () => {
    return (
        <div className="objective-bg lg:mt-28 mt-20 text-color-white relative lg:pt-28 pt-20">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-color opacity-85"><span className="invisible">Connect</span></div>
            <div className="grid md:grid-cols-3 md:max-w-[1100px] max-w-[500px] mx-auto pb-12">
                {objectives.map((obj, index) => {
                    return (
                        <div key={index} className={`objective-item z-[50] ${index === 2 ? '' : 'md:border-r md:border-gray-600'} px-12 ${index === 1 ? 'py-16 md:py-0' : ''}`}>
                            <div className="icon-container">
                                <img src={obj.icon} alt="connect-icon" className="objective-icon"/>
                            </div>
                            <div className="pt-12 pb-6 text-xl"><h5>{obj.title}</h5></div>
                            <div className="text-sm leading-relaxed"><p>{obj.desc}</p></div>
                        </div>
                    );
                })}
            </div>
            <div className="bg-blue-500 opacity-40 w-full py-6"><span className="invisible">Connect</span></div>
        </div>
    );
}

export default Objectives;
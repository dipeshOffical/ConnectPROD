const AboutItem = ({ icon, title, desc }) => {
    return (
        <div className="bg-white rounded-lg pt-6 px-8 pb-4">
            <div className="h-[3rem]"><img src={icon} alt="connect-icon" /></div>
            <div className="mt-2 text-color-main font-semibold"><h5>{title}</h5></div>
            <div className="text-sm mt-2"><p>{desc}</p></div>
        </div>
    );
}

export default AboutItem;
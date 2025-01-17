import australia from "../assets/australia.png";

const HeaderTheme = ({ title }) => {
    return (
        <div className="header-theme-bg h-[25rem] relative z-[-1]">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40"><span className="invisible">Connect</span></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center md:text-left">
                <span className="text-color-white text-4xl font-semibold md:whitespace-nowrap leading-snug">{title}</span>
            </div>
        </div>
    );
}

export default HeaderTheme;
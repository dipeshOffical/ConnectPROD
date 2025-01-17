const Wrapper = ({ children, className }) => {
    return (
        <div className={`lg:max-w-[1200px] md:max-w-[800px] max-w-[500px] mx-auto px-8 xl:px-0 ${className}`}>{children}</div>
    );
}

export default Wrapper;
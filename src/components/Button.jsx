const Button = ({ title, type, className }) => {
    return (
        <div className={type ? '' : 'mt-8'}>
            <button type="button" className={`btn-color px-2 py-3.5 text-color-white w-[12rem] ${className}`}>{title}</button>
        </div>
    );
}

export default Button;
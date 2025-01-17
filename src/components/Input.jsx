const Input = ({ type, id, label, placeholder, bg, className }) => {
    return (
        <div className={`w-full ${className}`}>
            <div className="text-sm font-medium whitespace-nowrap"><label htmlFor={id}>{label}</label></div>
            <div className="w-full mt-2"><input type={type} id={id} name={id} className={`border border-gray-300 h-11 w-full p-3 ${bg && bg}`} placeholder={placeholder} /></div>
        </div>
    );
}

export default Input;
const ExpItem = ({ quantity, title }) => {
    return (
        <div className="text-center py-6 lg:py-0">
            <div >
                <div className="text-5xl font-semibold"><h1>{quantity}</h1></div>
                <div className="flex justify-center"><div className="mt-4 w-[70%]"><span>{title}</span></div></div>
            </div>
        </div>
    );
}

export default ExpItem;
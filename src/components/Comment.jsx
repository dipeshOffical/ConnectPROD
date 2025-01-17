const Comment = ({ image, name, date, comment }) => {
    return (
        <div className="flex items-center gap-4 border-b py-3">
            <div><img src={image} alt="connect-user-img" /></div>
            <div>
                <div className="flex items-center gap-4">
                    <div className="font-semibold"><h5>{name}</h5></div>
                    <div className="text-sm"><span>{date}</span></div>
                </div>
                <div className="text-sm"><span>{comment}</span></div>
            </div>
        </div>
    );
}

export default Comment;
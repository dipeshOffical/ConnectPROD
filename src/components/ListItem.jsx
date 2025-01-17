const ListItem = ({ title, desc, descInfo, listStyle }) => {
    return (
        <div className="py-2">
            {!descInfo && <li className={listStyle === 0 ? 'list-none' : ''}><span className="font-semibold">{title}: </span>{desc}</li>}
            {descInfo &&
                <span><span className="font-semibold">{title}:</span>
                    {descInfo.map((info, index) => {
                        return (
                            <li key={info} className={`py-1 ${index === 0 ? 'mt-2' : ''}`}>{info}</li>
                        );
                    })}
                </span>}
        </div>
    );
}

export default ListItem;
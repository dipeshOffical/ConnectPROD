import React from 'react';

const FooterItem = ({ option, linkName }) => {
    return (
        <div className="footer-item md:pt-12 pb-6">
            <h5 className="footer-item-title text-[#98A2B3]">{option}</h5>
            <ul className="mt-5">
                {linkName.map((link, index) => (
                    <li key={index} className="footer-item-link py-2">{link.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FooterItem;
import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className='text-center bg-info py-4 text-white'>
            Copyright &copy; by Abdulla Al Fahad - {year}
        </div>
    );
};

export default Footer;
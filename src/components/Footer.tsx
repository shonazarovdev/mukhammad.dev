import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__container">
                    <div className="footer__body">
                        <div className="footer__text">
                            Copyright &copy; {new Date().getFullYear()}. All
                            rights are reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

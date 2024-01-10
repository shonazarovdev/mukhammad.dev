import { FC } from "react";
import { TSocialMediaList } from "../helpers/types";

interface IFooter {
    data: TSocialMediaList[];
}

export const Footer: FC<IFooter> = ({ data }) => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__container">
                    <div className="footer__body">
                        <p className="footer__text">
                            Copyright &copy; {new Date().getFullYear()}. All
                            rights are reserved
                        </p>
                        <ul className="footer__main footer-list">
                            {data.map((item) => (
                                <li className="footer-list__item" key={item.id}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-list__link"
                                        title={item.name}
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

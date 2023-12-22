import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-white text-black flex flex-row justify-evenly items-center">
                <aside>

                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title text-lg">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://twitter.com/'><FaTwitter className="text-lg" /></Link>
                        <Link to="https://facebook.com/"><FaFacebook className="text-lg" /></Link>
                        <Link to="https://instagram.com/"><FaInstagram className="text-lg" /></Link>
                    </div>
                </nav>
            </footer>
            <aside className="text-center mb-5">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;
import './navbar.css';
import Logo from '../../assets/logo.png';
import { MdOutlineWatchLater } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <>
        <header className="header-section">
            <nav className="navbar">
                <div className="top-nav common-padding">
                    <div className="top-left-nav">
                        <MdOutlineWatchLater className="icons"/>
                        Monday - Saturday, 8AM to 10PM
                    </div>
                    <div className="top-right-nav">
                        <BsPhone className="icons"/>
                        Call us now +1 5589 55488 55
                    </div>
                </div>
                <div className="bottom-nav common-padding">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="nav-links">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Departments</a></li>
                        <li><a href="/">Doctors</a></li>
                        <li><a href="/">Dropdown<IoIosArrowDown className="icons" /></a></li>
                        <li><a href="/">Contact</a></li>
                        <span className="common-btn">
                            <a href="/" className="btn">Make an Appointment</a>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
};

export default Navbar;
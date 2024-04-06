import React from 'react';
import Logo from '../images/Logo.png'; // Import your image


function NavbarBootstrap() {
    const handleGetAppClick = () => {
        const getAppSection = document.getElementById('GetApp');
        if (getAppSection) {
            getAppSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={Logo} // Use the imported image here
                            alt="" width={66} height={66} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Destinations">Destinations</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="navbutton" type="button" onClick={handleGetAppClick}>Get the app</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarBootstrap;

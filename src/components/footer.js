import React, { useState } from 'react';
import Logo from '../images/Logo.png'; // Import your image
import Facebook from '../images/facebook.png'; // Import your image
import Instagram from '../images/instagram.png'; // Import your image
import Tiktok from '../images/tiktok.png'; // Import your image
import Twitter from '../images/twitter.png'; // Import your image

function Footer() {
    const [value1, setValue1] = useState("Space traveller name");
    const [color1, setColor1] = useState("#180C60"); // Default text color for field1

    const [value2, setValue2] = useState("Contact email address");
    const [color2, setColor2] = useState("#180C60"); // Default text color for field2

    const handleClick1 = () => {
        setValue1("The Martian");
        setColor1("white");
    };

    const handleClick2 = () => {
        setValue2("martian@space.com");
        setColor2("white");
    };


    return (
        <div className="App">
            <div className="footer">
                <div className="Footer1">
                    <h4>SUBSCRIBE TO STAY UPDATED</h4>
                    <form className="form-inline">
                        <div className="input-container">
                            <input
                                className="field1"
                                value={value1}
                                onClick={handleClick1}
                                onChange={(e) => setValue1(e.target.value)}
                                style={{ color: color1 }} /> {/* Apply color style */}
                            <input
                                className="field2"
                                value={value2}
                                onClick={handleClick2}
                                onChange={(e) => setValue2(e.target.value)}
                                style={{ color: color2 }} /> {/* Apply color style */}
                            <button className="button2" type="submit">Join newsletter</button>
                        </div>
                    </form>
                </div>
                <div className="Footer2" style={{ display: 'flex' }}>
                    <div>
                        <img
                            src={Logo} // Use the imported image here
                            alt="" width={66} height={66} />
                        <p>Your Name © 2024</p>
                    </div>
                    <div style={{ marginLeft: '735px' }}>
                        <p><b>Links</b><br /></p>
                        <a className="nav-link" href="#Home">Home</a><br />
                        <a className="nav-link" href="#Destinations">Destinations</a> <br />
                        <a className="nav-link" href="#GetApp">Mobile App</a>  <br />
                    </div>
                    <div style={{ marginLeft: '86px' }}>
                        <p><b>Follow us</b></p>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '12px', marginBottom: '10px' }}>
                                <img
                                    src={Instagram} // Use the imported image here
                                    alt="" width={37} height={37} />
                            </div>
                            <div>
                                <img
                                    src={Tiktok} // Use the imported image here
                                    alt="" width={37} height={37} />
                            </div>

                        </div>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '12px' }}>
                                <img
                                    src={Facebook} // Use the imported image here
                                    alt="" width={37} height={37} />
                            </div>
                            <div>
                                <img
                                    src={Twitter} // Use the imported image here
                                    alt="" width={37} height={37} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Footer;

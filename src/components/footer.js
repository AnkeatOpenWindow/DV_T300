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
                                style={{ color: color1 }} // Dynamically set text color
                                onClick={handleClick1}
                                onChange={(e) => setValue1(e.target.value)} />

                            <input
                                className="field2"
                                value={value2}
                                style={{ color: color2 }} // Dynamically set text color
                                onClick={handleClick2}
                                onChange={(e) => setValue2(e.target.value)} />


                            <button className="button2" type="submit">Join newsletter</button>
                        </div>
                    </form>
                </div>
                <div className="Footer2" style={{ display: 'flex' }}>
                    {/* Your other content */}
                </div>
            </div>
        </div>
    );
}

export default Footer;

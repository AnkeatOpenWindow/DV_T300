import React from 'react';
import Mars from '../images/mars (3) 2.png'; // Import your image
import Saturn from '../images/mars (3) 3.png'; // Import your image
import Pluto from '../images/mars (3) 1.png'; // Import your image
import Phone from '../images/Apple iPhone 15 Pro White Titanium 1.png';
import Man from '../images/vecteezy_astronauta-png-grafico-clipart-diseno_20003935 1.png';

function Landing() {

    const handleGetAppClick = () => {
        const getAppSection = document.getElementById('GetApp');
        if (getAppSection) {
            getAppSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDestinationsClick = () => {
        const destinationsSection = document.getElementById('Destinations');
        if (destinationsSection) {
            destinationsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <div id="Home" className="landing-page">

                <div className="Header">
                    <p style={{ fontSize: "24px", paddingBottom: "32px" }}>Tired Of Global Warming?</p>
                    <h1 style={{ fontSize: "56px", paddingBottom: "32px" }}>VISIT A DIFFERENT PLANET</h1>
                    <p style={{ fontSize: "20px", paddingBottom: "32px" }}>Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.</p>
                    <div style={{ display: "flex", gap: "32px", marginLeft: "480px" }}>
                        <button className="button1" type="button" onClick={handleDestinationsClick}>Destinations</button>
                        <button className="button2" type="button" onClick={handleGetAppClick}> Stay up-to date</button>
                    </div>
                </div>

                <div id="Destinations" className="Destination">
                    <h1 style={{ paddingBottom: "32px", width: "714px", marginLeft: "320px" }}>A STELLAR SELECTION</h1>
                    <p style={{ fontSize: "20px", paddingBottom: "32px", width: "676px", marginLeft: "320px" }}>Explore three breathtaking destinations, each with its own unique charm and mystery.</p>
                    <div style={{ display: "flex", gap: "32px" }}>
                        <div className="card" style={{ marginLeft: "80px", paddingLeft: "32px" }}>
                            <img
                                src={Mars} // Use the imported image here
                                alt="" width={200} height={200} />
                            <h4 style={{ marginTop: "18px", paddingBottom: "18px", textAlign: "left", color: " white" }}>MARS</h4>
                            <p style={{ fontSize: "14px", color: " white", textAlign: "left" }}>
                                Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!
                            </p>
                        </div>
                        <div className="card" style={{ paddingLeft: "32px" }}>
                            <img
                                src={Saturn} // Use the imported image here
                                alt="" width={200} height={200} />
                            <h4 style={{ marginTop: "18px", paddingBottom: "18px", textAlign: "left", color: " white" }}>MARS</h4>
                            <p style={{ fontSize: "14px", color: " white", textAlign: "left" }}>
                                Experience weightlessness as you float among Saturn's rings to witness the grandeur of the gas giant from close quarters.
                            </p>
                        </div>
                        <div className="card" style={{ paddingLeft: "32px" }}>
                            <img
                                src={Pluto} // Use the imported image here
                                alt="" width={200} height={200} />
                            <h4 style={{ marginTop: "18px", paddingBottom: "18px", textAlign: "left", color: " white" }}>MARS</h4>
                            <p style={{ fontSize: "14px", color: " white", textAlign: "left" }}>
                                Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="GetApp" className='getapp'>
                    <h1 style={{ paddingBottom: "18px", paddingTop: "90px", textAlign: " center" }}>THE STARS IN YOUR POCKET... Coming soon</h1>
                    <p style={{ fontSize: "24px", textAlign: " center" }}>We are very excited to launch our very own <br /> Celestial Voyages mobile application coming soon <br />  to the App Store & Google Play Store.</p>
                    <img
                        className="Phone"
                        src={Phone} // Use the imported image here
                        alt=""
                    />
                    <div>
                        <img
                            className="Man"
                            src={Man} // Use the imported image here
                            alt="" width={133} height={184}
                        />
                    </div>

                </div>



            </div>
        </div>

    );
}


export default Landing;
import React from 'react';

function NavbarBootstrap() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/b2b8/6a08/d2c6986aa811bdd056d2d3db12a80617?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGH~NqHgkFsu7JFhZ7uuvIln2yphQMHqpfiHeGQgB992g16vtkqYsqxYSGG7aUG8yujeGnJRZmiGBMo4~IvLSRxufHmsdZqVAlVm6t7YNK-fQxUsthy62vYEkGrfsP-EikfpkSMcaQqXJ1zfGne7z6KpxkrUOWdDlBCKIPVxWzNxdaXPQOTJ~g6luy1iw9ZUkBlDQIcFGNfbhg1T8Cw~Bx8dvbskZdHtRlYjIdUHDj8i6yi175nq4H2hf7Kdyvh2TODiC~IP9-~BhdedtUqdNik4iwIIHOauvZJxiIZOELoXhjvLhRCWG9~O2JTUEg-NPsSuychO90ApTfYG03b2sQ__"
                            alt="" width={66} height={66} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="button" type="submit">Get the app</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarBootstrap;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img src="/robot.png" alt="APP Icon" height="100px" width="100px" className="mr-2" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Collection
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/your-bot-army">
              Bot Army
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img src="/robot.png" alt="APP Icon" height="100px" width="100px" className="mr-2" />
        {/* Use the correct path to your logo image */}
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* Use the 'ml-auto' class to push links to the right */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Collection
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/your-bot-army">
              Bot Army
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

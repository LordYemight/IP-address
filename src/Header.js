// Header.js
import React from 'react';

const Header = ({ level, handleInputChange, fetchIpAddress, icon, errorMessage }) => {
  return (
    <div className="header">
      <h2 className="text">IP-Address Tracker</h2>
      <div className="iconn">
        <input
          type="text"
          placeholder="192.212.174.101"
          className="search"
          value={level}
          onChange={handleInputChange}
        />
        <div className="ic">
          <img src={icon} className="icon" onClick={fetchIpAddress} alt="Search" />
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Header;

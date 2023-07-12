import React from 'react';

const Map = ({ ip, location, timeZone, piAddress }) => {
  return (
    <div className="map">
      <div className="ip">
        <h2 className="pi">ISP: {ip}</h2>
        <span className="span"></span>
        <h2 className="pi">LOCATION: {location}</h2>
        <span className="span"></span>
        <h2 className="pi">TIME-ZONE: {timeZone}</h2>
        <span className="span"></span>
        <h2 className="pi">IP-ADDRESS: {piAddress}</h2>
      </div>
    </div>
  );
}

export default Map;

import { useState } from 'react';
import icon from './images/icon-arrow.svg';
import './App.css';

function App() {
  const [level, setLevel] = useState('');
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [piAddress, setPiAddress] = useState('');

  const list = (e) => {
    setLevel(e.target.value);
  };

  async function ipAddress() {
    const data = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_3jdxe64utbNIhR5iYxrbNmwChSIop&ipAddress=${level}`
    );
    const result = await data.json();
    setIp(result.isp);
    setLocation(result.location.region);
    setTimeZone(result.location.timezone);
    setPiAddress(result.ip);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2 className="text">IP-Address Tracker</h2>
          <div className="iconn">
            <input
              type="text"
              placeholder="192.212.174.101"
              className="search"
              onChange={list}
            />
            <div className="ic">
              <img src={icon} className="icon" onClick={ipAddress} alt="Search" />
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default App;

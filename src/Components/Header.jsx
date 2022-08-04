import React from 'react';
import reactLogo from '../assets/react.svg';

export default function Header(){
return (
  <div className="nav">
  <ul className="headerTitle">
    <li><img className="logo" src={reactLogo} alt="React logo" /></li>
    <li><h3 className="headerTitle">TOUROFHEROES</h3></li>
  </ul>   
  </div>
);
}

import React from "react";

import logo from "../images/rsz_1smurf_png5.png";

export default function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='Smurfs' />
    </div>
  );
}

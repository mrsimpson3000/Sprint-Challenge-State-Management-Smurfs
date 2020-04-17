import React from "react";

import logo from "../images/rsz_smurf_png5.png";

export default function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='Smurfs' />
    </div>
  );
}

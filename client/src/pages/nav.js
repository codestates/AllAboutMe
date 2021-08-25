import React from 'react';
import './nav.css';

function Nav(){
  return (
    <>
        <div className='navbar'>
            <div className='nav_container'>
                <div className='logo'>
                    <h2>All About Me</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href=''>Sign up</a></li>
                        <li><a href=''>Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  );
};

export default Nav;
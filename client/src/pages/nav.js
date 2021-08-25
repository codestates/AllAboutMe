import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <>
        <div className='navbar'>
            <div className='nav_container'>
                <div className='logo'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h2>All About Me</h2>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/signup'>Sign up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  );
};

export default Nav;
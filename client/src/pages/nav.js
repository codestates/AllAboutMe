import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav({ isLogin, handleLogout }) {
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
              {isLogin 
              ?null
              :<li>
                <Link to='/signup'>Sign up</Link>
              </li>
              }
              {isLogin
              ?<li onClick={handleLogout}>
              <Link to='/'>Logout</Link>
            </li>
              :<li>
                <Link to='/login'>Login</Link>
              </li>
              } 
              {isLogin
              ?<li>
                <Link to='/mypage'>My</Link>
              </li>
              : null
              }
              <li>
                <Link to='/test'>Test</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;

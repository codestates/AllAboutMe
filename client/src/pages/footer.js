import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <div>
        <div className='footer'>
          <div className='footer_container'>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href='https://github.com/loverduck'>Yoo So-yeon</a>
              </li>
              <li>
                <a href='https://github.com/james-taeil'>Kim Tae-il</a>
              </li>
              <li>
                <a href='https://github.com/cue28'>Jeon Si-yoon</a>
              </li>
              <li>
                <a href='https://github.com/soowan-jang'>Jang Soo-wan</a>
              </li>
            </ul>
          </div>
          <div className='footer_container'>
            <h3>About Us</h3>
            <ul>
              <li>
                <a href='https://github.com/codestates/AllAboutMe/wiki'>Wiki</a>
              </li>
              <li>
                <a href=''>Client Repository</a>
              </li>
              <li>
                <a href=''>Server Repository</a>
              </li>
            </ul>
          </div>
          <div className='footer_container_logo'>
            <img src='/logo4.png' alt='logo' className='footer_logo' />
          </div>
        </div>
        <div className='footer_bottom'>
          <p>copyright &copy;2021 슬기로운 코딩생활 all right reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

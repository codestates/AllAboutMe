import React, { useState } from 'react';
import Footer from './footer';
import './mypage.css';

function Mypage({ user, userInfo }) {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'My Favorites', content: '#닭가슴살' },
    { name: 'My Post', content: '간식이 좋아요' },
    { name: 'Modifying', content: 'Modifying' },
    { name: 'Delete Account', content: 'Delete Account' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className='mypage_container'>
        <div className='mypage_userInfo'>
          <div className='userInfo_img'>
            <img src={user.img} alt=''/>
          </div>
          <divn className='userInfo_detail'>
            <span>name : {userInfo.name}</span>
            <span>email : {userInfo.email}</span>
            <span>phone : {userInfo.phone}</span>
          </divn>
        </div>
        <div className='mypage_tabContainer'>
          <div className='mypaga_tabMenu'>
            {menuArr.map((item, index) => {
              return (
                <li
                  className={
                    currentTab === index ? 'tabmenu focused' : 'tabmenu'
                  }
                  onClick={() => selectMenuHandler(index)}
                >
                  {item.name}
                </li>
              );
            })}
          </div>
          <div className='currentTab'>
            <p>{menuArr[currentTab].content}</p>
          </div>
        </div>
        <footer className='mypage_footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Mypage;
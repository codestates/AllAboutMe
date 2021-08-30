import React, { useState } from 'react';
import './mypage.css';
import styled from 'styled-components';

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 700px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #8EC0E4;
        > .tag-title {
          background-color: #8EC0E4;
        }
        > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #8EC0E4;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

function Mypage({ user, userInfo }) {
  const [currentTab, setCurrentTab] = useState(0);
  const initial = ['coding', 'rice'];
  //setTags DB에서 받아오기

  const [favorite, setFavorite] = useState(initial);

  const removeTags = (indexToRemove) => {
    setFavorite(favorite.filter((el, index) => index !== indexToRemove))
  }

  const menuArr = [
    { name: 'My Favorites', content: '' },
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
            <p>{currentTab === 0 
            ? <TagsInput>
            <ul id='tags'>
              {favorite.map((tag, index) => {
                return <li key={index} className='tag'>
                  <span className='tag-title'>{tag}</span>
                  <span 
                    className='tag-close-icon'
                    onClick={() => removeTags(index)}
                  >
                    &times;
                  </span>
                </li>
              })}
            </ul>
          </TagsInput>
            :menuArr[currentTab].content}</p>
          </div>
        </div>
        {/* <footer className='mypage_footer'>
          <Footer />
        </footer> */}
      </div>
    </>
  );
}

export default Mypage;
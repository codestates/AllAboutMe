import React, { useEffect, useState } from 'react';
import './mypage.css';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './footer';

//!styled in js


export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width:100%;
  margin:auto;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  @media only screen and (max-width: 850px) {
    width: 450px
  }

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
      background: #8ec0e4;
      > .tag-title {
        background-color: #8ec0e4;
      }
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #8ec0e4;
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

export const ModifyInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  @media only screen and (max-width: 850px) {
    width: 450px
  }

  > input {
    text-decoration: none;
    border: solid 0px;
    border-bottom: solid 2px #8ec0e4;
    height: 20px;
    margin: 15px;
    outline: none;
    font-size: 20px;
    width: 250px;
    background-color: #00ff0000;
  }
  > button {
    border-radius: 25px;
    border: solid 2px #8ec0e4;
    outline: 0;
    height: 50px;
    margin: 10px;
    margin-bottom: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 17px;
    color: #8ec0e4;
    width: 200px;
  }
`;

export const DeleteUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  padding: 10px;

  @media only screen and (max-width: 850px) {
    width: 450px
  }
  
  > div {
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
  }
  > input {
    border-radius: 25px;
    border: solid 2px #8ec0e4;
    outline: 0;
    height: 50px;
    margin: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 17px;
    color: #8ec0e4;
    width: 200px;
  }
`;

//!mypage ??????
function Mypage({
  user,
  userInfo,
  newUserInfo,
  setNewUserInfo,
  favorite,
  setFavorite,
  serverURL,
  handleLogout,
  setUserInfo,
  getFavorite
}) {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = ['My Favorites', 'Modifying', 'Delete Account'];

  useEffect(() => {
    getFavorite();
  }, [])

  //!tag ???????????? ??????
  const removeTags = (indexToRemove) => {
    const deleteFavorite = favorite.filter((el, index) => index === indexToRemove)
    const deleteFavoriteId = deleteFavorite[0].id
    console.log(deleteFavoriteId)
   
    setFavorite(favorite.filter((el, index) => index !== indexToRemove));
    const accessToken = localStorage.getItem('accessToken');
    console.log('hello');
    axios
      .delete(`${serverURL}/user/favorite`, {
        data : {
          id : deleteFavoriteId
        },
        headers: { Authorization: `bearer ${accessToken}`},
        withCredentials: true
      })
      .then((res) => {
        if(res.status === 200) console.log('OK!')
      })
      .catch((err) => console.log(err));
  };

  //!??? ?????? ??????
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  //!???????????? ?????? ???, ????????? ??? ???????????? ??????
  const handleInputValue = (key) => (e) => {
    setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
  };

  //!???????????????
  function isCelluar(asValue) {
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    return regExp.test(asValue);
  }

  function isJobPassword(asValue) {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regExp.test(asValue);
  }

  //!?????? ?????? ????????? ????????????
  const handleModifyUserInfo = () => {
    const { password, name, phone } = newUserInfo;
    const accessToken = localStorage.getItem('accessToken');
    if (password || name || phone) {
      if (password && !isJobPassword(password)) {
        alert(
          '?????? 8???, ????????? ??????, ????????? ????????? ????????????????????????.'
        );
        return;
      }
  
      if (phone && !isCelluar(phone)) {
        alert('????????????(010-####-####)????????? ???????????????.');
        return;
      }
      axios
        .put(
          `${serverURL}/user/info`,
          { password, name, phone },
          {
            headers: { Authorization: `bearer ${accessToken}` },
            withCredentials: true,
          }
        )
        .then((res) => {
          const { name, email, phone } = res.data.data;
          setUserInfo({
            name: name,
            email: email,
            phone: phone,
          });
          alert('??????????????? ?????????????????????.');
          document.getElementById('modify_name').value = null;
          document.getElementById('modify_password').value = null;
          document.getElementById('modify_phone').value = null;
        })
        .catch((err) => console.log(err));
    }
  };

  //!???????????? ?????? ??????
  const handleDeleteUser = () => {
    let result = window.confirm('?????? ?????????????????????????');
    const accessToken = localStorage.getItem('accessToken');

    if (result) {
      console.log('yes');
      axios
        .delete(`${serverURL}/user/info`, {
          headers: { Authorization: `bearer ${accessToken}` },
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            alert('??????????????? ?????????????????????.');
            setFavorite([]);
            handleLogout();
          }
        });
    } else {
      return false;
    }
  };

  return (
    <>
      <div className='mypage_container'>
        <div className='mypage_userInfo'>
          <div className='userInfo_img'>
            <img src={user.img} alt='' />
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
                  {item}
                </li>
              );
            })}
          </div>
          <div className='currentTab'>
            <p>
              {currentTab === 0 ? (
                <TagsInput>
                  <ul id='tags'>
                    {favorite.map((tag, index) => {
                      return (
                        <li key={index} className='tag'>
                          <span className='tag-title'>{tag.name}</span>
                          <span
                            className='tag-close-icon'
                            onClick={() => removeTags(index)}
                          >
                            &times;
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </TagsInput>
              ) : currentTab === 1 ? (
                <ModifyInput>
                  <input
                    id='modify_name'
                    placeholder='Name'
                    type='name'
                    className='modify_name'
                    onChange={handleInputValue('name')}
                  ></input>
                  <input
                    id='modify_password'
                    placeholder='Password'
                    type='password'
                    className='modify_password'
                    onChange={handleInputValue('password')}
                  ></input>
                  <input
                    id='modify_phone'
                    placeholder='Phone Number'
                    type='text'
                    className='modify_phone'
                    onChange={handleInputValue('phone')}
                  ></input>
                  <button onClick={handleModifyUserInfo}>Modify</button>
                </ModifyInput>
              ) : (
                <DeleteUser>
                  <div>?????? ?????????????????????????</div>
                  <input
                    id='tblbutton'
                    type='button'
                    value='Delete Accout'
                    onClick={handleDeleteUser}
                  />
                </DeleteUser>
              )}
            </p>
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

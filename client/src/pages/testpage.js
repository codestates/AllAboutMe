import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './testpage.css';

function TestPage({ serverURL, isTestid }) {
  const [selectList, setSelectList] = useState([]);

  const getSelectList = () => {
    axios
      .get(`${serverURL}/test/${isTestid}`, {
        'Content-Type': 'application/json',
        withCredentials: true,
      })
      .then((res) => {
        setSelectList(res.data.data.test);
      });
  };
  console.log(selectList)

  useEffect(() => {
    getSelectList();
  }, []);

  return (
    <div className='testpage_container'>
      <div className='testpage_tournament_score'> 1/16</div>
      <div className='testpage_match_name'>🥊 예선전</div>
      {selectList.map((select, index) => {
        return (<div>
        <div>
        <img src={select.image} alt={select.name} />
        <div>한식</div>
      </div>
      <div>VS</div>
      <div>
        <img src='' alt='' />
        <div>한식</div>
      </div>
      </div>)})
      }
    </div>
  );
}

export default TestPage;

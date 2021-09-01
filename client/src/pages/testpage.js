import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './testpage.css';
import Footer from './footer';


function TestPage({ selectList }) {

  // const [remain, setRemain] = useState(0);
  // const [roundName, setRoundName] = useState(['예선전']);
  const [category, setCategory] = useState(selectList);
  const [remain, setRemain] = useState(category.length);
  const [roundName, setRoundName] = useState(['예선전']);
  const [selectCnt, setSelectCnt] = useState(0);
  const [round, setRound] = useState(1); 
  const [display, setDisplay] = useState([]);
  const [select, setSelect] = useState([]);

  useEffect(() => {
    category.sort(() => Math.random() - 0.5);
    setCategory(category);
    setDisplay([category[selectCnt], category[selectCnt + 1]]);
  }, []);

  useEffect(() => {
    if (round >= remain) {

      setDisplay(select);
    } else if (selectCnt === category.length) {
      setCategory(select);
      setSelectCnt(0);
      setSelect([]);
    } else {
      setSelectCnt(selectCnt + 2);
      setDisplay([category[selectCnt], category[selectCnt + 1]])
    }
    console.log(select, round, remain);
  }, [select])

  const handleRoundName = () => {
    if (selectList.length - 2 === round) {
      setRoundName('결승전')
    } else if (selectList.length - 5 === round) {
      setRoundName('4강전')
    } else if (remain - 9 === round) {
      setRoundName('8강전');
    }
  }

  const clickEvent = (data) => {
    if (selectList.length - 1 === round && select.length === 1) {
      console.log('1등')
    }
    setRound(round + 1);
    handleRoundName();
    setSelect([...select, data]);
  }

  return (
    <div className='testpage_container'>
      <div className='testpage_tournament_score'> {round}/{remain}
      </div>     
      <div className='testpage_match_name'>🥊 {roundName}</div>
      <div className='testpage_body_wrap'>
        {display.map(el => {
          return (
            <div key={el.id} className='testpage_matchImg_matchBtn_container'>
              <div className='testpage_matchImg_box'>
                <img
                  className='testpage_matchImg'
                  src={el.image}
                  alt={el.name}
                />
              </div>
              <div>
                <button className='testpage_btn' onClick={() => clickEvent(el)}>{el.name}</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='testpage_footer'>
      <Footer />
      </div>
      </div>
  );
}

export default TestPage;

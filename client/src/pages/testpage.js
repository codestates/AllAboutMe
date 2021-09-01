import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './testpage.css';


function TestPage({ selectList }) {

  // const [remain, setRemain] = useState(0);
  // const [roundName, setRoundName] = useState(['예선전']);
  const [category, setCategory] = useState(selectList);

  
  
  useEffect(() => {
    category.sort(() => Math.random() - 0.5)
    
  }, []);



  function clickEvent (data) {

  }


  

  return (
    <div className='testpage_container'>
      <div className='testpage_tournament_score'> 1/{}
      </div>     
      <div className='testpage_match_name'>🥊 {}</div>
      <div className='testpage_body_wrap'>
        {category.map(el => {
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
      </div>
  );
}

export default TestPage;

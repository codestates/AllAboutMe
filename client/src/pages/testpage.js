import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './testpage.css';

async function TestPage({ isTestid }) {
  
  const [category, setCategory] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [display, setDisplay] = useState([]);
  const [winners, setWinners] = useState([]);
  const [remain, setRemain] = useState(category.length);
  const [roundName, setRoundName] = useState(['예선전']);
  const [pairList, setPairList] = useState([]);
  
  
  useEffect(() => {
    category.sort(() => Math.random() - 0.5)
    setImgs(category)
    setDisplay([category[0], category[1]])
    setRemain(category.length)
  }, []);
  
  function clickHandler (img) {

    if (img.length <= 2){
      if (winners.length === 0){
        setDisplay([img]);
      }
      else{
        let updatedImg = [...winners, img];
        setImgs(updatedImg);
        setDisplay([updatedImg[0], updatedImg[1]]);
        setWinners([]);
      }

    }else if(imgs.length > 2){
      setWinners([...winners, img]);
      setDisplay([imgs[2], imgs[3]]);
      setImgs(imgs.slice(2));
    }
    setRemain(remain-1)
    if(remain === 3){
      setRoundName('결승전')
    }
    if(remain === 2){
      setRoundName('당첨!')
    }
    console.log(winners)
    console.log(imgs.length)
    console.log('imgs',imgs)
  }

  // select list 값 가져오기
  
  await axios.get(
    `http://localhost:4000/test/${isTestid}`,
  {'Content-Type': 'application/json', 'withCredentials': true}
  )
  .then((data) => {
    let test = data.data.data.test;
    console.log(test)
    setCategory(test)
  })
  


  return (
    <div className='testpage_container'>
      <div className='testpage_tournament_score'> 1/{remain}
      </div>
      <div className='testpage_match_name'>🥊 {roundName}</div>
      <div className='testpage_body_wrap'>
        {category.map(el => {
          return (
            <div className='testpage_matchImg_matchBtn_container'>
              <div className='testpage_matchImg_box'>
                <img
                  className='testpage_matchImg'
                  src={el.image}
                  alt={el.name}
                />
              </div>
              <div>
                <button className='testpage_btn' onClick={clickHandler(el)}>{el.name}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default TestPage;

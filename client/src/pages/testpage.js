import React, { useState, useEffect} from 'react';
import './testpage.css';

function TestPage() {
  const category = [
    { id: 1, name: '카페', img: '/1starbucks.jpg' },
    { id: 2, name: '운동', img: '/1dog.png' },
    { id: 3, name: '동물', img: '/2dog.png' },
    { id: 4, name: '한식', img: '/3dog.png' },
    { id: 5, name: '운동', img: '/4dog.png' },
    { id: 6, name: '동물', img: '/5dog.png' },
    { id: 7, name: '카페', img: '/1starbucks.jpg' },
    { id: 8, name: '운동', img: '/1dog.png' },
    { id: 9, name: '동물', img: '/2dog.png' },
    { id: 10, name: '카페', img: '/1starbucks.jpg' },
    { id: 11, name: '운동', img: '/1dog.png' },
    { id: 12, name: '동물', img: '/2dog.png' },
    { id: 13, name: '한식', img: '/3dog.png' },
    { id: 14, name: '운동', img: '/4dog.png' },
    { id: 15, name: '동물', img: '/5dog.png' },
    { id: 16, name: '카페', img: '/1starbucks.jpg' },
  ];

    const [imgs, setImgs] = useState([]);
    const [display, setDisplay] = useState([]);
    const [winners, setWinners] = useState([]);
    const [remain, setRemain] = useState(category.length);
    const [roundName, setRoundName] = useState(['예선전']);


    useEffect(()=>{
      category.sort(()=> Math.random() - 0.5)
      setImgs(category)
      setDisplay([category[0], category[1]])
      setRemain(category.length)
    },[]);
    
    const clickHandler = img => () => {
      
      if (imgs.length <= 2){
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
      // console.log(winners)
      // console.log(imgs.length)
      // console.log('imgs',imgs)
    }

  return (
    <div className='testpage_container'>
      <div className='testpage_tournament_score'> 1/{remain}
      </div>
      <div className='testpage_match_name'>🥊 {roundName}</div>
      <div className='testpage_body_wrap'>
        {display.map(el=>{
          return(
        <div className='testpage_matchImg_matchBtn_container'>
          <div className='testpage_matchImg_box'>
            <img
              className='testpage_matchImg'
              src={el.img}
              alt={el.name}
            />
          </div>
          <div>
            <button className='testpage_btn' onClick={clickHandler(el)}>{el.name}</button>
          </div>
        </div>
        )})}
      </div>
    </div>
  );
}

export default TestPage;

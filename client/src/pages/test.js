import React,{ useState }from 'react';
import './test.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

function Test(){
  const category = [
    [
      { 'id' : 1, 'name' : '카페', 'img' : '/1starbucks.jpg'},
      { 'id' : 2, 'name' : '운동', 'img' : '/1dog.png'},
      { 'id' : 3, 'name' : '동물', 'img' : '/2dog.png'}
    ],
    [
      { 'id' : 4, 'name' : '한식', 'img' : '/3dog.png'},
      { 'id' : 5, 'name' : '운동', 'img' : '/4dog.png'},
      { 'id' : 6, 'name' : '동물', 'img' : '/5dog.png'},
    ],
    [
      { 'id' : 1, 'name' : '카페', 'img' : '/1starbucks.jpg'},
      { 'id' : 2, 'name' : '운동', 'img' : '/1dog.png'},
      { 'id' : 3, 'name' : '동물', 'img' : '/2dog.png'}
    ]
  ]

  const [currentImg, setCurrentImg] = useState(0)

  const previewArrow = (index) => {
    currentImg === 0 ? setCurrentImg(currentImg) : setCurrentImg(currentImg-1)
  }

  const nextArrow = (index) => {
    currentImg === category.length-1 ? setCurrentImg(currentImg) : setCurrentImg(currentImg+1)
  }

  return (
    <div className='test'>
      <div className='test_container'>
        <div className='test_arrow_left' onClick={() => previewArrow(currentImg)}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrow'/>
        </div>
        <div className='test_imgbox'>
          {category[currentImg].map((item, index) => {
            return (<div className={index === currentImg?'test_img slide active':'test_img slide' }>
                      <img src={item.img} alt={item.name}/>
                    </div>)         
          })}
        </div>
        <div className='test_arrow_right' onClick={() => nextArrow(currentImg)}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow'/>
        </div>
      </div>
    </div>
  );
};

export default Test;
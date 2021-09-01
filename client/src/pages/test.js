import React from 'react';
import './test.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';

function Test({ handleCatagory, categorys, testId, selects, serverURL}) {
  const history = useHistory();
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };  

  // const category = [
  //   { id: 1, name: '카페', img: '/1starbucks.jpg' },
  //   { id: 2, name: '운동', img: '/1dog.png' },
  //   { id: 3, name: '동물', img: '/2dog.png' },
  //   { id: 4, name: '한식', img: '/3dog.png' },
  //   { id: 5, name: '운동', img: '/4dog.png' },
  //   { id: 6, name: '동물', img: '/5dog.png' },
  // ];

  function loadTest() {
    axios.get(
      `${serverURL}/test`,
      { 'Content-Type': 'application/json', 'withCredentials': true }
    )
      .then((data) => {
        let testList = data.data.data.testList;
        handleCatagory(testList)
      })
  }

  if (categorys.length === 0) {
    loadTest()
  }

  function selectList(testId) {
    axios.get(
      `${serverURL}/test/${testId}`,
      { 'Content-Type': 'application/json', 'withCredentials': true }
    )
      .then((data) => {
        let test = data.data.data.test.sort(() => Math.random() - 0.5);
        selects(test);
      })
  }

  function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
  }

  async function clickImage(value) {
    let endpoint = value.id
    await testId(endpoint)
    await selectList(endpoint)
    await delay(200)
    history.push(`/test/${endpoint}`)
  }
  
  return (
    <div className='test'>
      <div className='test_container'>
        <Slider {...settings}>
          {categorys.map((item) => {
            return (
              <div key={item.id} className='test_container'>
                <div className='test_imgbox'>
                  <img onClick={() => clickImage(item)} src={item.image} alt='' />
                </div>
                  <a className='test_text'>{item.name}</a>
              </div>
            );
          })} 
          
        </Slider>
      </div>
    </div>
  );
}

export default withRouter(Test);
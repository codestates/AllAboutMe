import React from 'react';
import './test.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import { withRouter, useHistory, Redirect } from 'react-router-dom';
import Footer from './footer';
import styled from 'styled-components';

function Test({ handleCatagory, categorys, testId, selects, serverURL}) {
  const history = useHistory();
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots : true,
    arrows : true,
    responsive: [
      {
        breakpoint:960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:850,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };  

  const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    font-size:30px;
    color: #8ec0e4;
    left: 0;
  }
  .slick-next:before {
    font-size:30px;
    color: #8ec0e4;
  }`

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
        <Wrap>
        <Slider {...settings}>
          {categorys.map((item) => {
            return (
              <div key={item.id} className='test_container'>
                <div className='test_imgbox'>
                  <img onClick={() => clickImage(item)} src={item.image} alt=''/>
                </div>
                  <a className='test_text'>{item.name}</a>
              </div>
            );
          })} 
          
        </Slider>
        </Wrap>
      </div>
      <div className='test_footer'>
      <Footer />
      </div>
    </div>
  );
}

export default withRouter(Test);
/* eslint-disable */

import React,{ useState } from 'react';
import './testpage.css'

function TestPage(){

  const category = [
    
      { 'id' : 1, 'name' : '카페', 'img' : '/1starbucks.jpg'},
      { 'id' : 2, 'name' : '운동', 'img' : '/1dog.png'},
      { 'id' : 3, 'name' : '동물', 'img' : '/2dog.png'},
      { 'id' : 4, 'name' : '한식', 'img' : '/3dog.png'},
      { 'id' : 5, 'name' : '운동', 'img' : '/4dog.png'},
      { 'id' : 6, 'name' : '동물', 'img' : '/5dog.png'},
      { 'id' : 7, 'name' : '카페', 'img' : '/1starbucks.jpg'},
      { 'id' : 8, 'name' : '운동', 'img' : '/1dog.png'},
      { 'id' : 9, 'name' : '동물', 'img' : '/2dog.png'},
      { 'id' : 10, 'name' : '카페', 'img' : '/1starbucks.jpg'},
      { 'id' : 11, 'name' : '운동', 'img' : '/1dog.png'},
      { 'id' : 12, 'name' : '동물', 'img' : '/2dog.png'},
      { 'id' : 13, 'name' : '한식', 'img' : '/3dog.png'},
      { 'id' : 14, 'name' : '운동', 'img' : '/4dog.png'},
      { 'id' : 15, 'name' : '동물', 'img' : '/5dog.png'},
      { 'id' : 16, 'name' : '카페', 'img' : '/1starbucks.jpg'},
  ]

  const tmp = category
  const tmpLen = tmp.length

  const [currentImg, setCurrentImg] = useState(tmpLen);

  const remain_img = () =>{
    tmp.shift()
    tmp.shift()
    console.log('ㄴㅏ오ㅏ라',tmp)
    setCurrentImg(tmpLen)
  }


  //버튼 누르면 누른 버튼의 사진은 그대로 두고,
  //다른 쪽 사진을 바꾼다.
  //배열의 길이가 0이 되면 마지막 남은 사진만 남겨두고
  //저장을 할수 있게 한다.

  const length = category.length



  return (
    <div className="testpage_container">
      <div className="testpage_tournament_score"> 1/{tmpLen} </div>
      <div className="testpage_match_name">🥊 예선전</div>
      <div className="testpage_body_wrap">
        <div className="testpage_matchImg_matchBtn_container">
          <div className="testpage_matchImg_box">
            <img className="testpage_matchImg" src={tmp[1].img} alt={category.name} />
          </div>
          <div>
            <button className="testpage_btn" onClick={()=>remain_img()}>{tmp[1].name}</button>
          </div>
        </div>
        <div className="testpage_match_vs"> 
        VS
        </div>
        <div className="testpage_matchImg_matchBtn_container">
          <div className="testpage_matchImg_box">
            <img className="testpage_matchImg"src={tmp[2].img} alt={category.name} />
          </div>
            <button className="testpage_btn" onClick={()=>remain_img()}>{tmp[2].name}</button>
        </div>
      </div>
    </div>
  );
};


export default TestPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import './home.css'


function Home(){
  //!슬라이드 코드 (시간 남으면 합시다.)
  // const saTriggerMargin = 300;
  // const saElementList = document.querySelectorAll('.sa');

  // const saFunc = function() {
  //   for (const element of saElementList) {
  //     if (!element.classList.contains('show')) {
  //       if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
  //         element.classList.add('show');
  //       }
  //     }
  //   }
  // }

  // window.addEventListener('load', saFunc);
  // window.addEventListener('scroll', saFunc);

  return (
    <div className='home'>
      <div className='home_container1'>
        <h1 className='home_bigscreen'>All About Me</h1>
        <h1 className='home_smallscreen'>All About Me</h1>
      </div>
      <div className='sa sa-up home_container2'>
        <img src='/logo3.png' alt='logo'className='home_logo'/>
        <p>자신에 대한 질문에 망설임없이 대답할 수 있으신가요?<br/><br/>
        주변 소음에 치우쳐 바쁜 일상 속,<br/>
        점점 ‘나’ 자신에 대한 기억이 옅어지는 것을 느낄 수 있습니다.<br/><br/>

        All About Me는<br/>
        내가 무엇을 좋아하는지, 나의 관심사는 무엇인지에 대한 고민을 유도하여<br/>
        자신이 원하는 것에 대해 선명해지는 시간을 가질 수 있게 도와줍니다.
        <div className='home_container_button'>
          <Link to='/test'>
            <button type='button' onclick='location.href=signup.js'>start</button>
          </Link>
        </div>
        </p>
      </div>
      <div className='sa sa-up home_container3'>
        <p>'이상형 월드컵 게임'을 바탕으로<br/>
        취향을 선별할 수 있는 서비스입니다.<br/>
        하나의 카테고리 안에 존재하는 다수의 선택지를1:1로 비교하여,<br/>
        본인에게 가장 잘 맞는 취향이 어떤 것인지 알 수 있습니다.</p>
        <img src='/grayimg.png' alt='logo' className='home_testpage'/>
      </div>
      <div className='sa sa-up home_container4'>
        <img src='/grayimg.png' alt='logo' className='home_mypage'/>
        <p>이로써, 스스로에 대해 알아보고 기억할 수 있으며,<br/>
        나아가 취미, 직업관, 가치관 등의 변화, 발전으로 이어질 수 있습니다.<br/>
        또한, post 기능은 공통 관심사를 가진 사람들과 소통할 수 있습니다.
        </p>
      </div>
      <div className='sa sa-up home_button'>
        <Link to='/test'>
          <button type='button' onclick='location.href=signup.js'>start</button>
        </Link>
      </div>
      <footer>
          <Footer />
        </footer>
    </div>
  );
};

export default Home;
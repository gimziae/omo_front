import React from "react";
import styled from "styled-components";
import { AiFillYoutube, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footertag = styled.footer`
  padding: 2em 6em;
  margin: 0 auto;
  z-index: 10;
  .footerWrap {
    border-top: 1px solid #ccc;
    padding-top: 1em;
    p {
      text-align: center;
      font-size: 12px;
      color: #ccc;
    }
    .sns {
      text-align: right;
      padding: 1em;
      svg {
        width: 1.5em;
        height: 1.5em;
        margin: 0 0.5em;
        color: #aaa;
        cursor: pointer;
      }
    }
    .etc {
      text-align: center;

      span {
        margin: 10px;
        font-size: 14px;
        color: #888;
      }
    }
  }
`;

export default function Footer() {
  return (
    <Footertag>
      <div className="footerWrap">
        {" "}
        <div className="etc">
          <span>개인정보처리방침</span>
          <span>이용약관</span>
          <span>APP 다운로드</span>
        </div>
        <div className="sns">
          <AiFillYoutube />
          <AiFillInstagram />
          <AiFillTwitterSquare />
        </div>
        <p>&copy; omo. All Rights Reserved.</p>
      </div>
    </Footertag>
  );
}

{
  /* <footer id="footer">
      <div class="footer_wrap">
        <div class="row">
          <div class="col-3">
            <h3>Bulid & Find</h3>
            <ul>
              <li>나만의 포르쉐 만들기</li>
              <li>포르쉐 인증 중고차 찾기</li>
              <li>포르쉐 센터 찾기</li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Online Services</h3>
            <ul>
              <li>Porsche Financial Services</li>
              <li>뉴스레터 구독</li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Behind the Scenes</h3>
            <ul>
              <li>Passion Motorsports</li>
              <li>Porsche Experience</li>
              <li>Porsche Classic</li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Porsche Company</h3>
            <ul>
              <li>Contact & Information</li>
              <li>Christophorus - The Porsche Magazine</li>
            </ul>
            <div class="sns">
              <div class="row">
                <div class="col-4">
                  <a href="https://www.instagram.com/porsche.korea/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://www.youtube.com/channel/UCiEoJpch2-TwbnojJo0_X_Q" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://www.facebook.com/porsche/" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://www.linkedin.com/company/porsche-ag/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://twitter.com/Porsche/" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://www.pinterest.co.kr/porsche/" target="_blank">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> */
}

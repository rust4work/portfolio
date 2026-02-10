import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요 여러분! 저는{" "}
            <span className="purple">우즈베키스탄 타슈켄트 </span>출신의
            <span className="purple">루스탐입니다.</span> <br />
            현재 <span className="purple">(주)유타운에서</span>{" "}
            <span className="purple">프론트엔드 개발자로</span>. 일하고
            있습니다.
            <br />
            <br />
            코딩 외에도 저에게 창의력과 영감을 주는 활동들을 즐깁니다.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> 게임하기 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> 여행과 새로운 곳 탐험하기 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "항상 노력하고 성공하세요."{" "}
          </p>
          <footer className="blockquote-footer"> 루스탐</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

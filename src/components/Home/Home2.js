import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> 나에 대해 </span>
            </h1>
            <p className="home-about-body">
              저는 아이디어를 안정적이고 확장 가능한 제품으로 구현하는 것을
              좋아하는 소프트웨어 엔지니어입니다. 오랜 시간 동안 다양한 기술을
              탐구해 왔으며, 고성능 시스템과 직관적인 사용자 경험을 구축하는 데
              열정을 쏟고 있습니다.
              <br />
              <br />
              저는 주로
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js, Next.js, 및 API{" "}
                </b>
              </i>
              와 같은 기술 스택을 사용하여 웹 애플리케이션을 개발합니다.
              <br />
              <br />
              가능할 때마다 저는 함께 프로젝트를 진행하는 것을 좋아합니다.
              <b className="purple"> Next.js </b> 그리고 다음과 같은 현대적인
              프레임워크{" "}
              <i>
                <b className="purple">React.js</b> 과{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

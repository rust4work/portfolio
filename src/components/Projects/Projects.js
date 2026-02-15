import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";

import movie from "../../Assets/Projects/movie.png";
import dacooka from "../../Assets/Projects/dcooka.png";

import utown from "../../Assets/Projects/utown.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          제 최근 <strong className="purple">작품 </strong>
        </h1>
        <p style={{ color: "white" }}>
          제가 최근에 참여한 프로젝트 몇 가지를 소개합니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dacooka}
              isBlog={false}
              title="Dacooka"
              description={
                <>
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    Next.js · TypeScript
                  </span>{" "}
                  기반 레시피 추천 웹서비스 개발
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    REST API 연동
                  </span>{" "}
                  및 비동기 데이터 처리 · 상태 관리 구현
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    컴포넌트 단위 설계
                  </span>{" "}
                  로 재사용성과 유지보수성 강화
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    모바일 우선 반응형 UI
                  </span>{" "}
                  구현으로 다양한 디바이스 대응
                </>
              }
              ghLink="https://github.com/rust4work/dacooka"
              demoLink="https://dacooka.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utown}
              isBlog={false}
              title="UTfood"
              description={
                <>
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    실제 서비스 목적
                  </span>{" "}
                  음식 주문 웹애플리케이션 프론트엔드 개발
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    React · Next.js 아키텍처 설계
                  </span>{" "}
                  및 클라이언트 구조 구현
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    REST API 연동
                  </span>{" "}
                  비동기 데이터 처리 · 주문 상태 관리 로직 구현
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    반응형 UI · UX 개선
                  </span>{" "}
                  로딩/에러 처리 최적화로 서비스 안정성 향상
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    협업 및 배포 경험
                  </span>{" "}
                  디자이너 · 백엔드와 협업하여 실제 서비스 배포
                </>
              }
              ghLink="https://github.com/rust4work/utown"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Rate-a-Movie"
              description={
                <>
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    Next.js · TypeScript
                  </span>{" "}
                  기반 영화 검색 및 상세 페이지 웹서비스 개발
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    외부 REST API 연동
                  </span>{" "}
                  비동기 데이터 처리 · 상태 관리 구현
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    SSR (Server Side Rendering)
                  </span>{" "}
                  적용으로 초기 로딩 성능 개선
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    로딩 · 에러 처리 UX
                  </span>{" "}
                  구현으로 사용자 경험 안정성 향상
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    반응형 UI
                  </span>{" "}
                  적용으로 다양한 화면 크기 대응
                </>
              }
              ghLink="https://github.com/rust4work/movie-app"
              demoLink="https://movie-app-one-mu-47.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Platform"
              description={
                <>
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    React · Vite
                  </span>{" "}
                  기반 블로그 플랫폼 프론트엔드 개발
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    게시글 목록 · 상세 페이지
                  </span>{" "}
                  구현 및 페이지네이션 · 동적 라우팅 적용
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    컴포넌트 단위 설계
                  </span>{" "}
                  로 재사용성 · 유지보수성 고려
                  <br />
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                    SCSS 구조 관리
                  </span>{" "}
                  및 반응형 레이아웃 구현
                </>
              }
              ghLink="https://github.com/rust4work/blog-platform"
              demoLink="https://blog-platform-five-red.vercel.app/?page=19"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love to read science non-fiction, my favorite is 
              <i>
                <b className="purple"> Max Tegmark's Life 3.0. </b>
              </i>
              <br />
              <br />
              I believe in  
              <i>
                <b className="purple"> God </b>
              </i>
              , but everything else should come with 
              <i>
                <b className="purple"> Data. </b>
              </i>
              <br />
              <br />I love to play football and I like listening to movie scores, specially by
              <i>
                <b className="purple"> Hans Zimmer. </b>
              </i>
              <br />
              <br />
              Lastly, I love learning. Every day I push myself to learn something new, whether that be about &nbsp;
              <i>
                <b className="purple">machine learning, software engineering, or miscellaneous facts about the universe. </b> 
              </i>
              <br />
              <br/>
              Currently, I am a graduate student studying  
              <i>
                <b className="purple"> Data Science from Northeastern University. </b>
              </i>
               I am looking for 
               <i>
                <b className="purple"> Data Science or Machine Learning Internships / Co-op starting from January 2024.  </b>
              </i> 
              <br />
              <br/>
              My expertise lies in developing 
              <i>
                <b className="purple"> full-stack data products from scratch and deploying it to cloud platforms. </b>
              </i> 

              <br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PratikHotchandani22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pratik-hotchandani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pratikhotchandani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:pratikhotchandani22@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <HiOutlineMail />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

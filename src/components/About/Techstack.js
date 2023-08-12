import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiStreamlit,
  SiTableau,
  SiPowerbi,
  SiApachehadoop,
  SiApachespark
} from "react-icons/si";
import RIcon from '../../Images/r (1).png';
import ML from '../../Images/classification.png';
import DL from '../../Images/deep-learning.png';
import NLP from '../../Images/nlp.png';
import CV from '../../Images/visualization.png';
import { ReactComponent as CSharp } from '../../Images/csharp-original.svg';
import { FcStatistics } from "react-icons/fc";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <h5>python</h5>
        <DiPython alt="Python" textAnchor="Python"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h5>R Programming</h5>
        <img src={RIcon} alt="R Language" width="50" height="50" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>SQL</h5>
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Tableau</h5>
        <SiTableau />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Power BI</h5>
        <SiPowerbi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Statistical Analysis</h5>
        <FcStatistics />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h5>Machine Learning</h5>
        <img src={ML} alt="R Language" width="70" height="70" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h5>Deep Learning</h5>
        <img src={DL} alt="Deep Learning" width="70" height="70" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h5>Natural Language Processing</h5>
        <img src={NLP} alt="NLP" width="70" height="70" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h5>Computer Vision</h5>
        <img src={CV} alt="CV" width="70" height="70" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Apache Hadoop</h5>
        <SiApachehadoop />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Apache Spark</h5>
        <SiApachespark />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>MongoDb</h5>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Git</h5>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Streamlit</h5>
        <SiStreamlit />
      </Col>


    </Row>
  );
}

export default Techstack;



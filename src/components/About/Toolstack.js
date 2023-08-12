import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMicrosoftazure,
  SiAmazonaws,
} from "react-icons/si";
import anaconda from '../../Images/anaconda-original.svg';
import gcp from '../../Images/googlecloud-original.svg';
import jupyter from '../../Images/jupyter-original.svg';
import kaggle from '../../Images/kaggle-original.svg';
import pycharm from '../../Images/pycharm-original.svg';
import rstudio from '../../Images/rstudio-original.svg';


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
      <h5>Microsoft Azure</h5>
        <SiMicrosoftazure />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>AWS</h5>
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>GCP</h5>
      <img src={gcp} alt="R Language" width="50" height="50" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <h5>Anaconda</h5>
        <img src={anaconda} alt="anaconda" width="50" height="50" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Jupyter Notebooks</h5>
        <img src={jupyter} alt="jupyter notebook" width="50" height="50" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Kaggle</h5>
        <img src={kaggle} alt="kaggle" width="50" height="50" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Pycharm</h5>
        <img src={pycharm} alt="jupyter notebook" width="50" height="50" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <h5>R Studios</h5>
        <img src={rstudio} alt="jupyter notebook" width="50" height="50" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <h5>Visual Studio</h5>
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <h5>Postman</h5>
        <SiPostman />
      </Col>

    </Row>
  );
}

export default Toolstack;

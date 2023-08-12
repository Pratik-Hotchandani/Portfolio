import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import barcaDS from "../../Assets/Projects/barca-ds.png";
import journeyMap from "../../Assets/Projects/journeyMap.png";
import ArguSense from "../../Assets/Projects/ArguSense.jpeg";
import parkinsons from "../../Assets/Projects/parkinsons.png";
import timeSeries from "../../Assets/Projects/timeSeries.png";
import deepLearning from "../../Assets/Projects/deeplearning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArguSense}
              isBlog={false}
              title="ArguSense: Elevating Argument Evaluation using NLP"
              description="Automated writing feedback tools often struggle to accurately identify key
               writing structures, such as thesis statements, claims, and supporting evidence, 
               in essays. This project aims to enhance automated writing feedback by developing a 
               model that accurately recognizes various writing components. By utilizing deep learning
                techniques and natural language processing (NLP), the project creates a model capable of
                analyzing text and identifying different writing components with varying levels of accuracy."
              ghLink="https://github.com/PratikHotchandani22/ArguSense"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barcaDS}
              isBlog={false}
              title="Football Data Hub: Unveiling the Beautiful Game's Data Story"
              description="Elevate football analysis with Football Data Hub's dynamic web app.
               Uncover insights, harness 'Expected Threat (xT)' metric, and engage through 
               interactive visualizations and OpenAI-powered chatbot."
              ghLink="https://github.com/PratikHotchandani22/Barca"
              demoLink="https://barca-ds.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinsons}
              isBlog={false}
              title="Parkinson's Disease Progression Prediction"
              description="Leveraged machine learning to forecast disease progression using CSF protein data.
               Achieved accurate predictions, revealing key severity indicators and aiding future research.
                Evaluated model efficacy through MSE and SMAPE, enhancing methodology selection."
              ghLink="https://github.com/PratikHotchandani22/Parkinsons-Disease-Progression-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeSeries}
              isBlog={false}
              title="Time Series Data Analysis"
              description="Forecasting S&P 500 Market Index: Utilized diverse models including SARIMA, ETS, 
              GARCH, and Prophet. Applied SARIMA for stationary time series and transformed non-stationary 
              time series with success. Robust EDA enriched model building, yielding accurate predictions.
               Employed data science and quantitative techniques to inform institutional clients about 
               market behavior and derivative opportunities."
              ghLink="https://github.com/PratikHotchandani22/TimeSeriesModels/tree/main/Statistical_Modeling_for_Time_Series_Forecasting-master"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepLearning}
              isBlog={false}
              title="Deep Learning Helper Kit"
              description="Streamline your deep learning projects with this comprehensive repository of essential 
              helper code. From data preprocessing to model evaluation, find functions and utilities designed 
              to save time and enhance efficiency. Simplify complex tasks and focus on innovation,
              accelerating your journey to impactful results."
              ghLink="https://github.com/PratikHotchandani22/DeepLearning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journeyMap}
              isBlog={false}
              title="JourneyMap: Your ultimate route planner for seamless itineraries"
              description="Our project offers a comprehensive solution to the complex task of planning optimal 
              travel routes. Leveraging graph algorithms and Maps API, we empower travelers to efficiently
               explore destinations. By employing minimum spanning tree algorithms, we craft efficient 
               routes, minimizing travel distance. Real-time data integration and interactive map
                visualization enrich the user experience, allowing for personalized and well-organized 
                travel itineraries."
              ghLink="https://github.com/PratikHotchandani22/ItineraryRoutePlanner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Pratik Hotchandani </span>
            from <span className="purple"> Boston, MA, USA.</span>
            <br/>
            <br /> I am a graduate student pursuing an <span className="purple"> MS
            in Data Science </span>  at <span className="purple"> Northeastern University. </span>  
             Expected graduation <span className="purple"> May 2025. </span> 
             <br/>
            <br/>Additionally, I am currently employed as a <span className="purple">  Graduate Teaching Assistant </span>  at
            <span className="purple"> Northeastern University </span> for the course <span className="purple"> DS 2000 Programming With Data. </span> 
            <br />
            <br />
            Apart from developing <span className="purple">  data products</span>, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Non-Fiction books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out, Swimming.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling, exploring different cuisines.
            </li>
            <li className="about-activity">
              <ImPointRight /> Petting every cat I meet on the streets.
            </li>
            <li className="about-activity">
              <ImPointRight /> Keeping data first approach.
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

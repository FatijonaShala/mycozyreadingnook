import React from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"; // Correct import

const Layout = ({ children, imageSrc, changeAmbientSpace }) => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Row>
          <Col xs={6} md={6}>
            <p className="shuffle-button" onClick={changeAmbientSpace}>
              change ambience
              <FontAwesomeIcon
                icon={faBookOpen}
                className="shuffle-button-icon"
                onClick={changeAmbientSpace}
              />
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <section>{children[0]}</section>
          </Col>

          <Col xs={12} sm={12} md={4}>
            <div className="image-container">
              <img
                src={imageSrc}
                alt="Illustration of the ambient space"
                className="img-fluid centered-image"
              />
            </div>
          </Col>

          <Col xs={12} sm={12} md={4}>
            <section className="content-section">{children[1]}</section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Layout;

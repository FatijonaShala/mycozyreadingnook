import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"; // Correct import

const Layout = ({ children, imageSrc, changeAmbientSpace }) => {
  const shuffleButtonStyle = {
    color: "#D27D56",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "17px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    backgroundColor: "transparent",
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <div className="shuffle-button-container">
              <Dropdown>
                <Dropdown.Toggle variant="link" style={shuffleButtonStyle}>
                  change ambience
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="shuffle-button-icon"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item as={Link} to="/">
                    Reading nook
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/coffeeShop">
                    Coffee Shop
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/library">
                    Public Library
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/seaside">
                    Seaside Retreat
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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

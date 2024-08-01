import React from "react";
import { Row, Col } from "react-bootstrap";
import AmbiancePlayer from "./components/AmbiancePlayer";
function CoffeeShop() {
  return (
    <div className="app-container">
      <div className="content-container">
        <Row>
          <Col xs={12} sm={12} md={4}>
            <section>
              <div className="web-brand">
                <h1 className="display-2 smaller-text">my cozy Coffee Shop</h1>
                <p className="lead">Grab a coffee and stay to read awhile.</p>
              </div>

              <iframe
                src="https://open.spotify.com/embed/playlist/2s9R059mmdc8kz6lrUqZZd?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowfullscreen=""
                allow=" encrypted-media"
                loading="lazy"
              ></iframe>
            </section>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className="image-container">
              <img
                src="images/coffee.png"
                alt="Illustration of a coffee shop"
                className="img-fluid centered-image"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <section className="content-section">
              <AmbiancePlayer src="/audio/rain.mp3" title="rainy day" />
              <AmbiancePlayer src="/audio/sunny.mp3" title="sunny day" />
              <AmbiancePlayer
                src="/audio/turning-pages.mp3"
                title="turning pages"
              />
              <AmbiancePlayer
                src="/audio/fireplace.mp3"
                title="fireplace crackling"
              />
              <AmbiancePlayer
                src="/audio/typing-keyboard.mp3"
                title="typing on keyboard"
              />
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CoffeeShop;

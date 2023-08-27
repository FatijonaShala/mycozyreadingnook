import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AmbiancePlayer from './components/AmbiancePlayer';
import './App.css';
import Playlist from './components/Playlist';

function Homepage() {
  return (
    <div className="app-container">
      {/* <div className="content-container"> */}
        <Row>
          <Col>
              <Playlist/>
          </Col>


          <Col>
            <section>
              <img
                src="images/nook1upd.png"   
                alt="Illustration of a reading nook"
                className="img-fluid centered-image"    
              />
            </section>
          </Col>
          <Col>
            <section className="content-section">
               <AmbiancePlayer src="/audio/rain.mp3" title="rainy day" />           
               <AmbiancePlayer src="/audio/sunny.mp3" title="sunny day" />
               <AmbiancePlayer src="/audio/turning-pages.mp3" title="turning pages" />
              <AmbiancePlayer src="/audio/fireplace.mp3" title="fireplace crackling" />
             <AmbiancePlayer src="/audio/typing-keyboard.mp3" title="typing on keyboard" /> 
            </section>
          </Col>
        </Row>
      {/* </div> */}
    </div>
  );
}

export default Homepage;



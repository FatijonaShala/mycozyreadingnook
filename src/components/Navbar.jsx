import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Navbar = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleShowAboutModal = () => {
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={handleShowAboutModal}>
                About
              </a>
            </li>
          </ul>
           <Modal
            show={showAboutModal}
            onHide={handleCloseAboutModal}
            dialogClassName="modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title className="cozy-title display-6" style={{marginLeft:'334px'}}>About</Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">  
             
              <p className="lead">
                Step into the embrace of your very own reading nook, a sanctuary
                that captures the essence of a home library - a refuge of
                comfort, discovery, and relaxation. Within the virtual pages of
                My Cozy Reading Nook, you're invited to rediscover the pleasure
                of reading. Whether you're diving into a captivating novel or even taking a
                well-deserved catnap, this nook is here to celebrate those
                treasured moments.
              </p>
              <p className="lead">
                My Cozy Reading Nook is a tribute to the joy of reading and the
                comfort of a home library and it's a nod to projects like
                <a href="https://imissmycafe.com/"> IMissMyCafe</a>, 
                <a href="http://imissmybar.com/"> IMissMyBar</a>, and
                <a href="https://imisstheoffice.eu/"> IMissMyOffice</a>.. 
                The sounds that
                accompany your reading journey are sourced from  <a href="https://www.zapsplat.com/"> ZapSplat</a>, code and illustration have been crafted by <a href="https://fatijonashala.github.io/"> Fatijona Shala</a>.
              </p>{" "}
              <p className="lead">
                So, as you curl up with a good book and let the world outside
                fade away, let My Cozy Reading Nook remind you of the joys of
                finding solace, adventure, and inspiration within the pages of
                your favorite reads...
              </p>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

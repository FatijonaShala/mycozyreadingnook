import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { UilMoon, UilSun } from "@iconscout/react-unicons";
import { useDarkMode } from "../Context/DarkModeContext";

const Navbar = ({ changeAmbientSpace }) => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  const handleShowAboutModal = () => {
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  return (
    <nav className={`custom-navbar ${darkMode ? "dark-mode" : ""}`}>
      {/* <ul className="navbar-nav left-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={changeAmbientSpace}>
            Shuffle Space
          </a>
        </li>
      </ul> */}
      <ul className="navbar-nav right-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={handleShowAboutModal}>
            About
          </a>
        </li>
        <li className="nav-item">
          <i className="nav-link" onClick={handleDarkModeToggle}>
            {darkMode ? <UilSun /> : <UilMoon />}
          </i>
        </li>
      </ul>

      <Modal
        show={showAboutModal}
        onHide={handleCloseAboutModal}
        dialogClassName={`modal-lg ${darkMode ? "dark-mode" : ""}`}
      >
        <Modal.Header
          closeButton
          className={`custom-modal-header ${darkMode ? "dark-mode" : ""}`}
        >
          <Modal.Title
            className={`cozy-title display-6 ${darkMode ? "dark-mode " : ""}`}
            style={{ marginLeft: "0px" }}
          >
            About
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`custom-modal-body ${darkMode ? "dark-mode" : ""}`}
        >
          <p className="lead">
            Step into the embrace of your very own reading nook, a sanctuary
            that captures the essence of a home library - a refuge of comfort,
            discovery, and relaxation. Within the virtual pages of My Cozy
            Reading Nook, you're invited to rediscover the pleasure of reading.
            Whether you're diving into a captivating novel or even taking a
            well-deserved catnap, this nook is here to celebrate those treasured
            moments.
          </p>
          <p className="lead">
            My Cozy Reading Nook is a tribute to the joy of reading and the
            comfort of a home library and it's a nod to projects like
            <a href="https://imissmycafe.com/"> IMissMyCafe</a>,
            <a href="http://imissmybar.com/"> IMissMyBar</a>, and
            <a href="https://imisstheoffice.eu/"> IMissMyOffice</a>. The sounds
            that accompany your reading journey are sourced from{" "}
            <a href="https://www.zapsplat.com/"> ZapSplat</a>, code and
            illustration have been crafted by{" "}
            <a href="https://fatijonashala.github.io/"> Fatijona Shala</a>.
          </p>
          <p className="lead">
            So, as you curl up with a good book and let the world outside fade
            away, let My Cozy Reading Nook remind you of the joys of finding
            solace, adventure, and inspiration within the pages of your favorite
            reads...
          </p>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Navbar;

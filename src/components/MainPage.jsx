import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MainStyle.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Link_it</h1>
        {/* <p className="hero-description"> */}
        <p className="feature-description">
          Linkit is an innovative web application designed to <strong>synchronize the system clipboard </strong>
          across multiple devices, regardless of the operating system. Whether you're working on Windows, macOS,
          or Linux, Linkit ensures that your copied text, links, and snippets are instantly available on all connected devices.
        </p>
        {/* <p className="hero-description">
          <strong>Key Features:</strong> <br />
          ✅ <strong>Cross-Platform Clipboard Sync</strong> – Copy text on one device and instantly paste it on another. <br />
          ✅ <strong>Secure File Transfer</strong> – Easily upload and download files between connected systems. <br />
          ✅ <strong>Seamless Integration</strong> – Works in the background without interrupting your workflow. <br />
          ✅ <strong>Fast & Reliable</strong> – Real-time sync ensures zero delays in data transfer. <br />
          ✅ <strong>End-to-End Encryption</strong> – Keep your data secure while transferring between devices.
        </p> */}
        <div className="button-container">
          <Link to="/welcomepage" className="cta-button primary no-underline"> 
            Get Started
          </Link>
        </div>
      </header>

      <section className="features">
        <div className="feature-item">
          <h2 className="feature-title">Amazing Features</h2>
          <p className="feature-description">
            Our platform offers a range of incredible features that make it easy to use and explore.
          </p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">User-Friendly</h2>
          <p className="feature-description">
            A sleek and simple interface that anyone can get used to in no time.
          </p>
        </div>
      </section>

      {/* <section className="footer">
        <p>&copy; 2025 Linkit. All Rights Reserved.</p>
      </section> */}
    </div>
  );
};

export default MainPage;

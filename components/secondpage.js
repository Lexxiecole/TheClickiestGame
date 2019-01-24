import React from "react";

const HelloBootstrap = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          
    <div className="jumbotron">
      <h1>Your Project</h1>
      <p>
        Enim culpa tempor magna nulla consectetur est occaecat.
      </p>
    </div>
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">proident.</h3>
      </div>
      <div className="card-body">
        <p className="card-text">
          Al
        </p>
      </div>
    </div>
  </div>
);

export default HelloBootstrap;

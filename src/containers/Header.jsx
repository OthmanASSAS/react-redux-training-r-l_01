import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ressources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Connexion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(Header);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {Link} from 'react-router-dom';

class Header extends Component {
    onClickAuthentification = () => {
        this.props.setAuthentification(!this.props.isLoggedIn)
    }

    renderAuthentificationLabel = () => {
       return this.props.isLoggedIn ? "Déconnexion":"Connexion"
    }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ressources">
                Ressources
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.onClickAuthentification}>
              {this.renderAuthentificationLabel()}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentification.isLoggedIn
    }
};

export default connect(
  mapStateToProps,
  actions
)(Header);

import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class RequireAuthentification extends Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }

    componentDidUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent />;
    }
  }

  const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn
  });
  return connect(mapStateToProps)(RequireAuthentification);
};

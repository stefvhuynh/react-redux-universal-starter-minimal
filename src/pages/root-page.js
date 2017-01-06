import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class Root extends Component {
  renderAnchors() {
    const { links, onLinkClick } = this.props;

    return links.map((link) => {
      return (
        <a
          key={`anchor-${link.label}-${link.path}`}
          onClick={onLinkClick.bind(null, link.path)}
        >
          {link.label}
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Root Page</h1>
        {this.renderAnchors()}
        <br/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  () => {
    return {
      links: [
        { label: "About", path: "about" },
        { label: "Todos", path: "todos" }
      ]
    };
  },
  (dispatch) => {
    return {
      onLinkClick: (path) => dispatch(push(path))
    };
  }
)(Root);
